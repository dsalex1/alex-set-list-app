if (!self.define) {
  let e,
    s = {}
  const l = (l, i) => (
    (l = new URL(l + '.js', i).href),
    s[l] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = l), (e.onload = s), document.head.appendChild(e)
        } else (e = l), importScripts(l), s()
      }).then(() => {
        let e = s[l]
        if (!e) throw new Error(`Module ${l} didn’t register its module`)
        return e
      })
  )
  self.define = (i, r) => {
    const n = e || ('document' in self ? document.currentScript.src : '') || location.href
    if (s[n]) return
    let t = {}
    const o = (e) => l(e, n),
      u = { module: { uri: n }, exports: t, require: o }
    s[n] = Promise.all(i.map((e) => u[e] || o(e))).then((e) => (r(...e), t))
  }
}
define(['./workbox-3e911b1d'], function (e) {
  'use strict'
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: 'assets/plugin-vue_export-helper-DlAUqK2U.js', revision: null },
        { url: 'assets/AppLayout.vue_vue_type_script_setup_true_lang-oxBXjM_Y.js', revision: null },
        { url: 'assets/auth-CN2OG6Db.js', revision: null },
        { url: 'assets/fa-brands-400-Dur5g48u.ttf', revision: null },
        { url: 'assets/fa-brands-400-O7nZalfM.woff2', revision: null },
        { url: 'assets/fa-regular-400-Bf3rG5Nx.ttf', revision: null },
        { url: 'assets/fa-regular-400-DgEfZSYE.woff2', revision: null },
        { url: 'assets/fa-solid-900-BV3CbEM2.ttf', revision: null },
        { url: 'assets/fa-solid-900-DOQJEhcS.woff2', revision: null },
        { url: 'assets/fa-v4compatibility-B9MWI-E6.ttf', revision: null },
        { url: 'assets/fa-v4compatibility-BX8XWJtE.woff2', revision: null },
        { url: 'assets/helpers-DU00XPo1.js', revision: null },
        { url: 'assets/index-C9bBjSeL.css', revision: null },
        { url: 'assets/index-CqN4tnLD.js', revision: null },
        { url: 'assets/Login-1NAmQK7z.js', revision: null },
        { url: 'assets/logo-DW4Ev_FE.svg', revision: null },
        { url: 'assets/SetlistCreateUpdate-BT6RzEEO.css', revision: null },
        { url: 'assets/SetlistCreateUpdate-DC8blgn2.js', revision: null },
        { url: 'assets/SetlistRead-Cmvf00kW.css', revision: null },
        { url: 'assets/SetlistsIndex-BRd3_E6Z.js', revision: null },
        { url: 'assets/Settings-UBz24cDf.css', revision: null },
        { url: 'assets/Settings-ztzgAJud.js', revision: null },
        { url: 'assets/sheetBaseDirectory-nsSIru8u.js', revision: null },
        { url: 'favicon.png', revision: 'd0097bcce18709204ba671022be00f7e' },
        { url: 'index.html', revision: '5dd4f6a58637b07c8c8b5dfd2ebc4c1c' },
        { url: 'logo-192.png', revision: '73d68843e656e5f30ec38ebf7a8aed88' },
        { url: 'logo-512.png', revision: 'd0097bcce18709204ba671022be00f7e' },
        { url: 'logo.svg', revision: '0ff8cfbb47dfced8d2d0cd8bea7c750b' },
        { url: 'manifest.webmanifest', revision: '61731d4186513254143e4dcbb6f0256a' },
        { url: 'registerSW.js', revision: '2e0665151922ce34ca3d1dda51f71bbb' },
        { url: 'logo-192.png', revision: '73d68843e656e5f30ec38ebf7a8aed88' },
        { url: 'favicon.png', revision: 'd0097bcce18709204ba671022be00f7e' },
        { url: 'logo-512.png', revision: 'd0097bcce18709204ba671022be00f7e' },
        { url: 'logo.svg', revision: '0ff8cfbb47dfced8d2d0cd8bea7c750b' },
        { url: 'manifest.webmanifest', revision: '61731d4186513254143e4dcbb6f0256a' },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL('index.html')))
})
