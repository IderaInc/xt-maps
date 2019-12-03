
(function (factory) {
  if (typeof module === 'object' && typeof module.exports !== "undefined") {
      module.exports = factory;
  } else {
      factory(FusionCharts);
  }
}(function (FusionCharts) {
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 366);
/******/ })
/************************************************************************/
/******/ ({

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(367);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.KowloonCity.1.07-22-2016 02:58:16
 */

var M = 'M',
    // SVG MoveTo
L = 'L',
    // SVG LineTo
Z = 'Z',
    // SVG ClosePath
Q = 'Q',
    // SVG Quadratic Beizer
LFT = 'left',
    RGT = 'right',
    CEN = 'center',
    MID = 'middle',
    TOP = 'top',
    BTM = 'bottom',
    geodefinitions = [{
  "name": "KowloonCity",
  "revision": 1,
  "standaloneInit": true,
  "baseWidth": 593,
  "baseHeight": 700,
  "baseScaleFactor": 10,
  "entities": {
    "G01": {
      "outlines": [[M, 1912, 3119, L, 1673, 3152, 1671, 3163, Q, 1683, 3193, 1684, 3237, 1685, 3282, 1697, 3304, 1708, 3325, 1715, 3410, L, 1721, 3450, Q, 1683, 3468, 1600, 3504, 1524, 3538, 1471, 3564, 1513, 3660, 1567, 3768, 1621, 3876, 1640, 3940, 1644, 3953, 1650, 3976, 1702, 3975, 1808, 3984, 1918, 3993, 1972, 3993, 1975, 3916, 1983, 3869, 1991, 3820, 2019, 3753, 2023, 3743, 2027, 3733, 2069, 3646, 2085, 3610, 2100, 3619, 2115, 3629, 2129, 3638, 2143, 3645, L, 2158, 3636, 2161, 3593, Q, 2182, 3530, 2219, 3461, 2265, 3379, 2293, 3328, 2329, 3259, 2376, 3198, 2400, 3168, 2429, 3141, 2479, 3096, 2479, 3094, 2479, 3081, 2462, 3055, 2461, 3054, 2439, 3022, 2404, 3032, 2364, 3036, 2232, 3051, 2174, 3066, 2174, 3066, 2173, 3067, 2171, 3067, 2168, 3067, 2098, 3081, 2049, 3094, Q, 1998, 3107, 1912, 3119, Z]],
      "label": "Ma Tau Wai",
      "shortLabel": "MW",
      "labelPosition": [188.3, 350.7],
      "labelAlignment": [CEN, MID]
    },
    "G02": {
      "outlines": [[M, 1983, 3869, Q, 1975, 3916, 1972, 3993, 1969, 4054, 1969, 4134, 1969, 4181, 1975, 4206, L, 1977, 4236, Q, 2092, 4310, 2102, 4310, 2111, 4309, 2127, 4262, 2142, 4214, 2166, 4161, 2188, 4109, 2209, 4070, 2224, 4039, 2225, 4036, 2373, 4105, 2384, 4111, 2407, 4122, 2472, 4153, 2521, 4176, 2554, 4193, 2590, 4213, 2619, 4229, 2678, 4260, 2703, 4276, 2791, 4328, 2861, 4353, 2878, 4302, 2900, 4254, 2857, 4232, 2797, 4208, 2715, 4175, 2696, 4166, 2705, 4154, 2729, 4132, 2749, 4115, 2755, 4097, 2719, 4081, 2666, 4052, 2613, 4025, 2019, 3753, Q, 1991, 3820, 1983, 3869, Z]],
      "label": "Ma Hang Chung",
      "shortLabel": "MC",
      "labelPosition": [211.2, 393.8],
      "labelAlignment": [CEN, MID]
    },
    "G03": {
      "outlines": [[M, 2384, 4111, Q, 2373, 4105, 2225, 4036, 2224, 4039, 2209, 4070, 2188, 4109, 2166, 4161, 2142, 4214, 2127, 4262, 2111, 4309, 2102, 4310, 2092, 4310, 1977, 4236, L, 1975, 4214, Q, 1929, 4214, 1900, 4214, 1845, 4214, 1825, 4217, 1827, 4606, 1822, 4616, L, 1822, 4646, 1980, 4646, Q, 1982, 4652, 1987, 4691, 1989, 4710, 1990, 4723, 2022, 4675, 2029, 4655, 2038, 4619, 2041, 4615, 2043, 4612, 2070, 4612, 2099, 4612, 2107, 4627, L, 2145, 4627, Q, 2159, 4581, 2162, 4563, L, 2172, 4563, Q, 2176, 4568, 2213, 4609, 2248, 4648, 2259, 4648, 2259, 4648, 2261, 4647, 2273, 4640, 2323, 4580, 2379, 4513, 2619, 4229, 2590, 4213, 2554, 4193, 2521, 4176, 2472, 4153, Q, 2407, 4122, 2384, 4111, Z]],
      "label": "Ma Tau Kok",
      "shortLabel": "MK",
      "labelPosition": [229, 431],
      "labelAlignment": [CEN, MID]
    },
    "G04": {
      "outlines": [[M, 1972, 3993, Q, 1918, 3993, 1808, 3984, 1702, 3975, 1650, 3976, 1652, 3983, 1654, 3991, 1661, 4019, 1670, 4042, 1678, 4060, 1694, 4088, 1708, 4113, 1708, 4140, 1708, 4158, 1702, 4166, 1700, 4167, 1672, 4189, 1666, 4193, 1658, 4200, 1657, 4228, 1657, 4289, L, 1657, 4316, Q, 1657, 4345, 1659, 4359, L, 1702, 4359, 1702, 4545, Q, 1698, 4577, 1700, 4601, 1702, 4626, 1702, 4628, 1702, 4728, 1700, 4774, L, 1577, 4774, 1577, 4895, Q, 1593, 4982, 1631, 5056, 1646, 5087, 1692, 5112, 1729, 5133, 1766, 5141, 1785, 5109, 1809, 5082, 1817, 5072, 1833, 5046, 1850, 5016, 1850, 5006, 1850, 4997, 1848, 4991, L, 1849, 4991, Q, 1889, 4873, 1913, 4770, 1928, 4770, 1938, 4771, L, 1986, 4773, Q, 1993, 4757, 1992, 4744, 1991, 4736, 1990, 4723, 1989, 4710, 1987, 4691, 1982, 4652, 1980, 4646, L, 1822, 4646, 1822, 4616, Q, 1827, 4606, 1825, 4217, 1845, 4214, 1900, 4214, 1929, 4214, 1975, 4214, L, 1975, 4206, Q, 1969, 4181, 1969, 4134, Q, 1969, 4054, 1972, 3993, Z]],
      "label": "Lok Man",
      "shortLabel": "LM",
      "labelPosition": [173.8, 486.9],
      "labelAlignment": [CEN, MID]
    },
    "G05": {
      "outlines": [[M, 1497, 4164, Q, 1447, 4129, 1434, 4121, 1417, 4111, 1370, 4111, 1334, 4111, 1319, 4113, 1290, 4116, 1275, 4129, 1260, 4143, 1232, 4156, 1200, 4173, 1187, 4182, 1155, 4203, 1119, 4256, 1098, 4286, 1063, 4344, 1025, 4423, 1007, 4453, 970, 4510, 962, 4554, L, 962, 4554, Q, 999, 4581, 1078, 4626, 1143, 4674, 1152, 4724, 1161, 4774, 1167, 4806, 1173, 4838, 1190, 4906, 1206, 4973, 1214, 4990, 1220, 5008, 1221, 5009, 1221, 5010, 1222, 5011, 1233, 5066, 1246, 5148, 1252, 5181, 1272, 5207, 1276, 5213, 1323, 5261, 1354, 5293, 1423, 5369, 1487, 5433, 1538, 5459, L, 1538, 5458, Q, 1538, 5452, 1557, 5430, 1583, 5400, 1593, 5385, 1605, 5367, 1619, 5352, 1644, 5326, 1645, 5324, 1671, 5293, 1689, 5268, 1694, 5260, 1700, 5253, L, 1753, 5165, Q, 1759, 5152, 1766, 5141, 1729, 5133, 1692, 5112, 1646, 5087, 1631, 5056, 1593, 4982, 1577, 4895, L, 1577, 4774, 1700, 4774, Q, 1702, 4728, 1702, 4628, 1702, 4626, 1700, 4601, 1698, 4577, 1702, 4545, L, 1702, 4359, 1659, 4359, Q, 1657, 4345, 1657, 4316, L, 1657, 4289, Q, 1657, 4228, 1658, 4200, 1651, 4206, 1642, 4214, 1626, 4225, 1609, 4225, 1601, 4225, 1582, 4221, 1557, 4216, 1549, 4209, 1532, 4193, 1525, 4185, Q, 1512, 4173, 1497, 4164, Z]],
      "label": "Sheung Lok",
      "shortLabel": "SL",
      "labelPosition": [136.4, 478.5],
      "labelAlignment": [CEN, MID]
    },
    "G06": {
      "outlines": [[M, 1447, 3575, Q, 1258, 3671, 1162, 3717, 1142, 3727, 1080, 3751, 1030, 3772, 1002, 3787, 904, 3839, 876, 3853, 844, 3866, 824, 3874, 788, 3889, 758, 3908, 747, 3916, 724, 3927, 711, 3934, 694, 3942, 656, 3960, 631, 3978, 629, 3979, 627, 3980, 599, 4029, 567, 4067, 548, 4089, 526, 4120, 502, 4151, 486, 4177, 470, 4204, 463, 4216, 456, 4228, 421, 4281, 342, 4429, 237, 4577, 241, 4592, 249, 4602, L, 249, 4603, Q, 276, 4648, 286, 4662, 297, 4680, 321, 4728, 344, 4776, 369, 4839, 394, 4902, 419, 4952, 443, 5003, 454, 5029, 456, 5036, 472, 5064, 483, 5084, 484, 5101, L, 501, 5148, Q, 503, 5156, 512, 5167, 514, 5172, 515, 5184, 516, 5191, 520, 5194, 525, 5197, 541, 5200, L, 548, 5211, Q, 557, 5172, 561, 5150, 568, 5112, 568, 5088, 585, 4991, 595, 4960, 601, 4936, 609, 4893, 618, 4848, 623, 4829, 629, 4795, 680, 4722, 680, 4712, 690, 4697, 701, 4680, 701, 4678, 705, 4664, 715, 4651, 722, 4641, 734, 4619, 744, 4603, 754, 4591, 765, 4577, 770, 4543, 778, 4493, 781, 4483, 788, 4486, 859, 4514, 920, 4538, 948, 4554, L, 962, 4554, Q, 970, 4510, 1007, 4453, 1025, 4423, 1063, 4344, 1098, 4286, 1119, 4256, 1155, 4203, 1187, 4182, 1200, 4173, 1232, 4156, 1260, 4143, 1275, 4129, 1290, 4116, 1319, 4113, 1334, 4111, 1370, 4111, 1417, 4111, 1434, 4121, 1447, 4129, 1497, 4164, 1512, 4173, 1525, 4185, 1532, 4193, 1549, 4209, 1557, 4216, 1582, 4221, 1601, 4225, 1609, 4225, 1626, 4225, 1642, 4214, 1651, 4206, 1658, 4200, 1666, 4193, 1672, 4189, 1700, 4167, 1702, 4166, 1708, 4158, 1708, 4140, 1708, 4113, 1694, 4088, 1678, 4060, 1670, 4042, 1661, 4019, 1654, 3991, 1652, 3983, 1650, 3976, 1644, 3953, 1640, 3940, 1621, 3876, 1567, 3768, 1513, 3660, 1471, 3564, Q, 1458, 3570, 1447, 3575, Z]],
      "label": "Ho Man Tin",
      "shortLabel": "HT",
      "labelPosition": [82.3, 418],
      "labelAlignment": [CEN, MID]
    },
    "G07": {
      "outlines": [[M, 788, 3157, L, 747, 3156, Q, 728, 3154, 689, 3155, 648, 3154, 601, 3155, 555, 3157, 520, 3158, 486, 3160, 445, 3171, 403, 3181, 383, 3182, 363, 3184, 331, 3189, 296, 3195, 275, 3201, 270, 3211, 259, 3221, 234, 3245, 230, 3256, 208, 3307, 203, 3344, 203, 3353, 187, 3390, 181, 3402, 166, 3434, 114, 3522, 85, 3619, 54, 3721, 55, 3812, 55, 3814, 55, 3817, 55, 3846, 54, 3900, 54, 3956, 55, 3996, 56, 4025, 79, 4106, 102, 4185, 102, 4187, L, 98, 4233, Q, 98, 4249, 118, 4276, 146, 4314, 150, 4321, 163, 4348, 194, 4416, 204, 4438, 222, 4507, L, 232, 4556, Q, 234, 4568, 237, 4577, 342, 4429, 421, 4281, 456, 4228, 463, 4216, 470, 4204, 486, 4177, 502, 4151, 526, 4120, 548, 4089, 567, 4067, 599, 4029, 627, 3980, 629, 3979, 631, 3978, 656, 3960, 694, 3942, 711, 3934, 724, 3927, 736, 3853, 743, 3723, 750, 3592, 757, 3548, 764, 3503, 770, 3376, 775, 3269, 786, 3202, Z]],
      "label": "Kadoorie",
      "shortLabel": "KA",
      "labelPosition": [37.5, 375.1],
      "labelAlignment": [CEN, MID]
    },
    "G08": {
      "outlines": [[M, 1833, 2480, Q, 1804, 2481, 1766, 2481, 1724, 2480, 1705, 2480, 1709, 2515, 1705, 2572, 1700, 2646, 1700, 2668, 1700, 2691, 1693, 2753, 1690, 2779, 1696, 2798, 1695, 2804, 1663, 2805, 1663, 2804, 1660, 2804, 1649, 2802, 1614, 2801, 1559, 2798, 1485, 2798, 1455, 2731, 1400, 2677, 1362, 2638, 1347, 2630, 1346, 2630, 1334, 2628, 1323, 2628, 1319, 2625, 1306, 2613, 1295, 2613, 1260, 2613, 1254, 2649, 1250, 2668, 1249, 2702, L, 1191, 2702, Q, 1116, 2687, 1042, 2688, 967, 2688, 896, 2683, 825, 2677, 802, 2681, 700, 2696, 696, 2697, 667, 2700, 660, 2706, 653, 2712, 639, 2723, 625, 2733, 616, 2766, 607, 2799, 606, 2805, L, 542, 2805, Q, 530, 2805, 521, 2803, 505, 2802, 507, 2790, L, 518, 2716, Q, 529, 2665, 504, 2682, 499, 2698, 493, 2715, 492, 2716, 467, 2805, 448, 2872, 427, 2912, L, 374, 3015, Q, 366, 3030, 353, 3054, 340, 3079, 334, 3085, 328, 3091, 319, 3105, 310, 3120, 299, 3141, 292, 3155, 280, 3184, 280, 3192, 275, 3201, 296, 3195, 331, 3189, 363, 3184, 383, 3182, 403, 3181, 445, 3171, 486, 3160, 520, 3158, 555, 3157, 601, 3155, 648, 3154, 689, 3155, 728, 3154, 747, 3156, L, 788, 3157, 786, 3202, Q, 775, 3269, 770, 3376, 764, 3503, 757, 3548, 750, 3592, 743, 3723, 736, 3853, 724, 3927, 747, 3916, 758, 3908, 788, 3889, 824, 3874, 844, 3866, 876, 3853, 904, 3839, 1002, 3787, 1030, 3772, 1080, 3751, 1142, 3727, 1162, 3717, 1258, 3671, 1447, 3575, 1458, 3570, 1471, 3564, 1524, 3538, 1600, 3504, 1683, 3468, 1721, 3450, L, 1715, 3410, Q, 1708, 3325, 1697, 3304, 1685, 3282, 1684, 3237, 1683, 3193, 1671, 3163, L, 1673, 3152, 1899, 3121, Q, 1899, 3101, 1902, 3041, 1906, 2981, 1906, 2950, 1906, 2861, 1920, 2763, L, 1920, 2482, Q, 1881, 2476, 1833, 2480, Z]],
      "label": "Prince",
      "shortLabel": "PR",
      "labelPosition": [121.2, 320.3],
      "labelAlignment": [CEN, MID]
    },
    "G09": {
      "outlines": [[M, 1103, 274, Q, 1072, 238, 994, 151, 916, 64, 871, 64, 849, 64, 829, 82, 808, 101, 786, 101, 745, 101, 754, 62, L, 728, 62, Q, 655, 95, 627, 95, 613, 95, 592, 77, 568, 55, 581, 33, L, 547, 33, Q, 532, 40, 461, 39, 403, 38, 366, 79, 347, 101, 290, 151, 262, 176, 251, 185, 227, 202, 211, 202, 187, 202, 164, 175, 142, 149, 139, 149, 128, 149, 125, 163, 122, 180, 118, 185, 118, 186, 117, 186, 106, 201, 99, 206, 86, 216, 68, 208, 70, 216, 92, 264, 115, 315, 115, 340, 115, 343, 78, 375, 41, 407, 41, 415, 41, 427, 80, 483, 127, 551, 128, 553, 138, 571, 160, 626, 185, 687, 185, 701, 185, 737, 141, 821, 119, 862, 97, 903, 97, 908, 136, 987, 174, 1067, 174, 1097, 174, 1117, 142, 1147, 129, 1161, 113, 1178, 110, 1179, 109, 1181, 94, 1191, 86, 1195, 84, 1197, 84, 1227, 84, 1256, 93, 1264, 101, 1272, 127, 1272, 150, 1272, 171, 1257, 182, 1249, 193, 1242, 211, 1242, 245, 1339, 262, 1388, 281, 1448, 340, 1574, 392, 1675, 555, 1985, 581, 2176, 581, 2180, 582, 2183, 579, 2291, 581, 2329, 582, 2368, 579, 2418, 575, 2468, 555, 2534, 536, 2590, 504, 2682, 529, 2665, 518, 2716, L, 507, 2790, Q, 505, 2802, 521, 2803, 530, 2805, 542, 2805, L, 606, 2805, Q, 607, 2799, 616, 2766, 625, 2733, 639, 2723, 653, 2712, 660, 2706, 667, 2700, 696, 2697, 700, 2696, 802, 2681, 825, 2677, 896, 2683, 967, 2688, 1042, 2688, 1116, 2687, 1191, 2702, L, 1249, 2702, Q, 1250, 2668, 1254, 2649, 1260, 2613, 1295, 2613, 1306, 2613, 1319, 2625, 1323, 2628, 1334, 2628, 1346, 2630, 1347, 2630, 1362, 2638, 1400, 2677, 1455, 2731, 1485, 2798, 1559, 2798, 1614, 2801, 1649, 2802, 1660, 2804, 1663, 2804, 1663, 2805, 1695, 2804, 1696, 2798, 1690, 2779, 1693, 2753, 1700, 2691, 1700, 2668, 1700, 2646, 1705, 2572, 1709, 2515, 1705, 2480, 1724, 2480, 1766, 2481, 1804, 2481, 1833, 2480, 1881, 2476, 1920, 2482, 1921, 2482, 1921, 2482, 1923, 2485, 1926, 2457, 1929, 2428, 1929, 2411, 1930, 2393, 1929, 2390, L, 1929, 2390, Q, 1936, 2348, 1932, 2306, 1930, 2293, 1937, 2258, 1942, 2223, 1945, 2204, 1948, 2185, 1954, 2136, 1959, 2087, 1957, 2072, 1955, 2057, 1931, 2063, 1878, 2063, 1858, 2062, L, 1858, 2055, Q, 1855, 2043, 1856, 2026, 1857, 2009, 1855, 2001, 1850, 1958, 1849, 1933, 1846, 1906, 1849, 1880, 1820, 1885, 1777, 1885, L, 1777, 1850, Q, 1793, 1781, 1795, 1756, 1796, 1743, 1794, 1685, 1791, 1628, 1780, 1616, 1767, 1602, 1745, 1572, 1723, 1541, 1710, 1524, 1686, 1494, 1660, 1475, 1594, 1427, 1529, 1400, 1454, 1368, 1428, 1369, 1401, 1369, 1404, 1363, 1406, 1355, 1426, 1322, 1446, 1288, 1461, 1221, 1476, 1154, 1490, 1110, 1504, 1065, 1503, 1053, 1502, 1041, 1509, 1027, 1509, 1026, 1509, 1026, 1527, 992, 1536, 969, 1555, 921, 1555, 904, 1555, 858, 1433, 806, 1311, 755, 1273, 753, 1234, 752, 1215, 747, L, 1197, 747, 1199, 575, Q, 1199, 540, 1193, 500, 1186, 460, 1178, 431, 1171, 402, 1152, 356, Q, 1133, 309, 1103, 274, Z]],
      "label": "Kowloon Tong",
      "shortLabel": "KT",
      "labelPosition": [99.9, 141.9],
      "labelAlignment": [CEN, MID]
    },
    "G10": {
      "outlines": [[M, 2442, 2325, Q, 2431, 2298, 2425, 2285, 2415, 2261, 2395, 2263, 2373, 2263, 2357, 2289, 2341, 2313, 2299, 2337, 2256, 2361, 2241, 2372, 2211, 2392, 2148, 2397, 2127, 2399, 2061, 2399, 2034, 2399, 1995, 2394, 1958, 2390, 1929, 2390, 1930, 2393, 1929, 2411, 1929, 2428, 1926, 2457, 1923, 2485, 1921, 2482, 1921, 2482, 1920, 2482, L, 1920, 2763, Q, 1906, 2861, 1906, 2950, 1906, 2981, 1902, 3041, 1899, 3101, 1899, 3121, L, 1912, 3119, Q, 1998, 3107, 2049, 3094, 2098, 3081, 2168, 3067, 2171, 3067, 2173, 3067, 2174, 3066, 2174, 3066, 2232, 3051, 2364, 3036, 2404, 3032, 2439, 3022, 2520, 2997, 2574, 2942, 2653, 2862, 2682, 2835, 2711, 2809, 2738, 2774, 2756, 2751, 2769, 2739, 2775, 2732, 2788, 2721, 2799, 2708, 2805, 2700, 2809, 2691, 2819, 2679, 2829, 2667, 2826, 2666, 2824, 2667, 2823, 2667, 2791, 2671, 2767, 2670, 2742, 2670, 2703, 2668, 2664, 2666, 2629, 2665, 2592, 2664, 2552, 2664, L, 2520, 2664, 2520, 2653, Q, 2528, 2641, 2540, 2624, 2549, 2611, 2562, 2601, 2573, 2592, 2593, 2580, 2608, 2569, 2608, 2554, 2608, 2552, 2584, 2525, 2560, 2498, 2549, 2487, 2521, 2460, 2516, 2454, 2498, 2435, 2488, 2411, Q, 2467, 2363, 2442, 2325, Z]],
      "label": "Lung Shing",
      "shortLabel": "LS",
      "labelPosition": [222.5, 269.2],
      "labelAlignment": [CEN, MID]
    },
    "G11": {
      "outlines": [[M, 4053, 1986, Q, 4023, 1981, 4011, 1981, 3976, 1981, 3958, 1992, 3921, 2014, 3870, 2031, 3862, 2034, 3786, 2056, 3736, 2071, 3712, 2082, 3509, 2139, 3422, 2189, 3334, 2239, 3319, 2252, 3303, 2265, 3287, 2292, 3271, 2318, 3260, 2331, 3249, 2343, 3230, 2377, 3209, 2412, 3204, 2423, 3197, 2433, 3169, 2439, 3141, 2445, 3133, 2448, 3071, 2470, 3042, 2482, 2994, 2502, 2955, 2534, 2918, 2563, 2880, 2598, 2870, 2608, 2850, 2633, 2848, 2636, 2835, 2655, 2830, 2662, 2826, 2666, 2829, 2667, 2819, 2679, 2809, 2691, 2805, 2700, 2799, 2708, 2788, 2721, 2775, 2732, 2769, 2739, 2756, 2751, 2738, 2774, 2711, 2809, 2682, 2835, 2653, 2862, 2574, 2942, 2520, 2997, 2439, 3022, 2461, 3054, 2462, 3055, 2479, 3081, 2479, 3094, 2479, 3096, 2429, 3141, 2400, 3168, 2376, 3198, 2329, 3259, 2293, 3328, 2265, 3379, 2219, 3461, 2182, 3530, 2161, 3593, L, 2158, 3636, 2143, 3645, Q, 2129, 3638, 2115, 3629, 2100, 3619, 2085, 3610, 2069, 3646, 2027, 3733, 2023, 3743, 2019, 3753, 2613, 4025, 2666, 4052, 2719, 4081, 2755, 4097, 2749, 4115, 2729, 4132, 2705, 4154, 2696, 4166, 2715, 4175, 2797, 4208, 2857, 4232, 2900, 4254, 2918, 4214, 2940, 4174, 2954, 4148, 2971, 4127, 3003, 4086, 3008, 4079, 3016, 4068, 3052, 4044, 3086, 4020, 3090, 4020, 3096, 4020, 3132, 4063, 3172, 4109, 3183, 4116, 3198, 4124, 3231, 4162, 3259, 4193, 3273, 4203, 3276, 4205, 3278, 4207, 4346, 5240, 4406, 5295, 4465, 5349, 4484, 5371, 4503, 5392, 4515, 5406, 4527, 5419, 4532, 5432, 4545, 5471, 4554, 5482, 4567, 5496, 4639, 5554, 4655, 5567, 4696, 5596, 4730, 5620, 4740, 5631, 4759, 5647, 4820, 5711, 4852, 5744, 4915, 5792, 4974, 5837, 4998, 5865, 5030, 5900, 5078, 5941, 5137, 5990, 5160, 6022, 5182, 6053, 5215, 6095, 5247, 6137, 5285, 6179, 5322, 6220, 5362, 6255, 5382, 6273, 5450, 6326, 5600, 6442, 5623, 6460, 5631, 6465, 5646, 6479, 5659, 6487, 5678, 6487, 5697, 6487, 5787, 6393, 5875, 6290, 5875, 6280, 5875, 6267, 5871, 6265, 5851, 6248, 5827, 6224, 5800, 6199, 5794, 6188, 5787, 6177, 5752, 6146, 5717, 6115, 5711, 6108, 5660, 6052, 5643, 6036, 5636, 6028, 5627, 6017, 5619, 6006, 5615, 6002, 5610, 5997, 5609, 5990, 5609, 5982, 5608, 5977, 5608, 5975, 5608, 5957, 5608, 5933, 5612, 5894, 5614, 5871, 5615, 5857, 5615, 5844, 5620, 5838, 5625, 5831, 5584, 5785, 5542, 5740, 5533, 5728, L, 5532, 5727, Q, 5466, 5661, 5443, 5640, 5421, 5619, 5395, 5605, 5369, 5591, 5349, 5586, 5329, 5582, 5314, 5611, 5299, 5639, 5283, 5639, 5266, 5638, 5214, 5610, 5162, 5580, 5150, 5568, 5135, 5558, 5125, 5549, 5105, 5534, 5100, 5522, 5094, 5510, 5078, 5492, 5055, 5467, 5029, 5444, 5003, 5421, 4967, 5386, 4931, 5352, 4426, 4881, L, 4400, 4856, Q, 4427, 4824, 4439, 4809, 4459, 4785, 4487, 4758, 4530, 4715, 4585, 4654, 4598, 4654, 4636, 4695, 4655, 4716, 4681, 4744, 4743, 4797, 4776, 4831, 4804, 4861, 4864, 4917, 4918, 4971, 4953, 5014, 4956, 5013, 4964, 5001, 4973, 4990, 4973, 4988, 4973, 4984, 4928, 4947, 4916, 4936, 4901, 4920, 4889, 4907, 4889, 4906, 4889, 4899, 4906, 4876, 4916, 4864, 4928, 4848, 4934, 4837, 4953, 4825, 4964, 4819, 4982, 4810, 4983, 4798, 4993, 4791, 5003, 4785, 5003, 4778, 4985, 4754, 4985, 4740, 4985, 4725, 5003, 4716, 5020, 4707, 5020, 4699, 5020, 4690, 4991, 4657, 4958, 4622, 4950, 4612, 4937, 4596, 4909, 4586, 4876, 4577, 4859, 4571, 4845, 4567, 4807, 4566, 4775, 4565, 4751, 4551, 4737, 4542, 4719, 4516, 4699, 4484, 4687, 4468, 4458, 4151, 4442, 4127, 4411, 4098, 4397, 4088, 4371, 4072, 4341, 4079, 4307, 4085, 4282, 4068, 4256, 4049, 4261, 4015, 4269, 3956, 4235, 3903, 4204, 3855, 4146, 3822, 4111, 3802, 4017, 3769, 4011, 3767, 3990, 3762, 3971, 3758, 3963, 3754, 3953, 3748, 3933, 3752, 3912, 3756, 3902, 3750, 3874, 3736, 3851, 3649, 3822, 3540, 3822, 3512, 3903, 3431, 3939, 3387, 3973, 3348, 4001, 3322, 4029, 3296, 4075, 3251, 4120, 3206, 4258, 3054, 4259, 2962, 4257, 2883, 4255, 2803, 4240, 2529, 4224, 2255, 4217, 2150, 4219, 2087, 4215, 2064, 4208, 2025, 4168, 2008, 4141, 1996, 4128, 1992, 4109, 1987, 4091, 1989, Q, 4080, 1990, 4053, 1986, Z, M, 4076, 4170, Q, 4431, 4506, 4460, 4534, 4488, 4562, 4514, 4584, 4539, 4606, 4550, 4624, 4533, 4634, 4493, 4680, 4453, 4727, 4409, 4766, 4365, 4805, 4352, 4823, 4343, 4819, 4334, 4808, 4325, 4796, 4317, 4787, 4307, 4779, 4289, 4763, 4270, 4746, 4251, 4724, 4232, 4702, 4189, 4664, 4146, 4625, 4123, 4600, 4100, 4575, 4017, 4500, 3934, 4425, 3849, 4334, 3782, 4292, 3722, 4216, 3689, 4174, 3625, 4073, 3625, 4046, 3634, 4015, 3640, 3994, 3657, 3950, 3675, 3902, 3684, 3876, 3702, 3827, 3707, 3827, 3723, 3827, 3792, 3892, 3840, 3938, 3892, 3992, 3915, 4016, 3983, 4079, 4045, 4136, 4075, 4169, Q, 4076, 4169, 4076, 4170, Z], [M, 3620, 5325, Q, 3605, 5332, 3590, 5340, 3591, 5346, 3591, 5363, 3682, 5321, 3745, 5291, L, 3768, 5285, 3768, 5245, Q, 3765, 5241, 3758, 5241, 3756, 5241, 3698, 5277, Q, 3635, 5317, 3620, 5325, Z]],
      "label": "Kai Tak",
      "shortLabel": "KK",
      "labelPosition": [321.1, 326],
      "labelAlignment": [CEN, MID]
    },
    "G12": {
      "outlines": [[M, 2619, 4229, Q, 2379, 4513, 2323, 4580, 2273, 4640, 2261, 4647, 2276, 4673, 2345, 4739, 2409, 4800, 2409, 4806, 2409, 4808, 2379, 4848, 2347, 4888, 2345, 4895, L, 2346, 4895, Q, 2367, 4898, 2450, 4903, 2526, 4907, 2538, 4907, L, 2547, 4907, 2547, 4906, 2598, 4891, Q, 2624, 4858, 2634, 4847, 2651, 4829, 2669, 4797, 2677, 4784, 2698, 4742, 2729, 4680, 2752, 4622, 2762, 4597, 2797, 4510, 2804, 4487, 2810, 4470, 2824, 4436, 2834, 4436, 2844, 4436, 2856, 4451, 2869, 4466, 2893, 4466, 2901, 4466, 2902, 4466, 2910, 4462, 2913, 4462, 2893, 4454, 2878, 4443, 2849, 4424, 2849, 4402, 2849, 4395, 2859, 4381, 2870, 4367, 2871, 4365, L, 2871, 4358, Q, 2869, 4358, 2861, 4355, 2861, 4354, 2861, 4353, 2791, 4328, 2703, 4276, Q, 2678, 4260, 2619, 4229, Z]],
      "label": "Hoi Sham",
      "shortLabel": "HS",
      "labelPosition": [258.7, 456.8],
      "labelAlignment": [CEN, MID]
    },
    "G13": {
      "outlines": [[M, 2261, 4647, Q, 2259, 4648, 2259, 4648, 2248, 4648, 2213, 4609, 2176, 4568, 2172, 4563, L, 2162, 4563, Q, 2159, 4581, 2145, 4627, L, 2107, 4627, Q, 2099, 4612, 2070, 4612, 2043, 4612, 2041, 4615, 2038, 4619, 2029, 4655, 2022, 4675, 1990, 4723, 1991, 4736, 1992, 4744, 1993, 4757, 1986, 4773, L, 1976, 4773, 1974, 4957, Q, 1985, 4941, 1993, 4931, 2009, 4910, 2018, 4910, 2036, 4910, 2136, 4957, 2258, 5015, 2280, 5024, 2288, 5001, 2303, 4974, 2304, 4971, 2346, 4895, L, 2345, 4895, Q, 2347, 4888, 2379, 4848, 2409, 4808, 2409, 4806, 2409, 4800, 2345, 4739, Q, 2276, 4673, 2261, 4647, Z]],
      "label": "To Kwa Wan North",
      "shortLabel": "TN",
      "labelPosition": [219.2, 479.3],
      "labelAlignment": [CEN, MID]
    },
    "G14": {
      "outlines": [[M, 2018, 4910, Q, 2009, 4910, 1993, 4931, 1985, 4941, 1974, 4957, L, 1976, 4773, 1938, 4771, Q, 1928, 4770, 1913, 4770, 1889, 4873, 1849, 4991, L, 1848, 4991, Q, 1850, 4997, 1850, 5006, 1850, 5016, 1833, 5046, 1817, 5072, 1809, 5082, 1785, 5109, 1766, 5141, 1759, 5152, 1753, 5165, L, 1700, 5253, Q, 1694, 5260, 1689, 5268, 1697, 5271, 1711, 5281, 1716, 5285, 1734, 5294, 1751, 5303, 1758, 5308, 1766, 5313, 1775, 5319, 1785, 5324, 1829, 5353, 1870, 5380, 1871, 5380, 1910, 5311, 1921, 5277, 1922, 5274, 1931, 5256, 1941, 5239, 1944, 5235, 1950, 5227, 1966, 5229, 1971, 5229, 1980, 5231, 1988, 5232, 2000, 5232, 2056, 5231, 2224, 5231, 2214, 5202, 2233, 5151, 2258, 5090, 2267, 5059, 2271, 5043, 2280, 5024, 2258, 5015, 2136, 4957, Q, 2036, 4910, 2018, 4910, Z]],
      "label": "To Kwa Wan South",
      "shortLabel": "TS",
      "labelPosition": [198.4, 507.5],
      "labelAlignment": [CEN, MID]
    },
    "G15": {
      "outlines": [[M, 3366, 5444, Q, 3343, 5458, 3299, 5484, 3248, 5507, 3215, 5522, 3151, 5551, 3132, 5568, 3138, 5568, 3143, 5572, 3147, 5575, 3151, 5575, 3181, 5575, 3317, 5503, 3448, 5431, 3450, 5429, 3527, 5393, 3591, 5363, 3591, 5346, 3590, 5340, 3517, 5373, 3450, 5401, Q, 3409, 5417, 3366, 5444, Z], [M, 2346, 4895, Q, 2304, 4971, 2303, 4974, 2288, 5001, 2280, 5024, 2271, 5043, 2267, 5059, 2258, 5090, 2233, 5151, 2214, 5202, 2224, 5231, 2056, 5231, 2000, 5232, 1988, 5232, 1980, 5231, L, 1970, 5825, Q, 1992, 5828, 2024, 5826, 2056, 5825, 2076, 5828, 2096, 5830, 2109, 5819, 2120, 5808, 2152, 5788, 2173, 5775, 2201, 5743, 2230, 5706, 2240, 5694, L, 2331, 5694, 2331, 5806, Q, 2325, 5843, 2296, 5899, 2258, 5973, 2253, 5987, 2370, 6012, 2396, 6014, 2416, 6017, 2488, 6023, 2546, 6028, 2576, 6033, 2694, 6056, 2745, 6060, 2751, 6031, 2759, 5995, 2779, 5912, 2776, 5874, 2788, 5855, 2790, 5841, 2791, 5834, 2791, 5807, 2791, 5769, 2789, 5767, 2770, 5758, 2741, 5736, 2669, 5681, 2664, 5677, 2556, 5603, 2526, 5551, L, 2526, 5506, Q, 2570, 5506, 2590, 5504, L, 2590, 5472, Q, 2544, 5468, 2536, 5466, 2528, 5464, 2530, 5437, 2530, 5410, 2537, 5279, L, 2537, 5277, Q, 2537, 5274, 2538, 5268, 2538, 5262, 2538, 5253, L, 2538, 5253, Q, 2538, 5252, 2538, 5251, 2540, 5197, 2545, 5042, 2546, 5007, 2547, 4965, L, 2547, 4907, 2538, 4907, Q, 2526, 4907, 2450, 4903, Q, 2367, 4898, 2346, 4895, Z], [M, 2936, 4955, Q, 2944, 4981, 2962, 5008, 2972, 5024, 2999, 5064, 3004, 5072, 3030, 5107, 3053, 5139, 3061, 5154, 3070, 5172, 3091, 5204, 3110, 5232, 3119, 5253, 3127, 5263, 3145, 5303, 3167, 5341, 3191, 5349, 3193, 5341, 3197, 5336, 3200, 5332, 3200, 5325, 3200, 5322, 3148, 5236, 3098, 5152, 3077, 5120, 3034, 5050, 3015, 5020, 3004, 5003, 2999, 4995, 2988, 4979, 2979, 4973, 2978, 4973, 2965, 4971, 2956, 4970, 2955, 4963, 2953, 4952, 2936, 4947, Z]],
      "label": "Hok Yuen Laguna Verde",
      "shortLabel": "HV",
      "labelPosition": [226.5, 547.7],
      "labelAlignment": [CEN, MID]
    },
    "G16": {
      "outlines": [[M, 2733, 6143, Q, 2735, 6113, 2745, 6060, 2694, 6056, 2576, 6033, 2546, 6028, 2488, 6023, 2416, 6017, 2396, 6014, 2370, 6012, 2253, 5987, 2251, 5987, 2251, 5987, 2246, 5997, 2240, 6007, 2264, 6020, 2312, 6058, 2362, 6097, 2387, 6110, 2386, 6177, 2317, 6281, 2280, 6339, 2205, 6443, 2164, 6407, 2128, 6377, 2056, 6319, 2033, 6319, 2017, 6319, 1958, 6431, 1978, 6446, 2003, 6457, 2038, 6472, 2052, 6480, 2063, 6486, 2098, 6499, 2100, 6499, 2117, 6504, 2134, 6510, 2134, 6524, 2134, 6536, 2122, 6577, 2110, 6618, 2110, 6623, 2110, 6670, 2064, 6709, 2022, 6745, 1966, 6768, 1902, 6789, 1873, 6800, 1875, 6810, 1875, 6824, 1875, 6852, 1875, 6853, 1877, 6868, 1877, 6909, 1878, 6947, 1889, 6965, 1914, 6959, 1950, 6939, 1993, 6914, 2017, 6901, 2154, 6845, 2156, 6845, 2166, 6845, 2170, 6863, 2173, 6872, 2176, 6888, 2181, 6896, 2187, 6909, 2194, 6920, 2202, 6929, L, 2211, 6929, 2211, 6885, Q, 2196, 6873, 2191, 6861, 2187, 6852, 2187, 6837, 2187, 6821, 2217, 6806, 2243, 6793, 2257, 6793, L, 2312, 6796, Q, 2347, 6796, 2352, 6789, 2365, 6766, 2394, 6733, 2413, 6712, 2421, 6677, 2426, 6661, 2459, 6661, 2470, 6661, 2482, 6671, 2494, 6681, 2510, 6681, 2533, 6681, 2570, 6657, 2580, 6651, 2619, 6621, 2658, 6597, 2683, 6582, 2707, 6566, 2706, 6549, 2704, 6531, 2693, 6516, 2690, 6390, 2690, 6387, 2690, 6301, 2695, 6283, Q, 2723, 6186, 2733, 6143, Z]],
      "label": "Whampoa East",
      "shortLabel": "WE",
      "labelPosition": [247, 638.4],
      "labelAlignment": [CEN, MID]
    },
    "G17": {
      "outlines": [[M, 2099, 6222, Q, 2086, 6222, 2035, 6193, 1987, 6163, 1984, 6162, 1974, 6156, 1884, 6081, 1875, 6081, 1859, 6126, 1849, 6149, 1839, 6177, 1823, 6199, 1798, 6227, 1785, 6241, 1761, 6267, 1732, 6299, 1683, 6331, 1654, 6349, 1594, 6384, 1610, 6387, 1641, 6473, 1644, 6480, 1681, 6595, 1693, 6630, 1716, 6713, 1736, 6786, 1754, 6812, 1759, 6800, 1772, 6791, 1785, 6781, 1799, 6782, 1814, 6783, 1835, 6776, 1857, 6770, 1866, 6783, 1871, 6789, 1873, 6800, 1902, 6789, 1966, 6768, 2022, 6745, 2064, 6709, 2110, 6670, 2110, 6623, 2110, 6618, 2122, 6577, 2134, 6536, 2134, 6524, 2134, 6510, 2117, 6504, 2100, 6499, 2098, 6499, 2063, 6486, 2052, 6480, 2038, 6472, 2003, 6457, 1978, 6446, 1958, 6431, 2017, 6319, 2033, 6319, 2056, 6319, 2128, 6377, 2164, 6407, 2205, 6443, 2280, 6339, 2317, 6281, 2386, 6177, 2387, 6110, 2362, 6097, 2312, 6058, 2264, 6020, 2240, 6007, 2206, 6070, 2170, 6113, 2160, 6123, 2129, 6175, Q, 2102, 6222, 2099, 6222, Z]],
      "label": "Whampoa West",
      "shortLabel": "WW",
      "labelPosition": [187.6, 657],
      "labelAlignment": [CEN, MID]
    },
    "G18": {
      "outlines": [[M, 1993, 5971, Q, 1955, 5985, 1953, 5985, 1952, 5985, 1897, 5943, 1885, 5950, 1847, 5966, 1815, 5984, 1809, 6017, 1791, 6015, 1769, 6014, 1746, 6012, 1748, 6016, 1748, 6020, 1740, 6041, 1731, 6062, 1724, 6082, 1660, 6081, 1657, 6079, 1654, 6078, 1636, 6110, 1618, 6143, 1599, 6139, 1579, 6135, 1562, 6140, 1544, 6145, 1536, 6163, 1528, 6181, 1518, 6192, 1508, 6203, 1489, 6232, 1479, 6249, 1459, 6281, 1447, 6297, 1425, 6331, 1423, 6334, 1418, 6350, 1413, 6367, 1408, 6374, 1408, 6375, 1409, 6375, 1436, 6391, 1451, 6394, 1465, 6397, 1486, 6400, 1491, 6402, 1495, 6403, 1530, 6400, 1592, 6383, L, 1593, 6383, 1594, 6384, Q, 1654, 6349, 1683, 6331, 1732, 6299, 1761, 6267, 1785, 6241, 1798, 6227, 1823, 6199, 1839, 6177, 1849, 6149, 1859, 6126, 1875, 6081, 1884, 6081, 1974, 6156, 1984, 6162, 1987, 6163, 2035, 6193, 2086, 6222, 2099, 6222, 2102, 6222, 2129, 6175, 2160, 6123, 2170, 6113, 2206, 6070, 2240, 6007, 2246, 5997, 2251, 5987, 2237, 5983, 2222, 5980, 2110, 5957, 2043, 5957, Q, 2031, 5957, 1993, 5971, Z]],
      "label": "Hung Hom Bay",
      "shortLabel": "HB",
      "labelPosition": [164.5, 621.9],
      "labelAlignment": [CEN, MID]
    },
    "G19": {
      "outlines": [[M, 1691, 5801, Q, 1624, 5746, 1617, 5746, 1607, 5746, 1599, 5765, 1592, 5783, 1574, 5783, 1545, 5783, 1486, 5742, 1432, 5704, 1408, 5708, 1407, 5711, 1406, 5713, 1396, 5729, 1370, 5745, 1355, 5754, 1324, 5773, 1292, 5796, 1241, 5830, 1213, 5848, 1205, 5855, 1199, 5860, 1184, 5872, 1172, 5883, 1170, 5892, 1173, 5894, 1176, 5897, 1213, 5929, 1228, 5974, 1245, 6025, 1267, 6160, 1273, 6198, 1297, 6243, 1311, 6270, 1343, 6320, 1380, 6358, 1408, 6374, 1413, 6367, 1418, 6350, 1423, 6334, 1425, 6331, 1447, 6297, 1459, 6281, 1479, 6249, 1489, 6232, 1508, 6203, 1518, 6192, 1528, 6181, 1536, 6163, 1544, 6145, 1562, 6140, 1579, 6135, 1599, 6139, 1618, 6143, 1636, 6110, 1654, 6078, 1657, 6079, 1660, 6081, 1724, 6082, 1731, 6062, 1740, 6041, 1748, 6020, 1748, 6016, 1746, 6012, 1769, 6014, 1791, 6015, 1809, 6017, 1815, 5984, 1847, 5966, 1885, 5950, 1897, 5943, 1886, 5936, 1875, 5927, 1800, 5870, 1761, 5848, Q, 1721, 5826, 1691, 5801, Z]],
      "label": "Hung Hom",
      "shortLabel": "HH",
      "labelPosition": [149.9, 596],
      "labelAlignment": [CEN, MID]
    },
    "G20": {
      "outlines": [[M, 1829, 5353, Q, 1785, 5324, 1775, 5319, 1766, 5313, 1758, 5308, 1751, 5303, 1734, 5294, 1716, 5285, 1711, 5281, 1697, 5271, 1689, 5268, 1671, 5293, 1645, 5324, 1644, 5326, 1619, 5352, 1605, 5367, 1593, 5385, 1583, 5400, 1557, 5430, 1538, 5452, 1538, 5458, L, 1538, 5459, Q, 1539, 5469, 1569, 5500, 1599, 5532, 1599, 5546, 1599, 5567, 1580, 5590, 1569, 5602, 1553, 5618, 1517, 5571, 1498, 5547, 1463, 5503, 1452, 5503, 1430, 5520, 1423, 5524, 1409, 5530, 1407, 5538, 1407, 5540, 1407, 5564, 1407, 5587, 1409, 5599, 1412, 5611, 1412, 5631, L, 1409, 5673, Q, 1409, 5676, 1409, 5694, 1409, 5703, 1408, 5708, 1432, 5704, 1486, 5742, 1545, 5783, 1574, 5783, 1592, 5783, 1599, 5765, 1607, 5746, 1617, 5746, 1624, 5746, 1691, 5801, 1721, 5826, 1761, 5848, 1800, 5870, 1875, 5927, 1886, 5936, 1897, 5943, 1952, 5985, 1953, 5985, 1955, 5985, 1993, 5971, 2031, 5957, 2043, 5957, 2110, 5957, 2222, 5980, 2237, 5983, 2251, 5987, 2251, 5987, 2253, 5987, 2258, 5973, 2296, 5899, 2325, 5843, 2331, 5806, L, 2331, 5694, 2240, 5694, Q, 2230, 5706, 2201, 5743, 2173, 5775, 2152, 5788, 2120, 5808, 2109, 5819, 2096, 5830, 2076, 5828, 2056, 5825, 2024, 5826, 1992, 5828, 1970, 5825, L, 1980, 5231, Q, 1971, 5229, 1966, 5229, 1950, 5227, 1944, 5235, 1941, 5239, 1931, 5256, 1922, 5274, 1921, 5277, 1910, 5311, 1871, 5380, Q, 1870, 5380, 1829, 5353, Z]],
      "label": "Ka Wai",
      "shortLabel": "KW",
      "labelPosition": [178.8, 559.6],
      "labelAlignment": [CEN, MID]
    },
    "G21": {
      "outlines": [[M, 1190, 4906, Q, 1173, 4838, 1167, 4806, 1161, 4774, 1152, 4724, 1143, 4674, 1078, 4626, 999, 4581, 962, 4554, L, 948, 4554, Q, 920, 4538, 859, 4514, 788, 4486, 781, 4483, 778, 4493, 770, 4543, 765, 4577, 754, 4591, 744, 4603, 734, 4619, 722, 4641, 715, 4651, 705, 4664, 701, 4678, 701, 4680, 690, 4697, 680, 4712, 680, 4722, 629, 4795, 623, 4829, 618, 4848, 609, 4893, 601, 4936, 595, 4960, 585, 4991, 568, 5088, 568, 5112, 561, 5150, 557, 5172, 548, 5211, L, 555, 5222, Q, 560, 5232, 569, 5240, L, 587, 5258, Q, 611, 5282, 652, 5329, 695, 5379, 725, 5411, 789, 5477, 849, 5551, 898, 5610, 987, 5714, L, 988, 5715, Q, 1012, 5745, 1108, 5841, 1129, 5862, 1170, 5892, 1172, 5883, 1184, 5872, 1199, 5860, 1205, 5855, 1213, 5848, 1241, 5830, 1292, 5796, 1324, 5773, 1355, 5754, 1370, 5745, 1396, 5729, 1406, 5713, 1407, 5711, 1408, 5708, 1409, 5703, 1409, 5694, 1409, 5676, 1409, 5673, L, 1412, 5631, Q, 1412, 5611, 1409, 5599, 1407, 5587, 1407, 5564, 1407, 5540, 1407, 5538, 1409, 5530, 1423, 5524, 1430, 5520, 1452, 5503, 1463, 5503, 1498, 5547, 1517, 5571, 1553, 5618, 1569, 5602, 1580, 5590, 1599, 5567, 1599, 5546, 1599, 5532, 1569, 5500, 1539, 5469, 1538, 5459, 1487, 5433, 1423, 5369, 1354, 5293, 1323, 5261, 1276, 5213, 1272, 5207, 1252, 5181, 1246, 5148, 1233, 5066, 1222, 5011, 1221, 5010, 1221, 5009, 1220, 5008, 1214, 4990, Q, 1206, 4973, 1190, 4906, Z, M, 965, 4767, Q, 968, 4771, 978, 4784, 987, 4795, 989, 4804, 991, 4810, 998, 4818, 1004, 4824, 1004, 4833, 1004, 4845, 989, 4856, 981, 4862, 964, 4872, 949, 4880, 913, 4906, 901, 4913, 896, 4932, 893, 4942, 888, 4960, 886, 4963, 874, 4984, 861, 5008, 861, 5016, 861, 5024, 888, 5032, 917, 5041, 921, 5045, 933, 5059, 947, 5074, 957, 5086, 968, 5108, 994, 5157, 999, 5184, 1001, 5194, 1001, 5248, L, 1001, 5302, Q, 999, 5313, 993, 5327, 986, 5343, 983, 5354, 980, 5365, 975, 5382, 970, 5397, 961, 5409, 959, 5412, 949, 5431, 938, 5448, 925, 5445, 886, 5423, 792, 5298, 690, 5164, 690, 5121, 690, 5024, 699, 4961, 712, 4864, 754, 4808, 764, 4798, 811, 4742, 842, 4707, 882, 4707, 904, 4707, 911, 4709, 924, 4713, 943, 4734, Q, 952, 4743, 965, 4767, Z]],
      "label": "Oi Man",
      "shortLabel": "OM",
      "labelPosition": [113.1, 553.2],
      "labelAlignment": [CEN, MID]
    },
    "G22": {
      "outlines": [[M, 978, 4784, Q, 968, 4771, 965, 4767, 952, 4743, 943, 4734, 924, 4713, 911, 4709, 904, 4707, 882, 4707, 842, 4707, 811, 4742, 764, 4798, 754, 4808, 712, 4864, 699, 4961, 690, 5024, 690, 5121, 690, 5164, 792, 5298, 886, 5423, 925, 5445, 938, 5448, 949, 5431, 959, 5412, 961, 5409, 970, 5397, 975, 5382, 980, 5365, 983, 5354, 986, 5343, 993, 5327, 999, 5313, 1001, 5302, L, 1001, 5248, Q, 1001, 5194, 999, 5184, 994, 5157, 968, 5108, 957, 5086, 947, 5074, 933, 5059, 921, 5045, 917, 5041, 888, 5032, 861, 5024, 861, 5016, 861, 5008, 874, 4984, 886, 4963, 888, 4960, 893, 4942, 896, 4932, 901, 4913, 913, 4906, 949, 4880, 964, 4872, 981, 4862, 989, 4856, 1004, 4845, 1004, 4833, 1004, 4824, 998, 4818, 991, 4810, 989, 4804, Q, 987, 4795, 978, 4784, Z]],
      "label": "Oi Chun",
      "shortLabel": "OC",
      "labelPosition": [85.8, 519.1],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'kowlooncity',
  type: 'maps'
};

/***/ })

/******/ });
}));
