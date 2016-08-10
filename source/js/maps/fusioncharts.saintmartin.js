/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.SaintMartin.20.10-30-2012 08:25:26
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-saintmartin", function () {

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
        name: "SaintMartin",
        revision: 20,
        
        standaloneInit: true,

        baseWidth: 490,
        baseHeight: 430,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "01": { 
                outlines: [
                    [M,4800,665,L,4752,638,4663,631,4641,641,4625,665,Q,4623,666,4620,668,4618,672,4612,672,L,4612,728,4660,773,4682,771,Q,4683,770,4687,769,4694,767,4699,759,4702,758,4704,756,L,4718,735,4807,735,4827,725,Q,4829,722,4831,721,L,4831,709,4821,697,4816,679,Z],
                    [M,4338,39,L,4242,36,4204,54,4158,101,4037,97,4013,73,3930,73,3910,82,Q,3867,92,3842,124,L,3837,167,3811,189,3802,206,3853,364,Q,3816,418,3743,382,L,3687,321,3608,317,3474,240,Q,3410,228,3385,261,L,3390,295,3395,411,3379,439,3380,506,3362,637,Q,3351,687,3329,732,3299,791,3249,840,3210,879,3162,894,3101,916,3067,908,3028,899,2993,893,2959,888,2890,847,L,2849,796,2797,802,2772,840,2737,845,2737,913,2727,921,2680,921,2680,1042,Q,2671,1091,2635,1100,L,2570,1109,2548,1156,2520,1174,2494,1181,2471,1199,2446,1267,2420,1293,2335,1360,2335,1384,2391,1534,2445,1615,Q,2445,1617,2445,1619,2445,1623,2448,1624,2449,1626,2450,1631,L,2450,1680,2426,1706,2409,1735,2394,1747,2394,1754,2377,1785,2377,1799,2360,1811,2360,1817,2325,1852,2312,1870,Q,2304,1877,2296,1887,2291,1890,2288,1899,2288,1929,2288,1958,L,2300,1970,2300,1980,2202,2053,2195,2074,Q,2195,2078,2194,2079,L,2161,2100,Q,2157,2101,2156,2105,L,2142,2105,2126,2122,2103,2132,1980,2170,1954,2180,1942,2209,1930,2226,Q,1930,2228,1926,2231,1922,2233,1916,2235,L,1862,2276,1752,2276,1738,2267,1726,2257,1678,2252,1665,2243,1656,2231,1627,2226,1613,2217,Q,1610,2216,1603,2214,L,1603,2207,1596,2207,1589,2197,1581,2192,Q,1580,2188,1578,2185,L,1552,2168,1483,2159,Q,1480,2156,1478,2151,1476,2145,1470,2146,L,1463,2137,1424,2117,Q,1424,2113,1420,2112,L,1401,2100,1394,2100,1355,2071,1292,1968,1287,1937,1297,1932,1389,1857,1389,1840,1365,1805,1353,1800,Q,1353,1799,1348,1795,L,1348,1781,1364,1751,1420,1675,1420,1662,Q,1418,1658,1417,1655,L,1389,1639,1343,1633,1302,1703,1288,1744,1256,1768,1158,1805,1146,1822,1146,1836,Q,1143,1836,1141,1840,L,1133,1855,1069,1906,1052,1917,1052,1927,1016,1951,905,1951,Q,902,1946,895,1947,L,852,1935,Q,769,1911,693,1838,L,626,1783,618,1783,563,1757,556,1757,Q,549,1750,539,1747,534,1746,531,1743,525,1739,517,1739,499,1739,481,1739,476,1739,470,1740,460,1740,446,1744,413,1744,380,1743,357,1743,334,1750,325,1751,318,1757,L,277,1763,255,1785,248,1793,248,1850,257,1865,Q,226,1966,166,2006,L,99,2045,99,2052,Q,99,2053,94,2057,L,94,2067,Q,93,2068,92,2072,92,2072,87,2076,L,63,2120,63,2144,96,2160,113,2177,222,2213,239,2225,296,2238,369,2278,Q,371,2280,372,2282,373,2284,376,2286,L,395,2286,423,2302,522,2389,527,2401,527,2452,522,2459,522,2466,511,2486,512,2501,708,2444,744,2440,736,2319,748,2307,748,2300,775,2283,809,2278,855,2257,888,2247,Q,890,2243,890,2242,L,910,2223,910,2214,Q,914,2212,914,2207,L,914,2190,936,2165,936,2124,946,2110,1032,2067,1167,2030,1199,2057,1216,2065,1232,2095,1242,2107,1251,2107,1285,2154,1285,2165,1323,2207,1329,2207,1341,2214,1341,2219,1362,2226,1417,2257,Q,1419,2262,1425,2264,1428,2267,1430,2268,L,1461,2284,Q,1473,2284,1483,2286,1488,2286,1491,2288,1492,2292,1490,2293,L,1523,2360,1574,2367,1620,2334,1643,2334,1653,2344,1764,2350,1785,2365,1930,2372,1947,2361,Q,1951,2362,1954,2358,1961,2356,1964,2348,L,1986,2329,2004,2305,2004,2269,2094,2238,2103,2230,2115,2207,2129,2199,Q,2130,2192,2135,2188,2137,2187,2140,2185,L,2156,2161,2188,2137,2197,2136,2231,2136,2253,2151,2240,2305,2228,2326,2188,2334,2163,2348,Q,2175,2431,2137,2514,L,2115,2579,2106,2579,2012,2562,2012,2570,Q,1998,2577,1991,2591,1989,2596,1988,2601,1987,2612,1986,2623,L,1993,2634,2002,2664,2127,2675,2137,2680,2144,2687,2166,2726,2166,2736,2175,2750,Q,2181,2751,2180,2757,L,2188,2764,2324,2729,2525,2668,2580,2620,2620,2611,2647,2574,2647,2545,2652,2538,Q,2657,2533,2660,2526,2663,2523,2665,2518,2666,2517,2666,2515,2671,2502,2679,2493,2683,2489,2687,2484,2689,2482,2691,2481,2693,2480,2694,2479,2698,2476,2702,2473,2705,2471,2708,2469,2709,2468,2710,2467,2714,2465,2715,2463,2716,2463,2716,2461,2720,2459,2722,2457,2723,2456,2724,2456,2731,2451,2736,2446,L,2769,2408,2809,2383,2823,2380,Q,2824,2379,2824,2379,L,2828,2378,2862,2378,2926,2350,2965,2319,2973,2307,2975,2286,2986,2278,Q,2989,2274,2991,2270,2993,2269,2994,2267,2998,2261,3003,2255,3004,2253,3005,2252,3008,2247,3012,2241,3014,2240,3015,2237,3016,2236,3017,2235,3024,2226,3031,2216,3031,2215,3032,2214,3035,2210,3037,2206,3040,2203,3042,2199,3044,2196,3049,2195,3055,2194,3061,2192,3074,2189,3087,2189,3097,2189,3106,2189,L,3262,2187,3294,2180,3299,2177,3323,2174,3329,2169,3372,2161,3380,2158,3427,2180,3435,2180,3456,2194,Q,3457,2195,3457,2196,L,3464,2199,3468,2204,3480,2215,3596,2293,3637,2311,3646,2317,3652,2324,3659,2333,3706,2377,3726,2403,3729,2403,Q,3730,2404,3730,2405,L,3774,2436,3776,2439,3812,2451,3830,2451,3872,2419,3902,2400,3961,2407,4019,2440,4024,2442,4155,2510,4169,2510,4179,2519,4185,2519,4236,2492,Q,4241,2492,4246,2489,4250,2486,4255,2484,4261,2482,4267,2479,4269,2478,4272,2477,4274,2477,4276,2475,4284,2473,4291,2468,4293,2467,4294,2466,4298,2464,4301,2462,4306,2459,4312,2457,4320,2456,4327,2454,4331,2453,4334,2452,4337,2451,4339,2449,4348,2440,4362,2440,4385,2440,4408,2440,4409,2441,4410,2441,L,4412,2446,4449,2451,4449,2454,4455,2460,4474,2469,4486,2479,4509,2479,4507,2470,4525,2457,Q,4526,2457,4527,2457,L,4536,2454,4540,2445,4589,2445,4619,2482,Q,4620,2482,4621,2484,L,4628,2493,4638,2499,4643,2499,Q,4644,2499,4644,2498,4646,2499,4648,2497,L,4657,2497,Q,4658,2495,4659,2493,4661,2492,4661,2492,L,4661,2489,4667,2486,4691,2498,4695,2519,Q,4693,2521,4693,2523,L,4697,2535,Q,4698,2536,4699,2537,L,4702,2557,Q,4703,2558,4703,2559,4705,2560,4706,2562,L,4732,2567,4783,2531,4798,2507,Q,4802,2507,4803,2504,4803,2503,4803,2502,4805,2460,4797,2419,L,4748,2330,4753,2252,4783,2201,Q,4797,2154,4774,2107,L,4743,2061,4711,2065,4662,2077,4609,2141,4578,2140,4546,2113,4507,2113,4462,2102,4463,2100,4399,2055,4254,2001,4182,1988,4137,2046,4081,2046,4062,2028,4070,1988,4116,1940,4135,1929,4147,1877,4162,1861,4217,1863,Q,4270,1821,4336,1803,L,4349,1759,Q,4365,1716,4404,1684,4447,1665,4487,1660,4493,1681,4485,1702,L,4455,1779,4453,1838,4491,2005,4555,2069,4591,2080,Q,4619,2075,4618,2053,L,4541,1986,4495,1825,Q,4511,1757,4569,1716,L,4628,1716,4645,1729,4675,1726,4723,1605,4795,1509,4764,1493,4709,1481,4667,1462,Q,4640,1444,4615,1426,4532,1366,4487,1305,L,4423,1230,4419,1206,4407,1182,4385,1109,4385,932,4360,917,4360,827,4337,803,Q,4336,802,4336,801,4299,766,4270,711,L,4275,648,4311,618,4364,601,4432,609,4491,654,Q,4554,646,4586,577,L,4593,523,4528,466,4512,459,4485,287,4496,146,Z,M,3576,826,L,3614,849,3645,855,3645,876,3600,902,3558,902,3549,920,Q,3549,932,3543,940,3541,949,3536,953,3533,957,3530,959,3517,964,3506,963,3503,963,3499,961,L,3398,944,3371,912,3384,890,Q,3386,886,3386,884,L,3398,878,3407,852,3424,833,3537,838,Z,M,4140,1085,L,4140,1080,4126,1068,4126,1056,4141,1038,4246,1049,4251,1062,4268,1074,4268,1090,4254,1114,Q,4251,1117,4250,1119,4246,1121,4242,1123,L,4232,1123,Q,4221,1131,4212,1134,4207,1136,4212,1141,4206,1142,4203,1140,4201,1139,4198,1137,4192,1135,4189,1129,Z,M,4609,1645,L,4516,1645,4485,1621,4472,1621,4422,1614,4407,1602,4396,1573,4388,1561,4388,1538,4467,1533,4537,1552,4547,1552,4612,1593,Q,4617,1595,4619,1602,L,4627,1626,Q,4626,1629,4621,1630,Z,M,2854,1107,L,2810,1143,2796,1143,2755,1165,2750,1172,2678,1172,2664,1157,2664,1145,2700,1117,Q,2704,1118,2705,1115,2709,1114,2709,1110,L,2722,1100,2774,1073,Q,2776,1071,2779,1070,2842,1061,2882,1081,L,2861,1107,Z,M,414,2166,L,469,2151,477,2161,566,2182,Q,568,2188,561,2189,L,547,2199,547,2207,537,2218,537,2231,554,2262,554,2316,Q,552,2320,547,2319,545,2311,542,2310,L,517,2296,510,2283,419,2219,412,2202,412,2173,Q,412,2170,414,2166,Z,M,363,2120,L,373,2134,375,2184,327,2134,327,2101,344,2101,357,2117,Q,362,2120,363,2120,Z,M,905,1985,L,919,1985,912,2000,Q,909,2002,905,2003,L,895,2003,881,2019,854,2019,830,2000,Q,825,1999,821,1995,L,816,1987,809,1966,881,1976,Q,885,1979,889,1981,L,900,1981,Q,903,1983,905,1985,Z],
                    [M,4787,1349,Q,4788,1351,4791,1355,4792,1357,4795,1358,L,4812,1358,4821,1351,4822,1339,4836,1332,4836,1288,4826,1271,Q,4821,1270,4817,1267,L,4805,1267,4787,1286,Z],
                    [M,4543,790,Q,4540,790,4538,786,L,4526,766,4488,766,Q,4482,768,4481,776,4480,781,4480,786,L,4488,799,Q,4493,800,4494,804,L,4538,819,4548,819,4548,804,Z]
                ], 
                label: "Saint-Martin (French)", 
                shortLabel: "SF", 
                labelPosition: [338,147.5], 
                labelAlignment: [CEN,MID]
            },
            "02": { 
                outlines: [
                    [M,4473,3748,L,4473,3765,4487,3785,4524,3803,4544,3803,Q,4546,3791,4546,3779,4545,3774,4546,3768,4549,3751,4532,3740,4528,3734,4521,3731,L,4492,3731,4479,3741,Q,4478,3745,4473,3748,Z],
                    [M,3435,2180,L,3427,2180,3380,2158,3372,2161,3329,2169,3323,2174,3299,2177,3294,2180,3262,2187,3106,2189,Q,3097,2189,3087,2189,3074,2189,3061,2192,3055,2194,3049,2195,3044,2196,3042,2199,3040,2203,3037,2206,3035,2210,3032,2214,3031,2215,3031,2216,3024,2226,3017,2235,3016,2236,3015,2237,3014,2240,3012,2241,3008,2247,3005,2252,3004,2253,3003,2255,2998,2261,2994,2267,2993,2269,2991,2270,2989,2274,2986,2278,L,2975,2286,2973,2307,2965,2319,2926,2350,2862,2378,2828,2378,2824,2379,Q,2824,2379,2823,2380,L,2809,2383,2769,2408,2736,2446,Q,2731,2451,2724,2456,2723,2456,2722,2457,2720,2459,2716,2461,2716,2463,2715,2463,2714,2465,2710,2467,2709,2468,2708,2469,2705,2471,2702,2473,2698,2476,2694,2479,2693,2480,2691,2481,2689,2482,2687,2484,2683,2489,2679,2493,2671,2502,2666,2515,2666,2517,2665,2518,2663,2523,2660,2526,2657,2533,2652,2538,L,2647,2545,2647,2574,2620,2611,2580,2620,2525,2668,2324,2729,2188,2764,2192,2817,2175,2871,2170,2911,Q,2166,2916,2164,2921,2161,2930,2163,2940,L,2163,3024,2241,3060,2260,3075,Q,2261,3078,2264,3080,2267,3084,2272,3089,2280,3099,2286,3104,2290,3109,2292,3116,2293,3121,2294,3125,2296,3128,2296,3130,2296,3149,2296,3171,2292,3187,2291,3203,2291,3215,2294,3222,2297,3229,2303,3239,2307,3243,2310,3248,2317,3259,2323,3269,2327,3274,2330,3280,2334,3289,2341,3297,2347,3302,2354,3310,2363,3320,2365,3328,L,2365,3388,2337,3388,2322,3374,2296,3374,Q,2297,3371,2291,3369,2289,3367,2286,3364,2284,3361,2281,3361,L,2247,3311,2233,3282,2203,3246,Q,2201,3245,2202,3239,L,2171,3239,2134,3215,2127,3215,2093,3195,2053,3195,Q,2052,3195,2046,3193,L,2046,3176,2040,3162,2034,3162,2025,3149,2014,3125,1940,3013,Q,1937,3013,1935,3010,L,1891,2971,Q,1889,2966,1882,2966,L,1882,2960,1867,2952,1862,2945,1853,2938,1838,2938,Q,1835,2933,1829,2933,L,1817,2902,1817,2889,1798,2858,1762,2849,1615,2849,1482,2827,1432,2788,1413,2781,1398,2767,1398,2760,1386,2745,1379,2728,1353,2688,1353,2681,1343,2581,1292,2507,1281,2500,1247,2500,1242,2493,1235,2493,1230,2488,1136,2488,1122,2500,1097,2510,Q,1074,2575,1116,2639,L,1133,2656,1158,2695,1239,2731,Q,1239,2733,1242,2738,L,1242,2752,1203,2777,1090,2757,1078,2757,1066,2664,1054,2646,1028,2632,996,2567,996,2557,965,2541,934,2507,922,2507,847,2490,840,2497,806,2497,785,2507,754,2507,729,2486,729,2466,744,2447,744,2440,708,2444,516,2499,524,2510,Q,530,2511,533,2514,L,550,2519,578,2534,598,2563,Q,600,2566,600,2569,L,610,2575,610,2589,622,2610,632,2622,737,2630,761,2647,853,2692,903,2726,934,2758,941,2758,Q,941,2760,942,2764,943,2765,947,2767,L,958,2818,941,2818,966,2868,966,2900,977,2916,999,2936,1057,2981,Q,1112,2975,1153,3048,L,1165,3048,1170,3053,1211,3053,1232,3066,1254,3102,1271,3111,1292,3111,Q,1292,3106,1295,3104,L,1328,3024,1362,2993,1362,2981,1372,2972,1425,2955,1612,2955,1637,2972,1701,2986,1711,2995,1855,3054,1879,3070,1898,3087,Q,1898,3091,1900,3092,1901,3093,1905,3096,1911,3099,1916,3104,1920,3108,1924,3110,1939,3119,1953,3134,1962,3140,1969,3151,1970,3155,1973,3159,1977,3164,1985,3176,1992,3183,1996,3191,1997,3195,1998,3199,2000,3203,2001,3207,2003,3219,2007,3231,2008,3234,2008,3236,2009,3261,2008,3288,2006,3290,2005,3296,2003,3302,2004,3309,L,1988,3328,1930,3349,1916,3362,1937,3426,1975,3439,Q,1984,3445,1992,3447,2000,3450,2009,3452,2016,3454,2021,3460,2024,3463,2028,3464,2036,3470,2043,3477,2047,3480,2047,3484,2052,3492,2056,3495,2056,3496,2057,3497,2059,3499,2059,3500,2064,3506,2065,3508,2072,3518,2079,3527,2085,3534,2088,3540,2091,3544,2091,3546,L,2096,3558,2120,3558,2132,3549,2173,3535,2259,3532,Q,2260,3535,2262,3537,2267,3536,2271,3540,L,2329,3547,2421,3578,2491,3708,2505,3708,2520,3700,2579,3655,2645,3662,2666,3677,Q,2667,3682,2668,3682,2670,3686,2673,3686,L,2693,3720,2693,3725,2746,3778,2775,3802,Q,2778,3803,2780,3805,L,2808,3805,2816,3795,2816,3783,2854,3759,2864,3734,Q,2868,3734,2869,3730,L,2875,3720,Q,2880,3716,2887,3715,2902,3709,2916,3709,2927,3710,2938,3710,2959,3710,2979,3711,2993,3715,3002,3720,3010,3725,3020,3725,3031,3727,3037,3730,3040,3732,3043,3733,L,3051,3733,3095,3773,3095,3787,3105,3852,3105,3924,Q,3107,3926,3108,3928,L,3118,3946,3143,3946,3165,3922,Q,3167,3920,3168,3917,3168,3908,3174,3908,L,3167,3789,3148,3768,3157,3688,3171,3688,3203,3679,3224,3643,3251,3629,3280,3597,Q,3280,3596,3280,3596,3281,3595,3281,3595,3282,3593,3284,3592,L,3306,3580,3444,3587,3556,3605,3643,3679,3655,3684,Q,3661,3694,3672,3696,L,3679,3705,3679,3736,3657,3778,3657,3816,3674,3840,3691,3910,3727,3965,3727,3999,Q,3725,3999,3722,4000,3716,4001,3716,4006,3713,4005,3711,4008,3710,4010,3708,4013,L,3668,4138,3668,4208,Q,3670,4211,3670,4215,L,3703,4257,3737,4247,3747,4237,3790,4230,3797,4218,3843,4186,3867,4151,3881,4139,3881,4131,3896,4103,3920,4074,3920,4030,3954,4011,4031,4006,4031,3977,Q,4036,3975,4037,3974,L,4037,3963,4052,3944,4096,3936,4120,3920,4132,3903,4132,3883,4148,3835,4153,3826,4197,3789,4252,3770,4262,3761,4262,3712,4235,3624,4228,3617,4221,3583,4237,3564,4255,3556,Q,4257,3551,4257,3549,4261,3549,4264,3546,4265,3540,4267,3540,L,4307,3511,4307,3506,4350,3484,4389,3453,Q,4393,3454,4395,3451,L,4395,3397,4406,3386,4421,3386,4437,3371,4450,3347,4442,3328,4427,3320,4397,3320,4377,3306,4370,3299,4358,3241,4413,3072,4481,3022,4533,3017,4533,3000,4538,2983,4618,2894,4593,2823,4582,2661,Q,4588,2663,4589,2654,4591,2653,4591,2651,L,4604,2643,4612,2634,Q,4613,2633,4613,2632,L,4628,2623,4635,2612,4650,2599,4652,2591,Q,4653,2591,4654,2590,L,4663,2576,4663,2553,4660,2546,4635,2535,4631,2543,Q,4628,2543,4627,2545,L,4588,2562,4583,2566,Q,4583,2567,4582,2569,L,4574,2572,4569,2572,4562,2568,4551,2550,4537,2537,4531,2530,4526,2527,4520,2519,4509,2479,4486,2479,4474,2469,4455,2460,4449,2454,4449,2451,4412,2446,4410,2441,Q,4409,2441,4408,2440,4385,2440,4362,2440,4348,2440,4339,2449,4337,2451,4334,2452,4331,2453,4327,2454,4320,2456,4312,2457,4306,2459,4301,2462,4298,2464,4294,2466,4293,2467,4291,2468,4284,2473,4276,2475,4274,2477,4272,2477,4269,2478,4267,2479,4261,2482,4255,2484,4250,2486,4246,2489,4241,2492,4236,2492,L,4185,2519,4179,2519,4169,2510,4155,2510,4024,2442,Q,4023,2442,4022,2442,4020,2442,4019,2440,L,3961,2407,3902,2400,3872,2419,3830,2451,3812,2451,3776,2439,3774,2436,3730,2405,Q,3730,2404,3729,2403,L,3726,2403,3706,2377,3659,2333,3652,2324,3646,2317,3637,2311,3596,2293,3480,2215,3468,2204,3464,2199,3457,2196,Q,3457,2195,3456,2194,Z,M,4330,3094,L,4355,3094,Q,4359,3097,4362,3102,L,4362,3142,4338,3162,4331,3162,Q,4328,3166,4324,3164,L,4310,3164,4302,3155,4302,3131,Q,4302,3127,4305,3125,L,4305,3118,4322,3104,4322,3096,Q,4329,3096,4330,3094,Z,M,3846,3357,Q,3847,3368,3847,3380,3848,3395,3843,3407,3841,3411,3841,3414,3840,3428,3834,3438,L,3811,3465,3799,3489,3619,3501,3522,3484,3521,3484,3506,3472,3473,3467,3402,3414,Q,3400,3414,3395,3412,3392,3412,3390,3412,3384,3412,3380,3410,3358,3399,3347,3380,L,3328,3342,3316,3287,3307,3265,3316,3154,3357,3131,3378,3114,3384,3114,3419,3090,3501,3090,3545,3096,3545,3106,3658,3128,3725,3191,3747,3224,3805,3289,3826,3325,Q,3826,3332,3837,3341,3839,3342,3840,3344,Q,3843,3350,3846,3357,Z,M,3241,3195,L,3241,3289,Q,3243,3291,3243,3296,L,3249,3311,3258,3323,3258,3374,Q,3253,3378,3249,3383,L,3188,3352,Q,3182,3350,3183,3345,L,3107,3270,3107,3231,3128,3210,3128,3202,3234,3188,Z]
                ], 
                label: "Sint-Martin (Dutch)", 
                shortLabel: "SD", 
                labelPosition: [327.4,288.3], 
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