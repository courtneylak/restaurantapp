/* Service Worker Itself (in root directory, initiated by the serviceworkercontroller.js file) */

/* (adapted from developer.mozilla.org) */

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                './restaurantapp/',
                './restaurantapp/index.html',
                './restaurantapp/restaurant.html',
                './restaurantapp/css/styles.css',
                './restaurantapp/js/',
                './restaurantapp/js/main.js',
                './restaurantapp/js/restaurant_info.js',
                './restaurantapp/js/dbhelper.js',
                './restaurantapp/img/',
                './restaurantapp/img/1.jpg',
                './restaurantapp/img/2.jpg',
                './restaurantapp/img/3.jpg',
                './restaurantapp/img/4.jpg',
                './restaurantapp/img/5.jpg',
                './restaurantapp/img/6.jpg',
                './restaurantapp/img/7.jpg',
                './restaurantapp/img/8.jpg',
                './restaurantapp/img/9.jpg',
                './restaurantapp/img/10.jpg',
                './restaurantapp/img/1.jpg',
            ]);
        })
    );
});


/* (adapted from developers.google.com) */

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
  
            return fetch(event.request).then(
                function(response) {
                // Check if we received a valid response
                if(!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }
  
                var responseToCache = response.clone();
  
                caches.open(CACHE_NAME)
                    .then(function(cache) {
                    cache.put(event.request, responseToCache);
                });
  
                return response;
                }
            );
        })
    );
});
