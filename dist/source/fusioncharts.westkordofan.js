
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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(35);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 35:
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
 * @id fusionmaps.WestKordofan.1.06-20-2019 07:53:48
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
  "name": "WestKordofan",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 326,
  "baseHeight": 500,
  "baseScaleFactor": 10,
  "firstEntity": "SD.WK.WK",
  "entities": {
    "SD.WK.WK": {
      "outlines": [[M, 1653, 185, Q, 1640, 178, 1598, 179, 1556, 180, 1537, 171, 1520, 163, 1481, 161, 1441, 159, 1420, 149, 1352, 120, 1312, 121, 1291, 121, 1259, 108, 1224, 91, 1209, 85, 1205, 83, 1168, 59, 1143, 44, 1121, 44, 1112, 44, 1107, 45, L, 521, 45, Q, 519, 67, 516, 103, 513, 134, 513, 155, 513, 195, 495, 287, 498, 292, 497, 299, 497, 310, 497, 325, 497, 381, 538, 430, 579, 480, 579, 515, 579, 567, 550, 596, 504, 643, 492, 665, 489, 671, 433, 757, 420, 776, 420, 831, 420, 846, 424, 865, 428, 883, 430, 912, 429, 913, 430, 915, 430, 932, 422, 946, 416, 955, 395, 975, 369, 998, 340, 1040, 316, 1074, 276, 1114, 218, 1172, 214, 1176, 170, 1214, 153, 1233, 123, 1265, 128, 1310, 132, 1344, 130, 1394, 130, 1420, 128, 1469, L, 128, 1469, Q, 129, 1473, 130, 1476, 139, 1521, 130, 1576, 125, 1609, 109, 1670, 104, 1693, 88, 1722, 65, 1762, 61, 1770, 50, 1797, 49, 1840, 49, 1863, 52, 1880, 52, 1965, 57, 2062, 59, 2087, 56, 2151, 58, 2208, 92, 2234, 117, 2265, 150, 2334, 186, 2411, 215, 2450, 244, 2487, 245, 2535, 246, 2582, 243, 2620, 241, 2658, 243, 2873, 245, 3001, 266, 3091, 268, 3099, 270, 3106, 277, 3180, 282, 3308, 304, 3439, 341, 3540, 377, 3641, 443, 3779, 509, 3916, 524, 3953, 540, 3988, 542, 3991, 571, 4063, 629, 4199, 675, 4304, 705, 4385, 724, 4436, 779, 4582, 832, 4711, 879, 4775, 879, 4759, 885, 4700, 891, 4640, 891, 4366, L, 2169, 4369, 2170, 4890, 2165, 4957, Q, 2193, 4924, 2203, 4911, 2204, 4911, 2205, 4911, 2205, 4911, 2241, 4892, 2278, 4873, 2290, 4871, L, 2391, 4862, 2593, 4867, Q, 2599, 4867, 2721, 4864, 2757, 4866, 2761, 4842, 2759, 4810, 2759, 4794, 2759, 4769, 2768, 4715, 2775, 4669, 2783, 4636, 2782, 4577, 2784, 4554, 2789, 4516, 2823, 4490, 2865, 4460, 2960, 4407, 3044, 4360, 3089, 4324, 3091, 4322, 3094, 4320, 3213, 4246, 3213, 4223, 3213, 4190, 3095, 4060, 2968, 3926, 2950, 3904, 2924, 3875, 2872, 3830, 2800, 3767, 2788, 3756, 2765, 3735, 2715, 3692, 2666, 3651, 2645, 3633, 2641, 3630, 2638, 3628, 2637, 3626, 2635, 3625, 2613, 3610, 2592, 3589, 2556, 3552, 2551, 3547, 2512, 3514, 2512, 3497, L, 2512, 3443, Q, 2512, 3392, 2515, 3375, 2523, 3327, 2553, 3313, 2554, 3312, 2614, 3267, 2657, 3233, 2681, 3240, 2683, 3239, 2683, 3235, 2683, 3219, 2671, 3180, 2661, 3148, 2660, 3126, 2658, 3122, 2657, 3119, 2649, 3080, 2637, 3016, 2622, 2930, 2618, 2906, 2605, 2829, 2599, 2796, 2597, 2786, 2583, 2778, 2567, 2771, 2560, 2767, 2554, 2764, 2542, 2751, 2529, 2736, 2522, 2732, 2480, 2689, 2462, 2666, 2429, 2628, 2429, 2578, 2429, 2512, 2486, 2440, 2531, 2384, 2592, 2345, 2611, 2332, 2644, 2300, 2648, 2297, 2674, 2281, 2694, 2269, 2699, 2257, 2705, 2242, 2706, 2222, 2707, 2198, 2707, 2187, 2707, 2186, 2715, 2157, 2718, 2142, 2719, 2129, 2742, 2017, 2761, 1960, 2793, 1859, 2850, 1817, 2860, 1809, 2876, 1790, 2894, 1768, 2902, 1760, 2931, 1731, 2931, 1690, 2930, 1668, 2939, 1618, 2948, 1575, 2955, 1555, 2954, 1537, 2959, 1526, 2968, 1505, 2968, 1488, 2968, 1453, 2950, 1410, 2927, 1361, 2915, 1334, 2904, 1306, 2888, 1253, 2865, 1179, 2861, 1168, 2853, 1145, 2829, 1093, 2807, 1047, 2801, 1023, 2792, 990, 2787, 950, 2780, 899, 2777, 886, L, 2777, 835, Q, 2776, 817, 2759, 812, 2738, 811, 2726, 809, 2637, 801, 2614, 790, 2482, 726, 2379, 654, 2334, 622, 2267, 569, 2192, 509, 2161, 486, 2158, 484, 2111, 440, 2068, 400, 2051, 391, 2018, 368, 2003, 359, 1984, 347, 1969, 344, 1964, 344, 1957, 345, 1948, 345, 1934, 348, 1915, 351, 1915, 349, 1829, 349, 1791, 346, 1784, 345, 1766, 331, 1749, 317, 1745, 314, 1705, 287, 1703, 284, 1684, 259, 1672, 238, 1670, 234, 1668, 210, Q, 1666, 191, 1653, 185, Z]],
      "label": "West Kurdufan",
      "shortLabel": "WK",
      "labelPosition": [163.1, 250],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'westkordofan',
  type: 'maps'
};

/***/ })

/******/ });
}));
