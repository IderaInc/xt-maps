/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.LuangPrabang.1.08-09-2016 04:23:01
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-luangprabang", function () {

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
        name: "LuangPrabang",
        revision: 1,
        standaloneInit: true,

        baseWidth: 532,
        baseHeight: 700,
        baseScaleFactor: 10,

        /**
         * @type {Object.}
         */
        entities: {
            "LA.LP.PK": {
                outlines: [
                    [M,3191,4590,Q,3166,4577,3130,4577,3080,4577,3001,4595,2925,4613,2875,4636,2860,4643,2838,4679,2818,4713,2800,4715,2765,4719,2741,4742,2727,4755,2707,4780,L,2707,4784,Q,2693,4812,2669,4850,2643,4890,2623,4915,2596,4948,2586,4979,2580,4997,2565,5007,2559,5011,2547,5016,2538,5022,2536,5034,2509,5050,2467,5078,2419,5110,2384,5132,2364,5145,2303,5185,2242,5208,2213,5220,2183,5231,2158,5234,2132,5237,2113,5253,2094,5269,2070,5289,2045,5310,2035,5324,2014,5353,1993,5413,1982,5445,1965,5501,1965,5502,1965,5503,1964,5504,1964,5505,1963,5513,1957,5526,1956,5530,1954,5540,1953,5550,1953,5556,1953,5592,1980,5614,2030,5653,2045,5672,2098,5739,2098,5797,2098,5845,2087,5895,L,2087,5913,Q,2105,5920,2117,5939,2135,5966,2157,5972,2159,5972,2161,5972,2194,5973,2244,5953,2258,5945,2272,5937,2301,5921,2306,5921,2317,5921,2334,5966,2334,5975,2330,5989,2326,6004,2326,6007,2326,6032,2376,6079,2402,6103,2431,6124,2478,6162,2488,6173,2515,6205,2511,6248,2508,6282,2517,6320,2521,6338,2546,6344,2553,6346,2584,6349,2611,6352,2634,6359,2665,6370,2668,6384,2670,6395,2674,6422,2680,6443,2693,6443,2719,6443,2835,6401,2854,6394,2856,6375,2858,6344,2862,6334,2875,6305,2878,6301,2881,6298,2902,6298,2922,6298,2951,6318,2980,6336,2994,6336,3010,6336,3027,6308,3034,6294,3041,6276,3044,6265,3056,6248,3068,6230,3083,6214,3096,6201,3118,6190,3131,6184,3158,6173,3165,6170,3191,6165,3215,6156,3215,6137,3215,6132,3213,6122,3193,6106,3177,6090,3156,6069,3154,6058,3148,6030,3146,6018,3144,5999,3146,5967,3148,5934,3134,5899,3119,5865,3096,5843,3072,5820,3030,5768,2984,5712,2984,5697,2984,5692,2990,5688,3004,5682,3005,5681,3026,5667,3026,5620,3026,5570,3010,5526,2994,5482,2994,5473,2994,5450,3010,5415,3022,5388,3039,5364,3050,5348,3087,5339,3135,5329,3146,5323,3165,5313,3177,5277,3192,5231,3204,5215,3218,5197,3247,5185,3264,5178,3302,5164,3303,5164,3306,5163,3311,5161,3321,5158,3336,5153,3344,5153,3353,5153,3371,5164,3389,5175,3395,5175,3407,5175,3425,5114,3442,5052,3443,5048,3449,5032,3458,5026,3466,5019,3489,5012,3515,5004,3527,4999,3543,4993,3564,4982,3594,4967,3609,4928,3614,4914,3628,4850,3654,4792,3658,4787,3659,4785,3660,4784,3629,4766,3542,4730,3449,4692,3396,4664,3354,4645,3331,4633,3318,4626,3298,4627,3275,4628,3263,4624,Q,3236,4615,3191,4590,Z]
                ],
                label: "Phoukhoune District",
                shortLabel: "PK",
                labelPosition: [255.4,551],
                labelAlignment: [CEN,MID]
            },
            "LA.LP.VI": {
                outlines: [
                    [M,5058,1088,Q,5043,1089,5031,1090,5011,1090,5000,1080,4997,1078,4987,1056,4979,1041,4963,1041,4946,1041,4923,1067,4900,1091,4883,1091,4867,1091,4849,1070,4830,1049,4820,1049,4806,1049,4798,1053,4791,1057,4782,1057,4760,1057,4750,1044,4743,1034,4743,1020,4743,1003,4766,985,4790,968,4790,941,4790,912,4716,857,4643,802,4606,802,4566,802,4494,818,4422,833,4421,833,4395,833,4394,794,4393,739,4387,728,4382,718,4367,710,4350,704,4341,700,4310,688,4314,655,4319,603,4294,554,4288,543,4282,533,4260,549,4235,572,4209,597,4198,613,4175,645,4145,672,4113,698,4098,712,4095,715,4074,729,4058,741,4054,749,4050,756,4043,777,4035,796,4028,801,3989,833,3981,851,3978,859,3978,901,3978,917,3980,942,3983,965,3987,979,3987,980,3987,981,3992,1010,3993,1014,3994,1026,3994,1042,3994,1065,3992,1108,3990,1150,3990,1166,3990,1189,3987,1228,3986,1248,3981,1261,3977,1270,3968,1286,3952,1326,3942,1344,3924,1374,3893,1381,3862,1388,3846,1414,3833,1444,3825,1463,3824,1465,3823,1467,3813,1478,3806,1483,3797,1490,3781,1497,3769,1503,3759,1515,3747,1528,3739,1535,3734,1541,3724,1555,3715,1568,3710,1579,3703,1591,3700,1608,3696,1624,3694,1633,3691,1643,3678,1649,3665,1654,3655,1658,3649,1661,3627,1665,3615,1667,3610,1677,3608,1684,3582,1738,3574,1755,3574,1780,3574,1798,3575,1802,3576,1807,3584,1834,3585,1836,3586,1838,3587,1855,3570,1905,3567,1916,3559,1943,3552,1966,3546,1977,3540,1990,3528,2013,3518,2033,3518,2047,3516,2062,3512,2084,3508,2102,3497,2118,3483,2138,3478,2150,3468,2172,3471,2193,3473,2207,3463,2221,3456,2232,3436,2249,3428,2256,3380,2293,3342,2321,3328,2336,L,3328,2410,Q,3327,2424,3316,2501,3304,2575,3304,2586,3304,2606,3331,2612,3346,2616,3370,2619,3387,2626,3390,2648,3392,2661,3391,2685,3391,2710,3394,2722,3399,2741,3414,2749,3426,2756,3449,2773,3478,2795,3483,2799,3510,2821,3546,2837,3608,2868,3610,2869,3629,2878,3662,2900,3710,2932,3709,2947,3708,2962,3675,2967,3642,2972,3616,2971,3577,2971,3561,2972,3534,2974,3514,2990,3483,3018,3477,3084,3474,3118,3459,3132,3444,3144,3444,3179,3444,3202,3465,3235,3477,3254,3482,3258,3489,3263,3505,3263,3511,3263,3516,3263,3520,3263,3530,3259,3534,3257,3542,3251,3547,3247,3553,3247,3586,3246,3597,3231,3628,3189,3630,3186,3647,3169,3668,3169,3704,3169,3718,3173,3743,3181,3750,3206,3763,3246,3782,3248,L,3806,3251,Q,3819,3255,3822,3267,3822,3268,3822,3269,3823,3278,3823,3294,3825,3311,3841,3321,3855,3331,3871,3341,3879,3348,3879,3363,3879,3385,3805,3467,3794,3479,3777,3488,3764,3495,3742,3503,3729,3508,3728,3533,3728,3560,3718,3565,3711,3568,3690,3567,3669,3566,3662,3570,3644,3580,3629,3587,3608,3595,3590,3603,3562,3615,3523,3626,3480,3637,3459,3642,L,3459,3649,Q,3471,3669,3502,3672,3537,3676,3549,3687,3562,3700,3596,3717,3632,3735,3648,3735,3658,3735,3692,3734,3725,3732,3751,3732,3865,3732,3944,3744,4022,3756,4039,3756,4078,3756,4128,3718,4170,3686,4194,3650,4213,3621,4245,3582,4259,3566,4275,3537,4290,3517,4316,3517,4340,3517,4391,3534,4410,3541,4469,3563,4473,3553,4481,3545,4493,3533,4522,3521,4555,3507,4565,3500,4584,3486,4584,3465,4584,3433,4561,3430,4531,3431,4516,3427,4493,3419,4485,3409,4475,3397,4477,3376,4479,3359,4469,3335,4462,3320,4443,3291,4431,3273,4429,3256,4427,3245,4427,3213,4427,3180,4430,3170,4434,3159,4447,3154,4455,3150,4484,3141,4515,3128,4550,3106,4561,3098,4583,3085,4599,3071,4601,3052,4599,3016,4600,3004,4603,2982,4628,2982,4636,2982,4650,2986,4663,2989,4668,2986,4672,2983,4675,2982,4678,2980,4683,2971,4688,2962,4684,2946,4680,2930,4680,2913,4680,2891,4694,2876,4717,2850,4727,2835,4728,2833,4729,2831,4737,2824,4756,2807,4777,2787,4785,2781,4799,2771,4807,2757,4815,2743,4815,2731,4804,2641,4795,2621,4794,2620,4760,2579,4729,2541,4729,2531,4729,2504,4766,2496,4802,2487,4802,2463,4802,2435,4790,2411,4777,2386,4760,2386,4744,2388,4730,2390,4710,2392,4704,2392,4700,2392,4700,2391,4658,2391,4641,2377,4623,2354,4609,2337,4594,2319,4584,2296,4574,2272,4574,2255,4574,2235,4595,2212,4600,2207,4637,2173,4646,2165,4686,2139,4709,2124,4716,2108,4716,2106,4716,2104,4716,2096,4716,2081,4716,2049,4698,1978,4681,1908,4681,1874,4681,1842,4715,1804,4748,1767,4748,1750,4748,1738,4744,1713,4741,1694,4737,1670,4735,1640,4732,1593,4732,1584,4732,1542,4732,1494,4735,1491,4740,1485,4782,1467,4805,1454,4838,1425,4863,1404,4892,1393,4985,1362,5013,1344,5019,1340,5047,1296,5073,1257,5083,1257,5089,1257,5106,1270,5123,1284,5132,1284,5150,1284,5187,1288,5219,1288,5248,1260,5276,1231,5276,1200,5276,1176,5255,1155,5235,1133,5214,1133,5163,1138,5155,1138,5127,1138,5103,1117,Q,5075,1092,5058,1088,Z]
                ],
                label: "Viengkham District",
                shortLabel: "VI",
                labelPosition: [411.8,214.4],
                labelAlignment: [CEN,MID]
            },
            "LA.LP.CH": {
                outlines: [
                    [M,1271,3568,Q,1185,3581,1162,3596,1106,3633,1069,3662,1052,3671,991,3671,957,3671,929,3662,901,3652,868,3652,833,3652,811,3666,796,3675,777,3703,760,3717,719,3748,671,3790,661,3821,645,3869,598,3891,569,3903,553,3909,522,3922,501,3936,473,3955,442,3975,421,3987,396,3999,378,4007,346,4005,313,4004,301,4007,260,4022,218,4036,134,4062,109,4062,95,4062,84,4060,74,4058,72,4056,L,34,4056,34,4100,Q,36,4111,34,4153,34,4191,47,4203,65,4219,137,4237,159,4242,163,4272,164,4288,162,4321,163,4347,186,4374,209,4400,209,4413,209,4434,170,4452,131,4470,131,4496,131,4503,134,4521,136,4534,138,4540,139,4544,139,4546,138,4560,138,4585,135,4611,116,4624,97,4636,69,4654,62,4665,66,4687,69,4709,89,4761,108,4811,108,4830,108,4848,98,4871,87,4894,87,4927,87,4964,92,4992,101,5039,121,5039,153,5039,197,5001,242,4963,255,4963,263,4963,269,4965,270,4965,271,4966,309,4953,352,4929,412,4896,430,4888,454,4877,473,4864,498,4849,507,4836,518,4821,530,4795,540,4771,548,4763,553,4756,574,4728,591,4707,605,4693,625,4673,685,4653,704,4647,723,4618,741,4590,756,4585,774,4580,790,4558,803,4540,805,4526,805,4524,806,4523,811,4501,842,4492,879,4481,887,4462,900,4428,906,4412,918,4384,929,4367,L,960,4321,Q,968,4310,982,4305,990,4302,1008,4299,1076,4282,1109,4282,1158,4283,1223,4256,1287,4230,1315,4198,1359,4147,1392,4120,1438,4083,1489,4070,1517,4066,1537,4052,1551,4041,1574,4013,1574,4013,1617,3979,1642,3960,1637,3930,1626,3923,1622,3911,1611,3880,1606,3828,1599,3771,1592,3743,1582,3709,1578,3696,1569,3672,1558,3660,1550,3652,1527,3636,1506,3622,1497,3611,1478,3590,1435,3566,1383,3541,1358,3528,Q,1339,3557,1271,3568,Z]
                ],
                label: "Chomphet District",
                shortLabel: "CH",
                labelPosition: [83.6,406.7],
                labelAlignment: [CEN,MID]
            },
            "LA.LP.PH": {
                outlines: [
                    [M,3361,3661,Q,3355,3663,3341,3668,3324,3674,3317,3676,3271,3688,3269,3683,L,3269,3682,Q,3244,3682,3209,3666,3172,3649,3168,3649,3159,3649,3112,3657,3068,3665,3057,3666,3004,3678,2999,3680,2994,3680,2993,3682,2991,3684,2982,3685,2974,3686,2969,3688,2965,3690,2953,3697,2940,3704,2935,3711,2931,3718,2904,3718,2878,3717,2852,3717,2826,3717,2760,3737,2701,3754,2672,3754,2650,3753,2638,3753,2627,3753,2600,3745,2599,3745,2581,3736,2565,3729,2558,3729,2526,3730,2513,3729,2488,3728,2477,3727,2457,3726,2440,3721,2415,3713,2403,3710,2384,3706,2363,3706,2342,3706,2327,3746,2315,3778,2316,3798,2317,3812,2308,3829,2299,3848,2285,3856,2283,3856,2268,3875,2252,3892,2242,3893,2239,3917,2240,3937,2242,3958,2242,3961,2240,3973,2244,3982,2248,3991,2259,4002,2286,4031,2296,4049,2306,4070,2306,4095,2306,4117,2292,4134,2277,4150,2277,4156,2277,4166,2293,4173,2302,4177,2322,4183,2334,4188,2351,4190,2364,4193,2364,4210,2364,4226,2348,4236,2333,4245,2314,4245,L,2246,4240,Q,2239,4240,2230,4237,2222,4235,2218,4235,L,2190,4235,Q,2167,4235,2143,4238,2117,4241,2086,4241,2075,4241,2061,4245,2046,4250,2039,4250,2035,4250,2024,4253,2015,4256,2013,4257,2004,4260,1999,4262,1991,4265,1989,4268,1984,4272,1976,4277,1969,4282,1966,4293,1961,4314,1961,4335,1961,4346,1964,4373,1968,4402,1969,4409,1969,4428,1970,4448,1971,4452,1974,4454,1980,4459,1992,4459,2008,4459,2020,4453,2033,4447,2058,4446,2071,4446,2095,4441,2117,4437,2126,4437,2142,4437,2148,4438,2162,4442,2162,4455,2162,4468,2154,4486,2149,4496,2139,4515,2132,4529,2130,4545,2129,4554,2127,4573,2104,4589,2061,4595,2038,4599,2038,4632,L,2039,4669,Q,2039,4672,2039,4677,2039,4683,2035,4685,2028,4689,2019,4692,1996,4704,1979,4712,1961,4721,1955,4741,1952,4750,1951,4772,1951,4773,1951,4775,1948,4791,1947,4803,1947,4808,1947,4829,1947,4831,1949,4894,1949,4917,1958,4923,1963,4926,1985,4926,2017,4926,2053,4924,2111,4920,2120,4913,2124,4909,2147,4894,2166,4880,2176,4869,2198,4842,2204,4838,2210,4833,2233,4833,2241,4833,2289,4842,2336,4850,2351,4850,2371,4850,2405,4832,2439,4815,2454,4815,2473,4815,2492,4826,2511,4838,2535,4838,2551,4838,2576,4822,2602,4805,2632,4802,2646,4801,2671,4796,2672,4796,2687,4788,2702,4780,2705,4780,L,2707,4780,Q,2727,4755,2741,4742,2765,4719,2800,4715,2818,4713,2838,4679,2860,4643,2875,4636,2925,4613,3001,4595,3080,4577,3130,4577,3166,4577,3191,4590,3236,4615,3263,4624,3275,4628,3298,4627,3318,4626,3331,4633,3354,4645,3396,4664,3449,4692,3542,4730,3629,4766,3660,4784,3681,4758,3719,4758,3726,4758,3741,4762,3755,4766,3765,4766,L,3831,4761,Q,3853,4763,3855,4746,3855,4727,3855,4717,3856,4715,3856,4713,3859,4689,3887,4655,3914,4620,3914,4603,3914,4591,3893,4553,3871,4517,3871,4489,3871,4429,3934,4417,3937,4416,3987,4410,4018,4406,4032,4398,4057,4382,4085,4361,4115,4338,4131,4328,4141,4322,4178,4312,4213,4303,4223,4303,4228,4303,4246,4312,4264,4320,4267,4320,4271,4320,4312,4302,4354,4284,4357,4283,4382,4276,4399,4255,4416,4235,4415,4214,4413,4142,4432,4123,4443,4113,4446,4108,4452,4095,4452,4065,4452,4044,4450,4024,L,4445,3983,Q,4445,3973,4456,3959,4462,3951,4473,3939,4488,3915,4488,3914,4490,3909,4490,3893,4490,3872,4469,3852,4447,3832,4447,3816,4457,3758,4457,3746,4457,3728,4445,3714,4434,3700,4434,3682,4434,3667,4444,3652,4449,3644,4459,3632,4465,3623,4466,3608,4466,3597,4466,3590,4466,3586,4466,3582,4466,3572,4469,3563,4410,3541,4391,3534,4340,3517,4316,3517,4290,3517,4275,3537,4259,3566,4245,3582,4213,3621,4194,3650,4170,3686,4128,3718,4078,3756,4039,3756,4022,3756,3944,3744,3865,3732,3751,3732,3725,3732,3692,3734,3658,3735,3648,3735,3632,3735,3596,3717,3562,3700,3549,3687,3537,3676,3502,3672,3471,3669,3459,3649,L,3459,3645,Q,3443,3646,3413,3651,Q,3380,3656,3361,3661,Z]
                ],
                label: "Phonxay District",
                shortLabel: "PH",
                labelPosition: [321.9,422.1],
                labelAlignment: [CEN,MID]
            },
            "LA.LP.PX": {
                outlines: [
                    [M,3320,2335,Q,3289,2362,3207,2392,3112,2426,3082,2444,3082,2444,3081,2445,L,2995,2471,Q,2977,2476,2952,2489,2927,2501,2908,2506,2847,2524,2810,2534,2798,2538,2760,2543,2730,2548,2720,2554,2710,2559,2703,2564,2695,2568,2689,2577,2682,2586,2679,2603,2676,2619,2673,2625,2666,2644,2659,2667,2650,2699,2647,2707,2635,2743,2609,2776,2581,2811,2552,2821,L,2545,2821,Q,2539,2823,2533,2825,2535,2839,2537,2847,2537,2849,2537,2869,2537,2896,2533,2913,2529,2928,2517,2956,2507,2976,2496,3003,2487,3023,2480,3038,2480,3049,2477,3066,2473,3083,2478,3096,2482,3108,2482,3127,2482,3160,2471,3178,2458,3198,2422,3218,2412,3224,2392,3226,2370,3229,2361,3231,2326,3238,2329,3271,2332,3297,2332,3308,2331,3326,2326,3337,2320,3350,2306,3359,2294,3366,2272,3372,2221,3385,2211,3388,2183,3398,2159,3417,2154,3425,2146,3434,2140,3443,2135,3459,2131,3467,2134,3482,2136,3494,2132,3499,2130,3501,2124,3506,2112,3521,2085,3541,2053,3565,2043,3574,2022,3593,1996,3600,1990,3601,1946,3607,1930,3606,1922,3607,1908,3608,1902,3621,1900,3625,1886,3640,1873,3655,1873,3664,1873,3673,1891,3702,1901,3722,1928,3722,1957,3720,1969,3721,1989,3721,2009,3724,2025,3726,2056,3734,2089,3742,2095,3745,2106,3752,2115,3769,2127,3788,2125,3807,2141,3806,2149,3807,2150,3806,2152,3806,2171,3801,2176,3801,2190,3801,2189,3822,2188,3850,2191,3855,2196,3864,2216,3879,2234,3893,2240,3893,2241,3893,2242,3893,2252,3892,2268,3875,2283,3856,2285,3856,2299,3848,2308,3829,2317,3812,2316,3798,2315,3778,2327,3746,2342,3706,2363,3706,2384,3706,2403,3710,2415,3713,2440,3721,2457,3726,2477,3727,2488,3728,2513,3729,2526,3730,2558,3729,2565,3729,2581,3736,2599,3745,2600,3745,2627,3753,2638,3753,2650,3753,2672,3754,2701,3754,2760,3737,2826,3717,2852,3717,2878,3717,2904,3718,2931,3718,2935,3711,2940,3704,2953,3697,2965,3690,2969,3688,2974,3686,2982,3685,2991,3684,2993,3682,2994,3680,2999,3680,3004,3678,3057,3666,3068,3665,3112,3657,3159,3649,3168,3649,3172,3649,3209,3666,3244,3682,3269,3682,3269,3682,3270,3682,3269,3682,3269,3683,3271,3688,3317,3676,3324,3674,3341,3668,3355,3663,3361,3661,3380,3656,3413,3651,3443,3646,3459,3645,L,3459,3642,Q,3480,3637,3523,3626,3562,3615,3590,3603,3608,3595,3629,3587,3644,3580,3662,3570,3669,3566,3690,3567,3711,3568,3718,3565,3728,3560,3728,3533,3729,3508,3742,3503,3764,3495,3777,3488,3794,3479,3805,3467,3879,3385,3879,3363,3879,3348,3871,3341,3855,3331,3841,3321,3825,3311,3823,3294,3823,3278,3822,3269,3822,3268,3822,3267,3819,3255,3806,3251,L,3782,3248,Q,3763,3246,3750,3206,3743,3181,3718,3173,3704,3169,3668,3169,3647,3169,3630,3186,3628,3189,3597,3231,3586,3246,3553,3247,3547,3247,3542,3251,3534,3257,3530,3259,3520,3263,3516,3263,3511,3263,3505,3263,3489,3263,3482,3258,3477,3254,3465,3235,3444,3202,3444,3179,3444,3144,3459,3132,3474,3118,3477,3084,3483,3018,3514,2990,3534,2974,3561,2972,3577,2971,3616,2971,3642,2972,3675,2967,3708,2962,3709,2947,3710,2932,3662,2900,3629,2878,3610,2869,3608,2868,3546,2837,3510,2821,3483,2799,3478,2795,3449,2773,3426,2756,3414,2749,3399,2741,3394,2722,3391,2710,3391,2685,3392,2661,3390,2648,3387,2626,3370,2619,3346,2616,3331,2612,3304,2606,3304,2586,3304,2575,3316,2501,3327,2424,3328,2410,L,3328,2335,Z]
                ],
                label: "Pak Seng District",
                shortLabel: "PX",
                labelPosition: [287.6,322.9],
                labelAlignment: [CEN,MID]
            },
            "LA.LP.NG": {
                outlines: [
                    [M,3367,255,Q,3367,266,3387,295,3407,323,3407,360,3407,406,3357,427,3326,439,3309,446,3278,458,3257,475,3226,500,3155,508,3086,515,3056,536,3055,537,3053,541,3033,549,3019,556,2988,571,2978,587,2951,630,2947,636,2935,650,2915,662,2916,689,2916,722,2914,731,2906,755,2900,775,2898,787,2897,789,2897,791,2896,797,2896,807,2896,841,2900,855,2902,865,2910,878,2915,885,2923,896,2929,907,2953,942,2974,975,2974,992,2974,1013,2962,1039,2960,1043,2938,1080,2920,1112,2910,1126,2896,1148,2884,1160,2883,1160,2882,1161,2872,1180,2850,1202,2824,1226,2814,1242,2803,1260,2778,1281,2759,1295,2753,1300,2743,1308,2743,1323,2743,1336,2748,1346,2752,1355,2765,1372,2768,1376,2781,1399,2793,1422,2794,1426,2795,1428,2800,1441,2806,1454,2808,1458,2809,1459,2815,1469,2819,1475,2820,1481,2822,1495,2822,1513,2822,1523,2821,1541,2821,1542,2821,1543,2816,1563,2816,1574,2815,1579,2815,1597,2815,1637,2827,1646,2828,1647,2849,1659,2868,1672,2868,1677,2862,1704,2856,1715,2856,1722,2854,1754,2845,1766,2818,1775,2786,1784,2775,1788,2748,1799,2740,1804,2732,1809,2725,1819,2725,1819,2715,1836,2704,1854,2698,1876,2702,1885,2698,1891,2694,1896,2684,1907,L,2617,1966,Q,2564,1985,2543,1997,2523,2008,2503,2015,2496,2017,2493,2031,2491,2038,2489,2050,2481,2071,2453,2128,2442,2151,2401,2174,2358,2197,2339,2230,2336,2237,2293,2295,2266,2330,2262,2357,2262,2359,2262,2360,L,2261,2360,Q,2258,2373,2246,2392,2239,2404,2226,2424,2224,2433,2223,2461,2222,2492,2220,2500,2220,2502,2203,2562,2186,2626,2186,2647,2186,2664,2189,2669,2191,2674,2204,2699,2208,2709,2208,2724,2209,2744,2210,2751,L,2210,2754,Q,2211,2754,2212,2754,2227,2754,2243,2764,2253,2770,2279,2785,2288,2791,2307,2797,2332,2804,2341,2808,2373,2821,2412,2826,2440,2829,2487,2829,2513,2829,2533,2825,2539,2823,2545,2821,L,2552,2821,Q,2581,2811,2609,2776,2635,2743,2647,2707,2650,2699,2659,2667,2666,2644,2673,2625,2676,2619,2679,2603,2682,2586,2689,2577,2695,2568,2703,2564,2710,2559,2720,2554,2730,2548,2760,2543,2798,2538,2810,2534,2847,2524,2908,2506,2927,2501,2952,2489,2977,2476,2995,2471,L,3081,2445,Q,3082,2444,3082,2444,3112,2426,3207,2392,3289,2362,3320,2335,L,3328,2335,3328,2336,Q,3342,2321,3380,2293,3428,2256,3436,2249,3456,2232,3463,2221,3473,2207,3471,2193,3468,2172,3478,2150,3483,2138,3497,2118,3508,2102,3512,2084,3516,2062,3518,2047,3518,2033,3528,2013,3540,1990,3546,1977,3552,1966,3559,1943,3567,1916,3570,1905,3587,1855,3586,1838,3585,1836,3584,1834,3576,1807,3575,1802,3574,1798,3574,1780,3574,1755,3582,1738,3608,1684,3610,1677,3615,1667,3627,1665,3649,1661,3655,1658,3665,1654,3678,1649,3691,1643,3694,1633,3696,1624,3700,1608,3703,1591,3710,1579,3715,1568,3724,1555,3734,1541,3739,1535,3747,1528,3759,1515,3769,1503,3781,1497,3797,1490,3806,1483,3813,1478,3823,1467,3824,1465,3825,1463,3833,1444,3846,1414,3862,1388,3893,1381,3924,1374,3942,1344,3952,1326,3968,1286,3977,1270,3981,1261,3986,1248,3987,1228,3990,1189,3990,1166,3990,1150,3992,1108,3994,1065,3994,1042,3994,1026,3993,1014,3992,1010,3987,981,3987,980,3987,979,3983,965,3980,942,3978,917,3978,901,3978,859,3981,851,3989,833,4028,801,4035,796,4043,777,4050,756,4054,749,4058,741,4074,729,4095,715,4098,712,4113,698,4145,672,4175,645,4198,613,4209,597,4235,572,4260,549,4282,533,4261,497,4252,473,4252,472,4251,470,4244,443,4228,418,4226,414,4194,367,4184,354,4176,333,4164,305,4163,303,4147,273,4114,273,4091,273,4068,278,4046,283,4026,283,3996,283,3967,269,3933,252,3933,229,3933,220,3938,199,3943,179,3943,167,3946,137,3937,124,3933,117,3922,114,3908,109,3903,106,3886,91,3875,81,3853,62,3838,62,3817,62,3765,64,3715,67,3693,66,3659,66,3628,82,3598,98,3574,98,3546,98,3506,67,3465,36,3459,36,3445,36,3426,48,3403,62,3403,82,3403,92,3418,108,3432,125,3432,145,3432,153,3400,198,Q,3367,243,3367,255,Z]
                ],
                label: "Ngoy District",
                shortLabel: "NG",
                labelPosition: [323.4,126],
                labelAlignment: [CEN,MID]
            },
            "LA.LP.NM": {
                outlines: [
                    [M,2268,738,Q,2250,738,2228,762,2207,785,2196,785,2174,785,2149,767,2123,748,2080,748,2076,748,2065,754,2053,760,2040,760,2028,760,1971,694,1915,627,1909,627,1902,627,1889,644,1874,664,1870,669,1850,692,1848,701,1847,703,1847,725,1847,767,1877,798,1895,817,1944,857,1974,888,1998,903,2023,918,2031,931,2040,943,2040,961,2040,981,2033,993,2024,1006,2016,1019,2013,1023,2011,1027,2003,1041,1987,1073,1967,1115,1967,1133,1967,1141,1967,1166,1966,1191,1960,1203,1960,1204,1939,1236,1923,1260,1923,1274,1923,1292,1936,1301,1944,1306,1965,1311,2007,1321,2007,1348,2007,1378,1999,1397,1995,1409,1978,1445,1971,1462,1966,1495,1962,1529,1954,1547,1949,1560,1917,1577,1880,1596,1876,1600,1866,1611,1846,1647,1828,1681,1818,1689,1804,1698,1764,1704,1717,1709,1698,1711,1668,1711,1648,1712,1611,1713,1603,1722,1598,1728,1584,1768,1566,1818,1565,1818,1562,1828,1539,1872,1516,1915,1515,1925,1515,1934,1515,1938,1509,1949,1497,1968,1479,2001,1479,2026,1479,2046,1487,2070,1494,2095,1494,2117,1494,2152,1454,2184,1412,2217,1408,2255,1406,2281,1379,2341,1353,2398,1353,2434,1353,2444,1352,2458,1352,2471,1357,2484,1362,2495,1370,2501,1376,2506,1376,2514,1376,2526,1345,2551,1313,2576,1313,2594,1313,2614,1335,2619,1348,2622,1383,2622,1452,2627,1452,2701,1452,2726,1438,2740,1429,2749,1404,2772,1390,2789,1381,2807,1374,2818,1367,2838,1365,2842,1364,2846,1361,2859,1352,2887,1339,2935,1339,2948,1339,2968,1373,2988,1390,2998,1410,3006,1416,3010,1424,3026,1427,3021,1442,3012,1460,3004,1465,3000,1502,2972,1507,2970,1519,2962,1551,2950,1586,2936,1602,2927,1614,2921,1641,2893,1662,2872,1683,2868,1698,2866,1726,2844,1751,2825,1762,2821,1763,2820,1764,2819,1807,2802,1865,2795,1899,2792,1972,2785,2003,2781,2037,2776,2061,2771,2092,2760,2108,2753,2152,2753,2175,2753,2210,2754,L,2210,2751,Q,2209,2744,2208,2724,2208,2709,2204,2699,2191,2674,2189,2669,2186,2664,2186,2647,2186,2626,2203,2562,2220,2502,2220,2500,2222,2492,2223,2461,2224,2433,2226,2424,2239,2404,2246,2392,2258,2373,2261,2360,2262,2358,2262,2357,2266,2330,2293,2295,2336,2237,2339,2230,2358,2197,2401,2174,2442,2151,2453,2128,2481,2071,2489,2050,2491,2038,2493,2031,2496,2017,2503,2015,2523,2008,2543,1997,2564,1985,2617,1966,L,2684,1907,Q,2694,1896,2698,1891,2702,1885,2698,1876,2704,1854,2715,1836,2725,1819,2725,1819,2732,1809,2740,1804,2748,1799,2775,1788,2786,1784,2818,1775,2845,1766,2854,1754,2856,1722,2856,1715,2862,1704,2868,1677,2868,1672,2849,1659,2828,1647,2827,1646,2815,1637,2815,1597,2815,1579,2816,1574,2816,1563,2821,1543,2821,1542,2821,1541,2822,1523,2822,1513,2822,1495,2820,1481,2819,1475,2815,1469,2809,1459,2808,1458,2806,1454,2800,1441,2795,1428,2794,1426,2793,1422,2781,1399,2768,1376,2765,1372,2752,1355,2748,1346,2743,1336,2743,1323,2743,1308,2753,1300,2759,1295,2778,1281,2803,1260,2814,1242,2824,1226,2850,1202,2872,1180,2882,1161,2883,1160,2884,1160,2896,1148,2910,1126,2920,1112,2938,1080,2960,1043,2962,1039,2974,1013,2974,992,2974,975,2953,942,2929,907,2923,896,2915,885,2910,878,2902,865,2900,855,2896,841,2896,807,2896,797,2897,791,2897,789,2898,787,2900,775,2906,755,2914,731,2916,722,2916,689,2915,662,2912,663,2909,664,2831,704,2808,715,2777,729,2744,732,2704,737,2693,740,2657,751,2620,786,2594,811,2553,866,2529,896,2518,911,2499,937,2489,960,2475,991,2462,1005,2444,1024,2418,1024,2395,1024,2334,987,2272,949,2272,929,2272,909,2305,882,2338,856,2338,844,2338,832,2311,787,Q,2282,738,2268,738,Z]
                ],
                label: "Nam Bak District",
                shortLabel: "NM",
                labelPosition: [214.4,182.7],
                labelAlignment: [CEN,MID]
            },
            "LA.LP.PO": {
                outlines: [
                    [M,1972,2785,Q,1899,2792,1865,2795,1807,2802,1764,2819,1763,2820,1762,2821,1751,2825,1726,2844,1698,2866,1683,2868,1662,2872,1641,2893,1614,2921,1602,2927,1586,2936,1551,2950,1519,2962,1507,2970,1502,2972,1465,3000,1460,3004,1442,3012,1427,3021,1424,3026,1428,3034,1432,3044,1442,3068,1448,3090,1452,3104,1469,3116,1479,3123,1501,3138,1534,3164,1540,3179,1542,3186,1542,3220,1542,3252,1541,3260,1534,3280,1507,3297,1492,3307,1469,3318,1466,3320,1454,3341,1441,3363,1439,3365,1425,3382,1399,3402,1379,3418,1368,3436,1360,3449,1363,3480,1367,3511,1360,3524,1359,3526,1358,3528,1383,3541,1435,3566,1478,3590,1497,3611,1506,3622,1527,3636,1550,3652,1558,3660,1569,3672,1578,3696,1582,3709,1592,3743,1599,3771,1606,3828,1611,3880,1622,3911,1626,3923,1637,3930,1645,3935,1656,3937,1694,3943,1704,3949,1728,3965,1740,3971,1762,3983,1778,3983,1809,3983,1865,3929,1918,3871,1928,3864,1937,3858,1964,3832,1980,3815,2003,3812,L,2055,3806,Q,2063,3806,2091,3806,2091,3807,2115,3807,2120,3807,2125,3807,2127,3788,2115,3769,2106,3752,2095,3745,2089,3742,2056,3734,2025,3726,2009,3724,1989,3721,1969,3721,1957,3720,1928,3722,1901,3722,1891,3702,1873,3673,1873,3664,1873,3655,1886,3640,1900,3625,1902,3621,1908,3608,1922,3607,1930,3606,1946,3607,1990,3601,1996,3600,2022,3593,2043,3574,2053,3565,2085,3541,2112,3521,2124,3506,2130,3501,2132,3499,2136,3494,2134,3482,2131,3467,2135,3459,2140,3443,2146,3434,2154,3425,2159,3417,2183,3398,2211,3388,2221,3385,2272,3372,2294,3366,2306,3359,2320,3350,2326,3337,2331,3326,2332,3308,2332,3297,2329,3271,2326,3238,2361,3231,2370,3229,2392,3226,2412,3224,2422,3218,2458,3198,2471,3178,2482,3160,2482,3127,2482,3108,2478,3096,2473,3083,2477,3066,2480,3049,2480,3038,2487,3023,2496,3003,2507,2976,2517,2956,2529,2928,2533,2913,2537,2896,2537,2869,2537,2849,2537,2847,2535,2839,2533,2825,2513,2829,2487,2829,2440,2829,2412,2826,2373,2821,2341,2808,2332,2804,2307,2797,2288,2791,2279,2785,2253,2770,2243,2764,2227,2754,2212,2754,2175,2753,2152,2753,2108,2753,2092,2760,2061,2771,2037,2776,Q,2003,2781,1972,2785,Z]
                ],
                label: "Pak Ou District",
                shortLabel: "PO",
                labelPosition: [194.7,320.7],
                labelAlignment: [CEN,MID]
            },
            "LA.LP.NN": {
                outlines: [
                    [M,842,5001,Q,804,4993,767,4979,713,4958,703,4958,690,4958,659,4967,615,4980,610,4981,589,4986,559,4987,522,4987,516,4988,499,4990,461,4992,426,4994,410,4997,392,5000,362,5008,355,5010,328,5010,L,308,5010,Q,297,5010,292,5008,L,275,5008,Q,273,5032,265,5084,253,5157,253,5183,253,5244,282,5307,310,5369,310,5388,310,5430,292,5458,269,5492,261,5506,260,5509,260,5512,254,5551,284,5600,302,5630,345,5692,358,5716,392,5737,410,5749,443,5765,449,5768,503,5781,551,5792,551,5798,551,5818,509,5851,457,5891,443,5912,421,5947,409,5974,396,6005,389,6040,377,6103,332,6185,310,6225,303,6246,293,6274,297,6300,297,6302,297,6304,299,6314,306,6330,317,6351,319,6363,322,6375,322,6398,322,6410,321,6423,321,6453,321,6457,320,6472,313,6499,300,6543,291,6605,281,6673,284,6711,288,6766,280,6825,265,6924,265,6930,L,265,6951,Q,271,6951,289,6954,308,6957,319,6957,395,6957,429,6934,454,6918,460,6884,464,6847,470,6833,480,6810,515,6810,520,6810,586,6814,627,6814,643,6806,671,6790,678,6739,680,6727,686,6712,693,6693,701,6686,710,6678,733,6671,754,6664,760,6655,771,6638,777,6597,781,6551,783,6535,789,6496,805,6467,823,6430,850,6425,869,6402,869,6393,869,6374,849,6348,830,6321,830,6307,830,6285,855,6258,881,6229,905,6229,926,6229,942,6245,958,6261,980,6261,999,6261,1020,6252,1049,6240,1052,6217,1053,6188,1054,6174,1056,6149,1066,6134,1074,6122,1100,6102,1108,6096,1140,6075,1169,6063,1182,6056,1208,6045,1208,6024,1208,6003,1177,5979,1146,5954,1146,5928,1146,5894,1176,5848,1209,5796,1247,5796,1275,5796,1299,5815,1323,5833,1344,5833,1369,5833,1407,5810,1411,5807,1416,5805,1372,5768,1335,5712,1308,5669,1275,5598,1243,5528,1220,5485,1185,5417,1150,5364,1120,5324,1081,5289,1040,5254,1023,5239,994,5213,982,5189,967,5158,967,5113,967,5099,987,5042,947,5029,926,5022,Q,891,5012,842,5001,Z]
                ],
                label: "Nane District",
                shortLabel: "NN",
                labelPosition: [83.4,554.3],
                labelAlignment: [CEN,MID]
            },
            "LA.LP.XI": {
                outlines: [
                    [M,2148,4438,Q,2142,4437,2126,4437,2117,4437,2095,4441,2071,4446,2058,4446,2033,4447,2020,4453,2008,4459,1992,4459,1980,4459,1974,4454,1964,4459,1957,4462,1944,4466,1938,4466,1926,4466,1894,4465,1860,4464,1857,4463,1839,4460,1832,4459,1822,4457,1810,4451,1804,4448,1794,4438,1782,4426,1775,4420,1759,4405,1740,4393,1718,4380,1703,4370,1688,4360,1670,4329,1654,4300,1652,4300,1634,4300,1620,4325,1606,4350,1580,4350,1566,4350,1549,4340,1532,4330,1519,4330,1493,4330,1477,4354,1451,4392,1434,4404,1429,4408,1409,4426,1394,4439,1383,4445,1373,4452,1354,4461,1342,4468,1336,4479,1335,4481,1334,4484,1313,4508,1254,4557,1190,4609,1164,4644,1138,4679,1109,4739,1080,4798,1050,4874,1049,4876,1048,4878,1042,4895,1007,4986,995,5018,987,5042,967,5099,967,5113,967,5158,982,5189,994,5213,1023,5239,1040,5254,1081,5289,1120,5324,1150,5364,1185,5417,1220,5485,1243,5528,1275,5598,1308,5669,1335,5712,1372,5768,1416,5805,1449,5786,1483,5786,1523,5786,1540,5809,1542,5812,1556,5833,1568,5852,1580,5865,1614,5902,1620,5909,1628,5919,1641,5928,1662,5944,1679,5944,1693,5944,1725,5918,1757,5892,1776,5892,1798,5892,1808,5902,1813,5907,1821,5924,1836,5956,1879,5956,1907,5956,1921,5940,1929,5930,1935,5906,1942,5880,1947,5872,1957,5857,1979,5857,1987,5857,1993,5864,1997,5868,2005,5880,2024,5905,2068,5909,2079,5909,2087,5913,L,2087,5895,Q,2098,5845,2098,5797,2098,5739,2045,5672,2030,5653,1980,5614,1953,5592,1953,5556,1953,5550,1954,5540,1956,5530,1957,5526,1963,5513,1964,5505,1964,5504,1965,5503,1965,5502,1965,5501,1982,5445,1993,5413,2014,5353,2035,5324,2045,5310,2070,5289,2094,5269,2113,5253,2132,5237,2158,5234,2183,5231,2213,5220,2242,5208,2303,5185,2364,5145,2384,5132,2419,5110,2467,5078,2509,5050,2536,5034,2538,5022,2547,5016,2559,5011,2565,5007,2580,4997,2586,4979,2596,4948,2623,4915,2643,4890,2669,4850,2693,4812,2707,4784,L,2707,4780,2705,4780,Q,2702,4780,2687,4788,2672,4796,2671,4796,2646,4801,2632,4802,2602,4805,2576,4822,2551,4838,2535,4838,2511,4838,2492,4826,2473,4815,2454,4815,2439,4815,2405,4832,2371,4850,2351,4850,2336,4850,2289,4842,2241,4833,2233,4833,2210,4833,2204,4838,2198,4842,2176,4869,2166,4880,2147,4894,2124,4909,2120,4913,2111,4920,2053,4924,2017,4926,1985,4926,1963,4926,1958,4923,1949,4917,1949,4894,1947,4831,1947,4829,1947,4808,1947,4803,1948,4791,1951,4775,1951,4773,1951,4772,1952,4750,1955,4741,1961,4721,1979,4712,1996,4704,2019,4692,2028,4689,2035,4685,2039,4683,2039,4677,2039,4672,2039,4669,L,2038,4632,Q,2038,4599,2061,4595,2104,4589,2127,4573,2129,4554,2130,4545,2132,4529,2139,4515,2149,4496,2154,4486,2162,4468,2162,4455,Q,2162,4442,2148,4438,Z]
                ],
                label: "Xiengngeun District",
                shortLabel: "XI",
                labelPosition: [162.1,512.8],
                labelAlignment: [CEN,MID]
            },
            "LA.LP.LO": {
                outlines: [
                    [M,1316,4198,Q,1288,4230,1224,4256,1159,4283,1109,4282,1076,4282,1008,4299,991,4302,983,4305,968,4310,961,4321,L,929,4367,Q,918,4384,907,4412,900,4428,887,4462,879,4481,843,4492,811,4501,806,4523,806,4524,805,4526,803,4540,790,4558,774,4580,756,4585,742,4590,723,4618,705,4647,686,4653,625,4673,605,4693,591,4707,575,4728,553,4756,548,4763,540,4771,530,4795,518,4821,507,4836,498,4849,474,4864,454,4877,430,4888,413,4896,353,4929,310,4953,271,4966,275,4967,277,4970,277,4971,277,4993,277,4998,276,5008,L,292,5008,Q,297,5010,308,5010,L,329,5010,Q,356,5010,362,5008,392,5000,411,4997,427,4994,461,4992,500,4990,516,4988,523,4987,559,4987,590,4986,610,4981,615,4980,659,4967,690,4958,704,4958,714,4958,767,4979,804,4993,843,5001,891,5012,927,5022,948,5029,987,5042,996,5018,1008,4986,1043,4895,1049,4878,1050,4876,1051,4874,1080,4798,1110,4739,1139,4679,1165,4644,1190,4609,1254,4557,1313,4508,1335,4484,1336,4481,1337,4479,1343,4468,1355,4461,1373,4452,1384,4445,1395,4439,1409,4426,1429,4408,1434,4404,1451,4392,1477,4354,1494,4330,1520,4330,1533,4330,1550,4340,1567,4350,1580,4350,1607,4350,1621,4325,1635,4300,1653,4300,1655,4300,1671,4329,1689,4360,1704,4370,1718,4380,1740,4393,1760,4405,1776,4420,1782,4426,1794,4438,1804,4448,1811,4451,1822,4457,1833,4459,1839,4460,1857,4463,1861,4464,1895,4465,1927,4466,1938,4466,1945,4466,1958,4462,1964,4459,1975,4454,1972,4452,1971,4448,1970,4428,1969,4409,1969,4402,1965,4373,1961,4346,1961,4335,1961,4314,1967,4293,1969,4282,1976,4277,1985,4272,1990,4268,1992,4265,2000,4262,2005,4260,2013,4257,2015,4256,2025,4253,2035,4250,2039,4250,2046,4250,2061,4245,2076,4241,2087,4241,2117,4241,2143,4238,2167,4235,2191,4235,L,2218,4235,Q,2222,4235,2230,4237,2240,4240,2246,4240,L,2315,4245,Q,2334,4245,2348,4236,2364,4226,2364,4210,2364,4193,2352,4190,2334,4188,2322,4183,2303,4177,2294,4173,2278,4166,2278,4156,2278,4150,2293,4134,2307,4117,2307,4095,2307,4070,2296,4049,2286,4031,2259,4002,2249,3991,2245,3982,2241,3973,2242,3961,2242,3958,2241,3937,2240,3917,2242,3893,2241,3893,2241,3893,2235,3893,2216,3879,2197,3864,2192,3855,2189,3850,2190,3822,2191,3801,2177,3801,2172,3801,2153,3806,2151,3806,2149,3807,2142,3806,2125,3807,2121,3807,2115,3807,2091,3807,2091,3806,2063,3806,2055,3806,L,2004,3812,Q,1981,3815,1964,3832,1938,3858,1928,3864,1918,3871,1865,3929,1810,3983,1778,3983,1763,3983,1740,3971,1728,3965,1705,3949,1694,3943,1657,3937,1645,3935,1638,3930,1642,3960,1617,3979,1575,4013,1574,4013,1552,4041,1537,4052,1517,4066,1489,4070,1439,4083,1393,4120,Q,1359,4147,1316,4198,Z]
                ],
                label: "Louangphrabang District",
                shortLabel: "LO",
                labelPosition: [85.4,475.6],
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
