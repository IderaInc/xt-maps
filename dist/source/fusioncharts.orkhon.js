
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
/******/ 	return __webpack_require__(__webpack_require__.s = 348);
/******/ })
/************************************************************************/
/******/ ({

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(349);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 349:
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
 * @id fusionmaps.Orkhon.1.04-06-2017 03:52:47
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
  "name": "Orkhon",
  "revision": 1,
  "standaloneInit": true,
  "baseWidth": 500,
  "baseHeight": 314,
  "baseScaleFactor": 10,
  "entities": {
    "MN.ER.BU": {
      "outlines": [[M, 1845, 616, Q, 1713, 578, 1611, 542, 1574, 529, 1365, 465, 1167, 404, 1110, 388, 1029, 351, 946, 320, 782, 256, 722, 256, 672, 256, 632, 356, 611, 411, 577, 513, 541, 593, 468, 798, 220, 1418, 220, 1465, 220, 1475, 229, 1476, 195, 1596, 140, 1711, 109, 1775, 44, 1905, L, 44, 1995, Q, 320, 2038, 948, 2129, 1526, 2216, 1911, 2286, 1924, 2288, 2077, 2306, 2087, 2243, 2037, 2164, 1957, 2014, 1957, 2013, 1957, 1998, 2001, 1899, 2038, 1813, 2061, 1769, 2082, 1727, 2133, 1637, 2177, 1558, 2187, 1498, 2210, 1433, 2262, 1322, 2319, 1198, 2348, 1126, 2359, 1098, 2441, 957, 2493, 870, 2485, 783, 2464, 793, 2430, 793, 2340, 793, 2286, 777, 2267, 771, 2050, 684, Q, 1956, 648, 1845, 616, Z]],
      "label": "Bayan-Öndör",
      "shortLabel": "BU",
      "labelPosition": [126.5, 128.1],
      "labelAlignment": [CEN, MID]
    },
    "MN.ER.JA": {
      "outlines": [[M, 3514, 211, Q, 3439, 202, 3365, 182, 3319, 170, 3203, 130, 3124, 96, 3069, 76, 2966, 38, 2882, 38, 2797, 38, 2768, 55, 2726, 77, 2716, 160, 2711, 200, 2687, 264, 2641, 388, 2636, 403, 2624, 438, 2549, 632, 2529, 691, 2513, 756, 2505, 775, 2485, 783, 2493, 870, 2441, 957, 2359, 1098, 2348, 1126, 2319, 1198, 2262, 1322, 2210, 1433, 2187, 1498, 2177, 1558, 2133, 1637, 2082, 1727, 2061, 1769, 2038, 1813, 2001, 1899, 1957, 1998, 1957, 2013, 1957, 2014, 2037, 2164, 2087, 2243, 2077, 2306, 2098, 2308, 2122, 2311, 2251, 2326, 2321, 2357, 2393, 2389, 2503, 2472, 2564, 2519, 2688, 2615, 2703, 2626, 2865, 2729, 2981, 2803, 3027, 2849, 3069, 2889, 3204, 2993, 3358, 3111, 3383, 3111, 3402, 3111, 3428, 3089, L, 3436, 3085, Q, 3468, 2975, 3488, 2912, 3523, 2799, 3591, 2685, 3658, 2570, 3731, 2510, 3802, 2449, 3888, 2381, 3972, 2313, 4108, 2221, 4227, 2137, 4281, 2076, 4336, 2014, 4434, 1942, 4535, 1865, 4599, 1843, 4653, 1794, 4825, 1671, 4957, 1578, 4957, 1466, 4957, 1394, 4877, 1293, 4779, 1184, 4747, 1139, 4700, 1076, 4634, 1004, 4611, 981, 4568, 922, 4520, 858, 4502, 836, 4296, 574, 4275, 544, 4196, 429, 4166, 329, L, 4147, 245, 4024, 239, Q, 3951, 236, 3845, 232, Q, 3632, 224, 3514, 211, Z]],
      "label": "Jargalant",
      "shortLabel": "JA",
      "labelPosition": [345.7, 157.5],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'orkhon',
  type: 'maps'
};

/***/ })

/******/ });
}));
