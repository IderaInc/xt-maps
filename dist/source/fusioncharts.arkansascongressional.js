
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
/******/ 	return __webpack_require__(__webpack_require__.s = 162);
/******/ })
/************************************************************************/
/******/ ({

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(163);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 163:
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
 * @id fusionmaps.ArkansasCongressional.18.08-06-2012 04:29:39
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
  "name": "ArkansasCongressional",
  "revision": 18,
  "standaloneInit": true,
  "baseWidth": 550,
  "baseHeight": 480,
  "baseScaleFactor": 10,
  "entities": {
    "1": {
      "outlines": [[M, 4192, 3224, Q, 4196, 3217, 4195, 3204, 4196, 3187, 4193, 3181, 4185, 3181, 4181, 3187, 4177, 3182, 4173, 3181, 4154, 3182, 4154, 3204, 4154, 3219, 4166, 3231, 4176, 3242, 4187, 3242, Q, 4187, 3231, 4192, 3224, Z], [M, 4491, 2554, Q, 4502, 2551, 4513, 2547, 4525, 2547, 4543, 2563, L, 4601, 2563, 4601, 2519, Q, 4588, 2497, 4581, 2490, 4571, 2478, 4546, 2478, 4525, 2478, 4523, 2491, 4519, 2511, 4491, 2525, Z], [M, 4623, 2371, Q, 4618, 2360, 4595, 2359, 4589, 2360, 4583, 2361, 4583, 2361, 4582, 2361, 4581, 2362, 4580, 2362, 4552, 2373, 4549, 2431, L, 4549, 2453, 4549, 2453, Q, 4568, 2454, 4582, 2465, 4616, 2464, 4624, 2443, 4626, 2437, 4626, 2409, Q, 4626, 2377, 4623, 2371, Z], [M, 4979, 204, L, 4979, 187, Q, 4929, 194, 4937, 160, 4924, 157, 4917, 157, 4896, 160, 4888, 160, 4885, 127, 4885, 55, 3344, 57, 2301, 58, 2306, 109, 2303, 191, L, 2303, 217, Q, 2302, 217, 2301, 218, 2297, 223, 2292, 222, 2286, 223, 2281, 224, 2276, 224, 2276, 249, 2276, 272, 2277, 281, 2277, 283, 2277, 283, L, 2277, 308, 2298, 308, Q, 2299, 307, 2299, 306, L, 2303, 306, Q, 2303, 313, 2304, 311, L, 2304, 319, Q, 2304, 320, 2298, 340, 2298, 355, 2303, 370, L, 2304, 388, Q, 2305, 398, 2362, 406, L, 2361, 415, 2363, 415, Q, 2364, 428, 2363, 464, 2365, 488, 2366, 496, 2367, 496, 2367, 497, 2370, 507, 2367, 518, 2367, 524, 2387, 526, 2407, 528, 2414, 530, 2420, 533, 2426, 533, 2430, 534, 2430, 544, 2430, 549, 2425, 570, L, 2425, 584, Q, 2425, 615, 2430, 615, 2430, 615, 2430, 646, L, 2431, 650, 2431, 665, Q, 2402, 669, 2378, 669, 2357, 669, 2323, 662, L, 2288, 654, Q, 2262, 651, 2241, 651, 2105, 650, 2081, 649, 2077, 660, 2072, 664, L, 1984, 664, Q, 1983, 606, 1981, 601, 1972, 582, 1918, 582, 1877, 582, 1861, 614, 1850, 637, 1838, 722, L, 1838, 1041, Q, 1839, 1046, 1839, 1047, 1840, 1055, 1842, 1064, 1845, 1076, 1848, 1093, 1866, 1126, 1937, 1138, L, 2202, 1138, 2202, 1025, Q, 2208, 1033, 2213, 1041, 2217, 1048, 2225, 1047, 2235, 1048, 2290, 1039, 2325, 1038, 2376, 1048, 2430, 1058, 2440, 1058, 2440, 1083, 2453, 1111, L, 2448, 1152, Q, 2553, 1152, 2610, 1155, 2611, 1164, 2610, 1293, 2609, 1359, 2623, 1458, L, 2623, 1461, Q, 2624, 1465, 2624, 1468, L, 2624, 1469, Q, 2624, 1504, 2625, 1552, 2625, 1596, 2619, 1621, L, 2640, 1621, Q, 2660, 1621, 2754, 1612, 2827, 1613, 2962, 1620, 3051, 1625, 3076, 1624, 3075, 1570, 3076, 1546, 3077, 1503, 3104, 1466, 3108, 1460, 3110, 1426, 3112, 1395, 3126, 1389, 3139, 1384, 3219, 1384, 3295, 1384, 3340, 1396, L, 3344, 1397, Q, 3341, 1403, 3341, 1409, 3341, 1442, 3352, 1522, 3382, 1522, 3528, 1527, L, 3564, 1527, 3597, 1515, Q, 3591, 1526, 3583, 1538, 3583, 1538, 3582, 1539, L, 3582, 1539, Q, 3566, 1564, 3542, 1596, 3541, 1598, 3528, 1601, 3517, 1605, 3512, 1618, 3509, 1625, 3509, 1662, 3509, 1695, 3512, 1701, 3514, 1704, 3524, 1706, 3536, 1707, 3539, 1714, 3547, 1727, 3564, 1746, 3570, 1754, 3570, 1778, 3570, 1794, 3545, 1827, 3532, 1835, 3521, 1841, 3514, 1845, 3511, 1848, 3505, 1853, 3507, 1855, 3478, 1888, 3490, 1976, 3474, 1979, 3413, 1979, 3410, 1979, 3407, 1980, 3362, 1986, 3344, 2033, 3340, 2046, 3334, 2066, 3328, 2081, 3319, 2081, 3288, 2081, 3278, 2054, 3272, 2037, 3259, 2034, 3247, 2035, 3247, 2034, L, 3253, 2023, Q, 3207, 2022, 3192, 2024, 3167, 2028, 3170, 2062, 3099, 2062, 3071, 2065, 2995, 2068, 2988, 2067, 2979, 2059, 2968, 2049, 2946, 2029, 2913, 2023, 2826, 2001, 2822, 2001, 2813, 2007, 2806, 2007, 2796, 2001, 2789, 2001, L, 2767, 2009, Q, 2769, 2020, 2758, 2040, 2747, 2061, 2759, 2084, 2798, 2102, 2806, 2103, 2804, 2120, 2825, 2172, 2815, 2201, 2814, 2222, 2813, 2244, 2802, 2247, 2792, 2250, 2802, 2588, 2802, 2590, 2802, 2592, 2795, 2624, 2792, 2627, L, 2792, 2641, Q, 2807, 2645, 2844, 2627, 2851, 2678, 2847, 2724, 2842, 2767, 2843, 2770, 2843, 2772, 2844, 2773, L, 2844, 2774, Q, 2844, 2774, 2844, 2774, 2850, 2782, 2871, 2783, 2877, 2784, 2968, 2784, 3033, 2784, 3119, 2792, 3159, 2795, 3224, 2802, 3224, 2802, 3224, 2803, 3225, 2804, 3225, 2808, 3225, 2923, 3227, 3137, 3277, 3137, 3396, 3140, 3444, 3141, 3441, 3181, 3441, 3192, 3437, 3216, 3435, 3237, 3440, 3248, 3451, 3248, 3470, 3250, 3473, 3256, 3473, 3275, L, 3528, 3275, Q, 3528, 3394, 3535, 3408, 3536, 3410, 3537, 3410, 3539, 3420, 3545, 3443, 3561, 3453, 3584, 3455, 3586, 3455, 3583, 3461, L, 3583, 3487, Q, 3600, 3488, 3630, 3476, 3631, 3477, 3666, 3486, 3709, 3496, 3757, 3496, L, 3757, 3515, 3815, 3515, Q, 3818, 3515, 3830, 3511, 3843, 3508, 3854, 3512, L, 3854, 3474, Q, 3854, 3442, 3851, 3438, 3846, 3428, 3812, 3432, L, 3812, 3366, Q, 3812, 3346, 3825, 3338, 3831, 3334, 3859, 3325, 3880, 3319, 3900, 3272, 3937, 3263, 3975, 3253, 3985, 3253, 3998, 3260, 4009, 3267, 4046, 3267, 4048, 3268, 4049, 3269, 4050, 3270, 4051, 3271, 4062, 3250, 4071, 3244, 4066, 3241, 4066, 3237, L, 4064, 3237, Q, 4066, 3236, 4063, 3231, L, 4069, 3231, Q, 4086, 3217, 4127, 3217, L, 4127, 3201, Q, 4099, 3168, 4096, 3164, 4085, 3145, 4091, 3115, L, 4082, 3121, Q, 4085, 3118, 4088, 3102, L, 4107, 3102, Q, 4111, 3106, 4136, 3118, 4159, 3132, 4160, 3146, 4162, 3146, 4170, 3144, 4171, 3143, 4172, 3143, 4172, 3143, 4172, 3143, 4177, 3134, 4193, 3102, 4209, 3071, 4220, 3060, 4248, 3036, 4284, 3038, 4295, 3038, 4299, 3033, 4304, 3027, 4303, 3002, 4304, 2989, 4284, 2969, 4263, 2951, 4259, 2947, 4273, 2939, 4295, 2939, 4310, 2939, 4326, 2949, 4342, 2958, 4355, 2958, 4374, 2958, 4428, 2903, 4429, 2902, 4469, 2878, 4479, 2873, 4488, 2845, L, 4488, 2809, Q, 4481, 2810, 4471, 2804, 4461, 2798, 4455, 2798, L, 4455, 2767, 4456, 2762, 4456, 2762, Q, 4458, 2756, 4459, 2749, 4464, 2720, 4469, 2699, 4475, 2699, 4474, 2701, L, 4524, 2701, Q, 4511, 2676, 4499, 2630, 4473, 2633, 4464, 2621, 4463, 2618, 4455, 2594, L, 4455, 2561, Q, 4457, 2561, 4459, 2560, 4452, 2520, 4475, 2489, 4486, 2475, 4499, 2466, L, 4496, 2401, Q, 4525, 2354, 4532, 2346, L, 4582, 2346, 4582, 2318, Q, 4585, 2291, 4585, 2224, L, 4629, 2224, Q, 4633, 2231, 4639, 2271, 4642, 2291, 4654, 2297, 4656, 2298, 4659, 2298, 4661, 2297, 4663, 2296, 4669, 2293, 4678, 2292, 4687, 2288, 4689, 2279, 4709, 2274, 4719, 2263, 4726, 2263, 4738, 2259, L, 4781, 2259, 4781, 2239, Q, 4780, 2231, 4796, 2224, 4809, 2218, 4818, 2218, L, 4818, 2210, Q, 4816, 2156, 4814, 2144, 4806, 2100, 4783, 2100, 4728, 2100, 4735, 2052, 4745, 2043, 4763, 2041, 4773, 2040, 4808, 2040, 4841, 2040, 4861, 2037, L, 4879, 2037, Q, 4878, 2030, 4878, 2019, 4886, 2000, 4886, 1960, 4884, 1930, 4885, 1922, 4885, 1910, 4902, 1910, L, 5003, 1913, Q, 5013, 1913, 5019, 1912, 5024, 1862, 5010, 1832, 5009, 1828, 4989, 1810, 4983, 1805, 4977, 1778, 4977, 1777, 4976, 1776, 4976, 1771, 4976, 1767, 4981, 1741, 4978, 1731, 4974, 1714, 4937, 1717, 4879, 1723, 4879, 1691, 4879, 1679, 4882, 1676, 4885, 1676, 4915, 1669, 4946, 1662, 4964, 1662, L, 4964, 1635, Q, 4960, 1602, 5000, 1560, L, 5000, 1541, Q, 4896, 1497, 4896, 1496, 4896, 1453, 4928, 1453, 4934, 1453, 4941, 1458, 4967, 1458, 4987, 1442, 4989, 1444, 5012, 1483, 5036, 1522, 5042, 1522, 5058, 1522, 5061, 1508, 5061, 1488, 5061, 1477, 5061, 1443, 5044, 1422, 5028, 1401, 5028, 1373, 5028, 1349, 5030, 1345, 5032, 1340, 5050, 1318, 5050, 1326, 5054, 1326, 5068, 1326, 5089, 1315, 5091, 1315, 5108, 1323, 5112, 1323, 5160, 1386, L, 5166, 1384, Q, 5154, 1353, 5135, 1265, L, 5133, 1260, Q, 5146, 1248, 5184, 1242, 5214, 1237, 5218, 1182, 5214, 1183, 5210, 1183, L, 5210, 1183, Q, 5161, 1183, 5143, 1163, 5128, 1146, 5128, 1104, 5128, 1095, 5134, 1088, 5141, 1079, 5144, 1061, 5177, 1061, 5243, 1047, 5285, 1048, 5295, 1017, 5301, 997, 5293, 978, 5315, 975, 5358, 979, 5390, 978, 5390, 944, 5390, 924, 5355, 905, 5321, 887, 5321, 875, 5321, 841, 5369, 841, 5384, 841, 5417, 874, L, 5436, 874, 5436, 802, Q, 5417, 799, 5401, 781, 5384, 757, 5375, 744, 5340, 698, 5279, 711, L, 5279, 681, Q, 5244, 678, 5237, 678, 5218, 678, 5218, 686, 5220, 707, 5217, 719, 5216, 721, 5216, 722, 5219, 727, 5194, 719, 5015, 711, 4827, 711, 4786, 711, 4778, 732, 4769, 753, 4730, 752, 4659, 753, 4659, 711, 4659, 631, 4772, 563, 4775, 551, 4781, 544, 4783, 541, 4785, 538, 4788, 527, 4793, 503, 4799, 475, 4813, 469, 4815, 468, 4831, 457, 4840, 451, 4852, 452, 4875, 453, 4884, 437, 4884, 430, 4886, 429, 4944, 381, 4950, 374, 4976, 348, 4976, 318, 4973, 287, 4972, 268, Q, 4970, 233, 4979, 204, Z]],
      "label": "1st district",
      "shortLabel": "1st",
      "labelPosition": [363.7, 87.3],
      "labelAlignment": [CEN, MID]
    },
    "2": {
      "outlines": [[M, 2376, 1048, Q, 2325, 1038, 2290, 1039, 2235, 1048, 2225, 1048, 2217, 1048, 2213, 1042, 2208, 1033, 2202, 1026, L, 2202, 1139, 1988, 1139, Q, 1987, 1163, 1998, 1192, 2009, 1220, 2009, 1226, 2009, 1244, 1990, 1306, 1972, 1365, 1965, 1376, L, 1968, 1898, Q, 1963, 1899, 1962, 1899, 1920, 1885, 1775, 1888, 1772, 1888, 1771, 1887, 1764, 1895, 1764, 1910, L, 1775, 1910, 1775, 1955, Q, 1754, 1979, 1743, 1979, 1732, 1979, 1703, 1956, 1674, 1934, 1667, 1921, 1621, 1852, 1599, 1811, L, 1604, 1807, Q, 1591, 1786, 1585, 1781, 1549, 1776, 1532, 1762, 1530, 1760, 1504, 1721, 1488, 1697, 1476, 1687, 1473, 1686, 1470, 1684, 1468, 1684, 1467, 1685, L, 1466, 1704, Q, 1466, 1727, 1468, 1781, 1468, 1824, 1452, 1833, 1402, 1833, 1350, 1838, 1248, 1847, 1224, 1883, 1220, 1889, 1214, 1904, 1206, 1916, 1188, 1916, 1102, 1935, 1094, 1935, 1024, 1953, 1022, 1955, 1008, 1963, 1004, 1985, 998, 2008, 1006, 2470, L, 1031, 2470, Q, 1098, 2482, 1182, 2482, 1293, 2480, 1367, 2487, L, 1367, 2456, Q, 1364, 2445, 1361, 2442, L, 1361, 2437, Q, 1363, 2437, 1367, 2438, 1393, 2440, 1497, 2434, 1605, 2427, 1684, 2442, L, 1684, 2415, Q, 1753, 2415, 1786, 2412, L, 1830, 2412, Q, 1830, 2414, 1833, 2421, 1833, 2422, 1833, 2423, L, 1833, 2424, Q, 1833, 2426, 1833, 2427, 1833, 2462, 1830, 2484, 1828, 2504, 1818, 2519, 1807, 2535, 1805, 2544, L, 1805, 2586, Q, 1827, 2591, 1909, 2591, 1975, 2599, 1949, 2655, 1957, 2654, 1977, 2660, 1998, 2666, 2017, 2666, 2018, 2686, 2017, 2721, 2017, 2743, 2021, 2758, 2019, 2759, 2015, 2760, L, 2015, 2795, 2034, 2795, Q, 2068, 2787, 2069, 2787, 2082, 2787, 2083, 2789, 2084, 2791, 2084, 2809, 2140, 2789, 2140, 2827, 2140, 2831, 2137, 2863, 2134, 2886, 2139, 2897, 2152, 2897, 2169, 2903, L, 2213, 2903, Q, 2208, 2859, 2257, 2861, L, 2257, 2853, Q, 2257, 2841, 2246, 2831, 2269, 2840, 2303, 2840, 2400, 2839, 2454, 2842, 2443, 2788, 2492, 2785, 2526, 2784, 2638, 2790, 2781, 2783, 2842, 2776, L, 2845, 2774, 2844, 2774, 2844, 2773, Q, 2843, 2772, 2843, 2770, 2842, 2767, 2847, 2724, 2851, 2678, 2844, 2627, 2807, 2645, 2792, 2641, L, 2792, 2627, Q, 2795, 2624, 2802, 2592, 2802, 2590, 2802, 2589, 2792, 2250, 2803, 2247, 2813, 2244, 2814, 2222, 2815, 2201, 2825, 2172, 2804, 2120, 2806, 2103, 2798, 2102, 2759, 2084, 2747, 2061, 2758, 2040, 2769, 2020, 2767, 2010, L, 2789, 2001, Q, 2796, 2001, 2806, 2007, 2813, 2007, 2822, 2001, 2826, 2001, 2913, 2023, 2946, 2029, 2968, 2049, 2979, 2059, 2988, 2068, 2995, 2068, 3071, 2065, 3099, 2062, 3170, 2062, 3167, 2028, 3192, 2024, 3207, 2022, 3253, 2023, L, 3247, 2034, Q, 3247, 2035, 3259, 2034, 3272, 2037, 3278, 2054, 3288, 2081, 3319, 2081, 3328, 2081, 3334, 2066, 3340, 2046, 3344, 2033, 3362, 1986, 3407, 1980, 3410, 1979, 3413, 1979, 3474, 1979, 3490, 1977, 3478, 1888, 3507, 1855, 3505, 1853, 3511, 1848, 3514, 1845, 3521, 1842, 3532, 1835, 3545, 1828, 3570, 1794, 3570, 1778, 3570, 1754, 3564, 1747, 3547, 1727, 3540, 1715, 3536, 1707, 3525, 1706, 3514, 1704, 3512, 1701, 3509, 1695, 3509, 1662, 3509, 1625, 3512, 1618, 3517, 1605, 3529, 1602, 3541, 1598, 3542, 1596, 3566, 1564, 3582, 1539, 3583, 1538, 3583, 1538, 3591, 1526, 3597, 1516, L, 3564, 1527, 3529, 1527, Q, 3382, 1522, 3352, 1522, 3341, 1442, 3341, 1409, 3341, 1403, 3344, 1398, L, 3341, 1396, Q, 3295, 1384, 3219, 1384, 3139, 1384, 3126, 1389, 3112, 1395, 3110, 1426, 3108, 1460, 3104, 1467, 3077, 1503, 3076, 1547, 3075, 1570, 3077, 1625, 3051, 1625, 2962, 1620, 2827, 1613, 2754, 1613, 2660, 1621, 2640, 1621, L, 2619, 1621, Q, 2625, 1596, 2625, 1552, 2624, 1504, 2624, 1469, L, 2624, 1469, Q, 2624, 1465, 2623, 1461, L, 2623, 1459, Q, 2609, 1359, 2610, 1294, 2611, 1164, 2611, 1155, 2553, 1152, 2448, 1152, L, 2454, 1111, Q, 2440, 1083, 2440, 1059, Q, 2430, 1058, 2376, 1048, Z]],
      "label": "2nd district",
      "shortLabel": "2nd",
      "labelPosition": [229.9, 196.4],
      "labelAlignment": [CEN, MID]
    },
    "3": {
      "outlines": [[M, 2281, 224, Q, 2286, 223, 2292, 222, 2297, 223, 2301, 218, 2302, 217, 2303, 217, L, 2303, 191, Q, 2306, 109, 2301, 58, 132, 59, 121, 55, L, 63, 55, Q, 71, 166, 239, 1770, 239, 1773, 239, 1776, 243, 1836, 235, 1905, 226, 1984, 206, 2029, L, 197, 2203, 203, 2203, Q, 195, 2197, 287, 2161, 314, 2161, 325, 2169, L, 443, 2169, Q, 451, 2144, 454, 2110, 458, 2073, 463, 2054, 452, 2034, 470, 2008, 489, 1980, 512, 1996, L, 543, 1996, 543, 1916, 581, 1916, Q, 611, 1928, 655, 1925, L, 656, 1925, Q, 656, 1904, 660, 1873, 667, 1836, 667, 1822, L, 796, 1822, Q, 799, 1734, 799, 1692, L, 837, 1692, Q, 851, 1697, 893, 1706, L, 917, 1706, 917, 1657, 915, 1643, 915, 1590, Q, 918, 1591, 917, 1588, 941, 1597, 948, 1596, 955, 1623, 965, 1627, 969, 1629, 993, 1629, 1027, 1629, 1030, 1625, 1040, 1617, 1036, 1568, 1054, 1582, 1063, 1582, 1086, 1574, 1088, 1571, 1107, 1580, 1105, 1597, 1105, 1623, 1108, 1629, 1206, 1629, 1196, 1599, L, 1196, 1582, 1256, 1582, Q, 1310, 1572, 1327, 1600, 1332, 1608, 1338, 1624, 1345, 1636, 1356, 1640, 1370, 1646, 1389, 1676, 1395, 1682, 1453, 1682, 1460, 1680, 1467, 1684, L, 1467, 1685, Q, 1468, 1684, 1470, 1684, 1473, 1686, 1476, 1687, 1488, 1697, 1504, 1721, 1530, 1760, 1532, 1761, 1549, 1776, 1584, 1781, 1591, 1786, 1604, 1806, L, 1598, 1811, Q, 1621, 1852, 1667, 1921, 1674, 1934, 1703, 1956, 1732, 1979, 1743, 1979, 1754, 1979, 1775, 1954, L, 1775, 1910, 1764, 1910, Q, 1764, 1895, 1770, 1886, 1772, 1888, 1775, 1888, 1920, 1885, 1962, 1899, 1963, 1899, 1968, 1898, L, 1965, 1375, Q, 1972, 1365, 1990, 1306, 2009, 1244, 2009, 1225, 2009, 1220, 1998, 1191, 1987, 1163, 1988, 1138, L, 1937, 1138, Q, 1866, 1126, 1848, 1093, 1845, 1076, 1842, 1064, 1840, 1055, 1839, 1047, 1839, 1046, 1838, 1041, L, 1838, 722, Q, 1850, 637, 1861, 614, 1877, 582, 1918, 582, 1972, 582, 1981, 601, 1983, 606, 1984, 664, L, 2072, 664, Q, 2077, 660, 2081, 649, 2105, 650, 2241, 651, 2262, 651, 2288, 654, L, 2323, 662, Q, 2357, 669, 2378, 669, 2402, 669, 2431, 665, L, 2431, 650, 2430, 646, Q, 2430, 615, 2430, 615, 2425, 615, 2425, 584, L, 2425, 570, Q, 2430, 549, 2430, 544, 2430, 534, 2426, 533, 2420, 533, 2414, 530, 2407, 528, 2387, 526, 2367, 524, 2367, 518, 2370, 507, 2367, 497, 2367, 496, 2366, 496, 2365, 488, 2363, 464, 2364, 428, 2363, 415, L, 2361, 415, 2362, 406, Q, 2305, 398, 2304, 388, L, 2303, 370, Q, 2298, 355, 2298, 340, 2304, 320, 2304, 319, L, 2304, 311, Q, 2303, 313, 2303, 306, L, 2299, 306, Q, 2299, 307, 2298, 308, L, 2277, 308, 2277, 283, Q, 2277, 283, 2277, 281, 2276, 272, 2276, 249, Q, 2276, 224, 2281, 224, Z]],
      "label": "3rd district",
      "shortLabel": "3rd",
      "labelPosition": [95.9, 74.5],
      "labelAlignment": [CEN, MID]
    },
    "4": {
      "outlines": [[M, 3994, 3534, Q, 3997, 3540, 3997, 3554, 4008, 3554, 4011, 3551, 4017, 3526, 4027, 3498, 4032, 3483, 4036, 3468, L, 4036, 3465, Q, 4010, 3461, 3990, 3460, 3970, 3482, 3978, 3493, Q, 3986, 3504, 3994, 3534, Z], [M, 2638, 2790, Q, 2526, 2784, 2492, 2785, 2443, 2788, 2454, 2842, 2400, 2839, 2302, 2840, 2269, 2840, 2246, 2831, 2257, 2841, 2257, 2853, L, 2257, 2861, Q, 2208, 2859, 2213, 2903, L, 2169, 2903, Q, 2152, 2897, 2139, 2897, 2134, 2886, 2137, 2863, 2140, 2831, 2140, 2826, 2140, 2789, 2083, 2809, 2084, 2791, 2083, 2788, 2082, 2787, 2069, 2787, 2068, 2787, 2034, 2795, L, 2014, 2795, 2014, 2760, Q, 2019, 2759, 2020, 2758, 2017, 2743, 2017, 2721, 2018, 2686, 2017, 2665, 1998, 2666, 1977, 2660, 1957, 2654, 1948, 2654, 1975, 2599, 1909, 2590, 1827, 2591, 1805, 2586, L, 1805, 2544, Q, 1807, 2535, 1818, 2518, 1828, 2504, 1830, 2484, 1833, 2462, 1833, 2427, 1833, 2426, 1833, 2423, L, 1833, 2423, Q, 1833, 2422, 1833, 2421, 1830, 2414, 1830, 2412, L, 1786, 2412, Q, 1753, 2415, 1684, 2415, L, 1684, 2442, Q, 1605, 2427, 1497, 2434, 1393, 2440, 1367, 2437, 1363, 2437, 1361, 2437, L, 1361, 2442, Q, 1364, 2445, 1367, 2456, L, 1367, 2486, Q, 1293, 2480, 1181, 2481, 1098, 2482, 1030, 2470, L, 1006, 2470, Q, 998, 2008, 1003, 1985, 1008, 1963, 1022, 1954, 1024, 1953, 1094, 1935, 1102, 1935, 1188, 1916, 1206, 1916, 1213, 1904, 1220, 1889, 1223, 1883, 1248, 1847, 1350, 1838, 1402, 1833, 1452, 1833, 1468, 1824, 1468, 1781, 1466, 1727, 1466, 1704, L, 1467, 1685, 1467, 1684, Q, 1460, 1680, 1453, 1682, 1395, 1682, 1389, 1676, 1370, 1646, 1356, 1640, 1345, 1636, 1338, 1624, 1332, 1608, 1327, 1600, 1310, 1572, 1256, 1582, L, 1196, 1582, 1196, 1599, Q, 1206, 1629, 1108, 1629, 1105, 1623, 1105, 1597, 1107, 1580, 1088, 1571, 1086, 1574, 1063, 1582, 1054, 1582, 1036, 1568, 1040, 1617, 1030, 1625, 1027, 1629, 993, 1629, 969, 1629, 965, 1627, 955, 1623, 948, 1596, 941, 1597, 917, 1588, 918, 1591, 915, 1590, L, 915, 1643, 917, 1657, 917, 1706, 893, 1706, Q, 851, 1697, 837, 1692, L, 799, 1692, Q, 799, 1734, 796, 1822, L, 667, 1822, Q, 667, 1836, 660, 1873, 656, 1904, 656, 1925, L, 655, 1925, Q, 611, 1928, 581, 1916, L, 543, 1916, 543, 1996, 512, 1996, Q, 489, 1980, 470, 2008, 452, 2034, 463, 2054, 458, 2073, 454, 2110, 451, 2144, 443, 2169, L, 325, 2169, Q, 314, 2161, 287, 2161, 195, 2197, 203, 2203, L, 197, 2203, 113, 3937, Q, 133, 3943, 150, 3974, 170, 4010, 184, 4020, 196, 4029, 248, 4044, 297, 4059, 308, 4059, 336, 4059, 398, 4034, 459, 4009, 463, 4009, 494, 4009, 498, 4053, L, 606, 4053, Q, 606, 4081, 606, 4130, 606, 4193, 606, 4290, L, 606, 4776, Q, 615, 4778, 3875, 4786, 3880, 4786, 3883, 4786, L, 3876, 4772, 3876, 4769, Q, 3898, 4769, 3906, 4772, L, 3906, 4731, Q, 3882, 4716, 3851, 4679, 3818, 4639, 3818, 4617, 3818, 4615, 3832, 4601, L, 3870, 4601, 3870, 4626, 3942, 4626, Q, 3948, 4605, 3947, 4604, 3948, 4589, 3942, 4570, 3936, 4552, 3936, 4531, 3938, 4514, 3939, 4502, 3938, 4493, 3938, 4485, 3937, 4460, 3939, 4449, 3927, 4455, 3907, 4434, 3888, 4415, 3884, 4400, 3862, 4350, 3862, 4336, 3862, 4321, 3874, 4308, 3879, 4308, 3885, 4305, 3889, 4304, 3892, 4301, 3893, 4301, 3894, 4300, 3909, 4291, 3909, 4282, 3909, 4279, 3915, 4275, L, 3913, 4275, Q, 3913, 4275, 3912, 4275, L, 3910, 4275, 3913, 4271, 3907, 4266, Q, 3911, 4259, 3929, 4239, 3935, 4232, 3935, 4211, 3935, 4204, 3913, 4177, 3888, 4146, 3887, 4143, 3877, 4123, 3850, 4104, 3847, 4102, 3844, 4100, 3822, 4080, 3810, 4076, 3774, 4064, 3774, 4039, 3774, 4034, 3828, 4023, 3881, 4014, 3881, 3988, 3881, 3981, 3829, 3915, 3817, 3899, 3790, 3891, 3771, 3886, 3771, 3864, 3771, 3835, 3825, 3835, 3872, 3835, 3961, 3931, 3986, 3931, 3986, 3904, 3986, 3884, 3968, 3855, 3951, 3827, 3939, 3824, 3939, 3824, 3877, 3821, 3848, 3819, 3848, 3796, 3848, 3779, 3865, 3766, 3882, 3752, 3908, 3752, 3914, 3752, 3931, 3758, L, 3958, 3758, Q, 3960, 3758, 3961, 3757, 3978, 3756, 4008, 3766, 4020, 3766, 4030, 3752, 4039, 3741, 4038, 3736, 4038, 3719, 3996, 3702, 3981, 3696, 3972, 3692, 3971, 3692, 3970, 3691, 3953, 3684, 3956, 3677, 3939, 3660, 3939, 3639, 3939, 3624, 3975, 3593, 3987, 3583, 3994, 3576, 3991, 3566, 3988, 3557, 3978, 3532, 3967, 3523, 3957, 3518, 3939, 3495, 3917, 3468, 3917, 3452, 3917, 3428, 3972, 3429, 4034, 3430, 4050, 3421, 4063, 3398, 4096, 3402, 4112, 3404, 4127, 3396, 4136, 3392, 4149, 3383, L, 4149, 3306, Q, 4118, 3304, 4105, 3301, 4087, 3297, 4051, 3271, 4050, 3270, 4049, 3269, 4048, 3268, 4046, 3267, 4009, 3267, 3998, 3260, 3985, 3253, 3975, 3253, 3937, 3263, 3900, 3272, 3880, 3319, 3859, 3325, 3831, 3334, 3825, 3338, 3812, 3346, 3812, 3366, L, 3812, 3432, Q, 3846, 3428, 3851, 3438, 3854, 3442, 3854, 3474, L, 3854, 3512, Q, 3843, 3508, 3830, 3511, 3818, 3515, 3815, 3515, L, 3757, 3515, 3757, 3496, Q, 3709, 3496, 3666, 3486, 3631, 3477, 3630, 3476, 3600, 3488, 3583, 3487, L, 3583, 3461, Q, 3586, 3455, 3584, 3455, 3561, 3453, 3545, 3443, 3539, 3420, 3537, 3410, 3536, 3410, 3535, 3408, 3528, 3394, 3528, 3275, L, 3473, 3275, Q, 3473, 3256, 3470, 3250, 3451, 3248, 3440, 3248, 3435, 3237, 3437, 3216, 3441, 3192, 3441, 3181, 3444, 3141, 3396, 3140, 3277, 3137, 3227, 3137, 3225, 2923, 3225, 2808, 3225, 2804, 3224, 2803, 3224, 2802, 3224, 2802, 3159, 2795, 3119, 2792, 3033, 2784, 2968, 2784, 2877, 2784, 2871, 2783, 2850, 2782, 2844, 2774, L, 2842, 2776, Q, 2781, 2783, 2638, 2790, Z]],
      "label": "4th district",
      "shortLabel": "4th",
      "labelPosition": [213.1, 375.3],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'arkansascongressional',
  type: 'maps'
};

/***/ })

/******/ });
}));
