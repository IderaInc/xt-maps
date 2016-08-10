/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.NorthernHungary.18.08-10-2012 12:01:16
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-northernhungary", function () {

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
        name: "NorthernHungary",
        revision: 18,
        
        standaloneInit: true,

        baseWidth: 510,
        baseHeight: 285,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "01": { 
                outlines: [
                    [M,3625,172,Q,3591,197,3554,219,3516,241,3472,253,3440,260,3435,241,3433,238,3429,237,3407,230,3392,222,3384,209,3360,206,3358,206,3354,205,3349,203,3346,200,3328,183,3305,165,3296,158,3279,161,3276,162,3272,164,3267,166,3260,167,3230,172,3197,171,3156,169,3157,128,3157,124,3152,123,3088,101,3033,85,3027,84,3022,82,2997,69,2964,71,2958,71,2954,74,2914,99,2851,97,2806,96,2767,108,2738,118,2710,136,2671,159,2628,172,2602,178,2575,183,2546,187,2531,211,2517,232,2505,254,2476,308,2446,361,2445,364,2442,367,2438,371,2435,373,2415,396,2397,417,2395,420,2390,423,2370,435,2365,468,2363,493,2369,516,2371,528,2360,550,2356,556,2352,561,2329,581,2316,606,2289,652,2264,706,2246,747,2227,776,2203,812,2164,835,2162,837,2157,838,2132,846,2130,827,2130,823,2129,820,2124,798,2109,793,2104,792,2102,792,2072,799,2043,804,1963,823,1913,883,1868,935,1842,976,1820,1008,1800,1023,1784,1034,1764,1043,1779,1047,1773,1078,1783,1105,1813,1122,1819,1119,1830,1116,1843,1111,1850,1107,1855,1105,1861,1105,1901,1109,1937,1135,1972,1161,2000,1193,2016,1212,2034,1225,2057,1243,2076,1230,2114,1205,2139,1161,2158,1180,2177,1197,2202,1217,2230,1225,2255,1233,2283,1227,2286,1227,2289,1223,2300,1203,2305,1179,2309,1161,2311,1142,2312,1136,2316,1131,2321,1123,2334,1123,2400,1121,2453,1156,2456,1158,2460,1161,2473,1176,2470,1205,2469,1228,2456,1240,2453,1243,2455,1248,2461,1264,2478,1270,2482,1271,2484,1274,2506,1290,2492,1313,2481,1331,2471,1350,2470,1353,2468,1356,2463,1363,2464,1368,2472,1401,2486,1431,2488,1438,2487,1444,2482,1469,2466,1489,2451,1508,2428,1520,2425,1523,2422,1526,2417,1540,2426,1544,2435,1548,2439,1559,2452,1580,2468,1586,2475,1589,2484,1588,2510,1585,2521,1598,2531,1609,2518,1627,2491,1665,2456,1699,2440,1715,2445,1730,2454,1760,2481,1782,2491,1791,2502,1799,2514,1809,2508,1834,2507,1839,2506,1841,2503,1857,2506,1873,2507,1876,2511,1879,2518,1889,2536,1903,2542,1906,2545,1912,2551,1923,2544,1928,2542,1930,2542,1936,2542,1948,2548,1955,2573,1993,2604,2026,2626,2049,2654,2069,2658,2072,2661,2074,2679,2091,2650,2114,2644,2118,2641,2123,2637,2129,2633,2134,2630,2138,2632,2143,2633,2147,2637,2148,2689,2166,2732,2199,2739,2205,2749,2211,2760,2219,2781,2224,2786,2221,2806,2217,2814,2213,2823,2209,2846,2200,2871,2196,2901,2191,2933,2195,2955,2197,2970,2208,2980,2216,2977,2225,2986,2224,2992,2216,2997,2208,3014,2217,3030,2225,3049,2252,L,3053,2257,Q,3076,2237,3102,2220,3134,2200,3172,2190,3180,2188,3191,2189,3208,2192,3214,2184,3216,2181,3222,2181,3240,2180,3253,2174,3260,2172,3266,2170,3290,2162,3309,2147,3321,2137,3333,2131,3336,2131,3336,2125,3333,2083,3305,2061,3296,2054,3303,2050,3339,2036,3380,2037,3422,2039,3420,1999,3420,1995,3420,1992,3423,1970,3423,1948,3422,1915,3443,1912,3479,1906,3485,1873,3486,1867,3483,1862,3449,1816,3417,1767,3408,1753,3416,1744,3448,1709,3493,1686,3510,1677,3519,1653,3511,1627,3499,1608,3483,1587,3500,1559,3502,1555,3506,1555,3511,1556,3517,1556,3514,1544,3511,1533,3506,1514,3505,1495,3503,1465,3480,1462,3473,1462,3467,1458,3450,1449,3439,1436,3436,1432,3436,1426,3438,1368,3480,1357,3491,1355,3501,1360,3505,1363,3511,1363,3537,1363,3561,1357,3565,1357,3568,1350,3578,1329,3600,1341,3606,1343,3611,1347,3629,1356,3643,1356,3669,1357,3687,1342,3697,1334,3695,1320,3691,1297,3681,1275,3719,1281,3756,1292,3763,1294,3768,1301,3787,1327,3820,1337,3866,1351,3911,1335,3933,1325,3938,1315,3958,1275,3973,1229,3981,1208,3994,1187,4005,1171,4002,1150,3996,1120,3994,1091,3993,1073,4007,1059,4024,1038,4045,1020,4055,1011,4055,991,4055,971,4071,964,4093,955,4121,962,4126,963,4129,964,4216,1005,4312,987,4343,980,4375,976,4381,975,4387,973,4428,957,4455,934,4482,910,4513,907,4553,902,4584,878,4611,859,4632,834,4655,809,4696,809,4702,809,4708,808,4759,795,4796,782,4815,774,4835,766,4863,755,4876,732,4878,727,4880,721,4881,718,4882,713,4904,667,4933,629,4944,616,4966,614,4985,613,5004,611,5024,608,5028,588,5029,582,5029,576,5023,510,5058,450,L,5058,449,Q,5049,450,5037,449,5021,446,5005,444,4983,439,4979,441,4961,443,4947,453,4942,455,4936,457,4913,466,4879,465,4863,465,4847,463,4812,460,4796,486,4782,506,4746,509,4740,509,4734,509,4713,510,4702,518,4699,522,4695,524,4686,527,4677,527,4646,528,4615,526,4599,525,4583,527,4555,533,4526,536,4495,540,4477,529,4471,525,4467,521,4406,457,4356,399,4353,396,4352,392,4349,319,4312,261,4309,257,4307,254,4291,198,4236,186,4192,176,4153,157,4127,145,4105,122,4095,113,4084,105,4065,92,4054,71,4050,66,4045,61,4026,46,4003,47,3988,47,3970,51,3943,59,3915,59,3878,59,3847,74,3802,94,3768,132,3751,152,3726,148,Q,3669,138,3625,172,Z]
                ], 
                label: "Borsod-Abaúj-Zemplén", 
                shortLabel: "BO", 
                labelPosition: [308.7,93.6], 
                labelAlignment: [CEN,MID]
            },
            "02": { 
                outlines: [
                    [M,2460,1161,Q,2456,1158,2453,1156,2400,1121,2334,1123,2321,1123,2316,1131,2312,1136,2311,1142,2309,1161,2305,1179,2300,1203,2289,1223,2286,1227,2283,1227,2255,1233,2230,1225,2202,1217,2177,1197,2158,1180,2139,1161,2114,1205,2076,1230,2057,1243,2034,1225,2016,1212,2000,1193,1972,1161,1937,1135,1901,1109,1861,1105,1855,1105,1850,1107,1843,1111,1830,1116,1819,1119,1813,1122,1814,1122,1815,1123,1820,1126,1826,1129,1824,1158,1818,1186,1816,1196,1805,1196,1782,1195,1761,1193,1755,1191,1752,1195,1729,1215,1698,1231,1663,1249,1628,1267,1647,1280,1663,1296,1689,1321,1703,1352,1713,1375,1720,1399,1727,1419,1725,1436,1723,1456,1706,1471,1678,1494,1672,1520,1670,1532,1673,1554,1675,1570,1660,1589,1654,1595,1646,1600,1628,1614,1611,1627,1588,1646,1587,1657,1586,1681,1559,1687,1532,1691,1514,1678,1510,1673,1503,1671,1496,1670,1491,1667,1477,1660,1458,1659,1444,1659,1436,1667,1420,1680,1434,1695,1459,1721,1483,1734,1487,1736,1491,1737,1497,1741,1505,1750,1517,1763,1505,1785,1500,1795,1483,1799,1471,1803,1460,1798,1424,1784,1394,1759,1368,1736,1340,1729,1326,1724,1328,1733,1338,1766,1371,1789,1387,1802,1383,1822,1366,1819,1352,1830,1292,1875,1225,1902,1200,1913,1185,1930,1156,1964,1142,2005,1134,2027,1128,2048,1118,2090,1090,2109,1080,2116,1066,2116,1065,2122,1066,2126,1069,2137,1074,2144,1086,2161,1097,2189,1103,2207,1097,2220,1090,2234,1081,2251,1078,2258,1079,2263,1079,2276,1084,2287,1096,2310,1111,2334,1126,2358,1146,2369,1171,2384,1170,2409,1168,2433,1183,2451,1187,2456,1192,2460,1209,2473,1236,2471,1238,2455,1241,2440,1242,2433,1244,2426,1252,2405,1268,2387,1289,2363,1312,2396,1322,2410,1345,2409,1352,2408,1357,2406,1371,2397,1383,2410,1402,2429,1434,2440,1441,2443,1446,2442,1453,2440,1459,2426,1458,2409,1466,2402,1469,2398,1473,2397,1484,2395,1492,2390,1510,2380,1510,2351,1497,2351,1491,2345,1487,2342,1483,2340,1461,2330,1484,2313,1487,2310,1490,2306,1503,2281,1535,2285,1541,2286,1545,2290,1556,2305,1575,2316,1584,2323,1588,2313,1599,2292,1622,2296,1636,2298,1648,2301,1649,2269,1673,2251,1692,2238,1699,2243,1727,2263,1737,2308,1728,2324,1711,2333,1686,2346,1685,2377,1696,2380,1711,2388,1730,2399,1737,2414,1743,2424,1735,2439,1734,2443,1730,2443,1717,2445,1711,2452,1708,2455,1708,2458,1708,2464,1709,2471,1711,2510,1748,2514,1780,2519,1811,2519,1859,2519,1905,2510,1909,2510,1909,2503,1909,2489,1905,2477,1890,2441,1918,2423,1950,2421,1969,2409,1976,2405,1981,2406,1997,2408,2004,2420,2023,2449,2043,2474,2076,2512,2118,2544,2139,2559,2150,2582,2162,2603,2164,2628,2168,2659,2175,2690,2178,2709,2195,2719,2225,2738,2245,2769,2253,2780,2263,2788,2268,2792,2271,2799,2273,2812,2290,2815,2319,2819,2353,2820,2360,2820,2366,2822,2382,2824,2397,2820,2403,2819,2410,2816,2435,2802,2445,2779,2447,2774,2451,2770,2464,2750,2479,2729,2482,2726,2487,2725,2501,2719,2508,2697,2510,2689,2513,2682,2514,2678,2516,2674,2520,2666,2524,2658,2543,2629,2571,2609,2595,2593,2620,2583,2643,2574,2667,2568,2696,2563,2706,2547,2717,2530,2730,2517,2728,2517,2726,2518,2703,2521,2701,2496,2698,2478,2704,2463,2706,2459,2707,2452,2728,2385,2746,2315,2747,2310,2750,2307,2763,2291,2793,2280,2814,2272,2817,2251,2819,2234,2822,2214,2823,2211,2823,2209,2814,2213,2806,2217,2786,2221,2781,2224,2760,2219,2749,2211,2739,2205,2732,2199,2689,2166,2637,2148,2633,2147,2632,2143,2630,2138,2633,2134,2637,2129,2641,2123,2644,2118,2650,2114,2679,2091,2661,2074,2658,2072,2654,2069,2626,2049,2604,2026,2573,1993,2548,1955,2542,1948,2542,1936,2542,1930,2544,1928,2551,1923,2545,1912,2542,1906,2536,1903,2518,1889,2511,1879,2507,1876,2506,1873,2503,1857,2506,1841,2507,1839,2508,1834,2514,1809,2502,1799,2491,1791,2481,1782,2454,1760,2445,1730,2440,1715,2456,1699,2491,1665,2518,1627,2531,1609,2521,1598,2510,1585,2484,1588,2475,1589,2468,1586,2452,1580,2439,1559,2435,1548,2426,1544,2417,1540,2422,1526,2425,1523,2428,1520,2451,1508,2466,1489,2482,1469,2487,1444,2488,1438,2486,1431,2472,1401,2464,1368,2463,1363,2468,1356,2470,1353,2471,1350,2481,1331,2492,1313,2506,1290,2484,1274,2482,1271,2478,1270,2461,1264,2455,1248,2453,1243,2456,1240,2469,1228,2470,1205,Q,2473,1176,2460,1161,Z]
                ], 
                label: "Heves", 
                shortLabel: "HE", 
                labelPosition: [202.5,185.5], 
                labelAlignment: [CEN,MID]
            },
            "03": { 
                outlines: [
                    [M,1352,1033,Q,1349,1032,1345,1032,1325,1032,1316,1015,1314,1010,1312,1004,1309,993,1299,979,1296,972,1288,970,1250,963,1214,980,1210,981,1206,982,1179,989,1172,964,1169,953,1165,942,1160,919,1144,909,1116,893,1082,898,1019,905,963,923,958,924,954,926,925,934,919,965,917,972,915,976,907,989,905,1004,902,1030,894,1054,889,1071,896,1080,899,1083,902,1085,900,1101,897,1117,895,1143,886,1166,876,1193,853,1209,832,1224,804,1233,781,1240,762,1254,752,1261,734,1262,685,1265,641,1254,636,1252,633,1252,597,1252,570,1275,567,1278,564,1279,533,1299,494,1297,491,1297,488,1294,472,1275,431,1278,396,1282,363,1288,345,1293,324,1293,261,1294,193,1292,172,1297,148,1293,125,1289,114,1297,110,1299,104,1301,76,1305,48,1307,46,1308,44,1308,37,1327,40,1356,41,1378,45,1399,47,1406,55,1410,61,1412,66,1414,88,1427,98,1455,114,1498,95,1531,77,1564,59,1596,51,1610,66,1640,73,1654,84,1663,110,1686,141,1704,152,1711,152,1727,151,1759,159,1772,161,1778,161,1784,161,1796,166,1804,186,1841,212,1873,221,1885,238,1888,249,1890,256,1885,269,1872,293,1869,299,1869,305,1869,309,1869,312,1869,354,1875,382,1868,394,1866,401,1869,415,1878,432,1887,466,1906,498,1912,539,1919,585,1910,602,1906,620,1911,680,1928,727,1933,743,1934,759,1937,762,1938,766,1938,808,1941,816,1973,821,1989,813,1996,809,1999,806,2002,797,2014,797,2024,797,2046,810,2067,835,2109,850,2153,860,2184,876,2207,888,2225,917,2228,941,2233,949,2212,951,2206,952,2199,956,2183,943,2179,939,2177,938,2173,933,2161,917,2159,914,2158,911,2155,926,2119,968,2122,986,2125,1003,2115,1020,2105,1043,2112,1055,2116,1066,2116,1080,2116,1090,2109,1118,2090,1128,2048,1134,2027,1142,2005,1156,1964,1185,1930,1200,1913,1225,1902,1292,1875,1352,1830,1366,1819,1383,1822,1387,1802,1371,1789,1338,1766,1328,1733,1326,1724,1340,1729,1368,1736,1394,1759,1424,1784,1460,1798,1471,1803,1483,1799,1500,1795,1505,1785,1517,1763,1505,1750,1497,1741,1491,1737,1487,1736,1483,1734,1459,1721,1434,1695,1420,1680,1436,1667,1444,1659,1458,1659,1477,1660,1491,1667,1496,1670,1503,1671,1510,1673,1514,1678,1532,1691,1559,1687,1586,1681,1587,1657,1588,1646,1611,1627,1628,1614,1646,1600,1654,1595,1660,1589,1675,1570,1673,1554,1670,1532,1672,1520,1678,1494,1706,1471,1723,1456,1725,1436,1727,1419,1720,1399,1713,1375,1703,1352,1689,1321,1663,1296,1647,1280,1628,1267,1663,1249,1698,1231,1729,1215,1752,1195,1755,1191,1761,1193,1782,1195,1805,1196,1816,1196,1818,1186,1824,1158,1826,1129,1820,1126,1815,1123,1814,1122,1813,1122,1783,1105,1773,1078,1779,1047,1764,1043,1762,1044,1760,1045,1737,1055,1705,1051,1699,1051,1694,1052,1678,1061,1666,1085,1664,1091,1660,1097,1637,1126,1617,1154,1613,1158,1609,1160,1583,1175,1567,1153,1564,1148,1558,1143,1540,1130,1529,1109,1525,1104,1521,1100,1481,1069,1429,1046,1424,1044,1421,1044,Q,1386,1039,1352,1033,Z]
                ], 
                label: "Nógrád", 
                shortLabel: "NO", 
                labelPosition: [93.2,156.3], 
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