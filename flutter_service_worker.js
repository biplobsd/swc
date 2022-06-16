'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "616c24b3dfdae26221ee7bfd5609391e",
".git/config": "59fd821c99774efc453ace8456f5cd23",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6ede9e17e7728c2b29b89f9f43063cca",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ef99536bb318e19055895d49d823f7a1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "123621080f735faba52e6a6a91de1763",
".git/logs/refs/heads/main": "aaa4150858e0556e7e6b0bbcdc764d51",
".git/logs/refs/remotes/origin/main": "09b71f229462ab59a039e55c42cc68db",
".git/objects/01/9182dd6b5f8e6b47afc4de43a51bff152c159b": "28847e016797982369c7fb503246faa5",
".git/objects/01/e23a7cb2eb16d895a978d26ccf248fb00cbffb": "512e342da339c6cf43f59094a65c73eb",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/313a8be5009154feaff5c97ef55dc964110b41": "ebd05c22a185349c071fa7ba6c0ca326",
".git/objects/36/2bec616a5d47c46743872bb4baefc4e8646828": "8bb8f697b9e135c375bc6d5e023c44a8",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/4c/86c14bc73b02c79308e41bf592d10a8f6e66d3": "2651ff35bac9d0ff8b54f540fd6aefa9",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/5e/8c6a16031fd2c9d3a7f708be999d79f8fdc6ec": "d3039fe5d44c5ac25444281b998ebd9a",
".git/objects/63/5b56d529fe260367d3b5b0276aed139933b8cc": "a4f08af0ca6099f27247efe6d57074fd",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/a8765bcc3f1951b1a9fead0184db516d6451dc": "6ac255e1c8b13ae71865002f558ea5b3",
".git/objects/7a/b1cce5bf267102092d13c8f48c2dbea7d8eb91": "1eacb645196d0471d77a9afa51825268",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f8c9c5600131c04ccb7d9194a7558f03a9564b": "bedb5992378bc1327dbf4a0e11c9eb9b",
".git/objects/8d/a795900ded719058cb58c873acdf2cd57deb25": "5032cb4fbdd7f2e6c586f14b61db7a3f",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a9/f695fead2e7997ef75b34ff5130c34476bea82": "9b423749a0236f4809715e80ce1e4490",
".git/objects/b6/3a4355638577301e96a7c8238fa6f1156cc56b": "d4891e31ab25f2b9666ca2ac1328899d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/243819f17a24b13520db934ab449c52276c9f3": "9408f5abeca2a0656d62ef43a5d2a476",
".git/objects/bf/8e5ece94190472863fe2acd1e4dc48130d865b": "73d60a6a22f3a1a68eb5b5c8492fe183",
".git/objects/c0/ee2c06115acdfd6b2d9c797bfe5fefe36fb66d": "1483e5c1ad4ed0d4c33d827ce09c791d",
".git/objects/c3/63f80a7c45ca255ef8800a0a07da3de6dd1734": "ae8d6ae6ccf20e81301f475c2d4aef5c",
".git/objects/cc/1d368e35e120d6202262a0633b5b5fba484143": "9c5e85478ee450b83ae0a75bddb3b942",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d3/23af534c44afa8add083c68b4651a0c78b7891": "2bc024a4ecfa410b9092e35a04f83edb",
".git/objects/d4/8e7f26630810e8458264d667962affbe3c8276": "99d012f86d0a8006842fc26e9c82ca72",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e2/f2ef357fd628517c29a90ef705f5a63cf9a2d1": "bedb43a2f08eb19466b112d47da09959",
".git/objects/e3/79b8fee2d0d5443904309cac2b33c80ba3a736": "ec9da35f2c15ad9b4c343db1a3cc8415",
".git/objects/e5/09e7ba260190c164fb2bd4c90eab282c9448a8": "bef2dd135b7d7bc8df0079f910d35e8a",
".git/objects/e6/165f747000a8a3c131bddd4b3197b60e34931a": "3699778bf6d1719b6e52df50ddea39cc",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/2282d23381661dc45855280e67c20282401bcc": "b7ea9fc26b823b97328f6072368db608",
".git/objects/f4/91a930bd48003bd30e3e5dd72c3b78d73ee884": "5ce98d3b85f105e80ce6897130b22e90",
".git/objects/f9/1f15ff3cb2665add41a7aab78e8c133afbaf97": "27bf462383babd21731fe26dff88c105",
".git/objects/fb/db926cf225f92441502e9e3bad8f1d53f099de": "187c63f8bdf94ff36aba081afd69a9a8",
".git/refs/heads/main": "317b7cde7ee98033df85d4dec6bf45c1",
".git/refs/remotes/origin/main": "317b7cde7ee98033df85d4dec6bf45c1",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "e9a748ab77b44f098d79552495562fbb",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c1d215df4757d648eba7b317ec816882",
"/": "c1d215df4757d648eba7b317ec816882",
"main.dart.js": "54461d81b73bc8f15e3b6b433be3e63b",
"manifest.json": "635bbb5ee72e7cffdd95375e39efc421",
"splash/style.css": "15ad0b54711b1cb1b98f4d9c5195de77",
"version.json": "dc9853424cb9457cc09e0bfb72cdbfe3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
