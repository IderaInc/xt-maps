/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Pavlodar.17.02-23-2016 08:17:47
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-pavlodar", function () {

    var global = this, // access global namespace
        lib = global.hcLib, // access html5 charting library
        api = lib.chartAPI, // access vizualization definition structure
        moduleCmdQueue = lib.moduleCmdQueue,
        injectModule = lib.injectModuleDependency, // access module dependency

        // constants
        M = "M", // SVG MoveTo
        L = "L", // SVG LineTo
        Z = "Z", // SVG ClosePath
        Q = "Q", // SVG Quadratic Beizer
        LFT = "left",
        RGT = "right",
        CEN = "center",
        MID = "middle",
        TOP = "top",
        BTM = "bottom",
        MAPS = "maps", // Name of dependent module

        
        hasGeoBase = !!api.geo,

        geodefinitions, // store map drawing information
        definition,
        name,
        count;

    geodefinitions = [{
        name: "Pavlodar",
        revision: 17,
        
        standaloneInit: true,

        baseWidth: 515,
        baseHeight: 600,
        baseScaleFactor: 10,

        /**
         * @type {Object.}
         */
        entities: {
            "KZ.PA.BA": { 
                outlines: [
                    [M,2553,3830,Q,2542,3840,2526,3866,2512,3885,2491,3896,2468,3907,2461,3916,2418,3968,2410,3983,2391,4016,2394,4062,L,2322,4062,Q,2288,4061,2279,4048,2267,4032,2238,4032,2207,4033,2197,4025,2186,4016,2150,4012,2145,4011,2136,4002,2127,3993,2120,3993,2094,3998,2078,3997,2050,3996,2038,3966,L,2005,3966,Q,1991,4010,1979,4033,1962,4064,1936,4088,1926,4097,1885,4155,1855,4197,1836,4197,1830,4197,1818,4187,1805,4177,1781,4175,1756,4173,1748,4160,1740,4147,1717,4147,1697,4147,1692,4156,1687,4164,1685,4197,L,1600,4203,Q,1579,4203,1566,4225,1561,4232,1547,4240,1536,4246,1530,4260,1519,4287,1517,4304,1514,4318,1514,4347,1514,4361,1502,4391,1491,4418,1494,4436,L,1464,4436,Q,1362,4412,1300,4402,1290,4400,1254,4362,1218,4325,1185,4325,1172,4325,1109,4355,1041,4387,1041,4401,1041,4402,1091,4508,L,1091,4523,Q,1016,4533,909,4527,895,4526,864,4538,824,4554,810,4556,790,4560,749,4560,711,4558,708,4558,618,4558,558,4552,554,4574,554,4604,554,4675,569,4698,584,4721,584,4773,584,4791,537,4806,490,4823,490,4842,490,4847,498,4895,498,4930,480,4941,462,4952,462,4985,462,5014,471,5030,478,5041,509,5082,519,5097,542,5104,550,5106,559,5107,575,5110,620,5110,665,5110,674,5107,698,5103,712,5082,726,5061,759,5063,767,5063,804,5062,830,5060,830,5063,915,5063,937,5072,961,5080,1010,5080,1016,5080,1108,5076,1108,5088,1119,5103,1130,5117,1130,5130,1130,5138,1105,5145,1078,5152,1078,5170,1075,5178,1075,5234,1075,5260,1075,5298,1082,5324,1139,5324,1160,5324,1188,5300,1215,5274,1227,5274,1239,5274,1255,5287,1257,5290,1259,5292,1292,5332,1296,5335,1314,5354,1338,5360,1368,5366,1386,5382,1398,5393,1426,5433,1444,5460,1489,5532,1547,5611,1547,5641,1547,5663,1482,5671,1410,5680,1409,5681,1400,5690,1379,5716,1366,5734,1346,5744,1319,5757,1315,5776,1314,5780,1314,5815,1314,5838,1320,5852,1331,5871,1338,5906,1339,5911,1339,5926,1342,5940,1357,5942,L,1358,5942,1408,5947,Q,1442,5947,1452,5918,1467,5871,1472,5864,1482,5852,1500,5852,1510,5852,1530,5854,1554,5851,1585,5828,1591,5823,1638,5800,1672,5782,1689,5757,1711,5724,1747,5714,1767,5710,1816,5711,1838,5711,1959,5715,2042,5717,2099,5713,2127,5711,2169,5695,2229,5673,2239,5670,2281,5656,2296,5633,2305,5615,2345,5615,2378,5615,2404,5651,2428,5686,2465,5686,2492,5686,2525,5645,2558,5602,2582,5598,L,2650,5584,Q,2670,5578,2688,5564,2700,5554,2715,5554,2740,5554,2763,5580,2786,5604,2827,5604,2853,5604,2857,5602,2862,5597,2868,5568,2869,5561,2879,5533,2887,5508,2887,5492,2887,5471,2869,5458,2851,5446,2851,5433,2851,5398,2882,5321,2911,5247,2933,5220,2933,5218,2935,5218,2893,5213,2876,5213,2845,5213,2835,5226,2823,5238,2813,5238,2801,5238,2796,5233,2788,5224,2781,5221,2771,5215,2769,5193,2767,5174,2743,5163,2718,5153,2711,5148,2701,5141,2677,5132,2650,5123,2643,5118,2626,5107,2609,5104,2591,5103,2580,5100,2561,5094,2542,5081,2523,5066,2518,5064,2466,5045,2452,5038,2442,5033,2439,5023,L,2433,5008,Q,2421,4991,2417,4976,2415,4972,2416,4960,2417,4947,2416,4942,2414,4928,2406,4921,2397,4911,2396,4908,L,2396,4897,Q,2433,4897,2442,4893,2455,4886,2462,4884,2468,4883,2486,4880,2493,4877,2508,4876,2519,4874,2518,4861,2517,4834,2518,4810,2517,4773,2516,4756,2515,4726,2525,4711,2530,4700,2537,4694,2541,4691,2552,4683,L,2552,4632,2636,4632,2651,4634,Q,2651,4640,2673,4628,2678,4625,2687,4612,2693,4595,2695,4593,2700,4584,2709,4585,2715,4585,2727,4585,2739,4585,2749,4582,L,2755,4543,2751,4340,Q,2751,4330,2741,4326,2728,4324,2721,4321,2698,4311,2688,4293,2681,4280,2667,4277,2647,4275,2645,4274,2628,4264,2623,4257,2618,4250,2618,4237,L,2620,4210,Q,2620,4201,2617,4192,2611,4181,2608,4172,2606,4166,2606,4135,L,2602,4057,Q,2602,4050,2612,4028,2625,4004,2627,4000,L,2630,3963,Q,2630,3937,2623,3926,2612,3907,2607,3886,2600,3862,2599,3838,2599,3816,2598,3805,L,2587,3805,Q,2567,3814,2553,3830,Z]
                ], 
                label: "Bayanaul", 
                shortLabel: "BA", 
                labelPosition: [169.8,487.6], 
                labelAlignment: [CEN,MID]
            },
            "KZ.PA.ER": { 
                outlines: [
                    [M,1459,985,Q,1451,973,1448,966,1441,955,1441,947,1445,899,1442,870,1436,871,1430,871,1411,871,1380,842,1350,813,1290,813,1227,813,1219,826,1177,900,1164,914,1146,926,1135,936,1114,953,1111,977,1106,1020,1095,1029,1089,1032,1060,1032,1035,1032,1028,1031,1008,1027,968,1021,L,936,1021,936,1044,Q,938,1081,938,1149,L,970,1151,970,1202,Q,959,1209,950,1224,941,1241,942,1259,942,1270,935,1287,927,1307,927,1315,L,906,1317,Q,885,1317,828,1265,771,1213,771,1194,771,1181,778,1161,L,778,1122,767,1122,Q,751,1129,722,1129,696,1129,690,1126,689,1125,687,1123,679,1116,666,1107,655,1100,637,1097,618,1095,611,1092,566,1064,546,1059,534,1055,491,1055,434,1055,421,1084,409,1111,392,1112,L,286,1099,Q,268,1099,199,1220,145,1316,105,1336,114,1346,121,1371,129,1395,147,1416,158,1430,189,1451,201,1459,201,1493,201,1516,190,1535,176,1559,149,1559,135,1559,118,1552,100,1545,90,1545,74,1545,70,1561,68,1570,62,1600,62,1605,62,1612,61,1634,58,1673,58,1693,59,1695,65,1707,89,1710,99,1711,102,1720,105,1725,107,1733,110,1737,135,1737,159,1737,165,1733,179,1719,201,1707,209,1703,230,1680,247,1661,266,1661,314,1661,331,1699,345,1725,345,1779,345,1813,331,1814,305,1816,278,1852,269,1866,261,1874,249,1890,235,1887,L,208,1887,Q,204,1887,184,1903,L,165,1919,Q,158,1919,155,1915,149,1911,146,1910,L,122,1910,122,1925,Q,139,1927,139,1941,L,138,1962,Q,142,1962,145,1964,L,186,1964,186,1946,Q,181,1941,181,1936,181,1930,199,1923,216,1916,230,1916,247,1916,248,1924,249,1940,258,1949,268,1959,277,1977,285,1995,285,2006,285,2017,246,2042,206,2067,206,2096,206,2119,221,2139,226,2144,218,2164,212,2182,224,2189,265,2213,282,2212,294,2212,325,2206,362,2206,369,2179,375,2135,388,2103,395,2086,402,2076,408,2070,428,2050,447,2029,472,2031,483,2032,491,2036,492,2037,494,2037,522,2039,526,2055,531,2085,549,2101,569,2119,581,2134,591,2123,600,2095,612,2059,621,2044,634,2023,642,1991,652,1971,684,1971,686,1971,687,1971,706,1972,707,1981,708,1990,735,1990,742,1990,760,1987,775,1987,785,1992,875,2035,880,2039,901,2051,925,2071,945,2083,978,2079,1010,2073,1087,2080,1129,2080,1169,2030,1176,2020,1191,2014,1211,2005,1216,2002,1222,1996,1232,1979,1240,1964,1249,1964,1257,1964,1261,1980,1267,1995,1277,1996,1292,1997,1299,2006,1304,2014,1317,2014,1331,2014,1342,2005,1350,2001,1364,1989,1370,1983,1375,1964,1379,1947,1378,1936,1380,1924,1388,1916,1397,1907,1400,1897,1398,1880,1408,1876,1411,1875,1431,1875,1461,1875,1466,1882,L,1474,1899,Q,1478,1909,1486,1910,1487,1910,1524,1907,1555,1905,1564,1913,1575,1923,1585,1943,1597,1971,1600,1976,1611,1992,1627,1995,1630,1996,1659,1996,1692,1996,1695,1992,1697,1965,1706,1922,L,1810,1906,Q,1829,1911,1857,1896,1891,1879,1911,1876,1919,1875,1948,1850,1980,1822,1997,1816,2002,1814,2026,1813,2035,1812,2039,1809,2040,1805,2041,1802,2039,1790,2042,1776,2046,1763,2047,1756,2047,1753,2048,1750,2048,1721,2016,1723,1974,1725,1966,1702,1958,1681,1936,1652,1922,1634,1922,1599,1922,1595,1924,1592,1910,1584,1902,1581,1889,1573,1878,1573,1866,1573,1854,1562,1841,1552,1841,1542,1841,1527,1857,1522,1871,1516,1871,1501,L,1869,1481,Q,1847,1489,1829,1473,1809,1455,1799,1456,L,1799,1445,Q,1808,1422,1819,1419,1827,1416,1827,1409,1827,1401,1797,1369,1766,1336,1764,1333,1749,1315,1721,1305,1695,1295,1681,1279,L,1651,1279,Q,1648,1290,1646,1296,1645,1297,1632,1297,1620,1297,1598,1279,1575,1259,1575,1242,1575,1217,1587,1212,1598,1206,1598,1192,1598,1173,1579,1150,1559,1125,1559,1106,1559,1094,1531,1069,1526,1063,1488,1032,1479,1027,1474,1025,1465,1020,1462,1009,Q,1461,991,1459,985,Z]
                ], 
                label: "Ertis", 
                shortLabel: "ER", 
                labelPosition: [105.3,151.2], 
                labelAlignment: [CEN,MID]
            },
            "KZ.PA.KA": { 
                outlines: [
                    [M,3171,994,Q,3165,1000,3157,1002,3146,1006,3130,1017,3123,1022,3119,1039,3112,1060,3111,1063,3107,1072,3093,1076,3078,1082,3071,1087,3052,1101,3041,1123,3031,1116,2999,1097,2961,1076,2955,1076,2939,1076,2932,1084,2917,1103,2913,1106,2907,1094,2899,1092,2888,1090,2880,1087,2878,1087,2867,1067,2856,1050,2848,1052,2837,1071,2791,1112,2781,1121,2749,1141,2737,1149,2737,1167,L,2742,1210,Q,2742,1227,2718,1234,2709,1236,2699,1243,2689,1251,2680,1254,2643,1256,2631,1262,2586,1294,2581,1294,2572,1282,2561,1270,2539,1245,2515,1243,2502,1242,2495,1231,2487,1219,2477,1216,2471,1215,2451,1215,2436,1216,2433,1211,L,2428,1189,Q,2427,1185,2418,1181,2410,1176,2409,1175,2397,1141,2392,1132,2389,1125,2377,1121,2364,1116,2355,1121,2347,1115,2344,1107,2339,1099,2332,1096,2327,1095,2325,1094,L,2308,1094,Q,2312,1113,2297,1146,2271,1201,2268,1211,2255,1249,2231,1269,2206,1291,2175,1286,2165,1285,2155,1303,2146,1319,2142,1333,2137,1350,2109,1351,2076,1352,2072,1354,2049,1370,2016,1379,2007,1381,1958,1390,L,1960,1495,Q,1960,1536,1941,1556,1926,1573,1924,1592,1922,1595,1922,1599,1922,1634,1936,1652,1958,1681,1966,1702,1974,1725,2016,1723,2048,1721,2048,1750,2047,1753,2047,1756,2046,1763,2042,1776,2039,1790,2041,1802,2040,1805,2039,1809,2056,1821,2081,1853,2105,1879,2132,1875,2141,1874,2165,1871,2188,1869,2205,1875,2221,1881,2221,1929,L,2221,1934,Q,2201,1934,2195,1943,L,2195,1971,2220,1971,Q,2232,1963,2239,1954,2241,1951,2259,1951,2276,1951,2277,1951,2290,1953,2291,1965,2291,1982,2316,1987,2317,1987,2339,1989,2357,1990,2359,1994,2367,2005,2374,2009,2380,2012,2396,2011,L,2397,2037,Q,2398,2053,2402,2062,2404,2064,2411,2076,2420,2091,2420,2105,2419,2119,2453,2123,2467,2124,2475,2134,2481,2144,2487,2144,2491,2144,2501,2133,2511,2122,2528,2125,2539,2127,2547,2116,2553,2104,2561,2104,2568,2104,2581,2122,2596,2142,2607,2145,2608,2145,2622,2145,2632,2144,2638,2150,2640,2152,2643,2180,2645,2169,2662,2155,2680,2142,2686,2142,2690,2142,2717,2142,2736,2142,2748,2140,2835,2119,2861,2105,2869,2101,2919,2084,2933,2079,2933,2056,2933,2034,2933,1987,2932,1941,2930,1904,2936,1905,2986,1905,3032,1904,3060,1903,3062,1887,3062,1851,3063,1822,3063,1806,3062,1780,3057,1764,3048,1737,3022,1737,3001,1737,3001,1710,3001,1700,3009,1694,3019,1687,3023,1669,3028,1637,3055,1632,3072,1627,3105,1610,3132,1595,3152,1593,3185,1589,3197,1582,3223,1569,3223,1534,3223,1513,3256,1494,3266,1487,3268,1451,3277,1451,3283,1447,L,3306,1447,Q,3310,1461,3315,1510,3323,1552,3352,1552,3381,1560,3385,1540,L,3386,1505,Q,3386,1475,3377,1467,3360,1452,3348,1419,3332,1377,3332,1324,3332,1262,3335,1255,3349,1233,3372,1180,3339,1144,3333,1140,3315,1121,3303,1110,3281,1087,3267,1085,3251,1082,3236,1064,3221,1043,3215,1034,Q,3195,1010,3171,994,Z]
                ], 
                label: "Kashyr", 
                shortLabel: "KA", 
                labelPosition: [265.4,158.7], 
                labelAlignment: [CEN,MID]
            },
            "KZ.PA.LE": { 
                outlines: [
                    [M,4456,3588,Q,4440,3594,4409,3592,4373,3590,4362,3591,4332,3593,4310,3611,4273,3638,4270,3641,4259,3646,4215,3648,4190,3651,4181,3682,4137,3643,4113,3625,4073,3595,4049,3594,L,4049,3546,Q,4068,3522,4068,3505,4068,3487,4059,3470,4049,3452,4049,3446,L,4101,3360,Q,4138,3293,4138,3286,4138,3278,4103,3247,4068,3217,4051,3212,4042,3208,4018,3206,3995,3204,3979,3198,3959,3191,3948,3177,3940,3168,3926,3168,3880,3177,3865,3175,L,3863,3175,3863,3212,Q,3865,3216,3865,3231,3866,3242,3868,3248,3871,3257,3881,3271,3890,3281,3890,3287,3890,3303,3883,3335,3883,3340,3885,3356,3885,3371,3877,3373,3851,3375,3835,3380,3802,3388,3802,3411,L,3805,3434,3533,3434,Q,3486,3434,3476,3436,3445,3441,3422,3464,3420,3466,3398,3474,3382,3480,3383,3492,L,3383,3551,Q,3383,3565,3372,3573,3373,3582,3376,3602,3379,3622,3386,3632,3387,3634,3396,3640,3403,3645,3407,3654,L,3421,3683,Q,3425,3694,3432,3711,3439,3727,3440,3750,3440,3768,3450,3785,3459,3801,3459,3817,3459,3824,3459,3830,3459,3834,3459,3837,3459,3838,3459,3840,3457,3855,3465,3871,3470,3884,3486,3910,3486,3911,3491,3930,3496,3945,3500,3950,3508,3957,3509,3967,3509,3973,3510,3986,3525,3985,3576,3990,3585,3990,3596,3990,3603,3990,3607,3992,3612,3996,3616,4003,3620,4011,3626,4016,3639,4030,3649,4030,3660,4028,3668,4043,3677,4050,3693,4060,3707,4070,3709,4080,3711,4097,3709,4135,3710,4151,3722,4153,3743,4157,3749,4161,3753,4164,3762,4166,3767,4167,3772,4168,3775,4168,3791,4186,3797,4190,3815,4192,3823,4196,3825,4201,3825,4212,3827,4215,3830,4222,3840,4235,3842,4243,3842,4261,3842,4265,3863,4271,3886,4276,3891,4283,3895,4288,3911,4298,3926,4311,3928,4327,3929,4348,3931,4353,3936,4366,3949,4366,3959,4365,3980,4371,3982,4371,4002,4381,L,4026,4390,Q,4029,4393,4032,4403,4035,4414,4038,4417,4058,4441,4065,4461,4068,4475,4075,4515,4082,4506,4092,4497,4110,4482,4145,4456,4172,4417,4222,4406,4258,4397,4320,4402,4355,4404,4396,4381,4456,4348,4480,4340,4539,4320,4575,4281,4600,4252,4620,4205,4625,4195,4682,4140,4739,4085,4743,4085,4766,4085,4777,4105,4788,4125,4798,4125,4813,4125,4845,4085,4861,4064,4883,4033,4901,4016,4939,3995,4977,3974,4987,3963,5012,3938,5019,3915,5021,3907,5023,3868,5025,3847,5057,3817,5073,3801,5100,3777,5098,3773,5096,3770,5080,3712,5026,3612,4962,3496,4945,3448,4933,3417,4905,3375,4902,3372,4900,3368,4846,3395,4812,3411,4795,3418,4787,3425,4778,3433,4767,3453,L,4759,3480,Q,4752,3500,4743,3501,4671,3498,4639,3498,4622,3498,4597,3520,4577,3537,4560,3538,L,4529,3538,Q,4518,3535,4516,3527,4513,3521,4505,3521,4488,3521,4475,3553,Q,4460,3586,4456,3588,Z]
                ], 
                label: "Lebyazhye", 
                shortLabel: "LE", 
                labelPosition: [423.6,384.2], 
                labelAlignment: [CEN,MID]
            },
            "KZ.PA.MA": { 
                outlines: [
                    [M,3576,3990,Q,3525,3985,3510,3986,3509,3973,3509,3967,3508,3957,3500,3950,3496,3945,3491,3930,3486,3911,3486,3910,3470,3884,3465,3871,3457,3855,3459,3840,3459,3838,3459,3837,3459,3834,3459,3830,3459,3824,3459,3817,3459,3801,3450,3785,3440,3768,3440,3750,3439,3727,3432,3711,3425,3694,3421,3683,L,3407,3654,Q,3403,3645,3396,3640,3387,3634,3386,3632,3379,3622,3376,3602,3373,3582,3372,3573,3370,3574,3368,3575,3349,3582,3343,3586,3313,3608,3288,3614,3269,3617,3265,3633,3262,3643,3259,3662,3253,3673,3242,3685,3231,3696,3227,3705,3202,3751,3191,3765,3172,3788,3143,3793,3102,3794,3081,3800,3046,3808,3046,3846,3046,3861,3055,3875,3063,3891,3063,3911,3063,3948,3048,3952,3018,3948,2989,3955,2970,3958,2942,3961,2903,3964,2887,3966,2872,3967,2838,3980,2803,3991,2787,3993,2770,3994,2721,4002,2681,4007,2656,4007,L,2626,4005,2627,4000,Q,2625,4004,2612,4028,2602,4050,2602,4057,L,2606,4135,Q,2606,4166,2608,4172,2611,4181,2617,4192,2620,4201,2620,4210,L,2618,4237,Q,2618,4250,2623,4257,2628,4264,2645,4274,2647,4275,2667,4277,2681,4280,2688,4293,2698,4311,2721,4321,2728,4324,2741,4326,2751,4330,2751,4340,L,2755,4543,2749,4582,Q,2739,4585,2727,4585,2715,4585,2709,4585,2700,4584,2695,4593,2693,4595,2687,4612,2678,4625,2673,4628,2651,4640,2651,4634,L,2636,4632,2552,4632,2552,4683,Q,2541,4691,2537,4694,2530,4700,2525,4711,2515,4726,2516,4756,2517,4773,2518,4810,2517,4834,2518,4861,2519,4874,2508,4876,2493,4877,2486,4880,2468,4883,2462,4884,2455,4886,2442,4893,2433,4897,2396,4897,L,2396,4908,Q,2397,4911,2406,4921,2414,4928,2416,4942,2417,4947,2416,4960,2415,4972,2417,4976,2421,4991,2433,5008,L,2439,5023,Q,2442,5033,2452,5038,2466,5045,2518,5064,2523,5066,2542,5081,2561,5094,2580,5100,2591,5103,2609,5104,2626,5107,2643,5118,2650,5123,2677,5132,2701,5141,2711,5148,2718,5153,2743,5163,2767,5174,2769,5193,2771,5215,2781,5221,2788,5224,2796,5233,2801,5238,2813,5238,2823,5238,2835,5226,2845,5213,2876,5213,2893,5213,2935,5218,3006,5124,3013,5120,3023,5112,3096,5112,3137,5112,3151,5114,3189,5118,3202,5136,3220,5161,3255,5173,3261,5175,3278,5195,3295,5215,3307,5220,3345,5233,3438,5245,3495,5253,3540,5296,3550,5305,3579,5331,3607,5355,3620,5371,3622,5374,3643,5390,3663,5405,3667,5412,3675,5428,3675,5445,3673,5455,3672,5474,L,3672,5612,Q,3672,5628,3695,5668,3701,5681,3706,5692,3763,5692,3793,5688,3782,5736,3820,5767,3831,5776,3887,5803,3932,5826,4037,5875,4099,5910,4176,5933,4261,5958,4328,5958,4379,5958,4440,5935,4509,5908,4538,5870,4586,5807,4633,5763,4658,5734,4658,5665,4658,5590,4657,5586,4641,5557,4610,5482,4609,5477,4608,5473,4602,5452,4596,5440,4580,5413,4547,5406,4522,5402,4520,5362,4523,5322,4523,5317,4523,5225,4550,5217,4577,5208,4577,5153,4577,5098,4540,5044,4509,5000,4471,4975,4462,4970,4437,4943,4415,4922,4401,4916,4379,4907,4345,4896,4318,4888,4298,4878,4296,4877,4245,4861,4208,4850,4200,4835,4169,4783,4153,4752,4116,4676,4095,4636,4058,4564,4058,4556,4058,4536,4075,4515,4068,4475,4065,4461,4058,4441,4038,4417,4035,4414,4032,4403,4029,4393,4026,4390,L,4002,4381,Q,3982,4371,3980,4371,3959,4365,3949,4366,3936,4366,3931,4353,3929,4348,3928,4327,3926,4311,3911,4298,3895,4288,3891,4283,3886,4276,3863,4271,3842,4265,3842,4261,3842,4243,3840,4235,3830,4222,3827,4215,3825,4212,3825,4201,3823,4196,3815,4192,3797,4190,3791,4186,3775,4168,3772,4168,3767,4167,3762,4166,3753,4164,3749,4161,3743,4157,3722,4153,3710,4151,3709,4135,3711,4097,3709,4080,3707,4070,3693,4060,3677,4050,3668,4043,3660,4028,3649,4030,3639,4030,3626,4016,3620,4011,3616,4003,3612,3996,3607,3992,3603,3990,3596,3990,Q,3585,3990,3576,3990,Z]
                ], 
                label: "May", 
                shortLabel: "MA", 
                labelPosition: [352.7,476.5], 
                labelAlignment: [CEN,MID]
            },
            "KZ.PA.SH": { 
                outlines: [
                    [M,4240,2236,Q,4231,2222,4223,2209,4182,2212,4088,2212,L,4088,2214,Q,4088,2213,4087,2212,4058,2216,4025,2215,3955,2215,3928,2192,L,3867,2192,Q,3862,2204,3862,2223,3862,2242,3876,2253,3888,2264,3888,2281,L,3883,2332,Q,3881,2344,3863,2351,3843,2355,3838,2359,3825,2366,3790,2395,3766,2415,3752,2415,L,3699,2415,Q,3682,2415,3672,2427,3660,2442,3648,2442,L,3615,2442,3615,2482,Q,3617,2486,3631,2492,3645,2496,3645,2503,3645,2514,3620,2513,3590,2510,3578,2510,L,3578,2546,Q,3585,2559,3605,2587,3620,2615,3620,2640,3673,2640,3759,2644,L,3759,2656,Q,3757,2683,3741,2707,3721,2734,3712,2746,3708,2752,3691,2757,3672,2764,3667,2769,3645,2785,3643,2787,3642,2790,3642,2811,3642,2861,3655,2875,3660,2881,3660,2907,3661,2929,3678,2929,3685,2929,3695,2916,3703,2904,3715,2904,3738,2904,3758,2965,3775,3015,3775,3043,3775,3056,3783,3080,3792,3104,3793,3120,3793,3173,3797,3194,L,3820,3194,Q,3832,3190,3836,3178,3838,3170,3842,3170,3848,3170,3865,3175,3880,3177,3926,3168,3940,3168,3948,3177,3959,3191,3979,3198,3995,3204,4018,3206,4042,3208,4051,3212,4068,3217,4103,3247,4138,3278,4138,3286,4138,3293,4101,3360,L,4049,3446,Q,4049,3452,4059,3470,4068,3487,4068,3505,4068,3522,4049,3546,L,4049,3594,Q,4073,3595,4113,3625,4137,3643,4181,3682,4190,3651,4215,3648,4259,3646,4270,3641,4273,3638,4310,3611,4332,3593,4362,3591,4373,3590,4409,3592,4440,3594,4456,3588,4460,3586,4475,3553,4488,3521,4505,3521,4513,3521,4516,3527,4518,3535,4529,3538,L,4560,3538,Q,4577,3537,4597,3520,4622,3498,4639,3498,4671,3498,4743,3501,4752,3500,4759,3480,L,4767,3453,Q,4778,3433,4787,3425,4795,3418,4812,3411,4846,3395,4900,3368,4860,3311,4851,3295,4818,3240,4803,3215,4778,3172,4767,3147,4702,3009,4599,2820,4492,2627,4443,2542,4440,2536,4438,2531,4389,2444,4349,2390,Q,4260,2270,4240,2236,Z]
                ], 
                label: "Sharbakty", 
                shortLabel: "SH", 
                labelPosition: [423.9,293.7], 
                labelAlignment: [CEN,MID]
            },
            "KZ.PA.US": { 
                outlines: [
                    [M,3578,1343,Q,3577,1340,3576,1337,3565,1316,3558,1309,3543,1293,3518,1287,3502,1284,3486,1267,3468,1246,3459,1237,3452,1231,3425,1219,3397,1207,3386,1194,3378,1186,3372,1180,3349,1233,3335,1255,3332,1262,3332,1324,3332,1377,3348,1419,3360,1452,3377,1467,3386,1475,3386,1505,L,3385,1540,Q,3381,1560,3352,1552,3323,1552,3315,1510,3310,1461,3306,1447,L,3283,1447,Q,3277,1451,3268,1451,3266,1487,3256,1494,3223,1513,3223,1534,3223,1569,3197,1582,3185,1589,3152,1593,3132,1595,3105,1610,3072,1627,3055,1632,3028,1637,3023,1669,3019,1687,3009,1694,3001,1700,3001,1710,3001,1737,3022,1737,3048,1737,3057,1764,3062,1780,3063,1806,3063,1822,3062,1851,3062,1887,3060,1903,3032,1904,2986,1905,2936,1905,2930,1904,2932,1941,2933,1987,2933,2034,2933,2056,2950,2061,2989,2054,3020,2053,3025,2081,3029,2109,3027,2151,3027,2173,3025,2216,L,3080,2216,Q,3088,2217,3101,2226,3112,2234,3119,2233,3148,2229,3156,2251,3160,2264,3163,2292,3168,2303,3185,2375,3209,2442,3252,2442,3271,2442,3270,2415,3270,2387,3295,2387,3298,2387,3378,2435,3390,2443,3408,2443,3418,2444,3438,2443,3446,2443,3486,2442,L,3648,2442,Q,3660,2442,3672,2427,3682,2415,3699,2415,L,3752,2415,Q,3766,2415,3790,2395,3825,2366,3838,2359,3843,2355,3863,2351,3881,2344,3883,2332,L,3888,2281,Q,3888,2264,3876,2253,3862,2242,3862,2223,3862,2204,3867,2192,L,3928,2192,Q,3955,2215,4025,2215,4058,2216,4087,2212,L,4088,2212,Q,4182,2212,4223,2209,4105,2020,4037,1899,3957,1755,3952,1745,3943,1722,3937,1706,3925,1677,3911,1670,3877,1647,3842,1596,3819,1560,3770,1519,3720,1476,3703,1453,3688,1431,3662,1420,3637,1407,3628,1396,3618,1383,3596,1366,Q,3583,1357,3578,1343,Z]
                ], 
                label: "Uspen", 
                shortLabel: "US", 
                labelPosition: [357.7,181.1], 
                labelAlignment: [CEN,MID]
            },
            "KZ.PA.ZH": { 
                outlines: [
                    [M,2830,47,Q,2822,55,2801,132,2798,144,2791,165,2783,181,2758,181,2730,181,2721,192,2711,203,2691,203,2622,203,2583,187,2546,171,2516,171,2485,171,2477,173,2460,177,2445,196,2440,201,2425,223,2408,246,2408,251,2408,260,2423,270,2438,281,2438,292,2438,311,2352,340,2234,379,2209,391,2188,402,2146,413,2100,426,2061,443,2052,446,2014,472,1990,486,1968,491,1964,491,1960,492,1854,481,1831,482,1809,483,1794,503,1778,523,1741,530,L,1741,557,1760,557,1760,603,Q,1768,606,1786,609,1792,609,1792,624,1792,664,1614,765,1567,800,1531,824,1475,863,1442,870,1445,899,1441,947,1441,955,1448,966,1451,973,1459,985,1461,991,1462,1009,1465,1020,1474,1025,1479,1027,1488,1032,1526,1063,1531,1069,1559,1094,1559,1106,1559,1125,1579,1150,1598,1173,1598,1192,1598,1206,1587,1212,1575,1217,1575,1242,1575,1259,1598,1279,1620,1297,1632,1297,1645,1297,1646,1296,1648,1290,1651,1279,L,1681,1279,Q,1695,1295,1721,1305,1749,1315,1764,1333,1766,1336,1797,1369,1827,1401,1827,1409,1827,1416,1819,1419,1808,1422,1799,1445,L,1799,1456,Q,1809,1455,1829,1473,1847,1489,1869,1481,L,1871,1501,Q,1871,1516,1857,1522,1841,1527,1841,1542,1841,1552,1854,1562,1866,1573,1878,1573,1889,1573,1902,1581,1910,1584,1924,1592,1926,1573,1941,1556,1960,1536,1960,1495,L,1958,1390,Q,2007,1381,2016,1379,2049,1370,2072,1354,2076,1352,2109,1351,2137,1350,2142,1333,2146,1319,2155,1303,2165,1285,2175,1286,2206,1291,2231,1269,2255,1249,2268,1211,2271,1201,2297,1146,2312,1113,2308,1094,L,2325,1094,Q,2327,1095,2332,1096,2339,1099,2344,1107,2347,1115,2355,1121,2364,1116,2377,1121,2389,1125,2392,1132,2397,1141,2409,1175,2410,1176,2418,1181,2427,1185,2428,1189,L,2433,1211,Q,2436,1216,2451,1215,2471,1215,2477,1216,2487,1219,2495,1231,2502,1242,2515,1243,2539,1245,2561,1270,2572,1282,2581,1294,2586,1294,2631,1262,2643,1256,2680,1254,2689,1251,2699,1243,2709,1236,2718,1234,2742,1227,2742,1210,L,2737,1167,Q,2737,1149,2749,1141,2781,1121,2791,1112,2837,1071,2848,1052,2856,1050,2867,1067,2878,1087,2880,1087,2888,1090,2899,1092,2907,1094,2913,1106,2917,1103,2932,1084,2939,1076,2955,1076,2961,1076,2999,1097,3031,1116,3041,1123,3052,1101,3071,1087,3078,1082,3093,1076,3107,1072,3111,1063,3112,1060,3119,1039,3123,1022,3130,1017,3146,1006,3157,1002,3165,1000,3171,994,3160,986,3149,982,3103,961,3080,939,3075,933,3048,917,3010,896,3009,895,2970,872,2938,861,2923,856,2905,833,2885,809,2879,802,2872,794,2846,779,2818,763,2812,756,2711,649,2687,596,2667,540,2650,512,2607,444,2607,436,2607,427,2639,406,2670,386,2681,386,2697,386,2711,410,2719,422,2730,443,2739,456,2765,457,2778,459,2808,456,2859,456,2886,425,2902,405,2936,341,2962,296,2989,261,3002,239,3002,186,3002,166,2988,136,2969,100,2966,86,2956,49,2943,42,2937,39,2895,39,Q,2839,39,2830,47,Z]
                ], 
                label: "Zhelezin", 
                shortLabel: "ZH", 
                labelPosition: [230.6,81.5], 
                labelAlignment: [CEN,MID]
            },
            "KZ.PA.PA": { 
                outlines: [
                    [M,3408,2443,Q,3390,2443,3378,2435,3298,2387,3295,2387,3270,2387,3270,2415,3271,2442,3252,2442,3209,2442,3185,2375,3168,2303,3163,2292,3160,2264,3156,2251,3148,2229,3119,2233,3112,2234,3101,2226,3088,2217,3080,2216,L,3025,2216,Q,3027,2173,3027,2151,3029,2109,3025,2081,3020,2053,2989,2054,2950,2061,2933,2056,2933,2079,2919,2084,2869,2101,2861,2105,2835,2119,2748,2140,2736,2142,2717,2142,2690,2142,2686,2142,2680,2142,2662,2155,2645,2169,2643,2180,2642,2181,2642,2182,2642,2183,2652,2213,2661,2245,2661,2255,2660,2273,2679,2292,2695,2307,2687,2323,2733,2311,2756,2339,2772,2359,2772,2396,2772,2421,2769,2424,L,2767,2426,Q,2760,2430,2736,2440,2707,2451,2696,2495,2711,2534,2640,2525,2621,2522,2595,2534,2569,2545,2557,2543,2501,2532,2412,2563,2315,2597,2281,2597,2240,2597,2230,2600,2225,2600,2205,2610,2184,2617,2175,2619,2150,2620,2112,2639,2076,2657,2059,2657,2031,2657,2016,2643,2000,2629,1984,2629,1974,2629,1956,2632,1938,2634,1906,2634,1910,2656,1909,2690,1908,2723,1911,2735,1915,2746,1917,2785,1916,2809,1905,2817,1906,2846,1910,2890,1910,2905,1897,2916,1884,2926,1882,2941,L,1881,3004,Q,1881,3036,1906,3036,1915,3036,1920,3025,1925,3014,1922,3004,L,1926,3004,1935,3007,Q,1939,3009,1939,3014,1937,3031,1939,3037,1940,3042,1950,3050,1960,3056,1960,3064,1954,3070,1947,3075,1932,3089,1931,3100,1930,3106,1919,3117,1909,3127,1909,3137,1909,3154,1935,3168,1959,3182,1959,3190,1959,3196,1944,3204,1927,3211,1927,3228,1927,3232,1947,3250,1968,3268,1972,3282,1976,3313,1976,3317,1975,3330,1984,3335,1996,3346,1998,3350,2005,3362,2004,3368,2009,3373,2026,3372,L,2059,3382,Q,2089,3387,2099,3391,2102,3391,2112,3401,2124,3411,2130,3413,2144,3415,2174,3415,2175,3415,2187,3423,2200,3431,2208,3431,2217,3431,2227,3422,2239,3413,2252,3411,2255,3411,2274,3400,2290,3391,2302,3391,2326,3391,2342,3394,2358,3397,2380,3397,L,2380,3396,Q,2382,3397,2384,3397,L,2406,3397,Q,2415,3397,2419,3388,2420,3376,2422,3368,2427,3352,2437,3356,L,2437,3333,2433,3326,2516,3326,Q,2528,3338,2552,3368,2576,3393,2602,3392,2669,3388,2732,3394,L,2732,3595,2662,3595,Q,2649,3595,2632,3603,2617,3610,2606,3610,2581,3608,2570,3608,2549,3608,2537,3611,2529,3612,2529,3623,2529,3637,2528,3638,L,2516,3651,Q,2513,3654,2513,3663,2513,3675,2516,3677,2518,3680,2533,3696,2538,3701,2542,3716,2546,3732,2551,3737,2553,3740,2586,3767,2589,3772,2589,3786,2589,3794,2588,3805,L,2598,3805,Q,2599,3816,2599,3838,2600,3862,2607,3886,2612,3907,2623,3926,2630,3937,2630,3963,L,2627,4000,2626,4005,2656,4007,Q,2681,4007,2721,4002,2770,3994,2787,3993,2803,3991,2838,3980,2872,3967,2887,3966,2903,3964,2942,3961,2970,3958,2989,3955,3018,3948,3048,3952,3063,3948,3063,3911,3063,3891,3055,3875,3046,3861,3046,3846,3046,3808,3081,3800,3102,3794,3143,3793,3172,3788,3191,3765,3202,3751,3227,3705,3231,3696,3242,3685,3253,3673,3259,3662,3262,3643,3265,3633,3269,3617,3288,3614,3313,3608,3343,3586,3349,3582,3368,3575,3370,3574,3372,3573,3383,3565,3383,3551,L,3383,3492,Q,3382,3480,3398,3474,3420,3466,3422,3464,3445,3441,3476,3436,3486,3434,3533,3434,L,3805,3434,3802,3411,Q,3802,3388,3835,3380,3851,3375,3877,3373,3885,3371,3885,3356,3883,3340,3883,3335,3890,3303,3890,3287,3890,3281,3881,3271,3871,3257,3868,3248,3866,3242,3865,3231,3865,3216,3863,3212,L,3863,3175,3865,3175,Q,3848,3170,3842,3170,3838,3170,3836,3178,3832,3190,3820,3194,L,3797,3194,Q,3793,3173,3793,3120,3792,3104,3783,3080,3775,3056,3775,3043,3775,3015,3758,2965,3738,2904,3715,2904,3703,2904,3695,2916,3685,2929,3678,2929,3661,2929,3660,2907,3660,2881,3655,2875,3642,2861,3642,2811,3642,2790,3643,2787,3645,2785,3667,2769,3672,2764,3691,2757,3708,2752,3712,2746,3721,2734,3741,2707,3757,2683,3759,2656,L,3759,2644,Q,3673,2640,3620,2640,3620,2615,3605,2587,3585,2559,3578,2546,L,3578,2510,Q,3590,2510,3620,2513,3645,2514,3645,2503,3645,2496,3631,2492,3617,2486,3615,2482,L,3615,2442,3486,2442,Q,3446,2443,3438,2443,Q,3418,2444,3408,2443,Z]
                ], 
                label: "Pavlodar", 
                shortLabel: "PA", 
                labelPosition: [288.6,303.1], 
                labelAlignment: [CEN,MID]
            },
            "KZ.PA.AT": { 
                outlines: [
                    [M,2339,1989,Q,2317,1987,2316,1987,2291,1982,2291,1965,2290,1953,2277,1951,2276,1951,2259,1951,2241,1951,2239,1954,2232,1963,2220,1971,L,2195,1971,2195,1943,Q,2201,1934,2221,1934,L,2221,1929,Q,2221,1881,2205,1875,2188,1869,2165,1871,2141,1874,2132,1875,2105,1879,2081,1853,2056,1821,2039,1809,2035,1812,2026,1813,2002,1814,1997,1816,1980,1822,1948,1850,1919,1875,1911,1876,1891,1879,1857,1896,1829,1911,1810,1906,L,1706,1922,Q,1697,1965,1695,1992,1692,1996,1659,1996,1630,1996,1627,1995,1611,1992,1600,1976,1597,1971,1585,1943,1575,1923,1564,1913,1555,1905,1524,1907,1487,1910,1486,1910,1478,1909,1474,1899,L,1466,1882,Q,1461,1875,1431,1875,1411,1875,1408,1876,1398,1880,1400,1897,1397,1907,1388,1916,1380,1924,1378,1936,1379,1947,1375,1964,1370,1983,1364,1989,1350,2001,1342,2005,1331,2014,1317,2014,1304,2014,1299,2006,1292,1997,1277,1996,1267,1995,1261,1980,1257,1964,1249,1964,1240,1964,1232,1979,1222,1996,1216,2002,1211,2005,1191,2014,1176,2020,1169,2030,1129,2080,1087,2080,1010,2073,978,2079,945,2083,925,2071,901,2051,880,2039,875,2035,785,1992,775,1987,760,1987,742,1990,735,1990,708,1990,707,1981,706,1972,687,1971,686,1971,684,1971,652,1971,642,1991,634,2023,621,2044,612,2059,600,2095,591,2123,581,2134,585,2140,588,2145,599,2166,599,2195,599,2211,597,2214,588,2222,577,2233,568,2241,566,2256,564,2275,560,2281,548,2301,537,2349,534,2366,494,2366,477,2366,472,2365,461,2363,458,2354,446,2324,432,2321,424,2319,424,2312,424,2297,427,2285,430,2272,430,2262,430,2251,419,2249,L,391,2249,Q,371,2249,365,2252,355,2256,340,2276,326,2295,305,2300,291,2302,291,2327,291,2351,297,2357,304,2365,325,2364,337,2363,350,2384,365,2406,377,2409,398,2412,445,2422,487,2429,520,2424,520,2455,528,2523,528,2526,528,2531,536,2604,536,2642,536,2663,534,2709,531,2751,536,2780,537,2793,554,2835,554,2836,555,2836,565,2865,567,2890,567,2894,567,2899,568,2935,569,2970,575,3287,571,3347,569,3380,569,3446,568,3465,542,3470,514,3472,504,3476,490,3482,477,3502,465,3521,457,3523,451,3524,422,3523,399,3523,391,3530,L,385,3714,Q,385,3733,407,3762,429,3792,448,3793,464,3794,508,3791,551,3790,576,3800,585,3803,627,3816,659,3826,684,3837,692,3842,711,3847,728,3853,736,3857,747,3864,764,3863,774,3863,796,3862,L,796,3887,Q,776,3886,777,3905,777,3915,778,3936,739,3941,722,3938,711,3937,697,3945,684,3953,670,3952,632,3953,612,3952,584,3950,571,3950,564,3950,549,3956,534,3963,531,3963,497,3960,469,3960,417,3961,410,3980,410,3982,409,4051,409,4085,391,4091,367,4090,334,4101,298,4111,294,4118,289,4126,298,4170,298,4186,280,4188,257,4188,246,4190,247,4195,248,4200,259,4236,308,4251,339,4260,410,4280,434,4291,484,4324,534,4348,586,4332,586,4351,589,4407,589,4480,571,4512,562,4528,558,4552,618,4558,708,4558,711,4558,749,4560,790,4560,810,4556,824,4554,864,4538,895,4526,909,4527,1016,4533,1091,4523,L,1091,4508,Q,1041,4402,1041,4401,1041,4387,1109,4355,1172,4325,1185,4325,1218,4325,1254,4362,1290,4400,1300,4402,1362,4412,1464,4436,L,1494,4436,Q,1491,4418,1502,4391,1514,4361,1514,4347,1514,4318,1517,4304,1519,4287,1530,4260,1536,4246,1547,4240,1561,4232,1566,4225,1579,4203,1600,4203,L,1685,4197,Q,1687,4164,1692,4156,1697,4147,1717,4147,1740,4147,1748,4160,1756,4173,1781,4175,1805,4177,1818,4187,1830,4197,1836,4197,1855,4197,1885,4155,1926,4097,1936,4088,1962,4064,1979,4033,1991,4010,2005,3966,L,2038,3966,Q,2050,3996,2078,3997,2094,3998,2120,3993,2127,3993,2136,4002,2145,4011,2150,4012,2186,4016,2197,4025,2207,4033,2238,4032,2267,4032,2279,4048,2288,4061,2322,4062,L,2394,4062,Q,2391,4016,2410,3983,2418,3968,2461,3916,2468,3907,2491,3896,2512,3885,2526,3866,2542,3840,2553,3830,2567,3814,2587,3805,L,2588,3805,Q,2589,3794,2589,3786,2589,3772,2586,3767,2553,3740,2551,3737,2546,3732,2542,3716,2538,3701,2533,3696,2518,3680,2516,3677,2513,3675,2513,3663,2513,3654,2516,3651,L,2528,3638,Q,2529,3637,2529,3623,2529,3612,2537,3611,2549,3608,2570,3608,2581,3608,2606,3610,2617,3610,2632,3603,2649,3595,2662,3595,L,2732,3595,2732,3394,Q,2669,3388,2602,3392,2576,3393,2552,3368,2528,3338,2516,3326,L,2433,3326,2437,3333,2437,3356,Q,2427,3352,2422,3368,2420,3376,2419,3388,2415,3397,2406,3397,L,2380,3397,Q,2358,3397,2342,3394,2326,3391,2302,3391,2290,3391,2274,3400,2255,3411,2252,3411,2239,3413,2227,3422,2217,3431,2208,3431,2200,3431,2187,3423,2175,3415,2174,3415,2144,3415,2130,3413,2124,3411,2112,3401,2102,3391,2099,3391,2089,3387,2059,3382,L,2026,3372,Q,2009,3373,2004,3368,2005,3362,1998,3350,1996,3346,1984,3335,1975,3330,1976,3317,1976,3313,1972,3282,1968,3268,1947,3250,1927,3232,1927,3228,1927,3211,1944,3204,1959,3196,1959,3190,1959,3182,1935,3168,1909,3154,1909,3137,1909,3127,1919,3117,1930,3106,1931,3100,1932,3089,1947,3075,1954,3070,1960,3064,1960,3056,1950,3050,1940,3042,1939,3037,1937,3031,1939,3014,1939,3009,1935,3007,L,1926,3004,1922,3004,Q,1925,3014,1920,3025,1915,3036,1906,3036,1881,3036,1881,3004,L,1882,2941,Q,1884,2926,1897,2916,1910,2905,1910,2890,1906,2846,1905,2817,1916,2809,1917,2785,1915,2746,1911,2735,1908,2723,1909,2690,1910,2656,1906,2634,1938,2634,1956,2632,1974,2629,1984,2629,2000,2629,2016,2643,2031,2657,2059,2657,2076,2657,2112,2639,2150,2620,2175,2619,2184,2617,2205,2610,2225,2600,2230,2600,2240,2597,2281,2597,2315,2597,2412,2563,2501,2532,2557,2543,2569,2545,2595,2534,2621,2522,2640,2525,2711,2534,2696,2495,2707,2451,2736,2440,2760,2430,2767,2426,L,2769,2424,Q,2772,2421,2772,2396,2772,2359,2756,2339,2733,2311,2687,2323,2695,2307,2679,2292,2660,2273,2661,2255,2661,2245,2652,2213,2642,2183,2642,2182,2642,2181,2643,2180,2640,2152,2638,2150,2632,2144,2622,2145,2608,2145,2607,2145,2596,2142,2581,2122,2568,2104,2561,2104,2553,2104,2547,2116,2539,2127,2528,2125,2511,2122,2501,2133,2491,2144,2487,2144,2481,2144,2475,2134,2467,2124,2453,2123,2419,2119,2420,2105,2420,2091,2411,2076,2404,2064,2402,2062,2398,2053,2397,2037,L,2396,2011,Q,2380,2012,2374,2009,2367,2005,2359,1994,Q,2357,1990,2339,1989,Z]
                ], 
                label: "Aktogay", 
                shortLabel: "AT", 
                labelPosition: [150.9,318.4], 
                labelAlignment: [CEN,MID]
            }
        }
    }];

    // Add the definition to map structure.
    count = geodefinitions.length;
    if (hasGeoBase) {
        while (count--) {
            definition = geodefinitions[count];
            api(definition.name.toLowerCase(), definition, api.geo);
        }
    }
    else {
        while (count--) {
            definition = geodefinitions[count];
            name = definition.name.toLowerCase();

            injectModule(MAPS, name, 1); // add maps dependency
            // enqueue definition
            moduleCmdQueue[MAPS].unshift({
                cmd: '_call',
                obj: window,
                args: [function (alias, def) {
                    if (!api.geo) {
                        global.raiseError(global.core, '12052314141', 'run',
                            'JavaScriptRenderer~Maps._call()',
                            new Error('FusionCharts.HC.Maps.js is required in order to define vizualization'));
                        return;
                    }
                    api(alias, def, api.geo);
                }, [name, definition], window]
            });
        }
    }

}]);