
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
/******/ 	return __webpack_require__(__webpack_require__.s = 446);
/******/ })
/************************************************************************/
/******/ ({

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(447);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 447:
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
 * @id fusionmaps.Extremadura.1.04-03-2017 11:58:22
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
  "name": "Extremadura",
  "revision": 1,
  "standaloneInit": true,
  "baseWidth": 346,
  "baseHeight": 400,
  "baseScaleFactor": 10,
  "entities": {
    "ES.EX.BA": {
      "outlines": [[M, 2848, 1821, Q, 2844, 1827, 2842, 1832, 2836, 1857, 2818, 1879, 2814, 1886, 2812, 1891, 2805, 1913, 2779, 1912, 2742, 1911, 2709, 1900, 2665, 1886, 2640, 1902, 2606, 1926, 2588, 1978, 2566, 2044, 2529, 2052, 2457, 2069, 2372, 2029, 2353, 2059, 2339, 2092, 2328, 2120, 2320, 2149, 2307, 2197, 2263, 2206, 2254, 2208, 2247, 2213, 2228, 2227, 2213, 2199, 2210, 2194, 2203, 2190, 2156, 2166, 2126, 2110, 2120, 2114, 2116, 2118, 2082, 2168, 2035, 2188, 2035, 2183, 2032, 2179, 2031, 2173, 2024, 2171, 2016, 2168, 2009, 2162, 1994, 2150, 1966, 2153, 1961, 2154, 1954, 2155, 1946, 2158, 1939, 2162, 1925, 2172, 1914, 2186, 1907, 2194, 1900, 2201, 1884, 2221, 1845, 2235, 1837, 2238, 1832, 2242, 1812, 2261, 1797, 2238, 1801, 2217, 1807, 2198, 1819, 2147, 1778, 2136, 1768, 2133, 1764, 2136, 1749, 2149, 1730, 2160, 1723, 2164, 1720, 2169, 1717, 2179, 1713, 2186, 1706, 2195, 1697, 2216, 1665, 2281, 1617, 2294, 1609, 2297, 1605, 2293, 1594, 2278, 1588, 2257, 1585, 2248, 1577, 2241, 1540, 2204, 1500, 2168, 1496, 2164, 1495, 2158, 1489, 2110, 1463, 2084, 1459, 2078, 1456, 2072, 1453, 2066, 1451, 2062, 1446, 2055, 1440, 2051, 1426, 2040, 1412, 2041, 1361, 2045, 1310, 2056, 1268, 2066, 1224, 2062, 1148, 2055, 1074, 2044, 1044, 2040, 1013, 2036, 939, 2026, 873, 1993, 861, 1986, 865, 1964, 880, 1902, 914, 1847, 921, 1836, 935, 1812, 903, 1805, 895, 1752, 891, 1728, 877, 1724, 826, 1703, 770, 1686, 691, 1664, 620, 1669, 613, 1669, 601, 1711, 588, 1762, 566, 1806, 558, 1802, 550, 1799, 543, 1798, 540, 1791, 525, 1750, 469, 1703, 442, 1750, 445, 1802, 447, 1829, 438, 1851, 434, 1862, 426, 1868, 419, 1872, 414, 1876, 368, 1911, 331, 1871, 330, 1869, 328, 1868, 321, 1901, 323, 1941, 323, 1981, 350, 1992, 381, 2004, 411, 2016, 420, 2021, 429, 2023, 436, 2026, 438, 2032, 455, 2065, 447, 2110, 445, 2120, 452, 2128, 470, 2150, 500, 2133, 508, 2129, 518, 2127, 544, 2120, 570, 2113, 590, 2109, 609, 2105, 613, 2105, 620, 2106, 635, 2113, 638, 2129, 658, 2234, 638, 2329, 628, 2377, 591, 2426, 548, 2481, 500, 2525, 430, 2590, 359, 2655, 310, 2699, 298, 2766, 286, 2828, 264, 2882, 247, 2927, 202, 2961, 192, 2968, 185, 2976, 181, 2982, 178, 2990, 177, 2997, 174, 3003, 167, 3022, 161, 3041, 158, 3051, 156, 3060, 155, 3110, 191, 3133, 202, 3140, 206, 3158, 207, 3165, 210, 3172, 225, 3206, 239, 3241, 246, 3260, 257, 3276, 261, 3285, 269, 3290, 310, 3326, 332, 3368, 361, 3426, 394, 3500, 420, 3557, 462, 3604, 480, 3622, 507, 3613, 529, 3606, 550, 3601, 564, 3597, 577, 3593, 590, 3590, 598, 3586, 599, 3584, 602, 3584, 606, 3582, 610, 3579, 634, 3562, 669, 3550, 678, 3547, 687, 3546, 719, 3540, 731, 3553, 737, 3557, 746, 3558, 781, 3564, 796, 3602, 807, 3627, 830, 3638, 856, 3652, 885, 3652, 891, 3652, 895, 3652, 900, 3652, 907, 3653, 964, 3668, 980, 3707, 991, 3733, 990, 3745, 990, 3755, 988, 3765, 988, 3796, 1002, 3807, 1010, 3814, 1017, 3821, 1037, 3837, 1064, 3839, 1070, 3840, 1074, 3840, 1119, 3844, 1163, 3848, 1189, 3851, 1193, 3835, 1220, 3811, 1261, 3792, 1277, 3785, 1299, 3799, 1324, 3814, 1336, 3828, 1367, 3864, 1396, 3901, 1401, 3909, 1409, 3916, 1427, 3932, 1451, 3932, 1492, 3931, 1521, 3954, 1529, 3961, 1536, 3968, 1537, 3947, 1551, 3932, 1559, 3923, 1570, 3921, 1590, 3919, 1609, 3916, 1698, 3908, 1782, 3877, 1808, 3868, 1821, 3840, 1823, 3833, 1821, 3824, 1812, 3780, 1829, 3755, 1836, 3744, 1841, 3726, 1849, 3701, 1859, 3688, 1874, 3666, 1896, 3670, 1902, 3671, 1907, 3672, 1940, 3681, 1965, 3664, 1972, 3660, 1977, 3656, 2020, 3624, 2053, 3593, 2071, 3576, 2094, 3568, 2119, 3561, 2134, 3571, 2159, 3586, 2156, 3615, 2155, 3641, 2134, 3666, 2130, 3671, 2126, 3677, 2114, 3694, 2101, 3712, 2083, 3738, 2105, 3774, 2108, 3763, 2123, 3754, 2130, 3749, 2131, 3743, 2137, 3722, 2164, 3721, 2170, 3721, 2175, 3716, 2206, 3701, 2232, 3692, 2239, 3690, 2240, 3683, 2243, 3675, 2246, 3667, 2248, 3660, 2254, 3655, 2265, 3645, 2276, 3637, 2335, 3580, 2356, 3507, 2358, 3502, 2357, 3496, 2357, 3477, 2343, 3466, 2338, 3462, 2338, 3456, 2334, 3418, 2314, 3386, 2309, 3378, 2306, 3367, 2299, 3304, 2328, 3275, 2430, 3177, 2481, 3080, 2497, 3049, 2530, 3038, 2537, 3036, 2543, 3033, 2551, 3030, 2560, 3029, 2588, 3027, 2607, 3008, 2621, 2996, 2635, 2986, 2680, 2956, 2719, 2920, 2760, 2882, 2800, 2846, 2844, 2807, 2897, 2783, 2943, 2763, 2977, 2732, 2984, 2726, 2991, 2719, 3023, 2690, 3049, 2656, 3082, 2615, 3123, 2586, 3175, 2550, 3214, 2507, 3225, 2495, 3206, 2472, 3156, 2411, 3102, 2351, 3090, 2337, 3087, 2316, 3086, 2307, 3090, 2300, 3097, 2293, 3101, 2285, 3109, 2271, 3134, 2282, 3156, 2292, 3184, 2300, 3190, 2303, 3195, 2303, 3221, 2307, 3245, 2307, 3244, 2285, 3237, 2265, 3226, 2238, 3229, 2217, 3230, 2208, 3229, 2198, 3226, 2127, 3265, 2098, 3270, 2095, 3274, 2089, 3322, 2051, 3349, 2098, 3364, 2124, 3404, 2131, 3424, 2135, 3424, 2118, 3423, 2105, 3424, 2089, 3427, 2050, 3410, 2030, 3377, 1990, 3350, 1923, 3360, 1901, 3376, 1883, 3384, 1876, 3384, 1869, 3394, 1787, 3394, 1702, 3388, 1686, 3364, 1693, 3361, 1706, 3355, 1718, 3332, 1732, 3321, 1750, 3316, 1757, 3310, 1763, L, 3309, 1765, Q, 3283, 1784, 3234, 1777, 3225, 1777, 3215, 1776, 3177, 1770, 3156, 1751, 3145, 1770, 3135, 1791, 3122, 1821, 3104, 1823, 3002, 1832, 2897, 1812, Q, 2869, 1806, 2848, 1821, Z]],
      "label": "Badajoz",
      "shortLabel": "BA",
      "labelPosition": [146, 292.8],
      "labelAlignment": [CEN, MID]
    },
    "ES.EX.CA": {
      "outlines": [[M, 1770, 153, Q, 1748, 127, 1724, 102, 1708, 83, 1694, 61, 1689, 51, 1680, 44, 1668, 33, 1657, 32, 1624, 28, 1592, 44, 1514, 87, 1435, 128, 1390, 152, 1352, 182, 1302, 222, 1259, 274, 1206, 343, 1123, 336, 1114, 334, 1104, 330, 1100, 329, 1045, 339, 1039, 340, 1033, 344, 1024, 351, 1016, 348, 954, 330, 906, 292, 899, 286, 894, 279, 858, 322, 843, 348, 826, 374, 817, 377, 811, 380, 806, 380, 801, 380, 795, 377, 781, 374, 766, 372, 756, 370, 746, 370, 742, 370, 735, 372, 708, 383, 678, 388, 672, 389, 665, 391, 623, 400, 641, 462, 642, 469, 643, 475, 653, 517, 685, 535, 691, 539, 696, 545, 716, 581, 766, 588, 771, 589, 774, 594, 792, 622, 807, 652, 821, 682, 817, 732, 812, 784, 819, 832, 821, 841, 812, 846, 797, 858, 774, 879, 742, 907, 737, 949, 734, 977, 742, 992, 746, 1000, 748, 1010, 753, 1051, 716, 1054, 712, 1054, 705, 1055, 678, 1059, 665, 1077, 663, 1084, 660, 1090, 638, 1173, 584, 1223, 539, 1267, 459, 1267, 404, 1267, 349, 1267, 320, 1267, 293, 1263, 261, 1257, 228, 1248, 187, 1237, 141, 1241, 110, 1244, 97, 1231, 92, 1227, 84, 1224, 78, 1223, 71, 1220, 63, 1217, 60, 1222, 38, 1272, 34, 1327, 33, 1337, 44, 1344, 99, 1384, 133, 1454, 137, 1461, 143, 1462, 221, 1501, 239, 1572, 251, 1619, 253, 1673, 255, 1743, 288, 1807, 302, 1835, 321, 1860, 324, 1864, 328, 1868, 330, 1869, 331, 1871, 368, 1911, 414, 1876, 419, 1872, 426, 1868, 434, 1862, 438, 1851, 447, 1829, 445, 1802, 442, 1750, 469, 1703, 525, 1750, 540, 1791, 543, 1798, 550, 1799, 558, 1802, 566, 1806, 588, 1762, 601, 1711, 613, 1669, 620, 1669, 691, 1664, 770, 1686, 826, 1703, 877, 1724, 891, 1728, 895, 1752, 903, 1805, 935, 1812, 921, 1836, 914, 1847, 880, 1902, 865, 1964, 861, 1986, 873, 1993, 939, 2026, 1013, 2036, 1044, 2040, 1074, 2044, 1148, 2055, 1224, 2062, 1268, 2066, 1310, 2056, 1361, 2045, 1412, 2041, 1426, 2040, 1440, 2051, 1446, 2055, 1451, 2062, 1453, 2066, 1456, 2072, 1459, 2078, 1463, 2084, 1489, 2110, 1495, 2158, 1496, 2164, 1500, 2168, 1540, 2204, 1577, 2241, 1585, 2248, 1588, 2257, 1594, 2278, 1605, 2293, 1609, 2297, 1617, 2294, 1665, 2281, 1697, 2216, 1706, 2195, 1713, 2186, 1717, 2179, 1720, 2169, 1723, 2164, 1730, 2160, 1749, 2149, 1764, 2136, 1768, 2133, 1778, 2136, 1819, 2147, 1807, 2198, 1801, 2217, 1797, 2238, 1812, 2261, 1832, 2242, 1837, 2238, 1845, 2235, 1884, 2221, 1900, 2201, 1907, 2194, 1914, 2186, 1925, 2172, 1939, 2162, 1946, 2158, 1954, 2155, 1961, 2154, 1966, 2153, 1994, 2150, 2009, 2162, 2016, 2168, 2024, 2171, 2031, 2173, 2032, 2179, 2035, 2183, 2035, 2188, 2082, 2168, 2116, 2118, 2120, 2114, 2126, 2110, 2156, 2166, 2203, 2190, 2210, 2194, 2213, 2199, 2228, 2227, 2247, 2213, 2254, 2208, 2263, 2206, 2307, 2197, 2320, 2149, 2328, 2120, 2339, 2092, 2353, 2059, 2372, 2029, 2457, 2069, 2529, 2052, 2566, 2044, 2588, 1978, 2606, 1926, 2640, 1902, 2665, 1886, 2709, 1900, 2742, 1911, 2779, 1912, 2805, 1913, 2812, 1891, 2814, 1886, 2818, 1879, 2836, 1857, 2842, 1832, 2844, 1827, 2848, 1821, 2869, 1806, 2897, 1812, 3002, 1832, 3104, 1823, 3122, 1821, 3135, 1791, 3145, 1770, 3156, 1751, 3177, 1770, 3215, 1776, 3225, 1777, 3234, 1777, 3283, 1784, 3309, 1765, L, 3310, 1763, Q, 3316, 1757, 3321, 1750, 3332, 1732, 3355, 1718, 3361, 1706, 3364, 1693, 3373, 1658, 3371, 1625, 3369, 1598, 3340, 1582, 3289, 1554, 3234, 1554, 3190, 1554, 3159, 1586, 3131, 1614, 3115, 1652, 3104, 1680, 3102, 1713, 3102, 1718, 3098, 1722, 3091, 1732, 3086, 1741, 3076, 1732, 3065, 1725, 3034, 1704, 3013, 1675, 3002, 1658, 2990, 1641, 2958, 1597, 2919, 1571, 2893, 1554, 2869, 1524, 2844, 1495, 2811, 1472, 2793, 1458, 2801, 1436, 2829, 1351, 2841, 1263, 2849, 1212, 2816, 1182, 2794, 1162, 2749, 1160, 2710, 1157, 2704, 1138, 2690, 1088, 2704, 1026, 2705, 1024, 2701, 1017, 2684, 992, 2640, 993, 2631, 993, 2620, 990, 2592, 981, 2600, 938, 2606, 913, 2606, 889, 2607, 861, 2617, 847, 2621, 841, 2624, 831, 2627, 825, 2627, 819, 2635, 779, 2614, 747, 2606, 736, 2599, 721, 2595, 711, 2595, 700, 2596, 696, 2599, 689, 2631, 641, 2669, 604, 2662, 596, 2657, 588, 2636, 553, 2638, 504, 2640, 460, 2636, 414, 2599, 427, 2573, 436, 2567, 439, 2562, 444, 2536, 468, 2512, 494, 2507, 500, 2503, 505, 2494, 520, 2463, 511, 2422, 498, 2364, 486, 2358, 484, 2353, 473, 2349, 464, 2346, 454, 2338, 405, 2284, 405, 2235, 406, 2217, 363, 2214, 355, 2211, 347, 2210, 340, 2204, 334, 2199, 328, 2193, 323, 2164, 344, 2134, 325, 2140, 321, 2141, 314, 2144, 306, 2140, 299, 2122, 273, 2075, 278, 2065, 281, 2060, 288, 2053, 303, 2036, 308, 2031, 311, 2028, 317, 2025, 325, 2021, 330, 2006, 348, 1976, 366, 1953, 378, 1929, 362, 1907, 345, 1892, 322, 1881, 304, 1870, 282, 1851, 246, 1788, 255, 1778, 256, 1770, 252, 1763, 246, 1763, 235, 1763, 231, 1764, 224, 1772, 201, 1775, 176, Q, 1777, 161, 1770, 153, Z]],
      "label": "Cáceres",
      "shortLabel": "CA",
      "labelPosition": [170.3, 124.5],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'extremadura',
  type: 'maps'
};

/***/ })

/******/ });
}));
