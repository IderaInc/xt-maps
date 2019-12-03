
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
/******/ 	return __webpack_require__(__webpack_require__.s = 590);
/******/ })
/************************************************************************/
/******/ ({

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(591);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 591:
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
 * @id fusionmaps.Greenland.20.10-30-2012 06:30:33
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
  "name": "Greenland",
  "revision": 20,
  "standaloneInit": true,
  "baseWidth": 310,
  "baseHeight": 540,
  "baseScaleFactor": 10,
  "entities": {
    "01": {
      "outlines": [[M, 1892, 61, Q, 1885, 57, 1880, 44, 1868, 40, 1856, 37, 1849, 34, 1838, 37, 1831, 39, 1818, 42, 1807, 45, 1793, 49, 1782, 53, 1771, 53, 1715, 52, 1658, 51, 1647, 51, 1637, 60, 1634, 63, 1631, 67, 1628, 72, 1623, 74, 1615, 76, 1604, 81, 1594, 88, 1584, 97, 1584, 104, 1580, 107, 1574, 113, 1573, 125, 1572, 143, 1575, 160, 1577, 170, 1571, 171, 1536, 170, 1494, 171, 1480, 175, 1462, 176, 1459, 187, 1452, 201, 1444, 208, 1439, 214, 1429, 227, 1421, 243, 1417, 251, 1404, 263, 1403, 265, 1396, 270, 1393, 276, 1389, 282, 1387, 286, 1384, 290, 1379, 298, 1368, 297, 1364, 296, 1360, 295, 1336, 290, 1310, 297, 1301, 301, 1290, 309, 1282, 311, 1283, 320, 1286, 333, 1278, 340, 1274, 344, 1268, 342, 1262, 339, 1255, 339, 1249, 339, 1243, 338, 1236, 337, 1230, 336, 1228, 336, 1221, 329, 1213, 324, 1195, 320, 1183, 316, 1170, 316, 1158, 316, 1147, 322, 1134, 326, 1120, 330, 1115, 331, 1111, 333, 1103, 336, 1088, 339, 1077, 341, 1070, 345, 1068, 346, 1058, 348, 1049, 351, 1040, 352, 1034, 353, 1028, 357, 1018, 364, 1004, 371, 992, 382, 967, 391, 964, 395, 955, 397, 948, 399, 948, 405, 944, 402, 940, 405, 938, 426, 937, 451, 933, 457, 932, 469, 929, 476, 927, 483, 923, 485, 920, 489, 913, 499, 898, 504, 888, 504, 880, 509, 870, 513, 861, 523, 851, 533, 832, 534, 814, 541, 790, 547, 783, 549, 775, 551, 765, 554, 748, 558, 733, 557, 721, 568, 714, 573, 706, 580, 705, 588, 700, 599, 701, 603, 702, 612, 703, 620, 707, 630, 712, 652, 711, 679, 714, 685, 715, 700, 720, 720, 726, 745, 726, 756, 734, 758, 731, 766, 730, 777, 730, 784, 723, 787, 713, 798, 695, 808, 671, 816, 646, 824, 635, 826, 623, 830, 608, 835, 590, 839, 576, 841, 560, 847, 552, 850, 540, 851, 532, 852, 523, 852, 499, 852, 475, 853, 469, 854, 463, 854, 449, 855, 434, 857, 433, 869, 413, 869, 410, 870, 398, 871, 394, 872, 390, 873, 383, 874, 380, 877, 376, 880, 367, 889, 364, 894, 361, 898, 359, 901, 359, 905, 358, 916, 363, 922, 366, 926, 369, 932, 377, 948, 391, 974, 398, 981, 403, 989, 413, 1006, 426, 1026, 431, 1028, 431, 1035, 430, 1084, 430, 1133, 428, 1137, 432, 1143, 437, 1148, 440, 1153, 447, 1164, 457, 1173, 464, 1179, 471, 1187, 469, 1193, 469, 1197, 467, 1204, 458, 1204, 453, 1203, 450, 1207, 443, 1217, 428, 1221, 425, 1223, 415, 1224, 403, 1226, 393, 1234, 373, 1235, 349, 1236, 344, 1240, 334, 1246, 329, 1253, 325, 1257, 315, 1267, 316, 1284, 319, 1291, 324, 1297, 329, 1304, 337, 1310, 338, 1310, 338, 1311, 347, 1319, 346, 1332, 345, 1345, 343, 1357, 338, 1360, 336, 1363, 331, 1369, 323, 1370, 318, 1383, 324, 1387, 326, 1392, 327, 1395, 331, 1410, 330, 1427, 329, 1432, 332, 1436, 337, 1451, 337, 1465, 339, 1483, 341, 1495, 349, 1502, 360, 1501, 371, 1500, 383, 1499, 437, 1498, 485, 1497, 511, 1497, 532, 1506, 540, 1508, 543, 1510, 547, 1514, 553, 1514, 560, 1519, 568, 1525, 579, 1533, 592, 1541, 600, 1546, 605, 1548, 618, 1552, 629, 1562, 635, 1564, 636, 1565, 636, 1575, 645, 1581, 656, 1597, 664, 1604, 667, 1607, 670, 1610, 680, 1620, 689, 1629, 702, 1639, 704, 1647, 712, 1662, 718, 1670, 727, 1679, 730, 1692, 736, 1715, 744, 1740, 747, 1757, 750, 1765, 755, 1776, 757, 1789, 760, 1795, 761, 1797, 766, 1801, 772, 1811, 781, 1825, 789, 1849, 790, 1851, 791, 1854, L, 2241, 689, Q, 2242, 683, 2244, 681, 2248, 678, 2247, 670, 2246, 659, 2247, 648, 2247, 644, 2247, 640, 2248, 625, 2249, 610, 2255, 599, 2256, 591, 2256, 583, 2258, 575, 2261, 565, 2264, 553, 2265, 552, 2266, 545, 2268, 537, 2274, 523, 2276, 520, 2277, 510, 2278, 506, 2279, 503, 2282, 493, 2286, 480, 2292, 459, 2298, 438, 2302, 424, 2307, 405, 2308, 401, 2309, 398, 2317, 373, 2325, 344, 2329, 335, 2335, 319, 2345, 308, 2349, 289, 2359, 281, 2366, 263, 2366, 260, 2366, 254, 2358, 252, 2349, 249, 2341, 235, 2326, 235, 2305, 235, 2283, 234, 2275, 233, 2269, 238, 2255, 249, 2236, 265, 2233, 270, 2223, 277, 2216, 282, 2210, 298, 2201, 301, 2196, 312, 2188, 317, 2185, 330, 2180, 332, 2181, 337, 2185, 364, 2163, 372, 2160, 371, 2157, 362, 2155, 357, 2147, 355, 2147, 347, 2142, 339, 2133, 335, 2126, 323, 2083, 322, 2041, 322, 2038, 322, 2035, 317, 2033, 307, 2045, 306, 2048, 303, 2056, 304, 2066, 306, 2074, 298, 2078, 293, 2083, 287, 2088, 283, 2091, 273, 2095, 270, 2102, 264, 2108, 260, 2107, 248, 2105, 244, 2105, 237, 2105, 233, 2104, 230, 2100, 211, 2101, 192, 2102, 182, 2098, 172, 2093, 161, 2085, 155, 2068, 142, 2048, 130, 2046, 129, 2039, 122, 2036, 116, 2028, 116, 1997, 115, 1966, 115, 1955, 115, 1946, 112, 1930, 107, 1924, 92, 1923, 90, 1919, 84, 1911, 74, 1901, 67, Q, 1898, 66, 1892, 61, Z]],
      "label": "Avannaa",
      "shortLabel": "NG",
      "labelPosition": [118.1, 94.5],
      "labelAlignment": [CEN, MID]
    },
    "02": {
      "outlines": [[M, 2335, 319, Q, 2329, 335, 2325, 344, 2317, 373, 2309, 398, 2308, 401, 2307, 405, 2302, 424, 2298, 438, 2292, 459, 2286, 480, 2282, 493, 2279, 503, 2278, 506, 2277, 510, 2276, 520, 2274, 523, 2268, 537, 2266, 545, 2265, 552, 2264, 553, 2261, 565, 2258, 575, 2256, 583, 2256, 591, 2255, 599, 2249, 610, 2248, 625, 2247, 640, 2247, 644, 2247, 648, 2246, 659, 2247, 670, 2248, 678, 2244, 681, 2242, 683, 2241, 689, L, 1468, 1311, 1423, 2676, 1374, 4004, Q, 1373, 4005, 1373, 4006, 1371, 4011, 1370, 4017, L, 1343, 4931, Q, 1331, 4938, 1324, 4944, 1313, 4952, 1304, 4968, 1299, 4978, 1292, 4993, 1288, 4996, 1287, 5003, 1287, 5005, 1285, 5012, 1273, 5024, 1277, 5054, 1284, 5063, 1291, 5082, 1306, 5096, 1329, 5107, 1340, 5115, 1348, 5123, 1352, 5126, 1356, 5127, 1370, 5128, 1383, 5128, 1395, 5128, 1405, 5131, 1417, 5135, 1433, 5133, L, 1433, 5133, Q, 1434, 5128, 1434, 5123, 1444, 5112, 1442, 5098, 1448, 5087, 1449, 5078, 1457, 5069, 1459, 5056, 1461, 5044, 1462, 5033, 1463, 5023, 1464, 5013, 1464, 5010, 1465, 5006, 1465, 4995, 1470, 4990, 1471, 4968, 1471, 4951, 1474, 4943, 1477, 4931, 1478, 4927, 1479, 4923, 1481, 4913, 1487, 4900, 1488, 4855, 1489, 4813, 1492, 4800, 1495, 4793, 1502, 4776, 1510, 4765, 1513, 4753, 1517, 4749, 1522, 4741, 1525, 4735, 1527, 4731, 1529, 4726, 1532, 4717, 1532, 4708, 1533, 4695, 1535, 4686, 1536, 4682, 1537, 4679, 1538, 4675, 1540, 4670, 1541, 4667, 1542, 4663, 1545, 4650, 1546, 4638, 1548, 4627, 1555, 4622, 1568, 4608, 1571, 4596, 1577, 4588, 1579, 4586, 1588, 4578, 1596, 4571, 1600, 4568, 1605, 4563, 1616, 4550, 1622, 4542, 1627, 4533, 1631, 4531, 1643, 4520, 1649, 4509, 1653, 4501, 1653, 4498, 1652, 4488, 1656, 4483, 1653, 4456, 1654, 4423, 1655, 4419, 1656, 4415, 1662, 4401, 1662, 4388, 1663, 4359, 1664, 4330, 1670, 4319, 1675, 4312, 1675, 4293, 1682, 4287, 1686, 4284, 1687, 4280, 1689, 4258, 1676, 4252, 1667, 4249, 1660, 4241, 1649, 4228, 1651, 4215, 1652, 4211, 1657, 4206, 1674, 4193, 1686, 4183, 1692, 4179, 1701, 4176, 1705, 4183, 1705, 4185, 1705, 4192, 1711, 4193, 1717, 4188, 1718, 4185, 1723, 4172, 1735, 4164, 1743, 4155, 1742, 4145, 1740, 4122, 1745, 4101, 1757, 4094, 1768, 4095, 1791, 4099, 1812, 4109, 1839, 4113, 1855, 4103, 1873, 4100, 1886, 4099, 1891, 4087, 1900, 4082, 1911, 4070, 1921, 4065, 1924, 4056, 1929, 4051, 1935, 4048, 1936, 4046, 1943, 4038, 1948, 4033, 1955, 4027, 1963, 4022, 1978, 4013, 1986, 4006, 1993, 4000, 2003, 3994, 2022, 3983, 2031, 3978, 2044, 3971, 2055, 3962, 2067, 3954, 2074, 3938, 2078, 3928, 2078, 3915, 2081, 3914, 2084, 3914, 2091, 3914, 2097, 3917, 2111, 3916, 2119, 3918, 2121, 3913, 2123, 3910, 2125, 3906, 2128, 3900, 2129, 3897, 2133, 3894, 2136, 3891, 2138, 3889, 2140, 3878, 2146, 3872, 2150, 3868, 2149, 3863, 2147, 3849, 2161, 3849, 2167, 3850, 2167, 3843, 2166, 3829, 2173, 3822, 2183, 3809, 2185, 3795, 2192, 3773, 2192, 3748, 2194, 3732, 2193, 3720, 2193, 3708, 2201, 3700, 2212, 3685, 2212, 3673, 2212, 3665, 2213, 3658, 2214, 3650, 2213, 3643, 2211, 3625, 2218, 3612, 2220, 3599, 2226, 3592, 2237, 3581, 2240, 3575, 2245, 3567, 2243, 3558, 2242, 3552, 2245, 3551, 2253, 3535, 2266, 3527, 2285, 3515, 2282, 3490, 2281, 3478, 2280, 3465, 2274, 3458, 2272, 3452, 2271, 3450, 2271, 3448, 2281, 3451, 2287, 3454, 2308, 3454, 2319, 3463, 2323, 3473, 2334, 3474, 2338, 3474, 2341, 3475, 2352, 3476, 2359, 3468, 2366, 3461, 2376, 3459, 2386, 3458, 2396, 3458, 2401, 3458, 2406, 3458, 2411, 3454, 2418, 3447, 2425, 3442, 2434, 3438, 2439, 3435, 2442, 3432, 2448, 3429, 2449, 3428, 2458, 3420, 2464, 3416, 2486, 3401, 2499, 3388, 2510, 3379, 2519, 3379, 2525, 3374, 2529, 3371, 2536, 3367, 2543, 3356, 2555, 3351, 2556, 3346, 2569, 3337, 2575, 3332, 2579, 3329, 2584, 3328, 2591, 3327, 2595, 3322, 2600, 3308, 2609, 3307, 2624, 3297, 2634, 3293, 2644, 3287, 2651, 3275, 2657, 3263, 2665, 3256, 2680, 3245, 2688, 3236, 2701, 3226, 2711, 3223, 2716, 3222, 2718, 3219, 2730, 3208, 2736, 3202, 2739, 3199, 2741, 3195, 2746, 3189, 2751, 3183, 2757, 3176, 2756, 3163, 2756, 3156, 2760, 3153, 2764, 3149, 2766, 3147, 2771, 3142, 2773, 3140, 2776, 3129, 2779, 3125, 2784, 3116, 2787, 3108, 2794, 3102, 2798, 3095, 2805, 3080, 2813, 3062, 2812, 3051, 2814, 3043, 2817, 3038, 2821, 3035, 2822, 3031, 2824, 3026, 2829, 3024, 2832, 3018, 2835, 3010, 2839, 3003, 2843, 2997, 2844, 2988, 2845, 2980, 2848, 2977, 2855, 2970, 2865, 2960, 2866, 2953, 2869, 2950, 2872, 2947, 2873, 2938, 2873, 2926, 2881, 2922, 2888, 2919, 2891, 2910, 2893, 2905, 2895, 2898, 2896, 2892, 2897, 2885, 2898, 2877, 2891, 2876, 2869, 2875, 2846, 2875, 2797, 2875, 2744, 2876, 2734, 2881, 2721, 2883, 2718, 2884, 2714, 2884, 2677, 2885, 2641, 2885, 2592, 2885, 2544, 2885, 2531, 2884, 2513, 2877, 2508, 2875, 2499, 2874, 2484, 2873, 2469, 2873, 2469, 2850, 2471, 2831, 2486, 2826, 2496, 2830, 2503, 2833, 2505, 2843, 2510, 2849, 2512, 2850, 2519, 2853, 2531, 2851, 2546, 2837, 2552, 2831, 2556, 2826, 2563, 2823, 2572, 2816, 2579, 2815, 2594, 2809, 2606, 2809, 2617, 2804, 2617, 2790, 2616, 2781, 2615, 2773, 2606, 2751, 2590, 2739, 2580, 2722, 2577, 2705, 2576, 2698, 2577, 2690, 2577, 2682, 2574, 2675, 2587, 2675, 2593, 2684, 2596, 2688, 2601, 2691, 2605, 2693, 2609, 2695, 2621, 2699, 2627, 2704, 2637, 2704, 2638, 2707, 2641, 2713, 2642, 2715, 2652, 2724, 2655, 2738, 2662, 2748, 2668, 2754, 2673, 2758, 2676, 2763, 2679, 2766, 2684, 2766, 2690, 2770, 2693, 2774, 2710, 2782, 2724, 2782, 2742, 2790, 2759, 2789, 2774, 2791, 2781, 2795, 2790, 2801, 2799, 2804, 2810, 2808, 2821, 2808, 2837, 2808, 2854, 2807, 2863, 2806, 2867, 2804, 2871, 2801, 2874, 2798, 2879, 2794, 2889, 2795, 2903, 2797, 2913, 2791, 2917, 2779, 2909, 2777, 2897, 2768, 2891, 2755, 2888, 2751, 2884, 2749, 2876, 2743, 2873, 2738, 2865, 2733, 2865, 2728, 2859, 2722, 2861, 2713, 2862, 2699, 2858, 2688, 2853, 2676, 2848, 2669, 2844, 2663, 2843, 2661, 2834, 2646, 2830, 2637, 2824, 2621, 2821, 2608, 2819, 2597, 2814, 2585, 2806, 2569, 2801, 2560, 2798, 2554, 2796, 2548, 2795, 2536, 2791, 2528, 2788, 2521, 2786, 2515, 2780, 2505, 2771, 2494, 2766, 2493, 2764, 2491, 2747, 2478, 2724, 2472, 2718, 2471, 2708, 2464, 2699, 2455, 2694, 2440, 2709, 2443, 2721, 2442, 2726, 2430, 2726, 2418, 2726, 2370, 2726, 2323, 2726, 2316, 2726, 2309, 2726, 2304, 2725, 2288, 2723, 2281, 2721, 2270, 2718, 2259, 2709, 2247, 2706, 2238, 2701, 2233, 2692, 2222, 2688, 2209, 2680, 2199, 2676, 2188, 2679, 2164, 2680, 2138, 2682, 2121, 2688, 2115, 2695, 2108, 2700, 2101, 2716, 2090, 2724, 2080, 2719, 2075, 2716, 2073, 2714, 2072, 2710, 2065, 2709, 2053, 2710, 2042, 2710, 2031, 2706, 2022, 2702, 2015, 2692, 2002, 2680, 1993, 2669, 1985, 2664, 1982, 2662, 1972, 2660, 1959, 2667, 1953, 2677, 1943, 2694, 1928, 2703, 1921, 2712, 1908, 2720, 1902, 2726, 1897, 2735, 1892, 2738, 1877, 2738, 1869, 2743, 1860, 2745, 1848, 2746, 1837, 2746, 1830, 2745, 1822, 2744, 1816, 2739, 1815, 2728, 1815, 2716, 1814, 2715, 1814, 2707, 1811, 2700, 1806, 2691, 1805, 2681, 1804, 2664, 1799, 2655, 1796, 2639, 1796, 2630, 1792, 2619, 1795, 2620, 1786, 2631, 1781, 2640, 1777, 2646, 1767, 2654, 1756, 2655, 1737, 2655, 1728, 2645, 1720, 2644, 1710, 2644, 1700, 2644, 1680, 2641, 1662, 2639, 1653, 2636, 1647, 2633, 1641, 2630, 1635, 2628, 1629, 2627, 1625, 2626, 1618, 2621, 1616, 2615, 1613, 2612, 1607, 2603, 1592, 2592, 1582, 2583, 1574, 2574, 1559, 2565, 1539, 2549, 1527, 2546, 1525, 2537, 1519, 2530, 1511, 2516, 1511, 2498, 1511, 2481, 1507, 2478, 1506, 2471, 1502, 2462, 1498, 2454, 1491, 2445, 1489, 2434, 1481, 2419, 1483, 2416, 1477, 2427, 1465, 2433, 1457, 2436, 1452, 2442, 1451, 2445, 1450, 2449, 1449, 2464, 1445, 2476, 1442, 2489, 1436, 2498, 1435, 2504, 1422, 2509, 1415, 2515, 1408, 2526, 1409, 2538, 1410, 2549, 1410, 2563, 1410, 2576, 1409, 2585, 1402, 2584, 1392, 2584, 1385, 2581, 1384, 2581, 1376, 2581, 1370, 2580, 1354, 2569, 1347, 2567, 1337, 2562, 1333, 2561, 1316, 2560, 1302, 2560, 1292, 2555, 1288, 2545, 1273, 2542, 1263, 2541, 1259, 2539, 1254, 2533, 1241, 2517, 1229, 2516, 1227, 2514, 1220, 2507, 1207, 2500, 1197, 2500, 1183, 2485, 1175, 2485, 1170, 2481, 1167, 2477, 1164, 2475, 1160, 2471, 1147, 2458, 1130, 2452, 1127, 2452, 1120, 2451, 1109, 2440, 1101, 2430, 1095, 2430, 1080, 2429, 1076, 2427, 1072, 2425, 1069, 2423, 1065, 2419, 1060, 2414, 1054, 2402, 1040, 2395, 1025, 2393, 1019, 2391, 1012, 2389, 1001, 2388, 983, 2384, 974, 2385, 962, 2387, 947, 2382, 937, 2375, 926, 2372, 917, 2370, 910, 2369, 902, 2365, 877, 2365, 843, 2361, 831, 2361, 817, 2360, 812, 2361, 807, 2361, 771, 2360, 735, 2359, 723, 2365, 715, 2366, 701, 2367, 683, 2371, 678, 2375, 672, 2377, 668, 2377, 665, 2378, 652, 2378, 640, 2378, 631, 2377, 622, 2375, 609, 2368, 598, 2366, 595, 2360, 586, 2355, 579, 2349, 569, 2348, 567, 2346, 562, 2345, 552, 2338, 555, 2334, 547, 2341, 540, 2351, 534, 2354, 528, 2377, 504, 2375, 477, 2373, 458, 2382, 443, 2393, 433, 2398, 430, 2398, 392, 2397, 350, 2388, 327, 2391, 300, 2395, 274, 2375, 257, 2371, 256, 2367, 254, 2366, 254, 2366, 254, 2366, 260, 2366, 263, 2359, 281, 2349, 289, Q, 2345, 308, 2335, 319, Z]],
      "label": "Tunu",
      "shortLabel": "EG",
      "labelPosition": [195.5, 259.4],
      "labelAlignment": [CEN, MID]
    },
    "03": {
      "outlines": [[M, 752, 2975, Q, 750, 2980, 736, 2979, 727, 2985, 717, 2997, 705, 3004, 690, 3015, 689, 3028, 681, 3040, 680, 3063, 679, 3088, 678, 3096, 679, 3110, 681, 3113, 683, 3118, 685, 3123, 690, 3126, 684, 3134, 688, 3140, 690, 3143, 697, 3151, 698, 3167, 698, 3183, 698, 3186, 702, 3194, 709, 3203, 721, 3211, 728, 3213, 731, 3218, 737, 3224, 747, 3232, 751, 3238, 760, 3238, 771, 3238, 788, 3237, 801, 3236, 820, 3235, 828, 3235, 833, 3228, 836, 3224, 840, 3223, 851, 3223, 854, 3210, 861, 3205, 873, 3203, 875, 3194, 876, 3186, 877, 3158, 868, 3128, 861, 3107, 860, 3083, 860, 3072, 852, 3061, 848, 3059, 843, 3054, 836, 3053, 833, 3050, 828, 3046, 823, 3039, 816, 3038, 814, 3029, 812, 3027, 805, 3021, 802, 3016, 798, 3013, 794, 3010, 791, 3005, 788, 2999, 785, 2996, 779, 2992, 769, 2982, Q, 765, 2974, 752, 2975, Z], [M, 1468, 1311, L, 791, 1854, 791, 1855, Q, 792, 1858, 792, 1862, 791, 1911, 791, 1960, 791, 2009, 791, 2057, 788, 2065, 789, 2077, 790, 2092, 786, 2104, 786, 2110, 786, 2115, 786, 2130, 785, 2145, 782, 2182, 782, 2220, 783, 2266, 784, 2311, 785, 2320, 781, 2323, 773, 2327, 769, 2335, 768, 2353, 767, 2373, 766, 2382, 766, 2390, 766, 2396, 765, 2403, 763, 2411, 759, 2420, 755, 2429, 752, 2433, 748, 2439, 747, 2445, 743, 2460, 734, 2473, 734, 2482, 730, 2490, 725, 2500, 722, 2515, 720, 2519, 714, 2530, 709, 2554, 710, 2580, 711, 2629, 712, 2680, 714, 2695, 721, 2708, 725, 2715, 727, 2724, 744, 2715, 758, 2712, 762, 2712, 766, 2711, 773, 2709, 784, 2707, 790, 2705, 796, 2705, 808, 2705, 821, 2704, 826, 2704, 829, 2701, 833, 2698, 837, 2692, 841, 2687, 849, 2681, 855, 2675, 861, 2679, 872, 2686, 877, 2700, 881, 2715, 882, 2728, 894, 2751, 905, 2766, 905, 2775, 910, 2785, 911, 2789, 912, 2795, 912, 2803, 915, 2808, 919, 2816, 920, 2828, 921, 2830, 921, 2838, 900, 2828, 890, 2809, 877, 2804, 866, 2795, 862, 2792, 858, 2791, 853, 2790, 846, 2789, 813, 2788, 781, 2788, 778, 2788, 773, 2791, 763, 2794, 758, 2800, 758, 2815, 764, 2822, 771, 2831, 774, 2840, 783, 2852, 786, 2860, 788, 2865, 794, 2870, 799, 2875, 806, 2885, 814, 2892, 818, 2894, 822, 2897, 825, 2901, 831, 2909, 836, 2915, 840, 2918, 842, 2921, 857, 2937, 873, 2953, 878, 2958, 885, 2960, 898, 2966, 906, 2972, 910, 2974, 916, 2977, 924, 2981, 931, 2987, 937, 2993, 938, 2995, 943, 3006, 948, 3013, 953, 3020, 959, 3027, 962, 3030, 961, 3035, 963, 3050, 962, 3073, 961, 3089, 960, 3109, 953, 3114, 942, 3128, 941, 3132, 940, 3135, 938, 3146, 938, 3158, 938, 3170, 937, 3188, 934, 3205, 934, 3223, 934, 3232, 930, 3240, 921, 3254, 924, 3277, 928, 3283, 928, 3290, 927, 3296, 921, 3297, 917, 3298, 913, 3298, 900, 3299, 888, 3295, 883, 3294, 878, 3293, 870, 3292, 864, 3289, 854, 3285, 843, 3285, 831, 3285, 813, 3287, 799, 3287, 787, 3294, 784, 3298, 781, 3300, 772, 3306, 768, 3315, 764, 3324, 757, 3331, 753, 3334, 750, 3343, 750, 3348, 744, 3350, 743, 3354, 741, 3360, 738, 3365, 737, 3373, 734, 3386, 729, 3398, 728, 3400, 726, 3408, 725, 3419, 711, 3431, 706, 3439, 702, 3450, 702, 3461, 693, 3472, 683, 3479, 677, 3490, 674, 3499, 671, 3510, 670, 3516, 665, 3520, 657, 3527, 653, 3538, 652, 3542, 651, 3545, 647, 3561, 652, 3576, 653, 3586, 657, 3588, 661, 3589, 664, 3592, 670, 3600, 669, 3613, 668, 3624, 668, 3635, 668, 3658, 667, 3680, 666, 3699, 661, 3710, 656, 3726, 653, 3738, 650, 3746, 644, 3753, 636, 3762, 638, 3778, 638, 3788, 640, 3797, 641, 3802, 642, 3806, 644, 3831, 645, 3848, 646, 3871, 645, 3895, 644, 3910, 654, 3922, 657, 3941, 660, 3950, 665, 3964, 668, 3978, 669, 3990, 673, 3991, 689, 3992, 689, 4005, 688, 4018, 689, 4030, 693, 4044, 696, 4053, 697, 4056, 698, 4058, 690, 4060, 688, 4066, 688, 4069, 688, 4073, 688, 4122, 688, 4171, 688, 4188, 687, 4206, 685, 4230, 686, 4256, 684, 4267, 698, 4264, 704, 4263, 711, 4264, 719, 4266, 722, 4268, 723, 4301, 722, 4331, 718, 4337, 716, 4339, 712, 4343, 712, 4348, 711, 4377, 713, 4406, 713, 4412, 715, 4418, 718, 4426, 721, 4433, 732, 4451, 742, 4469, 745, 4473, 746, 4478, 749, 4489, 751, 4501, 752, 4505, 752, 4508, 753, 4520, 758, 4526, 761, 4533, 766, 4544, 768, 4548, 769, 4553, 775, 4567, 774, 4581, 773, 4606, 774, 4631, 774, 4645, 777, 4658, 778, 4662, 778, 4666, 776, 4681, 783, 4693, 787, 4701, 787, 4711, 801, 4735, 806, 4758, 807, 4763, 809, 4767, 812, 4775, 812, 4776, 813, 4786, 815, 4796, 817, 4806, 825, 4814, 827, 4822, 830, 4826, 835, 4832, 834, 4841, 833, 4849, 837, 4854, 853, 4868, 862, 4890, 863, 4895, 866, 4897, 872, 4902, 874, 4913, 885, 4930, 891, 4941, 893, 4946, 896, 4953, 898, 4968, 897, 4981, 896, 4996, 903, 5008, 907, 5015, 908, 5026, 908, 5039, 911, 5051, 912, 5054, 915, 5059, 919, 5067, 919, 5078, 919, 5084, 923, 5089, 931, 5100, 929, 5116, 929, 5123, 932, 5129, 940, 5141, 947, 5149, 953, 5148, 968, 5150, 974, 5151, 981, 5152, 985, 5152, 988, 5153, 1004, 5157, 1021, 5156, 1031, 5156, 1041, 5155, 1060, 5149, 1076, 5147, 1082, 5146, 1088, 5146, 1101, 5146, 1113, 5146, 1120, 5163, 1133, 5174, 1136, 5177, 1139, 5183, 1142, 5188, 1146, 5193, 1164, 5213, 1176, 5233, 1182, 5243, 1192, 5252, 1192, 5252, 1192, 5253, 1195, 5256, 1197, 5263, 1202, 5268, 1204, 5270, 1208, 5276, 1208, 5278, 1206, 5292, 1213, 5296, 1230, 5301, 1240, 5306, 1244, 5308, 1246, 5313, 1249, 5321, 1260, 5327, 1267, 5330, 1271, 5332, 1282, 5336, 1286, 5338, 1294, 5341, 1298, 5344, 1300, 5352, 1305, 5357, 1322, 5358, 1340, 5356, 1350, 5351, 1353, 5348, 1361, 5342, 1359, 5328, 1357, 5318, 1360, 5313, 1362, 5307, 1364, 5306, 1375, 5301, 1381, 5293, 1389, 5283, 1399, 5274, 1402, 5271, 1405, 5268, 1411, 5260, 1414, 5253, 1415, 5250, 1416, 5248, 1420, 5234, 1420, 5218, 1420, 5205, 1425, 5202, 1428, 5185, 1428, 5171, 1428, 5156, 1429, 5141, 1431, 5137, 1433, 5133, 1417, 5135, 1405, 5131, 1395, 5128, 1383, 5128, 1370, 5128, 1356, 5127, 1352, 5126, 1348, 5123, 1340, 5115, 1329, 5107, 1306, 5096, 1291, 5082, 1284, 5063, 1277, 5054, 1273, 5024, 1285, 5012, 1287, 5005, 1287, 5003, 1288, 4996, 1292, 4993, 1299, 4978, 1304, 4968, 1313, 4952, 1324, 4944, 1331, 4938, 1343, 4931, L, 1370, 4017, Q, 1371, 4011, 1373, 4006, 1373, 4005, 1374, 4004, L, 1423, 2676, Z]],
      "label": "Kitaa",
      "shortLabel": "VG",
      "labelPosition": [99.3, 373.4],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'greenland',
  type: 'maps'
};

/***/ })

/******/ });
}));
