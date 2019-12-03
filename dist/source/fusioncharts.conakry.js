
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(3);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),
/* 3 */
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
 * @id fusionmaps.Conakry.1.06-22-2018 10:48:31
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
  "name": "Conakry",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 493,
  "baseHeight": 286,
  "baseScaleFactor": 10,
  "firstEntity": "GN.CK.CK",
  "entities": {
    "GN.CK.CK": {
      "outlines": [[M, 3140, 221, Q, 2981, 231, 2822, 231, 2366, 210, 1931, 274, 1857, 284, 1846, 348, 1825, 433, 1793, 528, 1782, 549, 1782, 571, 1772, 655, 1676, 698, 1655, 708, 1613, 708, 1368, 698, 1337, 910, 1337, 941, 1326, 963, 1326, 973, 1326, 984, 1294, 1079, 1178, 1090, 987, 1090, 796, 1090, 721, 1090, 658, 1100, 626, 1111, 583, 1111, 498, 1111, 467, 1185, 456, 1227, 456, 1259, 456, 1376, 403, 1493, 276, 1535, 127, 1524, 53, 1514, 53, 1599, 42, 1916, 42, 2234, 42, 2266, 53, 2298, 95, 2531, 106, 2807, 286, 2828, 467, 2828, 955, 2828, 1453, 2828, 1910, 2828, 2366, 2828, 2493, 2838, 2610, 2796, 2716, 2764, 2843, 2786, 2949, 2796, 2981, 2733, 2992, 2722, 2992, 2711, 3034, 2605, 3034, 2478, 3024, 2266, 3013, 2054, 3013, 1969, 3045, 1938, 3055, 1927, 3066, 1927, 3130, 1916, 3204, 1906, 3225, 1906, 3247, 1906, 3278, 1895, 3300, 1885, 3342, 1863, 3416, 1853, 3448, 1853, 3480, 1853, 3575, 1863, 3597, 1779, 3628, 1609, 3639, 1440, 3660, 1439, 3671, 1450, 3713, 1482, 3798, 1471, 3904, 1450, 4000, 1482, 4042, 1492, 4074, 1493, 4201, 1492, 4318, 1524, 4350, 1535, 4371, 1535, 4552, 1545, 4732, 1546, 4820, 1546, 4907, 1546, 4881, 1238, 4891, 931, 4912, 507, 4849, 104, 4849, 83, 4838, 72, 4753, 30, 4637, 30, 4435, 40, 4233, 51, 4223, 51, 4212, 51, 4159, 62, 4095, 72, 3981, 82, 3851, 83, 3848, 108, 3830, 125, 3788, 157, 3735, 189, 3724, 199, 3703, 200, 3522, 210, 3342, 210, Q, 3236, 210, 3140, 221, Z]],
      "label": "Conakry",
      "shortLabel": "CK",
      "labelPosition": [227.5, 143],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'conakry',
  type: 'maps'
};

/***/ })
/******/ ]);
}));
