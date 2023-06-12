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
    "revision": "f1777c0ddd7f7ee7cd0052716a8fce7e"
  },
  {
    "url": "about/index.html",
    "revision": "09db35bc02a70e022db796106805d253"
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
    "url": "assets/js/13.b619fca3.js",
    "revision": "40df27338586c7d10739920497e81a5b"
  },
  {
    "url": "assets/js/14.6ac97393.js",
    "revision": "75d28863d5d968a79d4c29971b6c45b1"
  },
  {
    "url": "assets/js/15.bd785bf9.js",
    "revision": "4a87921422a64379862ab08bda6c887a"
  },
  {
    "url": "assets/js/16.eb1ab9c8.js",
    "revision": "2f1fe2910ef63e7f6bd7804e8f253a8f"
  },
  {
    "url": "assets/js/17.70801cde.js",
    "revision": "50effc1217a07793fa10e193e494c717"
  },
  {
    "url": "assets/js/18.913b4605.js",
    "revision": "8525dc2c56d36d3d825f26c73257ffaf"
  },
  {
    "url": "assets/js/19.a509f32e.js",
    "revision": "f2cad36afbd8e3390a4215f39c25254f"
  },
  {
    "url": "assets/js/20.83fe88d5.js",
    "revision": "dc4c41a018b0472ba979ec9fc11f1a3e"
  },
  {
    "url": "assets/js/21.55396fe9.js",
    "revision": "1a0e26e1486dbe9f3260ef42d8eea344"
  },
  {
    "url": "assets/js/22.c8a910ec.js",
    "revision": "61981f0954d0fda3ec053003278542c1"
  },
  {
    "url": "assets/js/23.51ac6f9d.js",
    "revision": "f9d67f6be35e9ce89c232cdf73f983b8"
  },
  {
    "url": "assets/js/24.2675d276.js",
    "revision": "ce1d7fc7421aa1246a7c6805314d5f40"
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
    "url": "assets/js/29.db0278fa.js",
    "revision": "9669ec40d0b2dc4f3acb0c75c1547470"
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
    "url": "assets/js/31.afd62223.js",
    "revision": "b0d2c84f54187d5002a29ad66802911c"
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
    "url": "assets/js/37.c60ee00e.js",
    "revision": "dc559a985734f6eab5384487fffb446e"
  },
  {
    "url": "assets/js/38.02d2fbda.js",
    "revision": "ab33ede7fd99278c2ad14d33ca4c7728"
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
    "url": "assets/js/40.4344b493.js",
    "revision": "90bc4705260688a5c3dc9a6c60b2e48a"
  },
  {
    "url": "assets/js/41.9cff2cbc.js",
    "revision": "721023488ca00d919b539c0023bea250"
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
    "url": "assets/js/app.7e877b0d.js",
    "revision": "c02710025ccc8143a8473cc366ca5591"
  },
  {
    "url": "categories/DRL/index.html",
    "revision": "e1eca98a30f59299383fde42a0f7359b"
  },
  {
    "url": "categories/index.html",
    "revision": "80e9277d31d9fb63290c0e6994e045f8"
  },
  {
    "url": "categories/ROS/index.html",
    "revision": "08a770153cdf2b8012146158cd45540a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d19efce288efa5e3ab3b25b911fa0ce9"
  },
  {
    "url": "categories/摘记/index.html",
    "revision": "17a89e54ff0e703d800fa517694b11fb"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "8d8cc0bdbe73382c4addfee79d8f429a"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "6eee257021ca4cd42857836ca429ade0"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "325f169e3b34b84a2cef5ec4f82c6fb6"
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
    "revision": "5701f10ba294a21dbf8221975f1d17d8"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "f585c9ec6635f494a024402027948a90"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "cc7aa552f3a73010691094de6ff7f8f3"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "b4be694ab3acf6eb60247a5e2b8963c3"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "0e4fd8a8ae76b27ffe9f4b72e8506310"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "8714d303020761395b4e635aa393151f"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "3907f9552272fe2a8ea5bc7866a39d58"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "305e08b61699eaf3076763991ca8f500"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "a488b3516901e82173adf087f50e705a"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "276f2ce22be5a23d52e549e9c75dc50e"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "083401deebee0ddfb64d62f1896c4753"
  },
  {
    "url": "note/index.html",
    "revision": "d8be6693ae255cfea664b081ff2efde2"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "48f49be155baff0bc5386699baf27a11"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "6e84319b9a1885957054c13430a40973"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "53520b6a509bcbf033dbf1787b7f0bc2"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "58dcdaef20cbdd46d6f7d8a337503d70"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "2145edc3bf44e78ee3e89fce5667b19c"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "e8bb04526969c2811130d2ac963a3b9a"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "31098ec0184fbaa72169ced29a1ad027"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "df099a82dbca1d526988cd63242ec28b"
  },
  {
    "url": "star.png",
    "revision": "f839cadd169727f31a195d0b53d05807"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "b4d56adbd93090035813f2da35356d13"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "ccadc3aa5df0d477b857d195a42d1a84"
  },
  {
    "url": "tag/DRL/index.html",
    "revision": "39576edfac4cd287cd2c0fced62e487f"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "5b9b11e07dd8046818285320d02fdfb2"
  },
  {
    "url": "tag/index.html",
    "revision": "d70cb2b54a76445a5a72e2775644aecd"
  },
  {
    "url": "tag/js/index.html",
    "revision": "edaad546b8ff744ba078d5e86c9579ce"
  },
  {
    "url": "tag/ROS/index.html",
    "revision": "cbebc0f5a1e4199f69719000e43719a8"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "a1984695366c48590e61b593ff551d56"
  },
  {
    "url": "tag/vuepress-theme-reco/index.html",
    "revision": "8489969cad42bb2cfdc450d60bca4a9a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "05ead9f4f08967224613e7b0625fce72"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "84de1e3ac5359b74ea047eabc6c92819"
  },
  {
    "url": "tag/句子/index.html",
    "revision": "aefb5424028b24e74c10be5371fdeec0"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "6ae102ded194d8151d9aad7c941a3bf6"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "4e68e6a09cac4b7a277465292ba43499"
  },
  {
    "url": "tag/诗/index.html",
    "revision": "3db92ffd83442c03dab74cae0b40913f"
  },
  {
    "url": "timeline/index.html",
    "revision": "457246ae66fad943ffeaa2f49033df50"
  },
  {
    "url": "views/drl/2022/spinningup.html",
    "revision": "a1ea0b28ed00137c92e17acd871c3599"
  },
  {
    "url": "views/qian-duan/2019/qian-tan-qian-duan-dan-yuan-ce-shi.html",
    "revision": "b19aa85783827551d7f651f6c3517a72"
  },
  {
    "url": "views/qian-duan/2019/vue-cli3zhong-dan-yuan-ce-shi-huan-jing-de-da-jian.html",
    "revision": "61e1565f495f7c1dadc64e55577a2cd1"
  },
  {
    "url": "views/qian-duan/2020/localstoragebian-dong-jian-ting.html",
    "revision": "e0c39e7a0c770f88f891fd5f35930977"
  },
  {
    "url": "views/qian-duan/2021/vuepress-theme-recoxin-shou-zhi-bei-zhi-hellokao-ya.html",
    "revision": "55dfde31cfb546e163b61f2e2089f6b9"
  },
  {
    "url": "views/ros/rosan-zhuang-bi-lei.html",
    "revision": "df6de949581de3c221ab65487cf68705"
  },
  {
    "url": "views/ros/roschu-ji-jiao-cheng.html",
    "revision": "fbee2544b1d8c2fb9f919773224fed1f"
  },
  {
    "url": "views/ros/roszhong-ji-jiao-cheng.html",
    "revision": "563dd1198b30b40cc0554afbe1fe04d5"
  },
  {
    "url": "views/sui-bi/2019/mei-you-li-xiang-de-ren-bu-shang-xin.html",
    "revision": "287deeefbc94bf7bc7a8fb967089df1e"
  },
  {
    "url": "views/sui-bi/2019/zu-qiu-he-yao-gun-le.html",
    "revision": "4091b177d7a502f0157bcb7d571f1376"
  },
  {
    "url": "views/sui-bi/2021/the-fire-in-your-eyes-keeps-me-warm.html",
    "revision": "fd004758b6e689e40b8f8247f772fa9a"
  },
  {
    "url": "views/zhai-ji/wo-yi-piao-ling-jiu.html",
    "revision": "3aa4a8ed94e80b12038c6a74d1a688fe"
  },
  {
    "url": "views/zhai-ji/yue-guang-luo-zai-zuo-shou-shang.html",
    "revision": "6f6161bd45e197f098dece6e3d157607"
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
