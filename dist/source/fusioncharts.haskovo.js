
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(9);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 9:
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
 * @id fusionmaps.Haskovo.18.08-08-2012 05:10:50
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
  "name": "Haskovo",
  "revision": 18,
  "standaloneInit": true,
  "baseWidth": 596,
  "baseHeight": 532,
  "baseScaleFactor": 10,
  "entities": {
    "10": {
      "outlines": [[M, 5248, 1672, L, 5248, 1695, 5215, 1695, 5215, 1736, Q, 5158, 1742, 5154, 1815, 5142, 1815, 5138, 1818, L, 5121, 1818, Q, 5121, 1804, 5108, 1797, 5096, 1791, 5099, 1773, 5102, 1731, 5090, 1715, 5086, 1710, 5081, 1654, L, 5079, 1641, Q, 5076, 1635, 5069, 1635, L, 5066, 1608, 5009, 1607, 5009, 1627, Q, 5006, 1633, 4992, 1630, 4992, 1655, 4972, 1651, L, 4972, 1677, 4950, 1678, 4950, 1709, Q, 4957, 1709, 4976, 1714, L, 4976, 1743, Q, 4993, 1735, 5002, 1748, L, 5002, 1863, Q, 4980, 1863, 4974, 1865, L, 4939, 1865, 4938, 1847, 4900, 1847, 4895, 1824, Q, 4850, 1828, 4855, 1772, 4839, 1760, 4838, 1738, 4834, 1707, 4829, 1706, 4815, 1702, 4809, 1684, 4799, 1659, 4796, 1656, 4781, 1649, 4780, 1648, L, 4772, 1635, Q, 4749, 1632, 4742, 1620, 4732, 1610, 4730, 1605, 4727, 1603, 4714, 1599, 4700, 1578, 4691, 1574, 4678, 1554, 4666, 1555, 4654, 1555, 4636, 1537, 4621, 1531, 4617, 1529, 4611, 1517, 4605, 1513, 4592, 1512, 4588, 1508, 4586, 1506, 4575, 1488, 4567, 1476, 4532, 1478, 4505, 1480, 4500, 1477, L, 4487, 1483, 4487, 1498, Q, 4454, 1501, 4458, 1513, L, 4432, 1513, 4432, 1524, 4434, 1524, 4434, 1538, 4410, 1539, 4410, 1573, Q, 4428, 1576, 4429, 1577, L, 4429, 1605, Q, 4413, 1627, 4459, 1627, L, 4459, 1657, 4458, 1662, 4445, 1663, 4445, 1678, 4420, 1678, 4420, 1696, 4337, 1696, 4337, 1723, 4270, 1723, 4270, 1744, 4244, 1744, 4244, 1775, Q, 4264, 1799, 4307, 1853, 4350, 1901, 4393, 1912, L, 4394, 1935, 4403, 1938, 4439, 1938, Q, 4443, 1948, 4447, 1961, 4451, 1968, 4469, 1965, 4483, 1961, 4493, 1973, 4501, 1982, 4513, 1978, L, 4513, 2087, 4469, 2087, 4468, 2103, 4430, 2103, Q, 4439, 2132, 4415, 2133, 4384, 2130, 4374, 2130, L, 4372, 2153, Q, 4354, 2156, 4351, 2160, 4340, 2176, 4339, 2176, L, 4313, 2176, 4312, 2199, 4274, 2199, Q, 4269, 2223, 4269, 2224, L, 4233, 2224, 4233, 2288, 4234, 2290, Q, 4244, 2291, 4260, 2295, L, 4260, 2347, Q, 4252, 2344, 4247, 2364, 4200, 2364, 4210, 2393, L, 4177, 2393, 4177, 2410, 4148, 2411, 4147, 2433, Q, 4111, 2416, 4113, 2453, 4115, 2492, 4094, 2485, L, 4094, 2514, Q, 4096, 2514, 4096, 2520, 4109, 2516, 4148, 2556, 4187, 2598, 4187, 2626, 4187, 2648, 4179, 2649, 4167, 2652, 4156, 2678, 4133, 2678, 4119, 2679, 4094, 2680, 4092, 2706, 4059, 2704, 4044, 2705, 4016, 2707, 4021, 2732, 3978, 2732, 3944, 2740, 3909, 2749, 3850, 2749, L, 3848, 2772, 3829, 2774, Q, 3833, 2811, 3807, 2804, 3808, 2818, 3783, 2843, L, 3783, 2967, Q, 3781, 2973, 3771, 2982, 3762, 2989, 3767, 3010, 3755, 3009, 3751, 3017, 3745, 3034, 3744, 3035, 3721, 3053, 3723, 3059, L, 3701, 3059, 3700, 3091, Q, 3765, 3091, 3755, 3139, L, 3827, 3139, Q, 3834, 3108, 3888, 3109, 3915, 3109, 3949, 3116, L, 3949, 3035, Q, 4009, 3019, 4013, 3021, 4009, 2997, 4027, 2993, 4037, 2992, 4065, 2993, L, 4065, 2967, 4111, 2967, 4112, 2942, 4150, 2942, 4150, 2919, 4195, 2919, Q, 4202, 2946, 4228, 2948, 4253, 2949, 4258, 2964, 4261, 2977, 4290, 2990, 4314, 3000, 4311, 3017, L, 4366, 3017, Q, 4358, 2993, 4414, 2993, L, 4414, 2967, 4450, 2967, 4450, 2998, Q, 4470, 2991, 4472, 3015, 4475, 3029, 4476, 3057, 4501, 3045, 4508, 3064, 4516, 3088, 4536, 3088, 4557, 3087, 4566, 3110, 4572, 3127, 4603, 3114, 4609, 3140, 4635, 3140, 4666, 3138, 4672, 3148, 4677, 3155, 4706, 3157, 4725, 3159, 4731, 3178, L, 4799, 3178, Q, 4801, 3156, 4854, 3161, 4907, 3164, 4912, 3137, L, 5009, 3137, Q, 5005, 3126, 5017, 3126, 5033, 3126, 5035, 3124, L, 5035, 3102, 5014, 3102, Q, 4999, 3064, 4951, 3009, 4914, 2965, 4914, 2925, 4914, 2895, 4925, 2889, 4936, 2883, 4936, 2843, 4936, 2826, 4944, 2827, 4954, 2825, 4954, 2810, 4953, 2777, 4964, 2770, 4973, 2765, 4975, 2749, 4977, 2736, 4985, 2733, 5010, 2722, 5008, 2703, 5015, 2700, 5030, 2664, 5050, 2654, 5051, 2640, L, 5051, 2640, Q, 5051, 2621, 5058, 2618, 5067, 2615, 5071, 2598, L, 5101, 2597, 5103, 2578, Q, 5116, 2576, 5152, 2579, 5182, 2580, 5190, 2570, 5200, 2555, 5227, 2554, 5240, 2554, 5266, 2555, 5270, 2554, 5306, 2555, 5329, 2555, 5340, 2544, 5351, 2532, 5381, 2532, L, 5436, 2533, Q, 5449, 2531, 5527, 2515, 5575, 2504, 5609, 2508, 5632, 2510, 5682, 2488, L, 5764, 2488, Q, 5763, 2466, 5764, 2457, 5767, 2439, 5791, 2444, L, 5791, 2405, Q, 5817, 2413, 5818, 2396, 5819, 2369, 5843, 2361, 5848, 2360, 5847, 2333, 5846, 2310, 5871, 2314, 5874, 2287, 5891, 2288, L, 5891, 2258, 5865, 2258, 5865, 2228, Q, 5844, 2229, 5845, 2196, 5844, 2167, 5860, 2163, 5872, 2161, 5871, 2147, L, 5871, 2123, Q, 5880, 2123, 5901, 2112, L, 5902, 2083, 5914, 2083, 5914, 2056, Q, 5902, 2054, 5889, 2044, 5881, 2053, 5791, 2053, L, 5788, 2081, Q, 5743, 2081, 5743, 2088, 5744, 2107, 5722, 2107, 5700, 2105, 5696, 2105, 5696, 2113, 5692, 2126, L, 5689, 2127, 5629, 2127, 5624, 2102, 5552, 2103, 5552, 2063, 5531, 2063, 5531, 2023, 5518, 2023, 5518, 2000, 5472, 2000, Q, 5480, 2027, 5461, 2029, 5435, 2027, 5424, 2029, L, 5424, 2051, 5381, 2051, 5381, 2029, 5362, 2029, 5362, 2020, Q, 5364, 1961, 5366, 1938, L, 5387, 1938, 5387, 1810, Q, 5368, 1816, 5368, 1774, L, 5339, 1773, Q, 5343, 1756, 5328, 1743, 5313, 1730, 5313, 1719, 5313, 1703, 5296, 1700, 5291, 1679, 5287, 1672, Z]],
      "label": "Svilengrad",
      "shortLabel": "SV",
      "labelPosition": [480.7, 232.7],
      "labelAlignment": [CEN, MID]
    },
    "11": {
      "outlines": [[M, 5352, 388, Q, 5347, 399, 5342, 403, 5319, 415, 5300, 458, L, 5299, 459, 5265, 459, Q, 5265, 457, 5216, 394, 5186, 388, 5176, 383, 5170, 367, 5168, 360, 5162, 347, 5144, 355, L, 5143, 329, 5100, 329, 5100, 349, Q, 5090, 351, 5067, 352, 5064, 395, 5045, 386, L, 5045, 407, 4991, 407, Q, 4976, 392, 4974, 379, 4956, 384, 4939, 364, 4924, 345, 4903, 355, 4903, 336, 4899, 329, L, 4851, 329, Q, 4852, 356, 4826, 364, 4799, 372, 4788, 386, 4721, 392, 4714, 346, 4701, 345, 4695, 334, 4687, 317, 4682, 313, 4667, 302, 4654, 282, 4648, 265, 4645, 257, 4639, 241, 4626, 240, L, 4555, 240, Q, 4546, 209, 4509, 212, 4449, 214, 4446, 213, 4424, 207, 4403, 185, 4373, 154, 4366, 149, L, 4324, 117, Q, 4311, 117, 4302, 106, 4294, 96, 4281, 94, 4269, 91, 4229, 94, 4188, 95, 4174, 87, L, 4159, 70, Q, 4150, 62, 4133, 64, L, 4062, 64, Q, 4022, 64, 4015, 53, 3981, 53, 3971, 41, L, 3944, 41, 3944, 67, Q, 3936, 68, 3921, 68, L, 3923, 182, Q, 3932, 195, 3945, 203, 3946, 204, 3947, 227, 3946, 251, 3945, 253, 3942, 259, 3919, 262, L, 3890, 262, Q, 3879, 281, 3876, 285, 3859, 294, 3847, 323, 3836, 348, 3821, 353, 3817, 372, 3804, 380, 3788, 389, 3786, 403, 3770, 398, 3759, 397, 3737, 396, 3737, 420, L, 3684, 420, 3684, 702, 3712, 729, 3712, 789, Q, 3736, 802, 3738, 877, 3759, 905, 3771, 965, 3780, 980, 3784, 1014, 3784, 1018, 3807, 1063, 3814, 1078, 3808, 1119, 3814, 1137, 3822, 1144, 3828, 1148, 3828, 1162, 3828, 1182, 3826, 1198, L, 3902, 1198, Q, 3909, 1198, 3929, 1222, L, 3969, 1222, Q, 3964, 1248, 3998, 1266, L, 3998, 1301, 4021, 1319, 4021, 1357, Q, 4051, 1361, 4048, 1392, 4045, 1423, 4078, 1432, 4084, 1441, 4125, 1460, 4143, 1471, 4172, 1487, L, 4211, 1513, Q, 4241, 1539, 4254, 1539, L, 4434, 1538, 4434, 1524, 4432, 1524, 4432, 1513, 4458, 1513, Q, 4454, 1501, 4487, 1498, L, 4487, 1483, 4500, 1477, Q, 4505, 1480, 4532, 1478, 4567, 1476, 4575, 1488, 4586, 1506, 4588, 1508, 4592, 1512, 4605, 1513, 4611, 1517, 4617, 1529, 4621, 1531, 4636, 1537, 4654, 1555, 4666, 1555, 4678, 1554, 4691, 1574, 4700, 1578, 4714, 1599, 4727, 1603, 4730, 1605, 4732, 1610, 4742, 1620, 4749, 1632, 4772, 1635, L, 4780, 1648, Q, 4781, 1649, 4796, 1656, 4799, 1659, 4809, 1684, 4815, 1702, 4829, 1706, 4834, 1707, 4838, 1738, 4839, 1760, 4855, 1772, 4850, 1828, 4895, 1824, L, 4900, 1847, 4938, 1847, 4939, 1865, 4974, 1865, Q, 4980, 1863, 5002, 1863, L, 5002, 1748, Q, 4993, 1735, 4976, 1743, L, 4976, 1714, Q, 4957, 1709, 4950, 1709, L, 4950, 1678, 4972, 1677, 4972, 1651, Q, 4992, 1655, 4992, 1630, 5006, 1633, 5009, 1627, L, 5009, 1607, 5066, 1608, 5069, 1635, Q, 5076, 1635, 5079, 1641, L, 5081, 1654, Q, 5086, 1710, 5090, 1715, 5102, 1731, 5099, 1773, 5096, 1791, 5108, 1797, 5121, 1804, 5121, 1818, L, 5138, 1818, Q, 5142, 1815, 5154, 1815, 5158, 1742, 5215, 1736, L, 5215, 1695, 5248, 1695, 5248, 1672, 5287, 1672, Q, 5291, 1679, 5296, 1700, 5313, 1703, 5313, 1719, 5313, 1730, 5328, 1743, 5343, 1756, 5339, 1773, L, 5368, 1774, Q, 5368, 1816, 5387, 1810, L, 5387, 1938, 5366, 1938, Q, 5364, 1961, 5362, 2020, L, 5362, 2029, 5381, 2029, 5381, 2051, 5424, 2051, 5424, 2029, Q, 5435, 2027, 5461, 2029, 5480, 2027, 5472, 2000, L, 5518, 2000, 5518, 2023, 5531, 2023, 5531, 2063, 5552, 2063, 5552, 2103, 5624, 2102, 5629, 2127, 5689, 2127, 5692, 2126, Q, 5696, 2113, 5696, 2105, 5700, 2105, 5722, 2107, 5744, 2107, 5743, 2088, 5743, 2081, 5788, 2081, L, 5791, 2053, Q, 5881, 2053, 5889, 2044, 5871, 2029, 5851, 1996, 5830, 1964, 5792, 1924, 5714, 1830, 5676, 1791, 5614, 1727, 5563, 1656, 5465, 1519, 5463, 1512, L, 5463, 1411, Q, 5474, 1411, 5485, 1415, L, 5528, 1415, 5528, 1366, 5562, 1366, 5562, 1313, 5579, 1313, 5579, 1274, Q, 5610, 1282, 5610, 1213, 5609, 1144, 5592, 1135, 5575, 1125, 5575, 1096, L, 5575, 1028, Q, 5552, 1011, 5552, 990, 5552, 983, 5574, 980, L, 5575, 958, Q, 5599, 967, 5604, 942, 5609, 918, 5634, 930, 5636, 914, 5655, 902, 5670, 893, 5676, 885, 5677, 883, 5678, 881, 5686, 843, 5667, 825, 5660, 797, 5635, 771, 5629, 730, 5611, 717, 5606, 699, 5594, 690, 5579, 680, 5579, 661, 5578, 641, 5589, 638, 5600, 633, 5600, 611, 5600, 598, 5616, 595, 5631, 591, 5631, 572, 5631, 553, 5653, 513, 5674, 478, 5675, 476, 5674, 463, 5634, 439, 5589, 413, 5587, 409, L, 5545, 409, 5544, 425, 5515, 425, Q, 5522, 459, 5476, 452, L, 5475, 480, 5455, 480, 5455, 432, 5436, 432, Q, 5442, 407, 5430, 386, 5418, 365, 5419, 355, L, 5396, 355, Q, 5404, 375, 5368, 379, Q, 5355, 379, 5352, 388, Z]],
      "label": "Topolovgrad",
      "shortLabel": "TO",
      "labelPosition": [478.7, 93.1],
      "labelAlignment": [CEN, MID]
    },
    "01": {
      "outlines": [[M, 2057, 475, Q, 2032, 475, 2038, 444, L, 1998, 444, Q, 2012, 475, 1997, 481, 1976, 490, 1971, 514, 1967, 532, 1927, 571, 1900, 593, 1879, 625, 1876, 628, 1860, 665, 1855, 676, 1821, 676, L, 1770, 671, 1770, 419, Q, 1748, 399, 1748, 348, L, 1753, 263, Q, 1753, 203, 1748, 188, 1743, 171, 1687, 171, L, 1638, 171, Q, 1628, 171, 1626, 180, 1625, 185, 1622, 196, 1604, 221, 1590, 233, L, 1575, 262, 1542, 262, 1542, 303, 1511, 303, Q, 1506, 288, 1506, 279, 1487, 275, 1480, 273, 1468, 270, 1469, 255, L, 1452, 255, 1452, 276, 1434, 276, 1434, 313, Q, 1418, 313, 1411, 316, L, 1411, 360, Q, 1448, 362, 1455, 374, L, 1455, 458, 1413, 458, Q, 1410, 438, 1390, 433, 1366, 427, 1361, 421, 1324, 416, 1320, 382, 1294, 393, 1278, 371, 1262, 348, 1246, 354, 1251, 329, 1220, 329, 1187, 328, 1182, 303, L, 1148, 303, Q, 1151, 328, 1121, 335, 1112, 350, 1104, 352, L, 1072, 352, Q, 1073, 361, 1060, 370, 1046, 379, 1035, 374, L, 1035, 398, 1003, 398, 1001, 434, Q, 1001, 452, 1014, 461, 1026, 469, 1027, 499, 1027, 509, 1025, 537, 1028, 560, 1055, 561, L, 1055, 669, Q, 1021, 672, 1023, 704, 1024, 720, 1025, 749, 1003, 768, 1003, 777, 1007, 796, 969, 796, L, 969, 857, 870, 857, 870, 767, Q, 870, 756, 814, 732, 815, 706, 778, 706, 735, 712, 721, 708, 714, 688, 679, 688, L, 615, 688, Q, 608, 664, 608, 662, L, 581, 662, 581, 686, 566, 686, 566, 774, Q, 569, 781, 571, 789, 573, 816, 553, 852, 527, 890, 517, 910, 499, 943, 485, 961, 474, 974, 473, 996, 473, 1023, 468, 1034, 462, 1048, 425, 1089, 402, 1114, 409, 1150, 406, 1160, 393, 1169, 382, 1177, 382, 1202, L, 380, 1283, Q, 380, 1323, 426, 1397, 465, 1460, 453, 1529, L, 453, 1645, 499, 1645, Q, 499, 1633, 498, 1627, 498, 1615, 508, 1613, 517, 1609, 523, 1586, 564, 1554, 564, 1525, L, 805, 1525, Q, 812, 1543, 833, 1546, 838, 1547, 845, 1547, 867, 1545, 857, 1575, L, 899, 1575, Q, 899, 1586, 902, 1592, L, 1049, 1592, 1049, 1551, 1213, 1551, 1213, 1604, 1275, 1604, Q, 1297, 1604, 1306, 1615, 1316, 1627, 1326, 1628, 1348, 1630, 1381, 1662, 1413, 1693, 1425, 1693, L, 1461, 1687, 1461, 1648, 1484, 1648, Q, 1492, 1665, 1519, 1666, 1537, 1668, 1581, 1669, 1615, 1672, 1676, 1665, 1705, 1665, 1717, 1701, L, 1737, 1701, Q, 1770, 1705, 1776, 1698, 1781, 1691, 1785, 1689, 1785, 1679, 1814, 1681, 1838, 1677, 1836, 1654, L, 1878, 1654, Q, 1885, 1665, 1886, 1672, L, 1916, 1672, Q, 1919, 1652, 1963, 1642, 2001, 1633, 1998, 1596, 2028, 1596, 2074, 1587, L, 2074, 1554, Q, 2112, 1547, 2128, 1519, L, 2128, 1502, 2152, 1502, 2152, 1464, 2174, 1464, 2174, 1423, 2197, 1421, 2197, 1390, 2221, 1390, 2220, 1353, 2237, 1353, 2237, 1307, 2258, 1307, 2258, 1342, 2273, 1342, 2273, 1440, Q, 2280, 1441, 2299, 1438, 2316, 1439, 2315, 1459, 2324, 1461, 2345, 1459, 2361, 1460, 2358, 1481, L, 2417, 1481, Q, 2418, 1464, 2420, 1451, 2419, 1387, 2419, 1356, 2419, 1299, 2444, 1275, 2453, 1264, 2452, 1240, 2449, 1212, 2449, 1199, 2449, 1133, 2463, 1134, 2456, 1101, 2487, 1078, 2518, 1056, 2515, 1032, L, 2517, 998, Q, 2502, 1010, 2483, 1002, 2499, 1035, 2430, 1022, 2439, 1044, 2421, 1046, 2397, 1046, 2388, 1047, 2390, 1057, 2383, 1068, 2374, 1080, 2368, 1087, 2370, 1069, 2337, 1060, L, 2340, 1031, Q, 2320, 1022, 2294, 968, 2257, 936, 2249, 909, 2249, 848, 2251, 821, 2268, 766, 2268, 750, 2268, 718, 2207, 674, 2142, 632, 2134, 622, 2099, 581, 2087, 552, 2083, 544, 2058, 519, Q, 2044, 505, 2057, 475, Z]],
      "label": "Dimitrovgrad",
      "shortLabel": "DI",
      "labelPosition": [144.8, 108.9],
      "labelAlignment": [CEN, MID]
    },
    "08": {
      "outlines": [[M, 2974, 663, L, 2929, 663, Q, 2928, 669, 2929, 682, 2929, 692, 2914, 689, L, 2914, 722, 2895, 722, 2895, 740, 2869, 740, Q, 2877, 767, 2849, 768, 2813, 766, 2802, 768, L, 2802, 783, 2752, 783, 2752, 878, 2716, 878, 2716, 895, Q, 2693, 898, 2643, 898, L, 2643, 919, 2601, 919, 2601, 948, Q, 2584, 947, 2567, 959, 2548, 973, 2541, 975, 2531, 978, 2517, 998, L, 2515, 1032, Q, 2518, 1056, 2487, 1078, 2456, 1101, 2463, 1134, 2449, 1133, 2449, 1199, 2449, 1212, 2452, 1240, 2453, 1264, 2444, 1275, 2419, 1299, 2419, 1356, 2419, 1387, 2420, 1451, 2418, 1464, 2417, 1481, 2415, 1504, 2414, 1533, 2391, 1554, 2392, 1604, L, 2392, 1693, Q, 2394, 1714, 2389, 1729, L, 2412, 1730, 2412, 1715, 2449, 1715, 2451, 1690, 2481, 1690, 2481, 1671, Q, 2505, 1671, 2511, 1663, 2518, 1654, 2544, 1654, 2547, 1622, 2576, 1622, L, 2635, 1622, Q, 2638, 1623, 2641, 1623, 2657, 1625, 2694, 1620, 2732, 1618, 2741, 1642, L, 2814, 1642, Q, 2819, 1640, 2828, 1603, 2850, 1590, 2861, 1575, 2882, 1561, 2883, 1561, 2883, 1542, 2891, 1539, 2913, 1517, 2924, 1510, 2926, 1508, 2935, 1490, 2942, 1477, 2956, 1477, L, 3135, 1477, Q, 3126, 1458, 3158, 1457, 3187, 1456, 3179, 1439, L, 3204, 1439, 3204, 1416, Q, 3203, 1387, 3243, 1391, L, 3244, 1337, 3256, 1337, 3256, 1306, 3356, 1306, Q, 3359, 1315, 3359, 1335, L, 3439, 1335, Q, 3430, 1301, 3459, 1301, 3473, 1300, 3502, 1306, 3501, 1290, 3501, 1265, 3501, 1259, 3488, 1244, 3475, 1227, 3475, 1191, 3475, 1174, 3459, 1150, 3445, 1127, 3446, 1118, 3447, 1079, 3422, 1046, 3395, 1010, 3390, 983, 3366, 945, 3355, 926, L, 3334, 896, Q, 3335, 868, 3326, 861, 3298, 826, 3283, 809, 3257, 781, 3221, 784, 3220, 784, 3220, 784, 3193, 783, 3160, 762, 3117, 762, 3098, 743, 3072, 742, 3062, 738, 3050, 720, 3038, 717, 3014, 694, 2979, 689, Q, 2979, 672, 2974, 663, Z]],
      "label": "Simeonovgrad",
      "shortLabel": "SI",
      "labelPosition": [294.5, 119.6],
      "labelAlignment": [CEN, MID]
    },
    "07": {
      "outlines": [[M, 791, 1711, L, 791, 1664, Q, 815, 1666, 818, 1650, 821, 1622, 827, 1617, 830, 1568, 833, 1546, 812, 1543, 805, 1525, L, 564, 1525, Q, 564, 1554, 523, 1586, 517, 1609, 508, 1613, 498, 1615, 498, 1627, 499, 1633, 499, 1645, L, 453, 1645, Q, 452, 1672, 439, 1706, 426, 1737, 429, 1760, 431, 1792, 407, 1815, 378, 1836, 368, 1848, 343, 1864, 330, 1876, L, 341, 1869, 320, 1888, Q, 314, 1896, 316, 1925, L, 286, 1944, Q, 298, 1966, 280, 1979, 257, 1994, 260, 2010, 262, 2028, 237, 2034, 214, 2040, 220, 2057, L, 178, 2057, 178, 2082, 122, 2082, Q, 99, 2099, 89, 2099, 84, 2133, 68, 2133, 80, 2156, 66, 2180, 49, 2209, 49, 2215, 49, 2241, 51, 2245, 56, 2252, 87, 2253, 90, 2253, 105, 2272, 111, 2278, 132, 2283, 134, 2332, 134, 2440, 157, 2443, 212, 2439, 262, 2439, 279, 2459, 284, 2466, 307, 2466, 311, 2471, 326, 2487, L, 358, 2487, 372, 2515, 447, 2515, 447, 2454, 480, 2454, 480, 2420, 547, 2420, 547, 2403, 586, 2403, 586, 2351, 624, 2351, 624, 2275, Q, 649, 2272, 644, 2251, L, 686, 2251, 686, 2221, 727, 2221, 727, 2199, 769, 2199, Q, 759, 2176, 799, 2179, 810, 2179, 817, 2168, 823, 2157, 830, 2157, 856, 2156, 856, 2130, 850, 2097, 853, 2084, 854, 2073, 863, 2069, 876, 2063, 881, 2057, 886, 2028, 888, 2017, L, 888, 1986, Q, 905, 1975, 906, 1973, 909, 1964, 909, 1927, 909, 1877, 898, 1868, 857, 1834, 841, 1811, 830, 1797, 794, 1773, 771, 1757, 771, 1727, Q, 771, 1721, 791, 1711, Z]],
      "label": "Mineralni bani",
      "shortLabel": "MB",
      "labelPosition": [56.4, 202],
      "labelAlignment": [CEN, MID]
    },
    "03": {
      "outlines": [[M, 2237, 1307, L, 2237, 1353, 2220, 1353, 2221, 1390, 2197, 1390, 2197, 1421, 2174, 1423, 2174, 1464, 2152, 1464, 2152, 1502, 2128, 1502, 2128, 1519, Q, 2112, 1547, 2074, 1554, L, 2074, 1587, Q, 2028, 1596, 1998, 1596, 2001, 1633, 1963, 1642, 1919, 1652, 1916, 1672, L, 1886, 1672, Q, 1885, 1665, 1878, 1654, L, 1836, 1654, Q, 1838, 1677, 1814, 1681, 1785, 1679, 1785, 1689, 1781, 1691, 1776, 1698, 1770, 1705, 1737, 1701, L, 1717, 1701, Q, 1705, 1665, 1676, 1665, 1615, 1672, 1581, 1669, 1537, 1668, 1519, 1666, 1492, 1665, 1484, 1648, L, 1461, 1648, 1461, 1687, 1425, 1693, Q, 1413, 1693, 1381, 1662, 1348, 1630, 1326, 1628, 1316, 1627, 1306, 1615, 1297, 1604, 1275, 1604, L, 1213, 1604, 1213, 1551, 1049, 1551, 1049, 1592, 902, 1592, Q, 899, 1586, 899, 1575, L, 857, 1575, Q, 867, 1545, 845, 1547, 838, 1547, 833, 1546, 830, 1568, 827, 1617, 821, 1622, 818, 1650, 815, 1666, 791, 1664, L, 791, 1711, Q, 771, 1721, 771, 1727, 771, 1757, 794, 1773, 830, 1797, 841, 1811, 857, 1834, 898, 1868, 909, 1877, 909, 1927, 909, 1964, 906, 1973, 905, 1975, 888, 1986, L, 888, 2017, Q, 886, 2028, 881, 2057, 876, 2063, 863, 2069, 854, 2073, 853, 2084, 850, 2097, 856, 2130, 856, 2156, 830, 2157, 823, 2157, 817, 2168, 810, 2179, 799, 2179, 759, 2176, 769, 2199, L, 727, 2199, 727, 2221, 686, 2221, 686, 2251, 644, 2251, Q, 649, 2272, 624, 2275, L, 624, 2351, 630, 2351, Q, 632, 2356, 635, 2370, L, 679, 2370, Q, 672, 2397, 704, 2397, 745, 2398, 753, 2412, 755, 2417, 790, 2446, 818, 2468, 814, 2484, L, 900, 2484, Q, 906, 2478, 905, 2469, L, 1044, 2469, 1050, 2491, Q, 1094, 2477, 1130, 2525, 1137, 2534, 1158, 2551, 1176, 2568, 1175, 2590, L, 1245, 2590, 1245, 2564, 1280, 2564, Q, 1285, 2583, 1285, 2587, 1312, 2577, 1328, 2596, 1344, 2613, 1361, 2609, 1349, 2659, 1388, 2675, L, 1388, 2714, Q, 1394, 2727, 1412, 2766, 1409, 2792, 1439, 2815, 1441, 2818, 1464, 2843, 1558, 2746, 1602, 2730, L, 1602, 2681, Q, 1610, 2679, 1624, 2679, L, 1625, 2604, 1650, 2604, 1650, 2527, 1691, 2527, Q, 1696, 2551, 1697, 2558, L, 1751, 2557, Q, 1780, 2556, 1779, 2584, L, 1806, 2584, 1807, 2548, 1819, 2548, 1820, 2532, Q, 1826, 2531, 1845, 2531, L, 1849, 2478, Q, 1866, 2470, 1866, 2459, 1866, 2440, 1866, 2439, L, 1937, 2439, 1937, 2495, 1965, 2495, Q, 1965, 2577, 1967, 2614, 1998, 2617, 1994, 2634, L, 2083, 2634, Q, 2082, 2601, 2122, 2600, 2144, 2600, 2188, 2606, 2223, 2606, 2234, 2596, 2244, 2584, 2276, 2584, 2276, 2582, 2276, 2581, 2276, 2550, 2289, 2539, 2331, 2502, 2335, 2499, 2357, 2467, 2362, 2467, 2373, 2465, 2378, 2433, L, 2406, 2433, 2409, 2464, Q, 2431, 2464, 2449, 2476, 2466, 2487, 2493, 2487, 2493, 2494, 2497, 2515, L, 2544, 2515, 2544, 2542, Q, 2567, 2533, 2574, 2548, 2584, 2565, 2592, 2566, 2605, 2565, 2607, 2560, 2605, 2549, 2607, 2538, L, 2669, 2539, 2669, 2513, 2706, 2513, 2706, 2427, Q, 2706, 2423, 2706, 2421, 2705, 2406, 2703, 2400, L, 2703, 2370, 2722, 2370, Q, 2716, 2346, 2748, 2335, 2756, 2331, 2756, 2289, 2756, 2253, 2732, 2229, 2698, 2228, 2682, 2206, 2678, 2200, 2653, 2199, 2629, 2198, 2618, 2182, 2616, 2181, 2560, 2173, 2556, 2102, 2561, 2064, 2563, 2042, 2548, 2023, 2531, 2003, 2531, 1988, 2513, 1996, 2505, 1977, 2500, 1952, 2495, 1945, 2468, 1915, 2455, 1901, L, 2372, 1806, 2372, 1766, Q, 2372, 1754, 2384, 1738, 2387, 1734, 2389, 1729, 2394, 1714, 2392, 1693, L, 2392, 1604, Q, 2391, 1554, 2414, 1533, 2415, 1504, 2417, 1481, L, 2358, 1481, Q, 2361, 1460, 2345, 1459, 2324, 1461, 2315, 1459, 2316, 1439, 2299, 1438, 2280, 1441, 2273, 1440, L, 2273, 1342, 2258, 1342, 2258, 1307, Z]],
      "label": "Haskovo",
      "shortLabel": "HS",
      "labelPosition": [169, 207.5],
      "labelAlignment": [CEN, MID]
    },
    "02": {
      "outlines": [[M, 3969, 1222, L, 3929, 1222, Q, 3909, 1198, 3902, 1198, L, 3826, 1198, Q, 3824, 1226, 3816, 1243, 3761, 1247, 3735, 1248, 3738, 1261, 3724, 1269, 3711, 1273, 3718, 1295, 3685, 1302, 3690, 1316, L, 3665, 1316, 3665, 1339, Q, 3638, 1330, 3633, 1348, 3630, 1357, 3631, 1383, L, 3621, 1384, 3595, 1384, 3595, 1395, 3575, 1395, 3575, 1375, 3549, 1375, Q, 3548, 1355, 3510, 1331, 3505, 1328, 3502, 1306, 3473, 1300, 3459, 1301, 3430, 1301, 3439, 1335, L, 3359, 1335, Q, 3359, 1315, 3356, 1306, L, 3256, 1306, 3256, 1337, 3244, 1337, 3243, 1391, Q, 3203, 1387, 3204, 1416, L, 3204, 1439, 3179, 1439, Q, 3187, 1456, 3158, 1457, 3126, 1458, 3135, 1477, L, 2956, 1477, Q, 2942, 1477, 2935, 1490, 2926, 1508, 2924, 1510, 2913, 1517, 2891, 1539, 2883, 1542, 2883, 1561, 2882, 1561, 2861, 1575, 2850, 1590, 2828, 1603, 2819, 1640, 2814, 1642, L, 2741, 1642, Q, 2732, 1618, 2694, 1620, 2657, 1625, 2641, 1623, 2638, 1623, 2635, 1622, L, 2576, 1622, Q, 2547, 1622, 2544, 1654, 2518, 1654, 2511, 1663, 2505, 1671, 2481, 1671, L, 2481, 1690, 2451, 1690, 2449, 1715, 2412, 1715, 2412, 1730, 2389, 1729, Q, 2387, 1734, 2384, 1738, 2372, 1754, 2372, 1766, L, 2372, 1806, 2455, 1901, Q, 2468, 1915, 2495, 1945, 2500, 1952, 2505, 1977, 2513, 1996, 2531, 1988, 2531, 2003, 2548, 2023, 2563, 2042, 2561, 2064, 2556, 2102, 2560, 2173, 2616, 2181, 2618, 2182, 2629, 2198, 2653, 2199, 2678, 2200, 2682, 2206, 2698, 2228, 2732, 2229, 2756, 2253, 2756, 2289, 2756, 2331, 2748, 2335, 2716, 2346, 2722, 2370, L, 2703, 2370, 2703, 2400, Q, 2705, 2406, 2706, 2421, 2706, 2423, 2706, 2427, L, 2706, 2513, 2669, 2513, 2669, 2539, 2607, 2538, Q, 2605, 2549, 2607, 2560, 2605, 2565, 2592, 2566, 2584, 2565, 2574, 2548, 2567, 2533, 2544, 2542, L, 2544, 2515, 2497, 2515, Q, 2493, 2494, 2493, 2487, 2466, 2487, 2449, 2476, 2431, 2464, 2409, 2464, L, 2406, 2433, 2378, 2433, Q, 2373, 2465, 2362, 2467, 2357, 2467, 2335, 2499, 2331, 2502, 2289, 2539, 2276, 2550, 2276, 2581, 2276, 2582, 2276, 2584, 2276, 2607, 2279, 2612, L, 2297, 2629, Q, 2301, 2642, 2306, 2658, 2319, 2666, 2319, 2675, 2319, 2704, 2346, 2721, 2341, 2765, 2374, 2757, L, 2374, 2776, Q, 2384, 2780, 2428, 2775, 2467, 2774, 2462, 2796, L, 2540, 2796, Q, 2540, 2839, 2553, 2843, 2560, 2846, 2560, 2896, 2601, 2890, 2583, 2951, L, 2610, 2951, 2612, 3035, 2638, 3035, Q, 2640, 3041, 2640, 3058, 2664, 3061, 2715, 3057, 2754, 3058, 2756, 3088, L, 2820, 3088, 2821, 3064, Q, 2888, 3082, 2880, 3041, L, 2919, 3041, 2919, 3017, Q, 2928, 3016, 2950, 3016, 2969, 3012, 2966, 2991, L, 3088, 2991, 3088, 2968, 3132, 2968, 3131, 2799, Q, 3141, 2783, 3177, 2770, 3211, 2744, 3251, 2696, L, 3251, 2663, Q, 3232, 2658, 3232, 2637, 3235, 2616, 3233, 2611, L, 3208, 2611, Q, 3208, 2582, 3208, 2569, 3208, 2546, 3187, 2549, L, 3187, 2465, 3398, 2465, 3398, 2441, 3452, 2441, 3452, 2415, 3505, 2415, 3505, 2366, Q, 3514, 2364, 3520, 2361, L, 3520, 2271, Q, 3519, 2257, 3534, 2234, 3547, 2213, 3540, 2193, L, 3653, 2193, Q, 3653, 2179, 3669, 2160, 3687, 2137, 3708, 2137, L, 3708, 2106, 3854, 2106, Q, 3875, 2070, 3877, 2058, 3881, 2031, 3881, 2000, 3881, 1981, 3894, 1968, 3900, 1961, 3908, 1954, 3911, 1914, 3912, 1895, L, 3944, 1894, Q, 3935, 1873, 3962, 1874, 3994, 1873, 3995, 1846, 4006, 1846, 4036, 1848, L, 4036, 1816, Q, 4073, 1818, 4165, 1818, 4173, 1816, 4187, 1798, 4222, 1800, 4210, 1775, L, 4244, 1775, 4244, 1744, 4270, 1744, 4270, 1723, 4337, 1723, 4337, 1696, 4420, 1696, 4420, 1678, 4445, 1678, 4445, 1663, 4458, 1662, 4459, 1657, 4459, 1627, Q, 4413, 1627, 4429, 1605, L, 4429, 1577, Q, 4428, 1576, 4410, 1573, L, 4410, 1539, 4254, 1539, Q, 4241, 1539, 4211, 1513, L, 4172, 1487, Q, 4143, 1471, 4125, 1460, 4084, 1441, 4078, 1432, 4045, 1423, 4048, 1392, 4051, 1361, 4021, 1357, L, 4021, 1319, 3998, 1301, 3998, 1266, Q, 3964, 1248, 3969, 1222, Z]],
      "label": "Harmanli",
      "shortLabel": "HM",
      "labelPosition": [336.8, 187.1],
      "labelAlignment": [CEN, MID]
    },
    "05": {
      "outlines": [[M, 4036, 1816, L, 4036, 1848, Q, 4006, 1846, 3995, 1846, 3994, 1873, 3962, 1874, 3935, 1873, 3944, 1894, L, 3912, 1895, Q, 3911, 1914, 3908, 1954, 3900, 1961, 3894, 1968, 3881, 1981, 3881, 2000, 3881, 2031, 3877, 2058, 3875, 2070, 3854, 2106, L, 3708, 2106, 3708, 2137, Q, 3687, 2137, 3669, 2160, 3653, 2179, 3653, 2193, L, 3540, 2193, Q, 3547, 2213, 3534, 2234, 3519, 2257, 3520, 2271, L, 3520, 2361, Q, 3514, 2364, 3505, 2366, L, 3505, 2415, 3452, 2415, 3452, 2441, 3398, 2441, 3398, 2465, 3187, 2465, 3187, 2549, Q, 3208, 2546, 3208, 2569, 3208, 2582, 3208, 2611, L, 3233, 2611, Q, 3235, 2616, 3232, 2637, 3232, 2658, 3251, 2663, L, 3251, 2696, Q, 3211, 2744, 3177, 2770, 3141, 2783, 3131, 2799, L, 3132, 3073, Q, 3144, 3091, 3171, 3088, L, 3172, 3113, 3231, 3113, 3231, 3097, Q, 3228, 3091, 3228, 3083, L, 3326, 3083, 3328, 3084, 3328, 3113, 3350, 3113, 3350, 3217, Q, 3332, 3218, 3331, 3233, 3330, 3241, 3331, 3263, 3313, 3258, 3312, 3273, 3312, 3282, 3313, 3303, 3312, 3318, 3312, 3337, 3283, 3338, 3282, 3357, 3282, 3369, 3282, 3397, L, 3261, 3397, Q, 3261, 3413, 3267, 3485, 3264, 3547, 3229, 3549, L, 3229, 3738, Q, 3256, 3732, 3257, 3757, L, 3257, 3807, 3258, 3809, 3288, 3809, 3288, 3853, 3404, 3853, Q, 3405, 3816, 3472, 3805, 3465, 3792, 3478, 3781, 3486, 3775, 3499, 3767, L, 3499, 3702, 3520, 3702, Q, 3519, 3683, 3519, 3673, 3518, 3657, 3536, 3652, 3543, 3649, 3543, 3592, L, 3622, 3592, Q, 3624, 3599, 3626, 3618, 3665, 3636, 3754, 3734, L, 3775, 3734, Q, 3765, 3700, 3811, 3706, 3811, 3690, 3829, 3688, 3824, 3682, 3822, 3674, 3817, 3661, 3799, 3635, L, 3785, 3621, Q, 3782, 3599, 3783, 3598, 3766, 3576, 3762, 3570, 3746, 3555, 3741, 3544, 3730, 3527, 3734, 3498, 3739, 3441, 3734, 3399, 3712, 3383, 3713, 3362, 3714, 3337, 3708, 3309, L, 3708, 3301, 3729, 3301, Q, 3724, 3285, 3725, 3277, 3725, 3260, 3749, 3255, 3755, 3254, 3759, 3236, L, 3755, 3169, Q, 3754, 3150, 3754, 3142, 3755, 3140, 3755, 3139, 3765, 3091, 3700, 3091, L, 3701, 3059, 3723, 3059, Q, 3721, 3053, 3744, 3035, 3745, 3034, 3751, 3017, 3755, 3009, 3767, 3010, 3762, 2989, 3771, 2982, 3781, 2973, 3783, 2967, L, 3783, 2843, Q, 3808, 2818, 3807, 2804, 3833, 2811, 3829, 2774, L, 3848, 2772, 3850, 2749, Q, 3909, 2749, 3944, 2740, 3978, 2732, 4021, 2732, 4016, 2707, 4044, 2705, 4059, 2704, 4092, 2706, 4094, 2680, 4119, 2679, 4133, 2678, 4156, 2678, 4167, 2652, 4179, 2649, 4187, 2648, 4187, 2626, 4187, 2598, 4148, 2556, 4109, 2516, 4096, 2520, 4096, 2514, 4094, 2514, L, 4094, 2485, Q, 4115, 2492, 4113, 2453, 4111, 2416, 4147, 2433, L, 4148, 2411, 4177, 2410, 4177, 2393, 4210, 2393, Q, 4200, 2364, 4247, 2364, 4252, 2344, 4260, 2347, L, 4260, 2295, Q, 4244, 2291, 4234, 2290, L, 4233, 2288, 4233, 2224, 4269, 2224, Q, 4269, 2223, 4274, 2199, L, 4312, 2199, 4313, 2176, 4339, 2176, Q, 4340, 2176, 4351, 2160, 4354, 2156, 4372, 2153, L, 4374, 2130, Q, 4384, 2130, 4415, 2133, 4439, 2132, 4430, 2103, L, 4468, 2103, 4469, 2087, 4513, 2087, 4513, 1978, Q, 4501, 1982, 4493, 1973, 4483, 1961, 4469, 1965, 4451, 1968, 4447, 1961, 4443, 1948, 4439, 1938, L, 4403, 1938, 4394, 1935, 4393, 1912, Q, 4350, 1901, 4307, 1853, 4264, 1799, 4244, 1775, L, 4244, 1775, 4210, 1775, Q, 4222, 1800, 4187, 1798, 4173, 1816, 4165, 1818, Q, 4073, 1818, 4036, 1816, Z]],
      "label": "Lyubimets",
      "shortLabel": "LU",
      "labelPosition": [348.2, 281.4],
      "labelAlignment": [CEN, MID]
    },
    "06": {
      "outlines": [[M, 3231, 3097, L, 3231, 3113, 3172, 3113, 3171, 3088, Q, 3144, 3091, 3132, 3073, L, 3132, 2968, 3088, 2968, 3088, 2991, 2966, 2991, Q, 2969, 3012, 2950, 3016, 2928, 3016, 2919, 3017, L, 2919, 3041, 2880, 3041, Q, 2888, 3082, 2821, 3064, L, 2820, 3088, 2756, 3088, Q, 2754, 3058, 2715, 3057, 2664, 3061, 2640, 3058, 2640, 3041, 2638, 3035, L, 2612, 3035, 2612, 3037, 2585, 3037, 2585, 3065, 2390, 3065, Q, 2383, 3038, 2383, 3030, L, 2311, 3030, 2311, 3057, 2265, 3057, 2265, 3103, Q, 2237, 3095, 2243, 3131, L, 2219, 3131, 2219, 3211, Q, 2238, 3211, 2245, 3213, L, 2245, 3260, 2270, 3260, Q, 2273, 3271, 2269, 3303, 2271, 3329, 2297, 3321, L, 2297, 3474, Q, 2324, 3474, 2334, 3477, L, 2334, 3497, Q, 2366, 3489, 2395, 3503, 2425, 3517, 2416, 3546, 2437, 3545, 2444, 3558, 2457, 3586, 2458, 3587, 2464, 3594, 2480, 3603, 2492, 3614, 2492, 3637, L, 2627, 3637, Q, 2639, 3661, 2650, 3656, 2647, 3677, 2663, 3677, 2663, 3726, 2680, 3777, 2680, 3837, 2686, 3841, 2700, 3850, 2704, 3883, 2703, 3902, 2704, 3918, L, 2820, 3918, Q, 2815, 3967, 2846, 3956, 2860, 4018, 2887, 4026, 2880, 4060, 2917, 4070, 2920, 4075, 2917, 4091, 2917, 4105, 2936, 4116, 2940, 4119, 2947, 4139, 2952, 4157, 2968, 4158, L, 2968, 4199, 3056, 4199, Q, 3066, 4192, 3063, 4156, L, 3152, 4156, 3152, 4137, 3232, 4137, 3232, 4000, Q, 3232, 3963, 3245, 3945, 3258, 3927, 3258, 3894, L, 3288, 3888, 3288, 3809, 3258, 3809, 3257, 3807, 3257, 3757, Q, 3256, 3732, 3229, 3738, L, 3229, 3549, Q, 3264, 3547, 3267, 3485, 3261, 3413, 3261, 3397, L, 3282, 3397, Q, 3282, 3369, 3282, 3357, 3283, 3338, 3312, 3337, 3312, 3318, 3313, 3303, 3312, 3282, 3312, 3273, 3313, 3258, 3331, 3263, 3330, 3241, 3331, 3233, 3332, 3218, 3350, 3217, L, 3350, 3113, 3328, 3113, 3328, 3084, 3326, 3083, 3228, 3083, Q, 3228, 3091, 3231, 3097, Z]],
      "label": "Madzharovo",
      "shortLabel": "MA",
      "labelPosition": [290.3, 336.2],
      "labelAlignment": [CEN, MID]
    },
    "09": {
      "outlines": [[M, 1994, 2634, Q, 1998, 2617, 1967, 2614, 1965, 2577, 1965, 2495, L, 1937, 2495, 1937, 2439, 1866, 2439, Q, 1866, 2440, 1866, 2459, 1866, 2470, 1849, 2478, L, 1845, 2531, Q, 1826, 2531, 1820, 2532, L, 1819, 2548, 1807, 2548, 1806, 2584, 1779, 2584, Q, 1780, 2556, 1751, 2557, L, 1697, 2558, Q, 1696, 2551, 1691, 2527, L, 1650, 2527, 1650, 2604, 1625, 2604, 1624, 2679, Q, 1610, 2679, 1602, 2681, L, 1602, 2730, Q, 1558, 2746, 1464, 2843, 1477, 2857, 1496, 2876, 1549, 2931, 1591, 2968, 1634, 3005, 1660, 3027, 1686, 3048, 1719, 3070, 1752, 3091, 1769, 3121, L, 1769, 3269, Q, 1768, 3271, 1802, 3308, 1821, 3328, 1830, 3364, 1845, 3395, 1895, 3448, L, 1895, 3473, Q, 1863, 3483, 1842, 3485, 1839, 3504, 1782, 3571, 1753, 3586, 1742, 3607, 1723, 3643, 1699, 3635, L, 1698, 3656, 1675, 3656, 1675, 3673, 1698, 3673, Q, 1692, 3727, 1746, 3815, 1749, 3830, 1836, 3828, 1852, 3826, 1875, 3843, 1895, 3858, 1925, 3853, 1927, 3853, 1928, 3853, L, 1967, 3853, Q, 1982, 3852, 1984, 3827, 1992, 3823, 2014, 3819, 2019, 3812, 2021, 3791, L, 2045, 3791, Q, 2039, 3814, 2067, 3813, 2104, 3811, 2118, 3828, 2126, 3837, 2174, 3836, 2191, 3847, 2225, 3847, 2263, 3847, 2289, 3813, 2320, 3776, 2350, 3770, 2345, 3741, 2358, 3727, 2381, 3698, 2382, 3697, 2395, 3667, 2451, 3647, L, 2451, 3637, 2492, 3637, Q, 2492, 3614, 2480, 3603, 2464, 3594, 2458, 3587, 2457, 3586, 2444, 3558, 2437, 3545, 2416, 3546, 2425, 3517, 2395, 3503, 2366, 3489, 2334, 3497, L, 2334, 3477, Q, 2324, 3474, 2297, 3474, L, 2297, 3321, Q, 2271, 3329, 2269, 3303, 2273, 3271, 2270, 3260, L, 2245, 3260, 2245, 3213, Q, 2238, 3211, 2219, 3211, L, 2219, 3131, 2243, 3131, Q, 2237, 3095, 2265, 3103, L, 2265, 3057, 2311, 3057, 2311, 3030, 2383, 3030, Q, 2383, 3038, 2390, 3065, L, 2585, 3065, 2585, 3037, 2612, 3037, 2610, 2951, 2583, 2951, Q, 2601, 2890, 2560, 2896, 2560, 2846, 2553, 2843, 2540, 2839, 2540, 2796, L, 2462, 2796, Q, 2467, 2774, 2428, 2775, 2384, 2780, 2374, 2776, L, 2374, 2757, Q, 2341, 2765, 2346, 2721, 2319, 2704, 2319, 2675, 2319, 2666, 2306, 2658, 2301, 2642, 2297, 2629, L, 2279, 2612, Q, 2276, 2607, 2276, 2584, 2244, 2584, 2234, 2596, 2223, 2606, 2188, 2606, 2144, 2600, 2122, 2600, 2082, 2601, 2083, 2634, Z]],
      "label": "Stambolovo",
      "shortLabel": "ST",
      "labelPosition": [198.7, 314.6],
      "labelAlignment": [CEN, MID]
    },
    "04": {
      "outlines": [[M, 3947, 3732, Q, 3948, 3755, 3929, 3755, 3925, 3755, 3908, 3738, 3895, 3733, 3892, 3727, 3866, 3716, 3856, 3704, 3838, 3701, 3829, 3688, 3811, 3690, 3811, 3706, 3765, 3700, 3775, 3734, L, 3754, 3734, Q, 3665, 3636, 3626, 3618, 3624, 3599, 3622, 3592, L, 3543, 3592, Q, 3543, 3649, 3536, 3652, 3518, 3657, 3519, 3673, 3519, 3683, 3520, 3702, L, 3499, 3702, 3499, 3767, Q, 3486, 3775, 3478, 3781, 3465, 3792, 3472, 3805, 3405, 3816, 3404, 3853, L, 3288, 3853, 3288, 3888, 3258, 3894, Q, 3258, 3927, 3245, 3945, 3232, 3963, 3232, 4000, L, 3232, 4137, 3152, 4137, 3152, 4156, 3063, 4156, Q, 3066, 4192, 3056, 4199, L, 2968, 4199, 2968, 4158, Q, 2952, 4157, 2947, 4139, 2940, 4119, 2936, 4116, 2917, 4105, 2917, 4091, 2920, 4075, 2917, 4070, 2880, 4060, 2887, 4026, 2860, 4018, 2846, 3956, 2815, 3967, 2820, 3918, L, 2704, 3918, Q, 2703, 3962, 2701, 3968, 2699, 3974, 2683, 3975, 2669, 3976, 2668, 3988, 2665, 4028, 2662, 4030, 2634, 4040, 2619, 4052, 2596, 4067, 2584, 4067, 2561, 4067, 2548, 4094, 2517, 4090, 2509, 4098, 2361, 4271, 2295, 4334, L, 2295, 4387, 2322, 4387, 2322, 4431, 2366, 4431, 2366, 4423, 2426, 4423, 2426, 4447, 2445, 4447, 2446, 4484, 2462, 4497, 2511, 4497, Q, 2511, 4484, 2513, 4481, L, 2536, 4481, 2536, 4616, Q, 2499, 4654, 2462, 4652, L, 2462, 4674, Q, 2490, 4691, 2544, 4755, 2559, 4768, 2584, 4796, 2609, 4818, 2650, 4818, L, 2874, 4818, Q, 2917, 4821, 2984, 4812, 3028, 4812, 3017, 4865, L, 3035, 4867, Q, 3027, 4881, 3041, 4893, 3060, 4906, 3061, 4919, 3060, 4953, 3081, 4978, 3094, 4983, 3112, 4993, L, 3112, 5068, Q, 3090, 5064, 3085, 5075, L, 3085, 5248, Q, 3094, 5248, 3134, 5245, 3171, 5247, 3179, 5266, L, 3231, 5266, 3231, 5248, 3263, 5248, Q, 3272, 5244, 3310, 5201, 3321, 5190, 3379, 5151, 3391, 5140, 3428, 5103, 3452, 5088, 3507, 5097, 3511, 5097, 3514, 5098, 3570, 5099, 3651, 5117, 3690, 5126, 3704, 5125, 3712, 5124, 3712, 5121, L, 3760, 5121, Q, 3768, 5121, 3787, 5098, 3806, 5098, 3887, 5073, 3931, 5059, 3947, 5035, 3966, 5001, 3996, 4974, 4010, 4959, 4036, 4907, 4072, 4853, 4086, 4841, 4087, 4839, 4125, 4774, 4146, 4727, 4146, 4701, L, 4141, 4666, Q, 4141, 4635, 4169, 4636, 4251, 4638, 4252, 4638, 4247, 4615, 4286, 4616, L, 4286, 4575, Q, 4265, 4575, 4257, 4572, L, 4259, 4553, Q, 4259, 4546, 4238, 4523, 4216, 4499, 4216, 4483, 4216, 4453, 4242, 4459, 4234, 4439, 4250, 4422, 4266, 4401, 4266, 4396, 4290, 4375, 4282, 4340, 4309, 4339, 4309, 4299, 4309, 4278, 4288, 4262, 4272, 4252, 4286, 4224, L, 4286, 4189, 4169, 4189, Q, 4169, 4183, 4167, 4183, L, 4167, 4159, Q, 4139, 4110, 4139, 4086, L, 4143, 3975, Q, 4143, 3908, 4141, 3901, 4136, 3889, 4098, 3858, 4061, 3828, 4064, 3732, Z]],
      "label": "Ivaylovgrad",
      "shortLabel": "IV",
      "labelPosition": [352.3, 442.9],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'haskovo',
  type: 'maps'
};

/***/ })

/******/ });
}));
