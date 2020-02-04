console.log('teste2');
if (workbox) {
  console.log('teste1');
  // This is the code piece that GenerateSW mode can't provide for us.
  // This code listens for the user's confirmation to update the app.
  self.addEventListener('message', e => {
    console.log('aqui', e);

    if (!e.data) {
      return;
    }

    switch (e.data) {
      case 'skipWaiting':
        self.skipWaiting();
        break;
      default:
        // NOOP
        break;
    }
  });

  workbox.core.clientsClaim();
  workbox.routing.registerNavigationRoute('/index.html');

  // adjust log level for displaying workbox logs
  workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

  // The precaching code provided by Workbox.
  self.__precacheManifest = [].concat(self.__precacheManifest || []);

  // apply precaching. In the built version, the precacheManifest will
  // be imported using importScripts (as is workbox itself) and we can
  // precache this. This is all we need for precaching
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
}
