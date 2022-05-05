
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
/******/ 	return __webpack_require__(__webpack_require__.s = 322);
/******/ })
/************************************************************************/
/******/ ({

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(323);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.OklahomaCongressional.18.08-10-2012 01:12:14
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
  "name": "OklahomaCongressional",
  "revision": 18,
  "standaloneInit": true,
  "baseWidth": 880,
  "baseHeight": 460,
  "baseScaleFactor": 10,
  "entities": {
    "1": {
      "outlines": [[M, 7396, 744, Q, 7299, 743, 7259, 742, 7265, 400, 7249, 306, 7256, 306, 7275, 305, L, 7275, 288, Q, 7273, 251, 7272, 241, 7272, 239, 7272, 238, 7083, 243, 7067, 233, 7067, 283, 7062, 356, 7062, 359, 7061, 361, L, 7061, 450, 7064, 450, Q, 7064, 452, 7064, 454, 7065, 479, 7065, 527, 7065, 559, 7069, 611, 7069, 616, 7064, 629, 7060, 641, 7063, 650, L, 7063, 750, Q, 7073, 757, 7072, 775, 7073, 779, 7072, 840, 7073, 844, 7072, 849, L, 7072, 936, Q, 7074, 953, 7075, 984, 7075, 987, 7075, 990, 7075, 1134, 7071, 1188, 7071, 1190, 7071, 1192, L, 7071, 1252, Q, 7076, 1262, 7076, 1263, L, 7076, 1297, Q, 6872, 1296, 6775, 1294, L, 6771, 1362, Q, 6772, 1390, 6776, 1399, 6781, 1408, 6795, 1408, 6804, 1408, 6831, 1404, 6861, 1402, 6890, 1405, 6920, 1409, 7047, 1405, L, 7047, 1460, Q, 7043, 1477, 7043, 1511, L, 6997, 1510, Q, 7005, 1525, 6974, 1525, L, 6974, 1551, Q, 6975, 1552, 6975, 1556, L, 6965, 1556, 6965, 1571, Q, 6972, 1569, 6976, 1576, L, 6976, 1589, Q, 6962, 1587, 6956, 1592, 6950, 1601, 6944, 1607, 6925, 1630, 6924, 1637, L, 6888, 1637, 6889, 1682, Q, 7124, 1675, 7138, 1676, 7140, 1676, 7141, 1676, 7143, 1676, 7145, 1676, 7378, 1672, 7381, 1672, 7410, 1672, 7431, 1675, L, 7431, 1709, 7437, 1709, 7442, 1704, 7442, 1756, Q, 7452, 1756, 7451, 1773, 7471, 1772, 7477, 1779, 7484, 1786, 7495, 1785, 7506, 1785, 7515, 1774, 7524, 1764, 7547, 1765, L, 7547, 1753, 7573, 1753, 7571, 1743, 7600, 1743, 7600, 1734, 7614, 1734, Q, 7617, 1737, 7617, 1744, 7633, 1745, 7664, 1748, L, 7664, 1734, Q, 7665, 1734, 7669, 1733, 7673, 1733, 7687, 1736, L, 7688, 1722, 7711, 1722, 7711, 1714, 7731, 1713, Q, 7738, 1713, 7746, 1724, L, 7775, 1724, Q, 7820, 1724, 7822, 1715, 7830, 1692, 7859, 1671, L, 7859, 1646, Q, 7832, 1652, 7818, 1632, 7803, 1608, 7799, 1608, L, 7799, 1585, Q, 7807, 1575, 7818, 1579, L, 7818, 1560, 7808, 1560, 7808, 1548, 7801, 1548, 7801, 1535, Q, 7800, 1515, 7827, 1506, 7854, 1498, 7850, 1474, L, 7857, 1474, 7857, 1434, 7877, 1434, 7877, 1395, 7529, 1395, Q, 7533, 1379, 7520, 1363, L, 7511, 1363, Q, 7512, 1359, 7512, 1356, 7513, 1332, 7498, 1328, L, 7498, 1318, 7480, 1318, 7480, 1325, Q, 7473, 1321, 7467, 1321, 7472, 1301, 7452, 1289, 7450, 1289, 7449, 1289, 7392, 1285, 7352, 1285, L, 7353, 1239, 7316, 1239, 7316, 1182, 7296, 1181, Q, 7295, 1161, 7294, 1126, 7295, 1086, 7299, 1076, 7282, 1076, 7276, 1075, L, 7276, 1053, 7303, 1053, Q, 7301, 1016, 7332, 1016, L, 7332, 1009, 7323, 1009, Q, 7323, 1002, 7322, 999, L, 7322, 989, 7333, 989, 7333, 929, 7325, 929, 7325, 903, Q, 7328, 899, 7333, 900, L, 7332, 889, 7345, 889, 7345, 869, Q, 7344, 869, 7343, 867, L, 7335, 867, 7335, 849, Q, 7383, 849, 7404, 847, L, 7404, 833, 7440, 833, 7440, 776, Q, 7414, 775, 7410, 757, L, 7402, 757, 7402, 743, Z]],
      "label": "1st district",
      "shortLabel": "1st",
      "labelPosition": [732.4, 148.9],
      "labelAlignment": [CEN, MID]
    },
    "2": {
      "outlines": [[M, 7571, 227, Q, 7571, 227, 7568, 228, 7550, 230, 7414, 231, 7360, 231, 7325, 230, 7329, 243, 7311, 243, 7278, 241, 7273, 242, 7273, 251, 7275, 288, L, 7275, 306, Q, 7256, 306, 7249, 307, 7265, 400, 7259, 742, 7299, 743, 7397, 745, L, 7402, 743, 7402, 757, 7411, 757, Q, 7414, 775, 7440, 776, L, 7440, 833, 7404, 833, 7404, 848, Q, 7383, 849, 7335, 849, L, 7335, 867, 7344, 867, Q, 7344, 869, 7346, 869, L, 7346, 889, 7333, 889, 7333, 900, Q, 7328, 899, 7325, 903, L, 7325, 929, 7333, 929, 7333, 989, 7322, 989, 7322, 1000, Q, 7323, 1002, 7323, 1009, L, 7333, 1009, 7333, 1017, Q, 7301, 1016, 7303, 1053, L, 7277, 1053, 7277, 1075, Q, 7282, 1076, 7300, 1076, 7295, 1086, 7295, 1127, 7295, 1161, 7296, 1181, L, 7311, 1182, 7316, 1180, 7316, 1239, 7353, 1239, 7352, 1285, Q, 7392, 1285, 7449, 1289, 7450, 1289, 7452, 1289, 7472, 1301, 7468, 1321, 7473, 1321, 7481, 1325, L, 7481, 1318, 7498, 1318, 7498, 1329, Q, 7513, 1332, 7512, 1356, 7512, 1359, 7512, 1363, L, 7520, 1363, Q, 7533, 1379, 7529, 1396, L, 7877, 1396, 7877, 1435, 7857, 1435, 7857, 1474, 7851, 1474, Q, 7854, 1498, 7827, 1506, 7800, 1515, 7801, 1535, L, 7801, 1549, 7808, 1549, 7808, 1560, 7819, 1560, 7819, 1579, Q, 7807, 1575, 7800, 1585, L, 7800, 1608, Q, 7803, 1608, 7819, 1632, 7832, 1652, 7859, 1646, L, 7859, 1671, Q, 7830, 1692, 7822, 1716, 7820, 1724, 7775, 1724, L, 7746, 1724, Q, 7738, 1713, 7732, 1713, L, 7711, 1714, 7711, 1722, 7688, 1722, 7687, 1736, Q, 7673, 1733, 7669, 1733, 7665, 1734, 7664, 1735, L, 7664, 1748, Q, 7633, 1745, 7618, 1744, 7617, 1737, 7615, 1735, L, 7601, 1735, 7601, 1743, 7571, 1743, 7573, 1754, 7548, 1754, 7548, 1765, Q, 7524, 1764, 7515, 1774, 7506, 1785, 7495, 1786, 7484, 1786, 7478, 1779, 7471, 1772, 7451, 1773, 7452, 1756, 7443, 1756, L, 7443, 1704, 7437, 1709, 7431, 1709, 7431, 1675, Q, 7410, 1672, 7382, 1672, 7378, 1672, 7145, 1676, 7143, 1676, 7141, 1676, 7140, 1676, 7138, 1676, 7124, 1675, 6889, 1682, L, 6888, 1767, Q, 6888, 1771, 6890, 1835, 6890, 1837, 6891, 1839, 6890, 1888, 6886, 1960, L, 6846, 1960, Q, 6827, 1955, 6799, 1955, 6798, 1955, 6797, 1955, 6772, 1955, 6767, 1959, L, 6767, 1962, Q, 6666, 1962, 6451, 1959, 6451, 1976, 6448, 2012, 6448, 2029, 6453, 2073, 6453, 2075, 6454, 2077, L, 6454, 2173, Q, 6456, 2176, 6457, 2180, L, 6459, 2183, Q, 6461, 2201, 6461, 2240, L, 6452, 2240, 6452, 2262, 6457, 2266, 6478, 2266, Q, 6477, 2257, 6484, 2249, 6490, 2240, 6499, 2241, 6500, 2246, 6501, 2255, 6505, 2257, 6521, 2259, 6535, 2263, 6537, 2270, L, 6546, 2270, 6546, 2255, Q, 6529, 2218, 6510, 2211, 6511, 2207, 6518, 2199, 6526, 2191, 6533, 2191, 6547, 2191, 6564, 2218, L, 6580, 2217, Q, 6587, 2212, 6595, 2213, 6595, 2192, 6601, 2185, L, 6610, 2185, 6610, 2191, 6627, 2191, 6627, 2182, 6634, 2182, Q, 6640, 2184, 6643, 2186, 6644, 2188, 6645, 2190, 6643, 2493, 6648, 2510, L, 6648, 2616, Q, 6597, 2616, 6591, 2622, 6592, 2763, 6588, 2842, L, 6588, 2878, 6590, 2880, 6602, 2880, 6602, 2867, 6633, 2867, Q, 6637, 2869, 6640, 2872, 6642, 2874, 6648, 2872, L, 6648, 2889, 6661, 2889, Q, 6662, 2885, 6662, 2878, L, 6674, 2878, 6674, 2861, 6687, 2861, 6687, 2970, Q, 6683, 2974, 6683, 3028, L, 6684, 3091, Q, 6687, 3108, 6687, 3132, 6687, 3151, 6686, 3161, 6685, 3162, 6685, 3164, 6685, 3162, 6685, 3161, L, 6674, 3161, Q, 6641, 3162, 6577, 3163, 6573, 3173, 6576, 3204, 6581, 3263, 6575, 3382, L, 6564, 3382, Q, 6558, 3385, 6517, 3386, 6486, 3385, 6476, 3386, 6466, 3386, 6395, 3383, L, 6395, 3376, 6376, 3376, Q, 6375, 3378, 6375, 3386, L, 6355, 3386, Q, 6304, 3381, 6276, 3381, 6222, 3384, 6199, 3384, L, 6199, 3605, 6140, 3605, Q, 6140, 3640, 6138, 3715, 6138, 3718, 6142, 3802, L, 6457, 3802, 6457, 3819, Q, 6458, 3815, 6463, 3815, 6471, 3815, 6471, 3829, 6470, 3843, 6483, 3841, 6484, 3847, 6496, 3850, L, 6496, 3861, Q, 6503, 3858, 6506, 3858, 6506, 3862, 6506, 3871, 6506, 3877, 6509, 3880, 6506, 3890, 6519, 3903, 6532, 3914, 6530, 3925, L, 6540, 3927, 6540, 3955, Q, 6527, 3952, 6519, 3953, 6517, 3953, 6516, 3954, L, 6510, 3954, Q, 6510, 3957, 6509, 3958, L, 6509, 3984, 6518, 3984, 6518, 4006, 6496, 4006, 6496, 3997, 6483, 3997, 6483, 4003, Q, 6474, 4003, 6472, 4005, L, 6472, 4023, 6480, 4023, Q, 6481, 4027, 6481, 4041, 6488, 4041, 6489, 4040, L, 6490, 4052, Q, 6510, 4054, 6510, 4054, L, 6510, 4076, Q, 6504, 4075, 6500, 4077, L, 6500, 4120, 6506, 4119, 6508, 4129, 6508, 4154, 6502, 4154, Q, 6497, 4167, 6484, 4184, 6472, 4199, 6470, 4211, 6472, 4214, 6490, 4222, 6500, 4226, 6515, 4248, 6560, 4248, 6579, 4262, 6586, 4268, 6588, 4284, 6589, 4294, 6595, 4304, L, 6595, 4309, 6617, 4309, 6617, 4297, 6670, 4297, Q, 6675, 4298, 6684, 4305, 6695, 4313, 6697, 4321, 6698, 4331, 6717, 4350, 6723, 4363, 6737, 4379, 6746, 4392, 6743, 4411, 6759, 4413, 6766, 4413, 6777, 4413, 6779, 4401, 6801, 4393, 6802, 4373, 6799, 4351, 6800, 4341, 6800, 4339, 6803, 4339, 6811, 4328, 6808, 4316, L, 6819, 4316, 6819, 4312, Q, 6823, 4311, 6827, 4310, L, 6841, 4310, Q, 6841, 4314, 6843, 4322, L, 6850, 4321, Q, 6850, 4321, 6872, 4325, L, 6872, 4339, Q, 6873, 4340, 6883, 4341, 6890, 4340, 6905, 4331, 6917, 4323, 6930, 4326, L, 6933, 4305, Q, 6946, 4307, 6947, 4288, 6945, 4261, 6947, 4249, L, 6976, 4249, Q, 6974, 4228, 6974, 4224, 6974, 4217, 6985, 4217, 6994, 4217, 6995, 4221, 6995, 4227, 7005, 4232, 7005, 4215, 7006, 4207, L, 7022, 4207, Q, 7048, 4221, 7056, 4231, L, 7073, 4231, 7073, 4209, Q, 7087, 4201, 7087, 4199, L, 7095, 4199, Q, 7094, 4202, 7093, 4207, 7093, 4209, 7098, 4212, L, 7108, 4212, 7108, 4198, Q, 7107, 4189, 7112, 4186, L, 7130, 4186, Q, 7130, 4195, 7131, 4201, L, 7147, 4201, 7147, 4191, 7183, 4191, Q, 7182, 4182, 7182, 4164, 7185, 4164, 7192, 4163, 7216, 4163, 7274, 4221, L, 7295, 4221, Q, 7304, 4202, 7301, 4190, L, 7324, 4190, Q, 7324, 4192, 7326, 4201, 7333, 4202, 7366, 4203, L, 7367, 4195, 7367, 4153, 7377, 4153, Q, 7375, 4150, 7374, 4147, L, 7374, 4140, Q, 7391, 4147, 7400, 4153, L, 7400, 4160, 7402, 4161, 7426, 4161, Q, 7439, 4140, 7442, 4137, 7453, 4126, 7473, 4132, L, 7473, 4122, 7499, 4122, Q, 7498, 4112, 7517, 4113, L, 7517, 4093, 7568, 4093, Q, 7568, 4112, 7573, 4130, 7578, 4147, 7578, 4164, L, 7593, 4164, 7593, 4150, 7601, 4150, 7601, 4141, 7622, 4141, Q, 7623, 4145, 7624, 4156, 7627, 4166, 7639, 4172, L, 7647, 4172, Q, 7646, 4164, 7646, 4160, 7645, 4158, 7645, 4157, 7644, 4153, 7646, 4152, L, 7670, 4152, 7670, 4169, Q, 7700, 4169, 7755, 4172, L, 7753, 4172, Q, 7798, 4178, 7790, 4152, L, 7823, 4152, 7823, 4160, 7830, 4163, 7857, 4163, 7857, 4118, 7870, 4118, Q, 7872, 4122, 7877, 4122, 7888, 4122, 7887, 4103, 7886, 4083, 7899, 4081, 7906, 4058, 7906, 4057, L, 7939, 4057, 7939, 4062, Q, 7962, 4058, 7972, 4083, 8002, 4086, 8005, 4087, 8028, 4093, 8016, 4113, L, 8034, 4113, 8034, 4105, 8061, 4105, 8061, 4118, 8064, 4122, Q, 8068, 4119, 8076, 4119, 8086, 4119, 8091, 4131, 8093, 4138, 8095, 4154, L, 8103, 4154, 8103, 4172, 8110, 4172, Q, 8112, 4170, 8134, 4170, 8130, 4164, 8130, 4161, 8136, 4161, 8148, 4159, 8154, 4159, 8154, 4181, L, 8170, 4180, 8170, 4170, Q, 8174, 4170, 8183, 4169, 8186, 4169, 8189, 4170, L, 8189, 4201, Q, 8198, 4198, 8203, 4198, 8207, 4211, 8209, 4239, L, 8225, 4241, 8225, 4231, 8244, 4232, Q, 8241, 4237, 8238, 4237, L, 8238, 4268, Q, 8283, 4302, 8289, 4317, 8292, 4321, 8342, 4316, 8344, 4316, 8356, 4323, L, 8371, 4322, Q, 8364, 4309, 8387, 4294, 8394, 4304, 8394, 4310, 8394, 4316, 8385, 4323, L, 8385, 4330, 8404, 4330, 8404, 4338, Q, 8410, 4338, 8425, 4335, 8432, 4335, 8432, 4362, 8443, 4359, 8443, 4385, L, 8481, 4385, Q, 8495, 4374, 8498, 4374, 8512, 4374, 8512, 4391, 8512, 4395, 8508, 4399, 8504, 4404, 8503, 4411, 8504, 4412, 8509, 4412, 8517, 4412, 8522, 4402, 8527, 4392, 8547, 4392, 8560, 4392, 8555, 4403, L, 8563, 4403, Q, 8566, 4402, 8573, 4402, 8573, 4390, 8572, 4385, 8579, 4385, 8583, 4383, 8587, 4393, 8586, 4423, L, 8594, 4423, Q, 8594, 4413, 8605, 4413, 8610, 4413, 8622, 4416, 8621, 4417, 8600, 4449, 8600, 4456, 8611, 4456, 8619, 4456, 8634, 4446, 8643, 4442, 8644, 4431, 8656, 4434, 8655, 4446, L, 8655, 4464, Q, 8656, 4450, 8668, 4449, L, 8669, 4449, Q, 8675, 4449, 8686, 4451, L, 8686, 4449, Q, 8689, 3559, 8682, 3344, L, 8679, 3344, Q, 8678, 2226, 8669, 2184, 8656, 2129, 8653, 2093, 8651, 2071, 8643, 2037, 8636, 2008, 8637, 1992, 8638, 1971, 8620, 1907, 8612, 1874, 8615, 1858, 8585, 1671, 8577, 1637, 8573, 1622, 8573, 1593, 8573, 1563, 8572, 1553, 8545, 1456, 8538, 1403, 8538, 1402, 8538, 1402, 8512, 1193, 8504, 1164, 8496, 1135, 8489, 1100, 8482, 1064, 8485, 1050, 8487, 1036, 8476, 1002, 8465, 965, 8464, 948, 8463, 925, 8456, 892, 8448, 852, 8447, 847, 8446, 844, 8445, 743, 8445, 740, 8445, 737, 8443, 499, 8438, 440, L, 8429, 440, Q, 8429, 432, 8431, 212, 8400, 211, 8331, 211, 8331, 215, 8331, 216, 8075, 219, 8065, 220, 8063, 220, 8035, 220, L, 8038, 220, 8026, 220, 8022, 220, Q, 8002, 220, 7955, 220, 7897, 218, 7870, 223, L, 7870, 230, 7701, 230, Q, 7588, 227, 7571, 227, Z]],
      "label": "2nd district",
      "shortLabel": "2nd",
      "labelPosition": [741.2, 233.7],
      "labelAlignment": [CEN, MID]
    },
    "3": {
      "outlines": [[M, 5207, 243, L, 4848, 243, Q, 4790, 245, 4770, 241, 4768, 240, 4767, 240, 4678, 235, 4651, 235, 4641, 241, 4582, 240, L, 4405, 236, 4405, 227, Q, 4404, 227, 4403, 227, 4375, 230, 4372, 230, 4359, 230, 4353, 229, L, 3984, 229, 3984, 218, Q, 3761, 221, 3742, 220, 3723, 219, 3695, 220, L, 3414, 220, 3414, 209, Q, 3323, 213, 3283, 213, L, 3258, 211, Q, 3208, 207, 3112, 208, 2889, 209, 2886, 210, L, 2886, 200, Q, 2651, 198, 2595, 198, 2593, 195, 2593, 189, L, 2538, 189, Q, 2506, 190, 2443, 191, 2422, 192, 2410, 192, 2387, 190, 2385, 179, L, 2244, 179, Q, 2242, 180, 2239, 180, 2238, 180, 2238, 180, 2236, 180, 2234, 181, 2189, 182, 2151, 183, L, 2097, 183, Q, 2075, 182, 2065, 182, 2058, 182, 2056, 177, 2054, 173, 2053, 173, 2049, 172, 1934, 172, 1896, 169, 1791, 169, L, 1791, 163, Q, 1628, 163, 1561, 161, L, 1561, 151, 1432, 151, Q, 1430, 151, 1428, 151, 1372, 149, 1342, 149, 1301, 151, 1282, 151, 1270, 151, 1267, 146, 1263, 141, 1248, 142, 1113, 140, 1036, 140, L, 1036, 132, 873, 132, 873, 124, Q, 743, 120, 718, 120, L, 718, 109, Q, 702, 107, 660, 109, 607, 111, 577, 112, 575, 112, 572, 112, 557, 112, 556, 111, 553, 110, 554, 102, L, 445, 102, 445, 93, Q, 340, 93, 272, 92, L, 272, 84, 123, 84, Q, 108, 259, 108, 278, 106, 281, 104, 282, 103, 283, 103, 284, 101, 378, 101, 421, 101, 453, 92, 480, 88, 493, 89, 513, 90, 524, 91, 543, 91, 545, 91, 547, 91, 562, 93, 602, 92, 643, 81, 639, L, 81, 701, Q, 91, 706, 173, 705, L, 232, 714, Q, 306, 717, 362, 715, 417, 720, 558, 723, 562, 723, 568, 728, 573, 732, 579, 732, L, 738, 732, Q, 791, 732, 946, 744, 947, 746, 949, 751, L, 949, 751, Q, 1020, 751, 1080, 750, L, 1117, 750, Q, 1137, 750, 1148, 759, 1264, 759, 1308, 767, 1310, 767, 1312, 768, L, 1337, 768, Q, 1335, 771, 1335, 774, L, 1567, 774, Q, 1568, 786, 1593, 784, 1651, 780, 1663, 781, L, 1714, 781, Q, 1721, 781, 1743, 794, L, 1923, 792, Q, 1927, 792, 1934, 803, 1968, 804, 2006, 803, 2010, 803, 2100, 801, 2102, 801, 2104, 801, L, 2177, 801, Q, 2199, 801, 2209, 805, 2220, 810, 2241, 810, 2403, 817, 2409, 820, L, 2693, 820, Q, 2711, 820, 2778, 828, 2831, 833, 2896, 830, 2925, 828, 2981, 835, 3042, 842, 3070, 842, 3070, 932, 3071, 976, L, 3071, 1053, Q, 3064, 1053, 3063, 1054, 3061, 1235, 3063, 1330, 3062, 1331, 3061, 1332, 3056, 1340, 3051, 1351, L, 3051, 1643, Q, 3051, 1647, 3052, 1651, 3052, 1692, 3039, 1765, 3039, 1777, 3044, 2001, 3044, 2002, 3044, 2003, 3044, 2004, 3044, 2006, 3036, 2172, 3037, 2237, 3032, 2245, 3031, 2264, 3030, 2283, 3029, 2346, 3027, 2409, 3035, 2421, 3028, 2428, 3023, 2431, L, 3022, 2773, Q, 3021, 2773, 3013, 2780, L, 3013, 3015, Q, 3013, 3032, 3002, 3278, 3015, 3278, 3028, 3267, 3039, 3258, 3058, 3258, 3078, 3258, 3093, 3269, 3107, 3280, 3120, 3295, 3132, 3309, 3142, 3322, 3152, 3334, 3167, 3359, 3182, 3384, 3260, 3470, L, 3268, 3470, Q, 3307, 3514, 3312, 3517, 3314, 3518, 3348, 3518, 3375, 3517, 3372, 3531, L, 3406, 3531, Q, 3431, 3492, 3431, 3490, 3431, 3484, 3427, 3480, L, 3427, 3473, 3465, 3472, 3465, 3482, 3507, 3483, Q, 3531, 3499, 3550, 3518, 3564, 3529, 3594, 3529, 3616, 3529, 3633, 3491, L, 3633, 3429, 3654, 3429, Q, 3668, 3445, 3689, 3471, 3707, 3488, 3727, 3491, L, 3727, 3502, 3749, 3502, Q, 3752, 3511, 3752, 3531, 3763, 3531, 3783, 3559, 3796, 3578, 3808, 3580, 3812, 3581, 3816, 3580, 3816, 3569, 3817, 3566, L, 3829, 3566, 3829, 3557, Q, 3818, 3552, 3820, 3538, L, 3810, 3538, Q, 3813, 3528, 3807, 3517, 3800, 3505, 3788, 3512, L, 3788, 3500, Q, 3785, 3499, 3781, 3499, L, 3781, 3471, 3788, 3471, Q, 3788, 3470, 3787, 3447, 3786, 3431, 3800, 3436, 3800, 3435, 3800, 3401, 3799, 3378, 3811, 3378, L, 3811, 3371, 3819, 3371, 3819, 3342, 3829, 3342, Q, 3828, 3337, 3828, 3327, L, 3846, 3327, 3845, 3282, Q, 3848, 3279, 3855, 3269, 3858, 3265, 3866, 3265, 3870, 3265, 3868, 3258, L, 3902, 3258, Q, 3901, 3261, 3900, 3262, L, 3900, 3269, 3912, 3269, 3912, 3260, 3924, 3260, 3924, 3269, 3926, 3270, 3946, 3270, 3946, 3220, Q, 3934, 3209, 3924, 3203, L, 3924, 3200, Q, 3928, 3200, 3934, 3199, 3938, 3198, 3968, 3203, 3992, 3207, 4011, 3205, 4035, 3201, 4034, 3222, L, 4033, 3256, Q, 4068, 3261, 4079, 3262, L, 4207, 3262, Q, 4213, 3187, 4212, 3111, 4208, 3105, 4208, 3091, 4209, 3076, 4209, 3053, 4208, 3030, 4212, 2937, 4219, 2937, 4966, 2940, 4968, 2872, 4968, 2868, 4965, 2806, 4965, 2775, L, 4965, 2286, 4978, 2285, Q, 4988, 2288, 5018, 2286, 5041, 2285, 5048, 2292, 5058, 2302, 5092, 2319, L, 5092, 2327, Q, 5097, 2326, 5103, 2328, L, 5115, 2328, Q, 5115, 2326, 5114, 2326, L, 5114, 2288, 5127, 2288, 5129, 2290, 5128, 2310, Q, 5134, 2308, 5139, 2314, 5143, 2321, 5150, 2319, L, 5150, 2326, Q, 5156, 2326, 5159, 2327, L, 5170, 2327, 5170, 2319, 5179, 2319, 5180, 2306, 5191, 2306, Q, 5192, 2307, 5196, 2307, L, 5196, 2326, 5203, 2326, 5204, 2336, Q, 5208, 2336, 5215, 2338, L, 5215, 2345, Q, 5217, 2345, 5218, 2346, L, 5229, 2346, 5229, 2203, 5237, 2203, Q, 5238, 2192, 5240, 2188, L, 5255, 2188, 5255, 2199, 5318, 2199, Q, 5320, 2183, 5348, 2181, 5362, 2180, 5391, 2181, 5391, 2179, 5393, 2177, L, 5393, 1953, Q, 5393, 1951, 5392, 1950, 5390, 1938, 5390, 1918, 5393, 1871, 5393, 1848, L, 5402, 1848, Q, 5417, 1853, 5454, 1853, L, 5631, 1851, Q, 5682, 1855, 5778, 1855, 5830, 1855, 5924, 1855, 5926, 1940, 5928, 2183, L, 6148, 2183, Q, 6368, 2182, 6457, 2183, L, 6458, 2182, 6457, 2180, Q, 6456, 2176, 6454, 2173, L, 6454, 2077, Q, 6453, 2075, 6453, 2073, 6448, 2029, 6448, 2012, 6451, 1976, 6451, 1959, 6666, 1962, 6767, 1962, L, 6767, 1959, Q, 6772, 1955, 6797, 1955, 6798, 1955, 6799, 1955, 6827, 1955, 6846, 1960, L, 6886, 1960, Q, 6890, 1888, 6891, 1839, 6890, 1837, 6890, 1835, 6888, 1771, 6888, 1767, L, 6888, 1637, 6925, 1637, Q, 6925, 1630, 6945, 1607, 6950, 1601, 6956, 1592, 6962, 1587, 6977, 1589, L, 6977, 1576, Q, 6972, 1569, 6965, 1571, L, 6965, 1556, 6976, 1556, Q, 6975, 1552, 6974, 1551, L, 6974, 1525, Q, 7005, 1525, 6997, 1510, L, 7044, 1511, Q, 7043, 1477, 7047, 1460, L, 7047, 1405, Q, 6920, 1409, 6891, 1405, 6861, 1402, 6831, 1404, 6804, 1408, 6795, 1408, 6781, 1408, 6777, 1399, 6772, 1390, 6772, 1362, L, 6776, 1295, Q, 6872, 1296, 7076, 1298, L, 7076, 1263, Q, 7076, 1262, 7071, 1252, L, 7071, 1192, Q, 7071, 1190, 7072, 1188, 7075, 1134, 7076, 990, 7075, 987, 7075, 984, 7074, 953, 7073, 936, L, 7073, 849, Q, 7073, 844, 7073, 840, 7073, 779, 7073, 776, 7073, 757, 7063, 750, L, 7063, 650, Q, 7060, 641, 7064, 630, 7069, 616, 7069, 612, 7065, 559, 7065, 527, 7065, 479, 7064, 454, L, 7062, 451, 7062, 450, 7062, 361, Q, 7062, 359, 7062, 357, 7067, 283, 7067, 233, 6673, 247, 6640, 242, L, 6639, 249, 6429, 251, Q, 6429, 252, 6424, 252, 6403, 254, 6309, 244, 6308, 244, 6308, 244, 6246, 249, 6227, 249, L, 6225, 249, Q, 5981, 251, 5829, 252, 5554, 252, 5318, 244, 5315, 243, 5313, 243, L, 5313, 242, Q, 5245, 242, 5207, 243, Z]],
      "label": "3rd district",
      "shortLabel": "3rd",
      "labelPosition": [473, 87.2],
      "labelAlignment": [CEN, MID]
    },
    "4": {
      "outlines": [[M, 5255, 2199, L, 5255, 2188, 5240, 2188, Q, 5238, 2192, 5237, 2203, L, 5229, 2203, 5229, 2346, 5218, 2346, Q, 5217, 2345, 5215, 2345, L, 5215, 2338, Q, 5208, 2336, 5204, 2336, L, 5203, 2326, 5196, 2326, 5196, 2307, Q, 5192, 2307, 5191, 2306, L, 5180, 2306, 5179, 2319, 5170, 2319, 5170, 2327, 5159, 2327, Q, 5156, 2326, 5150, 2326, L, 5150, 2319, Q, 5143, 2321, 5139, 2314, 5134, 2308, 5128, 2310, L, 5129, 2290, 5127, 2288, 5114, 2288, 5114, 2326, Q, 5115, 2326, 5115, 2328, L, 5103, 2328, Q, 5097, 2326, 5092, 2327, L, 5092, 2319, Q, 5058, 2302, 5048, 2292, 5041, 2285, 5018, 2286, 4988, 2288, 4978, 2285, L, 4965, 2286, 4965, 2775, Q, 4965, 2806, 4968, 2868, 4968, 2872, 4966, 2940, 4219, 2937, 4212, 2937, 4208, 3030, 4209, 3053, 4209, 3076, 4208, 3091, 4208, 3105, 4212, 3111, 4213, 3187, 4207, 3262, L, 4079, 3262, Q, 4068, 3261, 4033, 3256, L, 4034, 3222, Q, 4035, 3201, 4011, 3205, 3992, 3207, 3968, 3203, 3938, 3198, 3934, 3199, 3928, 3200, 3924, 3200, L, 3924, 3203, Q, 3934, 3209, 3946, 3220, L, 3946, 3270, 3926, 3270, 3924, 3269, 3924, 3260, 3912, 3260, 3912, 3269, 3900, 3269, 3900, 3262, Q, 3901, 3261, 3902, 3258, L, 3868, 3258, Q, 3870, 3265, 3866, 3265, 3858, 3265, 3855, 3269, 3848, 3279, 3845, 3282, L, 3846, 3327, 3828, 3327, Q, 3828, 3337, 3829, 3342, L, 3819, 3342, 3819, 3371, 3811, 3371, 3811, 3378, Q, 3799, 3378, 3800, 3401, 3800, 3435, 3800, 3436, 3786, 3431, 3787, 3447, 3788, 3470, 3788, 3471, L, 3781, 3471, 3781, 3499, Q, 3785, 3499, 3788, 3500, L, 3788, 3512, Q, 3800, 3505, 3807, 3517, 3813, 3528, 3810, 3538, L, 3820, 3538, Q, 3818, 3552, 3829, 3557, L, 3829, 3566, 3817, 3566, Q, 3816, 3569, 3816, 3580, 3812, 3581, 3808, 3580, 3807, 3595, 3809, 3621, 3809, 3638, 3804, 3639, 3800, 3640, 3800, 3659, 3800, 3679, 3807, 3679, 3802, 3701, 3816, 3718, 3828, 3733, 3846, 3736, 3854, 3737, 3860, 3745, 3864, 3752, 3874, 3752, L, 3915, 3752, 3915, 3761, 3974, 3761, 3974, 3752, 4004, 3752, 4004, 3741, 4046, 3741, Q, 4052, 3747, 4052, 3752, 4065, 3753, 4076, 3775, 4087, 3798, 4100, 3804, 4118, 3825, 4181, 3826, 4224, 3839, 4260, 3853, L, 4260, 3860, 4273, 3860, 4274, 3870, Q, 4292, 3870, 4298, 3874, L, 4298, 3860, Q, 4314, 3860, 4339, 3844, 4345, 3841, 4349, 3826, 4352, 3817, 4366, 3821, L, 4366, 3812, 4383, 3812, Q, 4388, 3817, 4388, 3823, 4425, 3815, 4445, 3836, 4456, 3848, 4477, 3874, 4490, 3883, 4512, 3907, 4515, 3910, 4532, 3920, 4535, 3921, 4549, 3940, 4550, 3940, 4550, 3940, 4551, 3941, 4553, 3943, L, 4559, 3943, 4559, 3952, 4579, 3952, Q, 4578, 3945, 4577, 3942, L, 4589, 3942, 4589, 3930, Q, 4613, 3924, 4624, 3915, 4626, 3914, 4626, 3899, 4631, 3894, 4633, 3887, 4639, 3867, 4651, 3849, 4664, 3831, 4674, 3831, L, 4674, 3824, Q, 4677, 3823, 4678, 3823, L, 4697, 3823, Q, 4697, 3826, 4695, 3828, L, 4706, 3828, 4706, 3842, 4738, 3842, 4738, 3853, 4823, 3853, Q, 4823, 3855, 4824, 3860, L, 4850, 3860, 4850, 3869, 4856, 3869, Q, 4856, 3879, 4866, 3879, 4876, 3879, 4881, 3865, 4893, 3860, 4897, 3856, 4919, 3831, 4917, 3823, L, 4934, 3823, 4934, 3838, 4943, 3838, 4943, 3850, 4953, 3850, Q, 4953, 3859, 4955, 3864, L, 4955, 3886, 4950, 3886, Q, 4953, 3894, 4947, 3896, 4936, 3900, 4934, 3901, 4927, 3908, 4927, 3925, 4927, 3955, 4946, 3946, 4948, 3954, 4945, 3978, 4944, 3999, 4958, 4001, 4958, 4004, 4959, 4016, 4964, 4016, 4978, 4017, L, 4978, 4025, 5030, 4025, Q, 5028, 4022, 5028, 4016, 5034, 4016, 5056, 4013, 5066, 4013, 5069, 4016, 5071, 4017, 5077, 4017, L, 5077, 4029, Q, 5089, 4026, 5102, 4026, L, 5102, 4063, Q, 5091, 4075, 5092, 4081, 5080, 4078, 5080, 4093, 5080, 4107, 5090, 4105, L, 5090, 4122, Q, 5079, 4128, 5073, 4132, 5063, 4139, 5063, 4147, 5063, 4157, 5123, 4176, 5137, 4180, 5146, 4193, 5146, 4193, 5159, 4199, 5165, 4203, 5167, 4209, L, 5198, 4211, 5198, 4200, 5223, 4200, Q, 5228, 4177, 5254, 4171, 5267, 4168, 5267, 4155, 5266, 4134, 5266, 4134, L, 5296, 4134, Q, 5285, 4110, 5307, 4103, 5337, 4094, 5339, 4091, 5355, 4073, 5357, 4061, 5357, 4055, 5368, 4047, 5377, 4041, 5376, 4034, L, 5402, 4034, 5402, 4046, Q, 5410, 4048, 5427, 4046, 5438, 4046, 5436, 4058, L, 5443, 4058, 5443, 4077, Q, 5445, 4076, 5456, 4076, L, 5456, 4063, 5466, 4063, Q, 5473, 4069, 5473, 4088, 5473, 4094, 5467, 4116, 5467, 4118, 5469, 4124, 5469, 4127, 5470, 4129, 5470, 4130, 5471, 4130, 5475, 4133, 5482, 4132, L, 5482, 4139, 5481, 4144, 5485, 4144, 5485, 4152, 5523, 4152, 5523, 4144, 5536, 4144, 5536, 4130, Q, 5550, 4135, 5551, 4135, L, 5561, 4135, 5561, 4124, Q, 5569, 4125, 5580, 4126, L, 5580, 4132, Q, 5614, 4136, 5615, 4192, 5614, 4206, 5610, 4209, 5606, 4211, 5606, 4227, 5606, 4238, 5607, 4240, 5608, 4241, 5618, 4242, L, 5618, 4249, Q, 5626, 4249, 5644, 4252, L, 5644, 4259, 5663, 4259, Q, 5665, 4251, 5666, 4246, L, 5703, 4246, Q, 5720, 4240, 5718, 4208, 5716, 4181, 5750, 4191, L, 5750, 4173, 5775, 4173, Q, 5784, 4192, 5820, 4192, L, 5820, 4174, 5833, 4174, Q, 5833, 4165, 5833, 4160, 5832, 4151, 5839, 4152, L, 5839, 4146, 5846, 4146, 5846, 4135, 5861, 4135, Q, 5869, 4139, 5883, 4144, 5892, 4150, 5893, 4161, 5894, 4166, 5894, 4184, 5895, 4201, 5904, 4199, 5904, 4207, 5906, 4219, 5906, 4225, 5888, 4238, 5869, 4252, 5870, 4269, 5870, 4286, 5878, 4284, 5875, 4292, 5879, 4294, 5885, 4298, 5886, 4306, 5886, 4314, 5887, 4330, 5887, 4332, 5887, 4333, 5890, 4335, 5908, 4360, 5923, 4381, 5942, 4376, 5942, 4377, 5944, 4385, L, 5968, 4385, Q, 5964, 4375, 5980, 4369, 5995, 4363, 5989, 4345, 5995, 4345, 5997, 4344, L, 5997, 4303, 5979, 4303, Q, 5984, 4300, 5983, 4286, 5983, 4272, 5992, 4270, 6007, 4266, 6027, 4252, L, 6027, 4231, 5995, 4231, 5995, 4221, Q, 5997, 4211, 5997, 4210, 6006, 4209, 6006, 4204, L, 6024, 4204, 6024, 4214, Q, 6041, 4217, 6045, 4217, 6053, 4217, 6065, 4209, 6073, 4202, 6076, 4197, 6076, 4196, 6077, 4195, 6080, 4189, 6087, 4175, 6096, 4161, 6104, 4161, L, 6104, 4140, Q, 6097, 4140, 6092, 4143, L, 6092, 4093, 6104, 4093, Q, 6104, 4103, 6107, 4106, L, 6126, 4106, Q, 6126, 4105, 6128, 4090, 6128, 4089, 6129, 4088, 6129, 4082, 6135, 4082, 6139, 4082, 6155, 4083, L, 6155, 4074, 6170, 4074, 6170, 4087, 6180, 4087, 6180, 4137, 6191, 4137, Q, 6188, 4150, 6203, 4173, 6219, 4197, 6218, 4209, 6234, 4209, 6238, 4210, 6234, 4202, 6242, 4202, 6252, 4202, 6253, 4193, 6252, 4178, 6267, 4178, 6274, 4178, 6277, 4189, 6296, 4189, 6298, 4191, 6305, 4195, 6305, 4209, 6316, 4224, 6325, 4243, L, 6349, 4243, Q, 6347, 4237, 6345, 4236, L, 6345, 4226, Q, 6355, 4227, 6371, 4227, 6379, 4226, 6387, 4230, 6385, 4214, 6403, 4210, L, 6403, 4173, 6412, 4172, Q, 6411, 4158, 6412, 4151, 6412, 4139, 6423, 4143, L, 6423, 4129, Q, 6441, 4129, 6441, 4149, L, 6454, 4149, 6454, 4154, Q, 6459, 4154, 6464, 4151, L, 6464, 4154, 6508, 4154, 6508, 4129, 6506, 4119, 6500, 4120, 6500, 4077, Q, 6504, 4075, 6510, 4076, L, 6510, 4054, Q, 6510, 4054, 6490, 4052, L, 6489, 4040, Q, 6488, 4041, 6481, 4041, 6481, 4027, 6480, 4023, L, 6472, 4023, 6472, 4005, Q, 6474, 4003, 6483, 4003, L, 6483, 3997, 6496, 3997, 6496, 4006, 6518, 4006, 6518, 3984, 6509, 3984, 6509, 3958, Q, 6510, 3957, 6510, 3954, L, 6516, 3954, Q, 6517, 3953, 6519, 3953, 6527, 3952, 6540, 3955, L, 6540, 3927, 6530, 3925, Q, 6532, 3914, 6519, 3903, 6506, 3890, 6509, 3880, 6506, 3877, 6506, 3871, 6506, 3862, 6506, 3858, 6503, 3858, 6496, 3861, L, 6496, 3850, Q, 6484, 3847, 6483, 3841, 6470, 3843, 6471, 3829, 6471, 3815, 6463, 3815, 6458, 3815, 6457, 3819, L, 6457, 3802, 6433, 3802, 6433, 3813, 6426, 3813, 6426, 3802, 6142, 3802, Q, 6138, 3718, 6138, 3715, 6140, 3640, 6140, 3605, L, 6199, 3605, 6199, 3384, Q, 6222, 3384, 6276, 3381, 6304, 3381, 6355, 3386, L, 6375, 3386, Q, 6375, 3378, 6376, 3376, L, 6395, 3376, 6395, 3383, Q, 6466, 3386, 6476, 3386, 6486, 3385, 6517, 3386, 6558, 3385, 6564, 3382, L, 6575, 3382, Q, 6581, 3263, 6576, 3204, 6573, 3173, 6577, 3163, 6641, 3162, 6674, 3161, L, 6685, 3161, Q, 6685, 3162, 6685, 3164, 6685, 3162, 6686, 3161, 6687, 3151, 6687, 3132, 6687, 3108, 6684, 3091, L, 6683, 3028, Q, 6683, 2974, 6687, 2970, L, 6687, 2861, 6674, 2861, 6674, 2878, 6662, 2878, Q, 6662, 2885, 6661, 2889, L, 6648, 2889, 6648, 2872, Q, 6642, 2874, 6640, 2872, 6637, 2869, 6633, 2867, L, 6602, 2867, 6602, 2880, 6590, 2880, 6588, 2878, 6588, 2894, Q, 6586, 2906, 6578, 2917, 6568, 2930, 6566, 2936, L, 6546, 2936, 6546, 2925, 6540, 2925, Q, 6539, 2911, 6539, 2905, L, 6531, 2905, Q, 6529, 2872, 6524, 2858, L, 6510, 2858, 6509, 2868, 6493, 2868, 6493, 2880, Q, 6479, 2875, 6480, 2889, L, 6435, 2889, Q, 6427, 2869, 6427, 2861, 6427, 2857, 6430, 2854, 6407, 2850, 6403, 2849, 6404, 2842, 6393, 2842, 6388, 2842, 6379, 2853, 6371, 2863, 6362, 2862, L, 6362, 2872, Q, 6372, 2881, 6393, 2894, L, 6393, 2927, 6386, 2927, 6386, 2936, 6376, 2936, 6376, 2947, 6344, 2947, 6344, 2928, Q, 6336, 2922, 6335, 2919, 6334, 2906, 6330, 2903, 6321, 2898, 6323, 2889, L, 6304, 2889, 6304, 2900, 6289, 2900, Q, 6289, 2894, 6286, 2888, 6286, 2887, 6286, 2885, 6285, 2860, 6285, 2852, 6285, 2838, 6264, 2838, 6245, 2838, 6244, 2848, 6228, 2849, 6221, 2849, L, 6221, 2859, 6196, 2859, Q, 6182, 2859, 6177, 2837, 6172, 2814, 6158, 2813, 6160, 2801, 6144, 2801, 6135, 2801, 6134, 2809, 6119, 2800, 6121, 2829, 6112, 2828, 6107, 2837, 6100, 2852, 6099, 2854, L, 6085, 2866, Q, 6076, 2873, 6075, 2880, 6055, 2880, 6048, 2881, L, 6041, 2881, 6041, 2871, 6014, 2871, Q, 6009, 2851, 5983, 2849, 5947, 2851, 5928, 2850, L, 5930, 2741, Q, 5933, 2593, 5924, 2514, L, 5935, 2514, Q, 5936, 2515, 5939, 2515, L, 5939, 2490, Q, 5939, 2468, 5938, 2457, 5936, 2436, 5926, 2440, L, 5926, 2296, Q, 5899, 2300, 5878, 2300, 5878, 2300, 5874, 2300, 5862, 2299, 5810, 2299, L, 5810, 2163, 5647, 2163, Q, 5647, 2234, 5640, 2290, L, 5392, 2290, Q, 5391, 2256, 5391, 2181, 5362, 2180, 5348, 2181, 5320, 2183, 5318, 2199, Z]],
      "label": "4th district",
      "shortLabel": "4th",
      "labelPosition": [523.4, 327.4],
      "labelAlignment": [CEN, MID]
    },
    "5": {
      "outlines": [[M, 6457, 2185, Q, 6368, 2184, 6148, 2185, L, 5928, 2185, Q, 5926, 1942, 5924, 1857, 5830, 1857, 5778, 1857, 5682, 1857, 5631, 1853, L, 5454, 1855, Q, 5417, 1855, 5402, 1850, L, 5393, 1850, Q, 5393, 1873, 5390, 1920, 5390, 1940, 5392, 1952, 5393, 1953, 5393, 1955, L, 5393, 2183, Q, 5392, 2183, 5391, 2183, 5391, 2258, 5392, 2292, L, 5640, 2292, Q, 5647, 2236, 5647, 2165, L, 5810, 2165, 5810, 2301, Q, 5862, 2301, 5874, 2302, 5878, 2302, 5878, 2302, 5899, 2302, 5926, 2298, L, 5926, 2442, Q, 5936, 2438, 5938, 2459, 5939, 2470, 5939, 2492, L, 5939, 2517, Q, 5936, 2517, 5935, 2516, L, 5924, 2516, Q, 5933, 2595, 5930, 2743, L, 5931, 2747, 5930, 2747, 5928, 2852, Q, 5947, 2853, 5983, 2851, 6009, 2853, 6014, 2873, L, 6041, 2873, 6041, 2883, 6048, 2883, Q, 6055, 2882, 6075, 2882, 6076, 2875, 6085, 2868, L, 6099, 2856, Q, 6100, 2854, 6107, 2839, 6112, 2830, 6121, 2831, 6119, 2802, 6134, 2811, 6135, 2803, 6144, 2803, 6160, 2803, 6158, 2815, 6172, 2816, 6177, 2839, 6182, 2861, 6196, 2861, L, 6221, 2861, 6221, 2851, Q, 6228, 2851, 6244, 2850, 6245, 2840, 6264, 2840, 6285, 2840, 6285, 2854, 6285, 2862, 6286, 2887, 6286, 2889, 6286, 2890, 6289, 2896, 6289, 2902, L, 6304, 2902, 6304, 2891, 6323, 2891, Q, 6321, 2900, 6330, 2905, 6334, 2908, 6335, 2921, 6336, 2924, 6344, 2930, L, 6344, 2949, 6376, 2949, 6376, 2938, 6386, 2938, 6386, 2929, 6393, 2929, 6393, 2896, Q, 6372, 2883, 6362, 2874, L, 6362, 2864, Q, 6371, 2865, 6379, 2855, 6388, 2844, 6393, 2844, 6404, 2844, 6403, 2851, 6407, 2852, 6430, 2856, 6427, 2859, 6427, 2863, 6427, 2871, 6435, 2891, L, 6480, 2891, Q, 6479, 2877, 6493, 2882, L, 6493, 2870, 6509, 2870, 6510, 2860, 6524, 2860, Q, 6529, 2874, 6531, 2907, L, 6539, 2907, Q, 6539, 2913, 6540, 2927, L, 6546, 2927, 6546, 2938, 6566, 2938, Q, 6568, 2932, 6578, 2919, 6586, 2908, 6588, 2896, L, 6588, 2844, Q, 6592, 2765, 6591, 2624, 6597, 2618, 6648, 2618, L, 6648, 2512, Q, 6643, 2495, 6645, 2192, 6644, 2190, 6643, 2188, 6640, 2186, 6634, 2184, L, 6627, 2184, 6627, 2193, 6610, 2193, 6610, 2187, 6601, 2187, Q, 6595, 2194, 6595, 2215, 6587, 2214, 6580, 2219, L, 6564, 2220, Q, 6547, 2193, 6533, 2193, 6526, 2193, 6518, 2201, 6511, 2209, 6510, 2213, 6529, 2220, 6546, 2257, L, 6546, 2272, 6537, 2272, Q, 6535, 2265, 6521, 2261, 6505, 2259, 6501, 2257, 6500, 2248, 6499, 2243, 6490, 2242, 6484, 2251, 6477, 2259, 6478, 2268, L, 6457, 2268, 6452, 2264, 6452, 2242, 6461, 2242, Q, 6461, 2203, 6459, 2185, Q, 6458, 2185, 6457, 2185, Z]],
      "label": "5th district",
      "shortLabel": "5th",
      "labelPosition": [624.3, 249.3],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'oklahomacongressional',
  type: 'maps'
};

/***/ })

/******/ });
}));