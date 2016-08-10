/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.VermontAreaCode.18.08-16-2012 12:18:36
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-vermontareacode", function () {

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
        name: "VermontAreaCode",
        revision: 18,
        
        standaloneInit: true,

        baseWidth: 300,
        baseHeight: 480,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "802": { 
                outlines: [
                    [M,2053,89,Q,2042,93,2028,93,2027,94,2026,94,1978,95,1931,95,1905,95,1878,94,1875,94,1871,93,1870,93,1868,93,1856,92,1843,92,1815,92,1788,95,1760,98,1731,98,1682,97,1633,97,1610,97,1588,96,1585,96,1583,96,1535,95,1488,95,1439,95,1390,95,1378,95,1365,94,1359,94,1357,91,1355,89,1353,87,1347,82,1344,75,1343,74,1340,73,1330,73,1320,74,1311,75,1303,75,1284,75,1265,76,1258,76,1250,76,1203,77,1155,77,1140,77,1125,76,1124,76,1123,74,1120,67,1113,62,1107,57,1097,61,1094,62,1090,62,1043,62,995,62,948,62,900,62,885,62,870,63,866,63,867,70,868,80,858,78,847,77,835,77,787,77,738,77,689,77,640,77,633,77,625,77,606,77,588,79,580,80,573,80,524,80,475,80,428,80,380,80,333,80,285,80,250,80,215,82,L,215,85,Q,215,116,218,147,218,149,219,150,222,154,230,156,237,158,237,162,238,190,238,217,238,221,237,225,235,235,233,245,231,255,226,260,224,262,223,265,214,278,205,292,198,304,197,315,197,316,196,317,195,325,196,332,197,338,194,339,193,340,193,342,193,361,185,372,174,388,177,410,178,417,179,425,180,431,185,433,187,434,188,434,201,443,211,452,215,456,220,456,222,456,226,481,229,503,233,500,233,491,237,482,237,493,234,498,233,499,233,500,232,509,230,517,229,520,228,522,226,532,224,542,223,547,222,552,222,556,221,560,220,572,219,585,219,586,219,587,218,594,219,600,220,608,216,610,210,614,207,616,205,617,203,618,202,619,200,619,188,628,189,642,190,655,190,667,190,716,190,765,190,785,188,805,188,809,185,812,177,819,170,829,166,835,161,845,160,847,160,850,159,883,163,915,164,919,166,922,170,931,177,938,178,940,178,942,178,949,177,955,178,956,177,957,180,961,179,967,179,971,181,974,186,984,193,987,208,995,211,1010,212,1011,213,1012,220,1020,226,1032,228,1036,232,1041,233,1042,233,1045,236,1052,242,1063,247,1072,253,1080,269,1100,277,1119,279,1125,283,1130,284,1131,284,1132,284,1144,289,1151,290,1152,290,1155,290,1197,291,1240,292,1244,293,1247,297,1259,296,1272,295,1285,294,1297,294,1302,290,1305,283,1311,280,1322,279,1327,276,1333,270,1342,266,1348,263,1354,261,1358,257,1367,250,1372,245,1375,241,1378,239,1380,237,1382,235,1384,232,1389,232,1391,231,1392,229,1406,233,1417,235,1430,242,1436,244,1439,246,1442,249,1447,252,1453,255,1458,257,1461,258,1463,258,1465,259,1515,262,1563,263,1580,262,1598,262,1609,255,1617,243,1631,232,1645,226,1652,220,1660,216,1667,211,1676,209,1679,208,1683,204,1692,198,1701,190,1712,184,1721,177,1729,172,1735,170,1738,169,1741,166,1748,161,1753,159,1755,158,1758,155,1763,149,1771,148,1773,148,1775,150,1782,146,1785,145,1785,146,1788,147,1793,145,1795,143,1797,143,1800,144,1810,141,1816,140,1818,140,1820,139,1824,136,1831,135,1834,135,1838,134,1840,133,1843,132,1848,129,1852,126,1859,126,1868,127,1870,125,1873,123,1878,122,1885,122,1888,121,1890,120,1914,121,1938,121,1948,117,1952,115,1954,113,1956,106,1961,98,1968,97,1969,95,1970,90,1975,87,1983,85,1988,84,1993,84,1995,83,1998,77,2016,84,2035,84,2037,84,2038,85,2042,90,2042,95,2049,98,2058,99,2060,101,2063,102,2064,103,2065,106,2070,111,2070,109,2080,112,2086,113,2088,113,2090,111,2108,116,2120,120,2132,132,2143,134,2145,135,2148,139,2155,140,2165,141,2178,142,2190,143,2204,143,2218,143,2265,142,2313,141,2326,145,2338,147,2346,149,2351,150,2353,150,2355,150,2361,154,2366,155,2368,156,2370,157,2372,158,2373,163,2380,166,2390,167,2392,168,2393,171,2398,171,2408,170,2439,169,2470,169,2473,169,2475,168,2482,161,2487,160,2488,159,2490,156,2498,154,2506,153,2508,153,2510,155,2525,168,2533,172,2536,174,2540,175,2542,178,2542,185,2545,186,2555,187,2558,188,2560,194,2568,202,2579,203,2580,203,2583,207,2605,206,2630,206,2638,199,2642,197,2643,196,2645,194,2658,190,2670,189,2673,188,2675,186,2681,184,2688,182,2700,176,2708,167,2722,156,2733,154,2735,152,2737,147,2745,142,2755,139,2763,133,2771,130,2775,127,2779,125,2805,124,2833,124,2834,123,2836,120,2844,118,2853,117,2858,115,2863,112,2871,109,2876,108,2878,108,2880,106,2902,114,2921,115,2923,115,2925,116,2941,112,2955,112,2957,111,2958,107,2969,108,2983,108,2987,108,2990,109,2993,110,2995,112,3005,119,3009,120,3010,120,3013,121,3017,125,3020,129,3023,135,3026,137,3027,138,3027,145,3027,148,3023,154,3018,159,3014,162,3010,162,3000,162,2998,163,2995,168,2983,167,2968,166,2960,169,2957,170,2955,171,2953,172,2946,172,2940,173,2931,174,2923,174,2920,176,2918,182,2911,184,2903,184,2902,186,2901,194,2896,205,2897,213,2898,220,2899,223,2899,225,2900,229,2901,232,2901,238,2901,243,2901,258,2901,272,2903,274,2903,276,2905,278,2907,279,2909,280,2910,280,2913,281,2925,284,2936,285,2940,285,2945,285,2959,297,2969,300,2972,302,2976,304,2983,307,2986,316,2993,326,3002,328,3004,329,3006,330,3008,331,3009,333,3012,334,3013,339,3019,343,3022,345,3023,347,3024,358,3030,360,3040,362,3055,368,3068,372,3077,371,3088,370,3136,370,3185,370,3234,371,3283,371,3300,368,3313,362,3329,364,3348,365,3355,362,3361,360,3364,360,3368,359,3386,362,3403,363,3408,363,3413,364,3423,365,3433,365,3434,365,3436,364,3437,363,3439,350,3464,350,3493,350,3541,350,3588,350,3637,350,3686,350,3732,350,3778,350,3822,350,3866,L,348,3866,Q,347,3878,344,3891,341,3907,342,3926,343,3951,342,3976,341,3991,344,4006,345,4012,345,4018,345,4062,344,4106,344,4108,344,4111,341,4133,341,4156,340,4199,339,4243,339,4246,337,4248,335,4252,334,4258,334,4261,333,4263,332,4268,329,4273,327,4279,327,4286,327,4287,326,4289,322,4295,322,4306,323,4354,323,4403,323,4442,322,4481,322,4483,321,4486,315,4501,312,4518,312,4521,310,4523,305,4533,305,4548,305,4552,305,4556,303,4601,304,4646,304,4653,307,4659,308,4661,308,4663,307,4675,315,4683,322,4690,332,4694,334,4695,335,4695,359,4698,383,4698,431,4698,480,4699,488,4700,495,4700,542,4704,590,4705,599,4706,608,4707,614,4708,620,4708,668,4708,715,4708,763,4708,811,4709,820,4710,828,4712,848,4717,868,4717,887,4716,906,4717,927,4718,948,4718,972,4718,995,4718,L,995,4716,Q,998,4716,1001,4716,1047,4716,1093,4716,1140,4716,1188,4716,1236,4716,1285,4716,1289,4716,1293,4717,1305,4720,1320,4720,1323,4720,1325,4720,1339,4721,1353,4721,1361,4721,1370,4722,1373,4722,1375,4722,1387,4723,1398,4724,1406,4724,1409,4727,1411,4728,1413,4729,1425,4735,1441,4734,1467,4733,1493,4733,1502,4733,1511,4732,1512,4732,1513,4730,1517,4719,1515,4706,1514,4701,1512,4700,1511,4698,1510,4696,1510,4695,1509,4693,1508,4688,1507,4683,1507,4682,1507,4681,1505,4671,1498,4667,1496,4666,1494,4665,1492,4665,1491,4664,1481,4663,1471,4663,1460,4662,1453,4668,1453,4646,1452,4623,1452,4622,1451,4621,1438,4609,1423,4600,1422,4600,1421,4598,1416,4591,1412,4585,1411,4583,1410,4581,1410,4580,1409,4578,1406,4573,1405,4566,1405,4558,1402,4550,1401,4548,1400,4546,1399,4543,1398,4541,1396,4533,1393,4523,1386,4493,1379,4463,1378,4458,1377,4453,1377,4451,1376,4448,1375,4440,1384,4436,1387,4435,1388,4431,1392,4423,1396,4417,1398,4415,1400,4413,1411,4405,1416,4394,1419,4389,1423,4387,1425,4386,1425,4383,1430,4367,1429,4348,1428,4314,1428,4281,1429,4278,1430,4276,1433,4268,1438,4263,1440,4262,1441,4261,1450,4256,1461,4257,1482,4258,1499,4247,1503,4245,1508,4244,1524,4241,1524,4228,1523,4204,1527,4181,1527,4180,1531,4179,1535,4178,1538,4177,1546,4175,1544,4166,1543,4160,1542,4153,1542,4152,1541,4150,1537,4141,1528,4134,1526,4132,1524,4130,1517,4123,1518,4108,1518,4086,1521,4063,1521,4062,1523,4060,1537,4049,1554,4036,1559,4032,1560,4023,1561,4012,1562,4001,1562,3989,1557,3982,1556,3980,1554,3977,1553,3976,1553,3973,1554,3961,1559,3950,1561,3947,1561,3943,1561,3934,1560,3926,1560,3920,1554,3917,1552,3916,1550,3914,1542,3906,1532,3895,1531,3893,1531,3891,1530,3877,1532,3866,1533,3860,1533,3853,1533,3852,1533,3850,1533,3847,1531,3843,1531,3824,1532,3806,1532,3803,1534,3802,1543,3795,1553,3783,1555,3782,1556,3781,1563,3775,1562,3761,1561,3748,1561,3736,1561,3691,1563,3646,L,1566,3645,Q,1573,3644,1581,3642,1583,3642,1586,3641,1592,3640,1596,3636,1602,3629,1602,3618,1602,3616,1602,3613,1603,3602,1604,3591,1604,3582,1607,3575,1608,3572,1609,3568,1611,3561,1612,3553,1614,3540,1610,3529,1607,3521,1603,3516,1601,3515,1599,3513,1593,3508,1594,3501,1595,3489,1598,3481,1601,3470,1616,3472,1617,3472,1618,3471,1627,3463,1620,3451,1618,3448,1615,3446,1605,3438,1597,3427,1596,3426,1595,3423,1595,3420,1594,3416,1593,3405,1595,3396,1597,3390,1602,3387,1603,3386,1604,3383,1608,3372,1607,3358,1607,3356,1608,3353,1612,3341,1610,3326,1609,3314,1613,3305,1616,3296,1617,3286,1617,3283,1618,3281,1620,3269,1628,3261,1638,3250,1639,3236,1640,3232,1640,3228,1642,3218,1639,3213,1638,3211,1638,3208,1638,3195,1638,3181,L,1633,3180,Q,1629,3171,1623,3160,1616,3150,1609,3145,1605,3142,1605,3135,1604,3121,1608,3113,1610,3107,1617,3103,1618,3103,1619,3100,1620,3094,1624,3091,1631,3084,1630,3070,1630,3067,1630,3063,1631,3049,1630,3035,1629,3030,1632,3028,1633,3028,1633,3025,1635,3011,1640,3002,1641,3000,1641,2998,1641,2991,1648,2989,1650,2989,1651,2989,1661,2987,1671,2984,1673,2983,1675,2982,1678,2979,1682,2976,1683,2975,1685,2974,1691,2971,1693,2966,1693,2964,1695,2962,1701,2957,1706,2954,1711,2951,1712,2943,1712,2938,1713,2933,1715,2918,1715,2903,1715,2892,1717,2882,1720,2872,1728,2865,1730,2864,1731,2863,1735,2861,1735,2853,1735,2849,1737,2846,1746,2830,1758,2815,1761,2810,1761,2803,1761,2770,1762,2738,1762,2730,1765,2727,1772,2720,1778,2715,1782,2711,1784,2709,1787,2706,1790,2703,1790,2701,1790,2700,1793,2687,1806,2682,1818,2677,1831,2668,1842,2660,1851,2655,1852,2654,1853,2652,1855,2646,1862,2643,1863,2643,1863,2640,1863,2627,1867,2620,1872,2613,1877,2606,1878,2605,1881,2605,1900,2606,1905,2595,1906,2593,1906,2591,L,1903,2590,Q,1903,2588,1903,2585,1903,2574,1904,2563,1905,2562,1905,2560,1909,2551,1919,2543,1921,2542,1923,2540,1937,2534,1934,2518,1933,2512,1933,2505,1933,2460,1936,2415,1936,2413,1938,2410,1948,2401,1956,2390,1957,2389,1958,2387,1961,2379,1962,2370,1964,2360,1971,2353,1978,2346,1985,2342,1987,2342,1988,2340,1997,2334,2006,2326,2011,2322,2017,2318,2018,2318,2019,2315,2021,2309,2024,2303,2030,2293,2029,2280,2028,2268,2027,2255,2027,2250,2031,2250,2038,2250,2043,2249,2057,2246,2058,2235,2058,2226,2056,2218,2056,2217,2053,2216,2047,2215,2041,2213,2040,2213,2038,2210,2035,2202,2034,2190,2033,2165,2033,2140,2033,2135,2034,2130,2036,2121,2043,2120,2048,2119,2053,2119,2060,2118,2062,2110,2062,2107,2063,2103,2063,2099,2064,2095,2065,2087,2076,2087,2086,2088,2084,2075,2081,2049,2098,2039,2099,2038,2100,2037,2109,2025,2123,2017,2130,2013,2134,2008,2137,2004,2136,1995,2133,1980,2141,1976,2143,1975,2145,1974,2149,1972,2149,1965,2148,1958,2146,1951,2146,1950,2143,1950,2141,1949,2138,1948,2135,1947,2131,1945,2130,1944,2128,1943,2124,1940,2125,1930,2126,1917,2125,1903,2125,1896,2127,1892,2128,1890,2129,1888,2130,1887,2131,1886,2133,1885,2135,1884,2137,1883,2139,1882,2142,1880,2145,1879,2153,1877,2152,1868,2151,1862,2151,1855,2151,1845,2149,1836,2148,1834,2146,1833,2141,1830,2139,1826,2138,1825,2136,1825,2135,1824,2133,1823,2129,1816,2122,1809,2121,1808,2120,1805,2120,1803,2119,1800,2119,1788,2115,1778,2113,1773,2109,1771,2107,1770,2107,1768,2106,1754,2106,1740,2106,1733,2107,1725,2107,1724,2107,1723,2108,1716,2112,1713,2113,1713,2114,1711,2115,1709,2115,1708,2128,1689,2126,1663,2126,1660,2125,1658,2123,1652,2121,1643,2120,1638,2118,1633,2114,1620,2113,1605,L,2108,1605,Q,2109,1593,2104,1582,2103,1580,2103,1578,2103,1567,2106,1558,2108,1549,2118,1547,2120,1547,2121,1546,2133,1539,2140,1530,2147,1522,2152,1515,2156,1510,2156,1503,2156,1495,2158,1488,2158,1487,2161,1485,2170,1482,2183,1483,2197,1484,2204,1473,2209,1465,2218,1460,2225,1457,2227,1451,2228,1449,2231,1449,2254,1448,2278,1448,2291,1448,2303,1445,2306,1444,2308,1440,2311,1434,2318,1434,2333,1435,2348,1436,2355,1436,2361,1437,2368,1438,2376,1438,2386,1439,2394,1442,2396,1443,2398,1443,2413,1442,2425,1437,2427,1437,2428,1436,2435,1431,2448,1431,2450,1432,2451,1431,2472,1421,2469,1390,2469,1382,2470,1375,2471,1364,2470,1353,2470,1340,2478,1332,2480,1330,2481,1328,2496,1311,2518,1310,2553,1308,2586,1315,2600,1318,2602,1308,2603,1307,2604,1306,2620,1300,2630,1291,2631,1290,2634,1290,2647,1290,2654,1283,2655,1282,2655,1280,2656,1274,2660,1271,2661,1270,2662,1268,2664,1263,2668,1262,2673,1260,2676,1258,2683,1255,2685,1248,2685,1247,2686,1246,2697,1240,2695,1225,2694,1220,2694,1215,2693,1198,2705,1189,2708,1188,2708,1185,2709,1180,2710,1176,2711,1173,2714,1171,2719,1169,2723,1167,2730,1164,2737,1161,2747,1157,2754,1153,2755,1152,2755,1152,2762,1151,2767,1148,2769,1147,2771,1145,2776,1141,2783,1136,2790,1131,2797,1126,2798,1125,2799,1123,2801,1121,2803,1119,2810,1112,2806,1098,2806,1095,2804,1092,2801,1087,2797,1084,2796,1082,2796,1080,2797,1066,2806,1062,2815,1058,2816,1050,2817,1047,2817,1045,2818,1036,2818,1027,2818,1023,2813,1020,2810,1019,2807,1016,2806,1015,2803,1014,2799,1013,2798,1007,2795,985,2813,983,2820,983,2824,981,2826,980,2828,980,2841,980,2853,979,2855,979,2855,977,2859,970,2862,966,2867,962,2866,952,2866,935,2864,918,2863,915,2861,912,2858,909,2855,906,2853,905,2851,904,2839,903,2845,892,2846,889,2850,886,2851,885,2851,882,2855,871,2852,857,2852,855,2850,852,2844,843,2840,835,2838,831,2837,827,2834,821,2833,815,2831,806,2821,805,2811,805,2808,800,2803,790,2802,777,2802,774,2802,770,2801,761,2800,752,2799,746,2796,740,2786,724,2777,710,2774,706,2774,700,2775,699,2774,697,2772,691,2771,685,2770,681,2769,679,L,2766,682,Q,2764,681,2763,679,2761,677,2759,674,2754,668,2752,664,2749,660,2747,657,2739,648,2740,635,2741,622,2743,610,2743,606,2745,602,2746,600,2747,598,2749,591,2752,588,2753,587,2754,585,2756,582,2761,581,2763,581,2765,579,2767,577,2769,576,2771,575,2772,574,2775,572,2776,570,2778,569,2781,567,2793,560,2800,552,2808,543,2820,531,2821,530,2821,527,2824,514,2827,502,2828,499,2828,495,2828,477,2829,460,2844,455,2850,444,2851,442,2851,440,2849,416,2853,395,2855,385,2863,382,2865,381,2865,380,2870,370,2883,362,2886,361,2888,359,2890,359,2891,358,2895,358,2895,352,2896,350,2899,348,2911,340,2915,329,2916,327,2917,325,2919,319,2921,312,2923,310,2923,307,2925,301,2928,294,2930,290,2933,286,2934,285,2934,282,2934,271,2932,260,2931,259,2929,257,2925,252,2921,247,2920,246,2919,245,2913,242,2911,235,2910,234,2909,232,2906,230,2907,227,2907,225,2909,222,2909,197,2908,172,2908,171,2906,170,2893,163,2884,149,2882,147,2880,146,2877,143,2877,135,2877,134,2877,132,2872,115,2886,111,2887,111,2888,110,2897,100,2909,94,2916,90,2917,77,2917,70,2909,71,2908,71,2906,71,2857,70,2808,70,2759,70,2711,70,2662,70,2613,70,2564,70,2516,70,2497,70,2478,71,2477,71,2476,71,2463,72,2451,72,2439,72,2428,74,2417,77,2406,77,2388,77,2371,79,2368,80,2365,81,2362,82,2358,82,2309,82,2261,82,2212,82,2163,82,2130,82,2096,83,2093,84,2091,84,2078,85,2066,86,Q,2059,86,2053,89,Z]
                ], 
                label: "802", 
                shortLabel: "802", 
                labelPosition: [126.6,84.4], 
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