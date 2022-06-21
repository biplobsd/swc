'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d55c8b0883f5d345fe1abdfffb3ea848",
".git/config": "3f17668ee9841d6af8002f0b4cfac330",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7e9faa509556095ace5c2600798e7749",
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
".git/index": "4b5728e578d0c5e9a010080666baf5fe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d27a919fe141957570491951aed853b1",
".git/logs/refs/heads/main": "d3df5bc35c334769914092b3c6c6d1ca",
".git/logs/refs/remotes/origin/main": "a3f59742639c8e38cd965247842057eb",
".git/objects/01/9182dd6b5f8e6b47afc4de43a51bff152c159b": "28847e016797982369c7fb503246faa5",
".git/objects/01/e23a7cb2eb16d895a978d26ccf248fb00cbffb": "512e342da339c6cf43f59094a65c73eb",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/03/4ec1c525c0430d60ba020cf8a3adfe564a0fa3": "b6e0a9df1639d71c2539509af6bc2267",
".git/objects/05/41b99d7cd5061f21c3ae8b0a9872c1a1d2dfcb": "812d317f2b2babea9d9d0a6a21ca5aca",
".git/objects/06/5099c7f5d18c2dbc277a0786f698cf27140849": "48e0ba4b40bc48db64c60958febca0cb",
".git/objects/08/738f32d981b407a47d4f540aff69efc699f3df": "de00c4f34a21840e1ea61d23b8b8e9f0",
".git/objects/08/7ab5eb5d7d8a730800d346dd6f3a52a8c2a86b": "f455c67a77622dddc86c8f2e4c05c364",
".git/objects/08/98aef73a51644a65f5708a08dff2b4b9663af1": "fd5cb979759ff6cc2a3667510bb45046",
".git/objects/09/9a142c385f31e50e9e7252c6aa59b2bc4bcb2f": "c9d730dce95facc382f87c83efa81e40",
".git/objects/0a/dbad80286afb53d0dca40fd68a1e9584007619": "a251e234ee313d7dc43486b01f3f1204",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0c/b6076838ccaff2918158209af83e0a1c04e72b": "fcee021dbdc4c82cfa3c57ef4b34771d",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/d78dde1537e24eb606f41092db6729c3d79ff7": "799333b9365aa54feafda30ef3ab82b4",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/14/a51783cc1357c5f715317fa76343134d3ef960": "0870f655ecdaa49fe58a58a967702e62",
".git/objects/15/f3ca61687e111efbe675ab3e1ae61116e15443": "036aee889d104b245463caf042384f03",
".git/objects/17/341150746c3c617bd2d77f5c1a4d69ba307668": "e42242df19bed8c40630ae783ef94ef2",
".git/objects/17/6267c2fc0ce32278f453ed71d62824486abb71": "5c6d3df564d1b5f4ec3749c4204db144",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/18/f30d39561b0fe7c90e9350fb5fb80ecb5b8b3e": "81c6cd477cbe6c5d04ede0e376345b6b",
".git/objects/1a/52f6d8cfd7bf797714b78a02c98e9b2cd528df": "6c6985b04f9fe810ba2a5f358561a679",
".git/objects/1a/6004692de0d4c9aaa5d7157b1e58e4adf64cca": "a6180eca49430ae85764154a5053b1c3",
".git/objects/1c/02f20b266e27d5f10edd8d8fb92db4b15a734d": "cfd4107ce8ffdb917b22dfb361d907a4",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/1d/a7009c985d6395904f3083629ce7eedb40d82a": "1d9f5c37e0cbe6f175e3865443fc2905",
".git/objects/1e/55b63e531aeaef54264cd0c8bb9965fd305caa": "05761535accd8e6a9fb6e2518af4b313",
".git/objects/21/0023f4dd31ebf56de09eb42198706727a6e631": "cc73fc3e8293a0c12c53d3c5de037654",
".git/objects/24/20aff996472030b8c1c53c02eeaa73003cc077": "36b6d8c09aaaa3aa0184c79b01ee0b81",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/31e513bed09e8d75dc2ccb2624322d1721c94a": "a78a72dd7abf4e6fd854a8ed4c60d4fd",
".git/objects/26/e3aeedd97bee7054d000bb4c0b5ba50b1dba53": "ce77214453cbc0515d1e0381d197c93c",
".git/objects/27/a267881a779dbc3654414b535dd1746cf47b27": "3e167af6854b2aaab276a71e91c0d7ae",
".git/objects/28/367e02157957687dad2d3961b284c92da14796": "2839b0ca45f834c49786095a1f2e4998",
".git/objects/28/7070d25c8ee3659827b21e36ee7a6ea7130b85": "e25f7949669c74e90607f3fe3f630f72",
".git/objects/28/efc9b4906c567c281c0d95ff87e7b530452187": "daebab37e9c5da42f61f971b3908edd7",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/c33c6ebfb20b89372f75d9406f780ba0a1cfb6": "085e4560438229877c9f70983da9386b",
".git/objects/2a/5ec149420901c94e9aeac5ca5a16d60a57f7f4": "3b09263317d76d1adcb45bc9ac150414",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/204b4492aabf8ea7d85df08aa7be8b39969e2f": "46b9debdc7b502d1468139c0598a8567",
".git/objects/2e/313a8be5009154feaff5c97ef55dc964110b41": "ebd05c22a185349c071fa7ba6c0ca326",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/31/2436638e427a36b6c37f4c9da98a9c299d2bbe": "92b2db43343727d411c1ddc4cba7c171",
".git/objects/31/6a704a1ea90ddcdf6dd1784706b2bdafcf40b3": "b33edbf410095125d48f789acc25c5a9",
".git/objects/31/a2071d1a568ae793f73983d2269c04e26d2b62": "fffcba9a9c921279a613fc0a688a7051",
".git/objects/34/26c87c79890fe37930e637e11622c70810aa7c": "8bf865e7f9700e8d18986d2a83c00ac2",
".git/objects/36/2bec616a5d47c46743872bb4baefc4e8646828": "8bb8f697b9e135c375bc6d5e023c44a8",
".git/objects/36/61b134bea005dcdc7238fac78d42ecc63be34c": "bae2ff7771f1e6184a35dab3c69164e7",
".git/objects/36/caab07f4f0c8b94a7606f805e1ce8cd2760aaf": "87c083e36af50ee377da85970b3d7468",
".git/objects/36/fc43fb986507e4b134a05fd6586b06d02213dc": "cb83475ce2e17aef1af9f4e92624e7ab",
".git/objects/37/aceae7141acf7946a5b009f82613285bffe3bb": "6e9b4d961b257de2bb08d7630a95a59e",
".git/objects/3a/5beec351892d2cc250146203d8a40f4dc89d04": "c8e953fbace74ae74cb3fa1b849ddf4e",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/5b0ced239e2f6a1540f8363e29c47502ee5592": "68a83cffc939ccbeb0124369a564b339",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/40/9924df2c39b7d1389cc10bb536d4b10c48b45c": "2f2440653fd7afc2bc601812c89908a2",
".git/objects/43/dc65c981ff570630d9e3dbcef0f7f025ffa66e": "cab20be5bb184aa043cc592c4c86e1d7",
".git/objects/44/f9522159ebeb3a11ab166bae896608f0b97861": "41ea3d303b202ab32aaf5b936aa9c95d",
".git/objects/45/cf5e3f4e4a5b94af061bf6e7755dbec079403a": "bb601d501c57010766ced3a52741cb7e",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/4b/cd2f1eca7032def8bf10d7e969075f95df9697": "a5e799857bf8da86e64c67e91c8cf194",
".git/objects/4c/86c14bc73b02c79308e41bf592d10a8f6e66d3": "2651ff35bac9d0ff8b54f540fd6aefa9",
".git/objects/4d/ae04eff0aec1f5b130481c35273b6d5d6b8446": "58d2021a49c80cf488f28a20e9e5683f",
".git/objects/4d/ed8668d95a431d58ea130a72be40f8bfc73f96": "e9366deeb22563f2791886c16a9cde99",
".git/objects/4e/086117c86018818db4ac7a94d7393d9c0b9cd9": "30481479732510664eff037f1a3d3aa3",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/561c05e6cd9feef17d3a6a97692e42c0dbb167": "4d707bc8d6a8545507ac0d37340f3a45",
".git/objects/4f/e39aa9b3ec3a41986a8771981452981a36d3f0": "7bb2173efa79a5cd7f27cf7745fd639e",
".git/objects/50/74e4d2904418b4475fb7782a08d7f06ac282a1": "05be1da43109403ac289b4ccaecf8e07",
".git/objects/50/a70548be92ce8f9fa08a658f6836c54087953c": "2b3de2f55f9f1ebc4c8064c4cca5fa6c",
".git/objects/51/9d1e5ebb07238a2c29caacd5e0ac5bd5ac8134": "4d79fce7677f6522af4b9418369ca329",
".git/objects/52/85602617f865a8cc65506aaf3ff9dbb36671eb": "60df9e2ad2ead7d2d628ca441ac33f89",
".git/objects/53/5f4b328f6a0653bfb529d7f06cc80375bf0b00": "a94472c4763a9dab7affc6ca09c9655d",
".git/objects/53/baa4c9d9afa004e1ead5d130fe5d7b5d6203bb": "5d5fe8cfa0471ddd8c1e7f03527610f6",
".git/objects/56/290697b6fe21435a96c666d5ba8a35ebd2b359": "7cf76ac0b136cd9871c41371849343f5",
".git/objects/56/cc394a7e6077a8d599549deb7af352585b967b": "4fc2ac8dffe0a2b8444a35d3d0371b75",
".git/objects/57/098388edcac204078d2853e947741839db823a": "db8ca96f63e3e67d22443d27fd14bebc",
".git/objects/5b/4d809c3b5e1f2c9e399edc15e14726c3cf84ca": "8e14129c47fe0d11cb1064426df755b0",
".git/objects/5d/409f8c4802b0899943eb9f5ef002ceef34100d": "f5658d2a7c56f895034fd013e394bbc4",
".git/objects/5e/8c6a16031fd2c9d3a7f708be999d79f8fdc6ec": "d3039fe5d44c5ac25444281b998ebd9a",
".git/objects/5e/b0fd45ceceb7513ff016313f8d6fec96d44b63": "f144a2766b8b130f1ff28ffbd7193805",
".git/objects/62/01494964be30db936b24d5a529923c98c8832c": "ca6073cd172515a7a043437c3e3d2105",
".git/objects/63/5b56d529fe260367d3b5b0276aed139933b8cc": "a4f08af0ca6099f27247efe6d57074fd",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/66/1f248b5f67afd6c2a347199ef7ad9f5899fc75": "9568cd77c3d6699e54ea5cc1a3b952c3",
".git/objects/68/560ef1b1dc695da21b79ee6fde40be751927f8": "2cebac624d65fa4f7ec076eaac737964",
".git/objects/68/9c1efb9c9405161c81c0729fb6374f474d6e89": "038786f337cfc9cb30eba8c56dd63185",
".git/objects/69/55922357d84030a33c7a8959a6eaafc537fc6f": "672146a86a0de46641533c234bacea88",
".git/objects/6c/6f3bf2759113a3d176c0bc70146c2bfdedb175": "6115456308e0970d7285bc9955811c34",
".git/objects/6c/7a1c362dcf8647c92a97243922584188a4fb3e": "14e4d065ad23fbc54c2b160e0cb10f4e",
".git/objects/6d/85653e33425e61b30adb1105314c15f6a62795": "b629ca2dc0ed3a7d229847aadc4ac987",
".git/objects/6d/a56c2a4e937a03c71b934b3e78b7f59d71e8a4": "5d999a4f8049850ce1d89496514e7c1e",
".git/objects/6d/ea123a48fdd026d8b7f69781a76cad399f670c": "e852ea7a590d6a004d30ac92f640f376",
".git/objects/6e/7cdcaeb75893307d41435f4805251e9320db09": "1337bd06a277094d5dbf71ddb097a483",
".git/objects/71/aa11a9af58871d37420e68b8e1d3ecde9fe895": "db270e45136a5f0eabe9bdb3fdfad1a2",
".git/objects/73/e50e081ead43eacf3c594e74bfc4f7fd4c9cc2": "b43f274233f0dface56feaff43a82d2d",
".git/objects/74/51ce52b6917a2b89310fddd0f6596fc6131f62": "276068a8487a6bbc46324a30e34dacaa",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/74/f05b4456aee3cd2780f6e3ab3beefe3268f732": "bad84793d307964fbace91a90635a8bc",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/75/b4517eb611c1311962ecc46b9e61fd498e2473": "5a6c9c1f2a8e9e6cf4bc3ba3587b9506",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/a8765bcc3f1951b1a9fead0184db516d6451dc": "6ac255e1c8b13ae71865002f558ea5b3",
".git/objects/78/5209041ca896577c799f896261c0066b485d85": "cff3307cdcddaf4f511a4d935224f17a",
".git/objects/78/940008fb2d1f7405d9c222118110eb5502a777": "3717102e6e38111240893dad66514aa4",
".git/objects/7a/b1cce5bf267102092d13c8f48c2dbea7d8eb91": "1eacb645196d0471d77a9afa51825268",
".git/objects/7c/8f6d259d5b36e99fcee72e6264031cf34714ca": "db6380a0cc0defde122f730c55d70cfc",
".git/objects/81/13ff855fa51692b298aa5144607557c53d20eb": "79b4d08804e386c3a4bab381df198210",
".git/objects/82/d5aa432dbe48a5ba6e2030d41be8eed60028bd": "4f56850d585c70e8dddea0b0cd47fb35",
".git/objects/84/977a93c0da9d89150875f818fd0e995e2b9e37": "be1ca2d30c4b46cf2c9e073035b739cb",
".git/objects/84/e894f71020174718480736c63bf88c45e564c5": "11f3edf2e43a51dc96306f2394586bf1",
".git/objects/88/920ce8070949e74d221fdf46b5f235ec34ab66": "bbe2433083a36eb5660ffa115d4eaea1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/45f8a6046bd00ee73fac726e3c6f3bd6d556ef": "42840c9da8b32baffc93182d35411959",
".git/objects/89/7e060ab595bcfab737be41cdb9945f2685782b": "548dfeaac21c5d93583457a7a98a5558",
".git/objects/89/8a583e60c27ce69a325623d96942c7237cebf8": "438c5e6c528d67fc863ae0100101508c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/aefef0b20e52b7804c05bf85d0bacb9f2cf20b": "f1176756022b3d1564baa01e982bf357",
".git/objects/8a/f8c9c5600131c04ccb7d9194a7558f03a9564b": "bedb5992378bc1327dbf4a0e11c9eb9b",
".git/objects/8c/7b26263312f6efeca92697b51091ce597a4b8d": "9ab1d609b199cac19a607316f3aecb4c",
".git/objects/8d/a795900ded719058cb58c873acdf2cd57deb25": "5032cb4fbdd7f2e6c586f14b61db7a3f",
".git/objects/8e/6ede544b38eaf3cd1d83e8c1169cafaa383610": "24c49e087356b284770a21e2c6209841",
".git/objects/8e/9ed1fffdd8b74ddf4266eed558a59ad0e0cd91": "eab449aabd6b3774a7fea2b84b62dc7c",
".git/objects/8f/aaaabc52451037f40f6cf0eab0df35f3f3ddff": "b5dd76ca822696df47a714cc97fe1e08",
".git/objects/8f/c8c01e438d7a77b379860d14044d50c68cda2d": "159d4429fdc6c4181e221d9184de43b0",
".git/objects/90/dbf4eb51dabb6d6dbb292d4aec2aa749d85ab2": "37db9afb46e381180242082c2c5ba82d",
".git/objects/94/5c09c002dd4e2bb8f1585223b9260c94272020": "2437289c929922178d12deb5024523b5",
".git/objects/95/471e8f25760a2d2148e491e2e4c9a90afdc896": "c7e926635ecfba4b5d0319a41c5ca3b2",
".git/objects/96/1e395b5c629ab29e0dd2a5e3339d896047bc6b": "0c018a3de8690cd03f46c540e1e56abf",
".git/objects/96/8d47790ce87611376d21edc7813bcfe7ff906d": "1bb8827de017e583dac10608c8487c10",
".git/objects/96/f482383106813b02d5ce357637ae3f532e5f46": "d5ef4f696d39601985f794b5993c2e82",
".git/objects/98/2a8a8370abc700320d68604d22d7d48e114859": "82d3f3387ef6d75e46dc9c2e1f2dc138",
".git/objects/9b/5a0a6d26eb2e670fd22615b42640665ef23c19": "b0295b53d228f40fa24f328ef5d3ed20",
".git/objects/9d/02596e011c16b037cce7b1f618b78c1a778835": "1d7837c5db501611b0bd97fce7b99bd5",
".git/objects/9d/c59d593a3677d0c806bb5b72f9ee4042e56856": "2d04f0e4f3141c65db4f2b08339598d8",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a0/c2f31421f901b39ca0ff64860c87376551bb3c": "31d1eab5420710ec02c48f9839f1a175",
".git/objects/a3/4a8b6e197b3d577670b9918e51fd8cb6c41f7c": "271351823873501331d34ca9ad8a0fb0",
".git/objects/a3/dc3e8086ce8454f83c4ed878c5052e10e2c037": "99cc12a3ca9b1a17adce0b9c3c8b1972",
".git/objects/a8/0d3cc5de5b860ab8d24184442e8f5cda92b25c": "bbc19f97a493782336205ea0541f64b5",
".git/objects/a9/9c9bd4885463b9f27e4a406c1eac8cf2f13dbb": "6f46d0a5b886b1a37a82ec56676764a4",
".git/objects/a9/f695fead2e7997ef75b34ff5130c34476bea82": "9b423749a0236f4809715e80ce1e4490",
".git/objects/aa/f527685528a0248dda930a964d5f2389d82866": "4241587a582f15ce42d40dcd0d74579c",
".git/objects/aa/fce800725f1f792b3fb83c1da2820a0b10b52b": "3ade2696ba127d8b476fe2d79abebbaa",
".git/objects/ac/9d24def147d61c46acafe9ee6a46b4c02e2709": "72fc721f5aed96c2a53da3785499d8e2",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ac/f91d4c22cec36bfe406981504949f9072fc53f": "49425638aa7b4aa63a3e3069d5612169",
".git/objects/af/8d8710492a0f74e434d0b7bf065cf79931f14e": "f04d9b9dcd7a19c7418633e53f625e67",
".git/objects/b0/196d0c62ba754d5bf8025d69716c96c63da2c7": "acebb670a39620a9aa2933039a331b5b",
".git/objects/b1/bb4eee63842e3f6eb971528161ad9f93474f8d": "8ed6dbb7d7069cfa4dfb1d7faa19500e",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/b6/3a4355638577301e96a7c8238fa6f1156cc56b": "d4891e31ab25f2b9666ca2ac1328899d",
".git/objects/b7/310148b90893a223ecb38e30f2c524cc982806": "8ddc96aa218d2e0c8ab2fc9cd2b1366b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/9310b12d746a9c06702c95d0224a152261d52f": "69356f5b7306e122628188fdaa4d2bfc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/0a07b26f0610aab9b9e3b36da7d7ef9edb113d": "b1f22ace15c7e85c358264439a05c2d3",
".git/objects/ba/243819f17a24b13520db934ab449c52276c9f3": "9408f5abeca2a0656d62ef43a5d2a476",
".git/objects/bd/06142b2fe883827d4e2a0c5276b59609ce49bb": "800466655b0be678903f931db03ff640",
".git/objects/bd/b1569d91fce98f8c92025ec3dc8fb0b0657017": "8beb2e6cc6cd075a40e6e16b26165724",
".git/objects/bf/7edaf431edda0e6260e4a1059cfcc60f188ab7": "229d4e3fef2d68efe8a0cbce34bdbc94",
".git/objects/bf/8e5ece94190472863fe2acd1e4dc48130d865b": "73d60a6a22f3a1a68eb5b5c8492fe183",
".git/objects/c0/ee2c06115acdfd6b2d9c797bfe5fefe36fb66d": "1483e5c1ad4ed0d4c33d827ce09c791d",
".git/objects/c3/63f80a7c45ca255ef8800a0a07da3de6dd1734": "ae8d6ae6ccf20e81301f475c2d4aef5c",
".git/objects/c4/2e7ea4793a8e91ccb49f02309902c9997b4662": "96aad99636a3242baff1a17c30d2e514",
".git/objects/c5/411c4dcbebb41d5e13ca9178d2b7259b8aad3a": "016c33bcd802b1762d05f99e2824d526",
".git/objects/c7/50bcbc749de8b6afb2055bc83df595d2dd6330": "600789514896c04593e3e4963cef121c",
".git/objects/c7/9350bf821d9f0a733a69c478338a5dd840e10d": "532378aee6706979c264037e3859bbe3",
".git/objects/c9/03a4800262abe5183ad346a91e5a07309d2245": "9401fce971b58ca076d4f826009df5aa",
".git/objects/cc/1d368e35e120d6202262a0633b5b5fba484143": "9c5e85478ee450b83ae0a75bddb3b942",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/4941111cd58a9d5a00095cc49348517fbd9cca": "e471201a432aee51915d7c9cb5cee17f",
".git/objects/cd/5c420c6353daa2d37f49cdec44e6e106364bee": "594d9d71accd6617a2868f53ed3b4f75",
".git/objects/cd/a26f27ed3c455a081412b5eb8bed11bad1be4a": "554303b5123bf373d58f91ad18b846e8",
".git/objects/ce/1f8c3f2303c976e219a9a13e3f1795a0b1041a": "9c6faea915e1fe523e191890e878a118",
".git/objects/d0/041cacb24a486ca19d2e60d8c3efa937bd84cb": "cc86485d6475da3329fd481d6c6daa15",
".git/objects/d0/51f8fcf2e026becc264f0e9c5ec9f53818ae6c": "72b00bcd7bedf1f026e550857f26ef7a",
".git/objects/d1/20b61d6fbe92679de34ce70a5e7a88a66cc9f9": "da20714f250d715e7a492a21cc6b67ec",
".git/objects/d1/994172fc3d5b44a9f8ec0b20e395bd43877f4e": "e470ddf7911002e2b5c099ef5b25e564",
".git/objects/d2/603b932babcd843dd8c4c5da8b0966aacd254f": "ec2bb53e2e5b4dca526960bd03a2424b",
".git/objects/d2/b7482b75516c2b5720d332c67cba1a39d153e2": "8843ea60454a87eee5fe27d620142309",
".git/objects/d3/23af534c44afa8add083c68b4651a0c78b7891": "2bc024a4ecfa410b9092e35a04f83edb",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/d4/8e7f26630810e8458264d667962affbe3c8276": "99d012f86d0a8006842fc26e9c82ca72",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/9247bb11872d0334abde373a430f9a3f5525e7": "704af5b96ef3199de51fd05055244148",
".git/objects/db/62dbbfc13b15e7cc621e9afb7ef6ae86f49dae": "ed5a303e78022605ed0528db55c758b9",
".git/objects/dc/34dbfbafb484c7c4e68065c89b3c8eca4b57a6": "572367e28cb7ab75d8ca3acb59f82ccf",
".git/objects/dc/ee56d7f5296db11201c4818e8614e5a5704ebd": "e1dd1218e6b8a1aebaf7bfe36fa4dd52",
".git/objects/dd/86b1d12df82311281697e15ece4d43c15573bc": "6ba1d64bed620b9cfb4166c1f0ac386d",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/db61e832ca0c3631bb4579ec423609e6dd5e92": "f47438c08703e2e5379f70d7442999ef",
".git/objects/e0/ba9c3cbae2a73a78d10a9cd19c9408f0a611fd": "cd0c3ab83063d27b1493e5e7b9b888cf",
".git/objects/e2/7b5a65fc23723c0aed052ac0765ce8cb1c02e6": "2abb93ab3ed2130ff0a7bc186165f507",
".git/objects/e2/f2ef357fd628517c29a90ef705f5a63cf9a2d1": "bedb43a2f08eb19466b112d47da09959",
".git/objects/e3/79b8fee2d0d5443904309cac2b33c80ba3a736": "ec9da35f2c15ad9b4c343db1a3cc8415",
".git/objects/e5/09e7ba260190c164fb2bd4c90eab282c9448a8": "bef2dd135b7d7bc8df0079f910d35e8a",
".git/objects/e5/3bc7097b7ea5a68eda3cad16129942de6206b4": "ea8758fdc5fd3b5ec96f0ab1991b59fc",
".git/objects/e5/b77ffbf5833bce409b388cce2b06b117dc3850": "cf0197ce8239a4d74a5fb2bcb60dfd3d",
".git/objects/e6/165f747000a8a3c131bddd4b3197b60e34931a": "3699778bf6d1719b6e52df50ddea39cc",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/933d33ed890fa2b3ea59e3ac61842737a55c94": "f7d28706b43fbc076143e3dc83e111fc",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/92effd529eeb6ba6faba1f2aab38aab9901fe9": "0897e41d357b051bfca0f4d9f6b54289",
".git/objects/ee/06df227196943bf20a120a2b69832a497cee7e": "dad243f66559d2eeb57e4b4dc256e683",
".git/objects/f0/c173266c3a49dc07eafa9940adcb7d666e1078": "9e163bb3c4cc466895d7a88d45845ed3",
".git/objects/f3/2282d23381661dc45855280e67c20282401bcc": "b7ea9fc26b823b97328f6072368db608",
".git/objects/f4/438cbea623b0eede9c9aa0da729b09e198c088": "21035836269cf56b3f840a578cf25b9e",
".git/objects/f4/5da9dbf829012978853da90d2a3fc777f6b2f6": "8d4d2317e0a52af1f2864590c2e7307d",
".git/objects/f4/91a930bd48003bd30e3e5dd72c3b78d73ee884": "5ce98d3b85f105e80ce6897130b22e90",
".git/objects/f7/0c84f349efdd507a7b734a7bd3e65dcffc8c99": "c6cfb92ace151efe29bc58a0e469c355",
".git/objects/f8/f65ff2d3ddac5f2b78ad9776db7d8b943d1dfc": "cf265a8d218487bf36dd815fa645a244",
".git/objects/f9/1f15ff3cb2665add41a7aab78e8c133afbaf97": "27bf462383babd21731fe26dff88c105",
".git/objects/fb/0843df47365147ba5dc3b4732d65492775d592": "5508a48cc3db4455eb31e5d6d2da1249",
".git/objects/fb/1a311d6c0eb5afa5bff4d94d024e7fed657677": "70b9046bb8e2ad33a1db457f86d0854d",
".git/objects/fb/aa777746836675894dc6073b320ca6cdba56d7": "bd470fb160c5152132ea954143e30ae8",
".git/objects/fb/db926cf225f92441502e9e3bad8f1d53f099de": "187c63f8bdf94ff36aba081afd69a9a8",
".git/objects/fc/2ac1251f3a5b592e4df7e209465215017e5387": "53a828eca2eb7a31ec96f870ca8d4aea",
".git/objects/fe/c1ac5fa16f6b387b0a5f2c8d8e188bc1c55ec0": "ae0f3e3e2ad3caac870fefe90c1d7d2f",
".git/objects/ff/38db03db64b7bb6b7cbc54797f629457d0a337": "bda6bd01b038d16cbc5b7051aa2c6bc0",
".git/objects/ff/52143805045de5150f06e9b5b099c30b067b55": "18dfb0db45c4e354b0b68b4c169553a1",
".git/objects/ff/cdf993c2e1693cb0abbe6a97aeab2f63c24808": "fd63969fc83a303c28a3917741fa2c8c",
".git/ORIG_HEAD": "e05f8ce7983e0795f50babd06b7b3d0d",
".git/refs/heads/main": "54cda50620ef63651522285448a15ba4",
".git/refs/remotes/origin/main": "54cda50620ef63651522285448a15ba4",
"assets/AssetManifest.json": "6b9f53fb200e8129e759c5c7168d8a30",
"assets/assets/red-transp.png": "a4a1db3e499d1cd0f7fa7daafa1fc81d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "46b344e9e5201893b0a5e52a0bbbc420",
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
"favicon.ico": "374b109e885192ca894324888bfd03bf",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "255159ccba2e6344380b77b4c9cce313",
"icons/Icon-512.png": "ce95e88c5e0ed0e32dd324ca2b518dc9",
"icons/Icon-maskable-192.png": "255159ccba2e6344380b77b4c9cce313",
"icons/Icon-maskable-512.png": "ce95e88c5e0ed0e32dd324ca2b518dc9",
"index.html": "b2a799763e6f6fb2d9318b435c5f04c4",
"/": "b2a799763e6f6fb2d9318b435c5f04c4",
"main.dart.js": "14dde8c455d4cd3c51801a530e7e0e35",
"manifest.json": "0111222459de96177f89c4066aa5c868",
"README.md": "d7ac8346aa2992cf4b451ae7b8d97b56",
"splash/style.css": "cdc8b7c17d0b91444ce670f50ac8f082",
"version.json": "46d06307f663e496dfa2dc3684afa49a"
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
