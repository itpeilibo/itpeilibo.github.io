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
    "revision": "c7c15519de0213a854d305ced77a6b85"
  },
  {
    "url": "about/index.html",
    "revision": "492b856bccbfabfe59f18357d1f37ba7"
  },
  {
    "url": "assets/css/0.styles.23c617c4.css",
    "revision": "4556384efe225af6bff311c5199ec61e"
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
    "url": "assets/js/1.be210465.js",
    "revision": "62ffd44c5166c5a0c62d7f576c7c22dc"
  },
  {
    "url": "assets/js/10.e58cbb7c.js",
    "revision": "9b9c81fac7a6baa5b0c4a31c6cbb074d"
  },
  {
    "url": "assets/js/11.cf4deb80.js",
    "revision": "6559f52fe098d8c020e040671bfd6ea6"
  },
  {
    "url": "assets/js/12.f7659182.js",
    "revision": "24b12e268df72296571ec6d894a292a0"
  },
  {
    "url": "assets/js/13.a2203478.js",
    "revision": "bd28ae1879afad217ffa7a440ccdacde"
  },
  {
    "url": "assets/js/14.b78398ec.js",
    "revision": "1abd85805ad0f18abf58e3b2329fcf40"
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
    "url": "assets/js/18.283b3236.js",
    "revision": "a0ac787936a78f21183b49342c5d7cd3"
  },
  {
    "url": "assets/js/19.e2ee8c5b.js",
    "revision": "61f40ac0113b665f69bb38d16a191d17"
  },
  {
    "url": "assets/js/20.8cef986c.js",
    "revision": "abc49664071f37135e985f6add629393"
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
    "url": "assets/js/23.4c579801.js",
    "revision": "cd968d382c339d487f7141e0b13f4a64"
  },
  {
    "url": "assets/js/24.3db61bf9.js",
    "revision": "ae1fb8c06485a2e8398697e4bf55f6cd"
  },
  {
    "url": "assets/js/25.d2fabe6c.js",
    "revision": "584120469b71fa568941b6ef3462a434"
  },
  {
    "url": "assets/js/26.728522af.js",
    "revision": "1d35fc485fd3cdcf262c266af0a080da"
  },
  {
    "url": "assets/js/27.8c88e88a.js",
    "revision": "2af901f31d983cc16b9a373a858df222"
  },
  {
    "url": "assets/js/28.9e8751d3.js",
    "revision": "85979183239a77651bd46bf6199f6080"
  },
  {
    "url": "assets/js/29.b3f85cd4.js",
    "revision": "64e4a051c9df2657493852d69c845112"
  },
  {
    "url": "assets/js/3.a1ca14ac.js",
    "revision": "9875c00840a0dc188a019899765b5aaa"
  },
  {
    "url": "assets/js/30.e3d96866.js",
    "revision": "bdf0e54250da965887c67201fdd762db"
  },
  {
    "url": "assets/js/31.80d6b20d.js",
    "revision": "ee563c4e245f01ab7fa6a5551e49d75c"
  },
  {
    "url": "assets/js/32.9d958df7.js",
    "revision": "3cec4c093f31bc38d785c12c73f543e6"
  },
  {
    "url": "assets/js/33.962184f5.js",
    "revision": "f128eb5b1afd15f1fc6199aec00c6447"
  },
  {
    "url": "assets/js/34.3b9e0d1b.js",
    "revision": "73ba6615bea09b4ab39be9157e8f3cc9"
  },
  {
    "url": "assets/js/35.c7f2d77d.js",
    "revision": "a38434c7c8d677a0a667a24409f20c7e"
  },
  {
    "url": "assets/js/36.ff38430f.js",
    "revision": "4e54af1893c2cc4175d56001b8ecdef2"
  },
  {
    "url": "assets/js/37.928dfdee.js",
    "revision": "37d402562a5e9ae50c3754312f3d984d"
  },
  {
    "url": "assets/js/38.5bb04885.js",
    "revision": "2fa5d23c383cec3a10cfbd422f461140"
  },
  {
    "url": "assets/js/39.59ded7d7.js",
    "revision": "c6b880de8f0c3ccb482dd3b6b7e28ade"
  },
  {
    "url": "assets/js/4.79072867.js",
    "revision": "72bc6b7456b6b5ee24b02b4f91046706"
  },
  {
    "url": "assets/js/40.604979d2.js",
    "revision": "b5f8e287454c6db3707e37ca710edc29"
  },
  {
    "url": "assets/js/41.d5513bf1.js",
    "revision": "0ee0d74e215cc2538aac6cb9a8ac8cbc"
  },
  {
    "url": "assets/js/42.2bffacac.js",
    "revision": "8c2d1705d766eecac2d8c544388b538b"
  },
  {
    "url": "assets/js/43.71eec661.js",
    "revision": "50f56d6665d81b1ae92905f7b91461a5"
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
    "url": "assets/js/5.4134c77d.js",
    "revision": "c711f16fe231f7460d67ffc6b3f14584"
  },
  {
    "url": "assets/js/6.f05a3729.js",
    "revision": "cd06fbec01b0a50dd441c4bcac2e3872"
  },
  {
    "url": "assets/js/7.c88e5db9.js",
    "revision": "fcf0248ad1413c003bf86bd4ac011fef"
  },
  {
    "url": "assets/js/8.3bf6b9f7.js",
    "revision": "5b8e63b86f25dd8c79ce81b1aeb5abc6"
  },
  {
    "url": "assets/js/9.0522ef9e.js",
    "revision": "ca445d39fdd2ce7848ca5233fda5c3bd"
  },
  {
    "url": "assets/js/app.0a1137bc.js",
    "revision": "98e14a1c0d24841ea7f418b8ff63b1ba"
  },
  {
    "url": "categories/DRL/index.html",
    "revision": "50770518a6519e09602ce7f3f1817e83"
  },
  {
    "url": "categories/index.html",
    "revision": "2afe7e513791af9024756ddde2654e5b"
  },
  {
    "url": "categories/ROS/index.html",
    "revision": "4e80f742788e1f1f4a6db7278aff7970"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "bcfdc564bfdc8d2d17f2c950043570fa"
  },
  {
    "url": "categories/摘记/index.html",
    "revision": "3dcdd7ad9580ec51b9505245291a8fa5"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "118d18fb966f385b2a5e527331e76d94"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "07acb2ed8626ce10d89b0ea102f983a5"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "ce71398f8b1dc6e70c8ee699081dc0b2"
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
    "revision": "3a7f28850b9a92a4fc9ab96123d3a789"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "2ba009cbd1df60cacba79c98452233a3"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "e4077967775cb264d8e4eb7e6d75010b"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "b2f6bb92ef1ddfed251b21b590e26774"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "cd10ffacd2135e8b059829a58a5a6e10"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "9ac763a78c6a69a4a3e56b2506fd0e86"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "0c9989380b64c162be4e20bc4b12a684"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "56b77e7d5282e467e91a10f9c94e0efd"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "0fba5289bca491ca9445979895001191"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "1a861114f14781e956c49d7ddbdbfd21"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "346f661b4b8a4c3e0dcb62964518ec36"
  },
  {
    "url": "note/index.html",
    "revision": "cf3ff2b35de00c274688eb66d3af735b"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "e8f706eb44e5f600cbf24c4d4f5dc600"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "2207b685d53aa08e402ec69c1d6bef9d"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "f0095ed70f2a98988938e1cde5534943"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "1c57ba9d654a2bd48f1c6b9dae4bc6b0"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "0824ac08b121b6a0e868a116085df154"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "d003025f684afb75d3d6d0ddce908bb1"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "d6a0b67c98acba13a135c2c17cb257c5"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "662eb586903c0c275b1804064a21ad1e"
  },
  {
    "url": "star.png",
    "revision": "f839cadd169727f31a195d0b53d05807"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "6638fc252d36c976a0912fc16fa3e665"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "0aafb3195afe11915a780177b799620e"
  },
  {
    "url": "tag/DRL/index.html",
    "revision": "79b59d3c1b877fc27dd094c61bf5c6d1"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "669c4b2583ad8fbd12e47b517e9e4bde"
  },
  {
    "url": "tag/index.html",
    "revision": "9c877f868f9a22560af3806b37e8655c"
  },
  {
    "url": "tag/js/index.html",
    "revision": "8a28b0a884b811709e7ba9eb04937da7"
  },
  {
    "url": "tag/ROS/index.html",
    "revision": "ca0a1cf9b86c54ccc78b0f1f36fbdffa"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "a35d2d7c14d6d9c00270b2f2f7900c57"
  },
  {
    "url": "tag/vuepress-theme-reco/index.html",
    "revision": "58fe911ecc860c830f8c3b0b55d88365"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "6a232c7e01bacf50e95ccd138c93ea81"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "2e0ae06cfcec7151e23e0e6bdfb83ad0"
  },
  {
    "url": "tag/句子/index.html",
    "revision": "846d4ca74d444123a53a1ba1e624d096"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "7c0ad3fe75261ce1c7a34e560f46f77b"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "58e15e57e79857a46eef4821a1c5275b"
  },
  {
    "url": "tag/诗/index.html",
    "revision": "8526ef6c274f57cebeda2c827226eadd"
  },
  {
    "url": "timeline/index.html",
    "revision": "c7eccb0e6289eeb9feba39b8eb993ae0"
  },
  {
    "url": "views/drl/2022/spinningup.html",
    "revision": "085904f2bcf2f6d19da9811f26b37078"
  },
  {
    "url": "views/qian-duan/2019/qian-tan-qian-duan-dan-yuan-ce-shi.html",
    "revision": "8d91b08754247304b6e9f95d4370b314"
  },
  {
    "url": "views/qian-duan/2019/vue-cli3zhong-dan-yuan-ce-shi-huan-jing-de-da-jian.html",
    "revision": "b919c4e1cc0b1b483de6bf093b776c7e"
  },
  {
    "url": "views/qian-duan/2020/localstoragebian-dong-jian-ting.html",
    "revision": "ccea958d1a9b6554c679ca6d3da29f17"
  },
  {
    "url": "views/qian-duan/2021/vuepress-theme-recoxin-shou-zhi-bei-zhi-hellokao-ya.html",
    "revision": "5df84ee760a70dafb078a0e7d2d154cf"
  },
  {
    "url": "views/ros/rosan-zhuang-bi-lei.html",
    "revision": "f74a004b197866c8361247dcf38134cb"
  },
  {
    "url": "views/ros/roschu-ji-jiao-cheng.html",
    "revision": "f6f4631b62ac6275a724bfdb6ebd7258"
  },
  {
    "url": "views/ros/roszhong-ji-jiao-cheng.html",
    "revision": "339a2ae69f8b1dd95c04d854d7d676d8"
  },
  {
    "url": "views/sui-bi/2019/mei-you-li-xiang-de-ren-bu-shang-xin.html",
    "revision": "918f3f26a111454acf979600145ef10d"
  },
  {
    "url": "views/sui-bi/2019/zu-qiu-he-yao-gun-le.html",
    "revision": "ae47bd1a09bd59743b1dfab425c947f8"
  },
  {
    "url": "views/sui-bi/2021/the-fire-in-your-eyes-keeps-me-warm.html",
    "revision": "de21cf5c118a7d21b4b69d224825af5f"
  },
  {
    "url": "views/zhai-ji/wo-yi-piao-ling-jiu.html",
    "revision": "7c1f24d338ea3978c5b504084c73586c"
  },
  {
    "url": "views/zhai-ji/yue-guang-luo-zai-zuo-shou-shang.html",
    "revision": "b5e400b81e1ed83c00e604e4eaecbc9b"
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
