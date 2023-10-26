importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4eb4e57.js",
    "revision": "3aaf147ff976923f1ecead99bdfb2442"
  },
  {
    "url": "/_nuxt/7939d0c.js",
    "revision": "24f8711cc7dfb27571df894af54cf947"
  },
  {
    "url": "/_nuxt/97bc1f8.js",
    "revision": "2980885895ed1756bd3300e5bd0eb524"
  },
  {
    "url": "/_nuxt/c0e1b7e.js",
    "revision": "adf609c80e0bc40e896e6ea4310b64ad"
  },
  {
    "url": "/_nuxt/ccb9641.js",
    "revision": "a269577d97e7a65c1622bf70103f6fd1"
  },
  {
    "url": "/_nuxt/f1a518b.js",
    "revision": "3d0441c79d8c03c7c526fb4728a4ab7a"
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
