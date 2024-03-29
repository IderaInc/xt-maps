
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(9);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 9:
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
 * @id fusionmaps.EastDarfur.1.06-19-2019 11:30:47
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
  "name": "EastDarfur",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 372,
  "baseHeight": 500,
  "baseScaleFactor": 10,
  "firstEntity": "SD.ED.ED",
  "entities": {
    "SD.ED.ED": {
      "outlines": [[M, 2789, 1835, Q, 2794, 1753, 2743, 1732, L, 2707, 1732, Q, 2609, 1747, 2594, 1748, 2585, 1750, 2543, 1750, 2513, 1750, 2471, 1744, 2430, 1738, 2417, 1738, 2394, 1738, 2383, 1751, 2364, 1772, 2343, 1785, 2331, 1792, 2306, 1793, 2297, 1794, 2279, 1797, 2274, 1796, 2271, 1796, 2265, 1795, 2263, 1795, 2181, 1796, 2163, 1791, 2144, 1786, 2139, 1772, 2133, 1758, 2095, 1739, 2067, 1725, 2047, 1709, 2005, 1674, 1915, 1648, 1902, 1644, 1800, 1620, 1758, 1611, 1676, 1604, 1601, 1599, 1538, 1600, 1520, 1600, 1510, 1594, 1504, 1591, 1485, 1573, 1469, 1557, 1427, 1553, 1382, 1549, 1365, 1534, 1351, 1522, 1351, 1492, 1351, 1478, 1355, 1452, 1359, 1425, 1359, 1412, 1359, 1382, 1329, 1358, 1286, 1323, 1274, 1306, 1267, 1296, 1245, 1297, 1217, 1297, 1209, 1295, 1181, 1284, 1178, 1283, 1164, 1278, 1150, 1268, 1141, 1260, 1138, 1201, 1136, 1151, 1092, 1150, 1035, 1150, 1014, 1128, 998, 1111, 1000, 1072, 1001, 1056, 1002, 1043, 994, 1034, 987, 1016, 978, 996, 971, 991, 949, 979, 943, 969, 936, 957, 936, 930, 936, 879, 994, 867, 1025, 860, 1080, 860, 1169, 844, 1171, 843, 1189, 833, 1189, 774, 1189, 725, 1102, 642, 1010, 563, 1001, 551, 986, 533, 958, 496, 928, 455, 916, 440, 896, 402, 882, 383, 860, 351, 819, 351, 812, 351, 783, 353, 759, 355, 746, 354, 729, 353, 716, 342, 702, 330, 695, 325, 674, 309, 637, 288, 598, 267, 566, 255, 532, 241, 516, 199, 506, 173, 498, 119, 493, 78, 440, 70, 435, 69, 377, 69, 318, 69, 313, 80, 307, 126, 304, 177, 302, 227, 300, 278, 297, 327, 300, 362, 302, 396, 316, 430, 330, 463, 330, 503, 330, 557, 301, 592, 272, 628, 272, 692, 272, 707, 276, 790, 279, 854, 275, 900, 272, 936, 279, 1003, 277, 1062, 239, 1103, 230, 1113, 148, 1166, 99, 1199, 99, 1246, 99, 1279, 104, 1321, 107, 1343, 114, 1383, 115, 1389, 117, 1397, 116, 1437, 110, 1515, 101, 1618, 101, 1649, 101, 1673, 92, 1771, 81, 1870, 81, 1905, 81, 1945, 93, 1996, 103, 2041, 116, 2069, 130, 2101, 155, 2162, 180, 2214, 210, 2246, 250, 2289, 300, 2311, 328, 2323, 375, 2335, 412, 2348, 426, 2372, 445, 2403, 445, 2471, 445, 2514, 445, 2536, 445, 2546, 444, 2552, 442, 2557, 442, 2563, 440, 2579, 440, 2586, 440, 2644, 461, 2646, 478, 2646, 557, 2639, 590, 2641, 635, 2695, 678, 2747, 678, 2777, 678, 2835, 666, 2877, 654, 2920, 654, 2941, 654, 3016, 697, 3095, 723, 3142, 789, 3224, 802, 3240, 824, 3292, 847, 3343, 860, 3359, 868, 3370, 921, 3398, 968, 3430, 968, 3469, 968, 3498, 963, 3551, 956, 3604, 956, 3619, 956, 3657, 961, 3686, 963, 3702, 969, 3739, 1006, 3857, 1036, 3908, 1064, 3954, 1132, 4032, 1173, 4078, 1225, 4154, 1286, 4243, 1335, 4305, 1379, 4359, 1414, 4443, 1478, 4601, 1479, 4602, 1489, 4623, 1510, 4685, 1531, 4740, 1555, 4752, 1576, 4762, 1635, 4799, 1674, 4824, 1705, 4831, 1707, 4831, 1709, 4832, L, 1835, 4869, Q, 1851, 4874, 1946, 4916, 2001, 4940, 2061, 4940, 2098, 4940, 2260, 4855, 2387, 4789, 2446, 4752, 2487, 4725, 2533, 4720, 2534, 4720, 2601, 4717, 2663, 4715, 2833, 4719, L, 2892, 4714, Q, 2957, 4710, 3153, 4721, 3336, 4730, 3553, 4746, L, 3671, 4746, 3671, 4729, Q, 3591, 4575, 3551, 4476, 3536, 4439, 3497, 4351, 3460, 4268, 3442, 4226, 3436, 4215, 3417, 4172, L, 3415, 4170, Q, 3391, 4095, 3334, 3957, 3277, 3819, 3247, 3761, 3216, 3703, 3184, 3623, 3153, 3543, 3136, 3503, 3067, 3343, 3037, 3289, 3036, 3286, 3034, 3283, 3018, 3249, 2909, 3012, 2822, 2824, 2804, 2718, 2793, 2654, 2794, 2571, 2796, 2472, 2796, 2410, 2795, 2370, 2783, 2288, 2775, 2232, 2775, 2172, L, 2782, 2128, Q, 2774, 2064, 2775, 2025, 2778, 1969, 2782, 1943, Q, 2785, 1917, 2789, 1835, Z]],
      "label": "East Darfur",
      "shortLabel": "ED",
      "labelPosition": [187.6, 294.1],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'eastdarfur',
  type: 'maps'
};

/***/ })

/******/ });
}));
