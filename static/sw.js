importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0c1f475.js",
    "revision": "842e54b9bfe1d2d517d8dbb129a60bc6"
  },
  {
    "url": "/_nuxt/2ab2ea1.js",
    "revision": "f44216f32df9ab5cf9d3b103a6de82df"
  },
  {
    "url": "/_nuxt/9147692.js",
    "revision": "360ff45ca37d954b6d161b41ea9998b4"
  },
  {
    "url": "/_nuxt/9401cb1.js",
    "revision": "4346d8a34748334bb7093cd7967c9388"
  },
  {
    "url": "/_nuxt/95bef32.js",
    "revision": "1b3a30142c2f4a1b37989c2eb8222fd5"
  },
  {
    "url": "/_nuxt/9b0b68f.js",
    "revision": "82819866bf5b7da58fbbedf75daf4a75"
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
