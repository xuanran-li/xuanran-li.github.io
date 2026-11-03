import test from 'node:test';
import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';
import { categories, entries, imageCredits, entryUrl } from '../js/data.js';
import { filterEntries, journalUrl, parseRoute, escapeHtml, googleMapsUrl, googleMapsEmbedUrl, countryLabel } from '../js/utils.js';

const siteRoot = new URL('../', import.meta.url);
const han = /\p{Script=Han}/u;
const latin = /\p{Script=Latin}/u;

// The city index should keep the owner's requested names and order.
const requestedCities = [
  ['合肥', '中国'], ['芜湖', '中国'], ['南京', '中国'], ['黄山', '中国'],
  ['阜阳', '中国'], ['杭州', '中国'], ['广州', '中国'], ['深圳', '中国'],
  ['惠州', '中国'], ['东莞', '中国'], ['泰安', '中国'], ['佛山', '中国'],
  ['昆明', '中国'], ['香港', '香港特别行政区'], ['澳门', '澳门特别行政区'],
  ['岘港', '越南'], ['会安', '越南'], ['芽庄', '越南'], ['胡志明市', '越南'],
  ['金边', '柬埔寨'], ['马德望', '柬埔寨'], ['暹粒', '柬埔寨'],
  ['贡布', '柬埔寨'], ['西哈努克港', '柬埔寨'], ['曼谷', '泰国'],
  ['叻丕', '泰国'], ['大城', '泰国'], ['彭世洛', '泰国'],
  ['素可泰', '泰国'], ['孔敬', '泰国'], ['乌隆他尼', '泰国'],
  ['万象', '老挝'], ['万荣', '老挝'], ['琅勃拉邦', '老挝'],
  ['新加坡', '新加坡'], ['新山', '马来西亚'], ['马六甲', '马来西亚'],
  ['吉隆坡', '马来西亚'], ['槟城', '马来西亚'], ['古晋', '马来西亚'],
  ['美里', '马来西亚'], ['纳闽', '马来西亚'], ['斯里巴加湾市', '文莱'],
];

test('the requested cities keep their exact names, country labels and order', () => {
  const cities = entries.filter((entry) => entry.category === 'cities');
  assert.deepEqual(cities.map(({ city, country }) => [city, country]), requestedCities);
  assert.deepEqual(categories.map(({ id, label }) => [id, label]), [
    ['cities', '城市'], ['attractions', '胜地'],
    ['food', '饮食'], ['stays', '膳宿'],
  ]);
  assert.equal(entries.length, requestedCities.length * 4);
  for (const city of cities) {
    for (const category of categories) {
      assert.equal(entries.filter((entry) => entry.cityId === city.id && entry.category === category.id).length, 1,
        `${city.id}: expected one ${category.label} example`);
    }
  }
});

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
      assert.ok(label?.length && han.test(label) && !latin.test(label), `${entry.id}: titles and labels should be Chinese`);
    }
    assert.ok(han.test(entry.excerpt), `${entry.id}: missing Chinese excerpt`);
    assert.ok(entry.content.length > 0, `${entry.id}: empty article`);
    for (const section of entry.content) {
      assert.ok(section.heading && han.test(section.heading) && !latin.test(section.heading));
      assert.ok(section.paragraphs.length > 0 && section.paragraphs.every((paragraph) => han.test(paragraph)), `${entry.id}: missing Chinese body`);
    }
  }
});

test('all displayed journal content and map queries use Chinese', () => {
  const displayedText = categories.flatMap(({ label, singular, description }) => [label, singular, description]);
  for (const entry of entries) {
    displayedText.push(entry.title, entry.city, entry.country, entry.subtitle, entry.imageAlt, entry.excerpt,
      entry.googleMapsQuery, ...entry.tags,
      ...entry.content.flatMap(({ heading, paragraphs }) => [heading, ...paragraphs]),
      ...(entry.gallery || []).flatMap(({ alt, caption }) => [alt, caption].filter(Boolean)));
  }
  for (const text of displayedText) {
    assert.ok(text && han.test(text) && !latin.test(text), `untranslated visible text: ${text}`);
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
  const home = parseRoute('#/?place=hefei-food');
  assert.equal(home.page, 'home');
  assert.equal(home.params.get('place'), 'hefei-food');
  assert.equal(parseRoute('').page, 'home');
  assert.equal(parseRoute('#/food').page, 'food');
  assert.equal(parseRoute('#/attractions').page, 'attractions');
  assert.equal(parseRoute('#/plans').page, 'attractions');
  assert.equal(parseRoute('#/journal/hefei/extra').page, 'not-found');
  assert.equal(parseRoute('#/journal/%E0%A4').page, 'not-found');
  assert.equal(parseRoute('#/food/extra').page, 'not-found');
});

test('combined category, city and search filters keep only matching records', () => {
  assert.deepEqual(filterEntries(entries, { category: 'food', city: 'hefei', search: ' 合肥 ' }).map((entry) => entry.id), ['hefei-food']);
  assert.deepEqual(filterEntries(entries, { category: 'food', city: 'wuhu', search: '合肥' }), []);
  assert.deepEqual(filterEntries(entries, { category: 'stays', city: 'singapore' }).map((entry) => entry.id), ['singapore-stay']);
  assert.deepEqual(filterEntries(entries, { category: 'attractions', city: 'bandar-seri-begawan' }).map((entry) => entry.id), ['bandar-seri-begawan-attraction']);
  assert.equal(filterEntries(entries, { category: 'food', search: '咖啡' }).length, requestedCities.length);
  assert.deepEqual(filterEntries(entries, { search: 'this-place-does-not-exist' }), []);
  assert.deepEqual(filterEntries(entries, { search: '   ' }), entries);
});

test('country filters include every matching city and combine with category and search', () => {
  const chineseCities = filterEntries(entries, { category: 'cities', country: '中国' });
  assert.equal(chineseCities.length, 13);
  assert.ok(chineseCities.some(({ id }) => id === 'hefei'));
  assert.ok(chineseCities.some(({ id }) => id === 'kunming'));
  assert.ok(chineseCities.every(({ country }) => country === '中国'));
  assert.equal(filterEntries(entries, { country: '中国' }).length, 52);
  const malaysiaStays = filterEntries(entries, { category: 'stays', country: '马来西亚' });
  assert.deepEqual(malaysiaStays.map(({ city }) => city), ['新山', '马六甲', '吉隆坡', '槟城', '古晋', '美里', '纳闽']);
  assert.deepEqual(filterEntries(entries, { category: 'attractions', country: '泰国', search: ' 曼谷 ' }).map(({ id }) => id), ['bangkok-attraction']);
  assert.deepEqual(filterEntries(entries, { category: 'food', country: '马来西亚', search: '合肥' }), []);
  assert.deepEqual(filterEntries(entries, { category: 'cities', country: '香港特别行政区' }).map(({ id }) => id), ['hong-kong']);
  assert.deepEqual(filterEntries(entries, { country: 'unknown-country' }), []);
  assert.deepEqual(filterEntries(entries, { country: 'all', search: '   ' }), entries);
  assert.deepEqual(filterEntries(entries, { category: 'food', country: 'all', search: '' }), entries.filter(({ category }) => category === 'food'));
});

test('country labels show the corresponding flags and preserve unknown names', () => {
  const expected = [
    ['中国', '🇨🇳 中国'], ['香港特别行政区', '🇭🇰 香港特别行政区'], ['澳门特别行政区', '🇲🇴 澳门特别行政区'],
    ['越南', '🇻🇳 越南'], ['柬埔寨', '🇰🇭 柬埔寨'], ['泰国', '🇹🇭 泰国'],
    ['老挝', '🇱🇦 老挝'], ['新加坡', '🇸🇬 新加坡'], ['马来西亚', '🇲🇾 马来西亚'], ['文莱', '🇧🇳 文莱'],
  ];
  for (const [country, label] of expected) assert.equal(countryLabel(country), label);
  assert.equal(countryLabel('New country'), 'New country');
  assert.equal(countryLabel('toString'), 'toString');
  assert.equal(countryLabel(), '');
});

test('article text is escaped before insertion into HTML templates', () => {
  assert.equal(escapeHtml('<script>"A&B"</script>'), '&lt;script&gt;&quot;A&amp;B&quot;&lt;/script&gt;');
  assert.equal(escapeHtml("Traveller's notes"), 'Traveller&#39;s notes');
});

test('every city and place has a matching Google Maps search link and embedded map', () => {
  for (const entry of entries) {
    assert.ok(entry.googleMapsQuery?.trim(), `${entry.id}: missing map query`);
    const link = new URL(googleMapsUrl(entry));
    assert.equal(link.origin, 'https://www.google.com');
    assert.equal(link.pathname, '/maps/search/');
    assert.equal(link.searchParams.get('api'), '1');
    assert.equal(link.searchParams.get('query'), entry.googleMapsQuery);
    const embed = new URL(googleMapsEmbedUrl(entry));
    assert.equal(embed.origin, 'https://www.google.com');
    assert.equal(embed.searchParams.get('output'), 'embed');
    assert.equal(embed.searchParams.get('q'), entry.googleMapsQuery);
    assert.equal(embed.searchParams.get('hl'), 'zh-CN');
  }
});

test('map queries preserve punctuation and allow exact Google Maps share links', () => {
  const entry = { category: 'food', title: 'Tea & Coffee', city: 'Hefei', country: 'China', googleMapsQuery: '茶 & Coffee, Hefei, China' };
  assert.equal(new URL(googleMapsUrl(entry)).searchParams.get('query'), entry.googleMapsQuery);
  assert.equal(new URL(googleMapsEmbedUrl(entry)).searchParams.get('q'), entry.googleMapsQuery);
  for (const shareLink of [
    'https://www.google.com/maps/place/Hefei/',
    'https://maps.google.com/?q=Hefei',
    'https://maps.app.goo.gl/example',
    'https://goo.gl/maps/example',
  ]) {
    assert.equal(googleMapsUrl({ ...entry, googleMapsUrl: shareLink }), shareLink);
  }
  const embedUrl = 'https://www.google.com/maps/embed?pb=example';
  assert.equal(googleMapsEmbedUrl({ ...entry, googleMapsEmbedUrl: embedUrl }), embedUrl);
  const withoutQuery = { ...entry, googleMapsQuery: '' };
  assert.equal(new URL(googleMapsUrl(withoutQuery)).searchParams.get('query'), 'Tea & Coffee, Hefei, China');
  assert.equal(new URL(googleMapsUrl({ ...withoutQuery, category: 'cities' })).searchParams.get('query'), 'Hefei, China');
});

test('invalid map overrides fall back to generated Google Maps URLs', () => {
  const entry = { category: 'cities', city: 'Hefei', country: 'China', googleMapsQuery: 'Hefei, China' };
  for (const invalid of [
    'javascript:alert(1)',
    'http://www.google.com/maps/place/Hefei/',
    'https://google.com.example.org/maps/place/Hefei/',
    'https://example.org/maps/place/Hefei/',
    'https://user:password@www.google.com/maps/place/Hefei/',
    'not a URL',
  ]) {
    assert.equal(googleMapsUrl({ ...entry, googleMapsUrl: invalid }), googleMapsUrl(entry));
    assert.equal(googleMapsEmbedUrl({ ...entry, googleMapsEmbedUrl: invalid }), googleMapsEmbedUrl(entry));
  }
  assert.equal(googleMapsEmbedUrl({ ...entry, googleMapsEmbedUrl: 'https://www.google.com/maps/place/Hefei/' }), googleMapsEmbedUrl(entry));
});
