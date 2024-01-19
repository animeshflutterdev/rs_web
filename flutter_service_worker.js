'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "73a02cc84a2aa66d4d765a1967485fd1",
"assets/AssetManifest.bin.json": "242a65ef04960f99ab1f4518d490bfa2",
"assets/AssetManifest.json": "18627bd59daba9712e670b15d19d2c4b",
"assets/assets/images/Box__2_.svg": "14e9df9716eaceaf0ed21bdb0cebb89b",
"assets/assets/images/empty_file.svg": "23a60781364c011db6cc4d8da84767fb",
"assets/assets/images/icon_no_image.png": "2b624b63f1eaa5b01674692617754914",
"assets/assets/images/ic_pdf.png": "f6d6003ab4de53761b81e1472bd48fd6",
"assets/assets/images/loader_1.png": "55698905f08e95a2553c9ae5ba92a9d2",
"assets/assets/images/loader_2.png": "ffe05ed666a366dcdd2621e852ef0587",
"assets/assets/images/OTC.svg": "7c1f722e31cfbd52fa5be65581773427",
"assets/assets/images/Reorder.svg": "1113c78b0cc9647b1cb78ede9e220c56",
"assets/assets/images/sadBot.png": "ee716d4d9b72128e29bd756e5aa24b0b",
"assets/assets/images/splash_3_3.jpg": "3c3892228ca642d74d57977340cfaae2",
"assets/assets/images/success.gif": "40df7a80560c27ef0316dec350a29ebf",
"assets/assets/images/wallet__2_.svg": "a8e5b734de8f0331f2095fd8f6a50669",
"assets/assets/langs/bn-IN.json": "ffad536e70aea7557432143c004f2cdd",
"assets/assets/langs/en-US.json": "c542238739deeade891a7c8cbdfcb062",
"assets/assets/langs/hi-IN.json": "65203d48294067945c1d7c154888958d",
"assets/assets/logo/account.svg": "a5f9c22eaff8b2629f163bb38e95170a",
"assets/assets/logo/address.svg": "e363681b3aabf0ebd7cfda030a6df3a4",
"assets/assets/logo/bank.svg": "08ab3394fea98622ff6d807a7afb872c",
"assets/assets/logo/businessinfo.svg": "0e125277f34135e32bf53dba6c4e4281",
"assets/assets/logo/businesstype.svg": "437c140f0c7f9b61ffa4fc6809ce8965",
"assets/assets/logo/calender.svg": "bd705b674a4da08fe35fbc2e3ee06ba2",
"assets/assets/logo/cart.svg": "aa70abd2f79ae98e1561664048bc3191",
"assets/assets/logo/cashFree.png": "1eee13772fa3e58d3dfbe91315fe9df4",
"assets/assets/logo/change_icon.svg": "8a2c835cec0304bdda10f106cc2b7496",
"assets/assets/logo/contactInfo.svg": "1698775e5725fbe3cf0a0ccc60a0e707",
"assets/assets/logo/dl.svg": "c39567780cf7210662360e46c908f836",
"assets/assets/logo/fassi.svg": "7c6c9df4a25a6595060d8890b743f72a",
"assets/assets/logo/gst.svg": "236a4a24ee71168b78508761b9ab1db9",
"assets/assets/logo/homeo.svg": "ffd45261ce9e7523e832cf20c135879b",
"assets/assets/logo/otherdocs.svg": "9add185955e9dd9bfcd7375fed53ff59",
"assets/assets/logo/pan.svg": "920cf97527938e308d72f15bc873139a",
"assets/assets/logo/recommended.png": "a7fb715f296f69482bc9a680f862f4b9",
"assets/assets/logo/regsource.svg": "64c76df11e23506edf69cfdfbb18d761",
"assets/assets/logo/relailer_shakti_app_icon.png": "55698905f08e95a2553c9ae5ba92a9d2",
"assets/assets/logo/retailer_shakti_logo_3.png": "48fee7162f773c9650730afbdf334001",
"assets/assets/logo/retailer_shakti_logo_color.png": "54f57c9d81e16cc3fbff9d905bab1400",
"assets/assets/logo/share.svg": "584ef9ee34d043448481a7ae4d5bcb27",
"assets/assets/logo/shipping.svg": "36a3e2e9b3a88fbac6c77c853d733b3e",
"assets/assets/logo/tL.svg": "a642b096c6ac2bb9af5d8867298237be",
"assets/dyZdBRfeWq.gif": "0f509274df89c8a0edd0883327bc2b7a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0645a02861ad0be0c3cddefe2da94e51",
"assets/giphy.gif": "b34c88bcb1cd9962aee6783816cebf30",
"assets/NOTICES": "d57c82256f838db09c5d87c0d696580e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "20e7f734d6aaf30f5d8738bdf04c9465",
"assets/packages/flutter_cashfree_pg_sdk/assets/amex.png": "99f1d408e289af3e6359feffc5abc003",
"assets/packages/flutter_cashfree_pg_sdk/assets/credit-card-default.png": "e987949373676bb7b9a6bb85c19dba1b",
"assets/packages/flutter_cashfree_pg_sdk/assets/diners.png": "6bc0a26fbe98312d2cde3ca06a9b9518",
"assets/packages/flutter_cashfree_pg_sdk/assets/discover.png": "8fb5c3dd58ffb198644a9aac0d0a5da2",
"assets/packages/flutter_cashfree_pg_sdk/assets/jcb.png": "903e2793c61fc15e48fed184d6eadbe7",
"assets/packages/flutter_cashfree_pg_sdk/assets/maestro.png": "49f3167896883d38eb9770f6527fa961",
"assets/packages/flutter_cashfree_pg_sdk/assets/mastercard.png": "64dd58b0f24ee7bf272d964f508660bb",
"assets/packages/flutter_cashfree_pg_sdk/assets/rupay.png": "b6c88a3273204df54bc46e374b633570",
"assets/packages/flutter_cashfree_pg_sdk/assets/visa.png": "3442819455f79b208c50094bae6843e8",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/Retailer_Shakti_logo.gif": "bcf85400e50208e3fab2fc1b4b2e3d83",
"assets/rotating_globe.gif": "251513ee076ff35a0fe4350d9b4d7e6f",
"assets/rspl_splash.jpg": "3c3892228ca642d74d57977340cfaae2",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/shorebird.yaml": "86cb6a5fb68d42c9f7f8b4cf25c0099e",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "3d25a531e8d18622c3e39e6cd25f47d8",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/apple-touch-icon.png": "b9006e6ee56f9c501eef5d0ef32bbaf8",
"icons/favicon.ico": "3d25a531e8d18622c3e39e6cd25f47d8",
"icons/icon-192-maskable.png": "b2ad2137354c098e5e5e3541ee2b26a8",
"icons/Icon-192.png": "3f128dfd8c25805a11297cb9847ef6b8",
"icons/icon-512-maskable.png": "10f0fd03d9cc461d4c64a9b6b313948c",
"icons/Icon-512.png": "fd96cab024f0d60c5e9baa971975c1c1",
"icons/README.txt": "75a4b40628d621e7140600213104e158",
"index.html": "c1c05cdd77eead6fca799a057d3fcf65",
"/": "c1c05cdd77eead6fca799a057d3fcf65",
"js/changeRedirectUrl.js": "2c82ec5b1d3dcbf2a3585be0036db0fa",
"js/customScript.js": "57d419a404fcd51e37769e1c854b8cfd",
"js/download.js": "d4363c4f4e31beda8c800ef581ce52a8",
"js/getCurrentUrlIframe.js": "3500f5cc1caa05e94a1fb181dfb8cea0",
"js/paytm.js": "7716e21f3d926eb7771e8573933321ad",
"js/speechToText.js": "82edbb5bfb0b0bb31b598e7d937ba2ae",
"js/uatPhonepe.js": "df596eaeafc597e55461efeac83647f1",
"js/webengage.js": "4ad2fd42379c54062733bbde082b0e42",
"main.dart.js": "8e5378b51198ac710801522dab48c57d",
"manifest.json": "698504702ffbd0d6c6cc81cb64ebce1b",
"version.json": "cdb6fe1e960d803aa82dbb78a8622652"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
