
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
/******/ 	return __webpack_require__(__webpack_require__.s = 624);
/******/ })
/************************************************************************/
/******/ ({

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(625);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 625:
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
 * @id fusionmaps.Vlore.20.12-21-2012 09:20:12
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
  "name": "Vlore",
  "revision": 20,
  "standaloneInit": true,
  "baseWidth": 489,
  "baseHeight": 594,
  "baseScaleFactor": 10,
  "entities": {
    "01": {
      "outlines": [[M, 3691, 3249, Q, 3670, 3221, 3655, 3204, 3640, 3186, 3621, 3187, 3602, 3187, 3587, 3197, 3572, 3207, 3568, 3208, 3565, 3210, 3510, 3210, L, 3383, 3210, Q, 3345, 3209, 3335, 3211, 3325, 3213, 3296, 3227, 3266, 3240, 3224, 3240, 3178, 3236, 3166, 3236, 3087, 3236, 3053, 3196, L, 3015, 3158, Q, 2995, 3152, 2980, 3129, 2979, 3130, 2979, 3131, L, 2979, 3128, 2956, 3145, Q, 2956, 3203, 2954, 3236, 2963, 3274, 2934, 3312, 2932, 3338, 2931, 3399, 2927, 3407, 2903, 3429, L, 2903, 3514, Q, 2900, 3527, 2926, 3537, 2941, 3564, 2973, 3583, 3004, 3602, 3021, 3622, L, 3069, 3669, Q, 3079, 3672, 3101, 3673, 3106, 3674, 3122, 3697, 3151, 3713, 3166, 3734, 3175, 3748, 3202, 3781, 3210, 3826, 3219, 3846, L, 3217, 4157, Q, 3238, 4155, 3264, 4176, 3277, 4187, 3300, 4209, 3322, 4210, 3354, 4239, 3372, 4256, 3414, 4274, 3494, 4348, 3525, 4358, L, 3525, 4422, Q, 3522, 4485, 3522, 4624, L, 3850, 4624, 3850, 4550, Q, 3863, 4524, 3863, 4490, 3857, 4444, 3858, 4419, 3860, 4374, 3896, 4379, L, 3896, 4348, 4155, 4348, Q, 4157, 4351, 4165, 4351, 4156, 4365, 4168, 4371, 4185, 4378, 4185, 4386, L, 4185, 4438, Q, 4185, 4455, 4209, 4470, 4215, 4473, 4215, 4517, 4214, 4551, 4212, 4567, L, 4379, 4567, Q, 4388, 4536, 4438, 4539, 4469, 4540, 4561, 4543, 4636, 4538, 4767, 4536, 4738, 4476, 4668, 4375, 4590, 4263, 4565, 4210, 4539, 4155, 4510, 4125, 4491, 4106, 4480, 4025, 4456, 3987, 4458, 3971, 4457, 3925, 4458, 3907, L, 4451, 3795, 4224, 3791, Q, 4213, 3803, 4189, 3803, 4172, 3802, 4165, 3800, 4161, 3760, 4115, 3710, 4060, 3661, 4044, 3639, 4025, 3617, 3909, 3483, 3890, 3459, 3828, 3410, 3794, 3382, 3753, 3326, Q, 3709, 3268, 3691, 3249, Z]],
      "label": "Delvinë",
      "shortLabel": "DL",
      "labelPosition": [367.3, 387.6],
      "labelAlignment": [CEN, MID]
    },
    "02": {
      "outlines": [[M, 4185, 4438, L, 4185, 4386, Q, 4185, 4378, 4168, 4371, 4156, 4365, 4165, 4351, 4157, 4351, 4155, 4348, L, 3896, 4348, 3896, 4379, Q, 3860, 4374, 3858, 4419, 3857, 4444, 3863, 4490, 3863, 4524, 3850, 4550, L, 3850, 4624, 3522, 4624, Q, 3522, 4485, 3525, 4422, L, 3525, 4358, Q, 3494, 4348, 3414, 4274, 3372, 4256, 3354, 4239, 3322, 4210, 3300, 4209, 3277, 4187, 3264, 4176, 3238, 4155, 3217, 4157, L, 3219, 3846, Q, 3210, 3826, 3202, 3781, 3175, 3748, 3166, 3734, 3151, 3713, 3122, 3697, 3106, 3674, 3101, 3673, 3079, 3672, 3069, 3669, L, 3021, 3622, Q, 3004, 3602, 2973, 3583, 2941, 3564, 2926, 3537, 2900, 3527, 2903, 3514, L, 2903, 3429, Q, 2927, 3407, 2931, 3399, 2932, 3338, 2934, 3312, 2963, 3274, 2954, 3236, 2956, 3203, 2956, 3145, L, 2979, 3128, 2980, 3129, Q, 2979, 3127, 2980, 3125, 2983, 3077, 2935, 3040, 2870, 3003, 2847, 2989, 2733, 2923, 2669, 2882, 2668, 2863, 2668, 2848, L, 2620, 2848, Q, 2625, 2830, 2608, 2829, 2585, 2830, 2575, 2829, 2570, 2814, 2570, 2805, 2552, 2805, 2542, 2802, L, 2532, 2802, 2532, 2823, 2512, 2825, 2512, 2869, Q, 2513, 2888, 2496, 2913, 2516, 2994, 2488, 3011, 2471, 3020, 2472, 3061, 2472, 3099, 2462, 3105, 2448, 3114, 2448, 3145, 2448, 3163, 2448, 3202, 2451, 3202, 2452, 3204, 2416, 3208, 2422, 3259, 2426, 3297, 2401, 3318, 2400, 3365, 2397, 3390, 2393, 3407, 2378, 3407, L, 2376, 3444, Q, 2385, 3450, 2395, 3459, 2426, 3468, 2448, 3535, 2506, 3589, 2517, 3604, 2553, 3650, 2624, 3769, 2746, 3913, 2757, 3920, 2750, 3952, 2800, 3992, L, 2800, 4306, Q, 2847, 4384, 2983, 4488, 3031, 4543, 3145, 4647, 3179, 4688, 3200, 4697, 3203, 4701, 3203, 4773, 3203, 4776, 3198, 4856, 3192, 4884, 3178, 4928, L, 3178, 5109, 3155, 5169, 3143, 5236, Q, 3150, 5314, 3140, 5392, 3132, 5395, 3122, 5401, L, 3122, 5566, 3150, 5564, Q, 3344, 5564, 3351, 5564, 3392, 5564, 3385, 5541, L, 3537, 5541, Q, 3557, 5561, 3577, 5572, L, 3593, 5587, Q, 3597, 5592, 3619, 5591, 3620, 5591, 3635, 5606, 3640, 5609, 3660, 5614, 3674, 5621, 3700, 5638, 3716, 5641, 3737, 5663, 3755, 5667, 3759, 5671, 3769, 5684, 3776, 5686, 3784, 5685, 3820, 5701, 3830, 5705, 3844, 5708, 3863, 5724, 3864, 5724, 3886, 5729, 3909, 5752, 3924, 5760, 3949, 5778, 3979, 5790, 3994, 5805, 3997, 5808, 4016, 5811, 4022, 5815, 4031, 5824, 4106, 5864, 4115, 5871, 4128, 5881, 4154, 5891, 4170, 5903, 4176, 5903, L, 4204, 5903, 4241, 5871, Q, 4250, 5863, 4269, 5855, 4286, 5850, 4292, 5838, 4311, 5801, 4373, 5775, 4411, 5743, 4459, 5695, 4505, 5665, 4512, 5660, 4525, 5648, 4548, 5617, 4554, 5607, 4575, 5603, 4584, 5593, 4592, 5585, 4612, 5579, 4645, 5555, 4662, 5544, 4690, 5510, L, 4707, 5488, Q, 4708, 5485, 4734, 5475, L, 4783, 5438, Q, 4795, 5427, 4827, 5407, 4838, 5393, 4852, 5392, 4861, 5372, 4868, 5368, 4883, 5359, 4895, 5358, 4896, 5343, 4894, 5330, 4839, 5272, 4826, 5243, 4759, 5175, 4742, 5149, 4697, 5084, 4695, 5025, 4691, 4957, 4683, 4940, 4675, 4926, 4675, 4878, 4675, 4815, 4692, 4793, 4684, 4770, 4709, 4761, 4735, 4751, 4725, 4729, 4720, 4717, 4731, 4708, 4737, 4705, 4749, 4696, 4759, 4685, 4761, 4660, 4781, 4648, 4780, 4625, 4794, 4615, 4798, 4598, 4799, 4595, 4799, 4592, L, 4799, 4551, Q, 4781, 4546, 4771, 4545, 4769, 4540, 4767, 4536, 4636, 4538, 4561, 4543, 4469, 4540, 4438, 4539, 4388, 4536, 4379, 4567, L, 4212, 4567, Q, 4214, 4551, 4215, 4517, 4215, 4473, 4209, 4470, Q, 4185, 4455, 4185, 4438, Z]],
      "label": "Sarandë",
      "shortLabel": "SR",
      "labelPosition": [395.9, 502.7],
      "labelAlignment": [CEN, MID]
    },
    "03": {
      "outlines": [[M, 1508, 442, Q, 1427, 385, 1400, 369, 1312, 313, 1290, 284, 1264, 285, 1237, 261, 1207, 233, 1194, 223, 1120, 169, 1109, 163, 1055, 121, 1014, 99, 973, 76, 909, 82, 844, 87, 805, 77, 766, 65, 759, 66, 637, 66, 604, 58, 423, 28, 325, 35, L, 284, 35, Q, 283, 69, 275, 72, 262, 75, 262, 106, 260, 108, 234, 125, 230, 153, 224, 159, 205, 173, 208, 192, 211, 205, 189, 218, 186, 222, 187, 235, L, 173, 245, Q, 158, 252, 159, 274, 159, 296, 160, 298, 162, 306, 166, 319, L, 197, 351, Q, 202, 357, 219, 382, L, 248, 412, Q, 309, 468, 381, 548, L, 381, 560, Q, 401, 586, 450, 633, 453, 639, 487, 671, 527, 707, 532, 716, L, 886, 718, 886, 905, Q, 879, 913, 872, 918, 868, 920, 868, 944, L, 868, 1010, Q, 870, 1013, 873, 1024, L, 873, 1030, 593, 1030, Q, 593, 1056, 566, 1049, L, 566, 1062, Q, 593, 1061, 605, 1102, 612, 1111, 623, 1124, 633, 1131, 646, 1148, 682, 1171, 748, 1255, 750, 1257, 850, 1352, 867, 1369, 897, 1401, 904, 1407, 921, 1424, 948, 1442, 948, 1445, L, 948, 2091, 935, 2091, 933, 2070, 906, 2070, 902, 2057, Q, 872, 2040, 838, 2008, 777, 1945, 747, 1921, 620, 1798, 584, 1766, 547, 1734, 487, 1677, 428, 1620, 382, 1581, 241, 1433, 204, 1434, 166, 1434, 171, 1462, 176, 1489, 140, 1489, L, 140, 1518, Q, 138, 1541, 113, 1539, 116, 1570, 96, 1581, 92, 1629, 67, 1620, L, 67, 1658, 40, 1658, 40, 1738, Q, 57, 1761, 178, 1952, 201, 1989, 252, 2059, 296, 2123, 318, 2175, 339, 2203, 395, 2283, 422, 2322, 493, 2411, 511, 2436, 548, 2487, 581, 2532, 593, 2553, 611, 2585, 639, 2616, 657, 2636, 704, 2660, 870, 2737, 973, 2789, 1010, 2802, 1057, 2829, 1086, 2846, 1161, 2868, 1347, 2983, 1451, 3021, 1554, 3059, 1636, 3103, 1717, 3147, 1790, 3173, 1862, 3197, 1889, 3217, 1931, 3247, 2048, 3297, 2160, 3345, 2207, 3382, L, 2256, 3395, Q, 2260, 3400, 2302, 3419, 2341, 3437, 2352, 3436, 2364, 3436, 2376, 3444, L, 2378, 3407, Q, 2393, 3407, 2397, 3390, 2400, 3365, 2401, 3318, 2426, 3297, 2422, 3259, 2416, 3208, 2452, 3204, 2451, 3202, 2448, 3202, 2448, 3163, 2448, 3145, 2448, 3114, 2462, 3105, 2472, 3099, 2472, 3061, 2471, 3020, 2488, 3011, 2516, 2994, 2496, 2913, 2513, 2888, 2512, 2869, L, 2512, 2825, 2532, 2823, 2532, 2802, 2542, 2802, Q, 2552, 2805, 2570, 2805, 2570, 2814, 2575, 2829, 2585, 2830, 2608, 2829, 2625, 2830, 2620, 2848, L, 2668, 2848, Q, 2667, 2833, 2666, 2823, 2696, 2826, 2683, 2754, 2718, 2756, 2718, 2702, 2717, 2675, 2726, 2670, 2735, 2665, 2735, 2645, 2735, 2611, 2724, 2599, 2706, 2583, 2688, 2562, 2655, 2508, 2636, 2477, 2570, 2374, 2521, 2323, 2517, 2287, 2488, 2252, 2442, 2195, 2438, 2189, 2370, 2100, 2339, 2054, 2254, 1928, 2244, 1911, 2228, 1882, 2199, 1852, 2185, 1792, 2154, 1793, L, 2154, 1757, 2175, 1757, Q, 2175, 1736, 2192, 1729, 2206, 1722, 2204, 1712, 2202, 1698, 2210, 1684, 2220, 1670, 2220, 1658, 2216, 1651, 2237, 1635, 2245, 1625, 2244, 1603, 2250, 1590, 2272, 1596, L, 2272, 1564, Q, 2272, 1552, 2273, 1551, 2276, 1551, 2289, 1546, 2283, 1525, 2302, 1512, 2319, 1502, 2325, 1495, L, 2325, 1452, Q, 2302, 1450, 2293, 1435, 2285, 1415, 2281, 1407, 2250, 1353, 2249, 1350, 2216, 1276, 2187, 1238, 2152, 1194, 2119, 1136, L, 2059, 1030, Q, 2048, 988, 1992, 916, 1947, 831, 1918, 794, 1867, 703, 1837, 680, 1766, 620, 1728, 590, 1689, 560, 1640, 533, Q, 1591, 506, 1508, 442, Z]],
      "label": "Vlorë",
      "shortLabel": "VL",
      "labelPosition": [146.8, 173.9],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'vlore',
  type: 'maps'
};

/***/ })

/******/ });
}));
