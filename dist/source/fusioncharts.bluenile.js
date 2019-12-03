
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(5);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 5:
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
 * @id fusionmaps.BlueNile.1.06-19-2019 11:30:47
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
  "name": "BlueNile",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 362,
  "baseHeight": 600,
  "baseScaleFactor": 10,
  "firstEntity": "SD.BN.ED",
  "entities": {
    "SD.BN.ED": {
      "outlines": [[M, 1719, 663, Q, 1598, 683, 1536, 694, 1425, 714, 1337, 771, 1267, 818, 1003, 1011, 802, 1157, 664, 1235, 444, 1343, 317, 1412, 189, 1484, 123, 1543, 116, 1552, 109, 1561, 59, 1631, 51, 1720, 43, 1779, 43, 1795, 43, 1844, 117, 2391, 196, 2973, 203, 3056, 214, 3187, 227, 3276, 268, 3211, 363, 3050, 457, 2889, 508, 2827, 558, 2764, 594, 2717, 629, 2670, 676, 2629, 722, 2587, 768, 2525, 838, 2429, 862, 2402, 963, 2284, 1026, 2213, 1143, 2080, 1204, 2029, 1261, 1983, 1422, 1884, 1565, 1794, 1597, 1760, 1600, 1757, 1603, 1752, 1619, 1723, 1648, 1648, 1688, 1575, 1757, 1575, 1795, 1575, 1896, 1634, 2000, 1696, 2006, 1697, 2022, 1700, 2067, 1698, 2106, 1700, 2117, 1734, 2127, 1767, 2141, 1807, 2151, 1837, 2151, 1880, 2151, 1898, 2141, 2115, 2132, 2331, 2132, 2371, 2132, 2402, 2138, 2416, 2156, 2382, 2192, 2377, 2226, 2373, 2306, 2377, 2428, 2358, 2526, 2314, 2666, 2252, 2704, 2158, 2682, 2132, 2663, 2098, 2592, 1975, 2542, 1937, 2492, 1900, 2437, 1875, 2384, 1854, 2365, 1844, 2334, 1829, 2322, 1804, 2309, 1775, 2309, 1712, 2309, 1674, 2312, 1649, 2312, 1643, 2312, 1638, 2316, 1550, 2338, 1472, 2360, 1393, 2360, 1324, 2360, 1237, 2298, 1113, 2235, 990, 2235, 918, 2235, 845, 2257, 674, 2279, 503, 2279, 436, 2279, 361, 2277, 344, 2275, 305, 2264, 264, 2244, 319, 2229, 342, 2181, 424, 2073, 461, 2049, 468, 1901, 562, Q, 1755, 654, 1719, 663, Z]],
      "label": "Ad Damazin",
      "shortLabel": "ED",
      "labelPosition": [89.7, 171.4],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.BN.ER"
    },
    "SD.BN.ER": {
      "outlines": [[M, 3161, 433, Q, 3128, 349, 3094, 281, 2980, 62, 2742, 42, 2504, 23, 2412, 61, 2318, 99, 2284, 204, 2273, 237, 2264, 264, 2275, 305, 2277, 344, 2279, 361, 2279, 436, 2279, 503, 2257, 674, 2235, 845, 2235, 918, 2235, 990, 2298, 1113, 2360, 1237, 2360, 1324, 2360, 1393, 2338, 1472, 2316, 1550, 2312, 1638, 2312, 1643, 2312, 1649, 2309, 1674, 2309, 1712, 2309, 1775, 2322, 1804, 2334, 1829, 2365, 1844, 2384, 1854, 2437, 1875, 2492, 1900, 2542, 1937, 2592, 1975, 2663, 2098, 2682, 2132, 2704, 2158, 2746, 2207, 2796, 2222, 2820, 2229, 2839, 2230, 2858, 2230, 2866, 2243, 2873, 2255, 2887, 2291, 2899, 2328, 2911, 2337, 2915, 2340, 2977, 2394, 3023, 2433, 3051, 2444, 3123, 2471, 3235, 2495, 3299, 2508, 3428, 2536, 3426, 2515, 3424, 2491, 3417, 2397, 3416, 2360, 3414, 2323, 3462, 2290, 3510, 2256, 3524, 2242, 3538, 2227, 3542, 2197, 3557, 2113, 3564, 2064, 3569, 2016, 3567, 1897, 3567, 1893, 3566, 1888, 3552, 1681, 3455, 1378, 3333, 1033, 3295, 895, 3293, 891, 3292, 888, 3278, 824, 3264, 765, Q, 3170, 599, 3161, 433, Z]],
      "label": "Al Roseires",
      "shortLabel": "ER",
      "labelPosition": [290.1, 128.6],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.BN.GI"
    },
    "SD.BN.GI": {
      "outlines": [[M, 2887, 2291, Q, 2873, 2255, 2866, 2243, 2858, 2230, 2839, 2230, 2820, 2229, 2796, 2222, 2746, 2207, 2704, 2158, 2666, 2252, 2526, 2314, 2428, 2358, 2306, 2377, 2226, 2373, 2192, 2377, 2156, 2382, 2138, 2416, 2128, 2436, 2124, 2465, 2124, 2502, 2088, 2518, 2080, 2521, 2043, 2528, 1985, 2543, 1930, 2543, 1856, 2537, 1748, 2531, 1640, 2524, 1605, 2523, 1570, 2522, 1544, 2524, 1519, 2527, 1505, 2558, 1498, 2573, 1489, 2609, 1471, 2693, 1457, 2744, 1452, 2767, 1452, 2835, 1452, 2982, 1455, 3027, 1460, 3085, 1479, 3129, 1486, 3145, 1541, 3248, 1601, 3358, 1661, 3489, 1662, 3489, 1663, 3489, 1722, 3499, 1770, 3499, 1794, 3499, 1865, 3506, 1929, 3512, 1969, 3510, 2021, 3507, 2151, 3530, 2275, 3551, 2345, 3548, 2346, 3545, 2348, 3542, 2374, 3496, 2385, 3460, 2425, 3423, 2549, 3328, 2673, 3233, 2696, 3224, 2719, 3216, 2764, 3252, 2808, 3288, 2876, 3354, 2999, 3473, 3093, 3473, 3184, 3473, 3247, 3398, 3301, 3333, 3311, 3238, 3312, 3237, 3312, 3234, 3320, 3197, 3385, 2928, 3431, 2734, 3431, 2618, 3431, 2594, 3428, 2539, 3428, 2538, 3428, 2536, 3299, 2508, 3235, 2495, 3123, 2471, 3051, 2444, 3023, 2433, 2977, 2394, 2915, 2340, 2911, 2337, Q, 2899, 2328, 2887, 2291, Z]],
      "label": "Geissan",
      "shortLabel": "GI",
      "labelPosition": [244.1, 285.3],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.BN.BA"
    },
    "SD.BN.BA": {
      "outlines": [[M, 1896, 1634, Q, 1795, 1575, 1757, 1575, 1688, 1575, 1648, 1648, 1619, 1723, 1603, 1752, 1600, 1757, 1597, 1760, 1565, 1794, 1422, 1884, 1261, 1983, 1204, 2029, 1143, 2080, 1026, 2213, 963, 2284, 862, 2402, 838, 2429, 768, 2525, 722, 2587, 676, 2629, 629, 2670, 594, 2717, 558, 2764, 508, 2827, 457, 2889, 363, 3050, 268, 3211, 227, 3276, 239, 3364, 253, 3413, 301, 3578, 419, 3619, 530, 3657, 635, 3731, L, 633, 3725, Q, 764, 3686, 905, 3632, 983, 3602, 1115, 3550, 1330, 3472, 1550, 3470, 1573, 3470, 1619, 3480, 1641, 3485, 1661, 3489, 1601, 3358, 1541, 3248, 1486, 3145, 1479, 3129, 1460, 3085, 1455, 3027, 1452, 2982, 1452, 2835, 1452, 2767, 1457, 2744, 1471, 2693, 1489, 2609, 1498, 2573, 1505, 2558, 1519, 2527, 1544, 2524, 1570, 2522, 1605, 2523, 1640, 2524, 1748, 2531, 1856, 2537, 1930, 2543, 1985, 2543, 2043, 2528, 2080, 2521, 2088, 2518, 2124, 2502, 2124, 2465, 2128, 2436, 2138, 2416, 2132, 2402, 2132, 2371, 2132, 2331, 2141, 2115, 2151, 1898, 2151, 1880, 2151, 1837, 2141, 1807, 2127, 1767, 2117, 1734, 2106, 1700, 2067, 1698, 2022, 1700, 2006, 1697, Q, 2000, 1696, 1896, 1634, Z]],
      "label": "Baw",
      "shortLabel": "BA",
      "labelPosition": [99.3, 303.8],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.BN.EK"
    },
    "SD.BN.EK": {
      "outlines": [[M, 2151, 3530, Q, 2021, 3507, 1969, 3510, 1929, 3512, 1865, 3506, 1794, 3499, 1770, 3499, 1722, 3499, 1663, 3489, 1662, 3489, 1661, 3489, 1641, 3485, 1619, 3480, 1573, 3470, 1550, 3470, 1330, 3472, 1115, 3550, 983, 3602, 905, 3632, 764, 3686, 633, 3725, L, 635, 3731, Q, 820, 3861, 982, 4104, 1035, 4164, 1119, 4243, 1191, 4311, 1345, 4454, 1619, 4721, 1619, 4907, 1619, 5117, 1591, 5229, 1572, 5303, 1529, 5365, 1480, 5434, 1466, 5475, 1438, 5559, 1438, 5720, 1438, 5757, 1436, 5819, 1436, 5868, 1445, 5894, 1469, 5959, 1593, 5959, 1713, 5959, 1773, 5909, 1823, 5868, 1847, 5774, 1849, 5768, 1884, 5577, 1909, 5439, 1951, 5338, L, 1999, 5130, Q, 2021, 4897, 2104, 4813, 2187, 4729, 2202, 4672, 2216, 4615, 2218, 4548, 2219, 4535, 2219, 4406, 2219, 4316, 2208, 4088, 2196, 3878, 2188, 3828, 2180, 3778, 2271, 3657, 2316, 3597, 2345, 3548, Q, 2275, 3551, 2151, 3530, Z]],
      "label": "Al Kurumik",
      "shortLabel": "EK",
      "labelPosition": [166.4, 418.9],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'bluenile',
  type: 'maps'
};

/***/ })

/******/ });
}));
