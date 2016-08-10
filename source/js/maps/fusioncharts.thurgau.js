/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Thurgau.20.10-31-2012 09:51:13
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-thurgau", function () {

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
        name: "Thurgau",
        revision: 20,
        
        standaloneInit: true,

        baseWidth: 820,
        baseHeight: 490,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "CH.TG.AB": { 
                outlines: [
                    [M,7794,3056,L,7890,3130,Q,7911,3131,7934,3130,7934,3159,7934,3189,7934,3197,7935,3205,L,8056,3120,Q,7973,2986,7887,3005,7823,2963,7795,2940,Z],
                    [M,6862,1814,Q,6838,1794,6782,1774,6727,1754,6615,1678,6504,1601,6501,1593,6500,1591,6475,1569,6463,1571,6455,1571,6426,1571,6394,1572,6392,1574,6393,1576,L,6335,1672,Q,6338,1675,6345,1679,6347,1680,6355,1684,6365,1690,6371,1700,6372,1702,6376,1708,6371,1710,6369,1719,6367,1720,6362,1725,6355,1734,6347,1740,6339,1744,6335,1752,6332,1757,6333,1759,6334,1762,6329,1770,6325,1779,6319,1787,6313,1796,6314,1807,6313,1808,6309,1827,6305,1847,6309,1855,6313,1864,6302,1872,6274,1875,6239,1874,6235,1872,6230,1861,6229,1860,6226,1855,6225,1850,6221,1847,6220,1846,6218,1840,6213,1833,6199,1834,6186,1835,6174,1834,6169,1833,6164,1832,6152,1830,6139,1830,6126,1830,6109,1825,6105,1825,6096,1827,6096,1861,6095,1898,6086,1903,6074,1911,6068,1912,6059,1914,6050,1915,6037,1916,6020,1922,5996,1926,5996,1928,5996,1930,5996,1937,5996,1944,5996,1973,5997,2001,L,6122,2057,6188,2071,6258,2134,6303,2136,6334,2193,6334,2194,6466,2169,6477,2346,6565,2353,6565,2403,6722,2490,6763,2678,6906,2710,6802,2780,Q,6801,2784,6803,2787,6806,2791,6806,2799,6808,2808,6808,2820,6808,2828,6802,2832,6799,2834,6797,2836,6791,2841,6782,2846,6778,2846,6775,2849,6773,2851,6770,2852,6766,2855,6759,2861,6737,2861,6715,2860,L,6683,2917,6715,2939,6748,2907,6883,2940,6901,2905,7064,2946,Q,7064,2974,7064,3003,7064,3016,7062,3028,7011,3036,6997,3089,7028,3090,7044,3090,7051,3090,7054,3090,7052,3092,7050,3094,7049,3095,7049,3097,L,6978,3154,Q,6993,3154,7008,3154,7009,3158,7010,3159,7010,3164,7010,3166,7025,3165,7043,3163,7043,3192,7043,3221,7043,3235,7041,3247,L,7144,3247,Q,7144,3257,7145,3266,7150,3266,7149,3271,7154,3273,7153,3276,7153,3283,7153,3290,7182,3290,7211,3290,7241,3290,7270,3290,7292,3290,7313,3289,L,7313,3284,Q,7334,3152,7369,3059,7371,3059,7372,3058,7422,3037,7437,2979,L,7512,3013,7673,2848,Q,7674,2847,7674,2846,7675,2840,7675,2832,7674,2807,7672,2780,7671,2777,7670,2770,7671,2766,7675,2763,7680,2758,7682,2745,7685,2738,7689,2736,7691,2735,7697,2731,7703,2725,7692,2722,7692,2714,7682,2710,7678,2704,7674,2703,7670,2702,7664,2701,7655,2701,7646,2696,7615,2695,7588,2696,7500,2625,7452,2555,7147,2343,7133,2076,7131,2052,7134,2030,7148,2012,7160,2007,7167,1990,7159,1982,7134,1968,7106,1951,7079,1935,7064,1920,7049,1905,7024,1898,7000,1892,6967,1872,6947,1837,6902,1835,Q,6887,1835,6862,1814,Z]
                ], 
                label: "Arbon", 
                shortLabel: "AB", 
                labelPosition: [661.8,206.9], 
                labelAlignment: [CEN,MID]
            },
            "CH.TG.KL": { 
                outlines: [
                    [M,5254,854,Q,5243,838,5226,814,5222,785,5154,793,5156,781,5148,781,5142,782,5133,780,5093,779,5052,780,4942,646,4920,643,4897,640,4873,640,4871,643,4866,642,4859,641,4852,647,4847,653,4845,661,4838,669,4819,676,4799,682,4801,682,L,4792,681,Q,4782,679,4773,678,4764,677,4761,677,4745,678,4738,677,4731,676,4714,670,4696,663,4660,651,4677,640,4620,655,4474,704,4389,663,4303,622,4288,575,4273,529,4242,535,4211,541,4211,571,4210,602,4130,572,4088,556,4057,550,L,4038,629,4123,683,4103,717,4172,768,4177,847,4116,904,4135,969,4123,1080,4054,1080,4026,1131,4012,1066,3979,1087,3992,1159,Q,3991,1212,3959,1243,3952,1250,3943,1256,3882,1315,3872,1391,L,4380,1391,4411,1473,4395,1644,4470,1644,4486,1734,4526,1791,4708,1778,4726,1744,4845,1744,4875,1682,4996,1726,4996,1672,5127,1720,5127,1566,5165,1566,5199,1460,5242,1471,5284,1602,5422,1676,5684,1687,5694,1795,5761,1888,5804,1881,5804,1960,5832,1978,5887,1926,5925,1988,5935,1923,5996,1930,Q,5996,1928,5996,1926,6020,1922,6037,1916,6050,1915,6059,1914,6068,1912,6074,1911,6086,1903,6095,1898,6096,1861,6096,1827,6105,1825,6109,1825,6126,1830,6139,1830,6152,1830,6164,1832,6169,1833,6174,1834,6186,1835,6199,1834,6213,1833,6218,1840,6220,1846,6221,1847,6225,1850,6226,1855,6229,1860,6230,1861,6235,1872,6239,1874,6274,1875,6302,1872,6313,1864,6309,1855,6305,1847,6309,1828,6313,1808,6314,1807,6313,1796,6319,1787,6325,1779,6330,1771,6334,1762,6333,1760,6332,1757,6335,1752,6339,1744,6347,1740,6355,1734,6362,1725,6367,1720,6369,1719,6371,1710,6376,1708,6372,1702,6371,1700,6365,1690,6355,1684,6347,1680,6345,1679,6338,1675,6335,1672,L,6393,1576,Q,6392,1574,6394,1572,6426,1571,6455,1571,L,6466,1562,Q,6414,1518,6286,1415,6281,1411,6276,1407,6261,1389,6221,1363,6177,1348,6131,1325,6073,1293,6031,1258,6011,1254,5848,1135,5826,1130,5803,1136,5780,1142,5717,1132,5704,1107,5665,1082,5638,1060,5578,1023,5517,985,5489,977,5461,970,5437,940,5383,931,5341,900,5305,900,5291,935,5291,920,5282,894,Q,5271,880,5254,854,Z]
                ], 
                label: "Kreuzlingen", 
                shortLabel: "KL", 
                labelPosition: [516.9,126.1], 
                labelAlignment: [CEN,MID]
            },
            "CH.TG.SB": { 
                outlines: [
                    [M,3234,622,Q,3225,624,3218,634,3217,642,3213,645,3212,647,3208,654,3202,653,3200,658,3192,659,3187,666,3184,672,3177,668,3175,667,3170,663,3160,659,3160,667,3160,673,3159,682,3158,691,3153,694,3152,696,3149,701,3148,705,3146,710,3141,720,3132,729,3129,732,3120,740,3114,742,3105,743,3095,743,3087,749,3084,750,3081,752,3069,760,3055,768,3041,767,3030,773,3028,776,3023,775,3010,774,2998,773,2983,772,2977,779,2971,785,2966,797,2963,802,2959,805,2954,809,2943,811,2931,815,2915,816,2898,817,2880,816,2867,816,2858,820,2852,822,2839,825,2833,835,2825,849,2785,849,2745,848,2737,848,2734,852,2727,861,2720,872,2714,881,2706,887,2701,891,2693,902,2690,910,2680,910,2657,908,2633,907,2608,907,2580,908,2574,909,2565,911,2557,911,2550,917,2545,918,2544,922,2543,924,2538,930,2535,933,2534,937,2530,948,2521,960,2513,978,2483,973,2463,972,2443,972,2430,972,2418,971,2412,970,2407,971,2325,922,2312,898,2299,875,2260,843,2220,811,2209,805,2199,798,2195,798,2174,798,2152,797,2132,790,2116,783,L,2047,868,1916,847,2005,733,Q,1912,689,1910,698,1908,708,1902,698,1895,687,1881,690,1822,583,1819,581,1815,579,1814,568,1813,557,1804,552,1796,550,1791,547,1789,545,1785,545,1778,545,1762,551,1639,501,1635,500,1632,498,1628,494,1624,491,1608,487,1584,485,1574,492,1564,498,1551,495,1537,492,1517,497,1513,475,1509,483,1500,494,1485,501,1481,502,1476,508,1473,510,1469,513,1468,517,1464,517,1458,517,1454,518,1456,522,1455,526,1454,531,1454,536,1454,565,1454,594,1457,599,1460,600,1461,610,1467,611,1469,612,1471,614,1476,615,1478,618,L,1484,620,Q,1488,624,1493,627,1497,631,1502,633,1504,636,1506,637,1507,653,1508,669,1509,684,1510,698,1512,729,1510,751,1509,774,1513,823,L,1724,916,Q,1725,945,1725,975,1725,1000,1726,1024,L,1658,1178,Q,1638,1178,1615,1179,1606,1179,1595,1181,1594,1202,1594,1223,1594,1253,1594,1282,1594,1310,1594,1337,1594,1338,1594,1338,L,1593,1339,1507,1392,Q,1507,1398,1512,1416,1516,1434,1513,1451,1509,1468,1507,1471,1505,1474,1505,1475,L,1582,1579,1582,1579,1834,1423,2077,1586,2060,1758,2144,1768,2144,1638,2322,1588,2484,1613,2603,1735,2623,1745,Q,2932,1716,3264,1702,3266,1702,3267,1702,L,3609,1835,3622,1796,3572,1732,3505,1749,3486,1706,3565,1607,3517,1596,Q,3590,1523,3691,1489,3693,1482,3693,1477,3693,1448,3693,1421,L,3649,1401,Q,3643,1402,3641,1398,3637,1397,3638,1391,3636,1389,3637,1383,3637,1379,3634,1374,3633,1345,3633,1316,3633,1287,3633,1258,3660,1262,3690,1259,3719,1256,3747,1258,3892,1255,3895,1252,3898,1248,3906,1248,3911,1245,3916,1245,3928,1246,3939,1245,3941,1245,3942,1245,3951,1245,3959,1243,3991,1212,3992,1159,L,3979,1087,4012,1066,4026,1131,4054,1080,4123,1080,4135,969,4116,904,4177,847,4172,768,4103,717,4123,683,4038,629,4057,550,Q,4028,544,4008,547,3966,553,3909,549,3853,544,3793,534,3767,513,3730,536,3693,559,3644,543,3594,526,3566,541,3537,555,3492,559,3447,563,3434,574,3421,585,3325,631,L,3267,603,Q,3267,597,3258,598,3249,599,3250,606,3250,613,3247,617,Q,3243,620,3234,622,Z]
                ], 
                label: "Steckborn", 
                shortLabel: "SB", 
                labelPosition: [281.5,127.8], 
                labelAlignment: [CEN,MID]
            },
            "CH.TG.DH": { 
                outlines: [
                    [M,803,269,Q,733,267,690,292,631,322,629,323,625,328,622,329,618,329,615,329,585,329,555,328,554,323,549,321,543,319,538,314,536,309,532,309,531,309,526,307,521,305,508,300,496,294,476,277,L,452,256,Q,449,255,447,255,445,255,442,252,439,248,432,246,428,243,424,239,423,238,420,237,413,235,410,239,409,240,407,243,404,247,400,252,396,256,390,255,325,319,322,320,319,321,314,323,313,325,309,328,303,334,294,339,290,341,285,344,275,350,267,356,255,363,244,369,235,369,232,377,231,382,221,381,214,383,202,383,200,384,195,386,190,392,186,398,186,426,186,454,186,484,186,513,L,284,600,278,699,413,903,487,903,582,998,617,954,673,998,744,963,820,994,915,959,907,1016,965,1039,965,988,966,988,1040,978,1151,867,Q,1190,867,1240,890,L,1324,813,1355,669,1508,669,Q,1507,653,1506,637,1504,636,1502,633,1497,631,1493,627,1488,624,1484,620,L,1478,618,Q,1476,615,1471,614,1469,612,1467,611,1461,610,1460,600,1457,599,1454,594,1454,565,1454,536,1454,531,1455,526,1456,522,1454,518,1447,519,1443,521,1440,521,1438,521,1408,521,1379,521,1372,521,1365,521,1358,522,1354,517,1351,517,1347,514,1343,511,1337,506,1065,324,1061,323,1057,322,1050,320,1042,317,1035,312,1028,307,1019,306,1010,304,997,300,984,296,955,295,940,295,929,297,Q,825,270,803,269,Z]
                ], 
                label: "Diessenhofen", 
                shortLabel: "DH", 
                labelPosition: [74.7,63.8], 
                labelAlignment: [CEN,MID]
            },
            "CH.TG.FF": { 
                outlines: [
                    [M,3264,1702,Q,2932,1716,2623,1745,L,2603,1735,2484,1613,2322,1588,2144,1638,2144,1768,2059,1758,2077,1586,1834,1423,1582,1579,1581,1579,1513,1485,Q,1502,1462,1505,1491,L,1494,1550,1355,1522,Q,1355,1510,1355,1498,1355,1469,1355,1439,1355,1436,1352,1431,L,1078,1299,1035,1331,941,1231,Q,941,1260,941,1288,941,1318,941,1347,941,1367,941,1387,L,894,1413,894,1479,957,1559,956,1667,1130,1667,1486,1788,Q,1485,1813,1486,1836,1495,1836,1500,1837,1505,1839,1507,1839,1514,1839,1518,1844,1524,1848,1524,1856,1524,1886,1524,1915,1524,1921,1524,1927,L,1592,1995,1629,1958,1822,1958,1857,2042,1939,2061,1962,2110,1878,2110,1852,2165,1755,2142,1754,2142,1742,2193,1858,2426,Q,1868,2423,1867,2433,1867,2442,1867,2451,1867,2475,1867,2499,2160,2537,2304,2571,L,2422,2611,2414,2887,2378,2935,2368,3116,2417,3123,2417,3177,2307,3196,2273,3305,2297,3369,2388,3470,Q,2423,3467,2463,3468,2472,3474,2479,3470,2487,3465,2487,3460,2488,3442,2495,3435,2499,3431,2508,3432,2532,3432,2554,3432,L,2560,3432,Q,2561,3437,2561,3440,2563,3454,2563,3469,2563,3473,2563,3477,2573,3470,2588,3466,2596,3463,2604,3463,2624,3464,2644,3463,2652,3463,2658,3461,2659,3469,2662,3471,2666,3475,2663,3480,2665,3491,2665,3499,2665,3507,2665,3516,2668,3510,2677,3509,2710,3507,2740,3507,2743,3507,2745,3506,2745,3483,2745,3461,L,2815,3305,2671,3122,2669,3076,2707,3076,2716,3021,2761,2999,2837,2999,2856,2964,Q,2818,2893,2756,2851,L,2836,2787,2923,2796,2976,2831,3032,2774,3157,2781,3172,2755,3120,2707,3102,2577,3315,2503,3532,2491,3559,2387,3559,2387,3483,2329,3407,2329,Q,3458,2264,3472,2191,L,3442,2109,3512,2109,3531,2079,Q,3531,2078,3531,2077,3531,2072,3531,2066,3531,2040,3530,2014,3525,2014,3520,2016,3510,2016,3499,2018,3495,2020,3468,2024,L,3593,1878,3608,1835,3267,1702,Q,3266,1702,3264,1702,Z]
                ], 
                label: "Frauenfeld", 
                shortLabel: "FF", 
                labelPosition: [263.5,222.9], 
                labelAlignment: [CEN,MID]
            },
            "CH.TG.WF": { 
                outlines: [
                    [M,5199,1460,L,5165,1566,5127,1566,5127,1720,4996,1672,4996,1726,4875,1682,4845,1744,4726,1744,4708,1778,4526,1791,4486,1734,4470,1644,4395,1644,4411,1473,4380,1391,3872,1391,Q,3879,1356,3885,1341,3891,1327,3894,1320,3897,1314,3900,1310,3903,1306,3906,1300,3910,1294,3923,1278,3935,1263,3943,1257,3951,1252,3952,1250,3953,1250,3954,1249,3955,1248,3958,1245,3961,1242,3958,1243,3956,1244,3953,1244,3951,1244,3949,1244,3937,1245,3933,1245,L,3932,1245,Q,3928,1245,3919,1245,3911,1245,3906,1248,3898,1248,3895,1252,3892,1255,3747,1258,3719,1256,3690,1259,3660,1262,3633,1258,3633,1287,3633,1316,3633,1345,3634,1374,3637,1379,3637,1383,3636,1389,3638,1391,3637,1397,3641,1398,3643,1402,3649,1401,L,3693,1420,Q,3693,1448,3693,1477,3693,1482,3691,1489,3590,1523,3517,1596,L,3565,1607,3485,1706,3505,1748,3572,1732,3622,1796,3593,1878,3484,2005,Q,3454,2029,3482,2022,3510,2016,3520,2016,3525,2014,3530,2014,3531,2040,3531,2066,3531,2072,3531,2077,3531,2078,3531,2079,L,3512,2109,3442,2109,3472,2191,Q,3458,2264,3407,2329,L,3483,2329,3559,2387,3560,2387,3660,2305,3697,2336,3762,2265,3849,2270,3805,2355,Q,3923,2369,4042,2355,L,4116,2287,4187,2364,4173,2420,4267,2506,Q,4267,2512,4267,2517,4267,2547,4267,2578,4251,2580,4231,2580,4228,2581,4230,2589,4231,2595,4231,2601,4231,2631,4231,2660,L,4355,2757,4357,2816,4432,2816,4392,2587,4536,2580,4620,2604,4620,2640,4685,2633,Q,4748,2587,4791,2540,L,4930,2525,4930,2523,5043,2438,5126,2538,5126,2461,5074,2396,Q,5070,2367,5070,2337,5070,2315,5072,2293,5104,2292,5134,2292,5163,2292,5192,2292,5215,2292,5237,2293,5239,2276,5239,2261,5239,2232,5237,2202,L,5331,2099,5380,2099,5453,2160,5572,2181,Q,5655,2147,5700,2113,L,5656,2050,5825,1974,5804,1959,5804,1881,5761,1888,5694,1795,5684,1687,5422,1676,5284,1602,5242,1471,Z]
                ], 
                label: "Weinfelden", 
                shortLabel: "WF", 
                labelPosition: [461.6,203], 
                labelAlignment: [CEN,MID]
            },
            "CH.TG.BZ": { 
                outlines: [
                    [M,5997,2001,Q,5996,1973,5996,1944,5996,1937,5996,1930,L,5935,1923,5925,1988,5887,1926,5832,1978,5825,1974,5656,2050,5700,2113,Q,5655,2147,5572,2181,L,5453,2160,5380,2099,5331,2099,5237,2202,Q,5239,2232,5239,2261,5239,2276,5237,2293,5215,2292,5192,2292,5163,2292,5134,2292,5104,2292,5072,2293,5070,2315,5070,2337,5070,2367,5074,2396,L,5126,2461,5126,2538,5043,2438,4930,2523,4929,2652,4939,2652,4939,2696,4950,2696,4943,2740,5021,2740,5015,2776,Q,4924,2818,4891,2914,L,4916,2952,4974,2899,5041,2899,5049,2927,Q,5049,2929,5050,2931,5067,3001,5144,3034,L,5179,2982,5190,3096,Q,5206,3068,5245,3051,L,5319,3108,5450,3122,5427,3162,5480,3250,Q,5495,3291,5493,3242,5548,3197,5601,3182,L,5785,3245,5873,3307,6010,3307,6127,3256,6134,3203,6199,3203,6344,3279,6538,3118,6538,3001,6525,2966,6443,3004,Q,6434,3000,6426,3000,L,6426,2869,6474,2869,6505,2824,6449,2824,6394,2760,Q,6363,2810,6230,2872,L,6080,2872,6036,2800,6084,2781,6135,2817,Q,6159,2714,6214,2660,L,6393,2597,6462,2632,6493,2529,6564,2529,6616,2576,6741,2576,6722,2490,6565,2403,6565,2353,6477,2346,6466,2169,6334,2194,6334,2193,6303,2136,6258,2134,6188,2071,6122,2057,Z]
                ], 
                label: "Bischofszell", 
                shortLabel: "BZ", 
                labelPosition: [559.2,266.3], 
                labelAlignment: [CEN,MID]
            },
            "CH.TG.MW": { 
                outlines: [
                    [M,4042,2355,Q,3923,2369,3805,2355,L,3849,2270,3762,2265,3697,2336,3660,2305,3560,2387,3559,2387,3532,2491,3315,2503,3102,2577,3120,2707,3172,2755,3157,2781,3032,2774,2976,2831,2923,2796,2836,2787,2756,2851,Q,2818,2893,2856,2964,L,2837,2999,2761,2999,2716,3021,2707,3076,2669,3076,2671,3122,2815,3305,2745,3461,Q,2745,3483,2745,3506,2743,3507,2740,3507,2710,3507,2677,3509,2668,3510,2665,3516,2665,3507,2665,3499,2665,3491,2663,3480,2666,3475,2662,3471,2659,3469,2658,3461,2652,3463,2644,3463,2624,3464,2604,3463,2596,3463,2588,3466,2573,3470,2563,3477,2563,3473,2563,3469,2563,3454,2561,3440,2561,3437,2560,3432,L,2554,3432,Q,2532,3432,2508,3432,2499,3431,2495,3435,2488,3442,2487,3460,2487,3465,2479,3470,2472,3474,2463,3468,2423,3467,2388,3470,L,2413,3547,2542,3666,2472,3729,Q,2500,3784,2546,3830,L,2547,3831,2755,3855,Q,2754,3857,2754,3860,2751,3863,2747,3870,2746,3872,2743,3878,2738,3882,2735,3889,2735,3892,2733,3893,2729,3895,2730,3900,2730,3905,2725,3906,2722,3905,2719,3905,2715,3904,2712,3904,2708,3903,2704,3903,2698,3903,2689,3901,2677,3899,2664,3900,2655,3900,2644,3897,2627,3897,2610,3897,2581,3897,2553,3897,L,2572,4132,2485,4307,2646,4343,Q,2647,4344,2647,4345,2735,4472,2875,4536,L,2852,4657,Q,2837,4706,2864,4660,2868,4658,2872,4655,2875,4652,2879,4651,2888,4644,2896,4641,2899,4640,2901,4638,2905,4635,2911,4632,2915,4628,2918,4625,2924,4622,2929,4618,2933,4616,2936,4614,2940,4613,2941,4612,2944,4611,2946,4610,2951,4607,2957,4602,2960,4600,2962,4598,2965,4594,2967,4592,2971,4588,2976,4588,2981,4587,3016,4562,3044,4563,3073,4563,3098,4563,3122,4563,L,3177,4346,3152,4261,3194,4186,3316,4198,3316,4198,3353,4045,3314,3929,3389,3907,3409,3870,3558,3870,3615,3779,3659,3779,3675,3833,3762,3828,3777,3815,Q,3900,3746,4025,3707,L,3918,3619,Q,3808,3598,3697,3547,3696,3547,3695,3546,3671,3467,3606,3416,L,3509,3363,3547,3305,Q,3523,3256,3474,3216,L,3526,3157,Q,3526,3131,3526,3104,L,3673,3125,3816,3011,3972,3139,4015,3086,4186,3031,Q,4261,3080,4297,3176,4298,3177,4298,3177,L,4513,3176,4569,3227,4629,3227,4629,3175,4959,3133,5010,3017,4969,2981,5036,2899,4974,2899,4916,2952,4891,2914,Q,4924,2818,5015,2776,L,5021,2740,4943,2740,4950,2696,4939,2696,4939,2652,4929,2652,4930,2525,4791,2540,Q,4748,2587,4685,2633,L,4620,2640,4620,2604,4536,2580,4392,2587,4432,2816,4357,2816,4355,2757,4231,2660,Q,4231,2631,4231,2601,4231,2595,4230,2589,4228,2581,4231,2580,4251,2580,4267,2578,4267,2547,4267,2517,4267,2512,4267,2506,L,4173,2420,4187,2364,4116,2287,Z]
                ], 
                label: "Münchwilen", 
                shortLabel: "MW", 
                labelPosition: [313.6,346.2], 
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