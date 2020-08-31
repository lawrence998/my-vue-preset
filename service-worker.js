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
    "revision": "f5ff044f8fa70bf2059460ff2e430c8e"
  },
  {
    "url": "assets/css/0.styles.7069ad63.css",
    "revision": "d665e3f2de263eb5ac79f50c29fd7223"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.852a1ed5.js",
    "revision": "1c6b048b81dfea0ce9854bdbb68e1bc2"
  },
  {
    "url": "assets/js/3.6ad1b238.js",
    "revision": "25330e322e023a0ca933d70ccc32a4dd"
  },
  {
    "url": "assets/js/4.633a2643.js",
    "revision": "92a45db91201fdb2bab443bdab66cfe1"
  },
  {
    "url": "assets/js/app.eaab6487.js",
    "revision": "cf52595cbd80f38628cdb662401feae3"
  },
  {
    "url": "index.html",
    "revision": "aa3dc7ebeb933aa3c06af809c7e002bb"
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
