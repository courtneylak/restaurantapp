/* Service Worker */


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
