
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
/******/ 	return __webpack_require__(__webpack_require__.s = 668);
/******/ })
/************************************************************************/
/******/ ({

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(669);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 669:
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
 * @id fusionmaps.WesternNorway.20.12-21-2012 11:31:39
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
  "name": "WesternNorway",
  "revision": 20,
  "standaloneInit": true,
  "baseWidth": 300,
  "baseHeight": 502,
  "baseScaleFactor": 10,
  "entities": {
    "1": {
      "outlines": [[M, 1748, 504, Q, 1732, 496, 1710, 503, 1685, 510, 1669, 524, 1664, 528, 1662, 534, 1657, 548, 1655, 561, 1655, 563, 1656, 566, 1663, 580, 1674, 585, 1679, 587, 1682, 589, 1686, 590, 1690, 590, 1695, 592, 1699, 593, 1714, 596, 1718, 589, 1721, 587, 1727, 586, 1751, 579, 1757, 555, 1758, 550, 1760, 545, 1761, 541, 1761, 538, Q, 1771, 511, 1748, 504, Z], [M, 1305, 918, Q, 1316, 927, 1326, 919, 1328, 917, 1332, 915, 1337, 913, 1341, 912, 1364, 906, 1369, 884, 1370, 883, 1370, 882, 1373, 871, 1369, 865, 1363, 856, 1350, 846, 1347, 844, 1341, 843, 1345, 848, 1336, 849, L, 1335, 849, Q, 1304, 846, 1294, 876, 1292, 881, 1292, 884, 1292, 889, 1296, 890, 1299, 892, 1299, 897, Q, 1297, 912, 1305, 918, Z], [M, 991, 993, Q, 992, 996, 995, 998, 1007, 1010, 1021, 1021, 1049, 1044, 1085, 1032, 1091, 1031, 1096, 1029, 1111, 1024, 1134, 1017, 1155, 1009, 1174, 996, 1197, 980, 1207, 967, 1216, 957, 1224, 941, 1227, 938, 1228, 934, 1238, 920, 1236, 902, 1236, 892, 1234, 884, 1230, 873, 1223, 865, 1222, 859, 1218, 859, 1216, 859, 1211, 862, 1158, 852, 1121, 880, 1119, 883, 1115, 884, 1114, 885, 1111, 886, 1091, 898, 1076, 914, 1072, 919, 1067, 922, 1060, 929, 1054, 936, 1047, 942, 1037, 942, 1035, 943, 1031, 944, 1008, 954, 995, 967, Q, 987, 978, 991, 993, Z], [M, 1273, 712, Q, 1261, 716, 1257, 723, 1256, 724, 1256, 725, 1253, 731, 1248, 737, 1246, 742, 1248, 746, 1252, 757, 1257, 765, 1262, 773, 1268, 778, 1282, 790, 1286, 781, 1289, 779, 1294, 778, 1315, 772, 1335, 760, 1339, 758, 1343, 753, 1354, 742, 1365, 726, 1388, 695, 1421, 668, 1441, 654, 1441, 624, 1441, 622, 1432, 618, 1429, 617, 1425, 615, 1424, 614, 1421, 613, 1403, 613, 1393, 622, 1390, 624, 1383, 625, 1369, 629, 1359, 638, 1355, 641, 1350, 645, 1347, 648, 1343, 652, 1339, 657, 1336, 662, 1333, 671, 1327, 678, 1319, 691, 1308, 696, 1305, 699, 1300, 701, 1297, 702, 1293, 704, Q, 1283, 708, 1273, 712, Z], [M, 860, 1015, Q, 855, 1009, 858, 998, 859, 997, 860, 995, L, 858, 994, Q, 849, 993, 834, 1002, 790, 1031, 773, 1076, 766, 1098, 789, 1106, 811, 1114, 834, 1093, 846, 1085, 851, 1068, 853, 1066, 854, 1063, 856, 1052, 859, 1045, 861, 1042, 862, 1036, Q, 865, 1021, 860, 1015, Z], [M, 2312, 341, Q, 2329, 340, 2345, 330, 2347, 328, 2350, 326, 2362, 310, 2345, 299, 2343, 297, 2339, 296, 2323, 291, 2307, 292, 2279, 294, 2256, 298, L, 2256, 299, Q, 2250, 313, 2256, 330, 2257, 333, 2259, 334, Q, 2286, 343, 2312, 341, Z], [M, 2412, 287, Q, 2419, 321, 2441, 334, 2468, 350, 2489, 330, 2502, 320, 2499, 293, 2498, 283, 2496, 277, 2491, 268, 2485, 260, 2480, 254, 2466, 250, 2462, 249, 2457, 249, 2455, 250, 2452, 252, 2424, 255, 2414, 277, Q, 2412, 283, 2412, 287, Z], [M, 2331, 181, Q, 2343, 183, 2356, 182, 2361, 181, 2364, 179, 2372, 176, 2395, 153, 2399, 141, 2394, 128, 2388, 111, 2376, 95, 2361, 75, 2340, 61, 2307, 40, 2270, 43, 2244, 45, 2240, 67, 2233, 109, 2262, 142, Q, 2289, 171, 2331, 181, Z], [M, 2628, 374, Q, 2617, 382, 2606, 388, 2577, 404, 2548, 416, 2510, 431, 2473, 443, 2468, 444, 2463, 444, 2412, 442, 2388, 466, 2379, 476, 2385, 482, 2387, 487, 2389, 491, 2391, 494, 2391, 498, 2394, 503, 2395, 508, 2398, 522, 2414, 524, 2423, 526, 2430, 528, 2455, 538, 2473, 545, 2479, 546, 2479, 551, 2487, 567, 2482, 580, 2469, 628, 2440, 668, 2431, 680, 2418, 690, 2416, 689, 2412, 687, 2404, 683, 2391, 675, L, 2386, 662, Q, 2385, 659, 2384, 657, 2367, 627, 2350, 593, 2346, 584, 2341, 570, 2340, 566, 2337, 563, 2330, 555, 2326, 539, 2324, 534, 2321, 529, 2321, 525, 2320, 522, 2313, 499, 2303, 480, 2299, 476, 2297, 469, 2292, 451, 2280, 439, 2276, 436, 2273, 431, 2262, 416, 2238, 416, 2229, 416, 2222, 414, 2212, 411, 2202, 412, 2174, 415, 2157, 408, 2154, 406, 2148, 407, 2124, 406, 2101, 407, 2092, 409, 2084, 410, 2058, 414, 2039, 427, 2020, 443, 2010, 469, 2002, 494, 1984, 506, 1973, 516, 1954, 505, 1921, 486, 1887, 468, 1860, 454, 1829, 460, 1802, 466, 1805, 496, 1805, 502, 1808, 506, 1815, 521, 1828, 539, 1841, 558, 1854, 576, 1856, 579, 1858, 582, 1859, 588, 1857, 590, 1848, 601, 1845, 615, 1846, 617, 1843, 618, 1793, 633, 1743, 650, L, 1710, 662, Q, 1742, 686, 1805, 687, 1853, 688, 1902, 688, 1908, 688, 1913, 687, 1924, 685, 1922, 694, 1920, 705, 1929, 706, 1939, 707, 1949, 711, 1966, 718, 1983, 723, 2017, 731, 2051, 732, 2119, 734, 2186, 726, 2201, 725, 2217, 726, 2223, 727, 2226, 729, 2247, 738, 2259, 758, 2262, 764, 2262, 769, 2261, 778, 2254, 789, 2253, 794, 2250, 796, 2239, 816, 2228, 827, 2226, 830, 2222, 832, 2190, 844, 2158, 844, 2040, 851, 1923, 826, 1873, 817, 1822, 807, 1771, 799, 1721, 784, 1664, 769, 1609, 748, 1603, 747, 1598, 745, 1591, 741, 1576, 742, 1572, 742, 1568, 740, 1561, 733, 1551, 737, 1547, 740, 1545, 740, 1529, 742, 1512, 741, 1491, 740, 1471, 743, 1435, 753, 1427, 778, 1422, 796, 1427, 825, 1433, 849, 1421, 876, 1435, 882, 1449, 884, 1454, 885, 1460, 886, 1489, 891, 1518, 895, 1567, 902, 1603, 927, 1646, 958, 1661, 1004, 1662, 1009, 1663, 1012, 1668, 1017, 1673, 1025, 1682, 1042, 1694, 1049, 1730, 1072, 1774, 1080, 1780, 1081, 1785, 1085, 1800, 1095, 1816, 1105, 1823, 1110, 1824, 1121, 1826, 1154, 1810, 1179, 1809, 1183, 1808, 1186, 1804, 1200, 1789, 1205, 1785, 1206, 1778, 1207, 1774, 1210, 1770, 1210, 1752, 1204, 1750, 1175, 1750, 1169, 1747, 1163, 1733, 1143, 1710, 1143, 1696, 1143, 1694, 1153, 1689, 1177, 1674, 1186, 1670, 1190, 1665, 1193, 1653, 1202, 1650, 1222, 1650, 1228, 1653, 1230, 1667, 1250, 1683, 1260, 1686, 1262, 1686, 1264, 1686, 1271, 1685, 1276, 1684, 1282, 1681, 1284, 1678, 1288, 1674, 1293, 1670, 1297, 1665, 1300, 1662, 1303, 1661, 1305, 1657, 1310, 1646, 1308, 1622, 1305, 1604, 1296, 1601, 1295, 1596, 1293, 1592, 1292, 1588, 1289, 1580, 1286, 1576, 1271, 1574, 1266, 1574, 1261, 1582, 1214, 1598, 1169, 1606, 1147, 1607, 1121, 1611, 1087, 1602, 1056, 1600, 1052, 1598, 1047, 1595, 1030, 1586, 1014, 1585, 1009, 1584, 1004, 1580, 971, 1555, 967, 1546, 966, 1539, 964, 1516, 959, 1492, 950, 1488, 949, 1484, 947, 1447, 945, 1411, 944, 1408, 945, 1406, 946, 1383, 955, 1357, 962, 1349, 963, 1341, 967, 1311, 985, 1272, 987, 1264, 987, 1257, 989, 1239, 993, 1223, 1004, 1200, 1020, 1193, 1036, 1180, 1060, 1191, 1078, 1201, 1097, 1229, 1109, 1237, 1112, 1245, 1118, 1248, 1121, 1252, 1123, 1254, 1126, 1257, 1128, 1268, 1141, 1271, 1163, 1273, 1185, 1257, 1200, 1253, 1204, 1249, 1207, 1225, 1224, 1187, 1218, 1182, 1217, 1177, 1215, 1143, 1203, 1150, 1163, 1154, 1136, 1137, 1117, 1126, 1104, 1102, 1104, 1075, 1105, 1053, 1093, 1035, 1085, 1009, 1078, 1005, 1077, 1001, 1078, 983, 1082, 962, 1080, 937, 1078, 926, 1091, 923, 1095, 921, 1099, 919, 1125, 925, 1143, 927, 1148, 928, 1153, 930, 1159, 932, 1159, 940, 1163, 936, 1175, 924, 1173, 915, 1175, 904, 1177, 898, 1186, 896, 1188, 894, 1191, 893, 1197, 891, 1200, 886, 1214, 888, 1228, 891, 1245, 900, 1254, 909, 1263, 924, 1272, 936, 1282, 952, 1284, 957, 1284, 962, 1286, 992, 1287, 1021, 1286, 1048, 1285, 1063, 1291, 1087, 1302, 1111, 1306, 1118, 1307, 1121, 1310, 1130, 1315, 1144, 1316, 1149, 1316, 1154, 1316, 1184, 1318, 1199, 1335, L, 1199, 1336, Q, 1200, 1338, 1203, 1339, L, 1205, 1340, Q, 1209, 1341, 1209, 1343, 1213, 1350, 1223, 1345, 1227, 1344, 1232, 1344, 1239, 1337, 1256, 1334, L, 1257, 1334, Q, 1262, 1333, 1266, 1328, 1285, 1304, 1314, 1302, 1343, 1301, 1357, 1301, 1365, 1303, 1373, 1305, 1377, 1307, 1381, 1308, 1424, 1322, 1451, 1341, 1463, 1349, 1474, 1358, 1496, 1376, 1513, 1387, 1528, 1396, 1535, 1409, 1537, 1413, 1540, 1414, 1548, 1420, 1555, 1426, 1562, 1432, 1576, 1431, 1583, 1431, 1586, 1429, 1598, 1422, 1617, 1414, 1636, 1407, 1662, 1400, 1668, 1399, 1670, 1396, 1678, 1391, 1694, 1393, 1712, 1397, 1727, 1403, 1743, 1414, 1761, 1418, 1767, 1419, 1774, 1419, 1780, 1421, 1782, 1419, 1805, 1401, 1822, 1389, 1827, 1387, 1832, 1384, 1838, 1383, 1842, 1381, 1847, 1379, 1851, 1376, 1874, 1365, 1896, 1357, 1944, 1337, 1997, 1334, 2018, 1333, 2024, 1332, 2041, 1335, 2057, 1335, 2062, 1335, 2066, 1338, 2074, 1343, 2084, 1339, 2089, 1338, 2094, 1336, 2100, 1335, 2104, 1332, 2140, 1312, 2160, 1278, 2172, 1255, 2180, 1240, 2183, 1237, 2186, 1235, 2201, 1231, 2212, 1217, 2215, 1215, 2217, 1215, 2229, 1212, 2233, 1207, 2247, 1198, 2270, 1201, 2277, 1202, 2280, 1204, 2294, 1212, 2318, 1212, 2332, 1213, 2345, 1214, 2351, 1215, 2355, 1214, 2368, 1212, 2382, 1214, 2422, 1219, 2463, 1215, 2493, 1212, 2522, 1212, 2540, 1212, 2553, 1207, 2559, 1205, 2564, 1203, 2570, 1202, 2574, 1204, 2590, 1213, 2600, 1218, 2604, 1221, 2607, 1221, 2630, 1226, 2639, 1240, 2642, 1242, 2644, 1244, 2650, 1246, 2655, 1247, 2655, 1231, 2661, 1218, 2671, 1202, 2680, 1185, 2687, 1172, 2694, 1165, 2723, 1131, 2731, 1085, 2733, 1069, 2733, 1052, 2733, 1026, 2724, 1010, 2722, 1006, 2721, 1003, 2715, 984, 2698, 977, 2696, 975, 2694, 971, 2679, 949, 2672, 923, 2671, 915, 2668, 906, 2673, 897, 2672, 886, L, 2672, 884, Q, 2672, 881, 2674, 878, 2684, 858, 2710, 835, 2737, 809, 2783, 801, 2798, 798, 2811, 794, 2831, 786, 2853, 779, 2873, 770, 2889, 763, 2893, 762, 2896, 760, 2921, 751, 2929, 722, 2933, 707, 2937, 699, 2938, 695, 2938, 688, 2941, 664, 2944, 641, 2954, 571, 2953, 503, 2952, 479, 2941, 465, 2938, 460, 2932, 455, 2920, 445, 2908, 437, 2895, 427, 2870, 424, 2826, 435, 2783, 447, 2743, 459, 2703, 457, 2676, 457, 2651, 440, 2649, 439, 2648, 433, 2647, 428, 2647, 422, 2645, 403, 2647, 384, 2647, 381, 2648, 379, 2649, 374, 2651, 370, 2655, 364, 2653, 353, Q, 2639, 365, 2628, 374, Z]],
      "label": "Møre og Romsdal",
      "shortLabel": "MR",
      "labelPosition": [212, 103.8],
      "labelAlignment": [CEN, MID]
    },
    "2": {
      "outlines": [[M, 384, 1966, Q, 382, 1968, 380, 1970, 376, 1970, 372, 1972, 362, 1981, 354, 1990, 351, 1994, 348, 1995, 311, 2015, 289, 2039, 287, 2042, 284, 2044, 271, 2057, 266, 2083, 266, 2089, 265, 2093, 264, 2115, 279, 2120, 284, 2122, 289, 2122, 308, 2125, 327, 2124, 333, 2125, 337, 2122, 343, 2121, 348, 2120, 370, 2115, 386, 2099, 400, 2088, 412, 2076, 415, 2074, 416, 2070, 431, 2051, 441, 2027, 444, 2024, 446, 2019, 457, 1998, 467, 1974, 468, 1972, 468, 1970, 468, 1945, 455, 1937, 437, 1925, 416, 1940, Q, 397, 1952, 384, 1966, Z], [M, 1021, 1286, Q, 992, 1287, 962, 1286, 957, 1284, 952, 1284, 936, 1282, 924, 1272, 909, 1263, 900, 1254, 891, 1245, 888, 1228, 886, 1214, 891, 1200, 893, 1197, 894, 1191, 896, 1188, 898, 1186, 904, 1177, 915, 1175, 914, 1163, 902, 1170, 893, 1172, 888, 1172, 861, 1172, 839, 1179, 830, 1183, 823, 1191, 819, 1194, 813, 1198, 798, 1205, 789, 1224, 786, 1228, 787, 1233, 794, 1256, 805, 1270, 808, 1273, 813, 1276, 824, 1283, 839, 1284, 846, 1284, 851, 1287, 865, 1295, 888, 1301, 901, 1304, 910, 1311, 915, 1314, 920, 1315, 930, 1318, 935, 1322, 937, 1324, 942, 1325, 944, 1327, 946, 1329, 975, 1357, 1027, 1358, 1032, 1360, 1037, 1360, 1050, 1363, 1063, 1364, 1069, 1365, 1074, 1365, 1101, 1366, 1124, 1376, 1129, 1378, 1134, 1379, 1144, 1381, 1154, 1384, 1173, 1393, 1188, 1402, 1193, 1405, 1198, 1406, 1226, 1413, 1257, 1415, 1273, 1416, 1289, 1416, 1300, 1415, 1311, 1419, 1316, 1421, 1320, 1420, 1340, 1421, 1359, 1426, 1370, 1428, 1383, 1431, 1409, 1436, 1432, 1446, 1442, 1450, 1441, 1452, 1406, 1495, 1353, 1510, 1306, 1524, 1257, 1521, 1244, 1521, 1231, 1520, 1207, 1517, 1186, 1501, 1167, 1488, 1150, 1469, 1145, 1466, 1140, 1462, 1122, 1447, 1110, 1439, 1107, 1436, 1103, 1434, 1078, 1424, 1053, 1434, 1049, 1436, 1043, 1436, 1027, 1438, 1011, 1439, 1007, 1439, 1001, 1439, 976, 1438, 957, 1426, 921, 1400, 883, 1387, 861, 1380, 839, 1373, 835, 1372, 829, 1371, 809, 1365, 786, 1360, 781, 1360, 776, 1358, 741, 1348, 726, 1325, 712, 1306, 696, 1286, 684, 1269, 671, 1259, 665, 1255, 653, 1250, 649, 1249, 642, 1248, 625, 1250, 611, 1254, 599, 1258, 594, 1270, 593, 1273, 591, 1277, 587, 1287, 592, 1295, 594, 1298, 595, 1302, 601, 1324, 622, 1344, 638, 1359, 655, 1370, 660, 1372, 663, 1374, 667, 1375, 671, 1377, 687, 1385, 695, 1394, 699, 1399, 702, 1403, 705, 1408, 707, 1411, 679, 1420, 652, 1434, 627, 1450, 607, 1476, 605, 1480, 604, 1484, 602, 1487, 601, 1490, 600, 1495, 598, 1498, 595, 1506, 592, 1515, 595, 1525, 604, 1533, 639, 1562, 673, 1592, 678, 1596, 677, 1601, 680, 1615, 677, 1628, 677, 1634, 676, 1638, 672, 1658, 659, 1676, 656, 1679, 653, 1681, 646, 1693, 631, 1696, 621, 1697, 611, 1699, 570, 1707, 541, 1739, 529, 1753, 522, 1768, 520, 1772, 517, 1776, 513, 1785, 517, 1800, 517, 1802, 517, 1804, 513, 1827, 514, 1853, 514, 1861, 517, 1868, 521, 1880, 522, 1895, 523, 1921, 534, 1940, 539, 1948, 544, 1955, 551, 1967, 557, 1974, 569, 1996, 585, 2016, 596, 2031, 622, 2039, 628, 2040, 642, 2042, 650, 2044, 657, 2047, 679, 2053, 701, 2056, 710, 2056, 717, 2059, 726, 2060, 734, 2063, 736, 2064, 738, 2064, 763, 2068, 786, 2072, 794, 2075, 803, 2076, 829, 2081, 845, 2087, 860, 2092, 877, 2091, 915, 2089, 946, 2096, 953, 2098, 956, 2100, 973, 2110, 995, 2109, 1009, 2108, 1016, 2113, 1022, 2117, 1026, 2120, 1035, 2131, 1049, 2140, 1054, 2144, 1057, 2148, 1068, 2160, 1090, 2167, 1111, 2176, 1134, 2178, 1154, 2180, 1164, 2172, 1168, 2171, 1171, 2169, 1177, 2167, 1180, 2165, 1187, 2158, 1194, 2153, 1217, 2136, 1229, 2113, 1233, 2108, 1235, 2103, 1248, 2056, 1271, 2012, 1280, 1996, 1300, 1976, 1305, 1973, 1308, 1969, 1330, 1951, 1353, 1964, 1370, 1975, 1366, 2002, 1364, 2024, 1353, 2035, 1350, 2037, 1347, 2038, 1323, 2049, 1323, 2080, 1328, 2090, 1326, 2109, 1324, 2131, 1318, 2155, 1323, 2173, 1341, 2178, 1366, 2184, 1390, 2189, 1416, 2194, 1437, 2205, 1454, 2213, 1480, 2214, 1488, 2216, 1497, 2214, 1502, 2212, 1507, 2211, 1518, 2207, 1530, 2201, 1542, 2195, 1548, 2188, 1571, 2157, 1557, 2120, 1556, 2115, 1558, 2110, 1563, 2103, 1562, 2093, 1559, 2079, 1566, 2066, 1569, 2061, 1570, 2055, 1573, 2028, 1593, 2012, 1612, 1996, 1636, 1987, 1641, 1986, 1645, 1983, 1663, 1974, 1683, 1974, 1698, 1973, 1706, 1981, 1725, 2000, 1706, 2012, 1703, 2015, 1699, 2015, 1685, 2016, 1679, 2023, 1676, 2026, 1673, 2027, 1668, 2029, 1663, 2031, 1656, 2037, 1649, 2049, 1644, 2060, 1643, 2071, 1639, 2097, 1629, 2120, 1621, 2137, 1615, 2162, 1608, 2191, 1630, 2198, 1636, 2199, 1639, 2201, 1647, 2211, 1668, 2210, 1679, 2210, 1688, 2213, 1692, 2214, 1694, 2214, 1704, 2214, 1710, 2221, 1715, 2227, 1721, 2232, 1715, 2233, 1710, 2237, 1708, 2240, 1704, 2240, 1692, 2245, 1680, 2250, 1672, 2254, 1657, 2252, 1649, 2252, 1642, 2254, 1638, 2256, 1634, 2256, 1627, 2259, 1619, 2259, 1569, 2262, 1529, 2275, 1524, 2277, 1519, 2281, 1507, 2294, 1491, 2298, 1488, 2299, 1484, 2299, 1470, 2305, 1463, 2317, 1462, 2320, 1460, 2322, 1448, 2332, 1447, 2355, 1447, 2357, 1447, 2360, 1444, 2373, 1447, 2386, 1449, 2404, 1448, 2424, 1449, 2429, 1450, 2433, 1453, 2441, 1447, 2456, 1444, 2466, 1441, 2477, 1441, 2480, 1440, 2482, 1440, 2502, 1421, 2514, 1419, 2512, 1417, 2510, 1415, 2507, 1414, 2504, 1410, 2488, 1405, 2471, 1399, 2447, 1374, 2445, 1354, 2442, 1336, 2450, 1334, 2451, 1329, 2448, 1322, 2452, 1316, 2445, 1309, 2434, 1313, 2417, 1314, 2415, 1313, 2413, 1315, 2399, 1320, 2392, 1323, 2387, 1327, 2383, 1357, 2360, 1374, 2312, 1377, 2307, 1377, 2301, 1376, 2293, 1376, 2285, 1376, 2262, 1353, 2247, 1350, 2245, 1347, 2243, 1313, 2201, 1279, 2188, 1276, 2187, 1272, 2185, 1244, 2181, 1219, 2191, 1195, 2200, 1171, 2205, 1166, 2207, 1160, 2208, 1141, 2210, 1123, 2210, 1119, 2210, 1115, 2213, 1109, 2220, 1090, 2214, 1081, 2212, 1073, 2205, 1060, 2196, 1044, 2188, 1040, 2187, 1038, 2185, 1021, 2180, 1005, 2173, 989, 2165, 973, 2158, 965, 2153, 952, 2148, 928, 2141, 908, 2135, 904, 2133, 900, 2132, 891, 2130, 883, 2127, 869, 2124, 855, 2120, 851, 2119, 848, 2117, 840, 2111, 830, 2113, 803, 2117, 785, 2127, 781, 2130, 777, 2132, 762, 2144, 738, 2139, 736, 2138, 734, 2137, 725, 2135, 718, 2133, 714, 2133, 712, 2132, 688, 2130, 664, 2127, 659, 2127, 653, 2127, 622, 2128, 595, 2120, 590, 2119, 585, 2117, 568, 2105, 552, 2098, 534, 2089, 513, 2080, 493, 2073, 477, 2080, 456, 2091, 443, 2115, 428, 2146, 429, 2178, 429, 2197, 432, 2216, 432, 2219, 432, 2221, 434, 2237, 433, 2252, 434, 2256, 435, 2257, 438, 2261, 438, 2263, 438, 2291, 456, 2312, 465, 2321, 473, 2322, 499, 2328, 526, 2324, 557, 2319, 588, 2312, 602, 2309, 615, 2305, 621, 2304, 624, 2305, L, 636, 2303, Q, 650, 2294, 664, 2285, 696, 2266, 729, 2250, 733, 2248, 736, 2246, 741, 2245, 744, 2243, 784, 2222, 829, 2218, 831, 2218, 834, 2218, 840, 2218, 844, 2218, 858, 2221, 871, 2223, 874, 2224, 875, 2226, 885, 2244, 914, 2256, L, 928, 2261, Q, 935, 2275, 944, 2292, 968, 2338, 1019, 2352, 1064, 2364, 1110, 2369, 1133, 2373, 1145, 2387, 1171, 2416, 1188, 2448, 1200, 2469, 1215, 2487, 1219, 2490, 1222, 2494, 1226, 2498, 1231, 2501, 1241, 2508, 1252, 2525, 1258, 2535, 1267, 2537, 1270, 2538, 1272, 2540, 1288, 2552, 1294, 2562, 1296, 2566, 1299, 2568, 1312, 2584, 1320, 2599, 1332, 2624, 1350, 2639, 1355, 2643, 1359, 2646, 1378, 2669, 1396, 2690, 1405, 2700, 1421, 2708, 1435, 2715, 1450, 2725, 1453, 2727, 1457, 2728, 1462, 2731, 1464, 2731, 1475, 2734, 1480, 2737, 1486, 2741, 1491, 2744, 1530, 2760, 1552, 2789, 1604, 2735, 1650, 2676, 1664, 2660, 1681, 2649, 1720, 2627, 1764, 2615, 1785, 2609, 1805, 2601, 1849, 2584, 1871, 2542, 1880, 2526, 1892, 2519, 1894, 2518, 1895, 2515, 1897, 2511, 1899, 2507, 1903, 2502, 1906, 2493, 1908, 2489, 1910, 2485, 1917, 2478, 1922, 2470, 1928, 2459, 1929, 2446, 1931, 2398, 1925, 2355, 1924, 2350, 1922, 2345, 1917, 2338, 1919, 2328, 1922, 2323, 1922, 2317, 1921, 2292, 1927, 2269, 1928, 2265, 1930, 2262, 1939, 2256, 1949, 2252, 1953, 2251, 1956, 2250, 1961, 2248, 1966, 2246, 1972, 2246, 1977, 2242, 2000, 2226, 2014, 2217, 2023, 2212, 2028, 2198, 2030, 2195, 2033, 2193, 2039, 2189, 2038, 2178, 2036, 2154, 2030, 2131, 2027, 2123, 2026, 2115, 2025, 2107, 2023, 2099, 2021, 2081, 2030, 2076, 2033, 2075, 2036, 2073, 2042, 2072, 2044, 2070, 2051, 2064, 2062, 2064, 2087, 2067, 2089, 2039, 2089, 2031, 2090, 2023, 2091, 2019, 2090, 2015, 2087, 2007, 2088, 1997, 2089, 1992, 2087, 1988, 2047, 1933, 2000, 1886, 1988, 1875, 1982, 1864, 1959, 1811, 1943, 1752, 1943, 1750, 1939, 1746, 1937, 1744, 1935, 1741, 1901, 1713, 1843, 1703, 1814, 1699, 1798, 1680, 1782, 1663, 1778, 1634, 1776, 1610, 1774, 1586, 1770, 1544, 1766, 1501, 1763, 1463, 1761, 1418, 1743, 1414, 1727, 1403, 1712, 1397, 1694, 1393, 1678, 1391, 1670, 1396, 1668, 1399, 1662, 1400, 1636, 1407, 1617, 1414, 1598, 1422, 1586, 1429, 1583, 1431, 1576, 1431, 1562, 1432, 1555, 1426, 1548, 1420, 1540, 1414, 1537, 1413, 1535, 1409, 1528, 1396, 1513, 1387, 1496, 1376, 1474, 1358, 1463, 1349, 1451, 1341, 1424, 1322, 1381, 1308, 1377, 1307, 1373, 1305, 1365, 1303, 1357, 1301, 1343, 1301, 1314, 1302, 1285, 1304, 1266, 1328, 1262, 1333, 1257, 1334, L, 1256, 1334, Q, 1239, 1337, 1232, 1344, 1227, 1344, 1223, 1345, 1213, 1350, 1209, 1343, 1209, 1341, 1205, 1340, L, 1203, 1339, Q, 1200, 1338, 1199, 1336, L, 1199, 1335, Q, 1184, 1318, 1154, 1316, 1149, 1316, 1144, 1316, 1130, 1315, 1121, 1310, 1118, 1307, 1111, 1306, 1087, 1302, 1063, 1291, Q, 1048, 1285, 1021, 1286, Z]],
      "label": "Sogn og Fjordane",
      "shortLabel": "SO",
      "labelPosition": [98, 179.8],
      "labelAlignment": [CEN, MID]
    },
    "3": {
      "outlines": [[M, 286, 2713, Q, 284, 2719, 283, 2724, 282, 2726, 282, 2728, 278, 2747, 283, 2760, 284, 2766, 285, 2771, 287, 2777, 288, 2784, 291, 2790, 291, 2798, 292, 2858, 291, 2916, 290, 2930, 298, 2939, 301, 2942, 306, 2940, 311, 2939, 314, 2936, 316, 2932, 318, 2926, 334, 2871, 333, 2814, 333, 2805, 331, 2799, 331, 2796, 330, 2793, 328, 2782, 326, 2771, 324, 2756, 331, 2751, 333, 2750, 334, 2744, 336, 2727, 332, 2718, 331, 2717, 329, 2715, 319, 2710, 305, 2706, 304, 2706, 300, 2706, Q, 290, 2709, 286, 2713, Z], [M, 477, 3087, Q, 459, 3082, 449, 3075, 420, 3052, 370, 3057, 362, 3059, 355, 3061, L, 345, 3064, 345, 3065, Q, 345, 3072, 339, 3077, 323, 3090, 315, 3106, 304, 3128, 322, 3135, 324, 3137, 327, 3139, 330, 3145, 334, 3148, 339, 3151, 344, 3161, 355, 3183, 361, 3208, 357, 3230, 339, 3248, 317, 3269, 302, 3289, 299, 3295, 297, 3300, 291, 3322, 288, 3343, 288, 3345, 291, 3347, 304, 3360, 315, 3365, 319, 3367, 322, 3367, 340, 3369, 360, 3369, 366, 3369, 370, 3367, 383, 3364, 392, 3359, 398, 3356, 401, 3353, 432, 3323, 451, 3301, 463, 3286, 474, 3270, 494, 3244, 501, 3212, 509, 3181, 503, 3147, 501, 3130, 493, 3112, 488, 3102, 481, 3091, Q, 480, 3089, 477, 3087, Z], [M, 1110, 2369, Q, 1064, 2364, 1019, 2352, 968, 2338, 944, 2292, 935, 2275, 928, 2261, L, 914, 2256, Q, 885, 2244, 875, 2226, 874, 2224, 871, 2223, 858, 2221, 844, 2218, 840, 2218, 834, 2218, 831, 2218, 829, 2218, 784, 2222, 744, 2243, 741, 2245, 736, 2246, 733, 2248, 729, 2250, 696, 2266, 664, 2285, 650, 2294, 636, 2303, 614, 2316, 591, 2328, 557, 2346, 529, 2370, 524, 2375, 534, 2387, 551, 2413, 559, 2439, 562, 2445, 550, 2454, 546, 2456, 541, 2454, 538, 2453, 534, 2452, 530, 2450, 524, 2448, 519, 2447, 513, 2446, 503, 2444, 498, 2438, 491, 2426, 482, 2407, 472, 2379, 444, 2369, 439, 2367, 433, 2367, 408, 2364, 386, 2371, 383, 2373, 380, 2373, 366, 2377, 355, 2387, 350, 2393, 346, 2400, 340, 2410, 344, 2429, 345, 2431, 345, 2433, 345, 2452, 354, 2465, 356, 2469, 359, 2469, 367, 2471, 375, 2473, 394, 2477, 412, 2484, 415, 2485, 416, 2487, 420, 2501, 428, 2508, 407, 2512, 386, 2518, 359, 2528, 339, 2548, 329, 2559, 338, 2568, 364, 2597, 403, 2609, 428, 2619, 455, 2623, 479, 2627, 503, 2623, 542, 2616, 574, 2594, 619, 2563, 659, 2525, 667, 2517, 675, 2515, 687, 2514, 692, 2523, 699, 2536, 692, 2551, 685, 2565, 677, 2579, 662, 2614, 645, 2646, 640, 2657, 637, 2664, 635, 2672, 627, 2676, 623, 2678, 621, 2680, 610, 2693, 592, 2706, 585, 2711, 571, 2715, 568, 2717, 566, 2719, 563, 2726, 552, 2721, 534, 2713, 520, 2708, 514, 2707, 510, 2704, 501, 2694, 477, 2695, 469, 2696, 460, 2698, 421, 2708, 401, 2738, 398, 2741, 397, 2744, 397, 2750, 395, 2753, 368, 2795, 375, 2845, 378, 2871, 369, 2892, 362, 2912, 360, 2931, 360, 2938, 361, 2952, 361, 2958, 364, 2962, 371, 2970, 380, 2975, 399, 2982, 419, 2987, 444, 2996, 467, 2988, 493, 2982, 514, 2963, 527, 2955, 541, 2946, 544, 2949, 544, 2953, 546, 2958, 546, 2962, 546, 2989, 551, 3015, 557, 3043, 564, 3071, 570, 3088, 565, 3105, 559, 3133, 556, 3161, 555, 3173, 564, 3175, 586, 3182, 607, 3171, 629, 3160, 643, 3141, 658, 3126, 664, 3105, 696, 3020, 772, 2969, 797, 2952, 823, 2933, 846, 2918, 868, 2899, 893, 2880, 922, 2872, 947, 2867, 972, 2872, 994, 2877, 1015, 2878, 1061, 2882, 1105, 2875, 1149, 2869, 1191, 2856, 1220, 2848, 1249, 2845, 1255, 2846, 1256, 2855, 1256, 2859, 1255, 2860, 1254, 2864, 1252, 2867, 1240, 2883, 1225, 2890, 1162, 2919, 1117, 2946, 1115, 2949, 1114, 2952, 1108, 2976, 1096, 3000, 1086, 3022, 1063, 3033, 1061, 3034, 1058, 3034, 1048, 3037, 1037, 3034, 1035, 3034, 1033, 3033, 1028, 3029, 1025, 3025, 1021, 3018, 1019, 3011, 1019, 3009, 1019, 3006, 1023, 2984, 1028, 2961, 1034, 2935, 1027, 2912, 1023, 2904, 1009, 2904, 981, 2904, 952, 2911, 920, 2920, 890, 2936, 881, 2941, 871, 2946, 866, 2949, 861, 2953, 847, 2969, 834, 2985, 831, 2987, 829, 2989, 809, 3017, 776, 3038, 773, 3040, 772, 3042, 770, 3049, 767, 3050, 760, 3053, 762, 3064, 764, 3072, 767, 3080, 768, 3083, 769, 3087, 780, 3107, 790, 3123, 795, 3130, 796, 3139, 799, 3154, 783, 3158, 755, 3150, 728, 3148, 707, 3148, 692, 3161, 677, 3175, 669, 3193, 650, 3240, 621, 3273, 619, 3279, 611, 3284, 606, 3287, 602, 3290, 596, 3300, 578, 3303, 568, 3305, 557, 3307, 555, 3308, 551, 3308, 541, 3309, 536, 3317, 533, 3322, 529, 3324, 521, 3329, 513, 3343, 502, 3362, 506, 3396, 506, 3401, 510, 3405, 529, 3420, 541, 3438, 544, 3441, 544, 3444, 548, 3469, 535, 3481, 530, 3486, 533, 3500, 529, 3509, 528, 3524, 528, 3530, 524, 3532, 508, 3546, 493, 3541, 461, 3532, 449, 3508, 448, 3506, 444, 3503, 421, 3491, 408, 3475, 398, 3463, 382, 3448, 365, 3433, 346, 3420, 331, 3409, 310, 3405, 271, 3400, 237, 3414, 234, 3415, 230, 3415, 219, 3418, 209, 3427, 196, 3440, 188, 3454, 186, 3460, 182, 3464, 172, 3475, 168, 3492, 168, 3496, 166, 3499, L, 165, 3499, Q, 157, 3507, 156, 3524, 156, 3531, 153, 3539, 148, 3561, 153, 3588, 154, 3593, 153, 3598, 154, 3612, 155, 3625, 158, 3631, 161, 3637, 164, 3640, 166, 3643, 188, 3668, 221, 3669, 227, 3669, 230, 3671, 233, 3673, 242, 3672, 255, 3674, 268, 3672, 306, 3671, 344, 3671, 366, 3672, 386, 3671, 463, 3669, 541, 3670, 573, 3671, 601, 3662, 667, 3640, 723, 3597, 747, 3580, 770, 3562, 821, 3526, 880, 3504, 891, 3500, 904, 3504, 925, 3509, 928, 3539, 928, 3545, 928, 3550, 928, 3553, 927, 3556, 926, 3562, 925, 3565, 923, 3570, 921, 3574, 907, 3608, 918, 3620, 945, 3650, 995, 3647, 1014, 3647, 1033, 3636, 1081, 3609, 1127, 3580, 1132, 3576, 1141, 3568, 1149, 3560, 1153, 3557, 1175, 3552, 1187, 3539, 1208, 3515, 1231, 3487, 1249, 3465, 1271, 3448, 1305, 3425, 1340, 3403, 1377, 3382, 1406, 3353, 1430, 3330, 1451, 3301, 1454, 3299, 1456, 3296, 1478, 3265, 1497, 3229, 1521, 3186, 1540, 3142, 1552, 3114, 1565, 3090, 1577, 3071, 1582, 3047, 1587, 3031, 1587, 3011, 1587, 3006, 1585, 3001, 1580, 2993, 1581, 2979, 1581, 2970, 1579, 2962, 1573, 2940, 1578, 2915, 1579, 2912, 1579, 2908, 1581, 2895, 1579, 2882, 1578, 2875, 1578, 2867, 1575, 2821, 1552, 2789, 1530, 2760, 1491, 2744, 1486, 2741, 1480, 2737, 1475, 2734, 1464, 2731, 1462, 2731, 1457, 2728, 1453, 2727, 1450, 2725, 1435, 2715, 1421, 2708, 1405, 2700, 1396, 2690, 1378, 2669, 1359, 2646, 1355, 2643, 1350, 2639, 1332, 2624, 1320, 2599, 1312, 2584, 1299, 2568, 1296, 2566, 1294, 2562, 1288, 2552, 1272, 2540, 1270, 2538, 1267, 2537, 1258, 2535, 1252, 2525, 1241, 2508, 1231, 2501, 1226, 2498, 1222, 2494, 1219, 2490, 1215, 2487, 1200, 2469, 1188, 2448, 1171, 2416, 1145, 2387, Q, 1133, 2373, 1110, 2369, Z]],
      "label": "Hordaland",
      "shortLabel": "HO",
      "labelPosition": [86.9, 264],
      "labelAlignment": [CEN, MID]
    },
    "4": {
      "outlines": [[M, 396, 4014, Q, 396, 4012, 387, 4007, 377, 4014, 366, 4007, 354, 4013, 337, 4011, 332, 4010, 328, 4012, 301, 4027, 283, 4052, 282, 4055, 278, 4057, 261, 4066, 255, 4089, 256, 4093, 255, 4095, 256, 4100, 255, 4106, 257, 4119, 262, 4126, 268, 4135, 275, 4138, 284, 4140, 294, 4137, 314, 4130, 333, 4125, 354, 4122, 367, 4112, 383, 4101, 387, 4079, Q, 396, 4047, 396, 4014, Z], [M, 454, 3949, Q, 435, 3970, 462, 3981, 467, 3984, 471, 3984, 487, 3985, 498, 3968, 505, 3959, 510, 3949, 514, 3940, 512, 3930, 512, 3927, 509, 3926, 497, 3922, 493, 3927, L, 492, 3927, Q, 466, 3935, 454, 3949, Z], [M, 1127, 3580, Q, 1081, 3609, 1033, 3636, 1014, 3647, 995, 3647, 945, 3650, 918, 3620, 907, 3608, 921, 3574, 923, 3570, 925, 3565, 926, 3562, 927, 3556, 928, 3553, 928, 3550, 928, 3545, 928, 3539, 925, 3509, 904, 3504, 891, 3500, 880, 3504, 821, 3526, 770, 3562, 747, 3580, 723, 3597, 667, 3640, 601, 3662, 573, 3671, 541, 3670, 463, 3669, 386, 3671, 366, 3672, 344, 3671, 306, 3671, 268, 3672, 255, 3674, 242, 3672, 233, 3673, 230, 3671, 227, 3669, 221, 3669, 188, 3668, 166, 3643, 164, 3640, 161, 3637, 158, 3631, 155, 3625, 156, 3674, 156, 3721, 156, 3727, 153, 3728, 148, 3732, 150, 3743, 153, 3759, 140, 3763, 136, 3764, 131, 3766, 123, 3772, 114, 3779, 87, 3801, 60, 3840, 58, 3842, 56, 3844, 55, 3851, 53, 3854, 48, 3866, 47, 3882, 47, 3887, 47, 3891, 49, 3916, 49, 3940, 49, 3948, 52, 3955, 53, 3959, 53, 3962, 55, 3967, 56, 3972, 57, 3978, 61, 3978, 89, 3983, 119, 3981, 145, 3981, 161, 3988, 164, 3990, 166, 3991, 169, 3992, 172, 3991, 206, 3999, 226, 3984, 228, 3981, 230, 3979, 249, 3968, 254, 3945, 255, 3943, 255, 3940, 256, 3935, 255, 3930, 255, 3903, 237, 3891, 234, 3889, 230, 3887, 215, 3870, 200, 3861, 184, 3853, 180, 3833, 176, 3808, 188, 3795, 197, 3789, 204, 3796, 221, 3817, 242, 3828, 246, 3831, 247, 3833, 258, 3848, 275, 3856, 277, 3858, 279, 3859, 295, 3862, 301, 3874, 304, 3879, 303, 3882, 306, 3889, 315, 3886, 329, 3880, 339, 3860, 343, 3852, 350, 3846, 367, 3834, 380, 3849, 384, 3853, 386, 3856, 391, 3870, 408, 3864, 429, 3858, 436, 3842, 447, 3822, 449, 3795, 451, 3772, 463, 3766, 478, 3762, 496, 3779, 498, 3781, 498, 3786, 498, 3807, 496, 3828, 496, 3835, 496, 3840, 496, 3842, 494, 3844, 492, 3891, 541, 3883, 546, 3882, 550, 3884, 558, 3888, 563, 3896, 567, 3902, 568, 3910, 568, 3916, 567, 3922, 567, 3929, 565, 3935, 565, 3938, 563, 3942, 559, 3947, 556, 3951, 545, 3969, 535, 3988, 534, 3992, 533, 3995, 531, 4000, 528, 4003, 516, 4019, 510, 4037, 494, 4087, 462, 4108, 458, 4110, 456, 4109, 431, 4112, 419, 4133, 416, 4139, 412, 4142, 403, 4153, 409, 4169, 411, 4173, 411, 4176, 414, 4181, 415, 4186, 416, 4192, 416, 4197, 426, 4233, 392, 4229, 371, 4228, 355, 4213, 339, 4200, 324, 4186, 300, 4165, 285, 4155, 283, 4152, 278, 4150, 277, 4150, 275, 4149, 272, 4149, 268, 4149, 242, 4145, 221, 4156, 218, 4157, 216, 4158, 201, 4163, 190, 4171, 171, 4185, 166, 4207, 165, 4210, 165, 4213, 164, 4218, 163, 4224, 157, 4247, 150, 4271, 149, 4274, 149, 4276, 144, 4302, 135, 4324, 133, 4330, 131, 4336, 130, 4344, 129, 4352, 128, 4360, 128, 4368, 125, 4409, 126, 4449, 127, 4467, 129, 4485, 129, 4491, 132, 4493, 138, 4502, 138, 4512, 136, 4536, 143, 4560, 144, 4563, 144, 4565, 147, 4579, 148, 4592, 149, 4611, 152, 4630, 152, 4636, 153, 4641, 159, 4659, 166, 4676, 182, 4716, 202, 4753, 246, 4829, 318, 4880, 346, 4900, 354, 4918, 367, 4952, 392, 4965, 407, 4974, 423, 4975, 480, 4978, 534, 4967, 529, 4951, 529, 4933, 529, 4924, 531, 4918, 532, 4915, 534, 4911, 552, 4866, 568, 4819, 576, 4794, 577, 4767, 578, 4736, 574, 4704, 572, 4699, 571, 4693, 565, 4675, 559, 4655, 560, 4653, 558, 4649, 556, 4642, 555, 4634, 554, 4626, 552, 4617, 551, 4605, 548, 4592, 549, 4587, 548, 4581, 549, 4578, 548, 4574, 551, 4565, 553, 4554, 554, 4552, 555, 4548, 560, 4529, 564, 4515, 567, 4511, 569, 4506, 575, 4487, 582, 4469, 584, 4463, 588, 4458, 591, 4455, 591, 4452, 604, 4415, 627, 4389, 636, 4380, 643, 4368, 647, 4362, 652, 4358, 673, 4345, 679, 4319, 681, 4317, 683, 4315, 700, 4291, 711, 4261, 714, 4253, 726, 4243, 742, 4231, 758, 4220, 770, 4212, 786, 4210, 791, 4209, 796, 4207, 822, 4195, 848, 4174, 855, 4171, 860, 4164, 878, 4149, 898, 4133, 908, 4125, 921, 4122, 922, 4071, 914, 4025, 910, 4002, 907, 3978, 907, 3973, 908, 3967, 909, 3954, 911, 3940, 912, 3938, 913, 3935, 926, 3902, 952, 3887, 955, 3884, 956, 3880, 964, 3864, 972, 3854, 979, 3847, 986, 3841, 1025, 3810, 1054, 3775, 1102, 3718, 1141, 3653, 1144, 3649, 1148, 3646, 1152, 3642, 1161, 3639, 1163, 3638, 1164, 3637, 1158, 3638, 1158, 3625, 1164, 3588, 1153, 3557, 1149, 3560, 1141, 3568, Q, 1132, 3576, 1127, 3580, Z]],
      "label": "Rogaland",
      "shortLabel": "RO",
      "labelPosition": [37.1, 447.3],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'westernnorway',
  type: 'maps'
};

/***/ })

/******/ });
}));