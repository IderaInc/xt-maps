(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=352)})({352:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(353);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},353:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.BenishangulGumuzRegion.1.05-03-2017 12:10:07
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"BenishangulGumuzRegion",revision:1,standaloneInit:true,baseWidth:540,baseHeight:600,baseScaleFactor:10,entities:{"ET.BE.MT":{outlines:[[M,4084,522,Q,4080,499,4076,492,L,4045,492,Q,4045,499,4043,513,L,4e3,513,Q,3994,557,3965,585,3922,616,3895,637,3891,641,3875,646,3862,650,3858,657,3856,663,3848,672,3838,683,3835,687,3816,710,3785,718,3776,720,3770,721,L,3758,720,Q,3757,718,3756,717,3755,715,3754,713,L,3743,713,Q,3720,713,3719,713,3696,708,3696,679,3696,655,3685,637,3674,618,3674,599,3676,563,3675,543,3674,506,3661,494,3646,480,3629,457,3612,432,3605,422,3603,421,3585,415,3572,412,3574,394,3576,382,3551,353,3500,298,3494,290,3446,241,3431,217,3408,181,3420,120,L,3305,120,Q,3302,124,3297,134,3294,140,3290,140,3279,140,3264,125,3250,110,3198,110,3188,110,3156,79,3123,49,3113,49,3083,49,3069,55,3053,63,3046,86,3044,92,3029,107,3014,121,3012,132,3006,150,3005,161,3004,168,3001,188,2999,202,2997,229,2991,249,2953,249,2885,249,2860,246,2855,269,2855,300,2853,324,2834,342,2830,346,2811,344,2793,342,2784,351,2763,369,2749,388,2730,408,2718,422,2695,447,2692,459,2683,505,2683,505,2676,516,2640,516,2623,516,2613,508,2603,501,2592,501,L,2545,501,Q,2452,501,2450,517,2448,533,2342,533,2278,534,2254,533,2224,532,2222,502,2225,471,2225,469,2225,467,2215,432,2204,396,2204,383,L,2204,353,Q,2206,351,2215,345,2221,340,2221,337,2221,325,2209,319,2197,312,2197,296,2197,279,2191,274,2186,270,2183,266,2182,265,2182,265,2177,260,2173,256,2169,252,2164,248,2163,250,2162,252,2156,260,2149,264,2143,267,2138,271,2136,272,2133,274,2098,297,2093,301,2060,328,2039,351,2018,373,1994,388,1976,400,1943,414,1912,427,1885,459,1877,467,1846,512,1834,527,1799,553,1775,571,1772,594,1771,606,1764,644,1759,680,1759,700,1759,723,1769,737,1776,745,1793,760,1823,793,1818,874,1818,877,1818,881,1818,942,1816,960,1812,1e3,1798,1028,1778,1065,1767,1117,1750,1193,1748,1199,1739,1228,1701,1277,1658,1331,1642,1367,1617,1397,1596,1426,1555,1483,1549,1506,1543,1528,1572,1525,1600,1523,1610,1526,L,1624,1531,1641,1531,Q,1691,1531,1729,1529,1748,1529,1756,1541,1767,1555,1772,1556,1781,1557,1794,1557,L,1818,1556,Q,1864,1556,1871,1571,1875,1583,1876,1595,1876,1603,1876,1626,1876,1642,1889,1649,1896,1653,1909,1657,1910,1674,1910,1713,L,1980,1713,Q,1995,1713,2009,1723,2025,1735,2039,1738,L,2039,1742,Q,2039,1754,2039,1795,2039,1840,2032,1853,2031,1855,2016,1865,2002,1873,2002,1883,L,2002,1936,Q,2002,1942,2001,1968,2001,1994,2002,2001,2003,2004,2019,2029,2033,2053,2034,2064,2034,2067,2034,2093,2033,2114,2036,2129,2039,2150,2046,2163,2051,2173,2051,2185,2051,2202,2049,2205,L,2034,2224,Q,2031,2227,2032,2243,2032,2260,2029,2265,2031,2277,2022,2290,2010,2308,2009,2309,2006,2318,2005,2331,2004,2342,2003,2350,L,2002,2411,Q,2001,2450,2003,2475,2005,2489,1993,2498,1977,2510,1975,2514,1965,2539,1957,2541,1953,2542,1945,2549,1938,2555,1935,2558,L,1935,2570,Q,1945,2570,1970,2573,L,1970,2638,Q,1968,2640,1939,2666,1937,2668,1937,2696,1937,2697,1937,2698,1937,2745,1948,2751,1959,2757,2022,2778,2026,2780,2036,2802,2047,2825,2052,2830,2061,2838,2076,2849,2086,2858,2092,2870,2109,2907,2116,2918,2140,2950,2172,2947,2198,2944,2205,2953,2208,2957,2210,2979,2211,2993,2218,3009,2222,3018,2229,3036,2230,3037,2231,3039,2231,3050,2229,3082,2228,3117,2233,3135,2237,3147,2252,3186,2256,3194,2256,3231,2256,3280,2250,3283,2245,3286,2245,3338,2245,3379,2249,3393,2252,3405,2264,3421,2275,3436,2278,3454,2277,3461,2272,3489,2273,3518,2302,3516,2328,3515,2344,3521,2366,3530,2361,3550,2408,3553,2461,3557,2498,3559,2542,3555,2565,3553,2565,3572,2565,3593,2584,3595,2588,3595,2596,3600,2604,3606,2611,3613,2613,3616,2627,3616,2638,3617,2644,3616,2667,3612,2677,3628,2682,3636,2691,3656,2692,3658,2729,3672,2763,3687,2764,3691,2764,3695,2764,3710,2764,3724,2766,3733,2768,3745,2776,3752,2781,3757,2791,3764,2797,3770,2797,3795,2797,3808,2796,3830,2802,3831,2835,3829,2854,3828,2860,3839,2863,3844,2870,3856,2878,3866,2902,3867,L,2916,3867,Q,2926,3839,2930,3835,2939,3826,2973,3828,3004,3830,3008,3825,3010,3822,3010,3793,3010,3788,3008,3772,3005,3753,3002,3746,2999,3738,2987,3729,2976,3721,2976,3716,2976,3679,2989,3675,2989,3675,3036,3675,L,3070,3677,Q,3073,3676,3076,3676,3115,3676,3125,3676,L,3125,3710,Q,3134,3712,3176,3712,3172,3720,3176,3729,3179,3737,3184,3738,3191,3739,3213,3738,L,3242,3739,Q,3257,3739,3263,3738,3257,3721,3275,3705,3294,3687,3294,3680,3299,3608,3299,3606,3302,3597,3333,3595,3368,3591,3377,3584,3389,3577,3391,3557,3392,3534,3392,3523,3414,3525,3418,3511,3422,3497,3434,3497,3470,3497,3474,3515,3479,3533,3506,3533,3529,3533,3535,3518,3540,3503,3561,3503,3577,3503,3578,3512,3579,3522,3602,3525,3614,3526,3630,3526,3636,3525,3648,3525,3650,3525,3653,3526,3663,3526,3681,3525,3695,3525,3697,3539,3699,3555,3735,3560,3775,3564,3797,3565,L,3837,3563,Q,3861,3560,3871,3553,3875,3550,3890,3533,3904,3516,3911,3511,3935,3493,3950,3465,3959,3449,3971,3419,3979,3402,3990,3401,3997,3400,4019,3401,4047,3400,4048,3400,4061,3395,4053,3371,4054,3365,4055,3321,4056,3286,4064,3279,4066,3278,4074,3274,4082,3271,4084,3265,4085,3260,4086,3247,4086,3239,4091,3236,4104,3227,4117,3224,4134,3219,4144,3215,4153,3211,4155,3170,4158,3131,4174,3129,4187,3129,4196,3115,4207,3099,4208,3098,4228,3088,4228,3058,L,4228,2958,4222,2958,Q,4217,2940,4192,2918,4167,2897,4161,2878,4155,2844,4149,2829,4140,2804,4115,2804,4099,2804,4065,2798,4049,2794,4048,2778,4047,2761,4039,2759,4030,2755,4030,2740,4031,2720,4031,2711,4029,2695,4017,2688,4004,2682,4002,2680,L,4002,2626,Q,4033,2629,4045,2598,4052,2570,4055,2555,L,4058,2547,Q,4060,2547,4063,2526,4067,2504,4067,2495,4067,2466,4068,2461,4071,2442,4087,2445,4094,2439,4102,2427,4110,2419,4128,2417,4142,2415,4147,2403,4151,2388,4154,2380,L,4154,2337,4084,2337,Q,4083,2351,4072,2372,4052,2408,4050,2413,L,3995,2413,Q,3994,2330,3994,2325,3994,2298,4012,2295,4036,2290,4050,2247,4049,2226,4049,2216,4049,2197,4052,2182,4053,2176,4062,2166,4073,2154,4076,2145,4094,2100,4140,2053,4165,2026,4211,1984,4223,1971,4232,1949,4243,1918,4252,1895,4256,1886,4268,1883,4285,1880,4291,1875,4299,1869,4310,1859,4320,1851,4328,1841,4337,1828,4354,1820,4374,1812,4378,1808,4386,1801,4394,1782,4400,1767,4407,1767,4422,1766,4450,1761,4484,1755,4496,1754,L,4496,1734,4478,1728,4478,1699,Q,4402,1699,4367,1702,4369,1686,4357,1679,4350,1675,4328,1671,4326,1651,4326,1645,4329,1639,4330,1628,4330,1621,4330,1614,4330,1585,4325,1550,4320,1516,4320,1497,4320,1490,4339,1480,4359,1470,4362,1450,4363,1437,4382,1432,4404,1426,4410,1417,4418,1407,4434,1406,4443,1405,4467,1403,4492,1399,4492,1360,4492,1355,4485,1351,4479,1348,4479,1340,4479,1318,4488,1312,4497,1307,4497,1287,4497,1271,4491,1269,4474,1264,4455,1245,4450,1240,4449,1204,L,4449,1160,Q,4422,1168,4421,1140,4425,1106,4422,1098,L,4392,1098,Q,4389,1130,4367,1132,L,4367,1167,4342,1167,Q,4320,1160,4305,1160,4297,1160,4295,1164,4294,1168,4288,1186,L,4260,1186,Q,4224,1186,4222,1185,4217,1180,4217,1144,4217,1119,4219,1114,4223,1102,4243,1094,4266,1086,4279,1081,4282,1079,4282,1057,4282,1047,4278,1042,4270,1033,4259,1023,4259,1022,4257,1014,4256,1013,4256,1011,L,4250,1e3,Q,4221,993,4213,967,4210,955,4196,946,4183,938,4180,922,4180,920,4180,919,L,4180,896,Q,4179,880,4178,868,4154,864,4145,858,4136,851,4119,827,4102,803,4091,796,4080,789,4081,752,4084,707,4084,685,4084,656,4087,608,4089,559,4089,559,Q,4089,545,4084,522,Z]],label:"Metekel",shortLabel:"MT",labelPosition:[302.2,195.8],labelAlignment:[CEN,MID]},"ET.BE.AS":{outlines:[[M,1889,1649,Q,1876,1642,1876,1626,1876,1603,1876,1595,1875,1583,1871,1571,1864,1556,1818,1556,L,1794,1557,Q,1781,1557,1772,1556,1767,1555,1756,1541,1748,1529,1729,1529,1691,1531,1641,1531,L,1624,1531,Q,1634,1536,1637,1544,1638,1548,1640,1552,1647,1579,1660,1600,1672,1620,1672,1652,1672,1697,1665,1706,1655,1716,1649,1723,1641,1734,1640,1747,1640,1750,1640,1753,1643,1784,1630,1816,1613,1857,1613,1890,1613,1954,1599,1980,1585,2006,1585,2037,1585,2051,1592,2060,1601,2074,1605,2090,1615,2131,1639,2133,1631,2146,1597,2176,1552,2216,1550,2218,1541,2227,1497,2259,1453,2291,1448,2296,1439,2305,1438,2354,1438,2398,1420,2409,1414,2413,1388,2413,1363,2414,1350,2422,1343,2426,1337,2436,1320,2447,1313,2461,1307,2475,1303,2490,L,1251,2490,1251,2466,1289,2466,1289,2408,1270,2408,Q,1255,2403,1248,2400,1231,2394,1226,2387,1211,2363,1187,2340,1159,2314,1144,2294,1128,2272,1090,2246,1040,2211,1029,2201,999,2166,985,2150,959,2120,938,2125,913,2154,859,2195,842,2207,766,2259,764,2260,711,2287,679,2301,675,2322,663,2372,644,2420,644,2421,643,2423,528,2559,490,2609,473,2632,458,2664,451,2678,431,2684,409,2688,401,2692,390,2697,392,2714,397,2745,395,2757,392,2783,380,2786,369,2788,369,2810,369,2828,384,2832,410,2839,421,2848,438,2862,453,2870,462,2877,462,2901,462,2920,440,2932,419,2943,421,2974,423,3007,409,3017,393,3027,393,3045,393,3091,412,3114,432,3137,434,3200,435,3217,450,3240,459,3252,475,3271,497,3300,499,3337,497,3349,497,3379,497,3389,502,3422,506,3455,506,3465,506,3468,490,3484,474,3500,473,3510,470,3534,449,3567,435,3589,396,3616,357,3642,334,3645,315,3646,306,3662,301,3670,293,3688,288,3697,273,3717,260,3734,260,3747,260,3779,256,3818,252,3858,252,3873,252,3879,255,3908,259,3937,259,3954,259,3971,238,4039,219,4103,215,4107,205,4118,188,4133,174,4147,172,4171,169,4178,154,4213,152,4217,151,4220,L,188,4220,Q,193,4220,213,4217,229,4218,223,4235,246,4235,283,4234,283,4246,286,4278,286,4284,293,4293,301,4303,301,4315,301,4322,301,4341,301,4357,305,4359,320,4366,330,4368,336,4368,350,4368,L,410,4369,Q,426,4369,431,4373,436,4376,446,4394,448,4399,466,4399,485,4399,488,4402,499,4415,502,4424,503,4426,523,4426,L,553,4425,Q,557,4402,559,4391,562,4375,577,4376,L,609,4376,Q,613,4372,614,4361,614,4348,615,4341,624,4341,629,4340,L,643,4340,Q,642,4338,642,4337,L,660,4337,677,4342,Q,678,4347,680,4360,682,4370,690,4371,692,4372,703,4371,713,4371,719,4373,727,4376,736,4387,744,4397,748,4397,L,817,4397,Q,821,4382,824,4375,829,4361,837,4361,848,4361,874,4366,900,4371,908,4371,907,4397,927,4413,948,4432,953,4458,954,4464,987,4469,1023,4476,1031,4493,1039,4510,1061,4515,1079,4520,1126,4522,L,1186,4522,Q,1189,4529,1193,4541,1199,4550,1213,4552,L,1267,4552,Q,1264,4545,1272,4532,1280,4519,1286,4518,1310,4516,1313,4503,1310,4486,1316,4420,1321,4353,1310,4227,L,1310,4143,Q,1332,4136,1354,4136,1361,4126,1361,4098,L,1408,4098,Q,1419,4098,1430,4086,1446,4067,1448,4066,1460,4056,1474,4031,1491,4002,1491,3981,1491,3957,1487,3955,1481,3950,1433,3950,L,1433,3940,Q,1438,3936,1438,3928,1438,3920,1438,3918,1454,3918,1466,3907,1474,3899,1482,3880,1492,3860,1508,3858,1518,3856,1518,3836,1518,3814,1506,3811,1470,3802,1463,3798,1460,3762,1439,3766,L,1439,3730,1411,3730,Q,1412,3710,1388,3700,1366,3690,1371,3667,L,1354,3667,1354,3623,Q,1413,3623,1438,3621,1451,3621,1470,3600,1490,3578,1499,3574,1504,3572,1520,3568,1534,3564,1535,3562,1541,3557,1544,3554,1552,3548,1559,3548,1579,3548,1598,3541,1608,3538,1616,3529,1625,3518,1627,3517,1640,3510,1650,3492,1659,3470,1664,3459,1671,3447,1697,3421,1722,3395,1724,3391,1735,3371,1739,3324,1742,3284,1739,3245,1739,3244,1739,3243,L,1741,3199,Q,1745,3191,1756,3176,1762,3167,1762,3158,1762,3090,1747,3080,1732,3070,1732,2976,1732,2922,1734,2907,1736,2884,1748,2860,1754,2822,1757,2815,1760,2809,1772,2801,1787,2791,1790,2788,1826,2751,1827,2749,1827,2749,1842,2732,1852,2719,1860,2720,1871,2720,1878,2717,1885,2714,1893,2705,1901,2697,1914,2697,1933,2697,1937,2696,1937,2668,1939,2666,1968,2640,1970,2638,L,1970,2573,Q,1945,2570,1935,2570,L,1935,2558,Q,1938,2555,1945,2549,1953,2542,1957,2541,1965,2539,1975,2514,1977,2510,1993,2498,2005,2489,2003,2475,2001,2450,2002,2411,L,2003,2350,Q,2004,2342,2005,2331,2006,2318,2009,2309,2010,2308,2022,2290,2031,2277,2029,2265,2032,2260,2032,2243,2031,2227,2034,2224,L,2049,2205,Q,2051,2202,2051,2185,2051,2173,2046,2163,2039,2150,2036,2129,2033,2114,2034,2093,2034,2067,2034,2064,2033,2053,2019,2029,2003,2004,2002,2001,2001,1994,2001,1968,2002,1942,2002,1936,L,2002,1883,Q,2002,1873,2016,1865,2031,1855,2032,1853,2039,1840,2039,1795,2039,1754,2039,1742,L,2039,1738,Q,2025,1735,2009,1723,1995,1713,1980,1713,L,1910,1713,Q,1910,1674,1909,1657,Q,1896,1653,1889,1649,Z]],label:"Asosa",shortLabel:"AS",labelPosition:[105.6,306.3],labelAlignment:[CEN,MID]},"ET.BE.KM":{outlines:[[M,4179,4666,Q,4179,4668,4179,4685,4179,4696,4174,4706,4167,4719,4156,4721,4149,4723,4149,4735,4149,4745,4151,4773,4154,4799,4154,4812,4154,4816,4167,4841,4179,4863,4174,4875,4185,4876,4190,4888,4195,4899,4192,4904,4204,4909,4204,4915,L,4204,4944,4232,4944,Q,4236,4925,4237,4916,4241,4899,4246,4895,4254,4889,4302,4889,L,4302,4811,4283,4811,Q,4283,4812,4278,4812,4277,4804,4276,4800,4274,4792,4275,4788,4259,4791,4242,4791,4246,4777,4246,4771,4247,4771,4309,4765,4351,4761,4349,4727,4369,4724,4375,4724,L,4375,4686,Q,4374,4678,4359,4668,4345,4660,4348,4645,L,4326,4644,Q,4321,4618,4321,4613,4311,4611,4290,4611,L,4275,4611,Q,4266,4612,4259,4615,4251,4618,4243,4627,4235,4636,4227,4639,4219,4641,4217,4649,4216,4657,4212,4659,4208,4661,4197,4662,Q,4186,4664,4179,4666,Z],[M,4450,2889,L,4420,2889,Q,4415,2901,4413,2903,4412,2904,4403,2904,4382,2904,4377,2890,4372,2876,4349,2876,4317,2876,4304,2896,4274,2947,4263,2958,L,4228,2958,4228,3058,Q,4228,3088,4208,3098,4207,3099,4196,3115,4187,3129,4174,3129,4158,3131,4155,3170,4153,3211,4144,3215,4134,3219,4117,3224,4104,3227,4091,3236,4086,3239,4086,3247,4085,3260,4084,3265,4082,3271,4074,3274,4066,3278,4064,3279,4056,3286,4055,3321,4054,3365,4053,3371,4061,3395,4048,3400,4047,3400,4019,3401,3997,3400,3990,3401,3979,3402,3971,3419,3959,3449,3950,3465,3935,3493,3911,3511,3904,3516,3890,3533,3875,3550,3871,3553,3861,3560,3837,3563,L,3797,3565,Q,3775,3564,3735,3560,3699,3555,3697,3539,3695,3525,3681,3525,3663,3526,3653,3526,3650,3525,3648,3525,3636,3525,3630,3526,3614,3526,3602,3525,3579,3522,3578,3512,3577,3503,3561,3503,3540,3503,3535,3518,3529,3533,3506,3533,3479,3533,3474,3515,3470,3497,3434,3497,3422,3497,3418,3511,3414,3525,3392,3523,3392,3534,3391,3557,3389,3577,3377,3584,3368,3591,3333,3595,3302,3597,3299,3606,3299,3608,3294,3680,3294,3687,3275,3705,3257,3721,3263,3738,3257,3739,3242,3739,L,3213,3738,Q,3191,3739,3184,3738,3179,3737,3176,3729,3172,3720,3176,3712,3134,3712,3125,3710,L,3125,3676,Q,3115,3676,3076,3676,3073,3676,3070,3677,L,3036,3675,Q,2989,3675,2989,3675,2976,3679,2976,3716,2976,3721,2987,3729,2999,3738,3002,3746,3005,3753,3008,3772,3010,3788,3010,3793,3010,3822,3008,3825,3004,3830,2973,3828,2939,3826,2930,3835,2926,3839,2916,3867,L,2902,3867,Q,2878,3866,2870,3856,2863,3844,2860,3839,2854,3828,2835,3829,2802,3831,2796,3830,2797,3808,2797,3795,2797,3770,2791,3764,2781,3757,2776,3752,2768,3745,2766,3733,2764,3724,2764,3710,2764,3695,2764,3691,2763,3687,2729,3672,2692,3658,2691,3656,2682,3636,2677,3628,2667,3612,2644,3616,2638,3617,2627,3616,2613,3616,2611,3613,2604,3606,2596,3600,2588,3595,2584,3595,2565,3593,2565,3572,2565,3553,2542,3555,2498,3559,2461,3557,2408,3553,2361,3550,2366,3530,2344,3521,2328,3515,2302,3516,2273,3518,2272,3489,2277,3461,2278,3454,2275,3436,2264,3421,2252,3405,2249,3393,2245,3379,2245,3338,2245,3286,2250,3283,2256,3280,2256,3231,2256,3194,2252,3186,2237,3147,2233,3135,2228,3117,2229,3082,2231,3050,2231,3039,2230,3037,2229,3036,2222,3018,2218,3009,2211,2993,2210,2979,2208,2957,2205,2953,2198,2944,2172,2947,2140,2950,2116,2918,2109,2907,2092,2870,2086,2858,2076,2849,2061,2838,2052,2830,2047,2825,2036,2802,2026,2780,2022,2778,1959,2757,1948,2751,1937,2745,1937,2698,1937,2697,1937,2696,1933,2697,1914,2697,1901,2697,1893,2705,1885,2714,1878,2717,1871,2720,1860,2720,1852,2719,1842,2732,1827,2749,1827,2749,1826,2751,1790,2788,1787,2791,1772,2801,1760,2809,1757,2815,1754,2822,1748,2860,1736,2884,1734,2907,1732,2922,1732,2976,1732,3070,1747,3080,1762,3090,1762,3158,1762,3167,1756,3176,1745,3191,1741,3199,L,1739,3243,Q,1739,3244,1739,3245,1742,3284,1739,3324,1735,3371,1724,3391,1722,3395,1697,3421,1671,3447,1664,3459,1659,3470,1650,3492,1640,3510,1627,3517,1625,3518,1616,3529,1608,3538,1598,3541,1579,3548,1559,3548,1552,3548,1544,3554,1541,3557,1535,3562,1534,3564,1520,3568,1504,3572,1499,3574,1490,3578,1470,3600,1451,3621,1438,3621,1413,3623,1354,3623,L,1354,3667,1371,3667,Q,1366,3690,1388,3700,1412,3710,1411,3730,L,1439,3730,1439,3705,1441,3701,1494,3701,Q,1502,3715,1516,3715,1523,3716,1540,3713,1557,3714,1562,3731,1566,3748,1587,3748,1606,3748,1608,3745,1608,3744,1610,3703,1612,3681,1633,3679,1643,3678,1658,3681,L,1701,3681,Q,1710,3756,1718,3831,1721,3857,1725,3864,1729,3871,1744,3872,1769,3872,1772,3883,1775,3890,1777,3913,L,1810,3913,Q,1810,3909,1813,3867,L,1835,3867,1835,3825,1990,3825,Q,1993,3842,1991,3868,1993,3887,2019,3890,L,2066,3890,Q,2072,3885,2075,3879,2077,3875,2079,3873,L,2090,3865,2106,3866,Q,2138,3867,2143,3871,2166,3896,2197,3914,2210,3922,2234,3950,2261,3980,2271,3988,2279,3994,2293,4002,2303,4011,2302,4031,2301,4073,2319,4093,2321,4096,2328,4103,2335,4112,2336,4119,2337,4146,2339,4150,2345,4166,2356,4177,2365,4185,2365,4201,2365,4217,2365,4218,2364,4221,2358,4244,L,2358,4264,Q,2380,4267,2428,4267,2488,4266,2496,4267,2496,4334,2623,4334,2636,4334,2643,4320,2650,4306,2671,4306,2684,4306,2688,4307,2700,4310,2700,4322,2700,4330,2705,4342,2712,4356,2719,4359,2724,4361,2734,4374,2745,4386,2750,4386,2771,4389,2797,4386,2843,4382,2853,4397,2855,4399,2863,4441,2864,4452,2864,4469,2862,4488,2863,4494,2863,4497,2872,4511,2878,4519,2880,4525,2882,4529,2883,4532,L,2886,4608,Q,2886,4612,2896,4618,L,2910,4625,Q,2913,4628,2929,4640,2941,4648,2955,4662,2960,4667,2970,4687,2975,4695,2992,4695,3004,4695,3005,4688,3005,4675,3007,4666,L,3017,4666,Q,3036,4673,3031,4687,3046,4682,3050,4694,3052,4700,3052,4720,3052,4727,3059,4730,3063,4732,3073,4736,3079,4738,3081,4746,3083,4756,3084,4756,L,3084,4792,3060,4792,Q,3059,4803,3055,4807,3050,4814,3036,4814,L,3036,4841,Q,3051,4842,3054,4849,3055,4851,3055,4867,3055,4883,3054,4886,3054,4888,3047,4890,3039,4892,3036,4895,L,3036,4971,Q,3054,4963,3060,4973,3069,4988,3080,4990,3100,4995,3139,4993,3163,4993,3167,4988,3173,4970,3183,4945,L,3319,4945,Q,3319,4989,3326,5018,3330,5020,3376,5018,3403,5016,3406,5053,3406,5058,3406,5078,3406,5095,3407,5105,3409,5114,3419,5118,3432,5123,3437,5128,3452,5141,3477,5145,3492,5148,3524,5150,3532,5151,3544,5150,3553,5152,3553,5160,3553,5164,3552,5169,3554,5172,3562,5182,3570,5190,3572,5201,3574,5213,3574,5226,L,3574,5267,Q,3574,5283,3588,5295,3602,5308,3602,5317,3602,5340,3603,5346,3604,5350,3613,5351,3618,5351,3630,5351,3641,5352,3660,5352,3665,5348,3672,5368,L,3670,5373,Q,3672,5371,3686,5371,L,3695,5372,3695,5451,3722,5454,3722,5486,Q,3719,5493,3719,5510,3715,5510,3712,5511,3697,5514,3701,5539,L,3668,5539,Q,3665,5521,3662,5518,3660,5517,3651,5517,L,3561,5515,Q,3550,5515,3551,5548,3551,5590,3547,5599,3541,5611,3533,5639,3531,5644,3523,5651,3513,5657,3509,5664,L,3510,5834,3662,5834,3662,5864,Q,3704,5864,3719,5866,L,3727,5866,3727,5818,3759,5818,3759,5795,3774,5795,Q,3785,5819,3786,5828,3838,5820,3832,5872,3829,5890,3839,5909,3845,5920,3859,5947,L,3900,5947,Q,3900,5943,3900,5885,3900,5851,3905,5834,L,3905,5821,Q,3883,5833,3877,5810,3871,5788,3853,5795,L,3853,5761,Q,3886,5769,3887,5719,3881,5661,3881,5651,L,3916,5651,Q,3915,5681,3922,5686,3925,5689,3953,5689,L,4050,5685,Q,4052,5677,4052,5671,L,4073,5671,Q,4076,5661,4076,5651,4076,5643,4051,5638,4026,5633,4025,5622,4025,5610,4025,5603,4026,5591,4023,5586,4016,5582,4011,5579,4003,5574,4007,5563,L,3990,5563,Q,3982,5567,3983,5578,3984,5588,3977,5589,3973,5590,3954,5589,3944,5588,3935,5598,3927,5609,3931,5622,L,3907,5622,Q,3908,5636,3894,5639,3889,5640,3870,5640,3840,5640,3826,5632,3812,5625,3808,5603,3805,5589,3803,5563,L,3800,5538,3787,5535,Q,3780,5533,3770,5527,3749,5517,3743,5513,3741,5511,3740,5510,3736,5503,3740,5483,3744,5458,3733,5450,3727,5447,3722,5444,3712,5440,3712,5434,L,3712,5400,Q,3712,5379,3712,5368,3712,5350,3708,5333,3719,5337,3724,5326,3726,5323,3727,5308,3728,5293,3736,5293,3744,5294,3750,5294,3756,5293,3783,5293,3811,5293,3825,5289,3824,5239,3827,5215,3831,5172,3881,5175,L,3881,5161,Q,3882,5137,3879,5133,3877,5129,3870,5128,3864,5126,3862,5124,3856,5113,3854,5096,3854,5074,3854,5063,L,3794,5063,Q,3787,5044,3776,5032,3770,5026,3770,5e3,3770,4988,3772,4986,3773,4983,3784,4979,3790,4978,3794,4970,3797,4962,3803,4961,3821,4955,3822,4938,3820,4918,3822,4909,L,3868,4909,Q,3873,4911,3896,4909,3912,4908,3917,4918,3920,4923,3924,4935,3929,4945,3944,4945,3982,4945,3992,4947,3996,4948,3998,4953,4e3,4961,4e3,4962,4003,4967,4009,4969,4013,4970,4028,4970,4045,4970,4048,4969,4054,4966,4055,4954,4055,4953,4055,4943,4055,4936,4059,4933,4067,4928,4070,4912,4070,4908,4070,4887,4071,4878,4071,4870,4072,4855,4070,4848,4069,4842,4062,4827,4054,4812,4053,4809,4055,4784,4055,4772,4055,4749,4034,4737,L,4034,4712,Q,4061,4709,4058,4669,4054,4632,4070,4637,L,4070,4628,Q,4071,4618,4061,4606,4049,4592,4030,4593,4015,4593,4013,4577,4014,4557,4013,4547,3974,4545,3948,4538,3935,4535,3912,4535,3906,4535,3899,4527,3891,4519,3887,4519,3868,4520,3860,4518,3844,4513,3837,4497,3834,4488,3823,4474,3815,4465,3809,4460,3806,4457,3803,4455,L,3803,4454,Q,3802,4454,3802,4454,3787,4445,3773,4431,3758,4416,3749,4399,3732,4369,3716,4358,3712,4355,3712,4325,3712,4311,3722,4313,3732,4314,3735,4299,3738,4284,3747,4284,3753,4284,3753,4270,3753,4239,3739,4231,3724,4223,3724,4170,L,3724,4162,3740,4162,Q,3741,4164,3745,4165,L,3769,4165,3769,4131,Q,3770,4111,3744,4106,3712,4103,3699,4097,L,3699,3734,Q,3699,3716,3707,3712,3716,3708,3718,3705,3723,3695,3731,3692,3735,3690,3745,3690,3759,3690,3786,3689,3811,3688,3829,3690,3839,3691,3845,3682,3853,3671,3861,3669,3883,3664,3893,3652,3898,3646,3910,3645,3916,3643,3933,3642,3943,3640,3952,3629,3961,3617,3963,3617,3973,3616,4003,3616,4027,3615,4037,3613,4047,3610,4050,3601,4053,3587,4054,3585,4057,3582,4073,3579,4087,3573,4083,3553,4078,3527,4097,3520,4098,3519,4135,3514,L,4135,3509,Q,4135,3498,4119,3492,4103,3485,4103,3466,4103,3442,4119,3438,4140,3433,4150,3414,4143,3398,4157,3382,4164,3373,4185,3353,4188,3350,4200,3341,4211,3332,4214,3325,4217,3312,4219,3308,4220,3300,4234,3293,4254,3283,4266,3272,4277,3261,4282,3254,4286,3248,4290,3241,4294,3235,4316,3202,4337,3172,4341,3150,L,4370,3150,Q,4385,3151,4434,3153,4488,3156,4500,3156,L,4500,3216,Q,4485,3219,4480,3227,4474,3234,4474,3250,4475,3266,4465,3271,4462,3273,4435,3279,L,4435,3287,Q,4439,3313,4445,3337,4446,3340,4460,3350,4472,3359,4469,3374,4481,3378,4493,3379,4495,3380,4500,3388,4505,3398,4507,3399,4516,3404,4525,3405,4530,3405,4543,3405,4560,3405,4564,3403,4568,3401,4570,3394,4571,3387,4575,3386,4577,3386,4598,3386,4613,3385,4621,3383,L,4621,3306,Q,4621,3282,4638,3280,4648,3279,4675,3277,4681,3275,4687,3265,4694,3254,4701,3250,4706,3248,4719,3247,4728,3246,4736,3235,4742,3228,4761,3220,4776,3211,4771,3190,4794,3190,4811,3188,L,4834,3188,Q,4832,3204,4846,3211,4854,3215,4873,3223,4877,3227,4890,3241,4903,3254,4914,3257,4918,3258,4932,3258,4946,3259,4952,3262,4963,3266,4977,3284,4986,3291,5e3,3296,5008,3300,5025,3306,L,5025,3400,5098,3400,Q,5114,3382,5117,3380,5130,3371,5152,3374,5172,3377,5181,3357,5185,3349,5193,3348,5196,3347,5209,3347,5232,3347,5232,3365,5233,3382,5262,3382,5282,3382,5287,3375,5295,3363,5320,3352,L,5320,3316,Q,5326,3318,5345,3318,L,5344,3243,Q,5320,3243,5312,3225,5303,3208,5296,3208,5282,3209,5255,3201,5224,3192,5218,3191,5165,3185,5111,3191,5093,3194,5078,3181,5059,3166,5057,3165,5035,3158,4968,3163,4948,3163,4931,3155,4914,3146,4907,3135,4903,3128,4895,3128,4885,3127,4881,3121,4877,3117,4870,3102,4865,3091,4859,3091,4846,3089,4822,3090,4800,3091,4797,3091,4735,3091,4730,3097,4725,3102,4715,3189,L,4692,3189,Q,4680,3173,4653,3156,4623,3138,4613,3130,4612,3129,4587,3102,4571,3085,4554,3085,4539,3085,4535,3095,4532,3106,4508,3106,4464,3106,4448,3087,4435,3071,4435,3031,4435,2997,4437,2990,4441,2974,4467,2943,4449,2944,4449,2921,Q,4453,2895,4450,2889,Z]],label:"Kamashi",shortLabel:"KM",labelPosition:[332.7,423.2],labelAlignment:[CEN,MID]},"ET.BE.TG":{outlines:[[M,615,4341,Q,614,4348,614,4361,613,4372,609,4376,L,577,4376,Q,562,4375,559,4391,557,4402,553,4425,L,523,4426,Q,503,4426,502,4424,499,4415,488,4402,485,4399,466,4399,448,4399,446,4394,436,4376,431,4373,426,4369,410,4369,L,350,4368,Q,336,4368,330,4368,320,4366,305,4359,301,4357,301,4341,301,4322,301,4315,301,4303,293,4293,286,4284,286,4278,283,4246,283,4234,246,4235,223,4235,229,4218,213,4217,193,4220,188,4220,L,151,4220,Q,144,4235,141,4242,141,4245,141,4248,138,4281,127,4327,111,4399,106,4427,105,4437,98,4448,94,4455,84,4470,81,4476,77,4491,73,4507,71,4511,57,4539,54,4559,52,4570,52,4608,52,4653,58,4716,64,4790,65,4824,66,4844,64,4899,63,4947,65,4974,66,4982,83,5029,95,5062,99,5075,100,5080,101,5083,100,5091,99,5096,L,99,5216,Q,204,5216,240,5220,252,5221,263,5230,275,5239,283,5240,290,5241,314,5241,336,5240,352,5243,L,518,5243,Q,509,5200,533,5179,568,5159,586,5143,594,5136,596,5100,596,5064,596,5063,597,5061,613,5038,626,5020,623,5002,623,4957,625,4933,625,4910,644,4909,653,4909,668,4913,688,4913,689,4896,685,4875,689,4867,694,4866,721,4864,746,4861,746,4853,744,4846,744,4845,L,720,4845,720,4823,693,4823,693,4852,Q,687,4851,673,4853,656,4857,647,4857,636,4857,631,4846,628,4838,628,4829,629,4819,620,4813,611,4809,611,4803,614,4780,599,4775,575,4773,560,4770,L,560,4719,578,4719,Q,639,4727,647,4727,L,647,4742,665,4742,Q,670,4737,670,4719,666,4683,668,4671,669,4660,682,4660,695,4660,703,4659,L,725,4659,Q,728,4665,727,4685,726,4692,743,4692,765,4692,765,4667,765,4641,790,4637,794,4618,794,4613,794,4593,787,4562,781,4530,775,4528,750,4522,737,4518,711,4510,698,4493,690,4481,685,4474,675,4461,665,4456,654,4452,651,4443,648,4435,648,4423,648,4368,643,4340,L,629,4340,Q,624,4341,615,4341,Z]],label:"Tongo",shortLabel:"TG",labelPosition:[33.3,473],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"benishangulgumuzregion",type:"maps"}}})});