/* Service Worker Controller (references in folder root the serviceworker.js file) */

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/restaurantapp/serviceworker.js').then(function(registration) {
        // Registration was successful
        console.log('WooWhoo! ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
        // registration failed :(
        console.log('Rhu Rho! ServiceWorker registration failed: ', err);
        });
    });
};

