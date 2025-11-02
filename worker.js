// Service Worker dla aplikacji mObywatel
// Prosty placeholder - oryginalna aplikacja używała service worker do cache'owania

self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated');
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    // Pozwól przeglądarce obsłużyć żądania normalnie
    event.respondWith(fetch(event.request));
});
