import { entries, categories } from './data.js';
import { createTravelMap } from './map.js';
import { escapeHtml as esc, journalUrl, parseRoute, filterEntries, countryLabel, googleMapsUrl, googleMapsEmbedUrl } from './utils.js';

// 页面职责：首页 renderHome、分类 renderCollection、城市/地点详情 renderArticle。
// 正文、照片、评分和 Google Maps 链接在 cities/data_<城市>_<国家>.js 中修改。
// 首页底部精选：把这里的 ID 改成任何已有记录 ID（城市 ID + -food / -stay / -attraction）。
const featuredIds = ['da-nang-food', 'da-nang-attraction', 'singapore-stay'];

// 首页文案：诗歌保留原有分行；标题、作者与正文可在这里分别编辑。
const siteName = "十一十一's Travel Blog";
const homeThemes = ['历史', '人文', '社会', '纪实', '穷游指南'];
const homePoem = {
  title: '礼物',
  lines: [
    '如此幸福的一天。',
    '雾一早就散了，我在花园里干活。',
    '蜂乌停在忍冬花上，',
    '这世上没有一样东西我想占有。',
    '我知道没有一个人值得我羡慕。',
    '任何我曾遭受的不幸，我都已忘记。',
    '想到故我今我同为一人并不使人难为情。',
    '在我身上没有痛苦。',
    '直起腰来，我看见蓝色的大海和帆影。',
  ],
  author: '— [波兰] 切斯瓦夫•米沃什',
};

const icons = {
  pin: '<path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
  northeast: '<path d="M6 18 18 6M6 6h12v12"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8Z"/>',
  star: '<path d="m12 3 2.8 5.7 6.3.9-4.6 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  reset: '<path d="M3 10a9 9 0 1 1 2 8M3 4v6h6"/>',
  chevron: '<path d="m9 6 6 6-6 6"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 11h18"/>',
  globe: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18M5 6h14M5 18h14"/>',
  food: '<path d="M5 3v7m3-7v7m3-7v7M5 7h6M8 10v11m9-18c-3 4-3 8 1 9V3m0 9v9"/>',
  attractions: '<path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2V5Zm6-2v16m6-14v16"/>',
  stays: '<path d="M3 20V9m18 11V9M3 17h18M6 9V5h12v4M3 10h18v7H3v-7Z"/>',
};
const icon = (name, size = 16) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.pin}</svg>`;
const categoryIcon = { cities: 'globe', food: 'food', attractions: 'attractions', stays: 'stays' };
const categoryColors = { cities: '#305b46', food: '#ae6646', attractions: '#68849a', stays: '#b49754' };
const descriptions = {
  cities: '用脚步认识一座城市，记下街角、河岸，以及那些让人想再去一次的瞬间。',
  food: '一杯咖啡、一家小店、一顿慢慢吃的晚餐。用味道记住每一次出发。',
  attractions: '值得停留的风景、街区与文化地标，记下每座城市里想去的地方。',
  stays: '旅途中暂时的家：一扇好看的窗、一张舒服的床，以及醒来后的第一束光。',
};
const cities = entries.filter((entry) => entry.category === 'cities');
// 城市索引固定按评分降序排列；同分时保留数据清单顺序，不影响其他视图。
const rankedCities = [...cities].sort((first, second) => second.rating - first.rating);
const main = document.querySelector('#main');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-navigation');
let activeMap = null;
let routeVersion = 0;
let mapCategory = 'all';
let collectionFilters = { country: 'all', search: '' };

function categoryLabel(id) { return categories.find((category) => category.id === id)?.label || '游记'; }
function location(entry) { return `${entry.city}，${entry.country}`; }
function cardLocation(entry) { return entry.category === 'cities' ? countryLabel(entry.country) : `${entry.city} · ${countryLabel(entry.country)}`; }
function dot(category) { return `<span class="category-dot" style="--category-color:${categoryColors[category]}"></span>`; }
function rating(entry) { return `${icon('star', 12)} ${Number(entry.rating).toFixed(1)}`; }
function image(entry, className = '', lazy = true) {
  return `<img class="${className}" src="${esc(entry.image)}" alt="${esc(entry.imageAlt || entry.title)}" ${lazy ? 'loading="lazy"' : 'fetchpriority="high"'} decoding="async" />`;
}
function card(entry) {
  return `<a class="story-card" href="${journalUrl(entry.id)}" aria-label="${esc(entry.title)} — ${esc(location(entry))}，评分 ${entry.rating}，满分 5 分">
    <div class="card-image-wrap">${image(entry, 'card-image')}<span class="card-type">${dot(entry.category)}${esc(categoryLabel(entry.category))}</span><span class="card-rating">${rating(entry)} <span>/ 5</span></span></div>
    <div class="card-content"><div class="card-location">${esc(cardLocation(entry))}</div><h3>${esc(entry.title)}</h3><p class="card-excerpt" lang="zh-CN">${esc(entry.excerpt)}</p><span class="card-read">阅读全文 ${icon('arrow', 13)}</span></div>
  </a>`;
}

function renderHome() {
  const countries = new Set(cities.map((city) => city.country)).size;
  const featured = featuredIds.map((id) => entries.find((entry) => entry.id === id)).filter(Boolean);
  main.innerHTML = `<div class="page home-page">
    <section class="home-intro" aria-labelledby="home-title">
      <div class="home-primary"><div class="eyebrow">行旅札记 · 山河远方</div><h1 id="home-title" lang="zh-CN">${homeThemes.map((theme) => `<span class="intro-theme">${esc(theme)}</span>`).join(' ')}</h1><div class="intro-stats"><div><strong>${cities.length.toString().padStart(2,'0')}</strong><span>城市</span></div><span class="stat-divider"></span><div><strong>${countries.toString().padStart(2,'0')}</strong><span>国家 / 地区</span></div></div></div>
      <div class="intro-aside"><section class="intro-poem" lang="zh-CN" aria-labelledby="poem-title"><h2 id="poem-title">${esc(homePoem.title)}</h2><p class="poem-lines">${homePoem.lines.map(esc).join('<br>')}</p><p class="poem-author">${esc(homePoem.author)}</p></section></div>
    </section>
    <section class="map-section" aria-labelledby="map-heading">
      <div class="section-top"><h2 id="map-heading" class="section-heading">${icon('compass',20)} 把足迹留在地图上。</h2><div class="map-filters" role="group" aria-label="筛选地图地点"><button class="filter-button" data-map-category="all" aria-pressed="true">全部地点</button>${categories.map((category) => `<button class="filter-button" data-map-category="${category.id}" aria-pressed="false">${dot(category.id)}${esc(category.label)}</button>`).join('')}</div></div>
      <div class="map-frame"><div class="map-canvas-wrap"><div id="travel-map" class="travel-map" role="region" aria-label="城市与收藏地点的交互地图"></div><button id="reset-map" class="map-reset" disabled>${icon('reset',12)} 重置视图</button></div>
      </div>
      <div class="map-footnote"><span>${icon('pin',11)} <span id="map-count">${entries.length} 个收藏地点</span> · 点击标记，阅读旅途故事</span><span id="map-provider" aria-live="polite">地图加载中…</span></div>
    </section>
    <section class="journal-section" aria-labelledby="city-list-heading"><div class="section-intro"><div><div class="eyebrow">城市索引</div><h2 id="city-list-heading">那些留在记忆里的城市。</h2></div><a class="text-link" href="#/cities">浏览全部城市 ${icon('arrow',14)}</a></div>
      <p id="city-list-hint" class="city-list-hint">按评分从高到低排列 · 显示 ${Math.min(10, cities.length)} 行，上下滚动浏览全部 ${cities.length} 座城市</p>
      <div class="city-list" role="region" tabindex="0" aria-labelledby="city-list-heading" aria-describedby="city-list-hint">${rankedCities.map((city,index) => `<a class="city-row" href="${journalUrl(city.id)}"><span class="city-index">${String(index+1).padStart(2,'0')}</span>${image(city,'city-thumb')}<div class="city-row-info"><h3>${esc(city.title)}</h3><p>${esc(countryLabel(city.country))}</p></div><span class="city-row-rating" aria-label="评分 ${city.rating}，满分 5 分">${rating(city)}</span>${icon('northeast',18).replace('<svg','<svg class="city-row-arrow"')}</a>`).join('')}</div>
    </section>
    <section class="journal-section home-stories" aria-labelledby="stories-heading"><div class="section-intro"><div><div class="eyebrow">旅途之间</div><h2 id="stories-heading">值得记住的小事。</h2></div><span class="tiny-label">一餐一宿，慢享旅途。</span></div><div class="card-grid">${featured.map(card).join('')}</div></section>
  </div>`;
}

async function initializeMap(version, focusId) {
  const container = document.querySelector('#travel-map');
  const map = await createTravelMap(container, entries, { onProviderChange(provider) {
    if (version !== routeVersion) return;
    const label = document.querySelector('#map-provider');
    if (label) label.textContent = provider === 'google' ? '谷歌地图' : provider === 'leaflet' ? '开放街图 · 预览' : '地图暂不可用';
  } });
  if (version !== routeVersion) { map.destroy(); return; }
  activeMap = map;
  // A filter may have been selected while the map provider was still loading.
  activeMap.setEntries(mapCategory === 'all' ? entries : filterEntries(entries, { category: mapCategory }));
  activeMap.reset();
  const reset = document.querySelector('#reset-map');
  if (reset) reset.disabled = map.provider === 'unavailable';
  if (focusId && entries.some((entry) => entry.id === focusId)) {
    map.focus(focusId);
    document.querySelector('.map-section')?.scrollIntoView({ behavior:'smooth', block:'start' });
  }
}

function renderCollection(category) {
  const items = entries.filter((entry) => entry.category === category.id);
  const relevantCountries = [...new Set(items.map((entry) => entry.country))];
  main.innerHTML = `<div class="page collection-page"><div class="breadcrumb"><a href="#/">总览</a>${icon('chevron',11)}<span>${esc(category.label)}</span></div>
    <section class="collection-hero"><div><div class="eyebrow">分类辑录 · ${String(categories.indexOf(category)+1).padStart(2,'0')}</div><h1>${esc(category.label)}<sup>${String(items.length).padStart(2,'0')}</sup></h1><p lang="zh-CN">${descriptions[category.id]}</p></div><div class="collection-art" aria-hidden="true">${icon(categoryIcon[category.id],44)}</div></section>
    <div class="collection-toolbar"><div class="collection-controls"><label class="search-field">${icon('search',15)}<input type="search" id="collection-search" placeholder="搜索地点…" aria-label="搜索${esc(category.label)}" /></label><select class="country-select" id="country-filter" aria-label="按国家或地区筛选"><option value="all">全部国家 / 地区</option>${relevantCountries.map((country) => `<option value="${esc(country)}">${esc(countryLabel(country))}</option>`).join('')}</select></div><span class="result-count" id="result-count" aria-live="polite"></span></div>
    <div id="collection-grid" class="card-grid"></div><p class="collection-note">${icon('compass',13)} 示例篇章 · 个人评分满分为 5 分，所有内容均为示例。</p>
  </div>`;
  updateCollection(category.id);
}

function updateCollection(category) {
  const items = filterEntries(entries, { category, ...collectionFilters });
  document.querySelector('#result-count').textContent = `共 ${items.length} 篇记录`;
  document.querySelector('#collection-grid').innerHTML = items.length ? items.map(card).join('') : `<div class="empty-state"><h2>没有找到相关地点</h2><p>试试其他国家或地区，或更换搜索词。</p><button class="solid-button" id="clear-filters">重置筛选 ${icon('reset',13)}</button></div>`;
}

// 所有城市和地点共用地图操作区；Google 预览不可用时仍保留两个独立链接。
function articleMap(entry) {
  return `<div class="article-map-actions">
    <a class="solid-button" href="#/?place=${encodeURIComponent(entry.id)}">${icon('pin',14)} 地图定位</a>
    <a class="solid-button google-maps-link" href="${esc(googleMapsUrl(entry))}" target="_blank" rel="noopener noreferrer">${icon('northeast',14)} 在谷歌地图中打开</a>
  </div>
  <div class="google-map-preview">
    <iframe title="谷歌地图预览 — ${esc(entry.title)}" src="${esc(googleMapsEmbedUrl(entry))}" width="250" height="220" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
    <p>谷歌地图 · ${entry.demo && entry.category !== 'cities' ? '示例地点 · 周边搜索' : esc(location(entry))}</p>
  </div>`;
}

function renderArticle(entry) {
  const related = entries.filter((item) => item.id !== entry.id && item.cityId === entry.cityId);
  const formattedDate = new Intl.DateTimeFormat('zh-CN',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(`${entry.date}T12:00:00Z`));
  main.innerHTML = `<article class="page article-page"><div class="breadcrumb"><a href="#/">总览</a>${icon('chevron',11)}<a href="#/${entry.category}">${esc(categoryLabel(entry.category))}</a>${icon('chevron',11)}<span>${esc(entry.title)}</span></div>
    <header class="article-header"><div class="eyebrow">${esc(categoryLabel(entry.category))} · 旅行札记</div><h1>${esc(entry.title)}</h1><p class="article-subtitle">${esc(entry.subtitle || '')}</p><div class="article-meta"><span>${icon('pin',13)}${esc(location(entry))}</span><span>${icon('calendar',13)}<time datetime="${esc(entry.date)}">${formattedDate}</time></span><small class="sample-badge">示例游记</small></div></header>
    ${image(entry,'article-cover',false)}<p class="article-caption">${esc(entry.imageAlt || entry.title)} · 示例配图</p>
    <div class="article-layout"><div class="article-body"><p class="article-lede" lang="zh-CN">${esc(entry.excerpt)}</p>${entry.content.map((section,index) => `<section class="article-section"><h2><small>${String(index+1).padStart(2,'0')}</small>${esc(section.heading)}</h2>${section.paragraphs.map((paragraph) => `<p lang="zh-CN">${esc(paragraph)}</p>`).join('')}</section>`).join('')}
      ${entry.gallery?.length ? `<div class="article-gallery">${entry.gallery.map((photo) => `<figure><img src="${esc(photo.src)}" alt="${esc(photo.alt)}" loading="lazy" /><figcaption>${esc(photo.caption || photo.alt)}</figcaption></figure>`).join('')}</div>` : ''}
      <a href="#/${entry.category}" class="text-link article-back">${icon('arrow',14).replace('<svg','<svg style="transform:rotate(180deg)"')} 返回${esc(categoryLabel(entry.category))}</a></div>
      <aside class="article-sidebar"><div class="details-box"><h2>旅行笔记</h2><dl><div class="detail-row"><dt>地点</dt><dd>${esc(location(entry))}</dd></div><div class="detail-row"><dt>我的评分 · 示例</dt><dd class="detail-rating">${icon('star',18)}<strong>${Number(entry.rating).toFixed(1)}</strong> / 5</dd></div><div class="detail-row"><dt>坐标</dt><dd>${entry.coordinates[0]>=0?'北纬':'南纬'} ${Math.abs(entry.coordinates[0]).toFixed(3)}°，${entry.coordinates[1]>=0?'东经':'西经'} ${Math.abs(entry.coordinates[1]).toFixed(3)}°</dd></div></dl>${articleMap(entry)}<div class="tags">${(entry.tags || []).map((tag)=>`<span class="tag">${esc(tag)}</span>`).join('')}</div></div></aside>
    </div>
    ${related.length ? `<section class="article-related"><div class="section-intro"><div><div class="eyebrow">继续探索</div><h2>${esc(entry.city)}的更多记录</h2></div></div><div class="card-grid">${related.map(card).join('')}</div></section>`:''}
  </article>`;
}

function renderNotFound() {
  main.innerHTML = `<div class="page not-found"><div class="eyebrow">旅途小岔路 · 404</div><h1>这条小路暂时没有记录。</h1><p>这篇游记尚未写下。</p><a href="#/" class="solid-button">返回地图 ${icon('arrow',14)}</a></div>`;
}

function closeMenu() { nav.classList.remove('is-open'); menuButton.setAttribute('aria-expanded','false'); menuButton.setAttribute('aria-label','打开导航'); }

async function renderRoute() {
  // Allow the accessibility skip link to target the current page without routing.
  if (locationHash() === '#main' && main.children.length) { main.focus(); return; }
  const version = ++routeVersion;
  activeMap?.destroy(); activeMap = null;
  const route = parseRoute(locationHash());
  const category = categories.find((item)=>item.id === route.page);
  const article = route.page === 'journal' ? entries.find((entry)=>entry.id === route.id) : null;
  closeMenu();
  mapCategory = 'all'; collectionFilters = { country:'all', search:'' };
  document.querySelectorAll('[data-nav]').forEach((link) => { const current = link.dataset.nav === (article?.category || route.page); if(current) link.setAttribute('aria-current','page'); else link.removeAttribute('aria-current'); });
  if (route.page === 'home') renderHome(); else if(category) renderCollection(category); else if(article) renderArticle(article); else renderNotFound();
  document.title = route.page === 'home' ? siteName : `${article?.title || category?.label || '页面未找到'} — ${siteName}`;
  window.scrollTo({top:0,behavior:'instant'});
  if (version > 1) main.focus({preventScroll:true});
  if (route.page === 'home') {
    try { await initializeMap(version, route.params.get('place')); }
    catch (error) { if (version === routeVersion) { const provider = document.querySelector('#map-provider'); if(provider) provider.textContent = '地图暂不可用，请浏览下方城市索引'; } console.error('旅行地图初始化失败：', error); }
  }
}

// Keep location display formatting independent from window.location.
function locationHash() { return window.location.hash; }

menuButton.addEventListener('click', () => {
  const opened = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(opened)); menuButton.setAttribute('aria-label', opened?'关闭导航':'打开导航'); nav.classList.toggle('is-open', opened);
});
document.addEventListener('keydown',(event)=>{ if(event.key==='Escape') closeMenu(); });
document.addEventListener('click',(event)=>{
  if (event.target.closest('.skip-link')) { event.preventDefault(); main.focus(); main.scrollIntoView(); return; }
  if (event.target.closest('#primary-navigation a')) closeMenu();
  const filter = event.target.closest('[data-map-category]');
  if (filter) {
    mapCategory = filter.dataset.mapCategory;
    const items = mapCategory === 'all' ? entries : filterEntries(entries, { category:mapCategory });
    document.querySelectorAll('[data-map-category]').forEach((button)=>button.setAttribute('aria-pressed',String(button === filter)));
    activeMap?.setEntries(items); activeMap?.reset();
    document.querySelector('#map-count').textContent = `${items.length} 个收藏地点`;
  }
  if (event.target.closest('#reset-map')) activeMap?.reset();
  if (event.target.closest('#clear-filters')) {
    collectionFilters = { country:'all', search:'' }; document.querySelector('#collection-search').value=''; document.querySelector('#country-filter').value='all'; updateCollection(parseRoute(locationHash()).page);
  }
});
document.addEventListener('input',(event)=>{ if(event.target.id === 'collection-search'){ collectionFilters.search=event.target.value; updateCollection(parseRoute(locationHash()).page); } });
document.addEventListener('change',(event)=>{ if(event.target.id === 'country-filter'){ collectionFilters.country=event.target.value; updateCollection(parseRoute(locationHash()).page); } });
document.addEventListener('error',(event)=>{ if(event.target instanceof HTMLImageElement) event.target.classList.add('image-failed'); },true);
window.addEventListener('hashchange',renderRoute);
renderRoute();
