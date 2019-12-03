
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
/******/ 	return __webpack_require__(__webpack_require__.s = 178);
/******/ })
/************************************************************************/
/******/ ({

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(179);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 179:
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
 * @id fusionmaps.SouthAustralia.18.08-13-2012 03:01:40
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
  "name": "SouthAustralia",
  "revision": 18,
  "standaloneInit": true,
  "baseWidth": 393,
  "baseHeight": 570,
  "baseScaleFactor": 10,
  "entities": {
    "SA01": {
      "outlines": [[M, 2327, 573, Q, 2353, 574, 3885, 586, L, 3885, 39, 51, 39, 50, 1028, 278, 1028, Q, 343, 1033, 532, 1085, 688, 1129, 819, 1117, L, 819, 1891, 2036, 1891, 2025, 573, Z]],
      "label": "Outback",
      "shortLabel": "OU",
      "labelPosition": [146.5, 96.5],
      "labelAlignment": [CEN, MID]
    },
    "SA02": {
      "outlines": [[M, 2025, 573, L, 2036, 1891, Q, 2037, 1905, 2030, 1920, 2030, 1934, 2047, 1947, 2051, 1966, 2062, 1977, 2073, 1988, 2082, 2004, L, 2095, 2017, Q, 2102, 2023, 2100, 2037, 2117, 2056, 2139, 2088, 2150, 2100, 2174, 2143, L, 2213, 2195, Q, 2228, 2214, 2229, 2221, 2230, 2237, 2232, 2240, 2236, 2246, 2246, 2251, 2258, 2268, 2280, 2312, 2286, 2320, 2306, 2339, 2308, 2340, 2311, 2357, 2314, 2370, 2323, 2367, L, 2323, 2387, 2348, 2387, Q, 2349, 2381, 2349, 2379, 2368, 2379, 2377, 2377, L, 2377, 2364, 2405, 2364, 2405, 2355, 2419, 2355, 2419, 2346, Q, 2409, 2341, 2406, 2341, L, 2406, 2214, 2419, 2214, 2419, 2234, 2434, 2234, Q, 2434, 2239, 2432, 2262, 2432, 2281, 2445, 2278, L, 2445, 2296, Q, 2461, 2306, 2461, 2345, 2460, 2415, 2460, 2416, L, 2471, 2416, 2473, 2453, 2485, 2453, 2485, 2469, 2497, 2469, Q, 2499, 2476, 2502, 2492, 2506, 2502, 2520, 2499, L, 2520, 2525, Q, 2515, 2528, 2499, 2528, 2497, 2532, 2497, 2541, 2483, 2541, 2478, 2547, 2473, 2552, 2462, 2553, 2466, 2572, 2441, 2571, 2415, 2569, 2419, 2586, 2408, 2585, 2408, 2612, 2408, 2619, 2419, 2644, 2431, 2670, 2432, 2709, 2432, 2733, 2451, 2753, 2469, 2772, 2469, 2792, 2468, 2795, 2468, 2800, L, 2525, 2800, 2525, 2881, 2654, 2881, Q, 2706, 2883, 2714, 2874, 2718, 2870, 2718, 2827, 2718, 2778, 2716, 2772, L, 2658, 2772, Q, 2654, 2766, 2656, 2705, 2657, 2643, 2636, 2650, 2636, 2631, 2628, 2628, 2620, 2624, 2621, 2606, L, 2609, 2606, 2609, 2544, 2849, 2544, Q, 2857, 2553, 2885, 2555, 2912, 2557, 2947, 2559, L, 3040, 2559, Q, 3056, 2559, 3070, 2571, L, 3184, 2571, Q, 3180, 2778, 3177, 2794, 3177, 2799, 3171, 2813, 3168, 2819, 3168, 2821, 3167, 2823, 3167, 2823, 3167, 2829, 3170, 2829, L, 3170, 3000, 3159, 3000, 3159, 3023, 3342, 3023, 3342, 3070, 3353, 3070, Q, 3353, 3074, 3355, 3081, L, 3430, 3081, Q, 3419, 3109, 3450, 3110, 3467, 3110, 3504, 3105, 3586, 3108, 3598, 3109, 3604, 3142, 3602, 3239, L, 3641, 3239, 3641, 3226, 3654, 3226, 3654, 3217, 3659, 3217, Q, 3659, 3220, 3660, 3224, 3661, 3241, 3663, 3272, L, 3676, 3272, 3678, 3274, 3678, 3291, 3659, 3291, 3659, 3315, 3672, 3315, Q, 3676, 3352, 3676, 3368, L, 3707, 3368, 3707, 3378, Q, 3726, 3373, 3719, 3389, L, 3764, 3389, Q, 3761, 3386, 3760, 3385, 3768, 3352, 3768, 3351, 3768, 3341, 3760, 3342, L, 3760, 3324, 3785, 3324, Q, 3784, 3300, 3793, 3303, L, 3793, 3296, 3830, 3296, 3830, 3280, 3854, 3280, Q, 3854, 3260, 3859, 3227, L, 3859, 3200, 3845, 3200, Q, 3847, 3192, 3847, 3188, 3851, 3188, 3859, 3190, L, 3859, 3179, 3867, 3179, 3867, 3187, 3883, 3187, 3885, 586, Q, 2353, 574, 2327, 573, Z]],
      "label": "Flinders Ranges",
      "shortLabel": "FR",
      "labelPosition": [295.5, 147.8],
      "labelAlignment": [CEN, MID]
    },
    "SA03": {
      "outlines": [[M, 2030, 1920, Q, 2037, 1905, 2036, 1891, L, 819, 1891, 819, 1117, Q, 688, 1129, 532, 1085, 343, 1033, 278, 1028, L, 50, 1028, 50, 1952, 76, 1952, 78, 1943, Q, 116, 1944, 198, 1944, L, 198, 1928, 185, 1928, 185, 1910, 175, 1910, 175, 1884, 209, 1884, Q, 214, 1889, 217, 1911, L, 295, 1911, Q, 297, 1923, 298, 1929, 323, 1925, 319, 1947, L, 339, 1947, Q, 340, 1953, 340, 1967, L, 380, 1967, 380, 1995, 392, 1997, 392, 2008, 404, 2008, 404, 2021, Q, 419, 2018, 421, 2023, 423, 2025, 423, 2043, 423, 2066, 411, 2065, L, 411, 2055, 400, 2055, 400, 2047, 382, 2047, 382, 2065, Q, 389, 2072, 389, 2094, 388, 2127, 374, 2123, L, 374, 2140, 380, 2140, 380, 2156, 395, 2156, Q, 397, 2153, 398, 2147, L, 413, 2147, Q, 408, 2134, 424, 2136, 440, 2136, 436, 2123, L, 445, 2123, Q, 454, 2125, 458, 2125, 458, 2110, 460, 2105, L, 506, 2105, Q, 521, 2106, 557, 2106, L, 557, 2132, Q, 566, 2131, 571, 2133, L, 571, 2143, 585, 2143, Q, 586, 2147, 586, 2161, 596, 2160, 595, 2170, 595, 2189, 595, 2190, L, 606, 2192, 606, 2257, Q, 600, 2258, 588, 2258, 588, 2274, 586, 2280, L, 563, 2280, 563, 2245, 498, 2245, Q, 497, 2246, 491, 2247, L, 491, 2264, Q, 496, 2267, 502, 2267, L, 502, 2284, 516, 2284, 516, 2312, Q, 517, 2339, 500, 2363, L, 500, 2375, Q, 500, 2374, 532, 2374, 549, 2373, 543, 2391, L, 554, 2392, 554, 2422, 538, 2422, Q, 540, 2461, 572, 2455, 590, 2450, 588, 2499, 605, 2496, 609, 2530, 617, 2529, 621, 2536, L, 637, 2536, 639, 2525, 652, 2525, Q, 653, 2521, 653, 2512, L, 663, 2512, Q, 673, 2515, 675, 2515, L, 675, 2502, 700, 2502, Q, 712, 2512, 718, 2512, 733, 2512, 738, 2524, 752, 2529, 750, 2540, 753, 2549, 765, 2558, 766, 2562, 784, 2567, 793, 2569, 801, 2584, 819, 2595, 820, 2603, 823, 2607, 834, 2609, 840, 2611, 839, 2618, 846, 2617, 858, 2624, 868, 2631, 880, 2627, 878, 2639, 885, 2648, L, 898, 2648, 898, 2753, Q, 898, 2757, 898, 2775, 898, 2791, 891, 2791, 890, 2800, 903, 2805, 916, 2810, 919, 2822, 928, 2826, 935, 2838, 942, 2845, 953, 2850, 963, 2861, 984, 2879, 1001, 2894, 1006, 2915, 1042, 2933, 1041, 2943, 1056, 2943, 1060, 2957, 1064, 2973, 1073, 2975, 1080, 2994, 1102, 3002, 1103, 3022, 1103, 3072, 1103, 3104, 1106, 3107, 1111, 3111, 1114, 3137, 1129, 3135, 1131, 3146, 1133, 3152, 1134, 3167, 1148, 3164, 1142, 3189, 1150, 3191, 1150, 3201, 1149, 3218, 1149, 3219, L, 1149, 3267, Q, 1162, 3280, 1161, 3287, 1159, 3311, 1168, 3313, L, 1168, 3340, 1160, 3340, 1160, 3349, Q, 1168, 3347, 1168, 3359, 1159, 3356, 1160, 3365, 1160, 3369, 1161, 3377, L, 1133, 3377, 1133, 3348, 1124, 3348, 1124, 3334, 1112, 3334, 1112, 3325, 1097, 3325, 1097, 3316, 1090, 3316, 1090, 3298, 1079, 3298, Q, 1075, 3302, 1075, 3307, L, 1068, 3307, 1068, 3324, 1050, 3324, 1050, 3380, 1040, 3380, 1041, 3387, 1064, 3387, 1064, 3361, 1108, 3361, Q, 1107, 3372, 1115, 3390, 1120, 3388, 1126, 3393, 1131, 3397, 1130, 3403, L, 1140, 3403, Q, 1142, 3407, 1146, 3422, L, 1146, 3433, 1134, 3433, 1136, 3441, Q, 1153, 3438, 1170, 3444, 1187, 3450, 1190, 3463, 1194, 3480, 1227, 3505, L, 1246, 3526, Q, 1247, 3526, 1258, 3551, 1262, 3560, 1273, 3574, 1285, 3595, 1286, 3597, L, 1323, 3597, 1323, 3571, 1340, 3571, 1340, 3547, 1361, 3547, Q, 1366, 3549, 1374, 3561, 1379, 3568, 1392, 3565, L, 1392, 3594, Q, 1414, 3588, 1416, 3608, L, 1438, 3608, Q, 1438, 3614, 1441, 3628, 1450, 3628, 1453, 3631, L, 1467, 3631, Q, 1467, 3619, 1472, 3615, 1476, 3611, 1476, 3602, 1476, 3579, 1459, 3580, L, 1459, 3542, 1473, 3542, 1473, 3530, 1487, 3530, 1487, 3484, 1467, 3476, 1467, 3490, Q, 1463, 3488, 1460, 3488, 1455, 3488, 1453, 3499, L, 1433, 3499, 1433, 3510, Q, 1419, 3509, 1418, 3521, L, 1407, 3521, Q, 1398, 3515, 1392, 3513, L, 1392, 3499, 1409, 3499, Q, 1409, 3447, 1424, 3441, 1424, 3427, 1421, 3421, L, 1438, 3421, 1438, 3406, Q, 1426, 3404, 1427, 3389, 1426, 3374, 1428, 3375, 1432, 3377, 1438, 3363, 1439, 3360, 1461, 3352, 1476, 3346, 1522, 3346, 1515, 3330, 1527, 3326, 1540, 3319, 1542, 3309, 1548, 3272, 1548, 3261, 1548, 3244, 1565, 3241, 1588, 3237, 1596, 3228, 1601, 3223, 1631, 3176, 1650, 3145, 1666, 3064, L, 1706, 3064, Q, 1735, 3045, 1746, 3026, 1761, 3003, 1778, 2996, L, 1787, 2996, 1787, 2972, 1808, 2972, 1808, 2957, 1823, 2957, Q, 1821, 2947, 1835, 2948, L, 1836, 2937, 1859, 2937, 1859, 2927, 1896, 2927, 1896, 2914, Q, 1903, 2913, 1918, 2914, 1929, 2913, 1924, 2898, L, 1947, 2898, 1947, 2887, 1968, 2887, Q, 1964, 2870, 1983, 2870, 1991, 2870, 1995, 2865, 1997, 2860, 2005, 2860, 2034, 2861, 2073, 2859, 2073, 2849, 2074, 2844, L, 2102, 2844, 2102, 2828, 2117, 2828, Q, 2111, 2816, 2121, 2812, 2131, 2807, 2131, 2802, 2130, 2792, 2136, 2784, 2143, 2776, 2143, 2772, 2143, 2759, 2156, 2738, 2168, 2720, 2171, 2712, L, 2174, 2682, 2185, 2682, 2185, 2653, 2201, 2653, Q, 2200, 2646, 2208, 2599, L, 2219, 2599, 2219, 2583, 2232, 2583, Q, 2241, 2525, 2244, 2506, 2250, 2508, 2255, 2497, 2259, 2491, 2273, 2493, 2278, 2492, 2282, 2478, 2286, 2466, 2297, 2473, 2310, 2464, 2310, 2446, L, 2310, 2416, 2351, 2416, Q, 2351, 2416, 2373, 2420, L, 2373, 2436, 2388, 2436, 2388, 2429, 2403, 2429, 2404, 2416, 2388, 2416, 2388, 2394, 2406, 2394, Q, 2406, 2376, 2419, 2379, L, 2419, 2355, 2405, 2355, 2405, 2364, 2377, 2364, 2377, 2377, Q, 2368, 2379, 2349, 2379, 2349, 2381, 2348, 2387, L, 2323, 2387, 2323, 2367, Q, 2314, 2370, 2311, 2357, 2308, 2340, 2306, 2339, 2286, 2320, 2280, 2312, 2258, 2268, 2246, 2251, 2236, 2246, 2232, 2240, 2230, 2237, 2229, 2221, 2228, 2214, 2213, 2195, L, 2174, 2143, Q, 2150, 2100, 2139, 2088, 2117, 2056, 2100, 2037, 2102, 2023, 2095, 2017, L, 2082, 2004, Q, 2073, 1988, 2062, 1977, 2051, 1966, 2047, 1947, Q, 2030, 1934, 2030, 1920, Z]],
      "label": "Eyre Peninsula",
      "shortLabel": "EP",
      "labelPosition": [140.2, 249.7],
      "labelAlignment": [CEN, MID]
    },
    "SA04": {
      "outlines": [[M, 3070, 2571, Q, 3056, 2559, 3040, 2559, L, 2947, 2559, Q, 2912, 2557, 2885, 2555, 2857, 2553, 2849, 2544, L, 2609, 2544, 2609, 2606, 2621, 2606, Q, 2620, 2624, 2628, 2628, 2636, 2631, 2636, 2650, 2657, 2643, 2656, 2705, 2654, 2766, 2658, 2772, L, 2716, 2772, Q, 2718, 2778, 2718, 2827, 2718, 2870, 2714, 2874, 2706, 2883, 2654, 2881, L, 2525, 2881, 2528, 2933, 2514, 2933, 2514, 3023, Q, 2520, 3024, 2528, 3024, L, 2528, 3042, 2541, 3043, 2541, 3065, 2555, 3065, 2555, 3076, 2571, 3076, 2571, 3174, Q, 2585, 3169, 2585, 3181, 2585, 3188, 2585, 3202, L, 2596, 3202, 2596, 3217, Q, 2608, 3213, 2608, 3233, L, 2621, 3233, Q, 2622, 3279, 2636, 3278, L, 2638, 3325, Q, 2649, 3329, 2649, 3340, L, 2649, 3365, Q, 2666, 3364, 2665, 3377, 2664, 3390, 2671, 3392, 2670, 3406, 2685, 3416, 2699, 3425, 2697, 3437, L, 2705, 3438, Q, 2700, 3450, 2720, 3450, L, 2720, 3484, 2859, 3484, Q, 2861, 3488, 2861, 3491, L, 2903, 3492, Q, 2904, 3492, 2905, 3492, 2917, 3486, 2912, 3380, L, 2921, 3380, Q, 2918, 3372, 2939, 3370, L, 2939, 3356, Q, 2945, 3354, 2962, 3356, 2974, 3355, 2968, 3339, L, 3018, 3339, 3018, 3325, 3047, 3325, 3047, 3335, 3057, 3335, Q, 3060, 3330, 3060, 3328, L, 3077, 3328, Q, 3076, 3321, 3076, 3317, 3076, 3311, 3082, 3313, L, 3082, 3300, 3097, 3298, 3130, 3298, Q, 3148, 3299, 3153, 3290, 3172, 3282, 3173, 3278, L, 3173, 3245, Q, 3173, 3216, 3171, 3206, L, 3157, 3206, 3155, 3023, 3159, 3023, 3159, 3000, 3170, 3000, 3170, 2829, Q, 3167, 2829, 3167, 2823, 3167, 2823, 3168, 2821, 3168, 2819, 3171, 2813, 3177, 2799, 3177, 2794, 3180, 2778, 3184, 2571, Z]],
      "label": "Clare Valley",
      "shortLabel": "CV",
      "labelPosition": [284.9, 301.8],
      "labelAlignment": [CEN, MID]
    },
    "SA05": {
      "outlines": [[M, 3047, 3325, L, 3018, 3325, 3018, 3339, 2968, 3339, Q, 2974, 3355, 2962, 3356, 2945, 3354, 2939, 3356, L, 2939, 3370, Q, 2918, 3372, 2921, 3380, L, 2912, 3380, Q, 2917, 3486, 2905, 3492, L, 2905, 3504, 2926, 3504, 2926, 3517, 2940, 3517, 2940, 3532, 2956, 3532, 2956, 3517, 2983, 3517, Q, 2979, 3505, 2986, 3504, 2990, 3504, 3000, 3504, L, 3000, 3495, Q, 3015, 3497, 3013, 3489, L, 3025, 3489, 3025, 3477, 3048, 3477, 3048, 3458, 3061, 3458, Q, 3060, 3450, 3060, 3446, 3060, 3438, 3066, 3439, L, 3066, 3408, Q, 3064, 3405, 3064, 3383, 3064, 3365, 3062, 3358, L, 3062, 3328, 3060, 3328, Q, 3060, 3330, 3057, 3335, L, 3047, 3335, Z]],
      "label": "Barossa Valley",
      "shortLabel": "BV",
      "labelPosition": [299.5, 342.8],
      "labelAlignment": [CEN, MID]
    },
    "SA06": {
      "outlines": [[M, 2468, 2800, Q, 2467, 2808, 2464, 2818, L, 2449, 2818, Q, 2447, 2832, 2432, 2837, 2420, 2841, 2425, 2855, 2397, 2882, 2396, 2885, 2393, 2892, 2376, 2896, 2375, 2897, 2353, 2912, 2351, 2913, 2332, 2945, 2334, 2964, 2319, 2968, 2303, 2972, 2302, 2994, L, 2285, 2994, 2285, 3040, Q, 2275, 3035, 2276, 3048, L, 2276, 3066, 2255, 3066, Q, 2254, 3069, 2256, 3126, 2258, 3161, 2217, 3148, L, 2217, 3157, 2202, 3157, 2202, 3167, Q, 2210, 3165, 2214, 3175, 2217, 3187, 2226, 3191, L, 2226, 3268, 2215, 3268, 2215, 3309, 2204, 3309, 2204, 3322, 2189, 3322, 2189, 3345, Q, 2195, 3344, 2195, 3362, L, 2213, 3362, 2213, 3380, Q, 2221, 3380, 2230, 3387, L, 2230, 3461, Q, 2217, 3457, 2217, 3465, 2218, 3481, 2218, 3482, L, 2206, 3482, Q, 2198, 3529, 2201, 3605, 2188, 3601, 2187, 3612, 2187, 3618, 2187, 3629, L, 2150, 3629, 2150, 3617, 2125, 3617, 2125, 3602, 2064, 3602, 2064, 3610, 2027, 3610, Q, 2011, 3600, 2002, 3600, 1977, 3600, 1981, 3609, L, 1970, 3609, 1969, 3623, 1953, 3623, 1952, 3660, Q, 1940, 3661, 1940, 3676, L, 1944, 3719, Q, 1944, 3740, 1940, 3746, 1922, 3756, 1924, 3760, 1903, 3755, 1907, 3777, L, 1899, 3777, 1899, 3789, 1883, 3789, 1883, 3828, Q, 1888, 3827, 1900, 3839, L, 1922, 3839, 1922, 3828, 1946, 3828, 1946, 3819, Q, 1973, 3819, 1981, 3812, 1981, 3799, 1983, 3795, L, 2009, 3795, 2009, 3802, 2020, 3802, 2020, 3814, 2057, 3814, 2057, 3804, Q, 2075, 3812, 2077, 3797, 2079, 3780, 2095, 3786, L, 2095, 3777, 2111, 3777, Q, 2111, 3784, 2113, 3786, L, 2137, 3786, 2137, 3773, 2154, 3773, 2154, 3756, 2176, 3756, Q, 2178, 3752, 2178, 3746, L, 2201, 3746, 2201, 3736, 2232, 3736, Q, 2228, 3754, 2254, 3751, L, 2254, 3762, 2273, 3762, Q, 2268, 3773, 2279, 3775, 2293, 3776, 2294, 3781, L, 2316, 3781, Q, 2325, 3768, 2325, 3747, L, 2345, 3747, Q, 2339, 3694, 2353, 3689, 2356, 3666, 2357, 3656, 2356, 3648, 2363, 3645, 2366, 3644, 2378, 3640, 2378, 3623, 2386, 3614, 2394, 3604, 2394, 3586, 2394, 3569, 2404, 3561, 2406, 3560, 2408, 3552, 2410, 3544, 2417, 3543, 2417, 3506, 2423, 3482, 2429, 3458, 2429, 3456, 2421, 3444, 2421, 3426, 2421, 3409, 2431, 3409, 2431, 3391, 2439, 3376, 2445, 3359, 2445, 3340, L, 2458, 3340, Q, 2458, 3326, 2458, 3321, 2459, 3312, 2475, 3315, L, 2476, 3296, 2486, 3296, 2486, 3268, Q, 2510, 3273, 2510, 3245, 2504, 3208, 2508, 3196, 2523, 3203, 2521, 3175, 2540, 3175, 2547, 3173, 2549, 3177, 2552, 3191, 2554, 3202, 2559, 3204, 2570, 3209, 2572, 3217, 2573, 3221, 2573, 3230, 2586, 3229, 2586, 3242, L, 2585, 3265, 2595, 3266, 2595, 3309, Q, 2604, 3323, 2620, 3372, 2629, 3381, 2636, 3394, 2646, 3398, 2651, 3426, 2653, 3428, 2665, 3448, 2678, 3468, 2685, 3484, 2691, 3500, 2698, 3505, 2701, 3508, 2708, 3512, L, 2708, 3502, Q, 2711, 3500, 2720, 3499, L, 2720, 3450, Q, 2700, 3450, 2705, 3438, L, 2697, 3437, Q, 2699, 3425, 2685, 3416, 2670, 3406, 2671, 3392, 2664, 3390, 2665, 3377, 2666, 3364, 2649, 3365, L, 2649, 3340, Q, 2649, 3329, 2638, 3325, L, 2636, 3278, Q, 2622, 3279, 2621, 3233, L, 2608, 3233, Q, 2608, 3213, 2596, 3217, L, 2596, 3202, 2585, 3202, Q, 2585, 3188, 2585, 3181, 2585, 3169, 2571, 3174, L, 2571, 3076, 2555, 3076, 2555, 3065, 2541, 3065, 2541, 3043, 2528, 3042, 2528, 3024, Q, 2520, 3024, 2514, 3023, L, 2514, 2933, 2528, 2933, 2525, 2800, Z]],
      "label": "Yorke Peninsula",
      "shortLabel": "YP",
      "labelPosition": [233.7, 331.9],
      "labelAlignment": [CEN, MID]
    },
    "SA07": {
      "outlines": [[M, 2840, 3484, L, 2720, 3484, 2720, 3499, Q, 2711, 3500, 2708, 3502, L, 2708, 3512, Q, 2717, 3516, 2731, 3522, L, 2731, 3543, Q, 2719, 3549, 2714, 3549, L, 2714, 3559, 2709, 3559, 2709, 3621, Q, 2718, 3627, 2719, 3669, 2718, 3698, 2697, 3867, 2701, 3867, 2719, 3866, 2726, 3865, 2726, 3854, 2755, 3849, 2763, 3847, L, 2763, 3839, Q, 2773, 3841, 2806, 3832, 2803, 3823, 2813, 3820, 2827, 3814, 2828, 3812, 2849, 3811, 2863, 3808, 2866, 3808, 2873, 3800, 2879, 3793, 2888, 3795, 2903, 3798, 2922, 3788, L, 2922, 3780, 2926, 3780, 2926, 3747, 2912, 3747, Q, 2918, 3735, 2907, 3725, 2896, 3714, 2897, 3710, 2900, 3662, 2886, 3665, 2886, 3645, 2886, 3636, 2885, 3619, 2870, 3619, 2870, 3566, 2855, 3568, 2855, 3558, 2855, 3552, 2853, 3540, 2845, 3543, Q, 2840, 3506, 2840, 3484, Z]],
      "label": "Adelaide",
      "shortLabel": "AD",
      "labelPosition": [281.1, 367.5],
      "labelAlignment": [CEN, MID]
    },
    "SA08": {
      "outlines": [[M, 3082, 3300, L, 3082, 3313, Q, 3076, 3311, 3076, 3317, 3076, 3321, 3077, 3328, L, 3062, 3328, 3062, 3358, Q, 3064, 3365, 3064, 3383, 3064, 3405, 3066, 3408, L, 3066, 3439, Q, 3060, 3438, 3060, 3446, 3060, 3450, 3061, 3458, L, 3048, 3458, 3048, 3477, 3025, 3477, 3025, 3489, 3013, 3489, Q, 3015, 3497, 3000, 3495, L, 3000, 3504, Q, 2990, 3504, 2986, 3504, 2979, 3505, 2983, 3517, L, 2956, 3517, 2956, 3532, 2940, 3532, 2940, 3517, 2926, 3517, 2926, 3504, 2905, 3504, 2905, 3492, 2861, 3491, Q, 2861, 3488, 2859, 3484, L, 2840, 3484, Q, 2840, 3506, 2845, 3543, 2853, 3540, 2855, 3552, 2855, 3558, 2855, 3568, 2870, 3566, 2870, 3619, 2885, 3619, 2886, 3636, 2886, 3645, 2886, 3665, 2900, 3662, 2897, 3710, 2896, 3714, 2907, 3725, 2918, 3735, 2912, 3747, L, 2926, 3747, 2926, 3780, 2987, 3780, 2987, 3791, 2996, 3791, 2997, 3810, Q, 3008, 3803, 3012, 3829, 3012, 3842, 3027, 3851, 3027, 3856, 3028, 3869, 3029, 3874, 3037, 3879, L, 3037, 3912, Q, 3050, 3908, 3051, 3925, 3052, 3942, 3062, 3942, 3062, 3957, 3064, 3964, 3063, 3978, 3075, 3975, 3074, 4000, 3097, 3997, 3099, 3993, 3101, 3989, 3114, 3966, 3129, 3964, L, 3130, 3952, 3127, 3908, Q, 3135, 3889, 3136, 3873, 3150, 3873, 3162, 3871, L, 3162, 3847, 3125, 3847, Q, 3129, 3833, 3122, 3819, 3113, 3802, 3114, 3795, 3103, 3789, 3103, 3773, L, 3103, 3705, Q, 3122, 3696, 3116, 3673, 3143, 3683, 3144, 3654, 3141, 3616, 3144, 3604, L, 3175, 3604, 3177, 3594, 3205, 3594, Q, 3224, 3591, 3224, 3562, 3224, 3538, 3182, 3472, 3153, 3427, 3134, 3403, 3132, 3389, 3114, 3354, 3107, 3327, 3097, 3309, L, 3097, 3298, Z]],
      "label": "Adelaide Hills",
      "shortLabel": "AH",
      "labelPosition": [303.2, 362.1],
      "labelAlignment": [CEN, MID]
    },
    "SA09": {
      "outlines": [[M, 2987, 3791, L, 2987, 3780, 2922, 3780, 2922, 3788, Q, 2903, 3798, 2888, 3795, 2879, 3793, 2873, 3800, 2866, 3808, 2863, 3808, 2849, 3811, 2828, 3812, 2827, 3814, 2813, 3820, 2803, 3823, 2806, 3832, 2773, 3841, 2763, 3839, L, 2763, 3847, Q, 2755, 3849, 2726, 3854, 2726, 3865, 2719, 3866, 2701, 3867, 2697, 3867, L, 2697, 3885, Q, 2682, 3882, 2668, 3903, 2653, 3924, 2636, 3920, 2639, 3926, 2632, 3932, 2624, 3938, 2619, 3935, L, 2619, 3960, 2606, 3960, Q, 2600, 3958, 2590, 3958, L, 2590, 3979, 2577, 3979, 2577, 3989, Q, 2566, 3988, 2562, 3989, 2551, 3990, 2556, 4001, L, 2543, 4001, Q, 2547, 4015, 2529, 4013, L, 2529, 4026, 2514, 4026, 2514, 4045, Q, 2530, 4059, 2534, 4060, 2536, 4060, 2541, 4069, 2545, 4076, 2552, 4075, L, 2553, 4075, Q, 2582, 4076, 2600, 4077, L, 2747, 4077, Q, 2746, 4067, 2758, 4067, 2766, 4066, 2768, 4057, 2777, 4051, 2778, 4044, 2777, 4036, 2790, 4036, L, 2791, 4022, Q, 2798, 4026, 2806, 4019, 2815, 4012, 2810, 4003, 2821, 4003, 2823, 4004, L, 2823, 3998, 2836, 3998, Q, 2836, 4016, 2869, 4008, L, 2869, 4017, Q, 2878, 4014, 2891, 4027, 2892, 4028, 2892, 4029, 2911, 4047, 2945, 4079, L, 2973, 4107, Q, 2982, 4116, 3004, 4124, 3008, 4106, 3021, 4112, L, 3021, 4098, Q, 3027, 4098, 3038, 4096, 3037, 4087, 3060, 4061, 3062, 4052, 3064, 4048, 3066, 4040, 3074, 4042, 3072, 4025, 3077, 4022, 3085, 4017, 3097, 3997, 3074, 4000, 3075, 3975, 3063, 3978, 3064, 3964, 3062, 3957, 3062, 3942, 3052, 3942, 3051, 3925, 3050, 3908, 3037, 3912, L, 3037, 3879, Q, 3029, 3874, 3028, 3869, 3027, 3856, 3027, 3851, 3012, 3842, 3012, 3829, 3008, 3803, 2997, 3810, L, 2996, 3791, Z]],
      "label": "Fleurieu Peninsula",
      "shortLabel": "FP",
      "labelPosition": [280.5, 391.6],
      "labelAlignment": [CEN, MID]
    },
    "SA10": {
      "outlines": [[M, 2270, 4032, L, 2280, 4032, 2280, 4021, 2228, 4021, 2228, 4034, 2137, 4034, 2137, 4023, 2105, 4023, Q, 2105, 4031, 2098, 4042, 2027, 4038, 2022, 4063, 1952, 4093, 1894, 4089, 1878, 4088, 1835, 4100, 1791, 4112, 1763, 4110, L, 1763, 4121, Q, 1748, 4117, 1749, 4138, 1749, 4151, 1750, 4175, L, 1737, 4175, Q, 1733, 4180, 1732, 4179, L, 1732, 4223, 1746, 4223, Q, 1746, 4229, 1748, 4241, L, 1761, 4241, Q, 1754, 4258, 1785, 4251, L, 1785, 4271, 1795, 4271, 1795, 4279, 1812, 4279, 1812, 4301, Q, 1819, 4298, 1820, 4300, 1824, 4305, 1831, 4307, L, 1852, 4307, 1852, 4296, 1877, 4296, Q, 1879, 4298, 1894, 4303, L, 1919, 4303, Q, 1918, 4292, 1926, 4292, 1929, 4292, 1941, 4296, L, 1941, 4310, 1967, 4310, 1967, 4303, 1979, 4303, Q, 1989, 4311, 2003, 4311, 2010, 4311, 2013, 4294, 2041, 4294, 2071, 4288, 2086, 4287, 2130, 4292, 2136, 4292, 2143, 4300, 2151, 4307, 2171, 4307, 2171, 4313, 2174, 4323, L, 2191, 4323, 2191, 4316, Q, 2200, 4316, 2202, 4318, L, 2213, 4318, 2213, 4306, 2233, 4306, Q, 2228, 4296, 2257, 4296, L, 2257, 4284, 2269, 4284, Q, 2270, 4284, 2270, 4281, L, 2267, 4275, 2263, 4230, 2291, 4230, 2291, 4212, Q, 2302, 4210, 2317, 4210, L, 2318, 4210, 2318, 4214, Q, 2325, 4214, 2390, 4214, 2391, 4214, 2392, 4214, L, 2440, 4215, 2440, 4227, Q, 2464, 4225, 2465, 4236, L, 2497, 4236, 2497, 4217, 2513, 4217, 2513, 4199, 2526, 4199, Q, 2523, 4185, 2523, 4180, 2508, 4183, 2501, 4163, 2493, 4144, 2482, 4147, 2486, 4133, 2463, 4134, 2461, 4123, 2461, 4118, L, 2440, 4118, 2440, 4108, 2421, 4108, 2421, 4118, 2406, 4118, 2406, 4138, Q, 2382, 4136, 2382, 4157, L, 2354, 4157, Q, 2351, 4144, 2351, 4115, L, 2270, 4115, 2270, 4086, 2291, 4086, 2291, 4063, 2263, 4063, 2263, 4047, Q, 2270, 4045, 2270, 4032, Z]],
      "label": "Kangaroo Island",
      "shortLabel": "KI",
      "labelPosition": [212.9, 417.2],
      "labelAlignment": [CEN, MID]
    },
    "SA11": {
      "outlines": [[M, 3504, 3105, Q, 3467, 3110, 3450, 3110, 3419, 3109, 3430, 3080, L, 3355, 3080, Q, 3353, 3074, 3353, 3070, L, 3341, 3070, 3341, 3023, 3154, 3023, 3156, 3206, 3171, 3206, Q, 3173, 3216, 3173, 3245, L, 3173, 3277, Q, 3172, 3282, 3152, 3290, 3148, 3299, 3130, 3298, L, 3097, 3298, 3097, 3308, Q, 3107, 3327, 3113, 3353, 3132, 3389, 3134, 3403, 3153, 3427, 3182, 3472, 3224, 3538, 3224, 3562, 3224, 3591, 3205, 3594, L, 3176, 3594, 3175, 3604, 3143, 3604, Q, 3141, 3616, 3144, 3653, 3143, 3683, 3115, 3673, 3122, 3696, 3102, 3705, L, 3102, 3772, Q, 3103, 3789, 3113, 3795, 3113, 3802, 3122, 3819, 3129, 3833, 3125, 3846, L, 3162, 3846, 3162, 3871, Q, 3150, 3873, 3136, 3873, 3135, 3889, 3127, 3908, L, 3130, 3952, 3139, 3952, Q, 3150, 3960, 3154, 3966, 3211, 3914, 3219, 3894, L, 3252, 3894, 3289, 3935, Q, 3302, 3951, 3339, 3977, 3350, 3985, 3364, 4000, 3377, 4012, 3395, 4017, 3412, 4021, 3426, 4028, 3439, 4035, 3461, 4042, L, 3492, 4060, Q, 3498, 4062, 3510, 4063, 3515, 4068, 3523, 4076, 3549, 4093, 3582, 4122, 3606, 4138, 3640, 4165, 3676, 4189, 3700, 4197, 3723, 4203, 3754, 4202, 3771, 4201, 3804, 4200, 3819, 4200, 3836, 4213, L, 3883, 4213, 3883, 3187, 3867, 3187, 3867, 3179, 3858, 3179, 3858, 3190, Q, 3851, 3188, 3847, 3188, 3847, 3192, 3845, 3199, L, 3858, 3199, 3858, 3227, Q, 3854, 3260, 3854, 3280, L, 3830, 3280, 3830, 3296, 3793, 3296, 3793, 3303, Q, 3784, 3300, 3784, 3323, L, 3760, 3323, 3760, 3342, Q, 3768, 3341, 3768, 3351, 3768, 3352, 3760, 3384, 3761, 3386, 3764, 3388, L, 3719, 3388, Q, 3726, 3373, 3706, 3378, L, 3706, 3368, 3676, 3368, Q, 3676, 3352, 3672, 3314, L, 3659, 3314, 3659, 3290, 3678, 3290, 3678, 3273, 3676, 3272, 3663, 3272, Q, 3661, 3247, 3660, 3231, 3660, 3227, 3660, 3224, 3660, 3217, 3658, 3216, 3656, 3216, 3654, 3217, 3653, 3218, 3654, 3222, 3655, 3226, 3654, 3226, L, 3641, 3226, 3641, 3238, 3602, 3238, Q, 3604, 3142, 3597, 3109, Q, 3586, 3108, 3504, 3105, Z]],
      "label": "Murray River",
      "shortLabel": "MR",
      "labelPosition": [349, 361.8],
      "labelAlignment": [CEN, MID]
    },
    "SA12": {
      "outlines": [[M, 3640, 4166, Q, 3606, 4138, 3583, 4122, 3549, 4093, 3523, 4077, 3515, 4068, 3510, 4064, 3498, 4062, 3492, 4060, L, 3461, 4042, Q, 3439, 4035, 3426, 4028, 3412, 4021, 3395, 4017, 3377, 4012, 3364, 4001, 3350, 3985, 3340, 3977, 3302, 3951, 3289, 3935, L, 3253, 3895, 3220, 3895, Q, 3211, 3914, 3154, 3966, 3150, 3960, 3140, 3952, L, 3130, 3952, 3129, 3964, Q, 3114, 3966, 3101, 3989, 3099, 3993, 3097, 3997, 3085, 4017, 3077, 4022, 3072, 4025, 3074, 4042, 3066, 4040, 3064, 4048, 3062, 4052, 3060, 4061, 3037, 4087, 3038, 4096, 3027, 4098, 3021, 4098, L, 3021, 4112, Q, 3008, 4106, 3004, 4124, 3006, 4125, 3009, 4126, 3041, 4160, 3115, 4235, 3121, 4242, 3132, 4270, 3146, 4293, 3151, 4304, 3156, 4319, 3175, 4341, 3180, 4349, 3198, 4373, 3201, 4377, 3205, 4392, 3208, 4402, 3216, 4409, 3224, 4416, 3229, 4447, 3235, 4457, 3247, 4484, 3250, 4487, 3252, 4505, 3254, 4517, 3264, 4516, 3263, 4522, 3268, 4534, L, 3268, 4555, Q, 3286, 4576, 3287, 4585, 3287, 4597, 3294, 4607, 3298, 4616, 3297, 4627, 3296, 4637, 3301, 4647, 3306, 4657, 3305, 4670, 3302, 4685, 3305, 4725, L, 3305, 4803, Q, 3294, 4803, 3294, 4833, 3294, 4849, 3296, 4874, L, 3296, 4954, Q, 3296, 4995, 3294, 5015, 3287, 5015, 3277, 5024, 3266, 5033, 3266, 5042, 3266, 5052, 3279, 5065, 3280, 5075, 3281, 5096, 3282, 5099, 3294, 5112, 3304, 5123, 3307, 5136, 3310, 5148, 3328, 5158, 3331, 5163, 3335, 5186, 3335, 5192, 3351, 5208, 3359, 5215, 3363, 5233, 3370, 5246, 3384, 5249, 3414, 5256, 3416, 5261, 3420, 5271, 3428, 5283, 3430, 5291, 3433, 5313, 3439, 5323, 3465, 5351, 3489, 5384, 3495, 5393, 3515, 5421, 3536, 5466, 3543, 5478, 3563, 5494, 3565, 5502, 3565, 5516, 3565, 5521, 3585, 5529, 3593, 5541, 3645, 5593, 3653, 5601, 3673, 5617, 3680, 5625, 3720, 5620, 3719, 5628, 3726, 5636, L, 3769, 5636, Q, 3771, 5629, 3772, 5626, L, 3822, 5626, Q, 3830, 5635, 3830, 5639, 3834, 5640, 3850, 5638, 3863, 5638, 3860, 5648, L, 3872, 5648, 3872, 5490, Q, 3882, 5397, 3883, 5375, 3884, 5352, 3882, 5351, L, 3883, 4213, 3837, 4213, Q, 3819, 4200, 3804, 4200, 3771, 4201, 3754, 4202, 3723, 4203, 3700, 4197, Q, 3676, 4189, 3640, 4166, Z]],
      "label": "Limestone Coast",
      "shortLabel": "LC",
      "labelPosition": [361.1, 477.1],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'southaustralia',
  type: 'maps'
};

/***/ })

/******/ });
}));
