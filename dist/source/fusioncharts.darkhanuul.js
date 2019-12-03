
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
/******/ 	return __webpack_require__(__webpack_require__.s = 268);
/******/ })
/************************************************************************/
/******/ ({

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(269);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 269:
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
 * @id fusionmaps.DarkhanUul.1.04-06-2017 03:52:32
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
  "name": "DarkhanUul",
  "revision": 1,
  "standaloneInit": true,
  "baseWidth": 485,
  "baseHeight": 600,
  "baseScaleFactor": 10,
  "entities": {
    "MN.DA.DA": {
      "outlines": [[M, 828, 2867, Q, 821, 2862, 800, 2838, 786, 2823, 749, 2810, 735, 2804, 718, 2783, 703, 2765, 690, 2765, 682, 2764, 673, 2756, 663, 2747, 663, 2737, 663, 2731, 660, 2721, 655, 2707, 648, 2707, 642, 2707, 617, 2737, 575, 2772, 494, 2792, 488, 2792, 471, 2802, 456, 2811, 455, 2813, 445, 2813, 439, 2813, 426, 2813, 421, 2818, 402, 2835, 325, 2827, 335, 2844, 346, 2862, 361, 2887, 375, 2942, 391, 2999, 391, 3032, 391, 3205, 433, 3234, 438, 3321, 431, 3444, 427, 3504, 421, 3546, 434, 3546, 456, 3536, 463, 3535, 479, 3524, 497, 3512, 501, 3510, 502, 3509, 520, 3505, 531, 3502, 537, 3494, 537, 3491, 548, 3482, 562, 3470, 578, 3470, L, 586, 3487, Q, 595, 3506, 603, 3517, 605, 3520, 623, 3538, 638, 3552, 642, 3560, 651, 3576, 677, 3610, 687, 3623, 698, 3642, 708, 3659, 715, 3666, 727, 3679, 748, 3714, 752, 3720, 771, 3741, 790, 3762, 794, 3770, 797, 3777, 815, 3798, 833, 3821, 835, 3826, 847, 3846, 854, 3859, 857, 3863, 875, 3863, 895, 3863, 903, 3856, 913, 3844, 919, 3843, 920, 3843, 935, 3843, 951, 3842, 982, 3841, 1007, 3840, 1019, 3834, 1023, 3832, 1097, 3825, 1166, 3818, 1166, 3809, L, 1166, 3805, 1154, 3805, 1152, 3784, Q, 1132, 3758, 1129, 3751, 1126, 3745, 1116, 3736, 1107, 3727, 1105, 3722, 1094, 3701, 1086, 3688, 1080, 3681, 1063, 3661, 1041, 3645, 1034, 3632, 1023, 3616, 1014, 3601, L, 993, 3566, Q, 991, 3561, 991, 3549, 992, 3538, 992, 3532, 994, 3466, 994, 3449, 994, 3431, 1004, 3423, 1013, 3414, 999, 3395, 985, 3374, 989, 3346, 992, 3317, 981, 3306, 969, 3294, 973, 3278, 977, 3262, 973, 3248, 969, 3234, 970, 3222, 970, 3210, 970, 3201, L, 971, 3152, Q, 971, 3149, 956, 3124, 941, 3100, 942, 3088, 942, 3076, 936, 3060, 930, 3045, 922, 3036, 906, 3015, 902, 2978, 901, 2939, 897, 2919, 882, 2892, 867, 2884, Q, 846, 2878, 828, 2867, Z]],
      "label": "Darkhan",
      "shortLabel": "DA",
      "labelPosition": [67.5, 319.8],
      "labelAlignment": [CEN, MID]
    },
    "MN.DA.HO": {
      "outlines": [[M, 3569, 2379, Q, 3495, 2411, 3460, 2411, 3449, 2411, 3426, 2408, 3394, 2404, 3388, 2403, 3379, 2402, 3348, 2396, 3318, 2390, 3302, 2397, L, 3188, 2393, Q, 3107, 2393, 3065, 2483, 3024, 2603, 2984, 2664, 2970, 2687, 2939, 2730, 2906, 2776, 2891, 2801, L, 2848, 2871, Q, 2836, 2901, 2832, 2908, 2827, 2919, 2805, 2919, L, 2697, 2878, Q, 2584, 2834, 2552, 2826, 2504, 2813, 2430, 2814, 2326, 2816, 2292, 2813, 2180, 2817, 2133, 2817, 2055, 2818, 2025, 2776, 2001, 2740, 1952, 2695, 1934, 2677, 1861, 2613, 1803, 2551, 1772, 2520, 1717, 2462, 1666, 2451, 1655, 2449, 1600, 2443, 1558, 2438, 1538, 2431, 1517, 2424, 1478, 2397, 1446, 2375, 1434, 2362, 1422, 2352, 1398, 2319, 1369, 2279, 1358, 2266, 1347, 2255, 1312, 2231, 1274, 2206, 1266, 2198, 1218, 2137, 1172, 2106, 1131, 2079, 1098, 2077, 1085, 2067, 1074, 2058, L, 1072, 2303, Q, 1072, 2322, 1071, 2359, 1070, 2393, 1072, 2420, 1077, 2478, 1063, 2494, 1053, 2504, 1018, 2504, 992, 2504, 987, 2502, 977, 2498, 937, 2494, 922, 2492, 891, 2494, 860, 2496, 846, 2494, 837, 2493, 804, 2481, 778, 2472, 759, 2475, 690, 2483, 655, 2473, 627, 2466, 561, 2463, 492, 2460, 459, 2452, 457, 2451, 366, 2448, 291, 2445, 275, 2430, L, 194, 2430, Q, 195, 2440, 195, 2451, L, 188, 2540, Q, 188, 2603, 242, 2693, 268, 2737, 325, 2827, 402, 2835, 421, 2818, 426, 2813, 439, 2813, 445, 2813, 455, 2813, 456, 2811, 471, 2802, 488, 2792, 494, 2792, 575, 2772, 617, 2737, 642, 2707, 648, 2707, 655, 2707, 660, 2721, 663, 2731, 663, 2737, 663, 2747, 673, 2756, 682, 2764, 690, 2765, 703, 2765, 718, 2783, 735, 2804, 749, 2810, 786, 2823, 800, 2838, 821, 2862, 828, 2867, 846, 2878, 867, 2884, 882, 2892, 897, 2919, 901, 2939, 902, 2978, 906, 3015, 922, 3036, 930, 3045, 936, 3060, 942, 3076, 942, 3088, 941, 3100, 956, 3124, 971, 3149, 971, 3152, L, 970, 3201, Q, 970, 3210, 970, 3222, 969, 3234, 973, 3248, 977, 3262, 973, 3278, 969, 3294, 981, 3306, 992, 3317, 989, 3346, 985, 3374, 999, 3395, 1013, 3414, 1004, 3423, 994, 3431, 994, 3449, 994, 3466, 992, 3532, 992, 3538, 991, 3549, 991, 3561, 993, 3566, L, 1014, 3601, Q, 1023, 3616, 1034, 3632, 1041, 3645, 1063, 3661, 1080, 3681, 1086, 3688, 1094, 3701, 1105, 3722, 1107, 3727, 1116, 3736, 1126, 3745, 1129, 3751, 1132, 3758, 1152, 3784, L, 1154, 3805, 1166, 3805, 1166, 3809, Q, 1166, 3818, 1097, 3825, 1023, 3832, 1019, 3834, 1007, 3840, 982, 3841, 951, 3842, 935, 3843, 920, 3843, 919, 3843, 913, 3844, 903, 3856, 895, 3863, 875, 3863, 857, 3863, 854, 3859, 847, 3846, 835, 3826, 833, 3821, 815, 3798, 797, 3777, 794, 3770, 790, 3762, 771, 3741, 752, 3720, 748, 3714, 727, 3679, 715, 3666, 708, 3659, 698, 3642, 687, 3623, 677, 3610, 651, 3576, 642, 3560, 638, 3552, 623, 3538, 605, 3520, 603, 3517, 595, 3506, 586, 3487, L, 578, 3470, Q, 562, 3470, 548, 3482, 537, 3491, 537, 3494, 531, 3502, 520, 3505, 502, 3509, 501, 3510, 497, 3512, 479, 3524, 463, 3535, 456, 3536, 434, 3546, 421, 3546, 411, 3612, 397, 3636, 380, 3663, 314, 3811, 242, 3973, 242, 3997, 242, 4011, 248, 4070, 253, 4117, 248, 4144, 241, 4192, 262, 4240, 281, 4286, 283, 4315, 283, 4318, 284, 4321, 285, 4374, 278, 4420, 276, 4435, 251, 4552, 239, 4615, 234, 4663, 232, 4697, 230, 4786, 209, 4860, 148, 5028, 97, 5183, 97, 5288, 97, 5292, 102, 5363, 105, 5442, 103, 5487, 101, 5525, 114, 5583, 131, 5664, 139, 5697, 141, 5702, 142, 5706, 141, 5731, 139, 5747, L, 139, 5813, Q, 390, 5831, 821, 5877, 845, 5879, 992, 5883, 1084, 5886, 1150, 5908, 1160, 5911, 1192, 5911, 1223, 5911, 1229, 5914, 1238, 5919, 1266, 5923, 1291, 5927, 1301, 5927, 1313, 5927, 1357, 5941, 1401, 5956, 1440, 5956, 1486, 5956, 1529, 5825, 1565, 5688, 1570, 5674, 1584, 5590, 1610, 5549, 1642, 5498, 1724, 5450, 1757, 5429, 2003, 5303, 2248, 5176, 2271, 5182, 2294, 5186, 2379, 5245, 2464, 5304, 2477, 5311, 2490, 5319, 2494, 5321, 2515, 5330, 2523, 5334, 2543, 5346, 2559, 5361, 2566, 5368, 2589, 5404, 2613, 5440, 2617, 5444, 2645, 5468, 2700, 5515, 2713, 5526, 2725, 5533, 2727, 5519, 2719, 5487, 2711, 5455, 2712, 5441, 2714, 5416, 2707, 5387, 2697, 5356, 2693, 5340, 2692, 5335, 2693, 5316, 2693, 5298, 2690, 5289, 2684, 5274, 2682, 5266, 2678, 5251, 2678, 5243, 2681, 5218, 2672, 5193, 2662, 5167, 2663, 5139, 2664, 5087, 2664, 5078, 2654, 5064, 2652, 5060, 2648, 5054, 2648, 5044, 2648, 5006, 2694, 4971, 2699, 4967, 2711, 4962, 2722, 4958, 2727, 4951, 2746, 4925, 2752, 4922, 2766, 4914, 2787, 4888, 2809, 4863, 2825, 4854, 2837, 4847, 2855, 4831, 2876, 4813, 2886, 4807, L, 2887, 4807, Q, 2912, 4792, 2918, 4765, 2922, 4734, 2925, 4717, 2933, 4713, 2934, 4693, 2933, 4671, 2933, 4666, 2932, 4656, 2939, 4643, 2948, 4628, 2949, 4621, 2950, 4618, 2949, 4591, 2949, 4570, 2956, 4562, 2970, 4549, 2970, 4544, 2971, 4529, 2976, 4509, 2978, 4503, 2983, 4498, 2989, 4493, 2995, 4493, 2999, 4493, 3026, 4490, 3049, 4490, 3094, 4487, 3118, 4487, 3120, 4489, 3124, 4492, 3145, 4517, 3147, 4518, 3163, 4549, 3171, 4559, 3184, 4566, 3203, 4594, 3241, 4629, 3261, 4648, 3297, 4679, 3307, 4689, 3330, 4700, L, 3358, 4728, Q, 3361, 4732, 3370, 4740, 3378, 4747, 3380, 4757, 3383, 4772, 3385, 4777, 3390, 4789, 3401, 4792, 3433, 4795, 3468, 4824, 3479, 4832, 3533, 4886, 3576, 4929, 3604, 4951, L, 3635, 4978, Q, 3639, 4981, 3655, 4989, 3668, 4994, 3671, 5002, 3668, 5020, 3676, 5049, 3684, 5084, 3684, 5090, 3685, 5119, 3683, 5151, 3682, 5173, 3693, 5197, 3704, 5220, 3705, 5239, 3707, 5249, 3706, 5282, 3705, 5304, 3711, 5329, 3719, 5362, 3720, 5370, 3719, 5384, 3716, 5426, 3716, 5458, 3722, 5475, 3729, 5495, 3732, 5533, 3737, 5608, 3747, 5645, 3749, 5654, 3748, 5693, 3748, 5729, 3752, 5740, 3772, 5793, 3767, 5829, 3802, 5830, 3842, 5831, 3863, 5831, 3962, 5848, 4058, 5864, 4091, 5864, 4149, 5864, 4171, 5858, 4187, 5853, 4237, 5833, 4270, 5822, 4317, 5808, 4352, 5797, 4377, 5785, 4431, 5761, 4528, 5712, L, 4594, 5684, Q, 4613, 5675, 4638, 5669, 4665, 5661, 4665, 5667, 4699, 5667, 4702, 5667, 4716, 5669, 4738, 5674, L, 4816, 5674, 4816, 5629, Q, 4814, 5621, 4790, 5529, 4776, 5477, 4775, 5442, 4771, 5426, 4762, 5401, 4754, 5382, 4750, 5369, 4750, 5365, 4749, 5361, 4683, 5076, 4642, 4933, 4633, 4901, 4619, 4828, 4606, 4755, 4594, 4710, 4585, 4676, 4549, 4591, 4526, 4536, 4526, 4486, 4526, 4438, 4541, 4387, 4557, 4332, 4564, 4292, 4564, 4287, 4564, 4283, L, 4564, 4276, Q, 4581, 4231, 4599, 4149, 4616, 4062, 4624, 4030, 4651, 3944, 4662, 3906, 4683, 3840, 4683, 3799, 4664, 3633, 4659, 3560, 4659, 3541, 4644, 3429, 4632, 3344, 4639, 3284, 4632, 3180, 4628, 3125, 4619, 3025, 4589, 2954, 4584, 2943, 4551, 2920, 4518, 2899, 4515, 2896, 4500, 2885, 4484, 2876, 4465, 2865, 4449, 2853, 4382, 2806, 4262, 2737, 4107, 2633, 3963, 2537, 3676, 2347, 3652, 2347, Q, 3644, 2347, 3569, 2379, Z]],
      "label": "Khongor",
      "shortLabel": "HO",
      "labelPosition": [245.6, 400.7],
      "labelAlignment": [CEN, MID]
    },
    "MN.DA.OR": {
      "outlines": [[M, 1305, 55, Q, 1305, 76, 1358, 177, 1386, 228, 1416, 282, 1416, 283, 1416, 283, 1441, 340, 1444, 354, 1446, 363, 1446, 412, 1446, 467, 1412, 524, 1337, 649, 1319, 687, 1297, 735, 1214, 803, 1110, 888, 1089, 912, 1013, 1000, 861, 1134, 697, 1274, 629, 1333, 631, 1336, 628, 1339, 614, 1351, 547, 1408, 495, 1454, 462, 1493, 414, 1549, 309, 1669, 266, 1719, 227, 1779, 184, 1847, 164, 1872, 106, 1943, 88, 1974, 47, 2040, 53, 2091, 53, 2094, 53, 2097, 59, 2140, 80, 2194, 87, 2213, 119, 2286, 133, 2317, 172, 2372, 190, 2398, 194, 2430, L, 275, 2430, Q, 291, 2445, 366, 2448, 457, 2451, 459, 2452, 492, 2460, 561, 2463, 627, 2466, 655, 2473, 690, 2483, 759, 2475, 778, 2472, 804, 2481, 837, 2493, 846, 2494, 860, 2496, 891, 2494, 922, 2492, 937, 2494, 977, 2498, 987, 2502, 992, 2504, 1018, 2504, 1053, 2504, 1063, 2494, 1077, 2478, 1072, 2420, 1070, 2393, 1071, 2359, 1072, 2322, 1072, 2303, L, 1074, 2058, Q, 1059, 2044, 1047, 2033, 1027, 2015, 1027, 1992, 1027, 1967, 1063, 1916, 1093, 1873, 1117, 1852, 1137, 1835, 1167, 1799, 1184, 1778, 1224, 1730, 1273, 1673, 1349, 1603, 1421, 1536, 1456, 1493, 1483, 1460, 1514, 1435, 1532, 1420, 1576, 1387, 1592, 1373, 1629, 1332, 1667, 1290, 1680, 1278, 1718, 1244, 1755, 1141, 1791, 1033, 1812, 986, 1812, 982, 1815, 979, 1900, 787, 1937, 700, 1937, 607, 1940, 567, 1952, 531, 1976, 499, 1983, 488, 1998, 473, 2008, 460, 2008, 442, 2008, 416, 1876, 379, 1705, 332, 1619, 275, 1564, 239, 1539, 219, 1503, 189, 1474, 151, 1472, 147, 1444, 124, 1414, 99, 1404, 88, 1399, 82, 1385, 78, 1367, 73, 1358, 67, 1353, 64, 1340, 51, 1331, 40, 1323, 40, Q, 1305, 40, 1305, 55, Z]],
      "label": "Orkhon",
      "shortLabel": "OR",
      "labelPosition": [113.5, 127.2],
      "labelAlignment": [CEN, MID]
    },
    "MN.DA.SH": {
      "outlines": [[M, 3241, 4629, Q, 3203, 4594, 3184, 4566, 3171, 4559, 3163, 4549, 3147, 4518, 3145, 4517, 3124, 4492, 3120, 4489, 3118, 4487, 3094, 4487, 3049, 4490, 3026, 4490, 2999, 4493, 2995, 4493, 2989, 4493, 2983, 4498, 2978, 4503, 2976, 4509, 2971, 4529, 2970, 4544, 2970, 4549, 2956, 4562, 2949, 4570, 2949, 4591, 2950, 4618, 2949, 4621, 2948, 4628, 2939, 4643, 2932, 4656, 2933, 4666, 2933, 4671, 2934, 4693, 2933, 4713, 2925, 4717, 2922, 4734, 2918, 4765, 2912, 4792, 2887, 4807, L, 2886, 4807, Q, 2876, 4813, 2855, 4831, 2837, 4847, 2825, 4854, 2809, 4863, 2787, 4888, 2766, 4914, 2752, 4922, 2746, 4925, 2727, 4951, 2722, 4958, 2711, 4962, 2699, 4967, 2694, 4971, 2648, 5006, 2648, 5044, 2648, 5054, 2652, 5060, 2654, 5064, 2664, 5078, 2664, 5087, 2663, 5139, 2662, 5167, 2672, 5193, 2681, 5218, 2678, 5243, 2678, 5251, 2682, 5266, 2684, 5274, 2690, 5289, 2693, 5298, 2693, 5316, 2692, 5335, 2693, 5340, 2697, 5356, 2707, 5387, 2714, 5416, 2712, 5441, 2711, 5455, 2719, 5487, 2727, 5519, 2725, 5533, 2756, 5554, 2781, 5557, 2788, 5558, 2824, 5573, 2852, 5585, 2882, 5584, 2940, 5579, 2968, 5611, 2976, 5620, 3018, 5702, 3043, 5751, 3089, 5751, 3101, 5751, 3127, 5758, 3153, 5764, 3171, 5760, 3190, 5755, 3275, 5768, 3360, 5781, 3383, 5782, 3464, 5788, 3602, 5814, 3663, 5825, 3767, 5829, 3772, 5793, 3752, 5740, 3748, 5729, 3748, 5693, 3749, 5654, 3747, 5645, 3737, 5608, 3732, 5533, 3729, 5495, 3722, 5475, 3716, 5458, 3716, 5426, 3719, 5384, 3720, 5370, 3719, 5362, 3711, 5329, 3705, 5304, 3706, 5282, 3707, 5249, 3705, 5239, 3704, 5220, 3693, 5197, 3682, 5173, 3683, 5151, 3685, 5119, 3684, 5090, 3684, 5084, 3676, 5049, 3668, 5020, 3671, 5002, 3668, 4994, 3655, 4989, 3639, 4981, 3635, 4978, L, 3604, 4951, Q, 3576, 4929, 3533, 4886, 3479, 4832, 3468, 4824, 3433, 4795, 3401, 4792, 3390, 4789, 3385, 4777, 3383, 4772, 3380, 4757, 3378, 4747, 3370, 4740, 3361, 4732, 3358, 4728, L, 3330, 4700, Q, 3307, 4689, 3297, 4679, Q, 3261, 4648, 3241, 4629, Z]],
      "label": "Sharyngol",
      "shortLabel": "SH",
      "labelPosition": [320.8, 522.8],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'darkhanuul',
  type: 'maps'
};

/***/ })

/******/ });
}));
