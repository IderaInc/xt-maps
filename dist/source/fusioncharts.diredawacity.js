
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
/******/ 	return __webpack_require__(__webpack_require__.s = 312);
/******/ })
/************************************************************************/
/******/ ({

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(313);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 313:
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
 * @id fusionmaps.DireDawaCity.1.05-03-2017 12:10:07
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
  "name": "DireDawaCity",
  "revision": 1,
  "standaloneInit": true,
  "baseWidth": 500,
  "baseHeight": 264,
  "baseScaleFactor": 10,
  "entities": {
    "ET.DD.DD": {
      "outlines": [[M, 1695, 1076, Q, 1673, 1059, 1611, 1043, 1550, 1026, 1522, 1003, 1505, 992, 1471, 936, 1449, 891, 1432, 891, L, 1146, 891, Q, 1135, 908, 1107, 936, 1073, 964, 1000, 992, 922, 1020, 905, 1037, 866, 1071, 821, 1132, 776, 1188, 753, 1205, 720, 1216, 697, 1222, 641, 1239, 636, 1250, 624, 1267, 574, 1323, L, 501, 1323, 490, 1183, 97, 1183, 92, 1502, Q, 92, 1648, 114, 2052, 114, 2147, 109, 2175, 92, 2248, 36, 2293, L, 36, 2579, 159, 2579, Q, 181, 2512, 181, 2495, L, 423, 2467, Q, 479, 2467, 524, 2512, 568, 2557, 630, 2557, 709, 2557, 832, 2540, 955, 2517, 1028, 2517, 1555, 2562, 1606, 2579, L, 1611, 2579, Q, 1690, 2579, 1701, 2574, 1718, 2557, 1746, 2445, L, 1903, 2445, Q, 1931, 2445, 1970, 2388, 2015, 2327, 2049, 2316, 2082, 2299, 2256, 2299, 2441, 2271, 2452, 2271, 2503, 2271, 2525, 2338, 2553, 2428, 2593, 2461, 2654, 2517, 2688, 2579, 2705, 2607, 2761, 2607, 2800, 2607, 2856, 2551, 2901, 2495, 2918, 2456, 2957, 2316, 3081, 2344, 3142, 2355, 3176, 2293, 3198, 2259, 3221, 2192, 3254, 2114, 3310, 2102, 3338, 2097, 3428, 2086, L, 3428, 1867, Q, 3406, 1850, 3378, 1845, 3344, 1845, 3333, 1839, 3310, 1833, 3288, 1783, 3266, 1744, 3266, 1727, 3260, 1699, 3249, 1676, L, 3170, 1598, Q, 3159, 1581, 3153, 1570, 3148, 1542, 3148, 1519, L, 3193, 1502, 3238, 1424, 3355, 1407, Q, 3367, 1396, 3372, 1379, 3395, 1362, 3428, 1368, 3518, 1368, 3552, 1245, 3568, 1245, 3675, 1256, 3776, 1250, 3781, 1188, 3787, 1127, 3860, 1121, 3899, 1121, 3978, 1127, L, 4124, 1127, Q, 4152, 1127, 4202, 1172, 4252, 1211, 4258, 1211, 4292, 1211, 4337, 1138, 4387, 1037, 4398, 1026, 4438, 981, 4583, 841, 4645, 740, 4813, 684, 4959, 639, 4959, 577, 4959, 527, 4875, 510, 4774, 488, 4752, 409, 4740, 375, 4667, 342, 4583, 302, 4544, 263, 4522, 202, 4466, 162, L, 4353, 140, Q, 4331, 129, 4309, 78, 4286, 33, 4275, 33, 4124, 33, 4112, 33, L, 3916, 39, Q, 3894, 39, 3843, 140, 3832, 151, 3787, 157, L, 3714, 157, Q, 3658, 157, 3613, 252, 3591, 297, 3574, 364, 3490, 504, 3417, 504, L, 3226, 499, Q, 3226, 594, 3204, 684, 3193, 717, 3159, 745, 3109, 785, 3097, 796, 2924, 919, 2856, 1015, 2845, 1026, 2638, 1233, 2509, 1362, 2447, 1514, 2374, 1469, 2262, 1469, 2239, 1469, 2195, 1435, 2133, 1390, 2127, 1385, L, 1824, 1177, Q, 1746, 1104, 1695, 1076, Z]],
      "label": "Dire Dawa",
      "shortLabel": "DD",
      "labelPosition": [125.1, 171],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'diredawacity',
  type: 'maps'
};

/***/ })

/******/ });
}));
