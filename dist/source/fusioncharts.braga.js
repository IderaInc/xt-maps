
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
/******/ 	return __webpack_require__(__webpack_require__.s = 410);
/******/ })
/************************************************************************/
/******/ ({

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(411);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 411:
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
 * @id fusionmaps.Braga.20.10-31-2012 09:39:53
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
  "name": "Braga",
  "revision": 20,
  "standaloneInit": true,
  "baseWidth": 350,
  "baseHeight": 240,
  "baseScaleFactor": 10,
  "entities": {
    "PT.BR.VZ": {
      "outlines": [[M, 1751, 2072, Q, 1734, 2095, 1692, 2109, 1731, 2132, 1762, 2144, 1816, 2164, 1865, 2220, L, 1895, 2220, Q, 1897, 2214, 1899, 2213, 1938, 2179, 1950, 2129, 1958, 2067, 1967, 2034, 1979, 2024, 1989, 2015, 1905, 2014, 1887, 1988, 1885, 1986, 1878, 1970, 1875, 1961, 1866, 1961, 1850, 1961, 1774, 2026, Q, 1772, 2028, 1751, 2072, Z]],
      "label": "Vizela",
      "shortLabel": "VZ",
      "labelPosition": [165, 232],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [[M, 1650, 2320, L, 1840, 2320, 1840, 2090, 1840, 2320]]
    },
    "PT.BR.ES": {
      "outlines": [[M, 272, 935, Q, 249, 955, 226, 950, 207, 946, 197, 956, L, 180, 973, 65, 973, Q, 51, 974, 51, 1003, 51, 1035, 72, 1068, 92, 1100, 89, 1155, 88, 1204, 102, 1238, 122, 1284, 127, 1319, 135, 1366, 158, 1482, 162, 1503, 161, 1569, 185, 1600, 199, 1630, 214, 1624, 234, 1635, 259, 1649, 269, 1652, L, 269, 1652, Q, 279, 1634, 292, 1582, 301, 1541, 321, 1539, 349, 1541, 363, 1541, 387, 1541, 397, 1524, 424, 1482, 424, 1463, 424, 1435, 393, 1413, 363, 1390, 363, 1383, 362, 1345, 349, 1321, 336, 1297, 336, 1277, 352, 1221, 351, 1193, 352, 1177, 329, 1155, 306, 1132, 306, 1121, 306, 1077, 334, 1002, 358, 940, 348, 897, L, 348, 890, Q, 317, 902, 272, 935, Z]],
      "label": "Esposende",
      "shortLabel": "ES",
      "labelPosition": [23.7, 127.1],
      "labelAlignment": [CEN, MID]
    },
    "PT.BR.BA": {
      "outlines": [[M, 725, 844, Q, 687, 835, 660, 806, L, 606, 806, Q, 602, 836, 599, 844, 511, 844, 473, 840, 447, 837, 414, 861, 379, 885, 367, 885, 359, 886, 348, 890, L, 348, 897, Q, 358, 940, 334, 1002, 306, 1077, 306, 1121, 306, 1132, 329, 1155, 352, 1177, 352, 1193, 352, 1221, 337, 1277, 336, 1297, 349, 1321, 362, 1345, 363, 1383, 363, 1390, 394, 1413, 424, 1435, 424, 1463, 424, 1482, 397, 1524, 387, 1541, 363, 1541, 349, 1541, 321, 1539, 301, 1541, 292, 1582, 279, 1634, 269, 1652, L, 272, 1653, Q, 272, 1682, 321, 1688, 333, 1688, 344, 1707, 361, 1735, 363, 1737, 421, 1734, 451, 1735, 504, 1738, 542, 1756, 554, 1762, 563, 1782, 574, 1808, 584, 1817, 617, 1853, 629, 1866, 640, 1874, 649, 1881, 659, 1888, 668, 1895, 671, 1889, 677, 1883, 692, 1866, 727, 1842, 773, 1809, 783, 1809, 825, 1809, 834, 1840, L, 907, 1840, Q, 941, 1744, 941, 1707, 929, 1684, 930, 1665, 929, 1634, 994, 1625, 1059, 1615, 1059, 1579, 1059, 1578, 1059, 1577, 1058, 1555, 1051, 1536, 1043, 1518, 1044, 1503, 1043, 1430, 1101, 1448, 1090, 1383, 1122, 1361, 1157, 1335, 1158, 1304, 1158, 1294, 1146, 1281, 1130, 1262, 1127, 1258, L, 1131, 1190, Q, 1134, 1169, 1150, 1167, 1151, 1151, 1139, 1142, 1138, 1141, 1138, 1140, 1121, 1128, 1082, 1126, 1011, 1120, 1013, 1075, 1014, 1059, 1003, 1024, 993, 990, 994, 977, 999, 946, 981, 934, 956, 916, 950, 906, 944, 935, 939, 935, 922, 935, 914, 916, 908, 904, 899, 874, 891, 856, 866, 853, 850, 850, 816, 851, Q, 743, 847, 725, 844, Z]],
      "label": "Barcelos",
      "shortLabel": "BA",
      "labelPosition": [71.3, 135],
      "labelAlignment": [CEN, MID]
    },
    "PT.BR.VV": {
      "outlines": [[M, 1568, 266, Q, 1529, 266, 1519, 270, 1513, 272, 1507, 287, 1500, 300, 1496, 300, 1482, 301, 1441, 300, 1409, 298, 1393, 304, 1367, 313, 1333, 371, 1302, 421, 1272, 422, 1254, 421, 1246, 412, 1237, 403, 1219, 403, 1162, 402, 1146, 395, L, 1108, 395, Q, 1108, 396, 1073, 451, 1052, 483, 1061, 523, 1061, 525, 1061, 528, 1057, 552, 1037, 569, 1019, 584, 1028, 615, 1022, 641, 1003, 663, 982, 687, 979, 695, 973, 713, 960, 831, 954, 880, 950, 906, 956, 916, 981, 934, 999, 946, 994, 977, 993, 990, 1003, 1024, 1014, 1059, 1013, 1075, 1011, 1120, 1082, 1126, 1121, 1128, 1138, 1140, 1138, 1141, 1139, 1142, 1179, 1121, 1200, 1109, 1239, 1086, 1226, 1045, 1307, 1029, 1342, 1023, 1344, 1023, 1347, 1022, 1344, 1011, 1344, 994, 1344, 948, 1376, 895, 1406, 845, 1439, 828, 1432, 775, 1471, 747, 1522, 720, 1542, 699, 1554, 686, 1593, 627, 1601, 615, 1611, 604, 1633, 581, 1667, 562, 1697, 547, 1738, 495, 1781, 440, 1781, 412, 1781, 409, 1770, 397, 1758, 386, 1758, 372, 1758, 363, 1762, 303, 1741, 307, 1728, 308, 1701, 307, 1700, 296, 1697, 282, 1663, 277, Q, 1569, 266, 1568, 266, Z]],
      "label": "Vila Verde",
      "shortLabel": "VV",
      "labelPosition": [126.5, 70.4],
      "labelAlignment": [CEN, MID]
    },
    "PT.BR.TB": {
      "outlines": [[M, 2294, 49, Q, 2271, 49, 2203, 83, 2194, 88, 2151, 92, 2117, 96, 2104, 114, 2043, 199, 1945, 221, 1943, 221, 1941, 222, 1934, 227, 1925, 240, 1914, 253, 1903, 254, 1857, 258, 1846, 270, 1829, 286, 1783, 298, 1772, 301, 1762, 303, 1758, 363, 1758, 372, 1758, 386, 1770, 397, 1781, 409, 1781, 412, 1781, 440, 1738, 495, 1697, 547, 1667, 562, 1633, 581, 1611, 604, 1622, 608, 1629, 608, 1636, 665, 1637, 672, 1637, 676, 1679, 676, 1725, 676, 1732, 665, L, 1755, 631, Q, 1778, 624, 1796, 609, 1808, 600, 1832, 600, 1855, 600, 1888, 619, 1892, 622, 1937, 634, 1943, 673, 1950, 695, 1962, 735, 1986, 726, L, 1986, 771, Q, 1996, 767, 2011, 768, 2021, 767, 2094, 775, 2152, 775, 2158, 764, L, 2162, 735, Q, 2165, 717, 2180, 711, 2222, 694, 2275, 665, 2294, 660, 2315, 641, 2337, 620, 2359, 612, 2383, 602, 2421, 604, 2442, 605, 2484, 608, L, 2484, 596, Q, 2485, 595, 2485, 593, 2488, 576, 2488, 536, L, 2492, 536, Q, 2514, 477, 2580, 361, 2634, 245, 2618, 121, 2682, 115, 2682, 59, 2682, 44, 2675, 41, 2674, 41, 2642, 41, L, 2538, 49, Q, 2497, 60, 2435, 60, Q, 2335, 49, 2294, 49, Z]],
      "label": "Terras de Bouro",
      "shortLabel": "TB",
      "labelPosition": [214.7, 40.8],
      "labelAlignment": [CEN, MID]
    },
    "PT.BR.AM": {
      "outlines": [[M, 1796, 609, Q, 1778, 624, 1755, 631, L, 1732, 665, Q, 1725, 676, 1679, 676, 1637, 676, 1637, 672, 1636, 665, 1629, 608, 1622, 608, 1611, 604, 1601, 615, 1593, 627, 1554, 686, 1542, 699, 1522, 720, 1471, 747, 1432, 775, 1439, 828, 1406, 845, 1376, 895, 1344, 948, 1344, 994, 1344, 1011, 1347, 1022, L, 1347, 1022, Q, 1405, 1012, 1458, 1015, 1484, 1016, 1508, 999, 1532, 980, 1564, 980, L, 1683, 980, Q, 1683, 979, 1683, 979, 1690, 952, 1690, 935, 1690, 910, 1725, 884, 1755, 860, 1743, 825, 1859, 796, 1941, 788, 1957, 787, 1971, 787, 1973, 775, 1986, 771, L, 1986, 726, Q, 1962, 735, 1950, 695, 1943, 673, 1937, 634, 1892, 622, 1888, 619, 1855, 600, 1832, 600, Q, 1808, 600, 1796, 609, Z]],
      "label": "Amares",
      "shortLabel": "AM",
      "labelPosition": [166.5, 81.1],
      "labelAlignment": [CEN, MID]
    },
    "PT.BR.BR": {
      "outlines": [[M, 1564, 980, Q, 1532, 980, 1508, 999, 1484, 1016, 1458, 1015, 1405, 1012, 1347, 1022, L, 1347, 1022, Q, 1344, 1023, 1342, 1023, 1307, 1029, 1226, 1045, 1239, 1086, 1200, 1109, 1179, 1121, 1139, 1142, 1151, 1151, 1150, 1167, 1134, 1169, 1131, 1190, L, 1127, 1258, Q, 1130, 1262, 1146, 1281, 1158, 1294, 1158, 1304, 1157, 1335, 1122, 1361, 1090, 1383, 1101, 1448, 1043, 1430, 1044, 1503, 1043, 1518, 1051, 1536, 1058, 1555, 1059, 1577, L, 1078, 1577, Q, 1107, 1582, 1148, 1598, 1186, 1613, 1211, 1615, 1313, 1627, 1348, 1627, 1345, 1639, 1344, 1650, 1434, 1581, 1458, 1551, 1496, 1498, 1488, 1418, 1486, 1360, 1585, 1333, 1654, 1315, 1749, 1315, 1756, 1315, 1762, 1316, 1762, 1291, 1777, 1281, 1792, 1271, 1793, 1259, 1792, 1217, 1728, 1177, 1663, 1138, 1663, 1073, 1663, 1050, 1677, 1004, 1680, 991, 1683, 980, Z]],
      "label": "Braga",
      "shortLabel": "BR",
      "labelPosition": [141.8, 131.5],
      "labelAlignment": [CEN, MID]
    },
    "PT.BR.PL": {
      "outlines": [[M, 2115, 914, Q, 2088, 901, 2028, 904, 1967, 909, 1952, 865, 1944, 841, 1941, 788, 1859, 796, 1743, 825, 1755, 860, 1725, 884, 1690, 910, 1690, 935, 1690, 952, 1683, 979, 1683, 979, 1683, 980, 1680, 991, 1677, 1004, 1663, 1050, 1663, 1073, 1663, 1138, 1728, 1177, 1792, 1217, 1793, 1259, 1792, 1271, 1777, 1281, 1762, 1291, 1762, 1316, 1781, 1319, 1794, 1334, 1812, 1353, 1846, 1353, 1862, 1353, 1876, 1345, 1890, 1338, 1910, 1338, 1941, 1338, 1956, 1342, L, 1956, 1364, Q, 1992, 1335, 1997, 1329, 2015, 1306, 2009, 1277, 2016, 1262, 2041, 1241, 2062, 1224, 2066, 1205, L, 2150, 1205, 2150, 1296, 2215, 1296, 2215, 1311, 2249, 1311, Q, 2259, 1301, 2281, 1275, 2299, 1257, 2315, 1255, 2303, 1229, 2303, 1157, 2303, 1094, 2275, 1083, 2219, 1072, 2196, 1064, 2154, 1049, 2154, 992, Q, 2154, 933, 2115, 914, Z]],
      "label": "Póvoa de Lanhoso",
      "shortLabel": "PL",
      "labelPosition": [198.9, 107.6],
      "labelAlignment": [CEN, MID]
    },
    "PT.BR.VM": {
      "outlines": [[M, 2421, 604, Q, 2383, 602, 2359, 612, 2337, 620, 2315, 641, 2294, 660, 2275, 665, 2222, 694, 2180, 711, 2165, 717, 2162, 735, L, 2158, 764, Q, 2152, 775, 2094, 775, 2021, 767, 2011, 768, 1996, 767, 1986, 771, 1973, 775, 1971, 787, 1957, 787, 1941, 788, 1944, 841, 1952, 865, 1967, 909, 2028, 904, 2088, 901, 2115, 914, 2154, 933, 2154, 992, 2154, 1049, 2196, 1064, 2219, 1072, 2275, 1083, 2303, 1094, 2303, 1157, 2303, 1229, 2315, 1255, 2316, 1254, 2317, 1255, 2319, 1254, 2321, 1254, 2418, 1288, 2420, 1288, 2436, 1288, 2450, 1272, 2465, 1253, 2484, 1250, L, 2561, 1250, Q, 2592, 1250, 2607, 1239, 2607, 1239, 2608, 1238, 2617, 1230, 2618, 1217, 2622, 1166, 2633, 1155, 2639, 1149, 2663, 1098, 2671, 1081, 2694, 1073, 2720, 1064, 2724, 1060, 2734, 1049, 2767, 1013, 2797, 985, 2826, 991, 2815, 857, 2815, 850, 2815, 825, 2838, 771, 2861, 717, 2861, 701, 2861, 670, 2792, 627, 2726, 585, 2686, 585, 2584, 585, 2538, 596, L, 2484, 596, 2484, 608, Q, 2442, 605, 2421, 604, Z]],
      "label": "Vieira do Minho",
      "shortLabel": "VM",
      "labelPosition": [240.1, 93.7],
      "labelAlignment": [CEN, MID]
    },
    "PT.BR.CB": {
      "outlines": [[M, 3188, 1075, Q, 3136, 1075, 3054, 1068, 2944, 1057, 2925, 1041, 2912, 1030, 2868, 1027, 2833, 1025, 2827, 1003, 2826, 997, 2826, 991, 2797, 985, 2767, 1013, 2734, 1049, 2724, 1060, 2720, 1064, 2694, 1073, 2671, 1081, 2663, 1098, 2639, 1149, 2633, 1155, 2622, 1166, 2618, 1217, 2617, 1230, 2608, 1238, 2607, 1239, 2607, 1239, 2610, 1262, 2625, 1322, 2640, 1380, 2640, 1414, L, 2640, 1463, Q, 2639, 1465, 2628, 1472, 2620, 1478, 2621, 1490, L, 2621, 1585, Q, 2629, 1584, 2637, 1583, 2676, 1582, 2739, 1589, L, 2800, 1589, Q, 2795, 1632, 2813, 1656, 2823, 1670, 2857, 1691, 2882, 1707, 2932, 1703, 2957, 1701, 3003, 1696, 3013, 1656, 3013, 1608, 3026, 1572, 3081, 1562, L, 3154, 1513, Q, 3168, 1502, 3186, 1478, 3201, 1458, 3211, 1456, 3258, 1444, 3288, 1419, 3306, 1404, 3347, 1361, 3368, 1341, 3400, 1282, 3420, 1246, 3462, 1239, L, 3462, 1235, Q, 3462, 1231, 3463, 1228, 3473, 1174, 3465, 1155, 3454, 1129, 3439, 1112, 3429, 1101, 3427, 1079, 3423, 1034, 3338, 996, 3325, 996, 3306, 1022, 3288, 1046, 3287, 1056, Q, 3280, 1092, 3188, 1075, Z]],
      "label": "Cabeceiras de Basto",
      "shortLabel": "CB",
      "labelPosition": [303.8, 134.7],
      "labelAlignment": [CEN, MID]
    },
    "PT.BR.CL": {
      "outlines": [[M, 2932, 1703, Q, 2882, 1707, 2857, 1691, 2823, 1670, 2813, 1656, 2795, 1632, 2800, 1589, L, 2739, 1589, Q, 2676, 1582, 2637, 1583, 2629, 1584, 2621, 1585, L, 2621, 1585, Q, 2566, 1593, 2568, 1646, 2568, 1702, 2530, 1714, 2530, 1731, 2515, 1756, 2509, 1760, 2481, 1779, 2453, 1808, 2448, 1868, 2446, 1882, 2446, 1973, 2446, 1994, 2429, 2011, 2419, 2020, 2405, 2034, L, 2387, 2070, Q, 2379, 2088, 2348, 2098, 2347, 2109, 2345, 2132, 2343, 2173, 2397, 2186, 2410, 2188, 2418, 2209, 2427, 2235, 2431, 2239, 2456, 2266, 2450, 2303, L, 2496, 2303, Q, 2505, 2299, 2526, 2281, 2538, 2269, 2554, 2269, 2684, 2349, 2686, 2349, 2688, 2349, 2734, 2297, 2779, 2244, 2808, 2243, 2853, 2239, 2856, 2218, 2860, 2176, 2861, 2174, 2906, 2146, 2910, 2125, 2918, 2074, 2918, 1912, 2927, 1890, 2978, 1854, 3020, 1824, 3021, 1781, 3003, 1774, 2999, 1757, 2997, 1750, 2998, 1716, 3001, 1706, 3003, 1696, Q, 2957, 1701, 2932, 1703, Z]],
      "label": "Celorico de Basto",
      "shortLabel": "CL",
      "labelPosition": [268.2, 196.6],
      "labelAlignment": [CEN, MID]
    },
    "PT.BR.FA": {
      "outlines": [[M, 2561, 1250, L, 2484, 1250, Q, 2465, 1253, 2450, 1272, 2436, 1288, 2420, 1288, 2418, 1288, 2321, 1254, 2319, 1254, 2317, 1255, 2316, 1254, 2315, 1255, 2299, 1257, 2281, 1275, 2259, 1301, 2249, 1311, L, 2215, 1311, 2215, 1296, 2150, 1296, 2150, 1300, Q, 2077, 1313, 2062, 1342, 2055, 1355, 2036, 1384, 2021, 1411, 2021, 1429, 2021, 1434, 2028, 1451, 2036, 1469, 2036, 1486, 2074, 1481, 2082, 1499, 2085, 1506, 2085, 1548, 2085, 1563, 2062, 1639, 2039, 1715, 2040, 1777, 2040, 1788, 2050, 1831, 2059, 1875, 2060, 1908, 2071, 1904, 2112, 1904, 2150, 1904, 2184, 1921, 2224, 1940, 2234, 1973, 2239, 1992, 2277, 2011, 2321, 2032, 2344, 2068, 2351, 2078, 2348, 2097, L, 2348, 2098, Q, 2379, 2088, 2387, 2070, L, 2405, 2034, Q, 2419, 2020, 2429, 2011, 2446, 1994, 2446, 1973, 2446, 1882, 2448, 1868, 2453, 1808, 2481, 1779, 2509, 1760, 2515, 1756, 2530, 1731, 2530, 1714, 2568, 1702, 2568, 1646, 2566, 1593, 2621, 1585, L, 2621, 1585, 2621, 1490, Q, 2620, 1478, 2628, 1472, 2639, 1465, 2640, 1463, L, 2640, 1414, Q, 2640, 1380, 2625, 1322, 2610, 1262, 2607, 1239, Q, 2592, 1250, 2561, 1250, Z]],
      "label": "Fafe",
      "shortLabel": "FA",
      "labelPosition": [233, 166.8],
      "labelAlignment": [CEN, MID]
    },
    "PT.BR.GU": {
      "outlines": [[M, 2066, 1205, Q, 2062, 1224, 2041, 1241, 2016, 1262, 2009, 1277, 2015, 1306, 1997, 1329, 1992, 1335, 1956, 1364, L, 1956, 1342, Q, 1941, 1338, 1910, 1338, 1890, 1338, 1876, 1345, 1862, 1353, 1846, 1353, 1812, 1353, 1794, 1334, 1781, 1319, 1762, 1316, 1756, 1315, 1749, 1315, 1654, 1315, 1585, 1333, 1486, 1360, 1488, 1418, 1496, 1498, 1458, 1551, 1434, 1581, 1344, 1650, 1344, 1652, 1344, 1653, 1341, 1699, 1373, 1722, 1397, 1740, 1458, 1771, 1485, 1792, 1486, 1825, 1487, 1859, 1496, 1866, 1502, 1871, 1524, 1875, 1537, 1878, 1538, 1893, L, 1538, 1948, Q, 1538, 2015, 1530, 2041, 1526, 2045, 1491, 2055, 1471, 2060, 1473, 2091, 1484, 2096, 1488, 2106, 1496, 2129, 1530, 2129, 1545, 2128, 1575, 2113, 1605, 2098, 1633, 2098, 1674, 2098, 1691, 2109, L, 1692, 2109, Q, 1734, 2095, 1751, 2072, 1772, 2028, 1774, 2026, 1850, 1961, 1866, 1961, 1875, 1961, 1878, 1970, 1885, 1986, 1887, 1988, 1905, 2014, 1989, 2015, 2038, 1967, 2047, 1925, 2050, 1911, 2059, 1908, 2059, 1908, 2060, 1908, 2059, 1875, 2050, 1831, 2040, 1788, 2040, 1777, 2039, 1715, 2062, 1639, 2085, 1563, 2085, 1548, 2085, 1506, 2082, 1499, 2074, 1481, 2036, 1486, 2036, 1469, 2028, 1451, 2021, 1434, 2021, 1429, 2021, 1411, 2036, 1384, 2055, 1355, 2062, 1342, 2077, 1313, 2150, 1300, L, 2150, 1205, Z]],
      "label": "Guimarães",
      "shortLabel": "GU",
      "labelPosition": [174.6, 166.7],
      "labelAlignment": [CEN, MID]
    },
    "PT.BR.VF": {
      "outlines": [[M, 1211, 1615, Q, 1186, 1613, 1148, 1598, 1107, 1582, 1078, 1577, L, 1059, 1577, Q, 1059, 1578, 1059, 1579, 1059, 1615, 994, 1625, 929, 1634, 930, 1665, 929, 1684, 941, 1707, 941, 1744, 907, 1840, L, 834, 1840, Q, 825, 1809, 783, 1809, 773, 1809, 727, 1842, 692, 1866, 677, 1883, 671, 1889, 668, 1895, 686, 1909, 700, 1920, 751, 1962, 751, 1996, 751, 2019, 732, 2032, 713, 2046, 713, 2088, 713, 2121, 732, 2176, 749, 2227, 765, 2245, 765, 2245, 766, 2246, 843, 2247, 868, 2227, 900, 2203, 914, 2201, 935, 2198, 983, 2201, 1025, 2203, 1044, 2197, 1051, 2195, 1057, 2173, 1063, 2151, 1074, 2148, 1102, 2119, 1120, 2113, 1150, 2102, 1260, 2102, 1278, 2102, 1304, 2116, 1331, 2128, 1344, 2129, 1353, 2129, 1380, 2106, 1406, 2083, 1428, 2083, 1458, 2083, 1473, 2091, 1471, 2060, 1491, 2055, 1526, 2045, 1530, 2041, 1538, 2015, 1538, 1948, L, 1538, 1893, Q, 1537, 1878, 1524, 1875, 1502, 1871, 1496, 1866, 1487, 1859, 1486, 1825, 1485, 1792, 1458, 1771, 1397, 1740, 1373, 1722, 1341, 1699, 1344, 1653, 1344, 1652, 1344, 1650, 1345, 1639, 1348, 1627, Q, 1313, 1627, 1211, 1615, Z]],
      "label": "Vila Nova de Famalicão",
      "shortLabel": "VF",
      "labelPosition": [110.3, 191.2],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'braga',
  type: 'maps'
};

/***/ })

/******/ });
}));
