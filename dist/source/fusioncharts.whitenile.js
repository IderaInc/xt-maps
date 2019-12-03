
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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ({

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(37);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 37:
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
 * @id fusionmaps.WhiteNile.1.06-20-2019 07:53:48
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
  "name": "WhiteNile",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 233,
  "baseHeight": 500,
  "baseScaleFactor": 10,
  "firstEntity": "SD.WN.AD",
  "entities": {
    "SD.WN.AD": {
      "outlines": [[M, 698, 449, Q, 658, 458, 642, 463, 610, 472, 594, 483, 560, 507, 534, 592, 502, 695, 484, 723, 440, 789, 396, 844, 343, 913, 303, 943, 189, 1031, 123, 1144, 46, 1276, 55, 1418, 55, 1424, 56, 1430, 69, 1668, 94, 1727, 118, 1784, 189, 1850, 243, 1900, 291, 1992, 317, 2043, 358, 2133, 382, 2178, 432, 2280, 479, 2370, 523, 2424, 534, 2437, 656, 2555, 759, 2654, 759, 2671, 758, 2675, 758, 2679, 851, 2678, 884, 2672, 956, 2657, 983, 2604, 1002, 2566, 1014, 2516, 1024, 2464, 1030, 2444, 1039, 2409, 1056, 2395, 1076, 2377, 1118, 2377, 1177, 2377, 1231, 2399, 1295, 2426, 1379, 2436, 1429, 2441, 1471, 2449, 1407, 2401, 1395, 2384, 1363, 2339, 1327, 2295, 1291, 2251, 1231, 2191, 1171, 2131, 1142, 2067, 1114, 2005, 1109, 1929, 1109, 1927, 1109, 1925, 1109, 1923, 1109, 1921, 1109, 1863, 1061, 1763, 1017, 1668, 967, 1606, 955, 1592, 925, 1446, 896, 1305, 896, 1276, 931, 1103, 931, 1060, 931, 1030, 922, 949, 912, 869, 912, 864, 912, 806, 997, 716, 1041, 669, 1055, 650, 1081, 613, 1081, 583, 1081, 536, 1044, 524, 1026, 518, 912, 506, 866, 502, 801, 482, Q, 732, 460, 698, 449, Z]],
      "label": "Ad Douiem",
      "shortLabel": "AD",
      "labelPosition": [51, 150.8],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.WN.EG"
    },
    "SD.WN.EG": {
      "outlines": [[M, 1482, 46, Q, 1474, 45, 1466, 45, 1447, 46, 1421, 45, 1357, 41, 1317, 41, 1276, 42, 1257, 81, 1236, 119, 1175, 117, 1113, 114, 1101, 118, 1091, 121, 1042, 133, 1005, 142, 979, 153, 920, 180, 865, 217, 789, 268, 767, 310, 762, 320, 750, 387, 742, 437, 716, 444, 706, 447, 698, 449, 732, 460, 801, 482, 866, 502, 912, 506, 1026, 518, 1044, 524, 1081, 536, 1081, 583, 1081, 613, 1055, 650, 1041, 669, 997, 716, 912, 806, 912, 864, 912, 869, 922, 949, 931, 1030, 931, 1060, 931, 1103, 896, 1276, 896, 1305, 925, 1446, 955, 1592, 967, 1606, 1017, 1668, 1061, 1763, 1109, 1863, 1109, 1921, 1109, 1923, 1109, 1925, 1109, 1927, 1109, 1929, 1114, 2005, 1142, 2067, 1171, 2131, 1231, 2191, 1291, 2251, 1327, 2295, 1363, 2339, 1395, 2384, 1407, 2401, 1471, 2449, 1518, 2458, 1560, 2476, 1600, 2495, 1660, 2490, 1720, 2484, 1735, 2484, 1749, 2484, 1832, 2471, 1915, 2458, 1929, 2451, 1931, 2444, 1933, 2435, 1945, 2392, 1945, 2349, 1945, 2300, 1939, 2284, 1935, 2274, 1922, 2272, 1887, 2263, 1863, 2191, 1851, 2135, 1841, 2103, 1822, 2043, 1788, 2042, L, 1772, 2042, Q, 1762, 2131, 1760, 2144, 1753, 2189, 1741, 2231, 1737, 2244, 1715, 2329, 1686, 2408, 1644, 2408, 1623, 2408, 1618, 2369, 1616, 2348, 1619, 2321, 1623, 2294, 1612, 2265, 1597, 2223, 1596, 2215, 1562, 2112, 1509, 2036, 1416, 1901, 1411, 1893, 1389, 1856, 1380, 1807, 1372, 1754, 1366, 1682, 1360, 1611, 1336, 1592, 1312, 1573, 1306, 1575, 1299, 1576, 1297, 1559, 1364, 1499, 1392, 1459, 1420, 1418, 1419, 1339, 1419, 1260, 1336, 1191, 1285, 1149, 1280, 1142, 1254, 1115, 1254, 1084, 1254, 1039, 1409, 1007, 1413, 1006, 1532, 984, 1581, 975, 1620, 966, 1667, 966, 1685, 924, 1702, 887, 1694, 832, 1694, 813, 1739, 720, 1784, 628, 1784, 612, 1784, 585, 1780, 581, 1776, 577, 1749, 577, 1693, 585, 1684, 585, 1640, 585, 1604, 567, 1557, 543, 1556, 499, 1556, 464, 1521, 421, 1486, 378, 1486, 373, 1486, 318, 1519, 318, 1543, 318, 1570, 348, 1596, 377, 1627, 377, 1661, 377, 1667, 345, 1667, 345, 1667, 269, 1667, 173, 1607, 108, Q, 1554, 50, 1482, 46, Z]],
      "label": "Al Gutaina",
      "shortLabel": "EG",
      "labelPosition": [132.1, 70.6],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.WN.KO"
    },
    "SD.WN.KO": {
      "outlines": [[M, 1014, 2516, Q, 1002, 2566, 983, 2604, 956, 2657, 884, 2672, 851, 2678, 758, 2679, 755, 2699, 750, 2713, L, 719, 2765, Q, 710, 2781, 705, 2799, 696, 2830, 696, 2880, 696, 2915, 718, 3008, 718, 3024, 629, 3084, 583, 3116, 517, 3158, 499, 3170, 478, 3210, 456, 3252, 439, 3268, 407, 3295, 377, 3313, 361, 3324, 328, 3343, 297, 3364, 264, 3479, 247, 3538, 230, 3616, 213, 3686, 208, 3747, 204, 3790, 205, 3868, 215, 3960, 266, 4142, 286, 4212, 353, 4424, 374, 4489, 418, 4539, 447, 4572, 507, 4619, 574, 4671, 600, 4698, 648, 4745, 674, 4804, 674, 4807, 675, 4809, 716, 4867, 732, 4889, 748, 4911, 830, 4932, 911, 4952, 1037, 4957, 1162, 4962, 1246, 4955, 1330, 4948, 1391, 4953, 1451, 4958, 1520, 4955, 1589, 4952, 1599, 4952, 1633, 4952, 1635, 4949, 1639, 4945, 1638, 4909, 1643, 4892, 1646, 4862, 1650, 4833, 1647, 4775, 1645, 4718, 1646, 4670, 1646, 4651, 1643, 4624, 1639, 4579, 1639, 4578, 1638, 4544, 1656, 4531, 1645, 4432, 1692, 4315, 1720, 4242, 1725, 4227, 1741, 4177, 1741, 4134, 1741, 4073, 1704, 3920, 1666, 3767, 1671, 3685, 1677, 3602, 1687, 3578, 1696, 3555, 1716, 3507, 1717, 3505, 1718, 3503, 1719, 3500, 1719, 3496, 1723, 3470, 1733, 3415, 1741, 3372, 1741, 3333, 1741, 3234, 1675, 3186, 1634, 3161, 1612, 3146, 1573, 3119, 1549, 3088, 1517, 3048, 1481, 2942, 1443, 2828, 1443, 2755, 1443, 2672, 1490, 2599, 1513, 2565, 1522, 2550, 1537, 2526, 1537, 2508, 1537, 2497, 1476, 2452, 1473, 2450, 1471, 2449, 1429, 2441, 1379, 2436, 1295, 2426, 1231, 2399, 1177, 2377, 1118, 2377, 1076, 2377, 1056, 2395, 1039, 2409, 1030, 2444, Q, 1024, 2464, 1014, 2516, Z]],
      "label": "Kosti",
      "shortLabel": "KO",
      "labelPosition": [97.3, 366.8],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.WN.AJ"
    },
    "SD.WN.AJ": {
      "outlines": [[M, 1929, 2451, Q, 1915, 2458, 1832, 2471, 1749, 2484, 1735, 2484, 1720, 2484, 1660, 2490, 1600, 2495, 1560, 2476, 1518, 2458, 1471, 2449, 1473, 2450, 1476, 2452, 1537, 2497, 1537, 2508, 1537, 2526, 1522, 2550, 1513, 2565, 1490, 2599, 1443, 2672, 1443, 2755, 1443, 2828, 1481, 2942, 1517, 3048, 1549, 3088, 1573, 3119, 1612, 3146, 1634, 3161, 1675, 3186, 1741, 3234, 1741, 3333, 1741, 3372, 1733, 3415, 1723, 3470, 1719, 3496, 1719, 3500, 1718, 3503, 1717, 3505, 1716, 3507, 1696, 3555, 1687, 3578, 1677, 3602, 1671, 3685, 1666, 3767, 1704, 3920, 1741, 4073, 1741, 4134, 1741, 4177, 1725, 4227, 1720, 4242, 1692, 4315, 1645, 4432, 1656, 4531, 1666, 4523, 1682, 4522, 1713, 4520, 1775, 4521, 1859, 4522, 1890, 4522, 1901, 4522, 2096, 4529, 2286, 4528, 2286, 4488, 2286, 4389, 2224, 4204, 2176, 4062, 2139, 3994, 2137, 3989, 2134, 3984, 2115, 3933, 2112, 3925, 2110, 3919, 2110, 3881, 2110, 3818, 2162, 3716, 2212, 3615, 2212, 3549, 2212, 3455, 2111, 3295, 2079, 3245, 2035, 3186, 2006, 3147, 1995, 3131, 1990, 3126, 1989, 3123, 1971, 3102, 1942, 3045, 1902, 2967, 1902, 2928, 1902, 2888, 1927, 2831, 1953, 2774, 1953, 2716, 1953, 2681, 1937, 2598, 1921, 2514, 1921, 2492, Q, 1921, 2480, 1929, 2451, Z]],
      "label": "Al Jabalian",
      "shortLabel": "AJ",
      "labelPosition": [190.8, 354.8],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'whitenile',
  type: 'maps'
};

/***/ })

/******/ });
}));
