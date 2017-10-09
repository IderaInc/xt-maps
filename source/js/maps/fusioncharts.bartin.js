(function (factory) {
    if (typeof module === 'object' && typeof module.exports !== 'undefined') {
        module.exports = factory;
    } else {
        factory(FusionCharts);
    }
}(function (FusionCharts) {
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at http://www.fusioncharts.com/license
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Bartin.1.02-22-2017 02:30:32
 **/

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-bartin", function () {

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
        name: "Bartin",
        revision: 1,
        standaloneInit: true,

        baseWidth: 600,
        baseHeight: 525,
        baseScaleFactor: 10,

        /**
         * @type {Object}
         */
        entities: {
            "TR.BR.AM": { 
                outlines: [
                    [M,2788,551,Q,2763,563,2751,569,2730,579,2719,584,2719,584,2718,584,2556,661,2368,755,2344,769,2328,778,2300,794,2277,800,2263,804,2236,819,2199,838,2185,844,2158,855,2099,884,2030,918,2005,930,2003,930,2002,931,L,1899,975,Q,1893,980,1881,987,1868,994,1850,1003,1832,1013,1815,1021,1782,1035,1765,1048,1743,1065,1729,1090,1665,1170,1567,1279,1469,1387,1468,1392,1461,1400,1453,1409,1459,1411,1475,1417,1493,1422,1498,1425,1515,1434,1553,1461,1592,1489,1658,1509,L,1946,1509,Q,1949,1510,1979,1511,1991,1512,1996,1516,2003,1522,2014,1523,2020,1524,2034,1523,2039,1521,2047,1526,2057,1533,2060,1533,2070,1535,2089,1534,2098,1534,2120,1542,2139,1548,2148,1548,2158,1547,2176,1557,2199,1570,2206,1572,2220,1577,2243,1583,2262,1589,2272,1594,2282,1598,2302,1605,2318,1610,2332,1619,2343,1626,2363,1629,2393,1635,2398,1636,2407,1639,2431,1643,2453,1647,2459,1653,2472,1663,2527,1663,L,2572,1663,Q,2576,1663,2586,1658,2596,1652,2601,1652,L,2673,1652,Q,2809,1652,2847,1649,L,2944,1649,Q,2974,1645,3010,1597,3014,1592,3031,1586,3039,1581,3045,1572,L,3065,1533,Q,3073,1520,3097,1496,3100,1491,3107,1475,3113,1462,3119,1456,3126,1447,3145,1418,L,3170,1389,Q,3171,1387,3173,1386,3188,1371,3207,1343,3219,1327,3236,1303,3243,1292,3258,1287,3266,1283,3289,1273,3299,1268,3312,1263,3327,1258,3337,1253,3366,1237,3390,1228,3391,1227,3415,1217,3432,1211,3440,1204,3446,1200,3460,1191,3472,1184,3480,1176,L,3520,1138,Q,3524,1132,3533,1126,3548,1116,3549,1116,3556,1109,3564,1106,3558,1097,3545,1089,3538,1084,3535,1082,3530,1078,3524,1078,3502,1077,3481,1064,3468,1055,3436,1045,3423,1042,3413,1039,3393,1028,3391,1027,3377,1019,3371,1017,3361,1011,3349,1009,3336,1007,3326,1001,3319,997,3305,986,3298,980,3291,968,3285,955,3279,950,L,3246,916,Q,3244,912,3226,899,3224,898,3212,887,3210,877,3208,873,3202,863,3187,849,3172,836,3170,833,3166,829,3162,817,3157,805,3156,804,L,3109,715,Q,3095,673,3081,651,3075,642,3071,637,3064,626,3062,621,3059,614,3052,603,3041,587,3040,585,3012,542,3000,521,2978,485,2974,464,2973,464,2972,465,2923,487,2881,510,2858,522,2831,533,Q,2798,546,2788,551,Z]
                ], 
                label: "Amasra", 
                shortLabel: "AM", 
                labelPosition: [270,113.5], 
                labelAlignment: [CEN,MID]
            },
            "TR.BR.BR": { 
                outlines: [
                    [M,3815,1012,Q,3811,1015,3809,1024,3806,1033,3801,1037,3786,1047,3776,1060,3774,1062,3754,1093,3749,1100,3736,1101,3722,1101,3718,1101,L,3671,1101,Q,3637,1101,3621,1101,3593,1101,3578,1102,3570,1102,3564,1106,3556,1109,3549,1116,3548,1116,3533,1126,3524,1132,3520,1138,L,3480,1176,Q,3472,1184,3460,1191,3446,1200,3440,1204,3432,1211,3415,1217,3391,1227,3390,1228,3366,1237,3337,1253,3327,1258,3312,1263,3299,1268,3289,1273,3266,1283,3258,1287,3243,1292,3236,1303,3219,1327,3207,1343,3188,1371,3173,1386,3171,1387,3170,1389,L,3145,1418,Q,3126,1447,3119,1456,3113,1462,3107,1475,3100,1491,3097,1496,3073,1520,3065,1533,L,3045,1572,Q,3039,1581,3031,1586,3014,1592,3010,1597,2974,1645,2944,1649,L,2847,1649,Q,2809,1652,2673,1652,L,2601,1652,Q,2596,1652,2586,1658,2576,1663,2572,1663,L,2527,1663,Q,2472,1663,2459,1653,2453,1647,2431,1643,2407,1639,2398,1636,2393,1635,2363,1629,2343,1626,2332,1619,2318,1610,2302,1605,2282,1598,2272,1594,2262,1589,2243,1583,2220,1577,2206,1572,2199,1570,2176,1557,2158,1547,2148,1548,2139,1548,2120,1542,2098,1534,2089,1534,2070,1535,2060,1533,2057,1533,2047,1526,2039,1521,2034,1523,2020,1524,2014,1523,2003,1522,1996,1516,1991,1512,1979,1511,1949,1510,1946,1509,L,1658,1509,Q,1592,1489,1553,1461,1515,1434,1498,1425,1493,1422,1475,1417,1459,1411,1453,1409,1397,1471,1302,1580,1287,1597,1258,1631,1230,1664,1213,1683,1170,1729,1137,1772,1135,1774,1134,1776,1134,1776,1134,1777,1130,1782,1122,1792,1117,1799,1116,1803,1115,1804,1113,1815,1111,1823,1100,1837,1088,1854,1085,1859,1082,1865,1076,1879,1070,1892,1065,1900,1056,1914,1039,1946,1018,1980,1013,1990,1018,2004,1006,2011,998,2015,983,2021,960,2036,894,2068,L,838,2097,Q,833,2100,803,2116,776,2131,760,2138,711,2158,632,2204,543,2256,498,2278,449,2300,435,2307,428,2312,405,2324,L,382,2338,Q,379,2339,377,2340,255,2398,243,2406,229,2415,195,2433,160,2451,141,2461,123,2471,79,2493,34,2516,37,2518,40,2520,60,2540,79,2560,85,2570,87,2572,91,2578,94,2584,98,2587,L,106,2598,Q,113,2604,133,2620,139,2630,157,2646,174,2661,180,2670,186,2679,186,2683,187,2686,189,2688,190,2690,193,2691,203,2698,211,2705,217,2711,227,2724,237,2738,261,2757,269,2766,281,2784,294,2802,304,2810,315,2819,327,2831,339,2843,352,2857,365,2871,367,2873,369,2875,371,2883,373,2890,376,2892,384,2899,394,2908,405,2919,406,2920,L,435,2949,Q,437,2951,439,2959,441,2967,448,2972,454,2977,463,2986,472,2994,483,3007,495,3020,500,3026,505,3032,508,3038,511,3045,513,3048,514,3051,544,3074,553,3083,570,3103,572,3105,580,3118,585,3128,593,3133,607,3146,620,3160,634,3173,639,3178,644,3184,651,3191,658,3198,662,3206,666,3214,668,3218,670,3223,675,3227,679,3231,696,3247,714,3262,719,3267,723,3271,730,3278,736,3285,738,3292,L,755,3315,Q,766,3324,775,3334,786,3344,792,3352,799,3359,807,3368,815,3376,820,3379,829,3382,830,3390,831,3399,840,3408,849,3417,878,3445,901,3469,921,3487,922,3494,929,3500,933,3503,939,3507,955,3519,962,3526,969,3533,982,3549,997,3566,1001,3572,1004,3576,1009,3582,1013,3589,1013,3594,1013,3600,1030,3615,1056,3637,1068,3651,1069,3652,1070,3653,1084,3669,1091,3676,1096,3682,1100,3691,1103,3699,1111,3707,1119,3714,1139,3736,1153,3749,1175,3766,L,1203,3802,Q,1214,3812,1235,3830,1254,3848,1269,3874,1272,3880,1281,3890,1286,3898,1296,3907,1301,3914,1310,3928,1312,3931,1321,3937,1326,3941,1328,3944,1329,3944,1329,3945,1355,3988,1393,4027,1396,4030,1402,4034,1408,4037,1411,4041,1420,4055,1426,4061,1428,4064,1432,4072,1435,4077,1440,4080,1446,4084,1457,4095,1471,4110,1484,4132,1487,4139,1499,4151,1510,4163,1513,4170,1515,4175,1530,4188,1548,4204,1564,4228,1575,4244,1599,4266,L,1650,4325,Q,1682,4363,1690,4378,1698,4394,1748,4444,1797,4495,1817,4524,1835,4550,1847,4563,1853,4571,1875,4594,1886,4604,1897,4628,1897,4629,1912,4642,1927,4656,1930,4659,1938,4671,1952,4689,1966,4706,1975,4723,1977,4728,2013,4806,2014,4807,2015,4809,2019,4824,2034,4857,2053,4900,2058,4911,2063,4921,2070,4940,2077,4958,2083,4968,2089,4978,2097,4995,2105,5012,2110,5022,2114,5031,2120,5049,2126,5065,2129,5072,2131,5075,2145,5099,2153,5114,2154,5124,2156,5140,2177,5181,2199,5224,2209,5224,2213,5224,2227,5216,2240,5209,2247,5209,2253,5209,2268,5210,2281,5210,2292,5206,2315,5197,2330,5193,2350,5188,2372,5186,2374,5186,2376,5186,2393,5181,2426,5169,2438,5164,2454,5153,2469,5142,2486,5131,2502,5120,2514,5114,2526,5109,2536,5105,2545,5101,2560,5090,2562,5089,2564,5088,2568,5086,2570,5084,2581,5078,2586,5074,L,2703,5004,Q,2718,4989,2755,4970,2797,4949,2842,4919,2862,4901,2911,4875,L,2996,4826,Q,3006,4821,3016,4817,3032,4811,3037,4809,L,3076,4787,Q,3102,4780,3147,4757,3104,4650,3040,4539,3038,4537,3027,4515,3019,4498,3011,4488,3006,4483,2989,4471,2972,4459,2967,4453,2950,4435,2922,4414,2891,4392,2877,4381,L,2876,4381,Q,2856,4360,2827,4337,2786,4306,2777,4299,2747,4273,2683,4222,2682,4220,2657,4202,2644,4193,2636,4183,2627,4172,2620,4159,2613,4142,2607,4129,2577,4065,2564,4022,2563,4021,2562,4018,2560,4014,2556,4007,2547,3992,2546,3991,2534,3968,2534,3962,2533,3954,2530,3946,2525,3935,2525,3932,2522,3909,2521,3901,2510,3859,2504,3828,2498,3798,2497,3782,2497,3766,2528,3712,2553,3667,2559,3655,2560,3653,2561,3652,2640,3535,2700,3467,2717,3446,2747,3422,2779,3394,2795,3379,2834,3343,2843,3335,2866,3316,2902,3294,2932,3262,2967,3240,2985,3229,2997,3213,3011,3193,3019,3183,3052,3140,3077,3111,3086,3098,3086,3050,3086,3003,3078,2990,3071,2978,3071,2958,3072,2938,3071,2927,3071,2925,3072,2923,3075,2885,3085,2829,3098,2763,3104,2731,3104,2687,3109,2675,3116,2657,3119,2649,3124,2635,3134,2619,3156,2582,3185,2542,3186,2539,3195,2520,3204,2500,3223,2478,3242,2455,3274,2436,3305,2416,3366,2349,3370,2345,3386,2332,3404,2319,3408,2314,L,3459,2262,Q,3469,2256,3479,2247,3488,2238,3503,2226,3517,2214,3543,2186,3568,2158,3603,2132,3638,2107,3654,2086,3670,2065,3706,2037,3741,2009,3760,1989,3775,1972,3809,1944,3850,1910,3856,1905,3872,1889,3907,1863,3935,1842,3946,1833,3947,1831,3948,1830,3949,1829,3951,1829,3958,1822,3970,1810,3983,1798,3999,1787,L,4058,1742,Q,4060,1740,4113,1697,4151,1665,4169,1654,4192,1640,4232,1617,4255,1605,4304,1578,4329,1563,4368,1536,4378,1530,4404,1517,4422,1508,4432,1501,4435,1499,4438,1498,4499,1465,4566,1415,4571,1411,4687,1319,4731,1283,4741,1274,4773,1246,4794,1221,4801,1211,4820,1197,4838,1184,4846,1172,4847,1169,4865,1144,4875,1129,4882,1117,4883,1113,4885,1110,4897,1092,4915,1060,4915,1058,4914,1057,4901,1023,4897,1014,4870,962,4855,930,4834,888,4819,842,4811,839,4807,825,L,4800,807,Q,4796,795,4792,786,4786,786,4777,789,4766,792,4762,793,4759,793,4745,797,4733,802,4730,802,4723,801,4713,806,4700,812,4699,812,4691,813,4679,817,4667,820,4663,821,4648,822,4622,831,4597,840,4589,842,4557,851,4549,852,4538,853,4532,855,4520,861,4513,864,4493,868,4483,872,4471,876,4465,879,4453,882,4444,881,4438,881,4427,885,4415,889,4410,890,L,4316,891,Q,4302,891,4299,894,4291,899,4282,902,4269,906,4220,906,L,4094,906,Q,4090,907,4083,911,4077,914,4074,914,L,4046,914,4049,913,Q,4045,912,4033,913,4011,913,4008,913,L,3909,963,Q,3902,968,3876,977,3852,985,3843,992,Q,3824,1004,3815,1012,Z]
                ], 
                label: "Bartin", 
                shortLabel: "BR", 
                labelPosition: [199.6,300.5], 
                labelAlignment: [CEN,MID]
            },
            "TR.BR.KU": { 
                outlines: [
                    [M,4347,37,Q,4294,37,4269,47,L,4039,47,Q,4018,56,3971,55,3915,52,3892,56,3874,60,3821,83,3757,111,3726,124,3655,152,3635,163,3612,175,3599,182,3576,193,3556,201,3543,206,3484,237,3448,254,3426,258,3424,258,3421,259,3392,267,3336,296,3262,333,3243,340,3208,353,3151,381,3084,414,3049,430,3001,452,2974,464,2978,485,3000,521,3012,542,3040,585,3041,587,3052,603,3059,614,3062,621,3064,626,3071,637,3075,642,3081,651,3095,673,3109,715,L,3156,804,Q,3157,805,3162,817,3166,829,3170,833,3172,836,3187,849,3202,863,3208,873,3210,877,3212,887,3224,898,3226,899,3244,912,3246,916,L,3279,950,Q,3285,955,3291,968,3298,980,3305,986,3319,997,3326,1001,3336,1007,3349,1009,3361,1011,3371,1017,3377,1019,3391,1027,3393,1028,3413,1039,3423,1042,3436,1045,3468,1055,3481,1064,3502,1077,3524,1078,3530,1078,3535,1082,3538,1084,3545,1089,3558,1097,3564,1106,3570,1102,3578,1102,3593,1101,3621,1101,3637,1101,3671,1101,L,3718,1101,Q,3722,1101,3736,1101,3749,1100,3754,1093,3774,1062,3776,1060,3786,1047,3801,1037,3806,1033,3809,1024,3811,1015,3815,1012,3824,1004,3843,992,3852,985,3876,977,3902,968,3909,963,L,4008,913,Q,4011,913,4033,913,4045,912,4049,913,4051,913,4051,914,L,4074,914,Q,4077,914,4083,911,4090,907,4094,906,L,4220,906,Q,4269,906,4282,902,4291,899,4299,894,4302,891,4316,891,L,4410,890,Q,4415,889,4427,885,4438,881,4444,881,4453,882,4465,879,4471,876,4483,872,4493,868,4513,864,4520,861,4532,855,4538,853,4549,852,4557,851,4589,842,4597,840,4622,831,4648,822,4663,821,4667,820,4679,817,4691,813,4699,812,4700,812,4713,806,4723,801,4730,802,4733,802,4745,797,4759,793,4762,793,4766,792,4777,789,4786,786,4792,786,4786,771,4782,764,4768,736,4760,721,4747,694,4733,666,4718,637,4701,601,4684,566,4661,518,4660,516,4659,515,4537,274,4455,98,4454,97,4453,95,4434,60,4425,38,Q,4376,37,4347,37,Z]
                ], 
                label: "Kurucasile", 
                shortLabel: "KU", 
                labelPosition: [388.3,57.1], 
                labelAlignment: [CEN,MID]
            },
            "TR.BR.UL": { 
                outlines: [
                    [M,5048,1342,Q,5043,1335,5030,1301,5018,1279,5012,1261,5012,1260,5007,1253,5002,1248,5001,1240,4999,1235,4996,1229,4992,1221,4990,1219,4988,1210,4981,1197,4973,1184,4969,1175,4966,1170,4950,1134,L,4932,1097,Q,4926,1086,4915,1060,4897,1092,4885,1110,4883,1113,4882,1117,4875,1129,4865,1144,4847,1169,4846,1172,4838,1184,4820,1197,4801,1211,4794,1221,4773,1246,4741,1274,4731,1283,4687,1319,4571,1411,4566,1415,4499,1465,4438,1498,4435,1499,4432,1501,4422,1508,4404,1517,4378,1530,4368,1536,4329,1563,4304,1578,4255,1605,4232,1617,4192,1640,4169,1654,4151,1665,4113,1697,4060,1740,4058,1742,L,3999,1787,Q,3983,1798,3970,1810,3958,1822,3951,1829,3949,1829,3948,1830,3947,1831,3946,1833,3935,1842,3907,1863,3872,1889,3856,1905,3850,1910,3809,1944,3775,1972,3760,1989,3741,2009,3706,2037,3670,2065,3654,2086,3638,2107,3603,2132,3568,2158,3543,2186,3517,2214,3503,2226,3488,2238,3479,2247,3469,2256,3459,2262,L,3408,2314,Q,3404,2319,3386,2332,3370,2345,3366,2349,3305,2416,3274,2436,3242,2455,3223,2478,3204,2500,3195,2520,3186,2539,3185,2542,3156,2582,3134,2619,3124,2635,3119,2649,3116,2657,3109,2675,3104,2687,3104,2731,3098,2763,3085,2829,3075,2885,3072,2923,3071,2925,3071,2927,3072,2938,3071,2958,3071,2978,3078,2990,3086,3003,3086,3050,3086,3098,3077,3111,3052,3140,3019,3183,3011,3193,2997,3213,2985,3229,2967,3240,2932,3262,2902,3294,2866,3316,2843,3335,2834,3343,2795,3379,2779,3394,2747,3422,2717,3446,2700,3467,2640,3535,2561,3652,2560,3653,2559,3655,2553,3667,2528,3712,2497,3766,2497,3782,2498,3798,2504,3828,2510,3859,2521,3901,2522,3909,2525,3932,2525,3935,2530,3946,2533,3954,2534,3962,2534,3968,2546,3991,2547,3992,2556,4007,2560,4014,2562,4018,2563,4021,2564,4022,2577,4065,2607,4129,2613,4142,2620,4159,2627,4172,2636,4183,2644,4193,2657,4202,2682,4220,2683,4222,2747,4273,2777,4299,2786,4306,2827,4337,2856,4360,2876,4381,L,2877,4381,Q,2891,4392,2922,4414,2950,4435,2967,4453,2972,4459,2989,4471,3006,4483,3011,4488,3019,4498,3027,4515,3038,4537,3040,4539,3104,4650,3147,4757,3150,4756,3152,4754,3174,4744,3196,4730,3219,4717,3239,4706,3261,4697,3273,4689,3289,4675,3304,4667,3348,4643,3388,4627,3396,4624,3410,4619,3422,4614,3431,4608,L,3459,4590,Q,3460,4589,3462,4587,3468,4582,3481,4575,3489,4571,3493,4567,3496,4564,3499,4562,3501,4559,3503,4558,3504,4556,3505,4556,3515,4550,3521,4546,3528,4542,3535,4537,3541,4533,3546,4531,3551,4529,3575,4513,3599,4498,3619,4487,3639,4476,3649,4471,3654,4468,3662,4463,3685,4444,3740,4413,3787,4386,3802,4375,3804,4373,3805,4372,3813,4364,3825,4356,3832,4351,3854,4340,3875,4330,3885,4324,3903,4314,3913,4306,3920,4299,3939,4289,3958,4278,3962,4275,3968,4269,3979,4255,3990,4239,3995,4235,4003,4226,4014,4211,4027,4196,4032,4190,4043,4174,4047,4168,4053,4166,4059,4159,4063,4156,4071,4148,4091,4130,4114,4100,4128,4083,4127,4073,4137,4064,4147,4056,4147,4055,4148,4054,4149,4047,4158,4038,4165,4032,4177,4020,4202,3992,4203,3985,4202,3965,4203,3956,4205,3940,4214,3932,4221,3925,4223,3911,4226,3894,4227,3891,4232,3881,4232,3879,L,4232,3867,Q,4231,3862,4233,3855,4236,3846,4237,3841,L,4239,3796,Q,4241,3790,4248,3774,4254,3760,4255,3754,4256,3750,4263,3734,4267,3725,4265,3716,4268,3660,4276,3635,L,4288,3596,Q,4292,3582,4295,3575,4298,3561,4297,3552,4293,3533,4305,3505,4309,3495,4311,3481,4312,3466,4313,3460,4315,3458,4321,3441,4324,3431,4331,3425,4337,3418,4345,3406,4346,3404,4358,3396,4360,3395,4364,3392,4368,3390,4372,3384,4382,3370,4383,3370,4395,3356,4413,3342,4416,3339,4424,3327,4432,3315,4434,3311,4436,3308,4438,3308,4440,3307,4445,3303,4450,3299,4466,3283,4482,3266,4523,3219,4537,3202,4554,3194,4565,3190,4590,3180,L,4628,3166,Q,4632,3165,4646,3160,4662,3154,4677,3150,4692,3146,4707,3140,4721,3132,4747,3122,L,4763,3114,4819,3099,Q,4828,3099,4836,3094,4840,3090,4848,3083,4855,3075,4863,3066,4870,3058,4877,3050,4883,3042,4896,3026,4907,3010,4919,2995,4927,2986,4943,2959,4949,2951,4972,2926,4981,2915,5001,2892,5018,2872,5029,2855,5030,2852,5057,2823,5065,2813,5083,2788,5092,2777,5109,2756,5127,2735,5135,2725,L,5135,2725,Q,5136,2723,5143,2716,5150,2708,5159,2708,5167,2708,5176,2706,5184,2705,5192,2705,5195,2705,5203,2709,5211,2713,5219,2713,L,5278,2714,Q,5280,2714,5290,2719,5301,2723,5304,2723,5316,2723,5346,2722,5373,2722,5384,2723,5390,2724,5396,2727,5404,2731,5410,2733,5416,2734,5428,2734,5438,2734,5438,2733,5438,2733,5437,2733,5438,2733,5438,2732,L,5438,2733,Q,5464,2733,5468,2732,5473,2730,5497,2716,5550,2688,5559,2685,5582,2674,5629,2654,5642,2647,5665,2634,5686,2622,5702,2617,5710,2614,5731,2602,5744,2595,5766,2586,5785,2575,5829,2555,5854,2542,5895,2524,5905,2519,5924,2507,5942,2498,5959,2499,L,5959,2494,5944,2491,Q,5939,2487,5934,2487,5929,2486,5920,2484,5910,2483,5872,2470,5836,2457,5813,2440,5809,2439,5797,2432,5785,2424,5781,2422,L,5750,2405,Q,5733,2393,5722,2385,5711,2376,5679,2360,5647,2344,5618,2327,5590,2310,5555,2290,5520,2269,5471,2241,5422,2212,5401,2202,5381,2192,5367,2182,5341,2167,5329,2158,5318,2148,5317,2136,5317,2125,5314,2112,5313,2111,5305,2096,5296,2080,5285,2035,5273,1990,5256,1964,5242,1913,5233,1893,5224,1873,5206,1822,5206,1813,5202,1804,5202,1802,5194,1784,5191,1778,5179,1743,5168,1717,5164,1700,5159,1683,5155,1670,5152,1656,5141,1626,5131,1596,5129,1586,5116,1544,5109,1523,5103,1501,5101,1493,5099,1485,5091,1460,5083,1435,5079,1426,5074,1417,5068,1399,5062,1380,5057,1365,Q,5052,1349,5048,1342,Z]
                ], 
                label: "Ulus", 
                shortLabel: "UL", 
                labelPosition: [422.8,259.7], 
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
}));