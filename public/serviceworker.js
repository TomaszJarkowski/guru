/* eslint-disable array-callback-return */
/* eslint-disable no-console */
const CACHE_NAME = 'version-1';
const urlsToCache = ['index.html', 'offline.html'];

const self = this;

self.addEventListener('install', (event) => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE_NAME);
            console.log('[Service Worker] Caching all: app shell and content');
            await cache.addAll(urlsToCache);
        })()
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        (async () => {
            try {
                const r = await caches.match(event.request);
                console.log(`[Service Worker] Fetching resource: ${event.request.url}`);
                if (r) {
                    return r;
                }
                const response = await fetch(event.request);
                const cache = await caches.open(CACHE_NAME);
                console.log(`[Service Worker] Caching new resource: ${event.request.url}`);
                cache.put(event.request, response.clone());
                return response;
            } catch (e) {
                caches.match('offline.html');
            }
        })()
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (key === CACHE_NAME) {
                        return;
                    }
                    return caches.delete(key);
                })
            );
        })
    );
});
