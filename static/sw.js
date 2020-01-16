importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/368be6c08148a6322e9d.js",
    "revision": "fec42126450befc11d3a751df0b87d6d"
  },
  {
    "url": "/_nuxt/4ba349ea364dfd38e615.js",
    "revision": "f692107b3880f5d492e77550eb8a38d1"
  },
  {
    "url": "/_nuxt/8f6173e535342629bb9b.js",
    "revision": "dd1af2d039b74ae68975c757a4b3bf65"
  },
  {
    "url": "/_nuxt/aaff9347bc28f0b392c8.js",
    "revision": "2ddedb7661a49bdd39840f8c3fa1c0fb"
  },
  {
    "url": "/_nuxt/b62e52602326b29b09ed.js",
    "revision": "d7761735836798b9ace10f9fcc7d5d4e"
  },
  {
    "url": "/_nuxt/f70054d4bfc3c2f3045b.js",
    "revision": "15e002f62d421d3d97c6ba02de476a79"
  }
], {
  "cacheId": "Stilko",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
