
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
/******/ 	return __webpack_require__(__webpack_require__.s = 576);
/******/ })
/************************************************************************/
/******/ ({

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(577);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 577:
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
 * @id fusionmaps.Manitoba.20.10-30-2012 06:49:11
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
  "name": "Manitoba",
  "revision": 20,
  "standaloneInit": true,
  "baseWidth": 320,
  "baseHeight": 470,
  "baseScaleFactor": 10,
  "entities": {
    "CA.MB.WI": {
      "outlines": [[M, 1214, 4232, Q, 1213, 4241, 1213, 4249, L, 1211, 4249, Q, 1211, 4273, 1212, 4296, 1212, 4301, 1213, 4306, 1213, 4308, 1214, 4309, 1220, 4319, 1234, 4318, 1239, 4317, 1243, 4317, 1251, 4317, 1258, 4316, 1259, 4316, 1259, 4315, 1259, 4314, 1260, 4313, 1260, 4309, 1260, 4306, 1259, 4301, 1266, 4301, 1268, 4301, 1269, 4301, 1272, 4300, 1274, 4299, 1275, 4299, 1276, 4297, 1277, 4295, 1281, 4296, 1290, 4297, 1288, 4288, 1287, 4278, 1297, 4280, 1308, 4281, 1307, 4269, 1306, 4259, 1303, 4252, 1302, 4250, 1302, 4249, 1298, 4243, 1293, 4242, 1289, 4242, 1289, 4235, 1290, 4230, 1284, 4229, 1283, 4229, 1282, 4228, 1281, 4227, 1278, 4228, 1277, 4229, 1276, 4229, 1271, 4229, 1267, 4231, 1266, 4232, 1264, 4232, 1240, 4232, 1216, 4232, Q, 1214, 4232, 1214, 4232, Z]],
      "label": "Winnipeq Region",
      "shortLabel": "WI",
      "labelPosition": [185, 426.6],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [[M, 1850, 4266, L, 1247, 4266]]
    },
    "CA.MB.NR": {
      "outlines": [[M, 1752, 79, Q, 1015, 94, 257, 43, L, 251, 365, 236, 365, 236, 548, 226, 548, 226, 733, 208, 733, 208, 902, 198, 902, 198, 1091, 181, 1091, 181, 1270, 165, 1270, 165, 1451, 150, 1451, 150, 1663, 132, 1663, 132, 1774, 153, 1774, 153, 1799, 138, 1799, 138, 1914, 159, 1914, 159, 1950, 139, 1950, 139, 2940, 539, 2954, Q, 552, 2956, 558, 2962, 560, 2965, 566, 2965, 574, 2965, 580, 2967, 582, 2967, 584, 2968, 586, 2969, 587, 2970, 588, 2970, 589, 2971, 589, 2972, 590, 2973, 591, 2973, 592, 2973, 600, 2974, 606, 2974, 625, 2973, 638, 2964, L, 1822, 2962, 2084, 2686, 2511, 2100, 3024, 1385, Q, 3025, 1383, 3027, 1382, 3029, 1380, 3030, 1380, 3031, 1379, 3032, 1378, 3036, 1375, 3036, 1371, 3036, 1370, 3037, 1369, 3038, 1367, 3039, 1365, 3048, 1350, 3059, 1339, 3062, 1335, 3065, 1329, 3067, 1325, 3067, 1321, 3069, 1312, 3076, 1307, 3078, 1305, 3078, 1303, 3079, 1299, 3082, 1298, 3084, 1298, 3084, 1296, 3085, 1296, 3085, 1295, 3091, 1287, 3097, 1281, 3099, 1280, 3099, 1278, 3100, 1273, 3105, 1273, 3081, 1273, 3059, 1273, 3050, 1273, 3043, 1271, 3040, 1270, 3040, 1268, 3039, 1264, 3039, 1259, 3038, 1257, 3036, 1257, 3027, 1256, 3017, 1256, 3015, 1256, 3013, 1255, 2993, 1255, 2974, 1254, 2961, 1253, 2947, 1253, 2944, 1253, 2941, 1253, 2934, 1251, 2928, 1249, 2925, 1248, 2923, 1248, 2911, 1248, 2902, 1246, 2900, 1245, 2900, 1245, 2898, 1236, 2888, 1236, 2887, 1236, 2886, 1235, 2883, 1233, 2877, 1233, 2875, 1233, 2874, 1232, 2873, 1230, 2870, 1230, 2861, 1228, 2852, 1227, 2849, 1227, 2848, 1226, 2841, 1219, 2832, 1218, 2828, 1218, 2825, 1215, 2824, 1212, 2822, 1212, 2814, 1209, 2807, 1204, 2806, 1204, 2804, 1203, 2803, 1202, 2802, 1201, 2792, 1196, 2786, 1190, 2777, 1182, 2767, 1175, 2760, 1170, 2752, 1171, 2745, 1171, 2737, 1170, 2735, 1169, 2733, 1169, 2718, 1169, 2702, 1169, 2701, 1169, 2699, 1168, 2699, 1167, 2698, 1166, 2691, 1160, 2681, 1154, 2679, 1153, 2676, 1153, 2652, 1150, 2626, 1151, 2625, 1150, 2624, 1151, 2622, 1152, 2621, 1152, 2616, 1153, 2614, 1158, 2613, 1159, 2612, 1160, 2611, 1161, 2611, 1163, 2610, 1164, 2609, 1164, 2604, 1167, 2599, 1172, 2591, 1179, 2583, 1183, 2576, 1184, 2572, 1187, 2566, 1191, 2555, 1192, 2546, 1192, 2537, 1194, 2531, 1196, 2529, 1202, 2528, 1204, 2528, 1204, 2513, 1209, 2499, 1215, 2498, 1216, 2496, 1216, 2493, 1216, 2493, 1218, 2492, 1221, 2486, 1221, 2475, 1219, 2468, 1226, 2467, 1227, 2467, 1227, 2466, 1231, 2463, 1233, 2454, 1242, 2445, 1251, 2444, 1252, 2443, 1253, 2442, 1253, 2442, 1254, 2438, 1259, 2433, 1260, 2431, 1260, 2429, 1260, 2421, 1260, 2413, 1261, 2394, 1260, 2374, 1261, 2370, 1263, 2370, 1268, L, 2370, 1261, Q, 2360, 1261, 2350, 1262, 2347, 1262, 2345, 1262, 2326, 1262, 2307, 1264, 2306, 1264, 2305, 1264, 2304, 1265, 2304, 1267, 2303, 1269, 2302, 1272, 2300, 1278, 2298, 1285, 2298, 1286, 2298, 1287, 2288, 1297, 2272, 1308, 2271, 1308, 2271, 1310, 2267, 1315, 2264, 1317, 2258, 1321, 2257, 1327, L, 2256, 1330, Q, 2249, 1330, 2243, 1331, L, 2243, 1331, Q, 2243, 1332, 2241, 1332, 2231, 1332, 2222, 1332, 2232, 1332, 2243, 1331, 2244, 1327, 2246, 1323, 2248, 1318, 2250, 1314, 2250, 1313, 2252, 1311, 2257, 1307, 2260, 1302, 2264, 1294, 2268, 1286, 2269, 1285, 2271, 1284, 2272, 1281, 2273, 1279, 2276, 1274, 2280, 1268, 2283, 1262, 2286, 1258, 2287, 1256, 2288, 1255, 2289, 1254, 2289, 1253, 2289, 1248, 2294, 1245, 2295, 1243, 2296, 1242, 2296, 1241, 2297, 1241, 2301, 1240, 2300, 1235, 2299, 1230, 2301, 1223, 2301, 1214, 2306, 1209, 2307, 1207, 2308, 1206, 2309, 1205, 2309, 1204, 2312, 1202, 2313, 1197, 2316, 1183, 2315, 1169, 2314, 1166, 2313, 1164, 2313, 1163, 2312, 1161, 2310, 1153, 2310, 1144, 2310, 1144, 2309, 1143, 2309, 1133, 2308, 1128, 2307, 1126, 2307, 1125, 2304, 1120, 2305, 1112, 2306, 1110, 2305, 1109, 2304, 1105, 2303, 1103, 2303, 1100, 2302, 1097, 2301, 1087, 2295, 1081, 2295, 1080, 2294, 1078, 2293, 1075, 2293, 1072, 2292, 1071, 2291, 1069, 2287, 1067, 2284, 1066, 2278, 1064, 2279, 1055, 2278, 1050, 2277, 1045, 2277, 1043, 2277, 1042, 2273, 1037, 2272, 1030, 2271, 1027, 2271, 1025, 2270, 1023, 2269, 1022, 2268, 1012, 2262, 1009, 2259, 1007, 2257, 1002, 2255, 997, 2255, 993, 2255, 989, 2252, 988, 2250, 986, 2251, 985, 2249, 980, 2245, 976, 2244, 975, 2243, 974, 2240, 969, 2238, 963, 2238, 960, 2237, 958, 2235, 950, 2226, 945, 2219, 942, 2219, 934, 2218, 923, 2218, 913, 2218, 907, 2217, 902, 2215, 893, 2216, 883, 2213, 881, 2213, 878, 2213, 877, 2213, 875, 2213, 873, 2212, 871, 2211, 868, 2212, 864, 2214, 859, 2214, 851, 2214, 844, 2209, 844, 2207, 843, 2206, 843, 2206, 842, 2206, 840, 2204, 836, 2203, 833, 2203, 831, 2202, 830, 2201, 828, 2200, 826, 2198, 820, 2194, 817, 2191, 815, 2189, 809, 2189, 808, 2188, 807, 2188, 800, 2183, 795, 2180, 791, 2178, 788, 2174, 779, 2175, 769, 2175, 766, 2174, 763, 2174, 761, 2174, 758, 2172, 757, 2172, 755, 2171, 754, 2171, 753, 2167, 745, 2162, 740, 2158, 739, 2157, 734, 2157, 732, 2157, 730, 2157, 719, 2155, 712, 2153, 707, 2147, 703, 2142, 699, 2140, 696, 2138, 692, 2136, 690, 2130, 685, 2127, 676, 2125, 674, 2124, 671, 2123, 665, 2123, 658, 2122, 655, 2123, 653, 2124, 645, 2124, 637, 2124, 636, 2124, 636, 2122, 634, 2121, 631, 2121, 630, 2121, 629, 2119, 628, 2119, 625, 2118, 623, 2117, 622, 2115, 618, 2114, 613, 2114, 612, 2113, 611, 2111, 606, 2111, 601, 2112, 596, 2113, 591, 2113, 590, 2113, 589, 2114, 581, 2109, 579, 2108, 578, 2106, 578, 2097, 578, 2091, 576, 2082, 573, 2071, 571, 2071, 577, 2071, 583, 2071, 585, 2070, 585, 2059, 585, 2049, 585, 2052, 582, 2047, 576, 2038, 576, 2027, 576, 2021, 576, 2018, 569, 2017, 568, 2016, 567, 2014, 565, 2012, 563, 2010, 560, 2006, 560, 1996, 559, 1990, 564, 1989, 565, 1988, 567, 1988, 570, 1985, 570, 1984, 570, 1983, 572, 1980, 573, 1977, 574, 1965, 576, 1952, 576, 1946, 576, 1941, 575, 1930, 573, 1918, 573, 1909, 573, 1900, 572, 1891, 569, 1882, 569, 1880, 569, 1879, 569, L, 1879, 569, Q, 1876, 569, 1876, 571, 1876, 573, 1875, 575, 1871, 583, 1870, 594, 1870, 596, 1869, 596, 1867, 597, 1865, 601, 1862, 607, 1854, 606, 1852, 606, 1851, 605, 1850, 605, 1849, 604, 1845, 603, 1845, 600, 1845, 597, 1844, 594, 1842, 585, 1843, 576, 1843, 574, 1842, 574, 1838, 572, 1834, 572, 1832, 571, 1831, 570, 1825, 565, 1825, 555, 1825, 553, 1824, 553, 1821, 552, 1819, 549, 1818, 547, 1817, 546, 1812, 544, 1813, 538, 1814, 529, 1810, 528, 1808, 527, 1807, 527, 1805, 524, 1803, 523, 1799, 518, 1797, 512, 1796, 508, 1794, 505, 1791, 499, 1788, 492, 1787, 490, 1785, 488, 1781, 485, 1775, 482, 1773, 480, 1770, 480, 1769, 479, 1768, 478, 1762, 474, 1757, 465, 1756, 463, 1756, 461, 1756, 455, 1752, 457, 1752, 456, 1753, 455, 1753, 451, 1754, 447, 1755, 444, 1755, 442, 1758, 412, 1758, 382, 1758, 375, 1761, 371, 1772, 353, 1776, 327, 1776, 321, 1779, 316, 1790, 296, 1776, 292, 1770, 291, 1761, 285, 1758, 255, 1756, 224, 1754, 196, 1765, 183, 1767, 179, 1768, 175, 1770, 170, 1768, 169, 1756, 163, 1754, 146, Q, 1752, 112, 1752, 79, Z]],
      "label": "Northern Region",
      "shortLabel": "NR",
      "labelPosition": [113.8, 150.8],
      "labelAlignment": [CEN, MID]
    },
    "CA.MB.PR": {
      "outlines": [[M, 623, 2994, Q, 618, 2992, 610, 2993, 609, 2993, 609, 2993, 608, 2983, 606, 2974, 600, 2974, 592, 2973, 591, 2973, 590, 2973, 589, 2972, 589, 2971, 588, 2970, 587, 2970, 586, 2969, 584, 2968, 582, 2967, 580, 2967, 574, 2965, 566, 2965, 560, 2965, 558, 2962, 552, 2956, 539, 2954, L, 139, 2940, 139, 2996, 124, 2996, 124, 3075, 144, 3075, 144, 3123, 123, 3123, 123, 3215, 142, 3215, 142, 3244, 123, 3244, 123, 3367, 142, 3367, 142, 3388, 127, 3388, 127, 3583, 109, 3583, 109, 3636, 129, 3636, 129, 3737, 108, 3737, 108, 3784, 126, 3784, 126, 3855, 109, 3855, 109, 3935, 558, 3946, 558, 3929, 690, 3929, 690, 3756, 848, 3756, Q, 849, 3754, 849, 3753, 849, 3747, 855, 3748, 857, 3748, 858, 3748, 864, 3741, 865, 3727, 865, 3718, 874, 3719, 877, 3719, 881, 3719, 886, 3719, 886, 3716, 887, 3704, 887, 3692, 887, 3690, 886, 3688, 884, 3682, 875, 3682, 870, 3681, 866, 3679, 860, 3676, 852, 3676, 847, 3676, 847, 3671, 846, 3668, 846, 3664, 846, 3662, 846, 3661, 841, 3653, 841, 3644, 841, 3639, 841, 3635, 841, 3633, 840, 3631, 831, 3623, 832, 3610, 832, 3602, 833, 3594, 834, 3593, 834, 3592, 837, 3589, 838, 3583, 839, 3579, 841, 3577, 844, 3573, 844, 3570, 844, 3564, 845, 3559, 845, 3554, 843, 3553, 840, 3550, 834, 3550, 833, 3549, 832, 3548, 831, 3547, 830, 3546, 827, 3533, 828, 3520, 829, 3509, 819, 3508, 815, 3507, 811, 3507, 805, 3506, 799, 3505, 789, 3502, 790, 3511, 790, 3512, 791, 3512, 795, 3515, 791, 3521, 791, 3522, 790, 3523, 788, 3526, 784, 3525, 782, 3524, 781, 3523, 778, 3521, 775, 3520, 770, 3518, 768, 3517, 767, 3515, 766, 3515, 762, 3514, 762, 3511, 762, 3509, 761, 3508, 759, 3501, 754, 3495, 750, 3490, 745, 3489, 745, 3492, 745, 3494, 746, 3495, 747, 3497, 746, 3499, 747, 3502, 748, 3509, 749, 3520, 749, 3523, 749, 3526, 749, 3527, 748, 3528, 746, 3531, 745, 3535, 745, 3536, 744, 3537, 738, 3545, 731, 3550, 733, 3535, 724, 3529, 723, 3528, 722, 3528, 718, 3517, 720, 3503, 722, 3495, 714, 3496, 708, 3497, 708, 3492, 708, 3488, 709, 3482, 708, 3477, 702, 3476, 699, 3475, 695, 3473, 695, 3446, 695, 3420, 693, 3388, 693, 3356, 693, 3319, 694, 3283, 694, 3275, 692, 3267, 688, 3253, 688, 3238, 689, 3233, 690, 3228, 691, 3221, 686, 3220, 651, 3218, 614, 3219, 615, 3215, 615, 3214, 615, 3212, 615, 3211, 615, 3207, 615, 3204, 618, 3194, 616, 3182, 616, 3180, 617, 3177, 619, 3172, 624, 3171, 625, 3171, 627, 3171, 630, 3169, 632, 3168, 635, 3167, 635, 3165, 635, 3158, 635, 3152, 635, 3149, 634, 3147, 630, 3138, 632, 3128, 634, 3119, 627, 3120, 626, 3120, 624, 3119, 621, 3116, 623, 3109, 622, 3108, 622, 3107, 618, 3099, 618, 3088, 618, 3079, 618, 3068, 618, 3065, 619, 3061, 621, 3043, 613, 3029, 613, 3028, 612, 3026, 610, 3021, 613, 3021, 622, 3019, 629, 3016, 630, 3015, 631, 3013, 633, 3009, 633, 3004, 634, 2996, 626, 2995, Q, 624, 2994, 623, 2994, Z]],
      "label": "Parkland Region",
      "shortLabel": "PR",
      "labelPosition": [39.7, 344.3],
      "labelAlignment": [CEN, MID]
    },
    "CA.MB.IR": {
      "outlines": [[M, 1122, 3339, Q, 1120, 3338, 1117, 3338, 1104, 3335, 1104, 3347, 1103, 3350, 1101, 3353, 1094, 3363, 1096, 3378, 1097, 3396, 1094, 3408, 1093, 3411, 1093, 3414, 1093, 3426, 1092, 3438, 1092, 3443, 1084, 3441, 1071, 3438, 1064, 3427, 1062, 3425, 1060, 3422, 1051, 3414, 1044, 3408, 1041, 3405, 1038, 3402, 1033, 3396, 1030, 3391, 1029, 3388, 1027, 3385, 1026, 3383, 1026, 3381, 1025, 3364, 1026, 3356, 1027, 3344, 1015, 3340, 1008, 3337, 1009, 3332, 1008, 3303, 1007, 3275, 1007, 3270, 999, 3270, 998, 3270, 996, 3269, 987, 3262, 978, 3257, 967, 3259, 966, 3250, 961, 3248, 960, 3247, 955, 3245, 950, 3243, 938, 3238, 936, 3220, 935, 3216, 935, 3214, 934, 3212, 934, 3211, 930, 3189, 920, 3174, 913, 3166, 907, 3157, 901, 3149, 897, 3146, 884, 3138, 877, 3126, 876, 3124, 875, 3123, 867, 3118, 863, 3114, 855, 3104, 848, 3095, 846, 3092, 845, 3090, 838, 3077, 832, 3065, 831, 3064, 831, 3062, 829, 3054, 831, 3050, 832, 3047, 832, 3044, 832, 3029, 826, 3020, 821, 3013, 817, 3005, 810, 2994, 823, 2989, 832, 2985, 842, 2984, 846, 2984, 850, 2982, 854, 2980, 857, 2978, 867, 2972, 872, 2964, L, 638, 2964, Q, 625, 2973, 606, 2974, 608, 2983, 609, 2993, 609, 2993, 610, 2993, 618, 2992, 623, 2994, 624, 2994, 626, 2995, 634, 2996, 633, 3004, 633, 3009, 631, 3013, 630, 3015, 629, 3016, 622, 3019, 613, 3021, 610, 3021, 612, 3026, 613, 3028, 613, 3029, 621, 3043, 619, 3061, 618, 3065, 618, 3068, 618, 3079, 618, 3088, 618, 3099, 622, 3107, 622, 3108, 623, 3109, 621, 3116, 624, 3119, 626, 3120, 627, 3120, 634, 3119, 632, 3128, 630, 3138, 634, 3147, 635, 3149, 635, 3152, 635, 3158, 635, 3165, 635, 3167, 632, 3168, 630, 3169, 627, 3171, 625, 3171, 624, 3171, 619, 3172, 617, 3177, 616, 3180, 616, 3182, 618, 3194, 615, 3204, 615, 3207, 615, 3211, 615, 3212, 615, 3214, 615, 3215, 614, 3219, 651, 3218, 686, 3220, 691, 3221, 690, 3228, 689, 3233, 688, 3238, 688, 3253, 692, 3267, 694, 3275, 694, 3283, 693, 3319, 693, 3356, 693, 3388, 695, 3420, 695, 3446, 695, 3473, 699, 3475, 702, 3476, 708, 3477, 709, 3482, 708, 3488, 708, 3492, 708, 3497, 714, 3496, 722, 3495, 720, 3503, 718, 3517, 722, 3528, 723, 3528, 724, 3529, 733, 3535, 731, 3550, 738, 3545, 744, 3537, 745, 3536, 745, 3535, 746, 3531, 748, 3528, 749, 3527, 749, 3526, 749, 3523, 749, 3520, 748, 3509, 747, 3502, 746, 3499, 747, 3497, 746, 3495, 745, 3494, 745, 3492, 745, 3489, 750, 3490, 754, 3495, 759, 3501, 761, 3508, 762, 3509, 762, 3511, 762, 3514, 766, 3515, 767, 3515, 768, 3517, 770, 3518, 775, 3520, 778, 3521, 781, 3523, 782, 3524, 784, 3525, 788, 3526, 790, 3523, 791, 3522, 791, 3521, 795, 3515, 791, 3512, 790, 3512, 790, 3511, 789, 3502, 799, 3505, 805, 3506, 811, 3507, 815, 3507, 819, 3508, 829, 3509, 828, 3520, 827, 3533, 830, 3546, 831, 3547, 832, 3548, 833, 3549, 834, 3550, 840, 3550, 843, 3553, 845, 3554, 845, 3559, 844, 3564, 844, 3570, 844, 3573, 841, 3577, 839, 3579, 838, 3583, 837, 3589, 834, 3592, 834, 3593, 833, 3594, 832, 3602, 832, 3610, 831, 3623, 840, 3631, 841, 3633, 841, 3635, 841, 3639, 841, 3644, 841, 3653, 846, 3661, 846, 3662, 846, 3664, 846, 3668, 847, 3671, 847, 3676, 852, 3676, 860, 3676, 866, 3679, 870, 3681, 875, 3682, 884, 3682, 886, 3688, 887, 3690, 887, 3692, 887, 3704, 886, 3716, 886, 3719, 881, 3719, 877, 3719, 874, 3719, 865, 3718, 865, 3727, 864, 3741, 858, 3748, 857, 3748, 855, 3748, 849, 3747, 849, 3753, 849, 3754, 848, 3756, 846, 3768, 845, 3780, 845, 3781, 844, 3782, 843, 3783, 842, 3785, 842, 3787, 841, 3788, 835, 3794, 833, 3803, 832, 3806, 832, 3809, 832, 3820, 840, 3825, 841, 3826, 842, 3828, 843, 3829, 843, 3830, 843, 3832, 844, 3834, 844, 3837, 845, 3840, 845, 3843, 851, 3843, 871, 3842, 892, 3842, 900, 3841, 906, 3846, 911, 3849, 915, 3851, 923, 3854, 929, 3863, 929, 3864, 930, 3865, 931, 3867, 932, 3869, 932, 3871, 935, 3872, 935, 3872, 935, 3874, 937, 3886, 945, 3896, 951, 3904, 962, 3911, 963, 3912, 964, 3912, 964, 3913, 965, 3915, 966, 3916, 967, 3918, 974, 3927, 981, 3935, 982, 3936, 984, 3938, 985, 3938, 986, 3938, 989, 3939, 992, 3944, 993, 3945, 993, 3946, 994, 3952, 996, 3957, 997, 3961, 1001, 3960, 1002, 3960, 1002, 3963, 1003, 3970, 1005, 3975, 1008, 3978, 1007, 3983, 1006, 3987, 1011, 3987, 1020, 3987, 1024, 3992, 1025, 3994, 1025, 3996, 1026, 4005, 1030, 4010, 1031, 4011, 1031, 4013, 1031, 4019, 1032, 4025, 1033, 4027, 1034, 4028, 1045, 4027, 1044, 4036, 1044, 4043, 1045, 4051, 1046, 4051, 1047, 4051, 1053, 4051, 1053, 4055, 1051, 4065, 1047, 4073, 1046, 4074, 1046, 4075, 1046, 4077, 1043, 4077, 1041, 4077, 1039, 4077, 1039, 4078, 1037, 4079, 1032, 4080, 1030, 4085, 1029, 4086, 1029, 4087, 1029, 4088, 1028, 4088, 1028, 4089, 1028, 4090, 1029, 4097, 1027, 4100, 1026, 4102, 1026, 4105, 1026, 4118, 1026, 4131, 1026, 4134, 1028, 4136, 1029, 4137, 1029, 4139, 1030, 4142, 1032, 4146, 1034, 4150, 1041, 4153, 1047, 4155, 1056, 4154, 1076, 4154, 1094, 4154, 1101, 4154, 1101, 4163, 1101, 4174, 1101, 4185, 1101, 4194, 1105, 4200, 1106, 4200, 1108, 4200, 1119, 4200, 1128, 4207, 1131, 4209, 1134, 4210, 1137, 4212, 1141, 4214, 1144, 4215, 1147, 4216, 1149, 4217, 1149, 4220, 1147, 4229, 1158, 4230, 1165, 4230, 1171, 4231, 1177, 4231, 1181, 4235, 1183, 4236, 1185, 4237, 1191, 4239, 1200, 4240, 1202, 4240, 1203, 4241, 1206, 4243, 1209, 4245, 1210, 4246, 1212, 4247, 1213, 4248, 1214, 4249, 1214, 4241, 1215, 4232, 1215, 4232, 1217, 4232, 1241, 4232, 1265, 4232, 1267, 4232, 1268, 4231, 1272, 4229, 1277, 4229, 1278, 4229, 1279, 4228, 1281, 4224, 1283, 4221, 1285, 4213, 1287, 4205, 1287, 4204, 1288, 4203, 1293, 4198, 1303, 4200, 1305, 4200, 1306, 4199, 1318, 4195, 1316, 4179, 1317, 4171, 1321, 4167, 1322, 4166, 1323, 4165, L, 1324, 4164, Q, 1332, 4165, 1332, 4158, 1331, 4147, 1339, 4143, 1339, 4143, 1340, 4142, 1341, 4142, 1342, 4141, 1343, 4128, 1342, 4116, 1342, 4114, 1341, 4113, 1339, 4110, 1335, 4108, 1335, 4108, 1334, 4107, 1333, 4104, 1335, 4099, 1336, 4099, 1336, 4097, 1338, 4094, 1340, 4091, 1341, 4090, 1341, 4088, 1341, 4081, 1336, 4077, 1330, 4071, 1329, 4064, 1328, 4060, 1330, 4058, 1331, 4056, 1331, 4055, 1318, 4048, 1309, 4039, 1307, 4037, 1307, 4034, 1307, 4026, 1309, 4021, 1312, 4016, 1313, 4010, 1314, 3997, 1309, 3990, 1307, 3988, 1307, 3986, 1306, 3984, 1306, 3983, 1304, 3974, 1306, 3967, 1307, 3963, 1308, 3958, 1310, 3948, 1306, 3945, 1299, 3940, 1301, 3931, 1301, 3927, 1302, 3922, 1303, 3915, 1306, 3906, 1307, 3903, 1309, 3898, 1309, 3897, 1309, 3895, 1312, 3880, 1309, 3867, 1307, 3861, 1307, 3855, 1307, 3831, 1309, 3807, 1309, 3804, 1310, 3801, 1313, 3788, 1321, 3779, 1322, 3777, 1324, 3774, 1324, 3773, 1325, 3771, 1333, 3759, 1338, 3750, 1343, 3743, 1345, 3731, 1345, 3728, 1346, 3725, 1348, 3719, 1353, 3718, 1357, 3715, 1356, 3707, 1353, 3689, 1362, 3677, 1358, 3671, 1347, 3673, 1328, 3676, 1322, 3695, 1321, 3698, 1321, 3701, 1319, 3709, 1317, 3716, 1316, 3718, 1314, 3720, 1299, 3733, 1296, 3716, 1293, 3701, 1299, 3690, 1301, 3685, 1303, 3679, 1304, 3677, 1306, 3675, 1306, 3673, 1308, 3672, 1315, 3668, 1314, 3659, 1312, 3647, 1315, 3640, 1316, 3638, 1317, 3635, 1318, 3629, 1326, 3627, 1327, 3627, 1328, 3625, 1331, 3617, 1341, 3620, 1347, 3621, 1349, 3617, 1350, 3615, 1353, 3614, 1365, 3612, 1373, 3600, 1374, 3598, 1375, 3595, 1376, 3592, 1376, 3589, 1376, 3588, 1374, 3586, 1364, 3577, 1358, 3570, 1356, 3568, 1356, 3565, 1356, 3556, 1355, 3547, 1354, 3546, 1354, 3544, 1353, 3530, 1342, 3524, 1339, 3523, 1338, 3520, 1335, 3515, 1329, 3513, 1314, 3507, 1303, 3515, 1301, 3516, 1299, 3518, 1297, 3518, 1296, 3520, 1292, 3529, 1281, 3534, 1280, 3535, 1280, 3538, 1279, 3540, 1277, 3540, 1268, 3546, 1270, 3562, 1273, 3579, 1265, 3589, 1259, 3597, 1250, 3598, 1243, 3598, 1241, 3603, 1241, 3604, 1240, 3606, 1238, 3607, 1237, 3609, 1235, 3612, 1232, 3614, 1224, 3622, 1218, 3607, 1216, 3604, 1212, 3600, 1210, 3598, 1211, 3595, 1209, 3575, 1215, 3558, 1216, 3555, 1217, 3550, 1217, 3533, 1218, 3517, 1218, 3515, 1219, 3513, 1224, 3504, 1232, 3499, 1245, 3492, 1242, 3471, 1241, 3465, 1240, 3459, 1239, 3456, 1238, 3453, 1235, 3438, 1234, 3423, 1233, 3417, 1229, 3413, 1227, 3411, 1225, 3408, 1223, 3406, 1221, 3404, 1218, 3400, 1216, 3396, 1211, 3387, 1206, 3379, 1204, 3377, 1205, 3374, 1206, 3362, 1196, 3365, 1189, 3367, 1185, 3373, 1182, 3376, 1179, 3380, 1174, 3386, 1169, 3394, 1168, 3396, 1167, 3398, 1164, 3408, 1159, 3417, 1158, 3419, 1156, 3419, 1150, 3423, 1150, 3432, 1137, 3426, 1139, 3411, 1138, 3403, 1136, 3398, 1135, 3396, 1135, 3393, 1134, 3381, 1147, 3381, 1149, 3380, 1151, 3379, 1153, 3377, 1156, 3378, 1163, 3378, 1162, 3371, 1161, 3368, 1160, 3365, 1159, 3358, 1160, 3350, 1161, 3340, 1153, 3338, 1138, 3334, 1127, 3341, Q, 1126, 3341, 1122, 3339, Z]],
      "label": "Interlake Region",
      "shortLabel": "IR",
      "labelPosition": [107.1, 367.6],
      "labelAlignment": [CEN, MID]
    },
    "CA.MB.ER": {
      "outlines": [[M, 1822, 2963, L, 1208, 2964, Q, 1207, 2968, 1208, 2973, 1208, 2976, 1206, 2976, 1198, 2975, 1189, 2977, 1188, 2984, 1189, 2989, 1189, 2991, 1190, 2993, 1192, 2999, 1194, 3006, 1195, 3011, 1198, 3012, 1200, 3013, 1200, 3014, 1206, 3014, 1208, 3018, 1203, 3027, 1197, 3038, 1195, 3050, 1205, 3054, 1206, 3054, 1207, 3055, 1210, 3060, 1216, 3065, 1221, 3069, 1220, 3078, 1220, 3086, 1225, 3091, 1226, 3092, 1227, 3094, 1229, 3097, 1232, 3100, 1238, 3106, 1237, 3115, 1235, 3125, 1241, 3130, 1247, 3135, 1254, 3141, 1259, 3147, 1260, 3156, 1261, 3160, 1261, 3164, 1261, 3173, 1267, 3179, 1270, 3181, 1270, 3184, 1271, 3194, 1271, 3205, 1271, 3207, 1272, 3209, 1273, 3210, 1274, 3211, 1276, 3218, 1280, 3223, 1283, 3225, 1284, 3229, 1286, 3236, 1285, 3244, 1285, 3246, 1284, 3247, 1282, 3251, 1282, 3256, 1282, 3258, 1283, 3260, 1285, 3264, 1288, 3268, 1289, 3270, 1290, 3271, 1291, 3271, 1292, 3272, 1294, 3273, 1295, 3274, 1299, 3279, 1300, 3287, L, 1300, 3288, Q, 1287, 3289, 1274, 3290, 1273, 3290, 1272, 3290, 1271, 3298, 1273, 3308, L, 1273, 3308, Q, 1272, 3310, 1274, 3312, 1276, 3314, 1277, 3318, 1277, 3322, 1280, 3326, 1281, 3326, 1281, 3327, 1282, 3329, 1283, 3330, 1287, 3334, 1291, 3338, 1303, 3349, 1313, 3365, 1318, 3373, 1322, 3378, 1328, 3384, 1332, 3389, 1333, 3390, 1334, 3391, 1337, 3395, 1340, 3399, 1344, 3404, 1342, 3415, 1335, 3415, 1333, 3421, 1333, 3422, 1332, 3422, 1330, 3423, 1329, 3423, 1328, 3424, 1328, 3426, 1326, 3431, 1327, 3438, 1327, 3448, 1333, 3450, 1336, 3450, 1338, 3451, 1348, 3451, 1358, 3452, 1365, 3452, 1368, 3459, 1369, 3461, 1370, 3463, 1371, 3464, 1372, 3466, 1373, 3469, 1376, 3468, L, 1378, 3468, Q, 1378, 3474, 1381, 3478, 1382, 3481, 1381, 3486, 1380, 3494, 1371, 3494, 1370, 3495, 1368, 3495, 1355, 3494, 1344, 3496, 1347, 3496, 1347, 3500, 1348, 3501, 1349, 3501, 1353, 3505, 1358, 3508, 1364, 3512, 1368, 3517, 1370, 3519, 1370, 3520, 1371, 3521, 1372, 3522, 1373, 3523, 1373, 3524, 1375, 3528, 1380, 3532, 1382, 3534, 1384, 3536, 1390, 3545, 1398, 3550, 1399, 3550, 1400, 3551, 1405, 3556, 1409, 3566, 1413, 3574, 1418, 3581, 1413, 3587, 1403, 3588, 1400, 3588, 1401, 3593, 1401, 3599, 1402, 3604, 1402, 3606, 1405, 3607, 1405, 3611, 1408, 3614, 1411, 3617, 1415, 3622, 1417, 3624, 1417, 3625, 1420, 3631, 1424, 3634, 1426, 3636, 1427, 3638, 1429, 3645, 1436, 3651, 1439, 3654, 1445, 3659, 1452, 3664, 1459, 3671, 1460, 3672, 1462, 3674, 1469, 3681, 1472, 3690, 1472, 3692, 1473, 3693, 1474, 3695, 1476, 3696, 1480, 3701, 1485, 3707, 1482, 3711, 1477, 3710, 1472, 3709, 1470, 3713, 1468, 3718, 1463, 3719, 1463, 3720, 1462, 3720, 1461, 3723, 1460, 3725, 1459, 3727, 1457, 3727, 1452, 3727, 1452, 3731, 1450, 3743, 1451, 3757, 1452, 3764, 1449, 3767, 1448, 3768, 1447, 3769, 1437, 3776, 1430, 3787, 1426, 3792, 1426, 3798, 1425, 3812, 1416, 3825, 1415, 3827, 1414, 3829, 1410, 3842, 1409, 3855, 1407, 3859, 1405, 3863, 1405, 3864, 1404, 3864, 1396, 3865, 1395, 3872, 1394, 3874, 1393, 3876, 1393, 3877, 1393, 3878, 1393, 3883, 1390, 3890, 1390, 3891, 1390, 3892, 1389, 3896, 1388, 3902, 1388, 3903, 1388, 3904, 1389, 3909, 1384, 3912, 1372, 3919, 1373, 3934, 1373, 3936, 1372, 3936, 1370, 3937, 1370, 3941, 1369, 3951, 1362, 3958, 1358, 3961, 1359, 3965, 1360, 3974, 1355, 3980, 1353, 3982, 1352, 3987, 1351, 3989, 1351, 3991, 1344, 4008, 1332, 4026, 1331, 4028, 1331, 4029, 1332, 4035, 1332, 4043, 1331, 4044, 1331, 4045, 1330, 4046, 1332, 4049, 1333, 4051, 1333, 4052, 1332, 4054, 1331, 4056, 1331, 4057, 1330, 4059, 1328, 4061, 1329, 4065, 1330, 4072, 1336, 4078, 1341, 4082, 1341, 4089, 1341, 4091, 1340, 4092, 1338, 4095, 1336, 4098, 1336, 4100, 1335, 4100, 1333, 4105, 1334, 4108, 1335, 4109, 1335, 4109, 1339, 4111, 1341, 4114, 1342, 4115, 1342, 4117, 1343, 4129, 1342, 4142, 1341, 4143, 1340, 4143, 1339, 4144, 1339, 4144, 1331, 4148, 1332, 4159, 1332, 4166, 1324, 4165, L, 1323, 4166, Q, 1322, 4167, 1321, 4168, 1317, 4172, 1316, 4180, 1318, 4196, 1306, 4200, 1305, 4201, 1303, 4201, 1293, 4199, 1288, 4204, 1287, 4205, 1287, 4206, 1285, 4214, 1283, 4222, 1281, 4225, 1279, 4229, 1282, 4228, 1283, 4229, 1284, 4230, 1285, 4230, 1291, 4231, 1290, 4236, 1290, 4243, 1294, 4243, 1299, 4244, 1303, 4250, 1303, 4251, 1304, 4253, 1307, 4260, 1308, 4270, 1309, 4282, 1298, 4281, 1288, 4279, 1289, 4289, 1291, 4298, 1282, 4297, 1278, 4296, 1277, 4298, 1276, 4300, 1275, 4300, 1273, 4301, 1270, 4302, 1269, 4302, 1267, 4302, 1260, 4302, 1261, 4307, 1261, 4310, 1261, 4314, 1263, 4313, 1263, 4314, 1264, 4315, 1266, 4316, 1267, 4316, 1268, 4317, 1274, 4320, 1278, 4325, 1280, 4326, 1281, 4327, 1286, 4331, 1286, 4339, 1286, 4348, 1287, 4359, 1288, 4361, 1288, 4363, 1289, 4369, 1286, 4372, 1283, 4374, 1281, 4377, 1273, 4386, 1274, 4397, 1273, 4398, 1272, 4399, 1270, 4401, 1267, 4405, 1264, 4408, 1259, 4408, 1254, 4408, 1252, 4412, 1247, 4417, 1246, 4425, 1246, 4427, 1245, 4430, 1244, 4432, 1243, 4434, 1243, 4435, 1242, 4435, 1235, 4436, 1234, 4443, 1233, 4445, 1233, 4445, 1230, 4447, 1229, 4449, 1228, 4450, 1228, 4451, 1223, 4456, 1222, 4460, 1221, 4462, 1221, 4464, 1220, 4466, 1219, 4467, 1216, 4473, 1215, 4480, 1214, 4482, 1213, 4486, 1212, 4489, 1212, 4492, 1210, 4512, 1218, 4524, 1221, 4529, 1221, 4536, 1221, 4538, 1222, 4538, 1224, 4540, 1225, 4543, 1226, 4545, 1229, 4547, 1237, 4551, 1235, 4560, 1234, 4567, 1237, 4569, 1238, 4571, 1238, 4573, 1240, 4579, 1243, 4582, 1247, 4584, 1251, 4588, 1252, 4590, 1252, 4590, 1253, 4613, 1253, 4637, L, 1793, 4637, 1781, 4215, 1781, 3962, 1765, 3545, 1769, 3023, Z]],
      "label": "Eastern Region",
      "shortLabel": "ER",
      "labelPosition": [151.5, 328.9],
      "labelAlignment": [CEN, MID]
    },
    "CA.MB.CR": {
      "outlines": [[M, 832, 3885, Q, 829, 3882, 828, 3878, 827, 3876, 826, 3874, 826, 3867, 822, 3862, 819, 3857, 820, 3851, 820, 3837, 815, 3828, 811, 3820, 806, 3813, 805, 3812, 803, 3811, 801, 3810, 800, 3807, 797, 3799, 796, 3791, 796, 3781, 801, 3777, 795, 3777, 789, 3777, 784, 3777, 783, 3776, 782, 3772, 782, 3767, 782, 3767, 782, 3766, 781, 3765, 779, 3763, 778, 3760, 780, 3757, 780, 3757, 780, 3756, L, 690, 3756, 690, 3922, Q, 691, 3953, 691, 3985, 692, 3987, 692, 3989, 690, 3999, 690, 4010, 690, 4015, 690, 4022, 689, 4057, 689, 4091, 688, 4102, 693, 4106, 695, 4107, 699, 4109, 706, 4112, 705, 4123, 705, 4124, 705, 4126, 705, 4128, 704, 4130, 702, 4135, 701, 4143, 701, 4144, 700, 4145, 700, 4151, 700, 4157, 700, 4158, 700, 4160, 702, 4164, 708, 4166, 709, 4167, 711, 4168, 717, 4170, 724, 4170, 726, 4170, 726, 4171, 729, 4174, 735, 4175, 737, 4176, 737, 4178, 739, 4190, 739, 4202, 739, 4212, 740, 4223, 740, 4230, 740, 4240, 740, 4269, 739, 4299, 738, 4304, 737, 4308, 737, 4311, 736, 4314, 735, 4342, 735, 4370, 735, 4387, 735, 4405, 749, 4405, 763, 4404, 774, 4403, 783, 4403, 819, 4403, 854, 4403, 890, 4403, 926, 4402, L, 927, 4400, Q, 930, 4391, 927, 4384, 927, 4382, 927, 4381, 927, 4345, 927, 4309, 927, 4305, 928, 4302, 928, 4301, 930, 4300, 933, 4299, 936, 4299, 971, 4299, 1005, 4299, 1026, 4298, 1048, 4298, 1082, 4296, 1116, 4296, 1151, 4296, 1186, 4295, 1200, 4295, 1214, 4296, 1213, 4273, 1212, 4249, 1212, 4248, 1212, 4247, 1210, 4246, 1209, 4245, 1207, 4243, 1204, 4241, 1203, 4240, 1201, 4240, 1192, 4239, 1186, 4237, 1183, 4236, 1181, 4235, 1177, 4231, 1172, 4231, 1165, 4230, 1158, 4230, 1148, 4229, 1150, 4220, 1150, 4217, 1148, 4216, 1145, 4215, 1142, 4214, 1138, 4212, 1134, 4210, 1131, 4209, 1129, 4207, 1120, 4200, 1108, 4200, 1107, 4200, 1106, 4200, 1102, 4194, 1102, 4185, 1102, 4174, 1102, 4163, 1101, 4154, 1095, 4154, 1076, 4154, 1057, 4154, 1047, 4155, 1041, 4153, 1035, 4150, 1033, 4146, 1030, 4142, 1030, 4139, 1029, 4137, 1029, 4136, 1026, 4134, 1027, 4131, 1027, 4118, 1027, 4105, 1027, 4102, 1028, 4100, 1029, 4097, 1029, 4090, 1029, 4089, 1029, 4088, 1029, 4088, 1029, 4087, 1028, 4088, 1027, 4088, 1019, 4086, 1014, 4090, 1014, 4095, 1009, 4100, 1008, 4102, 1008, 4103, 1005, 4108, 999, 4110, 999, 4111, 998, 4111, 989, 4114, 988, 4120, 987, 4122, 987, 4125, 985, 4130, 984, 4137, 984, 4138, 984, 4139, 983, 4141, 981, 4141, 967, 4142, 952, 4142, 951, 4141, 950, 4142, 945, 4145, 940, 4145, 929, 4146, 929, 4137, 929, 4136, 927, 4134, 925, 4132, 926, 4130, 926, 4122, 921, 4117, 920, 4117, 919, 4116, 913, 4116, 907, 4118, 903, 4119, 900, 4121, 893, 4124, 895, 4133, 896, 4140, 893, 4145, 893, 4146, 892, 4146, 881, 4148, 880, 4137, 878, 4111, 878, 4085, 878, 4069, 881, 4054, 881, 4051, 881, 4049, 881, 4048, 882, 4047, 883, 4044, 883, 4039, 882, 4007, 883, 3976, 882, 3973, 882, 3969, 881, 3965, 878, 3963, 873, 3958, 872, 3951, 872, 3950, 872, 3949, 866, 3941, 860, 3936, 859, 3935, 859, 3933, 858, 3930, 857, 3929, 854, 3921, 852, 3913, 851, 3910, 850, 3907, 849, 3906, 849, 3904, 848, 3903, 847, 3902, 846, 3901, 845, 3900, 840, 3897, 838, 3893, 836, 3891, 835, 3889, Q, 834, 3887, 832, 3885, Z]],
      "label": "Central Region",
      "shortLabel": "CR",
      "labelPosition": [83.1, 420.8],
      "labelAlignment": [CEN, MID]
    },
    "CA.MB.PM": {
      "outlines": [[M, 1213, 4306, Q, 1213, 4301, 1213, 4296, 1199, 4295, 1185, 4295, 1150, 4296, 1115, 4296, 1081, 4296, 1047, 4298, 1025, 4298, 1004, 4299, 970, 4299, 935, 4299, 932, 4299, 929, 4300, 927, 4301, 927, 4302, 926, 4305, 926, 4309, 926, 4345, 926, 4381, 926, 4382, 926, 4384, 929, 4391, 926, 4400, L, 925, 4402, Q, 889, 4403, 853, 4403, 818, 4403, 782, 4403, 773, 4403, 762, 4404, 748, 4405, 734, 4405, 734, 4422, 735, 4439, 735, 4456, 732, 4471, 732, 4473, 732, 4474, 728, 4476, 728, 4480, L, 728, 4482, Q, 757, 4485, 787, 4485, 805, 4484, 814, 4497, 815, 4498, 816, 4499, 821, 4500, 825, 4503, 826, 4505, 826, 4506, 826, 4517, 834, 4520, 836, 4521, 836, 4522, 837, 4526, 836, 4532, 837, 4534, 839, 4534, 841, 4535, 843, 4537, 848, 4539, 847, 4547, 847, 4549, 848, 4549, 850, 4554, 850, 4560, 849, 4596, 849, 4631, L, 951, 4636, 1252, 4636, Q, 1252, 4612, 1251, 4589, 1251, 4589, 1250, 4587, 1246, 4583, 1243, 4581, 1239, 4578, 1238, 4572, 1237, 4570, 1236, 4568, 1233, 4566, 1234, 4559, 1236, 4550, 1229, 4546, 1226, 4544, 1225, 4542, 1223, 4539, 1222, 4537, 1221, 4537, 1221, 4535, 1221, 4528, 1217, 4523, 1210, 4511, 1212, 4491, 1212, 4488, 1213, 4485, 1214, 4481, 1214, 4479, 1215, 4472, 1219, 4466, 1220, 4465, 1220, 4463, 1221, 4461, 1222, 4459, 1222, 4455, 1227, 4450, 1227, 4449, 1228, 4448, 1229, 4446, 1232, 4444, 1233, 4444, 1234, 4442, 1235, 4435, 1242, 4434, 1242, 4434, 1243, 4433, 1243, 4431, 1245, 4429, 1245, 4426, 1245, 4424, 1246, 4416, 1251, 4411, 1253, 4407, 1258, 4407, 1264, 4407, 1267, 4404, 1269, 4400, 1272, 4398, 1273, 4397, 1273, 4396, 1273, 4385, 1280, 4376, 1283, 4373, 1285, 4371, 1288, 4368, 1288, 4362, 1287, 4360, 1287, 4358, 1286, 4347, 1285, 4338, 1285, 4330, 1280, 4326, 1279, 4325, 1278, 4324, 1274, 4319, 1268, 4316, 1266, 4315, 1265, 4315, 1264, 4314, 1263, 4313, 1262, 4312, 1260, 4313, 1260, 4314, 1260, 4315, 1259, 4316, 1258, 4316, 1251, 4317, 1243, 4317, 1239, 4317, 1234, 4318, 1221, 4319, 1214, 4309, Q, 1214, 4308, 1213, 4306, Z]],
      "label": "Pembina Region",
      "shortLabel": "PM",
      "labelPosition": [102.8, 448],
      "labelAlignment": [CEN, MID]
    },
    "CA.MB.WR": {
      "outlines": [[M, 690, 3929, L, 558, 3929, 558, 3946, 123, 3935, 123, 4004, 103, 4004, 103, 4081, 124, 4081, 124, 4120, 106, 4120, 106, 4223, 124, 4223, 124, 4273, 106, 4273, 106, 4376, 124, 4376, 124, 4395, 105, 4395, 105, 4522, 129, 4522, 129, 4556, 111, 4556, 111, 4597, 849, 4631, Q, 849, 4596, 850, 4560, 851, 4554, 848, 4549, 847, 4549, 848, 4547, 848, 4539, 844, 4537, 841, 4535, 839, 4534, 838, 4534, 837, 4532, 837, 4526, 836, 4522, 836, 4521, 834, 4520, 826, 4517, 826, 4506, 827, 4505, 825, 4503, 821, 4500, 817, 4499, 815, 4498, 814, 4497, 805, 4484, 787, 4485, 757, 4485, 728, 4482, L, 728, 4480, Q, 729, 4476, 732, 4474, 733, 4473, 733, 4471, 736, 4456, 735, 4439, 735, 4422, 735, 4405, 734, 4387, 734, 4370, 734, 4342, 736, 4314, 736, 4311, 737, 4308, 737, 4304, 738, 4299, 739, 4269, 739, 4240, 740, 4230, 739, 4223, 739, 4212, 739, 4202, 739, 4190, 737, 4178, 737, 4176, 734, 4175, 728, 4174, 726, 4171, 725, 4170, 724, 4170, 716, 4170, 710, 4168, 709, 4167, 707, 4166, 702, 4164, 700, 4160, 699, 4158, 699, 4157, 699, 4151, 700, 4145, 700, 4144, 701, 4143, 701, 4135, 704, 4130, 704, 4128, 704, 4126, 704, 4124, 704, 4123, 706, 4112, 698, 4109, 694, 4107, 693, 4106, 688, 4102, 688, 4091, 689, 4057, 689, 4022, 690, 4015, 690, 4010, 690, 3999, 692, 3989, 691, 3987, 691, 3985, Q, 690, 3956, 690, 3929, Z]],
      "label": "Western Region",
      "shortLabel": "WR",
      "labelPosition": [32.6, 427.7],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'manitoba',
  type: 'maps'
};

/***/ })

/******/ });
}));
