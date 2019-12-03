
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
/******/ 	return __webpack_require__(__webpack_require__.s = 342);
/******/ })
/************************************************************************/
/******/ ({

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(343);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 343:
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
 * @id fusionmaps.Belize.20.10-30-2012 06:07:26
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
  "name": "Belize",
  "revision": 20,
  "standaloneInit": true,
  "baseWidth": 150,
  "baseHeight": 250,
  "baseScaleFactor": 10,
  "entities": {
    "06": {
      "outlines": [[M, 489, 1723, Q, 487, 1723, 484, 1724, 481, 1725, 477, 1725, 464, 1726, 454, 1725, 454, 1726, 454, 1727, 453, 1730, 450, 1730, 445, 1730, 439, 1730, 437, 1731, 437, 1733, 437, 1738, 437, 1742, 437, 1744, 436, 1746, 435, 1750, 431, 1753, 430, 1757, 428, 1757, 423, 1759, 414, 1759, 412, 1760, 409, 1760, 413, 1761, 413, 1763, 412, 1766, 417, 1769, 418, 1770, 419, 1771, 421, 1772, 423, 1773, 424, 1774, 425, 1777, 426, 1782, 423, 1785, 420, 1787, 418, 1789, 416, 1790, 414, 1792, 412, 1794, 410, 1795, 409, 1797, 406, 1800, 404, 1802, 400, 1807, 399, 1809, 399, 1811, 398, 1813, 395, 1815, 394, 1815, 392, 1817, 384, 1821, 375, 1826, 374, 1827, 371, 1828, 370, 1828, 369, 1830, 368, 1832, 365, 1834, 362, 1834, 360, 1837, 357, 1837, 354, 1840, 351, 1840, 349, 1844, 347, 1845, 348, 1850, 349, 1853, 343, 1851, 336, 1851, 327, 1850, 325, 1849, 320, 1850, 315, 1850, 311, 1853, 311, 1856, 308, 1860, 305, 1863, 301, 1867, 301, 1870, 299, 1870, 298, 1870, 296, 1872, 295, 1874, 294, 1876, 294, 1880, 295, 1883, 295, 1890, 287, 1891, 286, 1893, 283, 1893, 281, 1893, 279, 1894, 277, 1895, 273, 1895, 267, 1896, 262, 1895, 258, 1895, 261, 1902, 262, 1903, 262, 1907, 259, 1910, 256, 1911, 256, 1909, 254, 1908, 251, 1906, 249, 1902, 248, 1899, 245, 1896, 242, 1891, 239, 1887, 238, 1885, 235, 1886, 234, 1889, 232, 1890, 230, 1892, 230, 1892, 226, 1897, 222, 1899, 220, 1900, 216, 1903, 213, 1905, 211, 1912, 208, 1919, 199, 1924, 182, 1925, 164, 1925, 159, 1925, 154, 1924, 150, 1924, 147, 1926, 145, 1927, 144, 1928, 141, 1931, 135, 1933, 131, 1935, 129, 1938, 127, 1942, 119, 1943, 118, 1943, 116, 1945, 115, 1947, 113, 1951, 112, 1957, 108, 1961, 105, 1963, 102, 1965, 99, 1966, 97, 1966, 94, 1967, 92, 1971, 91, 1976, 87, 1978, 83, 1980, 82, 1982, 82, 1988, 82, 1995, 82, 1996, 80, 2002, 77, 2012, 74, 2027, 73, 2076, 72, 2125, 72, 2133, 71, 2142, 70, 2149, 69, 2160, 68, 2190, 68, 2220, 68, 2226, 67, 2232, 64, 2244, 64, 2262, 59, 2273, 59, 2287, 60, 2301, 59, 2317, 58, 2335, 59, 2352, 59, 2366, 54, 2380, 54, 2389, 49, 2395, 48, 2409, 48, 2422, 48, 2435, 47, 2447, 45, 2463, 53, 2465, 68, 2465, 82, 2462, 88, 2459, 90, 2457, 94, 2455, 95, 2450, 113, 2447, 119, 2454, 122, 2458, 130, 2457, 142, 2456, 147, 2449, 151, 2444, 155, 2443, 161, 2442, 168, 2443, 183, 2446, 195, 2447, 205, 2447, 215, 2446, 226, 2443, 226, 2447, 227, 2452, 230, 2455, 238, 2462, 250, 2461, 265, 2460, 280, 2462, 286, 2469, 290, 2471, 297, 2474, 310, 2473, 317, 2473, 320, 2470, 332, 2468, 335, 2457, 335, 2454, 334, 2451, 332, 2441, 330, 2432, 328, 2424, 324, 2421, 320, 2409, 318, 2402, 314, 2381, 330, 2371, 334, 2369, 338, 2365, 344, 2361, 353, 2361, 367, 2363, 374, 2353, 385, 2344, 389, 2332, 390, 2317, 391, 2305, 403, 2297, 415, 2297, 428, 2297, 440, 2295, 443, 2279, 444, 2267, 449, 2248, 468, 2248, 475, 2246, 480, 2244, 484, 2241, 488, 2235, 490, 2230, 492, 2228, 499, 2215, 498, 2205, 498, 2199, 497, 2192, 485, 2181, 482, 2165, 480, 2150, 495, 2151, 508, 2152, 520, 2152, 529, 2152, 538, 2152, 551, 2151, 559, 2146, 567, 2144, 566, 2137, 563, 2125, 568, 2115, 573, 2107, 575, 2107, 586, 2107, 597, 2110, 604, 2116, 606, 2119, 610, 2124, 614, 2128, 620, 2135, 626, 2136, 638, 2139, 638, 2135, 639, 2127, 645, 2122, 656, 2115, 662, 2109, 661, 2091, 668, 2086, 672, 2084, 675, 2081, 685, 2073, 691, 2062, 693, 2059, 698, 2057, 704, 2054, 705, 2052, 710, 2048, 717, 2047, 720, 2044, 722, 2041, 725, 2028, 727, 2024, 729, 2015, 725, 2013, 717, 2007, 722, 1997, 724, 1992, 730, 1989, 743, 1975, 755, 1965, 762, 1961, 766, 1958, 778, 1957, 781, 1948, 784, 1940, 782, 1932, 781, 1925, 787, 1923, 797, 1912, 802, 1900, 808, 1892, 809, 1885, 809, 1883, 809, 1882, 806, 1883, 804, 1883, 801, 1884, 798, 1885, 796, 1885, 794, 1886, 791, 1888, 788, 1888, 773, 1888, 758, 1888, 739, 1888, 720, 1888, 701, 1888, 681, 1888, 669, 1883, 654, 1883, 653, 1881, 653, 1877, 656, 1875, 659, 1875, 661, 1875, 663, 1874, 665, 1873, 665, 1871, 665, 1862, 665, 1851, 664, 1849, 664, 1847, 663, 1841, 662, 1833, 661, 1831, 662, 1827, 662, 1826, 660, 1823, 658, 1822, 657, 1820, 656, 1819, 655, 1816, 653, 1811, 648, 1810, 641, 1808, 639, 1800, 639, 1799, 637, 1795, 634, 1793, 630, 1793, 626, 1792, 627, 1785, 626, 1781, 628, 1778, 629, 1778, 630, 1776, 633, 1776, 635, 1773, 637, 1771, 638, 1766, 639, 1763, 637, 1762, 634, 1762, 632, 1760, 631, 1758, 630, 1756, 628, 1751, 624, 1748, 624, 1748, 620, 1746, 618, 1746, 617, 1745, 616, 1744, 614, 1741, 614, 1740, 612, 1738, 612, 1737, 609, 1736, 606, 1736, 603, 1735, 602, 1734, 599, 1731, 597, 1730, 595, 1728, 593, 1726, 588, 1725, 575, 1725, 563, 1725, 560, 1725, 557, 1724, 555, 1724, 553, 1724, 540, 1723, 527, 1723, Q, 508, 1723, 489, 1723, Z]],
      "label": "Toledo",
      "shortLabel": "TO",
      "labelPosition": [28.3, 209.8],
      "labelAlignment": [CEN, MID]
    },
    "05": {
      "outlines": [[M, 789, 1338, Q, 774, 1337, 759, 1337, 755, 1337, 750, 1337, 747, 1337, 744, 1336, 728, 1336, 712, 1336, 693, 1336, 677, 1336, 657, 1336, 638, 1334, 633, 1335, 630, 1334, 620, 1333, 612, 1334, 612, 1345, 613, 1355, 617, 1356, 618, 1356, 620, 1356, 621, 1358, 622, 1362, 622, 1363, 623, 1365, 627, 1365, 628, 1368, 628, 1370, 628, 1372, 630, 1373, 632, 1374, 633, 1374, 632, 1379, 634, 1381, 638, 1384, 643, 1385, 646, 1385, 649, 1384, 652, 1384, 652, 1386, 653, 1389, 653, 1392, 653, 1397, 652, 1403, 652, 1405, 650, 1406, 643, 1411, 639, 1415, 635, 1416, 629, 1416, 628, 1419, 628, 1422, 627, 1427, 626, 1435, 626, 1439, 624, 1441, 624, 1442, 621, 1444, 618, 1445, 614, 1445, 614, 1445, 613, 1448, 613, 1454, 610, 1460, 609, 1462, 607, 1464, 605, 1467, 600, 1466, 599, 1466, 597, 1465, 593, 1462, 588, 1465, 587, 1467, 586, 1469, 584, 1471, 585, 1475, 586, 1480, 585, 1486, 584, 1488, 584, 1490, 583, 1493, 580, 1492, 577, 1491, 576, 1493, 576, 1494, 573, 1496, 572, 1498, 570, 1500, 569, 1502, 568, 1505, 567, 1507, 564, 1509, 563, 1512, 559, 1511, 555, 1509, 555, 1512, 554, 1520, 554, 1527, 554, 1547, 554, 1566, 554, 1568, 554, 1570, 554, 1570, 551, 1572, 549, 1573, 547, 1573, 542, 1573, 537, 1574, 533, 1574, 532, 1577, 532, 1579, 532, 1581, 531, 1585, 534, 1590, 535, 1593, 541, 1594, 543, 1595, 545, 1596, 548, 1597, 547, 1602, 550, 1604, 551, 1606, 551, 1607, 554, 1608, 555, 1609, 557, 1610, 558, 1613, 558, 1616, 558, 1618, 552, 1617, 551, 1617, 548, 1615, 546, 1615, 544, 1614, 534, 1611, 523, 1612, 522, 1612, 519, 1614, 517, 1617, 514, 1617, 511, 1618, 508, 1618, 507, 1618, 504, 1619, 497, 1620, 497, 1627, 497, 1630, 496, 1632, 496, 1634, 496, 1636, 496, 1640, 493, 1644, 487, 1644, 487, 1650, 487, 1651, 486, 1653, 485, 1659, 478, 1658, 477, 1668, 476, 1680, 476, 1681, 473, 1682, 468, 1682, 468, 1685, 468, 1690, 467, 1698, 466, 1701, 464, 1704, 461, 1704, 459, 1706, 457, 1708, 456, 1711, 454, 1717, 454, 1725, 464, 1726, 477, 1725, 481, 1725, 484, 1724, 487, 1723, 489, 1723, 508, 1723, 527, 1723, 540, 1723, 553, 1724, 555, 1724, 557, 1724, 560, 1725, 563, 1725, 575, 1725, 588, 1725, 593, 1726, 595, 1728, 597, 1730, 599, 1731, 602, 1734, 603, 1735, 606, 1736, 609, 1736, 612, 1737, 612, 1738, 614, 1740, 614, 1741, 616, 1744, 617, 1745, 618, 1746, 620, 1746, 624, 1748, 624, 1748, 628, 1751, 630, 1756, 631, 1758, 632, 1760, 634, 1762, 637, 1762, 639, 1763, 638, 1766, 637, 1771, 635, 1773, 633, 1776, 630, 1776, 629, 1778, 628, 1778, 626, 1781, 627, 1785, 626, 1792, 630, 1793, 634, 1793, 637, 1795, 639, 1799, 639, 1800, 641, 1808, 648, 1810, 653, 1811, 655, 1816, 656, 1819, 657, 1820, 658, 1822, 660, 1823, 662, 1826, 662, 1827, 661, 1831, 662, 1833, 663, 1841, 664, 1847, 664, 1849, 665, 1851, 665, 1862, 665, 1871, 665, 1873, 663, 1874, 661, 1875, 659, 1875, 656, 1875, 653, 1877, 653, 1881, 654, 1883, 669, 1883, 681, 1888, 701, 1888, 720, 1888, 739, 1888, 758, 1888, 773, 1888, 788, 1888, 791, 1888, 794, 1886, 796, 1885, 798, 1885, 801, 1884, 804, 1883, 806, 1883, 809, 1882, 808, 1878, 806, 1876, 803, 1875, 802, 1870, 800, 1859, 810, 1859, 825, 1851, 829, 1858, 830, 1871, 830, 1880, 844, 1874, 840, 1852, 836, 1842, 834, 1830, 833, 1821, 832, 1817, 831, 1811, 826, 1808, 822, 1800, 824, 1796, 828, 1781, 836, 1775, 841, 1772, 845, 1767, 851, 1759, 854, 1749, 868, 1746, 875, 1747, 881, 1748, 881, 1742, 895, 1736, 896, 1722, 898, 1696, 883, 1682, 878, 1676, 878, 1665, 878, 1655, 879, 1645, 885, 1637, 890, 1635, 902, 1628, 911, 1621, 926, 1619, 935, 1622, 937, 1608, 932, 1601, 925, 1592, 921, 1589, 913, 1584, 906, 1578, 905, 1546, 906, 1517, 917, 1510, 923, 1505, 928, 1501, 938, 1502, 943, 1503, 944, 1497, 949, 1487, 949, 1477, 958, 1471, 956, 1457, 955, 1454, 954, 1450, 952, 1441, 948, 1439, 942, 1429, 939, 1424, 938, 1416, 938, 1412, 942, 1407, 941, 1400, 940, 1390, 938, 1377, 932, 1370, 914, 1371, 905, 1364, 902, 1355, 902, 1349, 894, 1343, 889, 1336, 885, 1325, 887, 1320, 887, 1312, 885, 1312, 882, 1313, 880, 1319, 874, 1318, 863, 1317, 862, 1329, 859, 1331, 853, 1334, 852, 1334, 850, 1335, 849, 1336, 848, 1337, 846, 1339, 842, 1340, 839, 1339, 835, 1339, 817, 1338, 799, 1338, Q, 794, 1338, 789, 1338, Z]],
      "label": "Stann Creek",
      "shortLabel": "SC",
      "labelPosition": [70.5, 160],
      "labelAlignment": [CEN, MID]
    },
    "01": {
      "outlines": [[M, 1355, 960, Q, 1352, 958, 1349, 956, 1349, 954, 1348, 953, 1346, 948, 1343, 944, 1340, 942, 1338, 942, 1336, 942, 1334, 941, 1333, 941, 1330, 942, 1327, 942, 1325, 948, 1323, 949, 1323, 952, 1323, 954, 1322, 956, 1321, 961, 1320, 967, 1315, 970, 1312, 976, 1311, 979, 1309, 981, 1308, 982, 1307, 983, 1306, 984, 1304, 986, 1304, 992, 1300, 995, 1297, 997, 1296, 998, 1294, 1001, 1290, 1001, 1288, 1001, 1285, 1000, 1282, 1000, 1279, 996, 1278, 995, 1277, 993, 1275, 991, 1271, 985, 1270, 984, 1268, 984, 1259, 990, 1256, 1002, 1255, 1004, 1254, 1007, 1254, 1009, 1253, 1010, 1249, 1013, 1245, 1016, 1245, 1017, 1242, 1019, 1239, 1023, 1237, 1028, 1236, 1029, 1235, 1032, 1234, 1037, 1230, 1038, 1229, 1038, 1227, 1040, 1227, 1051, 1223, 1061, 1222, 1062, 1221, 1063, 1220, 1063, 1216, 1065, 1215, 1082, 1215, 1100, 1215, 1108, 1215, 1116, 1215, 1120, 1216, 1122, 1215, 1123, 1214, 1124, 1213, 1127, 1211, 1128, 1209, 1131, 1208, 1137, 1207, 1142, 1206, 1148, 1205, 1161, 1205, 1173, 1205, 1175, 1205, 1177, 1204, 1183, 1202, 1188, 1202, 1190, 1201, 1195, 1200, 1201, 1197, 1208, 1196, 1214, 1196, 1220, 1196, 1222, 1197, 1225, 1198, 1230, 1202, 1235, 1208, 1241, 1211, 1250, 1212, 1254, 1213, 1260, 1214, 1262, 1215, 1265, 1215, 1266, 1217, 1270, 1218, 1271, 1219, 1272, 1220, 1274, 1221, 1274, 1227, 1278, 1231, 1285, 1233, 1287, 1235, 1290, 1237, 1293, 1240, 1292, 1238, 1289, 1238, 1285, 1238, 1282, 1239, 1281, 1241, 1279, 1242, 1277, 1243, 1275, 1246, 1271, 1248, 1270, 1250, 1269, 1252, 1269, 1254, 1267, 1255, 1266, 1256, 1265, 1259, 1263, 1260, 1262, 1257, 1261, 1260, 1259, 1261, 1259, 1264, 1258, 1269, 1258, 1274, 1259, 1279, 1259, 1283, 1257, 1284, 1257, 1287, 1255, 1288, 1254, 1288, 1252, 1288, 1245, 1288, 1238, 1288, 1233, 1286, 1230, 1284, 1226, 1283, 1220, 1283, 1219, 1282, 1217, 1281, 1216, 1279, 1215, 1279, 1214, 1281, 1213, 1284, 1212, 1287, 1209, 1289, 1205, 1293, 1202, 1295, 1199, 1299, 1198, 1301, 1198, 1305, 1196, 1307, 1191, 1307, 1182, 1307, 1182, 1308, 1178, 1311, 1171, 1305, 1165, 1300, 1160, 1302, 1152, 1303, 1149, 1308, 1146, 1309, 1146, 1311, 1146, 1318, 1146, 1324, 1145, 1329, 1145, 1334, 1145, 1336, 1145, 1337, 1144, 1339, 1144, 1339, 1142, 1340, 1127, 1340, 1110, 1339, 1109, 1338, 1107, 1336, 1104, 1333, 1102, 1332, 1102, 1330, 1100, 1326, 1097, 1321, 1091, 1320, 1087, 1318, 1086, 1317, 1085, 1316, 1084, 1316, 1083, 1317, 1081, 1317, 1080, 1318, 1078, 1319, 1068, 1319, 1058, 1319, 1056, 1317, 1052, 1317, 1049, 1314, 1046, 1309, 1043, 1311, 1034, 1315, 1031, 1314, 1026, 1313, 1020, 1315, 1016, 1316, 1014, 1317, 1013, 1318, 1011, 1320, 1009, 1321, 1009, 1322, 1007, 1324, 1004, 1328, 1002, 1331, 1001, 1333, 996, 1333, 995, 1334, 993, 1337, 989, 1338, 986, 1338, 985, 1340, 982, 1342, 979, 1345, 978, 1349, 977, 1354, 974, 1357, 974, 1359, 972, 1361, 969, 1360, 963, Q, 1358, 961, 1355, 960, Z, M, 1295, 1045, Q, 1297, 1049, 1298, 1052, 1299, 1060, 1299, 1066, 1302, 1069, 1305, 1069, 1307, 1072, 1310, 1074, 1311, 1079, 1311, 1082, 1311, 1084, 1312, 1084, 1313, 1086, 1314, 1090, 1316, 1090, 1315, 1093, 1312, 1101, 1309, 1105, 1306, 1109, 1304, 1113, 1303, 1115, 1302, 1117, 1301, 1126, 1301, 1138, 1300, 1140, 1298, 1143, 1295, 1147, 1294, 1148, 1290, 1153, 1291, 1160, 1290, 1162, 1289, 1162, 1285, 1166, 1279, 1169, 1275, 1170, 1275, 1173, 1275, 1175, 1274, 1177, 1274, 1180, 1273, 1183, 1273, 1195, 1272, 1210, 1272, 1212, 1269, 1212, 1263, 1212, 1256, 1212, 1255, 1212, 1253, 1215, 1251, 1217, 1251, 1220, 1250, 1227, 1251, 1237, 1253, 1240, 1256, 1243, 1257, 1244, 1257, 1245, 1259, 1249, 1258, 1257, 1255, 1258, 1251, 1258, 1246, 1258, 1239, 1257, 1237, 1255, 1237, 1251, 1238, 1246, 1238, 1241, 1239, 1234, 1234, 1231, 1232, 1230, 1230, 1230, 1226, 1230, 1226, 1227, 1225, 1218, 1225, 1208, 1225, 1205, 1226, 1202, 1226, 1199, 1227, 1193, 1228, 1190, 1229, 1186, 1230, 1184, 1230, 1182, 1230, 1169, 1230, 1156, 1230, 1154, 1229, 1153, 1227, 1150, 1227, 1146, 1228, 1136, 1228, 1125, 1232, 1125, 1235, 1124, 1235, 1117, 1236, 1113, 1237, 1112, 1238, 1110, 1240, 1110, 1240, 1108, 1241, 1106, 1242, 1103, 1243, 1101, 1243, 1100, 1243, 1092, 1243, 1085, 1244, 1075, 1244, 1065, 1245, 1060, 1246, 1057, 1246, 1049, 1249, 1046, 1256, 1042, 1261, 1040, 1263, 1039, 1264, 1037, 1264, 1036, 1265, 1035, 1267, 1034, 1268, 1033, 1273, 1032, 1276, 1034, 1279, 1035, 1281, 1035, 1285, 1037, 1285, 1037, 1291, 1040, 1293, 1043, Q, 1295, 1044, 1295, 1045, Z], [M, 979, 536, Q, 971, 532, 959, 534, 958, 535, 955, 532, 941, 532, 928, 532, 909, 532, 890, 532, 889, 532, 887, 532, 881, 532, 874, 532, 865, 531, 859, 540, 846, 541, 833, 541, 830, 541, 828, 540, 821, 539, 820, 545, 819, 546, 818, 549, 810, 550, 802, 550, 792, 550, 782, 550, 781, 550, 778, 551, 773, 554, 769, 558, 768, 559, 767, 560, 765, 564, 762, 563, 758, 563, 754, 563, 749, 563, 743, 561, 738, 560, 735, 563, 734, 565, 733, 566, 732, 569, 729, 569, 725, 570, 720, 570, 709, 570, 695, 571, 694, 572, 692, 573, 689, 575, 687, 577, 685, 579, 684, 581, 682, 584, 678, 583, 677, 583, 674, 584, 671, 584, 670, 585, 669, 587, 665, 588, 663, 589, 658, 588, 654, 587, 654, 590, 654, 604, 654, 620, 650, 621, 645, 621, 645, 626, 645, 630, 645, 649, 645, 668, 645, 673, 645, 678, 644, 682, 647, 686, 648, 703, 648, 720, 647, 725, 646, 732, 646, 738, 643, 745, 643, 752, 643, 760, 643, 765, 642, 770, 642, 778, 649, 780, 651, 780, 653, 782, 655, 782, 655, 786, 654, 788, 655, 791, 656, 797, 649, 796, 645, 795, 642, 795, 635, 794, 632, 797, 628, 800, 625, 805, 612, 806, 599, 806, 596, 806, 593, 810, 593, 821, 593, 832, 593, 837, 587, 838, 587, 858, 587, 877, 587, 879, 587, 881, 588, 900, 587, 921, 587, 930, 587, 938, 587, 957, 586, 976, 586, 992, 587, 1007, 590, 1008, 593, 1008, 595, 1009, 595, 1010, 597, 1013, 603, 1013, 606, 1012, 610, 1012, 613, 1011, 614, 1010, 614, 1003, 615, 997, 615, 992, 616, 987, 617, 984, 618, 983, 625, 982, 629, 981, 630, 978, 630, 976, 636, 975, 636, 981, 637, 986, 637, 988, 637, 997, 636, 1005, 636, 1007, 636, 1008, 633, 1018, 632, 1027, 631, 1030, 631, 1032, 630, 1037, 630, 1041, 630, 1056, 631, 1071, 636, 1072, 639, 1073, 642, 1074, 642, 1075, 643, 1077, 643, 1078, 644, 1083, 644, 1086, 644, 1098, 644, 1111, 644, 1114, 644, 1116, 644, 1133, 644, 1150, 644, 1169, 644, 1188, 644, 1207, 645, 1225, 645, 1227, 648, 1226, 650, 1226, 653, 1226, 655, 1226, 655, 1230, 654, 1235, 656, 1238, 657, 1240, 659, 1241, 658, 1246, 660, 1248, 660, 1259, 661, 1267, 662, 1272, 662, 1275, 663, 1282, 662, 1287, 657, 1287, 656, 1288, 654, 1292, 653, 1297, 652, 1300, 651, 1302, 650, 1305, 650, 1306, 648, 1309, 646, 1312, 644, 1316, 642, 1317, 640, 1320, 640, 1321, 641, 1328, 638, 1334, 657, 1336, 677, 1336, 693, 1336, 712, 1336, 728, 1336, 744, 1336, 747, 1337, 750, 1337, 755, 1337, 759, 1337, 774, 1337, 789, 1338, 794, 1338, 799, 1338, 817, 1338, 835, 1339, 839, 1339, 842, 1340, 846, 1339, 848, 1337, 849, 1336, 850, 1335, 852, 1334, 853, 1334, 859, 1331, 862, 1329, 863, 1317, 874, 1318, 880, 1319, 882, 1313, 885, 1312, 887, 1312, 887, 1311, 887, 1310, 888, 1257, 887, 1210, 890, 1197, 892, 1182, 893, 1172, 894, 1162, 894, 1156, 894, 1150, 895, 1143, 898, 1140, 901, 1137, 903, 1132, 906, 1123, 912, 1118, 917, 1093, 914, 1070, 913, 1057, 921, 1048, 929, 1038, 928, 1022, 928, 1014, 930, 1005, 933, 997, 934, 995, 937, 989, 945, 989, 952, 989, 954, 994, 966, 1001, 971, 1004, 976, 1006, 981, 1004, 990, 1000, 993, 997, 999, 983, 998, 970, 998, 962, 989, 955, 989, 954, 988, 952, 980, 945, 965, 947, 953, 950, 953, 940, 953, 936, 952, 932, 949, 922, 928, 921, 923, 919, 913, 920, 911, 920, 909, 919, 909, 919, 908, 918, 908, 917, 907, 917, 906, 917, 905, 917, 905, 911, 904, 905, 900, 890, 899, 877, 898, 865, 899, 852, 903, 842, 909, 838, 917, 824, 925, 817, 932, 806, 937, 799, 940, 789, 944, 784, 945, 773, 947, 769, 948, 755, 949, 745, 950, 732, 952, 722, 953, 716, 954, 710, 961, 702, 969, 691, 972, 684, 971, 682, 970, 657, 969, 632, 969, 612, 974, 595, 987, 585, 994, 576, 1005, 564, 1011, 558, 1014, 554, 1015, 547, 1015, 547, 1015, 546, L, 1015, 546, Q, 1007, 546, 999, 545, 996, 545, 994, 544, Q, 987, 540, 979, 536, Z], [M, 1252, 362, Q, 1249, 364, 1247, 369, 1246, 371, 1245, 375, 1244, 377, 1243, 378, 1241, 382, 1239, 386, 1238, 387, 1237, 388, 1237, 390, 1235, 391, 1232, 396, 1232, 405, 1231, 407, 1228, 409, 1225, 413, 1221, 416, 1217, 419, 1214, 425, 1214, 427, 1212, 431, 1211, 433, 1210, 435, 1207, 438, 1208, 443, 1208, 445, 1207, 447, 1205, 451, 1202, 455, 1201, 457, 1199, 461, 1199, 469, 1194, 476, 1194, 483, 1193, 492, 1190, 494, 1188, 498, 1187, 501, 1184, 503, 1184, 506, 1182, 508, 1181, 510, 1181, 512, 1181, 513, 1180, 516, 1180, 517, 1178, 519, 1177, 521, 1174, 523, 1173, 524, 1172, 525, 1170, 528, 1167, 531, 1166, 536, 1166, 541, 1166, 544, 1166, 547, 1165, 555, 1160, 558, 1159, 564, 1158, 566, 1157, 567, 1155, 568, 1154, 570, 1152, 575, 1151, 579, 1151, 586, 1150, 593, 1151, 600, 1151, 602, 1152, 604, 1153, 607, 1156, 611, 1160, 613, 1163, 611, 1163, 610, 1165, 609, 1172, 607, 1174, 602, 1175, 600, 1176, 598, 1177, 597, 1178, 596, 1178, 594, 1179, 593, 1181, 590, 1182, 588, 1184, 586, 1186, 583, 1187, 582, 1188, 580, 1188, 576, 1191, 575, 1192, 572, 1195, 567, 1196, 566, 1197, 565, 1199, 562, 1200, 560, 1205, 551, 1211, 545, 1214, 541, 1215, 535, 1216, 532, 1217, 527, 1218, 524, 1218, 521, 1219, 516, 1225, 512, 1228, 507, 1231, 503, 1233, 502, 1233, 500, 1234, 492, 1234, 485, 1234, 483, 1235, 478, 1236, 477, 1237, 475, 1238, 474, 1239, 472, 1240, 471, 1241, 468, 1244, 464, 1246, 458, 1247, 457, 1248, 455, 1250, 453, 1250, 451, 1250, 445, 1251, 438, 1253, 436, 1254, 436, 1256, 434, 1259, 430, 1261, 425, 1267, 423, 1269, 418, 1274, 416, 1275, 415, 1277, 414, 1279, 413, 1281, 412, 1282, 412, 1285, 410, 1286, 410, 1289, 408, 1293, 406, 1295, 402, 1297, 398, 1300, 396, 1304, 393, 1306, 390, 1307, 389, 1308, 387, 1309, 386, 1310, 385, 1310, 384, 1309, 381, 1309, 378, 1307, 376, 1307, 371, 1305, 366, 1305, 365, 1304, 363, 1301, 357, 1300, 351, 1300, 348, 1299, 348, 1298, 347, 1295, 346, 1288, 341, 1283, 335, 1281, 332, 1278, 331, 1274, 329, 1270, 333, 1267, 336, 1265, 339, 1263, 342, 1261, 343, 1260, 346, 1259, 351, Q, 1258, 356, 1252, 362, Z]],
      "label": "Belize",
      "shortLabel": "BZ",
      "labelPosition": [77.1, 93.6],
      "labelAlignment": [CEN, MID]
    },
    "04": {
      "outlines": [[M, 727, 338, Q, 726, 337, 723, 335, 718, 332, 714, 325, 711, 323, 710, 320, 708, 316, 702, 314, 697, 313, 692, 312, 690, 312, 687, 311, 684, 309, 682, 308, 677, 305, 674, 303, 674, 303, 671, 302, 670, 300, 668, 300, 663, 299, 654, 296, 653, 295, 649, 294, 646, 293, 640, 291, 636, 290, 632, 289, 629, 288, 627, 287, 624, 285, 620, 283, 615, 280, 613, 278, 612, 283, 612, 289, 607, 293, 604, 298, 598, 306, 586, 308, 583, 311, 580, 314, 578, 316, 574, 320, 560, 326, 545, 330, 540, 331, 538, 334, 534, 340, 538, 344, 544, 350, 542, 367, 537, 374, 525, 389, 516, 394, 514, 410, 513, 422, 512, 437, 512, 445, 506, 455, 506, 460, 498, 466, 495, 465, 490, 465, 483, 464, 484, 470, 485, 497, 460, 507, 449, 511, 445, 522, 443, 529, 441, 533, 439, 537, 437, 542, 437, 544, 433, 550, 428, 559, 415, 560, 410, 561, 401, 565, 393, 571, 394, 587, 392, 590, 393, 597, 396, 613, 376, 609, 370, 603, 363, 597, 359, 592, 356, 587, 354, 582, 350, 580, 342, 576, 329, 570, 328, 563, 321, 559, 316, 555, 310, 547, 302, 545, 293, 545, 280, 545, 263, 542, 263, 531, 260, 518, 250, 518, 247, 510, 247, 509, 241, 506, 234, 502, 225, 500, 223, 500, 217, 506, 212, 512, 205, 514, 191, 519, 173, 518, 171, 524, 168, 527, 167, 529, 163, 535, 148, 534, 139, 545, 141, 561, 125, 557, 125, 611, 125, 660, 125, 709, 125, 757, 125, 763, 124, 770, 122, 784, 122, 800, 123, 849, 123, 897, 123, 946, 123, 995, 123, 1044, 123, 1092, 123, 1114, 124, 1136, 135, 1136, 139, 1131, 146, 1127, 148, 1122, 150, 1118, 152, 1114, 154, 1110, 158, 1107, 161, 1105, 166, 1101, 172, 1099, 173, 1097, 178, 1092, 182, 1083, 201, 1080, 209, 1089, 211, 1092, 214, 1096, 217, 1099, 225, 1098, 234, 1097, 242, 1095, 246, 1084, 253, 1081, 270, 1080, 280, 1083, 289, 1085, 295, 1085, 313, 1086, 331, 1091, 338, 1086, 339, 1082, 345, 1066, 357, 1063, 363, 1056, 367, 1051, 374, 1051, 378, 1052, 388, 1055, 401, 1059, 425, 1060, 443, 1059, 450, 1056, 455, 1054, 464, 1054, 467, 1055, 480, 1062, 487, 1053, 503, 1052, 509, 1043, 523, 1036, 528, 1025, 542, 1019, 555, 1019, 560, 1020, 563, 1021, 570, 1012, 572, 1008, 575, 1008, 578, 1008, 583, 1007, 587, 1008, 586, 992, 586, 976, 587, 957, 587, 938, 587, 930, 587, 921, 588, 900, 587, 881, 587, 879, 587, 877, 587, 858, 587, 838, 593, 837, 593, 832, 593, 821, 593, 810, 596, 806, 599, 806, 612, 806, 625, 805, 628, 800, 632, 797, 635, 794, 642, 795, 645, 795, 649, 796, 656, 797, 655, 791, 654, 788, 655, 786, 655, 782, 653, 782, 651, 780, 649, 780, 642, 778, 642, 770, 643, 765, 643, 760, 643, 752, 643, 745, 646, 738, 646, 732, 647, 725, 648, 720, 648, 703, 647, 686, 644, 682, 645, 678, 645, 673, 645, 668, 645, 649, 645, 630, 645, 626, 645, 621, 650, 621, 654, 620, 654, 604, 654, 590, 654, 587, 658, 588, 663, 589, 665, 588, 669, 587, 670, 585, 671, 584, 674, 584, 677, 583, 678, 583, 682, 584, 684, 581, 685, 579, 687, 577, 689, 575, 692, 573, 694, 572, 695, 571, 709, 570, 720, 570, 725, 570, 729, 569, 732, 569, 733, 566, 734, 565, 735, 563, 738, 560, 743, 561, 749, 563, 754, 563, 758, 563, 762, 563, 765, 564, 767, 560, 768, 559, 769, 558, 773, 554, 778, 551, 781, 550, 782, 550, 792, 550, 802, 550, 810, 550, 818, 549, 819, 546, 820, 545, 821, 539, 828, 540, 830, 541, 833, 541, 846, 541, 859, 540, 865, 531, 874, 532, 881, 532, 887, 532, 888, 529, 886, 525, 884, 521, 881, 518, 880, 517, 880, 515, 880, 511, 878, 510, 877, 509, 876, 508, 875, 507, 872, 505, 868, 506, 866, 504, 861, 498, 857, 492, 854, 489, 850, 488, 849, 488, 846, 485, 842, 482, 835, 478, 831, 477, 829, 474, 825, 474, 823, 471, 819, 468, 815, 467, 814, 467, 811, 464, 809, 461, 808, 457, 807, 455, 805, 453, 804, 452, 802, 450, 801, 449, 797, 447, 792, 445, 788, 442, 787, 442, 786, 440, 785, 439, 784, 437, 781, 429, 775, 423, 772, 419, 770, 415, 769, 413, 768, 413, 767, 412, 763, 411, 758, 406, 755, 402, 752, 399, 748, 393, 748, 389, 746, 383, 745, 382, 744, 380, 743, 376, 740, 375, 739, 374, 738, 373, 736, 372, 734, 370, 733, 369, 732, 367, 731, 365, 731, 363, 729, 357, 729, 347, 728, 345, 728, 342, Q, 728, 339, 727, 338, Z]],
      "label": "Orange Walk",
      "shortLabel": "OW",
      "labelPosition": [38, 77.7],
      "labelAlignment": [CEN, MID]
    },
    "03": {
      "outlines": [[M, 850, 57, Q, 848, 57, 840, 60, 833, 62, 825, 63, 820, 63, 818, 59, 813, 50, 796, 51, 793, 53, 790, 57, 788, 59, 780, 63, 772, 61, 761, 56, 753, 50, 738, 51, 733, 51, 728, 53, 725, 53, 718, 56, 715, 57, 708, 61, 704, 64, 700, 66, 690, 73, 686, 90, 685, 102, 682, 115, 682, 122, 674, 131, 665, 136, 664, 147, 663, 153, 661, 162, 660, 171, 660, 180, 660, 186, 661, 192, 663, 201, 652, 202, 643, 205, 630, 205, 627, 205, 622, 214, 619, 218, 616, 227, 615, 246, 614, 267, 613, 272, 613, 278, 615, 280, 620, 283, 624, 285, 627, 287, 629, 288, 632, 289, 636, 290, 640, 291, 646, 293, 649, 294, 653, 295, 654, 296, 663, 299, 668, 300, 670, 300, 671, 302, 674, 303, 674, 303, 677, 305, 682, 308, 684, 309, 687, 311, 690, 312, 692, 312, 697, 313, 702, 314, 708, 316, 710, 320, 711, 323, 714, 325, 718, 332, 723, 335, 726, 337, 727, 338, 728, 339, 728, 342, 728, 345, 729, 347, 729, 357, 731, 363, 731, 365, 732, 367, 733, 369, 734, 370, 736, 372, 738, 373, 739, 374, 740, 375, 743, 376, 744, 380, 745, 382, 746, 383, 748, 389, 748, 393, 752, 399, 755, 402, 758, 406, 763, 411, 767, 412, 768, 413, 769, 413, 770, 415, 772, 419, 775, 423, 781, 429, 784, 437, 785, 439, 786, 440, 787, 442, 788, 442, 792, 445, 797, 447, 801, 449, 802, 450, 804, 452, 805, 453, 807, 455, 808, 457, 809, 461, 811, 464, 814, 467, 815, 467, 819, 468, 823, 471, 825, 474, 829, 474, 831, 477, 835, 478, 842, 482, 846, 485, 849, 488, 850, 488, 854, 489, 857, 492, 861, 498, 866, 504, 868, 506, 872, 505, 875, 507, 876, 508, 877, 509, 878, 510, 880, 511, 880, 515, 880, 517, 881, 518, 884, 521, 886, 525, 888, 529, 887, 532, 889, 532, 890, 532, 909, 532, 928, 532, 941, 532, 955, 532, 958, 535, 959, 534, 971, 532, 979, 536, 987, 540, 994, 544, 996, 545, 999, 545, 1007, 546, 1015, 546, L, 1015, 546, Q, 1017, 542, 1017, 537, 1018, 526, 1019, 515, 1019, 508, 1025, 502, 1035, 491, 1042, 477, 1044, 473, 1047, 467, 1048, 452, 1049, 445, 1050, 435, 1049, 427, 1048, 419, 1052, 416, 1053, 387, 1054, 362, 1056, 351, 1062, 344, 1067, 339, 1070, 335, 1070, 333, 1070, 329, L, 1070, 329, Q, 1069, 326, 1068, 322, 1068, 318, 1066, 310, 1065, 286, 1065, 262, 1065, 240, 1066, 217, 1067, 204, 1064, 197, 1056, 181, 1040, 166, 1032, 163, 1025, 169, 1015, 173, 1010, 185, 992, 187, 973, 187, 962, 187, 953, 184, 952, 184, 946, 181, 941, 178, 926, 176, 920, 172, 917, 177, 915, 182, 898, 181, 894, 183, 888, 187, 882, 192, 875, 194, 868, 196, 860, 192, 858, 185, 857, 177, 857, 164, 863, 157, 855, 156, 844, 163, 839, 172, 835, 177, 832, 181, 827, 184, 817, 191, 802, 175, 799, 173, 800, 165, 800, 161, 802, 158, 806, 149, 818, 138, 828, 129, 837, 124, 848, 119, 854, 108, 857, 102, 866, 96, 870, 88, 883, 89, 885, 82, 885, 75, 884, 61, 869, 59, 865, 56, 858, 56, Q, 854, 56, 850, 57, Z]],
      "label": "Corozal",
      "shortLabel": "CZ",
      "labelPosition": [83.9, 32.6],
      "labelAlignment": [CEN, MID]
    },
    "02": {
      "outlines": [[M, 629, 981, Q, 625, 982, 618, 983, 617, 984, 616, 987, 615, 992, 615, 997, 614, 1003, 614, 1010, 613, 1011, 610, 1012, 606, 1012, 603, 1013, 597, 1013, 595, 1010, 595, 1009, 593, 1008, 590, 1008, 587, 1008, 583, 1007, 578, 1008, 575, 1008, 572, 1008, 570, 1012, 563, 1021, 560, 1020, 555, 1019, 542, 1019, 528, 1025, 523, 1036, 509, 1043, 503, 1052, 487, 1053, 480, 1062, 467, 1055, 464, 1054, 455, 1054, 450, 1056, 443, 1059, 425, 1060, 401, 1059, 388, 1055, 378, 1052, 374, 1051, 367, 1051, 363, 1056, 357, 1063, 345, 1066, 339, 1082, 338, 1086, 331, 1091, 313, 1086, 295, 1085, 289, 1085, 280, 1083, 270, 1080, 253, 1081, 246, 1084, 242, 1095, 234, 1097, 225, 1098, 217, 1099, 214, 1096, 211, 1092, 209, 1089, 201, 1080, 182, 1083, 178, 1092, 173, 1097, 172, 1099, 166, 1101, 161, 1105, 158, 1107, 154, 1110, 152, 1114, 150, 1118, 148, 1122, 146, 1127, 139, 1131, 135, 1136, 124, 1136, 125, 1145, 126, 1155, 128, 1173, 130, 1190, 124, 1194, 130, 1198, 129, 1210, 128, 1223, 125, 1252, 125, 1282, 125, 1291, 124, 1300, 122, 1319, 122, 1340, 123, 1351, 124, 1362, 125, 1372, 122, 1372, 120, 1376, 120, 1380, 118, 1400, 118, 1420, 118, 1425, 115, 1435, 113, 1466, 113, 1497, 113, 1546, 113, 1595, 113, 1621, 114, 1647, 115, 1674, 109, 1693, 108, 1696, 103, 1705, 102, 1709, 101, 1712, 100, 1720, 99, 1730, 98, 1735, 97, 1740, 96, 1752, 96, 1765, 97, 1772, 92, 1776, 86, 1781, 87, 1792, 88, 1841, 87, 1890, 86, 1894, 86, 1897, 85, 1929, 83, 1960, 83, 1963, 83, 1967, 83, 1974, 82, 1982, 83, 1980, 87, 1978, 91, 1976, 92, 1971, 94, 1967, 97, 1966, 99, 1966, 102, 1965, 105, 1963, 108, 1961, 112, 1957, 113, 1951, 115, 1947, 116, 1945, 118, 1943, 119, 1943, 127, 1942, 129, 1938, 131, 1935, 135, 1933, 141, 1931, 144, 1928, 145, 1927, 147, 1926, 150, 1924, 154, 1924, 159, 1925, 164, 1925, 182, 1925, 199, 1924, 208, 1919, 211, 1912, 213, 1905, 216, 1903, 220, 1900, 222, 1899, 226, 1897, 230, 1892, 230, 1892, 232, 1890, 234, 1889, 235, 1886, 238, 1885, 239, 1887, 242, 1891, 245, 1896, 248, 1899, 249, 1902, 251, 1906, 254, 1908, 256, 1909, 256, 1911, 259, 1910, 262, 1907, 262, 1903, 261, 1902, 258, 1895, 262, 1895, 267, 1896, 273, 1895, 277, 1895, 279, 1894, 281, 1893, 283, 1893, 286, 1893, 287, 1891, 295, 1890, 295, 1883, 294, 1880, 294, 1876, 295, 1874, 296, 1872, 298, 1870, 299, 1870, 301, 1870, 301, 1867, 305, 1863, 308, 1860, 311, 1856, 311, 1853, 315, 1850, 320, 1850, 325, 1849, 327, 1850, 336, 1851, 343, 1851, 349, 1853, 348, 1850, 347, 1845, 349, 1844, 351, 1840, 354, 1840, 357, 1837, 360, 1837, 362, 1834, 365, 1834, 368, 1832, 369, 1830, 370, 1828, 371, 1828, 374, 1827, 375, 1826, 384, 1821, 392, 1817, 394, 1815, 395, 1815, 398, 1813, 399, 1811, 399, 1809, 400, 1807, 404, 1802, 406, 1800, 409, 1797, 410, 1795, 412, 1794, 414, 1792, 416, 1790, 418, 1789, 420, 1787, 423, 1785, 426, 1782, 425, 1777, 424, 1774, 423, 1773, 421, 1772, 419, 1771, 418, 1770, 417, 1769, 412, 1766, 413, 1763, 413, 1761, 409, 1760, 412, 1760, 414, 1759, 423, 1759, 428, 1757, 430, 1757, 431, 1753, 435, 1750, 436, 1746, 437, 1744, 437, 1742, 437, 1738, 437, 1733, 437, 1731, 439, 1730, 445, 1730, 450, 1730, 453, 1730, 454, 1727, 454, 1726, 454, 1725, 454, 1717, 456, 1711, 457, 1708, 459, 1706, 461, 1704, 464, 1704, 466, 1701, 467, 1698, 468, 1690, 468, 1685, 468, 1682, 473, 1682, 476, 1681, 476, 1680, 477, 1668, 478, 1658, 485, 1659, 486, 1653, 487, 1651, 487, 1650, 487, 1644, 493, 1644, 496, 1640, 496, 1636, 496, 1634, 496, 1632, 497, 1630, 497, 1627, 497, 1620, 504, 1619, 507, 1618, 508, 1618, 511, 1618, 514, 1617, 517, 1617, 519, 1614, 522, 1612, 523, 1612, 534, 1611, 544, 1614, 546, 1615, 548, 1615, 551, 1617, 552, 1617, 558, 1618, 558, 1616, 558, 1613, 557, 1610, 555, 1609, 554, 1608, 551, 1607, 551, 1606, 550, 1604, 547, 1602, 548, 1597, 545, 1596, 543, 1595, 541, 1594, 535, 1593, 534, 1590, 531, 1585, 532, 1581, 532, 1579, 532, 1577, 533, 1574, 537, 1574, 542, 1573, 547, 1573, 549, 1573, 551, 1572, 554, 1570, 554, 1570, 554, 1568, 554, 1566, 554, 1547, 554, 1527, 554, 1520, 555, 1512, 555, 1509, 559, 1511, 563, 1512, 564, 1509, 567, 1507, 568, 1505, 569, 1502, 570, 1500, 572, 1498, 573, 1496, 576, 1494, 576, 1493, 577, 1491, 580, 1492, 583, 1493, 584, 1490, 584, 1488, 585, 1486, 586, 1480, 585, 1475, 584, 1471, 586, 1469, 587, 1467, 588, 1465, 593, 1462, 597, 1465, 599, 1466, 600, 1466, 605, 1467, 607, 1464, 609, 1462, 610, 1460, 613, 1454, 613, 1448, 614, 1445, 614, 1445, 618, 1445, 621, 1444, 624, 1442, 624, 1441, 626, 1439, 626, 1435, 627, 1427, 628, 1422, 628, 1419, 629, 1416, 635, 1416, 639, 1415, 643, 1411, 650, 1406, 652, 1405, 652, 1403, 653, 1397, 653, 1392, 653, 1389, 652, 1386, 652, 1384, 649, 1384, 646, 1385, 643, 1385, 638, 1384, 634, 1381, 632, 1379, 633, 1374, 632, 1374, 630, 1373, 628, 1372, 628, 1370, 628, 1368, 627, 1365, 623, 1365, 622, 1363, 622, 1362, 621, 1358, 620, 1356, 618, 1356, 617, 1356, 613, 1355, 612, 1345, 612, 1334, 620, 1333, 630, 1334, 633, 1335, 638, 1334, 641, 1328, 640, 1321, 640, 1320, 642, 1317, 644, 1316, 646, 1312, 648, 1309, 650, 1306, 650, 1305, 651, 1302, 652, 1300, 653, 1297, 654, 1292, 656, 1288, 657, 1287, 662, 1287, 663, 1282, 662, 1275, 662, 1272, 661, 1267, 660, 1259, 660, 1248, 658, 1246, 659, 1241, 657, 1240, 656, 1238, 654, 1235, 655, 1230, 655, 1226, 653, 1226, 650, 1226, 648, 1226, 645, 1227, 645, 1225, 644, 1207, 644, 1188, 644, 1169, 644, 1150, 644, 1133, 644, 1116, 644, 1114, 644, 1111, 644, 1098, 644, 1086, 644, 1083, 643, 1078, 643, 1077, 642, 1075, 642, 1074, 639, 1073, 636, 1072, 631, 1071, 630, 1056, 630, 1041, 630, 1037, 631, 1032, 631, 1030, 632, 1027, 633, 1018, 636, 1008, 636, 1007, 636, 1005, 637, 997, 637, 988, 637, 986, 636, 981, 636, 975, 630, 976, Q, 630, 978, 629, 981, Z]],
      "label": "Cayo",
      "shortLabel": "CY",
      "labelPosition": [31, 143.9],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'belize',
  type: 'maps'
};

/***/ })

/******/ });
}));
