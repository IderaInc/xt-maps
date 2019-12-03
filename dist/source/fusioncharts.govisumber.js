
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
/******/ 	return __webpack_require__(__webpack_require__.s = 578);
/******/ })
/************************************************************************/
/******/ ({

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(579);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 579:
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
 * @id fusionmaps.Govisumber.1.04-13-2017 03:07:11
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
  "name": "Govisumber",
  "revision": 1,
  "standaloneInit": true,
  "baseWidth": 430,
  "baseHeight": 600,
  "baseScaleFactor": 10,
  "entities": {
    "MN.GS.BT": {
      "outlines": [[M, 1964, 1153, Q, 1933, 1143, 1861, 1130, 1772, 1114, 1738, 1106, 1649, 1084, 1516, 1060, 1384, 1036, 1331, 1022, L, 1314, 1024, Q, 1223, 1014, 1193, 1008, 1160, 1000, 1146, 997, 1098, 985, 1073, 982, 1047, 978, 1042, 980, 1036, 982, 1029, 981, 1021, 981, 1005, 982, 983, 984, 979, 985, 949, 999, 926, 999, 907, 1000, 869, 1003, 835, 1007, 809, 1006, 761, 1005, 683, 1020, 589, 1038, 550, 1041, 494, 1046, 419, 1067, 367, 1081, 284, 1109, 192, 1128, 140, 1140, 43, 1163, 43, 1199, 43, 1209, 89, 1226, 138, 1246, 144, 1249, L, 145, 1250, Q, 166, 1264, 197, 1275, 210, 1279, 258, 1294, 277, 1300, 314, 1323, 354, 1347, 374, 1355, 411, 1370, 440, 1394, 460, 1411, 486, 1441, 504, 1463, 576, 1531, 651, 1603, 679, 1626, 734, 1673, 794, 1706, 834, 1727, 900, 1779, 974, 1838, 999, 1853, 1064, 1908, 1099, 1946, 1135, 1984, 1158, 2005, 1181, 2026, 1192, 2038, 1203, 2051, 1222, 2094, 1253, 2153, 1283, 2214, 1333, 2316, 1333, 2332, 1333, 2332, 1333, 2333, 1341, 2340, 1355, 2354, 1361, 2360, 1375, 2378, 1384, 2389, 1411, 2431, 1432, 2459, 1454, 2482, 1455, 2483, 1473, 2510, 1473, 2511, 1485, 2523, 1491, 2529, 1493, 2534, 1493, 2535, 1494, 2537, 1498, 2546, 1523, 2576, 1528, 2583, 1541, 2598, 1552, 2612, 1558, 2621, 1576, 2654, 1586, 2669, 1602, 2691, 1623, 2707, 1628, 2711, 1645, 2723, 1659, 2733, 1666, 2739, 1671, 2744, 1682, 2758, 1692, 2769, 1700, 2776, 1714, 2787, 1740, 2809, 1747, 2814, 1757, 2826, 1767, 2835, 1777, 2835, 1782, 2835, 1808, 2814, L, 1813, 2814, Q, 1819, 2812, 1822, 2809, 1828, 2803, 1832, 2798, L, 1854, 2773, Q, 1861, 2765, 1878, 2756, 1897, 2746, 1902, 2741, 1908, 2735, 1926, 2715, 1929, 2709, 1931, 2706, 1935, 2702, 1938, 2702, L, 1952, 2698, Q, 1962, 2691, 1973, 2679, 1989, 2663, 1997, 2656, L, 2008, 2645, Q, 2009, 2643, 2014, 2641, 2016, 2641, 2020, 2640, 2033, 2635, 2045, 2622, L, 2070, 2595, Q, 2074, 2589, 2083, 2584, 2093, 2580, 2095, 2577, 2098, 2574, 2106, 2570, 2114, 2565, 2118, 2562, L, 2144, 2537, Q, 2148, 2532, 2158, 2525, 2169, 2517, 2170, 2516, 2178, 2507, 2192, 2496, L, 2193, 2496, Q, 2199, 2490, 2211, 2479, 2222, 2469, 2231, 2464, 2251, 2452, 2253, 2449, 2259, 2443, 2259, 2429, 2259, 2420, 2253, 2408, 2249, 2396, 2248, 2381, 2248, 2374, 2241, 2354, 2235, 2335, 2235, 2326, 2236, 2316, 2231, 2301, 2226, 2284, 2224, 2275, 2221, 2255, 2217, 2245, 2214, 2238, 2214, 2222, L, 2215, 2204, Q, 2201, 2192, 2199, 2176, 2194, 2150, 2191, 2142, 2189, 2137, 2189, 2127, 2189, 2117, 2186, 2109, 2178, 2088, 2177, 2075, 2174, 2063, 2174, 2056, 2168, 2039, 2168, 2038, 2160, 2026, 2160, 2008, 2160, 1995, 2158, 1976, 2155, 1956, 2155, 1934, 2153, 1912, 2153, 1897, 2153, 1882, 2156, 1817, 2155, 1813, 2150, 1801, 2145, 1789, 2144, 1782, 2142, 1773, 2143, 1756, 2144, 1739, 2144, 1739, L, 2144, 1544, Q, 2144, 1537, 2149, 1523, 2151, 1519, 2152, 1509, 2152, 1501, 2155, 1499, L, 2155, 1323, Q, 2162, 1305, 2165, 1297, 2170, 1284, 2169, 1272, L, 2167, 1191, Q, 2159, 1194, 2158, 1194, 2148, 1194, 2068, 1178, Q, 1988, 1161, 1964, 1153, Z]],
      "label": "Bayantal",
      "shortLabel": "BT",
      "labelPosition": [154.3, 179.5],
      "labelAlignment": [CEN, MID]
    },
    "MN.GS.SH": {
      "outlines": [[M, 2349, 3847, Q, 2335, 3861, 2315, 3875, 2306, 3882, 2287, 3905, 2266, 3925, 2226, 3975, L, 2226, 3976, Q, 2206, 4010, 2135, 4069, 2117, 4084, 2102, 4116, 2093, 4135, 2078, 4174, L, 1968, 4424, Q, 1968, 4435, 1980, 4464, 1987, 4480, 1998, 4505, 2001, 4514, 2011, 4541, 2020, 4567, 2026, 4578, 2029, 4584, 2038, 4609, 2048, 4638, 2048, 4648, L, 2012, 4690, Q, 2004, 4698, 1986, 4708, 1968, 4717, 1959, 4725, 1949, 4734, 1914, 4774, 1890, 4801, 1869, 4811, 1862, 4814, 1850, 4827, 1836, 4843, 1829, 4849, 1812, 4860, 1795, 4893, 1792, 4899, 1779, 4918, 1766, 4938, 1760, 4950, 1756, 4957, 1747, 4982, 1746, 4983, 1744, 4994, 1741, 5006, 1738, 5010, 1738, 5024, 1728, 5041, 1714, 5067, 1710, 5078, 1704, 5096, 1671, 5155, 1668, 5161, 1663, 5172, 1658, 5180, 1651, 5184, 1645, 5187, 1634, 5189, 1620, 5191, 1619, 5191, 1612, 5193, 1599, 5197, 1589, 5201, 1581, 5201, 1572, 5201, 1564, 5205, 1555, 5209, 1549, 5211, 1549, 5211, 1516, 5221, 1498, 5226, 1481, 5235, 1444, 5255, 1419, 5288, 1412, 5296, 1396, 5321, 1385, 5338, 1372, 5349, 1364, 5355, 1346, 5379, 1329, 5402, 1321, 5407, 1333, 5459, 1351, 5494, 1363, 5517, 1401, 5577, 1431, 5629, 1526, 5701, 1559, 5725, 1602, 5774, 1646, 5825, 1671, 5844, 1672, 5844, 1738, 5911, 1783, 5957, 1807, 5957, 1816, 5957, 1925, 5877, L, 1994, 5833, Q, 2011, 5821, 2020, 5815, 2035, 5804, 2045, 5799, 2080, 5780, 2160, 5728, 2245, 5673, 2296, 5643, 2349, 5609, 2370, 5595, 2404, 5573, 2431, 5570, 2479, 5566, 2569, 5555, 2596, 5552, 2650, 5544, 2699, 5537, 2719, 5536, 2736, 5535, 2755, 5534, 2770, 5533, 2788, 5528, 2791, 5528, 2816, 5525, 2834, 5524, 2845, 5516, 2885, 5489, 2911, 5405, 2942, 5306, 2967, 5274, 2992, 5236, 3009, 5191, 3025, 5146, 3025, 5114, 3025, 5085, 2953, 5020, 2898, 4968, 2875, 4956, 2851, 4943, 2834, 4912, 2819, 4884, 2816, 4856, 2808, 4748, 2808, 4723, 2809, 4683, 2805, 4663, 2804, 4620, 2849, 4564, 2904, 4505, 2920, 4483, L, 2959, 4432, Q, 2945, 4418, 2819, 4303, 2814, 4297, 2804, 4285, 2793, 4270, 2791, 4268, 2781, 4257, 2758, 4236, 2710, 4192, 2693, 4174, 2691, 4173, 2691, 4172, 2684, 4168, 2675, 4159, 2662, 4145, 2650, 4137, 2637, 4128, 2618, 4109, 2598, 4090, 2570, 4058, 2542, 4027, 2517, 4004, 2490, 3981, 2474, 3963, 2457, 3944, 2442, 3936, 2426, 3927, 2411, 3914, 2395, 3900, 2388, 3893, 2364, 3871, 2358, 3847, Z]],
      "label": "Shiveegovi",
      "shortLabel": "SH",
      "labelPosition": [222.9, 509.8],
      "labelAlignment": [CEN, MID]
    },
    "MN.GS.SU": {
      "outlines": [[M, 3290, 201, Q, 3290, 243, 3277, 291, 3264, 339, 3238, 407, 3208, 510, 3165, 577, 3137, 628, 3120, 654, 3092, 698, 3056, 724, 3047, 731, 3018, 744, 2985, 760, 2967, 768, 2948, 776, 2929, 790, 2910, 803, 2881, 819, 2757, 878, 2462, 1036, 2212, 1170, 2167, 1191, L, 2169, 1272, Q, 2170, 1284, 2165, 1297, 2162, 1305, 2155, 1323, L, 2155, 1499, Q, 2152, 1501, 2152, 1509, 2151, 1519, 2149, 1523, 2144, 1537, 2144, 1544, L, 2144, 1739, Q, 2144, 1739, 2143, 1756, 2142, 1773, 2144, 1782, 2145, 1789, 2150, 1801, 2155, 1813, 2156, 1817, 2153, 1882, 2153, 1897, 2153, 1912, 2155, 1934, 2155, 1956, 2158, 1976, 2160, 1995, 2160, 2008, 2160, 2026, 2168, 2038, 2168, 2039, 2174, 2056, 2174, 2063, 2177, 2075, 2178, 2088, 2186, 2109, 2189, 2117, 2189, 2127, 2189, 2137, 2191, 2142, 2194, 2150, 2199, 2176, 2201, 2192, 2215, 2204, L, 2214, 2222, Q, 2214, 2238, 2217, 2245, 2221, 2255, 2224, 2275, 2226, 2284, 2231, 2301, 2236, 2316, 2235, 2326, 2235, 2335, 2241, 2354, 2248, 2374, 2248, 2381, 2249, 2396, 2253, 2408, 2259, 2420, 2259, 2429, 2259, 2443, 2253, 2449, 2251, 2452, 2231, 2464, 2222, 2469, 2211, 2479, 2199, 2490, 2193, 2496, L, 2192, 2496, Q, 2178, 2507, 2170, 2516, 2169, 2517, 2158, 2525, 2148, 2532, 2144, 2537, L, 2118, 2562, Q, 2114, 2565, 2106, 2570, 2098, 2574, 2095, 2577, 2093, 2580, 2083, 2584, 2074, 2589, 2070, 2595, L, 2045, 2622, Q, 2033, 2635, 2020, 2640, 2016, 2641, 2014, 2641, 2009, 2643, 2008, 2645, L, 1997, 2656, Q, 1989, 2663, 1973, 2679, 1962, 2691, 1952, 2698, L, 1938, 2702, Q, 1935, 2702, 1931, 2706, 1929, 2709, 1926, 2715, 1908, 2735, 1902, 2741, 1897, 2746, 1878, 2756, 1861, 2765, 1854, 2773, L, 1832, 2798, Q, 1828, 2803, 1822, 2809, 1819, 2812, 1813, 2814, L, 1808, 2814, Q, 1782, 2835, 1777, 2835, 1767, 2835, 1757, 2826, 1747, 2814, 1740, 2809, 1714, 2787, 1700, 2776, 1692, 2769, 1682, 2758, 1671, 2744, 1666, 2739, 1659, 2733, 1645, 2723, 1628, 2711, 1623, 2707, 1602, 2691, 1586, 2669, 1576, 2654, 1558, 2621, 1552, 2612, 1541, 2598, 1528, 2583, 1523, 2576, 1498, 2546, 1494, 2537, 1493, 2535, 1493, 2534, 1491, 2529, 1485, 2523, 1473, 2511, 1473, 2510, 1455, 2483, 1454, 2482, 1432, 2459, 1411, 2431, 1384, 2389, 1375, 2378, 1361, 2360, 1355, 2354, 1341, 2340, 1333, 2333, 1332, 2354, 1305, 2374, 1290, 2386, 1265, 2401, 1245, 2419, 1230, 2439, 1214, 2461, 1208, 2469, 1097, 2632, 1032, 2723, 967, 2814, 966, 2828, 963, 2842, 1052, 3023, 1141, 3204, 1142, 3204, 1165, 3254, 1217, 3329, 1247, 3371, 1308, 3459, 1322, 3481, 1350, 3522, 1375, 3560, 1390, 3587, 1398, 3601, 1426, 3646, 1449, 3688, 1449, 3711, 1449, 3719, 1437, 3744, 1429, 3761, 1425, 3767, 1424, 3770, 1423, 3771, 1414, 3796, 1373, 3918, 1335, 4027, 1305, 4094, 1271, 4169, 1251, 4257, 1239, 4309, 1220, 4411, 1220, 4429, 1216, 4472, 1214, 4483, 1214, 4508, 1214, 4522, 1212, 4530, 1210, 4535, 1204, 4551, 1197, 4575, 1196, 4594, 1195, 4600, 1195, 4626, 1195, 4645, 1184, 4659, 1178, 4668, 1161, 4683, 1149, 4696, 1113, 4741, 1084, 4777, 1064, 4796, 1035, 4825, 1023, 4866, 1013, 4896, 1016, 4929, 1041, 4975, 1089, 5050, 1116, 5091, 1163, 5162, 1191, 5207, 1242, 5298, 1287, 5374, 1319, 5402, 1320, 5404, 1321, 5407, 1329, 5402, 1346, 5379, 1364, 5355, 1372, 5349, 1385, 5338, 1396, 5321, 1412, 5296, 1419, 5288, 1444, 5255, 1481, 5235, 1498, 5226, 1516, 5221, 1549, 5211, 1549, 5211, 1555, 5209, 1564, 5205, 1572, 5201, 1581, 5201, 1589, 5201, 1599, 5197, 1612, 5193, 1619, 5191, 1620, 5191, 1634, 5189, 1645, 5187, 1651, 5184, 1658, 5180, 1663, 5172, 1668, 5161, 1671, 5155, 1704, 5096, 1710, 5078, 1714, 5067, 1728, 5041, 1738, 5024, 1738, 5010, 1741, 5006, 1744, 4994, 1746, 4983, 1747, 4982, 1756, 4957, 1760, 4950, 1766, 4938, 1779, 4918, 1792, 4899, 1795, 4893, 1812, 4860, 1829, 4849, 1836, 4843, 1850, 4827, 1862, 4814, 1869, 4811, 1890, 4801, 1914, 4774, 1949, 4734, 1959, 4725, 1968, 4717, 1986, 4708, 2004, 4698, 2012, 4690, L, 2048, 4648, Q, 2048, 4638, 2038, 4609, 2029, 4584, 2026, 4578, 2020, 4567, 2011, 4541, 2001, 4514, 1998, 4505, 1987, 4480, 1980, 4464, 1968, 4435, 1968, 4424, L, 2078, 4174, Q, 2093, 4135, 2102, 4116, 2117, 4084, 2135, 4069, 2206, 4010, 2226, 3976, L, 2226, 3975, Q, 2266, 3925, 2287, 3905, 2306, 3882, 2315, 3875, 2335, 3861, 2349, 3847, L, 2358, 3847, Q, 2364, 3871, 2388, 3893, 2395, 3900, 2411, 3914, 2426, 3927, 2442, 3936, 2457, 3944, 2474, 3963, 2490, 3981, 2517, 4004, 2542, 4027, 2570, 4058, 2598, 4090, 2618, 4109, 2637, 4128, 2650, 4137, 2662, 4145, 2675, 4159, 2684, 4168, 2691, 4172, 2691, 4173, 2693, 4174, 2710, 4192, 2758, 4236, 2781, 4257, 2791, 4268, 2793, 4270, 2804, 4285, 2814, 4297, 2819, 4303, 2945, 4418, 2959, 4432, L, 2989, 4391, Q, 3030, 4336, 3058, 4297, 3110, 4223, 3188, 4128, 3273, 4026, 3307, 3979, 3308, 3978, 3309, 3977, 3322, 3959, 3408, 3846, 3469, 3764, 3501, 3706, 3562, 3595, 3652, 3460, 3654, 3458, 3656, 3455, 3666, 3434, 3691, 3394, 3725, 3338, 3736, 3315, 3777, 3233, 3809, 3159, 3820, 3133, 3850, 3086, 3880, 3036, 3892, 3011, 3903, 2986, 3928, 2944, 3952, 2905, 3975, 2873, 3976, 2871, 3977, 2870, 3990, 2794, 3997, 2754, 4010, 2680, 4010, 2616, 4010, 2539, 4016, 2492, 4035, 2438, 4031, 2350, 4030, 2349, 4030, 2347, 4032, 2295, 4032, 2291, 4032, 2257, 4011, 2179, 3986, 2094, 3979, 2064, 3967, 2014, 3957, 1966, 3937, 1871, 3937, 1839, 3937, 1825, 3938, 1817, 3938, 1810, 3939, 1807, 3943, 1744, 3957, 1645, 3976, 1510, 3978, 1484, 3986, 1405, 4044, 1201, 4054, 1172, 4063, 1157, 4074, 1142, 4085, 1121, 4096, 1100, 4104, 1079, 4113, 1051, 4130, 1024, 4140, 1009, 4161, 975, 4167, 966, 4217, 889, 4264, 811, 4264, 785, 4264, 769, 4261, 752, 4259, 741, 4254, 735, 4245, 725, 4244, 722, 4227, 693, 4226, 692, 4214, 675, 4200, 675, 4159, 695, 4108, 718, 4007, 766, 3954, 785, 3930, 794, 3840, 819, 3743, 846, 3730, 846, 3712, 846, 3706, 839, 3701, 834, 3701, 817, 3701, 794, 3724, 662, 3743, 561, 3747, 536, 3749, 530, 3749, 529, 3754, 488, 3757, 468, 3762, 431, 3776, 393, 3779, 384, 3790, 313, 3801, 241, 3801, 226, 3801, 214, 3799, 197, 3797, 173, 3797, 170, 3796, 157, 3785, 155, 3782, 154, 3758, 154, 3734, 154, 3721, 159, 3695, 171, 3663, 179, 3659, 181, 3645, 181, 3631, 181, 3626, 182, 3620, 185, 3605, 194, 3594, 199, 3585, 199, 3561, 199, 3526, 145, 3491, 91, 3469, 90, 3438, 92, 3426, 93, 3404, 94, 3389, 86, 3375, 78, 3357, 56, 3344, 41, 3328, 41, 3307, 41, 3305, 63, 3299, 119, 3297, 124, 3293, 142, 3291, 163, Z]],
      "label": "SÃŒmber",
      "shortLabel": "SU",
      "labelPosition": [283.9, 272.4],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'govisumber',
  type: 'maps'
};

/***/ })

/******/ });
}));
