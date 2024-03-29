
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
 * @id fusionmaps.AlJazirah.1.06-19-2019 11:30:47
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
  "name": "AlJazirah",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 550,
  "baseHeight": 600,
  "baseScaleFactor": 10,
  "firstEntity": "SD.GZ.EE",
  "entities": {
    "SD.GZ.EE": {
      "outlines": [[M, 5119, 1771, Q, 5026, 1805, 4882, 1874, 4694, 1967, 4588, 2019, 4481, 2070, 4417, 2115, 4352, 2159, 4312, 2175, 4272, 2191, 4246, 2206, 4219, 2219, 4200, 2231, 4181, 2242, 4092, 2307, 4002, 2370, 3852, 2471, 3815, 2496, 3762, 2595, 3704, 2700, 3669, 2731, 3541, 2842, 3411, 2920, 3223, 3031, 3085, 3031, 3063, 3031, 3026, 3024, 2990, 3017, 2948, 3017, 2935, 3017, 2915, 3007, 2935, 3043, 2958, 3080, 3081, 3275, 3333, 3539, 3552, 3769, 3716, 4001, 3907, 4272, 3974, 4483, 4027, 4515, 4081, 4566, 4117, 4601, 4180, 4661, 4230, 4704, 4266, 4704, 4343, 4704, 4366, 4651, 4381, 4617, 4379, 4517, 4378, 4398, 4400, 4302, 4419, 4210, 4884, 3476, 4885, 3474, 4887, 3472, 4972, 3326, 5202, 2919, 5441, 2497, 5441, 2422, 5441, 2306, 5209, 1917, Q, 5170, 1852, 5119, 1771, Z]],
      "label": "East al Gazera",
      "shortLabel": "EE",
      "labelPosition": [417.8, 323.7],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.GZ.UA"
    },
    "SD.GZ.UA": {
      "outlines": [[M, 2915, 3007, Q, 2901, 3000, 2883, 2989, 2842, 2960, 2833, 2960, 2794, 2960, 2723, 3007, 2644, 3061, 2644, 3109, L, 2653, 3290, Q, 2653, 3344, 2649, 3366, 2640, 3421, 2610, 3431, 2606, 3433, 2528, 3466, 2468, 3493, 2452, 3493, 2423, 3493, 2399, 3442, 2388, 3419, 2357, 3328, 2303, 3163, 2233, 3163, 2152, 3163, 2008, 3278, 1882, 3377, 1828, 3458, 1838, 3471, 1844, 3479, 1919, 3589, 1921, 3663, 1923, 3724, 1982, 3762, 1998, 3771, 2016, 3779, 2068, 3801, 2178, 3840, 2228, 3868, 2293, 3936, 2373, 4017, 2375, 4067, 2378, 4112, 2392, 4213, 2405, 4302, 2405, 4338, 2405, 4387, 2402, 4476, 2402, 4478, 2402, 4479, L, 2411, 4603, Q, 2415, 4608, 2419, 4613, 2426, 4622, 2434, 4632, 2478, 4684, 2554, 4787, 2590, 4829, 2767, 4944, 2902, 5032, 2902, 5103, 2902, 5114, 2875, 5244, 2875, 5279, 2912, 5290, 2939, 5299, 3007, 5299, 3176, 5299, 3351, 5172, 3543, 5031, 3543, 4855, 3543, 4665, 3572, 4584, 3626, 4429, 3796, 4429, 3884, 4429, 3974, 4483, 3907, 4272, 3716, 4001, 3552, 3769, 3333, 3539, 3081, 3275, 2958, 3080, Q, 2935, 3043, 2915, 3007, Z]],
      "label": "Um Al Gura",
      "shortLabel": "UA",
      "labelPosition": [290.1, 413],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.GZ.SJ"
    },
    "SD.GZ.SJ": {
      "outlines": [[M, 2016, 3779, Q, 1998, 3771, 1982, 3762, 1910, 3812, 1733, 3897, 1556, 3981, 1479, 4014, 1402, 4047, 1414, 4121, 1426, 4193, 1402, 4324, 1377, 4454, 1339, 4537, 1300, 4620, 1129, 4677, 956, 4732, 907, 4771, 857, 4811, 783, 4882, 710, 4953, 684, 5055, 657, 5157, 645, 5226, 735, 5366, 789, 5503, 878, 5732, 832, 5950, L, 904, 5950, Q, 977, 5864, 1030, 5767, 1088, 5659, 1096, 5584, 1114, 5410, 1134, 5293, 1161, 5135, 1183, 5135, 1219, 5135, 1267, 5219, 1287, 5254, 1360, 5405, 1488, 5675, 1577, 5675, 1631, 5675, 1708, 5600, 1788, 5520, 1803, 5438, 1814, 5367, 1812, 5251, 1811, 5221, 1803, 5071, 1796, 4969, 1815, 4876, 1837, 4769, 1885, 4704, 1904, 4679, 2022, 4610, 2160, 4530, 2229, 4530, 2286, 4530, 2331, 4549, 2379, 4568, 2411, 4603, L, 2402, 4479, Q, 2402, 4478, 2402, 4476, 2405, 4387, 2405, 4338, 2405, 4302, 2392, 4213, 2378, 4112, 2375, 4067, 2373, 4017, 2293, 3936, 2228, 3868, 2178, 3840, Q, 2068, 3801, 2016, 3779, Z]],
      "label": "South al Gazera",
      "shortLabel": "SJ",
      "labelPosition": [145.2, 485.6],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.GZ.EM"
    },
    "SD.GZ.EM": {
      "outlines": [[M, 1185, 2267, Q, 1168, 2280, 1148, 2293, 1100, 2327, 1085, 2366, 1080, 2376, 1079, 2386, 1063, 2421, 1048, 2462, 1024, 2529, 1024, 2550, 1024, 2556, 1033, 2715, 1037, 2780, 1016, 2807, 992, 2838, 909, 2860, 842, 2877, 648, 2907, 488, 2931, 334, 2965, 62, 3027, 64, 3092, 65, 3158, 147, 3261, 229, 3363, 288, 3401, 347, 3440, 397, 3445, 446, 3450, 440, 3587, 433, 3724, 355, 3915, 277, 4106, 275, 4222, 272, 4338, 287, 4447, 304, 4567, 336, 4668, 379, 4806, 417, 4891, 466, 4998, 537, 5089, 583, 5148, 645, 5226, 657, 5157, 684, 5055, 710, 4953, 783, 4882, 857, 4811, 907, 4771, 956, 4732, 1129, 4677, 1300, 4620, 1339, 4537, 1377, 4454, 1402, 4324, 1426, 4193, 1414, 4121, 1402, 4047, 1479, 4014, 1556, 3981, 1733, 3897, 1910, 3812, 1982, 3762, 1923, 3724, 1921, 3663, 1919, 3589, 1844, 3479, 1838, 3471, 1828, 3458, 1803, 3425, 1752, 3362, 1724, 3329, 1696, 3211, 1667, 3080, 1652, 3029, 1637, 2977, 1571, 2815, 1505, 2652, 1375, 2511, Q, 1255, 2357, 1185, 2267, Z]],
      "label": "Al Mahagil",
      "shortLabel": "EM",
      "labelPosition": [98.5, 363.3],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.GZ.NG"
    },
    "SD.GZ.NG": {
      "outlines": [[M, 2215, 1917, Q, 2201, 1919, 2117, 1919, 1931, 1919, 1791, 1849, 1624, 1764, 1548, 1586, 1521, 1524, 1465, 1449, 1401, 1363, 1348, 1332, 1278, 1292, 1185, 1292, 1088, 1298, 1043, 1291, 1046, 1335, 1014, 1399, 963, 1511, 941, 1606, L, 895, 1606, 666, 1460, 574, 1460, 592, 1560, Q, 606, 1639, 611, 1648, 635, 1681, 675, 1707, 715, 1732, 765, 1795, 815, 1857, 856, 1909, 895, 1961, 1009, 2004, 1122, 2047, 1252, 2019, L, 1252, 2203, Q, 1234, 2230, 1185, 2267, 1255, 2357, 1375, 2511, 1505, 2652, 1571, 2815, 1637, 2977, 1652, 3029, 1667, 3080, 1696, 3211, 1724, 3329, 1752, 3362, 1803, 3425, 1828, 3458, 1882, 3377, 2008, 3278, 2152, 3163, 2233, 3163, 2303, 3163, 2357, 3328, 2388, 3419, 2399, 3442, 2423, 3493, 2452, 3493, 2468, 3493, 2528, 3466, 2606, 3433, 2610, 3431, 2640, 3421, 2649, 3366, 2653, 3344, 2653, 3290, L, 2644, 3109, Q, 2644, 3061, 2723, 3007, 2794, 2960, 2833, 2960, 2842, 2960, 2883, 2989, 2901, 3000, 2915, 3007, 2790, 2784, 2791, 2594, 2790, 2589, 2788, 2582, 2773, 2525, 2746, 2450, 2718, 2374, 2699, 2340, 2680, 2306, 2606, 2275, 2532, 2245, 2498, 2152, 2430, 2010, 2395, 1930, 2383, 1903, 2374, 1876, L, 2335, 1876, Q, 2238, 1912, 2215, 1917, Z]],
      "label": "North al Gazera",
      "shortLabel": "NG",
      "labelPosition": [197.2, 250.6],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.GZ.SG"
    },
    "SD.GZ.SG": {
      "outlines": [[M, 3527, 518, Q, 3513, 429, 3491, 367, 3470, 304, 3425, 206, 3381, 108, 3364, 77, 3347, 44, 3234, 43, 3120, 43, 2976, 131, 2831, 220, 2517, 406, 2408, 493, 2338, 542, 2210, 633, 2114, 635, 2100, 635, 2012, 631, 1948, 627, 1912, 635, 1820, 657, 1827, 724, 1829, 758, 1826, 765, 1859, 807, 1981, 963, 2077, 1088, 2131, 1169, 2295, 1420, 2319, 1657, 2329, 1761, 2374, 1876, 2383, 1903, 2395, 1930, 2430, 2010, 2498, 2152, 2532, 2245, 2606, 2275, 2680, 2306, 2699, 2340, 2718, 2374, 2746, 2450, 2773, 2525, 2788, 2582, 2790, 2589, 2791, 2594, 2790, 2784, 2915, 3007, 2935, 3017, 2948, 3017, 2990, 3017, 3026, 3024, 3063, 3031, 3085, 3031, 3223, 3031, 3411, 2920, 3541, 2842, 3669, 2731, 3704, 2700, 3762, 2595, 3815, 2496, 3852, 2471, 4002, 2370, 4092, 2307, 4181, 2242, 4200, 2231, 4219, 2219, 4246, 2206, 4272, 2191, 4312, 2175, 4352, 2159, 4417, 2115, 4481, 2070, 4588, 2019, 4694, 1967, 4882, 1874, 5026, 1805, 5119, 1771, 5016, 1608, 4863, 1377, 4728, 1175, 4685, 1116, 4570, 957, 4478, 874, 4383, 787, 4244, 714, 4204, 692, 4150, 668, L, 4039, 622, 3829, 602, Q, 3732, 596, 3669, 599, Q, 3541, 606, 3527, 518, Z]],
      "label": "Sharq al Gazera",
      "shortLabel": "SG",
      "labelPosition": [339.6, 165.1],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.GZ.EK"
    },
    "SD.GZ.EK": {
      "outlines": [[M, 1981, 963, Q, 1859, 807, 1826, 765, 1819, 782, 1778, 782, 1766, 782, 1556, 750, 1347, 717, 1215, 717, 1217, 717, 1221, 716, 1200, 715, 1151, 716, 1059, 717, 968, 727, 703, 754, 703, 818, 703, 876, 817, 1022, 932, 1167, 1033, 1258, 1041, 1272, 1043, 1291, 1088, 1298, 1185, 1292, 1278, 1292, 1348, 1332, 1401, 1363, 1465, 1449, 1521, 1524, 1548, 1586, 1624, 1764, 1791, 1849, 1931, 1919, 2117, 1919, 2201, 1919, 2215, 1917, 2238, 1912, 2335, 1876, L, 2374, 1876, Q, 2329, 1761, 2319, 1657, 2295, 1420, 2131, 1169, Q, 2077, 1088, 1981, 963, Z]],
      "label": "Al Kamlin",
      "shortLabel": "EK",
      "labelPosition": [172.8, 124.1],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'aljazirah',
  type: 'maps'
};

/***/ })
/******/ ]);
}));
