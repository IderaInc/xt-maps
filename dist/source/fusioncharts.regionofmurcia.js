
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
/******/ 	return __webpack_require__(__webpack_require__.s = 556);
/******/ })
/************************************************************************/
/******/ ({

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(557);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 557:
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
 * @id fusionmaps.RegionOfMurcia.1.04-03-2017 11:58:27
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
  "name": "RegionOfMurcia",
  "revision": 1,
  "standaloneInit": true,
  "baseWidth": 390,
  "baseHeight": 400,
  "baseScaleFactor": 10,
  "entities": {
    "ES.MU.MU": {
      "outlines": [[M, 2833, 141, Q, 2797, 123, 2779, 98, 2741, 37, 2660, 40, 2586, 42, 2525, 70, 2490, 85, 2449, 113, 2419, 136, 2373, 156, 2368, 159, 2360, 162, 2317, 172, 2271, 179, 2256, 184, 2246, 174, 2241, 172, 2233, 169, 2205, 164, 2182, 159, 2093, 149, 2060, 223, 2055, 233, 2050, 243, 2045, 256, 2037, 271, 2032, 281, 2022, 289, 2009, 304, 2012, 322, 2017, 393, 2007, 461, 1992, 553, 1959, 642, 1948, 670, 1938, 695, 1936, 705, 1938, 716, 1941, 721, 1941, 723, 1948, 759, 1966, 784, 1971, 792, 1974, 799, 1976, 804, 1979, 810, 1974, 820, 1971, 835, 1966, 850, 1969, 873, 1969, 911, 1971, 947, 1979, 1021, 1969, 1089, 1966, 1102, 1964, 1112, 1964, 1117, 1959, 1120, 1946, 1140, 1933, 1153, 1918, 1170, 1898, 1181, 1809, 1226, 1725, 1277, 1717, 1282, 1704, 1285, 1694, 1287, 1682, 1287, 1656, 1290, 1638, 1267, 1628, 1254, 1610, 1242, 1608, 1239, 1605, 1234, 1577, 1186, 1547, 1115, 1526, 1071, 1496, 1033, 1493, 1028, 1481, 1026, 1471, 1026, 1458, 1023, 1435, 1018, 1415, 1018, 1407, 1018, 1399, 1021, 1354, 1048, 1323, 1094, 1285, 1150, 1262, 1209, 1255, 1234, 1227, 1239, 1206, 1247, 1183, 1249, 1135, 1259, 1087, 1270, 1036, 1282, 1000, 1318, 988, 1331, 972, 1341, 962, 1348, 945, 1348, 894, 1348, 853, 1315, 828, 1292, 802, 1303, 792, 1305, 784, 1308, 774, 1313, 767, 1320, 759, 1325, 754, 1331, 662, 1430, 568, 1526, 548, 1549, 520, 1559, 477, 1569, 441, 1592, 436, 1595, 429, 1600, 411, 1613, 403, 1628, 393, 1646, 383, 1661, 363, 1694, 337, 1717, 314, 1735, 296, 1760, 261, 1806, 225, 1849, 220, 1857, 215, 1864, 187, 1928, 154, 1991, 147, 2012, 144, 2042, 144, 2060, 119, 2060, 116, 2062, 111, 2062, 96, 2065, 80, 2068, 78, 2070, 73, 2073, 58, 2083, 42, 2101, 65, 2116, 88, 2139, 98, 2149, 98, 2159, 113, 2212, 177, 2238, 225, 2253, 253, 2266, 309, 2284, 324, 2340, L, 324, 2345, Q, 345, 2347, 352, 2365, 373, 2403, 436, 2428, 451, 2434, 467, 2441, 528, 2467, 617, 2469, 637, 2469, 650, 2461, 678, 2449, 723, 2459, 736, 2461, 746, 2461, 848, 2474, 830, 2578, 828, 2591, 825, 2601, 810, 2660, 843, 2705, 878, 2759, 868, 2855, 863, 2891, 858, 2929, 856, 2947, 848, 2957, 825, 2980, 830, 3038, 838, 3127, 878, 3178, 957, 3277, 1054, 3346, 1120, 3392, 1150, 3458, 1158, 3470, 1161, 3481, 1194, 3570, 1227, 3658, 1232, 3671, 1234, 3681, 1239, 3699, 1247, 3704, 1267, 3717, 1295, 3717, 1369, 3719, 1443, 3768, 1552, 3836, 1648, 3915, 1656, 3923, 1659, 3933, 1694, 3892, 1770, 3875, 1791, 3872, 1809, 3862, 1826, 3854, 1844, 3852, 1890, 3844, 1936, 3839, 1971, 3834, 1992, 3806, 2025, 3768, 2065, 3714, 2093, 3679, 2111, 3638, 2119, 3623, 2126, 3610, 2177, 3516, 2284, 3491, 2304, 3488, 2322, 3476, 2510, 3364, 2706, 3359, 2723, 3359, 2741, 3364, 2779, 3374, 2815, 3384, 2845, 3392, 2863, 3415, 2871, 3422, 2889, 3422, 2940, 3427, 2962, 3404, 3064, 3308, 3201, 3328, 3219, 3331, 3234, 3336, 3346, 3371, 3458, 3328, 3476, 3323, 3494, 3320, 3682, 3287, 3860, 3201, 3793, 3158, 3727, 3120, 3717, 3112, 3710, 3107, 3588, 3038, 3461, 2980, 3448, 2975, 3443, 2962, 3420, 2899, 3412, 2850, 3412, 2845, 3417, 2833, 3455, 2777, 3527, 2756, 3539, 2754, 3547, 2741, 3582, 2685, 3643, 2657, 3646, 2657, 3649, 2655, 3638, 2614, 3641, 2599, 3527, 2520, 3407, 2456, 3305, 2406, 3242, 2312, 3206, 2261, 3189, 2192, 3161, 2070, 3120, 1951, 3105, 1910, 3095, 1867, 3069, 1765, 3074, 1656, 3079, 1613, 3089, 1564, 3120, 1437, 3133, 1305, 3135, 1298, 3133, 1290, 3130, 1272, 3125, 1259, 3122, 1254, 3122, 1247, 3115, 1211, 3100, 1178, 3084, 1148, 3034, 1148, 3026, 1148, 3018, 1145, 2980, 1142, 2945, 1142, 2891, 1142, 2889, 1089, 2889, 1082, 2886, 1074, 2884, 1038, 2889, 1008, 2894, 960, 2886, 911, 2884, 896, 2889, 881, 2891, 871, 2894, 858, 2899, 840, 2912, 827, 2940, 802, 2962, 787, 2985, 769, 3006, 741, 3011, 733, 3016, 723, 3041, 690, 3041, 642, 3044, 609, 3028, 581, 3026, 576, 3023, 568, 3013, 540, 3018, 507, 3023, 474, 3026, 441, 3028, 411, 3031, 383, 3034, 365, 3036, 344, 3039, 342, 3036, 337, 3034, 289, 3028, 240, 3026, 230, 3026, 207, Q, 2927, 184, 2833, 141, Z]],
      "label": "Murcia",
      "shortLabel": "MU",
      "labelPosition": [195.1, 198.6],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'regionofmurcia',
  type: 'maps'
};

/***/ })

/******/ });
}));
