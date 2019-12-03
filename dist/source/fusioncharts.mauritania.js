
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
/******/ 	return __webpack_require__(__webpack_require__.s = 638);
/******/ })
/************************************************************************/
/******/ ({

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(639);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 639:
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
 * @id fusionmaps.Mauritania.20.10-30-2012 06:49:13
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
  "name": "Mauritania",
  "revision": 20,
  "standaloneInit": true,
  "baseWidth": 320,
  "baseHeight": 350,
  "baseScaleFactor": 10,
  "entities": {
    "MR.NO": {
      "outlines": [[M, 414, 2433, Q, 414, 2449, 414, 2470, L, 414, 2478, Q, 454, 2473, 454, 2451, 454, 2449, 441, 2433, Z]],
      "label": "Nouakchott",
      "shortLabel": "NO",
      "labelPosition": [29.6, 245.6],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [[M, 296, 2456, L, 433, 2456]]
    },
    "MR.TZ": {
      "outlines": [[M, 2184, 431, L, 1414, 432, 1402, 1103, 1366, 1103, 1362, 1111, 1348, 1111, 1336, 1121, 1324, 1122, 1312, 1135, 1310, 1133, 1275, 1133, Q, 1153, 1204, 1133, 1254, L, 1133, 1290, 1145, 1297, 1148, 1319, 1148, 1324, 1152, 1346, 1162, 1608, 1401, 1680, 1846, 1671, 2718, 936, Q, 2700, 810, 2681, 683, L, 3092, 673, 3086, 663, 2184, 99, Z]],
      "label": "Tiris Zemmour",
      "shortLabel": "TZ",
      "labelPosition": [195.2, 92],
      "labelAlignment": [CEN, MID]
    },
    "MR.DN": {
      "outlines": [[M, 356, 1980, Q, 354, 1982, 353, 1988, 351, 1993, 347, 1997, 342, 2001, 340, 2011, 337, 2020, 333, 2018, 330, 2015, 332, 2020, 335, 2025, 329, 2033, 323, 2041, 324, 2049, 324, 2057, 325, 2058, 325, 2059, 323, 2060, L, 323, 2061, Q, 330, 2061, 332, 2060, 333, 2058, 337, 2054, 340, 2049, 343, 2042, 346, 2034, 345, 2029, 343, 2011, 353, 2001, 355, 1999, 356, 1996, 357, 1994, 357, 1991, 357, 1990, 357, 1989, 357, 1987, 357, 1984, 357, 1983, 358, 1981, 357, 1980, 358, 1978, Q, 357, 1979, 356, 1980, Z], [M, 431, 1622, Q, 412, 1622, 393, 1622, 374, 1622, 356, 1622, 338, 1622, 320, 1622, 301, 1622, 283, 1622, 263, 1622, 244, 1623, 229, 1623, 215, 1621, 208, 1671, 192, 1709, L, 181, 1738, 189, 1756, Q, 199, 1711, 227, 1668, L, 297, 1804, 315, 1812, 319, 1778, 353, 1826, 353, 1854, 380, 1885, Q, 380, 1887, 380, 1888, 380, 1920, 382, 1945, 385, 1971, 379, 1972, 372, 1973, 369, 1977, 365, 1981, 365, 1985, 365, 1988, 366, 1993, 368, 1999, 370, 1999, 373, 1999, 374, 1999, 377, 1997, 382, 2002, 357, 2066, 324, 2092, L, 323, 2094, Q, 323, 2097, 323, 2100, 331, 2100, 339, 2100, 343, 2100, 346, 2096, 349, 2091, 353, 2092, 357, 2093, 364, 2093, 372, 2092, 373, 2092, L, 525, 1776, 475, 1690, 882, 1690, Q, 879, 1669, 866, 1656, L, 863, 1634, Q, 620, 1632, 608, 1629, 591, 1624, 573, 1623, 556, 1622, 538, 1622, 520, 1622, 503, 1622, 485, 1622, 468, 1622, Q, 449, 1622, 431, 1622, Z]],
      "label": "Dakhlet Nouadhibou",
      "shortLabel": "DN",
      "labelPosition": [41.3, 173.6],
      "labelAlignment": [CEN, MID]
    },
    "MR.IN": {
      "outlines": [[M, 861, 1942, L, 861, 1794, 870, 1793, Q, 871, 1792, 871, 1791, L, 873, 1739, 882, 1735, 881, 1690, 474, 1690, 524, 1776, 372, 2092, Q, 379, 2092, 363, 2114, 356, 2115, 356, 2122, 356, 2128, 353, 2129, 350, 2130, 345, 2128, L, 339, 2125, Q, 339, 2124, 339, 2123, 337, 2123, 336, 2123, 336, 2123, 335, 2123, 325, 2123, 315, 2124, 313, 2124, 310, 2125, 307, 2125, 304, 2125, 304, 2129, 304, 2133, 304, 2135, 305, 2136, 308, 2141, 312, 2143, 314, 2145, 315, 2147, 323, 2153, 325, 2156, 327, 2159, 328, 2160, 329, 2160, 335, 2166, 342, 2171, 346, 2173, 351, 2175, 355, 2182, 359, 2188, 360, 2190, 360, 2192, 361, 2195, 361, 2197, 365, 2201, 367, 2204, 370, 2207, 371, 2208, 372, 2210, 373, 2211, 374, 2212, 378, 2218, 378, 2224, 378, 2226, 379, 2227, 381, 2234, 383, 2238, L, 844, 2238, 844, 2128, 874, 2088, 872, 1942, Z]],
      "label": "Inchiri",
      "shortLabel": "IN",
      "labelPosition": [63.3, 196.4],
      "labelAlignment": [CEN, MID]
    },
    "MR.TR": {
      "outlines": [[M, 1074, 2232, L, 844, 2238, 383, 2238, Q, 386, 2246, 386, 2247, 387, 2249, 387, 2262, 387, 2275, 387, 2294, 387, 2295, 388, 2296, 389, 2299, 389, 2302, 389, 2304, 390, 2305, 390, 2306, 391, 2307, 391, 2309, 392, 2310, 393, 2314, 393, 2317, 393, 2318, 394, 2319, 396, 2321, 398, 2325, 398, 2327, 400, 2328, 400, 2329, 400, 2329, 401, 2332, 402, 2334, 403, 2336, 404, 2337, 404, 2338, 405, 2339, 406, 2341, 408, 2344, 409, 2345, 409, 2346, 409, 2351, 413, 2354, 413, 2373, 413, 2392, 413, 2412, 413, 2431, 413, 2432, 413, 2433, L, 441, 2433, Q, 453, 2449, 453, 2451, 453, 2473, 413, 2478, 413, 2493, 413, 2508, 413, 2523, 413, 2537, 411, 2538, 410, 2542, 407, 2550, 404, 2557, 403, 2559, 403, 2560, 403, 2580, 403, 2599, 404, 2604, 400, 2608, 399, 2611, 399, 2613, 399, 2615, 398, 2616, 397, 2620, 396, 2623, 394, 2629, 390, 2635, 388, 2639, 387, 2642, L, 363, 2696, Q, 359, 2699, 358, 2705, 357, 2710, 355, 2714, 354, 2717, 353, 2717, 353, 2716, 352, 2716, 352, 2717, 351, 2719, 350, 2721, 349, 2724, 348, 2727, 347, 2729, 347, 2730, 346, 2730, 345, 2731, 345, 2732, 313, 2803, 300, 2843, 279, 2906, 277, 2912, L, 275, 2981, 287, 2980, 298, 2953, 312, 2942, 343, 2861, 394, 2861, 394, 2873, Q, 396, 2873, 398, 2873, 418, 2873, 437, 2873, 457, 2873, 476, 2873, 496, 2873, 515, 2873, 519, 2873, 523, 2874, 525, 2874, 528, 2872, 530, 2870, 531, 2870, L, 531, 2869, Q, 531, 2868, 531, 2867, 532, 2865, 533, 2864, 540, 2862, 547, 2862, 557, 2862, 566, 2863, 567, 2863, 568, 2863, 569, 2863, 570, 2863, 573, 2863, 575, 2861, 578, 2859, 580, 2856, L, 627, 2856, 632, 2844, 651, 2843, 658, 2830, 672, 2830, 672, 2844, 768, 2792, 780, 2764, Q, 797, 2761, 812, 2744, 815, 2739, 848, 2686, 882, 2633, 930, 2591, 978, 2549, 1005, 2527, 1030, 2504, 1077, 2467, 1078, 2467, 1078, 2466, L, 1223, 2347, 1222, 2347, Z]],
      "label": "Trarza",
      "shortLabel": "TR",
      "labelPosition": [66.9, 251.9],
      "labelAlignment": [CEN, MID]
    },
    "MR.GD": {
      "outlines": [[M, 1479, 3019, Q, 1479, 3014, 1478, 3009, 1477, 3001, 1473, 2991, 1472, 2989, 1471, 2989, 1464, 2988, 1462, 2983, 1457, 2988, 1455, 2991, 1453, 2998, 1447, 3003, 1446, 3004, 1446, 3005, 1443, 3010, 1437, 3011, 1427, 3013, 1419, 3009, 1418, 3008, 1417, 3008, 1414, 3006, 1413, 3004, 1410, 2998, 1404, 2993, 1401, 2990, 1391, 2986, 1391, 2990, 1392, 2993, 1393, 3000, 1389, 3005, 1381, 3013, 1371, 3021, 1370, 3022, 1369, 3023, 1368, 3025, 1367, 3026, 1365, 3027, 1363, 3032, 1360, 3036, 1354, 3040, 1348, 3043, 1345, 3044, 1342, 3045, 1341, 3046, 1339, 3047, 1338, 3048, 1313, 3075, 1283, 3095, 1282, 3096, 1282, 3097, 1282, 3104, 1277, 3106, 1276, 3106, 1276, 3107, 1274, 3117, 1267, 3121, 1266, 3122, 1266, 3123, 1264, 3129, 1262, 3132, 1260, 3133, 1259, 3134, 1252, 3135, 1245, 3135, 1243, 3135, 1242, 3136, 1237, 3138, 1234, 3145, 1231, 3155, 1227, 3165, 1226, 3167, 1226, 3169, 1225, 3171, 1225, 3173, 1221, 3182, 1219, 3191, 1216, 3211, 1207, 3225, 1204, 3230, 1204, 3235, 1204, 3235, 1205, 3236, 1206, 3237, 1208, 3239, 1209, 3240, 1210, 3242, 1210, 3244, 1215, 3247, 1219, 3250, 1223, 3253, 1227, 3256, 1235, 3255, 1243, 3253, 1244, 3254, 1249, 3259, 1255, 3262, 1257, 3263, 1259, 3266, 1260, 3268, 1262, 3270, 1269, 3276, 1272, 3278, 1274, 3280, 1275, 3282, 1276, 3283, 1278, 3286, 1281, 3289, 1281, 3291, 1282, 3292, 1283, 3296, 1284, 3300, 1286, 3304, 1287, 3308, 1294, 3315, 1298, 3319, 1301, 3321, 1306, 3324, 1308, 3325, 1310, 3326, 1314, 3327, 1318, 3328, 1328, 3333, 1337, 3339, 1345, 3342, 1353, 3345, 1375, 3345, 1385, 3345, 1393, 3343, 1395, 3342, 1405, 3338, 1414, 3334, 1423, 3324, 1432, 3315, 1441, 3304, L, 1441, 3203, 1454, 3192, 1454, 3174, 1461, 3163, 1467, 3141, 1471, 3141, Q, 1471, 3137, 1471, 3135, 1471, 3133, 1472, 3132, 1473, 3130, 1475, 3129, 1478, 3126, 1480, 3124, 1481, 3122, 1482, 3121, 1483, 3112, 1483, 3103, 1483, 3100, 1484, 3098, 1485, 3095, 1486, 3093, 1487, 3090, 1488, 3087, 1488, 3085, 1489, 3083, 1493, 3069, 1491, 3053, 1491, 3050, 1490, 3049, 1487, 3046, 1485, 3044, 1483, 3042, 1482, 3041, 1481, 3039, 1481, 3037, Q, 1478, 3030, 1479, 3019, Z]],
      "label": "Guidimaka",
      "shortLabel": "GD",
      "labelPosition": [134.8, 316.4],
      "labelAlignment": [CEN, MID]
    },
    "MR.GO": {
      "outlines": [[M, 1199, 2857, Q, 1196, 2852, 1191, 2852, 1185, 2851, 1183, 2847, L, 1183, 2847, Q, 1182, 2849, 1181, 2851, 1177, 2859, 1169, 2865, 1167, 2866, 1166, 2868, 1157, 2879, 1141, 2887, 1136, 2889, 1131, 2892, 1130, 2892, 1129, 2893, 1126, 2895, 1123, 2897, 1118, 2902, 1111, 2902, 1104, 2902, 1097, 2907, 1093, 2909, 1090, 2912, 1077, 2920, 1061, 2918, 1050, 2916, 1044, 2922, 1036, 2929, 1027, 2929, 1024, 2929, 1022, 2931, 1017, 2935, 1012, 2942, 1010, 2943, 1009, 2945, 997, 2960, 983, 2976, 984, 2980, 993, 2983, 1001, 2985, 1015, 2987, 1029, 2988, 1036, 2992, 1043, 2996, 1052, 3007, 1060, 3019, 1062, 3027, 1063, 3034, 1067, 3040, 1070, 3046, 1073, 3055, 1076, 3064, 1077, 3070, 1078, 3076, 1079, 3083, 1079, 3089, 1083, 3095, 1087, 3100, 1087, 3103, 1088, 3105, 1090, 3108, 1093, 3110, 1095, 3110, 1098, 3110, 1106, 3112, 1113, 3113, 1115, 3118, 1117, 3123, 1118, 3125, 1119, 3126, 1119, 3128, 1120, 3134, 1124, 3137, 1125, 3138, 1126, 3140, 1129, 3143, 1131, 3143, 1138, 3143, 1145, 3142, 1159, 3141, 1157, 3153, 1157, 3158, 1161, 3167, 1165, 3176, 1169, 3180, 1172, 3184, 1173, 3186, 1174, 3187, 1176, 3191, 1176, 3195, 1178, 3197, 1180, 3199, 1179, 3200, 1177, 3201, 1178, 3202, 1179, 3204, 1181, 3209, 1183, 3214, 1188, 3218, 1193, 3223, 1204, 3235, 1204, 3230, 1207, 3225, 1216, 3211, 1219, 3191, 1221, 3182, 1225, 3173, 1225, 3171, 1226, 3169, 1226, 3167, 1227, 3165, 1231, 3155, 1234, 3145, 1237, 3138, 1242, 3136, 1243, 3135, 1245, 3135, 1252, 3135, 1259, 3134, 1260, 3133, 1262, 3132, 1264, 3129, 1266, 3123, 1266, 3122, 1267, 3121, 1274, 3117, 1276, 3107, 1276, 3106, 1277, 3106, 1282, 3104, 1282, 3097, 1282, 3096, 1283, 3095, 1313, 3075, 1338, 3048, 1339, 3047, 1341, 3046, 1342, 3045, 1345, 3044, 1348, 3043, 1354, 3040, 1360, 3036, 1363, 3032, 1365, 3027, 1367, 3026, 1368, 3025, 1369, 3023, 1370, 3022, 1371, 3021, 1381, 3013, 1389, 3005, 1393, 3000, 1392, 2993, 1391, 2990, 1391, 2986, 1381, 2982, 1382, 2968, 1383, 2953, 1386, 2951, 1388, 2948, 1389, 2947, 1392, 2941, 1399, 2929, 1399, 2916, 1399, 2903, 1360, 2903, 1321, 2905, 1321, 2907, 1321, 2909, 1320, 2914, 1316, 2918, 1314, 2919, 1313, 2921, 1311, 2923, 1307, 2919, 1302, 2915, 1295, 2915, 1288, 2914, 1282, 2914, 1275, 2914, 1270, 2912, 1265, 2910, 1257, 2909, 1255, 2909, 1254, 2909, 1250, 2907, 1247, 2907, 1232, 2905, 1217, 2905, 1212, 2905, 1208, 2903, 1205, 2901, 1205, 2899, 1200, 2881, 1200, 2861, Q, 1200, 2859, 1199, 2857, Z]],
      "label": "Gorgol",
      "shortLabel": "GO",
      "labelPosition": [119.1, 302.1],
      "labelAlignment": [CEN, MID]
    },
    "MR.BR": {
      "outlines": [[M, 1265, 2376, L, 1224, 2348, 1220, 2350, 1078, 2466, Q, 1078, 2467, 1077, 2467, 1030, 2504, 1005, 2527, 978, 2549, 930, 2591, 882, 2633, 848, 2686, 815, 2739, 812, 2744, 797, 2761, 780, 2764, L, 768, 2792, 672, 2844, 815, 2844, Q, 885, 2909, 935, 2967, 938, 2974, 940, 2975, 944, 2975, 951, 2973, 957, 2971, 961, 2971, 964, 2971, 973, 2970, 976, 2969, 979, 2970, 981, 2971, 983, 2976, 997, 2960, 1009, 2945, 1010, 2943, 1012, 2942, 1017, 2935, 1022, 2931, 1024, 2929, 1027, 2929, 1036, 2929, 1044, 2922, 1050, 2916, 1061, 2918, 1077, 2920, 1090, 2912, 1093, 2909, 1097, 2907, 1104, 2902, 1111, 2902, 1118, 2902, 1123, 2897, 1126, 2895, 1129, 2893, 1130, 2892, 1131, 2892, 1136, 2889, 1141, 2887, 1157, 2879, 1166, 2868, 1167, 2866, 1169, 2865, 1177, 2859, 1181, 2851, 1182, 2849, 1183, 2847, L, 1183, 2847, Q, 1181, 2844, 1181, 2841, 1181, 2840, 1181, 2839, 1181, 2836, 1182, 2834, 1183, 2832, 1184, 2831, 1185, 2829, 1186, 2828, 1189, 2822, 1192, 2813, 1194, 2803, 1196, 2799, 1198, 2795, 1199, 2794, 1201, 2793, 1203, 2789, 1205, 2784, 1207, 2779, 1208, 2777, 1210, 2776, 1213, 2774, 1214, 2771, 1217, 2764, 1221, 2757, 1223, 2754, 1226, 2752, 1231, 2747, 1237, 2743, 1239, 2742, 1240, 2741, 1244, 2736, 1247, 2735, 1249, 2733, 1251, 2733, 1263, 2732, 1273, 2729, 1275, 2728, 1277, 2727, 1295, 2711, 1306, 2698, 1307, 2696, 1308, 2695, 1311, 2690, 1315, 2689, 1317, 2688, 1320, 2688, L, 1272, 2635, Z]],
      "label": "Brakna",
      "shortLabel": "BR",
      "labelPosition": [105.2, 267],
      "labelAlignment": [CEN, MID]
    },
    "MR.AS": {
      "outlines": [[M, 1623, 2428, Q, 1613, 2430, 1606, 2440, 1601, 2446, 1595, 2451, 1588, 2455, 1590, 2457, 1593, 2459, 1593, 2466, 1594, 2473, 1586, 2480, 1578, 2486, 1567, 2483, 1566, 2482, 1565, 2482, 1554, 2481, 1543, 2481, 1538, 2480, 1534, 2480, 1531, 2480, 1531, 2486, 1531, 2492, 1523, 2490, 1516, 2489, 1511, 2494, 1506, 2498, 1505, 2503, 1505, 2507, 1504, 2509, 1501, 2515, 1505, 2526, L, 1504, 2526, Q, 1507, 2526, 1509, 2529, 1512, 2532, 1515, 2535, 1516, 2536, 1521, 2541, 1525, 2545, 1533, 2553, 1542, 2560, 1543, 2567, 1545, 2574, 1543, 2583, 1542, 2592, 1539, 2601, 1538, 2602, 1537, 2603, 1530, 2606, 1527, 2613, 1523, 2624, 1521, 2639, 1520, 2647, 1524, 2653, 1525, 2655, 1525, 2657, 1523, 2668, 1513, 2670, 1512, 2670, 1512, 2671, 1508, 2678, 1509, 2689, 1509, 2698, 1510, 2707, 1511, 2718, 1503, 2723, 1485, 2720, 1465, 2719, 1458, 2719, 1451, 2720, 1448, 2721, 1446, 2719, 1445, 2728, 1437, 2733, 1413, 2733, 1388, 2731, 1388, 2723, 1377, 2721, 1366, 2721, 1353, 2721, 1352, 2719, 1351, 2718, 1340, 2712, 1331, 2703, 1329, 2701, 1327, 2700, 1326, 2700, 1326, 2699, 1318, 2695, 1315, 2688, 1311, 2690, 1308, 2695, 1307, 2696, 1306, 2698, 1295, 2711, 1277, 2727, 1275, 2728, 1273, 2729, 1263, 2732, 1251, 2733, 1249, 2733, 1247, 2735, 1244, 2736, 1240, 2741, 1239, 2742, 1237, 2743, 1231, 2747, 1226, 2752, 1223, 2754, 1221, 2757, 1217, 2764, 1214, 2771, 1213, 2774, 1210, 2776, 1208, 2777, 1207, 2779, 1205, 2784, 1203, 2789, 1201, 2793, 1199, 2794, 1198, 2795, 1196, 2799, 1194, 2803, 1192, 2813, 1189, 2822, 1186, 2828, 1185, 2829, 1184, 2831, 1183, 2832, 1182, 2834, 1181, 2836, 1181, 2839, 1181, 2840, 1181, 2841, 1181, 2844, 1183, 2847, 1185, 2851, 1191, 2852, 1196, 2852, 1199, 2857, 1200, 2859, 1200, 2861, 1200, 2881, 1205, 2899, 1205, 2901, 1208, 2903, 1212, 2905, 1217, 2905, 1232, 2905, 1247, 2907, 1250, 2907, 1254, 2909, 1255, 2909, 1257, 2909, 1265, 2910, 1270, 2912, 1275, 2914, 1282, 2914, 1288, 2914, 1295, 2914, 1302, 2915, 1307, 2919, 1311, 2923, 1313, 2921, 1314, 2919, 1316, 2918, 1320, 2914, 1321, 2909, 1321, 2907, 1321, 2905, 1360, 2903, 1399, 2903, 1399, 2916, 1399, 2929, 1392, 2941, 1389, 2947, 1388, 2948, 1386, 2951, 1383, 2953, 1382, 2968, 1381, 2982, 1391, 2986, 1401, 2990, 1404, 2993, 1410, 2998, 1413, 3004, 1414, 3006, 1417, 3008, 1418, 3008, 1419, 3009, 1427, 3013, 1437, 3011, 1443, 3010, 1446, 3005, 1446, 3004, 1447, 3003, 1453, 2998, 1455, 2991, 1457, 2988, 1462, 2983, 1464, 2988, 1471, 2989, 1472, 2989, 1473, 2991, 1477, 3001, 1478, 3009, 1479, 3014, 1479, 3019, 1478, 3030, 1481, 3037, 1481, 3039, 1482, 3041, 1483, 3042, 1485, 3044, 1487, 3046, 1490, 3049, 1491, 3050, 1491, 3053, 1493, 3069, 1489, 3083, 1488, 3085, 1488, 3087, 1487, 3090, 1486, 3093, 1485, 3095, 1484, 3098, 1483, 3100, 1483, 3103, 1483, 3112, 1482, 3121, 1481, 3122, 1480, 3124, 1478, 3126, 1475, 3129, 1473, 3130, 1472, 3132, 1471, 3133, 1471, 3135, 1471, 3137, 1471, 3141, L, 1495, 3141, 1521, 3114, 1536, 3114, 1554, 3134, Q, 1555, 3134, 1555, 3135, 1619, 3193, 1666, 3245, 1700, 3207, 1722, 3165, L, 1748, 3164, Q, 1733, 3086, 1713, 3037, 1699, 3010, 1702, 2972, 1702, 2972, 1701, 2971, 1700, 2970, 1699, 2970, 1694, 2966, 1691, 2964, 1688, 2962, 1688, 2957, 1687, 2952, 1685, 2948, 1683, 2943, 1684, 2942, 1685, 2940, 1686, 2939, 1687, 2934, 1688, 2929, 1689, 2921, 1685, 2918, 1681, 2915, 1678, 2909, 1674, 2904, 1670, 2902, 1666, 2901, 1665, 2900, 1658, 2896, 1666, 2892, 1672, 2888, 1677, 2888, 1679, 2887, 1681, 2887, 1686, 2884, 1693, 2881, 1694, 2880, 1695, 2879, 1701, 2874, 1699, 2863, 1698, 2861, 1698, 2859, 1695, 2851, 1687, 2850, 1686, 2850, 1685, 2850, 1676, 2850, 1672, 2839, L, 1662, 2799, 1654, 2795, 1654, 2771, Q, 1654, 2769, 1653, 2766, 1651, 2759, 1642, 2758, L, 1642, 2710, 1650, 2682, 1622, 2617, 1622, 2582, 1647, 2582, 1633, 2577, Q, 1633, 2567, 1633, 2557, 1633, 2538, 1634, 2518, 1638, 2518, 1642, 2518, 1642, 2516, 1642, 2514, 1642, 2495, 1643, 2474, 1645, 2473, 1646, 2472, 1648, 2467, 1655, 2461, 1655, 2451, 1654, 2440, 1647, 2439, 1642, 2432, 1642, 2427, 1642, 2420, 1637, 2423, 1631, 2426, 1630, 2426, 1629, 2427, Q, 1626, 2427, 1623, 2428, Z]],
      "label": "Assaba",
      "shortLabel": "AS",
      "labelPosition": [151.5, 285.3],
      "labelAlignment": [CEN, MID]
    },
    "MR.HG": {
      "outlines": [[M, 1948, 2630, L, 1792, 2628, 1648, 2582, 1622, 2582, 1622, 2617, 1650, 2682, 1642, 2710, 1642, 2758, Q, 1651, 2759, 1654, 2767, 1654, 2769, 1654, 2771, L, 1654, 2795, 1662, 2799, 1672, 2839, Q, 1676, 2850, 1685, 2850, 1686, 2850, 1687, 2850, 1695, 2851, 1698, 2859, 1698, 2861, 1699, 2863, 1701, 2874, 1695, 2879, 1694, 2880, 1693, 2881, 1686, 2884, 1681, 2887, 1679, 2887, 1677, 2888, 1672, 2888, 1666, 2892, 1658, 2896, 1665, 2900, 1666, 2901, 1670, 2903, 1674, 2904, 1678, 2909, 1681, 2915, 1685, 2918, 1689, 2921, 1688, 2929, 1687, 2934, 1686, 2939, 1685, 2940, 1684, 2942, 1683, 2943, 1685, 2948, 1687, 2952, 1688, 2957, 1688, 2962, 1691, 2964, 1694, 2966, 1699, 2970, 1700, 2970, 1701, 2971, 1702, 2972, 1702, 2972, 1699, 3010, 1713, 3037, 1733, 3086, 1748, 3164, L, 1822, 3162, 1830, 3171, Q, 1855, 3171, 1861, 3184, L, 1934, 3184, Q, 1959, 3178, 1972, 3162, L, 2034, 3162, 2034, 3120, 2063, 3094, 2063, 3142, Q, 2110, 3143, 2156, 3143, L, 2156, 3129, Q, 2139, 3133, 2143, 3108, L, 2156, 3108, 2154, 3044, 2134, 3010, 2170, 2938, 2170, 2915, 2318, 2744, 2244, 2684, 2178, 2682, 2162, 2690, 2098, 2690, Q, 2020, 2664, 1948, 2630, Z]],
      "label": "Hodh El Gharbi",
      "shortLabel": "HG",
      "labelPosition": [193, 288.3],
      "labelAlignment": [CEN, MID]
    },
    "MR.HC": {
      "outlines": [[M, 2356, 2124, Q, 2324, 2199, 2292, 2277, 2260, 2354, 2219, 2444, 2178, 2534, 2100, 2690, L, 2162, 2690, 2178, 2682, 2244, 2684, 2318, 2744, 2170, 2915, 2170, 2938, 2134, 3010, 2154, 3044, 2156, 3108, 2143, 3108, Q, 2139, 3133, 2156, 3129, L, 2156, 3143, Q, 2586, 3146, 3010, 3130, L, 3041, 2914, 2986, 2872, Q, 2967, 2860, 2972, 2853, 2870, 2013, 2748, 1178, L, 2390, 2045, Q, 2389, 2047, 2388, 2049, Q, 2388, 2050, 2356, 2124, Z]],
      "label": "Hodh Ech Chargui",
      "shortLabel": "HC",
      "labelPosition": [259.4, 224.9],
      "labelAlignment": [CEN, MID]
    },
    "MR.AD": {
      "outlines": [[M, 2718, 936, L, 1845, 1672, 1400, 1680, 1161, 1609, 1162, 1636, Q, 983, 1635, 862, 1634, L, 866, 1656, Q, 878, 1669, 881, 1690, L, 882, 1735, 873, 1739, 871, 1791, Q, 871, 1792, 870, 1793, L, 861, 1794, 861, 1942, 872, 1942, 874, 2088, 844, 2128, 844, 2238, 1074, 2232, 1222, 2347, 1223, 2347, 1223, 2347, 1227, 2345, Q, 1348, 2242, 1480, 2156, L, 1535, 2180, 1547, 2138, 1649, 2044, 2390, 2045, 2748, 1178, Z]],
      "label": "Adrar",
      "shortLabel": "AD",
      "labelPosition": [179.6, 182.2],
      "labelAlignment": [CEN, MID]
    },
    "MR.TG": {
      "outlines": [[M, 2390, 2045, L, 1649, 2044, 1547, 2138, 1535, 2180, 1480, 2156, Q, 1348, 2242, 1227, 2345, L, 1225, 2348, 1264, 2376, 1272, 2635, 1316, 2690, 1326, 2699, Q, 1326, 2700, 1327, 2700, 1329, 2701, 1331, 2703, 1340, 2712, 1351, 2718, 1352, 2719, 1353, 2721, 1366, 2721, 1377, 2721, 1388, 2723, 1388, 2731, 1413, 2733, 1437, 2733, 1445, 2728, 1446, 2719, 1448, 2721, 1451, 2720, 1458, 2719, 1465, 2719, 1485, 2720, 1503, 2723, 1511, 2718, 1510, 2707, 1509, 2698, 1509, 2689, 1508, 2678, 1512, 2671, 1512, 2670, 1513, 2670, 1523, 2668, 1525, 2657, 1525, 2655, 1524, 2653, 1520, 2647, 1521, 2639, 1523, 2624, 1527, 2613, 1530, 2606, 1537, 2603, 1538, 2602, 1539, 2601, 1542, 2592, 1543, 2583, 1545, 2574, 1543, 2567, 1542, 2560, 1533, 2553, 1525, 2545, 1521, 2541, 1516, 2536, 1515, 2535, 1512, 2532, 1509, 2529, 1507, 2526, 1504, 2526, L, 1505, 2526, Q, 1501, 2515, 1504, 2509, 1505, 2507, 1505, 2503, 1506, 2498, 1511, 2494, 1516, 2489, 1523, 2490, 1531, 2492, 1531, 2486, 1531, 2480, 1534, 2480, 1538, 2480, 1543, 2481, 1554, 2481, 1565, 2482, 1566, 2482, 1567, 2483, 1578, 2486, 1586, 2480, 1594, 2473, 1593, 2466, 1593, 2459, 1590, 2457, 1588, 2455, 1595, 2451, 1601, 2446, 1606, 2440, 1613, 2430, 1623, 2428, 1626, 2427, 1629, 2427, 1630, 2426, 1631, 2426, 1637, 2423, 1642, 2420, 1642, 2427, 1642, 2432, 1647, 2439, 1654, 2440, 1655, 2451, 1655, 2461, 1648, 2467, 1646, 2472, 1645, 2473, 1643, 2474, 1642, 2495, 1642, 2514, 1642, 2516, 1642, 2518, 1638, 2518, 1634, 2518, 1633, 2538, 1633, 2557, 1633, 2567, 1633, 2577, L, 1792, 2628, 1948, 2630, Q, 2020, 2664, 2098, 2690, L, 2100, 2690, Q, 2178, 2534, 2219, 2444, 2260, 2354, 2292, 2276, 2324, 2199, 2356, 2124, 2388, 2050, 2388, 2049, Q, 2389, 2047, 2390, 2045, Z]],
      "label": "Tagant",
      "shortLabel": "TG",
      "labelPosition": [182.3, 233.3],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'mauritania',
  type: 'maps'
};

/***/ })

/******/ });
}));
