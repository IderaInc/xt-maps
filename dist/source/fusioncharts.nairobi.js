
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(11);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 11:
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
 * @id fusionmaps.Nairobi.1.07-06-2018 02:19:03
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
  "name": "Nairobi",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 400,
  "baseHeight": 242,
  "baseScaleFactor": 10,
  "firstEntity": "KE.NA.NB",
  "entities": {
    "KE.NA.NB": {
      "outlines": [[M, 2466, 130, Q, 2416, 137, 2378, 37, L, 2091, 37, Q, 2085, 62, 2091, 205, 2097, 268, 2035, 268, 1954, 255, 1941, 262, 1929, 268, 1841, 343, 1741, 393, 1735, 411, 1691, 474, 1673, 480, 1660, 486, 1623, 486, 1591, 486, 1548, 430, 1498, 380, 1435, 380, 1354, 380, 1329, 336, 1310, 280, 1292, 243, L, 1248, 243, 1248, 343, 1186, 336, Q, 1173, 380, 1186, 524, 1186, 586, 1086, 586, 1036, 586, 1005, 561, 973, 530, 955, 530, 930, 530, 917, 574, 898, 617, 880, 624, 848, 642, 805, 649, 767, 649, 755, 667, 748, 674, 723, 724, 705, 767, 674, 780, 574, 817, 499, 811, 386, 805, 386, 998, 386, 1105, 393, 1304, L, 305, 1304, Q, 186, 1273, 143, 1273, 93, 1292, 43, 1298, 87, 1342, 143, 1404, 155, 1423, 249, 1492, 330, 1548, 361, 1585, 461, 1723, 580, 1729, 630, 1729, 680, 1785, 711, 1829, 767, 1904, 805, 1954, 886, 1954, 930, 1954, 1011, 1948, 1161, 1954, 1435, 1948, 1616, 1948, 1685, 1991, 1860, 2104, 1972, 2160, 2004, 2172, 2091, 2185, 2178, 2197, 2247, 2241, 2416, 2341, 2491, 2360, 2578, 2391, 2734, 2378, 2703, 2353, 2678, 2341, 2609, 2335, 2566, 2316, 2578, 2229, 2509, 2141, 2428, 2060, 2410, 2022, 2291, 1929, 2278, 1923, 2247, 1885, 2247, 1791, 2247, 1760, 2247, 1729, 2260, 1667, 2278, 1654, 2335, 1617, 2416, 1592, 2416, 1579, 2435, 1529, 2460, 1485, 2478, 1454, 2503, 1423, 2541, 1423, 2566, 1417, 2622, 1423, 2772, 1411, 2815, 1404, 2897, 1386, 2965, 1336, 2984, 1323, 3046, 1223, 3084, 1161, 3090, 1161, L, 3184, 1161, Q, 3328, 1161, 3390, 1236, 3459, 1298, 3509, 1298, 3584, 1298, 3596, 1279, 3615, 1211, 3646, 1123, 3665, 1080, 3721, 1061, 3802, 1036, 3833, 998, 3914, 880, 3958, 824, L, 3827, 817, Q, 3840, 749, 3790, 674, 3746, 617, 3683, 580, 3602, 555, 3577, 543, 3527, 524, 3540, 480, 3565, 380, 3465, 380, 3440, 380, 3296, 486, 3153, 599, 3121, 599, 2928, 586, 2834, 611, 2703, 636, 2566, 636, 2553, 574, 2422, 561, 2303, 555, 2297, 499, L, 2310, 486, Q, 2366, 511, 2366, 449, 2366, 368, 2378, 336, 2403, 274, 2460, 262, 2503, 249, 2503, 193, Q, 2503, 124, 2466, 130, Z]],
      "label": "Nairobi",
      "shortLabel": "NB",
      "labelPosition": [162.5, 120.9],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'nairobi',
  type: 'maps'
};

/***/ })

/******/ });
}));
