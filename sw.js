if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const t=e=>n(e,d),c={module:{uri:d},exports:o,require:t};i[d]=Promise.all(s.map((e=>c[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Bu1VN1e_.js",revision:null},{url:"assets/index-CHv3A7BT.css",revision:null},{url:"index.html",revision:"c1771a31d7a548c96ce03d63c4e19eff"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"maskable-icon-512x512.png",revision:"01a5850e81d54197e73f6c6dd1939132"},{url:"pwa-192x192.png",revision:"bd30848cd3080f9d0817634ea631cb7c"},{url:"pwa-512x512.png",revision:"cc1a825f908db8a8688fcf33b709559b"},{url:"pwa-64x64.png",revision:"5055e3f73777d1a27e3dc932a4cb3248"},{url:"manifest.webmanifest",revision:"da4136300770e7cddebd374a237ad716"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
