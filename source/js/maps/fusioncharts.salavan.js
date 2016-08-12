/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Salavan.1.08-09-2016 04:23:01
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-salavan", function () {

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
        name: "Salavan",
        revision: 1,
        standaloneInit: true,

        baseWidth: 650,
        baseHeight: 480,
        baseScaleFactor: 10,

        /**
         * @type {Object.}
         */
        entities: {
            "LA.SL.SV": {
                outlines: [
                    [M,3857,2525,Q,3857,2525,3857,2525,3789,2499,3782,2496,3772,2492,3739,2485,3706,2477,3699,2475,3693,2474,3680,2467,3665,2460,3656,2458,3656,2458,3635,2455,3629,2454,3626,2452,3616,2464,3594,2507,3577,2540,3557,2555,3545,2565,3525,2570,3503,2574,3493,2577,3482,2580,3452,2581,3436,2581,3433,2580,3429,2580,3427,2579,3424,2578,3423,2580,3380,2580,3376,2576,3367,2570,3365,2519,3364,2465,3320,2456,3305,2453,3281,2454,3256,2456,3246,2456,3209,2456,3178,2448,3177,2448,3085,2417,3068,2411,3045,2398,3019,2382,3005,2374,2997,2369,2970,2358,2943,2347,2928,2341,2917,2338,2892,2318,2866,2298,2857,2295,2848,2292,2821,2289,2795,2286,2782,2281,L,2689,2243,Q,2672,2235,2656,2219,2644,2207,2638,2194,2630,2205,2627,2232,2625,2265,2618,2272,2612,2279,2597,2279,2582,2277,2576,2278,2571,2278,2540,2276,2516,2275,2516,2278,2515,2278,2514,2278,2473,2278,2458,2278,2433,2277,2410,2272,2408,2272,2368,2245,2331,2219,2306,2219,2304,2219,2302,2219,2302,2225,2301,2242,2301,2258,2302,2270,2303,2281,2306,2294,2310,2307,2313,2314,2315,2322,2317,2330,2318,2337,2318,2346,2318,2362,2337,2387,2348,2401,2362,2416,2369,2426,2387,2450,2399,2468,2410,2481,2423,2495,2435,2517,2452,2547,2458,2557,2494,2612,2504,2630,2505,2631,2506,2632,2523,2662,2545,2688,2576,2724,2588,2743,L,2622,2789,Q,2624,2792,2635,2811,2648,2834,2651,2867,2653,2899,2648,2919,2643,2938,2640,2969,2637,3000,2639,3016,2642,3033,2639,3040,2637,3046,2642,3062,2646,3075,2647,3084,2647,3086,2647,3087,2645,3104,2656,3120,2667,3139,2667,3148,2667,3162,2660,3172,2652,3181,2652,3188,2652,3215,2668,3234,2683,3253,2683,3261,2683,3294,2660,3308,2638,3322,2638,3335,2638,3346,2658,3373,2668,3387,2684,3403,2710,3435,2719,3444,2737,3462,2750,3462,2753,3462,2756,3462,2764,3459,2776,3451,2792,3441,2803,3441,2813,3441,2833,3451,2843,3456,2855,3463,2877,3471,2918,3484,2933,3488,2951,3490,2956,3490,2984,3490,2990,3490,2996,3492,3004,3495,3006,3500,L,3022,3527,Q,3022,3537,3018,3541,3006,3551,3004,3554,2993,3567,2992,3584,2981,3595,2981,3607,2981,3628,2995,3634,3001,3636,3025,3636,3056,3636,3072,3631,3089,3625,3107,3625,3129,3625,3139,3628,3153,3634,3163,3650,3168,3658,3175,3679,3182,3701,3187,3709,3188,3713,3195,3722,3201,3729,3203,3734,3210,3755,3212,3767,3214,3786,3215,3787,3217,3799,3225,3801,3233,3804,3255,3817,3265,3823,3275,3840,3288,3860,3287,3876,3287,3887,3285,3909,3284,3928,3289,3942,3300,3977,3341,3990,3392,4006,3408,4024,3426,4014,3455,3999,3472,3990,3474,3967,3476,3957,3473,3923,3472,3895,3477,3884,3485,3867,3511,3867,3542,3867,3570,3890,3598,3914,3624,3914,3628,3914,3667,3906,3705,3899,3731,3899,3783,3899,3819,3922,3856,3946,3888,3946,3922,3946,3936,3914,3937,3909,3958,3829,3969,3782,3997,3771,4009,3766,4060,3766,4125,3766,4146,3798,4151,3805,4158,3819,4165,3829,4177,3829,4207,3829,4218,3823,4239,3812,4287,3802,4291,3801,4332,3800,4373,3799,4392,3796,4413,3792,4428,3770,L,4457,3725,Q,4473,3708,4563,3708,4642,3708,4663,3728,4677,3742,4678,3743,4688,3749,4712,3749,4737,3749,4760,3729,4783,3708,4783,3687,4783,3680,4783,3676,4781,3671,4776,3669,L,4775,3668,4775,3668,4773,3666,Q,4763,3641,4742,3616,4725,3596,4725,3566,4725,3532,4783,3470,4842,3408,4842,3393,4842,3370,4827,3358,4824,3355,4792,3339,4733,3311,4713,3228,L,4713,3190,4757,3190,Q,4766,3201,4785,3204,4791,3205,4811,3205,4825,3205,4830,3202,4842,3196,4842,3178,4842,3168,4838,3159,4834,3151,4834,3147,4834,3142,4839,3133,4845,3124,4845,3119,4845,3107,4822,3084,4804,3065,4792,3058,4781,3050,4767,3034,4752,3015,4739,3005,4732,2999,4704,2993,4670,2985,4651,2980,4581,2962,4581,2930,4581,2922,4600,2889,4602,2886,4603,2884,4598,2875,4587,2869,4575,2863,4568,2859,4562,2854,4527,2832,4480,2799,4442,2776,4399,2747,4358,2730,4341,2722,4272,2696,4254,2690,4216,2672,4183,2657,4166,2652,4146,2645,4117,2632,4088,2618,4016,2593,Q,3943,2568,3857,2525,Z]
                ],
                label: "Saravane District",
                shortLabel: "SV",
                labelPosition: [343.5,310.9],
                labelAlignment: [CEN,MID]
            },
            "LA.SL.TA": {
                outlines: [
                    [M,5014,989,Q,4995,981,4968,965,4939,948,4919,934,4905,923,4899,919,4890,913,4878,907,4860,902,4853,898,4843,893,4842,878,4825,875,4813,863,4812,862,4781,819,4757,787,4752,783,4747,778,4721,775,4696,772,4696,773,L,4695,773,Q,4657,774,4648,788,4638,819,4620,853,4600,885,4587,907,4564,949,4564,972,4564,980,4564,981,4564,982,4568,986,4569,987,4571,990,4577,1000,4592,1022,4609,1047,4609,1056,4609,1065,4583,1098,4558,1140,4558,1200,4558,1252,4564,1266,4567,1273,4581,1293,4592,1307,4592,1323,4592,1359,4476,1401,4432,1417,4396,1425,4362,1432,4360,1426,4360,1425,4360,1424,4328,1424,4299,1410,4261,1390,4245,1382,4218,1369,4218,1379,4219,1379,4220,1379,4219,1379,4218,1380,4218,1380,4218,1379,4197,1381,4168,1399,4138,1419,4126,1419,4111,1419,4094,1405,4078,1390,4059,1390,4041,1390,4031,1406,4028,1410,4016,1440,3995,1491,3939,1495,3926,1495,3902,1511,3878,1527,3861,1529,3844,1530,3808,1534,3771,1537,3771,1538,3770,1538,3769,1538,3742,1538,3725,1521,3707,1504,3691,1504,3681,1504,3672,1519,3662,1540,3656,1552,3633,1600,3591,1600,3553,1600,3526,1583,3500,1566,3465,1566,3446,1566,3439,1588,3436,1593,3429,1634,3422,1671,3403,1688,3407,1705,3416,1735,3423,1763,3426,1782,3427,1792,3427,1827,3427,1871,3432,1884,3466,1963,3480,1992,3506,2046,3531,2086,3531,2087,3532,2088,3544,2114,3564,2153,3589,2199,3596,2214,3606,2234,3606,2286,3606,2315,3604,2375,3604,2392,3609,2406,3610,2407,3614,2425,3616,2438,3621,2447,3622,2450,3626,2452,3629,2454,3635,2455,3656,2458,3656,2458,3665,2460,3680,2467,3693,2474,3699,2475,3706,2477,3739,2485,3772,2492,3782,2496,3789,2499,3857,2525,3857,2525,3857,2525,3943,2568,4016,2593,4088,2618,4117,2632,4146,2645,4166,2652,4183,2657,4216,2672,4254,2690,4272,2696,4341,2722,4358,2730,4399,2747,4442,2776,4480,2799,4527,2832,4562,2854,4568,2859,4575,2863,4587,2869,4598,2875,4603,2884,4621,2852,4622,2849,4626,2838,4658,2829,4675,2824,4698,2820,4727,2811,4770,2757,4810,2706,4810,2688,4810,2680,4801,2638,4792,2597,4792,2574,4792,2556,4843,2526,4870,2510,4904,2490,4926,2469,4932,2436,4935,2401,4939,2380,4939,2379,4939,2377,4962,2332,4983,2308,5009,2279,5066,2270,5123,2261,5118,2233,5128,2192,5139,2163,5200,2017,5238,1947,5277,1876,5328,1874,5379,1872,5396,1909,5414,1947,5432,1947,5444,1947,5450,1942,5457,1936,5478,1936,L,5508,1942,Q,5537,1947,5541,1947,5605,1947,5664,1896,5671,1889,5699,1861,5715,1845,5722,1845,5739,1845,5764,1863,5790,1881,5811,1881,5831,1881,5886,1850,5945,1817,5953,1815,5972,1811,6015,1803,6063,1795,6081,1793,6136,1790,6156,1740,6159,1731,6169,1696,6176,1670,6184,1658,6192,1646,6199,1601,6207,1556,6206,1533,6203,1491,6280,1449,L,6343,1414,Q,6378,1393,6393,1372,6408,1350,6414,1303,6422,1244,6422,1243,6436,1205,6443,1183,6453,1151,6455,1129,6455,1126,6455,1125,6455,1121,6455,1119,6452,1079,6440,1057,6423,1026,6372,996,6250,925,6207,925,6188,925,6144,939,6099,952,6081,952,6068,952,6057,950,6050,974,6018,1044,6009,1067,5998,1080,5978,1104,5947,1106,5860,1109,5813,1116,5783,1120,5700,1120,5660,1120,5628,1118,5595,1116,5571,1114,5478,1108,5446,1106,5368,1101,5336,1097,5282,1089,5209,1066,5158,1050,5108,1030,Q,5074,1016,5014,989,Z]
                ],
                label: "Ta Oy District",
                shortLabel: "TA",
                labelPosition: [492.9,155.2],
                labelAlignment: [CEN,MID]
            },
            "LA.SL.TO": {
                outlines: [
                    [M,3201,1461,Q,3183,1483,3167,1483,3128,1483,3105,1447,3082,1411,3049,1411,3031,1411,3001,1440,2971,1468,2950,1468,2937,1468,2917,1452,2899,1436,2887,1436,2879,1436,2849,1473,2819,1509,2783,1509,2780,1509,2765,1506,2750,1502,2746,1502,2722,1502,2718,1538,2715,1556,2718,1579,2718,1620,2719,1626,2719,1635,2729,1685,2730,1689,2731,1694,2736,1730,2757,1758,2780,1788,2780,1821,2780,1837,2771,1845,2770,1846,2751,1857,2722,1874,2722,1929,2722,1960,2727,1971,2730,1978,2757,2012,2779,2039,2803,2060,2816,2074,2816,2099,2816,2129,2740,2154,2649,2183,2640,2191,2639,2192,2638,2194,2644,2207,2656,2219,2672,2235,2689,2243,L,2782,2281,Q,2795,2286,2821,2289,2848,2292,2857,2295,2866,2298,2892,2318,2917,2338,2928,2341,2943,2347,2970,2358,2997,2369,3005,2374,3019,2382,3045,2398,3068,2411,3085,2417,3177,2448,3178,2448,3209,2456,3246,2456,3256,2456,3281,2454,3305,2453,3320,2456,3364,2465,3365,2519,3367,2570,3376,2576,3380,2580,3423,2580,3424,2578,3427,2579,3429,2580,3433,2580,3436,2581,3452,2581,3482,2580,3493,2577,3503,2574,3525,2570,3545,2565,3557,2555,3577,2540,3594,2507,3616,2464,3626,2452,3622,2450,3621,2447,3616,2438,3614,2425,3610,2407,3609,2406,3604,2392,3604,2375,3606,2315,3606,2286,3606,2234,3596,2214,3589,2199,3564,2153,3544,2114,3532,2088,3531,2087,3531,2086,3506,2046,3480,1992,3466,1963,3432,1884,3427,1871,3427,1827,3427,1792,3426,1782,3423,1763,3416,1735,3407,1705,3403,1688,3387,1702,3362,1702,3331,1702,3318,1656,3307,1597,3297,1572,3281,1533,3266,1501,3236,1438,3222,1438,Q,3220,1438,3201,1461,Z]
                ],
                label: "Toomlarn District",
                shortLabel: "TO",
                labelPosition: [313.2,199.6],
                labelAlignment: [CEN,MID]
            },
            "LA.SL.LK": {
                outlines: [
                    [M,1131,2368,Q,1021,2298,944,2268,924,2257,913,2252,893,2242,870,2244,851,2245,817,2244,780,2243,772,2244,759,2244,736,2232,717,2221,708,2212,689,2196,679,2185,676,2181,660,2179,645,2176,645,2178,644,2178,643,2178,630,2178,591,2181,549,2184,545,2185,537,2158,524,2128,507,2093,501,2093,495,2093,423,2106,349,2119,347,2119,262,2124,209,2129,167,2132,151,2155,142,2168,134,2184,130,2193,119,2217,113,2229,73,2290,38,2350,38,2368,38,2376,122,2544,123,2546,124,2548,132,2571,144,2596,163,2639,164,2640,166,2644,175,2663,183,2678,187,2689,190,2699,191,2717,192,2733,196,2742,220,2804,239,2831,255,2852,277,2853,297,2855,306,2863,315,2870,315,2880,315,2884,312,2901,309,2918,309,2925,309,2949,380,2999,449,3046,451,3022,450,3021,449,3021,449,3021,451,3021,474,3021,478,3018,507,2993,515,2987,544,2968,566,2959,591,2949,591,2961,591,2961,592,2961,635,2962,663,2987,697,3018,745,3027,768,3031,813,3057,861,3085,898,3095,927,3103,948,3144,959,3168,983,3218,998,3240,1035,3291,1065,3335,1074,3368,1075,3371,1075,3374,1082,3400,1083,3403,1083,3404,1083,3408,1089,3404,1106,3404,1131,3405,1142,3403,1148,3402,1167,3400,1186,3397,1204,3396,1221,3396,1232,3406,1244,3416,1257,3416,1271,3416,1278,3392,1282,3375,1282,3356,1281,3334,1285,3324,1291,3306,1311,3306,1318,3306,1330,3312,1342,3318,1351,3318,1357,3318,1396,3301,1401,3299,1418,3299,1435,3299,1439,3298,1450,3294,1463,3285,1476,3275,1485,3272,1495,3269,1509,3266,1522,3263,1533,3263,1556,3263,1566,3269,1593,3285,1607,3290,1610,3291,1637,3303,1664,3315,1672,3315,1679,3314,1681,3312,1682,3311,1692,3309,1691,3309,1691,3306,1691,3296,1708,3270,1725,3244,1727,3238,L,1731,3231,Q,1735,3223,1742,3216,L,1754,3206,1765,3203,Q,1775,3200,1782,3197,1802,3185,1811,3172,1820,3160,1820,3144,1820,3132,1785,3062,1748,2989,1743,2977,L,1629,2720,Q,1624,2718,1621,2709,1616,2691,1615,2688,1611,2678,1598,2659,1581,2633,1578,2622,1576,2616,1576,2594,1576,2561,1580,2550,1559,2546,1539,2529,1509,2498,1487,2480,1453,2448,1428,2427,1379,2385,1366,2385,1350,2385,1319,2401,1287,2418,1259,2418,Q,1208,2418,1131,2368,Z]
                ],
                label: "Lakhonepheng District",
                shortLabel: "LK",
                labelPosition: [92.9,268.5],
                labelAlignment: [CEN,MID]
            },
            "LA.SL.VA": {
                outlines: [
                    [M,2302,2270,Q,2301,2258,2301,2242,2302,2225,2302,2219,2237,2221,2161,2295,2154,2301,2146,2318,2138,2336,2137,2351,2142,2371,2124,2381,2117,2386,2093,2391,2045,2396,2020,2399,1977,2405,1967,2427,1962,2437,1960,2487,1955,2525,1935,2536,1932,2538,1929,2539,1927,2539,1925,2540,1903,2541,1868,2539,1823,2536,1816,2521,1809,2506,1808,2491,1807,2476,1802,2474,1795,2470,1734,2470,1734,2473,1708,2471,1678,2469,1672,2470,1667,2471,1659,2481,1651,2494,1648,2495,1649,2523,1634,2538,1620,2552,1595,2552,1588,2552,1580,2550,1576,2561,1576,2594,1576,2616,1578,2622,1581,2633,1598,2659,1611,2678,1615,2688,1616,2691,1621,2709,1624,2718,1629,2720,L,1743,2977,Q,1748,2989,1785,3062,1820,3132,1820,3144,1820,3160,1811,3172,1802,3185,1782,3197,1775,3200,1765,3203,L,1754,3206,1742,3216,Q,1735,3223,1731,3231,L,1727,3238,Q,1725,3244,1708,3270,1691,3296,1691,3306,1691,3309,1692,3309,1703,3327,1726,3353,1757,3386,1768,3395,1822,3438,1848,3480,1855,3491,1875,3528,1895,3562,1908,3575,1934,3601,1944,3614,1951,3622,1963,3638,1973,3650,1982,3656,1982,3657,1983,3657,2012,3688,2070,3710,2117,3728,2117,3743,2117,3745,2118,3773,2118,3797,2117,3815,2189,3780,2222,3755,2264,3722,2296,3665,2303,3652,2306,3631,2306,3624,2307,3595,2307,3571,2338,3553,2347,3548,2366,3544,2378,3542,2396,3539,2411,3535,2431,3532,2451,3529,2459,3529,2475,3529,2502,3538,2511,3541,2544,3542,2586,3547,2615,3547,2616,3547,2617,3547,2653,3547,2662,3543,2670,3540,2682,3535,2692,3530,2702,3528,2725,3525,2736,3505,2748,3478,2756,3462,2753,3462,2750,3462,2737,3462,2719,3444,2710,3435,2684,3403,2668,3387,2658,3373,2638,3346,2638,3335,2638,3322,2660,3308,2683,3294,2683,3261,2683,3253,2668,3234,2652,3215,2652,3188,2652,3181,2660,3172,2667,3162,2667,3148,2667,3139,2656,3120,2645,3104,2647,3087,2647,3086,2647,3084,2646,3075,2642,3062,2637,3046,2639,3040,2642,3033,2639,3016,2637,3000,2640,2969,2643,2938,2648,2919,2653,2899,2651,2867,2648,2834,2635,2811,2624,2792,2622,2789,L,2588,2743,Q,2576,2724,2545,2688,2523,2662,2506,2632,2505,2631,2504,2630,2494,2612,2458,2557,2452,2547,2435,2517,2423,2495,2410,2481,2399,2468,2387,2450,2369,2426,2362,2416,2348,2401,2337,2387,2318,2362,2318,2346,2318,2337,2317,2330,2315,2322,2313,2314,2310,2307,2306,2294,Q,2303,2281,2302,2270,Z]
                ],
                label: "Vapy District",
                shortLabel: "VA",
                labelPosition: [216.6,294.8],
                labelAlignment: [CEN,MID]
            },
            "LA.SL.KH": {
                outlines: [
                    [M,1768,3395,Q,1757,3386,1726,3353,1703,3327,1692,3309,1682,3311,1681,3312,1679,3314,1672,3315,1664,3315,1637,3303,1610,3291,1607,3290,1593,3285,1566,3269,1556,3263,1533,3263,1522,3263,1509,3266,1495,3269,1485,3272,1476,3275,1463,3285,1450,3294,1439,3298,1435,3299,1418,3299,1401,3299,1396,3301,1357,3318,1351,3318,1342,3318,1330,3312,1318,3306,1311,3306,1291,3306,1285,3324,1281,3334,1282,3356,1282,3375,1278,3392,1271,3416,1257,3416,1244,3416,1232,3406,1221,3396,1204,3396,1186,3397,1167,3400,1148,3402,1142,3403,1131,3405,1106,3404,1089,3404,1083,3408,1083,3416,1083,3435,1083,3476,1060,3534,1036,3592,1036,3619,1036,3630,1039,3651,1042,3671,1042,3684,1042,3701,1025,3725,1016,3740,989,3773,936,3842,936,3903,936,3944,949,3978,961,4011,961,4019,961,4034,954,4044,945,4056,942,4073,946,4085,937,4108,931,4121,923,4133,L,923,4203,Q,925,4203,927,4204,928,4204,929,4204,937,4206,948,4206,967,4206,968,4206,979,4205,992,4200,1000,4197,1006,4185,1016,4167,1017,4166,1033,4140,1043,4125,1063,4098,1080,4098,1110,4098,1135,4115,1149,4124,1173,4151,1196,4177,1211,4187,1236,4204,1268,4204,1324,4204,1362,4153,1380,4128,1387,4118,1400,4102,1410,4102,1437,4102,1453,4120,1462,4129,1478,4159,1508,4215,1560,4215,1599,4215,1631,4185,1664,4155,1688,4155,1703,4155,1727,4174,1751,4192,1773,4192,1788,4192,1834,4171,1881,4149,1887,4149,1907,4149,1938,4165,1969,4181,1992,4181,2031,4181,2066,4160,2101,4138,2114,4138,2120,4138,2134,4147,2138,4138,2141,4111,2142,4091,2142,4080,2129,4043,2117,4003,2090,3923,2090,3901,2090,3876,2101,3858,2114,3837,2116,3824,2116,3819,2117,3815,2118,3797,2118,3773,2117,3745,2117,3743,2117,3728,2070,3710,2012,3688,1983,3657,1982,3657,1982,3656,1973,3650,1963,3638,1951,3622,1944,3614,1934,3601,1908,3575,1895,3562,1875,3528,1855,3491,1848,3480,Q,1822,3438,1768,3395,Z]
                ],
                label: "Khongsedone District",
                shortLabel: "KH",
                labelPosition: [149.8,373.9],
                labelAlignment: [CEN,MID]
            },
            "LA.SL.LN": {
                outlines: [
                    [M,3139,3628,Q,3129,3625,3107,3625,3089,3625,3072,3631,3056,3636,3025,3636,3001,3636,2995,3634,2981,3628,2981,3607,2981,3595,2992,3584,2993,3567,3004,3554,3006,3551,3018,3541,3022,3537,3022,3527,L,3006,3500,Q,3004,3495,2996,3492,2990,3490,2984,3490,2956,3490,2951,3490,2933,3488,2918,3484,2877,3471,2855,3463,2843,3456,2833,3451,2813,3441,2803,3441,2792,3441,2776,3451,2764,3459,2756,3462,2748,3478,2736,3505,2725,3525,2702,3528,2692,3530,2682,3535,2670,3540,2662,3543,2653,3547,2617,3547,2616,3547,2615,3547,2615,3548,2615,3547,2586,3547,2544,3542,2511,3541,2502,3538,2475,3529,2459,3529,2451,3529,2431,3532,2411,3535,2396,3539,2378,3542,2366,3544,2347,3548,2338,3553,2307,3571,2307,3595,2306,3624,2306,3631,2303,3652,2296,3665,2264,3722,2222,3755,2189,3780,2117,3815,2116,3819,2116,3824,2114,3837,2101,3858,2090,3876,2090,3901,2090,3923,2117,4003,2129,4043,2142,4080,2142,4091,2141,4111,2138,4138,2134,4147,2145,4153,2160,4164,2196,4191,2222,4191,2244,4191,2260,4147,2277,4104,2294,4104,2305,4104,2342,4122,2378,4140,2387,4140,2417,4140,2468,4095,2519,4049,2542,4049,2570,4049,2621,4132,2634,4153,2642,4162,2648,4169,2659,4177,2688,4198,2690,4201,2698,4210,2698,4227,2698,4246,2681,4258,2673,4263,2644,4275,2589,4296,2589,4334,L,2593,4393,Q,2593,4415,2577,4443,2561,4470,2561,4482,2561,4502,2588,4508,2605,4511,2655,4518,2684,4526,2727,4566,2741,4579,2746,4611,2748,4624,2751,4669,2752,4687,2778,4711,2784,4717,2809,4737,2810,4737,2812,4737,2831,4743,2875,4757,2903,4766,2920,4766,2967,4766,3005,4719,3022,4698,3049,4643,3071,4598,3095,4576,3116,4557,3155,4540,3179,4529,3227,4512,3270,4495,3299,4475,3310,4468,3349,4409,3383,4357,3399,4357,3407,4357,3449,4375,3491,4393,3493,4393,3532,4393,3563,4273,3563,4266,3532,4248,3489,4225,3464,4210,3364,4151,3364,4101,3364,4059,3380,4043,3386,4037,3408,4024,3392,4006,3341,3990,3300,3977,3289,3942,3284,3928,3285,3909,3287,3887,3287,3876,3288,3860,3275,3840,3265,3823,3255,3817,3233,3804,3225,3801,3217,3799,3215,3787,3214,3786,3212,3767,3210,3755,3203,3734,3201,3729,3195,3722,3188,3713,3187,3709,3182,3701,3175,3679,3168,3658,3163,3650,Q,3153,3634,3139,3628,Z]
                ],
                label: "Lao Ngarm District",
                shortLabel: "LN",
                labelPosition: [289.6,396.5],
                labelAlignment: [CEN,MID]
            },
            "LA.SL.SM": {
                outlines: [
                    [M,5420,85,Q,5327,31,5310,31,5298,31,5284,44,5269,56,5269,70,5269,79,5283,90,5296,101,5296,123,5296,143,5287,157,5281,164,5276,171,5264,195,5242,267,5217,330,5167,345,5167,346,5142,347,5127,348,5122,356,5108,382,5103,419,5094,492,5081,535,5078,566,5080,603,5081,624,5083,659,5085,718,5053,760,5032,786,5003,793,4988,796,4951,796,4910,795,4887,837,4877,858,4872,866,4864,879,4856,879,4849,879,4842,878,4843,893,4853,898,4860,902,4878,907,4890,913,4899,919,4905,923,4919,934,4939,948,4968,965,4995,981,5014,989,5074,1016,5108,1030,5158,1050,5209,1066,5282,1089,5336,1097,5368,1101,5446,1106,5478,1108,5571,1114,5595,1116,5628,1118,5660,1120,5700,1120,5783,1120,5813,1116,5860,1109,5947,1106,5978,1104,5998,1080,6009,1067,6018,1044,6050,974,6057,950,6033,945,6011,932,5978,913,5929,913,5900,913,5865,925,5829,937,5809,937,5772,937,5768,898,5771,848,5771,823,5771,753,5714,727,5679,714,5660,705,5626,691,5603,669,5574,645,5558,631,5529,604,5523,577,5517,554,5485,518,5455,484,5455,469,5455,469,5476,432,5496,393,5496,379,5496,370,5483,350,5470,329,5470,310,5470,290,5495,233,5520,176,5520,170,Q,5520,143,5420,85,Z]
                ],
                label: "Samuoi District",
                shortLabel: "SM",
                labelPosition: [536.2,82],
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
