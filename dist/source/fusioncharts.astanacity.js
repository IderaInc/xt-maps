
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(1);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.AstanaCity.17.02-23-2016 08:17:46
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
  "name": "AstanaCity",
  "revision": 17,
  "standaloneInit": true,
  "baseWidth": 300,
  "baseHeight": 280,
  "baseScaleFactor": 10,
  "entities": {
    "KZ.AS.AS": {
      "outlines": [[M, 1505, 228, L, 1479, 422, 1039, 422, Q, 898, 369, 889, 325, 872, 272, 810, 246, 749, 228, 740, 219, 731, 211, 731, 202, 705, 149, 687, 123, 652, 79, 617, 79, 502, 35, 414, 35, 361, 35, 361, 246, L, 36, 237, 36, 1135, Q, 62, 1249, 36, 1504, 36, 1592, 71, 1645, 115, 1716, 212, 1724, L, 212, 2059, Q, 256, 2068, 344, 2085, 414, 2112, 432, 2200, 467, 2200, 986, 2226, 995, 2226, 1013, 2235, 1065, 2252, 1180, 2332, 1338, 2446, 1338, 2516, L, 1321, 2631, 1321, 2736, Q, 1426, 2763, 1646, 2763, L, 1875, 2754, Q, 1884, 2587, 1893, 2525, 1884, 2428, 1884, 2384, 1875, 2288, 1910, 2261, 1928, 2244, 1972, 2235, 2025, 2226, 2034, 2208, 2042, 2191, 2051, 2129, 2060, 2094, 2078, 2085, 2157, 2041, 2262, 2059, 2289, 2059, 2324, 2068, 2658, 2129, 2614, 1795, 2597, 1698, 2720, 1689, 2782, 1689, 2887, 1698, 2949, 1689, 2966, 1619, 2966, 1610, 2966, 1601, 2966, 1566, 2966, 1469, L, 2949, 1135, Q, 2905, 1152, 2870, 1108, 2834, 1055, 2817, 1038, 2755, 950, 2658, 915, 2553, 809, 2500, 791, 2359, 783, 2315, 721, 2289, 686, 2210, 642, 2148, 607, 2148, 580, 2095, 360, 2016, 395, 2016, 387, 1946, 175, 1910, 52, 1796, 52, 1699, 52, 1690, 79, 1690, 105, 1681, 228, Z]],
      "label": "Astana City",
      "shortLabel": "AS",
      "labelPosition": [150.1, 139.9],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'astanacity',
  type: 'maps'
};

/***/ })
/******/ ]);
}));
