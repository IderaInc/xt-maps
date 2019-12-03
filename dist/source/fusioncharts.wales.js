
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
/******/ 	return __webpack_require__(__webpack_require__.s = 640);
/******/ })
/************************************************************************/
/******/ ({

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(641);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 641:
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
 * @id fusionmaps.Wales.20.10-30-2012 07:55:29
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
  "name": "Wales",
  "revision": 20,
  "standaloneInit": true,
  "baseWidth": 440,
  "baseHeight": 530,
  "baseScaleFactor": 10,
  "entities": {
    "10": {
      "outlines": [[M, 2443, 1162, Q, 2403, 1162, 2369, 1123, 2363, 1115, 2348, 1113, 2333, 1111, 2323, 1097, 2303, 1070, 2308, 1017, 2298, 1017, 2298, 1012, L, 2248, 1011, Q, 2245, 1012, 2242, 1012, 2227, 1015, 2200, 1015, 2169, 1015, 2166, 1013, 2164, 1011, 2153, 984, 2153, 983, 2153, 982, L, 2153, 977, Q, 2155, 946, 2178, 890, 2178, 864, 2155, 840, 2133, 815, 2133, 792, 2133, 744, 2188, 669, 2243, 594, 2243, 562, 2243, 515, 2212, 484, 2181, 454, 2168, 430, L, 2137, 433, Q, 2135, 434, 2133, 435, 2083, 457, 2040, 457, 2028, 457, 1983, 452, L, 1983, 437, 1978, 442, Q, 1931, 473, 1898, 508, 1843, 564, 1828, 577, 1774, 618, 1738, 646, 1671, 699, 1647, 742, 1648, 744, 1648, 746, 1653, 767, 1653, 832, 1654, 877, 1654, 895, 1653, 925, 1646, 944, 1629, 988, 1543, 1032, 1478, 1071, 1437, 1095, 1360, 1141, 1318, 1152, 1240, 1174, 1158, 1332, 1151, 1346, 1125, 1368, 1091, 1394, 1074, 1409, 1008, 1467, 1008, 1517, 1008, 1540, 1010, 1543, 1011, 1545, 1029, 1556, 1055, 1532, 1228, 1462, 1253, 1462, 1292, 1500, 1331, 1537, 1370, 1537, 1394, 1537, 1408, 1522, 1418, 1511, 1418, 1502, 1418, 1484, 1405, 1470, 1393, 1455, 1393, 1445, 1393, 1419, 1433, 1391, 1455, 1377, 1493, 1352, 1501, 1345, 1530, 1311, 1548, 1289, 1568, 1282, 1584, 1277, 1728, 1271, 1761, 1261, 1850, 1252, 1970, 1240, 1988, 1237, L, 2033, 1237, 2033, 1257, Q, 1999, 1239, 1964, 1272, 1933, 1302, 1933, 1337, 1933, 1348, 1948, 1368, 1963, 1388, 1963, 1395, 1933, 1471, 1933, 1487, 1933, 1553, 1982, 1629, 2032, 1706, 2041, 1741, 2041, 1742, 2041, 1742, 2042, 1745, 2038, 1747, 2037, 1778, 1985, 1852, 1938, 1920, 1929, 1953, 1929, 1954, 1929, 1955, 2011, 2128, 2028, 2187, 2051, 2176, 2119, 2145, 2172, 2121, 2211, 2099, L, 2211, 2098, Q, 2212, 2098, 2212, 2098, 2223, 2092, 2233, 2086, 2368, 2005, 2372, 1926, L, 2371, 1926, 2371, 1926, Q, 2371, 1926, 2370, 1926, L, 2363, 1922, Q, 2364, 1862, 2421, 1833, 2458, 1814, 2543, 1802, 2636, 1788, 2663, 1778, 2716, 1758, 2713, 1712, 2704, 1592, 2728, 1517, 2743, 1469, 2799, 1444, 2864, 1415, 2882, 1393, 2882, 1393, 2882, 1392, 2883, 1390, 2883, 1389, 2884, 1389, 2886, 1389, 2889, 1390, 2893, 1381, 2903, 1367, 2913, 1324, 2915, 1318, 2916, 1312, 2918, 1303, 2918, 1295, 2918, 1263, 2898, 1259, 2878, 1256, 2878, 1240, 2878, 1237, 2898, 1202, 2915, 1169, 2917, 1153, 2914, 1151, 2914, 1149, 2913, 1148, 2914, 1147, L, 2914, 1146, Q, 2915, 1143, 2916, 1137, 2891, 1137, 2853, 1131, 2804, 1124, 2778, 1122, 2737, 1119, 2726, 1108, 2720, 1100, 2724, 1084, 2729, 1067, 2725, 1062, 2718, 1052, 2683, 1052, 2618, 1052, 2555, 1107, 2522, 1136, 2506, 1145, Q, 2477, 1162, 2443, 1162, Z]],
      "label": "Gwynedd",
      "shortLabel": "GD",
      "labelPosition": [220.8, 150.3],
      "labelAlignment": [CEN, MID]
    },
    "11": {
      "outlines": [[M, 1635, 32, Q, 1518, 32, 1413, 42, 1364, 47, 1346, 64, 1339, 70, 1336, 79, 1326, 99, 1333, 132, 1341, 168, 1278, 227, 1271, 234, 1219, 245, 1173, 256, 1173, 270, 1173, 279, 1222, 346, 1271, 412, 1287, 433, 1319, 425, 1354, 447, 1383, 466, 1398, 492, 1410, 512, 1473, 582, 1525, 641, 1571, 676, 1613, 704, 1625, 713, 1642, 724, 1647, 743, 1671, 699, 1738, 646, 1774, 618, 1828, 577, 1843, 564, 1898, 508, 1931, 473, 1978, 442, L, 1983, 437, 1983, 422, Q, 1985, 420, 2026, 366, 2053, 330, 2088, 312, L, 2088, 292, Q, 2060, 292, 2026, 297, 1992, 302, 1955, 302, 1924, 302, 1886, 303, 1862, 303, 1852, 295, 1841, 287, 1827, 260, 1818, 242, 1788, 182, 1769, 147, 1757, 107, 1752, 90, 1748, 79, 1744, 65, 1742, 61, 1733, 44, 1711, 38, Q, 1689, 32, 1635, 32, Z]],
      "label": "Isle of Anglesey",
      "shortLabel": "AY",
      "labelPosition": [163, 38.7],
      "labelAlignment": [CEN, MID]
    },
    "12": {
      "outlines": [[M, 3754, 3677, Q, 3663, 3702, 3645, 3702, 3595, 3702, 3581, 3679, 3569, 3642, 3553, 3612, 3541, 3592, 3506, 3551, 3490, 3533, 3481, 3519, L, 3480, 3519, Q, 3465, 3529, 3457, 3534, 3443, 3543, 3434, 3565, L, 3438, 3597, Q, 3440, 3607, 3480, 3679, 3518, 3748, 3518, 3767, 3518, 3793, 3509, 3802, 3503, 3808, 3484, 3811, 3435, 3819, 3403, 3862, 3393, 3876, 3370, 3910, 3352, 3930, 3331, 3935, 3332, 3938, 3334, 3942, 3335, 3948, 3340, 3956, 3340, 3957, 3340, 3957, L, 3363, 3957, Q, 3439, 3974, 3472, 4013, 3512, 4060, 3503, 4152, 3570, 4130, 3587, 4222, 3592, 4251, 3593, 4374, 3593, 4376, 3593, 4378, 3594, 4377, 3594, 4377, 3598, 4376, 3600, 4375, 3605, 4372, 3605, 4372, 3614, 4372, 3639, 4400, 3663, 4427, 3695, 4427, 3704, 4427, 3729, 4390, 3753, 4352, 3787, 4352, 3802, 4352, 3814, 4368, 3822, 4377, 3842, 4402, 3827, 4420, 3752, 4477, L, 3752, 4532, Q, 3771, 4532, 3808, 4550, 3810, 4551, 3812, 4553, 3821, 4557, 3828, 4558, 3872, 4544, 3934, 4527, 4054, 4484, 4052, 4412, L, 4052, 4332, 4057, 4332, Q, 4063, 4262, 4076, 4159, 4077, 4150, 4077, 4050, 4077, 3951, 4064, 3930, 4046, 3902, 3947, 3867, 3878, 3843, 3837, 3754, 3818, 3713, 3807, 3700, Q, 3787, 3677, 3754, 3677, Z]],
      "label": "Monmouthshire",
      "shortLabel": "MM",
      "labelPosition": [365.4, 384.8],
      "labelAlignment": [CEN, MID]
    },
    "13": {
      "outlines": [[M, 3070, 3973, Q, 3065, 3971, 3059, 3969, 3031, 3961, 3023, 3957, 2944, 3892, 2928, 3892, 2915, 3892, 2898, 3898, 2903, 3913, 2917, 3945, 2928, 3976, 2928, 4005, 2928, 4037, 2918, 4051, 2908, 4064, 2908, 4080, 2908, 4090, 3043, 4265, 3067, 4299, 3087, 4329, L, 3093, 4327, Q, 3120, 4300, 3126, 4294, 3133, 4287, 3133, 4275, 3133, 4230, 3105, 4119, 3075, 4006, 3070, 3974, Z]],
      "label": "Merthyr Tydfil",
      "shortLabel": "MT",
      "labelPosition": [306.1, 512.1],
      "labelAlignment": [CEN, BTM],
      "labelConnectors": [[M, 3061, 5121, L, 3061, 4151]]
    },
    "14": {
      "outlines": [[M, 2683, 4162, Q, 2688, 4093, 2688, 4057, L, 2688, 4057, Q, 2670, 4053, 2618, 4030, 2556, 4002, 2545, 4002, 2522, 4002, 2493, 4020, 2464, 4037, 2435, 4037, 2423, 4037, 2390, 3997, 2361, 3959, 2347, 3942, L, 2343, 3947, Q, 2335, 3957, 2299, 3957, 2263, 3957, 2258, 3962, 2238, 3981, 2209, 4001, 2198, 4009, 2189, 4014, 2200, 4031, 2247, 4103, 2293, 4177, 2293, 4202, 2293, 4218, 2261, 4299, 2232, 4371, 2223, 4386, L, 2221, 4393, Q, 2222, 4393, 2223, 4393, 2237, 4392, 2253, 4392, 2305, 4392, 2317, 4395, 2333, 4397, 2337, 4410, 2340, 4418, 2346, 4450, 2351, 4471, 2361, 4493, 2362, 4495, 2363, 4497, 2365, 4534, 2391, 4590, 2416, 4575, 2476, 4572, 2477, 4572, 2563, 4572, L, 2563, 4522, Q, 2549, 4510, 2538, 4480, 2528, 4451, 2528, 4430, 2528, 4385, 2554, 4366, 2572, 4354, 2613, 4348, 2658, 4342, 2671, 4337, 2694, 4327, 2697, 4302, L, 2697, 4302, Q, 2698, 4297, 2698, 4292, 2698, 4267, 2690, 4227, Q, 2683, 4188, 2683, 4162, Z]],
      "label": "Neath Port Talbot",
      "shortLabel": "NP",
      "labelPosition": [244.3, 426.7],
      "labelAlignment": [CEN, MID]
    },
    "15": {
      "outlines": [[M, 3639, 4400, Q, 3614, 4372, 3605, 4372, 3605, 4372, 3600, 4375, 3598, 4376, 3594, 4377, 3594, 4377, 3593, 4378, L, 3592, 4378, Q, 3591, 4379, 3590, 4379, 3560, 4393, 3472, 4435, 3470, 4436, 3468, 4437, 3467, 4437, 3466, 4436, 3463, 4439, 3458, 4443, 3457, 4443, 3456, 4444, 3454, 4445, 3451, 4447, 3451, 4447, 3451, 4447, L, 3450, 4447, Q, 3441, 4452, 3420, 4463, 3388, 4482, 3388, 4495, 3388, 4502, 3398, 4512, 3408, 4521, 3408, 4537, 3408, 4554, 3395, 4569, 3394, 4571, 3393, 4572, L, 3389, 4576, Q, 3395, 4582, 3401, 4588, 3441, 4629, 3456, 4658, 3457, 4660, 3459, 4662, 3463, 4666, 3468, 4667, 3491, 4648, 3506, 4635, 3562, 4587, 3605, 4587, 3621, 4587, 3645, 4600, 3670, 4612, 3688, 4612, 3729, 4612, 3743, 4598, 3745, 4596, 3746, 4595, 3747, 4594, 3748, 4593, 3751, 4590, 3753, 4590, 3778, 4575, 3828, 4558, 3821, 4557, 3812, 4553, 3810, 4551, 3808, 4550, 3771, 4532, 3752, 4532, L, 3752, 4477, Q, 3827, 4420, 3842, 4402, 3822, 4377, 3814, 4368, 3802, 4352, 3787, 4352, 3753, 4352, 3729, 4390, 3704, 4427, 3695, 4427, Q, 3663, 4427, 3639, 4400, Z]],
      "label": "Newport",
      "shortLabel": "NO",
      "labelPosition": [354.5, 451],
      "labelAlignment": [CEN, MID]
    },
    "16": {
      "outlines": [[M, 953, 3190, Q, 945, 3201, 928, 3227, 909, 3254, 908, 3272, 907, 3289, 881, 3318, 851, 3352, 823, 3352, 813, 3352, 786, 3349, 785, 3349, 785, 3349, 781, 3352, 778, 3352, 775, 3351, 773, 3351, 742, 3349, 733, 3352, 714, 3359, 686, 3389, 664, 3412, 635, 3412, 626, 3412, 580, 3375, 534, 3337, 528, 3337, 471, 3337, 451, 3354, 436, 3366, 433, 3396, 429, 3434, 423, 3447, 409, 3476, 368, 3492, 317, 3512, 244, 3547, 242, 3548, 240, 3549, 140, 3598, 108, 3627, L, 108, 3722, 243, 3722, Q, 244, 3722, 244, 3722, 282, 3722, 305, 3731, L, 345, 3751, Q, 346, 3752, 347, 3753, 371, 3782, 383, 3799, 408, 3835, 408, 3880, 408, 3935, 377, 3954, 355, 3967, 308, 3967, 261, 3967, 244, 3970, 241, 3971, 239, 3971, 208, 3981, 208, 4020, 208, 4037, 244, 4091, 249, 4097, 253, 4104, 281, 4143, 299, 4162, 306, 4157, 311, 4158, 326, 4130, 323, 4102, L, 403, 4102, Q, 413, 4113, 445, 4113, 494, 4112, 498, 4112, 487, 4124, 452, 4145, 423, 4167, 423, 4192, 423, 4199, 463, 4245, 503, 4291, 523, 4307, 573, 4347, 588, 4347, 604, 4348, 622, 4358, 639, 4367, 643, 4367, 666, 4367, 682, 4352, 700, 4332, 713, 4320, 761, 4276, 873, 4282, 915, 4285, 934, 4268, 938, 4265, 953, 4237, 958, 4228, 988, 4193, 1012, 4164, 1018, 4142, 1031, 4092, 1111, 4077, 1113, 4076, 1116, 4076, L, 1113, 4055, Q, 1117, 3990, 1117, 3955, 1116, 3890, 1093, 3867, 1067, 3841, 1002, 3843, 945, 3845, 928, 3807, 940, 3794, 959, 3782, 981, 3769, 998, 3752, 960, 3719, 948, 3707, 1028, 3602, 1068, 3602, 1081, 3602, 1095, 3620, 1110, 3637, 1123, 3637, 1164, 3637, 1258, 3577, 1348, 3520, 1348, 3502, 1348, 3492, 1328, 3453, 1307, 3411, 1293, 3397, 1266, 3367, 1264, 3337, 1225, 3325, 1203, 3312, 1184, 3301, 1150, 3278, 1121, 3262, 1098, 3262, 1072, 3263, 1063, 3255, 1056, 3250, 1055, 3234, 1054, 3219, 1051, 3207, 1049, 3205, 1049, 3202, L, 1043, 3202, Q, 1033, 3177, 1033, 3162, 1023, 3162, 1017, 3161, 1011, 3160, 1008, 3158, 993, 3159, 974, 3165, 973, 3165, 972, 3166, 972, 3167, 971, 3169, 968, 3175, 959, 3184, Q, 956, 3187, 953, 3190, Z]],
      "label": "Pembrokeshire",
      "shortLabel": "PE",
      "labelPosition": [72.8, 376.2],
      "labelAlignment": [CEN, MID]
    },
    "17": {
      "outlines": [[M, 3078, 1327, L, 3047, 1326, Q, 3045, 1329, 3043, 1331, 2997, 1375, 2913, 1397, L, 2888, 1397, 2888, 1389, Q, 2887, 1390, 2883, 1389, 2883, 1390, 2882, 1392, 2882, 1393, 2882, 1393, 2864, 1415, 2799, 1444, 2743, 1469, 2728, 1517, 2704, 1592, 2713, 1712, 2716, 1758, 2663, 1778, 2636, 1788, 2543, 1802, 2458, 1814, 2421, 1833, 2364, 1862, 2363, 1922, L, 2370, 1926, Q, 2371, 1926, 2371, 1926, L, 2372, 1928, Q, 2366, 2007, 2233, 2086, 2223, 2092, 2212, 2098, L, 2212, 2099, 2303, 2102, Q, 2306, 2110, 2335, 2133, 2354, 2148, 2353, 2192, 2349, 2292, 2388, 2292, 2416, 2292, 2473, 2247, L, 2508, 2247, Q, 2508, 2295, 2493, 2307, 2453, 2313, 2453, 2345, 2453, 2407, 2515, 2502, 2578, 2598, 2578, 2617, 2578, 2652, 2538, 2665, 2498, 2678, 2498, 2707, 2498, 2721, 2513, 2772, 2513, 2780, 2511, 2787, 2482, 2819, 2478, 2893, 2476, 2934, 2479, 3029, 2480, 3030, 2480, 3032, 2480, 3037, 2480, 3043, 2479, 3117, 2463, 3155, 2483, 3174, 2502, 3211, 2533, 3271, 2538, 3277, 2544, 3286, 2560, 3304, 2574, 3323, 2578, 3342, 2583, 3373, 2603, 3412, 2578, 3424, 2569, 3429, 2567, 3430, 2566, 3430, 2566, 3432, 2565, 3433, 2557, 3451, 2528, 3503, 2496, 3566, 2498, 3592, 2499, 3620, 2486, 3694, 2473, 3772, 2473, 3787, 2394, 3874, 2346, 3942, 2347, 3942, 2347, 3943, L, 2348, 3943, Q, 2361, 3959, 2390, 3997, 2423, 4037, 2435, 4037, 2464, 4037, 2493, 4020, 2522, 4002, 2545, 4002, 2556, 4002, 2618, 4030, 2670, 4053, 2688, 4057, 2691, 4057, 2692, 4057, L, 2693, 4057, Q, 2733, 4016, 2782, 3975, 2853, 3914, 2898, 3898, 2915, 3892, 2928, 3892, 2944, 3892, 3023, 3957, 3031, 3961, 3059, 3969, 3065, 3971, 3069, 3973, L, 3069, 3973, Q, 3085, 3980, 3088, 3987, L, 3098, 3987, Q, 3102, 3964, 3103, 3945, 3103, 3942, 3103, 3939, 3102, 3921, 3103, 3917, 3104, 3912, 3153, 3912, 3192, 3912, 3315, 3937, 3323, 3937, 3331, 3935, L, 3331, 3935, Q, 3352, 3930, 3370, 3910, 3393, 3876, 3403, 3862, 3435, 3819, 3484, 3811, 3503, 3808, 3509, 3802, 3518, 3793, 3518, 3767, 3518, 3748, 3480, 3679, 3440, 3607, 3438, 3597, L, 3434, 3565, Q, 3443, 3543, 3457, 3534, 3465, 3529, 3480, 3519, 3471, 3506, 3468, 3497, 3453, 3460, 3428, 3363, 3401, 3262, 3380, 3195, L, 3378, 3192, Q, 3395, 3175, 3402, 3136, 3412, 3077, 3418, 3062, 3426, 3038, 3451, 3006, 3488, 2961, 3503, 2937, 3504, 2935, 3535, 2858, 3561, 2790, 3573, 2782, 3591, 2770, 3595, 2749, 3596, 2744, 3598, 2712, 3598, 2700, 3607, 2682, 3618, 2662, 3623, 2652, 3510, 2632, 3484, 2631, 3456, 2612, 3426, 2579, 3379, 2521, 3353, 2493, 3308, 2444, 3263, 2422, 3285, 2327, 3395, 2294, 3425, 2284, 3490, 2270, 3546, 2256, 3578, 2237, L, 3578, 2137, 3538, 2137, Q, 3509, 2147, 3483, 2170, 3463, 2187, 3438, 2187, 3401, 2187, 3398, 2164, 3396, 2148, 3398, 2088, 3429, 2033, 3485, 1942, 3588, 1775, 3588, 1760, 3588, 1743, 3554, 1715, 3544, 1706, 3480, 1659, 3373, 1578, 3373, 1532, 3373, 1510, 3382, 1477, 3392, 1443, 3393, 1407, 3394, 1366, 3402, 1341, 3409, 1321, 3423, 1298, L, 3423, 1297, Q, 3434, 1281, 3446, 1260, 3446, 1260, 3445, 1260, 3438, 1264, 3433, 1267, 3428, 1271, 3419, 1295, 3410, 1317, 3388, 1327, 3349, 1352, 3335, 1356, 3318, 1362, 3248, 1362, Q, 3170, 1362, 3078, 1327, Z]],
      "label": "Powys",
      "shortLabel": "PO",
      "labelPosition": [291.7, 265.8],
      "labelAlignment": [CEN, MID]
    },
    "18": {
      "outlines": [[M, 2917, 3945, Q, 2903, 3913, 2898, 3898, 2853, 3914, 2782, 3975, 2733, 4016, 2693, 4057, L, 2688, 4057, Q, 2688, 4093, 2683, 4162, 2683, 4188, 2690, 4227, 2698, 4267, 2698, 4292, 2698, 4297, 2697, 4302, L, 2703, 4302, Q, 2802, 4328, 2822, 4445, 2832, 4509, 2828, 4627, L, 2837, 4628, Q, 2976, 4639, 3046, 4662, L, 3047, 4663, Q, 3048, 4663, 3049, 4663, L, 3049, 4656, 3047, 4656, Q, 3043, 4641, 3043, 4625, 3043, 4579, 3110, 4572, 3146, 4568, 3157, 4563, 3167, 4559, 3172, 4552, 3178, 4544, 3178, 4532, 3178, 4469, 3088, 4331, 3087, 4330, 3087, 4329, 3067, 4299, 3043, 4265, 2908, 4090, 2908, 4080, 2908, 4064, 2918, 4051, 2928, 4037, 2928, 4005, Q, 2928, 3976, 2917, 3945, Z]],
      "label": "Rhondda Cynon Taff",
      "shortLabel": "RT",
      "labelPosition": [289.5, 430.1],
      "labelAlignment": [CEN, MID]
    },
    "19": {
      "outlines": [[M, 1938, 4282, Q, 1906, 4282, 1845, 4291, 1848, 4296, 1848, 4302, 1848, 4310, 1818, 4331, 1789, 4352, 1778, 4352, 1748, 4353, 1683, 4347, 1652, 4347, 1623, 4372, 1593, 4398, 1593, 4430, 1593, 4487, 1653, 4527, 1704, 4561, 1758, 4562, 1875, 4554, 1943, 4548, 2070, 4536, 2098, 4512, 2087, 4434, 2139, 4408, 2164, 4396, 2221, 4393, L, 2223, 4386, Q, 2232, 4371, 2261, 4299, 2293, 4218, 2293, 4202, 2293, 4177, 2247, 4103, 2200, 4031, 2189, 4014, 2174, 4022, 2168, 4022, Q, 2037, 4022, 1938, 4282, Z]],
      "label": "Swansea",
      "shortLabel": "SW",
      "labelPosition": [189.3, 440.8],
      "labelAlignment": [CEN, MID]
    },
    "20": {
      "outlines": [[M, 3472, 4013, Q, 3439, 3974, 3363, 3957, L, 3340, 3957, Q, 3353, 3981, 3383, 4027, L, 3383, 4217, 3376, 4220, 3376, 4221, Q, 3377, 4222, 3379, 4223, L, 3379, 4223, 3380, 4223, Q, 3408, 4241, 3438, 4247, 3438, 4273, 3427, 4343, 3425, 4400, 3459, 4431, L, 3460, 4431, Q, 3462, 4433, 3464, 4434, 3465, 4435, 3466, 4436, 3469, 4434, 3472, 4435, 3560, 4393, 3590, 4379, L, 3593, 4374, Q, 3592, 4251, 3587, 4222, 3570, 4130, 3503, 4152, Q, 3512, 4060, 3472, 4013, Z]],
      "label": "Torfaen",
      "shortLabel": "TF",
      "labelPosition": [427.1, 424.1],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [[M, 4271, 4241, L, 3511, 4241]]
    },
    "21": {
      "outlines": [[M, 2833, 4632, Q, 2832, 4632, 2832, 4632, 2806, 4650, 2706, 4698, 2596, 4752, 2579, 4766, 2597, 4774, 2608, 4797, 2629, 4843, 2656, 4862, 2691, 4887, 2768, 4897, 2825, 4905, 2925, 4935, 2997, 4957, 3103, 4957, 3209, 4957, 3243, 4952, 3255, 4950, 3273, 4920, 3292, 4886, 3298, 4877, 3300, 4874, 3302, 4870, L, 3298, 4867, Q, 3300, 4852, 3306, 4838, 3289, 4818, 3276, 4803, 3247, 4768, 3218, 4767, 3165, 4765, 3160, 4764, 3131, 4755, 3118, 4712, 3108, 4683, 3049, 4663, 3048, 4663, 3047, 4663, L, 3046, 4662, Q, 2976, 4639, 2837, 4628, Q, 2835, 4630, 2833, 4632, Z]],
      "label": "Vale of Glamorgan",
      "shortLabel": "VG",
      "labelPosition": [282.2, 479.3],
      "labelAlignment": [CEN, MID]
    },
    "22": {
      "outlines": [[M, 3648, 702, Q, 3623, 695, 3618, 727, 3633, 735, 3633, 740, 3633, 753, 3453, 887, L, 3428, 887, Q, 3398, 923, 3398, 1055, 3398, 1089, 3423, 1119, 3448, 1149, 3448, 1152, 3443, 1162, 3443, 1167, 3368, 1195, 3288, 1212, 3261, 1218, 3200, 1217, 3150, 1215, 3143, 1222, 3076, 1297, 3047, 1327, L, 3078, 1327, Q, 3170, 1362, 3248, 1362, 3318, 1362, 3335, 1356, 3349, 1352, 3388, 1327, 3410, 1317, 3419, 1295, 3428, 1271, 3433, 1267, 3438, 1264, 3446, 1260, 3446, 1260, 3447, 1260, 3461, 1253, 3484, 1247, 3518, 1237, 3528, 1227, 3537, 1217, 3584, 1205, 3626, 1195, 3633, 1177, L, 3658, 1177, Q, 3661, 1201, 3666, 1212, 3674, 1232, 3708, 1232, L, 3787, 1212, Q, 3787, 1212, 3804, 1213, L, 3805, 1208, Q, 3876, 1222, 3877, 1292, 3903, 1301, 3913, 1306, 3915, 1307, 3939, 1307, 3946, 1307, 3977, 1272, 3992, 1255, 4007, 1237, 4007, 1221, 4005, 1220, 3989, 1210, 3977, 1197, L, 3972, 1148, Q, 3969, 1126, 3972, 1107, 3827, 1119, 3787, 957, 3772, 899, 3708, 803, 3648, 714, 3648, 702, Z]],
      "label": "Wrexham",
      "shortLabel": "WX",
      "labelPosition": [362.7, 103.1],
      "labelAlignment": [CEN, MID]
    },
    "01": {
      "outlines": [[M, 3103, 3939, Q, 3103, 3942, 3103, 3945, 3155, 3987, 3178, 4054, 3192, 4093, 3208, 4152, 3225, 4149, 3232, 4132, 3238, 4117, 3253, 4117, 3270, 4117, 3289, 4134, 3294, 4140, 3324, 4174, 3349, 4203, 3375, 4220, L, 3376, 4220, 3383, 4217, 3383, 4027, Q, 3353, 3981, 3340, 3957, 3340, 3957, 3340, 3956, 3335, 3948, 3334, 3942, 3332, 3938, 3331, 3935, 3323, 3937, 3315, 3937, 3192, 3912, 3153, 3912, 3104, 3912, 3103, 3917, Q, 3102, 3921, 3103, 3939, Z]],
      "label": "Blaenau Gwent",
      "shortLabel": "BG",
      "labelPosition": [416.1, 401.1],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [[M, 4161, 4011, L, 3231, 4011]]
    },
    "07": {
      "outlines": [[M, 2720, 337, Q, 2669, 337, 2553, 296, 2443, 258, 2423, 237, L, 2383, 237, Q, 2385, 304, 2380, 328, 2373, 368, 2323, 377, 2290, 383, 2242, 408, 2215, 423, 2167, 426, 2167, 428, 2169, 430, 2181, 454, 2212, 484, 2243, 515, 2243, 562, 2243, 594, 2188, 669, 2133, 744, 2133, 792, 2133, 815, 2155, 840, 2178, 864, 2178, 890, 2155, 946, 2153, 977, L, 2153, 982, Q, 2153, 983, 2154, 985, 2164, 1011, 2166, 1013, 2169, 1015, 2200, 1015, 2227, 1015, 2243, 1012, 2245, 1012, 2248, 1011, L, 2298, 1012, Q, 2298, 1017, 2308, 1017, 2303, 1070, 2323, 1097, 2333, 1111, 2348, 1113, 2363, 1115, 2369, 1123, 2403, 1162, 2443, 1162, 2477, 1162, 2506, 1145, 2522, 1136, 2555, 1107, 2618, 1052, 2683, 1052, 2718, 1052, 2725, 1062, 2729, 1067, 2724, 1084, 2720, 1100, 2726, 1108, 2737, 1119, 2778, 1122, 2804, 1124, 2853, 1131, 2891, 1137, 2916, 1137, 2917, 1137, 2918, 1137, 2939, 1137, 2943, 1117, 2945, 1106, 2943, 1077, 2943, 958, 2903, 897, 2890, 878, 2843, 861, 2771, 834, 2768, 832, 2819, 755, 2858, 712, 2899, 667, 2924, 656, 2928, 652, 2928, 592, 2928, 523, 2888, 495, 2865, 480, 2860, 474, 2848, 459, 2848, 430, 2848, 398, 2858, 373, 2872, 339, 2877, 304, Q, 2794, 337, 2720, 337, Z]],
      "label": "Conwy",
      "shortLabel": "CW",
      "labelPosition": [253.8, 70],
      "labelAlignment": [CEN, MID]
    },
    "08": {
      "outlines": [[M, 3174, 601, Q, 3118, 511, 3118, 492, 3118, 488, 3143, 412, 3143, 397, 3107, 372, 3073, 347, 3058, 347, 3057, 341, 3077, 286, 3096, 236, 3098, 213, 3064, 216, 3026, 232, 3007, 239, 2940, 275, 2908, 292, 2877, 304, 2872, 339, 2858, 373, 2848, 398, 2848, 430, 2848, 459, 2860, 474, 2865, 480, 2888, 495, 2928, 523, 2928, 592, 2928, 652, 2924, 656, 2899, 667, 2858, 712, 2819, 755, 2768, 832, 2771, 834, 2843, 861, 2890, 878, 2903, 897, 2943, 958, 2943, 1077, 2945, 1106, 2943, 1117, 2939, 1137, 2918, 1137, 2917, 1137, 2916, 1137, 2915, 1143, 2914, 1146, L, 2914, 1147, Q, 2913, 1148, 2914, 1149, 2914, 1151, 2917, 1153, 2915, 1169, 2898, 1202, 2878, 1237, 2878, 1240, 2878, 1256, 2898, 1259, 2918, 1263, 2918, 1295, 2918, 1303, 2916, 1312, 2915, 1318, 2914, 1324, 2903, 1367, 2893, 1382, 2892, 1384, 2890, 1385, 2890, 1388, 2888, 1389, L, 2888, 1397, 2913, 1397, Q, 2997, 1375, 3043, 1331, 3045, 1329, 3047, 1327, 3076, 1297, 3143, 1222, 3150, 1215, 3200, 1217, 3261, 1218, 3288, 1212, 3368, 1195, 3443, 1167, 3443, 1162, 3448, 1152, 3448, 1149, 3423, 1119, 3398, 1089, 3398, 1055, 3398, 923, 3428, 887, L, 3408, 887, Q, 3415, 868, 3390, 825, 3360, 772, 3358, 762, 3349, 725, 3331, 717, 3326, 714, 3278, 707, Q, 3238, 701, 3174, 601, Z]],
      "label": "Denbighshire",
      "shortLabel": "DB",
      "labelPosition": [310.8, 80.5],
      "labelAlignment": [CEN, MID]
    },
    "09": {
      "outlines": [[M, 3483, 482, Q, 3462, 482, 3298, 347, 3133, 212, 3113, 212, 3105, 212, 3098, 213, 3096, 236, 3077, 286, 3057, 341, 3058, 347, 3073, 347, 3107, 372, 3143, 397, 3143, 412, 3118, 488, 3118, 492, 3118, 511, 3174, 601, 3238, 701, 3278, 707, 3326, 714, 3331, 717, 3349, 725, 3358, 762, 3360, 772, 3390, 825, 3415, 868, 3408, 887, L, 3453, 887, Q, 3633, 753, 3633, 740, 3633, 735, 3618, 727, 3623, 695, 3648, 702, 3648, 681, 3678, 652, 3708, 622, 3708, 610, 3708, 572, 3533, 462, Q, 3492, 482, 3483, 482, Z]],
      "label": "Flintshire",
      "shortLabel": "FL",
      "labelPosition": [338.3, 55],
      "labelAlignment": [CEN, MID]
    },
    "06": {
      "outlines": [[M, 2473, 2247, Q, 2416, 2292, 2388, 2292, 2349, 2292, 2353, 2192, 2354, 2148, 2335, 2133, 2306, 2110, 2303, 2102, L, 2211, 2099, Q, 2172, 2121, 2119, 2145, 2051, 2176, 2028, 2187, 2033, 2202, 2033, 2210, 2033, 2308, 2011, 2349, 1978, 2411, 1963, 2497, 1945, 2596, 1814, 2761, L, 1816, 2770, Q, 1806, 2787, 1795, 2805, 1777, 2827, 1723, 2853, 1719, 2856, 1715, 2860, 1700, 2875, 1688, 2882, 1651, 2905, 1538, 2953, 1448, 2992, 1428, 3017, 1375, 3084, 1332, 3104, 1295, 3121, 1239, 3115, 1237, 3115, 1234, 3115, 1227, 3115, 1218, 3116, 1194, 3117, 1160, 3118, 1077, 3120, 1058, 3127, L, 1058, 3177, Q, 1055, 3183, 1054, 3191, 1053, 3196, 1053, 3202, L, 1050, 3202, Q, 1050, 3203, 1051, 3203, 1051, 3205, 1051, 3207, 1054, 3219, 1055, 3234, 1056, 3250, 1063, 3255, 1072, 3263, 1098, 3262, 1121, 3262, 1150, 3278, 1184, 3301, 1203, 3312, 1225, 3325, 1264, 3337, 1270, 3339, 1278, 3341, 1317, 3351, 1372, 3360, 1472, 3377, 1523, 3377, 1576, 3377, 1614, 3357, 1653, 3337, 1673, 3337, 1705, 3347, 1718, 3347, 1747, 3347, 1782, 3321, 1796, 3311, 1846, 3265, 1935, 3182, 2008, 3182, 2036, 3182, 2047, 3197, 2050, 3201, 2053, 3217, L, 2078, 3217, Q, 2102, 3189, 2117, 3173, 2144, 3142, 2183, 3142, 2196, 3142, 2211, 3150, 2225, 3157, 2235, 3157, 2253, 3157, 2273, 3142, 2292, 3127, 2310, 3127, 2328, 3127, 2357, 3162, 2386, 3197, 2415, 3197, 2447, 3197, 2464, 3156, 2479, 3117, 2480, 3043, 2480, 3037, 2480, 3032, 2480, 3030, 2480, 3029, 2476, 2934, 2478, 2893, 2482, 2819, 2512, 2787, 2513, 2780, 2513, 2772, 2498, 2721, 2498, 2707, 2498, 2678, 2538, 2665, 2578, 2652, 2578, 2617, 2578, 2598, 2515, 2502, 2453, 2407, 2453, 2345, 2453, 2313, 2493, 2307, 2508, 2295, 2508, 2247, Z]],
      "label": "Ceredigion",
      "shortLabel": "CG",
      "labelPosition": [201.4, 293.8],
      "labelAlignment": [CEN, MID]
    },
    "05": {
      "outlines": [[M, 2415, 3197, Q, 2386, 3197, 2357, 3162, 2328, 3127, 2310, 3127, 2292, 3127, 2273, 3142, 2253, 3157, 2235, 3157, 2225, 3157, 2211, 3150, 2196, 3142, 2183, 3142, 2144, 3142, 2117, 3173, 2102, 3189, 2078, 3217, L, 2053, 3217, Q, 2050, 3201, 2047, 3197, 2036, 3182, 2008, 3182, 1935, 3182, 1846, 3265, 1796, 3311, 1782, 3321, 1747, 3347, 1718, 3347, 1705, 3347, 1673, 3337, 1653, 3337, 1614, 3357, 1576, 3377, 1523, 3377, 1472, 3377, 1372, 3360, 1317, 3351, 1278, 3341, 1270, 3339, 1264, 3337, 1266, 3367, 1293, 3397, 1307, 3411, 1328, 3453, 1348, 3492, 1348, 3502, 1348, 3520, 1258, 3577, 1164, 3637, 1123, 3637, 1110, 3637, 1095, 3620, 1081, 3602, 1068, 3602, 1028, 3602, 948, 3707, 960, 3719, 998, 3752, 981, 3769, 959, 3782, 940, 3794, 928, 3807, 945, 3845, 1002, 3843, 1067, 3841, 1093, 3867, 1116, 3890, 1117, 3955, 1117, 3990, 1113, 4055, L, 1116, 4076, Q, 1164, 4068, 1275, 4069, 1386, 4071, 1422, 4062, 1483, 4047, 1468, 3997, 1489, 4008, 1498, 4045, 1507, 4076, 1503, 4107, 1500, 4130, 1521, 4157, 1534, 4174, 1573, 4222, 1583, 4237, 1629, 4243, 1637, 4244, 1722, 4250, 1830, 4257, 1845, 4291, 1906, 4282, 1938, 4282, 2037, 4022, 2168, 4022, 2174, 4022, 2189, 4014, 2198, 4009, 2209, 4001, 2238, 3981, 2258, 3962, 2263, 3957, 2299, 3957, 2335, 3957, 2343, 3947, 2345, 3945, 2347, 3942, 2394, 3874, 2473, 3787, 2473, 3772, 2486, 3694, 2499, 3620, 2498, 3592, 2496, 3566, 2528, 3503, 2557, 3451, 2565, 3433, 2566, 3432, 2567, 3430, 2567, 3430, 2569, 3429, 2578, 3424, 2603, 3412, 2583, 3373, 2578, 3342, 2574, 3323, 2560, 3304, 2544, 3286, 2538, 3277, 2533, 3271, 2502, 3211, 2483, 3174, 2464, 3156, Q, 2447, 3197, 2415, 3197, Z]],
      "label": "Carmarthenshire",
      "shortLabel": "CI",
      "labelPosition": [176.5, 370.9],
      "labelAlignment": [CEN, MID]
    },
    "02": {
      "outlines": [[M, 2703, 4302, L, 2697, 4302, Q, 2694, 4327, 2671, 4337, 2658, 4342, 2613, 4348, 2572, 4354, 2554, 4366, 2528, 4385, 2528, 4430, 2528, 4451, 2538, 4480, 2549, 4510, 2563, 4522, L, 2563, 4572, Q, 2477, 4572, 2476, 4572, 2416, 4575, 2391, 4590, L, 2391, 4591, Q, 2394, 4597, 2397, 4603, 2416, 4641, 2453, 4707, 2478, 4760, 2535, 4761, 2565, 4761, 2575, 4765, 2577, 4765, 2579, 4766, 2596, 4752, 2706, 4698, 2806, 4650, 2832, 4632, 2832, 4632, 2833, 4632, 2835, 4630, 2837, 4628, L, 2835, 4628, Q, 2834, 4628, 2833, 4628, 2832, 4628, 2831, 4628, L, 2828, 4627, Q, 2832, 4509, 2822, 4445, Q, 2802, 4328, 2703, 4302, Z]],
      "label": "Bridgend",
      "shortLabel": "BB",
      "labelPosition": [268.9, 455.4],
      "labelAlignment": [CEN, MID]
    },
    "03": {
      "outlines": [[M, 3324, 4174, Q, 3294, 4140, 3289, 4134, 3270, 4117, 3253, 4117, 3238, 4117, 3232, 4132, 3225, 4149, 3208, 4152, 3192, 4093, 3178, 4054, 3155, 3987, 3103, 3945, 3102, 3964, 3098, 3987, L, 3088, 3987, Q, 3085, 3980, 3070, 3973, L, 3070, 3974, Q, 3075, 4006, 3105, 4119, 3133, 4230, 3133, 4275, 3133, 4287, 3126, 4294, 3120, 4300, 3093, 4327, L, 3087, 4329, Q, 3087, 4330, 3088, 4331, 3178, 4469, 3178, 4532, 3178, 4544, 3172, 4552, 3188, 4552, 3238, 4557, 3278, 4557, 3338, 4542, 3353, 4542, 3389, 4576, L, 3389, 4576, 3393, 4572, Q, 3394, 4571, 3395, 4569, 3408, 4554, 3408, 4537, 3408, 4521, 3398, 4512, 3388, 4502, 3388, 4495, 3388, 4482, 3420, 4463, 3441, 4452, 3450, 4447, L, 3451, 4447, Q, 3451, 4447, 3451, 4447, 3454, 4445, 3456, 4444, 3457, 4443, 3458, 4443, 3463, 4439, 3466, 4436, 3465, 4435, 3464, 4434, 3462, 4433, 3460, 4431, L, 3459, 4431, Q, 3425, 4400, 3427, 4343, 3438, 4273, 3438, 4247, 3408, 4241, 3380, 4223, L, 3379, 4223, 3379, 4223, Q, 3377, 4222, 3376, 4221, L, 3375, 4220, Q, 3349, 4203, 3324, 4174, Z]],
      "label": "Caerphilly",
      "shortLabel": "CP",
      "labelPosition": [326.8, 432.1],
      "labelAlignment": [CEN, MID]
    },
    "04": {
      "outlines": [[M, 3389, 4576, L, 3389, 4576, Q, 3353, 4542, 3338, 4542, 3278, 4557, 3238, 4557, 3188, 4552, 3172, 4552, 3167, 4559, 3157, 4563, 3146, 4568, 3110, 4572, 3043, 4579, 3043, 4625, 3043, 4641, 3047, 4656, L, 3049, 4656, 3049, 4663, Q, 3108, 4683, 3118, 4712, 3131, 4755, 3160, 4764, 3165, 4765, 3218, 4767, 3247, 4768, 3276, 4803, 3289, 4818, 3306, 4838, 3329, 4772, 3403, 4722, 3441, 4690, 3468, 4667, 3463, 4666, 3459, 4662, 3457, 4660, 3456, 4658, 3441, 4629, 3401, 4588, Q, 3395, 4582, 3389, 4576, Z]],
      "label": "Cardiff",
      "shortLabel": "CA",
      "labelPosition": [325.5, 465],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'wales',
  type: 'maps'
};

/***/ })

/******/ });
}));
