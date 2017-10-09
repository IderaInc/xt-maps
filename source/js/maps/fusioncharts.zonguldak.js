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
 * @id fusionmaps.Zonguldak.1.02-22-2017 12:07:54
 **/

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-zonguldak", function () {

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
        name: "Zonguldak",
        revision: 1,
        standaloneInit: true,

        baseWidth: 600,
        baseHeight: 424,
        baseScaleFactor: 10,

        /**
         * @type {Object}
         */
        entities: {
            "TR.ZO.AL": { 
                outlines: [
                    [M,551,2712,Q,539,2700,535,2699,523,2696,520,2691,519,2687,514,2683,509,2678,507,2676,503,2671,501,2669,497,2665,492,2664,487,2662,486,2660,484,2658,479,2655,474,2652,471,2650,468,2647,465,2646,464,2655,460,2662,460,2672,458,2681,455,2689,450,2702,450,2703,448,2718,446,2729,439,2736,428,2745,419,2763,413,2774,399,2794,386,2813,381,2824,376,2833,363,2852,358,2858,353,2867,348,2876,345,2880,314,2928,286,2970,257,3013,235,3036,L,209,3065,Q,194,3085,179,3098,159,3115,155,3120,146,3131,133,3145,126,3152,112,3166,99,3178,91,3192,87,3197,71,3212,54,3228,52,3232,51,3234,42,3241,37,3246,37,3253,37,3256,41,3257,46,3259,49,3262,L,62,3277,64,3284,Q,65,3285,71,3291,L,81,3301,Q,110,3335,123,3358,130,3371,143,3388,150,3397,162,3414,176,3434,184,3441,198,3453,209,3472,219,3490,246,3527,L,275,3559,Q,285,3570,287,3575,288,3585,298,3592,312,3602,331,3623,358,3654,361,3657,364,3660,421,3714,459,3750,479,3774,479,3775,480,3776,488,3791,492,3796,497,3801,520,3820,543,3840,575,3877,583,3885,613,3917,644,3949,661,3965,L,887,3964,Q,893,3964,907,3965,911,3965,914,3965,916,3942,913,3934,909,3926,907,3922,903,3914,903,3909,902,3905,897,3895,893,3886,893,3880,893,3878,890,3866,886,3854,886,3852,882,3830,878,3824,877,3822,877,3816,877,3810,875,3807,867,3795,867,3793,865,3786,865,3776,865,3768,862,3763,858,3755,856,3748,856,3746,856,3739,856,3737,855,3736,848,3710,840,3689,838,3684,838,3676,837,3669,835,3664,833,3661,831,3652,829,3640,829,3639,829,3639,824,3624,822,3618,823,3609,823,3606,819,3597,814,3588,813,3584,810,3569,805,3559,804,3550,803,3548,799,3538,799,3535,799,3534,801,3532,802,3529,802,3528,802,3521,803,3520,810,3514,817,3502,825,3489,828,3484,L,841,3467,Q,848,3454,852,3445,856,3437,864,3424,871,3413,873,3407,874,3405,875,3395,876,3388,878,3384,883,3378,884,3373,885,3370,885,3364,886,3360,890,3350,893,3343,893,3339,893,3330,889,3322,885,3312,882,3303,881,3295,881,3281,883,3265,882,3258,881,3256,878,3249,875,3244,876,3239,L,875,3179,Q,874,3177,874,3176,871,3161,865,3146,865,3143,854,3117,850,3108,840,3092,830,3073,825,3062,819,3050,794,3001,774,2962,767,2944,731,2903,722,2888,720,2885,699,2862,699,2855,690,2846,681,2837,679,2834,671,2824,656,2807,648,2798,645,2794,637,2786,631,2783,625,2779,608,2761,598,2748,593,2749,L,580,2740,Z]
                ], 
                label: "Alapli", 
                shortLabel: "AL", 
                labelPosition: [53,326.9], 
                labelAlignment: [CEN,MID]
            },
            "TR.ZO.CA": { 
                outlines: [
                    [M,4510,600,Q,4505,594,4498,582,4492,571,4488,567,L,4467,543,Q,4463,539,4459,536,4457,532,4448,526,4444,523,4441,518,L,4437,511,Q,4416,488,4411,482,4405,477,4397,469,4389,461,4383,455,L,4370,443,Q,4365,439,4363,437,L,4358,429,Q,4325,389,4306,375,4301,360,4287,347,4274,333,4254,319,4253,316,4248,312,4243,306,4242,305,4241,304,4240,298,4238,293,4235,290,4233,288,4224,277,4221,274,4211,265,4201,257,4183,238,4180,235,4178,230,4176,226,4173,223,4169,220,4166,216,4161,211,4159,209,L,4130,181,Q,4120,172,4115,168,4106,161,4103,152,4102,150,4090,137,4087,134,4081,124,4070,115,4067,112,L,4035,69,Q,4032,63,4028,61,4024,58,4023,52,4021,47,4018,42,L,4018,32,4013,32,3889,100,3889,122,Q,3889,125,3891,133,3892,142,3892,148,3892,167,3895,174,3898,183,3901,191,3903,197,3903,206,3903,216,3902,225,3901,234,3901,244,3901,253,3905,259,3910,266,3911,283,3911,291,3916,302,3920,313,3921,318,3922,331,3930,346,3939,364,3941,373,3943,382,3950,399,3959,418,3961,428,3966,448,3981,483,3982,485,3984,495,3985,502,3989,508,4000,525,4004,534,L,4004,538,4003,538,4003,605,Q,4002,609,3996,618,3992,627,3993,674,3993,674,3993,676,3993,681,3993,699,3993,715,3986,726,3968,755,3963,775,3960,785,3950,799,3936,815,3933,821,3927,833,3918,845,3909,858,3903,865,3904,871,3900,876,3899,879,3891,887,3887,890,3882,898,3876,906,3872,909,3859,920,3850,933,3840,948,3841,959,3841,965,3840,967,3839,970,3835,973,3830,978,3830,987,3830,991,3830,995,3830,998,3827,1002,3824,1008,3824,1008,3823,1011,3823,1016,L,3817,1027,Q,3812,1034,3813,1040,3813,1045,3810,1055,3809,1059,3808,1066,3808,1067,3807,1068,3807,1075,3807,1076,3806,1078,3803,1081,3801,1084,3800,1087,3798,1093,3798,1112,3798,1132,3799,1136,3799,1137,3803,1148,3805,1154,3805,1159,L,3805,1219,Q,3805,1223,3809,1242,3813,1262,3813,1267,3813,1270,3813,1279,3813,1286,3815,1290,3817,1293,3820,1301,3824,1310,3824,1314,L,3824,1315,3823,1318,Q,3823,1323,3826,1331,3832,1345,3832,1348,3832,1348,3833,1357,3833,1364,3834,1365,3836,1368,3838,1372,3840,1378,3840,1380,3839,1400,3848,1412,3848,1412,3849,1419,3850,1425,3851,1427,L,3860,1445,Q,3866,1457,3878,1473,3891,1490,3897,1501,3910,1526,3915,1533,3925,1549,3935,1561,3951,1590,3955,1599,3959,1607,3979,1628,3984,1635,3991,1643,3997,1650,4003,1656,4009,1662,4021,1675,4032,1688,4042,1702,4044,1703,4045,1710,4047,1716,4053,1718,4060,1722,4068,1731,4072,1735,4079,1744,4086,1750,4088,1759,4090,1762,4102,1770,4103,1771,4109,1772,4110,1772,4116,1778,4118,1780,4122,1784,4128,1788,4129,1791,L,4163,1815,Q,4187,1836,4188,1837,4189,1838,4195,1840,4201,1842,4204,1844,4206,1846,4210,1850,4212,1853,4216,1855,4219,1857,4221,1859,4222,1859,4223,1860,4247,1870,4317,1907,4377,1938,4415,1946,4429,1949,4443,1948,4469,1947,4472,1947,4477,1947,4485,1951,4489,1953,4498,1957,4504,1960,4512,1959,4517,1959,4524,1958,L,4637,1958,Q,4637,1958,4639,1958,4642,1957,4650,1953,4660,1948,4666,1949,4672,1949,4680,1946,4684,1945,4696,1941,4707,1937,4731,1931,4752,1924,4764,1916,4792,1897,4890,1843,4906,1834,5032,1772,5049,1763,5100,1740,5146,1718,5169,1703,5170,1703,5171,1702,5195,1689,5285,1652,5327,1633,5349,1625,5374,1615,5379,1612,5394,1605,5402,1593,5388,1578,5377,1565,5375,1563,5348,1535,5340,1522,5324,1503,5308,1484,5301,1473,L,5269,1443,Q,5256,1421,5245,1410,5241,1406,5238,1402,L,5218,1380,Q,5208,1371,5200,1360,5199,1357,5195,1352,5193,1346,5191,1344,5176,1328,5174,1326,5166,1319,5160,1312,5140,1290,5134,1282,5119,1262,5112,1254,5099,1240,5086,1230,5081,1227,5073,1217,5072,1216,5069,1210,5067,1204,5065,1202,5045,1178,5038,1172,5033,1168,5025,1160,5017,1152,5012,1146,5007,1141,5002,1134,4998,1127,4995,1124,4984,1114,4983,1111,4981,1107,4960,1086,4939,1064,4925,1048,4911,1035,4897,1017,4887,1004,4863,983,4861,982,4853,976,4849,973,4849,971,4846,961,4838,954,4836,952,4825,940,4815,929,4808,924,4799,918,4792,909,4782,898,4777,892,4776,890,4776,887,4776,883,4775,882,L,4771,877,Q,4765,873,4763,869,4754,857,4751,855,4745,849,4715,822,4706,814,4704,807,L,4690,787,Q,4679,778,4669,767,4658,755,4654,752,4650,748,4638,739,L,4627,723,Q,4607,700,4598,690,4577,672,4569,661,4564,655,4556,646,4547,637,4541,630,4536,624,4525,614,Q,4514,604,4510,600,Z]
                ], 
                label: "Çaycuma", 
                shortLabel: "CA", 
                labelPosition: [445.6,137.4], 
                labelAlignment: [CEN,MID]
            },
            "TR.ZO.DE": { 
                outlines: [
                    [M,3649,2043,Q,3590,2017,3557,2002,3499,1978,3468,1977,3467,1977,3465,1977,3413,1978,3398,1972,3383,1965,3350,1965,3318,1965,3295,1979,3272,1992,3247,2003,3228,2011,3198,2030,3169,2047,3154,2054,3138,2060,3131,2074,3123,2091,3119,2094,3113,2099,3102,2114,3090,2129,3086,2132,3084,2133,3082,2134,3083,2138,3086,2149,3086,2153,3081,2162,3076,2170,3076,2177,3076,2182,3073,2188,3069,2197,3068,2200,3066,2207,3061,2222,3057,2234,3052,2245,3051,2246,3050,2248,3047,2258,3040,2280,3033,2300,3031,2313,3017,2366,3014,2376,3012,2384,3006,2404,3001,2422,2994,2434,2990,2441,2981,2467,2979,2473,2976,2487,2975,2492,2973,2495,2971,2497,2969,2498,2965,2511,2946,2570,2933,2611,2920,2639,2916,2647,2899,2670,2883,2692,2877,2704,2871,2717,2855,2734,2838,2752,2828,2763,2826,2765,2825,2766,2816,2778,2794,2796,2769,2815,2739,2844,2708,2873,2683,2890,2658,2907,2634,2930,2610,2952,2595,2967,2579,2981,2568,2992,2557,3003,2537,3015,L,2537,3015,Q,2530,3022,2521,3028,2511,3034,2506,3041,2501,3046,2491,3058,2482,3069,2477,3073,2434,3102,2416,3119,2405,3130,2392,3144,2375,3163,2367,3177,2363,3185,2357,3192,2347,3201,2342,3207,2340,3209,2329,3225,2322,3234,2319,3237,2318,3238,2318,3239,2312,3252,2303,3261,2295,3269,2294,3273,2292,3282,2285,3300,2281,3309,2274,3350,2274,3350,2270,3361,2267,3369,2267,3373,2267,3375,2261,3383,2256,3390,2255,3397,L,2255,3451,Q,2255,3472,2272,3540,2272,3541,2273,3543,2272,3611,2272,3638,2271,3666,2272,3683,2273,3701,2277,3710,2280,3716,2298,3741,2299,3742,2300,3743,2303,3755,2318,3777,2320,3781,2327,3796,2334,3811,2341,3822,2347,3834,2362,3869,2376,3904,2386,3924,2391,3935,2401,3954,2406,3964,2416,3991,2427,4014,2437,4022,2477,4023,2509,4030,2577,4044,2589,4045,L,2668,4053,Q,2674,4058,2685,4059,2697,4060,2702,4062,2709,4066,2736,4069,2778,4067,2835,4081,2897,4095,2928,4095,2954,4095,2973,4102,2977,4103,2984,4103,2991,4102,2994,4104,2996,4105,3003,4109,3011,4113,3015,4113,3037,4113,3066,4118,3094,4122,3110,4122,3119,4122,3135,4127,3151,4132,3157,4131,3164,4130,3179,4136,3194,4142,3199,4142,3224,4141,3251,4143,3266,4145,3294,4148,3303,4149,3319,4153,3335,4158,3341,4158,3356,4159,3393,4168,3406,4169,3415,4168,3423,4167,3430,4170,3440,4175,3442,4175,3445,4176,3453,4176,3461,4175,3466,4176,3468,4176,3475,4181,3480,4184,3483,4185,L,3718,4185,Q,3738,4185,3777,4192,L,4046,4192,4050,4194,4429,4194,Q,4435,4201,4435,4202,4436,4202,4442,4202,L,4447,4202,4447,4171,Q,4447,4159,4451,4154,4455,4150,4455,4142,L,4453,4124,4453,4039,Q,4457,4037,4459,4030,4461,4021,4463,4018,4464,4006,4464,3995,4464,3963,4463,3949,4460,3935,4464,3927,4468,3919,4469,3917,4472,3907,4471,3897,L,4473,3846,4473,3842,Q,4473,3815,4475,3785,4475,3762,4475,3751,4475,3732,4480,3719,4483,3709,4483,3688,4482,3659,4482,3651,4483,3635,4487,3620,4491,3605,4491,3594,4491,3582,4492,3532,4492,3530,4492,3529,4493,3521,4495,3517,4499,3505,4499,3497,4499,3483,4500,3462,L,4521,3426,Q,4526,3417,4539,3398,4541,3396,4548,3380,4553,3369,4556,3365,4559,3361,4569,3349,4578,3338,4577,3333,4578,3323,4586,3314,4590,3309,4597,3300,4601,3293,4609,3283,4614,3277,4616,3272,4616,3269,4617,3267,4619,3259,4624,3253,4627,3248,4638,3233,4646,3218,4658,3200,4675,3171,4699,3136,4706,3124,4719,3097,4722,3092,4731,3082,4732,3080,4732,3071,L,4736,3064,4767,3038,Q,4768,3036,4772,3036,4773,3036,4776,3036,4777,3033,4782,3030,4787,3023,4790,3020,4791,3019,4792,3019,4814,3000,4871,2949,4878,2943,4890,2933,4900,2924,4908,2916,4910,2913,4914,2907,4918,2902,4924,2901,4929,2899,4934,2895,4941,2888,4944,2887,4945,2885,4947,2883,4942,2879,4935,2875,4927,2869,4922,2868,4913,2866,4895,2852,4881,2840,4869,2838,4863,2837,4856,2832,4849,2826,4844,2824,4838,2821,4818,2811,4804,2805,4794,2796,4787,2790,4784,2787,4777,2781,4776,2774,4774,2768,4767,2761,4760,2755,4757,2752,4748,2745,4743,2740,4733,2731,4732,2725,4731,2719,4723,2709,4714,2700,4710,2696,4700,2685,4694,2680,4691,2677,4688,2674,4686,2669,4683,2666,4678,2659,4656,2637,4634,2616,4630,2611,4628,2608,4618,2599,4614,2595,4613,2593,4609,2591,4603,2591,4601,2591,4594,2587,4588,2583,4585,2583,4571,2583,4566,2578,4562,2575,4551,2574,4536,2574,4532,2574,4527,2571,4516,2567,4512,2566,4507,2566,4501,2565,4498,2565,L,4484,2560,Q,4482,2559,4475,2558,4467,2557,4465,2555,4408,2530,4391,2523,4366,2514,4359,2510,4334,2498,4326,2491,4321,2487,4296,2469,4276,2455,4268,2446,4268,2446,4267,2445,4248,2428,4230,2412,4226,2408,4223,2404,4219,2396,4216,2392,4202,2378,4200,2372,4196,2365,4197,2348,4197,2330,4195,2322,4191,2312,4191,2295,4191,2278,4191,2270,4190,2266,4189,2248,4161,2237,4106,2221,4035,2199,4016,2193,3996,2186,3967,2173,3936,2159,3926,2154,3858,2126,3838,2118,3806,2103,3747,2081,Q,3681,2057,3649,2043,Z]
                ], 
                label: "Devrek", 
                shortLabel: "DE", 
                labelPosition: [360.1,308.4], 
                labelAlignment: [CEN,MID]
            },
            "TR.ZO.ER": { 
                outlines: [
                    [M,1902,1255,Q,1863,1275,1854,1280,1852,1281,1852,1282,1807,1304,1773,1322,1738,1340,1721,1351,1705,1361,1693,1365,1688,1366,1681,1371,1674,1376,1668,1380,1661,1384,1651,1387,1641,1390,1608,1401,1569,1415,1559,1419,1534,1428,1508,1435,1497,1437,1487,1444,1481,1447,1477,1449,1474,1450,1472,1451,1470,1451,1469,1451,1447,1460,1419,1466,1404,1470,1391,1475,1388,1476,1376,1483,1366,1486,1365,1486,1329,1499,1312,1507,1300,1511,1296,1512,1288,1513,1284,1517,L,1262,1539,Q,1234,1562,1170,1615,1150,1632,1125,1656,1117,1663,1100,1675,1096,1678,1089,1685,1080,1690,1079,1694,1023,1739,998,1762,972,1785,962,1793,951,1800,908,1840,L,840,1897,Q,833,1903,824,1912,815,1921,808,1927,800,1933,787,1941,777,1947,771,1956,770,1957,770,1958,682,2033,663,2048,643,2063,631,2076,619,2089,601,2103,571,2126,570,2127,558,2136,543,2149,524,2160,520,2173,518,2178,514,2189,510,2199,510,2205,509,2211,509,2221,509,2226,510,2237,510,2239,510,2245,510,2251,508,2256,502,2269,502,2275,502,2282,502,2298,501,2312,498,2319,491,2336,491,2364,491,2380,491,2407,491,2412,489,2433,488,2450,483,2459,L,481,2511,Q,484,2521,476,2541,467,2562,469,2574,471,2603,466,2626,466,2627,465,2628,464,2634,465,2645,465,2645,465,2646,468,2647,471,2650,474,2652,479,2655,484,2658,486,2660,487,2662,492,2664,497,2665,501,2669,503,2671,507,2676,509,2678,514,2683,519,2687,520,2691,523,2696,535,2699,539,2700,551,2712,L,580,2740,593,2749,Q,598,2748,608,2761,625,2779,631,2783,637,2786,645,2794,648,2798,656,2807,671,2824,679,2834,681,2837,690,2846,699,2855,699,2862,720,2885,722,2888,731,2903,767,2944,774,2962,794,3001,819,3050,825,3062,830,3073,840,3092,850,3108,854,3117,865,3143,865,3146,871,3161,874,3176,874,3177,875,3179,L,876,3239,Q,875,3244,878,3249,881,3256,882,3258,883,3265,881,3281,881,3295,882,3303,885,3312,889,3322,893,3330,893,3339,893,3343,890,3350,886,3360,885,3364,885,3370,884,3373,883,3378,878,3384,876,3388,875,3395,874,3405,873,3407,871,3413,864,3424,856,3437,852,3445,848,3454,841,3467,L,828,3484,Q,825,3489,817,3502,810,3514,803,3520,802,3521,802,3528,802,3529,801,3532,799,3534,799,3535,799,3538,803,3548,804,3550,805,3559,810,3569,813,3584,814,3588,819,3597,823,3606,823,3609,822,3618,824,3624,829,3639,829,3639,829,3640,831,3652,833,3661,835,3664,837,3669,838,3676,838,3684,840,3689,848,3710,855,3736,856,3737,856,3739,856,3746,856,3748,858,3755,862,3763,865,3768,865,3776,865,3786,867,3793,867,3795,875,3807,877,3810,877,3816,877,3822,878,3824,882,3830,886,3852,886,3854,890,3866,893,3878,893,3880,893,3886,897,3895,902,3905,903,3909,903,3914,907,3922,909,3926,913,3934,916,3942,914,3965,925,3964,931,3962,939,3959,952,3957,965,3954,984,3954,1003,3954,1009,3955,1015,3955,1023,3952,1031,3949,1036,3948,L,1059,3948,Q,1064,3948,1079,3942,1094,3936,1101,3937,1109,3938,1122,3933,1137,3927,1142,3927,1149,3926,1166,3927,1183,3928,1191,3927,1208,3923,1218,3920,1222,3919,1234,3919,1252,3919,1259,3923,1263,3926,1285,3926,1303,3931,1337,3943,1353,3948,1388,3955,1425,3962,1437,3965,1472,3973,1486,3979,1492,3981,1499,3980,1507,3980,1510,3982,1514,3983,1520,3986,1526,3988,1532,3989,1534,3989,1584,3990,1585,3990,1600,3989,1608,3989,1613,3990,1621,3992,1626,3996,1629,3998,1636,3998,1641,3998,1644,3997,1973,4003,1987,4002,2001,4001,2038,4004,2076,4006,2093,4006,2124,4006,2157,4006,2178,4007,2196,4012,2208,4016,2249,4015,2302,4014,2309,4014,2328,4015,2356,4020,2379,4024,2400,4023,2420,4022,2437,4022,2427,4014,2416,3991,2406,3964,2401,3954,2391,3935,2386,3924,2376,3904,2362,3869,2347,3834,2341,3822,2334,3811,2327,3796,2320,3781,2318,3777,2303,3755,2300,3743,2299,3742,2298,3741,2280,3716,2277,3710,2273,3701,2272,3683,2271,3666,2272,3638,2272,3611,2273,3543,2272,3541,2272,3540,2255,3472,2255,3451,L,2255,3397,Q,2256,3390,2261,3383,2267,3375,2267,3373,2267,3369,2270,3361,2274,3350,2274,3350,2281,3309,2285,3300,2292,3282,2294,3273,2295,3269,2303,3261,2312,3252,2318,3239,2318,3238,2319,3237,2322,3234,2329,3225,2340,3209,2342,3207,2347,3201,2357,3192,2363,3185,2367,3177,2375,3163,2392,3144,2405,3130,2416,3119,2434,3102,2477,3073,2482,3069,2491,3058,2501,3046,2506,3041,2511,3034,2521,3028,2530,3022,2537,3015,L,2537,3015,Q,2557,3003,2568,2992,2579,2981,2595,2967,2610,2952,2634,2930,2658,2907,2683,2890,2708,2873,2739,2844,2769,2815,2794,2796,2816,2778,2825,2766,2826,2765,2828,2763,2838,2752,2855,2734,2871,2717,2877,2704,2883,2692,2899,2670,2916,2647,2920,2639,2933,2611,2946,2570,2965,2511,2969,2498,2971,2497,2973,2495,2975,2492,2976,2487,2979,2473,2981,2467,2990,2441,2994,2434,3001,2422,3006,2404,3012,2384,3014,2376,3017,2366,3031,2313,3033,2300,3040,2280,3047,2258,3050,2248,3051,2246,3052,2245,3057,2234,3061,2222,3066,2207,3068,2200,3069,2197,3073,2188,3076,2182,3076,2177,3076,2170,3081,2162,3086,2153,3086,2149,3083,2138,3082,2134,3053,2152,3041,2162,L,3020,2176,Q,3013,2181,3008,2185,3002,2189,3001,2190,2987,2201,2956,2218,2948,2223,2900,2249,2894,2251,2876,2258,2859,2265,2850,2270,2849,2271,2829,2283,2814,2292,2803,2295,2794,2298,2779,2297,2762,2296,2754,2296,L,2724,2296,Q,2719,2296,2710,2301,2700,2306,2697,2306,2692,2307,2682,2306,2672,2306,2668,2306,2665,2307,2655,2311,2646,2315,2642,2315,2640,2315,2623,2314,2612,2314,2607,2315,2598,2318,2594,2321,2591,2324,2585,2324,2577,2323,2573,2323,2569,2323,2567,2321,2564,2317,2561,2316,L,2544,2316,Q,2531,2313,2516,2303,2512,2300,2503,2299,2493,2297,2490,2296,L,2463,2287,Q,2446,2282,2432,2266,2417,2250,2397,2231,2373,2208,2355,2191,2339,2176,2331,2168,2315,2152,2307,2148,2295,2141,2282,2131,2264,2117,2252,2109,2226,2091,2209,2077,2192,2062,2181,2052,2169,2042,2150,2026,2150,2025,2149,2025,2145,2021,2137,2018,2130,2014,2124,2008,2115,1995,2111,1991,2104,1984,2099,1980,2097,1978,2091,1977,2087,1976,2085,1975,2076,1962,2073,1960,2063,1954,2057,1949,2051,1942,2046,1936,2031,1920,2022,1912,2007,1897,1993,1886,1982,1879,1967,1859,1961,1851,1961,1829,1961,1823,1952,1803,1945,1787,1944,1781,1943,1780,1943,1779,1941,1770,1936,1764,1932,1757,1931,1753,1930,1748,1926,1739,1923,1732,1923,1725,1922,1700,1919,1690,1916,1681,1916,1665,1917,1624,1917,1600,L,1917,1599,Q,1917,1597,1917,1595,1917,1587,1914,1573,1910,1555,1910,1545,1913,1505,1911,1489,1910,1477,1916,1464,1919,1457,1929,1441,1938,1426,1962,1391,1979,1364,1982,1352,1981,1351,1981,1349,1978,1329,1982,1316,1984,1303,1986,1280,1987,1256,1986,1244,1986,1231,1986,1210,1970,1218,1958,1225,Q,1937,1238,1902,1255,Z]
                ], 
                label: "Eregli", 
                shortLabel: "ER", 
                labelPosition: [163.1,276], 
                labelAlignment: [CEN,MID]
            },
            "TR.ZO.GO": { 
                outlines: [
                    [M,5509,1723,Q,5498,1713,5496,1711,5483,1690,5477,1681,5466,1664,5453,1651,L,5404,1596,Q,5402,1595,5402,1593,5394,1605,5379,1612,5374,1615,5349,1625,5327,1633,5285,1652,5195,1689,5171,1702,5170,1703,5169,1703,5146,1718,5100,1740,5049,1763,5032,1772,4906,1834,4890,1843,4792,1897,4764,1916,4752,1924,4731,1931,4707,1937,4696,1941,4684,1945,4680,1946,4672,1949,4666,1949,4660,1948,4650,1953,4642,1957,4639,1958,4637,1958,4637,1958,L,4524,1958,Q,4517,1959,4512,1959,4504,1960,4498,1957,4489,1953,4485,1951,4477,1947,4472,1947,4469,1947,4443,1948,4429,1949,4415,1946,4377,1938,4317,1907,4247,1870,4223,1860,4228,1864,4230,1868,4232,1872,4232,1884,4232,1886,4231,1934,4230,1937,4225,1954,4222,1965,4223,1975,4223,1976,4223,1977,4223,1984,4223,1991,4222,1998,4217,2005,4214,2009,4214,2018,4215,2029,4212,2034,4205,2045,4205,2047,L,4205,2065,Q,4206,2070,4203,2078,4203,2079,4197,2092,L,4197,2105,Q,4196,2113,4192,2117,4189,2120,4185,2129,4181,2139,4181,2144,4181,2145,4182,2185,4182,2186,4185,2197,4187,2208,4188,2212,4188,2234,4189,2248,4190,2266,4191,2270,4191,2278,4191,2295,4191,2312,4195,2322,4197,2330,4197,2348,4196,2365,4200,2372,4202,2378,4216,2392,4219,2396,4223,2404,4226,2408,4230,2412,4248,2428,4267,2445,4268,2446,4268,2446,4276,2455,4296,2469,4321,2487,4326,2491,4334,2498,4359,2510,4366,2514,4391,2523,4408,2530,4465,2555,4467,2557,4475,2558,4482,2559,4484,2560,L,4498,2565,Q,4501,2565,4507,2566,4512,2566,4516,2567,4527,2571,4532,2574,4536,2574,4551,2574,4562,2575,4566,2578,4571,2583,4585,2583,4588,2583,4594,2587,4601,2591,4603,2591,4609,2591,4613,2593,4614,2595,4618,2599,4628,2608,4630,2611,4634,2616,4656,2637,4678,2659,4683,2666,4686,2669,4688,2674,4691,2677,4694,2680,4700,2685,4710,2696,4714,2700,4723,2709,4731,2719,4732,2725,4733,2731,4743,2740,4748,2745,4757,2752,4760,2755,4767,2761,4774,2768,4776,2774,4777,2781,4784,2787,4787,2790,4794,2796,4804,2805,4818,2811,4838,2821,4844,2824,4849,2826,4856,2832,4863,2837,4869,2838,4881,2840,4895,2852,4913,2866,4922,2868,4927,2869,4935,2875,4942,2879,4947,2883,4951,2878,4961,2870,4966,2865,4981,2857,4990,2851,4999,2841,5012,2826,5018,2821,5029,2810,5062,2784,5066,2779,5101,2751,5106,2747,5122,2731,5136,2717,5146,2709,5150,2706,5156,2700,5161,2695,5166,2696,5171,2696,5179,2692,5188,2688,5192,2688,5198,2688,5205,2683,5214,2679,5221,2678,5224,2677,5227,2676,5230,2674,5234,2672,5235,2671,5246,2668,5251,2664,5258,2663,5267,2661,5270,2660,5274,2659,5284,2654,5292,2651,5299,2652,5304,2652,5309,2649,5312,2647,5321,2643,5336,2635,5346,2632,5353,2630,5375,2626,L,5445,2603,Q,5477,2590,5479,2590,5497,2583,5553,2564,5581,2554,5617,2538,5630,2539,5646,2532,5655,2528,5664,2525,5675,2522,5681,2520,5682,2519,5688,2516,5692,2513,5695,2513,L,5711,2509,Q,5718,2507,5728,2503,5737,2500,5745,2501,5752,2502,5762,2498,5776,2493,5779,2493,5784,2491,5806,2490,5808,2490,5810,2490,5834,2490,5843,2489,5846,2489,5853,2485,5858,2483,5863,2483,L,5882,2481,Q,5885,2481,5893,2477,5900,2473,5902,2473,L,5922,2473,Q,5930,2473,5943,2471,5957,2469,5960,2469,L,5961,2468,Q,5960,2467,5958,2466,5954,2462,5948,2447,5933,2425,5933,2423,5932,2412,5926,2401,5919,2387,5913,2375,5909,2367,5908,2363,5906,2351,5904,2348,5901,2344,5891,2324,5888,2318,5886,2311,5883,2298,5882,2298,5881,2293,5876,2284,5871,2276,5870,2273,5852,2230,5843,2213,5827,2186,5812,2151,5800,2121,5799,2116,5797,2108,5792,2100,5787,2090,5784,2083,5783,2081,5779,2075,5775,2071,5775,2068,5772,2057,5770,2052,5760,2034,5758,2025,5757,2023,5757,2022,5757,2013,5751,2004,5742,1994,5733,1982,5724,1970,5709,1953,5693,1936,5687,1928,5681,1920,5677,1915,5673,1910,5667,1901,5661,1892,5654,1885,5648,1878,5630,1862,5618,1851,5616,1848,5613,1841,5611,1838,5604,1832,5602,1831,5595,1822,5576,1801,5557,1780,5548,1769,5536,1759,5534,1753,5528,1745,5525,1739,Q,5521,1733,5509,1723,Z]
                ], 
                label: "Gökçebey", 
                shortLabel: "GO", 
                labelPosition: [507.1,223.8], 
                labelAlignment: [CEN,MID]
            },
            "TR.ZO.ZO": { 
                outlines: [
                    [M,3903,206,Q,3903,197,3901,191,3898,183,3895,174,3892,167,3892,148,3892,142,3891,133,3889,125,3889,122,L,3889,100,3880,104,Q,3845,125,3832,131,3814,141,3805,145,3801,147,3781,163,3764,175,3723,197,3683,219,3665,231,3648,241,3640,247,3623,259,3615,264,3580,283,3562,293,3513,320,3508,324,3494,333,3488,336,3473,342,3467,345,3466,346,3465,347,3459,351,3448,357,3429,368,3424,371,3416,376,3400,387,3385,397,3376,402,3304,439,3270,462,L,3171,519,Q,3139,539,3124,548,3099,563,3080,570,L,3030,603,Q,3021,610,3003,621,2981,633,2972,638,2924,663,2912,671,2894,683,2883,688,2862,698,2853,703,2842,709,2827,720,2810,732,2801,737,2769,752,2749,766,2732,776,2724,781,2709,790,2698,799,2689,807,2674,814,2660,821,2656,824,2653,825,2652,826,2603,859,2564,881,2539,894,2513,913,2482,934,2474,940,2411,974,2380,993,2350,1007,2334,1019,2327,1023,2310,1030,2298,1034,2292,1040,2291,1041,2290,1042,2260,1058,2251,1063,2242,1067,2225,1077,2207,1086,2190,1098,2174,1109,2165,1112,L,2058,1169,Q,2016,1192,1986,1210,1986,1231,1986,1244,1987,1256,1986,1280,1984,1303,1982,1316,1978,1329,1981,1349,1981,1351,1982,1352,1979,1364,1962,1391,1938,1426,1929,1441,1919,1457,1916,1464,1910,1477,1911,1489,1913,1505,1910,1545,1910,1555,1914,1573,1917,1587,1917,1595,1917,1597,1917,1599,L,1917,1600,Q,1917,1624,1916,1665,1916,1681,1919,1690,1922,1700,1923,1725,1923,1732,1926,1739,1930,1748,1931,1753,1932,1757,1936,1764,1941,1770,1943,1779,1943,1780,1944,1781,1945,1787,1952,1803,1961,1823,1961,1829,1961,1851,1967,1859,1982,1879,1993,1886,2007,1897,2022,1912,2031,1920,2046,1936,2051,1942,2057,1949,2063,1954,2073,1960,2076,1962,2085,1975,2087,1976,2091,1977,2097,1978,2099,1980,2104,1984,2111,1991,2115,1995,2124,2008,2130,2014,2137,2018,2145,2021,2149,2025,2150,2025,2150,2026,2169,2042,2181,2052,2192,2062,2209,2077,2226,2091,2252,2109,2264,2117,2282,2131,2295,2141,2307,2148,2315,2152,2331,2168,2339,2176,2355,2191,2373,2208,2397,2231,2417,2250,2432,2266,2446,2282,2463,2287,L,2490,2296,Q,2493,2297,2503,2299,2512,2300,2516,2303,2531,2313,2544,2316,L,2561,2316,Q,2564,2317,2567,2321,2569,2323,2573,2323,2577,2323,2585,2324,2591,2324,2594,2321,2598,2318,2607,2315,2612,2314,2623,2314,2640,2315,2642,2315,2646,2315,2655,2311,2665,2307,2668,2306,2672,2306,2682,2306,2692,2307,2697,2306,2700,2306,2710,2301,2719,2296,2724,2296,L,2754,2296,Q,2762,2296,2779,2297,2794,2298,2803,2295,2814,2292,2829,2283,2849,2271,2850,2270,2859,2265,2876,2258,2894,2251,2900,2249,2948,2223,2956,2218,2987,2201,3001,2190,3002,2189,3008,2185,3013,2181,3020,2176,L,3041,2162,Q,3053,2152,3082,2134,3084,2133,3086,2132,3090,2129,3102,2114,3113,2099,3119,2094,3123,2091,3131,2074,3138,2060,3154,2054,3169,2047,3198,2030,3228,2011,3247,2003,3272,1992,3295,1979,3318,1965,3350,1965,3383,1965,3398,1972,3413,1978,3465,1977,3467,1977,3468,1977,3499,1978,3557,2002,3590,2017,3649,2043,3681,2057,3747,2081,3806,2103,3838,2118,3858,2126,3926,2154,3936,2159,3967,2173,3996,2186,4016,2193,4035,2199,4106,2221,4161,2237,4189,2248,4188,2234,4188,2212,4187,2208,4185,2197,4182,2186,4182,2185,4181,2145,4181,2144,4181,2139,4185,2129,4189,2120,4192,2117,4196,2113,4197,2105,L,4197,2092,Q,4203,2079,4203,2078,4206,2070,4205,2065,L,4205,2047,Q,4205,2045,4212,2034,4215,2029,4214,2018,4214,2009,4217,2005,4222,1998,4223,1991,4223,1984,4223,1977,4223,1976,4223,1975,4222,1965,4225,1954,4230,1937,4231,1934,4232,1886,4232,1884,4232,1872,4230,1868,4228,1864,4223,1860,4222,1859,4221,1859,4219,1857,4216,1855,4212,1853,4210,1850,4206,1846,4204,1844,4201,1842,4195,1840,4189,1838,4188,1837,4187,1836,4163,1815,L,4129,1791,Q,4128,1788,4122,1784,4118,1780,4116,1778,4110,1772,4109,1772,4103,1771,4102,1770,4090,1762,4088,1759,4086,1750,4079,1744,4072,1735,4068,1731,4060,1722,4053,1718,4047,1716,4045,1710,4044,1703,4042,1702,4032,1688,4021,1675,4009,1662,4003,1656,3997,1650,3991,1643,3984,1635,3979,1628,3959,1607,3955,1599,3951,1590,3935,1561,3925,1549,3915,1533,3910,1526,3897,1501,3891,1490,3878,1473,3866,1457,3860,1445,L,3851,1427,Q,3850,1425,3849,1419,3848,1412,3848,1412,3839,1400,3840,1380,3840,1378,3838,1372,3836,1368,3834,1365,3833,1364,3833,1357,3832,1348,3832,1348,3832,1345,3826,1331,3823,1323,3823,1318,3823,1315,3824,1314,3824,1310,3820,1301,3817,1293,3815,1290,3813,1286,3813,1279,3813,1270,3813,1267,3813,1262,3809,1242,3805,1223,3805,1219,L,3805,1159,Q,3805,1154,3803,1148,3799,1137,3799,1136,3798,1132,3798,1112,3798,1093,3800,1087,3801,1084,3803,1081,3806,1078,3807,1076,3807,1075,3807,1068,3808,1067,3808,1066,3809,1059,3810,1055,3813,1045,3813,1040,3812,1034,3817,1027,L,3823,1016,Q,3823,1011,3824,1008,3824,1008,3827,1002,3830,998,3830,995,3830,991,3830,987,3830,978,3835,973,3839,970,3840,967,3841,965,3841,959,3840,948,3850,933,3859,920,3872,909,3876,906,3882,898,3887,890,3891,887,3899,879,3900,876,3904,871,3903,865,3909,858,3918,845,3927,833,3933,821,3936,815,3950,799,3960,785,3963,775,3968,755,3986,726,3993,715,3993,699,3993,681,3993,676,3993,674,3993,674,3992,627,3996,618,4002,609,4003,605,L,4003,538,4004,534,Q,4000,525,3989,508,3985,502,3984,495,3982,485,3981,483,3966,448,3961,428,3959,418,3950,399,3943,382,3941,373,3939,364,3930,346,3922,331,3921,318,3920,313,3916,302,3911,291,3911,283,3910,266,3905,259,3901,253,3901,244,3901,234,3902,225,Q,3903,216,3903,206,Z]
                ], 
                label: "Zonguldak", 
                shortLabel: "ZO", 
                labelPosition: [307.1,135.6], 
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