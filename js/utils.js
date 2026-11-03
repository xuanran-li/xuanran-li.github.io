export function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

export function journalUrl(id) {
  return `#/journal/${encodeURIComponent(id)}`;
}

export function parseRoute(hash) {
  const [path, query = ''] = (hash.replace(/^#/, '') || '/').split('?');
  const parts = path.split('/').filter(Boolean);
  let id = '';
  try { id = decodeURIComponent(parts[1] || ''); } catch { return { page: 'not-found', id, params: new URLSearchParams(query) }; }
  const validDepth = parts[0] === 'journal' ? parts.length === 2 : parts.length <= 1;
  return { page: validDepth ? parts[0] || 'home' : 'not-found', id, params: new URLSearchParams(query) };
}

export function filterEntries(entries, { category, city = 'all', search = '' } = {}) {
  const query = search.trim().toLocaleLowerCase();
  return entries.filter((entry) => (!category || entry.category === category)
    && (city === 'all' || entry.cityId === city)
    && (!query || [entry.title, entry.city, entry.country, entry.excerpt, ...(entry.tags || [])].join(' ').toLocaleLowerCase().includes(query)));
}
