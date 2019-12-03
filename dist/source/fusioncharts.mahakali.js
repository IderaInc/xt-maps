
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
/******/ 	return __webpack_require__(__webpack_require__.s = 538);
/******/ })
/************************************************************************/
/******/ ({

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(539);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 539:
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
 * @id fusionmaps.Mahakali.1.01-17-2017 02:22:27
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
  "name": "Mahakali",
  "revision": 1,
  "standaloneInit": true,
  "baseWidth": 390,
  "baseHeight": 700,
  "baseScaleFactor": 10,
  "entities": {
    "NP.MA.BT": {
      "outlines": [[M, 2512, 2149, Q, 2505, 2145, 2500, 2156, 2499, 2159, 2497, 2160, 2494, 2162, 2482, 2162, 2458, 2160, 2433, 2162, 2419, 2160, 2412, 2160, 2401, 2160, 2399, 2166, 2399, 2168, 2397, 2171, 2397, 2174, 2394, 2175, L, 2335, 2171, Q, 2333, 2171, 2323, 2180, 2310, 2190, 2306, 2192, 2297, 2195, 2294, 2196, 2286, 2198, 2281, 2205, 2277, 2208, 2258, 2217, 2254, 2219, 2249, 2227, 2245, 2233, 2240, 2233, 2233, 2233, 2222, 2225, 2212, 2217, 2210, 2216, 2198, 2210, 2193, 2208, L, 2185, 2206, Q, 2183, 2203, 2179, 2198, 2173, 2190, 2160, 2190, 2146, 2191, 2139, 2190, 2119, 2190, 2110, 2190, 2107, 2190, 2102, 2190, 2097, 2190, 2088, 2191, 2079, 2192, 2070, 2196, 2060, 2201, 2046, 2199, 2041, 2199, 2031, 2201, 2021, 2202, 2016, 2202, 2010, 2202, 1998, 2207, 1984, 2212, 1977, 2212, 1968, 2211, 1964, 2210, 1958, 2210, 1953, 2214, 1944, 2226, 1940, 2230, 1914, 2250, 1907, 2258, L, 1876, 2288, Q, 1856, 2308, 1846, 2319, 1837, 2330, 1827, 2340, 1820, 2347, 1803, 2358, 1800, 2360, 1798, 2361, 1790, 2367, 1772, 2379, 1753, 2392, 1745, 2396, 1733, 2400, 1720, 2412, L, 1705, 2424, Q, 1689, 2436, 1689, 2437, 1666, 2459, 1658, 2462, 1655, 2463, 1640, 2464, 1631, 2465, 1625, 2471, 1616, 2478, 1606, 2478, 1594, 2478, 1590, 2480, 1583, 2484, 1572, 2491, 1566, 2494, 1557, 2497, 1543, 2498, 1538, 2499, 1530, 2500, 1520, 2510, 1513, 2517, 1502, 2518, 1492, 2517, 1487, 2518, L, 1471, 2525, 1452, 2528, Q, 1431, 2529, 1416, 2532, 1413, 2532, 1396, 2542, 1380, 2551, 1375, 2551, 1365, 2551, 1356, 2556, 1342, 2564, 1337, 2565, 1322, 2570, 1301, 2569, 1276, 2569, 1267, 2570, L, 1267, 2571, Q, 1267, 2593, 1274, 2595, 1280, 2595, 1280, 2619, 1280, 2621, 1279, 2644, 1277, 2650, 1261, 2660, 1256, 2663, 1243, 2684, 1241, 2687, 1231, 2693, 1224, 2699, 1228, 2706, 1230, 2714, 1223, 2718, 1219, 2721, 1212, 2720, 1198, 2718, 1191, 2731, 1191, 2732, 1180, 2736, 1173, 2739, 1174, 2746, L, 1174, 2771, 1134, 2772, 1120, 2781, Q, 1116, 2796, 1115, 2802, 1113, 2808, 1100, 2808, 1086, 2807, 1074, 2806, 1062, 2804, 1059, 2810, 1056, 2815, 1055, 2816, 1054, 2817, 1052, 2828, 1050, 2839, 1050, 2846, 1050, 2867, 1076, 2882, 1089, 2889, 1089, 2898, L, 1089, 2917, Q, 1089, 2923, 1086, 2925, 1082, 2928, 1080, 2934, L, 1076, 2944, Q, 1073, 2948, 1067, 2951, 1061, 2958, 1054, 2972, 1050, 2976, 1043, 2977, 1033, 2978, 1032, 2979, 1030, 2980, 1025, 2987, 1021, 2994, 1016, 2994, 1004, 2993, 998, 2993, 987, 2993, 985, 2998, 980, 3008, 967, 3019, 954, 3029, 952, 3038, 946, 3056, 942, 3062, 935, 3071, 921, 3074, 906, 3073, 898, 3073, 883, 3073, 880, 3084, 880, 3085, 878, 3095, 878, 3100, 869, 3103, 866, 3104, 864, 3113, 863, 3117, 861, 3120, 860, 3121, 854, 3124, 843, 3128, 842, 3141, 842, 3147, 843, 3162, 842, 3163, 843, 3165, 843, 3171, 852, 3177, 867, 3187, 871, 3193, 880, 3206, 887, 3220, 892, 3228, 904, 3229, L, 904, 3236, 878, 3236, Q, 872, 3233, 847, 3233, 823, 3233, 822, 3233, 817, 3233, 817, 3229, 817, 3224, 817, 3223, 815, 3219, 805, 3219, L, 784, 3219, Q, 775, 3219, 773, 3224, 771, 3228, 769, 3237, 766, 3245, 748, 3245, 726, 3244, 716, 3245, 706, 3245, 703, 3248, 701, 3250, 697, 3255, 691, 3259, 691, 3281, L, 691, 3311, Q, 689, 3321, 684, 3323, 680, 3325, 680, 3333, L, 682, 3390, Q, 682, 3398, 679, 3400, 676, 3400, 676, 3405, L, 676, 3412, Q, 679, 3412, 695, 3417, 697, 3417, 702, 3418, 703, 3419, 704, 3422, 706, 3424, 708, 3426, 722, 3435, 724, 3437, 724, 3438, 735, 3452, 742, 3462, 754, 3464, 768, 3465, 771, 3469, 778, 3476, 789, 3478, 796, 3479, 807, 3479, L, 807, 3502, 802, 3542, Q, 800, 3544, 799, 3546, 798, 3548, 797, 3550, 795, 3552, 791, 3559, 787, 3565, 787, 3573, 788, 3577, 789, 3586, L, 789, 3608, Q, 789, 3611, 793, 3615, 797, 3619, 798, 3624, L, 798, 3641, Q, 797, 3644, 803, 3648, 809, 3652, 808, 3657, 807, 3665, 808, 3677, 808, 3683, 808, 3694, 815, 3698, 832, 3707, L, 848, 3722, 877, 3757, Q, 884, 3766, 889, 3769, 895, 3773, 910, 3775, 915, 3776, 930, 3777, 944, 3778, 945, 3784, 946, 3788, 946, 3794, 946, 3800, 946, 3802, L, 951, 3809, 951, 3819, Q, 951, 3832, 950, 3836, 948, 3839, 944, 3843, 941, 3847, 941, 3852, L, 942, 3861, Q, 946, 3860, 956, 3855, 956, 3854, 959, 3848, 961, 3843, 964, 3842, 973, 3835, 978, 3831, 987, 3825, 996, 3824, 998, 3824, 1004, 3819, 1011, 3815, 1014, 3814, 1019, 3812, 1033, 3813, 1043, 3813, 1048, 3806, 1058, 3795, 1061, 3792, 1072, 3786, 1077, 3783, 1085, 3777, 1086, 3769, 1085, 3762, 1093, 3754, 1102, 3746, 1107, 3740, 1128, 3722, 1132, 3716, 1134, 3713, 1145, 3707, 1151, 3703, 1154, 3700, 1156, 3698, 1157, 3698, 1163, 3693, 1173, 3683, 1178, 3679, 1200, 3670, 1202, 3670, 1213, 3662, 1220, 3657, 1226, 3657, 1237, 3655, 1242, 3652, 1247, 3647, 1251, 3644, 1258, 3639, 1274, 3622, 1289, 3605, 1296, 3600, 1300, 3596, 1310, 3592, 1319, 3588, 1322, 3583, 1326, 3579, 1345, 3558, 1368, 3531, 1387, 3513, 1396, 3506, 1397, 3503, L, 1398, 3485, Q, 1418, 3464, 1429, 3456, 1450, 3439, 1450, 3436, 1446, 3421, 1462, 3411, 1469, 3402, 1473, 3400, 1478, 3395, 1494, 3396, 1503, 3397, 1528, 3396, 1549, 3396, 1554, 3397, 1559, 3398, 1574, 3409, 1578, 3411, 1585, 3411, 1594, 3410, 1599, 3411, 1601, 3411, 1607, 3418, 1614, 3425, 1617, 3426, L, 1639, 3428, Q, 1644, 3428, 1657, 3444, 1660, 3446, 1664, 3447, 1668, 3448, 1677, 3448, 1684, 3449, 1689, 3451, 1693, 3453, 1700, 3453, 1750, 3455, 1781, 3436, L, 1914, 3436, Q, 1914, 3436, 1915, 3435, 1916, 3435, 1918, 3435, L, 2042, 3435, Q, 2068, 3444, 2070, 3445, 2075, 3448, 2085, 3448, 2090, 3449, 2101, 3450, L, 2132, 3450, Q, 2135, 3452, 2138, 3456, 2141, 3458, 2146, 3459, L, 2176, 3459, Q, 2175, 3450, 2183, 3448, 2187, 3447, 2194, 3447, L, 2222, 3432, Q, 2228, 3428, 2232, 3417, 2234, 3409, 2242, 3411, 2251, 3413, 2253, 3404, 2255, 3394, 2255, 3391, 2256, 3374, 2258, 3365, 2262, 3349, 2279, 3346, 2288, 3343, 2291, 3339, 2293, 3329, 2302, 3330, 2316, 3332, 2320, 3327, 2324, 3321, 2332, 3321, 2343, 3321, 2345, 3324, 2346, 3325, 2347, 3329, 2348, 3330, 2353, 3332, 2358, 3333, 2373, 3335, 2382, 3336, 2387, 3340, 2389, 3341, 2394, 3347, 2397, 3352, 2403, 3355, 2416, 3361, 2429, 3367, 2434, 3370, 2452, 3380, 2466, 3387, 2476, 3395, 2495, 3410, 2505, 3412, 2519, 3415, 2523, 3420, 2529, 3430, 2534, 3432, 2538, 3433, 2547, 3437, 2549, 3438, 2557, 3439, 2565, 3439, 2568, 3441, 2576, 3444, 2584, 3458, 2595, 3478, 2597, 3481, 2619, 3509, 2630, 3516, 2643, 3524, 2644, 3534, 2645, 3546, 2661, 3555, 2665, 3552, 2668, 3550, 2679, 3541, 2690, 3541, 2706, 3541, 2758, 3539, 2770, 3539, 2784, 3533, 2798, 3528, 2808, 3528, 2830, 3527, 2854, 3507, 2875, 3487, 2884, 3480, 2885, 3480, 2888, 3479, 2891, 3477, 2899, 3473, 2904, 3470, 2906, 3465, 2908, 3459, 2910, 3456, 2912, 3446, 2925, 3421, 2926, 3406, 2932, 3396, 2940, 3384, 2945, 3375, 2954, 3355, 2965, 3339, 2971, 3330, 2993, 3304, 2996, 3300, 3008, 3289, 3014, 3283, 3014, 3276, 3014, 3273, 3010, 3265, 3006, 3257, 3006, 3241, L, 3007, 3220, Q, 3006, 3219, 3006, 3217, 2999, 3188, 2988, 3178, 2981, 3173, 2975, 3160, 2968, 3145, 2965, 3140, 2954, 3126, 2930, 3111, 2893, 3089, 2890, 3087, 2876, 3076, 2871, 3072, 2864, 3069, 2849, 3065, 2840, 3062, 2825, 3063, 2810, 3065, 2803, 3065, L, 2694, 3062, 2694, 3017, Q, 2693, 3012, 2689, 2996, 2686, 2984, 2687, 2976, L, 2685, 2931, Q, 2668, 2925, 2665, 2924, 2658, 2920, 2655, 2919, 2650, 2916, 2647, 2913, 2632, 2908, 2601, 2886, 2580, 2871, 2579, 2870, 2575, 2867, 2567, 2865, 2556, 2862, 2553, 2860, 2550, 2858, 2549, 2849, 2549, 2839, 2548, 2838, 2543, 2827, 2540, 2812, 2540, 2795, 2540, 2784, 2539, 2765, 2531, 2762, L, 2531, 2743, Q, 2536, 2745, 2538, 2741, 2542, 2736, 2542, 2736, 2545, 2734, 2554, 2734, 2560, 2734, 2565, 2728, 2571, 2723, 2577, 2723, 2595, 2723, 2601, 2720, 2605, 2719, 2609, 2713, 2614, 2705, 2618, 2701, 2626, 2693, 2630, 2678, 2634, 2665, 2632, 2654, 2632, 2649, 2638, 2643, 2644, 2635, 2644, 2634, L, 2643, 2608, Q, 2643, 2606, 2643, 2604, 2642, 2589, 2649, 2574, 2656, 2555, 2656, 2541, 2655, 2530, 2655, 2525, 2655, 2515, 2662, 2506, 2668, 2496, 2668, 2470, 2668, 2444, 2656, 2419, 2655, 2409, 2655, 2406, 2652, 2399, 2648, 2394, 2643, 2388, 2643, 2372, L, 2644, 2346, Q, 2644, 2327, 2638, 2316, 2630, 2302, 2630, 2295, 2630, 2267, 2643, 2260, 2643, 2256, 2643, 2242, 2643, 2231, 2636, 2227, 2632, 2226, 2630, 2224, 2627, 2222, 2627, 2217, 2626, 2213, 2623, 2208, 2619, 2203, 2619, 2201, 2618, 2195, 2607, 2186, 2598, 2177, 2599, 2168, 2599, 2164, 2595, 2159, 2592, 2154, 2591, 2152, 2590, 2142, 2590, 2136, 2573, 2137, 2571, 2135, 2568, 2145, 2568, 2151, L, 2556, 2151, Q, 2523, 2149, 2513, 2149, Z]],
      "label": "Baitadi",
      "shortLabel": "BT",
      "labelPosition": [184.5, 293.7],
      "labelAlignment": [CEN, MID]
    },
    "NP.MA.DD": {
      "outlines": [[M, 2347, 3329, Q, 2346, 3325, 2345, 3324, 2343, 3321, 2332, 3321, 2324, 3321, 2320, 3327, 2316, 3332, 2302, 3330, 2293, 3329, 2291, 3339, 2288, 3343, 2279, 3346, 2262, 3349, 2258, 3365, 2256, 3374, 2255, 3391, 2255, 3394, 2253, 3404, 2251, 3413, 2242, 3411, 2234, 3409, 2232, 3417, 2228, 3428, 2222, 3432, L, 2194, 3447, Q, 2187, 3447, 2183, 3448, 2175, 3450, 2176, 3459, L, 2146, 3459, Q, 2141, 3458, 2138, 3456, 2135, 3452, 2132, 3450, L, 2101, 3450, Q, 2090, 3449, 2085, 3448, 2075, 3448, 2070, 3445, 2068, 3444, 2042, 3435, L, 1918, 3435, Q, 1916, 3435, 1915, 3435, 1914, 3436, 1914, 3436, L, 1781, 3436, Q, 1750, 3455, 1700, 3453, 1693, 3453, 1689, 3451, 1684, 3449, 1677, 3448, 1668, 3448, 1664, 3447, 1660, 3446, 1657, 3444, 1644, 3428, 1639, 3428, L, 1617, 3426, Q, 1614, 3425, 1607, 3418, 1601, 3411, 1599, 3411, 1594, 3410, 1585, 3411, 1578, 3411, 1574, 3409, 1559, 3398, 1554, 3397, 1549, 3396, 1528, 3396, 1503, 3397, 1494, 3396, 1478, 3395, 1473, 3400, 1469, 3402, 1462, 3411, 1446, 3421, 1450, 3436, 1450, 3439, 1429, 3456, 1418, 3464, 1398, 3485, L, 1397, 3503, Q, 1396, 3506, 1387, 3513, 1368, 3531, 1345, 3558, 1326, 3579, 1322, 3583, 1319, 3588, 1310, 3592, 1300, 3596, 1296, 3600, 1289, 3605, 1274, 3622, 1258, 3639, 1251, 3644, 1247, 3647, 1242, 3652, 1237, 3655, 1226, 3657, 1220, 3657, 1213, 3662, 1202, 3670, 1200, 3670, 1178, 3679, 1173, 3683, 1163, 3693, 1157, 3698, 1156, 3698, 1154, 3700, 1151, 3703, 1145, 3707, 1134, 3713, 1132, 3716, 1128, 3722, 1107, 3740, 1102, 3746, 1093, 3754, 1085, 3762, 1086, 3769, 1085, 3777, 1077, 3783, 1072, 3786, 1061, 3792, 1058, 3795, 1048, 3806, 1043, 3813, 1033, 3813, 1019, 3812, 1014, 3814, 1011, 3815, 1004, 3819, 998, 3824, 996, 3824, 987, 3825, 978, 3831, 973, 3835, 964, 3842, 961, 3843, 959, 3848, 956, 3854, 956, 3855, 946, 3860, 942, 3861, L, 943, 3870, Q, 943, 3882, 941, 3885, 938, 3889, 933, 3890, 930, 3893, 931, 3912, 919, 3918, 918, 3924, 915, 3935, 915, 3946, 914, 3955, 915, 3976, 913, 3992, 899, 3992, L, 899, 4015, Q, 900, 4019, 900, 4037, 900, 4050, 899, 4055, 898, 4058, 894, 4066, 889, 4073, 889, 4083, 889, 4099, 889, 4101, 889, 4102, 889, 4110, 888, 4116, 887, 4118, L, 876, 4128, Q, 873, 4130, 869, 4133, 865, 4135, 865, 4138, L, 865, 4154, Q, 865, 4177, 871, 4181, 876, 4186, 876, 4207, L, 875, 4229, Q, 875, 4229, 871, 4235, 867, 4240, 867, 4246, L, 867, 4268, Q, 866, 4271, 846, 4270, 847, 4278, 842, 4288, L, 837, 4288, 837, 4272, Q, 828, 4273, 828, 4267, 828, 4261, 828, 4258, L, 818, 4258, 815, 4244, Q, 812, 4239, 804, 4239, 793, 4239, 789, 4240, 785, 4240, 783, 4246, 780, 4253, 775, 4253, 767, 4253, 766, 4244, 767, 4233, 766, 4227, L, 754, 4227, 751, 4203, Q, 745, 4203, 743, 4202, 738, 4200, 737, 4194, 736, 4190, 729, 4188, 728, 4188, 714, 4188, 697, 4188, 697, 4189, 696, 4190, 695, 4204, 694, 4214, 693, 4225, 692, 4231, 683, 4233, 688, 4261, 689, 4273, 689, 4278, 699, 4287, 711, 4298, 715, 4301, 721, 4304, 724, 4309, 732, 4322, 734, 4323, 734, 4336, 735, 4338, 742, 4351, 742, 4353, 742, 4367, 743, 4390, 743, 4396, 746, 4403, 750, 4410, 750, 4413, 751, 4418, 750, 4431, 750, 4442, 754, 4444, 761, 4449, 772, 4463, 773, 4464, 782, 4473, 788, 4479, 789, 4485, 790, 4488, 791, 4497, 793, 4502, 799, 4510, L, 799, 4515, Q, 787, 4515, 778, 4520, 774, 4520, 773, 4520, 769, 4520, 768, 4523, 763, 4529, 758, 4529, 747, 4530, 734, 4539, 726, 4544, 715, 4554, 697, 4567, 695, 4568, 688, 4569, 683, 4573, 677, 4579, 679, 4584, 680, 4588, 678, 4595, 674, 4603, 670, 4603, L, 646, 4603, Q, 646, 4605, 633, 4605, 620, 4605, 613, 4603, 609, 4603, 604, 4597, 600, 4592, 595, 4592, L, 576, 4593, Q, 564, 4593, 545, 4584, 525, 4575, 519, 4564, 506, 4545, 499, 4542, 494, 4542, 490, 4542, 482, 4541, 482, 4536, L, 482, 4522, 461, 4522, 459, 4537, Q, 458, 4541, 455, 4542, L, 451, 4542, Q, 447, 4545, 449, 4568, 449, 4571, 449, 4575, 450, 4580, 460, 4580, 462, 4592, 468, 4602, 472, 4608, 484, 4625, 487, 4631, 492, 4651, 495, 4662, 505, 4674, 512, 4688, 526, 4718, 540, 4744, 554, 4763, 558, 4769, 572, 4779, 578, 4784, 597, 4793, 621, 4816, 634, 4826, 641, 4831, 678, 4843, L, 703, 4852, Q, 708, 4853, 716, 4854, 723, 4856, 724, 4864, 741, 4871, 761, 4884, 778, 4893, 804, 4893, L, 865, 4892, Q, 880, 4891, 896, 4892, 907, 4892, 913, 4886, 917, 4880, 940, 4880, 965, 4880, 967, 4879, 983, 4869, 986, 4867, 989, 4864, 995, 4864, 998, 4864, 1007, 4864, 1007, 4864, 1008, 4864, 1009, 4863, 1017, 4863, 1028, 4863, 1037, 4869, 1056, 4880, 1065, 4880, 1089, 4880, 1092, 4881, 1093, 4882, 1102, 4888, 1111, 4893, 1117, 4893, 1120, 4893, 1142, 4892, 1157, 4892, 1167, 4893, 1170, 4893, 1177, 4899, 1185, 4905, 1188, 4905, L, 1212, 4905, Q, 1217, 4905, 1224, 4910, 1232, 4917, 1233, 4917, 1235, 4917, 1244, 4918, 1252, 4919, 1258, 4922, 1267, 4927, 1287, 4930, 1304, 4933, 1311, 4939, 1316, 4942, 1326, 4944, 1337, 4946, 1340, 4948, 1352, 4955, 1365, 4956, 1378, 4956, 1388, 4962, 1398, 4967, 1413, 4967, 1426, 4967, 1428, 4962, 1429, 4956, 1450, 4956, 1467, 4956, 1469, 4958, 1470, 4961, 1474, 4965, 1479, 4970, 1484, 4971, 1498, 4971, 1519, 4971, 1523, 4971, 1525, 4975, 1526, 4977, 1528, 4986, 1529, 4990, 1538, 4998, 1544, 5003, 1544, 5016, 1543, 5033, 1544, 5035, 1544, 5038, 1551, 5049, 1555, 5057, 1555, 5067, 1554, 5075, 1560, 5082, 1563, 5087, 1572, 5097, 1578, 5106, 1591, 5132, 1595, 5140, 1602, 5141, 1605, 5141, 1620, 5141, 1633, 5141, 1643, 5140, L, 1669, 5140, Q, 1669, 5135, 1670, 5132, 1675, 5123, 1676, 5120, 1677, 5092, 1679, 5088, 1680, 5086, 1689, 5067, 1695, 5055, 1695, 5047, 1695, 5039, 1701, 5030, 1708, 5020, 1709, 5014, 1709, 5012, 1720, 4997, 1724, 4990, 1724, 4973, 1726, 4965, 1731, 4955, 1737, 4942, 1738, 4940, 1736, 4928, 1744, 4920, 1746, 4919, 1748, 4908, 1750, 4897, 1754, 4892, 1759, 4884, 1764, 4871, 1766, 4864, 1769, 4858, 1773, 4852, 1776, 4845, 1774, 4838, 1788, 4820, 1790, 4818, 1790, 4807, 1791, 4795, 1792, 4793, 1793, 4787, 1798, 4779, 1801, 4772, 1801, 4768, 1801, 4767, 1799, 4758, 1796, 4748, 1792, 4739, 1788, 4730, 1786, 4726, 1784, 4721, 1771, 4701, 1759, 4682, 1751, 4671, L, 1745, 4656, Q, 1745, 4646, 1788, 4622, 1825, 4601, 1837, 4597, 1858, 4591, 1863, 4580, L, 1868, 4559, Q, 1868, 4555, 1873, 4548, 1879, 4539, 1879, 4538, 1881, 4534, 1882, 4525, 1883, 4517, 1886, 4512, 1891, 4505, 1893, 4501, L, 1893, 4471, Q, 1895, 4464, 1900, 4458, L, 1903, 4440, Q, 1917, 4435, 1931, 4421, 1933, 4419, 1937, 4418, 1942, 4417, 1942, 4417, 1945, 4416, 1957, 4410, 1965, 4405, 1970, 4402, 1978, 4397, 1984, 4397, 1985, 4397, 1997, 4394, 2010, 4390, 2014, 4388, 2018, 4386, 2031, 4384, 2044, 4383, 2049, 4377, 2050, 4375, 2062, 4367, 2071, 4361, 2075, 4359, 2083, 4352, 2099, 4348, 2113, 4344, 2124, 4340, 2135, 4337, 2160, 4322, 2186, 4306, 2200, 4299, 2224, 4288, 2270, 4264, L, 2296, 4244, Q, 2297, 4243, 2319, 4233, L, 2342, 4223, Q, 2347, 4221, 2347, 4213, 2346, 4204, 2355, 4198, 2360, 4193, 2360, 4172, 2360, 4153, 2370, 4151, 2377, 4129, 2401, 4106, 2403, 4104, 2442, 4069, 2482, 4019, 2491, 4007, 2506, 3980, 2515, 3967, 2527, 3946, 2528, 3939, 2529, 3933, 2535, 3921, 2542, 3907, 2544, 3902, 2541, 3888, 2554, 3868, 2560, 3858, 2564, 3852, 2569, 3841, 2569, 3836, 2569, 3820, 2569, 3819, 2580, 3807, 2580, 3796, 2580, 3789, 2573, 3777, 2567, 3767, 2568, 3759, 2567, 3755, 2560, 3746, 2553, 3737, 2553, 3737, 2552, 3731, 2547, 3721, 2542, 3710, 2542, 3709, 2540, 3704, 2538, 3694, 2538, 3687, 2534, 3683, 2528, 3679, 2528, 3672, L, 2528, 3641, Q, 2527, 3636, 2534, 3631, 2534, 3631, 2540, 3624, 2544, 3618, 2550, 3618, 2555, 3617, 2559, 3610, 2563, 3604, 2571, 3605, 2579, 3606, 2595, 3595, 2599, 3593, 2621, 3580, L, 2635, 3570, Q, 2643, 3569, 2647, 3567, 2655, 3560, 2661, 3555, 2645, 3546, 2644, 3534, 2643, 3524, 2630, 3516, 2619, 3509, 2597, 3481, 2595, 3478, 2584, 3458, 2576, 3444, 2568, 3441, 2565, 3439, 2557, 3439, 2549, 3438, 2547, 3437, 2538, 3433, 2534, 3432, 2529, 3430, 2523, 3420, 2519, 3415, 2505, 3412, 2495, 3410, 2476, 3395, 2466, 3387, 2452, 3380, 2434, 3370, 2429, 3367, 2416, 3361, 2403, 3355, 2397, 3352, 2394, 3347, 2389, 3341, 2387, 3340, 2382, 3336, 2373, 3335, 2358, 3333, 2353, 3332, Q, 2348, 3330, 2347, 3329, Z]],
      "label": "Dadeldhura",
      "shortLabel": "DD",
      "labelPosition": [155.5, 410.9],
      "labelAlignment": [CEN, MID]
    },
    "NP.MA.DR": {
      "outlines": [[M, 3621, 87, L, 3621, 109, 3492, 109, Q, 3487, 112, 3487, 121, 3485, 124, 3482, 125, 3476, 126, 3474, 126, 3448, 128, 3439, 128, 3426, 128, 3421, 128, 3413, 128, 3409, 133, 3405, 137, 3398, 139, 3390, 139, 3386, 139, 3382, 140, 3380, 145, 3378, 152, 3377, 153, 3374, 156, 3370, 155, 3365, 155, 3363, 155, 3354, 156, 3350, 163, 3345, 171, 3340, 173, 3326, 177, 3310, 185, 3304, 191, 3297, 191, 3278, 192, 3276, 191, L, 3276, 191, Q, 3261, 191, 3256, 190, 3247, 188, 3243, 183, 3239, 178, 3229, 178, 3218, 180, 3213, 179, 3210, 178, 3207, 175, 3202, 171, 3199, 169, 3196, 167, 3192, 167, 3187, 168, 3182, 168, 3167, 169, 3154, 153, L, 3152, 81, Q, 3152, 67, 3132, 55, L, 3121, 45, Q, 3115, 42, 3115, 41, 3114, 40, 3113, 32, L, 3084, 32, Q, 3086, 39, 3078, 46, 3069, 56, 3067, 60, 3064, 64, 3058, 68, 3050, 74, 3044, 73, 3043, 76, 3043, 84, 3041, 90, 3038, 96, 3034, 101, 3032, 108, 3030, 119, 3030, 121, 3030, 121, 3023, 134, 3019, 141, 3018, 146, L, 3010, 168, Q, 3000, 184, 2997, 193, 2993, 200, 2988, 204, 2986, 206, 2978, 210, 2972, 211, 2955, 227, 2941, 239, 2932, 237, 2927, 240, 2926, 240, 2926, 241, 2926, 247, 2926, 252, 2931, 252, 2939, 252, 2943, 256, 2947, 259, 2949, 267, 2952, 274, 2954, 276, 2961, 282, 2969, 295, 2971, 300, 2971, 320, 2971, 323, 2975, 332, 2978, 341, 2978, 343, L, 2978, 367, Q, 2978, 374, 2986, 383, 2993, 389, 2993, 405, 2993, 419, 2988, 421, 2984, 423, 2978, 428, 2971, 434, 2969, 435, 2959, 440, 2931, 440, 2927, 439, 2921, 443, 2913, 448, 2912, 448, L, 2898, 448, Q, 2893, 448, 2891, 452, 2889, 456, 2888, 457, 2868, 478, 2867, 495, 2858, 509, 2855, 514, 2848, 524, 2838, 528, 2831, 528, 2827, 528, 2819, 528, 2815, 533, 2811, 539, 2798, 543, 2787, 551, 2782, 553, 2776, 554, 2773, 554, 2766, 556, 2763, 559, 2758, 565, 2745, 573, 2741, 576, 2736, 582, 2731, 589, 2729, 591, 2705, 621, 2685, 648, 2667, 666, 2663, 674, 2659, 688, 2656, 692, 2651, 698, 2642, 701, 2636, 703, 2630, 713, 2625, 722, 2621, 722, L, 2598, 725, Q, 2596, 728, 2587, 739, 2582, 744, 2579, 753, 2573, 763, 2567, 763, 2561, 772, 2562, 794, 2562, 830, 2561, 833, 2555, 845, 2555, 850, L, 2555, 865, Q, 2555, 876, 2547, 880, 2544, 880, 2544, 886, 2543, 889, 2542, 895, 2544, 905, 2531, 909, 2516, 912, 2512, 914, 2495, 929, 2486, 929, 2479, 928, 2469, 933, 2458, 939, 2453, 939, 2442, 939, 2438, 939, 2429, 940, 2423, 950, 2417, 960, 2412, 964, 2405, 968, 2400, 973, 2381, 998, 2358, 1021, 2325, 1049, 2303, 1068, 2292, 1077, 2288, 1080, 2280, 1086, 2277, 1091, 2266, 1109, 2251, 1111, 2238, 1113, 2236, 1113, 2231, 1113, 2228, 1116, 2225, 1121, 2222, 1123, 2212, 1129, 2199, 1131, 2187, 1133, 2187, 1131, 2177, 1131, 2174, 1130, 2169, 1129, 2164, 1123, 2151, 1109, 2139, 1111, 2127, 1111, 2122, 1107, 2116, 1102, 2110, 1100, 2095, 1089, 2088, 1089, 2080, 1089, 2066, 1094, 2061, 1096, 2052, 1095, 2044, 1095, 2039, 1097, 2036, 1098, 2032, 1103, 2028, 1109, 2025, 1111, 2018, 1114, 2009, 1113, 2002, 1113, 1999, 1115, 1986, 1126, 1970, 1153, 1967, 1159, 1956, 1170, 1947, 1179, 1942, 1188, 1938, 1198, 1930, 1211, 1923, 1218, 1921, 1221, 1918, 1226, 1920, 1233, L, 1916, 1254, Q, 1914, 1259, 1906, 1272, 1904, 1276, 1900, 1281, 1894, 1287, 1892, 1290, 1890, 1292, 1889, 1300, 1888, 1309, 1887, 1313, 1884, 1317, 1883, 1320, 1879, 1324, 1879, 1329, L, 1879, 1350, Q, 1881, 1361, 1885, 1365, 1889, 1371, 1889, 1385, 1890, 1393, 1888, 1397, 1888, 1398, 1882, 1400, 1879, 1401, 1878, 1406, L, 1878, 1419, Q, 1879, 1422, 1877, 1425, L, 1859, 1450, Q, 1852, 1456, 1848, 1460, 1840, 1467, 1840, 1471, 1840, 1474, 1840, 1500, 1840, 1518, 1835, 1524, 1828, 1530, 1827, 1538, 1825, 1553, 1825, 1553, 1817, 1577, 1818, 1583, L, 1799, 1583, Q, 1795, 1583, 1793, 1585, 1790, 1589, 1787, 1590, 1774, 1594, 1771, 1596, 1766, 1604, 1762, 1607, 1753, 1624, 1745, 1630, 1736, 1635, 1728, 1654, 1726, 1659, 1715, 1659, 1698, 1660, 1695, 1660, 1687, 1662, 1682, 1666, 1675, 1672, 1667, 1677, 1662, 1681, 1656, 1688, 1650, 1698, 1645, 1703, 1640, 1710, 1637, 1714, 1633, 1720, 1629, 1722, 1627, 1725, 1625, 1732, 1622, 1739, 1622, 1740, 1619, 1744, 1613, 1748, 1607, 1751, 1607, 1753, 1602, 1766, 1602, 1775, 1602, 1781, 1602, 1795, L, 1544, 1795, Q, 1542, 1794, 1539, 1794, 1536, 1784, 1534, 1781, 1531, 1776, 1520, 1774, 1517, 1773, 1516, 1768, 1515, 1762, 1513, 1761, L, 1498, 1759, Q, 1488, 1759, 1484, 1764, 1477, 1774, 1471, 1774, 1464, 1774, 1462, 1776, 1461, 1777, 1459, 1781, 1456, 1787, 1454, 1787, 1449, 1786, 1443, 1786, 1441, 1786, 1437, 1787, 1429, 1788, 1425, 1781, 1417, 1773, 1415, 1769, 1410, 1759, 1407, 1754, 1403, 1745, 1400, 1745, L, 1383, 1745, Q, 1384, 1754, 1374, 1759, 1360, 1766, 1358, 1770, 1355, 1774, 1343, 1779, 1332, 1783, 1329, 1788, 1323, 1796, 1316, 1800, 1304, 1807, 1300, 1810, 1297, 1811, 1295, 1826, 1296, 1833, 1285, 1840, 1283, 1842, 1280, 1857, 1279, 1858, 1274, 1861, 1269, 1865, 1270, 1868, 1274, 1878, 1268, 1888, 1266, 1892, 1258, 1902, 1258, 1915, 1255, 1920, 1254, 1920, 1247, 1927, 1244, 1930, 1243, 1933, 1242, 1938, 1233, 1938, 1208, 1937, 1205, 1937, L, 1205, 1968, Q, 1205, 1980, 1204, 1984, 1202, 1995, 1193, 1995, 1188, 1995, 1187, 1991, 1187, 1984, 1187, 1981, L, 1156, 1981, Q, 1147, 1990, 1146, 1992, 1139, 1995, 1139, 2001, L, 1139, 2035, Q, 1139, 2039, 1137, 2047, 1135, 2057, 1132, 2061, 1128, 2066, 1128, 2075, 1127, 2079, 1127, 2086, 1133, 2101, 1137, 2110, 1139, 2114, 1148, 2123, 1157, 2132, 1157, 2134, 1159, 2137, 1159, 2145, 1158, 2153, 1160, 2157, 1160, 2158, 1170, 2179, 1171, 2186, 1170, 2194, 1170, 2201, 1174, 2207, 1175, 2209, 1184, 2219, 1191, 2227, 1191, 2233, L, 1191, 2257, Q, 1191, 2266, 1195, 2272, 1199, 2278, 1199, 2281, 1199, 2284, 1196, 2287, 1194, 2290, 1194, 2294, 1194, 2301, 1198, 2302, 1207, 2305, 1213, 2310, 1217, 2313, 1217, 2320, 1217, 2325, 1217, 2338, 1217, 2344, 1223, 2346, 1232, 2349, 1234, 2351, L, 1249, 2376, Q, 1252, 2380, 1260, 2379, 1269, 2379, 1270, 2380, 1272, 2382, 1275, 2391, 1278, 2393, 1288, 2396, 1313, 2399, 1311, 2430, 1311, 2431, 1312, 2433, 1313, 2436, 1316, 2441, 1318, 2445, 1320, 2451, 1320, 2454, 1326, 2458, 1332, 2462, 1332, 2467, 1332, 2471, 1317, 2491, 1317, 2493, 1305, 2504, 1302, 2506, 1298, 2517, 1294, 2521, 1291, 2523, 1288, 2525, 1287, 2527, 1286, 2528, 1283, 2534, 1281, 2539, 1278, 2541, 1269, 2546, 1268, 2552, 1267, 2555, 1267, 2570, 1276, 2569, 1301, 2569, 1322, 2570, 1337, 2565, 1342, 2564, 1356, 2556, 1365, 2551, 1375, 2551, 1380, 2551, 1396, 2542, 1413, 2532, 1416, 2532, 1431, 2529, 1452, 2528, L, 1471, 2525, 1487, 2518, Q, 1492, 2517, 1502, 2518, 1513, 2517, 1520, 2510, 1530, 2500, 1538, 2499, 1543, 2498, 1557, 2497, 1566, 2494, 1572, 2491, 1583, 2484, 1590, 2480, 1594, 2478, 1606, 2478, 1616, 2478, 1625, 2471, 1631, 2465, 1640, 2464, 1655, 2463, 1658, 2462, 1666, 2459, 1689, 2437, 1689, 2436, 1705, 2424, L, 1720, 2412, Q, 1733, 2400, 1745, 2396, 1753, 2392, 1772, 2379, 1790, 2367, 1798, 2361, 1800, 2360, 1803, 2358, 1820, 2347, 1827, 2340, 1837, 2330, 1846, 2319, 1856, 2308, 1876, 2288, L, 1907, 2258, Q, 1914, 2250, 1940, 2230, 1944, 2226, 1953, 2214, 1958, 2210, 1964, 2210, 1968, 2211, 1977, 2212, 1984, 2212, 1998, 2207, 2010, 2202, 2016, 2202, 2021, 2202, 2031, 2201, 2041, 2199, 2046, 2199, 2060, 2201, 2070, 2196, 2079, 2192, 2088, 2191, 2097, 2190, 2102, 2190, 2107, 2190, 2110, 2190, 2119, 2190, 2139, 2190, 2146, 2191, 2160, 2190, 2173, 2190, 2179, 2198, 2183, 2203, 2185, 2206, L, 2193, 2208, Q, 2198, 2210, 2210, 2216, 2212, 2217, 2222, 2225, 2233, 2233, 2240, 2233, 2245, 2233, 2249, 2227, 2254, 2219, 2258, 2217, 2277, 2208, 2281, 2205, 2286, 2198, 2294, 2196, 2297, 2195, 2306, 2192, 2310, 2190, 2323, 2180, 2333, 2171, 2335, 2171, L, 2394, 2175, Q, 2397, 2174, 2397, 2171, 2399, 2168, 2399, 2166, 2401, 2160, 2412, 2160, 2419, 2160, 2433, 2162, 2458, 2160, 2482, 2162, 2494, 2162, 2497, 2160, 2499, 2159, 2500, 2156, 2505, 2145, 2512, 2149, L, 2513, 2149, Q, 2523, 2149, 2556, 2151, L, 2568, 2151, Q, 2568, 2145, 2571, 2135, 2573, 2137, 2590, 2136, 2590, 2142, 2591, 2152, 2592, 2154, 2595, 2159, 2599, 2164, 2599, 2168, 2598, 2177, 2607, 2186, 2618, 2195, 2619, 2201, 2619, 2203, 2623, 2208, 2626, 2213, 2627, 2217, 2627, 2222, 2630, 2224, 2632, 2226, 2636, 2227, 2643, 2231, 2643, 2242, 2643, 2256, 2643, 2260, 2647, 2258, 2652, 2258, 2660, 2258, 2675, 2247, 2679, 2245, 2693, 2245, 2699, 2244, 2715, 2236, 2730, 2229, 2741, 2228, 2743, 2228, 2763, 2219, 2764, 2219, 2773, 2216, 2779, 2212, 2784, 2209, 2787, 2206, 2793, 2205, 2797, 2204, 2804, 2202, 2818, 2195, 2823, 2193, 2829, 2189, 2841, 2186, 2854, 2183, 2862, 2178, 2882, 2164, 2941, 2138, L, 2989, 2109, Q, 3010, 2099, 3036, 2090, L, 3083, 2066, Q, 3106, 2057, 3136, 2058, 3208, 2060, 3209, 2060, 3241, 2060, 3256, 2055, 3260, 2054, 3267, 2051, 3273, 2047, 3279, 2045, 3287, 2043, 3307, 2045, 3311, 2045, 3318, 2045, 3326, 2045, 3334, 2042, 3350, 2036, 3360, 2038, 3391, 2041, 3421, 2031, 3426, 2030, 3435, 2025, 3441, 2023, 3447, 2021, L, 3470, 2011, Q, 3472, 2009, 3480, 2008, 3489, 2007, 3494, 2005, 3505, 2000, 3522, 1992, 3528, 1990, 3537, 1988, 3543, 1985, 3549, 1984, 3554, 1982, 3577, 1982, 3603, 1981, 3607, 1977, 3613, 1970, 3619, 1969, 3632, 1968, 3634, 1966, 3639, 1964, 3642, 1958, 3643, 1957, 3646, 1946, 3645, 1943, 3650, 1938, L, 3658, 1931, Q, 3658, 1930, 3668, 1921, 3672, 1917, 3671, 1910, 3670, 1905, 3674, 1899, 3678, 1894, 3685, 1892, 3708, 1881, 3706, 1855, 3706, 1854, 3706, 1852, 3708, 1810, 3708, 1786, 3708, 1771, 3708, 1770, 3707, 1766, 3700, 1751, 3696, 1744, 3695, 1734, 3695, 1723, 3693, 1718, 3687, 1707, 3685, 1703, 3683, 1697, 3682, 1690, 3681, 1678, 3680, 1675, 3678, 1670, 3674, 1663, 3671, 1659, 3668, 1648, 3665, 1638, 3663, 1635, 3658, 1629, 3652, 1618, 3645, 1607, 3643, 1604, 3629, 1593, 3621, 1582, 3616, 1576, 3613, 1567, 3609, 1557, 3608, 1554, 3598, 1535, 3595, 1529, 3590, 1519, 3591, 1509, 3592, 1497, 3589, 1466, 3589, 1437, 3588, 1425, 3587, 1405, 3571, 1390, 3564, 1383, 3544, 1353, 3522, 1321, 3516, 1317, 3504, 1310, 3487, 1287, 3485, 1279, 3482, 1276, 3478, 1273, 3476, 1270, 3469, 1262, 3465, 1251, 3465, 1250, 3465, 1249, 3463, 1241, 3460, 1237, 3456, 1230, 3451, 1224, 3448, 1220, 3448, 1212, 3448, 1203, 3446, 1199, 3441, 1192, 3440, 1185, 3439, 1177, 3437, 1171, L, 3437, 1157, Q, 3437, 1154, 3435, 1152, 3433, 1150, 3433, 1146, 3433, 1126, 3435, 1118, 3436, 1112, 3442, 1103, 3447, 1096, 3447, 1092, 3447, 1084, 3458, 1066, 3470, 1045, 3472, 1039, L, 3478, 1016, Q, 3478, 1014, 3488, 1002, 3489, 1000, 3490, 996, 3490, 992, 3490, 989, 3490, 981, 3498, 964, 3504, 952, 3503, 941, 3503, 939, 3502, 938, 3503, 933, 3507, 928, 3510, 924, 3517, 917, L, 3535, 889, Q, 3539, 883, 3549, 867, 3558, 858, 3574, 847, 3582, 840, 3597, 826, 3604, 825, 3620, 816, 3624, 813, 3634, 813, 3636, 811, 3641, 807, 3648, 804, 3652, 803, 3656, 802, 3681, 802, 3696, 802, 3705, 789, 3707, 784, 3719, 767, 3725, 757, 3732, 741, 3738, 728, 3753, 720, 3777, 706, 3780, 703, 3785, 696, 3791, 696, L, 3805, 694, 3816, 683, Q, 3817, 682, 3831, 681, 3833, 680, 3841, 674, 3848, 669, 3852, 668, L, 3863, 661, 3863, 656, Q, 3851, 656, 3849, 656, 3837, 646, 3835, 646, 3818, 643, 3804, 641, 3802, 636, 3794, 628, 3789, 623, 3787, 615, 3785, 612, 3786, 607, 3787, 600, 3787, 599, 3787, 598, 3781, 593, 3775, 588, 3775, 585, 3771, 555, 3772, 511, 3772, 465, 3770, 448, L, 3803, 389, Q, 3800, 366, 3812, 355, 3818, 348, 3816, 326, 3816, 322, 3811, 314, L, 3804, 304, Q, 3804, 303, 3802, 293, 3802, 288, 3795, 284, 3783, 275, 3781, 263, 3780, 260, 3769, 242, 3746, 209, 3739, 202, 3724, 189, 3717, 183, 3705, 173, 3701, 163, 3695, 160, 3689, 151, 3683, 140, 3682, 139, L, 3665, 123, Q, 3654, 109, 3648, 104, 3646, 103, 3641, 101, 3636, 100, 3635, 98, 3632, 89, 3629, 87, Z]],
      "label": "Darchula",
      "shortLabel": "DR",
      "labelPosition": [280, 145.4],
      "labelAlignment": [CEN, MID]
    },
    "NP.MA.KN": {
      "outlines": [[M, 1388, 4962, Q, 1378, 4956, 1365, 4956, 1352, 4955, 1340, 4948, 1337, 4946, 1326, 4944, 1316, 4942, 1311, 4939, 1304, 4933, 1287, 4930, 1267, 4927, 1258, 4922, 1252, 4919, 1244, 4918, 1235, 4917, 1233, 4917, 1232, 4917, 1224, 4910, 1217, 4905, 1212, 4905, L, 1188, 4905, Q, 1185, 4905, 1177, 4899, 1170, 4893, 1167, 4893, 1157, 4892, 1142, 4892, 1120, 4893, 1117, 4893, 1111, 4893, 1102, 4888, 1093, 4882, 1092, 4881, 1089, 4880, 1065, 4880, 1056, 4880, 1037, 4869, 1028, 4863, 1017, 4863, 1009, 4863, 1008, 4864, L, 1009, 4864, Q, 1008, 4864, 1007, 4864, 998, 4864, 995, 4864, 989, 4864, 986, 4867, 983, 4869, 967, 4879, 965, 4880, 940, 4880, 917, 4880, 913, 4886, 907, 4892, 896, 4892, 880, 4891, 865, 4892, L, 804, 4893, Q, 778, 4893, 761, 4884, 741, 4871, 724, 4864, 723, 4856, 716, 4854, 708, 4853, 703, 4852, L, 678, 4843, Q, 641, 4831, 634, 4826, 621, 4816, 597, 4793, 578, 4784, 572, 4779, 558, 4769, 554, 4763, 540, 4744, 526, 4718, 512, 4688, 505, 4674, 495, 4662, 492, 4651, 487, 4631, 484, 4625, 472, 4608, 468, 4602, 462, 4592, 460, 4580, 450, 4580, 449, 4575, 447, 4584, 439, 4590, 434, 4595, 415, 4608, 414, 4610, 397, 4623, 388, 4631, 382, 4637, 367, 4654, 365, 4658, 363, 4662, 364, 4679, 364, 4684, 360, 4695, 362, 4700, 354, 4712, 347, 4722, 347, 4729, 347, 4744, 344, 4749, 339, 4756, 337, 4768, 336, 4774, 334, 4782, L, 327, 4799, Q, 323, 4804, 323, 4808, 323, 4812, 323, 4818, 323, 4821, 317, 4836, 312, 4847, 312, 4853, 313, 4858, 308, 4867, 301, 4883, 300, 4884, L, 299, 4903, Q, 301, 4908, 297, 4914, 295, 4917, 291, 4923, 289, 4924, 285, 4932, 282, 4934, 282, 4940, 280, 4950, 273, 4958, L, 273, 4976, Q, 278, 4979, 286, 4980, 290, 4984, 290, 4993, 290, 4999, 286, 5003, 282, 5006, 282, 5023, 282, 5027, 271, 5034, 270, 5036, 269, 5041, 268, 5046, 269, 5049, 272, 5050, 277, 5056, 282, 5062, 286, 5062, 289, 5063, 306, 5063, L, 306, 5077, Q, 301, 5078, 298, 5086, 297, 5090, 295, 5099, 292, 5106, 286, 5112, 283, 5115, 277, 5120, 274, 5123, 273, 5134, 271, 5146, 269, 5149, 258, 5158, 254, 5173, 250, 5189, 210, 5190, 171, 5191, 166, 5212, 162, 5226, 159, 5230, 157, 5233, 151, 5239, 140, 5251, 136, 5267, 132, 5281, 123, 5293, 113, 5306, 110, 5314, 99, 5337, 82, 5363, 73, 5378, 56, 5405, 54, 5406, 54, 5407, 45, 5421, 35, 5437, L, 35, 5515, Q, 32, 5528, 43, 5545, L, 43, 5672, Q, 44, 5675, 50, 5687, 55, 5698, 55, 5702, 55, 5715, 53, 5757, 53, 5765, 58, 5774, 64, 5782, 64, 5789, L, 64, 5802, Q, 66, 5809, 71, 5813, 83, 5819, 88, 5823, 100, 5833, 128, 5829, L, 151, 5829, Q, 158, 5829, 164, 5825, 168, 5821, 169, 5819, 179, 5812, 210, 5812, L, 240, 5813, Q, 248, 5813, 253, 5815, 259, 5818, 264, 5827, 267, 5833, 285, 5842, 305, 5852, 314, 5863, 342, 5900, 403, 5963, 434, 5994, 489, 6052, 497, 6061, 514, 6070, 524, 6075, 545, 6086, L, 597, 6124, 734, 6124, 742, 6135, Q, 747, 6141, 759, 6138, 761, 6143, 764, 6149, 767, 6153, 773, 6158, 774, 6159, 774, 6167, 774, 6170, 774, 6182, 774, 6197, 773, 6201, 771, 6212, 761, 6216, 760, 6216, 757, 6217, 754, 6219, 754, 6220, 752, 6222, 752, 6225, 751, 6228, 747, 6230, 739, 6232, 737, 6235, 737, 6235, 737, 6243, 737, 6252, 737, 6252, 738, 6254, 744, 6254, 748, 6255, 751, 6259, 753, 6261, 758, 6268, 778, 6288, 784, 6297, 788, 6303, 797, 6311, 808, 6320, 813, 6320, 818, 6320, 830, 6322, 841, 6322, 850, 6322, 859, 6322, 861, 6313, 863, 6304, 884, 6304, L, 889, 6304, Q, 884, 6315, 895, 6316, 909, 6320, 911, 6322, 915, 6328, 922, 6333, 931, 6341, 936, 6347, 946, 6359, 966, 6363, 974, 6363, 974, 6372, 972, 6389, 972, 6392, L, 974, 6463, Q, 975, 6466, 980, 6468, 983, 6470, 987, 6472, 993, 6476, 996, 6485, 1000, 6489, 1006, 6499, 1011, 6507, 1017, 6509, 1017, 6510, 1018, 6510, 1044, 6529, 1046, 6532, 1048, 6535, 1053, 6542, 1061, 6553, 1065, 6555, 1074, 6558, 1078, 6561, L, 1101, 6578, Q, 1107, 6582, 1118, 6598, 1139, 6611, 1163, 6636, 1173, 6646, 1201, 6646, 1213, 6646, 1217, 6644, 1222, 6641, 1224, 6635, 1224, 6632, 1230, 6632, 1239, 6631, 1261, 6631, 1261, 6627, 1263, 6624, 1265, 6617, 1270, 6616, 1274, 6616, 1285, 6616, 1290, 6616, 1291, 6610, 1290, 6604, 1291, 6603, 1291, 6600, 1296, 6599, 1297, 6598, 1306, 6598, L, 1321, 6600, Q, 1313, 6614, 1342, 6615, 1378, 6616, 1380, 6620, 1385, 6627, 1417, 6629, 1424, 6629, 1432, 6636, 1447, 6648, 1449, 6649, 1461, 6655, 1470, 6675, 1475, 6685, 1485, 6707, 1489, 6714, 1492, 6735, 1495, 6741, 1503, 6778, 1506, 6787, 1513, 6794, 1517, 6799, 1518, 6815, L, 1537, 6838, 1551, 6842, Q, 1566, 6846, 1571, 6849, 1596, 6862, 1596, 6862, 1611, 6880, 1643, 6909, 1669, 6935, 1672, 6961, L, 1694, 6961, Q, 1709, 6949, 1710, 6943, 1711, 6935, 1716, 6933, L, 1724, 6931, Q, 1725, 6927, 1725, 6911, 1725, 6902, 1734, 6899, 1742, 6896, 1739, 6887, L, 1739, 6871, Q, 1724, 6871, 1716, 6850, 1707, 6828, 1697, 6827, 1697, 6785, 1699, 6756, 1688, 6760, 1685, 6752, 1685, 6750, 1685, 6735, L, 1687, 6685, 1671, 6683, Q, 1672, 6659, 1666, 6653, 1660, 6646, 1660, 6629, L, 1662, 6585, Q, 1661, 6583, 1660, 6580, 1655, 6565, 1648, 6544, 1647, 6541, 1647, 6513, 1647, 6481, 1665, 6465, 1681, 6441, 1683, 6440, 1683, 6439, 1692, 6435, 1704, 6431, 1706, 6430, 1735, 6416, 1748, 6409, 1772, 6398, 1774, 6387, 1777, 6370, 1776, 6337, 1773, 6288, 1773, 6280, 1790, 6245, 1795, 6231, 1803, 6209, 1801, 6192, 1790, 6173, 1785, 6138, 1781, 6096, 1778, 6078, 1776, 6061, 1766, 6044, 1764, 6042, 1761, 6029, 1757, 6015, 1753, 6004, 1749, 5993, 1737, 5974, 1726, 5957, 1723, 5948, 1720, 5938, 1718, 5917, 1717, 5900, 1710, 5889, 1706, 5883, 1697, 5863, 1686, 5841, 1684, 5832, 1681, 5821, 1669, 5799, 1657, 5777, 1650, 5758, 1643, 5739, 1644, 5728, 1646, 5718, 1644, 5696, 1644, 5694, 1645, 5692, 1659, 5649, 1659, 5584, 1657, 5509, 1659, 5473, 1672, 5445, 1668, 5416, 1666, 5401, 1671, 5380, 1676, 5362, 1682, 5354, 1682, 5343, 1686, 5329, 1692, 5313, 1694, 5302, 1697, 5293, 1696, 5279, 1696, 5265, 1696, 5258, 1698, 5250, 1685, 5233, 1672, 5214, 1670, 5210, 1669, 5204, 1670, 5195, 1670, 5186, 1670, 5181, L, 1668, 5147, Q, 1668, 5143, 1669, 5140, L, 1643, 5140, Q, 1633, 5141, 1620, 5141, 1605, 5141, 1602, 5141, 1595, 5140, 1591, 5132, 1578, 5106, 1572, 5097, 1563, 5087, 1560, 5082, 1554, 5075, 1555, 5067, 1555, 5057, 1551, 5049, 1544, 5038, 1544, 5035, 1543, 5033, 1544, 5016, 1544, 5003, 1538, 4998, 1529, 4990, 1528, 4986, 1526, 4977, 1525, 4975, 1523, 4971, 1519, 4971, 1498, 4971, 1484, 4971, 1479, 4970, 1474, 4965, 1470, 4961, 1469, 4958, 1467, 4956, 1450, 4956, 1429, 4956, 1428, 4962, 1426, 4967, 1413, 4967, Q, 1398, 4967, 1388, 4962, Z]],
      "label": "Kanchanpur",
      "shortLabel": "KN",
      "labelPosition": [91.8, 552.4],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'mahakali',
  type: 'maps'
};

/***/ })

/******/ });
}));
