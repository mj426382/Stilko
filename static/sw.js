importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.6739d83.js",
    "revision": "2ebf79e4e6a5c8c6e25a544f13aa9aa3"
  },
  {
    "url": "/_nuxt/pages/index.2f51b40.js",
    "revision": "ab0eea62ae5855d319e81933f1532801"
  },
  {
    "url": "/_nuxt/pages/sec.e8f37b0.js",
    "revision": "c26f2bf299e7c651e261e9f06c0541e7"
  },
  {
    "url": "/_nuxt/runtime.4b3e2a7.js",
    "revision": "a28269bde321b6621b99b80d6f9e5ff9"
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
