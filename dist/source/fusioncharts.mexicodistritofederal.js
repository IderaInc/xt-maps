
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
/******/ 	return __webpack_require__(__webpack_require__.s = 666);
/******/ })
/************************************************************************/
/******/ ({

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(667);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 667:
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
 * @id fusionmaps.MexicoDistritoFederal.20.10-30-2012 08:20:49
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
  "name": "MexicoDistritoFederal",
  "revision": 20,
  "standaloneInit": true,
  "baseWidth": 146,
  "baseHeight": 203,
  "baseScaleFactor": 10,
  "entities": {
    "01": {
      "outlines": [[M, 807, 43, Q, 768, 43, 776, 82, 784, 136, 757, 155, 753, 163, 745, 167, 718, 205, 672, 232, 668, 236, 664, 240, 637, 294, 598, 333, 582, 356, 552, 376, 548, 461, 548, 550, 552, 611, 505, 627, 501, 631, 494, 635, 474, 673, 428, 697, 428, 720, 413, 720, 389, 727, 370, 739, 366, 747, 366, 751, 370, 824, 327, 847, 323, 851, 320, 855, 300, 905, 223, 894, 215, 894, 208, 898, 188, 909, 161, 921, 157, 925, 153, 929, 153, 963, 134, 975, 130, 979, 126, 983, 99, 1017, 76, 1052, 72, 1060, 68, 1060, 18, 1068, 30, 1134, 33, 1145, 37, 1157, 37, 1168, 49, 1172, 84, 1195, 103, 1234, 107, 1242, 111, 1246, 142, 1273, 180, 1308, 200, 1311, 196, 1335, 192, 1350, 200, 1373, 204, 1385, 208, 1393, 223, 1408, 235, 1428, 242, 1451, 258, 1466, 273, 1481, 273, 1509, 277, 1551, 273, 1594, 265, 1644, 296, 1652, 310, 1656, 322, 1665, 330, 1672, 337, 1685, L, 339, 1687, Q, 361, 1705, 397, 1718, 401, 1729, 405, 1737, 416, 1756, 443, 1764, 447, 1768, 451, 1772, 463, 1787, 474, 1803, 490, 1830, 525, 1845, 536, 1849, 540, 1857, 567, 1953, 706, 1926, 706, 1864, 757, 1853, 787, 1845, 788, 1865, 788, 1888, 795, 1896, 803, 1903, 803, 1907, 807, 1919, 811, 1919, 849, 1926, 892, 1926, 904, 1926, 904, 1930, 911, 1957, 915, 1988, 919, 1996, 923, 1996, 966, 2000, 1004, 2004, 1047, 2008, 1062, 1992, 1078, 1977, 1082, 1950, 1085, 1946, 1089, 1942, 1143, 1938, 1202, 1938, 1232, 1938, 1267, 1942, 1314, 1949, 1318, 1919, 1318, 1884, 1325, 1845, 1333, 1833, 1337, 1834, 1375, 1830, 1391, 1818, 1406, 1810, 1406, 1799, 1422, 1729, 1422, 1656, 1422, 1427, 1422, 1199, 1422, 1141, 1426, 1083, 1430, 1045, 1403, 1025, 1356, 1029, 1352, 998, 1348, 979, 1337, 967, 1329, 959, 1325, 948, 1321, 913, 1287, 905, 1256, 898, 1263, 855, 1267, 836, 1236, 840, 1225, 840, 1213, 836, 1186, 828, 1171, 813, 1167, 809, 1167, 801, 1174, 750, 1132, 758, L, 1120, 758, Q, 1109, 596, 1109, 437, 1109, 426, 1105, 422, 1089, 414, 1085, 395, 1085, 368, 1047, 372, 1043, 371, 1039, 364, 1035, 333, 1016, 321, 1012, 317, 1004, 314, 969, 314, 973, 279, 977, 232, 923, 244, 911, 248, 904, 244, 888, 228, 888, 186, 892, 128, 896, 70, 900, 43, 880, 39, 849, 39, 819, 43, Q, 815, 47, 807, 43, Z]],
      "label": "Distrito Federal",
      "shortLabel": "DF",
      "labelPosition": [80.7, 110.2],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'mexicodistritofederal',
  type: 'maps'
};

/***/ })

/******/ });
}));
