
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
/******/ 	return __webpack_require__(__webpack_require__.s = 644);
/******/ })
/************************************************************************/
/******/ ({

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(645);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 645:
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
 * @id fusionmaps.Mayotte.1.09-25-2017 11:37:35
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
  "name": "Mayotte",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 388,
  "baseHeight": 500,
  "baseScaleFactor": 10,
  "firstEntity": "FR.MT.MT",
  "entities": {
    "FR.MT.MT": {
      "outlines": [[M, 3679, 1335, Q, 3665, 1362, 3651, 1362, 3581, 1349, 3553, 1418, 3539, 1446, 3526, 1446, 3414, 1474, 3414, 1585, 3414, 1696, 3428, 1794, 3428, 1821, 3414, 1849, 3387, 1919, 3359, 2030, 3567, 2030, 3776, 2016, 3804, 2016, 3804, 2002, 3832, 1780, 3832, 1557, 3818, 1515, 3818, 1488, 3776, 1376, 3706, 1349, Q, 3692, 1335, 3679, 1335, Z], [M, 1815, 751, Q, 1815, 806, 1773, 848, 1676, 904, 1551, 890, 1509, 890, 1495, 862, 1454, 778, 1468, 695, L, 1454, 681, Q, 1426, 667, 1398, 667, 1259, 625, 1259, 528, 1245, 500, 1245, 472, 1203, 403, 1148, 361, 1134, 347, 1148, 320, 1120, 222, 995, 250, 981, 250, 953, 236, 925, 208, 883, 153, 842, 97, 786, 69, 758, 55, 731, 55, 703, 41, 675, 55, 550, 97, 508, 208, 494, 222, 466, 236, 425, 250, 383, 264, 299, 278, 272, 361, 230, 459, 133, 472, 119, 486, 105, 486, 105, 570, 77, 639, 63, 667, 63, 681, 49, 792, 49, 904, 49, 931, 63, 945, 105, 1057, 105, 1196, 146, 1196, 174, 1182, 258, 1168, 258, 1223, 258, 1307, 286, 1362, 299, 1376, 313, 1390, 341, 1404, 369, 1390, 452, 1349, 522, 1432, 591, 1432, 578, 1488, 578, 1515, 591, 1529, 605, 1557, 647, 1585, 689, 1585, 703, 1627, 717, 1641, 689, 1682, 633, 1780, 731, 1877, 772, 1919, 786, 1988, 814, 2086, 897, 2155, 953, 2211, 953, 2294, 967, 2350, 981, 2433, 981, 2489, 995, 2531, 981, 2558, 981, 2572, 939, 2628, 856, 2684, 828, 2684, 814, 2697, 772, 2711, 758, 2767, 744, 2850, 772, 2934, 772, 2948, 786, 2948, 883, 2976, 967, 2962, 995, 2948, 1023, 2962, 1050, 2976, 1050, 3059, 1036, 3087, 1050, 3087, 1148, 3115, 1231, 3156, 1259, 3170, 1273, 3198, 1287, 3198, 1301, 3212, 1301, 3226, 1315, 3254, 1370, 3337, 1398, 3448, 1398, 3490, 1426, 3532, 1454, 3560, 1468, 3560, 1565, 3560, 1648, 3587, 1620, 3726, 1620, 3865, 1620, 3879, 1620, 3893, 1593, 3977, 1523, 3963, 1440, 3949, 1370, 3963, 1245, 3977, 1231, 3865, 1231, 3754, 1134, 3782, 1078, 3768, 1078, 3740, 1064, 3671, 1064, 3587, 1050, 3476, 925, 3504, 772, 3532, 731, 3448, 717, 3434, 717, 3421, 703, 3351, 675, 3323, 661, 3309, 647, 3309, 619, 3309, 605, 3309, 550, 3309, 536, 3365, 508, 3518, 522, 3685, 522, 3699, 522, 3713, 522, 3838, 647, 3810, 744, 3796, 758, 3879, 758, 3921, 772, 3977, 772, 4088, 731, 4199, 717, 4213, 717, 4241, 703, 4255, 689, 4269, 661, 4366, 731, 4394, 744, 4408, 744, 4422, 786, 4477, 870, 4491, 925, 4505, 925, 4575, 911, 4602, 925, 4630, 953, 4755, 1120, 4742, 1148, 4728, 1148, 4742, 1148, 4769, 1162, 4825, 1231, 4936, 1370, 4895, 1384, 4895, 1398, 4895, 1523, 4895, 1648, 4867, 1662, 4867, 1676, 4853, 1732, 4839, 1760, 4797, 1773, 4783, 1787, 4769, 1885, 4686, 2024, 4700, 2038, 4700, 2052, 4714, 2038, 4853, 2149, 4895, 2177, 4881, 2191, 4908, 2205, 4950, 2260, 4950, 2302, 4895, 2302, 4797, 2288, 4700, 2302, 4616, 2302, 4547, 2260, 4519, 2163, 4463, 2107, 4422, 2093, 4422, 2093, 4394, 2093, 4352, 2107, 4310, 2177, 4144, 2163, 3949, 2149, 3865, 2191, 3824, 2191, 3796, 2232, 3768, 2246, 3754, 2260, 3740, 2288, 3671, 2357, 3657, 2371, 3657, 2385, 3643, 2413, 3629, 2413, 3615, 2399, 3407, 2622, 3448, 2663, 3462, 2677, 3421, 2677, 3379, 2733, 3365, 2747, 3212, 2747, 3059, 2747, 3017, 2733, 3003, 2663, 2948, 2622, 2948, 2566, 2934, 2538, 2878, 2510, 2823, 2524, 2781, 2552, 2614, 2413, 2628, L, 2385, 2628, Q, 2344, 2517, 2357, 2378, 2357, 2322, 2385, 2266, 2385, 2252, 2399, 2252, 2469, 2141, 2413, 2058, 2441, 2058, 2469, 2058, 2510, 2030, 2580, 2044, 2677, 2058, 2677, 1988, 2677, 1974, 2691, 1960, 2719, 1905, 2789, 1891, 2844, 1849, 2858, 1794, 2872, 1738, 2914, 1696, 2928, 1682, 2942, 1668, 2955, 1613, 2955, 1557, 2969, 1349, 2942, 1168, 2928, 1140, 2886, 1154, 2747, 1140, 2650, 1112, 2566, 1084, 2580, 1001, 2566, 987, 2566, 973, 2552, 959, 2538, 945, 2497, 917, 2441, 945, 2413, 931, 2385, 945, 2246, 973, 2191, 917, 2177, 890, 2163, 876, 2135, 792, 2079, 737, 2065, 723, 2052, 695, 2038, 625, 1968, 625, Q, 1773, 584, 1815, 751, Z]],
      "label": "Mayotte",
      "shortLabel": "MT",
      "labelPosition": [163.6, 184.7],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'mayotte',
  type: 'maps'
};

/***/ })

/******/ });
}));
