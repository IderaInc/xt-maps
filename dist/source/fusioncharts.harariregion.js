
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
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.HarariRegion.1.05-03-2017 12:10:07
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
  "name": "HarariRegion",
  "revision": 1,
  "standaloneInit": true,
  "baseWidth": 500,
  "baseHeight": 492,
  "baseScaleFactor": 10,
  "entities": {
    "ET.HA.HR": {
      "outlines": [[M, 3565, 310, Q, 3532, 568, 3355, 600, 3145, 633, 3048, 778, 2967, 907, 2870, 907, 2385, 794, 2224, 794, L, 2208, 390, 1885, 293, Q, 1885, 180, 1820, 132, 1723, 35, 1578, 35, 1465, 35, 1448, 310, 1416, 600, 1222, 681, 1028, 730, 980, 972, 948, 1069, 818, 1150, 689, 1230, 673, 1263, L, 576, 1602, Q, 528, 1715, 350, 1860, 285, 1941, 253, 2070, 237, 2151, 221, 2313, 156, 2507, 91, 2571, 43, 2604, 43, 2765, 43, 2975, 91, 3266, 140, 3540, 140, 3799, L, 1561, 3799, Q, 1529, 4187, 1917, 4122, 1933, 4171, 1933, 4348, 1949, 4494, 1981, 4542, L, 2159, 4542, Q, 2191, 4348, 2224, 4251, 2272, 4090, 2401, 4090, 2563, 4090, 2935, 4154, 3032, 4154, 3048, 3944, L, 3274, 3944, Q, 3258, 4203, 3613, 4542, 3985, 4881, 4275, 4881, 4405, 4881, 4437, 4833, 4469, 4801, 4598, 4526, 4615, 4461, 4679, 4461, 4712, 4445, 4792, 4445, 4873, 4413, 4857, 4235, 4857, 4057, 4809, 3993, 4695, 3928, 4582, 3815, 4550, 3767, 4453, 3524, 4421, 3427, 4259, 3444, L, 4243, 2636, Q, 4437, 2700, 4437, 2539, 4421, 2297, 4437, 2200, 4453, 2200, 4809, 2216, 4954, 2216, 4954, 1957, 4954, 1763, 4938, 1763, 4922, 1747, 4712, 1747, L, 4712, 1311, 4760, 1214, 4760, 891, 4598, 891, 4550, 213, Q, 3968, 67, 3758, 67, Q, 3597, 67, 3565, 310, Z]],
      "label": "Harari",
      "shortLabel": "HR",
      "labelPosition": [249.8, 245.8],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'harariregion',
  type: 'maps'
};

/***/ })
/******/ ]);
}));
