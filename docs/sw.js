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
    "url": "/_nuxt/49f4530.js",
    "revision": "3b43a87ad707d99c51ad7f0d1fbf48ce"
  },
  {
    "url": "/_nuxt/7cbf029.js",
    "revision": "1bc5321302a1c9f501fc99004a22e530"
  },
  {
    "url": "/_nuxt/9147692.js",
    "revision": "360ff45ca37d954b6d161b41ea9998b4"
  },
  {
    "url": "/_nuxt/95bef32.js",
    "revision": "1b3a30142c2f4a1b37989c2eb8222fd5"
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
