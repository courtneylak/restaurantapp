/* Service Worker */

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
}

self.addEventListener('install', function(event) {
    // Perform install steps
  });


  var CACHE_NAME = 'my-site-cache-v1';
  var urlsToCache = [
    '/',
    '/styles/main.css',
    '/script/main.js'
  ];
  

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    );
}); 


self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });


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
  
              // IMPORTANT: Clone the response. A response is a stream
              // and because we want the browser to consume the response
              // as well as the cache consuming the response, we need
              // to clone it so we have two streams.
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

  






navigator.serviceWorker.register('/sw.js').then(function(reg) {
    console.log('Yay!');
    }).catch(function(err) {
    console.log('Boo!');
});

navigator.serviceWorker.register('/sw.js').then(function(reg) {
    scope: '/my-app/'
    });
    
    self.addEventListener('fetch', function(event) {
    console.log(event.request);
    });
  
    
IndexController.prototype._registerServiceWorker = function() {
        if(!navigator.serviceWorker) return;
    
        navigator.serviceWorker.register('/sw.js').then(function() {
            console.log('Registration worked!');
            }).catch(function() {
            console.log('Registration failed!);
    });
        )};


self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch('/imgs/dr-evil.gif')
    );
});
