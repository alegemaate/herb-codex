import { version } from "$app/env";
import { assets, immutable, prerendered } from "$app/manifest";
import { self } from "$app/service-worker";

const CACHE = `herbcodex-${version}`;
const IMAGE_CACHE = "herbcodex-images";
const IMAGE_HOST = "storage.googleapis.com";
// Image responses are opaque (no CORS), and browsers pad their size in the
// storage quota, so keep only the most recent ones.
const MAX_IMAGES = 60;

// The site is fully prerendered, so every page can work offline.
// Manifest paths are relative to the base path, e.g. "plants/burdock/".
const PRECACHE = [...immutable, ...assets, ...prerendered].map(
  (f) => new URL(f.path, self.registration.scope).pathname,
);

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE && key !== IMAGE_CACHE)
            .map((key) => caches.delete(key)),
        ),
      ),
  );
});

/** Serve images from cache, and fill the cache on a miss. */
const cachedImage = async (request: Request) => {
  const cache = await caches.open(IMAGE_CACHE);
  const cached = await cache.match(request);
  if (cached) {
    return cached;
  }
  const response = await fetch(request);
  if (response.ok || response.type === "opaque") {
    await cache.put(request, response.clone());
    const keys = await cache.keys();
    await Promise.all(
      keys.slice(0, -MAX_IMAGES).map((key) => cache.delete(key)),
    );
  }
  return response;
};

/** Use the network, and fall back to the cache when offline. */
const networkFirst = async (request: Request) => {
  const cache = await caches.open(CACHE);
  try {
    const response = await fetch(request);
    if (response.ok) {
      await cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }
    throw error;
  }
};

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  // Plant photos are cached as people view them.
  if (url.hostname === IMAGE_HOST) {
    event.respondWith(cachedImage(request));
    return;
  }

  if (url.origin !== self.location.origin) {
    return;
  }

  if (PRECACHE.includes(url.pathname) && !request.headers.has("range")) {
    event.respondWith(
      caches
        .open(CACHE)
        .then((cache) => cache.match(url.pathname))
        .then((cached) => cached ?? networkFirst(request)),
    );
    return;
  }

  event.respondWith(networkFirst(request));
});
