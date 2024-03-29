
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(15);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 15:
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
 * @id fusionmaps.LuangNamtha.1.06-19-2019 08:58:30
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
  "name": "LuangNamtha",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 500,
  "baseHeight": 517,
  "baseScaleFactor": 10,
  "firstEntity": "LA.LM.NT",
  "entities": {
    "LA.LM.NT": {
      "outlines": [[M, 3791, 1333, Q, 3756, 1357, 3724, 1378, 3659, 1421, 3643, 1421, 3621, 1421, 3569, 1411, 3516, 1401, 3501, 1401, 3424, 1401, 3396, 1425, 3351, 1478, 3291, 1537, 3269, 1559, 3238, 1562, 3200, 1562, 3179, 1562, 3142, 1563, 3112, 1582, 3090, 1597, 3073, 1601, 3050, 1662, 2994, 1750, 2992, 1752, 2992, 1753, 2931, 1847, 2913, 1882, 2900, 1907, 2870, 1949, 2838, 1992, 2825, 2014, 2816, 2031, 2785, 2074, 2754, 2117, 2744, 2135, 2730, 2159, 2701, 2197, 2669, 2238, 2657, 2257, 2580, 2359, 2562, 2386, 2562, 2388, 2561, 2389, 2571, 2401, 2579, 2414, 2585, 2426, 2598, 2449, 2670, 2554, 2690, 2592, 2703, 2617, 2720, 2679, 2738, 2739, 2753, 2770, 2771, 2852, 2790, 2897, 2808, 2943, 2824, 2997, 2840, 3050, 2881, 3107, 2922, 3163, 2953, 3217, 2977, 3258, 2993, 3295, 3035, 3294, 3140, 3294, 3151, 3294, 3176, 3290, 3200, 3287, 3210, 3287, 3212, 3287, 3261, 3286, 3290, 3285, 3290, 3287, 3353, 3287, 3371, 3288, 3408, 3290, 3448, 3299, 3525, 3316, 3603, 3336, 3608, 3331, 3615, 3327, 3638, 3312, 3724, 3277, 3772, 3254, 3780, 3191, 3780, 3190, 3780, 3079, 3780, 3038, 3827, 3014, 3891, 2981, 3908, 2959, 3917, 2948, 3932, 2918, 3953, 2876, 3957, 2870, 3968, 2850, 3995, 2847, 4009, 2845, 4036, 2847, 4128, 2845, 4218, 2834, 4248, 2830, 4316, 2832, 4370, 2826, 4370, 2780, 4370, 2746, 4328, 2722, 4276, 2692, 4257, 2661, 4254, 2627, 4254, 2621, 4254, 2584, 4287, 2568, 4313, 2557, 4367, 2554, 4411, 2552, 4425, 2505, 4430, 2477, 4434, 2463, 4441, 2438, 4452, 2423, 4487, 2378, 4603, 2336, 4614, 2333, 4692, 2325, 4765, 2312, 4765, 2279, 4765, 2264, 4752, 2239, 4739, 2214, 4739, 2187, 4739, 2158, 4771, 2149, 4788, 2144, 4826, 2138, 4863, 2126, 4875, 2116, 4892, 2103, 4913, 2064, 4921, 2050, 4930, 2017, 4939, 1978, 4945, 1956, 4943, 1942, 4954, 1911, 4965, 1880, 4964, 1866, 4964, 1864, 4964, 1863, 4964, 1861, 4959, 1822, 4953, 1783, 4941, 1762, 4929, 1741, 4867, 1741, 4842, 1741, 4812, 1757, 4780, 1774, 4757, 1774, 4696, 1774, 4672, 1728, 4654, 1669, 4639, 1641, 4615, 1597, 4588, 1564, 4549, 1517, 4521, 1517, 4497, 1517, 4461, 1544, 4426, 1569, 4399, 1569, 4341, 1569, 4324, 1589, 4306, 1609, 4279, 1609, 4247, 1609, 4243, 1605, 4239, 1602, 4239, 1569, 4239, 1524, 4265, 1477, 4291, 1429, 4291, 1399, 4291, 1377, 4274, 1374, 4244, 1375, 4219, 1373, 4212, 1373, 4194, 1358, L, 4163, 1333, Q, 4150, 1324, 4097, 1318, 4054, 1314, 4007, 1314, 4007, 1314, 4007, 1315, 4006, 1314, 4004, 1314, L, 4004, 1314, Q, 3958, 1316, 3910, 1320, Q, 3808, 1328, 3791, 1333, Z]],
      "label": "Namtha District",
      "shortLabel": "NT",
      "labelPosition": [358.3, 232.5],
      "labelAlignment": [CEN, MID],
      "nextId": "LA.LM.SI"
    },
    "LA.LM.SI": {
      "outlines": [[M, 2609, 59, Q, 2582, 41, 2547, 41, 2506, 41, 2491, 53, 2479, 63, 2479, 89, 2479, 106, 2489, 113, 2499, 120, 2499, 143, 2499, 176, 2447, 228, 2396, 280, 2380, 306, 2364, 331, 2312, 382, 2261, 433, 2210, 455, 2156, 476, 2087, 530, 2031, 575, 1980, 635, 1923, 705, 1872, 719, 1853, 725, 1804, 737, 1757, 749, 1727, 758, 1612, 793, 1560, 823, 1493, 862, 1443, 937, 1403, 997, 1368, 1030, 1588, 1317, 1605, 1324, 1619, 1329, 1642, 1331, 1656, 1332, 1676, 1338, 1687, 1341, 1709, 1349, 1778, 1368, 1796, 1376, 1805, 1380, 1830, 1393, 1854, 1405, 1869, 1408, 1902, 1413, 1922, 1450, 1934, 1475, 1940, 1512, 1944, 1544, 1962, 1569, 1973, 1585, 2007, 1622, 2008, 1622, 2009, 1624, 2045, 1675, 2068, 1699, 2092, 1724, 2135, 1772, 2177, 1820, 2199, 1857, 2220, 1893, 2224, 1927, 2227, 1958, 2234, 1973, 2243, 1992, 2274, 2047, 2299, 2089, 2332, 2125, 2348, 2144, 2386, 2180, L, 2386, 2180, Q, 2408, 2203, 2437, 2239, 2453, 2260, 2492, 2309, 2529, 2355, 2549, 2376, 2556, 2382, 2561, 2389, 2562, 2388, 2562, 2386, 2580, 2359, 2657, 2257, 2669, 2238, 2701, 2197, 2730, 2159, 2744, 2135, 2754, 2117, 2785, 2074, 2816, 2031, 2825, 2014, 2838, 1992, 2870, 1949, 2900, 1907, 2913, 1882, 2931, 1847, 2992, 1753, 2992, 1752, 2994, 1750, 3050, 1662, 3073, 1601, 3068, 1602, 3063, 1602, 3005, 1602, 2923, 1466, 2894, 1418, 2871, 1368, 2851, 1323, 2851, 1313, 2851, 1287, 2877, 1244, 2903, 1201, 2903, 1157, 2903, 1122, 2856, 1075, 2829, 1049, 2795, 1025, 2784, 1018, 2761, 1018, 2734, 1019, 2721, 1018, 2676, 1014, 2679, 953, 2681, 916, 2651, 872, 2616, 819, 2611, 797, 2601, 760, 2556, 714, 2515, 673, 2515, 645, 2515, 617, 2559, 617, 2575, 617, 2607, 631, 2639, 645, 2653, 645, 2686, 645, 2711, 617, 2735, 591, 2735, 559, 2735, 536, 2723, 513, 2711, 491, 2711, 461, 2711, 438, 2751, 390, 2791, 342, 2791, 307, 2791, 288, 2777, 244, 2763, 199, 2763, 177, 2763, 166, 2769, 133, 2775, 101, 2775, 89, 2775, 72, 2771, 65, 2764, 53, 2741, 53, 2731, 53, 2707, 65, 2684, 77, 2665, 77, Q, 2636, 77, 2609, 59, Z]],
      "label": "Sing District",
      "shortLabel": "SI",
      "labelPosition": [227.5, 121.5],
      "labelAlignment": [CEN, MID],
      "nextId": "LA.LM.LO"
    },
    "LA.LM.LO": {
      "outlines": [[M, 1605, 1324, Q, 1588, 1317, 1368, 1030, 1357, 1040, 1347, 1047, 1290, 1088, 1204, 1088, 1120, 1088, 1034, 1052, 948, 1017, 915, 1017, 879, 1017, 863, 1034, 861, 1037, 831, 1096, 829, 1101, 829, 1115, 829, 1136, 834, 1163, 839, 1191, 839, 1219, 839, 1264, 801, 1318, 758, 1378, 750, 1438, 746, 1470, 752, 1548, 751, 1616, 714, 1638, 672, 1664, 662, 1730, 652, 1801, 617, 1830, 610, 1835, 595, 1845, 580, 1855, 568, 1871, 561, 1879, 560, 1894, 557, 1922, 556, 1924, 542, 1984, 522, 2004, 505, 2020, 505, 2034, 505, 2041, 508, 2040, 487, 2079, 443, 2118, 393, 2161, 351, 2167, 311, 2175, 298, 2177, 279, 2180, 254, 2180, 214, 2181, 205, 2185, 187, 2193, 187, 2225, 187, 2240, 195, 2274, 203, 2308, 203, 2321, 203, 2353, 184, 2377, 175, 2389, 143, 2415, 82, 2465, 80, 2533, 76, 2658, 55, 2686, 44, 2702, 42, 2708, 36, 2725, 36, 2769, 36, 2814, 39, 2824, 46, 2851, 80, 2873, 128, 2905, 137, 2910, 162, 2922, 193, 2922, 240, 2922, 334, 2852, 428, 2781, 482, 2781, 511, 2781, 523, 2787, 540, 2795, 540, 2819, 540, 2854, 497, 2879, 454, 2904, 454, 2927, 454, 2941, 495, 3002, 535, 3059, 545, 3067, 578, 3092, 618, 3112, 642, 3123, 694, 3144, L, 733, 3145, Q, 754, 3124, 769, 3116, 837, 3078, 839, 3078, 868, 3078, 888, 3103, 900, 3117, 917, 3142, 934, 3159, 936, 3194, 938, 3249, 939, 3254, 947, 3289, 956, 3363, 969, 3427, 1011, 3461, 1034, 3480, 1103, 3514, 1156, 3540, 1177, 3576, 1179, 3580, 1198, 3629, 1213, 3666, 1231, 3681, 1232, 3681, 1232, 3682, 1235, 3675, 1245, 3670, 1260, 3662, 1263, 3660, 1282, 3641, 1292, 3634, 1306, 3624, 1329, 3599, 1360, 3564, 1361, 3564, 1366, 3558, 1388, 3539, 1407, 3523, 1421, 3506, 1452, 3468, 1454, 3467, 1471, 3447, 1493, 3431, 1521, 3410, 1564, 3362, 1605, 3316, 1626, 3302, 1646, 3289, 1668, 3265, 1677, 3256, 1700, 3230, 1710, 3218, 1731, 3202, 1753, 3188, 1763, 3180, 1764, 3180, 1764, 3180, 1765, 3179, 1769, 3175, 1773, 3171, 1798, 3152, 1822, 3132, 1829, 3127, L, 1876, 3094, Q, 1877, 3093, 1879, 3092, 1917, 3063, 1985, 3009, 1994, 3002, 2014, 2989, 2038, 2975, 2044, 2970, 2098, 2926, 2104, 2922, 2114, 2914, 2140, 2890, 2166, 2865, 2170, 2862, 2185, 2849, 2196, 2835, 2206, 2819, 2215, 2808, 2262, 2746, 2323, 2692, 2385, 2632, 2430, 2570, 2475, 2507, 2500, 2472, 2525, 2436, 2536, 2425, 2546, 2412, 2561, 2389, 2556, 2382, 2549, 2376, 2529, 2355, 2492, 2309, 2453, 2260, 2437, 2239, 2408, 2203, 2386, 2180, L, 2386, 2180, Q, 2348, 2144, 2332, 2125, 2299, 2089, 2274, 2047, 2243, 1992, 2234, 1973, 2227, 1958, 2224, 1927, 2220, 1893, 2199, 1857, 2177, 1820, 2135, 1772, 2092, 1724, 2068, 1699, 2045, 1675, 2009, 1624, 2008, 1622, 2007, 1622, 1973, 1585, 1962, 1569, 1944, 1544, 1940, 1512, 1934, 1475, 1922, 1450, 1902, 1413, 1869, 1408, 1854, 1405, 1830, 1393, 1805, 1380, 1796, 1376, 1778, 1368, 1709, 1349, 1687, 1341, 1676, 1338, 1656, 1332, 1642, 1331, Q, 1619, 1329, 1605, 1324, Z]],
      "label": "Long District",
      "shortLabel": "LO",
      "labelPosition": [129.9, 234.9],
      "labelAlignment": [CEN, MID],
      "nextId": "LA.LM.VI"
    },
    "LA.LM.VI": {
      "outlines": [[M, 2323, 2692, Q, 2262, 2746, 2215, 2808, 2206, 2819, 2196, 2835, 2185, 2849, 2170, 2862, 2166, 2865, 2140, 2890, 2114, 2914, 2104, 2922, 2098, 2926, 2044, 2970, 2038, 2975, 2014, 2989, 1994, 3002, 1985, 3009, 1917, 3063, 1879, 3092, 1877, 3093, 1876, 3094, L, 1829, 3127, Q, 1822, 3132, 1798, 3152, 1773, 3171, 1769, 3175, 1765, 3179, 1764, 3180, 1764, 3180, 1763, 3180, 1753, 3188, 1731, 3202, 1710, 3218, 1700, 3230, 1677, 3256, 1668, 3265, 1646, 3289, 1626, 3302, 1605, 3316, 1564, 3362, 1521, 3410, 1493, 3431, 1471, 3447, 1454, 3467, 1452, 3468, 1421, 3506, 1407, 3523, 1388, 3539, 1366, 3558, 1361, 3564, 1360, 3564, 1329, 3599, 1306, 3624, 1292, 3634, 1282, 3641, 1263, 3660, 1260, 3662, 1245, 3670, 1235, 3675, 1232, 3682, 1282, 3725, 1282, 3773, 1282, 3789, 1281, 3800, 1281, 3803, 1280, 3806, 1280, 3807, 1280, 3809, 1280, 3829, 1279, 3891, 1278, 3943, 1290, 3960, 1302, 3980, 1337, 4025, 1367, 4066, 1367, 4094, 1367, 4115, 1339, 4153, 1312, 4190, 1312, 4242, 1312, 4287, 1328, 4315, 1350, 4353, 1402, 4353, 1426, 4353, 1483, 4324, 1539, 4295, 1603, 4295, 1674, 4295, 1709, 4305, 1774, 4325, 1778, 4384, 1781, 4423, 1786, 4433, 1794, 4452, 1826, 4461, 1828, 4462, 1875, 4460, 1922, 4464, 1922, 4487, 1922, 4496, 1914, 4516, 1906, 4535, 1906, 4541, 1906, 4558, 1946, 4609, 1985, 4660, 1980, 4701, 1975, 4742, 1979, 4797, 1981, 4828, 1986, 4886, 1989, 4934, 2096, 5034, 2202, 5135, 2253, 5135, 2259, 5135, 2276, 5132, 2282, 5124, 2293, 5093, 2308, 5048, 2310, 5044, 2318, 5027, 2321, 5004, 2324, 4975, 2326, 4958, 2331, 4940, 2358, 4861, 2377, 4803, 2387, 4761, 2396, 4721, 2418, 4672, 2442, 4620, 2466, 4590, 2476, 4578, 2504, 4561, 2536, 4542, 2548, 4534, 2568, 4521, 2579, 4500, 2586, 4486, 2592, 4459, 2593, 4457, 2593, 4455, 2600, 4422, 2601, 4420, 2608, 4401, 2627, 4395, 2649, 4388, 2698, 4370, 2707, 4368, 2766, 4348, 2823, 4331, 2834, 4331, L, 2890, 4334, Q, 2912, 4334, 2937, 4328, 2961, 4322, 2973, 4314, 2995, 4304, 3005, 4298, 3023, 4290, 3034, 4271, 3035, 4269, 3047, 4233, 3057, 4206, 3068, 4199, 3080, 4192, 3101, 4186, 3128, 4179, 3139, 4174, 3149, 4170, 3174, 4153, 3186, 4144, 3187, 4130, 3187, 4115, 3187, 4111, 3187, 4100, 3197, 4073, 3207, 4043, 3208, 4038, 3210, 3984, 3216, 3955, 3219, 3933, 3219, 3895, 3219, 3883, 3187, 3818, 3157, 3759, 3154, 3754, 3141, 3736, 3125, 3703, L, 3101, 3656, Q, 3077, 3625, 3068, 3604, 3060, 3584, 3063, 3556, 3066, 3513, 3053, 3458, 3040, 3403, 3016, 3359, 3007, 3328, 2993, 3295, 2977, 3258, 2953, 3217, 2922, 3163, 2881, 3107, 2840, 3050, 2824, 2997, 2808, 2943, 2790, 2897, 2771, 2852, 2753, 2770, 2738, 2739, 2720, 2679, 2703, 2617, 2690, 2592, 2670, 2554, 2598, 2449, 2585, 2426, 2579, 2414, 2571, 2401, 2561, 2389, 2546, 2412, 2536, 2425, 2525, 2436, 2500, 2472, 2475, 2507, 2430, 2570, Q, 2385, 2632, 2323, 2692, Z]],
      "label": "Viengphoukha District",
      "shortLabel": "VI",
      "labelPosition": [222.6, 376.2],
      "labelAlignment": [CEN, MID],
      "nextId": "LA.LM.NL"
    },
    "LA.LM.NL": {
      "outlines": [[M, 4025, 3713, Q, 3998, 3713, 3971, 3691, 3945, 3664, 3933, 3654, 3909, 3632, 3898, 3622, 3884, 3608, 3882, 3597, 3882, 3586, 3880, 3580, 3871, 3556, 3828, 3514, 3775, 3462, 3736, 3462, 3711, 3462, 3683, 3476, 3656, 3490, 3635, 3490, 3620, 3490, 3616, 3474, 3613, 3456, 3610, 3449, 3601, 3429, 3590, 3423, 3583, 3420, 3583, 3407, 3583, 3359, 3603, 3336, 3525, 3316, 3448, 3299, 3408, 3290, 3371, 3288, 3353, 3287, 3290, 3287, 3290, 3288, 3290, 3288, 3288, 3287, 3287, 3287, 3289, 3287, 3290, 3287, 3290, 3285, 3261, 3286, 3212, 3287, 3210, 3287, 3200, 3287, 3176, 3290, 3151, 3294, 3140, 3294, 3035, 3294, 2993, 3295, 3007, 3328, 3016, 3359, 3040, 3403, 3053, 3458, 3066, 3513, 3063, 3556, 3060, 3584, 3068, 3604, 3077, 3625, 3101, 3656, L, 3125, 3703, Q, 3141, 3736, 3154, 3754, 3157, 3759, 3187, 3818, 3219, 3883, 3219, 3895, 3219, 3933, 3216, 3955, 3210, 3984, 3208, 4038, 3207, 4043, 3197, 4073, 3187, 4100, 3187, 4111, 3187, 4115, 3187, 4130, 3186, 4144, 3174, 4153, 3149, 4170, 3139, 4174, 3128, 4179, 3101, 4186, 3080, 4192, 3068, 4199, 3057, 4206, 3047, 4233, 3035, 4269, 3034, 4271, 3023, 4290, 3005, 4298, 2995, 4304, 2973, 4314, 2961, 4322, 2937, 4328, 2912, 4334, 2890, 4334, L, 2834, 4331, Q, 2823, 4331, 2766, 4348, 2707, 4368, 2698, 4370, 2649, 4388, 2627, 4395, 2608, 4401, 2601, 4420, 2600, 4422, 2593, 4455, 2593, 4457, 2592, 4459, 2586, 4486, 2579, 4500, 2568, 4521, 2548, 4534, 2536, 4542, 2504, 4561, 2476, 4578, 2466, 4590, 2442, 4620, 2418, 4672, 2396, 4721, 2387, 4761, 2377, 4803, 2358, 4861, 2331, 4940, 2326, 4958, 2324, 4975, 2321, 5004, 2318, 5027, 2310, 5044, 2308, 5048, 2293, 5093, 2282, 5124, 2276, 5132, 2300, 5129, 2348, 5119, 2354, 5119, 2383, 5124, 2412, 5129, 2424, 5129, 2481, 5129, 2512, 5100, 2532, 5081, 2533, 5080, 2546, 5071, 2564, 5071, 2581, 5071, 2634, 5100, 2688, 5129, 2740, 5129, 2782, 5129, 2809, 5116, 2825, 5108, 2845, 5087, 2866, 5067, 2882, 5059, 2908, 5046, 2950, 5046, 2968, 5046, 3098, 5058, 3139, 5058, 3161, 5048, 3167, 5047, 3196, 5028, 3220, 5011, 3232, 5010, 3256, 5009, 3298, 5010, 3321, 5010, 3363, 5010, 3382, 5010, 3422, 5011, 3458, 5011, 3481, 5010, 3516, 5009, 3550, 4971, 3584, 4934, 3609, 4934, 3638, 4934, 3677, 4939, 3706, 4942, 3718, 4940, 3748, 4935, 3797, 4863, 3828, 4817, 3855, 4771, 3909, 4680, 3909, 4651, 3909, 4634, 3898, 4601, 3887, 4571, 3887, 4569, 3887, 4540, 3934, 4528, 3958, 4522, 3989, 4519, 4009, 4512, 4030, 4478, 4064, 4421, 4065, 4419, 4084, 4395, 4095, 4373, 4107, 4349, 4113, 4317, 4117, 4298, 4120, 4266, 4123, 4235, 4136, 4233, 4148, 4230, 4148, 4218, 4148, 4192, 4103, 4167, 4059, 4141, 4059, 4126, 4059, 4107, 4078, 4099, 4090, 4093, 4121, 4084, 4183, 4059, 4183, 3961, 4183, 3927, 4172, 3909, 4165, 3897, 4145, 3885, 4102, 3858, 4091, 3803, 4094, 3773, 4095, 3736, 4095, 3698, 4065, 3698, 4056, 3698, 4046, 3706, Q, 4037, 3713, 4025, 3713, Z]],
      "label": "Nale District",
      "shortLabel": "NL",
      "labelPosition": [349.9, 420.9],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'luangnamtha',
  type: 'maps'
};

/***/ })

/******/ });
}));
