self.addEventListener('fetch', (event) => {
  const { url } = event.request
  if (url.startsWith('https://play.pokemonshowdown.com/sprites/ani/')) {
    event.respondWith(
      caches.open('pokemon-ani-sprites').then((cache) =>
        cache.match(event.request).then(
          (response) =>
            response ||
            fetch(event.request).then((networkResponse) => {
              cache.put(event.request, networkResponse.clone())
              return networkResponse
            }),
        ),
      ),
    )
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request)
      }),
    )
  }
})
