
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
/******/ 	return __webpack_require__(__webpack_require__.s = 414);
/******/ })
/************************************************************************/
/******/ ({

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(415);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 415:
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
 * @id fusionmaps.LakshadweepIslands.1.04-24-2017 02:39:07
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
  "name": "LakshadweepIslands",
  "revision": 1,
  "standaloneInit": true,
  "baseWidth": 383,
  "baseHeight": 800,
  "baseScaleFactor": 10,
  "entities": {
    "IN.LD.CT": {
      "outlines": [[M, 1865, 1429, Q, 1866, 1438, 1860, 1446, 1854, 1455, 1854, 1459, L, 1854, 1467, 1869, 1467, Q, 1876, 1466, 1878, 1459, 1879, 1456, 1883, 1454, 1887, 1452, 1887, 1447, 1880, 1442, 1880, 1429, Z]],
      "label": "Chetlat Island",
      "shortLabel": "CT",
      "labelPosition": [263.9, 144.8],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [[M, 2639, 1448, L, 1870, 1448]]
    },
    "IN.LD.AM": {
      "outlines": [[M, 1945, 2519, Q, 1939, 2523, 1938, 2525, 1934, 2529, 1934, 2542, 1934, 2546, 1935, 2556, 1951, 2556, 1954, 2555, 1956, 2554, 1959, 2544, 1967, 2544, 1967, 2542, 1965, 2521, 1964, 2511, L, 1951, 2511, Q, 1949, 2516, 1945, 2519, Z]],
      "label": "Amini Island",
      "shortLabel": "AM",
      "labelPosition": [248.8, 253.7],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [[M, 2488, 2537, L, 1943, 2537]]
    },
    "IN.LD.KA": {
      "outlines": [[M, 2454, 1798, Q, 2448, 1798, 2446, 1800, 2443, 1804, 2438, 1807, 2435, 1808, 2435, 1821, 2435, 1830, 2437, 1832, 2439, 1835, 2443, 1837, 2447, 1839, 2449, 1842, 2451, 1846, 2453, 1856, 2458, 1861, 2467, 1861, 2469, 1849, 2474, 1846, 2477, 1843, 2477, 1834, 2477, 1826, 2477, 1824, 2475, 1817, 2468, 1813, 2466, 1811, 2462, 1804, Q, 2459, 1798, 2454, 1798, Z]],
      "label": "Kiltan Island",
      "shortLabel": "KA",
      "labelPosition": [154.8, 182.9],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [[M, 1548, 1829, L, 2456, 1829]]
    },
    "IN.LD.PI": {
      "outlines": [[M, 1541, 3191, L, 1541, 3204, 1559, 3204, Q, 1563, 3204, 1563, 3191, L, 1563, 3183, Q, 1562, 3179, 1554, 3179, Q, 1541, 3179, 1541, 3191, Z]],
      "label": "Piti Island",
      "shortLabel": "PI",
      "labelPosition": [231.6, 319.2],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [[M, 2316, 3192, L, 1552, 3192]]
    },
    "IN.LD.SH": {
      "outlines": [[M, 1193, 4410, Q, 1192, 4409, 1184, 4409, 1173, 4409, 1170, 4413, 1167, 4417, 1167, 4431, 1167, 4439, 1181, 4439, L, 1189, 4439, 1189, 4430, Q, 1193, 4430, 1195, 4427, 1195, 4425, 1195, 4419, Q, 1195, 4411, 1193, 4410, Z], [M, 1080, 4569, Q, 1074, 4575, 1074, 4583, 1074, 4587, 1078, 4591, 1080, 4594, 1085, 4594, L, 1096, 4593, 1100, 4593, Q, 1102, 4590, 1102, 4584, 1102, 4563, 1091, 4563, Q, 1085, 4563, 1080, 4569, Z]],
      "label": "Suheli Par",
      "shortLabel": "SH",
      "labelPosition": [175.5, 457.9],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [[M, 1755, 4579, L, 1087, 4579]]
    },
    "IN.LD.BY": {
      "outlines": [[M, 140, 1166, L, 148, 1166, Q, 152, 1156, 152, 1150, 152, 1143, 146, 1145, 147, 1141, 133, 1141, 129, 1141, 128, 1141, 125, 1142, 125, 1147, 125, 1152, 133, 1154, Q, 140, 1155, 140, 1166, Z], [M, 173, 1164, Q, 172, 1166, 169, 1167, L, 169, 1174, Q, 170, 1174, 178, 1176, 185, 1176, 188, 1177, 188, 1172, 185, 1167, 182, 1161, 182, 1158, L, 177, 1158, Q, 177, 1162, 173, 1164, Z], [M, 203, 1157, Q, 201, 1157, 201, 1159, 201, 1163, 196, 1165, 193, 1167, 193, 1174, L, 194, 1182, Q, 213, 1182, 213, 1172, 213, 1169, 210, 1168, 208, 1166, 207, 1164, 206, 1159, 206, 1158, Q, 206, 1157, 203, 1157, Z], [M, 122, 1130, Q, 130, 1126, 130, 1116, 130, 1105, 123, 1105, 118, 1105, 116, 1108, 114, 1110, 114, 1117, Q, 114, 1134, 122, 1130, Z], [M, 81, 1004, Q, 78, 1004, 72, 1010, 65, 1015, 64, 1018, L, 64, 1023, 78, 1023, Q, 85, 1022, 91, 1025, L, 92, 1024, 92, 1021, Q, 92, 1017, 89, 1011, Q, 85, 1004, 81, 1004, Z], [M, 118, 1036, Q, 116, 1037, 108, 1040, 104, 1041, 104, 1046, 104, 1050, 114, 1060, 119, 1063, 123, 1062, 128, 1061, 128, 1056, 128, 1052, 126, 1046, 123, 1040, 123, 1036, Z], [M, 138, 1003, Q, 143, 999, 143, 995, 143, 986, 133, 986, 130, 986, 130, 988, 129, 989, 126, 990, 122, 992, 122, 992, 120, 993, 120, 996, 120, 996, 122, 997, 124, 999, 125, 1002, 126, 1006, 132, 1006, Q, 134, 1006, 138, 1003, Z], [M, 181, 1007, Q, 179, 1011, 179, 1017, 179, 1025, 185, 1025, 194, 1025, 195, 1025, 198, 1023, 198, 1014, L, 196, 1001, 189, 1001, Q, 185, 1001, 181, 1007, Z], [M, 254, 1178, Q, 254, 1174, 254, 1171, 253, 1165, 248, 1165, 239, 1171, 235, 1172, 227, 1174, 227, 1174, 224, 1175, 224, 1181, 224, 1188, 228, 1189, 232, 1190, 235, 1199, 238, 1199, 242, 1192, 247, 1184, 249, 1184, L, 254, 1185, Z], [M, 217, 1114, L, 217, 1135, 231, 1136, Q, 231, 1135, 231, 1134, 232, 1131, 232, 1130, 238, 1127, 238, 1124, 238, 1121, 234, 1113, 230, 1105, 225, 1105, Q, 220, 1105, 217, 1114, Z], [M, 174, 957, L, 173, 968, 174, 981, 188, 981, Q, 191, 978, 195, 978, L, 198, 975, Q, 198, 971, 193, 970, 187, 968, 186, 967, 183, 963, 181, 961, Q, 179, 958, 174, 957, Z], [M, 67, 931, Q, 61, 931, 57, 934, L, 57, 979, Q, 60, 980, 70, 980, L, 71, 988, 74, 988, Q, 80, 989, 81, 978, 79, 967, 79, 964, 82, 949, 82, 942, Q, 82, 931, 67, 931, Z]],
      "label": "Byragmore(Chereapani)Reef",
      "shortLabel": "BY",
      "labelPosition": [61.9, 97.3],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [[M, 619, 973, L, 180, 973]]
    },
    "IN.LD.TI": {
      "outlines": [[M, 1123, 2904, Q, 1119, 2907, 1119, 2911, 1119, 2917, 1123, 2917, 1128, 2917, 1134, 2917, 1137, 2917, 1137, 2909, L, 1137, 2903, Q, 1137, 2902, 1130, 2902, Q, 1127, 2902, 1123, 2904, Z], [M, 1157, 2892, Q, 1156, 2891, 1156, 2885, 1155, 2882, 1151, 2882, 1148, 2882, 1148, 2884, 1147, 2889, 1147, 2890, 1147, 2890, 1145, 2894, 1142, 2898, 1142, 2900, 1142, 2901, 1145, 2905, 1148, 2909, 1148, 2911, L, 1157, 2911, Q, 1158, 2904, 1162, 2904, 1167, 2904, 1167, 2900, 1167, 2896, 1163, 2894, Z]],
      "label": "Tinnakara Island",
      "shortLabel": "TI",
      "labelPosition": [137.2, 289.9],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [[M, 1372, 2899, L, 1153, 2899]]
    },
    "IN.LD.AG": {
      "outlines": [[M, 925, 3049, L, 925, 3041, Q, 925, 3038, 923, 3037, 920, 3035, 920, 3035, 919, 3030, 918, 3027, 915, 3022, 908, 3022, 903, 3022, 897, 3031, 891, 3040, 891, 3047, L, 891, 3062, Q, 891, 3066, 885, 3069, 879, 3071, 879, 3072, L, 882, 3086, 881, 3100, Q, 885, 3100, 885, 3103, L, 887, 3103, Q, 890, 3101, 896, 3091, 897, 3088, 902, 3085, 908, 3082, 910, 3077, 912, 3070, 920, 3064, Q, 925, 3060, 925, 3049, Z]],
      "label": "Agatti Island",
      "shortLabel": "AG",
      "labelPosition": [122.7, 354.3],
      "labelAlignment": [CEN, BTM],
      "labelConnectors": [[M, 1227, 3543, L, 1227, 3051, 903, 3051, 1227, 3051]]
    },
    "IN.LD.PP": {
      "outlines": [[M, 728, 2385, L, 728, 2393, 751, 2394, 749, 2370, 744, 2370, Q, 740, 2376, 728, 2385, Z]],
      "label": "Peremul Par",
      "shortLabel": "PP",
      "labelPosition": [119.4, 238.6],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [[M, 1194, 2386, L, 739, 2386]]
    },
    "IN.LD.KT": {
      "outlines": [[M, 1751, 3558, L, 1748, 3567, Q, 1749, 3570, 1744, 3572, 1739, 3575, 1739, 3579, 1739, 3581, 1740, 3588, 1740, 3595, 1737, 3598, 1731, 3604, 1727, 3605, 1726, 3606, 1726, 3615, 1726, 3616, 1726, 3620, 1726, 3624, 1731, 3624, L, 1745, 3622, Q, 1746, 3617, 1753, 3608, 1762, 3599, 1764, 3594, 1764, 3591, 1770, 3590, 1777, 3589, 1777, 3589, 1781, 3587, 1780, 3583, 1780, 3575, 1781, 3572, L, 1781, 3558, Q, 1762, 3555, 1755, 3555, Q, 1752, 3555, 1751, 3558, Z]],
      "label": "Kavaratti Island",
      "shortLabel": "KT",
      "labelPosition": [173.5, 403.2],
      "labelAlignment": [CEN, BTM],
      "labelConnectors": [[M, 1735, 4032, L, 1735, 3610]]
    },
    "IN.LD.KI": {
      "outlines": [[M, 842, 3152, Q, 845, 3154, 845, 3159, L, 853, 3160, Q, 853, 3154, 863, 3148, 871, 3143, 871, 3143, 871, 3136, 864, 3132, 856, 3122, 852, 3122, 849, 3122, 847, 3126, 844, 3132, 843, 3133, 840, 3136, 836, 3136, 834, 3136, 834, 3140, Q, 834, 3148, 842, 3152, Z]],
      "label": "Kalputhi Island",
      "shortLabel": "KI",
      "labelPosition": [34.9, 362.5],
      "labelAlignment": [CEN, BTM],
      "labelConnectors": [[M, 349, 3625, L, 349, 3141, 853, 3141, 349, 3141]]
    },
    "IN.LD.BI": {
      "outlines": [[M, 1072, 2906, Q, 1069, 2907, 1067, 2913, 1065, 2918, 1065, 2923, 1065, 2929, 1073, 2929, 1088, 2929, 1090, 2920, 1090, 2916, 1097, 2915, 1104, 2915, 1104, 2910, 1104, 2904, 1093, 2904, Q, 1077, 2904, 1072, 2906, Z]],
      "label": "Bangaram Island",
      "shortLabel": "BI",
      "labelPosition": [74.4, 291.8],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [[M, 744, 2918, L, 1081, 2918]]
    },
    "IN.LD.BT": {
      "outlines": [[M, 895, 1642, L, 895, 1623, Q, 894, 1616, 889, 1614, 886, 1612, 878, 1612, 869, 1612, 867, 1615, 864, 1618, 864, 1632, L, 864, 1642, Z]],
      "label": "Bitra Reef",
      "shortLabel": "BT",
      "labelPosition": [42.2, 197.8],
      "labelAlignment": [CEN, BTM],
      "labelConnectors": [[M, 422, 1978, L, 422, 1627, 879, 1627, 422, 1627]]
    },
    "IN.LD.CH": {
      "outlines": [[M, 367, 275, Q, 365, 283, 363, 287, L, 363, 295, Q, 375, 298, 380, 297, 387, 296, 387, 289, 387, 271, 375, 271, Q, 369, 271, 367, 275, Z], [M, 314, 41, Q, 311, 39, 310, 38, L, 300, 38, Q, 298, 40, 296, 43, 292, 47, 292, 50, L, 294, 53, Q, 297, 57, 297, 65, L, 305, 65, Q, 308, 64, 312, 61, 316, 60, 316, 57, 315, 49, 315, 46, Q, 316, 43, 314, 41, Z]],
      "label": "Cherbaniani(Beleapani)Reef",
      "shortLabel": "CH",
      "labelPosition": [97.5, 28.7],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [[M, 975, 287, L, 375, 287]]
    },
    "IN.LD.KL": {
      "outlines": [[M, 3669, 4472, Q, 3665, 4477, 3659, 4489, 3654, 4501, 3654, 4503, 3654, 4508, 3656, 4511, 3659, 4513, 3659, 4518, 3659, 4521, 3655, 4528, 3649, 4536, 3645, 4537, 3645, 4533, 3638, 4523, 3631, 4514, 3629, 4514, L, 3618, 4523, Q, 3618, 4528, 3622, 4528, 3625, 4528, 3631, 4525, 3635, 4525, 3636, 4527, 3638, 4530, 3641, 4530, L, 3641, 4543, Q, 3634, 4546, 3633, 4547, 3630, 4549, 3630, 4552, 3630, 4556, 3626, 4559, 3621, 4562, 3620, 4566, L, 3634, 4566, Q, 3637, 4562, 3637, 4559, 3637, 4557, 3641, 4557, 3642, 4557, 3666, 4562, 3666, 4550, 3675, 4538, 3684, 4526, 3684, 4510, 3681, 4487, 3681, 4472, Z]],
      "label": "Kalpeni Island",
      "shortLabel": "KL",
      "labelPosition": [329.6, 455],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [[M, 3296, 4550, L, 3657, 4550]]
    },
    "IN.LD.CR": {
      "outlines": [[M, 3686, 4439, Q, 3683, 4436, 3678, 4438, 3678, 4443, 3674, 4459, 3684, 4459, 3687, 4456, Q, 3689, 4443, 3686, 4439, Z], [M, 3697, 4372, Q, 3703, 4369, 3716, 4367, L, 3716, 4399, Q, 3711, 4402, 3709, 4406, 3707, 4410, 3704, 4410, 3689, 4410, 3690, 4413, 3687, 4400, 3687, 4387, Q, 3687, 4376, 3697, 4372, Z]],
      "label": "Cheriyam Island",
      "shortLabel": "CR",
      "labelPosition": [337.2, 439],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [[M, 3372, 4390, L, 3703, 4390]]
    },
    "IN.LD.MN": {
      "outlines": [[M, 2562, 7888, Q, 2562, 7885, 2561, 7885, 2560, 7884, 2558, 7882, L, 2552, 7882, 2546, 7902, 2538, 7909, Q, 2536, 7911, 2532, 7912, 2528, 7913, 2527, 7915, 2523, 7923, 2520, 7924, L, 2513, 7924, Q, 2511, 7924, 2509, 7927, 2506, 7929, 2499, 7929, 2493, 7932, 2489, 7932, 2480, 7932, 2478, 7927, 2474, 7919, 2466, 7914, L, 2458, 7914, 2458, 7917, Q, 2458, 7923, 2464, 7924, 2471, 7925, 2472, 7928, 2473, 7935, 2481, 7942, 2484, 7946, 2498, 7946, L, 2503, 7951, Q, 2509, 7956, 2513, 7956, 2517, 7956, 2533, 7945, 2537, 7942, 2541, 7935, 2545, 7928, 2548, 7926, 2553, 7922, 2555, 7920, 2560, 7914, 2560, 7910, Q, 2562, 7894, 2562, 7888, Z]],
      "label": "Minicoy Island",
      "shortLabel": "MN",
      "labelPosition": [251.5, 735.6],
      "labelAlignment": [CEN, TOP],
      "labelConnectors": [[M, 2515, 7356, L, 2515, 7936]]
    },
    "IN.LD.AI": {
      "outlines": [[M, 3785, 3103, Q, 3783, 3098, 3773, 3094, 3769, 3102, 3767, 3104, 3765, 3104, 3758, 3104, 3751, 3103, 3743, 3103, 3727, 3102, 3727, 3103, L, 3714, 3103, Q, 3707, 3104, 3707, 3111, 3707, 3125, 3710, 3135, L, 3713, 3135, Q, 3716, 3135, 3742, 3133, 3767, 3132, 3773, 3132, 3776, 3132, 3785, 3126, 3786, 3124, 3786, 3114, Q, 3786, 3106, 3785, 3103, Z]],
      "label": "Androth Island",
      "shortLabel": "AI",
      "labelPosition": [314.4, 337.6],
      "labelAlignment": [CEN, BTM],
      "labelConnectors": [[M, 3144, 3376, L, 3144, 3115, 3747, 3115, 3144, 3115]]
    },
    "IN.LD.KD": {
      "outlines": [[M, 2020, 2309, Q, 2017, 2312, 2014, 2324, 2014, 2325, 2008, 2331, 2004, 2336, 2004, 2342, 2004, 2343, 2005, 2351, 2006, 2359, 2004, 2362, 2002, 2365, 1999, 2368, 1995, 2371, 1993, 2375, 1992, 2376, 1986, 2382, 1981, 2386, 1981, 2391, 1981, 2392, 1982, 2394, 1984, 2398, 1985, 2405, 1985, 2407, 1985, 2413, 1985, 2418, 1989, 2418, 1997, 2418, 2000, 2412, 2003, 2405, 2004, 2402, 2005, 2405, 2010, 2405, 2015, 2405, 2015, 2399, 2015, 2391, 2015, 2389, 2016, 2385, 2021, 2380, 2025, 2376, 2025, 2372, 2024, 2363, 2025, 2358, 2025, 2347, 2031, 2345, 2036, 2343, 2036, 2335, 2037, 2326, 2039, 2323, 2042, 2317, 2053, 2302, 2061, 2289, 2061, 2279, L, 2060, 2269, 2047, 2269, Q, 2038, 2270, 2035, 2278, 2032, 2282, 2029, 2294, Q, 2024, 2305, 2020, 2309, Z]],
      "label": "Kadmat Island(Cardamum Island)",
      "shortLabel": "KD",
      "labelPosition": [248.4, 232.1],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [[M, 2484, 2321, L, 2018, 2321]]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'lakshadweepislands',
  type: 'maps'
};

/***/ })

/******/ });
}));
