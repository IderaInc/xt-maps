(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=66)})({66:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(67);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},67:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.NegrosIslandRegion.1.03-02-2017 04:08:43
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"NegrosIslandRegion",revision:1,standaloneInit:true,baseWidth:363,baseHeight:600,baseScaleFactor:10,entities:{"PH.NI.ND":{outlines:[[M,3226,1653,L,3226,1592,3221,1592,Q,3218,1613,3169,1645,3149,1655,3140,1673,3134,1685,3120,1720,3149,1725,3181,1699,Q,3209,1667,3226,1653,Z],[M,1928,308,Q,1864,308,1850,326,1836,343,1749,346,1726,346,1720,380,1717,398,1720,421,1714,453,1703,470,1694,481,1694,516,1694,550,1729,568,1767,585,1772,623,1778,668,1775,750,1775,827,1769,847,1757,888,1714,885,L,1714,908,Q,1720,911,1732,922,1743,929,1755,932,L,1755,960,Q,1752,966,1720,1001,1703,1021,1692,1044,1685,1052,1674,1099,1665,1107,1651,1110,1648,1113,1648,1124,1648,1134,1660,1145,1671,1156,1671,1159,1671,1168,1648,1199,1645,1203,1642,1226,1639,1243,1637,1251,1628,1261,1587,1263,1579,1266,1558,1306,1547,1318,1515,1344,1492,1364,1486,1373,1480,1381,1463,1419,1455,1443,1432,1443,1423,1443,1405,1416,1391,1390,1365,1390,1342,1390,1336,1393,1328,1393,1301,1408,L,1301,1471,Q,1342,1494,1345,1543,1348,1569,1345,1621,1345,1627,1348,1635,1348,1665,1356,1708,1368,1751,1403,1783,1432,1806,1440,1884,1443,1898,1455,1904,1472,1912,1478,1924,1483,1930,1483,1950,1483,1956,1480,1970,1480,1994,1469,2014,1458,2034,1458,2074,L,1458,2129,Q,1455,2134,1440,2152,1426,2167,1426,2172,L,1417,2443,Q,1417,2504,1452,2556,1490,2608,1490,2631,1490,2657,1480,2720,1472,2778,1466,2805,1460,2822,1403,2845,L,1377,2874,1333,2874,Q,1319,2874,1290,2865,1261,2854,1256,2854,1247,2859,1244,2859,1250,2871,1238,2880,1230,2888,1212,2891,1203,2891,1183,2908,L,1160,2929,Q,1134,2943,1099,2984,1082,3004,1054,3035,1031,3056,1010,3082,1001,3093,973,3102,944,3107,941,3111,894,3151,880,3154,866,3159,814,3159,710,3151,678,3151,675,3114,617,3111,537,3116,485,3116,343,3116,308,3124,234,3148,248,3234,248,3272,211,3313,168,3356,156,3405,144,3463,106,3494,78,3518,58,3523,52,3526,52,3561,52,3638,84,3688,116,3740,116,3757,116,3777,106,3785,96,3797,84,3832,81,3875,64,3878,46,3881,46,3907,46,3915,72,4002,L,89,4002,Q,98,3965,104,3956,106,3950,133,3950,159,3950,164,3953,176,3956,176,3976,176,3994,147,4017,L,113,4046,116,4049,Q,136,4051,211,4051,277,4063,277,4118,277,4144,268,4152,260,4158,260,4172,260,4213,298,4248,318,4268,326,4299,335,4337,343,4346,349,4357,384,4366,421,4374,436,4383,447,4392,456,4423,459,4441,465,4476,473,4505,511,4559,548,4614,572,4628,592,4640,597,4669,603,4700,623,4718,644,4735,670,4741,692,4747,704,4750,710,4753,713,4753,716,4761,727,4775,739,4790,747,4802,765,4715,825,4614,840,4585,947,4418,961,4395,1019,4331,1082,4259,1086,4253,1134,4184,1158,4158,1186,4126,1235,4083,1319,4014,1373,3919,1394,3881,1432,3840,1483,3783,1495,3772,1535,3713,1617,3583,1689,3468,1720,3416,1723,3408,1729,3402,1764,3353,1804,3269,1856,3159,1879,3111,1908,3050,1971,2943,2044,2825,2089,2735,2136,2643,2214,2536,2295,2432,2378,2334,2465,2239,2465,2216,2465,2184,2418,2132,2375,2083,2373,2011,2370,2005,2370,2002,2361,1979,2335,1942,2332,1936,2329,1901,2326,1875,2306,1875,L,2306,1812,2702,1812,Q,2707,1858,2788,1855,2805,1852,2809,1867,2817,1881,2831,1884,2846,1884,2880,1887,2884,1872,2895,1867,2938,1847,2947,1792,2947,1785,2952,1702,2961,1702,2990,1708,3016,1705,3028,1670,3034,1647,3054,1638,3065,1635,3088,1633,3108,1624,3131,1590,3143,1566,3151,1543,3154,1532,3158,1520,3172,1488,3218,1443,3273,1384,3273,1330,3270,1295,3305,1258,3336,1226,3333,1206,3328,1177,3339,1090,3339,1079,3351,1064,3368,1044,3371,1041,L,3374,977,Q,3374,942,3391,920,3420,879,3423,871,3470,790,3487,750,3501,718,3533,700,3562,686,3562,680,3562,675,3535,637,3507,600,3507,582,3507,568,3518,559,3530,556,3530,545,3530,530,3501,533,3466,538,3460,521,3449,493,3423,466,L,3423,398,Q,3423,389,3411,383,3403,374,3403,368,L,3403,326,Q,3403,279,3411,264,L,3411,239,3310,239,Q,3319,264,3302,271,3296,276,3276,276,3253,276,3247,264,3241,247,3209,236,3198,230,3172,213,3154,201,3134,201,L,3079,207,Q,3059,207,3048,192,3036,178,3007,178,L,2927,178,Q,2857,184,2829,184,2817,184,2788,172,2762,158,2754,155,2664,97,2627,74,2569,39,2488,39,2456,34,2436,37,2404,42,2404,86,2387,86,2375,86,2350,83,2338,91,2315,106,2309,106,2300,112,2286,112,2268,112,2246,138,2231,149,2208,175,2182,201,2133,264,2089,316,2049,316,Z],[M,3535,138,Q,3518,164,3518,172,L,3518,201,3550,201,3555,196,3576,204,Q,3587,204,3590,196,3590,192,3590,166,3590,146,3585,129,3576,109,3562,109,Q,3553,109,3535,138,Z]],label:"Negros Occidental",shortLabel:"ND",labelPosition:[181.8,241.9],labelAlignment:[CEN,MID]},"PH.NI.NR":{outlines:[[M,2661,5803,Q,2661,5844,2699,5844,2736,5844,2736,5806,2736,5768,2704,5768,2682,5768,2675,5772,Q,2661,5777,2661,5803,Z],[M,2329,1901,Q,2332,1936,2335,1942,2361,1979,2370,2002,2370,2005,2373,2011,2375,2083,2418,2132,2465,2184,2465,2216,2465,2239,2378,2334,2295,2432,2214,2536,2136,2643,2089,2735,2044,2825,1971,2943,1908,3050,1879,3111,1856,3159,1804,3269,1764,3353,1729,3402,1723,3408,1720,3416,1689,3468,1617,3583,1535,3713,1495,3772,1483,3783,1432,3840,1394,3881,1373,3919,1319,4014,1235,4083,1186,4126,1158,4158,1134,4184,1086,4253,1082,4259,1019,4331,961,4395,947,4418,840,4585,825,4614,765,4715,747,4802,753,4807,762,4813,765,4816,794,4830,814,4839,825,4862,843,4900,880,4920,918,4940,956,4940,L,1042,4932,Q,1068,4932,1160,4952,1261,4975,1301,4995,1363,5024,1458,5064,1521,5102,1521,5183,1521,5194,1515,5229,1510,5261,1510,5318,1510,5371,1527,5408,1535,5431,1570,5494,1579,5515,1590,5587,1596,5604,1630,5656,1637,5665,1660,5740,1680,5800,1706,5820,1729,5838,1781,5867,1827,5895,1844,5904,L,1844,5907,Q,1896,5924,1914,5945,1925,5959,1951,5959,1966,5959,1971,5953,1983,5939,1997,5933,2038,5933,2058,5930,2069,5927,2076,5907,2081,5884,2081,5882,2096,5852,2098,5849,2104,5849,2130,5849,2168,5849,2199,5895,2234,5942,2243,5942,2248,5942,2278,5902,2309,5858,2335,5849,2350,5844,2387,5823,2427,5800,2465,5792,2502,5780,2552,5688,2597,5590,2627,5563,2635,5552,2647,5523,2661,5486,2661,5483,2670,5463,2704,5448,2736,5434,2736,5388,2736,5341,2750,5330,2777,5306,2782,5266,2785,5223,2788,5209,2811,5084,2811,5073,2811,5032,2742,4984,2670,4940,2661,4934,2641,4920,2641,4888,2638,4854,2629,4842,2612,4827,2600,4816,2577,4799,2577,4782,2580,4730,2577,4712,2577,4678,2537,4686,2508,4690,2485,4680,2476,4648,2465,4646,2413,4623,2421,4565,2421,4542,2410,4519,2390,4487,2375,4458,2363,4444,2338,4438,2320,4435,2323,4406,2323,4378,2309,4371,2283,4363,2280,4354,L,2280,4303,2320,4303,Q,2326,4316,2335,4366,L,2355,4366,2355,4328,Q,2350,4306,2323,4259,L,2295,4259,2291,4279,2263,4279,Q,2243,4253,2223,4213,2199,4176,2199,4169,2199,4144,2248,4121,2306,4097,2315,4069,2320,4054,2320,4031,2320,3994,2320,3987,2346,3962,2346,3953,L,2346,3907,Q,2346,3878,2326,3829,2309,3792,2323,3740,L,2323,3650,Q,2320,3621,2306,3610,2291,3598,2291,3583,2291,3566,2309,3543,2326,3523,2326,3506,2315,3436,2315,3416,2315,3356,2332,3347,2378,3324,2407,3289,2387,3231,2416,3200,2465,3145,2473,3136,2473,3107,2508,3076,2543,3044,2555,3029,2569,3009,2589,2966,2606,2929,2615,2908,2615,2902,2664,2782,2704,2680,2707,2648,2716,2559,2779,2418,2866,2213,2884,2158,L,2884,2071,Q,2843,2062,2834,2060,2829,2054,2829,2031,2829,2002,2843,1991,2869,1973,2880,1950,2880,1915,2880,1901,2880,1892,2880,1887,2846,1884,2831,1884,2817,1881,2809,1867,2805,1852,2788,1855,2707,1858,2702,1812,L,2306,1812,2306,1875,Q,2326,1875,2329,1901,Z]],label:"Negros Oriental",shortLabel:"NR",labelPosition:[181.5,388.5],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"negrosislandregion",type:"maps"}}})});