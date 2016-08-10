/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack core
 * @id fusionmaps.NewMexico.20.10-30-2012 06:49:21
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-newmexico", function () {

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
        name: "NewMexico",
        revision: 20,
        
        standaloneInit: true,

        baseWidth: 590,
        baseHeight: 700,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "028": { 
                outlines: [
                    [M,2767,1771,L,2768,1625,Q,2760,1619,2753,1623,2750,1625,2746,1625,2731,1625,2718,1630,2716,1631,2713,1632,2695,1639,2684,1647,2682,1649,2678,1649,2658,1650,2642,1642,2632,1638,2628,1644,2626,1647,2622,1649,2613,1654,2613,1665,2614,1685,2613,1704,2610,1753,2605,1801,2602,1824,2612,1843,2616,1850,2629,1852,2647,1842,2670,1836,2683,1832,2698,1832,2715,1832,2724,1843,2732,1852,2742,1860,2754,1869,2768,1877,2770,1880,2777,1878,2784,1876,2789,1872,2814,1853,2824,1830,2828,1822,2822,1817,2802,1800,2781,1784,Q,2773,1779,2767,1771,Z]
                ], 
                label: "Los Alamos", 
                shortLabel: "LA", 
                labelPosition: [271.5,29], 
                labelAlignment: [CEN,TOP], 
                labelConnectors: [
                    [M,2715,290,L,2715,1750]
                ] 
            },
            "011": { 
                outlines: [
                    [M,4552,2993,L,4552,3099,4464,3099,4464,3198,4039,3198,4039,3781,4132,3781,4132,3871,4722,3871,4722,3776,4912,3781,4912,3198,4768,3198,4768,2993,Z]
                ], 
                label: "De Baca", 
                shortLabel: "DB", 
                labelPosition: [444.5,351.2], 
                labelAlignment: [CEN,MID]
            },
            "041": { 
                outlines: [
                    [M,5116,3198,L,4912,3198,4912,3781,5035,3781,5035,4087,5141,4087,5156,4241,5340,4241,5340,4362,5752,4362,5752,3535,5116,3535,Z]
                ], 
                label: "Roosevelt", 
                shortLabel: "RS", 
                labelPosition: [542.2,392], 
                labelAlignment: [CEN,MID]
            },
            "025": { 
                outlines: [
                    [M,5081,4572,L,5081,5036,5059,5036,5059,5514,5135,5514,5135,6109,5752,6120,5752,4362,5152,4362,5152,4572,Z]
                ], 
                label: "Lea", 
                shortLabel: "LE", 
                labelPosition: [543.5,524.1], 
                labelAlignment: [CEN,MID]
            },
            "015": { 
                outlines: [
                    [M,5059,5514,L,5059,5036,4072,5036,4072,6109,5135,6109,5135,5514,Z]
                ], 
                label: "Eddy", 
                shortLabel: "ED", 
                labelPosition: [460.3,557.2], 
                labelAlignment: [CEN,MID]
            },
            "027": { 
                outlines: [
                    [M,3625,3590,L,3071,3590,3071,4054,2933,4059,2933,4239,2625,4239,2638,4572,3250,4572,3250,4666,3634,4666,3634,4866,4042,4866,4039,3491,3628,3491,Z]
                ], 
                label: "Lincoln", 
                shortLabel: "LI", 
                labelPosition: [348.3,417.9], 
                labelAlignment: [CEN,MID]
            },
            "005": { 
                outlines: [
                    [M,4722,3871,L,4132,3871,4132,3781,4039,3781,4042,4866,3634,4866,3634,5055,3594,5055,3594,5541,4072,5541,4072,5036,5081,5036,5081,4572,5152,4572,5152,4362,5340,4362,5340,4241,5156,4241,5141,4087,5035,4087,5035,3781,4722,3776,Z]
                ], 
                label: "Chaves", 
                shortLabel: "CH", 
                labelPosition: [451.7,452.9], 
                labelAlignment: [CEN,MID]
            },
            "035": { 
                outlines: [
                    [M,3250,4572,L,2661,4572,2661,6109,4072,6109,4072,5541,3594,5541,3594,5055,3634,5055,3634,4666,3250,4666,Z]
                ], 
                label: "Otero", 
                shortLabel: "OT", 
                labelPosition: [312.6,539], 
                labelAlignment: [CEN,MID]
            },
            "051": { 
                outlines: [
                    [M,2638,4572,L,2634,4470,1370,4470,1129,4461,1129,4769,1245,4769,Q,1251,4783,1254,4793,1255,4796,1256,4798,1257,4804,1258,4810,1259,4856,1259,4901,1259,4935,1257,4969,1255,5001,1266,5021,1275,5038,1296,5047,1301,5049,1306,5052,1309,5055,1313,5057,1337,5068,1331,5106,1329,5121,1335,5136,1347,5171,1357,5206,1361,5219,1360,5233,1359,5241,1355,5246,1353,5249,1353,5253,1350,5265,1355,5270,1357,5272,1358,5276,1361,5284,1366,5292,1379,5315,1371,5341,1367,5354,1369,5368,1371,5394,1375,5421,1375,5426,1374,5434,L,1777,5434,1781,5247,2165,5247,2165,5193,2661,4952,2661,4572,Z]
                ], 
                label: "Sierra", 
                shortLabel: "SI", 
                labelPosition: [178.5,488.7], 
                labelAlignment: [CEN,MID]
            },
            "013": { 
                outlines: [
                    [M,2165,5247,L,1781,5247,1777,5434,1777,6361,2496,6366,2496,6362,Q,2494,6349,2486,6338,2485,6336,2482,6335,2453,6326,2435,6306,2433,6304,2432,6302,2428,6285,2415,6270,2408,6261,2400,6245,2399,6242,2397,6240,2388,6230,2396,6215,2397,6212,2399,6212,2413,6211,2411,6194,2411,6190,2409,6187,2401,6175,2394,6155,2393,6152,2393,6150,2390,6126,2406,6112,2408,6110,2411,6109,L,2661,6109,2661,4952,2165,5193,Z]
                ], 
                label: "Doña Ana ", 
                shortLabel: "DA", 
                labelPosition: [218.9,574.9], 
                labelAlignment: [CEN,MID]
            },
            "029": { 
                outlines: [
                    [M,1200,5537,L,910,5537,906,6355,1776,6361,1776,5434,1200,5434,Z]
                ], 
                label: "Luna", 
                shortLabel: "LU", 
                labelPosition: [134.1,589.7], 
                labelAlignment: [CEN,MID]
            },
            "023": { 
                outlines: [
                    [M,508,5537,L,508,5438,316,5438,316,5251,115,5251,115,6823,908,6823,906,6247,615,6247,615,5537,Z]
                ], 
                label: "Hidalgo", 
                shortLabel: "HI", 
                labelPosition: [40.1,617.7], 
                labelAlignment: [CEN,MID]
            },
            "017": { 
                outlines: [
                    [M,1256,4798,Q,1255,4796,1254,4793,1251,4783,1245,4769,L,115,4769,115,5251,316,5251,316,5438,508,5438,508,5537,615,5537,615,6247,906,6247,910,5537,1200,5537,1200,5434,1374,5434,Q,1375,5426,1375,5421,1371,5394,1369,5368,1367,5354,1371,5341,1379,5315,1366,5292,1361,5284,1358,5276,1357,5272,1355,5270,1350,5265,1353,5253,1353,5249,1355,5246,1359,5241,1360,5233,1361,5219,1357,5206,1347,5171,1335,5136,1329,5121,1331,5106,1337,5068,1313,5057,1309,5055,1306,5052,1301,5049,1296,5047,1275,5038,1266,5021,1255,5001,1257,4969,1259,4935,1259,4901,1259,4856,1258,4810,Q,1257,4804,1256,4798,Z]
                ], 
                label: "Grant", 
                shortLabel: "GR", 
                labelPosition: [74.5,523.8], 
                labelAlignment: [CEN,MID]
            },
            "003": { 
                outlines: [
                    [M,1370,4470,L,1370,3219,115,3219,115,4769,1129,4769,1129,4461,Z]
                ], 
                label: "Catron", 
                shortLabel: "CA", 
                labelPosition: [74.3,399.4], 
                labelAlignment: [CEN,MID]
            },
            "053": { 
                outlines: [
                    [M,2191,3234,Q,2181,3229,2177,3224,2176,3223,2175,3222,2174,3220,2173,3219,L,1370,3219,1370,4470,2634,4470,2625,4239,2933,4239,2933,4059,3071,4054,3071,3590,2600,3590,2600,3394,Q,2588,3393,2578,3392,2563,3390,2546,3389,2542,3389,2539,3387,2514,3377,2490,3366,2465,3355,2439,3344,2409,3331,2377,3322,2314,3306,2259,3284,2255,3283,2252,3280,Q,2226,3253,2191,3234,Z]
                ], 
                label: "Socorro", 
                shortLabel: "SO", 
                labelPosition: [209.1,384.4], 
                labelAlignment: [CEN,MID]
            },
            "057": { 
                outlines: [
                    [M,2856,2795,L,2845,2894,2549,2887,2549,3268,2600,3268,2600,3590,3625,3590,3656,2689,2768,2689,2768,2795,Z]
                ], 
                label: "Torrance", 
                shortLabel: "TR", 
                labelPosition: [312.2,317], 
                labelAlignment: [CEN,MID]
            },
            "019": { 
                outlines: [
                    [M,4039,3198,L,4464,3198,4464,3099,4552,3099,4552,2993,4768,2993,4768,2491,3665,2491,3629,3491,4039,3491,Z]
                ], 
                label: "Guadalupe", 
                shortLabel: "GU", 
                labelPosition: [414.8,291.1], 
                labelAlignment: [CEN,MID]
            },
            "009": { 
                outlines: [
                    [M,5548,2792,L,5548,2887,5449,2887,5449,3008,5354,3008,5354,3110,5142,3110,5142,3202,5116,3198,5116,3535,5752,3535,5752,2792,Z]
                ], 
                label: "Curry", 
                shortLabel: "CU", 
                labelPosition: [548.4,328.3], 
                labelAlignment: [CEN,MID]
            },
            "037": { 
                outlines: [
                    [M,5468,2308,L,5215,2304,5215,2469,5006,2472,4768,2573,4768,3198,5116,3198,5142,3202,5142,3110,5354,3110,5354,3008,5449,3008,5449,2887,5548,2887,5548,2792,5752,2792,5752,1894,5468,1894,Z]
                ], 
                label: "Quay", 
                shortLabel: "QU", 
                labelPosition: [528,266.8], 
                labelAlignment: [CEN,MID]
            },
            "047": { 
                outlines: [
                    [M,3620,1749,Q,3612,1749,3605,1747,3578,1741,3552,1733,3479,1712,3401,1715,3397,1715,3393,1714,3383,1713,3373,1714,3371,1715,3369,1715,3319,1717,3270,1717,3270,2203,3270,2689,L,3656,2689,3665,2491,4768,2491,4768,2573,5006,2472,5215,2469,5215,2261,5134,2261,4896,1830,3919,1878,Q,3916,1877,3913,1876,3886,1866,3861,1844,3858,1841,3855,1838,3835,1815,3810,1799,3808,1797,3804,1796,3790,1791,3776,1790,3765,1790,3759,1786,3751,1780,3740,1779,3738,1779,3735,1778,3726,1777,3716,1778,3705,1779,3701,1775,3700,1773,3696,1771,3682,1766,3668,1760,3664,1759,3660,1757,Q,3645,1748,3620,1749,Z]
                ], 
                label: "San Miguel", 
                shortLabel: "SM", 
                labelPosition: [408.2,220.1], 
                labelAlignment: [CEN,MID]
            },
            "061": { 
                outlines: [
                    [M,2366,2839,L,2314,2887,2055,2886,2013,2813,1848,2813,1848,3219,2167,3219,Q,2172,3220,2173,3220,2174,3220,2175,3221,2176,3223,2177,3224,2181,3229,2191,3234,2226,3253,2252,3280,2255,3283,2259,3284,2314,3306,2377,3322,2409,3331,2439,3344,2465,3355,2490,3366,2514,3377,2539,3387,2542,3389,2546,3389,2563,3390,2578,3392,2588,3393,2600,3394,L,2600,3268,2549,3268,2549,2887,2612,2888,2612,2839,Z]
                ], 
                label: "Valencia", 
                shortLabel: "VA", 
                labelPosition: [223,308.3], 
                labelAlignment: [CEN,MID]
            },
            "001": { 
                outlines: [
                    [M,2314,2887,L,2366,2839,2612,2839,2612,2888,2845,2894,2856,2795,2768,2795,2768,2510,1875,2510,1999,2813,2013,2813,2055,2886,Z]
                ], 
                label: "Bernalillo", 
                shortLabel: "BE", 
                labelPosition: [236.5,270.2], 
                labelAlignment: [CEN,MID]
            },
            "006": { 
                outlines: [
                    [M,1482,2330,L,1375,2322,1375,2397,673,2397,673,2786,115,2786,115,3219,1848,3219,1848,2813,1999,2813,1875,2510,1874,2509,1827,2391,1482,2391,Z]
                ], 
                label: "Cibola", 
                shortLabel: "CI", 
                labelPosition: [119.7,282], 
                labelAlignment: [CEN,MID]
            },
            "049": { 
                outlines: [
                    [M,3270,1605,L,2940,1605,2940,1678,2768,1678,2767,1771,Q,2773,1779,2781,1784,2802,1800,2822,1817,2828,1822,2824,1830,2814,1853,2789,1872,2784,1876,2777,1878,2770,1880,2768,1877,L,2768,2689,3270,2689,Q,3270,2203,3270,1717,Z]
                ], 
                label: "Santa Fe", 
                shortLabel: "SF", 
                labelPosition: [301.8,214.7], 
                labelAlignment: [CEN,MID]
            },
            "031": { 
                outlines: [
                    [M,1482,2391,L,1762,2391,1762,1598,115,1598,115,2786,673,2786,673,2397,1375,2397,1375,2322,1482,2330,Z]
                ], 
                label: "McKinley", 
                shortLabel: "MK", 
                labelPosition: [93.8,208.2], 
                labelAlignment: [CEN,MID]
            },
            "043": { 
                outlines: [
                    [M,2768,1612,L,2164,1601,2164,1352,1468,1352,1468,1598,1762,1598,1762,2391,1827,2391,1874,2509,1875,2510,2768,2510,2768,1877,Q,2754,1869,2742,1860,2732,1852,2724,1843,2715,1832,2698,1832,2683,1832,2670,1836,2647,1842,2629,1852,2616,1850,2612,1843,2602,1824,2605,1801,2610,1753,2613,1704,2614,1685,2613,1665,2613,1654,2622,1649,2626,1647,2628,1644,2632,1638,2642,1642,2658,1650,2678,1649,2682,1649,2684,1647,2695,1639,2713,1632,2716,1631,2718,1630,2731,1625,2746,1625,2750,1625,2753,1623,2760,1619,2768,1625,Z]
                ], 
                label: "Sandoval", 
                shortLabel: "SA", 
                labelPosition: [214.8,199.1], 
                labelAlignment: [CEN,MID]
            },
            "033": { 
                outlines: [
                    [M,4065,1290,L,3621,1289,Q,3615,1294,3610,1299,3559,1350,3547,1413,3546,1417,3547,1421,3550,1432,3550,1445,3550,1453,3551,1461,3552,1467,3554,1473,3558,1485,3549,1498,3544,1504,3537,1513,3534,1517,3531,1520,3512,1540,3500,1557,3498,1559,3496,1560,3474,1574,3450,1583,3448,1584,3447,1585,3438,1589,3431,1588,3428,1589,3426,1590,3394,1607,3361,1619,3335,1629,3306,1623,3286,1619,3272,1607,L,3270,1605,3270,1717,Q,3319,1717,3369,1715,3371,1715,3373,1714,3383,1713,3393,1714,3397,1715,3401,1715,3479,1712,3552,1733,3578,1741,3605,1747,3612,1749,3620,1749,3645,1748,3660,1757,3664,1759,3668,1760,3682,1766,3696,1771,3700,1773,3701,1775,3705,1779,3716,1778,3726,1777,3735,1778,3738,1779,3740,1779,3751,1780,3759,1786,3765,1790,3776,1790,3790,1791,3804,1796,3808,1797,3810,1799,3835,1815,3855,1838,3858,1841,3861,1844,3886,1866,3912,1876,3916,1877,3919,1878,L,4526,1848,Q,4526,1842,4527,1837,4528,1834,4528,1832,4529,1808,4528,1784,4527,1760,4534,1740,4536,1736,4536,1732,4536,1715,4543,1701,4544,1699,4544,1697,4544,1685,4543,1673,4542,1637,4538,1601,4536,1583,4531,1565,4526,1550,4518,1537,4504,1518,4507,1493,4508,1483,4509,1473,4510,1455,4501,1446,4485,1432,4474,1424,4468,1419,4463,1412,4453,1395,4460,1377,4462,1373,4463,1370,4466,1365,4468,1360,4473,1351,4477,1345,L,4069,1345,Z]
                ], 
                label: "Mora", 
                shortLabel: "MO", 
                labelPosition: [390.7,158.4], 
                labelAlignment: [CEN,MID]
            },
            "021": { 
                outlines: [
                    [M,4468,1360,Q,4466,1365,4463,1370,4462,1373,4460,1377,4453,1395,4463,1412,4468,1419,4474,1424,4485,1432,4501,1446,4510,1455,4509,1473,4508,1483,4507,1493,4504,1518,4518,1537,4526,1550,4531,1565,4536,1583,4538,1601,4542,1637,4543,1673,4544,1685,4544,1697,4544,1699,4543,1701,4536,1715,4536,1732,4536,1736,4534,1740,4527,1760,4528,1784,4529,1808,4528,1832,4528,1834,4527,1837,4526,1842,4526,1848,L,4896,1830,5134,2261,5215,2261,5215,2304,5468,2308,5468,1491,5080,1491,5080,1411,4871,1411,4871,1345,4478,1345,Q,4473,1351,4468,1360,Z]
                ], 
                label: "Harding", 
                shortLabel: "HA", 
                labelPosition: [512.2,178.6], 
                labelAlignment: [CEN,MID]
            },
            "059": { 
                outlines: [
                    [M,5812,1021,L,5812,412,4871,413,4871,1411,5080,1411,5080,1491,5468,1491,5468,1894,5752,1894,5752,1021,Z]
                ], 
                label: "Union", 
                shortLabel: "UN", 
                labelPosition: [534.1,102.3], 
                labelAlignment: [CEN,MID]
            },
            "007": { 
                outlines: [
                    [M,3722,478,Q,3735,494,3748,515,3750,517,3750,519,3752,538,3742,548,3738,561,3737,575,3736,611,3735,647,3734,693,3734,727,3734,735,3728,739,3714,751,3698,759,3673,773,3648,784,3634,791,3621,804,3618,807,3615,810,3605,824,3609,842,3613,860,3613,866,3613,889,3612,906,3612,910,3610,913,3607,919,3610,930,3618,960,3628,990,3636,1014,3637,1039,3640,1074,3635,1110,3632,1130,3630,1150,3630,1154,3631,1158,3632,1162,3633,1166,3634,1170,3634,1174,3636,1182,3637,1190,3638,1198,3639,1206,3640,1212,3638,1217,3629,1249,3648,1274,3633,1280,3621,1290,L,4065,1290,4069,1345,4871,1345,4871,413,3733,414,Q,3732,430,3727,443,3726,447,3725,452,3724,455,3722,457,3717,461,3719,471,Q,3720,475,3722,478,Z]
                ], 
                label: "Colfax", 
                shortLabel: "CO", 
                labelPosition: [423.9,87.9], 
                labelAlignment: [CEN,MID]
            },
            "055": { 
                outlines: [
                    [M,3733,414,L,2990,414,Q,2972,460,2991,511,3009,561,3010,615,3011,673,3003,730,2999,757,2998,783,2995,831,3003,877,3015,946,3033,1014,3039,1036,3044,1059,3045,1066,3046,1074,3047,1082,3046,1087,3039,1118,3036,1149,L,3027,1163,Q,3019,1174,3012,1185,3005,1194,2997,1201,2977,1218,2968,1232,2961,1242,2959,1254,2959,1256,2961,1258,2970,1267,2985,1275,2989,1278,2994,1281,3008,1291,3030,1296,3064,1304,3094,1320,3099,1323,3105,1326,3128,1335,3154,1364,3157,1367,3160,1370,3191,1391,3220,1415,3233,1426,3242,1445,3243,1447,3244,1450,3259,1477,3275,1500,3277,1503,3280,1506,3283,1509,3285,1512,3308,1541,3345,1556,3373,1567,3404,1574,3406,1575,3409,1576,3415,1579,3419,1583,3424,1588,3434,1588,3444,1588,3450,1583,3474,1574,3496,1560,3498,1559,3500,1557,3512,1540,3531,1520,3534,1517,3537,1513,3544,1504,3549,1498,3558,1485,3554,1473,3552,1467,3551,1461,3550,1453,3550,1445,3550,1432,3547,1421,3546,1417,3547,1413,3559,1350,3610,1299,3615,1294,3621,1289,3633,1280,3648,1274,3629,1249,3638,1217,3640,1212,3639,1206,3638,1198,3637,1190,3636,1182,3634,1174,3634,1170,3633,1166,3632,1162,3631,1158,3630,1154,3630,1150,3632,1130,3635,1110,3640,1074,3637,1039,3636,1014,3628,990,3618,960,3610,930,3607,919,3610,913,3612,910,3612,906,3613,889,3613,866,3613,860,3609,842,3605,824,3615,810,3618,807,3621,804,3634,791,3648,784,3673,773,3698,759,3714,751,3728,739,3734,735,3734,727,3734,693,3735,647,3736,611,3737,575,3738,561,3742,548,3752,538,3750,519,3750,517,3748,515,3735,494,3722,478,3720,475,3719,471,3717,461,3722,457,3724,455,3725,452,3726,447,3727,443,Q,3732,430,3733,414,Z]
                ], 
                label: "Taos", 
                shortLabel: "TA", 
                labelPosition: [329.5,97.1], 
                labelAlignment: [CEN,MID]
            },
            "039": { 
                outlines: [
                    [M,2998,783,Q,2999,757,3003,730,3011,673,3010,615,3009,561,2991,511,2972,460,2990,414,L,1658,416,Q,1656,418,1653,420,1638,434,1638,455,1639,471,1643,484,1644,489,1646,495,1646,497,1646,499,1646,503,1643,506,1629,520,1619,538,1603,567,1577,592,1551,616,1526,632,1505,645,1485,659,1473,668,1468,675,L,1468,1352,2164,1352,2164,1601,2768,1612,2768,1678,2940,1678,2940,1605,3270,1605,Q,3271,1606,3272,1607,3286,1619,3306,1623,3335,1629,3361,1619,3394,1607,3426,1590,3434,1588,3424,1585,3415,1579,3409,1576,3406,1575,3404,1574,3373,1567,3345,1556,3308,1541,3285,1512,3283,1509,3280,1506,3277,1503,3275,1500,3259,1477,3244,1450,3243,1447,3242,1445,3233,1426,3220,1415,3191,1391,3160,1370,3157,1367,3154,1364,3128,1335,3105,1326,3099,1323,3094,1320,3064,1304,3030,1296,3008,1291,2994,1281,2989,1278,2985,1275,2970,1267,2961,1258,2959,1256,2959,1254,2961,1242,2968,1232,2977,1218,2997,1201,3005,1194,3012,1185,3019,1174,3027,1163,L,3036,1149,Q,3039,1118,3046,1087,3047,1082,3046,1074,3045,1066,3044,1059,3039,1036,3033,1014,3015,946,3003,877,Q,2995,831,2998,783,Z]
                ], 
                label: "Rio Arriba", 
                shortLabel: "RA", 
                labelPosition: [221.7,97.6], 
                labelAlignment: [CEN,MID]
            },
            "045": { 
                outlines: [
                    [M,1658,415,L,115,417,115,1598,1468,1598,1468,675,Q,1473,668,1485,659,1505,645,1526,632,1551,616,1577,592,1603,567,1619,538,1629,520,1643,506,1646,503,1646,499,1646,497,1646,495,1644,489,1643,484,1639,471,1638,455,1638,434,1653,420,Z]
                ], 
                label: "San Juan", 
                shortLabel: "SJ", 
                labelPosition: [85.4,100.7], 
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