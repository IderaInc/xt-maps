
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(5);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 5:
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
 * @id fusionmaps.NorthCentralSriLankaProvince.1.02-11-2019 08:03:10
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
  "name": "NorthCentralSriLankaProvince",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 500,
  "baseHeight": 424,
  "baseScaleFactor": 10,
  "firstEntity": "LK.NC.AD",
  "entities": {
    "LK.NC.AD": {
      "outlines": [[M, 3266, 317, Q, 3258, 306, 3256, 299, 3254, 291, 3255, 275, L, 3256, 260, 3181, 215, Q, 3157, 200, 3141, 188, 3121, 171, 3106, 159, 3099, 152, 3075, 123, 3063, 109, 3047, 109, 3034, 109, 3026, 111, 3016, 113, 3009, 113, 2991, 113, 2973, 95, 2958, 79, 2948, 76, 2946, 74, 2944, 73, 2921, 61, 2911, 49, 2903, 39, 2884, 39, 2867, 39, 2864, 40, 2857, 43, 2844, 60, 2834, 70, 2820, 70, 2804, 69, 2799, 73, 2782, 83, 2749, 85, 2714, 86, 2701, 87, 2694, 97, 2689, 99, 2666, 117, 2651, 127, 2570, 179, 2567, 182, 2558, 186, 2523, 194, 2489, 201, 2480, 207, 2466, 213, 2455, 214, 2443, 214, 2435, 214, 2424, 213, 2414, 224, 2403, 236, 2400, 236, 2380, 237, 2353, 236, 2323, 234, 2308, 233, 2291, 232, 2285, 232, 2275, 232, 2269, 236, 2257, 245, 2247, 249, 2240, 251, 2225, 251, L, 2225, 307, Q, 2230, 309, 2250, 328, 2262, 340, 2281, 335, 2313, 328, 2324, 342, 2331, 351, 2331, 373, L, 2330, 401, Q, 2330, 404, 2330, 407, 2333, 455, 2377, 464, 2395, 467, 2457, 509, 2457, 526, 2405, 525, 2354, 525, 2354, 547, 2354, 558, 2356, 578, 2357, 595, 2348, 606, 2330, 621, 2321, 627, 2305, 641, 2307, 658, L, 2288, 658, Q, 2284, 652, 2285, 644, L, 2279, 638, Q, 2266, 606, 2260, 636, 2256, 662, 2245, 679, 2239, 690, 2201, 722, 2184, 737, 2154, 780, 2147, 788, 2127, 800, 2107, 811, 2102, 820, 2089, 836, 2069, 880, L, 2057, 906, Q, 2054, 912, 2026, 917, 2023, 919, 1971, 960, 1961, 968, 1917, 968, 1885, 968, 1876, 962, 1860, 953, 1820, 946, 1804, 943, 1791, 938, 1779, 931, 1770, 926, 1758, 922, 1748, 915, 1746, 909, 1744, 906, 1742, 899, 1735, 898, 1727, 913, 1727, 920, L, 1714, 920, 1671, 916, Q, 1661, 915, 1648, 929, 1633, 945, 1628, 947, 1615, 954, 1598, 982, 1577, 1019, 1566, 1029, 1428, 1162, 1428, 1232, 1428, 1260, 1441, 1265, 1453, 1270, 1453, 1283, 1453, 1297, 1432, 1297, 1409, 1295, 1403, 1295, 1393, 1295, 1383, 1314, 1374, 1336, 1368, 1338, 1350, 1337, 1340, 1338, 1324, 1339, 1324, 1365, 1324, 1379, 1316, 1391, 1310, 1401, 1303, 1401, 1250, 1390, 1238, 1375, 1236, 1373, 1202, 1342, 1180, 1321, 1179, 1309, 1172, 1247, 1134, 1236, 1120, 1232, 1119, 1225, 1115, 1211, 1114, 1209, 1110, 1204, 1102, 1200, 1089, 1194, 1083, 1190, 1058, 1174, 1046, 1167, 1027, 1155, 1019, 1146, 1012, 1138, 1012, 1111, 1012, 1099, 1005, 1094, 995, 1088, 992, 1081, 986, 1072, 982, 1066, 974, 1054, 974, 1042, 977, 1012, 971, 1004, 964, 994, 932, 975, 911, 962, 914, 944, L, 898, 944, Q, 896, 964, 868, 985, 841, 1005, 824, 1007, 808, 1008, 738, 1033, 704, 1043, 687, 1047, 656, 1056, 637, 1067, 625, 1073, 585, 1075, 578, 1075, 524, 1075, 485, 1079, 464, 1079, 428, 1080, 411, 1064, 399, 1050, 363, 1051, 333, 1052, 322, 1025, L, 277, 1025, 277, 1068, Q, 286, 1079, 296, 1104, 306, 1128, 314, 1138, 319, 1143, 324, 1179, 326, 1186, 336, 1192, 343, 1196, 343, 1209, 343, 1213, 336, 1218, 330, 1224, 329, 1233, 328, 1242, 322, 1250, 317, 1256, 317, 1261, 317, 1273, 331, 1297, 343, 1321, 343, 1347, L, 343, 1442, Q, 340, 1456, 338, 1489, L, 335, 1490, Q, 330, 1496, 324, 1501, 322, 1502, 322, 1513, 322, 1524, 331, 1531, 339, 1540, 339, 1558, 339, 1575, 331, 1578, 322, 1581, 322, 1592, 322, 1604, 324, 1626, 324, 1645, 319, 1654, 313, 1664, 306, 1687, 298, 1707, 295, 1710, 292, 1712, 271, 1727, 249, 1740, 239, 1739, 236, 1757, 236, 1775, L, 222, 1801, Q, 211, 1823, 186, 1851, 158, 1883, 131, 1900, 117, 1908, 71, 1918, 68, 1919, 66, 1931, 64, 1944, 61, 1950, 55, 1959, 47, 1960, 43, 1961, 43, 1969, 43, 2002, 59, 2014, 91, 2043, 112, 2070, 122, 2079, 146, 2094, 169, 2113, 169, 2133, 169, 2140, 163, 2143, 157, 2146, 157, 2155, 157, 2164, 169, 2168, 185, 2176, 189, 2179, 197, 2186, 197, 2222, L, 214, 2270, Q, 218, 2282, 229, 2296, 239, 2305, 240, 2318, 241, 2333, 239, 2372, 239, 2409, 248, 2424, 252, 2430, 258, 2469, 261, 2492, 287, 2492, 306, 2492, 310, 2485, 315, 2477, 348, 2472, 355, 2471, 358, 2464, 360, 2460, 365, 2447, L, 404, 2446, Q, 442, 2446, 461, 2458, 499, 2483, 535, 2497, 539, 2499, 560, 2510, 580, 2521, 594, 2526, 604, 2528, 629, 2545, 632, 2546, 649, 2549, 660, 2551, 667, 2557, 703, 2594, 720, 2596, 739, 2598, 755, 2612, 778, 2633, 780, 2634, 843, 2671, 904, 2677, L, 905, 2677, Q, 923, 2677, 954, 2674, 970, 2674, 995, 2700, 1020, 2726, 1030, 2725, 1051, 2723, 1069, 2736, 1088, 2751, 1113, 2747, 1120, 2746, 1191, 2789, 1263, 2833, 1272, 2833, 1289, 2833, 1324, 2826, 1349, 2826, 1355, 2835, 1372, 2858, 1386, 2870, 1401, 2883, 1418, 2903, 1423, 2909, 1435, 2911, 1451, 2913, 1454, 2914, 1467, 2918, 1489, 2939, 1511, 2959, 1523, 2962, 1549, 2969, 1589, 2994, L, 1651, 2994, Q, 1668, 2994, 1684, 3004, 1702, 3018, 1713, 3020, 1749, 3028, 1745, 3070, 1742, 3089, 1755, 3100, 1767, 3113, 1767, 3129, 1767, 3149, 1755, 3152, 1742, 3155, 1742, 3165, 1742, 3171, 1755, 3181, 1766, 3190, 1767, 3210, 1767, 3224, 1781, 3270, 1787, 3310, 1821, 3315, 1859, 3321, 1867, 3335, 1904, 3421, 1920, 3445, L, 1944, 3491, Q, 1970, 3508, 1982, 3531, 1986, 3588, 1995, 3628, 2002, 3656, 2002, 3701, 2002, 3704, 2002, 3707, 2029, 3701, 2081, 3699, 2102, 3697, 2111, 3695, 2115, 3694, 2125, 3681, 2132, 3673, 2140, 3677, L, 2142, 3664, 2166, 3664, Q, 2170, 3683, 2171, 3685, 2173, 3688, 2185, 3688, L, 2199, 3688, Q, 2205, 3687, 2210, 3682, 2222, 3665, 2228, 3662, 2257, 3651, 2265, 3638, 2269, 3631, 2284, 3619, 2297, 3610, 2298, 3604, 2298, 3600, 2310, 3586, 2322, 3573, 2319, 3559, L, 2438, 3559, Q, 2448, 3559, 2458, 3551, 2457, 3544, 2457, 3539, 2458, 3530, 2465, 3526, L, 2483, 3515, Q, 2487, 3511, 2495, 3505, 2507, 3497, 2510, 3498, 2527, 3500, 2534, 3496, 2545, 3491, 2545, 3473, 2545, 3460, 2553, 3449, 2561, 3437, 2561, 3429, 2559, 3395, 2574, 3386, 2585, 3380, 2593, 3373, 2606, 3363, 2606, 3352, L, 2604, 3316, Q, 2610, 3295, 2630, 3272, 2636, 3266, 2649, 3260, 2668, 3253, 2682, 3244, 2686, 3241, 2703, 3235, 2720, 3229, 2734, 3219, 2752, 3204, 2759, 3198, 2772, 3187, 2777, 3180, 2780, 3176, 2787, 3169, 2793, 3165, 2791, 3160, 2791, 3136, 2797, 3130, 2804, 3119, 2817, 3114, 2824, 3110, 2845, 3104, 2852, 3100, 2861, 3094, 2867, 3089, 2872, 3088, L, 2900, 3082, Q, 2910, 3079, 2924, 3068, 2927, 3065, 2932, 3054, 2934, 3047, 2941, 3047, 2952, 3047, 2955, 3052, 2961, 3036, 2961, 2968, L, 2961, 2916, Q, 2962, 2907, 2962, 2903, 2963, 2894, 2957, 2889, 2947, 2881, 2943, 2867, 2930, 2865, 2924, 2864, 2915, 2862, 2911, 2856, 2896, 2848, 2896, 2845, L, 2896, 2753, Q, 2898, 2743, 2909, 2720, 2916, 2705, 2916, 2689, 2912, 2657, 2912, 2641, 2912, 2631, 2926, 2606, 2940, 2583, 2937, 2563, 2933, 2540, 2937, 2518, 2941, 2492, 2955, 2486, L, 2978, 2456, Q, 2986, 2450, 2991, 2446, 2999, 2439, 3001, 2431, 3003, 2418, 3003, 2345, 3000, 2315, 3000, 2301, 3001, 2279, 3014, 2265, 3013, 2233, 3014, 2221, 3015, 2198, 3032, 2191, 3035, 2190, 3038, 2183, 3042, 2178, 3045, 2178, 3053, 2176, 3061, 2178, 3071, 2179, 3080, 2171, 3085, 2168, 3097, 2159, 3103, 2154, 3138, 2154, 3157, 2154, 3197, 2155, 3269, 2153, 3293, 2155, 3299, 2155, 3309, 2147, 3320, 2140, 3327, 2140, 3343, 2139, 3347, 2138, 3358, 2134, 3357, 2125, 3356, 2116, 3365, 2108, 3377, 2095, 3378, 2094, 3379, 2090, 3378, 2075, 3378, 2066, 3385, 2058, 3396, 2045, 3402, 2023, 3405, 2011, 3418, 2009, 3436, 2007, 3441, 2004, 3439, 2001, 3439, 1995, 3439, 1985, 3443, 1980, 3448, 1974, 3452, 1960, 3457, 1927, 3457, 1917, 3457, 1893, 3440, 1874, 3433, 1867, 3432, 1852, 3430, 1839, 3424, 1833, L, 3424, 1797, Q, 3442, 1793, 3459, 1774, 3477, 1755, 3481, 1732, 3485, 1703, 3502, 1686, 3523, 1662, 3527, 1647, 3528, 1645, 3530, 1643, 3542, 1620, 3542, 1609, 3541, 1592, 3542, 1587, 3545, 1574, 3557, 1575, 3561, 1575, 3577, 1576, 3591, 1574, 3591, 1559, 3591, 1541, 3596, 1536, 3601, 1532, 3601, 1521, 3603, 1506, 3599, 1499, 3589, 1495, 3589, 1489, L, 3584, 1461, Q, 3578, 1457, 3574, 1455, 3566, 1450, 3557, 1451, 3539, 1451, 3523, 1434, 3506, 1418, 3502, 1413, 3493, 1400, 3497, 1383, 3498, 1375, 3488, 1356, 3480, 1337, 3480, 1327, 3479, 1305, 3450, 1262, 3414, 1216, 3402, 1200, 3367, 1164, 3350, 1147, 3324, 1120, 3325, 1095, 3324, 1092, 3324, 1090, 3323, 1080, 3322, 1075, 3320, 1065, 3312, 1056, 3301, 1044, 3285, 1012, 3276, 998, 3272, 991, 3265, 981, 3265, 971, 3259, 961, 3257, 955, 3255, 951, 3256, 942, 3257, 935, 3257, 934, 3257, 910, 3262, 908, 3267, 906, 3304, 903, 3323, 901, 3316, 840, 3316, 813, 3314, 807, 3309, 797, 3288, 780, 3277, 771, 3270, 749, 3264, 726, 3261, 717, 3254, 698, 3228, 653, 3206, 615, 3199, 597, L, 3199, 596, Q, 3166, 524, 3166, 514, 3166, 502, 3175, 491, 3186, 480, 3188, 463, 3189, 447, 3212, 415, 3215, 411, 3244, 378, 3273, 345, 3273, 334, Q, 3273, 325, 3266, 317, Z]],
      "label": "Anuradhapura District",
      "shortLabel": "AD",
      "labelPosition": [202.9, 201.1],
      "labelAlignment": [CEN, MID],
      "nextId": "LK.NC.PR"
    },
    "LK.NC.PR": {
      "outlines": [[M, 4569, 2354, Q, 4569, 2356, 4556, 2365, 4548, 2369, 4549, 2373, 4549, 2376, 4551, 2383, L, 4551, 2439, Q, 4550, 2452, 4545, 2458, 4539, 2464, 4535, 2469, 4530, 2477, 4527, 2481, 4521, 2486, 4515, 2487, 4502, 2487, 4488, 2505, 4468, 2532, 4462, 2538, 4437, 2553, 4435, 2562, 4430, 2576, 4428, 2579, 4422, 2587, 4412, 2587, 4410, 2587, 4404, 2576, 4397, 2565, 4397, 2560, 4397, 2548, 4405, 2547, 4415, 2546, 4420, 2537, 4421, 2534, 4420, 2522, 4419, 2511, 4425, 2508, 4430, 2503, 4440, 2501, 4444, 2498, 4443, 2490, 4442, 2484, 4442, 2483, 4442, 2473, 4452, 2464, 4460, 2457, 4466, 2459, L, 4466, 2429, Q, 4464, 2419, 4438, 2403, 4416, 2389, 4421, 2365, 4427, 2337, 4408, 2328, 4399, 2324, 4399, 2314, 4402, 2302, 4400, 2293, 4393, 2274, 4368, 2267, 4354, 2263, 4318, 2263, L, 4277, 2272, Q, 4252, 2272, 4241, 2258, 4226, 2237, 4214, 2232, 4200, 2228, 4193, 2225, L, 4180, 2208, Q, 4173, 2201, 4156, 2200, 4139, 2200, 4138, 2200, 4130, 2200, 4116, 2209, 4100, 2221, 4093, 2222, 4048, 2223, 4040, 2223, 3977, 2232, 3954, 2206, 3947, 2200, 3936, 2200, 3920, 2201, 3918, 2200, 3911, 2187, 3907, 2185, 3899, 2181, 3879, 2181, 3864, 2181, 3861, 2190, 3856, 2200, 3832, 2200, 3813, 2200, 3807, 2195, 3800, 2186, 3798, 2184, 3795, 2181, 3783, 2182, 3749, 2184, 3705, 2182, 3682, 2183, 3672, 2183, 3657, 2182, 3652, 2167, 3651, 2163, 3644, 2163, 3637, 2163, 3634, 2157, 3628, 2139, 3626, 2134, L, 3626, 2124, Q, 3612, 2080, 3595, 2077, 3572, 2072, 3564, 2070, 3551, 2066, 3536, 2054, 3518, 2045, 3508, 2040, L, 3480, 2023, Q, 3469, 2013, 3451, 2010, 3443, 2009, 3441, 2004, 3436, 2007, 3418, 2009, 3405, 2011, 3402, 2023, 3396, 2045, 3385, 2058, 3378, 2066, 3378, 2075, 3379, 2090, 3378, 2094, 3377, 2095, 3365, 2108, 3356, 2116, 3357, 2125, 3358, 2134, 3347, 2138, 3343, 2139, 3327, 2140, 3320, 2140, 3309, 2147, 3299, 2155, 3293, 2155, 3269, 2153, 3197, 2155, 3157, 2154, 3138, 2154, 3103, 2154, 3097, 2159, 3085, 2168, 3080, 2171, 3071, 2179, 3061, 2178, 3053, 2176, 3045, 2178, 3042, 2178, 3038, 2183, 3035, 2190, 3032, 2191, 3015, 2198, 3014, 2221, 3013, 2233, 3014, 2265, 3001, 2279, 3000, 2301, 3000, 2315, 3003, 2345, 3003, 2418, 3001, 2431, 2999, 2439, 2991, 2446, 2986, 2450, 2978, 2456, L, 2955, 2486, Q, 2941, 2492, 2937, 2518, 2933, 2540, 2937, 2563, 2940, 2583, 2926, 2606, 2912, 2631, 2912, 2641, 2912, 2657, 2916, 2689, 2916, 2705, 2909, 2720, 2898, 2743, 2896, 2753, L, 2896, 2845, Q, 2896, 2848, 2911, 2856, 2915, 2862, 2924, 2864, 2930, 2865, 2943, 2867, 2947, 2881, 2957, 2889, 2963, 2894, 2962, 2903, 2962, 2907, 2961, 2916, L, 2961, 2968, Q, 2961, 3036, 2955, 3052, 2956, 3055, 2958, 3070, 2960, 3077, 2966, 3081, 2975, 3084, 2978, 3090, 2982, 3097, 2982, 3114, 2981, 3137, 2983, 3150, 2985, 3164, 2984, 3182, 2986, 3195, 3011, 3199, 3023, 3200, 3030, 3219, 3035, 3231, 3047, 3229, 3052, 3228, 3056, 3227, 3054, 3227, 3053, 3227, 3054, 3227, 3055, 3226, 3056, 3225, 3056, 3227, 3070, 3227, 3090, 3224, 3116, 3224, 3122, 3218, 3130, 3207, 3135, 3194, 3137, 3186, 3145, 3185, 3156, 3184, 3181, 3185, L, 3219, 3185, 3222, 3194, Q, 3224, 3197, 3228, 3199, 3235, 3202, 3235, 3209, L, 3234, 3234, Q, 3233, 3240, 3225, 3243, 3215, 3246, 3214, 3248, 3211, 3251, 3208, 3269, 3204, 3285, 3198, 3289, 3181, 3299, 3179, 3300, 3169, 3308, 3168, 3320, 3162, 3352, 3162, 3369, 3157, 3380, 3156, 3402, 3154, 3406, 3148, 3416, 3143, 3426, 3144, 3431, 3145, 3446, 3140, 3461, 3133, 3481, 3131, 3493, 3124, 3541, 3124, 3573, 3124, 3595, 3120, 3614, 3120, 3615, 3112, 3632, 3106, 3643, 3106, 3650, 3106, 3665, 3110, 3678, 3110, 3695, 3091, 3717, 3085, 3726, 3076, 3726, 3065, 3725, 3055, 3726, 3047, 3727, 3034, 3731, 3021, 3735, 3017, 3735, 3001, 3736, 3001, 3764, 3001, 3778, 3011, 3781, 3022, 3785, 3022, 3804, L, 3022, 3814, 3007, 3815, Q, 3001, 3817, 3004, 3826, 3007, 3835, 3013, 3848, 3018, 3862, 3018, 3864, 3016, 3867, 3020, 3871, 3025, 3882, 3025, 3886, 3025, 3889, 3013, 3901, 3002, 3912, 3002, 3923, 3002, 3927, 3011, 3946, 3021, 3964, 3020, 3974, 3015, 4006, 3018, 4025, 3021, 4042, 3042, 4070, 3061, 4097, 3065, 4118, 3065, 4125, 3072, 4128, 3081, 4133, 3083, 4142, 3084, 4149, 3083, 4160, 3084, 4171, 3090, 4177, 3101, 4193, 3161, 4193, 3208, 4193, 3218, 4189, 3243, 4181, 3259, 4145, 3267, 4124, 3271, 4119, 3281, 4103, 3296, 4100, 3301, 4098, 3314, 4086, 3325, 4073, 3340, 4071, 3341, 4104, 3388, 4151, L, 3397, 4151, Q, 3395, 4138, 3415, 4123, 3436, 4106, 3437, 4097, 3435, 4077, 3436, 4067, 3438, 4051, 3459, 4046, L, 3487, 4038, Q, 3503, 4035, 3527, 4035, 3529, 4035, 3541, 4027, 3553, 4019, 3557, 4018, 3567, 4015, 3598, 4015, 3628, 4015, 3650, 4017, 3662, 4019, 3689, 4022, 3704, 4022, 3726, 4016, 3728, 4016, 3730, 4015, 3760, 4006, 3767, 4005, 3785, 4001, 3797, 3985, 3801, 3978, 3815, 3977, 3822, 3976, 3833, 3977, 3963, 3980, 3963, 3983, 4019, 3983, 4039, 3959, 4059, 3935, 4074, 3935, 4096, 3935, 4114, 3956, 4116, 3958, 4154, 4012, 4168, 4033, 4200, 4049, 4217, 4059, 4254, 4073, 4282, 4086, 4308, 4105, 4317, 4109, 4338, 4115, 4359, 4120, 4364, 4124, 4391, 4137, 4436, 4154, 4477, 4169, 4481, 4169, 4494, 4169, 4501, 4166, 4515, 4169, 4529, 4152, 4542, 4133, 4546, 4129, 4575, 4106, 4591, 4092, 4590, 4079, 4600, 4061, 4613, 4041, 4613, 4040, 4615, 4027, 4615, 3998, 4614, 3971, 4614, 3969, L, 4614, 3929, Q, 4614, 3904, 4606, 3890, 4591, 3866, 4590, 3851, 4588, 3834, 4587, 3831, 4585, 3825, 4576, 3816, 4561, 3783, 4561, 3781, 4558, 3775, 4552, 3766, 4544, 3754, 4542, 3750, L, 4532, 3738, Q, 4527, 3730, 4526, 3722, L, 4522, 3686, Q, 4527, 3680, 4527, 3644, L, 4522, 3594, Q, 4522, 3584, 4533, 3572, 4544, 3560, 4544, 3537, 4545, 3534, 4546, 3521, 4547, 3514, 4553, 3502, 4564, 3480, 4565, 3468, 4564, 3443, 4564, 3432, 4565, 3414, 4569, 3407, 4575, 3395, 4585, 3382, 4591, 3371, 4594, 3354, 4594, 3344, 4595, 3340, 4597, 3332, 4604, 3328, 4622, 3318, 4626, 3310, 4633, 3291, 4638, 3280, 4646, 3263, 4659, 3262, 4669, 3259, 4688, 3249, 4703, 3242, 4726, 3243, L, 4783, 3243, Q, 4791, 3242, 4827, 3237, 4852, 3235, 4880, 3229, 4901, 3224, 4926, 3223, 4936, 3221, 4949, 3219, 4955, 3215, 4955, 3203, 4955, 3194, 4954, 3191, 4953, 3189, 4946, 3181, 4930, 3174, 4929, 3169, 4924, 3152, 4917, 3144, 4915, 3142, 4897, 3128, 4890, 3121, 4887, 3113, 4884, 3104, 4883, 3101, 4874, 3087, 4865, 3081, 4856, 3074, 4855, 3059, 4855, 3039, 4853, 3028, 4852, 3018, 4846, 3009, 4840, 3000, 4839, 2991, 4837, 2982, 4827, 2965, 4819, 2953, 4820, 2943, L, 4819, 2711, 4814, 2686, Q, 4813, 2681, 4807, 2678, 4802, 2676, 4801, 2669, 4795, 2628, 4796, 2567, 4799, 2504, 4798, 2480, 4796, 2469, 4795, 2462, 4794, 2450, 4788, 2442, 4785, 2439, 4783, 2426, L, 4782, 2413, Q, 4782, 2393, 4783, 2391, 4789, 2383, 4797, 2363, L, 4797, 2180, 4782, 2171, Q, 4781, 2161, 4760, 2160, 4738, 2158, 4721, 2157, 4702, 2155, 4690, 2161, 4679, 2166, 4664, 2182, 4658, 2188, 4648, 2190, 4637, 2194, 4635, 2195, 4621, 2202, 4614, 2228, 4613, 2231, 4596, 2259, 4587, 2275, 4590, 2297, 4591, 2314, 4583, 2321, 4575, 2326, 4572, 2338, Q, 4571, 2344, 4569, 2354, Z]],
      "label": "Polonnaruwa District",
      "shortLabel": "PR",
      "labelPosition": [382.2, 309.8],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'northcentralsrilankaprovince',
  type: 'maps'
};

/***/ })

/******/ });
}));
