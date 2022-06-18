'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "22464c8bda6a49f465dd017fd25d8d61",
".git/config": "3f17668ee9841d6af8002f0b4cfac330",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "914b2ef450c372b09c47db7e9b5b84ae",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "723e42e4e26c39ceca9aa4f0db28a8d0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f32ccbe1041091b69386ca16b055b4da",
".git/logs/refs/heads/main": "f998ae51e5d953af2c99e7ae0c9a67aa",
".git/logs/refs/remotes/origin/main": "f7db08bf17e02ef67337ee634ccf6abf",
".git/objects/01/9182dd6b5f8e6b47afc4de43a51bff152c159b": "28847e016797982369c7fb503246faa5",
".git/objects/01/e23a7cb2eb16d895a978d26ccf248fb00cbffb": "512e342da339c6cf43f59094a65c73eb",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/03/4ec1c525c0430d60ba020cf8a3adfe564a0fa3": "b6e0a9df1639d71c2539509af6bc2267",
".git/objects/05/41b99d7cd5061f21c3ae8b0a9872c1a1d2dfcb": "812d317f2b2babea9d9d0a6a21ca5aca",
".git/objects/06/5099c7f5d18c2dbc277a0786f698cf27140849": "48e0ba4b40bc48db64c60958febca0cb",
".git/objects/09/9a142c385f31e50e9e7252c6aa59b2bc4bcb2f": "c9d730dce95facc382f87c83efa81e40",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/14/a51783cc1357c5f715317fa76343134d3ef960": "0870f655ecdaa49fe58a58a967702e62",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/1a/52f6d8cfd7bf797714b78a02c98e9b2cd528df": "6c6985b04f9fe810ba2a5f358561a679",
".git/objects/1a/6004692de0d4c9aaa5d7157b1e58e4adf64cca": "a6180eca49430ae85764154a5053b1c3",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/1d/a7009c985d6395904f3083629ce7eedb40d82a": "1d9f5c37e0cbe6f175e3865443fc2905",
".git/objects/21/0023f4dd31ebf56de09eb42198706727a6e631": "cc73fc3e8293a0c12c53d3c5de037654",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/28/367e02157957687dad2d3961b284c92da14796": "2839b0ca45f834c49786095a1f2e4998",
".git/objects/28/7070d25c8ee3659827b21e36ee7a6ea7130b85": "e25f7949669c74e90607f3fe3f630f72",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/313a8be5009154feaff5c97ef55dc964110b41": "ebd05c22a185349c071fa7ba6c0ca326",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/31/6a704a1ea90ddcdf6dd1784706b2bdafcf40b3": "b33edbf410095125d48f789acc25c5a9",
".git/objects/36/2bec616a5d47c46743872bb4baefc4e8646828": "8bb8f697b9e135c375bc6d5e023c44a8",
".git/objects/37/aceae7141acf7946a5b009f82613285bffe3bb": "6e9b4d961b257de2bb08d7630a95a59e",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/5b0ced239e2f6a1540f8363e29c47502ee5592": "68a83cffc939ccbeb0124369a564b339",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/43/dc65c981ff570630d9e3dbcef0f7f025ffa66e": "cab20be5bb184aa043cc592c4c86e1d7",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/4c/86c14bc73b02c79308e41bf592d10a8f6e66d3": "2651ff35bac9d0ff8b54f540fd6aefa9",
".git/objects/4d/ae04eff0aec1f5b130481c35273b6d5d6b8446": "58d2021a49c80cf488f28a20e9e5683f",
".git/objects/4d/ed8668d95a431d58ea130a72be40f8bfc73f96": "e9366deeb22563f2791886c16a9cde99",
".git/objects/4e/086117c86018818db4ac7a94d7393d9c0b9cd9": "30481479732510664eff037f1a3d3aa3",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/a70548be92ce8f9fa08a658f6836c54087953c": "2b3de2f55f9f1ebc4c8064c4cca5fa6c",
".git/objects/56/290697b6fe21435a96c666d5ba8a35ebd2b359": "7cf76ac0b136cd9871c41371849343f5",
".git/objects/57/098388edcac204078d2853e947741839db823a": "db8ca96f63e3e67d22443d27fd14bebc",
".git/objects/5e/8c6a16031fd2c9d3a7f708be999d79f8fdc6ec": "d3039fe5d44c5ac25444281b998ebd9a",
".git/objects/63/5b56d529fe260367d3b5b0276aed139933b8cc": "a4f08af0ca6099f27247efe6d57074fd",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/69/55922357d84030a33c7a8959a6eaafc537fc6f": "672146a86a0de46641533c234bacea88",
".git/objects/6c/6f3bf2759113a3d176c0bc70146c2bfdedb175": "6115456308e0970d7285bc9955811c34",
".git/objects/6c/7a1c362dcf8647c92a97243922584188a4fb3e": "14e4d065ad23fbc54c2b160e0cb10f4e",
".git/objects/6d/85653e33425e61b30adb1105314c15f6a62795": "b629ca2dc0ed3a7d229847aadc4ac987",
".git/objects/73/e50e081ead43eacf3c594e74bfc4f7fd4c9cc2": "b43f274233f0dface56feaff43a82d2d",
".git/objects/74/51ce52b6917a2b89310fddd0f6596fc6131f62": "276068a8487a6bbc46324a30e34dacaa",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/74/f05b4456aee3cd2780f6e3ab3beefe3268f732": "bad84793d307964fbace91a90635a8bc",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/a8765bcc3f1951b1a9fead0184db516d6451dc": "6ac255e1c8b13ae71865002f558ea5b3",
".git/objects/78/5209041ca896577c799f896261c0066b485d85": "cff3307cdcddaf4f511a4d935224f17a",
".git/objects/7a/b1cce5bf267102092d13c8f48c2dbea7d8eb91": "1eacb645196d0471d77a9afa51825268",
".git/objects/82/d5aa432dbe48a5ba6e2030d41be8eed60028bd": "4f56850d585c70e8dddea0b0cd47fb35",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/7e060ab595bcfab737be41cdb9945f2685782b": "548dfeaac21c5d93583457a7a98a5558",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f8c9c5600131c04ccb7d9194a7558f03a9564b": "bedb5992378bc1327dbf4a0e11c9eb9b",
".git/objects/8d/a795900ded719058cb58c873acdf2cd57deb25": "5032cb4fbdd7f2e6c586f14b61db7a3f",
".git/objects/8e/6ede544b38eaf3cd1d83e8c1169cafaa383610": "24c49e087356b284770a21e2c6209841",
".git/objects/90/dbf4eb51dabb6d6dbb292d4aec2aa749d85ab2": "37db9afb46e381180242082c2c5ba82d",
".git/objects/95/471e8f25760a2d2148e491e2e4c9a90afdc896": "c7e926635ecfba4b5d0319a41c5ca3b2",
".git/objects/96/1e395b5c629ab29e0dd2a5e3339d896047bc6b": "0c018a3de8690cd03f46c540e1e56abf",
".git/objects/96/f482383106813b02d5ce357637ae3f532e5f46": "d5ef4f696d39601985f794b5993c2e82",
".git/objects/9b/5a0a6d26eb2e670fd22615b42640665ef23c19": "b0295b53d228f40fa24f328ef5d3ed20",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a0/c2f31421f901b39ca0ff64860c87376551bb3c": "31d1eab5420710ec02c48f9839f1a175",
".git/objects/a3/4a8b6e197b3d577670b9918e51fd8cb6c41f7c": "271351823873501331d34ca9ad8a0fb0",
".git/objects/a9/9c9bd4885463b9f27e4a406c1eac8cf2f13dbb": "6f46d0a5b886b1a37a82ec56676764a4",
".git/objects/a9/f695fead2e7997ef75b34ff5130c34476bea82": "9b423749a0236f4809715e80ce1e4490",
".git/objects/aa/fce800725f1f792b3fb83c1da2820a0b10b52b": "3ade2696ba127d8b476fe2d79abebbaa",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/b6/3a4355638577301e96a7c8238fa6f1156cc56b": "d4891e31ab25f2b9666ca2ac1328899d",
".git/objects/b7/310148b90893a223ecb38e30f2c524cc982806": "8ddc96aa218d2e0c8ab2fc9cd2b1366b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/0a07b26f0610aab9b9e3b36da7d7ef9edb113d": "b1f22ace15c7e85c358264439a05c2d3",
".git/objects/ba/243819f17a24b13520db934ab449c52276c9f3": "9408f5abeca2a0656d62ef43a5d2a476",
".git/objects/bd/06142b2fe883827d4e2a0c5276b59609ce49bb": "800466655b0be678903f931db03ff640",
".git/objects/bd/b1569d91fce98f8c92025ec3dc8fb0b0657017": "8beb2e6cc6cd075a40e6e16b26165724",
".git/objects/bf/8e5ece94190472863fe2acd1e4dc48130d865b": "73d60a6a22f3a1a68eb5b5c8492fe183",
".git/objects/c0/ee2c06115acdfd6b2d9c797bfe5fefe36fb66d": "1483e5c1ad4ed0d4c33d827ce09c791d",
".git/objects/c3/63f80a7c45ca255ef8800a0a07da3de6dd1734": "ae8d6ae6ccf20e81301f475c2d4aef5c",
".git/objects/c4/2e7ea4793a8e91ccb49f02309902c9997b4662": "96aad99636a3242baff1a17c30d2e514",
".git/objects/c7/9350bf821d9f0a733a69c478338a5dd840e10d": "532378aee6706979c264037e3859bbe3",
".git/objects/c9/03a4800262abe5183ad346a91e5a07309d2245": "9401fce971b58ca076d4f826009df5aa",
".git/objects/cc/1d368e35e120d6202262a0633b5b5fba484143": "9c5e85478ee450b83ae0a75bddb3b942",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/4941111cd58a9d5a00095cc49348517fbd9cca": "e471201a432aee51915d7c9cb5cee17f",
".git/objects/ce/1f8c3f2303c976e219a9a13e3f1795a0b1041a": "9c6faea915e1fe523e191890e878a118",
".git/objects/d0/041cacb24a486ca19d2e60d8c3efa937bd84cb": "cc86485d6475da3329fd481d6c6daa15",
".git/objects/d2/b7482b75516c2b5720d332c67cba1a39d153e2": "8843ea60454a87eee5fe27d620142309",
".git/objects/d3/23af534c44afa8add083c68b4651a0c78b7891": "2bc024a4ecfa410b9092e35a04f83edb",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/d4/8e7f26630810e8458264d667962affbe3c8276": "99d012f86d0a8006842fc26e9c82ca72",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/9247bb11872d0334abde373a430f9a3f5525e7": "704af5b96ef3199de51fd05055244148",
".git/objects/db/62dbbfc13b15e7cc621e9afb7ef6ae86f49dae": "ed5a303e78022605ed0528db55c758b9",
".git/objects/dc/ee56d7f5296db11201c4818e8614e5a5704ebd": "e1dd1218e6b8a1aebaf7bfe36fa4dd52",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e2/7b5a65fc23723c0aed052ac0765ce8cb1c02e6": "2abb93ab3ed2130ff0a7bc186165f507",
".git/objects/e2/f2ef357fd628517c29a90ef705f5a63cf9a2d1": "bedb43a2f08eb19466b112d47da09959",
".git/objects/e3/79b8fee2d0d5443904309cac2b33c80ba3a736": "ec9da35f2c15ad9b4c343db1a3cc8415",
".git/objects/e5/09e7ba260190c164fb2bd4c90eab282c9448a8": "bef2dd135b7d7bc8df0079f910d35e8a",
".git/objects/e5/b77ffbf5833bce409b388cce2b06b117dc3850": "cf0197ce8239a4d74a5fb2bcb60dfd3d",
".git/objects/e6/165f747000a8a3c131bddd4b3197b60e34931a": "3699778bf6d1719b6e52df50ddea39cc",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/933d33ed890fa2b3ea59e3ac61842737a55c94": "f7d28706b43fbc076143e3dc83e111fc",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/06df227196943bf20a120a2b69832a497cee7e": "dad243f66559d2eeb57e4b4dc256e683",
".git/objects/f0/c173266c3a49dc07eafa9940adcb7d666e1078": "9e163bb3c4cc466895d7a88d45845ed3",
".git/objects/f3/2282d23381661dc45855280e67c20282401bcc": "b7ea9fc26b823b97328f6072368db608",
".git/objects/f4/438cbea623b0eede9c9aa0da729b09e198c088": "21035836269cf56b3f840a578cf25b9e",
".git/objects/f4/5da9dbf829012978853da90d2a3fc777f6b2f6": "8d4d2317e0a52af1f2864590c2e7307d",
".git/objects/f4/91a930bd48003bd30e3e5dd72c3b78d73ee884": "5ce98d3b85f105e80ce6897130b22e90",
".git/objects/f8/f65ff2d3ddac5f2b78ad9776db7d8b943d1dfc": "cf265a8d218487bf36dd815fa645a244",
".git/objects/f9/1f15ff3cb2665add41a7aab78e8c133afbaf97": "27bf462383babd21731fe26dff88c105",
".git/objects/fb/0843df47365147ba5dc3b4732d65492775d592": "5508a48cc3db4455eb31e5d6d2da1249",
".git/objects/fb/1a311d6c0eb5afa5bff4d94d024e7fed657677": "70b9046bb8e2ad33a1db457f86d0854d",
".git/objects/fb/db926cf225f92441502e9e3bad8f1d53f099de": "187c63f8bdf94ff36aba081afd69a9a8",
".git/objects/fc/2ac1251f3a5b592e4df7e209465215017e5387": "53a828eca2eb7a31ec96f870ca8d4aea",
".git/objects/ff/38db03db64b7bb6b7cbc54797f629457d0a337": "bda6bd01b038d16cbc5b7051aa2c6bc0",
".git/objects/ff/52143805045de5150f06e9b5b099c30b067b55": "18dfb0db45c4e354b0b68b4c169553a1",
".git/objects/ff/cdf993c2e1693cb0abbe6a97aeab2f63c24808": "fd63969fc83a303c28a3917741fa2c8c",
".git/ORIG_HEAD": "09047ab80e39b9a9aacbf958af5798ba",
".git/refs/heads/main": "09047ab80e39b9a9aacbf958af5798ba",
".git/refs/remotes/origin/main": "09047ab80e39b9a9aacbf958af5798ba",
"assets/AssetManifest.json": "0188ac7fe96529a350966441a9266cd6",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "f9a3db478acc2a1cf1473bc6a8109add",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "eb12903b558d0a86038887e6e03c8f23",
"/": "eb12903b558d0a86038887e6e03c8f23",
"main.dart.js": "38b94c46f36a8a942193fbd18f86df03",
"manifest.json": "635bbb5ee72e7cffdd95375e39efc421",
"splash/style.css": "15ad0b54711b1cb1b98f4d9c5195de77",
"version.json": "3f05da21ff6fde3150367e98e8ecd11b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
