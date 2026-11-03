import { mapConfig } from './config.js';

const categories = {
  cities: { color: '#305b46', label: 'Cities', symbol: '●' },
  food: { color: '#ae6646', label: 'Food & Drink', symbol: '◆' },
  plans: { color: '#68849a', label: 'Travel Plans', symbol: '↗' },
  stays: { color: '#b49754', label: 'Accommodations', symbol: '⌂' },
};
let googleLoader;
let googleAuthorizationFailed = false;
const googleAuthSubscribers = new Set();
let originalAuthFailure;
let sharedAuthFailure;

function subscribeToGoogleAuthFailure(callback) {
  if (!googleAuthSubscribers.size) {
    originalAuthFailure = window.gm_authFailure;
    sharedAuthFailure = () => {
      googleAuthorizationFailed = true;
      [...googleAuthSubscribers].forEach(subscriber => subscriber());
      if (typeof originalAuthFailure === 'function') originalAuthFailure();
    };
    window.gm_authFailure = sharedAuthFailure;
  }
  googleAuthSubscribers.add(callback);
  return () => {
    googleAuthSubscribers.delete(callback);
    if (!googleAuthSubscribers.size && window.gm_authFailure === sharedAuthFailure) {
      window.gm_authFailure = originalAuthFailure;
    }
  };
}

function injectMapStyles() {
  if (document.getElementById('travel-map-styles')) return;
  const style = document.createElement('style');
  style.id = 'travel-map-styles';
  style.textContent = `
    .travel-map-canvas{background:#e8ede7;font-family:inherit;isolation:isolate;z-index:0}
    .travel-map-canvas .leaflet-control-attribution{font:10px/1.6 Arial,sans-serif;background:rgba(255,255,255,.88);color:#545f55}
    .travel-map-canvas .leaflet-control-attribution a{color:#305b46}
    .travel-map-canvas .leaflet-control-zoom{border:1px solid #d6ddd2;border-radius:9px;overflow:hidden;box-shadow:0 3px 12px #203b1510}
    .travel-map-canvas .leaflet-control-zoom a{width:34px;height:34px;line-height:34px;background:#fffefa;color:#305b46}
    .travel-pin-wrap{background:none;border:0;overflow:visible}
    .travel-pin{display:flex;position:relative;align-items:center;justify-content:center;width:30px;height:30px;border:3px solid #fffefa;border-radius:50%;background:var(--pin-color,#305b46);color:#fffefa;box-shadow:0 2px 8px #253c3b35;cursor:pointer;font:700 13px/1 Arial,sans-serif;transition:transform .18s}
    .travel-pin:hover,.travel-pin-wrap:focus-visible .travel-pin{transform:scale(1.15)}
    .travel-pin-label{position:absolute;top:34px;left:50%;transform:translateX(-50%);white-space:nowrap;color:#294b3d;font:600 11px/1.4 Arial,sans-serif;text-shadow:0 1px 2px white,1px 0 2px white,-1px 0 2px white;pointer-events:none}
    .travel-map-canvas .leaflet-popup-content-wrapper{border-radius:13px;overflow:hidden;padding:0;background:#fffefa;box-shadow:0 8px 30px #233d2525}
    .travel-map-canvas .leaflet-popup-content{margin:0;width:var(--travel-popup-width,248px)!important;line-height:1.5}
    .travel-map-canvas .leaflet-popup-close-button{z-index:2;top:7px;right:7px;width:25px;height:25px;border-radius:50%;background:#fffefa;color:#243e31;font-size:20px;box-shadow:0 1px 5px #0002}
    .travel-map-canvas .leaflet-popup-tip{background:#fffefa}
    .travel-popup{width:var(--travel-popup-width,248px);max-width:calc(100vw - 60px);color:#263e31;font-family:Arial,'PingFang SC','Microsoft YaHei',sans-serif}
    .travel-popup img{display:block;width:100%;height:128px;object-fit:cover;background:#dce5d9}
    .travel-popup-body{padding:15px 17px 17px}
    .travel-popup-category{display:block;margin-bottom:5px;color:#777d71;text-transform:uppercase;letter-spacing:1.6px;font-size:9px}
    .travel-popup h3{margin:0 0 5px;font-family:Georgia,serif;font-size:21px;line-height:1.2;font-weight:400;color:#263e31}
    .travel-popup-location{display:flex;flex-wrap:wrap;justify-content:space-between;gap:5px;font-size:10px;color:#767c71}
    .travel-popup-rating{color:#8b723a;white-space:nowrap}
    .travel-popup p{margin:11px 0 12px;font-size:11px;line-height:1.9;color:#677063}
    .travel-popup a{display:inline-block;color:#305b46;font-size:11px;font-weight:600;text-decoration:none;border-bottom:1px solid #b5c4b5;padding-bottom:3px}
    .travel-popup a:focus-visible{outline:2px solid #305b46;outline-offset:4px}
    .travel-map-notice{max-width:240px;padding:9px 12px;background:#fffefaeb;border:1px solid #dbe0d5;border-radius:7px;color:#64715d;font:11px/1.5 Arial,sans-serif;box-shadow:0 2px 10px #203b1510}
    .travel-map-unavailable{height:100%;display:flex;align-items:center;justify-content:center;padding:30px;text-align:center;color:#52644e;font-size:14px}
    @media(max-width:640px){.travel-popup img{height:90px}.travel-popup-body{padding:11px 14px 13px}.travel-popup h3{font-size:18px}.travel-popup p{margin:8px 0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.travel-map-canvas .leaflet-popup-scrolled{border:0}}
    @media(prefers-reduced-motion:reduce){.travel-pin{transition:none}}
  `;
  document.head.append(style);
}

function validEntries(entries) {
  return entries.filter(entry => Array.isArray(entry.coordinates)
    && entry.coordinates.length === 2
    && entry.coordinates.every(Number.isFinite)
    && Math.abs(entry.coordinates[0]) <= 90
    && Math.abs(entry.coordinates[1]) <= 180);
}

function createPin(entry) {
  const type = categories[entry.category] || categories.cities;
  const pin = document.createElement('span');
  pin.className = 'travel-pin';
  pin.style.setProperty('--pin-color', type.color);
  pin.textContent = type.symbol;
  pin.setAttribute('aria-hidden', 'true');
  if (entry.category === 'cities') {
    const label = document.createElement('span');
    label.className = 'travel-pin-label';
    label.textContent = entry.title;
    pin.append(label);
  }
  return pin;
}

function popup(entry) {
  const wrapper = document.createElement('article');
  wrapper.className = 'travel-popup';
  const image = document.createElement('img');
  image.src = entry.image;
  image.alt = entry.title;
  image.loading = 'lazy';
  image.addEventListener('error', () => { image.hidden = true; }, { once: true });
  wrapper.append(image);
  const body = document.createElement('div');
  body.className = 'travel-popup-body';
  const label = document.createElement('span');
  label.className = 'travel-popup-category';
  label.textContent = (categories[entry.category] || categories.cities).label;
  const heading = document.createElement('h3');
  heading.textContent = entry.title;
  const meta = document.createElement('div');
  meta.className = 'travel-popup-location';
  const location = document.createElement('span');
  location.textContent = `${entry.city}, ${entry.country}`;
  const rating = document.createElement('span');
  rating.className = 'travel-popup-rating';
  rating.textContent = Number.isFinite(entry.rating) ? `★ ${entry.rating.toFixed(1)} / 5` : 'Not rated';
  meta.append(location, rating);
  const excerpt = document.createElement('p');
  excerpt.lang = 'zh-CN';
  excerpt.textContent = entry.excerpt;
  const link = document.createElement('a');
  link.href = `#/journal/${encodeURIComponent(entry.id)}`;
  link.textContent = 'Read story ↗';
  link.setAttribute('aria-label', `Read ${entry.title}`);
  body.append(label, heading, meta, excerpt, link);
  wrapper.append(body);
  return wrapper;
}

function initializeLeaflet(container, initialEntries) {
  const L = window.L;
  if (!L) throw new Error('Leaflet could not be loaded.');
  const map = L.map(container, {
    center: [35, 70], zoom: 3, minZoom: 0, maxZoom: 19,
    zoomControl: true, scrollWheelZoom: false, worldCopyJump: true,
  });
  map.zoomControl.setPosition('bottomright');
  const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
  }).addTo(map);
  let loadedTiles = 0;
  let failedTiles = 0;
  let tileNotice;
  tiles.on('tileload', () => {
    loadedTiles += 1;
    if (tileNotice) { tileNotice.remove(); tileNotice = null; }
  });
  tiles.on('tileerror', () => {
    failedTiles += 1;
    if (failedTiles < 4 || loadedTiles || tileNotice) return;
    tileNotice = L.control({ position: 'bottomleft' });
    tileNotice.onAdd = () => {
      const note = L.DomUtil.create('div', 'travel-map-notice');
      note.textContent = 'The map background is unavailable. Your saved places are still clickable.';
      return note;
    };
    tileNotice.addTo(map);
  });
  const markers = new Map();
  let currentEntries = [];
  let resizeObserver;
  const popupOptions = () => {
    const size = map.getSize();
    const width = Math.min(248, Math.max(180, size.x - 28));
    container.style.setProperty('--travel-popup-width', `${width}px`);
    return {
      maxWidth: width, minWidth: width, maxHeight: Math.max(140, size.y - 96),
      autoPanPaddingTopLeft: [10, 45], autoPanPaddingBottomRight: [10, 14],
      className: 'travel-map-popup', closeButton: true,
    };
  };
  map.on('popupopen', event => {
    Object.assign(event.popup.options, popupOptions());
    event.popup.update();
  });
  const controller = {
    provider: 'leaflet',
    setEntries(entries) {
      markers.forEach(marker => marker.remove());
      markers.clear();
      currentEntries = validEntries(entries);
      currentEntries.forEach(entry => {
        const marker = L.marker(entry.coordinates, {
          icon: L.divIcon({ html: createPin(entry), className: 'travel-pin-wrap', iconSize: [30, 30], iconAnchor: [15, 15], popupAnchor: [0, -18] }),
          title: `${entry.title} — ${entry.city}, ${entry.country}`,
          alt: `Open ${entry.title}`, keyboard: true, riseOnHover: true,
          zIndexOffset: entry.category === 'cities' ? 100 : 0,
        }).addTo(map);
        marker.bindPopup(() => popup(entry), popupOptions());
        markers.set(entry.id, marker);
      });
    },
    reset() {
      map.closePopup();
      if (!currentEntries.length) { map.setView([35, 70], 3); return; }
      const size = map.getSize();
      map.fitBounds(currentEntries.map(entry => entry.coordinates), {
        padding: [Math.min(60, Math.max(20, size.x * 0.08)), Math.min(60, Math.max(24, size.y * 0.12))],
        maxZoom: 5, animate: false,
      });
    },
    focus(id) {
      const marker = markers.get(id);
      if (!marker) return;
      // Set the zoom before opening the popup so its automatic pan uses the
      // final viewport, including on a short mobile map.
      map.setView(marker.getLatLng(), 11, { animate: false });
      marker.openPopup();
    },
    destroy() { resizeObserver?.disconnect(); map.remove(); },
  };
  controller.setEntries(initialEntries);
  controller.reset();
  resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => {
    map.invalidateSize({ pan: false });
    const options = popupOptions();
    markers.forEach(marker => {
      const boundPopup = marker.getPopup();
      Object.assign(boundPopup.options, options);
      if (boundPopup.isOpen()) boundPopup.update();
    });
  }) : null;
  resizeObserver?.observe(container);
  return controller;
}

function loadGoogleMaps() {
  if (window.google?.maps?.importLibrary) return Promise.resolve(window.google.maps);
  if (googleLoader) return googleLoader;
  googleLoader = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    const callback = '__travelBlogGoogleReady';
    const cleanup = () => { clearTimeout(timeout); delete window[callback]; };
    const timeout = setTimeout(() => {
      cleanup(); script.remove(); reject(new Error('Google Maps timed out.'));
    }, 10000);
    window[callback] = () => { cleanup(); resolve(window.google.maps); };
    script.src = `https://maps.googleapis.com/maps/api/js?${new URLSearchParams({
      key: mapConfig.googleMapsApiKey, callback, loading: 'async',
      language: mapConfig.language || 'en', v: 'weekly', libraries: 'marker',
    })}`;
    script.async = true;
    script.addEventListener('error', () => { cleanup(); reject(new Error('Google Maps could not be loaded.')); }, { once: true });
    document.head.append(script);
  });
  return googleLoader;
}

async function initializeGoogle(container, initialEntries, isCancelled = () => false) {
  await loadGoogleMaps();
  if (isCancelled()) throw new Error('Google Maps initialization was cancelled.');
  const [{ Map: GoogleMap, InfoWindow }, { AdvancedMarkerElement }, { LatLngBounds }] = await Promise.all([
    google.maps.importLibrary('maps'), google.maps.importLibrary('marker'), google.maps.importLibrary('core'),
  ]);
  if (isCancelled()) throw new Error('Google Maps initialization was cancelled.');
  const map = new GoogleMap(container, {
    center: { lat: 35, lng: 70 }, zoom: 3, minZoom: 0,
    mapId: mapConfig.googleMapsMapId || 'DEMO_MAP_ID',
    gestureHandling: 'cooperative', mapTypeControl: false, streetViewControl: false,
    fullscreenControl: false, zoomControl: true,
  });
  const infoWindow = new InfoWindow({ maxWidth: 270 });
  const markers = new Map();
  let currentEntries = [];
  let boundsZoomListener;
  const controller = {
    provider: 'google',
    setEntries(entries) {
      infoWindow.close();
      markers.forEach(({ marker }) => { marker.map = null; google.maps.event.clearInstanceListeners(marker); });
      markers.clear();
      currentEntries = validEntries(entries);
      currentEntries.forEach(entry => {
        const marker = new AdvancedMarkerElement({
          map, position: { lat: entry.coordinates[0], lng: entry.coordinates[1] },
          title: `${entry.title} — ${entry.city}, ${entry.country}`, content: createPin(entry),
          zIndex: entry.category === 'cities' ? 100 : 0,
        });
        marker.addListener('click', () => {
          infoWindow.setContent(popup(entry));
          infoWindow.open({ map, anchor: marker });
        });
        markers.set(entry.id, { marker, entry });
      });
    },
    reset() {
      infoWindow.close();
      if (boundsZoomListener) google.maps.event.removeListener(boundsZoomListener);
      if (!currentEntries.length) { map.setCenter({ lat: 35, lng: 70 }); map.setZoom(3); return; }
      if (currentEntries.length === 1) {
        map.setCenter({ lat: currentEntries[0].coordinates[0], lng: currentEntries[0].coordinates[1] });
        map.setZoom(5); return;
      }
      const bounds = new LatLngBounds();
      currentEntries.forEach(entry => bounds.extend({ lat: entry.coordinates[0], lng: entry.coordinates[1] }));
      map.fitBounds(bounds, Math.min(60, Math.max(20, container.clientWidth * 0.08)));
      boundsZoomListener = google.maps.event.addListenerOnce(map, 'idle', () => { if (map.getZoom() > 5) map.setZoom(5); });
    },
    focus(id) {
      const item = markers.get(id);
      if (!item) return;
      if (boundsZoomListener) google.maps.event.removeListener(boundsZoomListener);
      map.setCenter(item.marker.position); map.setZoom(11);
      infoWindow.setContent(popup(item.entry)); infoWindow.open({ map, anchor: item.marker });
    },
    destroy() {
      infoWindow.close();
      markers.forEach(({ marker }) => { marker.map = null; google.maps.event.clearInstanceListeners(marker); });
      google.maps.event.clearInstanceListeners(map);
      container.replaceChildren();
    },
  };
  controller.setEntries(initialEntries);
  controller.reset();
  return controller;
}

/**
 * The provider adapter shares the same entries and journal URLs everywhere.
 * Loading and authorization failures automatically use the local Leaflet map.
 */
export async function createTravelMap(container, entries, options = {}) {
  injectMapStyles();
  container.classList.add('travel-map-canvas');
  let adapter;
  let destroyed = false;
  let currentEntries = entries;
  let cancelGoogleAttempt = false;
  let unsubscribeAuthFailure;
  const notify = () => options.onProviderChange?.(adapter.provider);
  const fallback = () => {
    if (destroyed || adapter?.provider === 'leaflet') return;
    cancelGoogleAttempt = true;
    adapter?.destroy();
    container.replaceChildren();
    try {
      adapter = initializeLeaflet(container, currentEntries);
    } catch {
      const message = document.createElement('div');
      message.className = 'travel-map-unavailable';
      message.textContent = 'The map is unavailable. Explore the city list below to read every story.';
      container.append(message);
      adapter = { provider: 'unavailable', setEntries() {}, reset() {}, focus() {}, destroy() { container.replaceChildren(); } };
    }
    notify();
  };
  if (mapConfig.googleMapsApiKey.trim() && !googleAuthorizationFailed) {
    let rejectAuthFailure;
    let initializationTimer;
    const initializationFailure = new Promise((resolve, reject) => {
      rejectAuthFailure = reject;
      initializationTimer = setTimeout(() => {
        cancelGoogleAttempt = true;
        reject(new Error('Google Maps initialization timed out.'));
      }, 12000);
    });
    unsubscribeAuthFailure = subscribeToGoogleAuthFailure(() => {
      cancelGoogleAttempt = true;
      if (adapter?.provider === 'google') fallback();
      else rejectAuthFailure(new Error('Google Maps authorization failed.'));
    });
    try {
      adapter = await Promise.race([
        initializeGoogle(container, currentEntries, () => cancelGoogleAttempt),
        initializationFailure,
      ]);
      notify();
    } catch { fallback(); }
    finally { clearTimeout(initializationTimer); }
  } else { fallback(); }
  return {
    get provider() { return adapter.provider; },
    setEntries(nextEntries) { if (!destroyed) { currentEntries = nextEntries; adapter.setEntries(nextEntries); } },
    reset() { if (!destroyed) adapter.reset(); },
    focus(id) { if (!destroyed) adapter.focus(id); },
    destroy() {
      if (destroyed) return;
      destroyed = true;
      cancelGoogleAttempt = true;
      adapter.destroy();
      unsubscribeAuthFailure?.();
    },
  };
}
