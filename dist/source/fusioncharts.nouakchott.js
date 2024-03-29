
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(19);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 19:
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
 * @id fusionmaps.Nouakchott.1.11-19-2018 08:17:34
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
  "name": "Nouakchott",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 150,
  "baseHeight": 286,
  "baseScaleFactor": 10,
  "firstEntity": "MR.NO.NO",
  "entities": {
    "MR.NO.NO": {
      "outlines": [[M, 1093, 25, Q, 1089, 25, 1085, 25, 1080, 26, 1076, 26, 1075, 27, 1073, 27, 1064, 27, 1058, 31, 1041, 31, 1024, 30, 1007, 30, 992, 32, 988, 33, 984, 33, 955, 33, 927, 33, 897, 33, 868, 33, 839, 33, 809, 33, 780, 33, 750, 33, 746, 33, 745, 36, 744, 42, 741, 48, 740, 50, 738, 51, 732, 53, 725, 53, 696, 53, 666, 53, 637, 53, 608, 53, 579, 53, 549, 53, 521, 53, 492, 53, 463, 53, 433, 53, 406, 53, 378, 53, 349, 53, 319, 53, 290, 53, 260, 53, 231, 53, 202, 53, 173, 53, 143, 53, 138, 53, 133, 52, 130, 52, 128, 52, 114, 51, 99, 51, 86, 51, 73, 52, 71, 52, 69, 52, 51, 53, 33, 53, 33, 72, 33, 91, 34, 93, 34, 95, 34, 122, 34, 148, 34, 163, 36, 177, 37, 179, 37, 180, 38, 195, 38, 209, 38, 238, 38, 267, 38, 296, 38, 324, 38, 354, 38, 383, 39, 384, 39, 385, 41, 396, 41, 407, 41, 408, 41, 410, 42, 415, 44, 417, 45, 420, 46, 423, 48, 425, 49, 427, 57, 438, 57, 452, 56, 466, 57, 480, 57, 490, 58, 501, 58, 502, 58, 504, 59, 506, 59, 511, 59, 513, 60, 513, 62, 514, 62, 517, 61, 522, 62, 526, 62, 527, 63, 529, 63, 531, 63, 532, 68, 541, 73, 544, 75, 544, 76, 545, 78, 546, 81, 548, 83, 570, 83, 593, L, 83, 595, Q, 83, 600, 83, 605, 83, 612, 82, 618, 81, 624, 85, 628, 87, 630, 87, 633, 86, 638, 87, 642, 87, 646, 88, 650, 91, 665, 98, 675, 103, 681, 105, 687, 106, 689, 106, 690, 106, 710, 106, 729, 106, 731, 107, 731, 109, 734, 109, 737, 108, 746, 109, 754, 109, 757, 110, 761, 111, 769, 113, 778, 114, 780, 115, 783, 117, 786, 118, 791, 120, 797, 125, 800, 131, 804, 134, 808, 142, 818, 142, 831, 142, 846, 141, 860, 141, 861, 141, 861, 140, 868, 140, 875, 140, 877, 140, 878, 138, 882, 138, 887, 137, 895, 133, 903, 133, 904, 132, 905, 127, 908, 124, 912, 117, 920, 113, 934, 112, 935, 112, 937, 111, 955, 111, 972, 111, 1002, 111, 1031, 111, 1033, 112, 1034, 114, 1039, 114, 1048, 113, 1056, 114, 1064, 114, 1065, 114, 1066, 114, 1071, 117, 1072, 124, 1077, 127, 1081, 128, 1083, 129, 1085, 130, 1093, 131, 1103, 131, 1120, 131, 1137, 131, 1138, 132, 1140, 133, 1142, 133, 1147, 133, 1148, 133, 1149, 135, 1151, 136, 1152, 137, 1153, 138, 1153, 148, 1158, 155, 1162, 158, 1163, 161, 1167, 162, 1168, 162, 1168, 163, 1178, 163, 1187, 163, 1216, 163, 1246, 163, 1260, 161, 1274, 160, 1281, 156, 1284, 156, 1285, 155, 1286, 151, 1288, 148, 1291, 147, 1293, 146, 1294, 143, 1296, 142, 1299, 139, 1306, 138, 1313, 137, 1315, 137, 1318, 136, 1335, 136, 1351, 136, 1354, 137, 1356, 139, 1364, 138, 1373, 137, 1393, 141, 1410, 141, 1412, 142, 1412, 143, 1413, 144, 1414, 149, 1416, 155, 1416, 163, 1415, 168, 1420, 170, 1423, 170, 1425, 172, 1446, 172, 1467, 172, 1497, 172, 1526, 172, 1555, 172, 1584, 172, 1586, 171, 1588, 171, 1589, 171, 1589, 170, 1593, 169, 1598, 169, 1602, 169, 1606, 168, 1609, 168, 1613, 168, 1614, 167, 1615, 167, 1620, 167, 1625, 167, 1629, 166, 1633, 166, 1635, 166, 1636, 165, 1656, 164, 1677, 164, 1685, 172, 1688, 174, 1688, 176, 1689, 181, 1692, 188, 1690, 189, 2293, 189, 2294, 190, 2296, 190, 2297, 191, 2299, 191, 2301, 192, 2323, 192, 2346, 192, 2349, 191, 2353, 190, 2359, 188, 2366, 188, 2368, 186, 2369, 179, 2376, 175, 2381, 174, 2382, 173, 2382, 165, 2384, 161, 2388, 160, 2390, 159, 2391, 158, 2407, 158, 2423, 158, 2427, 158, 2430, 159, 2432, 159, 2433, 160, 2444, 160, 2454, 160, 2455, 160, 2456, 162, 2461, 163, 2467, 163, 2471, 164, 2475, 164, 2476, 164, 2477, 167, 2492, 167, 2507, 166, 2537, 166, 2566, 166, 2582, 163, 2598, 162, 2600, 162, 2601, 160, 2608, 156, 2612, 155, 2614, 153, 2615, 147, 2621, 140, 2623, 139, 2624, 138, 2624, 133, 2625, 129, 2627, 124, 2631, 123, 2638, 123, 2666, 123, 2693, 123, 2722, 123, 2750, 123, 2780, 123, 2809, 123, 2817, 122, 2824, 122, 2830, 123, 2833, 136, 2833, 148, 2832, 151, 2832, 153, 2832, 158, 2831, 163, 2831, 193, 2831, 222, 2831, 252, 2831, 281, 2831, 310, 2831, 340, 2831, 369, 2831, 398, 2831, 427, 2831, 455, 2831, 485, 2831, 514, 2831, 544, 2831, 573, 2831, 602, 2831, 632, 2831, 661, 2831, 690, 2831, 720, 2831, 749, 2831, 778, 2831, 806, 2831, 836, 2831, 865, 2831, 894, 2831, 923, 2831, 952, 2831, 981, 2831, 1010, 2831, 1039, 2831, 1069, 2831, 1098, 2831, 1127, 2831, 1157, 2831, 1186, 2831, 1215, 2831, 1245, 2831, 1274, 2831, 1304, 2831, 1333, 2831, 1362, 2831, 1392, 2831, 1421, 2831, 1450, 2831, 1460, 2831, 1470, 2831, 1469, 1782, 1469, 1757, 1469, 1730, 1468, 1702, 1468, 1672, 1470, 1643, 1472, 1617, 1472, 1591, 1472, 1563, 1472, 1534, 1472, 1505, 1472, 1475, 1472, 1471, 1471, 1467, 1470, 1459, 1469, 1450, 1469, 1445, 1468, 1440, 1465, 1423, 1466, 1405, 1467, 1401, 1466, 1397, 1464, 1384, 1465, 1370, 1465, 1341, 1465, 1313, 1465, 1285, 1467, 1258, 1467, 1256, 1467, 1254, 1467, 1251, 1466, 1247, 1464, 1225, 1465, 1202, 1465, 1173, 1466, 1143, 1466, 1142, 1466, 1140, 1467, 1120, 1467, 1100, 1467, 1071, 1466, 1041, 1466, 1027, 1469, 1014, 1469, 1013, 1469, 1011, 1470, 982, 1471, 952, 1471, 949, 1471, 945, 1472, 920, 1472, 895, 1472, 868, 1472, 840, 1472, 811, 1472, 781, 1472, 753, 1472, 724, 1473, 709, 1471, 695, 1470, 692, 1469, 689, 1466, 678, 1466, 667, 1467, 641, 1468, 616, 1468, 613, 1468, 610, 1467, 590, 1467, 570, 1467, 541, 1467, 512, 1467, 483, 1467, 454, 1467, 451, 1467, 449, 1466, 447, 1466, 445, 1465, 442, 1465, 439, 1463, 423, 1462, 407, 1462, 403, 1462, 398, 1460, 389, 1460, 378, 1460, 349, 1460, 320, 1460, 292, 1460, 264, 1460, 253, 1461, 242, 1461, 237, 1461, 232, 1462, 205, 1462, 177, 1462, 148, 1462, 120, 1462, 91, 1462, 61, 1461, 49, 1463, 38, 1464, 31, 1457, 32, 1454, 33, 1450, 32, 1437, 30, 1422, 31, 1417, 31, 1413, 30, 1407, 29, 1400, 29, 1371, 29, 1341, 29, 1340, 29, 1338, 28, 1323, 28, 1308, 28, 1278, 28, 1249, 28, 1247, 28, 1246, 27, 1240, 25, 1232, 25, 1221, 26, 1210, 25, 1181, 24, 1152, 24, Q, 1122, 24, 1093, 25, Z]],
      "label": "Nouakchott",
      "shortLabel": "NO",
      "labelPosition": [79.2, 142.8],
      "labelAlignment": [CEN, MID]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'nouakchott',
  type: 'maps'
};

/***/ })

/******/ });
}));
