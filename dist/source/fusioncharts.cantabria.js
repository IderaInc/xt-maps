
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
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ({

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(53);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 53:
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
 * @id fusionmaps.Cantabria.1.04-03-2017 11:58:12
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
  "name": "Cantabria",
  "revision": 1,
  "standaloneInit": true,
  "baseWidth": 600,
  "baseHeight": 375,
  "baseScaleFactor": 10,
  "entities": {
    "ES.CN.CN": {
      "outlines": [[M, 3797, 227, Q, 3818, 147, 3776, 126, 3704, 92, 3619, 117, 3556, 143, 3463, 155, 3365, 172, 3281, 202, 3251, 215, 3226, 236, 3128, 325, 2980, 363, 2832, 397, 2726, 435, 2604, 481, 2485, 511, 2456, 519, 2426, 524, 2396, 532, 2367, 545, 2176, 638, 1910, 583, 1804, 562, 1694, 570, 1495, 591, 1297, 621, 1267, 625, 1242, 638, 1220, 646, 1204, 650, 1216, 659, 1229, 667, 1263, 689, 1271, 748, 1314, 989, 1123, 1116, 1085, 1145, 1022, 1133, 950, 1120, 924, 1090, 878, 1035, 852, 1069, 840, 1082, 810, 1090, 780, 1099, 751, 1120, 734, 1133, 721, 1150, 692, 1213, 628, 1243, 611, 1251, 594, 1268, 518, 1344, 455, 1429, 442, 1450, 438, 1480, 417, 1560, 294, 1530, 277, 1526, 260, 1522, 184, 1509, 108, 1501, 78, 1501, 61, 1488, 61, 1573, 74, 1632, 78, 1661, 66, 1674, 23, 1712, 57, 1810, 91, 1903, 226, 1970, 247, 1983, 247, 1996, 260, 2068, 324, 2114, 391, 2165, 408, 2271, 412, 2304, 396, 2317, 396, 2321, 391, 2321, 417, 2338, 442, 2364, 459, 2381, 476, 2389, 506, 2410, 535, 2406, 594, 2406, 658, 2398, 687, 2393, 713, 2381, 768, 2351, 869, 2359, 903, 2364, 924, 2376, 979, 2406, 1017, 2359, 1153, 2211, 1360, 2237, 1390, 2241, 1411, 2254, 1495, 2317, 1572, 2393, 1677, 2503, 1796, 2592, 1817, 2609, 1838, 2596, 1893, 2563, 1995, 2584, 2037, 2592, 2096, 2626, 2253, 2711, 2176, 2914, 2143, 3002, 2121, 3066, 2198, 3096, 2274, 3125, 2375, 3129, 2396, 3096, 2413, 3112, 2409, 3121, 2396, 3218, 2367, 3307, 2329, 3434, 2456, 3396, 2485, 3387, 2515, 3379, 2549, 3371, 2557, 3383, 2595, 3447, 2629, 3510, 2638, 3523, 2667, 3523, 2684, 3510, 2701, 3497, 2731, 3476, 2760, 3472, 2900, 3451, 2913, 3582, 2913, 3595, 2913, 3612, 2913, 3675, 2951, 3692, 3014, 3726, 3031, 3700, 3052, 3675, 3073, 3654, 3158, 3586, 3255, 3544, 3386, 3493, 3492, 3417, 3585, 3354, 3649, 3252, 3661, 3235, 3661, 3214, 3674, 3172, 3687, 3129, 3691, 3112, 3695, 3091, 3716, 3011, 3649, 2994, 3632, 2990, 3615, 2986, 3467, 2969, 3543, 2846, 3568, 2808, 3556, 2770, 3530, 2681, 3463, 2673, 3433, 2668, 3408, 2681, 3386, 2698, 3361, 2719, 3340, 2744, 3327, 2770, 3293, 2838, 3188, 2825, 3158, 2821, 3137, 2808, 3082, 2774, 3065, 2719, 3052, 2668, 3086, 2630, 3281, 2440, 3488, 2266, 3556, 2211, 3627, 2169, 3754, 2106, 3869, 2030, 3966, 1970, 4051, 1886, 4148, 1784, 4270, 1750, 4317, 1738, 4385, 1763, 4639, 1860, 4897, 1928, 4926, 1936, 4939, 1924, 4943, 1920, 4947, 1920, 4922, 1831, 4914, 1755, 4909, 1708, 4901, 1661, 4880, 1526, 4909, 1403, 4926, 1344, 4985, 1298, 5002, 1285, 5011, 1268, 5045, 1222, 5083, 1183, 5138, 1133, 5231, 1120, 5260, 1116, 5286, 1103, 5379, 1061, 5502, 1078, 5658, 1099, 5768, 1073, 5781, 1057, 5798, 1040, 5810, 1023, 5840, 1018, 5933, 1010, 5941, 972, 5967, 879, 5933, 820, 5929, 807, 5920, 798, 5899, 769, 5870, 748, 5438, 443, 4897, 511, 4816, 524, 4804, 473, 4837, 464, 4863, 452, 4935, 405, 4939, 291, 4943, 261, 4935, 232, 4922, 168, 4833, 177, 4723, 189, 4672, 147, 4592, 71, 4469, 62, 4457, 62, 4435, 54, 4351, 29, 4279, 62, 4254, 75, 4237, 88, 4135, 185, 4038, 287, 3907, 430, 3742, 469, 3721, 473, 3746, 405, Q, 3776, 325, 3797, 227, Z]],
      "label": "Cantabria",
      "shortLabel": "CN",
      "labelPosition": [280.9, 150.1],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'cantabria',
  type: 'maps'
};

/***/ })

/******/ });
}));
