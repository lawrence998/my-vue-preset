/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fffa6b7cd72fe01f77a8932b67a3139f"
  },
  {
    "url": "assets/css/0.styles.13c0511f.css",
    "revision": "d090570ef0ab294ae8bd926df7269960"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.adac946c.js",
    "revision": "f0d7b184c608eab22cbad45e3e204fe5"
  },
  {
    "url": "assets/js/3.0060f260.js",
    "revision": "66635c873cdc47a6145e5895855740cc"
  },
  {
    "url": "assets/js/4.f768044f.js",
    "revision": "fea0453b59ad31d4edaf6ac124d9f113"
  },
  {
    "url": "assets/js/app.a633c037.js",
    "revision": "b1000ac0ec1299503b1f81d929b18ccf"
  },
  {
    "url": "index.html",
    "revision": "f343a8d8b9cabb1bbf591c2b656fc2c4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
