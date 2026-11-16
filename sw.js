/* Start Deutsch 1 Trainer – service worker.
   Saves the whole app on the phone so it opens instantly and works offline.
   The version changes with every build, so a new upload replaces the old cache. */
const CACHE = 'sd1-7b612a2424';
const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "config.js",
  "supabase.js",
  "nunito-latin-ext-wght-normal.woff2",
  "nunito-latin-wght-normal.woff2",
  "apple-touch-icon.png",
  "icon-192.png",
  "icon-512.png",
  "icon-maskable-512.png"
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('sd1-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (new URL(req.url).pathname.endsWith('/config.js')) {
    // Settings file: always try the network first so an edited config.js is picked up.
    e.respondWith(fetch(req).then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put('config.js', copy)); } return res; }).catch(() => caches.match('config.js')));
    return;
  }
  if (req.mode === 'navigate') {
    // Open from the cache straight away (offline-first); refresh the copy in the background.
    e.respondWith(caches.open(CACHE).then(async c => {
      const cached = await c.match('index.html');
      const fresh = fetch(req).then(res => { if (res.ok) c.put('index.html', res.clone()); return res; }).catch(() => null);
      return cached || (await fresh) || new Response('Offline', { status: 503 });
    }));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req)));
});
