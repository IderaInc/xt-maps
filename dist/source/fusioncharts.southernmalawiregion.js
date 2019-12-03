
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(7);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 7:
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
 * @id fusionmaps.SouthernMalawiRegion.1.10-30-2018 08:56:51
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
  "name": "SouthernMalawiRegion",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 330,
  "baseHeight": 700,
  "baseScaleFactor": 10,
  "firstEntity": "MW.SO.BA",
  "entities": {
    "MW.SO.BA": {
      "outlines": [[M, 1774, 2460, Q, 1555, 2458, 1475, 2458, 1478, 2482, 1478, 2538, 1478, 2617, 1473, 2643, 1465, 2685, 1426, 2777, 1413, 2806, 1378, 2885, 1351, 2956, 1355, 3009, 1355, 3011, 1356, 3014, 1346, 3050, 1335, 3076, 1324, 3103, 1303, 3138, 1289, 3161, 1264, 3202, 1244, 3235, 1230, 3263, 1230, 3278, 1226, 3332, 1222, 3380, 1223, 3418, 1224, 3437, 1225, 3465, 1225, 3486, 1219, 3500, 1238, 3500, 1349, 3493, 1459, 3486, 1467, 3486, 1487, 3486, 1493, 3493, 1513, 3520, 1517, 3525, 1532, 3540, 1543, 3557, 1551, 3569, 1555, 3572, 1557, 3574, 1559, 3573, 1560, 3573, 1560, 3572, 1564, 3571, 1570, 3568, 1577, 3564, 1602, 3539, 1627, 3514, 1638, 3498, 1649, 3480, 1675, 3462, 1699, 3446, 1718, 3441, 1737, 3436, 1746, 3401, 1760, 3351, 1761, 3349, 1779, 3313, 1793, 3295, 1807, 3277, 1811, 3279, 1815, 3281, 1820, 3270, 1825, 3262, 1834, 3271, 1845, 3269, 1857, 3258, 1860, 3255, 1868, 3254, 1880, 3252, 1885, 3250, 1889, 3248, 1892, 3237, 1894, 3226, 1894, 3223, 1895, 3220, 1899, 3212, 1903, 3205, 1903, 3198, L, 1903, 3132, Q, 1903, 3124, 1911, 3105, 1918, 3088, 1916, 3080, 1917, 3074, 1927, 3042, 1935, 3013, 1935, 2999, 1934, 2968, 1935, 2955, 1937, 2935, 1945, 2919, 1953, 2891, 1957, 2877, 1961, 2862, 1961, 2842, 1962, 2832, 1973, 2804, 1979, 2785, 1979, 2773, 1976, 2762, 1984, 2737, 1993, 2709, 1993, 2704, 1996, 2666, 2016, 2639, 2020, 2634, 2022, 2622, 2025, 2607, 2026, 2604, 2026, 2597, 2030, 2587, 2035, 2574, 2036, 2570, L, 2036, 2434, Q, 2031, 2434, 2023, 2434, 1990, 2434, 1981, 2430, 1948, 2416, 1932, 2411, 1924, 2408, 1915, 2399, 1913, 2395, 1904, 2382, 1899, 2375, 1891, 2373, 1883, 2373, 1880, 2372, 1876, 2371, 1873, 2365, 1870, 2360, 1865, 2360, 1862, 2360, 1846, 2380, 1828, 2401, 1825, 2413, 1812, 2447, 1803, 2454, Q, 1796, 2460, 1774, 2460, Z]],
      "label": "Balaka",
      "shortLabel": "BA",
      "labelPosition": [162.7, 296.6],
      "labelAlignment": [CEN, MID],
      "nextId": "MW.SO.BL"
    },
    "MW.SO.BL": {
      "outlines": [[M, 1559, 3573, Q, 1557, 3574, 1555, 3572, 1542, 3581, 1496, 3580, 1428, 3579, 1419, 3580, 1395, 3578, 1384, 3579, 1365, 3580, 1356, 3598, 1352, 3604, 1331, 3630, 1313, 3654, 1309, 3662, 1256, 3773, 1244, 3800, 1230, 3832, 1213, 3879, 1197, 3916, 1167, 3951, 1144, 3972, 1087, 4016, 1076, 4025, 1056, 4055, 1036, 4087, 1035, 4099, 1035, 4103, 1031, 4121, 1027, 4137, 1027, 4146, L, 1027, 4202, Q, 1027, 4224, 1012, 4255, 996, 4285, 996, 4300, L, 997, 4356, Q, 1003, 4370, 1006, 4374, 1021, 4411, 1035, 4443, 1038, 4448, 1044, 4453, 1060, 4464, 1088, 4459, 1105, 4456, 1130, 4457, 1164, 4459, 1169, 4459, 1179, 4458, 1184, 4462, 1187, 4464, 1194, 4472, 1196, 4472, 1205, 4475, 1211, 4477, 1213, 4483, 1214, 4492, 1215, 4532, 1216, 4544, 1219, 4581, L, 1219, 4592, Q, 1217, 4616, 1198, 4643, 1184, 4661, 1174, 4670, 1172, 4675, 1172, 4696, L, 1172, 4717, Q, 1172, 4720, 1178, 4724, 1187, 4728, 1190, 4730, 1213, 4753, 1227, 4754, 1239, 4754, 1246, 4760, 1260, 4769, 1265, 4772, 1271, 4774, 1282, 4774, 1293, 4774, 1296, 4775, 1298, 4777, 1303, 4792, 1306, 4798, 1309, 4814, 1311, 4824, 1317, 4834, 1321, 4841, 1327, 4843, 1329, 4845, 1335, 4847, 1339, 4848, 1345, 4850, 1346, 4850, 1347, 4850, L, 1365, 4846, Q, 1368, 4845, 1370, 4840, 1373, 4833, 1373, 4831, 1380, 4815, 1394, 4797, 1403, 4784, 1417, 4759, 1430, 4733, 1437, 4723, 1442, 4715, 1450, 4705, 1459, 4695, 1462, 4690, 1467, 4678, 1471, 4675, 1475, 4671, 1478, 4670, 1481, 4669, 1484, 4666, 1495, 4651, 1516, 4652, L, 1556, 4654, Q, 1592, 4661, 1622, 4634, 1647, 4612, 1663, 4576, 1662, 4563, 1662, 4557, 1662, 4547, 1670, 4540, 1680, 4535, 1685, 4529, 1691, 4520, 1698, 4520, 1702, 4520, 1741, 4518, L, 1740, 4486, Q, 1739, 4441, 1735, 4439, 1731, 4436, 1731, 4434, 1729, 4431, 1728, 4424, 1728, 4416, 1728, 4402, L, 1726, 4065, Q, 1724, 4061, 1725, 4053, 1726, 4044, 1731, 4041, 1739, 4037, 1740, 4035, 1743, 4026, 1746, 4024, 1752, 4016, 1752, 4000, 1753, 3981, 1753, 3974, 1752, 3939, 1752, 3920, 1752, 3898, 1754, 3895, 1764, 3885, 1769, 3876, 1769, 3875, 1769, 3872, 1770, 3863, 1770, 3860, 1769, 3854, 1772, 3782, 1773, 3763, 1735, 3763, 1682, 3763, 1659, 3712, 1657, 3709, 1652, 3703, L, 1645, 3697, Q, 1635, 3679, 1633, 3676, 1627, 3670, 1624, 3668, 1620, 3663, 1620, 3657, 1617, 3642, 1618, 3636, L, 1618, 3628, Q, 1611, 3616, 1607, 3609, 1600, 3597, 1594, 3591, 1592, 3589, 1588, 3582, 1585, 3578, 1580, 3577, 1576, 3577, 1573, 3575, 1569, 3575, 1560, 3572, Q, 1560, 3573, 1559, 3573, Z]],
      "label": "Blantyre",
      "shortLabel": "BL",
      "labelPosition": [138.4, 421.1],
      "labelAlignment": [CEN, MID],
      "nextId": "MW.SO.CK"
    },
    "MW.SO.CK": {
      "outlines": [[M, 1169, 4459, Q, 1164, 4459, 1130, 4457, 1105, 4456, 1088, 4459, 1060, 4464, 1044, 4453, 1027, 4460, 965, 4460, 946, 4460, 942, 4459, 933, 4457, 933, 4450, 935, 4437, 935, 4430, 935, 4418, 930, 4414, L, 919, 4402, Q, 914, 4399, 911, 4397, 907, 4393, 906, 4390, 902, 4375, 899, 4372, 893, 4365, 875, 4368, 856, 4371, 834, 4359, 826, 4355, 814, 4355, 794, 4355, 787, 4354, 782, 4353, 772, 4345, 763, 4338, 752, 4340, 745, 4341, 731, 4335, 717, 4329, 716, 4329, 704, 4329, 689, 4344, 686, 4347, 676, 4349, 666, 4352, 664, 4355, 654, 4369, 640, 4369, 631, 4368, 627, 4369, 622, 4370, 613, 4379, 596, 4398, 593, 4401, 578, 4412, 566, 4418, 555, 4423, 531, 4422, 508, 4419, 497, 4411, 473, 4399, 436, 4386, 398, 4371, 375, 4361, 369, 4358, 363, 4353, 354, 4346, 348, 4343, 339, 4337, 322, 4321, 305, 4304, 298, 4297, 286, 4286, 272, 4282, 264, 4294, 252, 4298, 232, 4305, 222, 4314, 218, 4318, 204, 4324, 194, 4329, 184, 4343, 181, 4347, 176, 4359, 173, 4370, 169, 4375, 162, 4381, 137, 4396, 105, 4417, 82, 4443, 49, 4480, 49, 4514, 49, 4530, 68, 4554, 78, 4566, 91, 4580, 116, 4626, 142, 4655, 165, 4680, 214, 4696, 266, 4713, 289, 4734, 339, 4776, 380, 4804, 398, 4821, 398, 4882, 398, 4955, 368, 4974, 339, 4993, 339, 5033, 339, 5080, 371, 5155, 404, 5230, 441, 5262, 454, 5273, 488, 5283, 526, 5294, 545, 5305, 590, 5334, 621, 5389, 671, 5466, 689, 5489, 699, 5503, 713, 5513, 721, 5518, 739, 5529, 743, 5532, 765, 5537, 785, 5541, 791, 5549, 807, 5568, 820, 5604, 833, 5640, 845, 5656, 856, 5670, 884, 5692, 900, 5704, 928, 5724, 942, 5736, 990, 5730, 1035, 5725, 1048, 5740, 1066, 5762, 1067, 5795, 1068, 5831, 1085, 5852, 1097, 5870, 1131, 5891, 1151, 5903, 1187, 5924, 1201, 5932, 1204, 5952, 1206, 5963, 1208, 5983, 1210, 5991, 1216, 6044, 1217, 6059, 1230, 6068, 1238, 6074, 1262, 6087, 1293, 6107, 1309, 6140, 1312, 6145, 1314, 6150, 1327, 6130, 1330, 6127, 1335, 6120, 1352, 6106, 1377, 6082, 1395, 6071, 1399, 6067, 1414, 6047, 1426, 6027, 1434, 6022, 1437, 6019, 1442, 6013, 1446, 6006, 1449, 6001, 1458, 5975, 1459, 5972, L, 1475, 5940, Q, 1478, 5934, 1483, 5928, 1490, 5921, 1493, 5917, 1514, 5890, 1530, 5875, 1557, 5847, 1571, 5827, 1573, 5824, 1575, 5814, 1578, 5803, 1581, 5798, 1586, 5789, 1589, 5778, 1589, 5776, 1589, 5774, 1597, 5754, 1608, 5727, 1609, 5716, 1614, 5701, 1620, 5686, 1620, 5678, 1620, 5669, 1627, 5653, 1635, 5637, 1638, 5631, 1650, 5590, 1656, 5576, 1667, 5547, 1666, 5524, 1665, 5517, 1669, 5511, 1674, 5500, 1674, 5500, L, 1679, 5477, Q, 1680, 5466, 1691, 5453, 1704, 5440, 1708, 5436, 1714, 5418, 1720, 5413, 1730, 5400, 1735, 5396, 1730, 5387, 1715, 5375, 1695, 5357, 1650, 5331, 1613, 5311, 1598, 5292, 1592, 5285, 1580, 5269, 1568, 5252, 1564, 5248, 1551, 5236, 1548, 5225, 1546, 5220, 1546, 5204, 1546, 5194, 1548, 5188, 1549, 5184, 1549, 5175, 1549, 5169, 1507, 5105, 1497, 5094, 1478, 5078, 1449, 5053, 1448, 5052, 1423, 5030, 1408, 4997, 1387, 4957, 1379, 4934, 1364, 4911, 1364, 4897, 1362, 4882, 1352, 4856, 1350, 4852, 1347, 4850, 1346, 4850, 1345, 4850, 1339, 4848, 1335, 4847, 1329, 4845, 1327, 4843, 1321, 4841, 1317, 4834, 1311, 4824, 1309, 4814, 1306, 4798, 1303, 4792, 1298, 4777, 1296, 4775, 1293, 4774, 1282, 4774, 1271, 4774, 1265, 4772, 1260, 4769, 1246, 4760, 1239, 4754, 1227, 4754, 1213, 4753, 1190, 4730, 1187, 4728, 1178, 4724, 1172, 4720, 1172, 4717, L, 1172, 4696, Q, 1172, 4675, 1174, 4670, 1184, 4661, 1198, 4643, 1217, 4616, 1219, 4592, L, 1219, 4581, Q, 1216, 4544, 1215, 4532, 1214, 4492, 1213, 4483, 1211, 4477, 1205, 4475, 1196, 4472, 1194, 4472, 1187, 4464, 1184, 4462, Q, 1179, 4458, 1169, 4459, Z]],
      "label": "Chikhwawa",
      "shortLabel": "CK",
      "labelPosition": [98.2, 521.6],
      "labelAlignment": [CEN, MID],
      "nextId": "MW.SO.CR"
    },
    "MW.SO.CR": {
      "outlines": [[M, 1944, 4012, Q, 1916, 3998, 1899, 3987, 1892, 3982, 1884, 3982, 1877, 3981, 1871, 3980, 1857, 3978, 1848, 3973, 1833, 3965, 1830, 3951, 1828, 3944, 1829, 3923, L, 1829, 3922, Q, 1827, 3904, 1827, 3897, 1827, 3890, 1819, 3889, 1808, 3889, 1805, 3886, 1801, 3881, 1790, 3881, 1778, 3882, 1774, 3881, 1770, 3881, 1769, 3876, 1764, 3885, 1754, 3895, 1752, 3898, 1752, 3920, 1752, 3939, 1753, 3974, 1753, 3981, 1752, 4000, 1752, 4016, 1746, 4024, 1743, 4026, 1740, 4035, 1739, 4037, 1731, 4041, 1726, 4044, 1725, 4053, 1724, 4061, 1726, 4065, L, 1728, 4402, Q, 1728, 4416, 1728, 4424, 1729, 4431, 1731, 4434, 1731, 4436, 1735, 4439, 1739, 4441, 1740, 4486, L, 1741, 4518, Q, 1746, 4518, 1763, 4518, 1780, 4519, 1783, 4519, 1785, 4518, 1794, 4520, 1803, 4521, 1807, 4520, 1810, 4519, 1824, 4529, 1837, 4539, 1851, 4538, 1858, 4537, 1865, 4542, 1873, 4547, 1878, 4548, 1883, 4550, 1894, 4551, 1902, 4554, 1909, 4562, 1912, 4565, 1922, 4568, 1932, 4570, 1935, 4572, 1947, 4583, 1948, 4597, 1948, 4602, 1947, 4611, 1947, 4619, 1953, 4624, 1959, 4630, 1962, 4645, 1970, 4653, 1991, 4676, 2007, 4691, 2017, 4705, L, 2042, 4743, Q, 2045, 4746, 2049, 4757, 2055, 4769, 2058, 4774, 2066, 4786, 2086, 4845, 2087, 4849, 2098, 4883, 2097, 4909, 2115, 4911, 2116, 4906, 2120, 4906, 2127, 4906, 2128, 4899, L, 2128, 4876, Q, 2127, 4872, 2132, 4865, 2139, 4857, 2139, 4856, 2140, 4853, 2140, 4830, 2139, 4821, 2143, 4802, 2148, 4778, 2148, 4777, 2148, 4714, 2148, 4712, 2148, 4654, 2146, 4640, 2142, 4619, 2140, 4559, 2139, 4557, 2139, 4554, 2139, 4550, 2139, 4542, 2139, 4527, 2134, 4518, 2127, 4505, 2125, 4492, 2123, 4469, 2122, 4463, 2115, 4440, 2115, 4437, 2113, 4402, 2107, 4379, 2102, 4364, 2101, 4349, 2101, 4347, 2101, 4322, L, 2101, 4293, Q, 2101, 4284, 2110, 4274, 2117, 4259, 2122, 4253, 2123, 4251, 2136, 4251, L, 2147, 4246, Q, 2154, 4242, 2159, 4239, 2167, 4234, 2174, 4235, 2193, 4235, 2204, 4230, 2221, 4221, 2223, 4220, 2231, 4218, 2234, 4208, 2225, 4207, 2218, 4204, 2200, 4191, 2190, 4192, 2176, 4194, 2157, 4184, 2139, 4175, 2126, 4177, L, 2122, 4177, Q, 2101, 4164, 2096, 4163, 2081, 4159, 2074, 4156, 2059, 4150, 2032, 4127, 1997, 4103, 1995, 4095, 1993, 4089, 1984, 4071, 1974, 4054, 1972, 4047, Q, 1964, 4026, 1944, 4012, Z]],
      "label": "Chiradzulu",
      "shortLabel": "CR",
      "labelPosition": [189.7, 432.9],
      "labelAlignment": [CEN, MID],
      "nextId": "MW.SO.MA"
    },
    "MW.SO.MA": {
      "outlines": [[M, 2965, 2075, L, 2853, 2075, Q, 2784, 2074, 2747, 2087, 2710, 2101, 2698, 2104, 2682, 2108, 2672, 2116, 2656, 2127, 2652, 2130, 2642, 2135, 2628, 2136, 2614, 2136, 2605, 2142, 2597, 2147, 2587, 2157, 2577, 2168, 2569, 2172, 2550, 2183, 2545, 2212, L, 2539, 2255, Q, 2538, 2258, 2515, 2291, 2498, 2316, 2495, 2334, 2492, 2350, 2467, 2375, 2454, 2387, 2432, 2407, 2420, 2421, 2399, 2433, 2381, 2446, 2367, 2449, 2365, 2450, 2363, 2450, 2330, 2468, 2289, 2448, 2257, 2431, 2231, 2416, 2218, 2407, 2168, 2366, 2127, 2331, 2119, 2331, 2107, 2331, 2093, 2353, 2082, 2369, 2075, 2388, 2074, 2389, 2065, 2403, 2058, 2413, 2057, 2419, 2055, 2430, 2045, 2433, 2043, 2434, 2036, 2434, L, 2036, 2570, Q, 2035, 2574, 2030, 2587, 2026, 2597, 2026, 2604, 2025, 2607, 2022, 2622, 2020, 2634, 2016, 2639, 1996, 2666, 1993, 2704, 1993, 2709, 1984, 2737, 1976, 2762, 1979, 2773, 1979, 2785, 1973, 2804, 1962, 2832, 1961, 2842, 1961, 2862, 1957, 2877, 1953, 2891, 1945, 2919, 1937, 2935, 1935, 2955, 1934, 2968, 1935, 2999, 1935, 3013, 1927, 3042, 1917, 3074, 1916, 3080, 1918, 3088, 1911, 3105, 1903, 3124, 1903, 3132, L, 1903, 3198, Q, 1903, 3205, 1899, 3212, 1895, 3220, 1894, 3223, 1894, 3226, 1892, 3237, 1889, 3248, 1885, 3250, 1880, 3252, 1868, 3254, 1860, 3255, 1857, 3258, 1845, 3269, 1834, 3271, 1836, 3272, 1837, 3274, L, 1852, 3298, Q, 1857, 3313, 1874, 3318, 1888, 3321, 1900, 3328, 1914, 3336, 1929, 3340, 1940, 3343, 1961, 3358, 1984, 3374, 1989, 3375, 2003, 3380, 2018, 3385, 2022, 3387, 2040, 3387, 2058, 3387, 2089, 3370, 2119, 3353, 2126, 3342, 2129, 3336, 2129, 3321, 2129, 3306, 2133, 3297, 2134, 3294, 2146, 3277, 2157, 3263, 2157, 3254, L, 2177, 3254, Q, 2203, 3270, 2253, 3285, 2315, 3303, 2324, 3307, 2332, 3310, 2356, 3330, 2375, 3345, 2389, 3344, 2398, 3342, 2409, 3348, 2415, 3350, 2428, 3358, 2433, 3360, 2444, 3360, 2451, 3361, 2466, 3360, 2497, 3360, 2511, 3351, 2533, 3333, 2562, 3317, 2566, 3315, 2577, 3313, 2590, 3313, 2593, 3311, 2595, 3310, 2604, 3303, 2611, 3297, 2619, 3297, L, 2668, 3297, Q, 2669, 3297, 2672, 3296, 2683, 3295, 2706, 3288, 2733, 3281, 2751, 3282, 2768, 3284, 2784, 3278, 2796, 3273, 2817, 3261, 2848, 3235, 2872, 3216, 2918, 3178, 2932, 3178, 2947, 3178, 2969, 3202, 2990, 3225, 3020, 3223, 3020, 3220, 3020, 3217, 3020, 3190, 3138, 3013, 3255, 2837, 3255, 2767, 3255, 2719, 3224, 2701, 3193, 2683, 3193, 2666, 3193, 2660, 3202, 2641, 3210, 2622, 3210, 2614, L, 3212, 2485, Q, 3211, 2454, 3201, 2392, 3188, 2316, 3188, 2282, 3188, 2250, 3162, 2227, 3150, 2216, 3118, 2199, 3108, 2193, 3083, 2166, 3059, 2142, 3036, 2132, Q, 2996, 2116, 2965, 2075, Z]],
      "label": "Machinga",
      "shortLabel": "MA",
      "labelPosition": [254.5, 273.1],
      "labelAlignment": [CEN, MID],
      "nextId": "MW.SO.MG"
    },
    "MW.SO.MG": {
      "outlines": [[M, 1490, 199, Q, 1479, 186, 1477, 185, 1453, 170, 1443, 160, 1418, 138, 1388, 100, 1376, 84, 1348, 72, 1323, 61, 1306, 60, 1291, 60, 1287, 59, 1277, 56, 1269, 48, 1265, 43, 1251, 43, 1236, 42, 1232, 41, L, 1206, 41, Q, 1201, 76, 1190, 88, 1181, 97, 1181, 129, 1181, 156, 1188, 173, 1198, 199, 1203, 234, 1210, 281, 1213, 302, 1213, 304, 1213, 345, 1213, 362, 1208, 412, 1216, 450, 1239, 450, 1260, 449, 1292, 451, 1321, 453, 1386, 462, 1394, 464, 1425, 467, 1455, 470, 1515, 467, 1572, 461, 1589, 487, 1604, 513, 1636, 578, 1668, 642, 1676, 660, 1679, 665, 1688, 703, 1697, 739, 1705, 750, 1712, 761, 1731, 788, 1749, 812, 1755, 832, 1762, 855, 1775, 913, 1789, 965, 1810, 986, 1833, 1038, 1848, 1115, 1870, 1225, 1877, 1252, 1889, 1290, 1902, 1310, 1906, 1315, 1916, 1334, 1927, 1353, 1938, 1365, 1950, 1378, 1950, 1436, 1949, 1494, 1974, 1506, 1988, 1520, 1996, 1542, 2011, 1576, 2013, 1580, 2028, 1607, 2050, 1631, 2060, 1641, 2060, 1670, 2060, 1705, 2043, 1749, 2026, 1792, 2011, 1793, L, 2010, 1793, Q, 2005, 1791, 1968, 1760, 1918, 1717, 1894, 1703, 1863, 1685, 1845, 1638, 1822, 1575, 1814, 1565, 1787, 1528, 1749, 1495, 1712, 1462, 1691, 1434, 1650, 1378, 1647, 1375, 1625, 1348, 1589, 1328, 1540, 1302, 1514, 1288, 1467, 1262, 1439, 1241, 1417, 1226, 1407, 1218, 1391, 1204, 1388, 1185, 1388, 1168, 1387, 1153, 1385, 1125, 1379, 1112, 1373, 1099, 1335, 1056, 1308, 1024, 1308, 989, 1308, 973, 1281, 949, 1263, 933, 1248, 924, 1235, 910, 1226, 900, 1208, 881, 1190, 881, 1173, 881, 1167, 889, 1164, 893, 1164, 904, 1164, 922, 1174, 922, 1185, 924, 1190, 948, 1196, 980, 1196, 1000, 1196, 1041, 1192, 1060, 1187, 1079, 1187, 1121, 1187, 1142, 1192, 1156, 1201, 1186, 1199, 1190, 1200, 1222, 1196, 1253, 1190, 1283, 1155, 1277, L, 1155, 1289, Q, 1155, 1297, 1163, 1370, 1163, 1429, 1158, 1434, 1129, 1443, 1080, 1460, 1056, 1468, 1021, 1512, 1009, 1527, 999, 1537, 992, 1542, 983, 1547, 977, 1550, 970, 1551, L, 970, 1575, Q, 971, 1589, 975, 1599, 978, 1609, 984, 1613, 995, 1622, 1014, 1636, 1028, 1649, 1028, 1667, 1028, 1679, 1016, 1696, 1004, 1714, 1006, 1739, 1006, 1762, 1002, 1812, 1000, 1862, 1006, 1900, 1009, 1914, 1029, 1932, 1044, 1947, 1057, 1953, 1071, 1961, 1085, 1972, 1105, 1988, 1105, 2002, 1105, 2010, 1087, 2017, 1068, 2024, 1068, 2034, 1068, 2057, 1080, 2067, 1092, 2077, 1121, 2083, 1137, 2086, 1158, 2110, 1169, 2123, 1187, 2147, 1198, 2162, 1229, 2219, 1263, 2271, 1303, 2283, 1317, 2293, 1376, 2337, 1417, 2366, 1438, 2385, 1466, 2410, 1475, 2456, 1475, 2457, 1475, 2458, 1555, 2458, 1774, 2460, 1796, 2460, 1803, 2454, 1812, 2447, 1825, 2413, 1828, 2401, 1846, 2380, 1862, 2360, 1865, 2360, 1870, 2360, 1873, 2365, 1876, 2371, 1880, 2372, 1883, 2373, 1891, 2373, 1899, 2375, 1904, 2382, 1913, 2395, 1915, 2399, 1924, 2408, 1932, 2411, 1948, 2416, 1981, 2430, 1990, 2434, 2023, 2434, 2031, 2434, 2036, 2434, 2043, 2434, 2045, 2433, 2055, 2430, 2057, 2419, 2058, 2413, 2065, 2403, 2074, 2389, 2075, 2388, 2082, 2369, 2093, 2353, 2107, 2331, 2119, 2331, 2127, 2331, 2168, 2366, 2218, 2407, 2231, 2416, 2257, 2431, 2289, 2448, 2330, 2468, 2363, 2450, 2365, 2450, 2367, 2449, 2381, 2446, 2399, 2433, 2420, 2421, 2432, 2407, 2454, 2387, 2467, 2375, 2492, 2350, 2495, 2334, 2498, 2316, 2515, 2291, 2538, 2258, 2539, 2255, L, 2545, 2212, Q, 2550, 2183, 2569, 2172, 2577, 2168, 2587, 2157, 2597, 2147, 2605, 2142, 2614, 2136, 2628, 2136, 2642, 2135, 2652, 2130, 2656, 2127, 2672, 2116, 2682, 2108, 2698, 2104, 2710, 2101, 2747, 2087, 2784, 2074, 2853, 2075, L, 2965, 2075, Q, 2957, 2066, 2950, 2054, 2893, 1967, 2882, 1954, 2867, 1938, 2823, 1873, 2778, 1807, 2747, 1772, 2608, 1587, 2604, 1582, 2516, 1459, 2469, 1353, 2468, 1349, 2448, 1332, 2421, 1310, 2419, 1309, 2410, 1300, 2397, 1280, 2384, 1259, 2381, 1257, 2359, 1236, 2343, 1198, 2335, 1180, 2324, 1140, 2316, 1098, 2309, 1079, 2297, 1049, 2267, 1026, 2232, 1008, 2212, 997, 2181, 980, 2176, 960, 2175, 957, 2175, 955, 2153, 923, 2090, 878, 2011, 820, 1985, 792, 1964, 770, 1929, 692, 1902, 630, 1848, 596, 1822, 581, 1809, 545, 1793, 503, 1777, 486, 1725, 431, 1680, 388, 1549, 250, 1507, 217, 1505, 214, 1503, 213, Q, 1498, 208, 1490, 199, Z]],
      "label": "Mangochi",
      "shortLabel": "MG",
      "labelPosition": [147.9, 186.5],
      "labelAlignment": [CEN, MID],
      "nextId": "MW.SO.MJ"
    },
    "MW.SO.MJ": {
      "outlines": [[M, 2465, 4193, Q, 2463, 4184, 2458, 4175, 2456, 4171, 2455, 4166, L, 2404, 4166, Q, 2395, 4165, 2380, 4169, 2354, 4176, 2349, 4177, 2328, 4175, 2318, 4178, 2315, 4178, 2307, 4183, 2298, 4189, 2292, 4190, 2281, 4192, 2278, 4193, 2273, 4195, 2270, 4199, 2264, 4206, 2258, 4207, 2255, 4208, 2244, 4208, 2239, 4208, 2234, 4208, 2231, 4218, 2223, 4220, 2221, 4221, 2204, 4230, 2193, 4235, 2174, 4235, 2167, 4234, 2159, 4239, 2154, 4242, 2147, 4246, L, 2136, 4251, Q, 2123, 4251, 2122, 4253, 2117, 4259, 2110, 4274, 2101, 4284, 2101, 4293, L, 2101, 4322, Q, 2101, 4347, 2101, 4349, 2102, 4364, 2107, 4379, 2113, 4402, 2115, 4437, 2115, 4440, 2122, 4463, 2123, 4469, 2125, 4492, 2127, 4505, 2134, 4518, 2139, 4527, 2139, 4542, 2139, 4550, 2139, 4554, 2139, 4557, 2140, 4559, 2142, 4619, 2146, 4640, 2148, 4654, 2148, 4712, 2148, 4714, 2148, 4777, 2148, 4778, 2143, 4802, 2139, 4821, 2140, 4830, 2140, 4853, 2139, 4856, 2139, 4857, 2132, 4865, 2127, 4872, 2128, 4876, L, 2128, 4899, Q, 2127, 4906, 2120, 4906, 2116, 4906, 2115, 4911, 2114, 4912, 2114, 4914, 2114, 4925, 2114, 4926, 2116, 4932, 2125, 4933, L, 2125, 4988, 2095, 5020, Q, 2093, 5032, 2090, 5043, 2088, 5048, 2088, 5062, 2088, 5076, 2090, 5081, 2091, 5086, 2096, 5102, 2098, 5109, 2098, 5121, 2096, 5143, 2096, 5145, L, 2098, 5237, Q, 2099, 5217, 2153, 5200, 2208, 5182, 2250, 5107, 2291, 5031, 2347, 5031, 2382, 5031, 2413, 5065, 2445, 5098, 2470, 5098, 2481, 5098, 2518, 5081, 2555, 5065, 2569, 5064, 2573, 5064, 2625, 5063, 2665, 5061, 2677, 5057, 2712, 5046, 2756, 5016, 2762, 5012, 2826, 4964, 2852, 4945, 2920, 4926, 2986, 4906, 3005, 4890, 3038, 4863, 3051, 4807, 3057, 4785, 3063, 4725, 3063, 4720, 3064, 4716, 3062, 4705, 3062, 4696, 3045, 4694, 3011, 4686, 2975, 4677, 2963, 4674, 2925, 4666, 2905, 4584, 2888, 4521, 2858, 4492, 2821, 4457, 2750, 4457, 2710, 4457, 2701, 4478, 2698, 4488, 2698, 4539, 2698, 4556, 2660, 4577, 2627, 4597, 2607, 4597, 2556, 4597, 2539, 4580, 2535, 4576, 2502, 4525, 2468, 4474, 2468, 4425, 2468, 4376, 2472, 4288, 2471, 4280, 2470, 4245, Q, 2469, 4218, 2465, 4193, Z]],
      "label": "Mulanje",
      "shortLabel": "MJ",
      "labelPosition": [239.8, 478.5],
      "labelAlignment": [CEN, MID],
      "nextId": "MW.SO.MN"
    },
    "MW.SO.MN": {
      "outlines": [[M, 471, 3631, Q, 444, 3645, 441, 3647, 422, 3658, 417, 3668, 409, 3683, 410, 3704, 412, 3715, 414, 3737, L, 409, 3804, Q, 402, 3839, 403, 3933, 403, 4020, 393, 4064, 392, 4085, 379, 4127, 374, 4142, 363, 4153, 342, 4173, 334, 4181, 303, 4218, 294, 4233, 290, 4238, 278, 4270, 275, 4277, 272, 4282, 286, 4286, 298, 4297, 305, 4304, 322, 4321, 339, 4337, 348, 4343, 354, 4346, 363, 4353, 369, 4358, 375, 4361, 398, 4371, 436, 4386, 473, 4399, 497, 4411, 508, 4419, 531, 4422, 555, 4423, 566, 4418, 578, 4412, 593, 4401, 596, 4398, 613, 4379, 622, 4370, 627, 4369, 631, 4368, 640, 4369, 654, 4369, 664, 4355, 666, 4352, 676, 4349, 686, 4347, 689, 4344, 704, 4329, 716, 4329, 717, 4329, 731, 4335, 745, 4341, 752, 4340, 763, 4338, 772, 4345, 782, 4353, 787, 4354, 794, 4355, 814, 4355, 826, 4355, 834, 4359, 856, 4371, 875, 4368, 893, 4365, 899, 4372, 902, 4375, 906, 4390, 907, 4393, 911, 4397, 914, 4399, 919, 4402, L, 930, 4414, Q, 935, 4418, 935, 4430, 935, 4437, 933, 4450, 933, 4457, 942, 4459, 946, 4460, 965, 4460, 1027, 4460, 1044, 4453, 1038, 4448, 1035, 4443, 1021, 4411, 1006, 4374, 1003, 4370, 997, 4356, 938, 4253, 598, 3545, 590, 3557, 589, 3561, 584, 3575, 585, 3585, 586, 3596, 577, 3610, 569, 3624, 561, 3624, 555, 3613, 548, 3612, L, 522, 3612, Q, 499, 3612, 495, 3613, 487, 3616, 483, 3621, Q, 478, 3627, 471, 3631, Z]],
      "label": "Mwanza",
      "shortLabel": "MN",
      "labelPosition": [60.4, 412.8],
      "labelAlignment": [CEN, MID],
      "nextId": "MW.SO.NS"
    },
    "MW.SO.NS": {
      "outlines": [[M, 1750, 5427, Q, 1739, 5412, 1737, 5401, 1737, 5399, 1735, 5396, 1730, 5400, 1720, 5413, 1714, 5418, 1708, 5436, 1704, 5440, 1691, 5453, 1680, 5466, 1679, 5477, L, 1674, 5500, Q, 1674, 5500, 1669, 5511, 1665, 5517, 1666, 5524, 1667, 5547, 1656, 5576, 1650, 5590, 1638, 5631, 1635, 5637, 1627, 5653, 1620, 5669, 1620, 5678, 1620, 5686, 1614, 5701, 1609, 5716, 1608, 5727, 1597, 5754, 1589, 5774, 1589, 5776, 1589, 5778, 1586, 5789, 1581, 5798, 1578, 5803, 1575, 5814, 1573, 5824, 1571, 5827, 1557, 5847, 1530, 5875, 1514, 5890, 1493, 5917, 1490, 5921, 1483, 5928, 1478, 5934, 1475, 5940, L, 1459, 5972, Q, 1458, 5975, 1449, 6001, 1446, 6006, 1442, 6013, 1437, 6019, 1434, 6022, 1426, 6027, 1414, 6047, 1399, 6067, 1395, 6071, 1377, 6082, 1352, 6106, 1335, 6120, 1330, 6127, 1327, 6130, 1314, 6150, 1333, 6188, 1346, 6191, 1355, 6193, 1376, 6192, 1398, 6191, 1410, 6193, 1443, 6196, 1459, 6234, 1480, 6286, 1488, 6295, 1528, 6333, 1547, 6355, 1552, 6359, 1596, 6359, 1635, 6359, 1643, 6353, 1650, 6346, 1708, 6346, L, 1750, 6346, Q, 1762, 6346, 1769, 6353, 1770, 6356, 1778, 6370, 1779, 6374, 1807, 6411, 1822, 6433, 1822, 6458, 1822, 6474, 1818, 6488, 1810, 6509, 1807, 6528, 1806, 6537, 1807, 6556, 1808, 6577, 1807, 6584, 1807, 6592, 1807, 6611, 1804, 6627, 1790, 6637, 1784, 6641, 1764, 6654, 1752, 6662, 1743, 6662, 1739, 6663, 1736, 6662, L, 1710, 6662, Q, 1678, 6662, 1669, 6673, 1663, 6681, 1646, 6703, 1635, 6711, 1632, 6738, 1632, 6745, 1632, 6776, 1632, 6781, 1636, 6793, 1641, 6804, 1641, 6811, 1642, 6822, 1647, 6827, 1655, 6832, 1656, 6837, 1657, 6842, 1656, 6877, 1655, 6906, 1661, 6915, 1671, 6931, 1740, 6942, 1796, 6950, 1839, 6950, 1839, 6952, 1900, 6944, 1961, 6936, 1979, 6936, 1996, 6937, 2027, 6938, 2037, 6938, 2047, 6933, 2060, 6925, 2065, 6924, 2078, 6921, 2083, 6918, 2092, 6911, 2097, 6896, 2103, 6876, 2103, 6852, 2102, 6826, 2102, 6814, 2097, 6745, 2095, 6712, 2094, 6694, 2075, 6671, 2058, 6650, 2053, 6636, 2052, 6633, 2052, 6630, 2051, 6623, 2051, 6616, 2051, 6577, 2076, 6545, 2122, 6484, 2122, 6466, 2124, 6449, 2125, 6435, 2125, 6424, 2125, 6417, 2125, 6385, 2115, 6371, 2111, 6366, 2090, 6348, 2074, 6336, 2073, 6324, 2072, 6313, 2073, 6297, 2075, 6279, 2075, 6272, 2069, 6191, 2066, 6178, 2053, 6135, 2008, 6106, 2005, 6104, 2001, 6102, 1964, 6082, 1892, 6024, 1801, 5954, 1801, 5927, 1801, 5898, 1848, 5884, 1862, 5881, 1874, 5865, 1881, 5855, 1892, 5832, 1911, 5795, 1949, 5762, 2007, 5710, 2009, 5707, 2020, 5695, 2023, 5675, 2025, 5651, 2026, 5640, 2033, 5621, 2038, 5607, 2048, 5579, 2049, 5567, 2051, 5559, 2052, 5550, L, 1981, 5549, Q, 1958, 5549, 1947, 5544, 1929, 5535, 1920, 5534, 1897, 5535, 1883, 5534, 1880, 5533, 1869, 5525, 1857, 5515, 1854, 5514, 1833, 5498, 1825, 5497, 1803, 5494, 1790, 5482, 1775, 5462, 1763, 5456, 1759, 5453, 1755, 5443, Q, 1752, 5432, 1750, 5427, Z]],
      "label": "Nsanje",
      "shortLabel": "NS",
      "labelPosition": [164.7, 611.9],
      "labelAlignment": [CEN, MID],
      "nextId": "MW.SO.TH"
    },
    "MW.SO.TH": {
      "outlines": [[M, 1947, 4611, Q, 1948, 4602, 1948, 4597, 1947, 4583, 1935, 4572, 1932, 4570, 1922, 4568, 1912, 4565, 1909, 4562, 1902, 4554, 1894, 4551, 1883, 4550, 1878, 4548, 1873, 4547, 1865, 4542, 1858, 4537, 1851, 4538, 1837, 4539, 1824, 4529, 1810, 4519, 1807, 4520, 1803, 4521, 1794, 4520, 1785, 4518, 1783, 4519, 1780, 4519, 1763, 4518, 1746, 4518, 1741, 4518, 1702, 4520, 1698, 4520, 1691, 4520, 1685, 4529, 1680, 4535, 1670, 4540, 1662, 4547, 1662, 4557, 1662, 4563, 1663, 4576, 1647, 4612, 1622, 4634, 1592, 4661, 1556, 4654, L, 1516, 4652, Q, 1495, 4651, 1484, 4666, 1481, 4669, 1478, 4670, 1475, 4671, 1471, 4675, 1467, 4678, 1462, 4690, 1459, 4695, 1450, 4705, 1442, 4715, 1437, 4723, 1430, 4733, 1417, 4759, 1403, 4784, 1394, 4797, 1380, 4815, 1373, 4831, 1373, 4833, 1370, 4840, 1368, 4845, 1365, 4846, L, 1347, 4850, Q, 1350, 4852, 1352, 4856, 1362, 4882, 1364, 4897, 1364, 4911, 1379, 4934, 1387, 4957, 1408, 4997, 1423, 5030, 1448, 5052, 1449, 5053, 1478, 5078, 1497, 5094, 1507, 5105, 1549, 5169, 1549, 5175, 1549, 5184, 1548, 5188, 1546, 5194, 1546, 5204, 1546, 5220, 1548, 5225, 1551, 5236, 1564, 5248, 1568, 5252, 1580, 5269, 1592, 5285, 1598, 5292, 1613, 5311, 1650, 5331, 1695, 5357, 1715, 5375, 1730, 5387, 1735, 5396, 1737, 5399, 1737, 5401, 1739, 5412, 1750, 5427, 1752, 5432, 1755, 5443, 1759, 5453, 1763, 5456, 1775, 5462, 1790, 5482, 1803, 5494, 1825, 5497, 1833, 5498, 1854, 5514, 1857, 5515, 1869, 5525, 1880, 5533, 1883, 5534, 1897, 5535, 1920, 5534, 1929, 5535, 1947, 5544, 1958, 5549, 1981, 5549, L, 2052, 5550, Q, 2061, 5497, 2062, 5447, 2063, 5442, 2065, 5438, 2079, 5390, 2084, 5373, 2093, 5343, 2100, 5312, 2100, 5260, 2098, 5239, 2098, 5238, 2098, 5237, L, 2096, 5145, Q, 2096, 5143, 2098, 5121, 2098, 5109, 2096, 5102, 2091, 5086, 2090, 5081, 2088, 5076, 2088, 5062, 2088, 5048, 2090, 5043, 2093, 5032, 2095, 5020, L, 2125, 4988, 2125, 4933, Q, 2116, 4932, 2114, 4926, 2114, 4925, 2114, 4914, 2114, 4912, 2115, 4911, 2097, 4909, 2098, 4883, 2087, 4849, 2086, 4845, 2066, 4786, 2058, 4774, 2055, 4769, 2049, 4757, 2045, 4746, 2042, 4743, L, 2017, 4705, Q, 2007, 4691, 1991, 4676, 1970, 4653, 1962, 4645, 1959, 4630, 1953, 4624, Q, 1947, 4619, 1947, 4611, Z]],
      "label": "Thyolo",
      "shortLabel": "TH",
      "labelPosition": [173.6, 499.8],
      "labelAlignment": [CEN, MID],
      "nextId": "MW.SO.PH"
    },
    "MW.SO.PH": {
      "outlines": [[M, 3004, 3826, Q, 2995, 3833, 2960, 3833, L, 2926, 3833, Q, 2923, 3833, 2916, 3828, 2908, 3824, 2902, 3825, 2881, 3825, 2861, 3799, 2852, 3784, 2848, 3778, 2841, 3767, 2830, 3762, 2818, 3756, 2813, 3748, 2809, 3741, 2791, 3741, 2776, 3741, 2771, 3743, 2762, 3746, 2758, 3757, 2755, 3764, 2746, 3772, 2739, 3779, 2738, 3786, 2737, 3795, 2739, 3812, 2739, 3830, 2730, 3835, 2724, 3838, 2713, 3849, 2702, 3859, 2695, 3863, 2673, 3875, 2657, 3890, 2654, 3892, 2646, 3894, 2636, 3896, 2633, 3897, 2628, 3898, 2622, 3904, 2617, 3908, 2611, 3909, 2593, 3910, 2572, 3928, 2535, 3956, 2532, 3958, 2511, 3970, 2489, 3989, 2462, 4014, 2454, 4035, 2454, 4066, 2453, 4073, 2452, 4079, 2448, 4090, 2448, 4093, 2446, 4099, L, 2446, 4111, Q, 2446, 4119, 2448, 4125, 2451, 4135, 2452, 4139, L, 2454, 4159, Q, 2454, 4163, 2455, 4166, 2456, 4171, 2458, 4175, 2463, 4184, 2465, 4193, 2469, 4218, 2470, 4245, 2471, 4280, 2472, 4288, 2468, 4376, 2468, 4425, 2468, 4474, 2502, 4525, 2535, 4576, 2539, 4580, 2556, 4597, 2607, 4597, 2627, 4597, 2660, 4577, 2698, 4556, 2698, 4539, 2698, 4488, 2701, 4478, 2710, 4457, 2750, 4457, 2821, 4457, 2858, 4492, 2888, 4521, 2905, 4584, 2925, 4666, 2963, 4674, 2975, 4677, 3011, 4686, 3045, 4694, 3062, 4696, 3060, 4681, 3060, 4677, 3060, 4664, 3071, 4636, 3083, 4604, 3085, 4596, 3087, 4585, 3089, 4556, 3089, 4533, 3094, 4517, 3097, 4495, 3107, 4435, 3115, 4396, 3112, 4352, 3109, 4282, 3125, 4169, 3141, 4054, 3144, 4008, 3145, 4003, 3145, 3999, 3146, 3973, 3149, 3926, 3152, 3870, 3152, 3833, 3152, 3823, 3151, 3814, 3124, 3818, 3107, 3819, L, 3051, 3819, Q, 3013, 3819, 3004, 3826, Z]],
      "label": "Phalombe",
      "shortLabel": "PH",
      "labelPosition": [279.9, 421.6],
      "labelAlignment": [CEN, MID],
      "nextId": "MW.SO.ZO"
    },
    "MW.SO.ZO": {
      "outlines": [[M, 2604, 3303, Q, 2595, 3310, 2593, 3311, 2590, 3313, 2577, 3313, 2566, 3315, 2562, 3317, 2533, 3333, 2511, 3351, 2497, 3360, 2466, 3360, 2451, 3361, 2444, 3360, 2433, 3360, 2428, 3358, 2415, 3350, 2409, 3348, 2398, 3342, 2389, 3344, 2375, 3345, 2356, 3330, 2332, 3310, 2324, 3307, 2315, 3303, 2253, 3285, 2203, 3270, 2177, 3254, L, 2157, 3254, Q, 2157, 3263, 2146, 3277, 2134, 3294, 2133, 3297, 2129, 3306, 2129, 3321, 2129, 3336, 2126, 3342, 2119, 3353, 2089, 3370, 2058, 3387, 2040, 3387, 2022, 3387, 2018, 3385, 2003, 3380, 1989, 3375, 1984, 3374, 1961, 3358, 1940, 3343, 1929, 3340, 1914, 3336, 1900, 3328, 1888, 3321, 1874, 3318, 1857, 3313, 1852, 3298, L, 1837, 3274, Q, 1836, 3272, 1834, 3271, 1825, 3262, 1820, 3270, 1815, 3281, 1811, 3279, 1807, 3277, 1793, 3295, 1779, 3313, 1761, 3349, 1760, 3351, 1746, 3401, 1737, 3436, 1718, 3441, 1699, 3446, 1675, 3462, 1649, 3480, 1638, 3498, 1627, 3514, 1602, 3539, 1577, 3564, 1570, 3568, 1564, 3571, 1560, 3572, 1569, 3575, 1573, 3575, 1576, 3577, 1580, 3577, 1585, 3578, 1588, 3582, 1592, 3589, 1594, 3591, 1600, 3597, 1607, 3609, 1611, 3616, 1618, 3628, L, 1618, 3636, Q, 1617, 3642, 1620, 3657, 1620, 3663, 1624, 3668, 1627, 3670, 1633, 3676, 1635, 3679, 1645, 3697, L, 1652, 3703, Q, 1657, 3709, 1659, 3712, 1682, 3763, 1735, 3763, 1773, 3763, 1772, 3782, 1769, 3854, 1770, 3860, 1770, 3863, 1769, 3872, 1769, 3875, 1769, 3876, 1770, 3881, 1774, 3881, 1778, 3882, 1790, 3881, 1801, 3881, 1805, 3886, 1808, 3889, 1819, 3889, 1827, 3890, 1827, 3897, 1827, 3904, 1829, 3922, L, 1829, 3923, Q, 1828, 3944, 1830, 3951, 1833, 3965, 1848, 3973, 1857, 3978, 1871, 3980, 1877, 3981, 1884, 3982, 1892, 3982, 1899, 3987, 1916, 3998, 1944, 4012, 1964, 4026, 1972, 4047, 1974, 4054, 1984, 4071, 1993, 4089, 1995, 4095, 1997, 4103, 2032, 4127, 2059, 4150, 2074, 4156, 2081, 4159, 2096, 4163, 2101, 4164, 2122, 4177, L, 2126, 4177, Q, 2139, 4175, 2157, 4184, 2176, 4194, 2190, 4192, 2200, 4191, 2218, 4204, 2225, 4207, 2234, 4208, 2239, 4208, 2244, 4208, 2255, 4208, 2258, 4207, 2264, 4206, 2270, 4199, 2273, 4195, 2278, 4193, 2281, 4192, 2292, 4190, 2298, 4189, 2307, 4183, 2315, 4178, 2318, 4178, 2328, 4175, 2349, 4177, 2354, 4176, 2380, 4169, 2395, 4165, 2404, 4166, L, 2455, 4166, Q, 2454, 4163, 2454, 4159, L, 2452, 4139, Q, 2451, 4135, 2448, 4125, 2446, 4119, 2446, 4111, L, 2446, 4099, Q, 2448, 4093, 2448, 4090, 2452, 4079, 2453, 4073, 2454, 4066, 2454, 4035, 2462, 4014, 2489, 3989, 2511, 3970, 2532, 3958, 2535, 3956, 2572, 3928, 2593, 3910, 2611, 3909, 2617, 3908, 2622, 3904, 2628, 3898, 2633, 3897, 2636, 3896, 2646, 3894, 2654, 3892, 2657, 3890, 2673, 3875, 2695, 3863, 2702, 3859, 2713, 3849, 2724, 3838, 2730, 3835, 2739, 3830, 2739, 3812, 2737, 3795, 2738, 3786, 2739, 3779, 2746, 3772, 2755, 3764, 2758, 3757, 2762, 3746, 2771, 3743, 2776, 3741, 2791, 3741, 2809, 3741, 2813, 3748, 2818, 3756, 2830, 3762, 2841, 3767, 2848, 3778, 2852, 3784, 2861, 3799, 2881, 3825, 2902, 3825, 2908, 3824, 2916, 3828, 2923, 3833, 2926, 3833, L, 2956, 3833, Q, 2957, 3833, 2959, 3832, 2960, 3831, 2960, 3833, 2995, 3833, 3004, 3826, 3013, 3819, 3051, 3819, L, 3107, 3819, Q, 3124, 3818, 3151, 3814, 3147, 3786, 3131, 3764, 3102, 3724, 3090, 3686, 3086, 3674, 3086, 3650, 3087, 3627, 3083, 3613, 3074, 3587, 3074, 3542, 3074, 3505, 3086, 3482, 3096, 3459, 3096, 3433, 3096, 3411, 3073, 3356, 3056, 3318, 3038, 3289, 3036, 3286, 3035, 3284, 3030, 3274, 3026, 3257, 3021, 3237, 3020, 3223, 2990, 3225, 2969, 3202, 2947, 3178, 2932, 3178, 2918, 3178, 2872, 3216, 2848, 3235, 2817, 3261, 2796, 3273, 2784, 3278, 2768, 3284, 2751, 3282, 2733, 3281, 2706, 3288, 2683, 3295, 2672, 3296, 2669, 3297, 2668, 3297, L, 2619, 3297, Q, 2611, 3297, 2604, 3303, Z]],
      "label": "Zomba",
      "shortLabel": "ZO",
      "labelPosition": [224.8, 369.3],
      "labelAlignment": [CEN, MID],
      "nextId": "MW.SO.NN"
    },
    "MW.SO.NN": {
      "outlines": [[M, 1219, 3500, Q, 1212, 3518, 1162, 3544, 1142, 3544, 1137, 3519, 1135, 3512, 1135, 3486, 1135, 3455, 1126, 3418, 1122, 3397, 1118, 3387, 1112, 3371, 1099, 3368, 1088, 3365, 1030, 3351, 1024, 3350, 992, 3348, 965, 3348, 957, 3348, 947, 3348, 919, 3344, 887, 3339, 878, 3339, 841, 3335, 805, 3321, 782, 3313, 742, 3292, L, 703, 3292, 703, 3398, 669, 3455, Q, 654, 3476, 640, 3494, 633, 3503, 601, 3540, 596, 3545, 598, 3545, 938, 4253, 997, 4356, L, 996, 4300, Q, 996, 4285, 1012, 4255, 1027, 4224, 1027, 4202, L, 1027, 4146, Q, 1027, 4137, 1031, 4121, 1035, 4103, 1035, 4099, 1036, 4087, 1056, 4055, 1076, 4025, 1087, 4016, 1144, 3972, 1167, 3951, 1197, 3916, 1213, 3879, 1230, 3832, 1244, 3800, 1256, 3773, 1309, 3662, 1313, 3654, 1331, 3630, 1352, 3604, 1356, 3598, 1365, 3580, 1384, 3579, 1395, 3578, 1419, 3580, 1428, 3579, 1496, 3580, 1542, 3581, 1555, 3572, 1551, 3569, 1543, 3557, 1532, 3540, 1517, 3525, 1513, 3520, 1493, 3493, 1487, 3486, 1467, 3486, 1459, 3486, 1349, 3493, Q, 1238, 3500, 1219, 3500, Z]],
      "label": "Neno",
      "shortLabel": "NN",
      "labelPosition": [97.8, 376.8],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'southernmalawiregion',
  type: 'maps'
};

/***/ })

/******/ });
}));
