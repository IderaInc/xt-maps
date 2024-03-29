
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
/******/ 	return __webpack_require__(__webpack_require__.s = 198);
/******/ })
/************************************************************************/
/******/ ({

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(199);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 199:
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
 * @id fusionmaps.CommunityOfMadrid.1.04-03-2017 11:58:17
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
  "name": "CommunityOfMadrid",
  "revision": 1,
  "standaloneInit": true,
  "baseWidth": 365,
  "baseHeight": 400,
  "baseScaleFactor": 10,
  "entities": {
    "ES.MA.MA": {
      "outlines": [[M, 2741, 538, Q, 2768, 453, 2714, 376, 2648, 286, 2571, 196, 2506, 124, 2459, 37, 2399, 75, 2328, 116, 2216, 182, 2117, 294, 2027, 401, 1909, 475, 1830, 529, 1739, 565, 1523, 655, 1531, 863, 1534, 874, 1534, 882, 1542, 926, 1529, 965, 1523, 981, 1518, 997, 1490, 1093, 1403, 1134, 1337, 1164, 1266, 1167, 1247, 1170, 1230, 1183, 1211, 1200, 1187, 1211, 1170, 1219, 1162, 1227, 1121, 1298, 1091, 1375, 1088, 1381, 1088, 1383, 1031, 1408, 954, 1389, 943, 1386, 929, 1381, 913, 1375, 894, 1375, 771, 1372, 691, 1471, 675, 1495, 653, 1509, 595, 1545, 595, 1610, 664, 1616, 735, 1616, 765, 1616, 787, 1643, 795, 1654, 787, 1668, 708, 1821, 645, 1980, 628, 2029, 639, 2089, 647, 2128, 647, 2166, 647, 2177, 637, 2188, 549, 2267, 420, 2303, 346, 2325, 352, 2423, 357, 2544, 242, 2533, 171, 2527, 133, 2571, 125, 2582, 125, 2601, 122, 2639, 106, 2664, 73, 2702, 45, 2757, 97, 2773, 95, 2858, 95, 2869, 103, 2877, 138, 2905, 185, 2861, 223, 2828, 278, 2812, 292, 2809, 300, 2798, 393, 2702, 497, 2639, 516, 2741, 576, 2779, 634, 2820, 727, 2782, 834, 2741, 932, 2680, 962, 2741, 990, 2798, 1006, 2831, 1066, 2809, 1099, 2798, 1132, 2784, 1222, 2749, 1291, 2812, 1323, 2842, 1386, 2875, 1452, 2910, 1504, 2957, 1515, 2968, 1526, 2973, 1589, 3006, 1676, 3042, 1690, 3047, 1701, 3047, 1791, 3055, 1879, 3058, 2051, 3064, 2158, 3168, 2175, 3184, 2194, 3189, 2262, 3211, 2303, 3261, 2311, 3272, 2309, 3291, 2300, 3395, 2194, 3428, 2106, 3455, 2073, 3507, 2065, 3521, 2062, 3532, 2054, 3559, 2062, 3584, 2065, 3597, 2073, 3611, 2035, 3666, 1956, 3657, 1917, 3655, 1890, 3671, 1879, 3677, 1857, 3668, 1832, 3701, 1778, 3699, 1770, 3699, 1761, 3709, 1718, 3772, 1728, 3885, 1731, 3896, 1739, 3904, 1849, 4008, 1956, 3923, 2073, 3833, 2207, 3682, 2224, 3668, 2238, 3652, 2262, 3627, 2290, 3605, 2339, 3564, 2380, 3600, 2391, 3608, 2407, 3603, 2421, 3597, 2429, 3586, 2478, 3529, 2536, 3480, 2550, 3469, 2569, 3466, 2645, 3460, 2689, 3480, 2705, 3488, 2725, 3488, 2807, 3493, 2815, 3411, 2815, 3400, 2826, 3389, 2864, 3340, 2924, 3348, 2960, 3354, 2990, 3359, 3111, 3389, 3234, 3417, 3245, 3419, 3253, 3422, 3264, 3419, 3275, 3406, 3291, 3392, 3305, 3378, 3340, 3351, 3381, 3343, 3390, 3343, 3401, 3345, 3537, 3381, 3557, 3272, 3565, 3228, 3595, 3195, 3606, 3184, 3606, 3173, 3606, 3154, 3606, 3135, 3606, 3127, 3614, 3116, 3606, 3105, 3592, 3099, 3576, 3094, 3559, 3085, 3480, 3050, 3494, 2938, 3496, 2919, 3496, 2897, 3496, 2858, 3502, 2820, 3507, 2776, 3477, 2779, 3444, 2820, 3401, 2828, 3390, 2831, 3376, 2831, 3275, 2850, 3299, 2741, 3308, 2700, 3321, 2664, 3335, 2631, 3354, 2579, 3360, 2563, 3368, 2546, 3379, 2522, 3390, 2497, 3398, 2483, 3406, 2470, 3428, 2442, 3414, 2404, 3409, 2385, 3392, 2374, 3373, 2363, 3365, 2325, 3351, 2267, 3319, 2223, 3272, 2158, 3217, 2095, 3143, 2002, 3094, 1887, 3053, 1794, 3031, 1692, 3023, 1657, 3012, 1619, 3004, 1589, 2965, 1599, 2930, 1613, 2886, 1616, 2845, 1616, 2834, 1591, 2826, 1578, 2837, 1564, 2867, 1528, 2823, 1501, 2788, 1479, 2747, 1479, 2725, 1479, 2703, 1463, 2689, 1449, 2667, 1441, 2634, 1433, 2637, 1400, 2640, 1389, 2640, 1378, 2648, 1249, 2640, 1123, 2629, 965, 2664, 819, Q, 2700, 680, 2741, 538, Z]],
      "label": "Madrid",
      "shortLabel": "MA",
      "labelPosition": [183, 199.9],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'communityofmadrid',
  type: 'maps'
};

/***/ })

/******/ });
}));
