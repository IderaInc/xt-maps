
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
/******/ 	return __webpack_require__(__webpack_require__.s = 86);
/******/ })
/************************************************************************/
/******/ ({

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(87);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 87:
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
 * @id fusionmaps.Alminya.18.08-06-2012 12:30:18
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
  "name": "Alminya",
  "revision": 18,
  "standaloneInit": true,
  "baseWidth": 838,
  "baseHeight": 262,
  "baseScaleFactor": 10,
  "entities": {
    "01": {
      "outlines": [[M, 4836, 28, Q, 4825, 27, 4807, 40, 4781, 57, 4773, 75, 4773, 77, 4773, 80, 4773, 106, 4763, 134, 4750, 168, 4750, 192, 4750, 197, 4755, 234, 4755, 255, 4746, 256, 4732, 256, 4730, 263, 4726, 271, 4721, 273, 4679, 273, 4658, 275, L, 4645, 275, Q, 4643, 266, 4643, 264, 4628, 264, 4628, 264, 4627, 263, 4627, 254, 4627, 231, 4656, 229, L, 4656, 220, 4645, 220, 4645, 210, Q, 4648, 210, 4650, 208, L, 4650, 191, 4637, 191, Q, 4620, 213, 4614, 229, 4611, 234, 4596, 249, 4585, 260, 4585, 273, 4585, 273, 4589, 277, 4593, 280, 4593, 285, L, 4591, 287, 4540, 287, Q, 4546, 270, 4538, 263, 4533, 259, 4516, 257, 4479, 252, 4478, 222, L, 4469, 222, Q, 4465, 225, 4459, 233, L, 4436, 233, 4436, 218, 4446, 218, 4446, 210, 4415, 210, Q, 4417, 217, 4412, 219, 4405, 223, 4404, 231, L, 4396, 231, Q, 4393, 212, 4389, 209, 4387, 208, 4372, 208, 4356, 208, 4349, 205, 4343, 201, 4305, 201, L, 4305, 191, 4297, 191, 4297, 212, Q, 4286, 212, 4279, 216, 4272, 220, 4262, 220, 4248, 220, 4210, 194, 4178, 170, 4173, 164, 4051, 166, 3959, 168, L, 3429, 168, Q, 3407, 171, 3386, 172, 3285, 179, 3190, 178, 3039, 176, 3028, 176, L, 3027, 176, Q, 2565, 181, 2316, 181, 2304, 206, 2287, 254, 2269, 303, 2260, 327, L, 2251, 351, Q, 2116, 656, 2108, 689, 2100, 717, 2087, 735, 2079, 746, 2070, 774, 2061, 801, 2054, 816, 2047, 830, 2036, 857, 2025, 884, 2013, 928, 2002, 973, 1991, 991, 1981, 1010, 1980, 1012, 1971, 1040, 1968, 1052, 1965, 1064, 1937, 1081, 1919, 1094, 1906, 1101, 1894, 1107, 1868, 1120, 1842, 1132, 1820, 1152, 1796, 1170, 1761, 1198, 1725, 1225, 1651, 1277, 1576, 1329, 1540, 1360, 1491, 1400, 1426, 1434, 1399, 1447, 1301, 1492, 1259, 1506, 1232, 1515, 1181, 1547, 1175, 1548, 1169, 1549, 1097, 1576, 1056, 1600, 1024, 1614, 1023, 1614, 1023, 1614, 907, 1647, 848, 1680, 789, 1712, 717, 1743, 645, 1774, 601, 1791, 557, 1807, 496, 1835, 436, 1863, 413, 1872, 375, 1886, 330, 1905, 284, 1924, 271, 1928, 256, 1934, 234, 1949, 226, 1970, 203, 2015, 179, 2061, 175, 2075, 171, 2088, 162, 2106, 154, 2124, 149, 2137, 143, 2149, 134, 2173, 124, 2196, 113, 2226, 102, 2256, 98, 2261, 94, 2265, 82, 2298, 71, 2331, 52, 2363, 36, 2391, 29, 2415, 791, 2415, 824, 2422, L, 1344, 2422, Q, 1363, 2422, 1409, 2430, L, 4130, 2430, 4130, 2484, 4151, 2484, Q, 4152, 2488, 4153, 2495, 4161, 2503, 4170, 2516, L, 4184, 2516, 4184, 2507, Q, 4189, 2508, 4209, 2498, 4211, 2504, 4211, 2508, L, 4221, 2508, Q, 4221, 2510, 4223, 2515, 4223, 2523, 4214, 2527, L, 4214, 2537, 4254, 2537, Q, 4259, 2531, 4259, 2516, L, 4259, 2493, Q, 4269, 2493, 4273, 2485, 4276, 2477, 4282, 2477, 4282, 2477, 4288, 2483, 4293, 2489, 4305, 2489, 4316, 2489, 4318, 2496, 4321, 2506, 4324, 2507, 4327, 2508, 4341, 2506, 4353, 2504, 4356, 2510, 4358, 2512, 4369, 2519, 4377, 2524, 4373, 2534, 4384, 2532, 4386, 2536, 4389, 2539, 4388, 2553, L, 4402, 2553, Q, 4406, 2541, 4449, 2543, 4488, 2545, 4488, 2525, 4490, 2525, 4496, 2524, 4501, 2522, 4502, 2516, L, 4505, 2516, 4505, 2543, 4514, 2543, Q, 4529, 2534, 4524, 2505, L, 4536, 2505, Q, 4540, 2509, 4544, 2515, 4547, 2518, 4553, 2517, L, 4553, 2529, Q, 4577, 2533, 4635, 2534, 4640, 2534, 4645, 2534, 4712, 2534, 4725, 2533, 4767, 2529, 4779, 2513, L, 4797, 2514, 4798, 2514, Q, 4840, 2514, 4901, 2508, 4904, 2508, 4949, 2505, 4956, 2502, 4965, 2492, L, 4993, 2492, Q, 5024, 2492, 5033, 2497, 5040, 2502, 5088, 2501, L, 5151, 2501, Q, 5165, 2503, 5185, 2516, 5200, 2520, 5275, 2532, 5295, 2535, 5326, 2541, 5331, 2542, 5345, 2549, 5353, 2555, 5379, 2555, 5432, 2555, 5445, 2550, 5457, 2546, 5487, 2519, 5498, 2508, 5523, 2490, 5555, 2466, 5568, 2466, 5583, 2466, 5601, 2484, 5606, 2489, 5608, 2503, 5611, 2517, 5615, 2524, 5646, 2577, 5668, 2585, L, 5669, 2585, 5673, 2597, 5680, 2597, Q, 5684, 2585, 5698, 2585, 5713, 2585, 5717, 2580, 5722, 2574, 5738, 2573, 5747, 2567, 5748, 2558, 5758, 2547, 5771, 2527, 5784, 2510, 5801, 2502, 5803, 2501, 5807, 2495, 5811, 2490, 5816, 2490, 5833, 2492, 5836, 2489, 5849, 2479, 5874, 2480, 5888, 2476, 5910, 2463, 5933, 2449, 5947, 2445, 5970, 2438, 5992, 2422, 6018, 2403, 6030, 2398, 6059, 2385, 6103, 2357, 6159, 2323, 6176, 2320, 6190, 2317, 6213, 2304, 6230, 2294, 6248, 2294, L, 6249, 2294, Q, 6397, 2286, 6503, 2364, 6521, 2378, 6537, 2393, 6552, 2404, 6596, 2415, 6601, 2417, 6662, 2438, 6695, 2450, 6719, 2446, 6719, 2446, 6738, 2444, 6757, 2443, 6782, 2434, 6806, 2425, 6849, 2422, 6865, 2417, 6925, 2414, 6978, 2411, 7002, 2400, L, 7060, 2402, Q, 7066, 2404, 7073, 2407, 7079, 2410, 7096, 2418, 7102, 2419, 7121, 2432, 7132, 2433, 7166, 2442, 7175, 2444, 7194, 2442, 7203, 2444, 7216, 2452, 7227, 2459, 7235, 2459, 7248, 2460, 7270, 2465, 7285, 2465, 7394, 2390, 7452, 2353, 7529, 2348, 7538, 2348, 7560, 2333, 7572, 2330, 7598, 2324, 7650, 2308, 7677, 2306, 7685, 2306, 7716, 2300, 7744, 2294, 7767, 2294, 7808, 2296, 7860, 2282, L, 7880, 2283, Q, 7905, 2288, 7943, 2301, 7981, 2314, 7989, 2315, 7998, 2317, 8016, 2316, 8024, 2317, 8037, 2327, 8045, 2328, 8114, 2328, 8119, 2328, 8125, 2328, L, 8180, 2328, Q, 8186, 2328, 8204, 2325, 8227, 2322, 8234, 2316, L, 8345, 2316, 8355, 2315, 8355, 2290, Q, 8335, 2239, 8330, 2216, 8299, 2116, 8276, 2082, 8258, 2036, 8248, 2017, 8207, 1908, 8186, 1880, 8164, 1852, 8095, 1791, 8025, 1730, 8000, 1682, 7999, 1681, 7998, 1680, 7947, 1635, 7859, 1505, 7768, 1372, 7680, 1326, 7613, 1278, 7470, 1146, 7448, 1126, 7405, 1119, 7355, 1084, 7333, 1083, 7320, 1082, 7293, 1072, 7269, 1064, 7241, 1064, 7179, 1060, 7153, 1060, 7119, 1066, 7053, 1079, 6976, 1096, 6935, 1104, 6903, 1117, 6882, 1123, 6863, 1128, 6841, 1128, 6820, 1126, 6811, 1127, 6733, 1143, 6689, 1148, 6639, 1152, 6588, 1181, 6548, 1197, 6538, 1202, 6532, 1210, 6519, 1215, 6494, 1217, 6488, 1221, 6471, 1231, 6368, 1261, 6295, 1290, 6257, 1305, L, 6223, 1305, Q, 6197, 1314, 6164, 1314, 6091, 1314, 6008, 1298, 5926, 1283, 5875, 1261, 5629, 1181, 5592, 1142, 5590, 1141, 5588, 1141, 5514, 1123, 5480, 1105, 5445, 1086, 5430, 1076, 5414, 1066, 5365, 1050, 5315, 1033, 5269, 1006, 5198, 963, 5150, 937, 5102, 912, 5074, 892, 5047, 873, 4989, 827, 4981, 821, 4985, 783, 4987, 770, 4981, 752, 4975, 735, 4973, 718, 4971, 701, 4969, 685, 4966, 669, 4962, 652, 4957, 636, 4965, 618, 4973, 600, 4976, 586, 4976, 584, 4976, 582, 4978, 526, 4977, 502, 4976, 490, 4981, 466, 4986, 442, 4985, 425, 4985, 408, 4982, 402, 4979, 396, 4966, 390, 4941, 380, 4946, 346, 4950, 312, 4955, 303, 4961, 294, 4983, 264, 5004, 235, 5004, 166, 5004, 112, 4964, 57, 4948, 34, 4925, 30, 4916, 28, 4870, 28, Z]],
      "label": "Al-minya",
      "shortLabel": "AM",
      "labelPosition": [354.7, 157],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'alminya',
  type: 'maps'
};

/***/ })

/******/ });
}));
