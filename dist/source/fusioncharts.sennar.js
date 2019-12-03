
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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(25);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 25:
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
 * @id fusionmaps.Sennar.1.06-20-2019 07:53:48
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
  "name": "Sennar",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 500,
  "baseHeight": 476,
  "baseScaleFactor": 10,
  "firstEntity": "SD.SI.SI",
  "entities": {
    "SD.SI.SI": {
      "outlines": [[M, 1454, 46, Q, 1378, 46, 1354, 117, 1330, 189, 1325, 251, 1320, 313, 1311, 355, 1302, 397, 1161, 459, 1020, 520, 988, 520, 955, 520, 903, 451, 838, 354, 802, 299, 653, 77, 532, 77, 508, 77, 436, 90, 356, 104, 347, 104, 278, 110, 262, 150, 256, 166, 256, 242, 256, 327, 302, 468, 347, 610, 347, 617, 347, 647, 254, 678, 155, 711, 143, 737, 119, 792, 120, 870, 121, 913, 125, 995, 125, 1028, 124, 1121, 123, 1198, 120, 1244, 118, 1285, 120, 1366, 118, 1437, 85, 1492, 76, 1517, 47, 1557, 44, 1561, 44, 1607, 44, 1682, 113, 1800, 155, 1871, 266, 2021, 355, 2143, 400, 2212, 426, 2208, 461, 2168, 497, 2123, 509, 2110, 544, 2073, 561, 2054, 593, 2019, 611, 2006, 676, 1954, 735, 1911, 793, 1868, 901, 1792, 1008, 1716, 1128, 1606, 1247, 1495, 1359, 1433, 1392, 1414, 1417, 1401, 1474, 1372, 1483, 1376, 1496, 1381, 1575, 1364, 1654, 1346, 1766, 1286, 1878, 1226, 1936, 1201, 2071, 1144, 2245, 1061, 2469, 954, 2486, 948, 2485, 945, 2485, 943, 2485, 919, 2501, 888, 2516, 858, 2516, 832, 2516, 755, 2426, 718, 2376, 701, 2352, 692, 2311, 677, 2296, 660, 2262, 625, 2196, 541, 2132, 461, 2105, 421, 2011, 281, 1910, 206, 1813, 133, 1677, 99, 1673, 98, 1671, 97, 1613, 66, 1573, 56, Q, 1531, 46, 1454, 46, Z]],
      "label": "Sennar",
      "shortLabel": "SI",
      "labelPosition": [86, 106.9],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.SI.SG"
    },
    "SD.SI.SG": {
      "outlines": [[M, 1417, 1401, Q, 1392, 1414, 1359, 1433, 1247, 1495, 1128, 1606, 1008, 1716, 901, 1792, 793, 1868, 735, 1911, 676, 1954, 611, 2006, 593, 2019, 561, 2054, 544, 2073, 509, 2110, 497, 2123, 461, 2168, 426, 2208, 400, 2212, 410, 2228, 418, 2242, 487, 2359, 487, 2435, 487, 2447, 415, 2652, 342, 2857, 342, 2898, 342, 2941, 369, 2989, 415, 3068, 419, 3079, 439, 3126, 467, 3177, 483, 3212, 489, 3264, 489, 3272, 490, 3282, 522, 3575, 589, 3672, 631, 3734, 637, 3745, 659, 3786, 659, 3831, 659, 3910, 614, 4015, 589, 4072, 546, 4172, 532, 4216, 518, 4368, 503, 4510, 487, 4574, L, 515, 4674, 630, 4605, Q, 748, 4557, 776, 4539, 821, 4512, 939, 4429, 1051, 4349, 1084, 4330, 1168, 4283, 1353, 4150, 1509, 4038, 1644, 3948, 1647, 3946, 1651, 3944, 1706, 3906, 1781, 3882, 1825, 3868, 1971, 3836, 2096, 3808, 2172, 3777, 2283, 3732, 2368, 3652, 2473, 3556, 2509, 3517, 2541, 3482, 2568, 3447, 2570, 3444, 2572, 3441, 2450, 3348, 2412, 3306, 2328, 3212, 2328, 3102, 2328, 3063, 2286, 2995, 2244, 2928, 2246, 2889, 2247, 2852, 2229, 2783, 2213, 2725, 2196, 2686, 2162, 2603, 2100, 2497, 2027, 2372, 1993, 2277, 1959, 2181, 1931, 1999, 1904, 1822, 1880, 1764, 1879, 1763, 1878, 1762, 1859, 1741, 1842, 1690, 1819, 1624, 1811, 1610, 1798, 1586, 1748, 1587, 1691, 1591, 1671, 1588, 1600, 1575, 1527, 1520, Q, 1457, 1468, 1417, 1401, Z]],
      "label": "Singa",
      "shortLabel": "SG",
      "labelPosition": [127.7, 303.7],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.SI.AD"
    },
    "SD.SI.AD": {
      "outlines": [[M, 3010, 1672, Q, 2947, 1620, 2911, 1559, 2882, 1500, 2858, 1459, 2851, 1451, 2845, 1444, 2707, 1270, 2631, 1170, 2493, 988, 2486, 948, 2469, 954, 2245, 1061, 2071, 1144, 1936, 1201, 1878, 1226, 1766, 1286, 1654, 1346, 1575, 1364, 1496, 1381, 1483, 1376, 1474, 1372, 1417, 1401, 1457, 1468, 1527, 1520, 1600, 1575, 1671, 1588, 1691, 1591, 1748, 1587, 1798, 1586, 1811, 1610, 1819, 1624, 1842, 1690, 1859, 1741, 1878, 1762, 1879, 1763, 1880, 1764, 1904, 1822, 1931, 1999, 1959, 2181, 1993, 2277, 2027, 2372, 2100, 2497, 2162, 2603, 2196, 2686, 2213, 2725, 2229, 2783, 2247, 2852, 2246, 2889, 2244, 2928, 2286, 2995, 2328, 3063, 2328, 3102, 2328, 3212, 2412, 3306, 2450, 3348, 2572, 3441, 2613, 3386, 2638, 3332, 2702, 3198, 2736, 3170, 2789, 3125, 2932, 3125, 2977, 3125, 3076, 3154, 3129, 3169, 3213, 3196, 3371, 3243, 3420, 3338, 3422, 3342, 3424, 3347, 3482, 3481, 3535, 3668, 3568, 3780, 3641, 4037, 3657, 4089, 3691, 4214, 3719, 4315, 3745, 4390, 3758, 4426, 3809, 4583, 3855, 4704, 3896, 4721, 3902, 4723, 3908, 4723, 3940, 4723, 3974, 4679, 3995, 4650, 4031, 4602, 4055, 4581, 4101, 4530, 4144, 4483, 4175, 4443, 4208, 4402, 4293, 4299, 4302, 4288, 4310, 4277, 4335, 4243, 4395, 4120, L, 4412, 4064, Q, 4418, 4047, 4425, 4026, 4461, 3919, 4489, 3898, 4518, 3877, 4559, 3833, 4595, 3790, 4591, 3766, 4573, 3652, 4603, 3638, 4633, 3623, 4636, 3628, 4636, 3626, 4637, 3626, 4655, 3589, 4800, 3351, 4901, 3186, 4937, 3061, 4939, 3055, 4941, 3048, 4946, 3006, 4950, 2991, 4957, 2963, 4957, 2930, 4957, 2786, 4853, 2766, 4819, 2759, 4757, 2764, 4672, 2771, 4659, 2771, 4613, 2771, 4405, 2642, 4161, 2491, 4140, 2481, 3957, 2406, 3875, 2367, 3738, 2301, 3647, 2210, 3623, 2187, 3582, 2169, 3538, 2150, 3511, 2126, 3487, 2105, 3475, 2060, 3456, 1994, 3452, 1986, 3435, 1949, 3363, 1907, 3273, 1859, 3231, 1836, Q, 3152, 1792, 3010, 1672, Z]],
      "label": "Ad Dinder",
      "shortLabel": "AD",
      "labelPosition": [258.7, 238.5],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'sennar',
  type: 'maps'
};

/***/ })

/******/ });
}));
