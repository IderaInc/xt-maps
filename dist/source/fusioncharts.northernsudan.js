
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(17);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 17:
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
 * @id fusionmaps.NorthernSudan.1.06-19-2019 11:30:47
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
  "name": "NorthernSudan",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 500,
  "baseHeight": 464,
  "baseScaleFactor": 10,
  "firstEntity": "SD.NO.HA",
  "entities": {
    "SD.NO.HA": {
      "outlines": [[M, 4213, 55, Q, 4213, 40, 4197, 40, 4171, 40, 4138, 116, 4111, 176, 4093, 188, 4091, 190, 4090, 190, L, 51, 192, Q, 46, 1713, 49, 1739, 51, 1766, 51, 1781, 51, 1797, 72, 1796, 92, 1795, 1356, 1799, 1362, 1799, 1367, 1799, L, 1685, 1799, 1685, 1895, Q, 1675, 1949, 1672, 2061, 1715, 2061, 4681, 2089, L, 4739, 2090, 4740, 2038, Q, 4753, 1673, 4753, 1670, 4753, 1595, 4759, 1553, 4765, 1512, 4770, 1447, 4770, 1445, 4770, 1442, L, 4809, 289, Q, 4809, 288, 4809, 267, 4809, 246, 4813, 226, 4817, 207, 4817, 184, 4401, 182, 4329, 182, 4281, 184, 4236, 188, 4190, 191, 4185, 178, 4181, 164, 4197, 119, Q, 4213, 74, 4213, 55, Z]],
      "label": "Wadi Halfa",
      "shortLabel": "HA",
      "labelPosition": [243.2, 115.9],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.NO.DO"
    },
    "SD.NO.DO": {
      "outlines": [[M, 4045, 2925, Q, 4087, 2881, 4107, 2856, 4130, 2827, 4234, 2719, 4318, 2632, 4701, 2135, L, 4736, 2090, 4681, 2089, Q, 1715, 2061, 1672, 2061, 1671, 2081, 1671, 2104, 1671, 2109, 1671, 2114, L, 1658, 4536, 1919, 4536, Q, 1981, 4532, 2039, 4534, 2091, 4534, 2160, 4526, 2215, 4532, 2248, 4531, 2294, 4530, 2312, 4529, 2330, 4527, 2337, 4528, 2370, 4529, 2416, 4523, 2442, 4520, 2461, 4518, 2502, 4440, 2705, 4221, 2707, 4219, 2709, 4217, 2756, 4169, 2759, 4167, 2773, 4157, 2803, 4120, 2815, 4106, 2849, 4075, 2885, 4043, 2891, 4036, 2922, 4001, 2982, 3947, 3069, 3869, 3085, 3854, 3119, 3823, 3188, 3752, 3247, 3691, 3285, 3658, 3296, 3649, 3334, 3617, 3371, 3585, 3391, 3562, 3410, 3538, 3447, 3513, 3483, 3487, 3860, 3121, 3869, 3115, 3881, 3102, 3901, 3082, 3909, 3074, 3914, 3069, 3915, 3068, 3919, 3064, 3977, 2998, Q, 3996, 2976, 4045, 2925, Z]],
      "label": "Dongola",
      "shortLabel": "DO",
      "labelPosition": [258.6, 311],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.NO.MA"
    },
    "SD.NO.MA": {
      "outlines": [[M, 4736, 2090, L, 4701, 2135, Q, 4318, 2632, 4234, 2719, 4130, 2827, 4107, 2856, 4087, 2881, 4045, 2925, 3996, 2976, 3977, 2998, 3919, 3064, 3915, 3068, 3914, 3069, 3909, 3074, 3927, 3092, 3939, 3110, 3952, 3128, 3967, 3149, 3981, 3169, 4002, 3195, 4023, 3222, 4027, 3229, 4037, 3241, 4057, 3272, 4079, 3303, 4090, 3318, 4091, 3320, 4126, 3376, 4136, 3393, 4159, 3423, 4190, 3468, 4231, 3519, 4253, 3545, 4298, 3607, L, 4299, 3608, Q, 4394, 3741, 4406, 3753, 4423, 3769, 4443, 3792, L, 4476, 3835, Q, 4491, 3852, 4531, 3907, 4569, 3961, 4593, 3990, 4615, 4018, 4651, 4063, 4685, 4000, 4725, 3941, 4797, 3832, 4867, 3763, 4876, 3755, 4888, 3741, 4906, 3718, 4921, 3692, 4938, 3664, 4942, 3649, 4947, 3634, 4947, 3608, 4947, 3585, 4941, 3569, 4937, 3559, 4919, 3524, 4911, 3507, 4907, 3477, L, 4901, 3434, Q, 4895, 3403, 4896, 3341, 4897, 3274, 4899, 3258, 4899, 3254, 4900, 3253, 4902, 3234, 4913, 3161, 4921, 3097, 4923, 3034, 4923, 2971, 4853, 2874, 4782, 2777, 4753, 2746, 4724, 2715, 4721, 2701, 4717, 2688, 4717, 2683, 4729, 2357, 4737, 2135, L, 4739, 2090, Z]],
      "label": "Merawi",
      "shortLabel": "MA",
      "labelPosition": [447.5, 307.6],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.NO.AD"
    },
    "SD.NO.AD": {
      "outlines": [[M, 4159, 3423, Q, 4136, 3393, 4126, 3376, 4091, 3320, 4090, 3318, 4079, 3303, 4057, 3272, 4037, 3241, 4027, 3229, 4023, 3222, 4002, 3195, 3981, 3169, 3967, 3149, 3952, 3128, 3939, 3110, 3927, 3092, 3909, 3074, 3901, 3082, 3881, 3102, 3869, 3115, 3860, 3121, 3483, 3487, 3447, 3513, 3410, 3538, 3391, 3562, 3371, 3585, 3334, 3617, 3296, 3649, 3285, 3658, 3247, 3691, 3188, 3752, 3119, 3823, 3085, 3854, 3069, 3869, 2982, 3947, 2922, 4001, 2891, 4036, 2885, 4043, 2849, 4075, 2815, 4106, 2803, 4120, 2773, 4157, 2759, 4167, 2756, 4169, 2709, 4217, 2707, 4219, 2705, 4221, 2502, 4440, 2461, 4518, 2487, 4514, 2499, 4514, 2729, 4514, 2842, 4529, 2971, 4546, 3323, 4550, 3415, 4551, 3566, 4570, 3703, 4588, 3785, 4585, 3833, 4584, 3993, 4591, 4144, 4598, 4171, 4599, 4171, 4597, 4171, 4597, 4172, 4598, 4173, 4598, 4179, 4596, 4210, 4597, 4263, 4597, 4275, 4596, 4301, 4595, 4324, 4580, 4345, 4566, 4356, 4560, 4359, 4558, 4362, 4556, 4448, 4494, 4505, 4381, 4566, 4234, 4605, 4151, 4627, 4106, 4651, 4063, 4615, 4018, 4593, 3990, 4569, 3961, 4531, 3907, 4491, 3852, 4476, 3835, L, 4443, 3792, Q, 4423, 3769, 4406, 3753, 4394, 3741, 4299, 3608, L, 4298, 3607, Q, 4253, 3545, 4231, 3519, Q, 4190, 3468, 4159, 3423, Z]],
      "label": "Addabah",
      "shortLabel": "AD",
      "labelPosition": [369.7, 402.4],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'northernsudan',
  type: 'maps'
};

/***/ })

/******/ });
}));
