self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('mi-pwa-cache').then(cache => {
            return cache.addAll([
                '/',
                'albañileria.html',
                'cocinera.html',
                'index.html',
                'maternidad.html',
                'looney-tunes.png',
                'minioms.jpg',
                'verdeee.jpg',
                'estilos.css'

            ]);
        })
    );
    console.log('service worker instalado');
});
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(respuesta => respuesta || fetch(event.request))
    );
});
