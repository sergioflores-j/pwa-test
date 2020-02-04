module.exports = {
  lintOnSave: false,

  // !TODOS
  // Config prettier + eslint
  // Config vetur + eslint
  // Config PWA + Offline Cache + instalação
  pwa: {
    name: 'My App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      // swSrc: 'src/sw.js',
      // swDest: 'service-worker.js',
      // ...other Workbox options...
    },
  },
};
