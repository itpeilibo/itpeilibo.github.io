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
    "revision": "e5748744adfce8444c89033ac4e33527"
  },
  {
    "url": "about/index.html",
    "revision": "0c3aa23743cb3b68c18f1fc5a28f4fbb"
  },
  {
    "url": "assets/css/0.styles.f183819c.css",
    "revision": "140b42a088eb715cafbd757c978db328"
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
    "url": "assets/js/13.2f49c890.js",
    "revision": "4005999065d8c0ed22bfe993d4c18902"
  },
  {
    "url": "assets/js/14.e0ef5988.js",
    "revision": "c23fce5c9b9bb874becdc41df89bae96"
  },
  {
    "url": "assets/js/15.311c48c5.js",
    "revision": "6b3ed3e5a48e15b71534660c8d4cd45d"
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
    "url": "assets/js/18.5559b976.js",
    "revision": "43a702cf007712d957694952dfd9a0dd"
  },
  {
    "url": "assets/js/19.ae85de83.js",
    "revision": "f6b915e3442ecce2eeb7b7487258340b"
  },
  {
    "url": "assets/js/20.af1f797f.js",
    "revision": "006aa28c2700a562cc1fa7c04cf480a9"
  },
  {
    "url": "assets/js/21.6767d565.js",
    "revision": "cc668962e7d567d444e775f654282495"
  },
  {
    "url": "assets/js/22.8fe72495.js",
    "revision": "a6a1060eb8bfee4811b551e6b0fc6ead"
  },
  {
    "url": "assets/js/23.51ac6f9d.js",
    "revision": "f9d67f6be35e9ce89c232cdf73f983b8"
  },
  {
    "url": "assets/js/24.d7b35f6e.js",
    "revision": "0c327582319057b16c569dde61da2f73"
  },
  {
    "url": "assets/js/25.f7b57d51.js",
    "revision": "2ab932172d6803254c22d5d28841f8e4"
  },
  {
    "url": "assets/js/26.9ebcb9ee.js",
    "revision": "9ab91da5aa99560ba400d8ad8388b968"
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
    "url": "assets/js/30.8399b3b4.js",
    "revision": "7e55f493f402cf0e69b220f7b5791391"
  },
  {
    "url": "assets/js/31.99c1bbd2.js",
    "revision": "ea9d1ccaa0d7648232c26ea184873066"
  },
  {
    "url": "assets/js/32.9dba37c6.js",
    "revision": "06379cf3af79f02115dd1e119b9606e8"
  },
  {
    "url": "assets/js/33.f241f920.js",
    "revision": "902317f5b92eb2226fd2c08c1065ce66"
  },
  {
    "url": "assets/js/34.a0c3eda0.js",
    "revision": "c55a2a31d976074fd1f16cc5aeff58c5"
  },
  {
    "url": "assets/js/35.331059cc.js",
    "revision": "7d072e098ac42ded9798bcbe9e2102f2"
  },
  {
    "url": "assets/js/36.48a512c0.js",
    "revision": "d675d614cba693799d60afaabf536023"
  },
  {
    "url": "assets/js/37.50a3177b.js",
    "revision": "2bb76068b55e8ffb88cfc4ec8a9bdfc4"
  },
  {
    "url": "assets/js/38.58bd5eca.js",
    "revision": "9a06e68918ae396164f50970588554b0"
  },
  {
    "url": "assets/js/39.4af73fe2.js",
    "revision": "3b9ca0ebebbe1cf3aabfdfd5dc3dbad6"
  },
  {
    "url": "assets/js/4.a405839d.js",
    "revision": "2265e3ac9973a5df38cb04b72b933a01"
  },
  {
    "url": "assets/js/40.38d5721f.js",
    "revision": "b3c5bcf096e73a300b81e05693cad78f"
  },
  {
    "url": "assets/js/41.67fbbe10.js",
    "revision": "34098ec75441e0385edfb29231e0d493"
  },
  {
    "url": "assets/js/42.7064009a.js",
    "revision": "b7d67491e8a985e95cbcbfa31212d1de"
  },
  {
    "url": "assets/js/43.e406f01e.js",
    "revision": "da712460f8054e8d944c370b93c9dce1"
  },
  {
    "url": "assets/js/44.e9f32825.js",
    "revision": "69a68da44a8c3175720740c88b08f145"
  },
  {
    "url": "assets/js/45.c04453ef.js",
    "revision": "330d76fa01d975807b7e6670d73cf851"
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
    "url": "assets/js/app.081325d9.js",
    "revision": "5d32bf8cddc565ba35045fcfc468d14a"
  },
  {
    "url": "categories/DRL/index.html",
    "revision": "d95e3afa0d19f31cafc15e180ba1e98d"
  },
  {
    "url": "categories/index.html",
    "revision": "8e8d607144f04a963cc2f269e85e8e2d"
  },
  {
    "url": "categories/ROS/index.html",
    "revision": "901e68fbf217c4ce93b3b9c4117e90e3"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ccba2af6e9880e9c1510793297177fb6"
  },
  {
    "url": "categories/摘记/index.html",
    "revision": "580bccc530e9c1e22d3eef8fac8776e4"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "b1bae2f8e22b25d3813f54210f2a8648"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "d7fe450798740e90f332367878294ce2"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "d603462ef9fa82e1b95424600c7e9748"
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
    "revision": "730064cc74a655b23a53f89f88d4eb86"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "a70718577d4c6dcb5ebc570cb0140600"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "30464919b088c6c672a27a9c067e3cc6"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "09585ce10ad99cefeb1175e1940003a1"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "25aea0e23f0cb93d01719c4b1a6797ad"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "5ffa1b315895874de8590193a57514c9"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "9112d8f43fc58b3188f419764c74ac54"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "f3415311b73600b50d6295cecda965a6"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "0a3ce8ec6441a6594b632fc029556614"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "4f0689abd20a49541adc06942c64c5a3"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "b4f4b2de4e5b5a6b2688a432af9acb53"
  },
  {
    "url": "note/index.html",
    "revision": "14a18a0eae461d0ea4d602d585352254"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "0cfa79ab04a2e1cf3f2b90195bf18681"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "594df106de978520ac7a91590d5a0fec"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "cdf14c3f041e1e36f2a45b71754f671e"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "a5093af3ada9c85250c3df9cdab5a016"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "f7e29093e2d1f42f15a40d7152ee2d55"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "815e2af2a701cbb40c2f4b3ebc0f9c33"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "f9cd3562f7076ba39ce3e38cfc20f732"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "5267ab4ce3065796b13f2410434755bf"
  },
  {
    "url": "star.png",
    "revision": "f839cadd169727f31a195d0b53d05807"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "52dad7ea539b7ee94965e2fa7e479ebe"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "74679c6379a402849440bb445f4fe080"
  },
  {
    "url": "tag/DRL/index.html",
    "revision": "d9e0eeabf90e9458135312c728d43166"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "f96df06f3b674e4563f52107c8c4fee6"
  },
  {
    "url": "tag/index.html",
    "revision": "03999cc5b9ce16e462fdac5087e73efd"
  },
  {
    "url": "tag/js/index.html",
    "revision": "004967fc294b7a9532544d7ebc9f3be8"
  },
  {
    "url": "tag/ROS/index.html",
    "revision": "3519f316dc621a6cd8b1155897486463"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "21d441b57e92469b55bacbf331e5afba"
  },
  {
    "url": "tag/vuepress-theme-reco/index.html",
    "revision": "fa6b40ea28f79649dda182f6c8fea225"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "931cdce46081debb0dac30cc25717027"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "995ee196836c0ff32f4856ce203ab554"
  },
  {
    "url": "tag/句子/index.html",
    "revision": "4ba2998623dae9242f4d39c4f887c3f1"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "2f22c71bba4095dbb62c4d6cbd0bbdbe"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "c1547a87521d3b6fe4a9fcea64d79213"
  },
  {
    "url": "tag/诗/index.html",
    "revision": "a4307b7e879ad4b68138c85b1511980c"
  },
  {
    "url": "timeline/index.html",
    "revision": "6697fd29b0afd6b89181f6adb958a3e4"
  },
  {
    "url": "views/drl/2022/spinningup.html",
    "revision": "256fc732926c047a15ed84ab229e9f2d"
  },
  {
    "url": "views/qian-duan/2019/qian-tan-qian-duan-dan-yuan-ce-shi.html",
    "revision": "9bc88075e07e191cbdc062aa75e5c7f3"
  },
  {
    "url": "views/qian-duan/2019/vue-cli3zhong-dan-yuan-ce-shi-huan-jing-de-da-jian.html",
    "revision": "8ae0ec3989a6063c13aeebfa907bfcd3"
  },
  {
    "url": "views/qian-duan/2020/localstoragebian-dong-jian-ting.html",
    "revision": "0094868253be07c812b26aea173e2c61"
  },
  {
    "url": "views/qian-duan/2021/vuepress-theme-recoxin-shou-zhi-bei-zhi-hellokao-ya.html",
    "revision": "030d3a4ca4df2bd7a0a98941946e57f4"
  },
  {
    "url": "views/ros/rosan-zhuang-bi-lei.html",
    "revision": "2a8efaa705d7d07792ab56c8d159566a"
  },
  {
    "url": "views/ros/roschu-ji-jiao-cheng.html",
    "revision": "b9c255a440345d5ac33ec9d8b891ec73"
  },
  {
    "url": "views/ros/roszhong-ji-jiao-cheng.html",
    "revision": "23947e0a5bd1438db107c8a71f034fa5"
  },
  {
    "url": "views/sui-bi/2019/mei-you-li-xiang-de-ren-bu-shang-xin.html",
    "revision": "238a922a4562e157de1853282ce8af45"
  },
  {
    "url": "views/sui-bi/2019/zu-qiu-he-yao-gun-le.html",
    "revision": "9f9922c3308264d6ca1ef69506dd8f1e"
  },
  {
    "url": "views/sui-bi/2021/the-fire-in-your-eyes-keeps-me-warm.html",
    "revision": "ae69a773f21485a069d4f84fa94ac9a9"
  },
  {
    "url": "views/zhai-ji/wo-yi-piao-ling-jiu.html",
    "revision": "0848bd712837ad22197d56db401970a5"
  },
  {
    "url": "views/zhai-ji/yue-guang-luo-zai-zuo-shou-shang.html",
    "revision": "b5cffbbb4553500fde95088474a1efdb"
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
