self.addEventListener('install', evento => {
    event.waitUntil(
        caches.open('mi-pwa-cache').then(cache => {
            return cache.addAll([
                '/',
                'index.html',
                'fisica.html',
                'fisica.jpeg'

            ]);
        })
    );
    console.log('service worker instalado');
});
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(respuesta => respuesta || fetch(event.requets))
    );
});