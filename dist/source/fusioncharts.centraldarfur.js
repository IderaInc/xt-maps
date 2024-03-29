
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(7);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 7:
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
 * @id fusionmaps.CentralDarfur.1.06-19-2019 11:30:47
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
  "name": "CentralDarfur",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 368,
  "baseHeight": 500,
  "baseScaleFactor": 10,
  "firstEntity": "SD.CD.CD",
  "entities": {
    "SD.CD.CD": {
      "outlines": [[M, 3032, 374, Q, 2988, 394, 2950, 391, 2902, 387, 2883, 415, 2871, 433, 2866, 481, 2860, 530, 2850, 548, 2833, 580, 2788, 580, 2729, 577, 2692, 577, 2648, 577, 2638, 558, 2629, 538, 2607, 538, 2589, 538, 2574, 551, 2559, 564, 2547, 564, 2540, 564, 2526, 541, 2505, 504, 2456, 463, 2438, 448, 2393, 390, 2367, 356, 2328, 356, 2295, 356, 2271, 361, 2245, 365, 2185, 365, 2109, 365, 2106, 361, 2094, 334, 2066, 287, 2037, 238, 2022, 220, 1982, 173, 1943, 173, 1925, 173, 1903, 180, 1882, 186, 1863, 186, 1817, 186, 1738, 117, 1657, 48, 1581, 48, 1533, 48, 1469, 98, 1397, 162, 1361, 189, 1339, 205, 1254, 259, 1241, 267, 1180, 281, 1142, 289, 1133, 309, 1131, 312, 1130, 315, 1139, 401, 1116, 453, 1096, 498, 1045, 531, 1008, 554, 905, 558, 831, 561, 831, 611, 831, 633, 851, 651, 872, 670, 872, 679, 872, 685, 784, 746, 696, 807, 696, 820, 696, 842, 724, 863, 753, 884, 753, 900, 753, 914, 726, 944, 698, 977, 677, 975, 647, 972, 608, 987, 570, 1002, 570, 1015, 570, 1029, 615, 1064, 661, 1098, 661, 1114, 661, 1138, 631, 1138, 559, 1138, 528, 1155, 505, 1167, 435, 1236, 375, 1302, 351, 1326, 316, 1364, 280, 1377, 276, 1378, 273, 1379, 273, 1379, 272, 1380, 240, 1389, 237, 1427, 236, 1453, 233, 1509, 224, 1538, 170, 1553, 120, 1568, 120, 1591, 120, 1627, 154, 1677, 198, 1744, 201, 1751, 243, 1853, 258, 1899, 266, 1922, 272, 1977, 276, 2009, 283, 2075, 291, 2134, 312, 2169, 330, 2198, 330, 2249, 330, 2315, 266, 2397, 238, 2433, 201, 2468, L, 154, 2528, Q, 145, 2544, 145, 2551, 145, 2567, 174, 2587, 201, 2608, 201, 2650, 201, 2729, 131, 2958, 60, 3188, 60, 3263, 60, 3325, 127, 3404, 170, 3455, 230, 3503, 304, 3560, 368, 3575, 475, 3599, 468, 3663, 468, 3668, 468, 3672, 474, 3701, 503, 3701, 512, 3701, 563, 3693, 615, 3686, 623, 3686, 694, 3686, 705, 3698, 718, 3714, 714, 3805, 713, 3831, 728, 3850, 733, 3856, 762, 3880, 786, 3901, 793, 3934, 796, 3949, 796, 3984, 796, 4058, 775, 4097, 737, 4168, 711, 4264, 709, 4269, 664, 4367, 620, 4475, 620, 4533, 620, 4578, 630, 4588, 637, 4596, 676, 4629, 685, 4638, 701, 4670, 718, 4705, 736, 4729, 741, 4736, 760, 4755, 774, 4770, 783, 4786, 786, 4791, 792, 4815, 797, 4840, 802, 4848, 812, 4866, 858, 4893, 903, 4918, 918, 4918, 920, 4918, 964, 4867, 1007, 4818, 1024, 4797, 1025, 4796, 1025, 4795, 1076, 4736, 1184, 4603, 1292, 4472, 1358, 4402, 1423, 4327, 1453, 4296, 1503, 4241, 1543, 4213, 1555, 4204, 1589, 4171, 1621, 4141, 1641, 4128, 1662, 4114, 1690, 4104, 1712, 4096, 1727, 4089, 1729, 4085, 1732, 4081, 1755, 4054, 1801, 4022, 1863, 3979, 1889, 3936, 1927, 3877, 1950, 3835, 1993, 3755, 1993, 3719, 1993, 3658, 1970, 3551, 1946, 3446, 1946, 3395, 1946, 3370, 1960, 3276, 1970, 3200, 1962, 3150, 1951, 3084, 1968, 3045, 1969, 3044, 2010, 3006, 2031, 2985, 2030, 2958, 2030, 2949, 2027, 2939, 2025, 2917, 2019, 2889, 2009, 2849, 2009, 2825, 2009, 2800, 2023, 2779, 2037, 2758, 2037, 2736, 2037, 2699, 1993, 2667, 1949, 2634, 1949, 2605, 1949, 2572, 1946, 2506, 1943, 2445, 1943, 2441, 1943, 2354, 1967, 2316, 2016, 2238, 2053, 2123, 2089, 2013, 2095, 1970, 2097, 1952, 2097, 1840, 2097, 1808, 2092, 1754, 2086, 1700, 2085, 1682, 2076, 1657, 2073, 1618, 2072, 1601, 2072, 1558, 2072, 1523, 2129, 1525, 2198, 1527, 2210, 1517, 2203, 1478, 2219, 1437, 2235, 1395, 2267, 1385, 2287, 1378, 2333, 1375, 2340, 1374, 2367, 1365, 2393, 1356, 2402, 1350, 2427, 1337, 2465, 1339, 2487, 1341, 2534, 1344, 2555, 1344, 2637, 1311, 2719, 1278, 2768, 1278, 2785, 1278, 2825, 1283, 2866, 1287, 2882, 1287, 2935, 1287, 2937, 1287, 2975, 1283, 2975, 1260, 2957, 1197, 2959, 1180, 2960, 1161, 2942, 1143, 2924, 1123, 2924, 1108, 2924, 1074, 3006, 1077, 3088, 1079, 3088, 1047, 3088, 1027, 3080, 987, 3072, 945, 3072, 909, 3072, 873, 3121, 836, 3170, 799, 3212, 789, 3239, 771, 3291, 745, 3342, 719, 3367, 714, 3392, 709, 3452, 700, 3505, 686, 3516, 643, 3529, 593, 3585, 497, 3633, 415, 3633, 370, 3633, 340, 3614, 312, 3593, 280, 3565, 280, 3535, 280, 3511, 298, 3487, 315, 3436, 315, 3426, 315, 3394, 306, 3362, 296, 3349, 296, 3344, 296, 3318, 303, 3292, 309, 3289, 309, 3277, 309, 3252, 296, 3227, 283, 3212, 283, 3201, 283, 3186, 295, 3171, 310, 3167, 312, 3144, 328, 3098, 343, Q, 3056, 363, 3032, 374, Z]],
      "label": "Central Darfur",
      "shortLabel": "CD",
      "labelPosition": [108.6, 248.3],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'centraldarfur',
  type: 'maps'
};

/***/ })

/******/ });
}));
