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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f9b5d72f57a6da3d6d0784ac87c81511"
  },
  {
    "url": "about.html",
    "revision": "ce41d5c25a1674616993edb3a916fccf"
  },
  {
    "url": "assets/css/0.styles.08a0540f.css",
    "revision": "3f1cf95f285c5d73fc435b716670412d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.986af9d6.js",
    "revision": "8d07197e0e8ffe74ab8db0680dd8ed31"
  },
  {
    "url": "assets/js/11.8fef1fb3.js",
    "revision": "57b86d4d0fe4ed6ed986df2ab905d1f9"
  },
  {
    "url": "assets/js/12.5fd97cf6.js",
    "revision": "bb57067cdfdb151bf29302b1576ff985"
  },
  {
    "url": "assets/js/13.09db7eea.js",
    "revision": "3fe7aad03328d4d7050ea713c24f29e0"
  },
  {
    "url": "assets/js/14.c1170179.js",
    "revision": "98d8b33ae4dd390152c24f39f777563b"
  },
  {
    "url": "assets/js/15.2d278adf.js",
    "revision": "969ec4734b992124e9f621a39f31c53b"
  },
  {
    "url": "assets/js/16.3d03c55b.js",
    "revision": "3f4780bc58b8f520e3af021009989d1a"
  },
  {
    "url": "assets/js/17.23774980.js",
    "revision": "271c1bf4db03274f85479f089e6d5737"
  },
  {
    "url": "assets/js/18.1a89581b.js",
    "revision": "8ee614d4c81f4cdda1ebecf6b61c7a34"
  },
  {
    "url": "assets/js/19.6247161d.js",
    "revision": "4f1807d0dc6e3c755ff9f9842d1dbc34"
  },
  {
    "url": "assets/js/2.c8e318ee.js",
    "revision": "e1f218e12637a8884888842fc51279d9"
  },
  {
    "url": "assets/js/20.c46fab6a.js",
    "revision": "0a6664afcec81aa45d5e74b459bbc73c"
  },
  {
    "url": "assets/js/21.60b9ae66.js",
    "revision": "f4db68e2e477a011c035eafabfac3eaa"
  },
  {
    "url": "assets/js/22.b454e526.js",
    "revision": "5932ccf1a14bdc4e1316935a9cc6fb26"
  },
  {
    "url": "assets/js/23.ee93132b.js",
    "revision": "00c38376d9c112d482f5017208c510c4"
  },
  {
    "url": "assets/js/24.485409c5.js",
    "revision": "c8467897aceccc49d7355dcdc1a76b86"
  },
  {
    "url": "assets/js/25.e4ea53f1.js",
    "revision": "b0e3a6f56ec0e1b33d5fbbc0b0e8f9fe"
  },
  {
    "url": "assets/js/26.efbed168.js",
    "revision": "f8297d743b6af929f87707f17e0d01ed"
  },
  {
    "url": "assets/js/27.b083e58b.js",
    "revision": "fe1a1eaf2e5f5ba562b3be4afe8a3534"
  },
  {
    "url": "assets/js/3.636665fe.js",
    "revision": "a4ead256bede2f71f22b73488497aed5"
  },
  {
    "url": "assets/js/4.b3719a29.js",
    "revision": "b8c9e78403bf0c6be59a1d7e58043579"
  },
  {
    "url": "assets/js/5.09d06dfa.js",
    "revision": "0ba187f2ee57db2931fc864b5958665f"
  },
  {
    "url": "assets/js/6.a2b0b332.js",
    "revision": "2a6a1b7a4ede9558423a8a608b62ba3e"
  },
  {
    "url": "assets/js/7.7e31cc32.js",
    "revision": "9191d0227b6c7c55a50296c1df51c492"
  },
  {
    "url": "assets/js/8.917805ff.js",
    "revision": "4417099c1a4238e8600d2463bb824e3b"
  },
  {
    "url": "assets/js/9.1b223ebc.js",
    "revision": "24700ad8b668545992064f5762bcec0b"
  },
  {
    "url": "assets/js/app.5ce6fdc3.js",
    "revision": "d0cef2a180677969d4c8e4f0761df7a9"
  },
  {
    "url": "demo.html",
    "revision": "9f70802c0b906ab564d19093e9455d32"
  },
  {
    "url": "en/about.html",
    "revision": "3a7612d744a2d36b89981cc10748ef8d"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "2a5ffa7799fda3dc1a131d2baafc512d"
  },
  {
    "url": "en/guide/config.html",
    "revision": "d9dba60c4f3260eb32dbba383c70ecd5"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "2fe5caa24490127df993763f1a932007"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "e2e98807190616a1c6519a00c5fe19fe"
  },
  {
    "url": "en/guide/index.html",
    "revision": "16180946254479f011369f7230444c62"
  },
  {
    "url": "en/guide/page.html",
    "revision": "0c288dfa7c832ac27f92d11ae0adad82"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "def2d79a8282beb2409fe0006eec3a9e"
  },
  {
    "url": "en/index.html",
    "revision": "5e84e61c3d015a539dc3754ae93da98d"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "f0b1ff6259d93df9d6f4393a32090ed4"
  },
  {
    "url": "guide/config.html",
    "revision": "310b6fe7edef9e5cb80a300dab2734c1"
  },
  {
    "url": "guide/faq.html",
    "revision": "c56f313606be100765303f58b6b04653"
  },
  {
    "url": "guide/icon.html",
    "revision": "ee27918e7a643b088676d9127c618b0c"
  },
  {
    "url": "guide/index.html",
    "revision": "855657bb78d3c4f66b207d523ce2126a"
  },
  {
    "url": "guide/migrate.html",
    "revision": "645250cbeadfe1547605481c63ebac2d"
  },
  {
    "url": "guide/page.html",
    "revision": "4c922c57204f89ebd2b817d6c097608a"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "f3704f575234c385782d52a07951e8ee"
  },
  {
    "url": "index.html",
    "revision": "e608acfb36e2c6380f3c15d8a58cac5f"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
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
