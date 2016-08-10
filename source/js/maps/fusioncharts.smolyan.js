/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Smolyan.18.08-13-2012 02:02:24
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-smolyan", function () {

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
        name: "Smolyan",
        revision: 18,
        
        standaloneInit: true,

        baseWidth: 641,
        baseHeight: 490,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "05": { 
                outlines: [
                    [M,746,1462,L,746,1412,684,1412,Q,673,1412,666,1426,658,1440,645,1439,551,1440,507,1439,479,1436,455,1463,454,1464,436,1466,420,1467,408,1483,395,1498,357,1494,295,1488,289,1488,283,1498,243,1547,241,1550,241,1609,241,1673,259,1688,277,1701,278,1727,278,1757,261,1764,241,1771,238,1785,237,1792,238,1805,229,1818,225,1844,220,1868,207,1881,195,1890,199,1921,195,1929,172,1954,170,1969,164,2002,149,2013,143,2020,140,2024,139,2026,L,139,2071,Q,176,2111,220,2140,243,2164,243,2240,L,243,2297,Q,239,2300,214,2309,198,2315,204,2327,167,2318,174,2356,151,2355,132,2372,114,2385,88,2379,79,2404,68,2412,60,2415,61,2434,60,2451,70,2459,81,2469,86,2492,89,2515,86,2563,89,2592,111,2613,120,2622,120,2680,120,2742,108,2751,83,2789,54,2800,L,54,2972,136,2972,Q,153,2972,174,2993,196,3014,209,3017,229,3019,312,3019,312,3067,380,3067,451,3067,455,3102,458,3134,507,3167,509,3171,509,3193,517,3209,532,3206,554,3231,563,3235,L,588,3235,588,3213,689,3213,688,3168,Q,687,3143,713,3147,712,3106,710,3086,709,3049,746,3060,737,3021,751,2993,774,2967,783,2952,788,2943,849,2943,876,2940,908,2918,922,2906,970,2822,984,2827,1024,2794,1043,2788,1051,2777,1058,2765,1078,2765,L,1078,2725,Q,1056,2686,1058,2597,1063,2494,1063,2451,1063,2385,1037,2388,1037,2313,1009,2301,L,1009,2227,Q,1033,2238,1037,2171,1037,2151,1068,2119,L,1068,2023,Q,1067,2018,1016,2018,966,2018,970,1989,L,857,1989,857,1855,Q,845,1856,830,1813,826,1802,810,1798,796,1794,796,1780,803,1735,803,1719,833,1719,833,1680,833,1652,830,1650,818,1646,800,1629,793,1623,793,1601,795,1580,783,1575,772,1532,768,1518,749,1505,749,1493,Q,749,1471,746,1462,Z]
                ], 
                label: "Dospat", 
                shortLabel: "DO", 
                labelPosition: [56.6,249.1], 
                labelAlignment: [CEN,MID]
            },
            "02": { 
                outlines: [
                    [M,1400,1338,Q,1396,1319,1381,1315,1366,1310,1364,1296,1361,1281,1343,1259,1346,1296,1339,1310,1333,1323,1316,1331,1298,1340,1289,1347,1251,1363,1247,1363,1238,1364,1216,1400,1212,1405,1185,1427,1164,1444,1162,1466,1156,1473,1132,1500,1118,1522,1082,1522,1049,1522,1045,1509,1041,1496,1007,1493,1001,1493,976,1468,L,920,1468,Q,906,1465,901,1455,896,1442,891,1439,848,1432,843,1431,826,1406,800,1412,L,746,1412,746,1462,Q,749,1471,749,1493,749,1505,768,1518,772,1532,783,1575,795,1580,793,1601,793,1623,800,1629,818,1646,830,1650,833,1652,833,1680,833,1719,803,1719,803,1735,796,1780,796,1794,810,1798,826,1802,830,1813,845,1856,857,1855,L,857,1989,970,1989,Q,966,2018,1016,2018,1067,2018,1068,2023,L,1068,2119,Q,1037,2151,1037,2171,1033,2238,1009,2227,L,1009,2301,Q,1037,2313,1037,2388,1063,2385,1063,2451,1063,2494,1058,2597,1056,2686,1078,2725,L,1103,2723,1103,2755,1120,2755,1120,2780,Q,1127,2782,1142,2783,1142,2788,1145,2788,L,1145,2822,1117,2822,1117,2890,1142,2890,1142,2910,1191,2909,Q,1218,2907,1208,2938,L,1270,2938,1270,3093,Q,1266,3124,1284,3161,1301,3195,1295,3226,L,1368,3226,Q,1374,3210,1374,3198,L,1420,3198,1420,3184,1464,3184,1464,3147,1566,3147,1575,3181,Q,1622,3164,1637,3218,L,1710,3218,1710,3189,1725,3189,1728,3129,Q,1697,3067,1664,3035,1634,3006,1603,2947,1583,2911,1566,2836,1564,2792,1558,2775,1538,2730,1538,2715,L,1541,2590,Q,1543,2563,1605,2504,1640,2469,1662,2427,L,1664,2315,Q,1664,2260,1654,2254,1655,2234,1622,2214,1616,2180,1605,2164,L,1592,2124,Q,1590,2120,1587,2114,1568,2081,1506,2004,1437,1917,1437,1902,1437,1883,1451,1876,1464,1869,1459,1810,1477,1786,1479,1776,L,1481,1726,Q,1481,1706,1468,1697,1454,1689,1453,1663,1447,1609,1439,1598,1425,1580,1422,1538,1421,1489,1413,1471,Q,1405,1364,1400,1338,Z]
                ], 
                label: "Borino", 
                shortLabel: "BO", 
                labelPosition: [133.7,224.2], 
                labelAlignment: [CEN,MID]
            },
            "04": { 
                outlines: [
                    [M,2050,137,Q,2020,127,2013,114,2014,96,2008,89,L,1971,87,1951,52,1928,42,Q,1917,68,1914,68,1911,67,1912,84,1883,80,1889,104,1891,117,1872,129,1870,133,1870,168,1868,169,1862,197,1861,199,1860,202,L,1860,270,Q,1862,279,1841,338,1829,367,1829,413,L,1829,491,Q,1827,521,1787,530,1777,547,1766,548,1751,550,1742,562,1692,567,1671,570,L,1631,570,Q,1619,593,1609,595,1550,588,1526,597,1504,625,1484,643,1458,681,1437,702,1380,733,1368,751,L,1329,804,1329,829,Q,1329,849,1309,860,L,1309,933,Q,1309,963,1292,973,1275,983,1275,1004,1275,1025,1285,1037,1296,1048,1301,1067,1302,1072,1303,1079,1309,1105,1312,1143,1318,1163,1321,1222,1322,1226,1328,1246,1329,1252,1343,1259,1361,1281,1364,1296,1366,1310,1381,1315,1396,1319,1400,1338,1405,1364,1413,1471,1421,1489,1422,1538,1425,1580,1439,1598,1447,1609,1453,1663,1454,1689,1468,1697,1481,1706,1481,1726,L,1479,1776,Q,1477,1786,1459,1810,1464,1869,1451,1876,1437,1883,1437,1902,1437,1917,1506,2004,1568,2081,1587,2114,1590,2120,1592,2124,L,1605,2164,Q,1616,2180,1622,2214,1655,2234,1654,2254,1664,2260,1664,2315,L,1662,2427,Q,1640,2469,1605,2504,1543,2563,1541,2590,L,1538,2715,Q,1538,2730,1558,2775,1564,2792,1566,2836,1583,2911,1603,2947,1634,3006,1664,3035,1697,3067,1728,3129,L,1781,3129,1781,3097,1855,3097,1855,3069,1931,3069,1931,3106,Q,1958,3097,1974,3111,1992,3130,2020,3129,2075,3125,2099,3159,L,2220,3159,2220,3094,Q,2223,3090,2238,3085,2250,3077,2249,3058,2247,3043,2276,3018,2302,2997,2288,2967,L,2313,2967,2313,2942,2347,2942,2347,2910,2375,2910,2375,2897,Q,2374,2895,2374,2894,2361,2868,2335,2864,2298,2864,2279,2863,2279,2838,2220,2838,2229,2798,2200,2779,2191,2772,2191,2748,2192,2721,2191,2713,2164,2714,2168,2679,2154,2665,2149,2634,2147,2623,2122,2596,2101,2571,2104,2540,L,1885,2540,Q,1885,2522,1878,2521,L,1878,2476,1893,2476,Q,1876,2434,1928,2447,L,1928,2410,Q,1938,2410,1962,2405,L,1962,2346,Q,1942,2346,1937,2343,L,1937,2314,Q,1912,2302,1903,2302,L,1903,2240,1925,2240,1925,2204,1947,2204,1947,2176,1962,2176,Q,1967,2188,1984,2206,2038,2202,2035,2233,L,2075,2233,Q,2064,2213,2089,2209,2102,2207,2131,2209,2131,2205,2137,2187,2169,2192,2185,2156,L,2250,2156,Q,2254,2173,2259,2179,L,2326,2179,2326,2156,2350,2156,2350,2105,Q,2372,2113,2377,2048,2403,2037,2406,1994,2405,1989,2406,1984,2409,1968,2424,1954,2435,1942,2456,1923,2494,1873,2533,1860,2579,1835,2668,1744,2676,1736,2714,1722,2720,1715,2720,1668,2742,1593,2742,1572,2776,1533,2781,1485,2801,1442,2794,1402,2787,1363,2780,1338,2785,1333,2758,1322,2731,1311,2725,1301,2733,1275,2718,1238,2698,1201,2695,1185,L,2695,1093,Q,2680,1084,2675,1076,2672,1072,2672,1010,2644,980,2639,960,2638,951,2638,893,L,2638,833,Q,2635,817,2649,806,2666,792,2666,791,2668,704,2670,671,2669,581,2675,562,2701,534,2702,525,L,2702,471,2641,471,Q,2609,438,2584,439,2521,441,2477,355,2441,331,2429,313,2412,265,2392,247,2367,201,2359,191,2351,180,2287,180,2221,180,2214,208,L,2121,208,Z]
                ], 
                label: "Devin", 
                shortLabel: "DE", 
                labelPosition: [203.5,126.5], 
                labelAlignment: [CEN,MID]
            },
            "03": { 
                outlines: [
                    [M,3593,388,L,3593,414,3531,414,3531,391,Q,3518,392,3475,341,3471,335,3379,331,3310,338,3280,331,3226,284,3218,284,3196,284,3181,297,3167,311,3164,312,L,2950,312,Q,2930,327,2923,331,2886,338,2849,366,2812,393,2787,408,2763,422,2720,471,L,2702,471,2702,525,Q,2701,534,2675,562,2669,581,2670,671,2668,704,2666,791,2666,792,2649,806,2635,817,2638,833,L,2638,893,Q,2638,951,2639,960,2644,980,2672,1010,2672,1072,2675,1076,2680,1084,2695,1093,L,2695,1185,Q,2698,1201,2718,1238,2733,1275,2725,1301,2731,1311,2758,1322,2785,1333,2780,1338,2828,1362,2870,1391,2893,1406,2948,1441,2956,1465,2980,1483,2992,1490,3002,1527,3017,1542,3022,1579,3031,1598,3039,1633,3042,1642,3052,1655,3061,1665,3062,1684,3062,1722,3091,1734,3097,1736,3121,1737,3133,1748,3145,1763,3151,1764,3172,1768,L,3197,1788,Q,3242,1793,3248,1808,3259,1831,3283,1859,3284,1871,3339,1955,3354,1978,3398,2065,3426,2096,3537,2080,L,3537,2176,3620,2176,Q,3627,2172,3643,2148,3651,2136,3679,2147,3683,2130,3700,2112,3717,2093,3723,2060,3723,2040,3722,2029,3722,2007,3741,1994,3751,1985,3755,1940,3762,1922,3846,1862,3902,1785,3902,1768,3901,1672,3898,1625,3893,1550,3944,1517,3961,1505,3984,1485,4006,1464,4008,1448,4008,1433,4020,1425,4032,1417,4033,1404,4033,1392,4055,1387,4057,1378,4059,1370,4060,1367,4060,1364,4063,1350,4063,1339,4092,1329,4092,1310,L,4092,1264,Q,4092,1201,4068,1204,4001,1209,3962,1196,3974,1113,3944,1118,L,3944,1098,3896,1098,Q,3896,1111,3893,1118,L,3829,1118,Q,3832,1083,3797,1081,L,3797,996,3831,996,Q,3819,967,3851,967,3881,967,3866,937,L,3888,937,3888,838,3916,835,Q,3898,790,3947,804,3935,784,3967,784,L,3967,770,3987,770,3987,745,Q,3956,748,3958,708,3960,665,3933,668,3942,622,3919,609,3907,601,3906,587,3906,571,3896,564,3881,552,3879,516,3861,497,3851,479,3835,454,3787,418,3737,380,3721,358,L,3670,358,3670,383,Z]
                ], 
                label: "Chepelare", 
                shortLabel: "CH", 
                labelPosition: [336.4,96.2], 
                labelAlignment: [CEN,MID]
            },
            "09": { 
                outlines: [
                    [M,4033,1404,Q,4032,1417,4020,1425,4008,1433,4008,1448,4006,1464,3984,1485,3961,1505,3944,1517,3893,1550,3898,1625,3901,1672,3902,1768,3902,1785,3846,1862,3762,1922,3755,1940,3751,1985,3741,1994,3722,2007,3722,2029,3723,2040,3723,2060,3717,2093,3700,2112,3683,2130,3679,2147,3651,2136,3643,2148,3627,2172,3620,2176,L,3537,2176,3537,2080,Q,3426,2096,3398,2065,3354,1978,3339,1955,3284,1871,3283,1859,3259,1831,3248,1808,3242,1793,3197,1788,L,3172,1768,Q,3151,1764,3145,1763,3133,1748,3121,1737,3097,1736,3091,1734,3062,1722,3062,1684,3061,1665,3052,1655,3042,1642,3039,1633,3031,1598,3022,1579,3017,1542,3002,1527,2992,1490,2980,1483,2956,1465,2948,1441,2893,1406,2870,1391,2828,1362,2780,1338,2787,1363,2794,1402,2801,1442,2781,1485,2776,1533,2742,1572,2742,1593,2720,1668,2720,1715,2714,1722,2676,1736,2668,1744,2579,1835,2533,1860,2494,1873,2456,1923,2435,1942,2424,1954,2409,1968,2406,1984,2405,1989,2406,1994,2403,2037,2377,2048,2372,2113,2350,2105,L,2350,2156,2326,2156,2326,2179,2259,2179,Q,2254,2173,2250,2156,L,2185,2156,Q,2169,2192,2137,2187,2131,2205,2131,2209,2102,2207,2089,2209,2064,2213,2075,2233,L,2035,2233,Q,2038,2202,1984,2206,1967,2188,1962,2176,L,1947,2176,1947,2204,1925,2204,1925,2240,1903,2240,1903,2302,Q,1912,2302,1937,2314,L,1937,2343,Q,1942,2346,1962,2346,L,1962,2405,Q,1938,2410,1928,2410,L,1928,2447,Q,1876,2434,1893,2476,L,1878,2476,1878,2521,Q,1885,2522,1885,2540,L,2104,2540,Q,2101,2571,2122,2596,2147,2623,2149,2634,2154,2665,2168,2679,2164,2714,2191,2713,2192,2721,2191,2748,2191,2772,2200,2779,2229,2798,2220,2838,2279,2838,2279,2863,2298,2864,2335,2864,2361,2868,2374,2894,L,2375,2893,2471,2893,Q,2471,2856,2550,2860,L,2550,2840,2596,2840,Q,2588,2855,2635,2885,2639,2888,2652,2909,2661,2925,2687,2925,2726,2924,2729,3040,L,2729,3072,Q,2734,3077,2763,3143,2769,3159,2776,3185,2800,3221,2800,3225,L,2800,3333,Q,2800,3379,2822,3423,2822,3473,2821,3493,2826,3501,2881,3547,L,2933,3598,Q,2950,3614,2948,3675,2956,3690,2958,3748,2958,3804,2972,3823,3021,3892,3079,3914,L,3079,3946,3098,3946,Q,3086,3922,3108,3921,3119,3919,3145,3921,3147,3919,3162,3905,3175,3892,3195,3892,3209,3891,3220,3877,3229,3864,3248,3867,3297,3870,3288,3832,L,3305,3832,3305,3968,Q,3331,3957,3343,3972,3357,3990,3373,3990,L,3467,3990,Q,3477,3990,3488,3992,L,3488,3968,Q,3502,3959,3508,3955,3519,3943,3522,3909,3563,3834,3564,3830,3585,3759,3601,3739,3613,3723,3635,3657,3652,3639,3668,3573,L,3680,3530,Q,3705,3507,3702,3493,3696,3463,3731,3407,3767,3353,3754,3313,3777,3323,3785,3306,3796,3284,3818,3284,3889,3284,3901,3271,3901,3234,3904,3219,3914,3207,3937,3197,3936,3135,3943,3114,3964,3081,3963,3072,3959,3056,3980,3047,3983,3045,3998,3025,4007,3010,4034,3013,4055,3015,4062,2993,4088,2990,4093,2981,4106,2957,4152,2963,L,4152,2942,4226,2942,Q,4225,2915,4308,2915,4351,2915,4408,2919,4438,2911,4430,2893,4428,2889,4455,2873,L,4455,2823,Q,4492,2823,4481,2794,4505,2805,4512,2784,4515,2756,4521,2747,4560,2725,4560,2700,4560,2684,4484,2594,L,4484,2563,4590,2563,4593,2546,4669,2546,Q,4696,2546,4702,2537,4707,2528,4725,2526,4701,2505,4701,2481,4701,2435,4698,2427,4661,2392,4662,2344,4669,2284,4669,2269,4643,2234,4647,2188,4650,2146,4615,2112,4568,2064,4563,2052,4544,2015,4529,1979,4426,1746,4398,1704,L,4383,1650,Q,4379,1679,4363,1711,4347,1742,4346,1769,4346,1797,4346,1848,4343,1855,4323,1868,L,4323,1905,4225,1906,Q,4232,1886,4214,1860,4193,1832,4196,1817,4198,1798,4183,1780,4168,1760,4168,1748,4171,1696,4038,1652,4036,1607,4035,1530,4034,1452,4048,1409,4052,1398,4055,1387,Q,4033,1392,4033,1404,Z]
                ], 
                label: "Smolyan", 
                shortLabel: "SM", 
                labelPosition: [330.1,266.5], 
                labelAlignment: [CEN,MID]
            },
            "08": { 
                outlines: [
                    [M,4093,2981,Q,4088,2990,4062,2993,4055,3015,4034,3013,4007,3010,3998,3025,3983,3045,3980,3047,3959,3056,3963,3072,3964,3081,3943,3114,3936,3135,3937,3197,3914,3207,3904,3219,3901,3234,3901,3271,3889,3284,3818,3284,3796,3284,3785,3306,3777,3323,3754,3313,3767,3353,3731,3407,3696,3463,3702,3493,3705,3507,3680,3530,L,3668,3573,Q,3652,3639,3635,3657,3613,3723,3601,3739,3585,3759,3564,3830,3563,3834,3522,3909,3519,3943,3508,3955,3502,3959,3488,3968,L,3488,3992,Q,3550,4002,3602,4076,3641,4115,3697,4173,3722,4193,3771,4252,3819,4301,3869,4289,3872,4302,3871,4339,3873,4370,3896,4382,3913,4390,3909,4425,3913,4432,3948,4456,3973,4472,4034,4498,4047,4506,4059,4535,4097,4552,4105,4552,L,4105,4584,4121,4584,Q,4106,4548,4134,4550,4175,4549,4187,4530,4189,4523,4250,4468,4250,4291,4247,4210,L,4247,4122,4300,4122,4300,4151,Q,4331,4153,4391,4154,4417,4153,4422,4165,4427,4176,4452,4176,L,4452,4202,4555,4202,4555,4179,4583,4179,4583,4151,Q,4602,4156,4605,4135,4603,4107,4605,4097,L,4668,4097,4668,4043,Q,4623,4026,4590,3994,4550,3951,4517,3919,L,4388,3801,Q,4357,3773,4334,3721,4310,3667,4288,3643,4271,3626,4243,3560,4218,3498,4218,3486,4218,3463,4231,3440,4247,3414,4251,3394,L,4251,3296,Q,4248,3185,4204,3134,4194,3069,4181,3058,4168,3046,4167,3011,4165,2982,4152,2981,L,4152,2963,Q,4106,2957,4093,2981,Z]
                ], 
                label: "Rudozem", 
                shortLabel: "RU", 
                labelPosition: [407.8,390.7], 
                labelAlignment: [CEN,MID]
            },
            "06": { 
                outlines: [
                    [M,5114,2463,L,5004,2463,Q,5004,2472,4975,2502,4953,2553,4908,2543,L,4908,2563,4794,2563,Q,4789,2554,4789,2543,L,4740,2543,Q,4736,2528,4725,2526,4707,2528,4702,2537,4696,2546,4669,2546,L,4593,2546,4590,2563,4484,2563,4484,2594,Q,4560,2684,4560,2700,4560,2725,4521,2747,4515,2756,4512,2784,4505,2805,4481,2794,4492,2823,4455,2823,L,4455,2873,Q,4428,2889,4430,2893,4438,2911,4408,2919,4351,2915,4308,2915,4225,2915,4226,2942,L,4152,2942,4152,2981,Q,4165,2982,4167,3011,4168,3046,4181,3058,4194,3069,4204,3134,4248,3185,4251,3296,L,4251,3394,Q,4247,3414,4231,3440,4218,3463,4218,3486,4218,3498,4243,3560,4271,3626,4288,3643,4310,3667,4334,3721,4357,3773,4388,3801,L,4517,3919,Q,4550,3951,4590,3994,4623,4026,4668,4043,L,4746,4043,Q,4769,4040,4783,4031,4796,4020,4819,4021,4859,4020,4888,3996,4894,3994,4927,3994,4959,3993,4979,3988,4999,3982,5040,3944,5081,3905,5142,3840,5162,3811,5242,3737,L,5238,3617,5275,3617,5275,3594,5323,3594,Q,5314,3573,5329,3569,5348,3564,5348,3543,5348,3521,5359,3513,5372,3504,5373,3493,5373,3419,5377,3410,5405,3374,5405,3355,5405,3339,5381,3302,5357,3264,5361,3231,5364,3199,5363,3179,L,5363,3176,Q,5362,3156,5358,3131,L,5358,3051,5442,3051,Q,5431,3032,5447,3030,5455,3028,5471,3026,5476,3019,5476,2976,5476,2939,5464,2930,5464,2893,5456,2888,5428,2838,5405,2822,L,5405,2780,5346,2780,5346,2797,5215,2797,Q,5215,2777,5218,2768,L,5218,2681,5198,2681,5198,2655,Q,5167,2663,5173,2608,5175,2594,5159,2586,5140,2578,5139,2573,5146,2522,5125,2517,5113,2514,5113,2494,Q,5115,2471,5114,2463,Z]
                ], 
                label: "Madan", 
                shortLabel: "MA", 
                labelPosition: [481.4,325.3], 
                labelAlignment: [CEN,MID]
            },
            "10": { 
                outlines: [
                    [M,5533,3865,L,5452,3865,Q,5415,3809,5376,3789,5365,3784,5344,3744,5329,3715,5302,3727,5302,3710,5300,3705,L,5243,3705,5242,3737,Q,5162,3811,5142,3840,5081,3905,5040,3944,4999,3982,4979,3988,4959,3993,4927,3994,4894,3994,4888,3996,4859,4020,4819,4021,4796,4020,4783,4031,4769,4040,4746,4043,L,4750,4043,4750,4082,4772,4082,4772,4122,4801,4122,Q,4805,4151,4824,4168,4843,4185,4849,4209,4855,4233,4892,4250,L,4989,4250,Q,5013,4256,5032,4267,5051,4278,5068,4277,5090,4277,5139,4306,5189,4336,5226,4336,5251,4338,5265,4356,5303,4356,5310,4360,5371,4388,5385,4388,5431,4385,5472,4396,5517,4407,5565,4407,5584,4447,5618,4531,5627,4545,5648,4588,5671,4624,5694,4625,5714,4624,5734,4621,5747,4622,5759,4660,L,5842,4660,5842,4628,5893,4628,5893,4593,5925,4593,Q,5940,4601,5950,4660,5955,4692,5960,4736,5968,4739,5992,4739,L,5992,4772,Q,6018,4767,6046,4781,6061,4789,6084,4803,6092,4806,6138,4806,6155,4814,6161,4827,6165,4835,6179,4835,L,6217,4835,Q,6226,4839,6254,4861,L,6261,4861,6261,4842,Q,6293,4852,6281,4800,6307,4797,6313,4785,L,6313,4755,Q,6313,4726,6305,4722,6282,4711,6264,4686,6221,4648,6200,4623,6147,4576,6129,4557,6097,4528,6097,4482,L,6097,4446,Q,6126,4426,6126,4421,6124,4393,6125,4380,6125,4357,6143,4364,L,6143,4342,Q,6131,4309,6104,4293,6101,4272,6092,4265,6072,4253,6072,4244,6072,4218,6122,4154,6166,4094,6177,4089,6202,4073,6225,4022,6260,3989,6266,3980,6271,3972,6270,3954,L,6219,3954,Q,6215,3968,6188,3968,6157,3965,6148,3967,6126,3984,6117,3990,6106,3996,6080,3996,6071,3995,6033,3957,6002,3927,5993,3914,5988,3907,5983,3907,5976,3907,5930,3951,5877,4002,5868,4038,L,5840,4038,5838,4023,Q,5830,4022,5671,4018,5684,3982,5642,3976,5639,3959,5627,3947,5615,3936,5614,3925,5609,3874,5585,3880,5586,3843,5585,3836,5584,3828,5561,3829,5536,3828,5535,3831,Q,5531,3835,5533,3865,Z]
                ], 
                label: "Zlatograd", 
                shortLabel: "ZL", 
                labelPosition: [552.9,414.9], 
                labelAlignment: [CEN,MID]
            },
            "07": { 
                outlines: [
                    [M,6072,3272,Q,6063,3264,6018,3265,5971,3265,5963,3261,5940,3230,5929,3222,5923,3218,5894,3193,5843,3147,5833,3119,L,5789,3119,Q,5769,3153,5727,3180,5671,3212,5664,3233,L,5631,3233,Q,5628,3252,5594,3275,L,5567,3275,Q,5563,3253,5533,3234,5497,3215,5484,3204,5460,3182,5425,3180,5385,3181,5363,3179,5364,3199,5361,3231,5357,3264,5381,3302,5405,3339,5405,3355,5405,3374,5377,3410,5373,3419,5373,3493,5372,3504,5359,3513,5348,3521,5348,3543,5348,3564,5329,3569,5314,3573,5323,3594,L,5275,3594,5275,3617,5238,3617,5243,3705,5300,3705,Q,5302,3710,5302,3727,5329,3715,5344,3744,5365,3784,5376,3789,5415,3809,5452,3865,L,5533,3865,Q,5531,3835,5535,3831,5536,3828,5561,3829,5584,3828,5585,3836,5586,3843,5585,3880,5609,3874,5614,3925,5615,3936,5627,3947,5639,3959,5642,3976,5684,3982,5671,4018,5830,4022,5838,4023,L,5840,4038,5868,4038,Q,5877,4002,5930,3951,5976,3907,5983,3907,5988,3907,5993,3914,6002,3927,6033,3957,6071,3995,6080,3996,6106,3996,6117,3990,6126,3984,6148,3967,6157,3965,6188,3968,6215,3968,6219,3954,L,6269,3954,6269,3948,Q,6267,3924,6290,3881,6313,3838,6321,3813,6348,3772,6355,3744,L,6355,3661,Q,6355,3571,6352,3564,6346,3548,6279,3481,6185,3388,6140,3338,Q,6124,3321,6072,3272,Z]
                ], 
                label: "Nedelino", 
                shortLabel: "NE", 
                labelPosition: [579.6,357.8], 
                labelAlignment: [CEN,MID]
            },
            "01": { 
                outlines: [
                    [M,5237,768,Q,5219,762,5198,747,5178,731,5154,729,L,5154,700,5134,700,Q,5126,734,5098,744,5071,753,5035,789,4999,825,4968,852,4937,879,4848,963,L,4848,1229,Q,4868,1236,4890,1275,4930,1275,4934,1285,4947,1318,4956,1317,L,4956,1342,4914,1351,Q,4894,1368,4880,1376,4834,1419,4804,1416,L,4804,1443,4730,1443,4730,1423,Q,4693,1423,4673,1421,L,4673,1396,4617,1396,4617,1362,Q,4585,1356,4575,1356,L,4572,1331,4555,1331,4555,1344,4538,1344,Q,4547,1371,4513,1371,4515,1392,4487,1443,4476,1459,4459,1463,L,4459,1513,Q,4459,1572,4484,1585,L,4484,1650,4383,1650,4398,1704,Q,4426,1746,4529,1979,4544,2015,4563,2052,4568,2064,4615,2112,4650,2146,4647,2188,4643,2234,4669,2269,4669,2284,4662,2344,4661,2392,4698,2427,4701,2435,4701,2481,4701,2505,4725,2526,4736,2528,4740,2543,L,4789,2543,Q,4789,2554,4794,2563,L,4908,2563,4908,2543,Q,4953,2553,4975,2502,5004,2472,5004,2463,L,5114,2463,Q,5115,2471,5113,2494,5113,2514,5125,2517,5146,2522,5139,2573,5140,2578,5159,2586,5175,2594,5173,2608,5167,2663,5198,2655,L,5198,2681,5218,2681,5218,2768,Q,5215,2777,5215,2797,L,5346,2797,5346,2780,5538,2780,Q,5547,2759,5563,2756,5580,2753,5597,2721,5621,2705,5665,2659,5684,2642,5736,2600,5744,2590,5777,2581,5801,2573,5801,2551,5801,2543,5802,2540,5774,2530,5771,2506,5769,2477,5764,2469,5744,2444,5744,2443,5744,2439,5729,2419,5726,2416,5724,2413,5723,2392,5723,2380,5722,2355,5735,2346,5752,2331,5750,2317,5773,2309,5781,2294,5784,2289,5784,2252,5801,2230,5801,2221,L,5801,2134,Q,5801,2048,5794,2038,5767,2010,5722,1964,5669,1911,5668,1896,5660,1793,5659,1789,5655,1721,5641,1706,5628,1690,5621,1669,5615,1648,5594,1622,5586,1606,5518,1475,L,5515,1458,Q,5511,1288,5511,1202,5511,1173,5538,1177,5529,1155,5548,1144,L,5585,1123,Q,5596,1113,5619,1096,5635,1079,5629,1056,L,5644,1056,5644,1037,Q,5629,1035,5597,1012,5567,990,5529,993,L,5379,993,Q,5377,962,5362,941,5347,919,5354,879,5362,838,5309,806,Q,5255,774,5237,768,Z]
                ], 
                label: "Banite", 
                shortLabel: "BA", 
                labelPosition: [509.2,191.6], 
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