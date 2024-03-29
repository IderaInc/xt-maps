
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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(23);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 23:
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
 * @id fusionmaps.ZamboangaCity.1.08-28-2019 12:41:48
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
  "name": "ZamboangaCity",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 317,
  "baseHeight": 400,
  "baseScaleFactor": 10,
  "firstEntity": "PH.ZC.ZC",
  "entities": {
    "PH.ZC.ZC": {
      "outlines": [[M, 1045, 3960, Q, 1112, 3960, 1112, 3922, 1106, 3910, 1094, 3898, 1075, 3874, 1069, 3874, 1057, 3874, 1039, 3886, 1020, 3898, 1020, 3922, 1020, 3929, 1027, 3947, Q, 1039, 3960, 1045, 3960, Z], [M, 1670, 3689, L, 1670, 3775, Q, 1609, 3775, 1591, 3788, L, 1591, 3818, 1701, 3818, 1701, 3689, Z], [M, 2468, 3671, L, 2438, 3671, 2438, 3812, Q, 2468, 3824, 2554, 3824, L, 2554, 3788, Q, 2554, 3763, 2529, 3751, L, 2487, 3739, Q, 2480, 3732, 2480, 3708, Q, 2480, 3677, 2468, 3671, Z], [M, 2290, 3107, Q, 2284, 3162, 2247, 3162, L, 2106, 3149, Q, 2069, 3149, 2069, 3174, 2069, 3211, 2045, 3223, 2002, 3235, 1995, 3260, 1989, 3272, 1995, 3309, 1995, 3346, 1983, 3364, 1983, 3370, 1953, 3401, 1947, 3414, 1922, 3432, 1898, 3450, 1861, 3438, L, 1861, 3469, 1873, 3469, 1891, 3462, 1891, 3475, 1885, 3524, Q, 1885, 3530, 1891, 3536, L, 1904, 3511, Q, 1910, 3481, 1928, 3481, 1953, 3481, 1959, 3499, 1965, 3469, 1983, 3438, 2014, 3376, 2069, 3358, 2119, 3340, 2119, 3290, 2119, 3229, 2125, 3205, L, 2180, 3205, Q, 2186, 3229, 2216, 3235, 2235, 3242, 2302, 3242, L, 2296, 3266, 2296, 3340, Q, 2308, 3334, 2321, 3309, 2333, 3284, 2352, 3278, 2382, 3266, 2388, 3260, 2394, 3254, 2401, 3211, 2413, 3217, 2419, 3205, 2425, 3186, 2431, 3180, L, 2431, 3162, Q, 2388, 3168, 2382, 3125, 2388, 3076, 2382, 3063, L, 2352, 3063, Q, 2296, 3051, 2290, 3107, Z], [M, 2867, 211, Q, 2886, 192, 2886, 162, 2886, 125, 2910, 106, 2922, 82, 2934, 58, L, 2254, 45, Q, 2247, 82, 2241, 100, 2204, 180, 1953, 622, 1904, 720, 1910, 843, 1928, 1076, 1928, 1088, 1922, 1168, 1916, 1345, 1904, 1395, 1855, 1450, 1818, 1499, 1818, 1560, 1818, 1652, 1701, 1757, 1640, 1812, 1535, 1904, 1443, 2015, 1290, 2033, 1130, 2039, 1063, 2039, 1045, 2039, 536, 2021, 180, 2002, 76, 2045, 76, 2051, 69, 2051, 57, 2229, 57, 2517, L, 63, 2628, Q, 63, 2671, 76, 2677, 88, 2689, 130, 2726, 137, 2744, 137, 2782, 130, 2818, 155, 2836, 162, 2843, 180, 2849, 198, 2855, 204, 2874, L, 204, 2984, Q, 198, 2990, 180, 2996, 162, 2996, 162, 3015, 162, 3033, 186, 3045, 204, 3057, 204, 3107, 204, 3143, 216, 3162, 229, 3174, 247, 3205, 266, 3235, 321, 3266, 363, 3309, 345, 3370, L, 370, 3370, Q, 389, 3364, 395, 3352, 407, 3334, 413, 3328, L, 480, 3328, Q, 554, 3328, 554, 3334, 590, 3376, 658, 3420, 676, 3432, 744, 3481, 799, 3530, 830, 3530, 935, 3524, 1002, 3591, 1020, 3609, 1057, 3609, 1118, 3609, 1124, 3609, 1137, 3628, 1155, 3659, 1180, 3683, 1216, 3683, 1284, 3683, 1339, 3720, 1388, 3751, 1395, 3751, L, 1407, 3751, Q, 1401, 3689, 1443, 3683, 1505, 3677, 1505, 3665, 1529, 3616, 1554, 3609, 1560, 3603, 1591, 3603, 1615, 3609, 1628, 3603, L, 1634, 3499, Q, 1634, 3475, 1652, 3469, L, 1683, 3456, Q, 1720, 3401, 1738, 3389, 1762, 3370, 1769, 3315, 1775, 3211, 1794, 3149, 1794, 3125, 1867, 3101, 1879, 3039, 1879, 3021, 1879, 2984, 1904, 2880, 1928, 2788, 1916, 2720, 1910, 2677, 1934, 2622, 1941, 2561, 1965, 2555, 2014, 2542, 2033, 2523, 2063, 2475, 2088, 2469, 2131, 2456, 2155, 2419, 2186, 2376, 2204, 2376, 2229, 2370, 2254, 2321, 2266, 2290, 2266, 2260, 2266, 2229, 2223, 2223, 2174, 2217, 2174, 2168, 2174, 2131, 2186, 2125, 2241, 2100, 2254, 2088, 2266, 2021, 2278, 2015, L, 2284, 1892, Q, 2223, 1861, 2180, 1861, L, 2180, 1812, Q, 2210, 1806, 2254, 1726, L, 2266, 1702, Q, 2266, 1690, 2284, 1677, 2315, 1652, 2333, 1640, 2327, 1597, 2370, 1536, 2419, 1469, 2419, 1431, 2419, 1401, 2444, 1333, 2474, 1266, 2474, 1235, 2474, 1082, 2480, 1039, 2487, 1008, 2493, 996, 2499, 971, 2529, 965, 2548, 965, 2560, 935, 2579, 910, 2597, 898, L, 2775, 898, 2769, 1057, 2800, 1057, Q, 2824, 990, 2830, 990, 2836, 953, 2836, 947, 2842, 929, 2861, 910, 2898, 917, 2922, 873, 2934, 818, 2940, 812, 2953, 799, 3002, 763, 3033, 738, 3039, 708, 3039, 658, 3069, 658, 3113, 652, 3119, 604, L, 3119, 572, Q, 2861, 585, 2830, 579, 2812, 572, 2812, 407, L, 2812, 291, Q, 2812, 253, 2830, 235, Z]],
      "label": "Zamboanga City",
      "shortLabel": "ZC",
      "labelPosition": [101.2, 272.2],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'zamboangacity',
  type: 'maps'
};

/***/ })

/******/ });
}));
