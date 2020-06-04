importScripts("./workbox-v4.3.1/workbox-sw.js");

workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  // Cache image files.
  /\.(?:png|jpg|jpeg|svg|webp|svg|mp3|ico)$/,
  // Use the cache if it's available.
  new workbox.strategies.CacheFirst({
    // Use a custom cache name.
    cacheName: "image-cache",
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images.
        maxEntries: 1000,
        // Cache for a maximum of a week.
        maxAgeSeconds: 365 * 24 * 60 * 60,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  // Cache image files.
  /\.(?:js|css|html)$/,
  // Use the cache if it's available.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: "static-cache",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 1000,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  /\.(?:json)$/,
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: "json-cache",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 1000,
        maxAgeSeconds: 24 * 60 * 60,
      }),
    ],
  })
);
