'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9e2f98dc6a681a3044f2710ebe9200e5",
".git/config": "2af5c90d9de5a8fc2bebe903249ea595",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4505f93e6c4707f784aa297eda8b0718",
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
".git/index": "9f3d377dd44e1a2f3a3db43e38468b1d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d8ec0f30d39d03e2d4d586ba44b6a0ea",
".git/logs/refs/heads/main": "d8ec0f30d39d03e2d4d586ba44b6a0ea",
".git/logs/refs/remotes/origin/HEAD": "daef9132f518422e8f74cb3c62a01eef",
".git/logs/refs/remotes/origin/main": "514efa8f0410b5e518e6dc5a53b7dd8f",
".git/objects/2e/3298a14aeaeaaa0d43c7d6694d80dfef1ee6ab": "81a15bffcebe694979a991951c168d7d",
".git/objects/2e/f45dff5137637abfdefcac5eedecc5f5a6247f": "e7ed1126ab8f00f75e9118cd5c5a0fe7",
".git/objects/46/647fa2247f07a2d919e030dabf187ecfb33599": "159da3b4ce66ddf17085e70bf29f80d8",
".git/objects/6e/475a6803cc3c3a105ed281114a7965ef2ef61f": "9fc8dfb8c0c94a6c51e73f13485a3b9f",
".git/objects/6e/6ca9bb5be41bbb3afe4affdba773093d66a1e8": "6880cf46d7e041bd600e5b1cb5c5f6d2",
".git/objects/71/82f5c685ca1219935d7390da493c1c77febd50": "0782fd97fc2c6a3e681620b4e99f0333",
".git/objects/a5/4cbaaad8b455b525ea027ac3a9d34df2c23c37": "7b29900e096889856e47a8701a620f1a",
".git/objects/ae/1bb0aec3aea76eb43f5d1d363fb94fee9475db": "6a46900005c1b86d3546dc9b27c7c3f8",
".git/objects/c0/1b3da22ace74628f95a546b8f615b0adbbf20a": "590de02a0541feb98ce54833e336504a",
".git/objects/cb/5dfef34c37225e070f506701e54755af7fba36": "de73c0f1cc41a1a04275242b56a2497c",
".git/objects/d2/7a489b03ec899c32643991ec7f8cd2d5653919": "14a4e520c3df4d583af34d524a6ce39a",
".git/objects/e6/2f6b04dd2e6bd9f26c700f5fc8fbac888fbe62": "bc985ceb1aea9c9d8dada2b9364f75e3",
".git/objects/f7/44b91ebc3912084bdcbd3b7c623831e1f00556": "dc8154665788ad4e4c9236cfe782335f",
".git/objects/fc/441e4aa4daa779fe4947ae677aa7be1485216b": "33c0ac4f3436174cda918c34be1fc0eb",
".git/objects/pack/pack-b904ea20d99d900b5fcf0cfe26ce3d50476eb1b6.idx": "127e1be678b6c28e68c2109e99709691",
".git/objects/pack/pack-b904ea20d99d900b5fcf0cfe26ce3d50476eb1b6.pack": "6f825079e04552c4aaa5460735216b5c",
".git/ORIG_HEAD": "8e8dfdf0574bb71a3a36ae7eb323e7ef",
".git/packed-refs": "27740cd0b8382e7898c746bd14a216d1",
".git/refs/heads/main": "8e8dfdf0574bb71a3a36ae7eb323e7ef",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "8e8dfdf0574bb71a3a36ae7eb323e7ef",
"assets/AssetManifest.json": "134e29ee46d05c3588e982335b16b025",
"assets/assets/dropIcon.png": "7dbbe5d8f49c98c94c386aee50e5935b",
"assets/assets/red-transp.png": "a4a1db3e499d1cd0f7fa7daafa1fc81d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "5da8e432d53ea9fdade761ab7c34653f",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/shaders/ink_sparkle.frag": "81628d37f5d13a6524600c33514a9ea1",
"canvaskit/canvaskit.js": "3725a0811e16affbef87d783520e61d4",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "491df729e7b715d86fc167feabea031a",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "374b109e885192ca894324888bfd03bf",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "2556c7a0a389efe39748bf8869544837",
"icons/Icon-192.png": "255159ccba2e6344380b77b4c9cce313",
"icons/Icon-512.png": "ce95e88c5e0ed0e32dd324ca2b518dc9",
"icons/Icon-maskable-192.png": "255159ccba2e6344380b77b4c9cce313",
"icons/Icon-maskable-512.png": "ce95e88c5e0ed0e32dd324ca2b518dc9",
"index.html": "9c1f77c0d0e323bfeb76098c70033d70",
"/": "9c1f77c0d0e323bfeb76098c70033d70",
"main.dart.js": "936f45bf6c254b34e5ae1bb980941565",
"manifest.json": "0111222459de96177f89c4066aa5c868",
"README.md": "18571af1c80b054a437281757fc3f39f",
"splash/style.css": "cdc8b7c17d0b91444ce670f50ac8f082",
"version.json": "c37d3470b857ec6084135010af99d7cc"
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
