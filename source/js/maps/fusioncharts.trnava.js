/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Trnava.20.12-21-2012 11:55:09
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-trnava", function () {

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
        name: "Trnava",
        revision: 20,
        
        standaloneInit: true,

        baseWidth: 369,
        baseHeight: 600,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "SK.TA.SI": { 
                outlines: [
                    [M,1089,40,Q,1075,80,1028,116,1001,137,939,183,926,195,884,206,842,216,825,231,814,241,784,251,759,266,759,303,L,759,363,Q,763,376,747,385,738,390,723,396,697,413,697,453,697,486,666,487,620,487,558,540,548,549,515,572,490,596,504,630,478,662,417,714,410,722,398,767,389,805,366,813,337,823,334,859,333,879,333,915,328,928,296,947,265,965,255,981,248,994,229,1019,239,1018,248,1029,251,1030,276,1030,L,302,1030,Q,314,1030,321,1024,330,1015,337,1015,L,359,1015,Q,390,1015,394,1017,398,1019,405,1026,410,1026,422,1026,440,1026,442,1022,450,1010,465,998,473,991,487,974,491,970,510,969,530,970,532,972,541,979,547,986,554,986,557,978,557,977,570,972,575,970,579,962,583,958,590,958,620,958,627,950,631,944,668,944,L,669,944,686,945,Q,690,946,697,952,L,713,956,713,971,738,971,Q,745,967,754,958,763,957,781,956,796,945,797,945,807,945,809,943,L,810,929,828,929,Q,832,911,838,910,844,911,844,918,844,924,839,942,839,951,853,960,853,970,855,973,864,981,864,985,864,992,855,994,L,855,1028,865,1028,Q,870,1020,876,1015,878,1013,896,1013,L,912,1013,Q,922,1023,924,1023,933,1023,935,969,953,969,948,957,997,942,1003,931,1017,930,1024,919,1028,914,1051,914,1075,914,1080,918,1090,927,1105,927,1115,927,1130,942,L,1168,942,Q,1170,942,1172,942,1181,941,1195,942,1209,942,1215,932,1227,923,1227,914,L,1227,862,Q,1216,856,1212,849,L,1212,831,1241,831,Q,1250,831,1259,815,1277,815,1282,812,1293,802,1305,802,L,1442,802,Q,1444,791,1466,778,1494,763,1497,760,1502,755,1511,736,1527,730,1524,713,1529,700,1535,681,1546,674,1546,666,L,1546,650,Q,1547,625,1554,621,1560,610,1572,601,1569,597,1569,594,1569,555,1619,558,1678,562,1692,540,1722,497,1726,489,1744,455,1737,426,L,1709,426,Q,1707,405,1671,405,1653,406,1648,422,1644,438,1631,438,1622,438,1608,413,1587,376,1586,376,1537,314,1532,303,1520,270,1515,262,1508,253,1472,253,1433,253,1409,213,1396,188,1388,174,1374,152,1358,151,1322,152,1304,151,1298,151,1288,136,1279,122,1268,124,1236,127,1193,94,1147,54,1127,40,Z]
                ], 
                label: "Skalica", 
                shortLabel: "SI", 
                labelPosition: [103.8,53.5], 
                labelAlignment: [CEN,MID]
            },
            "SK.TA.SE": { 
                outlines: [
                    [M,1282,812,Q,1277,815,1259,815,1250,831,1241,831,L,1212,831,1212,849,Q,1216,856,1227,862,L,1227,914,Q,1227,923,1215,932,1209,942,1195,942,1181,941,1172,942,1170,942,1168,942,L,1130,942,Q,1115,927,1105,927,1090,927,1080,918,1075,914,1051,914,1028,914,1024,919,1017,930,1003,931,997,942,948,957,953,969,935,969,933,1023,924,1023,922,1023,912,1013,L,896,1013,Q,878,1013,876,1015,870,1020,865,1028,L,855,1028,855,994,Q,864,992,864,985,864,981,855,973,853,970,853,960,839,951,839,942,844,924,844,918,844,911,838,910,832,911,828,929,L,810,929,809,943,Q,807,945,797,945,796,945,781,956,763,957,754,958,745,967,738,971,L,713,971,713,956,697,952,Q,690,946,686,945,L,669,944,668,944,Q,631,944,627,950,620,958,590,958,583,958,579,962,575,970,570,972,557,977,557,978,554,986,547,986,541,979,532,972,530,970,510,969,491,970,487,974,473,991,465,998,450,1010,442,1022,440,1026,422,1026,410,1026,405,1026,398,1019,394,1017,390,1015,359,1015,L,337,1015,Q,330,1015,321,1024,314,1030,302,1030,L,276,1030,Q,251,1030,248,1029,239,1018,229,1019,227,1023,223,1027,205,1057,205,1086,L,205,1148,Q,208,1183,183,1209,170,1249,97,1295,97,1351,94,1355,84,1371,65,1371,52,1372,51,1384,52,1395,63,1422,73,1449,73,1471,73,1486,61,1506,49,1528,49,1540,49,1550,56,1576,64,1602,64,1625,64,1643,77,1661,90,1679,90,1707,94,1706,99,1706,122,1705,142,1675,161,1645,198,1643,L,341,1643,418,1649,435,1596,460,1596,Q,470,1608,480,1616,491,1623,511,1619,529,1616,543,1632,558,1649,570,1649,577,1649,588,1633,600,1617,611,1617,616,1617,649,1672,682,1727,711,1727,728,1727,735,1720,742,1713,762,1712,801,1711,825,1691,840,1678,885,1681,933,1684,947,1676,995,1647,1001,1647,1012,1646,1038,1648,1060,1649,1066,1640,1077,1627,1075,1581,1079,1570,1135,1572,1162,1573,1175,1538,1193,1492,1201,1485,1225,1463,1246,1461,1304,1457,1308,1449,1325,1425,1336,1379,1347,1335,1362,1315,1364,1312,1383,1291,1392,1282,1395,1267,1402,1228,1435,1228,1455,1228,1487,1267,1488,1267,1502,1272,1509,1275,1512,1282,1515,1291,1517,1312,1520,1320,1555,1357,1586,1391,1586,1409,1586,1416,1583,1491,1560,1514,1529,1533,1440,1647,1422,1647,1411,1647,1408,1631,1407,1614,1389,1614,1373,1614,1374,1632,1374,1674,1374,1676,1368,1701,1318,1712,1315,1714,1252,1740,1219,1753,1219,1780,1219,1799,1243,1813,1256,1821,1279,1832,1314,1853,1315,1859,1315,1861,1313,1882,1313,1896,1318,1900,1343,1925,1380,1957,1391,1968,1419,1976,1419,1960,1436,1943,1454,1925,1455,1909,L,1455,1865,Q,1462,1855,1480,1835,1529,1776,1540,1767,1546,1760,1558,1757,1563,1745,1565,1742,1569,1733,1613,1733,1656,1733,1656,1747,1669,1745,1682,1760,1694,1775,1708,1767,1708,1772,1710,1776,L,1722,1776,Q,1719,1748,1750,1748,1766,1747,1771,1740,1776,1734,1789,1734,1805,1734,1807,1738,1808,1740,1811,1762,L,1828,1762,Q,1848,1744,1853,1737,1869,1724,1877,1716,1880,1712,1880,1674,1880,1665,1886,1660,1892,1654,1893,1649,L,1935,1649,Q,1932,1637,1941,1634,1958,1631,1961,1628,1979,1611,1979,1597,1979,1581,1993,1565,2011,1547,2014,1540,2021,1520,2032,1512,2047,1494,2059,1485,2075,1463,2086,1458,2106,1450,2114,1438,2096,1433,2070,1395,2040,1352,2040,1329,2046,1286,2046,1279,2046,1250,2027,1227,2001,1204,1989,1191,1950,1148,1950,1148,1953,1133,1953,1096,1953,1078,1941,1067,1929,1056,1929,1042,1929,1022,1945,1000,1962,977,1962,933,1962,905,1997,892,2031,879,2031,867,2031,856,2010,827,1989,798,1989,768,1989,720,1980,717,1961,719,1951,720,1932,720,1917,714,1907,710,1899,695,1892,682,1881,681,1849,678,1827,666,1810,657,1810,620,1810,566,1809,564,L,1755,564,Q,1746,576,1723,618,1700,654,1674,654,1658,654,1614,630,1581,612,1572,601,1560,610,1554,621,1547,625,1546,650,L,1546,666,Q,1546,674,1535,681,1529,700,1524,713,1527,730,1511,736,1502,755,1497,760,1494,763,1466,778,1444,791,1442,802,L,1305,802,Q,1293,802,1282,812,Z]
                ], 
                label: "Senica", 
                shortLabel: "SE", 
                labelPosition: [81.1,132.4], 
                labelAlignment: [CEN,MID]
            },
            "SK.TA.PN": { 
                outlines: [
                    [M,3066,1475,Q,3033,1475,2952,1434,2877,1397,2852,1373,2819,1348,2808,1334,2800,1325,2801,1306,2803,1284,2801,1275,2765,1244,2759,1236,2757,1227,2753,1220,2752,1218,2751,1216,2742,1200,2725,1200,2686,1200,2640,1240,2593,1280,2545,1280,2507,1273,2486,1275,2468,1277,2466,1258,2467,1235,2466,1227,L,2423,1227,Q,2401,1225,2403,1311,2405,1397,2379,1397,2352,1398,2339,1382,2333,1386,2319,1396,2317,1398,2301,1397,2286,1398,2261,1378,2259,1376,2256,1374,L,2255,1400,Q,2256,1412,2266,1415,L,2266,1443,Q,2264,1447,2255,1452,L,2255,1468,Q,2282,1496,2283,1497,L,2283,1514,Q,2276,1514,2262,1520,2262,1534,2255,1538,2253,1540,2242,1542,2236,1543,2237,1547,L,2235,1570,Q,2235,1584,2246,1594,2255,1604,2255,1620,2256,1630,2224,1630,2193,1629,2195,1640,2197,1649,2190,1650,2184,1651,2184,1662,2184,1687,2176,1694,2177,1699,2180,1706,L,2180,1721,Q,2180,1734,2196,1734,2206,1734,2211,1719,L,2233,1719,Q,2243,1740,2277,1769,2278,1771,2287,1784,2293,1794,2293,1799,2292,1808,2298,1816,2302,1821,2305,1828,L,2326,1851,Q,2334,1859,2335,1863,L,2337,1882,Q,2342,1887,2346,1895,2348,1900,2350,1909,2375,1927,2377,1930,L,2377,1941,Q,2379,1943,2398,1959,2416,1976,2416,1984,2416,1992,2410,1992,2405,1992,2405,2004,2405,2012,2409,2017,2418,2027,2418,2032,2419,2039,2436,2056,L,2461,2079,Q,2467,2084,2502,2080,2496,2100,2514,2118,2514,2128,2539,2156,L,2554,2170,Q,2558,2175,2561,2189,2563,2191,2570,2196,L,2576,2204,Q,2581,2209,2595,2216,2605,2225,2622,2244,2628,2247,2632,2262,2636,2263,2644,2263,2647,2263,2652,2270,2657,2280,2673,2278,L,2697,2288,Q,2705,2288,2716,2299,2726,2307,2741,2307,2761,2307,2763,2294,2777,2281,2778,2273,2779,2257,2783,2245,2787,2231,2790,2231,L,2813,2231,Q,2841,2231,2842,2231,2849,2212,2851,2206,2851,2206,2850,2174,2849,2155,2865,2158,L,2865,2126,2847,2126,2847,2120,Q,2863,2120,2863,2107,L,2863,2077,2890,2077,Q,2894,2083,2914,2103,L,2928,2115,Q,2933,2120,2933,2133,2931,2156,2945,2171,2948,2175,2949,2189,2957,2193,2962,2199,2969,2200,2974,2192,2980,2191,2993,2191,L,3003,2181,Q,3005,2179,3022,2179,3032,2178,3032,2163,3030,2146,3030,2140,L,3030,2095,3062,2095,Q,3072,2095,3085,2082,L,3116,2082,Q,3117,2071,3120,2068,3125,2064,3155,2054,3164,2050,3196,2025,3211,2012,3211,1971,3213,1930,3229,1917,3244,1905,3260,1869,3277,1829,3291,1813,3294,1810,3313,1762,3326,1727,3346,1727,3356,1727,3381,1746,3411,1768,3411,1789,3428,1792,3471,1792,3503,1792,3510,1790,3532,1784,3520,1760,3538,1760,3574,1762,3612,1763,3619,1742,3620,1736,3634,1730,3648,1724,3651,1715,3652,1686,3652,1671,3652,1671,3652,1670,L,3578,1670,Q,3570,1660,3568,1641,3567,1620,3566,1610,3564,1597,3542,1597,L,3503,1598,Q,3496,1597,3458,1568,3448,1561,3425,1561,3398,1561,3392,1559,3384,1556,3367,1539,3354,1526,3335,1526,3305,1528,3283,1497,3261,1466,3243,1466,3224,1466,3222,1489,3221,1511,3209,1511,3191,1511,3176,1465,3164,1428,3164,1409,3148,1414,3141,1404,3135,1389,3128,1382,L,3110,1382,Q,3103,1404,3106,1454,Q,3107,1475,3066,1475,Z]
                ], 
                label: "Piešťany", 
                shortLabel: "PN", 
                labelPosition: [275.2,172.6], 
                labelAlignment: [CEN,MID]
            },
            "SK.TA.TT": { 
                outlines: [
                    [M,2230,1359,Q,2177,1359,2157,1391,2147,1407,2146,1431,2146,1439,2119,1439,2117,1439,2114,1438,2106,1450,2086,1458,2075,1463,2059,1485,2047,1494,2032,1512,2021,1520,2014,1540,2011,1547,1993,1565,1979,1581,1979,1597,1979,1611,1961,1628,1958,1631,1941,1634,1932,1637,1935,1649,L,1893,1649,Q,1892,1654,1886,1660,1880,1665,1880,1674,1880,1712,1877,1716,1869,1724,1853,1737,1848,1744,1828,1762,L,1811,1762,Q,1808,1740,1807,1738,1805,1734,1789,1734,1776,1734,1771,1740,1766,1747,1750,1748,1719,1748,1722,1776,L,1710,1776,Q,1708,1772,1708,1767,1694,1775,1682,1760,1669,1745,1656,1747,1656,1733,1613,1733,1569,1733,1565,1742,1563,1745,1558,1757,1546,1760,1540,1767,1529,1776,1480,1835,1462,1855,1455,1865,L,1455,1909,Q,1454,1925,1436,1943,1419,1960,1419,1976,1434,1980,1455,1984,L,1455,2002,Q,1452,2016,1424,2018,1397,2021,1392,2038,1387,2053,1381,2077,1374,2097,1356,2109,1347,2115,1312,2115,1286,2116,1281,2136,1284,2159,1263,2163,1240,2168,1240,2187,1240,2193,1260,2227,1265,2235,1268,2241,1284,2265,1293,2267,1302,2270,1352,2267,1386,2265,1395,2283,1426,2341,1458,2342,1476,2343,1517,2342,1520,2342,1530,2357,1538,2369,1553,2363,1553,2372,1556,2387,1556,2412,1533,2413,1508,2415,1508,2432,1508,2448,1562,2492,1612,2534,1615,2587,1616,2591,1616,2594,L,1616,2698,Q,1624,2701,1636,2713,1645,2721,1656,2721,1663,2721,1696,2716,1715,2716,1750,2763,1787,2813,1786,2847,1787,2872,1727,2924,1667,2976,1667,2987,1667,2997,1673,3006,1680,3017,1691,3014,1688,3052,1706,3068,1714,3077,1727,3080,1742,3083,1768,3134,1782,3149,1843,3160,1848,3163,1860,3190,1869,3209,1872,3221,1885,3228,1909,3266,1914,3273,1932,3294,1933,3299,1950,3325,1975,3371,1986,3380,1989,3383,1988,3398,1989,3400,1999,3410,2002,3413,2008,3427,2013,3436,2021,3436,2025,3436,2029,3434,L,2029,3428,2051,3428,Q,2060,3425,2070,3411,2068,3408,2089,3398,2106,3387,2126,3365,2140,3345,2153,3329,2180,3296,2198,3296,2207,3296,2208,3300,2213,3307,2219,3313,2220,3314,2260,3316,L,2344,3316,2346,3340,2362,3340,Q,2360,3307,2363,3293,2368,3269,2395,3273,2405,3274,2418,3267,2430,3260,2437,3261,L,2482,3261,Q,2482,3241,2484,3235,2496,3223,2498,3217,2501,3201,2513,3201,2524,3202,2524,3187,2524,3171,2517,3169,2505,3168,2493,3164,L,2493,3149,Q,2521,3113,2548,3094,2559,3085,2593,3089,2623,3091,2625,3077,L,2659,3077,Q,2676,3109,2693,3109,2716,3109,2717,3088,2714,3065,2713,3055,L,2713,3055,Q,2714,3045,2729,3024,2742,3005,2741,2989,2738,2986,2734,2983,2727,2977,2713,2967,2688,2954,2674,2942,2652,2923,2640,2915,2638,2913,2617,2911,2602,2900,2597,2899,2577,2893,2577,2892,2564,2886,2557,2880,L,2557,2829,Q,2569,2830,2589,2834,2599,2834,2617,2823,2632,2825,2629,2818,L,2629,2804,Q,2641,2800,2640,2790,2641,2784,2636,2779,2630,2775,2630,2766,2630,2725,2634,2720,2652,2701,2643,2678,2641,2659,2656,2641,2663,2632,2663,2601,2663,2573,2659,2566,2646,2537,2642,2523,L,2598,2523,Q,2589,2523,2569,2511,2546,2495,2543,2484,2541,2480,2541,2450,2541,2412,2553,2406,2564,2400,2564,2361,2564,2324,2559,2316,2553,2308,2552,2285,2552,2264,2554,2263,2574,2249,2574,2248,L,2574,2201,2570,2196,Q,2563,2191,2561,2189,2558,2175,2554,2170,L,2539,2156,Q,2514,2128,2514,2118,2496,2100,2502,2080,2467,2084,2461,2079,L,2436,2056,Q,2419,2039,2418,2032,2418,2027,2409,2017,2405,2012,2405,2004,2405,1992,2410,1992,2416,1992,2416,1984,2416,1976,2398,1959,2379,1943,2377,1941,L,2377,1930,Q,2375,1927,2350,1909,2348,1900,2346,1895,2342,1887,2337,1882,L,2335,1863,Q,2334,1859,2326,1851,L,2305,1828,Q,2302,1821,2298,1816,2292,1808,2293,1799,2293,1794,2287,1784,2278,1771,2277,1769,2243,1740,2233,1719,L,2211,1719,Q,2206,1734,2196,1734,2180,1734,2180,1721,L,2180,1706,Q,2177,1699,2176,1694,2184,1687,2184,1662,2184,1651,2190,1650,2197,1649,2195,1640,2193,1629,2224,1630,2256,1630,2255,1620,2255,1604,2246,1594,2235,1584,2235,1570,L,2237,1547,Q,2236,1543,2242,1542,2253,1540,2255,1538,2262,1534,2262,1520,2276,1514,2283,1514,L,2283,1497,Q,2282,1496,2255,1468,L,2255,1452,Q,2264,1447,2266,1443,L,2266,1415,Q,2256,1412,2255,1400,L,2256,1374,Q,2237,1359,2230,1359,Z]
                ], 
                label: "Trnava", 
                shortLabel: "TT", 
                labelPosition: [204.4,239.7], 
                labelAlignment: [CEN,MID]
            },
            "SK.TA.HC": { 
                outlines: [
                    [M,3085,2082,Q,3072,2095,3062,2095,L,3030,2095,3030,2140,Q,3030,2146,3032,2163,3032,2178,3022,2179,3005,2179,3003,2181,L,2993,2191,Q,2980,2191,2974,2192,2969,2200,2962,2199,2957,2193,2949,2189,2948,2175,2945,2171,2931,2156,2933,2133,2933,2120,2928,2115,L,2914,2103,Q,2894,2083,2890,2077,L,2863,2077,2863,2107,Q,2863,2120,2847,2120,L,2847,2126,2865,2126,2865,2158,Q,2849,2155,2850,2174,2851,2206,2851,2206,2849,2212,2842,2231,2841,2231,2813,2231,L,2790,2231,Q,2787,2231,2783,2245,2779,2257,2778,2273,2777,2281,2763,2294,2761,2307,2741,2307,2726,2307,2716,2299,2705,2288,2697,2288,L,2673,2278,Q,2657,2280,2652,2270,2647,2263,2644,2263,2636,2263,2632,2262,2628,2247,2622,2244,2605,2225,2595,2216,2581,2209,2576,2204,L,2574,2201,2574,2248,Q,2574,2249,2554,2263,2552,2264,2552,2285,2553,2308,2559,2316,2564,2324,2564,2361,2564,2400,2553,2406,2541,2412,2541,2450,2541,2480,2543,2484,2546,2495,2569,2511,2589,2523,2598,2523,L,2642,2523,Q,2646,2537,2659,2566,2663,2573,2663,2601,2663,2632,2656,2641,2641,2659,2643,2678,2652,2701,2634,2720,2630,2725,2630,2766,2630,2775,2636,2779,2641,2784,2640,2790,2641,2800,2629,2804,L,2629,2818,Q,2632,2825,2617,2823,2599,2834,2589,2834,2569,2830,2557,2829,L,2557,2880,Q,2564,2886,2577,2892,2577,2893,2597,2899,2602,2900,2617,2911,2638,2913,2640,2915,2652,2923,2674,2942,2688,2954,2713,2967,2727,2977,2734,2983,2738,2986,2741,2989,2749,2997,2749,2997,2774,3002,2788,3022,2795,3032,2798,3042,2802,3058,2813,3058,2823,3072,2827,3080,2829,3081,2848,3081,2860,3081,2882,3065,2888,3060,2901,3060,2918,3062,2922,3060,L,2922,3012,2901,3006,2901,2954,Q,2913,2954,2929,2941,L,2994,2941,Q,2995,2948,3003,2960,3003,2961,3023,2974,3029,2976,3028,2997,3028,2999,3037,3004,3046,3010,3051,3010,3055,3010,3097,3008,3106,2961,3111,2941,3121,2906,3145,2884,3221,2821,3243,2781,3244,2778,3244,2776,3251,2741,3272,2713,3305,2677,3327,2650,3360,2596,3377,2578,3391,2563,3418,2522,3423,2515,3428,2507,3488,2435,3497,2415,3500,2411,3499,2409,3499,2398,3419,2325,3330,2245,3318,2229,3299,2202,3268,2190,3231,2179,3208,2170,3197,2166,3182,2150,3169,2136,3155,2131,3116,2120,3116,2094,3116,2087,3116,2082,Z]
                ], 
                label: "Hlohovec", 
                shortLabel: "HC", 
                labelPosition: [296.6,257.9], 
                labelAlignment: [CEN,MID]
            },
            "SK.TA.GA": { 
                outlines: [
                    [M,2901,2954,L,2901,3006,2922,3012,2922,3060,Q,2918,3062,2901,3060,2888,3060,2882,3065,2860,3081,2848,3081,2829,3081,2827,3080,2823,3072,2813,3058,2802,3058,2798,3042,2795,3032,2788,3022,2774,3002,2749,2997,2749,2997,2741,2989,2742,3005,2729,3024,2714,3045,2713,3055,L,2713,3055,Q,2714,3065,2717,3088,2716,3109,2693,3109,2676,3109,2659,3077,L,2625,3077,Q,2623,3091,2593,3089,2559,3085,2548,3094,2521,3113,2493,3149,L,2493,3164,Q,2505,3168,2517,3169,2524,3171,2524,3187,2524,3202,2513,3201,2501,3201,2498,3217,2496,3223,2484,3235,2482,3241,2482,3261,L,2437,3261,Q,2430,3260,2418,3267,2405,3274,2395,3273,2368,3269,2363,3293,2360,3307,2362,3340,L,2346,3340,2344,3316,2260,3316,Q,2220,3314,2219,3313,2213,3307,2208,3300,2207,3296,2198,3296,2180,3296,2153,3329,2140,3345,2126,3365,2106,3387,2089,3398,2068,3408,2070,3411,2060,3425,2051,3428,L,2029,3428,2029,3434,Q,2025,3436,2021,3436,2013,3436,2008,3427,2002,3413,1999,3410,1989,3400,1988,3398,1989,3383,1986,3380,1975,3371,1950,3325,1933,3299,1932,3294,1914,3273,1909,3266,1885,3228,1872,3221,1873,3227,1873,3230,1873,3253,1843,3280,1825,3295,1792,3322,1791,3323,1761,3344,1741,3358,1736,3373,1733,3410,1714,3426,1718,3439,1800,3467,1879,3494,1879,3522,1879,3565,1829,3578,1780,3591,1780,3608,1780,3625,1816,3630,1856,3636,1858,3638,1866,3647,1870,3674,1882,3702,1882,3719,1882,3750,1858,3749,1855,3761,1852,3791,L,1822,3791,Q,1819,3785,1820,3755,1821,3737,1800,3737,1785,3737,1780,3762,1776,3787,1756,3787,1742,3788,1744,3760,L,1705,3760,Q,1716,3788,1689,3807,1675,3816,1645,3830,L,1645,3841,Q,1648,3844,1648,3853,1648,3862,1642,3890,L,1642,3914,Q,1656,3915,1654,3926,L,1679,3926,Q,1681,3912,1681,3908,L,1696,3908,1696,3945,Q,1696,3946,1704,3953,1712,3960,1712,3968,L,1712,4006,Q,1723,4007,1750,4007,1740,4030,1759,4032,1770,4034,1793,4033,1793,4049,1809,4063,1823,4075,1834,4075,1847,4075,1849,4070,1851,4068,1850,4050,1861,4050,1865,4049,L,1863,4039,1893,4039,Q,1896,4043,1896,4048,L,1907,4048,1907,4082,Q,1900,4088,1886,4088,L,1884,4101,1873,4101,1873,4119,Q,1875,4120,1887,4132,L,1895,4132,Q,1895,4119,1929,4120,1961,4121,1957,4104,1969,4105,1974,4103,L,1974,4092,1988,4092,1988,4122,Q,1984,4127,1974,4127,L,1974,4143,Q,1975,4145,1980,4146,L,1997,4146,Q,1995,4132,2018,4132,2036,4132,2039,4138,2041,4141,2042,4165,2043,4176,2053,4186,2057,4190,2057,4214,L,2066,4214,Q,2070,4173,2074,4167,2076,4163,2085,4161,2095,4161,2095,4158,L,2095,4133,2105,4133,2105,4120,2139,4120,2139,4181,Q,2132,4188,2126,4188,2124,4187,2124,4195,2124,4215,2151,4215,2185,4216,2195,4228,2199,4234,2213,4235,2222,4243,2230,4242,2238,4243,2240,4257,2253,4266,2252,4274,2255,4274,2255,4275,L,2285,4275,Q,2283,4257,2307,4257,2328,4257,2328,4276,2328,4286,2326,4288,2326,4288,2308,4289,L,2308,4330,2347,4330,2347,4379,Q,2356,4381,2375,4381,2389,4381,2390,4382,2393,4386,2391,4397,2395,4409,2411,4410,2431,4412,2435,4421,2438,4421,2460,4410,2473,4411,2478,4412,2481,4413,2486,4425,2504,4421,2511,4429,2523,4442,2527,4443,L,2570,4462,Q,2615,4467,2616,4486,2618,4528,2625,4534,2625,4550,2618,4554,2610,4558,2610,4561,2610,4569,2623,4569,2631,4569,2641,4581,2651,4584,2662,4608,2666,4612,2668,4624,2670,4636,2677,4639,2690,4646,2710,4654,2718,4661,2726,4686,2733,4709,2744,4716,2758,4725,2776,4733,2790,4762,2790,4766,2791,4769,2813,4795,2822,4808,2823,4833,2830,4843,2841,4864,2844,4867,2857,4870,2867,4873,2872,4881,2876,4888,2899,4900,2918,4909,2919,4927,2921,4947,2940,4949,2951,4950,2963,4972,2958,4962,2958,4947,2958,4932,2977,4888,2984,4872,2988,4857,2996,4832,2996,4811,2982,4738,2982,4693,2982,4650,3012,4622,3041,4593,3041,4576,3041,4524,2978,4501,2943,4488,2934,4482,2914,4468,2914,4444,2914,4435,2927,4417,2940,4398,2940,4388,2940,4358,2905,4358,2893,4358,2847,4385,2801,4410,2799,4410,2769,4410,2769,4351,2769,4318,2773,4310,2776,4304,2799,4285,2802,4283,2806,4280,2837,4262,2840,4257,2843,4254,2843,4221,2843,4177,2811,4145,2769,4111,2746,4086,2716,4036,2702,4020,2697,4016,2662,4001,2635,3990,2635,3971,2635,3957,2656,3953,2684,3948,2687,3945,2706,3929,2707,3929,2711,3927,2737,3927,2773,3927,2781,3937,2788,3946,2810,3990,L,2836,3990,Q,2844,3960,2876,3934,2906,3910,2906,3908,2906,3892,2860,3843,2813,3794,2813,3778,2813,3769,2831,3755,2850,3740,2862,3740,2858,3729,2865,3719,2872,3711,2877,3711,2890,3711,2924,3762,2958,3812,2964,3812,2974,3802,2992,3790,3027,3765,3066,3751,3085,3745,3107,3726,3138,3701,3138,3676,3138,3640,3071,3601,3003,3563,3003,3515,3003,3495,3030,3493,3055,3492,3055,3473,3055,3455,3037,3444,3018,3434,3019,3415,3020,3396,3057,3370,3089,3348,3083,3319,3082,3315,3080,3310,3066,3277,3020,3271,2974,3267,2973,3238,2974,3216,3014,3194,3051,3174,3044,3133,3040,3106,3048,3055,3092,3026,3096,3010,3097,3009,3097,3008,3055,3010,3051,3010,3046,3010,3037,3004,3028,2999,3028,2997,3029,2976,3023,2974,3003,2961,3003,2960,2995,2948,2994,2941,L,2929,2941,Q,2913,2954,2901,2954,Z]
                ], 
                label: "Galanta", 
                shortLabel: "GA", 
                labelPosition: [222.8,379.5], 
                labelAlignment: [CEN,MID]
            },
            "SK.TA.DS": { 
                outlines: [
                    [M,2328,4276,Q,2328,4257,2307,4257,2283,4257,2285,4275,L,2255,4275,Q,2255,4274,2252,4274,2253,4266,2240,4257,2238,4243,2230,4243,2222,4243,2213,4235,2199,4234,2195,4228,2185,4216,2151,4216,2124,4215,2124,4195,2124,4187,2127,4188,2132,4188,2139,4182,L,2139,4121,2105,4121,2105,4133,2095,4133,2095,4158,Q,2095,4161,2086,4162,2076,4163,2074,4167,2070,4173,2066,4214,L,2057,4214,Q,2057,4190,2053,4187,2043,4176,2043,4166,2041,4141,2039,4138,2036,4132,2018,4132,1995,4132,1998,4146,L,1980,4146,Q,1975,4145,1974,4144,L,1974,4127,Q,1984,4127,1989,4122,L,1989,4092,1974,4092,1974,4103,Q,1969,4105,1957,4105,1961,4121,1929,4121,1895,4119,1895,4132,L,1887,4132,Q,1875,4120,1873,4119,L,1873,4101,1885,4101,1886,4088,Q,1900,4088,1907,4082,L,1907,4048,1896,4048,Q,1896,4043,1894,4039,L,1864,4039,1865,4049,Q,1861,4050,1851,4051,1851,4068,1849,4071,1847,4075,1834,4075,1823,4075,1809,4063,1793,4049,1794,4033,1770,4034,1760,4033,1740,4030,1751,4008,1723,4007,1713,4006,L,1713,3968,Q,1712,3960,1704,3953,1696,3946,1696,3945,L,1696,3908,1681,3908,Q,1681,3912,1679,3926,L,1654,3926,Q,1656,3915,1642,3914,L,1642,3890,Q,1648,3862,1648,3853,1648,3844,1645,3841,L,1645,3830,Q,1640,3833,1634,3836,1608,3850,1592,3881,1582,3901,1552,3901,1530,3901,1519,3881,1506,3855,1497,3851,1488,3847,1450,3847,1419,3847,1410,3829,L,1410,3812,Q,1452,3795,1453,3795,1461,3788,1461,3759,1461,3731,1458,3725,1451,3710,1424,3710,1402,3710,1400,3712,1397,3715,1398,3743,L,1359,3743,Q,1356,3749,1355,3763,1352,3774,1345,3788,1345,3797,1341,3822,1341,3837,1361,3858,1380,3878,1380,3889,1380,3916,1355,3923,1315,3928,1288,3931,1271,3933,1248,3960,1226,3987,1204,3988,L,1144,3988,Q,1146,3955,1094,3949,L,1070,3949,1070,3973,Q,1072,3975,1096,3985,L,1096,4021,Q,1087,4028,1081,4033,1079,4034,1079,4050,1079,4102,1151,4104,1156,4104,1167,4114,1177,4123,1192,4122,1231,4119,1231,4140,1231,4151,1217,4157,1209,4161,1192,4167,1179,4174,1169,4206,1147,4230,1131,4250,1121,4256,1085,4257,1053,4257,1050,4255,1042,4250,1046,4221,L,1031,4221,Q,1018,4234,1017,4237,1016,4239,1016,4258,1016,4290,1037,4292,1058,4293,1058,4312,1057,4355,992,4346,966,4342,933,4388,932,4389,911,4427,907,4433,870,4436,838,4438,831,4454,829,4458,828,4479,828,4486,828,4495,828,4569,893,4586,913,4591,1037,4594,1076,4594,1094,4619,1105,4634,1133,4680,1207,4773,1210,4779,1242,4832,1303,4859,1332,4873,1339,4908,1345,4947,1359,4959,1425,5008,1431,5057,1436,5117,1440,5122,1465,5159,1462,5177,L,1462,5186,Q,1465,5189,1466,5204,1467,5215,1479,5222,1510,5243,1515,5245,1538,5256,1572,5296,1604,5321,1649,5335,1660,5338,1690,5337,1715,5339,1722,5358,1728,5375,1746,5392,1762,5408,1765,5422,1766,5426,1769,5463,1771,5494,1778,5503,1803,5541,1811,5580,1818,5611,1848,5643,L,1870,5643,Q,1900,5599,1905,5596,1912,5591,1949,5591,1988,5591,2002,5618,2033,5675,2036,5678,2045,5688,2069,5730,L,2092,5755,Q,2102,5765,2128,5772,2185,5818,2291,5960,L,2303,5942,Q,2371,5929,2384,5840,2389,5790,2392,5766,2399,5722,2415,5699,L,2434,5699,Q,2436,5704,2460,5722,2482,5740,2486,5755,2497,5755,2497,5759,L,2512,5759,Q,2507,5701,2549,5681,2573,5668,2642,5650,2672,5638,2668,5564,2664,5471,2672,5449,2685,5415,2758,5412,2786,5412,2804,5384,2831,5339,2833,5338,2881,5290,2918,5271,2940,5260,2974,5252,2996,5244,2996,5213,2996,5181,2963,5165,2929,5147,2929,5126,2929,5115,2963,5094,2996,5072,2996,5038,2996,4994,2977,4986,2968,4981,2963,4972,2951,4950,2940,4949,2921,4947,2920,4927,2918,4909,2899,4900,2876,4888,2872,4882,2867,4873,2857,4871,2844,4867,2841,4864,2830,4843,2823,4833,2822,4808,2813,4796,2791,4769,2791,4766,2790,4762,2777,4733,2758,4725,2744,4717,2733,4709,2726,4687,2718,4661,2710,4654,2690,4646,2677,4640,2670,4636,2668,4624,2666,4612,2662,4608,2651,4584,2641,4581,2631,4569,2623,4569,2610,4569,2610,4561,2610,4558,2618,4554,2625,4550,2625,4534,2618,4528,2616,4486,2615,4467,2570,4463,L,2527,4443,Q,2523,4442,2511,4429,2504,4421,2487,4425,2481,4413,2478,4412,2473,4411,2460,4411,2438,4421,2435,4421,2431,4412,2411,4411,2395,4409,2392,4397,2393,4386,2390,4382,2389,4381,2376,4381,2356,4381,2347,4379,L,2347,4330,2308,4330,2308,4289,Q,2326,4288,2326,4288,Q,2328,4286,2328,4276,Z]
                ], 
                label: "Dunajská Streda", 
                shortLabel: "DS", 
                labelPosition: [191.2,483.5], 
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