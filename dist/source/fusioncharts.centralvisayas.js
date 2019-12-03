
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(3);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),
/* 3 */
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
 * @id fusionmaps.CentralVisayas.1.08-28-2019 12:36:29
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
  "name": "CentralVisayas",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 514,
  "baseHeight": 600,
  "baseScaleFactor": 10,
  "firstEntity": "PH.CV.BO",
  "entities": {
    "PH.CV.BO": {
      "outlines": [[M, 3325, 4798, L, 3361, 4798, Q, 3366, 4793, 3369, 4793, 3369, 4786, 3359, 4779, 3354, 4771, 3349, 4771, L, 3339, 4774, Q, 3337, 4781, 3335, 4786, Q, 3335, 4789, 3325, 4798, Z], [M, 3979, 2986, L, 3979, 2951, 3974, 2949, 3954, 2949, 3954, 2981, 3937, 2981, Q, 3937, 2988, 3942, 2993, Q, 3949, 2993, 3979, 2986, Z], [M, 2999, 3858, Q, 2999, 3877, 3016, 3880, 3026, 3882, 3055, 3887, 3048, 3855, 3046, 3850, 3035, 3826, 3018, 3826, L, 3006, 3826, Q, 3006, 3838, 3004, 3843, Q, 2999, 3848, 2999, 3858, Z], [M, 3077, 3723, Q, 3070, 3723, 3063, 3728, 3055, 3733, 3055, 3740, 3055, 3750, 3070, 3755, 3082, 3762, 3087, 3775, L, 3117, 3775, Q, 3129, 3769, 3139, 3769, 3124, 3735, 3119, 3733, 3104, 3723, 3094, 3723, Q, 3087, 3723, 3077, 3723, Z], [M, 2943, 3826, Q, 2947, 3833, 2964, 3831, 2964, 3828, 2972, 3794, 2994, 3794, 2997, 3792, 2999, 3789, 2999, 3775, 2999, 3752, 2977, 3752, L, 2950, 3755, Q, 2950, 3775, 2945, 3787, 2938, 3801, 2938, 3811, Q, 2938, 3823, 2943, 3826, Z], [M, 4831, 3272, Q, 4846, 3272, 4846, 3258, 4846, 3248, 4836, 3233, 4824, 3218, 4812, 3218, 4804, 3218, 4804, 3238, L, 4807, 3270, Q, 4814, 3270, 4831, 3272, Z], [M, 5064, 3098, Q, 5057, 3098, 5052, 3108, L, 5042, 3120, Q, 5032, 3120, 5027, 3120, 5017, 3120, 5012, 3130, 4993, 3191, 4971, 3191, 4958, 3191, 4954, 3179, 4949, 3164, 4937, 3164, 4924, 3164, 4904, 3182, 4887, 3194, 4866, 3189, L, 4866, 3213, Q, 4895, 3209, 4895, 3230, 4895, 3238, 4887, 3275, L, 4868, 3275, 4868, 3289, Q, 4873, 3297, 4883, 3307, 4890, 3316, 4892, 3326, 4897, 3346, 4900, 3355, 4900, 3358, 4917, 3358, 4932, 3358, 4934, 3358, 4937, 3355, 4934, 3351, L, 4934, 3245, 5017, 3245, Q, 5029, 3258, 5029, 3292, L, 5049, 3292, Q, 5069, 3250, 5069, 3245, 5069, 3228, 5046, 3218, 5025, 3209, 5025, 3194, 5025, 3159, 5044, 3152, 5074, 3137, 5083, 3120, L, 5083, 3101, Q, 5071, 3098, 5064, 3098, Z], [M, 3996, 3035, Q, 3986, 3027, 3979, 3027, 3977, 3027, 3961, 3047, 3944, 3069, 3944, 3084, L, 3996, 3084, Z], [M, 4170, 2981, Q, 4180, 2971, 4187, 2969, 4207, 2963, 4209, 2946, L, 4167, 2946, Q, 4148, 2966, 4136, 2969, 4131, 2971, 4123, 2983, 4114, 2995, 4103, 2995, L, 4089, 2995, Q, 4086, 2969, 4077, 2961, 4069, 2954, 4069, 2966, 4050, 2971, 4050, 3010, 4050, 3032, 4069, 3037, 4079, 3040, 4111, 3040, 4148, 3000, 4157, 2995, Q, 4160, 2993, 4170, 2981, Z], [M, 4349, 2954, L, 4361, 2954, 4361, 2917, 4358, 2915, 4334, 2915, Q, 4332, 2924, 4327, 2932, 4322, 2937, 4315, 2942, 4322, 2939, 4329, 2946, Q, 4339, 2954, 4349, 2954, Z], [M, 4466, 3118, Q, 4459, 3125, 4454, 3152, 4444, 3172, 4412, 3167, 4405, 3204, 4405, 3245, L, 4386, 3245, Q, 4386, 3213, 4378, 3196, L, 4370, 3182, Q, 4370, 3177, 4383, 3157, 4393, 3140, 4393, 3137, 4393, 3118, 4368, 3111, 4361, 3108, 4356, 3096, L, 4349, 3081, Q, 4309, 3054, 4285, 3054, 4278, 3054, 4270, 3081, 4265, 3111, 4236, 3111, 4209, 3111, 4199, 3101, 4187, 3088, 4150, 3081, L, 4055, 3081, 4050, 3118, 3937, 3118, 3937, 3098, 3920, 3098, Q, 3883, 3130, 3883, 3152, 3883, 3167, 3888, 3204, 3888, 3230, 3883, 3236, 3878, 3241, 3847, 3260, 3824, 3262, 3817, 3253, L, 3798, 3253, Q, 3798, 3280, 3800, 3316, 3798, 3341, 3768, 3341, 3756, 3341, 3746, 3324, 3734, 3307, 3722, 3307, 3697, 3307, 3694, 3329, 3692, 3343, 3694, 3370, 3692, 3395, 3677, 3409, 3665, 3422, 3665, 3439, L, 3673, 3505, Q, 3673, 3542, 3623, 3571, 3575, 3598, 3533, 3591, 3523, 3588, 3511, 3588, 3496, 3591, 3489, 3591, 3472, 3591, 3462, 3598, 3457, 3603, 3445, 3615, 3430, 3625, 3420, 3654, 3413, 3674, 3381, 3674, 3371, 3674, 3356, 3667, 3339, 3662, 3330, 3662, 3313, 3662, 3308, 3696, 3302, 3728, 3264, 3728, 3254, 3728, 3244, 3716, 3239, 3703, 3227, 3703, 3219, 3703, 3212, 3711, 3205, 3718, 3205, 3733, 3205, 3743, 3214, 3747, 3224, 3750, 3224, 3755, 3224, 3775, 3205, 3792, 3185, 3806, 3153, 3814, 3126, 3816, 3112, 3841, 3092, 3872, 3085, 3880, 3055, 3902, 3028, 3958, 3016, 3985, 2992, 4036, 2994, 4102, 2999, 4127, 3001, 4142, 3026, 4154, 3048, 4166, 3063, 4166, 3087, 4166, 3092, 4164, 3102, 4159, 3097, 4132, L, 3151, 4132, Q, 3163, 4186, 3185, 4191, 3202, 4196, 3202, 4220, 3202, 4245, 3185, 4272, 3175, 4286, 3146, 4326, L, 3146, 4348, 3165, 4345, Q, 3163, 4360, 3175, 4367, 3188, 4372, 3188, 4382, 3188, 4402, 3185, 4409, 3178, 4416, 3158, 4416, 3153, 4416, 3139, 4406, 3124, 4394, 3122, 4394, 3117, 4394, 3114, 4404, 3109, 4411, 3097, 4411, 3085, 4411, 3077, 4411, 3065, 4411, 3058, 4416, 3055, 4416, 3053, 4426, 3048, 4438, 3043, 4440, 3016, 4448, 3006, 4460, 2997, 4468, 2977, 4470, 2960, 4473, 2945, 4485, 2889, 4524, 2889, 4531, 2889, 4541, 2906, 4551, 2918, 4558, 2918, 4580, L, 2913, 4627, 2979, 4627, Q, 3018, 4622, 3038, 4612, 3068, 4595, 3082, 4556, 3082, 4551, 3104, 4539, 3131, 4529, 3136, 4522, 3143, 4514, 3168, 4512, 3190, 4509, 3202, 4487, L, 3202, 4475, Q, 3188, 4475, 3185, 4473, L, 3185, 4436, 3327, 4436, Q, 3356, 4460, 3391, 4468, 3410, 4473, 3425, 4480, 3442, 4490, 3455, 4494, 3474, 4499, 3535, 4499, 3609, 4497, 3628, 4499, L, 3628, 4526, Q, 3656, 4529, 3707, 4529, 3773, 4529, 3781, 4526, 3795, 4519, 3815, 4502, 3827, 4492, 3841, 4494, L, 3925, 4494, Q, 3957, 4497, 3966, 4477, 3977, 4458, 4001, 4458, 4013, 4458, 4040, 4463, 4065, 4468, 4096, 4468, 4101, 4477, 4101, 4490, 4103, 4497, 4116, 4497, 4194, 4497, 4236, 4490, 4268, 4485, 4280, 4458, 4292, 4433, 4327, 4433, L, 4381, 4438, Q, 4393, 4438, 4405, 4431, 4422, 4419, 4429, 4411, 4437, 4406, 4447, 4384, 4454, 4367, 4464, 4362, 4478, 4352, 4525, 4355, L, 4528, 4264, Q, 4540, 4259, 4552, 4230, 4564, 4198, 4582, 4193, 4584, 4193, 4618, 4188, 4648, 4186, 4657, 4179, 4670, 4169, 4699, 4159, 4721, 4149, 4726, 4135, 4726, 4125, 4743, 4102, 4762, 4078, 4775, 4078, 4792, 4078, 4816, 4132, 4838, 4186, 4856, 4186, 4878, 4186, 4880, 4169, 4880, 4152, 4902, 4152, 4909, 4152, 4927, 4169, 4941, 4186, 4958, 4186, 4991, 4186, 4993, 4159, 4993, 4125, 4998, 4115, 4998, 4110, 5015, 4102, L, 5037, 4093, Q, 5044, 4068, 5054, 4049, L, 5054, 3978, Q, 5022, 3980, 5003, 3978, 4968, 3978, 4958, 3965, 4939, 3936, 4932, 3926, 4920, 3912, 4902, 3912, 4892, 3912, 4875, 3919, 4856, 3926, 4843, 3926, L, 4809, 3889, Q, 4809, 3885, 4819, 3872, 4831, 3863, 4846, 3858, 4848, 3855, 4866, 3835, 4880, 3818, 4892, 3816, L, 4949, 3796, Q, 4983, 3779, 4968, 3755, 4980, 3752, 4980, 3747, 4983, 3745, 4983, 3733, 4983, 3708, 4941, 3701, 4895, 3701, 4880, 3696, 4883, 3679, 4904, 3674, 4927, 3669, 4927, 3657, 4927, 3645, 4917, 3642, 4909, 3637, 4909, 3630, L, 4909, 3525, 4934, 3522, Q, 4939, 3522, 4939, 3525, L, 4946, 3537, 4956, 3537, 4956, 3508, Q, 4944, 3505, 4941, 3500, 4941, 3497, 4941, 3483, 4941, 3463, 4956, 3456, 4971, 3449, 4971, 3437, 4971, 3426, 4914, 3417, 4904, 3392, 4868, 3355, 4826, 3312, 4821, 3304, L, 4792, 3304, Q, 4790, 3338, 4787, 3346, 4779, 3360, 4760, 3360, 4743, 3360, 4689, 3321, L, 4630, 3277, Q, 4620, 3272, 4601, 3250, 4579, 3228, 4571, 3223, 4557, 3216, 4540, 3218, 4505, 3223, 4500, 3223, L, 4500, 3206, Q, 4520, 3201, 4523, 3196, 4525, 3194, 4525, 3182, 4525, 3174, 4508, 3152, 4491, 3135, 4498, 3118, Z], [M, 4493, 3013, Q, 4481, 3022, 4471, 3037, 4466, 3047, 4452, 3049, 4434, 3047, 4427, 3047, L, 4427, 3049, Q, 4464, 3059, 4503, 3059, 4505, 3054, 4512, 3045, 4518, 3037, 4518, 3025, 4520, 3015, 4518, 3010, 4518, 3003, 4508, 3003, Q, 4503, 3003, 4493, 3013, Z], [M, 4390, 2851, Q, 4390, 2846, 4386, 2844, 4378, 2841, 4373, 2841, 4370, 2841, 4363, 2856, 4356, 2870, 4329, 2870, L, 4329, 2892, Q, 4390, 2878, 4390, 2851, Z]],
      "label": "Bohol",
      "shortLabel": "BO",
      "labelPosition": [398.6, 389],
      "labelAlignment": [CEN, MID],
      "nextId": "PH.CV.CB"
    },
    "PH.CV.CB": {
      "outlines": [[M, 2644, 708, Q, 2639, 710, 2634, 715, 2619, 722, 2619, 727, L, 2619, 734, Q, 2614, 767, 2634, 759, 2644, 754, 2663, 737, L, 2671, 698, Q, 2671, 678, 2656, 678, 2654, 680, 2651, 693, Q, 2649, 708, 2644, 708, Z], [M, 3055, 411, L, 3055, 433, 3092, 433, Q, 3112, 426, 3107, 401, 3102, 379, 3092, 379, L, 3082, 382, Q, 3089, 394, 3077, 401, Q, 3070, 409, 3055, 411, Z], [M, 2855, 154, L, 2835, 154, Q, 2827, 186, 2827, 223, 2827, 225, 2818, 240, 2808, 252, 2810, 267, 2810, 291, 2788, 313, 2784, 316, 2781, 328, 2779, 335, 2769, 340, 2751, 345, 2749, 353, 2747, 355, 2747, 362, 2747, 377, 2751, 379, 2756, 382, 2774, 379, 2769, 392, 2781, 399, 2788, 404, 2801, 411, 2810, 419, 2810, 431, L, 2810, 460, Q, 2810, 480, 2832, 495, 2855, 507, 2855, 529, 2855, 541, 2852, 541, L, 2835, 558, 2835, 583, 2852, 583, Q, 2857, 573, 2867, 568, 2879, 561, 2876, 561, 2881, 558, 2881, 548, 2886, 541, 2886, 538, 2921, 538, 3058, 531, L, 3058, 502, Q, 3055, 500, 3055, 492, L, 3021, 495, Q, 3006, 495, 3004, 475, 3001, 465, 2989, 455, 2977, 443, 2975, 438, 2969, 416, 2962, 411, 2955, 409, 2950, 392, L, 2945, 365, Q, 2943, 350, 2930, 340, 2918, 333, 2913, 294, 2906, 254, 2896, 242, 2891, 237, 2891, 218, 2891, 198, 2884, 196, 2874, 188, 2864, 174, Z], [M, 3729, 2765, Q, 3710, 2758, 3704, 2760, 3704, 2746, 3697, 2746, L, 3668, 2782, Q, 3665, 2787, 3648, 2797, 3638, 2802, 3638, 2817, 3638, 2829, 3646, 2829, L, 3670, 2829, 3670, 2873, 3680, 2873, Q, 3680, 2866, 3685, 2849, 3687, 2831, 3685, 2814, 3685, 2799, 3699, 2792, 3714, 2787, 3729, 2787, L, 3731, 2768, Z], [M, 3472, 2650, Q, 3455, 2650, 3455, 2682, 3450, 2682, 3446, 2680, 3430, 2692, 3430, 2696, 3430, 2704, 3410, 2704, 3391, 2707, 3391, 2714, L, 3393, 2731, 3393, 2746, Q, 3389, 2746, 3381, 2748, 3371, 2750, 3369, 2750, L, 3366, 2804, 3386, 2804, 3386, 2851, 3408, 2851, Q, 3406, 2839, 3406, 2831, 3406, 2821, 3418, 2819, 3420, 2819, 3432, 2819, 3440, 2819, 3445, 2814, 3462, 2797, 3472, 2797, 3477, 2797, 3484, 2790, 3494, 2785, 3494, 2780, 3494, 2768, 3496, 2760, 3498, 2753, 3506, 2750, 3516, 2748, 3545, 2748, 3538, 2728, 3550, 2719, 3562, 2709, 3582, 2714, 3582, 2704, 3585, 2696, 3587, 2687, 3599, 2687, 3611, 2687, 3616, 2670, 3623, 2670, 3628, 2653, L, 3628, 2643, 3614, 2643, 3606, 2645, Q, 3609, 2660, 3594, 2672, 3575, 2687, 3569, 2699, L, 3557, 2699, Q, 3550, 2694, 3535, 2694, 3516, 2692, 3511, 2687, L, 3511, 2650, Z], [M, 4672, 1670, Q, 4642, 1668, 4625, 1651, L, 4603, 1651, 4603, 1673, 4582, 1673, Q, 4582, 1697, 4571, 1710, 4562, 1724, 4562, 1746, 4562, 1776, 4537, 1790, 4512, 1802, 4512, 1827, L, 4530, 1849, Q, 4547, 1873, 4562, 1881, L, 4574, 1881, 4574, 1869, 4603, 1869, Q, 4611, 1883, 4611, 1886, L, 4640, 1886, 4640, 1871, 4687, 1864, Q, 4694, 1864, 4724, 1854, 4753, 1842, 4775, 1842, 4792, 1839, 4807, 1824, 4824, 1807, 4821, 1785, 4829, 1783, 4841, 1781, 4846, 1778, 4846, 1773, 4846, 1764, 4838, 1764, 4824, 1761, 4816, 1749, 4816, 1746, 4799, 1749, 4787, 1749, 4782, 1736, 4770, 1710, 4743, 1707, 4724, 1705, 4728, 1673, Q, 4677, 1673, 4672, 1670, Z], [M, 4841, 1506, Q, 4831, 1511, 4809, 1516, 4795, 1521, 4792, 1531, 4792, 1533, 4792, 1535, 4792, 1558, 4785, 1570, L, 4775, 1582, Q, 4775, 1602, 4804, 1602, 4819, 1602, 4821, 1602, 4824, 1599, 4846, 1592, 4856, 1589, 4866, 1577, 4873, 1565, 4875, 1563, 4878, 1560, 4912, 1535, L, 4914, 1533, Q, 4941, 1514, 4941, 1499, 4941, 1494, 4937, 1492, 4929, 1492, 4929, 1489, L, 4929, 1455, 4961, 1455, 4961, 1403, Q, 4951, 1396, 4944, 1396, 4941, 1396, 4934, 1406, 4920, 1418, 4902, 1418, 4897, 1428, 4895, 1445, 4887, 1457, 4868, 1460, 4851, 1460, 4846, 1479, Q, 4843, 1504, 4841, 1506, Z], [M, 4407, 1680, L, 4322, 1680, 4322, 1693, Q, 4322, 1695, 4329, 1710, L, 4327, 1736, Q, 4336, 1739, 4339, 1741, L, 4361, 1741, 4361, 1729, Q, 4370, 1729, 4370, 1727, L, 4407, 1727, Q, 4407, 1744, 4424, 1749, 4444, 1756, 4449, 1773, L, 4449, 1788, Q, 4432, 1783, 4415, 1790, 4395, 1798, 4393, 1798, L, 4381, 1798, Q, 4388, 1776, 4370, 1766, 4351, 1753, 4349, 1746, L, 4319, 1746, 4319, 1756, Q, 4339, 1764, 4339, 1805, 4339, 1817, 4319, 1849, 4299, 1883, 4290, 1886, 4270, 1891, 4265, 1893, 4253, 1898, 4251, 1913, 4243, 1927, 4233, 1927, 4224, 1932, 4224, 1940, 4224, 1957, 4238, 1960, 4253, 1962, 4251, 1984, L, 4319, 1981, Q, 4315, 1964, 4315, 1957, 4319, 1957, 4332, 1940, 4341, 1923, 4358, 1925, 4368, 1925, 4381, 1920, 4388, 1915, 4407, 1906, 4420, 1901, 4466, 1891, 4503, 1881, 4503, 1859, 4503, 1832, 4486, 1817, 4466, 1800, 4466, 1759, 4466, 1731, 4439, 1714, Q, 4410, 1697, 4407, 1680, Z], [M, 3376, 654, L, 3364, 654, 3364, 720, Q, 3369, 722, 3391, 727, 3398, 730, 3398, 744, 3398, 759, 3371, 769, 3344, 779, 3344, 805, 3330, 808, 3325, 810, 3315, 813, 3313, 830, 3308, 840, 3295, 845, 3283, 847, 3283, 857, 3283, 867, 3318, 876, 3315, 889, 3330, 892, 3339, 894, 3364, 899, 3354, 923, 3393, 930, L, 3393, 950, Q, 3369, 958, 3366, 980, 3364, 994, 3366, 1031, L, 3366, 1034, Q, 3361, 1051, 3339, 1075, 3322, 1097, 3308, 1107, 3293, 1117, 3293, 1153, 3293, 1185, 3271, 1197, 3256, 1205, 3256, 1225, 3256, 1239, 3256, 1256, 3254, 1266, 3249, 1273, 3247, 1278, 3244, 1281, L, 3229, 1325, 3229, 1374, Q, 3231, 1391, 3222, 1398, 3214, 1406, 3214, 1415, L, 3210, 1435, Q, 3207, 1443, 3190, 1447, 3173, 1464, 3156, 1481, 3148, 1492, 3148, 1518, 3148, 1533, 3151, 1568, 3146, 1626, 3109, 1626, 3099, 1624, 3087, 1626, 3072, 1626, 3068, 1629, 3065, 1631, 3063, 1639, 3060, 1648, 3058, 1651, 3043, 1658, 3043, 1670, 3041, 1677, 3041, 1693, 3038, 1710, 3028, 1719, 3004, 1736, 2994, 1744, 2997, 1751, 2992, 1766, 2989, 1776, 2987, 1781, 2984, 1783, 2982, 1785, L, 2950, 1812, Q, 2945, 1832, 2921, 1844, 2898, 1854, 2898, 1876, 2898, 1886, 2901, 1886, 2906, 1888, 2913, 1891, L, 2913, 1918, Q, 2906, 1920, 2901, 1932, 2893, 1952, 2891, 1954, 2891, 1957, 2869, 1972, 2867, 1974, 2864, 1979, 2859, 1986, 2859, 1996, 2859, 2013, 2832, 2020, 2822, 2020, 2815, 2035, 2813, 2043, 2810, 2055, L, 2810, 2229, Q, 2808, 2239, 2796, 2244, 2786, 2251, 2784, 2253, 2779, 2268, 2771, 2302, 2769, 2307, 2759, 2310, 2742, 2317, 2739, 2317, 2730, 2322, 2727, 2339, 2725, 2351, 2725, 2356, 2730, 2373, 2720, 2390, 2717, 2395, 2715, 2398, L, 2688, 2427, Q, 2673, 2442, 2659, 2466, 2651, 2481, 2634, 2508, 2631, 2511, 2626, 2515, 2617, 2520, 2597, 2532, 2578, 2547, 2560, 2577, 2551, 2586, 2536, 2606, 2524, 2623, 2494, 2631, L, 2492, 2650, 2492, 2660, Q, 2494, 2662, 2507, 2662, L, 2507, 2689, Q, 2504, 2704, 2507, 2741, 2507, 2778, 2504, 2807, 2502, 2814, 2489, 2824, 2477, 2834, 2480, 2846, 2480, 2851, 2475, 2858, 2472, 2870, 2467, 2873, 2450, 2873, 2445, 2873, L, 2416, 2920, 2377, 2961, Q, 2367, 2971, 2362, 2986, 2362, 2995, 2359, 3015, 2357, 3022, 2347, 3035, 2340, 3045, 2335, 3059, 2333, 3069, 2333, 3079, 2333, 3081, 2333, 3086, 2335, 3101, 2330, 3118, 2323, 3130, 2298, 3152, 2296, 3155, 2291, 3157, L, 2249, 3196, Q, 2240, 3204, 2235, 3218, 2230, 3221, 2222, 3223, 2215, 3226, 2213, 3238, 2210, 3241, 2205, 3265, 2200, 3282, 2193, 3289, 2186, 3292, 2171, 3297, 2159, 3302, 2156, 3314, 2154, 3338, 2112, 3343, 2075, 3348, 2068, 3368, L, 2068, 3483, Q, 2068, 3490, 2063, 3495, 2058, 3497, 2049, 3505, L, 2049, 3598, 1985, 3598, 1985, 3549, 1987, 3534, 1987, 3517, 1970, 3517, Q, 1953, 3520, 1950, 3529, 1950, 3534, 1953, 3554, 1948, 3591, 1948, 3605, 1948, 3632, 1958, 3632, 1968, 3632, 2000, 3632, 2032, 3635, 2036, 3637, 2044, 3645, 2044, 3669, L, 2039, 3723, 2039, 3725, Q, 2039, 3738, 2036, 3772, 2036, 3801, 2032, 3814, 2026, 3823, 2024, 3835, 2017, 3843, 2000, 3843, 1953, 3838, 1953, 3858, 1953, 3872, 1973, 3875, 1992, 3880, 1992, 3921, 1992, 3965, 1980, 3975, 1970, 3980, 1958, 3997, 1948, 4012, 1938, 4014, 1929, 4014, 1919, 4029, 1919, 4031, 1907, 4031, 1899, 4034, 1902, 4042, L, 1897, 4237, Q, 1897, 4245, 1879, 4255, 1879, 4264, 1875, 4289, 1872, 4294, 1862, 4296, 1850, 4298, 1848, 4303, 1840, 4306, 1840, 4330, 1840, 4350, 1843, 4352, 1845, 4355, 1872, 4362, L, 1872, 4402, Q, 1867, 4409, 1853, 4421, 1843, 4431, 1840, 4446, L, 1840, 4539, Q, 1840, 4551, 1828, 4558, 1818, 4565, 1818, 4580, L, 1818, 4678, Q, 1818, 4688, 1808, 4698, 1796, 4707, 1794, 4710, 1782, 4732, 1779, 4774, 1777, 4786, 1777, 4801, L, 1777, 4820, Q, 1777, 4842, 1779, 4845, 1789, 4857, 1789, 4891, 1789, 4945, 1784, 4967, 1799, 4967, 1825, 4974, L, 1877, 4974, Q, 1872, 4955, 1892, 4945, 1909, 4936, 1907, 4921, L, 1941, 4918, 1941, 4869, 1943, 4867, Q, 1985, 4803, 2007, 4774, 2009, 4766, 2014, 4761, 2024, 4747, 2068, 4722, 2090, 4710, 2105, 4698, 2120, 4683, 2127, 4669, 2159, 4605, 2188, 4553, 2213, 4517, 2210, 4477, 2208, 4436, 2217, 4416, 2247, 4369, 2262, 4296, 2281, 4196, 2291, 4166, 2293, 4159, 2298, 4154, 2306, 4142, 2321, 4135, L, 2342, 4122, Q, 2345, 4120, 2347, 4115, 2357, 4088, 2355, 4059, 2355, 4027, 2359, 4012, 2372, 3980, 2409, 3980, 2418, 3919, 2423, 3892, 2436, 3843, 2465, 3818, 2470, 3814, 2492, 3814, 2514, 3811, 2521, 3806, 2543, 3787, 2546, 3782, 2546, 3779, 2551, 3752, 2553, 3738, 2563, 3725, 2565, 3721, 2568, 3716, 2580, 3701, 2580, 3674, L, 2563, 3537, Q, 2563, 3466, 2570, 3426, 2570, 3422, 2570, 3417, 2578, 3385, 2600, 3331, 2639, 3248, 2668, 3248, 2690, 3248, 2695, 3250, 2705, 3253, 2708, 3275, 2722, 3267, 2725, 3260, L, 2725, 3250, 2717, 3177, Q, 2717, 3133, 2732, 3118, 2759, 3101, 2788, 3079, 2796, 3071, 2805, 3064, 2810, 3062, 2815, 3057, 2825, 3047, 2837, 3030, 2857, 3000, 2862, 2995, 2874, 2983, 2896, 2971, 2918, 2961, 2923, 2951, 2928, 2944, 2935, 2912, 2943, 2883, 2952, 2873, 2960, 2863, 2977, 2863, 3004, 2866, 3016, 2858, 3051, 2846, 3089, 2846, L, 3168, 2846, Q, 3156, 2809, 3183, 2780, 3193, 2770, 3205, 2763, 3225, 2751, 3241, 2741, 3227, 2706, 3208, 2692, 3197, 2684, 3195, 2666, 3195, 2643, 3192, 2632, 3185, 2611, 3162, 2611, 3155, 2611, 3147, 2618, 3140, 2624, 3129, 2624, 3111, 2624, 3110, 2605, 3112, 2582, 3112, 2575, 3112, 2553, 3098, 2533, 3084, 2514, 3065, 2510, L, 3065, 2502, Q, 3089, 2467, 3159, 2352, 3221, 2255, 3239, 2255, 3248, 2255, 3278, 2274, 3312, 2296, 3317, 2313, 3319, 2320, 3338, 2349, 3355, 2380, 3355, 2400, 3355, 2415, 3339, 2442, 3323, 2468, 3323, 2493, L, 3328, 2558, Q, 3328, 2561, 3326, 2590, 3323, 2622, 3328, 2638, 3396, 2638, 3410, 2633, L, 3431, 2616, 3428, 2606, Q, 3424, 2602, 3420, 2599, 3408, 2589, 3408, 2577, 3408, 2567, 3415, 2567, 3427, 2567, 3440, 2545, 3455, 2506, 3472, 2506, 3484, 2506, 3486, 2515, L, 3486, 2530, Q, 3486, 2559, 3474, 2565, L, 3474, 2574, 3514, 2574, Q, 3511, 2547, 3516, 2537, 3521, 2528, 3538, 2532, L, 3538, 2513, Q, 3550, 2515, 3557, 2511, 3567, 2501, 3569, 2498, L, 3569, 2483, 3496, 2483, 3496, 2466, Q, 3496, 2457, 3509, 2447, 3523, 2440, 3526, 2432, 3526, 2415, 3535, 2393, L, 3535, 2390, 3538, 2356, Q, 3552, 2334, 3552, 2332, 3557, 2319, 3560, 2310, 3560, 2307, 3567, 2300, 3572, 2295, 3575, 2295, L, 3575, 2265, Q, 3575, 2246, 3582, 2231, 3592, 2216, 3594, 2207, L, 3594, 2138, Q, 3594, 2089, 3594, 2077, 3592, 2062, 3577, 2040, L, 3577, 1967, Q, 3575, 1957, 3582, 1954, 3589, 1954, 3592, 1949, L, 3597, 1906, Q, 3604, 1869, 3604, 1859, 3604, 1856, 3585, 1842, 3567, 1830, 3567, 1820, 3567, 1817, 3569, 1781, 3572, 1759, 3557, 1751, 3543, 1741, 3543, 1722, L, 3540, 1602, Q, 3518, 1597, 3518, 1533, 3518, 1518, 3521, 1516, 3523, 1506, 3538, 1506, 3555, 1506, 3560, 1506, 3572, 1501, 3567, 1486, 3567, 1472, 3577, 1467, 3592, 1464, 3597, 1460, L, 3599, 1423, Q, 3594, 1362, 3594, 1342, 3594, 1325, 3604, 1315, 3626, 1301, 3626, 1296, L, 3628, 1222, 3665, 1222, 3665, 1197, 3636, 1197, Q, 3633, 1166, 3623, 1163, 3611, 1161, 3604, 1159, 3597, 1156, 3597, 1143, L, 3597, 1036, 3628, 1036, 3628, 899, 3599, 899, 3597, 857, Q, 3597, 825, 3602, 818, 3606, 796, 3638, 808, 3638, 788, 3643, 779, L, 3643, 769, 3580, 769, 3577, 803, 3518, 803, 3518, 769, 3442, 769, 3442, 757, Q, 3442, 747, 3447, 742, L, 3447, 722, 3406, 722, Q, 3403, 708, 3393, 708, 3381, 708, 3376, 705, Z], [M, 3335, 453, L, 3335, 475, Q, 3354, 480, 3359, 482, L, 3361, 480, 3361, 438, 3354, 438, Q, 3349, 438, 3342, 446, Q, 3339, 450, 3335, 453, Z], [M, 3276, 86, Q, 3276, 56, 3268, 44, L, 3254, 44, 3254, 91, Q, 3254, 98, 3244, 108, 3231, 117, 3229, 122, L, 3229, 183, 3251, 183, 3251, 164, 3247, 139, 3276, 139, Q, 3276, 103, 3276, 86, Z], [M, 3692, 216, L, 3677, 213, Q, 3656, 213, 3648, 225, 3643, 235, 3611, 233, 3552, 225, 3518, 237, L, 3518, 259, Q, 3528, 257, 3557, 271, L, 3557, 281, Q, 3555, 294, 3540, 306, 3518, 323, 3516, 330, 3511, 338, 3509, 353, 3498, 370, 3484, 375, L, 3440, 401, Q, 3423, 406, 3423, 413, 3425, 421, 3418, 424, 3408, 433, 3403, 438, 3398, 443, 3398, 485, L, 3398, 521, Q, 3398, 548, 3403, 558, 3410, 568, 3418, 571, 3423, 571, 3435, 573, 3445, 578, 3445, 602, 3445, 620, 3435, 625, 3425, 629, 3425, 637, 3425, 671, 3452, 663, L, 3452, 708, 3491, 708, Q, 3498, 698, 3509, 683, 3518, 666, 3518, 663, 3528, 649, 3543, 642, 3548, 634, 3548, 627, 3550, 622, 3552, 617, 3560, 600, 3582, 575, 3602, 551, 3609, 536, 3614, 526, 3614, 492, 3611, 450, 3614, 433, 3611, 416, 3611, 409, 3611, 394, 3628, 379, 3636, 372, 3643, 353, L, 3653, 330, 3651, 325, Q, 3651, 316, 3673, 308, 3692, 301, 3692, 279, 3692, 262, 3690, 262, 3670, 259, 3660, 252, L, 3660, 245, Q, 3687, 230, 3692, 225, Z], [M, 3834, 98, L, 3834, 49, 3819, 49, 3810, 56, Q, 3805, 61, 3805, 68, Q, 3805, 88, 3834, 98, Z]],
      "label": "Cebu",
      "shortLabel": "CB",
      "labelPosition": [323.5, 197.3],
      "labelAlignment": [CEN, MID],
      "nextId": "PH.CV.SQ"
    },
    "PH.CV.SQ": {
      "outlines": [[M, 2555, 5276, Q, 2548, 5278, 2546, 5298, 2536, 5295, 2521, 5300, 2507, 5303, 2507, 5310, 2507, 5312, 2519, 5320, 2524, 5320, 2531, 5323, 2538, 5325, 2538, 5352, 2538, 5379, 2529, 5391, 2519, 5406, 2487, 5413, 2467, 5416, 2455, 5445, 2443, 5472, 2441, 5472, 2438, 5472, 2421, 5462, 2387, 5457, 2387, 5462, 2357, 5462, 2355, 5462, 2345, 5465, 2347, 5482, L, 2296, 5501, Q, 2291, 5501, 2286, 5494, 2281, 5484, 2276, 5482, 2259, 5477, 2245, 5477, 2237, 5474, 2230, 5477, 2222, 5477, 2215, 5482, 2213, 5484, 2208, 5494, 2205, 5501, 2203, 5504, 2176, 5508, 2171, 5508, 2166, 5511, 2166, 5536, 2166, 5550, 2169, 5555, L, 2176, 5562, Q, 2178, 5572, 2181, 5587, 2188, 5597, 2208, 5599, 2227, 5602, 2227, 5619, 2227, 5641, 2235, 5646, 2245, 5653, 2254, 5656, 2262, 5658, 2267, 5661, 2271, 5663, 2284, 5666, 2296, 5673, 2301, 5683, L, 2303, 5695, Q, 2311, 5704, 2321, 5707, 2325, 5709, 2379, 5722, 2394, 5727, 2409, 5741, 2426, 5758, 2430, 5761, 2436, 5766, 2460, 5768, 2484, 5768, 2492, 5773, 2497, 5775, 2521, 5788, 2546, 5800, 2555, 5800, 2570, 5800, 2573, 5793, 2578, 5780, 2588, 5778, 2602, 5771, 2602, 5754, 2607, 5724, 2607, 5722, L, 2639, 5719, Q, 2661, 5719, 2663, 5722, 2666, 5724, 2671, 5749, L, 2697, 5749, 2715, 5744, 2727, 5749, Q, 2732, 5744, 2737, 5732, 2742, 5722, 2747, 5719, 2759, 5712, 2761, 5709, 2769, 5702, 2769, 5690, 2769, 5663, 2759, 5651, 2747, 5638, 2732, 5638, 2737, 5619, 2717, 5614, 2695, 5612, 2683, 5609, L, 2683, 5553, Q, 2683, 5550, 2683, 5524, 2683, 5506, 2695, 5508, 2705, 5508, 2739, 5501, L, 2739, 5484, Q, 2737, 5462, 2720, 5455, 2695, 5447, 2685, 5445, 2671, 5437, 2671, 5416, 2671, 5413, 2663, 5399, 2656, 5386, 2656, 5381, 2656, 5345, 2654, 5337, 2649, 5320, 2631, 5310, 2617, 5300, 2614, 5298, 2612, 5295, 2609, 5288, 2607, 5274, 2575, 5274, Q, 2558, 5274, 2555, 5276, Z]],
      "label": "Siquijor",
      "shortLabel": "SQ",
      "labelPosition": [249.5, 560.7],
      "labelAlignment": [CEN, MID],
      "nextId": "PH.CV.NR"
    },
    "PH.CV.NR": {
      "outlines": [[M, 1715, 5788, Q, 1696, 5788, 1691, 5791, 1679, 5798, 1679, 5820, 1679, 5854, 1711, 5854, 1742, 5852, 1742, 5822, Q, 1742, 5788, 1715, 5788, Z], [M, 1341, 2679, Q, 1350, 2702, 1360, 2721, 1385, 2753, 1385, 2758, 1395, 2773, 1416, 2826, 1416, 2829, 1434, 2861, 1448, 2895, 1448, 2905, L, 1448, 2920, Q, 1436, 2949, 1402, 2976, 1348, 3022, 1331, 3045, 1262, 3137, 1226, 3206, 1220, 3216, 1206, 3238, 1194, 3255, 1177, 3277, 1135, 3331, 1123, 3358, 1093, 3405, 1078, 3431, 1074, 3441, 1069, 3449, 1039, 3500, 1032, 3527, 1030, 3532, 1030, 3534, 1007, 3583, 985, 3627, 978, 3652, 936, 3723, 927, 3738, 914, 3762, 905, 3787, 893, 3818, 885, 3838, 865, 3863, 839, 3892, 834, 3904, 802, 3956, 782, 3988, 745, 4042, 716, 4073, 686, 4100, 645, 4161, 633, 4179, 623, 4193, 596, 4230, 586, 4247, L, 515, 4326, Q, 447, 4384, 432, 4404, 427, 4409, 422, 4419, 415, 4433, 402, 4453, 380, 4494, 378, 4497, 339, 4539, 329, 4551, 290, 4580, 285, 4588, 280, 4595, 246, 4629, 226, 4647, 214, 4669, L, 192, 4713, Q, 180, 4727, 150, 4766, L, 109, 4855, Q, 106, 4877, 89, 4901, 72, 4923, 50, 4962, 50, 4965, 52, 4967, 59, 4972, 64, 4977, 67, 4980, 94, 4992, 111, 4999, 121, 5019, 133, 5051, 167, 5068, 197, 5085, 231, 5085, L, 302, 5078, Q, 324, 5078, 402, 5095, 491, 5114, 525, 5132, 557, 5149, 603, 5168, 628, 5178, 655, 5190, 711, 5222, 711, 5291, 711, 5300, 706, 5330, 701, 5359, 701, 5406, 701, 5450, 714, 5482, 723, 5501, 753, 5555, 760, 5572, 770, 5633, 772, 5651, 804, 5692, 807, 5695, 811, 5707, 816, 5724, 829, 5763, 846, 5815, 868, 5832, 885, 5846, 932, 5874, 971, 5896, 985, 5905, 1030, 5920, 1044, 5940, 1054, 5952, 1074, 5952, 1088, 5952, 1093, 5945, 1103, 5933, 1115, 5928, 1149, 5928, 1167, 5925, 1177, 5923, 1181, 5908, 1184, 5886, 1186, 5883, 1199, 5862, 1201, 5857, 1203, 5857, 1226, 5857, 1260, 5857, 1287, 5896, 1316, 5935, 1321, 5935, 1328, 5935, 1353, 5900, 1380, 5864, 1402, 5857, 1414, 5852, 1446, 5834, 1480, 5815, 1512, 5808, 1544, 5800, 1586, 5719, 1588, 5712, 1593, 5707, 1627, 5636, 1649, 5614, 1657, 5607, 1666, 5579, 1679, 5548, 1679, 5545, 1688, 5528, 1715, 5516, 1742, 5504, 1742, 5467, 1742, 5425, 1754, 5416, 1777, 5396, 1782, 5362, 1784, 5325, 1786, 5312, 1806, 5207, 1806, 5198, 1806, 5183, 1796, 5168, 1782, 5146, 1747, 5124, 1686, 5085, 1679, 5080, 1662, 5068, 1662, 5041, 1659, 5011, 1652, 5002, 1637, 4989, 1627, 4980, 1608, 4965, 1608, 4950, 1610, 4906, 1608, 4891, 1608, 4862, 1573, 4869, 1546, 4872, 1529, 4865, 1522, 4837, 1512, 4832, 1468, 4815, 1475, 4766, 1475, 4747, 1466, 4727, 1448, 4700, 1436, 4676, 1427, 4661, 1404, 4659, 1390, 4656, 1392, 4632, 1392, 4607, 1380, 4602, 1358, 4595, 1353, 4588, L, 1353, 4544, 1390, 4544, Q, 1395, 4553, 1402, 4598, L, 1419, 4598, 1419, 4563, Q, 1414, 4546, 1392, 4507, L, 1368, 4507, 1365, 4522, 1341, 4522, Q, 1323, 4499, 1306, 4468, 1287, 4436, 1287, 4431, 1287, 4423, 1291, 4419, 1299, 4404, 1328, 4389, 1375, 4369, 1385, 4345, 1390, 4333, 1390, 4313, 1390, 4281, 1390, 4277, 1412, 4255, 1412, 4245, L, 1412, 4208, Q, 1412, 4201, 1412, 4193, 1407, 4171, 1395, 4142, 1380, 4110, 1392, 4063, L, 1392, 3988, Q, 1390, 3963, 1377, 3953, 1365, 3946, 1365, 3931, 1365, 3919, 1380, 3899, 1395, 3880, 1395, 3865, 1385, 3809, 1385, 3792, 1385, 3775, 1387, 3762, 1390, 3738, 1399, 3733, 1439, 3713, 1463, 3681, 1446, 3635, 1470, 3605, 1512, 3559, 1519, 3551, 1519, 3529, 1546, 3502, 1578, 3473, 1588, 3461, 1595, 3449, 1608, 3431, 1612, 3422, 1617, 3409, 1632, 3375, 1640, 3358, 1640, 3353, 1681, 3250, 1683, 3243, 1686, 3238, 1715, 3162, 1718, 3137, 1725, 3074, 1765, 2976, 1772, 2959, 1779, 2942, 1853, 2768, 1867, 2724, L, 1867, 2648, Q, 1838, 2643, 1831, 2640, 1740, 2625, 1706, 2613, 1669, 2601, 1666, 2594, 1664, 2584, 1644, 2589, 1622, 2591, 1612, 2586, 1603, 2582, 1558, 2582, 1468, 2582, 1341, 2577, L, 1316, 2577, Q, 1316, 2591, 1311, 2601, 1309, 2606, 1309, 2621, 1309, 2638, 1321, 2650, Q, 1336, 2665, 1341, 2679, Z]],
      "label": "Negros Oriental",
      "shortLabel": "NR",
      "labelPosition": [83, 475.5],
      "labelAlignment": [CEN, MID],
      "nextId": "PH.CV.CC"
    },
    "PH.CV.CC": {
      "outlines": [[M, 3239, 2255, Q, 3221, 2255, 3159, 2352, 3089, 2467, 3065, 2502, L, 3065, 2510, Q, 3084, 2514, 3098, 2533, 3112, 2553, 3112, 2575, 3112, 2582, 3110, 2605, 3111, 2624, 3129, 2624, 3140, 2624, 3147, 2618, 3155, 2611, 3162, 2611, 3185, 2611, 3192, 2632, 3195, 2643, 3195, 2666, 3197, 2684, 3208, 2692, 3227, 2706, 3241, 2741, 3288, 2713, 3298, 2709, L, 3298, 2674, Q, 3318, 2679, 3325, 2665, 3325, 2648, 3327, 2638, L, 3328, 2638, Q, 3323, 2622, 3326, 2590, 3328, 2561, 3328, 2558, L, 3323, 2493, Q, 3323, 2468, 3339, 2442, 3355, 2415, 3355, 2400, 3355, 2380, 3338, 2349, 3319, 2320, 3317, 2313, 3312, 2296, 3278, 2274, Q, 3248, 2255, 3239, 2255, Z]],
      "label": "Cebu City",
      "shortLabel": "CC",
      "labelPosition": [321, 248.3],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'centralvisayas',
  type: 'maps'
};

/***/ })
/******/ ]);
}));
