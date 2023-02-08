/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7024b3176ce2af62ba37eae30728a7b9"
  },
  {
    "url": "about/index.html",
    "revision": "48c768c1c4c93f0d0d502c91d1323022"
  },
  {
    "url": "assets/css/0.styles.2b1a0e6e.css",
    "revision": "f160c62780d94b3fc22cde2bbf1c6697"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/iconfont.b555cd18.svg",
    "revision": "b555cd1856984a1bbcc86791b54db341"
  },
  {
    "url": "assets/js/1.0c44cd62.js",
    "revision": "e0d6c3efedafc5d6829fbcf3ab46bbc9"
  },
  {
    "url": "assets/js/10.05887824.js",
    "revision": "4f40df4431286e616477a5add55d5d26"
  },
  {
    "url": "assets/js/11.4f72b998.js",
    "revision": "8e9d57b6cbddecabd66d7901a91f7734"
  },
  {
    "url": "assets/js/12.2c9a2c00.js",
    "revision": "2d456bb4fbc9ca57559c8ad7e1c86b0e"
  },
  {
    "url": "assets/js/13.fafb653d.js",
    "revision": "e6362a8fa841ce19a64a61f1e7adaa28"
  },
  {
    "url": "assets/js/14.62e1ca4c.js",
    "revision": "7080aa333d51ba1a8f5839be8e1a4be3"
  },
  {
    "url": "assets/js/15.0169ab4c.js",
    "revision": "36c4f3e9117fae22b3d98f63d2654d80"
  },
  {
    "url": "assets/js/16.8b859f46.js",
    "revision": "a058d7bdf7f88bc479c14114f2411556"
  },
  {
    "url": "assets/js/17.17b81b86.js",
    "revision": "e8dcaba20f5581af60903a3f4cfe7908"
  },
  {
    "url": "assets/js/18.9fce4fda.js",
    "revision": "28e6403298fcd99f72c0ad0c44ce3de0"
  },
  {
    "url": "assets/js/19.ae85de83.js",
    "revision": "f6b915e3442ecce2eeb7b7487258340b"
  },
  {
    "url": "assets/js/20.e7e500a7.js",
    "revision": "409c92edd9e85d178e08669034d93025"
  },
  {
    "url": "assets/js/21.1a204f5c.js",
    "revision": "d2a019ac5d4b05a3d90f076310f69485"
  },
  {
    "url": "assets/js/22.bf4c1e76.js",
    "revision": "4183afdf7b251704e5f41c4129c12e8b"
  },
  {
    "url": "assets/js/23.51ac6f9d.js",
    "revision": "f9d67f6be35e9ce89c232cdf73f983b8"
  },
  {
    "url": "assets/js/24.1d347215.js",
    "revision": "214cc7f694f18d47b4aab1dbf0be34c3"
  },
  {
    "url": "assets/js/25.a29d1a47.js",
    "revision": "42c179a34753165e2d993a8a6b6fe757"
  },
  {
    "url": "assets/js/26.82660ae8.js",
    "revision": "f822902e4af3366bf1ecc0ddfc7bd369"
  },
  {
    "url": "assets/js/27.5f96aeda.js",
    "revision": "96945a7782c6b66904d16da008b525bd"
  },
  {
    "url": "assets/js/28.c3cd24ba.js",
    "revision": "25b515ff36ff1cd653ff1dc19d3b3fb1"
  },
  {
    "url": "assets/js/29.50f10cec.js",
    "revision": "70b226e6d2bf0ca7bae06942e351adfb"
  },
  {
    "url": "assets/js/3.0c2bf158.js",
    "revision": "a0ab6147cde25c840175fecb2169d756"
  },
  {
    "url": "assets/js/30.2dd75991.js",
    "revision": "a6d940274f4e7d42afc6b89c234e7755"
  },
  {
    "url": "assets/js/31.80d6b20d.js",
    "revision": "ee563c4e245f01ab7fa6a5551e49d75c"
  },
  {
    "url": "assets/js/32.123c0097.js",
    "revision": "703f0870409b3d6103f526cb7688924f"
  },
  {
    "url": "assets/js/33.f241f920.js",
    "revision": "902317f5b92eb2226fd2c08c1065ce66"
  },
  {
    "url": "assets/js/34.a6243f6e.js",
    "revision": "6662c0a059746e92a73a1b9cd6d66ce6"
  },
  {
    "url": "assets/js/35.011abdb7.js",
    "revision": "f452d5683fddf2a339341b41f406b2c7"
  },
  {
    "url": "assets/js/36.1434a503.js",
    "revision": "016ab4bf3dcafa68b775c018cfea1ae6"
  },
  {
    "url": "assets/js/37.01557268.js",
    "revision": "8942ee952ea0750841184c888589e4c7"
  },
  {
    "url": "assets/js/38.370e5aaa.js",
    "revision": "56a6daeaea18827a2c212e067f7d5f6a"
  },
  {
    "url": "assets/js/39.f2d5fa8b.js",
    "revision": "fdb588560cb2ebcfc865fd80c2bbd37f"
  },
  {
    "url": "assets/js/4.a405839d.js",
    "revision": "2265e3ac9973a5df38cb04b72b933a01"
  },
  {
    "url": "assets/js/40.301dbe9d.js",
    "revision": "3bcf5c481bea2ec8c0d9d35a78abf9b8"
  },
  {
    "url": "assets/js/41.6128ea4a.js",
    "revision": "075a6d2964f77566cba2743628977118"
  },
  {
    "url": "assets/js/42.4b6d50ab.js",
    "revision": "9eafc2f29c0ebd545879e5ea42638afa"
  },
  {
    "url": "assets/js/43.a4c5e027.js",
    "revision": "c000179536ae2df7b0c2ab9fece8d941"
  },
  {
    "url": "assets/js/44.c8ca048a.js",
    "revision": "b6ff2c918511a0aca4710c10c07329fd"
  },
  {
    "url": "assets/js/45.c46ba916.js",
    "revision": "6b32f86ba79b5c255b1d705876b53060"
  },
  {
    "url": "assets/js/5.5fdfcea1.js",
    "revision": "c552d19efea9130161c8926a4e74c53a"
  },
  {
    "url": "assets/js/6.c81c1b64.js",
    "revision": "ff9518c12c9739873a66eea54d6667ec"
  },
  {
    "url": "assets/js/7.10316f2c.js",
    "revision": "3d6c5275514f0626bb1eabba262960c2"
  },
  {
    "url": "assets/js/8.528e89eb.js",
    "revision": "87448b93bc18ab1744ebec5a0a639858"
  },
  {
    "url": "assets/js/9.1c1dc43a.js",
    "revision": "4730d561504a83b40d5c2b44c403285f"
  },
  {
    "url": "assets/js/app.c195a415.js",
    "revision": "bbe69102ed91903aa97d94455b39d7b3"
  },
  {
    "url": "categories/DRL/index.html",
    "revision": "f8bf9620759a5d8fca2838fb0c17e730"
  },
  {
    "url": "categories/index.html",
    "revision": "6128ed88ffeb444577fea0424b2363ad"
  },
  {
    "url": "categories/ROS/index.html",
    "revision": "351cf06034f9f14a121e6f7209e8359a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1f47f751116b5b93a7572fd304235b2b"
  },
  {
    "url": "categories/摘记/index.html",
    "revision": "c73f93fd2c85f67fdb9ac536e876f949"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "be7eb3abbeb6bd33abcbec1c8f0b9009"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "cb9defe2ae5bd9bd8255a8f9fd5c3b27"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "8b1d991751e657b76832764bd966a7c0"
  },
  {
    "url": "icons/cat128.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/cat16.png",
    "revision": "1aec0693ff6e320c0adedf185806b1ab"
  },
  {
    "url": "icons/cat48.png",
    "revision": "231db9fe2dd479a3aac7da8194bb9fd5"
  },
  {
    "url": "icons/LatteAndCat.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/LatteAndCat.svg",
    "revision": "ec9380aaccc3ef15b7150505a7c5f524"
  },
  {
    "url": "icons/首页.jpg",
    "revision": "0bee7ba5ac70155766648e14ae2a821f"
  },
  {
    "url": "index.html",
    "revision": "8fc36fd7ca93d68226cfd68ab1f5ce2b"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "4827146aef401da9b4e29c29b6df511c"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "bb922ad346e6f7f86bfb7c19d66a0823"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "89d0ca7ee466961f487c41b6c60f546c"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "5ef1fc31e3b2c2fc86dcea1fc48dab0d"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "ff467132f69d31e9d7c263b998fb0d17"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "4c926a8a4840027c87a08cb3700bb20c"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "544e61637810c429adee905ddc4b4acb"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "09008755ac448b2a4f07a8072117ae74"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "b3aeea24588beb4b5da4b28bf6b57d0e"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "8cd3e5121193765a0995e27cf57260be"
  },
  {
    "url": "note/index.html",
    "revision": "66ff898fe2a81d8a5f4cb54eac679df1"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "d33b15cd24c2c7de7c1e5f1cc75cf856"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "8172c674acdf84aee863efdf14ded885"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "2806528762183ccf9cf0222793db6f22"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "3732cb33941148fe8a63a8ddac669a48"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "6cb8911de2f5bb272c06a44970d6cd4a"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "7b4daf0aea10cd459e0db8b750a8474b"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "545c87b60ba6ab6d183b31bfdd593951"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "437f30cfb723d956be1b5cbfd1bc612a"
  },
  {
    "url": "star.png",
    "revision": "f839cadd169727f31a195d0b53d05807"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "b7337d0d8d8dd4873f139ff59207a61c"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "c1da1df504ed59c8f24ccd2ef6fa3dc9"
  },
  {
    "url": "tag/DRL/index.html",
    "revision": "888d168e79065aa614cff7b02f0e5d0e"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "6e605b6f14ba2ac33d7579fa74b288a2"
  },
  {
    "url": "tag/index.html",
    "revision": "e5aecf41f20925cb4647c6b944b15797"
  },
  {
    "url": "tag/js/index.html",
    "revision": "01012b0712aeab9ce8e0160d468cdc65"
  },
  {
    "url": "tag/ROS/index.html",
    "revision": "9084d0942e9d07a18307df5ddf941bc6"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "3170132edf690f901efb41f954a1fca5"
  },
  {
    "url": "tag/vuepress-theme-reco/index.html",
    "revision": "2890be84656bc7c7cb40f5100ded7332"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "662b943108f24ad8d15f70bcea07f95b"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "77f799ae0475f2c338c4ece1e4600b9d"
  },
  {
    "url": "tag/句子/index.html",
    "revision": "0de636ba089e15eeb4f1e58d1fdb9da7"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "8328a061eeb6cfe4823019cdce93054a"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "46801ea60dc9880276522fce7297be01"
  },
  {
    "url": "tag/诗/index.html",
    "revision": "ccf4c10a2ade977cfa6dae9ec38037fc"
  },
  {
    "url": "timeline/index.html",
    "revision": "1a53f747027d014d7ffacc5a0d6da849"
  },
  {
    "url": "views/drl/2022/spinningup.html",
    "revision": "9ebbac3d84adc7792742cbb8758ac6f9"
  },
  {
    "url": "views/qian-duan/2019/qian-tan-qian-duan-dan-yuan-ce-shi.html",
    "revision": "429283d03704fe239cf19dfe1663a1a2"
  },
  {
    "url": "views/qian-duan/2019/vue-cli3zhong-dan-yuan-ce-shi-huan-jing-de-da-jian.html",
    "revision": "f8f0c36cebd32bd2cad2a849602b7d6e"
  },
  {
    "url": "views/qian-duan/2020/localstoragebian-dong-jian-ting.html",
    "revision": "6006b55f2e68c8242ae33e8764141a6b"
  },
  {
    "url": "views/qian-duan/2021/vuepress-theme-recoxin-shou-zhi-bei-zhi-hellokao-ya.html",
    "revision": "cc44e61dab817b7ab62dc8c716b2a806"
  },
  {
    "url": "views/ros/rosan-zhuang-bi-lei.html",
    "revision": "21ff1c14c49b83af41ae61d7f2f3a010"
  },
  {
    "url": "views/ros/roschu-ji-jiao-cheng.html",
    "revision": "797a7f0d82d2d6b0a044d2217a7ee65a"
  },
  {
    "url": "views/ros/roszhong-ji-jiao-cheng.html",
    "revision": "9c88676e242b441841fa3755c3c4115b"
  },
  {
    "url": "views/sui-bi/2019/mei-you-li-xiang-de-ren-bu-shang-xin.html",
    "revision": "0b877e8a1e089c39d96aa03243123733"
  },
  {
    "url": "views/sui-bi/2019/zu-qiu-he-yao-gun-le.html",
    "revision": "d65dd23758933d4289e14b5eb39077b8"
  },
  {
    "url": "views/sui-bi/2021/the-fire-in-your-eyes-keeps-me-warm.html",
    "revision": "6d6a73f5d9b9ab9f7bd23322a546341f"
  },
  {
    "url": "views/zhai-ji/wo-yi-piao-ling-jiu.html",
    "revision": "f5b211c5343e9c1c75070aa7aa1b7cb7"
  },
  {
    "url": "views/zhai-ji/yue-guang-luo-zai-zuo-shou-shang.html",
    "revision": "9836b8af98a76ddafa0d3217f6e22cde"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
