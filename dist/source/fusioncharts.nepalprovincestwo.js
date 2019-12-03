
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
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
/******/ })
/************************************************************************/
/******/ ({

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(93);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 93:
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
 * @id fusionmaps.NepalProvincesTwo.1.01-17-2017 01:55:18
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
  "name": "NepalProvincesTwo",
  "revision": 1,
  "standaloneInit": true,
  "baseWidth": 600,
  "baseHeight": 288,
  "baseScaleFactor": 10,
  "entities": {
    "NP.TW.ST": {
      "outlines": [[M, 5539, 2060, Q, 5523, 2060, 5469, 2087, 5414, 2114, 5376, 2114, 5357, 2114, 5335, 2086, 5312, 2058, 5299, 2058, 5295, 2058, 5253, 2090, 5210, 2122, 5182, 2122, 5169, 2122, 5166, 2120, 5163, 2117, 5163, 2106, 5163, 2098, 5169, 2073, 5174, 2047, 5174, 2040, 5174, 1992, 5138, 1968, 5088, 1943, 5059, 1924, 5035, 1909, 5030, 1860, 5027, 1833, 5009, 1808, 4996, 1790, 4993, 1776, 4993, 1774, 4993, 1773, 4993, 1769, 4992, 1766, 4987, 1739, 4971, 1711, 4940, 1655, 4934, 1642, 4916, 1601, 4867, 1600, L, 4849, 1600, Q, 4846, 1615, 4847, 1618, 4847, 1620, 4848, 1633, 4849, 1645, 4850, 1683, 4851, 1720, 4851, 1738, 4851, 1756, 4847, 1782, 4842, 1808, 4835, 1829, 4828, 1851, 4828, 1898, 4828, 1943, 4822, 1960, 4819, 1971, 4783, 2076, 4772, 2111, 4772, 2176, 4772, 2179, 4771, 2214, 4771, 2251, 4774, 2268, 4776, 2281, 4786, 2315, 4794, 2341, 4794, 2360, 4794, 2381, 4766, 2427, 4761, 2436, 4728, 2485, 4742, 2492, 4758, 2501, 4802, 2523, 4823, 2521, 4842, 2520, 4886, 2572, 4909, 2598, 4937, 2634, 4954, 2648, 4998, 2668, 5043, 2691, 5061, 2703, 5067, 2708, 5088, 2726, 5101, 2738, 5116, 2744, 5128, 2750, 5148, 2751, 5167, 2753, 5186, 2762, 5303, 2844, 5312, 2844, 5331, 2844, 5366, 2793, 5402, 2742, 5418, 2742, 5440, 2742, 5494, 2766, 5550, 2789, 5557, 2789, L, 5572, 2789, Q, 5631, 2754, 5670, 2725, 5681, 2717, 5745, 2677, 5802, 2634, 5802, 2599, 5802, 2590, 5790, 2550, 5777, 2509, 5777, 2501, 5777, 2376, 5855, 2246, 5862, 2235, 5876, 2209, 5885, 2194, 5900, 2174, 5911, 2158, 5938, 2131, 5950, 2120, 5950, 2103, 5950, 2069, 5757, 1958, 5756, 1958, 5726, 2004, 5693, 2054, 5680, 2068, 5659, 2091, 5637, 2106, 5619, 2117, 5586, 2132, L, 5574, 2132, Q, 5574, 2114, 5564, 2089, Q, 5552, 2060, 5539, 2060, Z]],
      "label": "Saptari",
      "shortLabel": "ST",
      "labelPosition": [533.9, 244.7],
      "labelAlignment": [CEN, MID]
    },
    "NP.TW.SR": {
      "outlines": [[M, 4598, 1587, Q, 4535, 1562, 4531, 1560, 4498, 1549, 4466, 1549, 4441, 1549, 4320, 1560, 4198, 1571, 4164, 1591, L, 4147, 1591, 4147, 1586, Q, 4124, 1602, 4119, 1602, 4100, 1602, 4043, 1551, 3985, 1500, 3956, 1500, 3935, 1500, 3924, 1527, 3917, 1546, 3917, 1570, 3917, 1607, 3944, 1672, 3971, 1738, 3971, 1750, 3971, 1783, 3951, 1831, 3929, 1881, 3929, 1907, 3929, 1939, 3945, 1955, 3982, 1990, 4011, 2033, 4038, 2073, 4038, 2074, 4045, 2089, 4045, 2125, 4045, 2174, 3985, 2243, 3924, 2307, 3917, 2320, 3954, 2335, 3987, 2327, 4043, 2330, 4056, 2359, 4066, 2381, 4066, 2383, 4075, 2393, 4098, 2393, 4106, 2393, 4164, 2353, 4232, 2313, 4287, 2313, 4357, 2313, 4432, 2353, 4475, 2376, 4553, 2426, 4576, 2439, 4621, 2446, 4668, 2453, 4685, 2461, 4701, 2470, 4728, 2485, 4761, 2436, 4766, 2427, 4794, 2381, 4794, 2360, 4794, 2341, 4786, 2315, 4776, 2281, 4774, 2268, 4771, 2251, 4771, 2214, 4772, 2179, 4772, 2176, 4772, 2111, 4783, 2076, 4819, 1971, 4822, 1960, 4828, 1943, 4828, 1898, 4828, 1851, 4835, 1829, 4842, 1808, 4847, 1782, 4851, 1756, 4851, 1738, 4851, 1720, 4850, 1683, 4849, 1645, 4848, 1633, 4847, 1620, 4847, 1618, 4846, 1615, 4849, 1600, L, 4792, 1599, Q, 4739, 1593, 4699, 1603, Q, 4660, 1612, 4598, 1587, Z]],
      "label": "Siraha",
      "shortLabel": "SR",
      "labelPosition": [438.4, 199.2],
      "labelAlignment": [CEN, MID]
    },
    "NP.TW.DN": {
      "outlines": [[M, 3700, 1247, Q, 3660, 1244, 3611, 1232, 3555, 1218, 3541, 1186, 3525, 1144, 3521, 1131, 3517, 1118, 3505, 1074, 3495, 1040, 3474, 1003, 3472, 1045, 3472, 1142, 3466, 1153, 3450, 1165, 3423, 1185, 3420, 1188, 3414, 1193, 3414, 1222, 3413, 1263, 3413, 1264, 3392, 1412, 3380, 1459, 3377, 1467, 3350, 1536, 3326, 1599, 3326, 1604, 3326, 1628, 3361, 1649, 3379, 1660, 3402, 1669, 3406, 1672, 3425, 1683, 3445, 1695, 3445, 1706, 3445, 1722, 3406, 1763, 3380, 1803, 3366, 1828, 3353, 1849, 3350, 1889, 3350, 1901, 3350, 1966, L, 3354, 2167, Q, 3354, 2228, 3322, 2259, 3267, 2298, 3221, 2336, 3224, 2339, 3224, 2344, 3224, 2353, 3223, 2391, 3222, 2430, 3275, 2391, 3320, 2385, 3373, 2344, 3403, 2322, 3456, 2278, 3487, 2257, 3562, 2218, 3640, 2178, 3652, 2178, 3680, 2178, 3747, 2215, 3795, 2241, 3821, 2260, 3873, 2299, 3899, 2312, 3908, 2316, 3917, 2320, 3924, 2307, 3985, 2243, 4045, 2174, 4045, 2125, 4045, 2089, 4038, 2074, 4038, 2073, 4011, 2033, 3982, 1990, 3945, 1955, 3929, 1939, 3929, 1907, 3929, 1881, 3951, 1831, 3971, 1783, 3971, 1750, 3971, 1738, 3944, 1672, 3917, 1607, 3917, 1570, 3917, 1546, 3924, 1527, 3935, 1500, 3956, 1500, 3985, 1500, 4043, 1551, 4100, 1602, 4119, 1602, 4124, 1602, 4147, 1586, L, 4147, 1582, Q, 4150, 1571, 4179, 1538, 4208, 1504, 4209, 1498, 4209, 1491, 4110, 1422, 4009, 1354, 3987, 1339, 3860, 1253, 3764, 1250, Q, 3723, 1249, 3700, 1247, Z]],
      "label": "Dhanusha",
      "shortLabel": "DN",
      "labelPosition": [366.5, 170.6],
      "labelAlignment": [CEN, MID]
    },
    "NP.TW.MH": {
      "outlines": [[M, 3272, 947, Q, 3250, 947, 3232, 909, 3230, 906, 3229, 904, 3221, 889, 3218, 882, 3215, 874, 3207, 871, 3205, 871, 3204, 871, 3177, 883, 3164, 889, 3140, 902, 3126, 926, 3115, 944, 3109, 979, 3101, 1017, 3106, 1047, 3103, 1073, 3068, 1119, 3025, 1177, 3014, 1202, 3005, 1222, 3003, 1247, 2997, 1289, 2997, 1292, 2991, 1320, 2983, 1342, 2978, 1356, 2966, 1380, 2950, 1416, 2924, 1465, 2905, 1506, 2899, 1560, 2889, 1598, 2860, 1643, L, 2818, 1710, Q, 2847, 1718, 2867, 1736, 2925, 1790, 2934, 1819, 2935, 1823, 2935, 1901, 2935, 1941, 2929, 2011, 2922, 2083, 2922, 2109, 2922, 2153, 2936, 2181, 2952, 2214, 2994, 2240, 3011, 2251, 3078, 2295, 3140, 2333, 3159, 2333, L, 3200, 2329, Q, 3216, 2329, 3221, 2336, 3267, 2298, 3322, 2259, 3354, 2228, 3354, 2167, L, 3350, 1966, Q, 3350, 1901, 3350, 1889, 3353, 1849, 3366, 1828, 3380, 1803, 3406, 1763, 3445, 1722, 3445, 1706, 3445, 1695, 3425, 1683, 3406, 1672, 3402, 1669, 3379, 1660, 3361, 1649, 3326, 1628, 3326, 1604, 3326, 1599, 3350, 1536, 3377, 1467, 3380, 1459, 3392, 1412, 3413, 1264, 3413, 1263, 3414, 1222, 3414, 1193, 3420, 1188, 3423, 1185, 3450, 1165, 3466, 1153, 3472, 1142, 3472, 1045, 3474, 1003, 3467, 990, 3459, 978, 3426, 925, 3342, 925, 3326, 925, 3307, 936, Q, 3288, 947, 3272, 947, Z]],
      "label": "Mahottari",
      "shortLabel": "MH",
      "labelPosition": [310.8, 160.3],
      "labelAlignment": [CEN, MID]
    },
    "NP.TW.SA": {
      "outlines": [[M, 2569, 910, Q, 2531, 913, 2507, 913, 2464, 915, 2448, 908, 2429, 898, 2410, 888, 2396, 931, 2350, 978, 2281, 1047, 2271, 1061, 2227, 1111, 2203, 1145, 2163, 1202, 2168, 1238, 2168, 1243, 2169, 1246, 2170, 1269, 2175, 1301, 2180, 1339, 2180, 1361, 2180, 1445, 2170, 1472, 2160, 1495, 2104, 1593, 2088, 1624, 2037, 1700, 2011, 1734, 2004, 1765, 2001, 1780, 2001, 1820, 2001, 1845, 2005, 1882, 2008, 1920, 2008, 1935, 2037, 1935, 2048, 1928, 2070, 1910, 2096, 1889, 2168, 1832, 2202, 1832, 2204, 1832, 2240, 1837, 2276, 1840, 2289, 1840, 2333, 1840, 2407, 1792, 2446, 1767, 2488, 1734, 2519, 1717, 2599, 1679, 2680, 1641, 2689, 1641, 2694, 1641, 2723, 1666, 2756, 1693, 2765, 1697, 2781, 1703, 2815, 1709, 2816, 1709, 2818, 1710, L, 2860, 1643, Q, 2889, 1598, 2899, 1560, 2905, 1506, 2924, 1465, 2950, 1416, 2966, 1380, 2978, 1356, 2983, 1342, 2991, 1320, 2997, 1292, 2997, 1289, 3003, 1247, 3005, 1222, 3014, 1202, 3025, 1177, 3068, 1119, 3103, 1073, 3106, 1047, 3101, 1017, 3109, 979, 3115, 944, 3126, 926, 3140, 902, 3164, 889, 3177, 883, 3204, 871, 3199, 870, 3193, 870, 3178, 870, 3158, 862, 3134, 850, 3118, 843, 3065, 818, 3042, 807, 3002, 790, 2963, 790, 2933, 790, 2882, 829, 2846, 855, 2834, 870, 2810, 902, 2776, 910, 2762, 913, 2718, 925, 2710, 927, 2709, 928, 2704, 925, 2701, 925, 2685, 924, 2639, 918, Q, 2586, 910, 2569, 910, Z]],
      "label": "Sarlahi",
      "shortLabel": "SA",
      "labelPosition": [252.7, 130],
      "labelAlignment": [CEN, MID]
    },
    "NP.TW.RT": {
      "outlines": [[M, 1946, 681, Q, 1865, 692, 1835, 652, 1832, 650, 1830, 650, 1801, 635, 1784, 626, 1752, 610, 1730, 610, 1715, 610, 1702, 609, 1675, 659, 1656, 691, 1646, 711, 1646, 755, 1646, 791, 1656, 814, 1667, 836, 1678, 871, 1688, 905, 1695, 945, 1703, 985, 1706, 1005, 1708, 1024, 1701, 1100, 1695, 1176, 1670, 1224, 1646, 1273, 1641, 1284, 1628, 1313, 1628, 1361, 1628, 1385, 1635, 1476, 1642, 1579, 1648, 1608, 1649, 1608, 1650, 1609, 1662, 1616, 1662, 1632, 1662, 1642, 1648, 1669, 1633, 1697, 1633, 1722, 1633, 1746, 1645, 1770, 1659, 1799, 1665, 1823, 1672, 1857, 1709, 1876, 1723, 1882, 1774, 1898, 1791, 1903, 1835, 1906, 1883, 1910, 1892, 1912, 1911, 1916, 1959, 1930, 1978, 1935, 2007, 1935, L, 2008, 1935, Q, 2008, 1920, 2005, 1882, 2001, 1845, 2001, 1820, 2001, 1780, 2004, 1765, 2011, 1734, 2037, 1700, 2088, 1624, 2104, 1593, 2160, 1495, 2170, 1472, 2180, 1445, 2180, 1361, 2180, 1339, 2175, 1301, 2170, 1269, 2169, 1246, 2168, 1243, 2168, 1238, 2163, 1202, 2203, 1145, 2227, 1111, 2271, 1061, 2281, 1047, 2350, 978, 2396, 931, 2410, 888, 2320, 842, 2246, 790, 2154, 727, 2023, 698, Q, 1980, 689, 1946, 681, Z]],
      "label": "Rautahat",
      "shortLabel": "RT",
      "labelPosition": [193.2, 127.2],
      "labelAlignment": [CEN, MID]
    },
    "NP.TW.BA": {
      "outlines": [[M, 1487, 390, Q, 1473, 362, 1461, 345, 1441, 315, 1416, 315, L, 1297, 315, Q, 1262, 317, 1235, 317, L, 1155, 310, 1173, 424, Q, 1173, 442, 1173, 461, 1180, 480, 1201, 524, 1211, 543, 1211, 575, 1211, 617, 1188, 690, 1164, 768, 1160, 842, 1159, 864, 1156, 916, 1150, 961, 1127, 983, 1104, 1006, 1078, 1040, 1046, 1085, 1046, 1106, L, 1050, 1174, Q, 1050, 1214, 1024, 1235, 979, 1270, 957, 1303, 965, 1309, 976, 1319, 991, 1330, 1011, 1333, 1023, 1335, 1057, 1339, 1075, 1343, 1108, 1353, 1135, 1360, 1147, 1361, 1196, 1367, 1200, 1409, 1203, 1432, 1202, 1480, 1207, 1500, 1250, 1524, 1290, 1546, 1290, 1563, 1290, 1571, 1286, 1583, 1281, 1596, 1281, 1602, 1281, 1621, 1334, 1633, 1361, 1638, 1389, 1640, 1410, 1640, 1424, 1627, 1443, 1607, 1476, 1597, L, 1602, 1591, Q, 1607, 1593, 1623, 1597, 1637, 1601, 1648, 1608, 1642, 1579, 1635, 1476, 1628, 1385, 1628, 1361, 1628, 1313, 1641, 1284, 1646, 1273, 1670, 1224, 1695, 1176, 1701, 1100, 1708, 1024, 1706, 1005, 1703, 985, 1695, 945, 1688, 905, 1678, 871, 1667, 836, 1656, 814, 1646, 791, 1646, 755, 1646, 711, 1656, 691, 1675, 659, 1702, 609, 1650, 603, 1625, 578, 1583, 535, 1550, 488, Q, 1532, 463, 1487, 390, Z]],
      "label": "Bara",
      "shortLabel": "BA",
      "labelPosition": [135.7, 105],
      "labelAlignment": [CEN, MID]
    },
    "NP.TW.PR": {
      "outlines": [[M, 984, 227, Q, 922, 196, 886, 173, 850, 149, 799, 122, 746, 94, 698, 101, 649, 109, 607, 117, 564, 124, 506, 124, 447, 124, 413, 84, 379, 43, 302, 43, 238, 43, 230, 63, 223, 82, 201, 185, 192, 216, 169, 226, 161, 229, 123, 238, 85, 247, 67, 260, 49, 273, 47, 291, 44, 309, 83, 317, 103, 323, 132, 326, 181, 337, 239, 355, 283, 369, 287, 370, 322, 380, 340, 379, 409, 373, 423, 428, 432, 447, 445, 483, 459, 519, 477, 552, 489, 574, 507, 605, 520, 632, 520, 662, 520, 664, 512, 766, L, 511, 784, Q, 518, 885, 466, 993, 439, 1048, 411, 1081, 411, 1109, 484, 1148, 500, 1156, 573, 1188, 607, 1202, 693, 1230, 780, 1257, 791, 1257, 806, 1257, 838, 1227, 870, 1197, 882, 1197, 896, 1197, 906, 1216, 911, 1227, 917, 1246, 931, 1278, 943, 1291, 945, 1292, 957, 1303, 979, 1270, 1024, 1235, 1050, 1214, 1050, 1174, L, 1046, 1106, Q, 1046, 1085, 1078, 1040, 1104, 1006, 1127, 983, 1150, 961, 1156, 916, 1159, 864, 1160, 842, 1164, 768, 1188, 690, 1211, 617, 1211, 575, 1211, 543, 1201, 524, 1180, 480, 1173, 461, 1173, 442, 1173, 424, L, 1155, 310, 1118, 297, Q, 1100, 289, 1087, 277, 1085, 276, 1066, 267, Q, 1046, 258, 984, 227, Z]],
      "label": "Parsa",
      "shortLabel": "PR",
      "labelPosition": [81.6, 67.3],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'nepalprovincestwo',
  type: 'maps'
};

/***/ })

/******/ });
}));
