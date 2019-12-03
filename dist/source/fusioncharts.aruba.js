
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
/******/ 	return __webpack_require__(__webpack_require__.s = 174);
/******/ })
/************************************************************************/
/******/ ({

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(175);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 175:
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
 * @id fusionmaps.Aruba.20.10-30-2012 08:20:36
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
  "name": "Aruba",
  "revision": 20,
  "standaloneInit": true,
  "baseWidth": 270,
  "baseHeight": 270,
  "baseScaleFactor": 10,
  "entities": {
    "CA.AR": {
      "outlines": [[M, 1297, 979, Q, 1291, 974, 1266, 972, 1242, 971, 1232, 961, 1223, 952, 1197, 931, 1187, 923, 1166, 896, 1140, 876, 1095, 884, 1084, 886, 1075, 877, 1065, 867, 1055, 866, 1044, 866, 1020, 839, 1010, 828, 997, 799, 984, 770, 975, 761, 936, 722, 886, 683, 837, 644, 820, 626, L, 820, 624, Q, 752, 557, 746, 551, 718, 520, 692, 476, 654, 411, 647, 389, 640, 365, 617, 346, 611, 341, 603, 335, 602, 334, 600, 333, 596, 328, 587, 323, 583, 321, 577, 319, 576, 317, 560, 301, 550, 300, 526, 300, 507, 298, 497, 284, 461, 229, 410, 201, 398, 195, 360, 174, 357, 172, 342, 154, 340, 151, 339, 136, 338, 123, 335, 121, 315, 111, 291, 93, 268, 81, 228, 81, 218, 81, 197, 106, 175, 133, 175, 154, 175, 171, 199, 188, 225, 202, 227, 204, 250, 220, 252, 281, 254, 282, 255, 284, 270, 301, 287, 359, 294, 382, 296, 411, 299, 455, 300, 461, 302, 476, 333, 550, 358, 607, 350, 649, 350, 650, 349, 651, 334, 691, 324, 716, 306, 762, 282, 779, 243, 806, 232, 832, 219, 863, 227, 927, L, 187, 1011, Q, 185, 1016, 167, 1028, 148, 1040, 145, 1046, 125, 1084, 125, 1088, 125, 1092, 142, 1114, 161, 1138, 170, 1141, 188, 1149, 198, 1169, 210, 1196, 220, 1214, 223, 1219, 235, 1220, 249, 1221, 257, 1229, 283, 1258, 292, 1266, 338, 1303, 355, 1326, L, 357, 1329, Q, 389, 1353, 412, 1376, 422, 1371, 422, 1364, 444, 1373, 473, 1405, 504, 1441, 517, 1454, 545, 1479, 545, 1516, 545, 1536, 562, 1552, 574, 1564, 585, 1566, 636, 1576, 656, 1582, 688, 1592, 705, 1611, 714, 1627, 720, 1636, 732, 1652, 745, 1651, 751, 1651, 756, 1658, 764, 1671, 765, 1671, 793, 1679, 797, 1681, 797, 1685, 792, 1704, 787, 1704, 780, 1706, L, 780, 1723, Q, 816, 1755, 823, 1759, 855, 1782, 892, 1784, 893, 1809, 910, 1819, 919, 1824, 926, 1828, 966, 1821, 972, 1821, 1012, 1821, 1026, 1838, 1046, 1862, 1085, 1874, 1108, 1881, 1130, 1915, 1158, 1958, 1170, 1969, 1195, 1990, 1237, 2016, 1267, 2035, 1310, 2046, 1315, 2047, 1326, 2060, 1337, 2073, 1342, 2074, 1354, 2075, 1367, 2086, 1372, 2088, 1395, 2103, 1399, 2106, 1403, 2108, 1406, 2110, 1408, 2111, 1421, 2127, 1435, 2164, 1450, 2202, 1482, 2215, 1513, 2229, 1537, 2248, 1561, 2268, 1616, 2293, 1625, 2293, 1667, 2311, 1702, 2326, 1730, 2326, 1736, 2326, 1805, 2329, 1821, 2329, 1831, 2337, 1840, 2344, 1857, 2344, 1857, 2346, 1860, 2354, 1860, 2373, 1822, 2401, 1822, 2419, 1850, 2429, 1871, 2436, 1895, 2436, L, 1963, 2431, Q, 2027, 2431, 2063, 2475, 2083, 2498, 2094, 2506, 2117, 2521, 2152, 2524, 2176, 2525, 2234, 2548, 2307, 2577, 2307, 2606, 2307, 2616, 2304, 2618, 2291, 2628, 2287, 2631, L, 2287, 2649, Q, 2303, 2649, 2321, 2659, 2336, 2659, 2332, 2644, L, 2350, 2644, Q, 2391, 2656, 2409, 2656, 2456, 2656, 2485, 2641, 2508, 2637, 2525, 2584, 2525, 2574, 2505, 2559, 2486, 2544, 2487, 2531, 2490, 2511, 2483, 2493, 2474, 2469, 2472, 2459, 2475, 2401, 2462, 2376, 2460, 2371, 2436, 2355, 2415, 2340, 2415, 2327, 2415, 2313, 2422, 2304, 2430, 2294, 2430, 2281, 2430, 2279, 2375, 2146, 2368, 2096, 2357, 2079, 2317, 2039, 2317, 2036, 2317, 2034, 2322, 2031, 2322, 2030, 2323, 2029, 2325, 2016, 2325, 1992, 2325, 1977, 2301, 1908, 2276, 1834, 2260, 1811, 2246, 1791, 2212, 1786, 2171, 1779, 2167, 1776, 2146, 1762, 2130, 1737, 2107, 1699, 2105, 1696, 2092, 1688, 2085, 1682, 2072, 1670, 2070, 1646, 2067, 1624, 2042, 1611, 2024, 1601, 2008, 1579, 1993, 1556, 1975, 1546, 1941, 1528, 1930, 1529, 1879, 1530, 1877, 1516, 1882, 1478, 1872, 1466, 1867, 1460, 1854, 1453, 1841, 1446, 1830, 1431, 1814, 1419, 1782, 1383, 1742, 1338, 1742, 1321, 1742, 1316, 1750, 1306, 1757, 1296, 1757, 1291, 1757, 1278, 1692, 1249, 1676, 1243, 1645, 1206, 1565, 1099, 1542, 1099, 1535, 1099, 1505, 1116, 1475, 1134, 1461, 1134, 1453, 1134, 1429, 1112, 1417, 1111, 1413, 1079, 1410, 1046, 1385, 1044, 1363, 1043, 1343, 1024, Q, 1331, 1012, 1297, 979, Z]],
      "label": "Aruba",
      "shortLabel": "AR",
      "labelPosition": [120.7, 146],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'aruba',
  type: 'maps'
};

/***/ })

/******/ });
}));
