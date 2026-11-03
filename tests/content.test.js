import test from 'node:test';
import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';
import { categories, entries, imageCredits, entryUrl } from '../js/data.js';
import { filterEntries, journalUrl, parseRoute, escapeHtml } from '../js/utils.js';

const siteRoot = new URL('../', import.meta.url);
const han = /\p{Script=Han}/u;

test('every journal entry belongs to a valid city and has usable map and article data', () => {
  const ids = new Set(entries.map((entry) => entry.id));
  const categoryIds = new Set(categories.map((category) => category.id));
  const cities = new Map(entries.filter((entry) => entry.category === 'cities').map((entry) => [entry.id, entry]));
  assert.equal(ids.size, entries.length, 'entry IDs must be unique');
  assert.equal(categoryIds.size, categories.length, 'category IDs must be unique');
  for (const entry of entries) {
    assert.match(entry.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, entry.id);
    assert.ok(categoryIds.has(entry.category), `${entry.id}: unknown category`);
    const city = cities.get(entry.cityId);
    assert.ok(city, `${entry.id}: missing parent city`);
    assert.equal(entry.city, city.city, `${entry.id}: city name mismatch`);
    assert.equal(entry.country, city.country, `${entry.id}: country mismatch`);
    if (entry.category === 'cities') assert.equal(entry.cityId, entry.id);
    assert.equal(entry.coordinates.length, 2);
    assert.ok(entry.coordinates.every(Number.isFinite));
    assert.ok(Math.abs(entry.coordinates[0]) <= 90 && Math.abs(entry.coordinates[1]) <= 180);
    assert.ok(Number.isFinite(entry.rating) && entry.rating >= 0 && entry.rating <= 5);
    assert.ok(Number.isFinite(Date.parse(`${entry.date}T12:00:00Z`)), `${entry.id}: invalid article date`);
    for (const label of [entry.title, entry.city, entry.country, entry.subtitle, ...entry.tags]) {
      assert.ok(label?.length && !han.test(label), `${entry.id}: titles and labels should be English`);
    }
    assert.ok(han.test(entry.excerpt), `${entry.id}: missing Chinese excerpt`);
    assert.ok(entry.content.length > 0, `${entry.id}: empty article`);
    for (const section of entry.content) {
      assert.ok(section.heading && !han.test(section.heading));
      assert.ok(section.paragraphs.length > 0 && section.paragraphs.every((paragraph) => han.test(paragraph)), `${entry.id}: missing Chinese body`);
    }
  }
});

test('all cover and gallery photos exist locally and have source metadata', async () => {
  const creditedImages = new Set(imageCredits.map((credit) => credit.file));
  const photos = new Set(entries.flatMap((entry) => [entry.image, ...(entry.gallery || []).map((photo) => photo.src)]));
  for (const photo of photos) {
    assert.ok(creditedImages.has(photo), `${photo}: missing image credit`);
    await access(new URL(photo, siteRoot));
  }
});

test('every city, card and map record can resolve through the same journal URL', () => {
  for (const entry of entries) {
    const hash = journalUrl(entry.id);
    assert.equal(entryUrl(entry), hash, `${entry.id}: inconsistent URL helper`);
    const route = parseRoute(hash);
    assert.equal(route.page, 'journal');
    assert.equal(entries.find((record) => record.id === route.id), entry);
  }
  const home = parseRoute('#/?place=kamo-river-coffee');
  assert.equal(home.page, 'home');
  assert.equal(home.params.get('place'), 'kamo-river-coffee');
  assert.equal(parseRoute('').page, 'home');
  assert.equal(parseRoute('#/food').page, 'food');
  assert.equal(parseRoute('#/journal/kyoto/extra').page, 'not-found');
  assert.equal(parseRoute('#/journal/%E0%A4').page, 'not-found');
  assert.equal(parseRoute('#/food/extra').page, 'not-found');
});

test('combined category, city and search filters keep only matching records', () => {
  assert.deepEqual(filterEntries(entries, { category: 'food', city: 'kyoto', search: ' COFFEE ' }).map((entry) => entry.id), ['kamo-river-coffee']);
  assert.deepEqual(filterEntries(entries, { category: 'food', city: 'paris', search: 'COFFEE' }), []);
  assert.deepEqual(filterEntries(entries, { category: 'stays', city: 'copenhagen' }).map((entry) => entry.id), ['copenhagen-city-stay']);
  assert.deepEqual(filterEntries(entries, { category: 'food', search: '没有安排' }).map((entry) => entry.id), ['kamo-river-coffee']);
  assert.deepEqual(filterEntries(entries, { search: 'this-place-does-not-exist' }), []);
  assert.deepEqual(filterEntries(entries, { search: '   ' }), entries);
});

test('article text is escaped before insertion into HTML templates', () => {
  assert.equal(escapeHtml('<script>"A&B"</script>'), '&lt;script&gt;&quot;A&amp;B&quot;&lt;/script&gt;');
  assert.equal(escapeHtml("Traveller's notes"), 'Traveller&#39;s notes');
});
