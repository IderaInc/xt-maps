
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(19);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 19:
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
 * @id fusionmaps.WesternSriLankaProvince.1.02-11-2019 08:03:10
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
  "name": "WesternSriLankaProvince",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 379,
  "baseHeight": 600,
  "baseScaleFactor": 10,
  "firstEntity": "LK.WE.CO",
  "entities": {
    "LK.WE.CO": {
      "outlines": [[M, 1349, 2335, Q, 1340, 2322, 1333, 2320, L, 634, 2320, Q, 623, 2316, 607, 2316, 588, 2316, 586, 2316, 579, 2314, 577, 2300, L, 574, 2279, Q, 572, 2276, 553, 2259, 539, 2248, 537, 2231, 529, 2189, 491, 2191, 417, 2195, 411, 2195, 413, 2219, 413, 2235, 413, 2250, 301, 2499, 308, 2517, 317, 2556, 330, 2589, 351, 2613, 373, 2639, 398, 2733, 426, 2795, 441, 2867, 465, 2980, 474, 3015, 529, 3230, 566, 3304, 572, 3315, 581, 3359, 610, 3359, 651, 3356, 690, 3352, 708, 3352, 747, 3352, 769, 3381, 789, 3413, 844, 3418, 857, 3418, 867, 3448, 867, 3450, 885, 3479, 896, 3499, 916, 3499, L, 959, 3499, Q, 1018, 3499, 1032, 3496, 1060, 3487, 1099, 3464, 1106, 3459, 1161, 3459, 1165, 3459, 1189, 3442, 1213, 3424, 1222, 3420, 1226, 3418, 1257, 3398, 1276, 3387, 1290, 3387, 1300, 3387, 1357, 3365, 1383, 3352, 1407, 3313, 1425, 3282, 1451, 3280, 1447, 3249, 1447, 3230, 1445, 3195, 1458, 3184, 1480, 3162, 1486, 3151, 1497, 3125, 1519, 3125, L, 1738, 3123, Q, 1749, 3088, 1760, 3083, 1766, 3081, 1816, 3081, 1862, 3081, 1867, 3083, 1878, 3088, 1886, 3123, 1886, 3125, 1893, 3157, 1897, 3162, 1923, 3171, 1924, 3173, 1930, 3190, 1935, 3206, 1943, 3210, 1946, 3210, 1956, 3214, 1967, 3217, 1970, 3223, 1991, 3256, 1996, 3289, L, 2004, 3291, 2017, 3289, 2017, 3278, Q, 2017, 3212, 1991, 3195, 1963, 3179, 1963, 3116, 1963, 3098, 1989, 3088, 2018, 3077, 2029, 3053, 2033, 3042, 2075, 3042, L, 2134, 3042, Q, 2134, 2996, 2144, 2983, L, 2345, 2983, Q, 2345, 3004, 2350, 3011, 2350, 3013, 2350, 3017, 2396, 3013, 2455, 3015, 2496, 3009, 2496, 2950, 2496, 2904, 2470, 2875, 2427, 2829, 2405, 2783, 2398, 2768, 2370, 2748, 2343, 2727, 2339, 2718, 2332, 2700, 2334, 2663, 2335, 2630, 2335, 2624, L, 2335, 2569, Q, 2332, 2545, 2341, 2536, 2348, 2530, 2370, 2525, 2380, 2521, 2392, 2501, 2407, 2478, 2411, 2477, 2427, 2469, 2435, 2464, 2446, 2456, 2442, 2436, 2415, 2386, 2505, 2390, 2608, 2394, 2608, 2353, 2608, 2289, 2590, 2285, 2568, 2279, 2562, 2209, 2531, 2211, 2486, 2204, 2435, 2196, 2409, 2193, 2400, 2143, 2381, 2112, 2378, 2106, 2376, 2099, 2260, 2084, 2120, 2084, 2111, 2084, 2090, 2097, 2079, 2104, 2063, 2115, 2037, 2126, 1998, 2134, 1976, 2138, 1956, 2180, 1935, 2224, 1915, 2228, 1906, 2228, 1884, 2237, 1862, 2246, 1858, 2252, 1849, 2259, 1849, 2283, 1851, 2296, 1851, 2316, 1845, 2353, 1814, 2366, 1782, 2379, 1782, 2394, 1782, 2401, 1788, 2434, L, 1788, 2449, Q, 1775, 2451, 1751, 2451, 1738, 2449, 1727, 2449, 1703, 2447, 1696, 2451, 1666, 2467, 1665, 2467, 1657, 2471, 1641, 2471, 1615, 2471, 1600, 2466, 1576, 2454, 1547, 2449, 1526, 2443, 1510, 2432, 1482, 2425, 1475, 2419, 1408, 2379, 1397, 2366, 1384, 2349, 1364, 2349, Q, 1359, 2349, 1349, 2335, Z]],
      "label": "Colombo Districts",
      "shortLabel": "CO",
      "labelPosition": [97, 285.8],
      "labelAlignment": [CEN, MID],
      "nextId": "LK.WE.GQ"
    },
    "LK.WE.GQ": {
      "outlines": [[M, 1665, 190, Q, 1646, 212, 1622, 252, 1606, 280, 1589, 291, 1582, 296, 1565, 298, 1548, 300, 1541, 304, 1519, 315, 1515, 331, 1512, 344, 1499, 344, 1480, 344, 1469, 322, 1456, 295, 1438, 289, 1403, 278, 1348, 243, L, 1184, 160, Q, 1099, 206, 996, 260, 791, 366, 675, 396, 651, 402, 612, 427, 575, 453, 548, 459, 539, 460, 478, 462, 428, 464, 404, 475, 247, 545, 166, 580, L, 159, 650, Q, 175, 713, 146, 742, 115, 772, 117, 809, 118, 846, 133, 883, 146, 918, 214, 945, 249, 958, 268, 1015, 273, 1032, 292, 1058, 308, 1076, 306, 1098, 303, 1129, 308, 1144, 312, 1157, 327, 1164, 341, 1172, 343, 1177, 347, 1190, 347, 1266, L, 347, 1363, Q, 349, 1408, 352, 1415, 354, 1422, 356, 1441, 358, 1459, 356, 1470, 352, 1480, 347, 1491, 339, 1502, 338, 1537, L, 317, 1537, Q, 312, 1531, 281, 1487, 255, 1452, 236, 1443, 212, 1432, 205, 1391, 196, 1351, 163, 1328, 142, 1316, 137, 1273, 131, 1216, 113, 1183, 94, 1150, 81, 1126, 69, 1100, 61, 1082, 52, 1096, 63, 1131, 74, 1164, 94, 1192, 113, 1220, 113, 1223, 120, 1247, 122, 1290, 122, 1330, 131, 1351, 164, 1428, 216, 1572, 244, 1655, 260, 1721, 281, 1800, 314, 1874, 358, 1973, 362, 1986, 380, 2040, 395, 2112, 406, 2160, 411, 2195, 417, 2195, 491, 2191, 529, 2189, 537, 2231, 539, 2248, 553, 2259, 572, 2276, 574, 2279, L, 577, 2300, Q, 579, 2314, 586, 2316, 588, 2316, 607, 2316, 623, 2316, 634, 2320, L, 1333, 2320, Q, 1340, 2322, 1349, 2335, 1359, 2349, 1364, 2349, 1384, 2349, 1397, 2366, 1408, 2379, 1475, 2419, 1482, 2425, 1510, 2432, 1526, 2443, 1547, 2449, 1576, 2454, 1600, 2466, 1615, 2471, 1641, 2471, 1657, 2471, 1665, 2467, 1666, 2467, 1696, 2451, 1703, 2447, 1727, 2449, 1738, 2449, 1751, 2451, 1775, 2451, 1788, 2449, L, 1788, 2434, Q, 1782, 2401, 1782, 2394, 1782, 2379, 1814, 2366, 1845, 2353, 1851, 2316, 1851, 2296, 1849, 2283, 1849, 2259, 1858, 2252, 1862, 2246, 1884, 2237, 1906, 2228, 1915, 2228, 1935, 2224, 1956, 2180, 1976, 2138, 1998, 2134, 2037, 2126, 2063, 2115, 2079, 2104, 2090, 2097, 2111, 2084, 2120, 2084, 2260, 2084, 2376, 2099, 2370, 2079, 2370, 2040, 2376, 1973, 2376, 1964, 2376, 1926, 2350, 1881, 2326, 1843, 2302, 1828, 2297, 1824, 2295, 1797, 2291, 1763, 2287, 1752, 2284, 1741, 2269, 1721, 2262, 1710, 2262, 1688, 2262, 1658, 2286, 1653, 2310, 1645, 2306, 1603, 2302, 1564, 2313, 1540, 2332, 1516, 2343, 1498, 2350, 1452, 2389, 1402, 2439, 1347, 2459, 1319, L, 2459, 1168, Q, 2418, 1163, 2392, 1150, 2372, 1141, 2341, 1141, 2298, 1141, 2289, 1155, 2280, 1168, 2219, 1168, 2168, 1168, 2158, 1164, 2134, 1152, 2140, 1096, 2144, 1054, 2144, 1035, 2140, 1004, 2118, 993, L, 2118, 986, Q, 2118, 967, 2157, 934, 2188, 910, 2197, 903, 2240, 884, 2265, 868, 2321, 835, 2321, 809, 2321, 800, 2313, 776, 2306, 752, 2306, 720, 2306, 682, 2297, 636, L, 2297, 589, 2317, 588, Q, 2321, 488, 2311, 425, 2271, 425, 2254, 405, 2228, 378, 2177, 365, 2155, 359, 2138, 337, 2116, 309, 2111, 306, 2035, 256, 2029, 250, 1991, 215, 1987, 175, 1982, 114, 1974, 97, 1958, 59, 1899, 48, 1843, 44, 1841, 44, Q, 1781, 44, 1665, 190, Z]],
      "label": "Gampaha Districts",
      "shortLabel": "GQ",
      "labelPosition": [125.8, 125.7],
      "labelAlignment": [CEN, MID],
      "nextId": "LK.WE.KT"
    },
    "LK.WE.KT": {
      "outlines": [[M, 2435, 3219, Q, 2424, 3193, 2413, 3170, 2404, 3149, 2398, 3135, 2370, 3072, 2339, 3046, L, 2339, 3017, Q, 2345, 3017, 2350, 3017, 2350, 3013, 2350, 3011, 2345, 3004, 2345, 2983, L, 2144, 2983, Q, 2134, 2996, 2134, 3042, L, 2075, 3042, Q, 2033, 3042, 2029, 3053, 2018, 3077, 1989, 3088, 1963, 3098, 1963, 3116, 1963, 3179, 1991, 3195, 2017, 3212, 2017, 3278, L, 2017, 3289, 2004, 3291, 1996, 3289, Q, 1991, 3256, 1970, 3223, 1967, 3217, 1956, 3214, 1946, 3210, 1943, 3210, 1935, 3206, 1930, 3190, 1924, 3173, 1923, 3171, 1897, 3162, 1893, 3157, 1886, 3125, 1886, 3123, 1878, 3088, 1867, 3083, 1862, 3081, 1816, 3081, 1766, 3081, 1760, 3083, 1749, 3088, 1738, 3123, L, 1519, 3125, Q, 1497, 3125, 1486, 3151, 1480, 3162, 1458, 3184, 1445, 3195, 1447, 3230, 1447, 3249, 1451, 3280, 1425, 3282, 1407, 3313, 1383, 3352, 1357, 3365, 1300, 3387, 1290, 3387, 1276, 3387, 1257, 3398, 1226, 3418, 1222, 3420, 1213, 3424, 1189, 3442, 1165, 3459, 1161, 3459, 1106, 3459, 1099, 3464, 1060, 3487, 1032, 3496, 1018, 3499, 959, 3499, L, 916, 3499, Q, 896, 3499, 885, 3479, 867, 3450, 867, 3448, 857, 3418, 844, 3418, 789, 3413, 769, 3381, 747, 3352, 708, 3352, 690, 3352, 651, 3356, 610, 3359, 581, 3359, 581, 3363, 583, 3369, 592, 3409, 610, 3428, 642, 3459, 664, 3544, 664, 3549, 664, 3553, 671, 3628, 699, 3687, 719, 3732, 787, 3848, 806, 3881, 852, 3991, 898, 4096, 942, 4143, 973, 4176, 992, 4209, 994, 4213, 1001, 4249, 1008, 4283, 1021, 4297, 1040, 4318, 1038, 4373, 1038, 4426, 1053, 4441, 1091, 4480, 1102, 4498, 1110, 4511, 1117, 4541, 1125, 4570, 1128, 4577, 1147, 4609, 1185, 4670, 1217, 4721, 1220, 4751, L, 1224, 4751, Q, 1231, 4777, 1265, 4876, 1301, 4981, 1301, 5001, 1301, 5046, 1279, 5081, 1257, 5116, 1257, 5151, 1257, 5206, 1301, 5274, 1325, 5313, 1372, 5381, 1381, 5399, 1410, 5420, 1432, 5433, 1442, 5458, 1486, 5427, 1480, 5409, 1515, 5405, 1523, 5394, 1528, 5383, 1554, 5383, 1598, 5383, 1639, 5409, 1685, 5438, 1685, 5479, 1707, 5466, 1718, 5486, 1733, 5514, 1762, 5514, 1794, 5514, 1801, 5516, 1814, 5519, 1838, 5545, L, 2087, 5562, 2216, 5698, Q, 2212, 5729, 2234, 5735, 2247, 5737, 2276, 5735, 2319, 5737, 2328, 5757, 2334, 5779, 2372, 5779, 2398, 5779, 2422, 5772, 2446, 5764, 2459, 5764, 2477, 5764, 2494, 5777, 2512, 5794, 2540, 5799, 2562, 5805, 2568, 5820, 2575, 5838, 2586, 5845, 2593, 5851, 2628, 5851, 2658, 5851, 2671, 5849, L, 2676, 5825, Q, 2680, 5809, 2693, 5805, 2702, 5801, 2735, 5794, 2754, 5788, 2765, 5775, 2800, 5727, 2829, 5698, 2833, 5692, 2850, 5691, 2875, 5689, 2879, 5689, 2903, 5681, 2910, 5646, 2977, 5646, 3001, 5680, 3014, 5698, 3039, 5735, 3126, 5796, 3135, 5809, 3159, 5840, 3220, 5891, 3264, 5926, 3272, 5962, L, 3294, 5962, Q, 3323, 5960, 3334, 5930, 3340, 5910, 3340, 5856, 3340, 5842, 3319, 5809, 3297, 5770, 3294, 5759, 3281, 5713, 3249, 5678, L, 3222, 5652, Q, 3222, 5622, 3249, 5598, 3288, 5562, 3297, 5549, 3316, 5516, 3345, 5516, 3362, 5514, 3402, 5519, 3441, 5519, 3472, 5479, 3500, 5433, 3507, 5422, 3528, 5394, 3570, 5374, 3618, 5353, 3649, 5337, 3651, 5337, 3653, 5335, 3662, 5329, 3670, 5322, 3677, 5313, 3681, 5309, 3688, 5302, 3719, 5302, 3729, 5302, 3738, 5304, 3751, 5256, 3751, 5252, 3751, 5235, 3681, 5182, 3603, 5123, 3598, 5116, 3544, 5036, 3474, 4913, 3450, 4871, 3406, 4819, 3342, 4742, 3321, 4714, 3312, 4701, 3233, 4624, 3200, 4590, 3200, 4528, 3200, 4487, 3218, 4461, 3235, 4437, 3227, 4384, 3211, 4325, 3137, 4246, 3098, 4200, 3080, 4179, 3050, 4146, 3019, 4139, 2960, 4122, 2920, 4058, 2881, 3984, 2868, 3960, 2859, 3942, 2809, 3886, 2756, 3827, 2741, 3809, 2671, 3724, 2632, 3687, 2599, 3656, 2580, 3616, 2577, 3604, 2556, 3544, 2512, 3448, 2486, 3394, 2464, 3345, 2455, 3306, Q, 2451, 3262, 2435, 3219, Z]],
      "label": "Kalutara Districts",
      "shortLabel": "KT",
      "labelPosition": [216.6, 447.2],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'westernsrilankaprovince',
  type: 'maps'
};

/***/ })

/******/ });
}));
