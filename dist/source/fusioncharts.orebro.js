
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
/******/ 	return __webpack_require__(__webpack_require__.s = 338);
/******/ })
/************************************************************************/
/******/ ({

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(339);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 339:
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
 * @id fusionmaps.Orebro.20.10-31-2012 09:46:57
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
  "name": "Orebro",
  "revision": 20,
  "standaloneInit": true,
  "baseWidth": 280,
  "baseHeight": 480,
  "baseScaleFactor": 10,
  "entities": {
    "SE.OR.LJ": {
      "outlines": [[M, 1370, 309, Q, 1365, 309, 1358, 317, 1343, 334, 1324, 342, 1290, 357, 1266, 339, 1263, 337, 1250, 331, 1238, 316, 1206, 309, 1201, 291, 1186, 279, 1177, 249, 1177, 214, 1177, 202, 1173, 184, 1160, 179, 1131, 182, 1127, 184, 1110, 191, 1091, 190, 1074, 203, 1070, 204, 1058, 212, 1055, 214, 1039, 222, 1023, 225, 1019, 245, 1005, 248, 999, 273, 992, 279, 991, 289, 987, 316, 1003, 340, 1005, 354, 1007, 369, 1009, 391, 1013, 420, 1017, 432, 1019, 444, 1023, 476, 1009, 510, 1014, 517, 1023, 526, 1028, 532, 1032, 539, L, 1052, 721, 1262, 1190, Q, 1262, 1201, 1264, 1205, 1267, 1212, 1267, 1214, 1267, 1220, 1271, 1220, 1272, 1220, 1275, 1219, 1285, 1216, 1288, 1212, 1291, 1209, 1298, 1208, 1301, 1207, 1304, 1206, 1305, 1206, 1306, 1206, L, 1536, 1155, 1536, 1085, 1608, 1015, 1718, 620, 1737, 576, Q, 1736, 576, 1735, 575, 1733, 573, 1730, 570, 1704, 561, 1685, 544, 1667, 529, 1655, 511, 1640, 506, 1635, 490, 1622, 480, 1614, 453, 1592, 446, 1570, 419, 1555, 418, 1550, 401, 1535, 397, 1531, 379, 1530, 374, 1518, 361, 1503, 338, 1475, 343, 1450, 347, 1425, 332, Q, 1408, 304, 1370, 309, Z]],
      "label": "Ljusnarsberg",
      "shortLabel": "LJ",
      "labelPosition": [136.3, 70],
      "labelAlignment": [CEN, MID]
    },
    "SE.OR.HF": {
      "outlines": [[M, 1032, 539, Q, 1028, 532, 1023, 526, 1014, 517, 1009, 510, 975, 514, 940, 514, 930, 514, 920, 512, 908, 510, 895, 511, 871, 513, 849, 507, 819, 498, 784, 491, 772, 489, 760, 487, 737, 483, 705, 478, 697, 477, 690, 476, 670, 474, 650, 474, 605, 474, 570, 464, 570, 479, 572, 499, 572, 514, 582, 529, 584, 562, 600, 589, 600, 593, 599, 598, 590, 607, 575, 605, 568, 604, 563, 607, 556, 613, 542, 624, 533, 633, 516, 635, 511, 641, 497, 644, 483, 645, 472, 648, 462, 652, 447, 655, 430, 654, 427, 667, 426, 669, 424, 676, 421, 679, 425, 689, 428, 695, 432, 700, 438, 706, 445, 714, 449, 717, 451, 731, 452, 734, 456, 741, 459, 748, 467, 757, 470, 760, 476, 768, 478, 772, 483, 776, 491, 782, 503, 791, 509, 791, 515, 792, 519, 793, 522, 795, 529, 801, 535, 804, 542, 809, 552, 814, 561, 815, 562, 827, 565, 858, 553, 889, 553, 901, 549, 912, 545, 923, 543, 934, 542, 940, 541, 947, 540, 954, 540, 962, 540, 968, 538, 979, 531, 1005, 537, 1029, 537, 1039, 537, 1049, 536, 1062, 541, 1072, 541, 1081, 546, 1092, 547, 1109, 548, 1131, 550, 1135, 551, 1142, 552, 1156, 559, 1170, 561, 1175, 562, 1182, 562, 1188, 563, 1194, 565, 1205, 557, 1208, 543, 1214, 530, 1219, 526, 1221, 523, 1223, 514, 1229, 505, 1232, 496, 1236, 487, 1239, 484, 1241, 480, 1241, 473, 1241, 473, 1247, 472, 1256, 470, 1266, 474, 1269, 475, 1272, 477, 1279, 481, 1285, 490, 1297, 495, 1309, 498, 1315, 501, 1320, 507, 1327, 511, 1336, 514, 1344, 515, 1354, 515, 1357, 519, 1365, 520, 1367, 523, 1373, 527, 1379, 533, 1383, 540, 1389, 546, 1404, 548, 1415, 543, 1429, 542, 1454, 541, 1484, 537, 1493, 536, 1512, 536, 1523, 530, 1534, 527, 1540, 526, 1547, 526, 1550, 526, 1554, 525, 1563, 524, 1572, 522, 1586, 529, 1592, 535, 1598, 539, 1605, 541, 1608, 543, 1611, 545, 1613, 548, 1618, 554, 1625, 553, 1637, 552, 1650, 554, 1669, 556, 1678, 558, 1690, 563, 1691, 565, 1697, 566, 1708, 568, 1720, 569, 1725, 570, 1732, 570, 1735, 573, 1743, 575, 1752, 578, 1759, 582, 1768, 586, 1782, 587, 1806, 588, 1830, 588, 1843, 584, 1854, 581, 1862, 577, 1877, 574, 1883, 573, 1887, 572, 1891, 571, 1895, 569, 1904, 567, 1915, L, 866, 2016, 951, 2091, 951, 1914, 816, 1815, Q, 911, 1790, 966, 1725, L, 1051, 1585, 986, 1415, 1126, 1415, 1211, 1325, 1308, 1361, 1308, 1350, 1271, 1220, Q, 1267, 1220, 1267, 1214, 1267, 1212, 1264, 1205, 1262, 1201, 1262, 1190, L, 1052, 721, Z]],
      "label": "Hällefors",
      "shortLabel": "HF",
      "labelPosition": [86.5, 127.7],
      "labelAlignment": [CEN, MID]
    },
    "SE.OR.NO": {
      "outlines": [[M, 1308, 1460, L, 1308, 1361, 1211, 1325, 1126, 1415, 986, 1415, 1051, 1585, 966, 1725, Q, 911, 1790, 816, 1815, L, 951, 1914, 951, 2091, 946, 2086, 911, 2275, 993, 2428, Q, 993, 2426, 993, 2425, 998, 2414, 1013, 2412, 1019, 2409, 1020, 2407, 1026, 2399, 1033, 2392, 1038, 2388, 1038, 2382, 1038, 2375, 1045, 2375, 1094, 2375, 1143, 2375, 1179, 2375, 1215, 2376, 1217, 2385, 1225, 2383, 1234, 2382, 1243, 2382, 1267, 2382, 1290, 2380, 1295, 2376, 1297, 2374, 1301, 2371, 1306, 2366, 1316, 2365, 1316, 2360, 1321, 2347, 1327, 2341, 1329, 2322, 1340, 2317, 1349, 2309, 1350, 2302, 1352, 2297, 1354, 2293, 1359, 2287, 1360, 2285, 1363, 2276, 1373, 2270, 1380, 2266, 1380, 2260, 1380, 2215, 1381, 2170, 1383, 2154, 1383, 2148, L, 1383, 2147, Q, 1428, 2147, 1473, 2147, 1483, 2147, 1493, 2147, 1492, 2156, 1489, 2161, 1488, 2180, 1489, 2192, 1495, 2210, 1496, 2227, 1510, 2231, 1520, 2227, 1528, 2224, 1533, 2221, 1539, 2219, 1540, 2217, 1543, 2213, 1553, 2214, 1567, 2215, 1580, 2214, 1590, 2209, 1595, 2205, 1600, 2202, 1599, 2192, 1605, 2188, 1605, 2180, 1608, 2175, 1608, 2172, 1608, 2150, 1610, 2127, 1619, 2115, 1619, 2102, 1619, 2099, 1619, 2095, 1622, 2070, 1619, 2047, 1618, 2039, 1619, 2030, 1620, 2017, 1625, 2012, 1629, 2009, 1635, 2006, 1635, 2005, 1636, 2005, L, 1635, 2005, Q, 1635, 1982, 1634, 1960, 1633, 1937, 1634, 1920, 1637, 1901, 1631, 1883, 1631, 1882, 1630, 1880, 1627, 1878, 1625, 1875, 1617, 1868, 1616, 1857, 1614, 1851, 1610, 1840, 1608, 1834, 1600, 1825, 1591, 1822, 1588, 1814, 1586, 1809, 1583, 1807, 1577, 1802, 1570, 1793, 1565, 1789, 1560, 1781, 1559, 1773, 1555, 1770, 1551, 1766, 1553, 1754, 1523, 1752, 1493, 1752, 1487, 1752, 1480, 1753, 1462, 1755, 1443, 1755, 1436, 1755, 1430, 1756, 1415, 1759, 1400, 1759, 1389, 1759, 1373, 1757, 1373, 1753, 1371, 1747, 1370, 1723, 1371, 1695, 1374, 1692, 1375, 1687, 1376, 1675, 1385, 1671, 1387, 1671, 1388, 1664, 1392, 1650, 1391, 1634, 1391, 1626, 1388, 1622, 1381, 1614, 1368, 1611, 1363, 1610, 1355, 1608, 1347, 1607, 1338, 1604, 1337, 1588, 1323, 1590, L, 1323, 1485, Q, 1328, 1482, 1325, 1477, Q, 1316, 1469, 1308, 1460, Z]],
      "label": "Nora",
      "shortLabel": "NO",
      "labelPosition": [122.6, 187.6],
      "labelAlignment": [CEN, MID]
    },
    "SE.OR.LI": {
      "outlines": [[M, 1886, 738, Q, 1883, 722, 1863, 714, 1864, 699, 1850, 696, 1846, 694, 1834, 687, 1814, 673, 1812, 660, 1808, 632, 1780, 620, 1773, 614, 1765, 610, 1746, 602, 1741, 584, 1741, 581, 1737, 576, L, 1718, 620, 1608, 1015, 1536, 1085, 1536, 1155, 1306, 1206, Q, 1305, 1206, 1304, 1206, 1301, 1207, 1298, 1208, 1291, 1209, 1288, 1212, 1285, 1216, 1275, 1219, 1272, 1220, 1271, 1220, L, 1308, 1350, 1308, 1460, Q, 1316, 1469, 1325, 1477, 1328, 1482, 1323, 1485, L, 1323, 1590, Q, 1337, 1588, 1338, 1604, 1347, 1607, 1355, 1608, 1363, 1610, 1368, 1611, 1381, 1614, 1388, 1622, 1391, 1626, 1391, 1634, 1392, 1650, 1388, 1664, 1387, 1671, 1385, 1671, 1376, 1675, 1375, 1687, 1374, 1692, 1371, 1695, 1370, 1723, 1371, 1747, 1373, 1753, 1373, 1757, 1389, 1759, 1400, 1759, 1415, 1759, 1430, 1756, 1436, 1755, 1443, 1755, 1462, 1755, 1480, 1753, 1487, 1752, 1493, 1752, 1523, 1752, 1553, 1754, 1551, 1766, 1555, 1770, 1559, 1773, 1560, 1781, 1565, 1789, 1570, 1793, 1577, 1802, 1583, 1807, 1586, 1809, 1588, 1814, 1591, 1822, 1600, 1825, 1608, 1834, 1610, 1840, 1614, 1851, 1616, 1857, 1617, 1868, 1625, 1875, 1627, 1878, 1630, 1880, 1631, 1882, 1631, 1883, 1637, 1901, 1634, 1920, 1633, 1937, 1634, 1960, 1635, 1982, 1635, 2005, 1639, 2002, 1643, 2000, 1650, 1998, 1658, 1999, 1671, 2000, 1685, 1999, 1724, 1998, 1763, 1996, 1766, 1996, 1768, 1996, 1771, 2004, 1786, 2009, 1793, 2012, 1793, 2015, 1798, 2029, 1795, 2040, 1798, 2048, 1803, 2050, 1813, 2054, 1808, 2072, 1804, 2082, 1804, 2087, 1803, 2101, 1803, 2115, 1803, 2122, 1805, 2129, 1816, 2127, 1816, 2135, 1815, 2161, 1818, 2187, 1819, 2191, 1822, 2195, 1826, 2199, 1835, 2198, 1847, 2197, 1858, 2199, 1865, 2200, 1873, 2200, 1881, 2200, 1888, 2207, 1903, 2210, 1909, 2216, 1919, 2216, 1928, 2217, 1927, 2224, 1942, 2230, 1945, 2231, 1948, 2234, 1961, 2240, 1968, 2241, 1972, 2242, 1975, 2242, 1988, 2242, 2000, 2243, 2005, 2249, 2013, 2249, 2028, 2251, 2040, 2252, 2044, 2252, 2048, 2253, 2100, 2255, 2148, 2255, 2153, 2255, 2156, 2256, 2177, 2259, 2190, 2262, 2194, 2262, 2197, 2264, 2212, 2271, 2223, 2270, 2249, 2270, 2273, 2270, 2277, 2270, 2281, 2270, 2368, 2270, 2455, 2265, 2466, 2255, 2466, 2250, 2466, 2185, 2461, 2120, 2445, 2092, 2439, 2070, 2435, 2061, 2430, 2050, 2421, 2041, 2423, 2024, 2423, 2004, 2436, 1991, 2458, 1989, 2456, 1964, 2413, 1964, 2371, 1964, 2356, 1964, 2341, 1966, 2315, 1970, 2320, 1944, 2324, 1925, 2322, 1910, 2321, 1890, 2321, 1869, 2321, 1817, 2318, 1754, 2316, 1729, 2318, 1704, 2319, 1684, 2306, 1667, 2253, 1664, 2201, 1669, 2183, 1662, 2177, 1653, 2167, 1642, 2168, 1624, 2161, 1599, 2142, 1595, 2133, 1574, 2133, 1564, 2133, 1549, 2138, 1542, 2143, 1532, 2146, 1529, 2156, 1521, 2164, 1506, 2165, 1503, 2166, 1500, 2175, 1485, 2183, 1477, 2183, 1447, 2187, 1433, 2187, 1415, 2189, 1404, 2191, 1394, 2191, 1384, 2192, 1371, 2179, 1365, 2179, 1361, 2178, 1356, 2173, 1349, 2176, 1340, 2179, 1324, 2168, 1310, 2168, 1290, 2159, 1276, 2155, 1268, 2153, 1255, 2152, 1243, 2149, 1230, 2143, 1204, 2131, 1184, 2125, 1174, 2114, 1166, 2099, 1155, 2072, 1147, 2063, 1142, 2054, 1136, 2051, 1134, 2035, 1131, 2028, 1129, 2014, 1116, 2005, 1102, 2005, 1079, 2006, 1032, 2003, 979, 2004, 963, 1993, 954, 1992, 941, 1983, 924, 1982, 907, 1970, 891, 1957, 885, 1957, 864, 1957, 850, 1942, 833, 1925, 819, 1914, 800, 1910, 793, 1909, 779, 1908, 769, 1905, 754, Q, 1895, 752, 1886, 738, Z]],
      "label": "Lindesberg",
      "shortLabel": "LI",
      "labelPosition": [186.8, 142.3],
      "labelAlignment": [CEN, MID]
    },
    "SE.OR.OR": {
      "outlines": [[M, 1763, 1996, Q, 1724, 1998, 1685, 1999, 1671, 2000, 1658, 1999, 1650, 1998, 1643, 2000, 1639, 2003, 1635, 2005, 1635, 2005, 1635, 2005, 1629, 2009, 1625, 2012, 1620, 2017, 1619, 2030, 1618, 2039, 1619, 2047, 1622, 2070, 1619, 2095, 1619, 2099, 1619, 2102, 1619, 2115, 1610, 2127, 1608, 2150, 1608, 2172, 1608, 2175, 1605, 2180, 1605, 2188, 1599, 2192, 1600, 2202, 1595, 2205, 1590, 2209, 1580, 2214, 1567, 2215, 1553, 2214, 1543, 2213, 1540, 2217, 1539, 2219, 1533, 2221, 1528, 2224, 1520, 2227, 1510, 2231, 1496, 2227, 1495, 2210, 1489, 2192, 1488, 2180, 1489, 2161, 1492, 2156, 1493, 2147, 1483, 2147, 1473, 2147, 1428, 2147, 1383, 2147, L, 1383, 2147, Q, 1383, 2154, 1381, 2170, 1380, 2215, 1380, 2260, 1380, 2266, 1373, 2270, 1363, 2276, 1360, 2285, 1359, 2287, 1354, 2293, 1352, 2297, 1350, 2302, 1349, 2309, 1340, 2317, 1329, 2322, 1327, 2341, 1321, 2347, 1316, 2360, 1316, 2365, 1306, 2366, 1301, 2371, 1297, 2374, 1295, 2376, 1290, 2380, 1267, 2382, 1243, 2382, 1234, 2382, 1225, 2383, 1217, 2385, 1215, 2376, 1179, 2375, 1143, 2375, 1094, 2375, 1045, 2375, 1038, 2375, 1038, 2382, 1038, 2388, 1033, 2392, 1026, 2399, 1020, 2407, 1019, 2409, 1013, 2412, 998, 2414, 993, 2425, 993, 2426, 993, 2428, 994, 2434, 999, 2440, 1004, 2444, 1010, 2448, 1013, 2450, 1013, 2457, 1013, 2467, 1014, 2475, 1022, 2479, 1022, 2480, 1027, 2490, 1030, 2493, 1033, 2495, 1035, 2502, 1040, 2511, 1045, 2513, 1049, 2514, 1049, 2522, 1052, 2536, 1059, 2539, 1063, 2544, 1065, 2544, 1069, 2552, 1069, 2555, 1070, 2558, 1071, 2560, 1076, 2568, 1088, 2568, 1092, 2576, 1098, 2576, 1113, 2581, 1122, 2586, 1141, 2597, 1147, 2605, 1149, 2609, 1151, 2611, 1159, 2614, 1163, 2614, 1170, 2614, 1172, 2619, 1180, 2621, 1185, 2623, 1204, 2635, 1209, 2653, 1212, 2659, 1213, 2660, 1217, 2664, 1217, 2672, 1217, 2676, 1218, 2680, 1223, 2680, 1223, 2687, 1234, 2701, 1240, 2707, 1242, 2709, 1244, 2714, 1250, 2720, 1253, 2727, 1257, 2735, 1268, 2746, 1273, 2750, 1276, 2758, 1279, 2759, 1279, 2765, 1278, 2772, 1279, 2785, 1280, 2794, 1286, 2807, 1292, 2814, 1295, 2827, 1296, 2832, 1299, 2840, 1302, 2850, 1303, 2860, 1296, 2892, 1297, 2922, 1298, 2950, 1297, 2977, 1306, 2980, 1310, 2979, 1320, 2977, 1323, 2965, 1325, 2955, 1335, 2954, 1355, 2942, 1374, 2928, 1380, 2925, 1383, 2923, 1396, 2916, 1410, 2916, 1417, 2917, 1419, 2920, 1422, 2924, 1423, 2927, 1426, 2939, 1435, 2945, 1444, 2950, 1445, 2959, 1452, 2967, 1455, 2970, 1460, 2975, 1462, 2976, 1467, 2979, 1471, 2983, 1478, 2988, 1481, 2994, 1488, 3005, 1503, 3003, 1515, 3002, 1528, 3002, 1542, 3002, 1555, 3000, 1565, 2991, 1571, 2988, 1582, 2986, 1586, 2983, 1589, 2981, 1593, 2981, 1609, 2980, 1625, 2981, 1633, 2982, 1638, 2982, 1643, 2982, 1646, 2984, 1650, 2986, 1652, 2990, 1651, 3004, 1658, 3003, 1669, 3002, 1680, 3002, 1718, 3002, 1755, 3003, 1759, 3003, 1761, 3000, 1756, 2984, 1770, 2986, 1773, 2986, 1776, 2983, L, 1813, 2961, 1921, 3018, 1969, 3333, 2055, 3402, 2033, 3623, 2188, 3711, 2190, 3709, Q, 2193, 3695, 2203, 3685, 2209, 3679, 2218, 3673, 2222, 3671, 2225, 3669, 2230, 3666, 2235, 3662, 2237, 3660, 2244, 3654, 2249, 3649, 2256, 3645, 2269, 3637, 2280, 3624, 2283, 3621, 2286, 3618, 2298, 3607, 2312, 3590, 2315, 3580, 2329, 3574, 2340, 3557, 2338, 3532, 2337, 3515, 2326, 3502, 2317, 3488, 2311, 3477, 2306, 3469, 2302, 3461, 2301, 3431, 2315, 3417, 2327, 3407, 2327, 3395, 2327, 3384, 2332, 3381, 2335, 3373, 2337, 3371, 2338, 3357, 2342, 3352, 2346, 3341, 2347, 3337, 2348, 3328, 2355, 3324, 2358, 3322, 2359, 3315, 2367, 3303, 2366, 3290, 2364, 3280, 2367, 3274, 2369, 3267, 2371, 3265, 2379, 3259, 2379, 3252, 2378, 3242, 2388, 3238, 2392, 3236, 2395, 3234, 2400, 3227, 2402, 3224, 2406, 3215, 2413, 3214, 2437, 3211, 2463, 3212, 2468, 3213, 2471, 3209, 2481, 3207, 2486, 3204, 2511, 3198, 2533, 3200, 2547, 3201, 2558, 3193, 2560, 3192, 2563, 3192, 2565, 3172, 2565, 3152, 2565, 3125, 2563, 3095, 2518, 3092, 2470, 3092, 2469, 3083, 2466, 3085, L, 2391, 3085, 2303, 2968, 2376, 2873, 2241, 2713, 2036, 2788, 2033, 2785, 1863, 2710, 1819, 2678, Q, 1818, 2675, 1818, 2672, 1818, 2671, 1818, 2670, 1817, 2647, 1818, 2625, 1866, 2625, 1915, 2625, 1964, 2625, 2013, 2625, 2033, 2625, 2053, 2624, L, 2053, 2623, Q, 2056, 2621, 2058, 2619, 2061, 2615, 2065, 2612, 2070, 2607, 2073, 2607, 2085, 2608, 2096, 2601, 2111, 2599, 2124, 2594, 2128, 2592, 2133, 2593, 2146, 2594, 2158, 2589, 2167, 2585, 2178, 2583, 2184, 2580, 2186, 2578, 2199, 2574, 2203, 2571, 2211, 2569, 2214, 2566, 2238, 2565, 2258, 2566, 2262, 2577, 2270, 2576, 2283, 2575, 2295, 2575, 2311, 2575, 2327, 2572, 2330, 2571, 2336, 2565, 2348, 2533, 2353, 2499, 2356, 2485, 2358, 2470, 2361, 2446, 2348, 2432, 2341, 2420, 2336, 2415, 2326, 2404, 2318, 2386, 2308, 2375, 2306, 2370, 2295, 2351, 2292, 2335, 2290, 2321, 2282, 2314, 2274, 2307, 2273, 2292, 2273, 2277, 2281, 2270, 2249, 2270, 2223, 2270, 2212, 2271, 2197, 2264, 2194, 2262, 2190, 2262, 2177, 2259, 2156, 2256, 2153, 2255, 2148, 2255, 2100, 2255, 2048, 2253, 2044, 2252, 2040, 2252, 2028, 2251, 2013, 2249, 2005, 2249, 2000, 2243, 1988, 2242, 1975, 2242, 1972, 2242, 1968, 2241, 1961, 2240, 1948, 2234, 1945, 2231, 1942, 2230, 1927, 2224, 1928, 2217, 1919, 2216, 1909, 2216, 1903, 2210, 1888, 2207, 1881, 2200, 1873, 2200, 1865, 2200, 1858, 2199, 1847, 2197, 1835, 2198, 1826, 2199, 1822, 2195, 1819, 2191, 1818, 2187, 1815, 2161, 1816, 2135, 1816, 2127, 1805, 2129, 1803, 2122, 1803, 2115, 1803, 2101, 1804, 2087, 1804, 2082, 1808, 2072, 1813, 2054, 1803, 2050, 1798, 2048, 1795, 2040, 1798, 2029, 1793, 2015, 1793, 2012, 1786, 2009, 1771, 2004, 1768, 1996, Q, 1766, 1996, 1763, 1996, Z]],
      "label": "Örebro",
      "shortLabel": "OR",
      "labelPosition": [161.9, 265.4],
      "labelAlignment": [CEN, MID]
    },
    "SE.OR.KA": {
      "outlines": [[M, 866, 2016, L, 567, 1915, 567, 1915, Q, 559, 1908, 547, 1909, 528, 1910, 510, 1909, 503, 1908, 501, 1917, 498, 1922, 492, 1930, 491, 1931, 489, 1936, 487, 1939, 484, 1944, 481, 1952, 479, 1957, 475, 1967, 480, 1985, 487, 1997, 495, 2010, L, 570, 2185, 424, 2361, 348, 2543, 340, 2588, 519, 2587, Q, 519, 2624, 553, 2660, L, 680, 2643, 680, 2635, 710, 2635, 710, 2658, 754, 2731, 775, 2777, 790, 2770, 1003, 2745, 1072, 2561, Q, 1070, 2558, 1069, 2555, 1069, 2552, 1065, 2544, 1063, 2544, 1059, 2539, 1052, 2536, 1049, 2522, 1049, 2514, 1045, 2513, 1040, 2511, 1035, 2502, 1033, 2495, 1030, 2493, 1027, 2490, 1022, 2480, 1022, 2479, 1014, 2475, 1013, 2467, 1013, 2457, 1013, 2450, 1010, 2448, 1004, 2444, 1000, 2440, 994, 2434, 993, 2428, L, 911, 2275, 946, 2086, Z]],
      "label": "Karlskoga",
      "shortLabel": "KA",
      "labelPosition": [70.6, 234.3],
      "labelAlignment": [CEN, MID]
    },
    "SE.OR.DE": {
      "outlines": [[M, 754, 2731, L, 710, 2658, 710, 2635, 680, 2635, 680, 2643, 553, 2660, Q, 519, 2624, 519, 2587, L, 340, 2588, 339, 2589, 298, 2810, 300, 2970, 282, 3043, 348, 3223, 253, 3483, Q, 251, 3494, 251, 3507, 252, 3515, 252, 3523, L, 540, 3436, 540, 3268, 733, 3207, 743, 3163, 740, 3108, 737, 3103, Q, 727, 3097, 724, 3090, 717, 3075, 714, 3062, 713, 3056, 709, 3053, 702, 3046, 701, 3044, 699, 3014, 701, 2990, 702, 2977, 702, 2965, 702, 2940, 701, 2915, 692, 2894, 687, 2880, 685, 2875, 682, 2870, 678, 2863, 678, 2855, 675, 2841, 673, 2832, 671, 2824, 677, 2818, L, 775, 2777, Z]],
      "label": "Degerfors",
      "shortLabel": "DE",
      "labelPosition": [51.3, 305.5],
      "labelAlignment": [CEN, MID]
    },
    "SE.OR.LA": {
      "outlines": [[M, 910, 3445, L, 975, 3131, 540, 3268, 540, 3436, 252, 3523, Q, 252, 3538, 251, 3552, 250, 3585, 258, 3619, 262, 3630, 263, 3642, 265, 3665, 270, 3685, 271, 3689, 271, 3692, 270, 3707, 280, 3711, 280, 3748, 281, 3786, 281, 3796, 286, 3804, 291, 3811, 297, 3820, 331, 3848, 359, 3884, 360, 3885, 363, 3891, 371, 3903, 377, 3911, 381, 3917, 381, 3932, 376, 3944, 363, 3958, 362, 3964, 357, 3966, 346, 3970, 334, 3985, 328, 3988, 326, 4002, 329, 4008, 333, 4012, 335, 4014, 338, 4019, 342, 4023, 344, 4028, 348, 4038, 363, 4043, 384, 4061, 405, 4079, 414, 4087, 423, 4092, 433, 4099, 435, 4110, 436, 4116, 440, 4120, 447, 4129, 460, 4128, 480, 4126, 500, 4126, 507, 4125, 514, 4128, 521, 4137, 524, 4141, 527, 4145, 529, 4150, 534, 4161, 538, 4171, 538, 4180, 535, 4188, 533, 4193, 536, 4196, 537, 4249, 537, 4298, 537, 4304, 538, 4311, 535, 4325, 537, 4342, 552, 4341, 560, 4344, 601, 4345, 635, 4346, 642, 4348, 645, 4345, 645, 4373, 646, 4400, 651, 4414, 660, 4420, 671, 4415, 685, 4417, 695, 4418, 703, 4414, 718, 4413, 728, 4412, 738, 4411, 739, 4398, 741, 4385, 744, 4375, 747, 4365, 748, 4363, 752, 4353, 757, 4345, 765, 4335, 767, 4330, 770, 4323, 774, 4318, 778, 4313, 779, 4312, 788, 4306, 791, 4303, 799, 4293, 806, 4289, 826, 4288, 840, 4289, 848, 4290, 855, 4290, 866, 4290, 871, 4297, 873, 4300, 874, 4304, L, 858, 4186, 858, 4141, 799, 4063, 815, 3813, 830, 3813, 995, 3668, 915, 3588, 855, 3553, 855, 3468, Z]],
      "label": "Laxå",
      "shortLabel": "LA",
      "labelPosition": [62.3, 377.5],
      "labelAlignment": [CEN, MID]
    },
    "SE.OR.AS": {
      "outlines": [[M, 1493, 3443, L, 1281, 3506, 1188, 3471, 1102, 3550, 915, 3588, 995, 3668, 830, 3813, 815, 3813, 799, 4063, 858, 4141, 858, 4186, 874, 4304, Q, 874, 4304, 874, 4305, 881, 4311, 882, 4315, 883, 4319, 885, 4323, 898, 4344, 912, 4364, 914, 4368, 918, 4371, 923, 4375, 926, 4383, 930, 4395, 934, 4406, 940, 4419, 950, 4412, 962, 4403, 970, 4400, 982, 4396, 988, 4390, 993, 4385, 996, 4383, 1000, 4378, 1002, 4377, 1008, 4373, 1011, 4372, 1014, 4370, 1018, 4370, 1025, 4368, 1032, 4364, 1039, 4360, 1042, 4359, 1050, 4352, 1055, 4351, 1060, 4348, 1063, 4347, 1078, 4344, 1082, 4336, 1093, 4329, 1091, 4315, 1090, 4309, 1091, 4303, 1092, 4290, 1100, 4290, 1102, 4288, 1102, 4283, 1103, 4279, 1105, 4275, 1112, 4266, 1112, 4255, 1113, 4242, 1114, 4228, 1118, 4222, 1120, 4220, 1124, 4216, 1126, 4210, 1128, 4204, 1133, 4198, 1136, 4193, 1136, 4188, 1154, 4164, 1163, 4145, 1167, 4138, 1167, 4125, 1167, 4118, 1175, 4120, 1196, 4124, 1196, 4105, 1197, 4099, 1203, 4099, 1217, 4092, 1225, 4085, 1232, 4079, 1236, 4076, 1239, 4072, 1244, 4076, 1246, 4074, 1247, 4072, 1253, 4063, 1263, 4058, 1260, 4074, 1271, 4088, 1273, 4108, 1273, 4128, 1273, 4171, 1273, 4215, 1275, 4211, 1279, 4208, 1281, 4199, 1288, 4197, 1299, 4194, 1313, 4193, 1320, 4192, 1322, 4196, 1327, 4203, 1326, 4213, 1325, 4238, 1326, 4265, 1326, 4274, 1335, 4278, 1335, 4280, 1332, 4286, 1330, 4292, 1330, 4298, 1328, 4324, 1312, 4347, 1302, 4355, 1294, 4371, 1290, 4374, 1284, 4386, 1282, 4392, 1279, 4397, 1274, 4410, 1275, 4430, 1283, 4416, 1297, 4411, 1305, 4408, 1313, 4404, 1324, 4400, 1335, 4398, 1352, 4396, 1367, 4391, 1381, 4383, 1388, 4378, 1397, 4372, 1403, 4363, 1407, 4359, 1409, 4355, 1411, 4348, 1412, 4345, 1412, 4338, 1414, 4335, 1413, 4308, 1421, 4290, 1425, 4281, 1432, 4267, 1436, 4258, 1440, 4250, 1449, 4241, 1450, 4235, 1452, 4227, 1457, 4217, 1461, 4209, 1468, 4203, 1474, 4199, 1477, 4193, 1487, 4173, 1497, 4160, 1506, 4140, 1517, 4129, 1520, 4125, 1523, 4120, 1529, 4108, 1538, 4098, 1540, 4095, 1541, 4090, 1542, 4077, 1544, 4065, 1545, 4060, 1551, 4056, 1565, 4053, 1572, 4044, 1588, 4034, 1600, 4030, 1613, 4024, 1628, 4025, 1644, 4025, 1660, 4024, 1679, 4021, 1673, 4008, 1681, 3995, 1687, 3986, 1689, 3983, 1692, 3980, 1700, 3972, 1704, 3963, 1719, 3955, 1724, 3946, 1732, 3939, 1735, 3937, 1743, 3932, 1747, 3926, 1755, 3928, 1760, 3930, 1765, 3933, 1770, 3936, 1795, 3950, 1814, 3964, 1820, 3968, 1823, 3968, 1832, 3968, 1840, 3973, 1847, 3976, 1855, 3976, 1872, 3982, 1884, 3989, 1886, 3989, 1888, 3989, L, 1888, 3986, 1849, 3787, Z]],
      "label": "Askersund",
      "shortLabel": "AS",
      "labelPosition": [130.3, 383.6],
      "labelAlignment": [CEN, MID]
    },
    "SE.OR.LE": {
      "outlines": [[M, 1122, 2586, Q, 1113, 2581, 1098, 2576, 1092, 2576, 1088, 2568, 1076, 2568, 1072, 2561, L, 1003, 2745, 790, 2770, 677, 2818, Q, 671, 2824, 673, 2832, 675, 2841, 678, 2855, 678, 2863, 682, 2870, 685, 2875, 687, 2880, 692, 2894, 701, 2915, 702, 2940, 702, 2965, 702, 2977, 701, 2990, 699, 3014, 701, 3044, 702, 3046, 709, 3053, 713, 3056, 714, 3062, 717, 3075, 724, 3090, 727, 3097, 737, 3103, L, 740, 3108, 743, 3163, 733, 3207, 975, 3131, 910, 3445, 1003, 3406, Q, 1084, 3342, 1165, 3251, L, 1283, 3254, 1448, 3121, 1471, 2983, Q, 1467, 2979, 1462, 2976, 1460, 2975, 1455, 2970, 1452, 2967, 1445, 2959, 1444, 2950, 1435, 2945, 1426, 2939, 1423, 2927, 1422, 2924, 1419, 2920, 1417, 2917, 1410, 2916, 1396, 2916, 1383, 2923, 1380, 2925, 1374, 2928, 1355, 2942, 1335, 2954, 1325, 2955, 1323, 2965, 1320, 2977, 1310, 2979, 1306, 2980, 1297, 2977, 1298, 2950, 1297, 2922, 1296, 2892, 1304, 2860, 1302, 2850, 1299, 2840, 1296, 2832, 1295, 2827, 1292, 2814, 1286, 2807, 1280, 2794, 1279, 2785, 1278, 2772, 1279, 2765, 1279, 2759, 1276, 2758, 1273, 2750, 1268, 2746, 1257, 2735, 1253, 2727, 1250, 2720, 1244, 2714, 1242, 2709, 1240, 2707, 1234, 2701, 1223, 2687, 1219, 2684, 1218, 2680, 1217, 2676, 1217, 2672, 1217, 2664, 1213, 2660, 1212, 2659, 1209, 2653, 1204, 2635, 1185, 2623, 1180, 2621, 1172, 2619, 1170, 2614, 1163, 2614, 1159, 2614, 1151, 2611, 1149, 2609, 1147, 2605, Q, 1141, 2597, 1122, 2586, Z]],
      "label": "Lekeberg",
      "shortLabel": "LE",
      "labelPosition": [107.2, 300.3],
      "labelAlignment": [CEN, MID]
    },
    "SE.OR.KU": {
      "outlines": [[M, 1761, 3001, Q, 1759, 3003, 1755, 3003, 1718, 3002, 1680, 3002, 1669, 3002, 1658, 3003, 1651, 3004, 1652, 2990, 1650, 2986, 1646, 2984, 1643, 2982, 1638, 2982, 1633, 2982, 1625, 2981, 1609, 2980, 1593, 2981, 1589, 2981, 1586, 2983, 1582, 2986, 1571, 2988, 1565, 2991, 1555, 3000, 1542, 3002, 1528, 3002, 1515, 3002, 1503, 3003, 1488, 3005, 1481, 2994, 1478, 2988, 1471, 2983, L, 1448, 3121, 1280, 3256, 1261, 3326, 1486, 3313, 1486, 3273, 1741, 3226, 1808, 3116, 1878, 3063, 1922, 3023, 1921, 3018, 1813, 2961, 1776, 2983, Q, 1773, 2986, 1770, 2986, Q, 1756, 2984, 1761, 3001, Z]],
      "label": "Kumla",
      "shortLabel": "KU",
      "labelPosition": [159.1, 314.3],
      "labelAlignment": [CEN, MID]
    },
    "SE.OR.HB": {
      "outlines": [[M, 1969, 3334, L, 1922, 3023, 1878, 3063, 1808, 3116, 1741, 3226, 1486, 3273, 1486, 3313, 1261, 3326, 1280, 3256, 1280, 3254, 1165, 3251, Q, 1084, 3342, 1003, 3406, L, 855, 3468, 855, 3553, 915, 3588, 1102, 3550, 1188, 3471, 1281, 3506, 1493, 3443, 1849, 3787, 1888, 3986, 1888, 3989, 1889, 3989, Q, 1903, 3990, 1912, 3988, 1918, 3983, 1919, 3981, 1923, 3971, 1930, 3972, 1942, 3973, 1953, 3971, 1958, 3970, 1963, 3970, 1969, 3970, 1974, 3973, 1978, 3974, 1980, 3978, 1990, 3994, 1998, 4003, 2006, 4011, 2005, 4023, 2014, 4014, 2023, 4008, 2032, 4003, 2032, 3993, 2037, 3988, 2036, 3980, 2035, 3970, 2034, 3960, 2032, 3938, 2039, 3920, 2044, 3902, 2058, 3908, 2106, 3908, 2155, 3908, 2169, 3908, 2183, 3908, 2190, 3907, 2196, 3901, 2199, 3899, 2202, 3897, 2208, 3893, 2215, 3893, 2221, 3892, 2221, 3885, 2221, 3874, 2225, 3867, 2230, 3860, 2234, 3851, 2239, 3839, 2244, 3830, 2246, 3810, 2239, 3802, 2238, 3789, 2231, 3782, 2224, 3775, 2218, 3768, 2212, 3762, 2206, 3755, 2200, 3750, 2199, 3743, 2198, 3738, 2196, 3735, 2196, 3720, 2188, 3716, 2188, 3714, 2189, 3712, L, 2033, 3623, 2056, 3403, Z]],
      "label": "Hallsberg",
      "shortLabel": "HB",
      "labelPosition": [179, 350.3],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'orebro',
  type: 'maps'
};

/***/ })

/******/ });
}));
