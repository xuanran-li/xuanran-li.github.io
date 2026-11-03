export function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

export function journalUrl(id) {
  return `#/journal/${encodeURIComponent(id)}`;
}

// 国家/地区显示名称与旗帜；新增国家时在这里补充，原始 country 值用于筛选。
const countryFlags = new Map([
  ['China', '🇨🇳'], ['Hong Kong SAR', '🇭🇰'], ['Macau SAR', '🇲🇴'],
  ['Vietnam', '🇻🇳'], ['Cambodia', '🇰🇭'], ['Thailand', '🇹🇭'],
  ['Laos', '🇱🇦'], ['Singapore', '🇸🇬'], ['Malaysia', '🇲🇾'], ['Brunei', '🇧🇳'],
]);

export function countryLabel(country = '') {
  const name = String(country ?? '');
  const flag = countryFlags.get(name);
  return flag ? `${flag} ${name}` : name;
}

// Google Maps 外链与详情页小地图共用同一个查询；也可在 data.js 单独填写分享链接。
function mapsQuery(entry) {
  return entry.googleMapsQuery?.trim()
    || [entry.category === 'cities' ? '' : entry.title, entry.city, entry.country].filter(Boolean).join(', ');
}

function validGoogleMapsUrl(value, embed = false) {
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.username || url.password) return '';
    const mapsHost = ['google.com', 'www.google.com', 'maps.google.com'].includes(url.hostname);
    if (embed) return mapsHost && url.pathname.startsWith('/maps/embed') ? url.href : '';
    const isMapsPage = mapsHost && (url.pathname === '/maps' || url.pathname.startsWith('/maps/') || url.hostname === 'maps.google.com');
    const isShareLink = url.hostname === 'maps.app.goo.gl' || (url.hostname === 'goo.gl' && url.pathname.startsWith('/maps/'));
    return isMapsPage || isShareLink ? url.href : '';
  } catch { return ''; }
}

export function googleMapsUrl(entry) {
  return validGoogleMapsUrl(entry.googleMapsUrl)
    || `https://www.google.com/maps/search/?${new URLSearchParams({ api: '1', query: mapsQuery(entry) })}`;
}

export function googleMapsEmbedUrl(entry) {
  // googleMapsEmbedUrl 可粘贴 Google Maps → Share → Embed a map 中 iframe 的 src。
  return validGoogleMapsUrl(entry.googleMapsEmbedUrl, true)
    || `https://www.google.com/maps?${new URLSearchParams({ q: mapsQuery(entry), output: 'embed', hl: 'en', z: entry.category === 'cities' ? '11' : '14' })}`;
}

export function parseRoute(hash) {
  const [path, query = ''] = (hash.replace(/^#/, '') || '/').split('?');
  const parts = path.split('/').filter(Boolean);
  // 保留旧分类书签，所有新链接均使用 #/attractions。
  if (parts[0] === 'plans') parts[0] = 'attractions';
  let id = '';
  try { id = decodeURIComponent(parts[1] || ''); } catch { return { page: 'not-found', id, params: new URLSearchParams(query) }; }
  const validDepth = parts[0] === 'journal' ? parts.length === 2 : parts.length <= 1;
  return { page: validDepth ? parts[0] || 'home' : 'not-found', id, params: new URLSearchParams(query) };
}

export function filterEntries(entries, { category, country = 'all', city = 'all', search = '' } = {}) {
  const query = search.trim().toLocaleLowerCase();
  return entries.filter((entry) => (!category || entry.category === category)
    && (country === 'all' || entry.country === country)
    && (city === 'all' || entry.cityId === city)
    && (!query || [entry.title, entry.city, entry.country, entry.excerpt, ...(entry.tags || [])].join(' ').toLocaleLowerCase().includes(query)));
}
