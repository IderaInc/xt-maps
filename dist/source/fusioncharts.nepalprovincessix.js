
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
/******/ 	return __webpack_require__(__webpack_require__.s = 88);
/******/ })
/************************************************************************/
/******/ ({

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(89);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 89:
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
 * @id fusionmaps.NepalProvincesSix.1.01-17-2017 01:55:18
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
  "name": "NepalProvincesSix",
  "revision": 1,
  "standaloneInit": true,
  "baseWidth": 600,
  "baseHeight": 580,
  "baseScaleFactor": 10,
  "entities": {
    "NP.SI.RU": {
      "outlines": [[M, 3429, 3792, Q, 3400, 3844, 3392, 3863, 3376, 3902, 3379, 3935, 3379, 3939, 3380, 3941, 3379, 3952, 3378, 3965, 3376, 3977, 3360, 3982, 3325, 3994, 3298, 4008, 3286, 4014, 3253, 4037, 3213, 4066, 3199, 4074, 3186, 4083, 3144, 4101, 3106, 4121, 3089, 4151, 3061, 4200, 3050, 4209, 3039, 4217, 3006, 4217, 2950, 4211, 2937, 4211, 2878, 4211, 2883, 4315, 2884, 4345, 2882, 4396, 2881, 4414, 2861, 4418, 2836, 4419, 2825, 4421, 2778, 4430, 2756, 4437, 2709, 4452, 2694, 4474, 2673, 4505, 2666, 4539, 2660, 4568, 2662, 4610, 2671, 4611, 2675, 4616, 2678, 4620, 2686, 4631, 2692, 4638, 2716, 4657, 2739, 4679, 2799, 4697, 2830, 4706, 2880, 4706, 2935, 4707, 2956, 4711, 3054, 4730, 3071, 4811, 3079, 4848, 3111, 4875, 3162, 4919, 3169, 4926, 3172, 4919, 3174, 4915, 3181, 4904, 3188, 4903, 3204, 4901, 3225, 4902, 3237, 4900, 3260, 4898, 3280, 4894, 3295, 4878, 3305, 4868, 3315, 4850, 3328, 4829, 3331, 4824, 3337, 4817, 3390, 4817, 3429, 4817, 3456, 4836, 3473, 4848, 3532, 4890, 3537, 4894, 3568, 4910, 3594, 4924, 3605, 4932, 3621, 4943, 3642, 4966, 3652, 4976, 3672, 4976, 3689, 4976, 3734, 4956, 3792, 4928, 3804, 4924, 3808, 4923, 3828, 4919, 3846, 4913, 3846, 4894, 3846, 4873, 3851, 4833, 3874, 4663, 3883, 4588, 3883, 4586, 3883, 4585, 3888, 4522, 3903, 4458, 3903, 4356, 3913, 4322, 3919, 4303, 3923, 4253, 3927, 4208, 3936, 4189, 3939, 4177, 3939, 4172, 3941, 4168, 3943, 4166, 3933, 4150, 3909, 4134, L, 3872, 4105, Q, 3870, 4104, 3818, 4076, 3789, 4060, 3789, 4041, 3789, 4030, 3808, 4009, 3826, 3988, 3826, 3980, 3826, 3968, 3814, 3956, 3800, 3944, 3796, 3940, 3773, 3914, 3763, 3892, 3747, 3856, 3734, 3823, 3723, 3791, 3712, 3767, 3707, 3757, 3686, 3757, 3663, 3759, 3656, 3758, 3646, 3757, 3620, 3756, 3594, 3755, 3590, 3755, 3580, 3753, 3573, 3743, 3569, 3739, 3565, 3734, 3518, 3737, 3493, 3743, Q, 3449, 3754, 3429, 3792, Z]],
      "label": "Rukum (Western part)",
      "shortLabel": "RU",
      "labelPosition": [335.1, 440.4],
      "labelAlignment": [CEN, MID]
    },
    "NP.SI.SL": {
      "outlines": [[M, 2600, 4643, Q, 2579, 4643, 2566, 4633, 2553, 4622, 2532, 4620, 2501, 4616, 2458, 4620, 2437, 4621, 2423, 4615, 2409, 4608, 2400, 4588, 2390, 4560, 2384, 4548, 2376, 4529, 2361, 4529, 2354, 4529, 2345, 4532, 2338, 4536, 2328, 4537, L, 2329, 4537, Q, 2338, 4537, 2339, 4538, 2332, 4556, 2282, 4604, 2239, 4645, 2233, 4669, 2233, 4671, 2233, 4672, 2232, 4679, 2230, 4687, 2226, 4696, 2226, 4702, 2226, 4739, 2253, 4777, 2279, 4816, 2279, 4853, 2279, 4875, 2258, 4973, 2257, 4990, 2237, 4995, 2205, 5002, 2200, 5004, 2183, 5013, 2161, 5025, 2147, 5034, 2147, 5054, L, 2152, 5235, Q, 2152, 5245, 2136, 5252, 2117, 5258, 2112, 5260, 2099, 5266, 2066, 5288, 2034, 5307, 2013, 5307, 1979, 5307, 1955, 5274, 1929, 5227, 1911, 5200, 1902, 5189, 1883, 5185, 1858, 5183, 1844, 5179, 1833, 5176, 1796, 5162, 1772, 5152, 1758, 5152, 1738, 5152, 1722, 5168, 1688, 5202, 1687, 5203, L, 1687, 5211, Q, 1681, 5225, 1661, 5254, 1645, 5283, 1645, 5306, 1645, 5340, 1673, 5355, 1691, 5364, 1741, 5389, 1754, 5397, 1804, 5422, 1851, 5445, 1863, 5454, 1872, 5461, 1882, 5477, 1888, 5486, 1899, 5506, 1904, 5515, 1927, 5522, L, 1957, 5531, Q, 1973, 5539, 2017, 5580, 2040, 5602, 2074, 5635, 2081, 5640, 2154, 5702, 2210, 5748, 2237, 5765, 2245, 5715, 2255, 5682, 2268, 5642, 2293, 5603, 2301, 5590, 2316, 5571, 2338, 5542, 2350, 5537, 2417, 5502, 2445, 5502, 2461, 5502, 2493, 5525, 2525, 5548, 2529, 5548, 2533, 5548, 2553, 5544, 2572, 5539, 2580, 5539, L, 2639, 5538, Q, 2654, 5538, 2668, 5543, 2677, 5546, 2700, 5555, 2733, 5567, 2767, 5560, 2765, 5560, 2765, 5560, 2766, 5560, 2767, 5559, L, 2767, 5560, Q, 2788, 5560, 2800, 5553, 2812, 5544, 2822, 5544, 2850, 5544, 2881, 5581, 2898, 5601, 2926, 5635, 2928, 5638, 2962, 5653, L, 2988, 5670, Q, 2990, 5671, 3016, 5694, 3032, 5710, 3047, 5710, 3052, 5710, 3057, 5680, 3062, 5640, 3074, 5615, 3094, 5573, 3098, 5563, 3100, 5553, 3100, 5517, 3100, 5492, 3063, 5435, 3025, 5378, 3025, 5346, 3025, 5328, 3052, 5305, 3080, 5281, 3080, 5267, 3080, 5259, 3073, 5247, 3064, 5235, 3059, 5227, 3040, 5206, 3028, 5192, 3004, 5162, 3004, 5147, 3004, 5141, 3028, 5128, 3057, 5112, 3059, 5110, 3075, 5094, 3084, 5085, 3100, 5068, 3105, 5057, 3154, 4952, 3165, 4933, 3167, 4929, 3169, 4926, 3162, 4919, 3111, 4875, 3079, 4848, 3071, 4811, 3054, 4730, 2956, 4711, 2935, 4707, 2880, 4706, 2830, 4706, 2799, 4697, 2739, 4679, 2716, 4657, 2692, 4638, 2686, 4631, 2678, 4620, 2675, 4616, 2671, 4611, 2662, 4610, 2662, 4610, 2660, 4610, 2653, 4610, 2637, 4627, Q, 2621, 4643, 2600, 4643, Z]],
      "label": "Salyan",
      "shortLabel": "SL",
      "labelPosition": [255.4, 514.7],
      "labelAlignment": [CEN, MID]
    },
    "NP.SI.DP": {
      "outlines": [[M, 5013, 2267, Q, 4992, 2249, 4975, 2248, 4949, 2251, 4935, 2251, 4910, 2252, 4893, 2236, 4876, 2218, 4864, 2207, 4840, 2185, 4825, 2185, 4811, 2185, 4774, 2212, 4737, 2237, 4729, 2237, 4713, 2237, 4641, 2153, 4569, 2068, 4544, 2068, 4535, 2068, 4493, 2074, 4451, 2081, 4435, 2081, 4399, 2081, 4398, 2043, 4398, 2042, 4398, 2040, 4402, 2017, 4390, 1994, 4375, 1966, 4352, 1966, 4321, 1966, 4259, 1989, 4197, 2012, 4169, 2012, 4152, 2012, 4143, 2007, L, 4145, 2082, Q, 4145, 2104, 4143, 2111, 4138, 2126, 4120, 2135, 4110, 2139, 4092, 2152, 4067, 2168, 4067, 2180, 4067, 2193, 4091, 2274, 4091, 2275, 4092, 2276, 4103, 2311, 4100, 2325, 4097, 2340, 4067, 2370, 4037, 2399, 4033, 2427, 4028, 2455, 4011, 2451, 3994, 2448, 3989, 2449, 3984, 2450, 3957, 2458, 3929, 2464, 3916, 2464, 3905, 2464, 3905, 2479, 3905, 2486, 3907, 2497, L, 3906, 2515, Q, 3906, 2525, 3907, 2532, 3914, 2568, 3897, 2608, 3881, 2647, 3848, 2673, 3794, 2715, 3776, 2724, 3750, 2736, 3704, 2736, 3696, 2736, 3688, 2723, 3681, 2711, 3680, 2699, 3676, 2671, 3673, 2667, 3671, 2664, 3654, 2664, 3632, 2664, 3611, 2673, 3591, 2682, 3569, 2682, 3539, 2682, 3517, 2678, 3517, 2678, 3518, 2710, 3518, 2730, 3517, 2743, 3514, 2760, 3525, 2783, 3531, 2795, 3540, 2813, 3547, 2836, 3572, 2878, 3592, 2912, 3592, 2935, 3592, 2951, 3590, 2951, 3580, 2955, 3562, 2966, 3560, 2967, 3547, 2982, 3534, 2996, 3532, 3000, 3502, 3057, 3489, 3079, 3487, 3080, 3486, 3082, 3472, 3098, 3472, 3116, 3472, 3144, 3505, 3173, 3537, 3201, 3568, 3243, 3561, 3259, 3509, 3283, 3433, 3287, 3420, 3291, 3399, 3297, 3330, 3296, 3276, 3295, 3252, 3316, 3221, 3345, 3204, 3385, 3204, 3386, 3203, 3387, 3193, 3412, 3188, 3461, 3176, 3475, 3177, 3503, 3179, 3529, 3176, 3545, 3171, 3571, 3160, 3599, 3153, 3617, 3153, 3635, 3153, 3663, 3158, 3665, 3165, 3669, 3204, 3684, 3220, 3692, 3240, 3703, 3257, 3711, 3277, 3711, 3287, 3711, 3298, 3698, 3309, 3682, 3314, 3675, 3328, 3657, 3338, 3653, 3343, 3650, 3359, 3651, 3373, 3652, 3373, 3650, L, 3374, 3650, Q, 3404, 3650, 3434, 3660, 3491, 3678, 3512, 3683, 3524, 3686, 3533, 3697, 3541, 3707, 3553, 3720, 3560, 3727, 3565, 3734, 3569, 3739, 3573, 3743, 3580, 3753, 3590, 3755, 3594, 3755, 3620, 3756, 3646, 3757, 3656, 3758, 3663, 3759, 3686, 3757, 3707, 3757, 3712, 3767, 3723, 3791, 3734, 3823, 3747, 3856, 3763, 3892, 3773, 3914, 3796, 3940, 3800, 3944, 3814, 3956, 3826, 3968, 3826, 3980, 3826, 3988, 3808, 4009, 3789, 4030, 3789, 4041, 3789, 4060, 3818, 4076, 3870, 4104, 3872, 4105, L, 3909, 4134, Q, 3933, 4150, 3943, 4166, 3945, 4162, 3949, 4161, 3962, 4155, 3980, 4150, 3991, 4146, 4014, 4136, 4034, 4129, 4049, 4129, 4066, 4129, 4096, 4145, 4126, 4162, 4131, 4162, 4141, 4162, 4164, 4154, 4190, 4146, 4193, 4145, 4218, 4141, 4254, 4141, 4255, 4141, 4256, 4141, 4260, 4141, 4281, 4139, 4310, 4138, 4323, 4147, 4351, 4164, 4374, 4183, 4418, 4219, 4503, 4244, 4508, 4246, 4536, 4254, 4558, 4261, 4572, 4264, 4581, 4266, 4608, 4267, 4632, 4269, 4635, 4281, 4638, 4292, 4664, 4339, 4685, 4377, 4717, 4359, L, 4761, 4359, Q, 4779, 4369, 4818, 4383, 4855, 4396, 4882, 4403, 4887, 4405, 4944, 4416, 5003, 4427, 5018, 4427, 5029, 4427, 5054, 4420, 5087, 4412, 5100, 4409, 5135, 4402, 5172, 4409, 5201, 4414, 5228, 4395, 5243, 4384, 5275, 4359, 5290, 4350, 5328, 4343, 5382, 4331, 5394, 4328, 5411, 4323, 5455, 4316, 5491, 4307, 5491, 4287, 5482, 4187, 5483, 4182, 5483, 4177, 5519, 4151, 5555, 4124, 5556, 4095, 5557, 4065, 5585, 4035, 5600, 4017, 5629, 3989, 5640, 3978, 5683, 3935, 5717, 3902, 5728, 3883, 5732, 3873, 5736, 3865, 5741, 3851, 5744, 3849, 5753, 3838, 5756, 3836, 5759, 3834, 5773, 3826, 5787, 3817, 5797, 3805, 5808, 3793, 5813, 3668, 5813, 3663, 5813, 3658, L, 5824, 3617, Q, 5826, 3553, 5826, 3540, 5827, 3527, 5847, 3517, 5867, 3507, 5914, 3487, 5955, 3467, 5955, 3447, 5916, 3353, 5902, 3353, 5895, 3353, 5878, 3358, 5861, 3362, 5856, 3362, 5817, 3362, 5751, 3313, 5686, 3263, 5686, 3263, 5635, 3263, 5615, 3209, 5601, 3146, 5587, 3128, 5575, 3112, 5515, 3071, 5468, 3037, 5459, 3000, 5456, 2988, 5457, 2954, 5458, 2922, 5454, 2910, 5448, 2893, 5435, 2878, 5417, 2860, 5402, 2848, 5398, 2847, 5397, 2841, 5397, 2839, 5397, 2825, 5397, 2796, 5403, 2777, 5409, 2758, 5409, 2746, 5409, 2716, 5369, 2706, 5316, 2693, 5303, 2678, 5276, 2648, 5268, 2609, 5252, 2533, 5252, 2532, 5240, 2492, 5206, 2490, 5165, 2496, 5144, 2497, 5112, 2498, 5098, 2471, 5073, 2431, 5073, 2407, 5073, 2393, 5089, 2386, 5106, 2380, 5106, 2353, 5106, 2334, 5087, 2319, 5081, 2314, 5048, 2296, Q, 5044, 2294, 5013, 2267, Z]],
      "label": "Dolpa",
      "shortLabel": "DP",
      "labelPosition": [455.4, 319.6],
      "labelAlignment": [CEN, MID]
    },
    "NP.SI.JU": {
      "outlines": [[M, 3341, 2529, Q, 3331, 2535, 3310, 2565, 3293, 2591, 3274, 2591, 3250, 2591, 3218, 2526, 3188, 2462, 3170, 2464, 3140, 2467, 3092, 2453, 3024, 2435, 3012, 2432, L, 2994, 2432, Q, 2993, 2453, 2986, 2483, 2978, 2516, 2976, 2536, 2974, 2552, 2974, 2585, 2970, 2596, 2954, 2599, 2939, 2600, 2931, 2601, 2928, 2601, 2926, 2601, 2873, 2602, 2828, 2637, 2780, 2673, 2745, 2673, 2706, 2673, 2669, 2647, 2632, 2620, 2633, 2587, 2634, 2554, 2635, 2545, 2637, 2535, 2626, 2531, 2620, 2528, 2607, 2528, 2587, 2527, 2585, 2527, 2547, 2523, 2531, 2501, 2515, 2481, 2515, 2481, 2513, 2481, 2478, 2503, 2444, 2526, 2404, 2526, 2382, 2526, 2355, 2507, 2329, 2487, 2322, 2487, 2311, 2487, 2294, 2517, 2284, 2532, 2272, 2557, 2266, 2566, 2240, 2583, 2210, 2603, 2192, 2603, 2186, 2603, 2177, 2601, 2174, 2638, 2174, 2699, 2175, 2733, 2175, 2795, 2175, 2830, 2164, 2840, 2151, 2850, 2117, 2871, 2106, 2878, 2093, 2917, 2079, 2958, 2069, 2970, 2062, 2979, 2020, 2986, 1978, 2993, 1975, 3018, 1973, 3043, 1997, 3065, 2020, 3087, 2074, 3128, 2083, 3135, 2094, 3158, 2108, 3186, 2115, 3197, 2129, 3218, 2153, 3263, 2171, 3298, 2189, 3322, 2207, 3346, 2235, 3367, 2264, 3387, 2274, 3390, 2283, 3394, 2306, 3400, 2329, 3406, 2332, 3422, 2335, 3436, 2334, 3459, 2333, 3485, 2333, 3494, 2332, 3498, 2332, 3499, 2331, 3509, 2331, 3537, 2330, 3563, 2318, 3572, 2315, 3575, 2311, 3578, 2317, 3587, 2332, 3601, 2348, 3615, 2357, 3628, 2360, 3633, 2367, 3658, 2374, 3686, 2377, 3693, 2384, 3710, 2405, 3714, 2417, 3716, 2439, 3715, L, 2506, 3718, Q, 2549, 3718, 2548, 3695, 2547, 3645, 2561, 3617, 2575, 3590, 2600, 3566, 2614, 3552, 2655, 3521, 2678, 3502, 2725, 3479, 2781, 3450, 2790, 3445, 2840, 3414, 2851, 3404, 2866, 3385, 2871, 3379, 2881, 3369, 2897, 3369, 2901, 3369, 2976, 3385, 3050, 3402, 3142, 3402, 3142, 3408, 3158, 3406, 3178, 3401, 3204, 3385, 3221, 3345, 3252, 3316, 3276, 3295, 3330, 3296, 3399, 3297, 3420, 3291, 3433, 3287, 3509, 3283, 3561, 3259, 3568, 3243, 3537, 3201, 3505, 3173, 3472, 3144, 3472, 3116, 3472, 3098, 3486, 3082, 3487, 3080, 3489, 3079, 3502, 3057, 3532, 3000, 3534, 2996, 3547, 2982, 3560, 2967, 3562, 2966, 3580, 2955, 3590, 2951, 3592, 2951, 3592, 2935, 3592, 2912, 3572, 2878, 3547, 2836, 3540, 2813, 3531, 2795, 3525, 2783, 3514, 2760, 3517, 2743, 3518, 2730, 3518, 2710, 3517, 2678, 3517, 2678, 3502, 2675, 3491, 2670, 3486, 2668, 3472, 2668, 3461, 2668, 3454, 2660, 3445, 2650, 3442, 2625, 3441, 2621, 3425, 2556, 3414, 2510, 3418, 2479, 3399, 2485, 3382, 2499, Q, 3356, 2520, 3341, 2529, Z]],
      "label": "Jumla",
      "shortLabel": "JU",
      "labelPosition": [278.4, 302.6],
      "labelAlignment": [CEN, MID]
    },
    "NP.SI.MG": {
      "outlines": [[M, 3548, 1293, Q, 3525, 1293, 3500, 1318, 3479, 1340, 3464, 1343, 3477, 1365, 3431, 1406, 3384, 1447, 3376, 1461, 3367, 1473, 3368, 1500, 3369, 1526, 3343, 1573, 3311, 1628, 3305, 1671, 3270, 1679, 3256, 1683, 3232, 1688, 3232, 1713, 3232, 1718, 3236, 1803, 3236, 1811, 3245, 1844, 3254, 1877, 3254, 1893, 3254, 1893, 3241, 1935, 3225, 1976, 3209, 1976, 3198, 1976, 3145, 1950, 3091, 1925, 3075, 1925, 3046, 1925, 3024, 1943, 3002, 1962, 2952, 1962, 2944, 1962, 2917, 1955, 2891, 1948, 2884, 1948, 2862, 1948, 2853, 1973, 2850, 1982, 2847, 2012, 2841, 2051, 2797, 2052, 2781, 2053, 2712, 2067, 2646, 2081, 2639, 2081, 2601, 2081, 2591, 2049, 2588, 2013, 2584, 2005, 2579, 1993, 2564, 1966, 2547, 1936, 2544, 1929, 2529, 1891, 2512, 1862, 2481, 1805, 2467, 1798, 2452, 1790, 2405, 1844, 2361, 1895, 2348, 1912, 2329, 1941, 2297, 1958, 2266, 1975, 2223, 1993, 2179, 1992, 2156, 1994, 2113, 1996, 2099, 2020, 2095, 2030, 2083, 2045, 2069, 2064, 2057, 2083, 2045, 2100, 2037, 2107, 2024, 2116, 2005, 2116, 1992, 2116, 1957, 2109, 1923, 2102, 1909, 2102, 1890, 2102, 1863, 2113, 1858, 2115, 1854, 2116, 1874, 2142, 1884, 2159, 1899, 2188, 1899, 2219, 1899, 2251, 1881, 2291, 1863, 2331, 1863, 2354, 1863, 2395, 1885, 2428, 1906, 2462, 1906, 2507, 1906, 2536, 1902, 2561, 1909, 2559, 1928, 2552, 1948, 2544, 1956, 2542, 1982, 2537, 2010, 2537, 2056, 2537, 2112, 2570, 2153, 2595, 2177, 2601, 2186, 2603, 2192, 2603, 2210, 2603, 2240, 2583, 2266, 2566, 2272, 2557, 2284, 2532, 2294, 2517, 2311, 2487, 2322, 2487, 2329, 2487, 2355, 2507, 2382, 2526, 2404, 2526, 2444, 2526, 2478, 2503, 2513, 2481, 2515, 2481, 2515, 2481, 2531, 2501, 2547, 2523, 2585, 2527, 2587, 2527, 2607, 2528, 2620, 2528, 2626, 2531, 2637, 2535, 2635, 2545, 2634, 2554, 2633, 2587, 2632, 2620, 2669, 2647, 2706, 2673, 2745, 2673, 2780, 2673, 2828, 2637, 2873, 2602, 2926, 2601, 2928, 2601, 2931, 2601, 2939, 2600, 2954, 2599, 2970, 2596, 2974, 2585, 2974, 2552, 2976, 2536, 2978, 2516, 2986, 2483, 2993, 2453, 2994, 2432, L, 3012, 2432, Q, 3024, 2435, 3092, 2453, 3140, 2467, 3170, 2464, 3188, 2462, 3218, 2526, 3250, 2591, 3274, 2591, 3293, 2591, 3310, 2565, 3331, 2535, 3341, 2529, 3356, 2520, 3382, 2499, 3399, 2485, 3418, 2479, 3414, 2510, 3425, 2556, 3441, 2621, 3442, 2625, 3445, 2650, 3454, 2660, 3461, 2668, 3472, 2668, 3486, 2668, 3491, 2670, 3502, 2675, 3517, 2678, 3539, 2682, 3569, 2682, 3591, 2682, 3611, 2673, 3632, 2664, 3654, 2664, 3671, 2664, 3673, 2667, 3676, 2671, 3680, 2699, 3681, 2711, 3688, 2723, 3696, 2736, 3704, 2736, 3750, 2736, 3776, 2724, 3794, 2715, 3848, 2673, 3881, 2647, 3897, 2608, 3914, 2568, 3907, 2532, 3906, 2525, 3906, 2515, L, 3907, 2497, Q, 3905, 2486, 3905, 2479, 3905, 2464, 3916, 2464, 3929, 2464, 3957, 2458, 3984, 2450, 3989, 2449, 3994, 2448, 4011, 2451, 4028, 2455, 4033, 2427, 4037, 2399, 4067, 2370, 4097, 2340, 4100, 2325, 4103, 2311, 4092, 2276, 4091, 2275, 4091, 2274, 4067, 2193, 4067, 2180, 4067, 2168, 4092, 2152, 4110, 2139, 4120, 2135, 4138, 2126, 4143, 2111, 4145, 2104, 4145, 2082, L, 4143, 2007, Q, 4134, 2004, 4133, 1996, 4125, 1952, 4122, 1943, 4118, 1936, 4104, 1933, 4080, 1928, 4076, 1927, 4059, 1920, 4053, 1917, 4041, 1910, 4030, 1897, 4024, 1890, 4003, 1842, 3989, 1808, 3966, 1807, 3913, 1805, 3859, 1805, L, 3859, 1771, Q, 3867, 1762, 3918, 1732, 3966, 1704, 3966, 1697, 3966, 1685, 3923, 1642, 3879, 1599, 3865, 1599, 3849, 1599, 3816, 1610, 3784, 1624, 3777, 1625, L, 3731, 1625, Q, 3732, 1619, 3748, 1588, 3764, 1557, 3764, 1551, 3764, 1536, 3737, 1523, 3703, 1509, 3693, 1504, 3681, 1497, 3663, 1472, 3650, 1454, 3641, 1437, 3621, 1385, 3606, 1353, Q, 3578, 1293, 3548, 1293, Z]],
      "label": "Mugu",
      "shortLabel": "MG",
      "labelPosition": [346.5, 216.1],
      "labelAlignment": [CEN, MID]
    },
    "NP.SI.HU": {
      "outlines": [[M, 2611, 283, Q, 2602, 283, 2583, 312, 2564, 340, 2533, 340, 2521, 340, 2503, 334, 2486, 327, 2474, 327, 2462, 327, 2438, 350, 2413, 373, 2408, 373, 2393, 373, 2368, 331, 2345, 290, 2329, 290, 2289, 290, 2263, 283, 2239, 278, 2216, 265, 2188, 245, 2175, 236, 2150, 220, 2130, 221, 2102, 224, 2081, 216, 2054, 204, 2033, 196, 2032, 196, 1946, 182, 1891, 174, 1853, 131, 1688, 35, 1646, 35, 1642, 35, 1619, 72, 1596, 109, 1588, 104, 1580, 99, 1563, 85, 1545, 70, 1525, 70, 1481, 70, 1479, 136, 1478, 175, 1477, 181, 1473, 202, 1458, 202, 1445, 202, 1432, 191, 1418, 180, 1394, 179, 1378, 178, 1358, 166, 1353, 164, 1328, 143, 1277, 101, 1256, 81, 1234, 60, 1206, 60, 1179, 60, 1169, 69, 1160, 76, 1160, 97, 1160, 116, 1181, 138, 1203, 159, 1197, 177, 1192, 195, 1176, 198, 1160, 202, 1158, 203, 1149, 207, 1149, 237, 1149, 255, 1159, 291, 1169, 327, 1171, 361, 1173, 392, 1153, 443, 1144, 464, 1119, 515, 1114, 528, 1112, 563, 1112, 566, 1112, 611, 1073, 634, 1029, 664, 1011, 683, 998, 697, 972, 723, 963, 723, 949, 723, 939, 714, 929, 704, 897, 704, 826, 704, 826, 730, 826, 732, 848, 774, 870, 818, 870, 830, 870, 870, 853, 925, 836, 979, 836, 984, 836, 1000, 875, 1019, 896, 1029, 935, 1047, 994, 1083, 995, 1083, 1002, 1086, 1046, 1086, 1068, 1086, 1113, 1073, 1151, 1073, 1192, 1103, 1240, 1137, 1240, 1181, 1240, 1183, 1236, 1196, 1231, 1208, 1230, 1212, 1229, 1216, 1227, 1220, 1225, 1224, 1211, 1247, 1196, 1276, 1196, 1291, 1196, 1332, 1211, 1362, 1229, 1399, 1265, 1399, 1300, 1399, 1305, 1390, 1340, 1360, 1344, 1334, 1348, 1307, 1364, 1305, 1379, 1301, 1451, 1298, 1522, 1293, 1564, 1289, 1605, 1285, 1632, 1280, 1659, 1274, 1690, 1273, 1721, 1274, 1730, 1291, 1735, 1301, 1758, 1328, 1781, 1353, 1800, 1362, 1819, 1371, 1856, 1375, 1894, 1378, 1918, 1381, 1941, 1384, 1937, 1442, 1933, 1500, 1930, 1515, 1927, 1530, 1906, 1544, 1885, 1559, 1858, 1563, 1831, 1567, 1823, 1587, 1814, 1607, 1808, 1628, 1796, 1679, 1762, 1775, 1728, 1870, 1727, 1870, 1727, 1869, 1718, 1891, 1710, 1913, 1711, 1923, 1713, 1932, 1703, 1958, 1693, 1985, 1703, 2026, 1713, 2067, 1723, 2077, 1732, 2088, 1771, 2106, 1810, 2123, 1827, 2123, 1835, 2123, 1854, 2116, 1858, 2115, 1863, 2113, 1890, 2102, 1909, 2102, 1923, 2102, 1957, 2109, 1992, 2116, 2005, 2116, 2024, 2116, 2037, 2107, 2045, 2100, 2057, 2083, 2069, 2064, 2083, 2045, 2095, 2030, 2099, 2020, 2113, 1996, 2156, 1994, 2179, 1992, 2223, 1993, 2266, 1975, 2297, 1958, 2329, 1941, 2348, 1912, 2361, 1895, 2405, 1844, 2452, 1790, 2467, 1798, 2481, 1805, 2512, 1862, 2529, 1891, 2544, 1929, 2547, 1936, 2564, 1966, 2579, 1993, 2584, 2005, 2588, 2013, 2591, 2049, 2601, 2081, 2639, 2081, 2646, 2081, 2712, 2067, 2781, 2053, 2797, 2052, 2841, 2051, 2847, 2012, 2850, 1982, 2853, 1973, 2862, 1948, 2884, 1948, 2891, 1948, 2917, 1955, 2944, 1962, 2952, 1962, 3002, 1962, 3024, 1943, 3046, 1925, 3075, 1925, 3091, 1925, 3145, 1950, 3198, 1976, 3209, 1976, 3225, 1976, 3241, 1935, 3254, 1893, 3254, 1893, 3254, 1877, 3245, 1844, 3236, 1811, 3236, 1803, 3232, 1718, 3232, 1713, 3232, 1688, 3256, 1683, 3270, 1679, 3305, 1671, 3311, 1628, 3343, 1573, 3369, 1526, 3368, 1500, 3367, 1473, 3376, 1461, 3384, 1447, 3431, 1406, 3477, 1365, 3464, 1343, 3462, 1343, 3460, 1343, 3454, 1343, 3423, 1307, 3389, 1268, 3380, 1264, 3236, 1157, 3209, 1157, 3197, 1157, 3185, 1165, 3174, 1174, 3171, 1174, 3163, 1174, 3144, 1129, 3126, 1084, 3104, 1084, 3049, 1082, 3043, 1081, 3020, 1075, 2989, 1045, 2965, 1022, 2928, 1020, 2888, 1021, 2870, 1017, 2821, 1019, 2801, 1020, 2766, 1020, 2766, 987, 2766, 921, 2804, 873, 2841, 825, 2841, 820, 2841, 807, 2827, 776, 2816, 749, 2811, 743, 2802, 733, 2781, 723, 2749, 706, 2745, 704, 2734, 697, 2717, 673, 2701, 649, 2690, 643, 2669, 632, 2658, 625, 2639, 611, 2639, 597, 2648, 582, 2657, 559, 2673, 522, 2676, 491, L, 2673, 471, Q, 2675, 467, 2679, 438, 2684, 407, 2684, 396, 2684, 360, 2661, 322, Q, 2637, 283, 2611, 283, Z]],
      "label": "Humla",
      "shortLabel": "HU",
      "labelPosition": [214.7, 98.1],
      "labelAlignment": [CEN, MID]
    },
    "NP.SI.KK": {
      "outlines": [[M, 2112, 2570, Q, 2056, 2537, 2010, 2537, 1982, 2537, 1956, 2542, 1948, 2544, 1928, 2552, 1909, 2559, 1902, 2561, 1897, 2581, 1889, 2598, 1875, 2629, 1831, 2695, 1828, 2699, 1826, 2702, 1817, 2716, 1789, 2757, 1762, 2797, 1746, 2804, 1727, 2811, 1681, 2819, 1629, 2829, 1593, 2829, 1548, 2829, 1537, 2793, 1530, 2740, 1514, 2705, L, 1447, 2705, Q, 1393, 2729, 1302, 2795, 1177, 2885, 1177, 2933, 1177, 2936, 1185, 2959, 1194, 2986, 1194, 3006, 1194, 3025, 1183, 3059, 1172, 3094, 1172, 3114, 1172, 3148, 1179, 3169, 1190, 3202, 1219, 3224, 1222, 3227, 1278, 3262, 1302, 3278, 1315, 3289, 1316, 3290, 1318, 3291, 1347, 3289, 1390, 3289, L, 1390, 3301, Q, 1388, 3307, 1352, 3360, 1326, 3398, 1326, 3431, 1326, 3469, 1377, 3496, 1420, 3519, 1454, 3519, 1501, 3519, 1529, 3508, 1557, 3496, 1586, 3496, 1611, 3496, 1626, 3523, 1642, 3555, 1652, 3560, 1667, 3567, 1698, 3578, 1730, 3589, 1746, 3592, 1764, 3596, 1809, 3605, 1849, 3615, 1863, 3635, 1878, 3658, 1902, 3684, 1930, 3715, 1939, 3715, 1949, 3715, 1989, 3700, 2029, 3684, 2059, 3684, 2079, 3684, 2120, 3691, 2120, 3689, 2121, 3688, 2129, 3682, 2146, 3684, 2169, 3687, 2171, 3687, 2182, 3686, 2192, 3677, 2203, 3667, 2212, 3661, 2235, 3642, 2246, 3634, 2258, 3624, 2280, 3604, 2296, 3590, 2311, 3578, 2315, 3575, 2318, 3572, 2330, 3563, 2331, 3537, 2331, 3509, 2332, 3499, 2332, 3498, 2333, 3494, 2333, 3485, 2334, 3459, 2335, 3436, 2332, 3422, 2329, 3406, 2306, 3400, 2283, 3394, 2274, 3390, 2264, 3387, 2235, 3367, 2207, 3346, 2189, 3322, 2171, 3298, 2153, 3263, 2129, 3218, 2115, 3197, 2108, 3186, 2094, 3158, 2083, 3135, 2074, 3128, 2020, 3087, 1997, 3065, 1973, 3043, 1975, 3018, 1978, 2993, 2020, 2986, 2062, 2979, 2069, 2970, 2079, 2958, 2093, 2917, 2106, 2878, 2117, 2871, 2151, 2850, 2164, 2840, 2175, 2830, 2175, 2795, 2175, 2733, 2174, 2699, 2174, 2638, 2177, 2601, Q, 2153, 2595, 2112, 2570, Z]],
      "label": "Kalikot",
      "shortLabel": "KK",
      "labelPosition": [165.5, 312.6],
      "labelAlignment": [CEN, MID]
    },
    "NP.SI.JA": {
      "outlines": [[M, 3188, 3461, Q, 3193, 3412, 3203, 3387, 3204, 3386, 3204, 3385, 3178, 3401, 3158, 3406, 3142, 3408, 3142, 3402, 3050, 3402, 2976, 3385, 2901, 3369, 2897, 3369, 2881, 3369, 2871, 3379, 2866, 3385, 2851, 3404, 2840, 3414, 2790, 3445, 2781, 3450, 2725, 3479, 2678, 3502, 2655, 3521, 2614, 3552, 2600, 3566, 2575, 3590, 2561, 3617, 2547, 3645, 2548, 3695, 2549, 3718, 2506, 3718, L, 2439, 3715, Q, 2417, 3716, 2405, 3714, 2384, 3710, 2377, 3693, 2374, 3686, 2367, 3658, 2360, 3633, 2357, 3628, 2348, 3615, 2332, 3601, 2317, 3587, 2311, 3578, 2296, 3590, 2280, 3604, 2258, 3624, 2246, 3634, 2235, 3642, 2212, 3661, 2203, 3667, 2192, 3677, 2182, 3686, 2171, 3687, 2169, 3687, 2146, 3684, 2129, 3682, 2121, 3688, 2120, 3689, 2120, 3691, 2115, 3695, 2116, 3708, 2118, 3716, 2120, 3732, L, 2120, 3821, Q, 2120, 3826, 2119, 3841, 2118, 3855, 2109, 3861, 2093, 3873, 2090, 3877, 2081, 3884, 2073, 3896, 2042, 3938, 2027, 3980, 2010, 4026, 2017, 4063, 2017, 4065, 2017, 4066, L, 2015, 4085, Q, 2015, 4104, 2067, 4189, 2067, 4212, 1999, 4287, 1981, 4308, 1944, 4311, 1902, 4312, 1883, 4314, 1881, 4317, 1881, 4323, 1881, 4328, 1883, 4333, 1886, 4346, 1898, 4361, 1920, 4389, 1925, 4398, 1952, 4457, 1972, 4490, 1977, 4499, 1981, 4511, 1985, 4521, 1998, 4523, 2023, 4526, 2050, 4537, 2083, 4549, 2099, 4556, 2105, 4558, 2146, 4558, 2179, 4558, 2244, 4547, 2308, 4537, 2328, 4537, 2338, 4536, 2345, 4532, 2354, 4529, 2361, 4529, 2376, 4529, 2384, 4548, 2390, 4560, 2400, 4588, 2409, 4608, 2423, 4615, 2437, 4621, 2458, 4620, 2501, 4616, 2532, 4620, 2553, 4622, 2566, 4633, 2579, 4643, 2600, 4643, 2621, 4643, 2637, 4627, 2653, 4610, 2660, 4610, 2662, 4610, 2662, 4610, 2660, 4568, 2666, 4539, 2673, 4505, 2694, 4474, 2709, 4452, 2756, 4437, 2778, 4430, 2825, 4421, 2836, 4419, 2861, 4418, 2881, 4414, 2882, 4396, 2884, 4345, 2883, 4315, 2878, 4211, 2937, 4211, 2950, 4211, 3006, 4217, 3039, 4217, 3050, 4209, 3061, 4200, 3089, 4151, 3106, 4121, 3144, 4101, 3186, 4083, 3199, 4074, 3213, 4066, 3253, 4037, 3286, 4014, 3298, 4008, 3325, 3994, 3360, 3982, 3376, 3977, 3378, 3965, 3379, 3952, 3380, 3941, 3379, 3939, 3379, 3935, 3376, 3902, 3392, 3863, 3400, 3844, 3429, 3792, 3449, 3754, 3493, 3743, 3518, 3737, 3565, 3734, 3560, 3727, 3553, 3720, 3541, 3707, 3533, 3697, 3524, 3686, 3512, 3683, 3491, 3678, 3434, 3660, 3404, 3650, 3374, 3650, L, 3373, 3650, Q, 3373, 3652, 3359, 3651, 3343, 3650, 3338, 3653, 3328, 3657, 3314, 3675, 3309, 3682, 3298, 3698, 3287, 3711, 3277, 3711, 3257, 3711, 3240, 3703, 3220, 3692, 3204, 3684, 3165, 3669, 3158, 3665, 3153, 3663, 3153, 3635, 3153, 3617, 3160, 3599, 3171, 3571, 3176, 3545, 3179, 3529, 3177, 3503, Q, 3176, 3475, 3188, 3461, Z]],
      "label": "Jajarkot",
      "shortLabel": "JA",
      "labelPosition": [262.5, 400.6],
      "labelAlignment": [CEN, MID]
    },
    "NP.SI.DL": {
      "outlines": [[M, 1586, 3496, Q, 1557, 3496, 1529, 3508, 1501, 3519, 1454, 3519, 1420, 3519, 1377, 3496, 1326, 3469, 1326, 3431, 1326, 3398, 1352, 3360, 1388, 3307, 1390, 3301, L, 1390, 3289, Q, 1347, 3289, 1318, 3291, 1332, 3303, 1332, 3307, 1332, 3328, 1226, 3366, 1106, 3409, 1059, 3463, 1057, 3465, 1055, 3467, 1023, 3518, 1008, 3537, 991, 3557, 988, 3601, 985, 3645, 1068, 3759, 1110, 3817, 1165, 3878, 1228, 3950, 1247, 4030, 1253, 4054, 1289, 4114, 1323, 4170, 1323, 4180, 1323, 4212, 1303, 4227, 1302, 4227, 1302, 4228, 1301, 4243, 1304, 4269, 1306, 4295, 1306, 4302, 1305, 4317, 1321, 4330, 1331, 4337, 1351, 4350, 1388, 4378, 1411, 4391, 1424, 4397, 1445, 4416, 1466, 4434, 1479, 4439, 1488, 4443, 1549, 4458, 1595, 4470, 1619, 4489, 1635, 4500, 1684, 4529, 1742, 4563, 1754, 4563, 1773, 4563, 1816, 4472, 1819, 4464, 1825, 4441, 1829, 4424, 1847, 4392, 1858, 4371, 1864, 4345, 1866, 4336, 1883, 4333, 1881, 4328, 1881, 4323, 1881, 4317, 1883, 4314, 1902, 4312, 1944, 4311, 1981, 4308, 1999, 4287, 2067, 4212, 2067, 4189, 2015, 4104, 2015, 4085, L, 2017, 4066, Q, 2017, 4065, 2017, 4063, 2010, 4026, 2027, 3980, 2042, 3938, 2073, 3896, 2081, 3884, 2090, 3877, 2093, 3873, 2109, 3861, 2118, 3855, 2119, 3841, 2120, 3826, 2120, 3821, L, 2120, 3732, Q, 2118, 3716, 2116, 3708, 2115, 3695, 2120, 3691, 2079, 3684, 2059, 3684, 2029, 3684, 1989, 3700, 1949, 3715, 1939, 3715, 1930, 3715, 1902, 3684, 1878, 3658, 1863, 3635, 1849, 3615, 1809, 3605, 1764, 3596, 1746, 3592, 1730, 3589, 1698, 3578, 1667, 3567, 1652, 3560, 1642, 3555, 1626, 3523, Q, 1611, 3496, 1586, 3496, Z]],
      "label": "Dailekh",
      "shortLabel": "DL",
      "labelPosition": [155.4, 392.6],
      "labelAlignment": [CEN, MID]
    },
    "NP.SI.SU": {
      "outlines": [[M, 1998, 4523, Q, 1985, 4521, 1981, 4511, 1977, 4499, 1972, 4490, 1952, 4457, 1925, 4398, 1920, 4389, 1898, 4361, 1886, 4346, 1883, 4333, 1866, 4336, 1864, 4345, 1858, 4371, 1847, 4392, 1829, 4424, 1825, 4441, 1819, 4464, 1816, 4472, 1773, 4563, 1754, 4563, 1742, 4563, 1684, 4529, 1635, 4500, 1619, 4489, 1595, 4470, 1549, 4458, 1488, 4443, 1479, 4439, 1466, 4434, 1445, 4416, 1424, 4397, 1411, 4391, 1388, 4378, 1351, 4350, 1331, 4337, 1321, 4330, 1305, 4317, 1306, 4302, 1306, 4295, 1304, 4269, 1301, 4243, 1302, 4228, 1283, 4242, 1250, 4242, 1224, 4242, 1219, 4240, 1206, 4235, 1205, 4214, 1197, 4154, 1200, 4143, 1206, 4114, 1173, 4080, 1127, 4033, 1119, 4017, 1111, 3998, 1103, 3955, 1095, 3912, 1080, 3880, 1068, 3856, 1035, 3840, 1004, 3826, 972, 3826, 937, 3826, 909, 3848, 880, 3870, 856, 3870, 842, 3870, 786, 3824, 731, 3778, 726, 3778, 717, 3778, 700, 3789, 678, 3804, 667, 3809, 650, 3817, 641, 3815, 632, 3813, 598, 3815, L, 598, 3816, Q, 598, 3817, 594, 3817, 585, 3817, 554, 3814, 512, 3809, 482, 3798, 452, 3788, 425, 3765, 398, 3741, 364, 3707, 331, 3672, 315, 3654, 300, 3636, 295, 3636, 290, 3636, 251, 3634, 244, 3634, 239, 3631, 237, 3631, 235, 3631, 150, 3637, 139, 3640, 118, 3647, 45, 3698, 81, 3728, 112, 3760, 128, 3777, 171, 3826, 196, 3855, 242, 3898, 290, 3943, 297, 3943, 304, 3943, 329, 3919, 355, 3895, 375, 3895, 393, 3895, 393, 3924, 393, 3939, 390, 3959, 392, 3970, 426, 3994, 461, 4019, 475, 4019, 477, 4019, 486, 4019, 494, 4018, 494, 4010, 487, 3980, 487, 3968, 487, 3949, 492, 3934, 497, 3912, 510, 3912, 526, 3912, 547, 3976, 561, 4019, 566, 4045, 566, 4048, 567, 4051, L, 567, 4051, Q, 567, 4081, 579, 4110, 593, 4141, 613, 4173, 621, 4197, 639, 4266, 657, 4335, 667, 4360, 676, 4384, 687, 4403, 699, 4422, 731, 4465, 764, 4509, 850, 4550, 935, 4591, 986, 4657, 1036, 4723, 1185, 4823, 1220, 4851, 1315, 4937, 1392, 5006, 1439, 5040, 1450, 5048, 1498, 5080, 1541, 5110, 1560, 5124, 1580, 5139, 1620, 5178, 1657, 5208, 1687, 5201, L, 1687, 5203, Q, 1688, 5202, 1722, 5168, 1738, 5152, 1758, 5152, 1772, 5152, 1796, 5162, 1833, 5176, 1844, 5179, 1858, 5183, 1883, 5185, 1902, 5189, 1911, 5200, 1929, 5227, 1955, 5274, 1979, 5307, 2013, 5307, 2034, 5307, 2066, 5288, 2099, 5266, 2112, 5260, 2117, 5258, 2136, 5252, 2152, 5245, 2152, 5235, L, 2147, 5054, Q, 2147, 5034, 2161, 5025, 2183, 5013, 2200, 5004, 2205, 5002, 2237, 4995, 2257, 4990, 2258, 4973, 2279, 4875, 2279, 4853, 2279, 4816, 2253, 4777, 2226, 4739, 2226, 4702, 2226, 4696, 2230, 4687, 2232, 4679, 2233, 4672, 2233, 4671, 2233, 4669, 2239, 4645, 2282, 4604, 2332, 4556, 2339, 4538, 2338, 4537, 2329, 4537, L, 2328, 4537, Q, 2308, 4537, 2244, 4547, 2179, 4558, 2146, 4558, 2105, 4558, 2099, 4556, 2083, 4549, 2050, 4537, Q, 2023, 4526, 1998, 4523, Z]],
      "label": "Surkhet",
      "shortLabel": "SU",
      "labelPosition": [173.1, 478.7],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'nepalprovincessix',
  type: 'maps'
};

/***/ })

/******/ });
}));
