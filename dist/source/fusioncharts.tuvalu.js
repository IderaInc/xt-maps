
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
/******/ 	return __webpack_require__(__webpack_require__.s = 468);
/******/ })
/************************************************************************/
/******/ ({

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fusioncharts = __webpack_require__(469);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_fusioncharts2['default']);

/***/ }),

/***/ 469:
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
 * @id fusionmaps.Tuvalu.20.10-30-2012 07:14:46
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
  "name": "Tuvalu",
  "revision": 20,
  "standaloneInit": true,
  "baseWidth": 350,
  "baseHeight": 380,
  "baseScaleFactor": 10,
  "entities": {
    "TV.NU": {
      "outlines": [[M, 1148, 1183, Q, 1147, 1183, 1145, 1184, 1142, 1183, 1143, 1186, 1143, 1187, 1143, 1188, 1143, 1192, 1143, 1194, 1139, 1194, 1134, 1194, 1134, 1198, 1134, 1203, 1140, 1203, 1146, 1203, 1144, 1205, 1145, 1207, 1145, 1212, 1145, 1217, 1145, 1220, 1145, 1224, 1147, 1225, 1150, 1225, 1152, 1225, 1154, 1225, 1154, 1236, 1154, 1245, 1154, 1247, 1155, 1248, 1156, 1249, 1156, 1250, 1157, 1250, 1158, 1251, 1159, 1252, 1159, 1253, 1159, 1254, 1160, 1254, 1162, 1255, 1164, 1255, 1169, 1255, 1173, 1255, 1174, 1255, 1174, 1254, 1176, 1253, 1176, 1252, 1175, 1249, 1176, 1247, 1176, 1244, 1178, 1244, 1180, 1245, 1181, 1244, 1182, 1244, 1183, 1245, 1184, 1245, 1186, 1245, 1186, 1241, 1186, 1236, 1185, 1234, 1185, 1233, 1186, 1228, 1185, 1223, 1185, 1218, 1185, 1213, 1185, 1209, 1185, 1205, 1184, 1203, 1183, 1204, 1181, 1204, 1180, 1204, 1176, 1204, 1173, 1203, 1172, 1202, 1172, 1201, 1172, 1199, 1172, 1197, 1173, 1196, 1173, 1195, 1171, 1195, 1170, 1194, 1164, 1193, 1160, 1194, 1156, 1194, 1154, 1193, L, 1153, 1193, 1153, 1191, Q, 1153, 1190, 1152, 1188, 1152, 1187, 1153, 1186, 1155, 1186, 1152, 1184, Q, 1150, 1183, 1148, 1183, Z]],
      "label": "Nui",
      "shortLabel": "NU",
      "labelPosition": [132, 121.8],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [[M, 1320, 1218, L, 1170, 1218]]
    },
    "TV.NG": {
      "outlines": [[M, 605, 624, Q, 601, 625, 598, 625, 597, 625, 595, 625, 594, 626, 594, 627, 593, 628, 593, 629, 593, 635, 587, 634, 586, 634, 586, 635, 586, 639, 586, 643, 589, 643, 592, 643, 592, 643, 593, 644, 593, 649, 594, 653, 595, 653, 595, 655, 595, 657, 595, 660, 596, 663, 596, 661, 596, 660, 598, 662, 600, 665, 602, 664, 604, 664, 606, 664, 608, 664, 611, 664, 615, 664, 620, 664, 623, 665, 622, 661, 622, 657, 625, 656, 625, 656, 626, 656, 628, 655, 628, 654, 631, 654, 632, 653, 634, 652, 634, 651, 634, 642, 634, 632, 634, 629, 634, 627, 631, 626, 629, 626, 627, 626, 625, 626, 624, 625, 623, 625, 621, 625, 621, 622, 623, 621, 622, 620, 622, 618, 623, 617, 624, 616, 623, 615, 614, 615, 605, 615, Q, 605, 620, 605, 624, Z]],
      "label": "Nanumanga",
      "shortLabel": "NG",
      "labelPosition": [50.8, 64.3],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [[M, 508, 643, L, 608, 643]]
    },
    "TV.NA": {
      "outlines": [[M, 435, 235, L, 435, 264, 444, 264, 444, 283, 465, 283, 465, 294, 495, 294, 495, 303, 504, 303, 504, 293, 534, 293, 534, 272, 545, 272, 545, 263, 536, 263, 536, 244, 524, 244, 524, 234, 513, 234, 513, 223, 495, 223, 495, 214, 445, 214, 444, 235, Z]],
      "label": "Nanumea",
      "shortLabel": "NA",
      "labelPosition": [61.8, 24.7],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [[M, 618, 247, L, 508, 247]]
    },
    "TV.NT": {
      "outlines": [[M, 1212, 519, Q, 1212, 524, 1212, 530, 1213, 533, 1213, 535, 1213, 538, 1213, 541, 1214, 543, 1214, 544, 1215, 545, 1217, 546, 1219, 546, 1220, 546, 1226, 547, 1231, 547, 1232, 547, 1234, 548, 1235, 548, 1236, 548, 1245, 548, 1254, 548, 1254, 546, 1254, 545, 1254, 543, 1256, 543, 1256, 537, 1256, 532, 1256, 530, 1256, 527, 1255, 525, 1254, 524, 1254, 521, 1254, 518, 1253, 516, 1252, 515, 1250, 512, 1248, 511, 1247, 510, 1244, 511, 1241, 511, 1238, 511, 1237, 511, 1236, 511, 1235, 511, 1234, 512, 1228, 512, 1221, 512, L, 1220, 513, Q, 1218, 513, 1218, 513, 1215, 514, 1213, 514, Q, 1212, 517, 1212, 519, Z]],
      "label": "Niutao",
      "shortLabel": "NT",
      "labelPosition": [138.2, 52.9],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [[M, 1382, 529, L, 1234, 529]]
    },
    "TV.NF": {
      "outlines": [[M, 1956, 1704, L, 1956, 1722, 1965, 1722, 1965, 1733, 1983, 1733, 1983, 1725, 1993, 1722, 1995, 1713, 2004, 1713, 2004, 1703, 1995, 1703, 1995, 1695, 2003, 1695, 2003, 1686, 1986, 1686, 1984, 1674, 1954, 1674, 1954, 1673, 1944, 1673, 1944, 1662, 1916, 1662, 1913, 1663, 1913, 1674, 1905, 1674, 1905, 1686, 1894, 1686, 1894, 1695, 1876, 1695, 1876, 1705, 1864, 1705, 1864, 1735, 1845, 1735, 1845, 1760, 1855, 1760, 1855, 1782, 1865, 1782, 1865, 1802, 1886, 1802, 1886, 1822, 1964, 1822, 1964, 1810, 1974, 1810, 1974, 1795, 1953, 1795, 1953, 1805, 1935, 1805, 1935, 1792, 1943, 1792, 1943, 1774, 1913, 1774, 1913, 1795, 1923, 1795, 1923, 1804, 1899, 1804, 1893, 1805, 1893, 1783, 1904, 1783, 1904, 1745, 1915, 1745, 1915, 1713, 1944, 1713, 1944, 1704, Z]],
      "label": "Nukufetau",
      "shortLabel": "NF",
      "labelPosition": [188, 196.2],
      "labelAlignment": [CEN, BTM],
      "labelConnectors": [[M, 1880, 1962, L, 1880, 1733]]
    },
    "TV.NI": {
      "outlines": [[M, 2643, 3492, Q, 2641, 3492, 2640, 3492, 2638, 3493, 2637, 3493, 2634, 3492, 2634, 3495, 2634, 3498, 2634, 3500, 2634, 3503, 2635, 3505, 2635, 3507, 2635, 3508, 2635, 3515, 2635, 3523, 2636, 3524, 2638, 3524, 2640, 3524, 2643, 3524, 2647, 3524, 2651, 3524, 2656, 3524, 2661, 3524, 2664, 3525, 2664, 3521, 2664, 3519, 2664, 3518, 2665, 3516, 2665, 3514, 2665, 3505, 2665, 3497, 2664, 3492, 2659, 3493, 2657, 3493, 2655, 3493, 2654, 3493, 2653, 3494, 2652, 3494, 2652, 3493, 2650, 3493, 2649, 3492, Q, 2646, 3492, 2643, 3492, Z]],
      "label": "Niulakita",
      "shortLabel": "NI",
      "labelPosition": [249.8, 350.8],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [[M, 2498, 3508, L, 2649, 3508]]
    },
    "TV.FN": {
      "outlines": [[M, 2495, 1995, L, 2495, 2004, 2484, 2004, 2484, 1984, 2474, 1984, 2474, 1974, 2464, 1974, 2464, 1985, 2456, 1985, 2456, 1973, 2405, 1973, 2405, 1985, 2395, 1985, 2395, 1995, 2385, 1995, 2378, 2004, 2365, 2004, 2363, 2015, 2354, 2015, 2354, 2033, 2345, 2033, 2343, 2054, 2324, 2054, 2324, 2061, 2353, 2061, 2353, 2083, 2383, 2083, 2383, 2052, 2388, 2053, 2415, 2053, 2414, 2033, 2465, 2033, 2465, 2054, 2415, 2054, 2415, 2063, 2436, 2063, 2436, 2073, 2444, 2073, 2444, 2095, 2414, 2095, 2414, 2124, 2395, 2124, 2393, 2144, 2375, 2145, 2375, 2154, 2365, 2154, 2365, 2103, 2344, 2103, 2344, 2114, 2334, 2114, 2334, 2143, 2345, 2143, 2345, 2183, 2354, 2183, 2354, 2194, 2375, 2194, 2375, 2204, 2423, 2204, 2423, 2174, 2394, 2174, 2394, 2164, 2403, 2164, 2403, 2154, 2424, 2154, 2426, 2123, 2444, 2123, 2444, 2114, 2454, 2112, 2455, 2117, 2456, 2135, 2463, 2135, 2463, 2145, 2475, 2145, 2475, 2135, 2484, 2135, 2484, 2125, 2515, 2125, 2515, 2084, 2502, 2084, 2502, 2075, 2515, 2075, 2515, 2064, 2525, 2064, 2525, 2053, 2505, 2053, 2505, 2045, 2514, 2045, 2514, 2025, 2505, 2023, 2503, 1995, Z]],
      "label": "Funafuti",
      "shortLabel": "FN",
      "labelPosition": [248, 229.8],
      "labelAlignment": [CEN, BTM],
      "labelConnectors": [[M, 2480, 2298, L, 2480, 2100]]
    },
    "TV.NL": {
      "outlines": [[M, 2852, 2594, L, 2845, 2594, 2844, 2603, 2854, 2603, 2854, 2615, 2863, 2613, 2863, 2634, 2875, 2634, 2875, 2644, 2895, 2644, 2895, 2614, 2875, 2614, 2875, 2595, 2865, 2595, 2865, 2584, 2852, 2584, Z]],
      "label": "Nukulaelae",
      "shortLabel": "NL",
      "labelPosition": [273.9, 260.4],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [[M, 2739, 2604, L, 2866, 2604]]
    },
    "TV.VI": {
      "outlines": [[M, 2154, 1385, L, 2150, 1385, 2125, 1385, 2123, 1397, 2117, 1397, 2117, 1414, 2122, 1414, 2126, 1423, 2156, 1423, Q, 2164, 1408, 2158, 1394, L, 2157, 1391, Z]],
      "label": "Vaitupu",
      "shortLabel": "VI",
      "labelPosition": [195, 140.2],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [[M, 1950, 1402, L, 2150, 1402]]
    }
  }
}];

exports['default'] = {
  extension: geodefinitions,
  name: 'tuvalu',
  type: 'maps'
};

/***/ })

/******/ });
}));