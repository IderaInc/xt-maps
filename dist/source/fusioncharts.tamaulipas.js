
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
/******/ 	return __webpack_require__(__webpack_require__.s = 342);
/******/ })
/************************************************************************/
/******/ ({

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(343);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Tamaulipas.20.10-30-2012 08:25:28
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
  "name": "Tamaulipas",
  "revision": 20,
  "standaloneInit": true,
  "baseWidth": 450,
  "baseHeight": 720,
  "baseScaleFactor": 10,
  "entities": {
    "MX.TM.GO": {
      "outlines": [[M, 1598, 5869, Q, 1597, 5867, 1597, 5866, 1581, 5861, 1567, 5858, 1565, 5858, 1564, 5858, 1543, 5853, 1525, 5853, 1449, 5853, 1449, 5910, 1449, 5944, 1472, 5966, 1471, 5974, 1467, 6008, 1463, 6035, 1492, 6043, 1502, 6046, 1532, 6045, 1561, 6044, 1577, 6048, 1608, 6057, 1608, 6101, 1609, 6165, 1612, 6175, L, 1613, 6176, 1617, 6192, Q, 1681, 6217, 1746, 6237, 1744, 6170, 1744, 6163, 1744, 6163, 1784, 6117, 1784, 6105, 1775, 6068, 1766, 6034, 1767, 6026, 1714, 6030, 1697, 6025, 1659, 6015, 1664, 5968, 1665, 5956, 1650, 5940, 1632, 5923, 1629, 5918, Q, 1606, 5887, 1598, 5869, Z]],
      "label": "Gonzalez",
      "shortLabel": "GO",
      "labelPosition": [345.1, 591.1],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [[M, 3451, 5911, L, 1567, 5911]]
    },
    "MX.TM.AM": {
      "outlines": [[M, 1844, 6801, L, 1660, 6374, 1660, 6375, 1527, 6375, 1527, 6513, 1644, 6697, 1644, 6775, 1782, 6790, Z]],
      "label": "Antiguo Morelos",
      "shortLabel": "AM",
      "labelPosition": [174.1, 690.2],
      "labelAlignment": [CEN, BTM],
      "labelConnectors": [[M, 1741, 6902, L, 1741, 6681]]
    },
    "MX.TM.NM": {
      "outlines": [[M, 1527, 6517, L, 1365, 6552, 1527, 6800, Q, 1583, 6787, 1638, 6774, 1639, 6774, 1640, 6774, 1646, 6777, 1644, 6771, L, 1644, 6697, 1529, 6516, Z]],
      "label": "Nuevo Morelos",
      "shortLabel": "NM",
      "labelPosition": [122, 696.2],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [[M, 1220, 6962, L, 1504, 6962, 1504, 6658, 1504, 6962]]
    },
    "MX.TM.MR": {
      "outlines": [[M, 999, 3939, L, 869, 4094, 872, 4144, Q, 928, 4191, 984, 4204, L, 985, 4204, 1072, 4087, 1174, 4089, 1197, 4109, 1229, 4099, 1199, 4032, 1272, 3984, 1255, 3837, 1164, 3889, 1087, 3962, 1054, 3962, Z]],
      "label": "Villa Mainero",
      "shortLabel": "MR",
      "labelPosition": [62, 401.4],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [[M, 620, 4014, L, 984, 4014]]
    },
    "MX.TM.CR": {
      "outlines": [[M, 3262, 6848, L, 3262, 6825, Q, 3227, 6863, 3200, 6869, 3210, 6884, 3242, 6926, 3260, 6952, 3271, 6998, 3310, 6998, 3361, 6996, L, 3362, 6996, Q, 3360, 6957, 3323, 6918, Q, 3265, 6854, 3262, 6848, Z]],
      "label": "Cruillas",
      "shortLabel": "CR",
      "labelPosition": [352.1, 694.6],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [[M, 3521, 6946, L, 3306, 6946]]
    },
    "MX.TM.TA": {
      "outlines": [[M, 3200, 6870, Q, 3194, 6871, 3189, 6871, 3147, 6868, 3104, 6868, L, 3102, 6869, Q, 3105, 6876, 3133, 6934, 3155, 6979, 3157, 7003, L, 3174, 7003, Q, 3204, 7001, 3267, 7001, 3269, 6998, 3271, 6998, 3260, 6952, 3242, 6926, Q, 3210, 6884, 3200, 6870, Z]],
      "label": "Tampico",
      "shortLabel": "TA",
      "labelPosition": [298.1, 696.6],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [[M, 2981, 6966, L, 3191, 6966]]
    },
    "MX.TM.HI": {
      "outlines": [[M, 2390, 1979, Q, 2389, 1978, 2387, 1978, 2367, 1967, 2333, 1941, 2292, 1915, 2247, 1916, 2240, 1925, 2218, 1932, 2198, 1939, 2190, 1944, L, 2190, 1945, Q, 2189, 1946, 2188, 1947, 2158, 1977, 2142, 1998, 2138, 2003, 2128, 2005, 2117, 2006, 2109, 2013, 2104, 2017, 2104, 2057, 2107, 2091, 2107, 2131, 2107, 2144, 2118, 2164, 2129, 2184, 2129, 2189, 2127, 2206, 2126, 2218, L, 2299, 2248, Q, 2299, 2211, 2297, 2143, 2297, 2128, 2304, 2128, 2327, 2126, 2339, 2121, 2359, 2113, 2369, 2086, Q, 2368, 2033, 2390, 1979, Z]],
      "label": "Hidalgo",
      "shortLabel": "HI",
      "labelPosition": [224.7, 164],
      "labelAlignment": [CEN, TOP],
      "labelConnectors": [[M, 2247, 1640, L, 2247, 2082]]
    },
    "MX.TM.NL": {
      "outlines": [[M, 1004, 209, Q, 999, 207, 994, 205, 986, 203, 982, 200, L, 951, 202, Q, 871, 165, 840, 165, 803, 165, 787, 187, 759, 224, 739, 238, 674, 277, 635, 302, 627, 304, 609, 321, 592, 336, 584, 338, 613, 371, 635, 390, 675, 427, 697, 415, 699, 433, 721, 446, 744, 460, 772, 458, 810, 454, 822, 476, 829, 487, 829, 518, 829, 536, 818, 543, 815, 545, 789, 555, 816, 582, 822, 585, 798, 606, 790, 614, 777, 626, 777, 641, 777, 650, 814, 688, 820, 693, 842, 699, 852, 702, 860, 703, 870, 705, 878, 705, 917, 705, 987, 700, 987, 698, 989, 698, 974, 682, 974, 658, 1041, 684, 1060, 692, 1090, 703, 1138, 703, 1139, 703, 1192, 698, L, 1192, 694, 1153, 666, Q, 1109, 631, 1109, 609, 1109, 587, 1117, 574, 1120, 571, 1136, 556, 1162, 530, 1162, 469, 1162, 459, 1161, 450, 1160, 450, 1160, 448, 1160, 446, 1161, 438, 1162, 430, 1169, 368, 1169, 343, 1141, 320, 1103, 289, 1099, 283, Q, 1068, 235, 1004, 209, Z]],
      "label": "Nuevo Laredo",
      "shortLabel": "NL",
      "labelPosition": [94.8, 43.5],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.GD": {
      "outlines": [[M, 1196, 698, L, 1196, 698, Q, 1194, 698, 1192, 698, 1139, 703, 1138, 703, 1090, 703, 1060, 692, 1041, 684, 974, 658, 974, 682, 989, 698, 987, 698, 987, 700, 917, 705, 878, 705, 870, 705, 861, 704, L, 859, 708, Q, 888, 786, 892, 831, 893, 850, 910, 888, 927, 925, 927, 933, 927, 952, 916, 966, 901, 980, 892, 989, 857, 1024, 857, 1101, 857, 1128, 883, 1133, 921, 1134, 944, 1136, 1019, 1162, 1052, 1221, L, 956, 1431, 1122, 1434, 1278, 1538, 1278, 1586, 1279, 1586, Q, 1299, 1581, 1386, 1552, 1420, 1541, 1483, 1541, 1536, 1541, 1555, 1548, L, 1557, 1547, 1432, 1223, 1222, 981, 1222, 728, Z]],
      "label": "Ciudad Gustavo Diaz Ordaz",
      "shortLabel": "GD",
      "labelPosition": [116.7, 112.2],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.MI": {
      "outlines": [[M, 1560, 1553, L, 1555, 1548, Q, 1536, 1541, 1483, 1541, 1420, 1541, 1386, 1552, 1299, 1581, 1279, 1586, L, 1278, 1588, 1277, 1663, Q, 1278, 1663, 1279, 1663, 1278, 1665, 1277, 1666, 1276, 1667, 1275, 1669, 1219, 1739, 1219, 1748, 1219, 1760, 1233, 1789, 1246, 1815, 1242, 1846, L, 1513, 1952, Q, 1516, 1950, 1522, 1946, 1537, 1936, 1537, 1929, 1537, 1923, 1532, 1923, L, 1634, 1923, Q, 1634, 1854, 1638, 1752, 1639, 1739, 1639, 1726, L, 1641, 1726, Q, 1643, 1716, 1646, 1705, 1657, 1667, 1658, 1645, Z]],
      "label": "Ciudad Mier",
      "shortLabel": "MI",
      "labelPosition": [143.9, 174.6],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.MA": {
      "outlines": [[M, 1842, 1769, L, 1638, 1752, Q, 1634, 1854, 1634, 1923, L, 1537, 1923, 1537, 1929, Q, 1537, 1936, 1522, 1946, 1516, 1950, 1513, 1952, 1507, 1955, 1507, 1956, 1535, 2000, 1537, 2014, L, 1533, 2018, Q, 1545, 2029, 1552, 2042, L, 1554, 2043, 1554, 2108, Q, 1542, 2122, 1538, 2129, 1537, 2133, 1535, 2135, 1533, 2134, 1531, 2135, 1530, 2135, 1529, 2136, L, 1529, 2143, Q, 1547, 2143, 1571, 2162, 1596, 2183, 1592, 2198, 1618, 2196, 1650, 2175, 1681, 2154, 1689, 2153, 1728, 2151, 1754, 2126, 1755, 2124, 1757, 2123, 1759, 2120, 1761, 2118, 1768, 2109, 1772, 2101, 1777, 2101, 1782, 2072, 1788, 2039, 1792, 2033, 1795, 2026, 1808, 2017, 1820, 2007, 1822, 1996, 1827, 1961, 1827, 1951, 1828, 1946, 1840, 1932, 1850, 1920, 1847, 1913, L, 1847, 1867, Q, 1847, 1861, 1852, 1822, 1852, 1794, 1842, 1783, Z]],
      "label": "Ciudad Miguel Aleman",
      "shortLabel": "MA",
      "labelPosition": [169.9, 198.5],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.CA": {
      "outlines": [[M, 2188, 1947, Q, 2188, 1945, 2190, 1944, L, 2007, 1784, 1842, 1769, 1842, 1783, Q, 1852, 1794, 1852, 1822, 1847, 1861, 1847, 1867, L, 1847, 1913, Q, 1850, 1920, 1840, 1932, 1828, 1946, 1827, 1951, 1827, 1961, 1822, 1996, 1820, 2007, 1808, 2017, 1795, 2026, 1792, 2033, 1788, 2039, 1782, 2072, 1777, 2101, 1772, 2101, 1768, 2109, 1761, 2118, L, 1757, 2124, 1900, 2311, 2002, 2196, 2126, 2218, Q, 2127, 2206, 2129, 2189, 2129, 2184, 2118, 2164, 2107, 2144, 2107, 2131, 2107, 2091, 2104, 2057, 2104, 2017, 2109, 2013, 2117, 2006, 2128, 2005, 2138, 2003, 2142, 1998, Q, 2158, 1977, 2188, 1947, Z]],
      "label": "Ciudad Camargo",
      "shortLabel": "CA",
      "labelPosition": [195.3, 204],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.RE": {
      "outlines": [[M, 2369, 2086, Q, 2359, 2113, 2339, 2121, 2327, 2126, 2304, 2128, 2297, 2128, 2297, 2143, 2299, 2211, 2299, 2248, L, 2300, 2249, 2300, 2316, 2308, 2324, 2318, 2919, 2510, 2919, 2520, 2899, 2695, 2899, Q, 2695, 2898, 2695, 2897, L, 2697, 2896, 2698, 2896, 2724, 2887, 2725, 2887, 2738, 2906, 2739, 2906, 2739, 2928, Q, 2774, 2940, 2855, 2941, L, 2856, 2195, Q, 2648, 2048, 2390, 1979, Q, 2368, 2033, 2369, 2086, Z]],
      "label": "Reynosa",
      "shortLabel": "RE",
      "labelPosition": [257.6, 246],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.RB": {
      "outlines": [[M, 3172, 2201, L, 2855, 2201, 2855, 2941, Q, 2898, 2941, 2954, 2938, 2954, 2939, 2954, 2939, 2958, 2958, 2973, 2960, 2985, 2961, 2986, 2971, L, 2987, 2971, Q, 3000, 2970, 3066, 2972, 3088, 2972, 3092, 2956, L, 3137, 2956, Q, 3137, 2958, 3137, 2961, 3160, 2952, 3178, 2934, 3189, 2923, 3203, 2905, 3205, 2903, 3207, 2901, L, 3207, 2898, Q, 3203, 2898, 3199, 2899, 3112, 2904, 3102, 2893, 3089, 2881, 3087, 2857, 3086, 2843, 3087, 2816, L, 3087, 2711, Q, 3085, 2687, 3079, 2678, 3074, 2670, 3074, 2653, 3074, 2600, 3084, 2584, 3095, 2565, 3103, 2534, 3105, 2522, 3139, 2386, 3140, 2385, 3140, 2384, 3142, 2382, 3143, 2379, 3149, 2372, 3157, 2363, 3170, 2335, 3170, 2306, 3170, 2288, 3167, 2251, 3167, 2245, 3169, 2213, L, 3169, 2212, 3167, 2206, Q, 3178, 2211, 3172, 2201, Z]],
      "label": "Rio Bravo",
      "shortLabel": "RB",
      "labelPosition": [299.1, 252.6],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.VH": {
      "outlines": [[M, 3362, 2465, Q, 3345, 2453, 3337, 2433, 3333, 2424, 3321, 2409, 3313, 2399, 3314, 2386, 3316, 2371, 3312, 2341, 3296, 2341, 3292, 2318, L, 3204, 2318, 3202, 2306, 3170, 2306, Q, 3170, 2335, 3157, 2363, 3149, 2372, 3143, 2380, L, 3140, 2387, Q, 3105, 2522, 3103, 2534, 3095, 2565, 3084, 2584, 3074, 2600, 3074, 2653, 3074, 2670, 3079, 2678, 3085, 2687, 3087, 2711, L, 3087, 2816, Q, 3086, 2843, 3087, 2857, 3089, 2881, 3102, 2893, 3112, 2904, 3199, 2899, L, 3199, 2898, Q, 3229, 2887, 3280, 2888, 3367, 2888, 3369, 2888, L, 3369, 2808, Q, 3369, 2753, 3364, 2586, 3364, 2570, 3372, 2504, Q, 3372, 2472, 3362, 2465, Z]],
      "label": "Valle Hermoso",
      "shortLabel": "VH",
      "labelPosition": [322.3, 260.3],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.MM": {
      "outlines": [[M, 3647, 2348, Q, 3594, 2351, 3562, 2351, L, 3466, 2230, 3403, 2219, Q, 3391, 2220, 3382, 2221, 3351, 2223, 3324, 2218, L, 3324, 2206, 3174, 2206, Q, 3174, 2207, 3174, 2208, 3169, 2206, 3167, 2206, L, 3169, 2213, Q, 3167, 2245, 3167, 2251, 3170, 2288, 3170, 2306, L, 3202, 2306, 3204, 2318, 3292, 2318, Q, 3296, 2341, 3312, 2341, 3316, 2371, 3314, 2386, 3313, 2399, 3321, 2409, 3333, 2424, 3337, 2433, 3345, 2453, 3362, 2465, 3372, 2472, 3372, 2504, 3364, 2570, 3364, 2586, 3369, 2753, 3369, 2808, L, 3369, 2888, Q, 3367, 2888, 3280, 2888, 3229, 2887, 3199, 2898, L, 3199, 2899, Q, 3203, 2898, 3207, 2898, L, 3207, 2901, Q, 3205, 2903, 3203, 2905, 3189, 2923, 3178, 2934, 3160, 2952, 3137, 2961, 3139, 2995, 3139, 3056, 3155, 3065, 3182, 3090, 3210, 3115, 3212, 3123, L, 3252, 3123, Q, 3252, 3109, 3287, 3083, 3311, 3083, 3359, 3113, L, 3382, 3113, 3382, 3088, Q, 3377, 3078, 3377, 3063, 3377, 3057, 3382, 3028, 3384, 3028, 3393, 3031, 3400, 3031, 3404, 3022, 3409, 3013, 3419, 3013, 3431, 3013, 3454, 3031, 3493, 3029, 3508, 3064, 3518, 3106, 3522, 3118, 3528, 3141, 3557, 3149, 3608, 3163, 3609, 3163, 3618, 3153, 3620, 3111, 3621, 3081, 3647, 3081, 3651, 3081, 3682, 3088, 3699, 3089, 3709, 3116, 3719, 3106, 3719, 3098, 3719, 3055, 3711, 3044, 3702, 3032, 3654, 3016, 3606, 2999, 3603, 2998, 3582, 2986, 3582, 2957, 3582, 2918, 3636, 2918, 3683, 2918, 3734, 2996, 3756, 3028, 3777, 3040, 3782, 3043, 3782, 3081, 3782, 3149, 3702, 3298, 3688, 3325, 3674, 3338, 3669, 3343, 3665, 3365, 3661, 3387, 3659, 3391, 3646, 3412, 3639, 3438, 3633, 3464, 3624, 3477, 3617, 3487, 3617, 3493, 3617, 3511, 3636, 3511, 3640, 3511, 3644, 3509, 3645, 3509, 3646, 3508, 3646, 3508, 3647, 3508, 3647, 3503, 3649, 3496, L, 3649, 3496, 3653, 3497, 3716, 3390, 4045, 2726, Q, 4000, 2726, 3994, 2725, 3952, 2720, 3952, 2698, 3952, 2665, 3996, 2641, 4023, 2626, 4052, 2621, L, 4052, 2588, Q, 4042, 2578, 4042, 2574, 4042, 2557, 4077, 2549, 4112, 2540, 4112, 2513, 4112, 2498, 4109, 2492, 4109, 2490, 4109, 2488, 4109, 2446, 4102, 2306, 4086, 2303, 4079, 2303, 4076, 2303, 3932, 2346, 3840, 2339, 3834, 2353, 3829, 2366, 3830, 2391, 3832, 2420, 3832, 2433, L, 3797, 2433, Q, 3794, 2441, 3794, 2443, L, 3734, 2443, Q, 3713, 2348, 3647, 2348, Z]],
      "label": "Matamoras",
      "shortLabel": "MM",
      "labelPosition": [362.4, 265.8],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.SF": {
      "outlines": [[M, 3395, 3129, Q, 3384, 3121, 3379, 3113, L, 3359, 3113, Q, 3311, 3083, 3287, 3083, 3252, 3109, 3252, 3123, L, 3212, 3123, Q, 3210, 3115, 3182, 3090, 3155, 3065, 3139, 3056, 3139, 2995, 3137, 2961, 3137, 2958, 3137, 2956, L, 3092, 2956, Q, 3088, 2972, 3066, 2972, 3000, 2970, 2987, 2971, L, 2987, 2973, Q, 2980, 2997, 2976, 3010, L, 2977, 3021, 2910, 3021, 2910, 3178, 2609, 3271, 2447, 3599, 2447, 3687, 2552, 3687, 2630, 3862, 2665, 4024, 2720, 4024, 2755, 3992, 2918, 4192, 2818, 4192, 2818, 4259, 3043, 4372, 3047, 4367, 3241, 4269, Q, 3241, 4268, 3241, 4267, 3240, 4242, 3236, 4211, 3229, 4165, 3229, 4138, 3229, 4043, 3242, 4043, 3276, 4043, 3299, 4086, 3323, 4128, 3354, 4128, 3369, 4128, 3375, 4108, 3380, 4085, 3382, 4078, 3383, 4074, 3412, 4021, 3414, 3977, 3414, 3883, L, 3409, 3883, Q, 3409, 3881, 3408, 3878, 3392, 3795, 3392, 3787, 3392, 3761, 3388, 3753, 3384, 3744, 3384, 3727, 3384, 3711, 3432, 3665, 3479, 3620, 3479, 3608, L, 3479, 3598, Q, 3454, 3598, 3435, 3585, 3416, 3571, 3399, 3571, 3377, 3571, 3356, 3578, 3335, 3586, 3299, 3586, 3257, 3582, 3242, 3581, 3238, 3581, 3236, 3581, 3202, 3568, 3191, 3564, 3172, 3557, 3157, 3531, L, 3157, 3516, 3237, 3516, Q, 3245, 3532, 3251, 3535, 3254, 3536, 3272, 3536, 3285, 3536, 3317, 3527, 3349, 3518, 3369, 3518, 3362, 3494, 3394, 3468, 3402, 3452, 3402, 3403, 3405, 3371, 3419, 3346, 3432, 3323, 3432, 3297, 3432, 3264, 3398, 3250, 3364, 3236, 3364, 3226, 3364, 3207, 3407, 3147, Q, 3407, 3138, 3395, 3129, Z]],
      "label": "San Fernando",
      "shortLabel": "SF",
      "labelPosition": [296.3, 366.4],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.MZ": {
      "outlines": [[M, 2738, 2906, L, 2725, 2886, 2724, 2887, 2698, 2896, 2697, 2896, 2695, 2899, 2520, 2899, 2510, 2919, 2513, 2922, 2512, 2923, 1975, 3331, 1975, 3331, 2069, 3412, 2305, 3463, 2305, 3612, 2447, 3626, 2447, 3599, 2609, 3271, 2910, 3178, 2910, 3021, 2977, 3021, 2976, 3010, Q, 2980, 2997, 2987, 2973, L, 2987, 2973, Q, 2987, 2972, 2986, 2971, 2985, 2961, 2973, 2960, 2958, 2958, 2954, 2939, 2954, 2939, 2954, 2938, 2898, 2941, 2855, 2941, 2774, 2940, 2739, 2928, L, 2739, 2906, Z]],
      "label": "Mendez",
      "shortLabel": "MZ",
      "labelPosition": [244.1, 325.6],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.BR": {
      "outlines": [[M, 2070, 3412, L, 1975, 3332, 1975, 3331, 1775, 3414, 1715, 3359, 1627, 3439, 1553, 3439, 1536, 3527, 1592, 3617, 1543, 3696, 1662, 3717, 1777, 3717, 1914, 3843, 2166, 3859, 2445, 3687, 2447, 3687, 2447, 3626, 2305, 3612, 2305, 3463, Z]],
      "label": "Burgos",
      "shortLabel": "BR",
      "labelPosition": [199.2, 359.5],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.SN": {
      "outlines": [[M, 2165, 3859, L, 1914, 3843, 1777, 3717, 1662, 3717, 1637, 3712, 1902, 3899, 2015, 4084, 2100, 4084, 2188, 4221, 2190, 4219, 2250, 4194, 2165, 3859, Z]],
      "label": "San Nicolas",
      "shortLabel": "SN",
      "labelPosition": [203.3, 396.6],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.GG": {
      "outlines": [[M, 2552, 3687, L, 2445, 3687, 2166, 3859, 2165, 3859, 2250, 4194, 2405, 4219, 2664, 4247, 2665, 4246, 2818, 4192, 2818, 4192, 2918, 4192, 2755, 3992, 2720, 4024, 2665, 4024, 2630, 3862, Z]],
      "label": "Gomez Farias",
      "shortLabel": "GG",
      "labelPosition": [248.1, 396.7],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.VL": {
      "outlines": [[M, 1494, 3792, L, 1394, 3757, 1255, 3837, 1272, 3984, 1199, 4032, 1229, 4099, 1197, 4109, 1174, 4089, 1072, 4087, 985, 4204, 984, 4204, 1034, 4279, 1468, 4242, 1469, 4242, 1562, 3847, 1510, 3748, 1494, 3762, Z]],
      "label": "Villagram",
      "shortLabel": "VL",
      "labelPosition": [137.3, 401.4],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.SC": {
      "outlines": [[M, 1902, 3899, L, 1637, 3712, 1543, 3696, 1512, 3747, 1510, 3748, 1562, 3847, 1469, 4242, 1469, 4242, Q, 1502, 4264, 1570, 4351, 1650, 4454, 1687, 4478, 1674, 4486, 1658, 4489, 1626, 4494, 1619, 4496, 1624, 4499, 1624, 4518, 1624, 4530, 1618, 4560, 1618, 4561, 1618, 4562, L, 1725, 4587, 1820, 4634, 1860, 4502, 2156, 4574, 2157, 4573, 2072, 4252, 2190, 4272, 2190, 4224, 2100, 4084, 2015, 4084, Z]],
      "label": "San Carlos",
      "shortLabel": "SC",
      "labelPosition": [182.9, 416.5],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.LL": {
      "outlines": [[M, 2405, 4219, L, 2250, 4194, 2190, 4219, 2190, 4272, 2072, 4252, 2157, 4574, 2156, 4575, 2290, 4824, 2364, 4826, 2504, 4614, 2595, 4614, 2665, 4404, 2665, 4247, 2664, 4247, Z]],
      "label": "Llera de Canales",
      "shortLabel": "LL",
      "labelPosition": [236.8, 451],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.AB": {
      "outlines": [[M, 2818, 4259, L, 2818, 4192, 2665, 4246, 2665, 4404, 2595, 4614, 2504, 4614, 2360, 4832, 2360, 5038, Q, 2378, 5035, 2395, 5035, 2401, 5034, 2407, 5029, L, 2407, 5022, 2705, 4867, 2790, 4905, 2802, 4913, 2803, 4804, 2955, 4562, 2955, 4454, 3034, 4454, 3034, 4454, 3047, 4372, 3043, 4372, Z]],
      "label": "Abasolo",
      "shortLabel": "AB",
      "labelPosition": [272.3, 463],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.SM": {
      "outlines": [[M, 3342, 4441, Q, 3347, 4314, 3347, 4308, 3349, 4283, 3347, 4266, 3343, 4233, 3322, 4233, 3316, 4233, 3307, 4251, 3297, 4268, 3297, 4278, 3297, 4292, 3299, 4316, 3296, 4333, 3263, 4333, 3248, 4331, 3240, 4331, 3242, 4293, 3242, 4292, 3242, 4281, 3241, 4269, L, 3047, 4367, 3034, 4454, 3034, 4454, 2955, 4454, 2955, 4562, 2803, 4804, 2802, 4913, 2790, 4905, 2705, 4867, 2407, 5022, 2400, 5200, 2512, 5352, 2512, 5530, 2795, 5656, 2798, 5650, 2893, 5560, 3058, 5607, 3105, 5667, 3225, 5667, 3245, 5597, 3285, 5597, 3285, 5700, 3338, 5700, 3348, 5495, 3396, 5137, Q, 3388, 5105, 3384, 5089, 3377, 5061, 3354, 5048, 3333, 5036, 3293, 5031, 3248, 5028, 3229, 5026, 3222, 5003, 3222, 4994, 3224, 4991, 3224, 4988, 3246, 4998, 3252, 4980, 3261, 4953, 3272, 4948, 3283, 4942, 3295, 4920, 3307, 4899, 3307, 4889, 3298, 4834, 3295, 4804, L, 3297, 4638, 3307, 4638, 3312, 4641, Q, 3324, 4638, 3324, 4618, 3324, 4608, 3334, 4593, 3344, 4578, 3344, 4572, Q, 3342, 4486, 3342, 4441, Z]],
      "label": "Soto la Marina",
      "shortLabel": "SM",
      "labelPosition": [291.8, 520.6],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.AD": {
      "outlines": [[M, 3245, 5597, L, 3225, 5667, 3105, 5667, 3058, 5607, 2893, 5560, 2798, 5650, 2785, 5697, 2625, 5790, 2611, 6075, Q, 2609, 6087, 2609, 6095, 2609, 6101, 2615, 6219, 2614, 6247, 2620, 6265, 2621, 6271, 2632, 6281, 2644, 6291, 2647, 6298, L, 2672, 6298, Q, 2704, 6297, 2709, 6333, 2719, 6406, 2727, 6426, L, 2774, 6426, Q, 2774, 6395, 2782, 6358, 2785, 6341, 2801, 6340, 2824, 6337, 2829, 6333, 2837, 6328, 2861, 6326, 2883, 6325, 2889, 6318, 2890, 6317, 2891, 6314, 2891, 6313, 2892, 6313, 2892, 6313, 2892, 6312, 2900, 6290, 2899, 6278, 2929, 6273, 2946, 6273, 2967, 6273, 2982, 6278, 2983, 6290, 3006, 6378, 3025, 6452, 3022, 6478, L, 3144, 6478, Q, 3144, 6488, 3142, 6513, 3142, 6562, 3164, 6569, 3176, 6573, 3213, 6569, 3214, 6569, 3215, 6569, 3214, 6566, 3213, 6563, 3211, 6551, 3209, 6546, L, 3210, 6526, Q, 3206, 6507, 3201, 6477, 3199, 6462, 3196, 6451, 3195, 6449, 3195, 6447, 3197, 6395, 3210, 6358, 3219, 6332, 3244, 6291, 3264, 6257, 3287, 6223, 3290, 6218, 3299, 6189, 3305, 6170, 3320, 6160, 3321, 6159, 3322, 6158, L, 3325, 5953, 3338, 5700, 3285, 5700, 3285, 5597, Z]],
      "label": "Aldama",
      "shortLabel": "AD",
      "labelPosition": [297.3, 612.5],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.AT": {
      "outlines": [[M, 3006, 6378, Q, 2983, 6290, 2982, 6278, 2967, 6273, 2946, 6273, 2929, 6273, 2899, 6278, 2900, 6290, 2892, 6312, 2892, 6313, 2892, 6313, 2891, 6313, 2891, 6314, 2890, 6317, 2889, 6318, 2883, 6325, 2861, 6326, 2837, 6328, 2829, 6333, 2824, 6337, 2801, 6340, 2785, 6341, 2782, 6358, 2774, 6395, 2774, 6426, L, 2727, 6426, Q, 2719, 6406, 2709, 6333, 2704, 6297, 2672, 6298, L, 2647, 6298, 2647, 6376, Q, 2645, 6385, 2650, 6425, 2649, 6458, 2614, 6451, L, 2614, 6526, Q, 2621, 6551, 2630, 6600, 2642, 6642, 2668, 6680, L, 2672, 6685, Q, 2674, 6686, 2677, 6688, 2707, 6688, 2742, 6686, 2755, 6686, 2777, 6698, 2800, 6711, 2814, 6728, 2837, 6756, 2867, 6792, 2888, 6816, 2904, 6821, 2922, 6826, 3027, 6838, 3035, 6839, 3066, 6852, 3083, 6859, 3095, 6862, 3096, 6864, 3100, 6867, 3102, 6867, 3104, 6868, 3147, 6868, 3189, 6871, 3194, 6871, 3200, 6870, 3227, 6863, 3262, 6825, L, 3261, 6819, Q, 3259, 6811, 3253, 6796, 3245, 6775, 3244, 6763, 3243, 6749, 3237, 6683, 3234, 6640, 3231, 6616, 3229, 6593, 3223, 6575, 3218, 6574, 3215, 6569, 3214, 6569, 3213, 6569, 3176, 6573, 3164, 6569, 3142, 6562, 3142, 6513, 3144, 6488, 3144, 6478, L, 3022, 6478, Q, 3025, 6452, 3006, 6378, Z]],
      "label": "Altamira",
      "shortLabel": "AT",
      "labelPosition": [293.8, 657.2],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.GU": {
      "outlines": [[M, 2540, 5875, L, 2540, 5813, 2512, 5795, 2492, 5822, Q, 2492, 5842, 2484, 5856, 2479, 5864, 2467, 5886, 2455, 5911, 2408, 5911, 2336, 5911, 2277, 5866, 2264, 5819, 2252, 5809, 2240, 5800, 2194, 5801, L, 2164, 5801, Q, 2162, 5837, 2130, 5863, 2097, 5890, 2054, 5891, 2054, 5920, 2052, 5971, 2052, 5995, 2044, 6010, 2039, 6019, 2029, 6036, 2020, 6063, 2022, 6091, 2013, 6103, 2004, 6115, 2004, 6129, 1991, 6137, 1983, 6141, 1962, 6152, 1920, 6170, 1903, 6183, 1874, 6206, 1874, 6240, 1874, 6261, 1876, 6273, 1877, 6273, 1878, 6273, 1928, 6285, 1979, 6294, L, 1965, 6390, 1925, 6500, 1990, 6567, 2142, 6467, 2197, 6527, 2347, 6550, 2398, 6760, 2567, 6787, 2668, 6770, 2670, 6683, Q, 2669, 6682, 2668, 6680, 2642, 6642, 2630, 6600, 2621, 6551, 2614, 6526, L, 2614, 6451, Q, 2649, 6458, 2650, 6425, 2645, 6385, 2647, 6376, L, 2647, 6298, Q, 2644, 6291, 2632, 6281, 2621, 6271, 2620, 6265, 2614, 6247, 2615, 6219, 2609, 6101, 2609, 6095, 2609, 6087, 2611, 6075, L, 2621, 5875, Z]],
      "label": "Guemez",
      "shortLabel": "GU",
      "labelPosition": [227.2, 629.1],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.MN": {
      "outlines": [[M, 1990, 6567, L, 1925, 6500, 1965, 6390, 1979, 6294, Q, 1928, 6285, 1878, 6273, 1877, 6273, 1876, 6273, 1811, 6257, 1746, 6237, 1681, 6217, 1617, 6192, L, 1659, 6372, 1844, 6801, 1855, 6803, 2077, 6817, 2135, 6765, 2398, 6765, 2398, 6760, 2347, 6550, 2197, 6527, 2142, 6467, Z]],
      "label": "El Mante",
      "shortLabel": "MN",
      "labelPosition": [192.7, 662.5],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.OC": {
      "outlines": [[M, 1079, 6344, L, 962, 6435, 961, 6435, 1109, 6524, 1157, 6502, Z], [M, 1374, 5971, Q, 1374, 5946, 1349, 5925, 1316, 5902, 1299, 5887, L, 1152, 5887, 1152, 5977, 1165, 6025, 1165, 6067, 1087, 6127, 1124, 6255, 1080, 6310, 1078, 6340, 1187, 6417, 1232, 6472, 1345, 6487, 1365, 6552, 1527, 6517, 1527, 6375, 1659, 6375, 1659, 6372, 1612, 6175, 1612, 6175, Q, 1609, 6165, 1608, 6101, 1608, 6057, 1577, 6048, 1561, 6044, 1532, 6045, 1502, 6046, 1492, 6043, 1463, 6035, 1467, 6008, 1471, 5974, 1471, 5966, 1469, 5966, 1469, 5968, 1467, 5968, 1467, 5971, Z]],
      "label": "Ocampo",
      "shortLabel": "OC",
      "labelPosition": [136.8, 622],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.TU": {
      "outlines": [[M, 784, 5750, L, 657, 5792, 542, 5751, 542, 5805, 376, 5848, Q, 376, 5848, 376, 5848, 366, 5851, 374, 5855, 374, 5856, 374, 5856, 380, 5954, 387, 6052, L, 487, 6215, 487, 6260, 557, 6355, 702, 6355, 702, 6430, 707, 6430, 872, 6452, 884, 6435, 962, 6435, 1079, 6344, 1077, 6340, 1078, 6340, 1080, 6310, 1124, 6255, 1087, 6127, 1165, 6067, 1165, 6025, 1152, 5977, 1152, 5897, 1039, 5897, 1039, 5790, 956, 5680, 892, 5697, 892, 5795, 837, 5795, 827, 5812, Z]],
      "label": "Tula",
      "shortLabel": "TU",
      "labelPosition": [76.9, 606.6],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.BS": {
      "outlines": [[M, 877, 5362, L, 617, 5464, 615, 5464, 602, 5537, Q, 508, 5533, 414, 5502, L, 338, 5611, 420, 5665, 420, 5665, Q, 373, 5757, 370, 5849, L, 373, 5849, 542, 5805, 542, 5751, 657, 5792, 784, 5750, 827, 5812, 837, 5795, 892, 5795, 892, 5697, 959, 5680, 959, 5520, 947, 5524, Z]],
      "label": "Bustamante",
      "shortLabel": "BS",
      "labelPosition": [67.9, 564.5],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.PL": {
      "outlines": [[M, 960, 5519, L, 960, 5680, 957, 5682, 1040, 5790, 1040, 5897, 1153, 5897, 1153, 5890, 1152, 5887, 1152, 5545, 1027, 5501, 1022, 5499, 1014, 5499, Z]],
      "label": "Palmillas",
      "shortLabel": "PL",
      "labelPosition": [107.4, 565.8],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.MQ": {
      "outlines": [[M, 813, 5014, Q, 796, 5020, 774, 5023, 755, 5026, 740, 5033, 732, 5036, 717, 5043, 679, 5056, 680, 5086, 680, 5094, 683, 5114, 685, 5132, 682, 5146, 689, 5189, 640, 5242, 614, 5270, 569, 5311, 572, 5315, 574, 5331, 574, 5347, 561, 5357, 547, 5366, 547, 5373, 547, 5389, 590, 5431, L, 617, 5464, 877, 5362, 947, 5524, 1014, 5499, 1022, 5499, 1025, 5498, 952, 5332, 1022, 5224, 1022, 5078, Q, 1022, 5078, 1021, 5077, L, 1021, 5077, Q, 1018, 5065, 1022, 5061, 1012, 5064, 1010, 5061, 1008, 5056, 1004, 5056, 993, 5056, 985, 5052, 976, 5047, 962, 5046, 954, 5046, 917, 5043, 897, 5043, 837, 5008, Q, 827, 5008, 813, 5014, Z]],
      "label": "Miquihuana",
      "shortLabel": "MQ",
      "labelPosition": [78.6, 526.6],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.JI": {
      "outlines": [[M, 1404, 5186, L, 1310, 5022, 1193, 4975, 1122, 4977, 1022, 5077, 1022, 5224, 952, 5332, 1026, 5499, 1027, 5499, 1031, 5503, 1152, 5545, 1152, 5887, 1299, 5887, Q, 1316, 5902, 1349, 5925, 1374, 5946, 1374, 5971, L, 1467, 5971, Q, 1467, 5968, 1469, 5968, 1469, 5966, 1472, 5966, 1449, 5944, 1449, 5910, 1449, 5853, 1525, 5853, 1543, 5853, 1564, 5858, L, 1567, 5858, 1554, 5487, 1414, 5367, Z]],
      "label": "Santander Jimenez",
      "shortLabel": "JI",
      "labelPosition": [125.9, 547.3],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.GR": {
      "outlines": [[M, 1171, 4834, L, 1191, 4974, 1192, 4975, 1310, 5021, 1312, 5022, 1322, 4894, 1523, 4808, 1853, 5188, 1853, 5189, 2095, 5083, 2095, 5034, 2067, 5034, 2045, 4996, 1825, 4857, 1611, 4674, Q, 1602, 4678, 1587, 4678, 1574, 4678, 1537, 4668, 1524, 4668, 1524, 4677, 1524, 4686, 1539, 4718, L, 1539, 4756, 1514, 4756, Q, 1508, 4752, 1470, 4739, L, 1174, 4837, Z]],
      "label": "Nueva Ciudad Guerrero",
      "shortLabel": "GR",
      "labelPosition": [175.3, 492.8],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.PD": {
      "outlines": [[M, 1611, 4674, L, 1825, 4857, 2046, 4996, 2067, 5034, 2095, 5034, 2095, 5084, 2152, 5084, 2172, 4812, 2288, 4821, 2156, 4574, 1860, 4502, 1820, 4634, 1725, 4587, 1618, 4562, Q, 1612, 4591, 1612, 4609, 1612, 4620, 1622, 4657, Q, 1622, 4669, 1611, 4674, Z]],
      "label": "Nuevo Villa de Padilla",
      "shortLabel": "PD",
      "labelPosition": [195, 479.3],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.JA": {
      "outlines": [[M, 1658, 4489, Q, 1674, 4486, 1687, 4478, 1650, 4454, 1570, 4351, 1502, 4264, 1469, 4242, L, 1468, 4242, 1039, 4279, 939, 4557, 1174, 4837, 1470, 4739, Q, 1508, 4752, 1514, 4756, L, 1539, 4756, 1539, 4718, Q, 1524, 4686, 1524, 4677, 1524, 4668, 1537, 4668, 1574, 4678, 1587, 4678, 1602, 4678, 1611, 4674, 1622, 4669, 1622, 4657, 1612, 4620, 1612, 4609, 1612, 4591, 1618, 4562, 1618, 4561, 1618, 4560, 1624, 4530, 1624, 4518, 1624, 4499, 1619, 4496, Q, 1626, 4494, 1658, 4489, Z]],
      "label": "Jaumave",
      "shortLabel": "JA",
      "labelPosition": [131.3, 453.9],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.VC": {
      "outlines": [[M, 1312, 5022, L, 1312, 5022, 1311, 5023, 1404, 5186, 1414, 5367, 1552, 5485, Q, 1552, 5485, 1553, 5485, 1559, 5479, 1563, 5476, 1660, 5409, 1736, 5333, 1803, 5265, 1852, 5189, L, 1853, 5189, 1523, 4808, 1322, 4895, Z]],
      "label": "Victoria",
      "shortLabel": "VC",
      "labelPosition": [156.2, 514.7],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.CM": {
      "outlines": [[M, 2004, 5422, Q, 2004, 5393, 1902, 5278, L, 1887, 5278, Q, 1864, 5302, 1818, 5318, 1775, 5333, 1736, 5333, 1660, 5409, 1563, 5476, 1559, 5479, 1553, 5485, L, 1554, 5487, 1567, 5858, Q, 1581, 5861, 1597, 5866, 1600, 5866, 1603, 5867, 1648, 5881, 1658, 5881, 1710, 5881, 1714, 5872, 1716, 5867, 1720, 5863, 1741, 5826, 1783, 5826, 1812, 5826, 1815, 5828, 1817, 5829, 1829, 5856, L, 1832, 5858, Q, 1837, 5856, 1857, 5856, 1876, 5856, 1907, 5865, 1939, 5873, 1971, 5873, 2047, 5891, 2052, 5891, 2053, 5891, 2054, 5891, 2097, 5890, 2130, 5863, 2162, 5837, 2164, 5801, L, 2194, 5801, Q, 2240, 5800, 2252, 5809, 2264, 5819, 2277, 5866, 2336, 5911, 2408, 5911, 2455, 5911, 2467, 5886, 2479, 5864, 2484, 5856, 2492, 5842, 2492, 5822, L, 2568, 5725, 2373, 5598, 2372, 5597, 2110, 5778, Q, 2104, 5777, 2094, 5773, 2107, 5740, 2109, 5663, 2109, 5580, 2112, 5553, 2104, 5551, 2088, 5551, 2066, 5551, 2014, 5536, 1949, 5545, 1949, 5516, 1954, 5471, 1954, 5453, 1979, 5452, 1989, 5450, Q, 2004, 5446, 2004, 5422, Z]],
      "label": "Ciudad Madero",
      "shortLabel": "CM",
      "labelPosition": [184, 563.4],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.CS": {
      "outlines": [[M, 2290, 4824, L, 2288, 4821, 2172, 4812, 2152, 5084, 2095, 5084, 2094, 5083, 1852, 5189, Q, 1803, 5265, 1736, 5333, 1775, 5333, 1818, 5318, 1864, 5302, 1887, 5278, L, 1902, 5278, Q, 2004, 5393, 2004, 5422, 2004, 5446, 1989, 5450, 1979, 5452, 1954, 5453, 1954, 5471, 1949, 5516, 1949, 5545, 2014, 5536, 2066, 5551, 2088, 5551, 2104, 5551, 2112, 5553, 2109, 5580, 2109, 5663, 2107, 5740, 2094, 5773, 2104, 5777, 2110, 5778, L, 2372, 5597, 2373, 5598, 2568, 5725, 2512, 5795, 2540, 5813, 2540, 5875, 2621, 5875, 2625, 5790, 2785, 5697, 2796, 5657, 2512, 5530, 2512, 5352, 2400, 5200, 2407, 5029, Q, 2401, 5034, 2395, 5035, 2378, 5035, 2360, 5038, L, 2360, 4826, Z]],
      "label": "Casas",
      "shortLabel": "CS",
      "labelPosition": [226.6, 534.3],
      "labelAlignment": [CEN, MID]
    },
    "MX.TM.XI": {
      "outlines": [[M, 2054, 5891, Q, 2053, 5891, 2052, 5891, 2047, 5891, 1971, 5873, 1939, 5873, 1907, 5865, 1876, 5856, 1857, 5856, 1837, 5856, 1832, 5858, L, 1829, 5856, Q, 1817, 5829, 1815, 5828, 1812, 5826, 1783, 5826, 1741, 5826, 1720, 5863, 1716, 5867, 1714, 5872, 1710, 5881, 1658, 5881, 1648, 5881, 1603, 5867, L, 1598, 5869, Q, 1606, 5887, 1629, 5918, 1632, 5923, 1650, 5940, 1665, 5956, 1664, 5968, 1659, 6015, 1697, 6025, 1714, 6030, 1767, 6026, 1766, 6034, 1775, 6068, 1784, 6105, 1784, 6117, 1744, 6163, 1744, 6163, 1744, 6170, 1746, 6237, 1811, 6257, 1876, 6273, 1874, 6261, 1874, 6240, 1874, 6206, 1903, 6183, 1920, 6170, 1962, 6152, 1983, 6141, 1991, 6137, 2004, 6129, 2004, 6115, 2013, 6103, 2022, 6091, 2020, 6063, 2029, 6036, 2039, 6019, 2044, 6010, 2052, 5995, 2052, 5971, Q, 2054, 5920, 2054, 5891, Z]],
      "label": "Xicotencatl",
      "shortLabel": "XI",
      "labelPosition": [187.6, 603.9],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'tamaulipas',
  type: 'maps'
};

/***/ })

/******/ });
}));
