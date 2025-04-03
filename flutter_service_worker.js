'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "fb2e49041d274b8f49e05aa223743fbf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1b/e52bb97a7fe5d0f9512652a4c7f7fcef63a322": "c954c8a39c7f5e417afd99b88ab9723a",
".git/objects/17/378b066f6795f4e7fb538eed4400248b0beb45": "0c2338cc918110b8edd2dde9c59194ab",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/d53c11761c6823f9f548b937e7345171c4ef91": "5eb11787e2a1958bc24d134fa7a0a278",
".git/objects/b7/590e67c30982ad6c1cdb00316f265ed5170fcb": "5b66f35efa58339c78aaf3e5581626e6",
".git/objects/99/21ed99b85756027754f669afb8e74dfb100a6d": "dee743ad91b45dd8b789e33af67489e0",
".git/objects/81/f8b779d6904fa54f2c59d5bdad86af7f694f77": "5d5ff4776c00c2c948cf015e82c28631",
".git/objects/38/ebd482ecb423528fea8a9adf6a1fcfbc784e38": "8f57badf24e73a7ddb942eaa27568605",
".git/objects/5f/923f3f5a99be0136b649852dabb9be8da1e62f": "387d480ff34a112cec14c04a77aab86a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/5c/d7676f723fcc1403c58cff618a28327a004d4c": "e3fd3e3dc309e1335c10b15a485556c0",
".git/objects/87/8194980050d1860dda56aa52e10d67737aad02": "a5ffbacedcfedc7066d21e9f8eb24994",
".git/objects/57/fba5c0881fdf20faa08715c20514c84700577b": "ce9b6042ebfd120fd7ddbd1dd0799a1b",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e2/7c7107a3a27e8018d68bd44bd5fcb7355f961b": "c530959f25ba02a068a1d47baddffe2c",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/89/622870b3fe1c921880f6cbbe9333a64cf5186d": "93c6f67664ab42d0e6ab9efa25038379",
".git/objects/a6/8f8e0149346b14164e2667a319d40b2159d3e8": "0f1c476b9d13b3dd94fd6c8c4b6bdffe",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/31/ad8bfed264dcc66327ffb8713dd1280e955e28": "0e89596a41e845ddaa896b9c82695f8d",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/a0/0e5bcf6f39661095b956ad0aee4b8ec4971d60": "7a451ec862fa21712f3a0de461367fd9",
".git/objects/92/b04badff6a2bd7a5eb1d989b8d3ed4a4549a22": "8ca188d71904cc4430b91f3c63f7641b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/64/16699a76662da50a7dcf836c8ed09c4a60c5d1": "b8a1eef7eb7883c76f88fe5f73537fca",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/56/a13b590318f24c642b469b0dd684e762265fbb": "59b543b10ac40db56e1b08297039b42b",
".git/objects/67/ed545b5b769ea8716cff4a7bd9ebf72e3d5ce7": "e1df8ae04f1225726c3e7e8f3dfcb717",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/aa/f36261553c3982ce74280c7ad98b95e88c6fec": "303df6b9813e8841f13c58a2b9727fa2",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/bd/f4b5cdbcd82a4673b9b24b3a37f94b5ab8928c": "60174f72c4f7a99487d00e523b4bfd10",
".git/objects/01/b26f4b0baf91f9d28a19f4dfb100cc45a7f1d2": "f0fe6a1c598c6751ead61e433e7b88c9",
".git/objects/62/3f3a5e91bdbdc637fa84bc14919ed84b88bb4c": "3b1ac3b69c2c2748c66c44b598ba2baf",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/heads/main": "903832cf191246f0a0950142037a2ab3",
".git/logs/HEAD": "9fbffc570c0411f4a6d1bf33a8a8a5f8",
".git/logs/refs/heads/main": "9fbffc570c0411f4a6d1bf33a8a8a5f8",
".git/index": "31c965dca54df82a74a07c9a7ee03382",
".git/config": "e03f7e3ef87efc25ce868c2fab2a6d52",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"manifest.json": "e8b80e4380a8510bb0f862c1018f4bf4",
"favicon.png": "b9387869df91ea211c211c03793ac00f",
"version.json": "6c90aeb11e8435962d341fb041905921",
"index.html": "99695fa984bbaf0d0658558d88b51a27",
"/": "99695fa984bbaf0d0658558d88b51a27",
"main.dart.js": "93cafa6619ba8f1dac49907c5e2c36de",
"icons/Icon-512.png": "9c32dcacd46fa5977ee9b15c0548337d",
"icons/Icon-192.png": "be53ff85711e08fd6134ae07068af207",
"icons/Icon-maskable-512.png": "9c32dcacd46fa5977ee9b15c0548337d",
"icons/Icon-maskable-192.png": "be53ff85711e08fd6134ae07068af207",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"assets/AssetManifest.json": "025878f386d0229d74c077d94f1fa376",
"assets/NOTICES": "998010411d3c91d761862c04bf96be50",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "3c462bcf11a4555348aaf4d4e0e0ae69",
"assets/AssetManifest.bin.json": "30d3bf16044a81fe79f41c391f71519b",
"assets/assets/icon_foreground.png": "89ba6d37d77893b22398108887ee0c3c",
"assets/assets/app_icon.png": "14b3a84a65a668d5238a3a4499b127b2",
"assets/assets/gradient_ring.png": "9dc0fcbd5fbf399f02c7680f3445dd7a",
"assets/fonts/MaterialIcons-Regular.otf": "186223ece38aa3deaa69b2a516c878a5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"flutter_bootstrap.js": "878c77fe64996e2099207bbc8361d3f9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
