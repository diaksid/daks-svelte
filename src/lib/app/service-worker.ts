// based on https://github.com/tretapey/svelte-pwa/blob/master/public/service-worker.js
import { build, files, version } from '$service-worker';

const worker: any = self;
const CACHE_NAME = `static-cache-${version}`;

const toCache = build.concat(files);

worker.addEventListener('install', (event: any) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(toCache);
      worker.skipWaiting();
    })
  );
});

worker.addEventListener('activate', (event: any) => {
  // Remove previous cached data from disk
  event.waitUntil(
    caches.keys().then(async (keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  worker.clients.claim();
});

self.addEventListener('fetch', (event: any) => {
  if (event.request.mode !== 'navigate') return;
  else
    event.respondWith(
      fetch(event.request).catch(async () => {
        const cache = await caches.open(CACHE_NAME);
        return await cache.match('offline.html');
      })
    );
});
