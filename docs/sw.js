importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1eca96d.js",
    "revision": "27d332348ca80223b32df6aed6810d29"
  },
  {
    "url": "/_nuxt/3c7c1f4.js",
    "revision": "bc227f1d5167e99f20d524c9a1df3230"
  },
  {
    "url": "/_nuxt/9606e70.js",
    "revision": "2adacdca018ac8715214a42f0f2fc495"
  },
  {
    "url": "/_nuxt/9da4e43.js",
    "revision": "ef1c44b1812313a39eae56d0c2c7f9b2"
  },
  {
    "url": "/_nuxt/c520f10.js",
    "revision": "9293dece2ec8395def486d031fce2abf"
  },
  {
    "url": "/_nuxt/fbb1546.js",
    "revision": "5825ab638c74d3bc8df9739c06b290c3"
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
