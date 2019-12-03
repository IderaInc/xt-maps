
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(9);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 9:
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
 * @id fusionmaps.HuaPhan.1.06-19-2019 10:37:58
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
  "name": "HuaPhan",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 600,
  "baseHeight": 465,
  "baseScaleFactor": 10,
  "firstEntity": "LA.HO.XN",
  "entities": {
    "LA.HO.XN": {
      "outlines": [[M, 3303, 1181, Q, 3300, 1158, 3281, 1139, 3277, 1134, 3268, 1120, 3257, 1103, 3251, 1095, 3238, 1078, 3200, 1071, 3140, 1057, 3090, 1052, 3047, 1048, 2983, 1048, 2940, 1048, 2922, 1050, 2889, 1053, 2872, 1064, 2840, 1077, 2825, 1087, 2810, 1098, 2808, 1109, 2807, 1120, 2806, 1146, 2804, 1172, 2786, 1202, 2753, 1258, 2713, 1263, 2673, 1267, 2652, 1251, 2631, 1235, 2588, 1235, 2588, 1234, 2587, 1234, 2587, 1233, 2586, 1233, 2583, 1232, 2576, 1232, 2566, 1231, 2545, 1233, 2502, 1237, 2483, 1244, 2467, 1251, 2444, 1272, 2416, 1300, 2401, 1315, L, 2366, 1351, Q, 2346, 1372, 2330, 1384, 2318, 1392, 2291, 1418, 2269, 1439, 2249, 1451, 2226, 1464, 2194, 1479, 2165, 1493, 2144, 1505, 2135, 1510, 2095, 1539, 2058, 1564, 2036, 1575, 1995, 1596, 1905, 1636, 1819, 1675, 1802, 1683, 1780, 1746, 1780, 1751, 1780, 1760, 1782, 1764, L, 1789, 2018, Q, 1783, 2052, 1792, 2087, 1800, 2124, 1803, 2142, 1803, 2144, 1803, 2145, 1814, 2186, 1844, 2220, 1874, 2273, 1887, 2287, 1900, 2302, 1925, 2342, 1975, 2397, 2050, 2421, 2124, 2446, 2173, 2456, 2220, 2465, 2270, 2466, 2320, 2466, 2402, 2473, 2484, 2480, 2517, 2480, 2579, 2482, 2634, 2517, 2691, 2554, 2707, 2606, 2715, 2621, 2718, 2640, 2724, 2666, 2726, 2673, 2734, 2697, 2735, 2703, 2740, 2721, 2740, 2735, 2740, 2753, 2737, 2796, 2736, 2836, 2742, 2865, 2745, 2881, 2747, 2927, 2749, 2952, 2750, 2992, 2750, 3003, 2749, 3026, 2761, 3044, 2771, 3061, 2780, 3078, 2787, 3082, 2800, 3091, 2819, 3091, 2832, 3091, 2846, 3066, 2860, 3038, 2863, 3032, 2867, 3026, 2882, 3000, 2894, 2979, 2903, 2968, 2914, 2954, 2933, 2951, 2943, 2949, 2968, 2945, 2988, 2939, 3004, 2938, 3009, 2937, 3041, 2937, 3039, 2938, 3043, 2938, 3047, 2939, 3056, 2938, 3080, 2937, 3082, 2937, 3095, 2938, 3115, 2942, 3132, 2944, 3149, 2958, 3165, 2970, 3174, 2987, 3189, 3014, 3227, 3050, 3257, 3079, 3286, 3099, 3302, 3091, 3334, 3090, 3352, 3089, 3388, 3089, 3407, 3088, 3444, 3087, 3475, 3084, 3500, 3075, 3516, 3070, 3529, 3068, 3538, 3066, 3560, 3063, 3581, 3060, 3613, 3050, 3642, 3042, 3671, 3032, 3705, 3020, 3721, 3015, 3786, 2994, 3816, 2975, 3833, 2965, 3847, 2938, 3856, 2924, 3872, 2893, 3878, 2863, 3915, 2806, 3948, 2753, 3983, 2742, 3985, 2742, 3989, 2741, 3992, 2739, 3999, 2737, 4006, 2735, 4020, 2724, 4032, 2714, 4040, 2694, 4050, 2665, 4053, 2661, 4057, 2636, 4040, 2610, 4028, 2590, 4004, 2572, 3978, 2550, 3963, 2538, 3936, 2516, 3908, 2499, 3881, 2482, 3841, 2478, 3800, 2475, 3720, 2464, 3640, 2453, 3580, 2437, 3516, 2419, 3473, 2397, 3406, 2369, 3361, 2340, 3316, 2311, 3328, 2041, 3328, 2039, 3328, 2038, 3327, 1996, 3325, 1974, 3322, 1932, 3310, 1918, 3297, 1904, 3292, 1899, 3283, 1890, 3271, 1881, 3262, 1874, 3260, 1848, 3259, 1828, 3261, 1797, 3263, 1765, 3254, 1756, 3245, 1748, 3225, 1715, 3204, 1682, 3204, 1675, 3204, 1669, 3207, 1628, 3210, 1587, 3210, 1579, 3211, 1570, 3243, 1516, 3249, 1506, 3279, 1471, 3288, 1459, 3293, 1448, 3296, 1441, 3300, 1430, 3300, 1428, 3300, 1426, 3305, 1364, 3305, 1232, 3305, 1197, 3304, 1185, 3304, 1184, 3304, 1183, Q, 3303, 1182, 3303, 1181, Z]],
      "label": "Xamneua District",
      "shortLabel": "XN",
      "labelPosition": [269.2, 196.1],
      "labelAlignment": [CEN, MID],
      "nextId": "LA.HO.XI"
    },
    "LA.HO.XI": {
      "outlines": [[M, 3416, 110, Q, 3407, 110, 3367, 123, 3328, 136, 3308, 136, 3269, 136, 3247, 88, 3235, 63, 3229, 56, 3217, 41, 3197, 41, 3178, 41, 3147, 64, 3125, 81, 3117, 91, 3083, 93, 3066, 94, 3035, 97, 3024, 120, 3017, 137, 3009, 177, 3003, 212, 2993, 226, 2984, 237, 2979, 251, 2975, 259, 2970, 271, 2961, 290, 2929, 290, 2910, 290, 2854, 273, 2845, 271, 2836, 269, 2836, 353, 2838, 399, 2837, 400, 2837, 401, 2829, 432, 2810, 492, 2789, 558, 2780, 589, 2757, 676, 2722, 782, 2721, 784, 2720, 786, 2671, 924, 2643, 1013, 2633, 1046, 2602, 1121, 2576, 1190, 2576, 1232, 2583, 1232, 2586, 1233, 2587, 1233, 2587, 1234, 2588, 1233, 2588, 1234, L, 2588, 1235, Q, 2631, 1235, 2652, 1251, 2673, 1267, 2713, 1263, 2753, 1258, 2786, 1202, 2804, 1172, 2806, 1146, 2807, 1120, 2808, 1109, 2810, 1098, 2825, 1087, 2840, 1077, 2872, 1064, 2889, 1053, 2922, 1050, 2940, 1048, 2983, 1048, 3047, 1048, 3090, 1052, 3140, 1057, 3200, 1071, 3238, 1078, 3251, 1095, 3257, 1103, 3268, 1120, 3277, 1134, 3281, 1139, 3300, 1158, 3303, 1181, 3303, 1182, 3304, 1183, 3305, 1183, 3306, 1183, 3359, 1137, 3380, 1120, 3401, 1103, 3430, 1076, 3458, 1049, 3473, 1036, 3487, 1022, 3518, 990, 3547, 957, 3561, 944, 3575, 930, 3601, 903, 3627, 876, 3765, 705, 3765, 703, 3766, 702, 3768, 697, 3775, 688, 3784, 676, 3790, 674, 3794, 672, 3800, 663, 3804, 658, 3811, 651, 3819, 643, 3836, 618, 3853, 593, 3855, 592, 3857, 590, 3864, 576, 3871, 563, 3906, 527, 3941, 491, 3948, 482, 3947, 481, 3947, 480, 3896, 348, 3871, 310, 3835, 252, 3746, 252, 3682, 252, 3654, 291, 3652, 294, 3639, 317, 3633, 329, 3625, 329, 3613, 329, 3606, 310, 3601, 296, 3601, 276, 3606, 218, 3606, 211, 3606, 172, 3578, 166, 3537, 163, 3508, 152, 3491, 145, 3460, 124, Q, 3440, 110, 3416, 110, Z]],
      "label": "Xiengkhor District",
      "shortLabel": "XI",
      "labelPosition": [326.2, 65.2],
      "labelAlignment": [CEN, MID],
      "nextId": "LA.HO.VT"
    },
    "LA.HO.VT": {
      "outlines": [[M, 1787, 1012, Q, 1781, 987, 1754, 966, 1722, 946, 1712, 937, 1703, 929, 1691, 920, 1683, 912, 1676, 906, 1670, 900, 1647, 889, 1624, 877, 1620, 874, 1593, 847, 1582, 837, 1565, 819, 1532, 819, 1489, 818, 1429, 809, 1326, 794, 1311, 792, 1288, 790, 1272, 766, 1246, 725, 1244, 723, 1241, 720, 1200, 691, 1178, 675, 1178, 652, 1178, 642, 1184, 625, 1189, 609, 1189, 601, 1189, 581, 1176, 567, 1163, 554, 1142, 554, 1115, 554, 1087, 606, 1059, 658, 1038, 658, 997, 658, 979, 685, 972, 699, 968, 704, 962, 713, 952, 713, 945, 713, 935, 703, 924, 694, 920, 694, 919, 694, 865, 741, 810, 787, 788, 787, 757, 787, 734, 766, 711, 745, 705, 745, 696, 745, 678, 768, 668, 780, 660, 792, 656, 797, 631, 816, 609, 833, 602, 837, 584, 850, 544, 863, 504, 875, 480, 892, 475, 896, 417, 932, 382, 953, 372, 969, 358, 992, 353, 1034, 351, 1060, 351, 1118, 351, 1146, 364, 1185, 377, 1225, 377, 1243, 377, 1254, 366, 1265, L, 342, 1284, Q, 308, 1312, 308, 1351, 308, 1358, 311, 1405, 311, 1408, 311, 1411, 314, 1423, 322, 1461, 333, 1517, 340, 1564, 347, 1611, 298, 1648, 249, 1685, 216, 1707, 192, 1726, 192, 1741, 192, 1742, 199, 1764, 209, 1790, 246, 1839, 283, 1888, 308, 1887, 332, 1886, 365, 1876, 388, 1876, 406, 1906, 422, 1932, 422, 1958, 422, 1981, 395, 1994, 370, 2007, 340, 2003, L, 340, 2030, Q, 380, 2070, 401, 2103, 438, 2157, 438, 2204, 438, 2235, 416, 2262, 404, 2278, 368, 2308, 333, 2338, 318, 2358, 294, 2389, 290, 2424, 290, 2425, 290, 2426, 294, 2441, 292, 2458, 289, 2479, 277, 2479, 241, 2479, 232, 2487, 227, 2493, 230, 2510, 238, 2557, 181, 2590, 141, 2615, 82, 2637, 44, 2658, 44, 2704, 44, 2749, 73, 2796, 102, 2844, 102, 2852, 102, 2856, 97, 2875, 91, 2893, 91, 2898, 91, 2922, 108, 2928, 120, 2933, 147, 2932, 176, 2930, 185, 2933, 202, 2938, 202, 2959, 202, 2988, 179, 3002, 163, 3012, 107, 3034, 95, 3040, 87, 3068, 81, 3090, 81, 3101, 81, 3133, 65, 3144, 49, 3156, 49, 3185, 49, 3193, 60, 3220, 70, 3247, 70, 3251, 70, 3270, 63, 3288, 55, 3306, 55, 3313, 55, 3331, 84, 3357, 113, 3383, 113, 3402, 113, 3418, 104, 3426, 102, 3428, 86, 3440, 60, 3459, 60, 3506, 60, 3556, 75, 3574, 95, 3598, 153, 3595, 155, 3595, 157, 3596, 192, 3599, 196, 3599, 216, 3597, 237, 3577, 256, 3554, 267, 3544, 287, 3525, 311, 3525, 313, 3525, 340, 3527, 369, 3528, 382, 3528, 403, 3527, 409, 3535, 413, 3540, 420, 3570, 434, 3625, 448, 3633, 455, 3637, 507, 3637, 661, 3625, 661, 3623, L, 662, 3623, Q, 705, 3623, 716, 3625, 742, 3630, 771, 3654, 792, 3672, 868, 3715, 874, 3715, 897, 3695, 921, 3675, 940, 3675, 970, 3675, 1040, 3719, 1110, 3762, 1132, 3762, 1145, 3762, 1160, 3746, 1179, 3725, 1191, 3712, 1237, 3663, 1300, 3663, 1319, 3663, 1333, 3666, 1346, 3669, 1365, 3669, 1392, 3669, 1410, 3661, 1407, 3641, 1387, 3613, 1353, 3566, 1351, 3561, 1338, 3540, 1298, 3456, 1278, 3412, 1235, 3349, 1185, 3276, 1169, 3249, 1172, 3213, 1172, 3197, 1172, 3169, 1162, 3148, 1130, 3074, 1131, 3062, 1133, 3049, 1140, 3040, 1146, 3031, 1158, 3030, 1169, 3029, 1178, 3026, 1183, 3025, 1198, 3020, 1220, 3014, 1253, 3000, 1264, 2996, 1301, 2979, L, 1350, 2966, Q, 1376, 2959, 1386, 2914, 1397, 2869, 1431, 2825, 1431, 2824, 1431, 2824, 1503, 2729, 1498, 2672, 1497, 2661, 1500, 2639, 1504, 2613, 1506, 2601, 1509, 2559, 1509, 2525, 1509, 2505, 1504, 2469, 1498, 2436, 1498, 2419, 1498, 2417, 1497, 2416, 1491, 2386, 1507, 2349, 1529, 2307, 1535, 2285, 1536, 2271, 1540, 2253, 1544, 2232, 1546, 2219, 1548, 2199, 1561, 2189, 1585, 2172, 1595, 2162, 1606, 2152, 1642, 2106, 1677, 2059, 1687, 2044, 1696, 2029, 1726, 1983, 1761, 1932, 1786, 1901, L, 1782, 1764, Q, 1780, 1760, 1780, 1751, 1780, 1746, 1802, 1683, 1805, 1672, 1809, 1661, 1836, 1578, 1839, 1534, 1839, 1533, 1839, 1531, 1854, 1457, 1859, 1424, 1867, 1368, 1868, 1335, 1869, 1302, 1876, 1255, 1882, 1208, 1885, 1176, 1888, 1144, 1896, 1086, 1889, 1089, 1880, 1092, 1850, 1104, 1839, 1104, 1819, 1104, 1806, 1076, Q, 1797, 1058, 1787, 1012, Z]],
      "label": "Hiam District",
      "shortLabel": "VT",
      "labelPosition": [97, 215.8],
      "labelAlignment": [CEN, MID],
      "nextId": "LA.HO.VX"
    },
    "LA.HO.VX": {
      "outlines": [[M, 4792, 1732, Q, 4779, 1753, 4783, 1803, 4786, 1856, 4779, 1874, 4765, 1906, 4709, 1906, 4687, 1906, 4661, 1899, 4635, 1893, 4614, 1893, 4561, 1893, 4532, 1931, 4516, 1954, 4508, 1966, 4492, 1988, 4475, 2002, 4472, 2004, 4439, 2008, 4404, 2011, 4392, 2019, 4387, 2021, 4360, 2048, 4342, 2065, 4319, 2065, 4297, 2065, 4288, 2040, 4279, 2015, 4251, 2015, 4242, 2015, 4218, 2022, 4195, 2029, 4178, 2029, 4139, 2029, 4120, 2015, 4100, 2001, 4100, 1970, 4100, 1948, 4115, 1921, 4130, 1895, 4130, 1887, 4130, 1862, 4114, 1853, 4107, 1849, 4080, 1845, 4056, 1842, 4046, 1833, 4030, 1819, 4030, 1786, 4030, 1770, 4033, 1760, 4035, 1750, 4034, 1745, 4034, 1742, 4036, 1740, 4027, 1730, 4008, 1720, 3994, 1712, 3979, 1707, 3970, 1705, 3953, 1693, 3933, 1680, 3922, 1675, 3899, 1665, 3862, 1641, 3821, 1614, 3803, 1602, 3764, 1576, 3747, 1566, 3729, 1555, 3715, 1544, 3699, 1531, 3688, 1522, 3645, 1490, 3634, 1482, 3624, 1476, 3619, 1474, 3615, 1473, 3615, 1469, 3617, 1463, 3616, 1461, L, 3608, 1436, Q, 3607, 1435, 3606, 1435, 3601, 1429, 3594, 1418, 3584, 1399, 3580, 1393, 3562, 1371, 3554, 1359, 3545, 1345, 3538, 1339, 3535, 1337, 3527, 1329, 3519, 1321, 3503, 1311, 3488, 1299, 3482, 1294, 3475, 1289, 3460, 1274, 3442, 1258, 3434, 1252, 3425, 1245, 3420, 1239, 3416, 1232, 3399, 1216, 3381, 1200, 3357, 1191, 3341, 1185, 3306, 1183, 3305, 1184, 3304, 1185, 3305, 1197, 3305, 1232, 3305, 1364, 3300, 1426, 3300, 1428, 3300, 1430, 3296, 1441, 3293, 1448, 3288, 1459, 3279, 1471, 3249, 1506, 3243, 1516, 3211, 1570, 3210, 1579, 3210, 1587, 3207, 1628, 3204, 1669, 3204, 1675, 3204, 1682, 3225, 1715, 3245, 1748, 3254, 1756, 3263, 1765, 3261, 1797, 3259, 1828, 3260, 1848, 3262, 1874, 3271, 1881, 3283, 1890, 3292, 1899, 3297, 1904, 3310, 1918, 3322, 1932, 3325, 1974, 3327, 1996, 3328, 2038, 3328, 2039, 3328, 2041, 3316, 2311, 3361, 2340, 3406, 2369, 3473, 2397, 3516, 2419, 3580, 2437, 3640, 2453, 3720, 2464, 3800, 2475, 3841, 2478, 3881, 2482, 3908, 2499, 3936, 2516, 3963, 2538, 3978, 2550, 4004, 2572, 4028, 2590, 4040, 2610, 4057, 2636, 4053, 2660, 4053, 2660, 4053, 2660, 4057, 2657, 4083, 2657, 4152, 2657, 4249, 2691, 4259, 2695, 4289, 2710, 4317, 2725, 4333, 2730, 4390, 2746, 4417, 2744, 4463, 2742, 4494, 2749, 4536, 2759, 4576, 2788, 4609, 2812, 4651, 2822, 4684, 2829, 4732, 2829, 4794, 2829, 4811, 2816, 4819, 2810, 4842, 2788, 4872, 2762, 4910, 2735, 4931, 2719, 4952, 2697, 4974, 2674, 4987, 2664, 5006, 2651, 5041, 2622, 5068, 2599, 5080, 2592, 5076, 2584, 5073, 2579, 5071, 2576, 5070, 2574, 5056, 2549, 5014, 2530, 4972, 2513, 4933, 2513, 4916, 2513, 4891, 2524, 4865, 2536, 4830, 2536, 4777, 2536, 4764, 2496, 4757, 2476, 4757, 2397, 4757, 2329, 4772, 2274, 4787, 2220, 4787, 2179, 4787, 2165, 4781, 2131, 4774, 2098, 4774, 2083, 4774, 2047, 4815, 2037, 4827, 2034, 4856, 2027, 4883, 2019, 4903, 2005, 4973, 1957, 4986, 1947, 5046, 1900, 5046, 1876, 5046, 1850, 5008, 1824, 4963, 1793, 4960, 1786, 4950, 1770, 4943, 1750, 4935, 1726, 4933, 1723, 4921, 1700, 4880, 1700, Q, 4812, 1700, 4792, 1732, Z]],
      "label": "Viengxay District",
      "shortLabel": "VX",
      "labelPosition": [414.2, 229.8],
      "labelAlignment": [CEN, MID],
      "nextId": "LA.HO.HU"
    },
    "LA.HO.HU": {
      "outlines": [[M, 2402, 2473, Q, 2320, 2466, 2270, 2466, 2220, 2465, 2173, 2456, 2124, 2446, 2050, 2421, 1975, 2397, 1925, 2342, 1900, 2302, 1887, 2287, 1874, 2273, 1844, 2220, 1814, 2186, 1803, 2145, 1803, 2144, 1803, 2142, 1800, 2124, 1792, 2087, 1783, 2052, 1789, 2018, L, 1786, 1901, Q, 1761, 1932, 1726, 1983, 1696, 2029, 1687, 2044, 1677, 2059, 1642, 2106, 1606, 2152, 1595, 2162, 1585, 2172, 1561, 2189, 1548, 2199, 1546, 2219, 1544, 2232, 1540, 2253, 1536, 2271, 1535, 2285, 1529, 2307, 1507, 2349, 1491, 2386, 1497, 2416, 1498, 2417, 1498, 2419, 1498, 2436, 1504, 2469, 1509, 2505, 1509, 2525, 1509, 2559, 1506, 2601, 1504, 2613, 1500, 2639, 1497, 2661, 1498, 2672, 1503, 2729, 1431, 2824, 1431, 2824, 1431, 2825, 1397, 2869, 1386, 2914, 1376, 2959, 1350, 2966, L, 1301, 2979, Q, 1264, 2996, 1253, 3000, 1220, 3014, 1198, 3020, 1183, 3025, 1178, 3026, 1169, 3029, 1158, 3030, 1146, 3031, 1140, 3040, 1133, 3049, 1131, 3062, 1130, 3074, 1162, 3148, 1172, 3169, 1172, 3197, 1172, 3213, 1169, 3249, 1185, 3276, 1235, 3349, 1278, 3412, 1298, 3456, 1338, 3540, 1351, 3561, 1353, 3566, 1387, 3613, 1407, 3641, 1410, 3661, 1420, 3656, 1428, 3650, 1465, 3619, 1500, 3603, 1518, 3596, 1569, 3597, 1612, 3593, 1612, 3557, 1612, 3535, 1599, 3518, 1587, 3502, 1587, 3498, 1587, 3483, 1595, 3477, 1602, 3473, 1618, 3473, 1638, 3473, 1650, 3486, 1654, 3491, 1668, 3516, 1691, 3559, 1743, 3559, 1783, 3559, 1798, 3544, 1813, 3530, 1813, 3489, 1813, 3438, 1797, 3422, 1781, 3406, 1781, 3372, 1781, 3343, 1795, 3330, 1805, 3322, 1831, 3316, 1862, 3310, 1875, 3304, 1900, 3291, 1916, 3264, 1932, 3236, 1952, 3221, 1971, 3206, 2005, 3194, 2041, 3182, 2051, 3180, 2057, 3179, 2093, 3179, 2134, 3179, 2143, 3182, 2161, 3187, 2196, 3215, 2200, 3219, 2222, 3234, 2246, 3249, 2250, 3251, 2256, 3254, 2275, 3257, 2291, 3260, 2302, 3268, 2322, 3283, 2338, 3312, 2344, 3325, 2359, 3359, 2362, 3367, 2376, 3388, 2391, 3410, 2399, 3416, 2414, 3427, 2440, 3433, 2460, 3438, 2460, 3439, 2460, 3459, 2435, 3524, 2409, 3588, 2409, 3605, 2409, 3617, 2410, 3621, 2412, 3630, 2417, 3641, 2459, 3676, 2459, 3696, 2459, 3710, 2385, 3744, 2311, 3777, 2311, 3788, 2311, 3806, 2359, 3816, 2427, 3830, 2455, 3846, 2494, 3868, 2540, 3920, 2574, 3958, 2603, 3958, 2623, 3958, 2674, 3940, 2739, 3917, 2743, 3916, 2753, 3914, 2805, 3916, 2844, 3918, 2862, 3900, 2869, 3892, 2917, 3780, 2958, 3682, 2985, 3682, 2994, 3682, 3014, 3702, 3039, 3726, 3082, 3743, 3126, 3760, 3149, 3760, 3173, 3759, 3188, 3756, 3255, 3753, 3300, 3703, 3332, 3667, 3333, 3666, 3340, 3660, 3347, 3656, 3342, 3622, 3321, 3580, 3298, 3533, 3291, 3497, 3283, 3456, 3267, 3412, 3256, 3385, 3251, 3372, 3243, 3349, 3243, 3327, 3243, 3304, 3249, 3290, 3249, 3288, 3265, 3259, 3269, 3250, 3279, 3228, 3287, 3209, 3292, 3200, 3292, 3200, 3292, 3199, 3297, 3191, 3310, 3173, 3322, 3155, 3322, 3141, 3322, 3132, 3307, 3117, 3297, 3107, 3286, 3099, 3257, 3079, 3227, 3050, 3189, 3014, 3174, 2987, 3165, 2970, 3149, 2958, 3132, 2944, 3115, 2942, 3095, 2938, 3082, 2937, 3080, 2937, 3056, 2938, 3047, 2939, 3043, 2938, 3039, 2938, 3041, 2937, 3009, 2937, 3004, 2938, 2988, 2939, 2968, 2945, 2943, 2949, 2933, 2951, 2914, 2954, 2903, 2968, 2894, 2979, 2882, 3000, 2867, 3026, 2863, 3032, 2860, 3038, 2846, 3066, 2832, 3091, 2819, 3091, 2800, 3091, 2787, 3082, 2780, 3078, 2771, 3061, 2761, 3044, 2749, 3026, 2750, 3003, 2750, 2992, 2749, 2952, 2747, 2927, 2745, 2881, 2742, 2865, 2736, 2836, 2737, 2796, 2740, 2753, 2740, 2735, 2740, 2721, 2735, 2703, 2734, 2697, 2726, 2673, 2724, 2666, 2718, 2640, 2715, 2621, 2707, 2606, 2691, 2554, 2634, 2517, 2579, 2482, 2517, 2480, Q, 2484, 2480, 2402, 2473, Z]],
      "label": "Huameuang District",
      "shortLabel": "HU",
      "labelPosition": [223.9, 286.2],
      "labelAlignment": [CEN, MID],
      "nextId": "LA.HO.XT"
    },
    "LA.HO.XT": {
      "outlines": [[M, 5080, 2592, Q, 5068, 2599, 5041, 2622, 5006, 2651, 4987, 2664, 4974, 2674, 4952, 2697, 4931, 2719, 4910, 2735, 4872, 2762, 4842, 2788, 4819, 2810, 4811, 2816, 4794, 2829, 4732, 2829, 4684, 2829, 4651, 2822, 4609, 2812, 4576, 2788, 4536, 2759, 4494, 2749, 4463, 2742, 4417, 2744, 4390, 2746, 4333, 2730, 4317, 2725, 4289, 2710, 4259, 2695, 4249, 2691, 4152, 2657, 4083, 2657, 4057, 2657, 4053, 2660, 4053, 2660, 4053, 2661, 4050, 2665, 4040, 2694, 4032, 2714, 4020, 2724, 4006, 2735, 3999, 2737, 3992, 2739, 3989, 2741, 3985, 2742, 3983, 2742, 3948, 2753, 3915, 2806, 3878, 2863, 3872, 2893, 3856, 2924, 3847, 2938, 3833, 2965, 3816, 2975, 3786, 2994, 3721, 3015, 3705, 3020, 3671, 3032, 3642, 3042, 3613, 3050, 3581, 3060, 3560, 3063, 3538, 3066, 3529, 3068, 3516, 3070, 3500, 3075, 3475, 3084, 3444, 3087, 3407, 3088, 3388, 3089, 3352, 3089, 3334, 3090, 3302, 3091, 3286, 3099, 3297, 3107, 3307, 3117, 3322, 3132, 3322, 3141, 3322, 3155, 3310, 3173, 3297, 3191, 3292, 3199, 3292, 3200, 3292, 3200, 3287, 3209, 3279, 3228, 3269, 3250, 3265, 3259, 3249, 3288, 3249, 3290, 3243, 3304, 3243, 3327, 3243, 3349, 3251, 3372, 3256, 3385, 3267, 3412, 3283, 3456, 3291, 3497, 3298, 3533, 3321, 3580, 3342, 3622, 3347, 3656, 3359, 3649, 3373, 3649, 3425, 3649, 3425, 3692, 3425, 3698, 3365, 3824, 3306, 3949, 3306, 3998, 3306, 4048, 3361, 4110, 3375, 4125, 3400, 4151, 3417, 4171, 3417, 4181, 3417, 4193, 3359, 4335, 3359, 4352, 3396, 4365, 3432, 4377, 3468, 4377, 3501, 4377, 3524, 4346, 3546, 4315, 3585, 4315, 3613, 4315, 3642, 4340, 3670, 4364, 3682, 4364, 3687, 4364, 3720, 4362, 3754, 4361, 3775, 4364, 3782, 4366, 3802, 4392, 3821, 4418, 3836, 4418, 3856, 4418, 3977, 4356, 4098, 4295, 4142, 4295, 4183, 4295, 4190, 4334, 4192, 4345, 4194, 4367, 4196, 4385, 4202, 4393, 4205, 4397, 4229, 4403, 4253, 4408, 4260, 4418, 4271, 4434, 4280, 4488, 4308, 4478, 4327, 4464, 4338, 4455, 4356, 4455, 4382, 4455, 4401, 4480, 4406, 4487, 4432, 4535, 4452, 4573, 4474, 4590, 4504, 4615, 4552, 4615, 4610, 4615, 4670, 4579, 4730, 4542, 4769, 4542, 4797, 4542, 4826, 4550, 4855, 4558, 4866, 4558, 4902, 4558, 4935, 4443, 4962, 4352, 4964, 4335, 4966, 4318, 4973, 4305, 4995, 4269, 5053, 4203, 5131, 4116, 5162, 4116, 5175, 4116, 5195, 4132, 5214, 4148, 5234, 4148, 5253, 4148, 5264, 4130, 5265, 4130, 5283, 4091, 5311, 4033, 5373, 4033, 5391, 4033, 5446, 4036, 5493, 4030, 5497, 3987, 5499, 3973, 5497, 3935, 5496, 3904, 5501, 3889, 5504, 3880, 5523, 3861, 5540, 3843, 5540, 3829, 5540, 3810, 5519, 3801, 5497, 3792, 5497, 3780, 5497, 3763, 5517, 3751, 5537, 3739, 5537, 3711, 5537, 3693, 5521, 3671, 5504, 3650, 5504, 3611, 5504, 3609, 5521, 3501, 5526, 3467, 5547, 3455, 5561, 3447, 5603, 3432, 5638, 3415, 5648, 3406, 5667, 3390, 5668, 3366, 5670, 3339, 5700, 3337, 5731, 3335, 5734, 3310, 5739, 3276, 5763, 3219, 5786, 3163, 5810, 3126, 5834, 3088, 5864, 3079, 5875, 3076, 5910, 3076, 5934, 3077, 5942, 3062, 5954, 3042, 5954, 2979, 5954, 2964, 5901, 2912, 5855, 2867, 5838, 2857, 5838, 2857, 5837, 2856, 5831, 2844, 5813, 2844, 5781, 2845, 5781, 2845, 5785, 2802, 5786, 2775, 5787, 2723, 5773, 2723, 5759, 2723, 5741, 2733, 5719, 2746, 5705, 2754, 5650, 2784, 5586, 2784, 5526, 2784, 5494, 2755, 5474, 2734, 5459, 2720, 5432, 2698, 5395, 2678, 5337, 2639, 5312, 2623, 5270, 2595, 5222, 2595, 5192, 2595, 5166, 2615, 5141, 2635, 5123, 2635, 5101, 2635, 5086, 2609, Q, 5083, 2599, 5080, 2592, Z]],
      "label": "Xamtay District",
      "shortLabel": "XT",
      "labelPosition": [446.4, 360.4],
      "labelAlignment": [CEN, MID],
      "nextId": "LA.HO.SO"
    },
    "LA.HO.SO": {
      "outlines": [[M, 4328, 740, Q, 4311, 749, 4307, 749, 4291, 749, 4276, 726, 4261, 702, 4235, 702, 4220, 702, 4202, 711, 4184, 721, 4175, 721, 4148, 721, 4137, 700, 4131, 687, 4128, 653, 4126, 619, 4120, 606, 4110, 584, 4085, 583, 4039, 581, 3997, 544, 3965, 516, 3948, 482, 3941, 491, 3906, 527, 3871, 563, 3864, 576, 3857, 590, 3855, 592, 3853, 593, 3836, 618, 3819, 643, 3811, 651, 3804, 658, 3800, 663, 3794, 672, 3790, 674, 3784, 676, 3775, 688, 3768, 697, 3766, 702, 3765, 703, 3765, 705, 3627, 876, 3601, 903, 3575, 930, 3561, 944, 3547, 957, 3518, 990, 3487, 1022, 3473, 1036, 3458, 1049, 3430, 1076, 3401, 1103, 3380, 1120, 3359, 1137, 3306, 1183, 3341, 1185, 3357, 1191, 3381, 1200, 3399, 1216, 3416, 1232, 3420, 1239, 3425, 1245, 3434, 1252, 3442, 1258, 3460, 1274, 3475, 1289, 3482, 1294, 3488, 1299, 3503, 1311, 3519, 1321, 3527, 1329, 3535, 1337, 3538, 1339, 3545, 1345, 3554, 1359, 3562, 1371, 3580, 1393, 3584, 1399, 3594, 1418, 3601, 1429, 3606, 1435, 3607, 1435, 3608, 1436, L, 3616, 1461, Q, 3617, 1463, 3615, 1469, 3615, 1473, 3619, 1474, 3624, 1476, 3634, 1482, 3645, 1490, 3688, 1522, 3699, 1531, 3715, 1544, 3729, 1555, 3747, 1566, 3764, 1576, 3803, 1602, 3821, 1614, 3862, 1641, 3899, 1665, 3922, 1675, 3933, 1680, 3953, 1693, 3970, 1705, 3979, 1707, 3994, 1712, 4008, 1720, 4027, 1730, 4036, 1740, 4037, 1738, 4040, 1736, 4046, 1733, 4048, 1734, 4050, 1734, 4053, 1733, 4055, 1732, 4057, 1730, 4062, 1726, 4080, 1687, L, 4127, 1677, Q, 4165, 1669, 4180, 1660, 4197, 1650, 4242, 1634, 4274, 1622, 4282, 1610, 4290, 1600, 4297, 1565, 4301, 1544, 4324, 1544, 4339, 1544, 4409, 1591, 4479, 1637, 4518, 1637, 4560, 1637, 4579, 1591, 4593, 1539, 4598, 1524, 4607, 1498, 4652, 1478, 4693, 1460, 4694, 1435, 4684, 1382, 4755, 1307, 4772, 1288, 4812, 1252, 4844, 1221, 4854, 1209, 4861, 1193, 4868, 1173, 4883, 1129, 4883, 1104, 4883, 1079, 4870, 1075, 4870, 1075, 4838, 1075, 4777, 1080, 4769, 1080, 4750, 1080, 4741, 1070, 4733, 1060, 4699, 1059, 4685, 1059, 4665, 1046, 4662, 1045, 4632, 1024, 4592, 986, 4572, 968, 4536, 935, 4500, 934, 4410, 934, 4394, 832, 4389, 782, 4384, 763, 4376, 731, 4354, 731, Q, 4344, 731, 4328, 740, Z]],
      "label": "Sop Bao District",
      "shortLabel": "SO",
      "labelPosition": [409.5, 111.1],
      "labelAlignment": [CEN, MID],
      "nextId": "LA.HO.MU"
    },
    "LA.HO.MU": {
      "outlines": [[M, 2837, 401, Q, 2837, 400, 2838, 399, 2836, 353, 2836, 269, 2794, 257, 2771, 257, 2743, 257, 2724, 284, 2698, 319, 2691, 324, L, 2664, 334, Q, 2641, 344, 2633, 353, 2620, 367, 2610, 370, 2607, 371, 2586, 371, 2575, 371, 2560, 366, 2546, 361, 2525, 361, 2523, 361, 2522, 361, 2473, 367, 2442, 412, 2410, 457, 2391, 463, 2371, 469, 2360, 448, 2349, 427, 2313, 427, 2257, 427, 2236, 451, 2215, 476, 2226, 533, 2209, 573, 2167, 603, 2133, 627, 2133, 653, 2133, 667, 2143, 678, 2145, 680, 2166, 696, 2199, 721, 2199, 763, 2199, 829, 2096, 853, 2045, 863, 2025, 869, 1993, 878, 1993, 893, 1993, 918, 2018, 974, 2043, 1031, 2043, 1034, 2043, 1057, 2014, 1072, 1989, 1085, 1965, 1085, 1929, 1080, 1923, 1080, 1913, 1080, 1896, 1086, 1888, 1144, 1885, 1176, 1882, 1208, 1876, 1255, 1869, 1302, 1868, 1335, 1867, 1368, 1859, 1424, 1854, 1457, 1839, 1531, 1839, 1533, 1839, 1534, 1836, 1578, 1809, 1661, 1805, 1672, 1802, 1683, 1819, 1675, 1905, 1636, 1995, 1596, 2036, 1575, 2058, 1564, 2095, 1539, 2135, 1510, 2144, 1505, 2165, 1493, 2194, 1479, 2226, 1464, 2249, 1451, 2269, 1439, 2291, 1418, 2318, 1392, 2330, 1384, 2346, 1372, 2366, 1351, L, 2401, 1315, Q, 2416, 1300, 2444, 1272, 2467, 1251, 2483, 1244, 2502, 1237, 2545, 1233, 2566, 1231, 2576, 1232, 2576, 1190, 2602, 1121, 2633, 1046, 2643, 1013, 2671, 924, 2720, 786, 2721, 784, 2722, 782, 2757, 676, 2780, 589, 2789, 558, 2810, 492, Q, 2829, 432, 2837, 401, Z]],
      "label": "Et District",
      "shortLabel": "MU",
      "labelPosition": [232, 101.5],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'huaphan',
  type: 'maps'
};

/***/ })

/******/ });
}));
