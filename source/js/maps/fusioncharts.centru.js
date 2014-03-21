/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Centru.20.12-21-2012 11:40:52
 */
FusionCharts.register("module", ["private", "modules.renderer.js-centru", function () {

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
        name: "Centru",
        revision: 20,
        standaloneInit: true,

        baseWidth: 308,
        baseHeight: 198,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "RO.AB": { 
                outlines: [
                    [M,859,779,Q,859,778,858,776,857,774,857,772,856,768,854,765,853,758,845,761,842,761,840,762,833,766,825,772,816,775,811,786,805,787,805,792,805,801,805,810,805,822,803,835,786,836,770,836,756,837,757,823,755,782,755,743,755,741,754,739,753,738,749,737,746,736,740,735,735,733,731,733,684,733,637,732,636,732,635,732,629,732,629,729,629,719,629,710,L,629,707,Q,605,705,580,706,573,706,575,698,575,695,574,694,570,690,572,685,571,680,568,680,542,680,514,680,512,680,509,681,500,686,490,698,489,700,487,701,481,706,468,705,457,704,457,713,458,725,455,733,453,734,452,735,440,736,427,736,421,736,420,731,419,723,419,716,419,713,418,711,416,710,415,708,411,706,406,705,397,704,393,708,388,712,385,713,383,715,383,718,380,729,381,741,L,381,743,Q,340,747,298,747,295,746,291,745,287,744,283,743,280,743,279,742,278,741,278,738,275,731,274,725,273,723,272,722,271,720,268,719,265,714,258,713,L,255,713,Q,253,700,253,687,L,253,685,Q,216,682,180,682,178,682,178,681,175,678,171,680,156,682,155,671,155,669,154,668,153,665,151,663,149,662,149,659,148,657,147,656,135,653,122,654,99,653,75,652,74,652,73,652,61,651,48,651,46,655,44,656,37,659,32,667,31,668,31,669,30,712,30,754,29,757,28,759,22,769,17,778,15,779,15,780,14,787,15,793,15,794,15,796,16,798,17,800,18,803,17,810,17,818,20,827,22,836,24,838,26,840,26,841,28,846,34,848,36,848,37,848,49,850,50,862,51,867,57,868,61,868,63,868,74,869,79,877,80,879,80,880,82,890,91,891,94,892,99,893,102,893,106,893,126,894,148,895,150,895,151,896,157,899,166,899,167,899,168,899,170,901,172,902,175,904,180,905,182,906,184,908,191,917,196,923,201,933,212,939,213,941,215,942,219,945,218,953,218,969,218,984,218,986,219,988,225,992,229,1000,230,1001,231,1001,242,1004,249,1009,259,1015,267,1018,269,1017,272,1019,274,1020,276,1020,283,1021,287,1025,290,1027,291,1027,295,1028,299,1031,300,1066,301,1102,301,1114,307,1123,308,1124,308,1125,310,1130,314,1133,315,1134,315,1136,316,1138,317,1139,320,1143,322,1146,328,1152,330,1161,332,1163,333,1166,335,1171,336,1181,336,1185,338,1185,340,1187,339,1192,335,1207,345,1210,347,1211,350,1211,359,1212,370,1211,384,1210,393,1213,396,1214,397,1216,404,1221,409,1230,412,1233,414,1238,415,1241,416,1243,420,1247,428,1250,433,1253,435,1257,439,1261,444,1266,446,1267,446,1268,447,1272,449,1273,450,1275,451,1278,462,1288,470,1297,471,1298,471,1299,472,1305,474,1312,475,1322,480,1328,482,1331,486,1335,491,1342,495,1351,496,1352,496,1353,498,1356,499,1361,500,1364,501,1366,502,1371,505,1377,505,1378,506,1379,513,1384,519,1391,523,1395,524,1399,525,1401,525,1402,529,1413,535,1420,536,1421,536,1422,537,1465,537,1509,537,1534,538,1558,538,1560,539,1563,540,1569,542,1574,543,1575,544,1576,548,1580,550,1584,551,1586,551,1587,551,1592,555,1594,558,1596,561,1602,561,1605,561,1607,562,1621,562,1635,562,1658,561,1681,561,1693,567,1699,574,1706,580,1712,586,1718,595,1722,617,1726,626,1741,628,1742,629,1743,632,1750,640,1755,647,1760,654,1766,656,1767,657,1768,662,1769,667,1772,668,1772,669,1772,676,1771,678,1778,680,1779,681,1780,684,1784,685,1789,688,1798,696,1804,697,1805,698,1806,702,1809,705,1810,715,1812,717,1820,718,1822,720,1823,722,1824,721,1830,719,1839,724,1841,727,1837,728,1836,730,1831,735,1829,737,1828,739,1826,740,1824,741,1822,743,1817,753,1815,753,1805,753,1791,753,1743,753,1694,753,1682,754,1670,755,1656,747,1653,739,1649,731,1647,L,729,1645,Q,727,1632,726,1619,725,1606,729,1599,739,1580,749,1568,752,1567,752,1565,753,1555,753,1545,753,1533,752,1522,751,1509,757,1499,758,1496,759,1495,765,1490,778,1491,784,1491,791,1493,802,1494,807,1487,808,1485,808,1483,810,1475,816,1471,820,1469,822,1468,833,1465,845,1465,847,1465,848,1464,854,1460,858,1456,860,1454,862,1452,863,1451,864,1447,866,1435,865,1417,865,1415,866,1411,870,1404,883,1407,L,885,1407,Q,888,1386,889,1366,889,1354,903,1354,915,1355,927,1357,934,1356,938,1354,939,1352,939,1351,941,1329,942,1306,941,1294,940,1284,939,1270,945,1261,947,1256,952,1254,955,1253,956,1251,957,1250,958,1249,961,1248,963,1248,974,1248,986,1247,999,1245,1006,1249,1008,1250,1010,1251,1018,1258,1023,1265,1025,1266,1026,1268,1026,1270,1027,1271,1033,1273,1042,1273,1045,1273,1047,1272,1058,1261,1075,1250,1076,1249,1078,1249,1087,1248,1090,1240,1090,1238,1090,1237,1091,1229,1091,1219,1091,1207,1090,1194,1090,1193,1090,1192,1086,1182,1093,1176,1098,1171,1104,1166,1105,1164,1106,1164,1117,1164,1122,1160,1123,1158,1123,1156,1124,1145,1131,1143,1135,1142,1137,1140,1144,1136,1153,1132,1155,1131,1156,1129,1159,1123,1162,1117,1163,1114,1166,1113,1171,1108,1178,1108,1189,1109,1201,1108,1203,1108,1204,1107,1206,1102,1210,1100,1211,1097,1212,1095,1214,1094,1215,1093,1216,1091,1218,1092,1222,1090,1224,1090,1229,1090,1229,1087,1229,1078,1229,1069,1230,1041,1226,1014,1226,1013,1226,1012,1225,1007,1224,1007,1222,1007,1224,1006,L,1224,1006,Q,1223,1005,1223,1004,1222,1004,1221,1003,1217,1000,1215,996,1213,992,1212,989,1212,986,1207,981,1201,976,1199,976,1189,970,1185,960,1184,959,1183,959,1180,958,1179,957,1173,953,1167,951,1162,949,1161,945,1161,943,1161,942,1161,933,1158,924,1156,923,1156,922,1155,914,1147,915,1126,918,1127,902,1126,899,1125,899,1121,897,1117,895,1116,893,1113,892,1110,891,1106,891,1106,897,1106,902,1106,908,1105,913,1103,923,1091,922,1088,922,1087,921,1081,914,1078,904,1076,902,1079,899,1082,896,1080,890,1078,885,1072,876,1066,867,1064,855,1064,848,1070,844,1073,843,1073,842,1075,835,1075,825,1075,823,1074,819,1070,811,1060,810,L,1057,810,Q,1055,801,1056,792,1056,782,1050,782,1036,781,1022,782,L,1022,785,Q,998,787,973,787,970,787,968,786,961,782,962,769,L,962,767,Q,940,764,919,765,916,764,915,766,912,768,908,772,901,779,895,790,895,791,893,791,886,792,881,793,866,794,863,787,862,786,862,785,Q,860,782,859,779,Z]
                ], 
                label: "Alba", 
                shortLabel: "AB", 
                labelPosition: [62.2,104.6], 
                labelAlignment: [CEN,MID]
            },
            "RO.BV": { 
                outlines: [
                    [M,2303,1243,Q,2302,1242,2300,1242,2288,1241,2277,1242,2275,1242,2272,1242,2267,1243,2270,1249,2270,1251,2269,1254,2267,1256,2267,1266,2266,1277,2268,1280,2269,1282,2262,1281,2255,1281,2250,1275,L,2250,1275,2247,1266,Q,2244,1257,2240,1251,2235,1244,2235,1243,2234,1236,2226,1238,2221,1239,2221,1236,2221,1200,2221,1165,2214,1167,2206,1166,2200,1165,2194,1164,2191,1164,2189,1163,2182,1159,2176,1158,2174,1157,2172,1157,2167,1157,2165,1152,2163,1148,2160,1145,2156,1141,2153,1139,2149,1136,2145,1133,2141,1129,2135,1127,2129,1124,2127,1125,2125,1125,2123,1125,2119,1124,2117,1123,2115,1120,2112,1119,2106,1114,2095,1115,2083,1115,2080,1123,2075,1130,2075,1132,2074,1133,2067,1135,2060,1136,2034,1136,2026,1137,2029,1127,2029,1124,2027,1121,2025,1119,2022,1120,2018,1120,2009,1116,2004,1114,1999,1111,1991,1109,1982,1109,1980,1109,1979,1111,1974,1119,1963,1137,1949,1138,1935,1138,1932,1138,1929,1137,1923,1134,1914,1135,1893,1133,1870,1132,1861,1132,1859,1139,1858,1145,1856,1151,1854,1156,1844,1158,1834,1159,1834,1172,1835,1182,1832,1187,1831,1188,1831,1189,L,1830,1192,Q,1822,1192,1815,1193,1814,1205,1812,1217,1812,1218,1808,1219,1803,1220,1802,1222,1801,1223,1799,1224,1797,1224,1801,1229,1804,1234,1797,1234,1789,1232,1787,1238,1784,1244,1776,1249,1775,1250,1772,1250,1769,1251,1765,1253,1760,1254,1760,1256,1758,1260,1756,1263,1746,1275,1732,1273,1729,1281,1729,1287,1729,1296,1722,1298,1720,1299,1719,1302,1715,1310,1709,1317,1708,1319,1707,1320,1696,1327,1683,1327,1680,1327,1679,1329,1674,1334,1668,1337,1667,1339,1665,1340,1663,1340,1662,1341,1656,1344,1651,1348,1649,1348,1649,1351,1646,1361,1647,1374,1648,1386,1641,1391,1640,1392,1639,1395,1635,1402,1636,1415,1637,1424,1639,1435,1639,1436,1639,1438,1640,1441,1641,1440,1642,1438,1648,1439,1654,1439,1661,1442,1668,1446,1669,1453,1669,1459,1664,1468,1659,1476,1658,1478,1658,1480,1658,1484,1658,1486,1649,1485,1637,1484,1627,1484,1612,1484,1598,1484,1592,1484,1590,1488,1588,1490,1586,1491,1578,1495,1580,1509,1584,1533,1584,1558,1585,1562,1587,1563,1591,1568,1593,1574,1593,1575,1596,1576,1599,1578,1606,1577,1615,1576,1614,1584,1612,1599,1615,1607,1616,1611,1616,1614,1613,1629,1618,1638,1619,1640,1619,1643,1621,1666,1622,1690,1622,1707,1622,1725,1630,1725,1637,1725,1644,1725,1651,1727,1659,1728,1668,1728,1681,1726,1689,1730,1691,1732,1693,1732,1698,1735,1701,1738,1703,1739,1704,1740,1711,1742,1714,1746,1715,1747,1716,1747,1734,1748,1752,1748,1798,1748,1845,1748,1851,1748,1857,1749,1860,1750,1863,1750,1875,1751,1888,1752,1912,1751,1935,1750,1962,1749,1975,1767,1976,1768,1978,1769,1985,1773,1993,1777,2003,1780,2008,1787,2013,1793,2020,1795,2027,1797,2028,1801,2029,1805,2032,1815,2033,1816,2034,1817,2037,1827,2044,1833,2045,1834,2046,1835,2047,1839,2048,1841,2049,1842,2049,1843,2050,1853,2050,1861,2050,1864,2049,1866,2049,1867,2050,1878,2050,1889,2052,1901,2053,1913,2053,1914,2054,1915,2056,1917,2059,1919,2061,1920,2063,1920,2077,1923,2091,1926,2096,1937,2100,1947,2100,1949,2105,1957,2111,1964,2112,1965,2114,1965,2125,1966,2137,1965,2140,1965,2142,1964,2146,1959,2152,1959,2165,1959,2164,1946,2162,1938,2167,1935,2171,1932,2178,1932,2180,1932,2183,1932,2190,1932,2191,1926,2191,1921,2192,1917,2193,1914,2201,1915,2212,1916,2219,1908,2220,1905,2221,1904,2232,1903,2235,1897,2238,1892,2245,1890,2247,1889,2250,1888,2272,1886,2294,1886,2296,1886,2299,1885,2304,1883,2307,1880,2309,1876,2312,1872,2313,1871,2314,1869,2316,1867,2319,1867,2322,1866,2327,1865,2328,1865,2330,1865,2333,1864,2337,1863,2340,1861,2345,1861,2349,1861,2352,1861,2399,1861,2447,1860,2461,1860,2463,1848,2463,1846,2465,1843,2464,1841,2466,1840,2468,1839,2473,1838,2482,1836,2486,1841,2487,1842,2488,1843,2490,1846,2491,1848,2495,1861,2509,1861,2514,1861,2523,1864,2525,1869,2528,1875,2528,1876,2528,1877,2528,1882,2531,1882,2535,1882,2540,1882,2553,1882,2565,1883,2573,1884,2577,1880,2578,1878,2580,1878,2584,1877,2589,1876,2590,1876,2591,1876,2593,1874,2593,1873,2596,1866,2595,1859,2593,1843,2603,1841,2605,1840,2607,1839,2609,1837,2611,1836,2616,1836,2616,1833,2615,1821,2618,1812,2620,1811,2621,1811,2660,1810,2701,1810,L,2703,1810,Q,2704,1815,2708,1816,2710,1816,2710,1817,2712,1821,2713,1823,2714,1827,2719,1830,2720,1833,2722,1834,2725,1835,2729,1835,2740,1835,2753,1833,2754,1809,2755,1785,2753,1778,2757,1774,2758,1772,2761,1771,2763,1768,2763,1766,2768,1759,2775,1756,2772,1754,2769,1754,2766,1754,2764,1753,2763,1753,2762,1752,L,2759,1750,Q,2759,1741,2753,1738,2749,1737,2744,1736,2741,1736,2740,1735,2734,1725,2735,1710,L,2735,1707,Q,2721,1705,2706,1706,2696,1706,2695,1704,L,2693,1702,2694,1695,Q,2694,1689,2690,1685,2685,1681,2682,1680,2679,1678,2675,1680,2670,1681,2666,1682,2661,1682,2661,1679,L,2661,1676,2661,1670,Q,2662,1663,2657,1660,2651,1656,2646,1651,2641,1646,2641,1645,2622,1643,2621,1644,2620,1644,2607,1634,2594,1624,2590,1622,2587,1620,2585,1619,2580,1618,2579,1612,2579,1609,2578,1607,2575,1602,2572,1598,2571,1596,2570,1595,2561,1595,2559,1592,2559,1590,2559,1589,2554,1585,2554,1580,2554,1577,2553,1575,2548,1569,2544,1565,2542,1564,2541,1564,2532,1562,2523,1562,2519,1562,2516,1563,2512,1564,2507,1564,2465,1566,2423,1567,2420,1566,2419,1565,2415,1563,2411,1564,2399,1566,2401,1556,2402,1546,2395,1546,2393,1546,2392,1545,2390,1544,2389,1540,2388,1538,2388,1536,2386,1531,2382,1528,2381,1527,2380,1526,2370,1525,2370,1518,2369,1510,2367,1503,2363,1502,2359,1501,2357,1500,2354,1500,2351,1500,2349,1499,2343,1496,2340,1487,2340,1485,2340,1484,2340,1479,2336,1476,2334,1476,2333,1475,2327,1473,2321,1472,2320,1472,2318,1472,L,2315,1471,Q,2313,1434,2313,1397,2313,1352,2313,1305,2313,1298,2312,1292,2309,1280,2312,1267,Q,2314,1250,2303,1243,Z]
                ], 
                label: "Braşov", 
                shortLabel: "BV", 
                labelPosition: [208.1,153.7], 
                labelAlignment: [CEN,MID]
            },
            "RO.CV": { 
                outlines: [
                    [M,2954,1028,Q,2954,1027,2953,1026,2951,1023,2950,1020,2950,1019,2950,1018,2949,1015,2948,1013,2947,1010,2940,1009,2938,1009,2937,1009,2916,1008,2895,1008,2893,1008,2892,1007,2891,1006,2890,1005,2879,1016,2869,1028,2869,1029,2867,1029,2862,1029,2860,1034,2854,1037,2855,1044,2857,1054,2849,1056,2846,1056,2845,1057,2837,1062,2833,1066,2831,1067,2829,1068,2815,1069,2808,1077,2807,1078,2807,1080,2807,1093,2803,1100,2802,1102,2801,1102,2787,1105,2772,1103,2763,1103,2759,1107,2756,1109,2753,1115,2748,1124,2741,1129,2740,1130,2739,1130,2731,1131,2721,1130,2710,1130,2703,1133,2702,1134,2701,1135,2698,1136,2696,1137,2694,1138,2692,1140,2686,1147,2683,1156,2680,1159,2679,1164,2679,1165,2677,1166,2647,1167,2618,1167,2611,1167,2605,1166,2583,1163,2558,1164,2555,1164,2553,1163,2547,1159,2536,1161,2529,1162,2531,1154,2531,1151,2530,1151,2524,1149,2521,1145,2515,1140,2516,1127,2516,1121,2516,1114,2517,1106,2502,1099,2485,1091,2486,1086,2486,1079,2485,1078,2482,1077,2481,1076,2478,1072,2469,1074,2467,1073,2466,1072,2462,1070,2459,1068,2456,1064,2454,1058,2453,1056,2451,1055,L,2449,1053,Q,2446,1045,2447,1035,2448,1022,2444,1013,2443,1012,2442,1012,2437,1010,2432,1008,2429,1008,2425,1006,2414,1001,2401,1001,2393,1001,2388,1004,2387,1007,2386,1008,2382,1015,2375,1020,2374,1021,2373,1022,2371,1026,2369,1026,2362,1028,2352,1027,2331,1025,2332,1044,2332,1046,2331,1049,2328,1054,2326,1058,2324,1063,2317,1062,2305,1062,2293,1061,2288,1060,2285,1064,2283,1069,2275,1066,2272,1066,2271,1068,2267,1072,2263,1077,2260,1079,2260,1082,2256,1093,2247,1096,2246,1096,2245,1098,2230,1102,2232,1115,2232,1126,2233,1138,2233,1147,2229,1156,2227,1158,2226,1161,2224,1164,2222,1164,2222,1164,2221,1165,2221,1200,2221,1236,2221,1239,2226,1238,2234,1236,2235,1243,2235,1244,2240,1251,2244,1257,2247,1266,L,2250,1275,2250,1275,Q,2255,1281,2262,1281,2269,1282,2268,1280,2266,1277,2267,1266,2267,1256,2269,1254,2270,1251,2270,1249,2267,1243,2272,1242,2275,1242,2277,1242,2288,1241,2300,1242,2302,1242,2303,1243,2314,1250,2312,1267,2309,1280,2312,1292,2313,1298,2313,1305,2313,1352,2313,1397,2313,1434,2315,1471,L,2321,1472,Q,2327,1473,2333,1475,2334,1476,2336,1476,2340,1479,2340,1484,2340,1485,2340,1487,2343,1496,2349,1499,2351,1500,2354,1500,2357,1500,2359,1501,2363,1502,2367,1503,2369,1510,2370,1518,2370,1525,2380,1526,2381,1527,2382,1528,2386,1531,2388,1536,2388,1538,2389,1540,2390,1544,2392,1545,2393,1546,2395,1546,2402,1546,2401,1556,2399,1566,2411,1564,2415,1563,2419,1565,2420,1566,2423,1567,2465,1566,2507,1564,2512,1564,2516,1563,2519,1562,2523,1562,2532,1562,2541,1564,2542,1564,2544,1565,2548,1569,2553,1575,2554,1577,2554,1580,2554,1585,2559,1589,2559,1590,2559,1592,2561,1595,2570,1595,2571,1596,2572,1598,2575,1602,2578,1607,2579,1609,2579,1612,2580,1618,2585,1619,2587,1620,2590,1622,2594,1624,2607,1634,2620,1644,2621,1644,2622,1643,2641,1645,2641,1646,2646,1651,2651,1656,2657,1660,2662,1663,2661,1670,L,2661,1676,2661,1679,Q,2661,1682,2666,1682,2670,1681,2675,1680,2679,1678,2682,1680,2685,1681,2690,1685,2694,1689,2694,1695,L,2693,1702,2695,1704,Q,2696,1706,2706,1706,2721,1705,2735,1707,L,2735,1710,Q,2734,1725,2740,1735,2741,1736,2744,1736,2749,1737,2753,1738,2759,1741,2759,1750,L,2762,1752,Q,2763,1753,2764,1753,2766,1754,2769,1754,2772,1754,2775,1756,2779,1754,2783,1754,2790,1754,2796,1750,2797,1750,2798,1748,2797,1738,2801,1730,2802,1729,2802,1728,2803,1725,2805,1724,2806,1722,2808,1722,2821,1720,2835,1721,2842,1722,2840,1712,2837,1699,2846,1694,2850,1693,2852,1692,2857,1688,2858,1685,2860,1682,2861,1681,2865,1679,2873,1679,2876,1679,2880,1680,2882,1681,2883,1682,2886,1685,2892,1687,2893,1698,2893,1710,2893,1713,2894,1715,2896,1718,2898,1723,2898,1726,2904,1727,2914,1725,2928,1723,2928,1714,2932,1715,2936,1714,2938,1712,2939,1710,2949,1709,2958,1707,2957,1700,2956,1689,2959,1688,2961,1687,2963,1686,2966,1685,2981,1674,2982,1670,2983,1667,2983,1620,2983,1574,2982,1571,2984,1569,2985,1564,2993,1558,2994,1557,2996,1557,2998,1556,2998,1555,3000,1547,2999,1540,2998,1529,3006,1528,3016,1528,3024,1528,L,3027,1528,Q,3029,1504,3029,1479,3029,1477,3028,1476,3024,1473,3021,1472,3019,1472,3018,1472,3009,1472,3003,1469,3002,1467,3002,1466,3000,1447,3000,1428,3000,1416,3002,1404,3004,1381,3003,1357,3003,1354,3004,1352,3006,1348,3008,1343,3010,1336,3017,1331,3023,1325,3024,1318,3026,1310,3030,1307,3035,1304,3036,1303,3036,1303,3039,1302,3041,1302,3046,1302,3051,1302,3053,1291,3054,1280,3056,1279,3058,1278,3059,1263,3060,1249,3060,1234,3060,1218,3059,1217,3058,1216,3054,1216,3050,1216,3045,1217,3035,1218,3034,1212,3034,1210,3033,1209,3030,1205,3031,1198,3033,1184,3027,1182,3020,1179,3017,1172,3014,1164,3015,1152,3016,1140,3006,1140,2999,1139,2993,1138,2991,1138,2987,1137,2980,1133,2981,1120,2982,1113,2981,1107,2980,1103,2974,1102,2967,1100,2962,1099,2958,1097,2956,1082,2955,1066,2955,1033,Q,2955,1031,2954,1028,Z]
                ], 
                label: "Covasna", 
                shortLabel: "CV", 
                labelPosition: [272.1,137.8], 
                labelAlignment: [CEN,MID]
            },
            "RO.HR": { 
                outlines: [
                    [M,2484,146,Q,2485,138,2478,139,2475,139,2472,138,2470,138,2469,137,2467,135,2465,134,2460,132,2454,128,2448,123,2449,110,2449,108,2448,108,2440,106,2433,106,2420,106,2408,107,2407,107,2406,107,2404,108,2402,109,2400,115,2400,124,L,2400,126,Q,2388,128,2377,128,2370,128,2364,130,2349,132,2346,121,2345,120,2345,118,2344,115,2343,114,2337,107,2331,102,2330,101,2328,101,2326,100,2326,99,2324,96,2319,97,2313,98,2313,95,2312,89,2308,82,2307,79,2307,77,2306,71,2297,70,2295,70,2294,69,2291,65,2285,65,2267,66,2250,67,2236,67,2235,59,2234,55,2233,52,2233,51,2232,48,2231,46,2231,44,2228,38,2221,33,2220,33,2219,32,2208,30,2202,25,2199,23,2200,21,2198,18,2197,16,2194,12,2190,10,2189,9,2188,9,2164,8,2141,9,2130,9,2123,13,2122,14,2121,14,2114,14,2116,23,2116,26,2115,28,2112,32,2115,38,2117,44,2114,45,2110,46,2102,59,2093,72,2093,73,2093,75,2092,76,2090,80,2087,84,2086,88,2085,88,2070,90,2056,90,2054,90,2053,89,2045,84,2043,72,L,2035,72,Q,2035,99,2036,126,2036,131,2041,133,2042,134,2043,136,2044,137,2047,137,2055,137,2060,146,2063,156,2073,156,2086,156,2084,173,2083,178,2083,184,2083,230,2083,274,2082,287,2080,300,2080,302,2078,304,2075,305,2073,305,2067,306,2066,310,2065,311,2062,312,2059,313,2059,321,2060,330,2060,338,2060,342,2065,342,2081,339,2090,350,2091,351,2091,354,2091,399,2091,446,2091,484,2090,521,2090,522,2089,523,2078,527,2074,534,2073,536,2072,539,2072,540,2071,541,2062,550,2062,562,2062,571,2060,582,2060,584,2058,587,2047,592,2041,601,2040,603,2040,606,2041,624,2036,636,2036,637,2035,638,2026,643,2025,656,2025,658,2025,659,2024,665,2019,667,2012,668,2004,669,1998,670,1993,670,1981,671,1972,674,1969,675,1967,676,1966,678,1962,680,1952,683,1939,683,1917,682,1893,681,1888,681,1887,685,1887,687,1884,688,1881,692,1880,700,1879,701,1878,702,1868,707,1863,716,1862,717,1861,718,1855,724,1856,733,1856,736,1856,738,1855,763,1855,787,1854,797,1852,807,L,1850,809,Q,1849,809,1847,810,1843,813,1836,815,1834,816,1833,817,1832,818,1830,818,1816,819,1815,834,1815,835,1814,836,1809,840,1810,849,1811,852,1812,855,1809,866,1804,868,1803,869,1801,870,1789,868,1782,876,1778,878,1775,880,1773,881,1770,883,1761,886,1760,899,1760,914,1763,928,L,1765,928,Q,1776,928,1783,946,1788,959,1790,984,1791,988,1794,990,1795,992,1797,994,1798,995,1801,995,1810,996,1810,1008,1810,1009,1812,1010,1813,1011,1814,1012,1819,1014,1824,1014,1827,1015,1826,1020,1823,1027,1830,1028,1831,1028,1832,1031,1837,1038,1847,1037,1860,1035,1873,1035,1903,1035,1935,1037,1938,1046,1947,1049,1956,1052,1964,1058,1967,1060,1967,1062,1968,1064,1968,1066,1968,1083,1979,1092,1980,1093,1980,1095,1980,1099,1986,1100,1988,1103,1991,1105,1995,1108,1999,1111,2004,1114,2009,1116,2018,1120,2022,1120,2025,1119,2027,1121,2029,1124,2029,1127,2026,1137,2034,1136,2060,1136,2067,1135,2074,1133,2075,1132,2075,1130,2080,1123,2083,1115,2095,1115,2106,1114,2112,1119,2115,1120,2117,1123,2119,1124,2123,1125,2125,1125,2127,1125,2129,1124,2135,1127,2141,1129,2145,1133,2149,1136,2153,1139,2156,1141,2160,1145,2163,1148,2165,1152,2167,1157,2172,1157,2174,1157,2176,1158,2182,1159,2189,1163,2191,1164,2194,1164,2200,1165,2206,1166,2214,1167,2221,1165,2222,1164,2222,1164,2224,1164,2226,1161,2227,1158,2229,1156,2233,1147,2233,1138,2232,1126,2232,1115,2230,1102,2245,1098,2246,1096,2247,1096,2256,1093,2260,1082,2260,1079,2263,1077,2267,1072,2271,1068,2272,1066,2275,1066,2283,1069,2285,1064,2288,1060,2293,1061,2305,1062,2317,1062,2324,1063,2326,1058,2328,1054,2331,1049,2332,1046,2332,1044,2331,1025,2352,1027,2362,1028,2369,1026,2371,1026,2373,1022,2374,1021,2375,1020,2382,1015,2386,1008,2387,1007,2388,1004,2393,1001,2401,1001,2414,1001,2425,1006,2429,1008,2432,1008,2437,1010,2442,1012,2443,1012,2444,1013,2448,1022,2447,1035,2446,1045,2449,1053,L,2451,1055,Q,2453,1056,2454,1058,2456,1064,2459,1068,2462,1070,2466,1072,2467,1073,2469,1074,2478,1072,2481,1076,2482,1077,2485,1078,2486,1079,2486,1086,2485,1091,2502,1099,2517,1106,2516,1114,2516,1121,2516,1127,2515,1140,2521,1145,2524,1149,2530,1151,2531,1151,2531,1154,2529,1162,2536,1161,2547,1159,2553,1163,2555,1164,2558,1164,2583,1163,2605,1166,2611,1167,2618,1167,2647,1167,2677,1166,2679,1165,2679,1164,2680,1159,2683,1156,2686,1147,2692,1140,2694,1138,2696,1137,2698,1136,2701,1135,2702,1134,2703,1133,2710,1130,2721,1130,2731,1131,2739,1130,2740,1130,2741,1129,2748,1124,2753,1115,2756,1109,2759,1107,2763,1103,2772,1103,2787,1105,2801,1102,2802,1102,2803,1100,2807,1093,2807,1080,2807,1078,2808,1077,2815,1069,2829,1068,2831,1067,2833,1066,2837,1062,2845,1057,2846,1056,2849,1056,2857,1054,2855,1044,2854,1037,2860,1034,2862,1029,2867,1029,2869,1029,2869,1028,2879,1016,2890,1005,L,2889,1004,Q,2887,1002,2887,997,2888,985,2889,972,2889,971,2889,969,2890,960,2900,960,2907,961,2908,963,L,2908,957,Q,2906,949,2907,942,2908,935,2906,922,2889,921,2870,921,2868,921,2866,922,2863,923,2862,926,2858,929,2855,933,2848,940,2844,948,2842,952,2835,952,2822,951,2811,950,2809,950,2808,950,2802,948,2801,944,2801,939,2800,935,2800,933,2798,932,2796,930,2795,929,2793,927,2788,928,L,2786,928,Q,2783,903,2784,877,2784,869,2775,872,2753,872,2731,873,2721,873,2715,868,2714,868,2713,867,2710,866,2709,865,2701,859,2697,855,2686,843,2670,843,2667,843,2665,842,2659,840,2661,830,2661,828,2660,828,2653,825,2646,825,2643,825,2642,824,2641,822,2641,818,2639,810,2644,806,2645,805,2645,803,2647,791,2661,791,2673,792,2670,776,2669,768,2675,768,2684,767,2695,767,2698,767,2698,766,2701,760,2706,754,2707,753,2708,753,2714,751,2721,750,L,2726,749,Q,2728,718,2728,687,2728,684,2727,685,2725,682,2726,677,2727,664,2725,656,L,2724,654,Q,2715,651,2706,651,2703,651,2702,650,2701,649,2700,648,2696,644,2697,636,2697,633,2696,633,2689,631,2694,621,2698,611,2685,608,2671,605,2673,588,2675,570,2675,561,2673,551,2663,550,2652,548,2646,547,2640,547,2639,547,2626,552,2612,556,2598,559,2598,564,2598,569,2598,572,2597,575,2596,577,2596,582,2592,582,2579,582,2565,582,2558,583,2558,577,2558,572,2554,569,2553,568,2553,566,2553,561,2549,562,2542,561,2536,560,2534,560,2531,560,2529,559,2528,558,2525,546,2525,533,L,2525,531,Q,2515,529,2511,526,2510,525,2509,523,2507,502,2507,482,2507,479,2509,479,2514,477,2515,470,2515,468,2516,467,L,2518,466,Q,2520,447,2522,428,2522,421,2513,423,2511,423,2510,422,2507,419,2503,421,2498,422,2498,418,2498,408,2498,397,2498,349,2498,303,2498,300,2499,299,2501,298,2500,292,2498,279,2505,274,2512,270,2518,267,2519,265,2519,264,2520,257,2521,251,2523,237,2519,229,2518,226,2517,224,2510,217,2511,208,2511,206,2510,202,2510,201,2509,200,2507,189,2503,180,2501,178,2502,177,2501,167,2498,162,2497,161,2496,161,2489,158,2487,153,2486,152,2485,151,Q,2484,149,2484,146,Z]
                ], 
                label: "Harghita", 
                shortLabel: "HR", 
                labelPosition: [233.4,58.7], 
                labelAlignment: [CEN,MID]
            },
            "RO.MS": { 
                outlines: [
                    [M,2021,64,Q,1974,64,1929,63,1927,63,1926,63,1919,63,1921,54,1921,52,1920,48,1920,47,1919,46,L,1918,44,Q,1906,41,1893,41,1881,41,1870,40,1862,39,1858,42,1857,45,1855,45,1841,47,1837,58,1834,59,1832,60,1829,61,1828,64,1826,65,1824,66,1821,66,1819,67,1818,68,1816,69,1795,70,1775,69,1765,69,1759,72,1758,73,1758,75,1753,91,1754,110,1754,113,1753,114,1751,118,1750,124,1748,126,1746,127,1745,129,1742,132,1736,141,1729,146,1716,158,1703,169,1701,170,1698,171,1690,180,1685,187,1681,193,1674,195,1664,200,1661,208,1660,211,1658,215,1656,219,1652,224,1648,230,1649,233,1649,237,1649,241,1648,245,1649,250,1649,255,1653,260,1656,264,1662,268,1671,273,1670,285,1669,287,1668,288,1667,291,1665,292,1661,297,1656,298,1655,299,1654,299,1650,300,1642,301,1634,301,1637,297,1641,292,1630,289,1619,287,1616,286,1612,286,1612,285,1612,277,1609,272,1605,268,1600,268,1597,267,1597,262,1599,249,1585,254,1577,254,1569,254,1559,252,1554,262,1553,264,1551,267,1550,268,1549,268,1544,268,1542,273,1539,274,1538,275,1532,281,1534,295,1536,308,1529,313,1518,322,1513,328,1512,330,1511,331,1508,332,1508,334,1506,341,1505,347,1505,348,1505,349,1504,373,1505,397,1505,411,1498,418,1495,419,1493,420,1479,421,1464,421,1462,421,1461,422,1457,424,1454,430,1450,437,1444,443,1443,444,1442,445,1415,446,1388,446,1340,446,1294,446,1291,446,1289,445,1278,439,1270,430,1269,429,1267,429,1265,428,1264,427,1263,425,1263,423,1261,421,1261,418,1260,416,1259,414,1257,410,1249,410,1220,410,1191,409,1181,409,1175,412,1174,415,1173,415,1168,416,1166,421,1165,424,1161,430,1159,434,1155,436,1154,437,1152,439,1149,442,1147,446,1146,449,1146,452,1145,454,1144,463,1142,472,1143,476,1144,480,1146,485,1147,489,1147,491,1148,493,1148,495,1149,497,1150,498,1154,503,1155,506,1156,507,1158,507,1160,508,1160,509,1162,515,1162,523,1162,526,1161,527,1156,534,1149,539,1142,545,1140,553,1138,556,1137,556,1131,558,1129,564,1128,565,1128,566,1128,576,1118,575,1116,575,1113,576,1110,577,1104,577,1097,577,1093,582,1092,583,1091,583,1085,584,1086,590,1087,600,1091,608,1092,609,1092,611,1093,613,1094,614,1095,615,1097,617,1100,619,1106,621,1110,622,1113,626,1115,627,1116,627,1119,628,1121,630,1122,632,1122,636,1122,652,1123,669,1123,678,1118,682,1111,686,1098,685,1088,683,1080,687,1079,688,1078,688,1075,689,1074,691,1063,699,1057,707,1056,708,1055,708,1043,713,1039,725,1037,730,1033,736,1033,737,1032,738,1031,741,1030,743,1030,745,1029,745,1024,748,1023,754,1023,755,1023,756,1021,769,1022,782,1036,781,1050,782,1056,782,1056,792,1055,801,1057,810,L,1060,810,Q,1070,811,1074,819,1075,823,1075,825,1075,835,1073,842,1073,843,1070,844,1064,848,1064,855,1066,867,1072,876,1078,885,1080,890,1082,896,1079,899,1076,902,1078,904,1081,914,1087,921,1088,922,1091,922,1103,923,1105,913,1106,908,1106,902,1106,897,1106,891,1110,891,1113,892,1116,893,1117,895,1121,897,1125,899,1126,899,1127,902,1126,918,1147,915,1155,914,1156,922,1156,923,1158,924,1161,933,1161,942,1161,943,1161,945,1162,949,1167,951,1173,953,1179,957,1180,958,1183,959,1184,959,1185,960,1189,970,1199,976,1201,976,1207,981,1212,986,1212,989,1213,992,1215,996,1217,1000,1221,1003,1222,1004,1223,1004,1229,1004,1235,1007,1237,1008,1240,1008,1253,1008,1265,1010,L,1266,1013,Q,1266,1014,1267,1015,1271,1020,1271,1028,1272,1029,1273,1029,1297,1030,1321,1031,1345,1029,1368,1032,1378,1033,1390,1033,1405,1033,1405,1020,1405,1017,1406,1015,1412,1009,1419,1006,1421,1004,1424,1004,1438,1001,1451,1004,1453,1005,1455,1008,1457,1013,1462,1020,1466,1027,1468,1030,1469,1033,1469,1034,1468,1035,1471,1038,1473,1040,1488,1039,1513,1038,1537,1037,1538,1036,1540,1035,1543,1031,1547,1022,1548,1017,1555,1016,1556,1016,1557,1015,1563,1008,1575,1008,1590,1008,1604,1009,1605,1009,1606,1010,1610,1014,1609,1022,1606,1037,1614,1041,1617,1044,1619,1044,1622,1044,1626,1043,1630,1042,1639,1045,1647,1047,1646,1058,1644,1065,1645,1071,1645,1118,1645,1164,1644,1174,1646,1185,1646,1190,1655,1191,1678,1189,1701,1189,1709,1189,1711,1185,1715,1177,1722,1170,1724,1169,1727,1168,1728,1168,1729,1167,1730,1165,1732,1166,1737,1165,1742,1167,1754,1169,1764,1174,1765,1174,1765,1176,1765,1186,1767,1194,L,1770,1194,Q,1792,1194,1815,1193,1822,1192,1830,1192,L,1831,1189,Q,1831,1188,1832,1187,1835,1182,1834,1172,1834,1159,1844,1158,1854,1156,1856,1151,1858,1145,1859,1139,1861,1132,1870,1132,1893,1133,1914,1135,1923,1134,1929,1137,1932,1138,1935,1138,1949,1138,1963,1137,1974,1119,1979,1111,1980,1109,1982,1109,1991,1109,1999,1111,1995,1108,1991,1105,1988,1103,1986,1100,1980,1099,1980,1095,1980,1093,1979,1092,1968,1083,1968,1066,1968,1064,1967,1062,1967,1060,1964,1058,1956,1052,1947,1049,1938,1046,1935,1037,1903,1035,1873,1035,1860,1035,1847,1037,1837,1038,1832,1031,1831,1028,1830,1028,1823,1027,1826,1020,1827,1015,1824,1014,1819,1014,1814,1012,1813,1011,1812,1010,1810,1009,1810,1008,1810,996,1801,995,1798,995,1797,994,1795,992,1794,990,1791,988,1790,984,1788,959,1783,946,1776,928,1765,928,L,1763,928,Q,1760,914,1760,899,1761,886,1770,883,1773,881,1775,880,1778,878,1782,876,1789,868,1801,870,1803,869,1804,868,1809,866,1812,855,1811,852,1810,849,1809,840,1814,836,1815,835,1815,834,1816,819,1830,818,1832,818,1833,817,1834,816,1836,815,1843,813,1847,810,1849,809,1850,809,L,1852,807,Q,1854,797,1855,787,1855,763,1856,738,1856,736,1856,733,1855,724,1861,718,1862,717,1863,716,1868,707,1878,702,1879,701,1880,700,1881,692,1884,688,1887,687,1887,685,1888,681,1893,681,1917,682,1939,683,1952,683,1962,680,1966,678,1967,676,1969,675,1972,674,1981,671,1993,670,1998,670,2004,669,2012,668,2019,667,2024,665,2025,659,2025,658,2025,656,2026,643,2035,638,2036,637,2036,636,2041,624,2040,606,2040,603,2041,601,2047,592,2058,587,2060,584,2060,582,2062,571,2062,562,2062,550,2071,541,2072,540,2072,539,2073,536,2074,534,2078,527,2089,523,2090,522,2090,521,2091,484,2091,446,2091,399,2091,354,2091,351,2090,350,2081,339,2065,342,2060,342,2060,338,2060,330,2059,321,2059,313,2062,312,2065,311,2066,310,2067,306,2073,305,2075,305,2078,304,2080,302,2080,300,2082,287,2083,274,2083,230,2083,184,2083,178,2084,173,2086,156,2073,156,2063,156,2060,146,2055,137,2047,137,2044,137,2043,136,2042,134,2041,133,2036,131,2036,126,2035,99,2035,72,2035,68,2035,64,Q,2028,64,2021,64,Z]
                ], 
                label: "Mureş", 
                shortLabel: "MS", 
                labelPosition: [155.6,68.1], 
                labelAlignment: [CEN,MID]
            },
            "RO.SB": { 
                outlines: [
                    [M,1606,1010,Q,1605,1009,1604,1009,1590,1008,1575,1008,1563,1008,1557,1015,1556,1016,1555,1016,1548,1017,1547,1022,1543,1031,1540,1035,1538,1036,1537,1037,1513,1038,1488,1039,1473,1040,1471,1038,1468,1035,1469,1034,1469,1033,1468,1030,1466,1027,1462,1020,1457,1013,1455,1008,1453,1005,1451,1004,1438,1001,1424,1004,1421,1004,1419,1006,1412,1009,1406,1015,1405,1017,1405,1020,1405,1033,1390,1033,1378,1033,1368,1032,1345,1029,1321,1031,1297,1030,1273,1029,1272,1029,1271,1028,1271,1020,1267,1015,1266,1014,1266,1013,L,1265,1010,Q,1253,1008,1240,1008,1237,1008,1235,1007,1229,1004,1223,1004,1223,1005,1224,1006,L,1224,1006,Q,1222,1007,1224,1007,1225,1007,1226,1012,1226,1013,1226,1014,1230,1041,1229,1069,1229,1078,1229,1087,1229,1090,1224,1090,1222,1090,1218,1092,1216,1091,1215,1093,1214,1094,1212,1095,1211,1097,1210,1100,1206,1102,1204,1107,1203,1108,1201,1108,1189,1109,1178,1108,1171,1108,1166,1113,1163,1114,1162,1117,1159,1123,1156,1129,1155,1131,1153,1132,1144,1136,1137,1140,1135,1142,1131,1143,1124,1145,1123,1156,1123,1158,1122,1160,1117,1164,1106,1164,1105,1164,1104,1166,1098,1171,1093,1176,1086,1182,1090,1192,1090,1193,1090,1194,1091,1207,1091,1219,1091,1229,1090,1237,1090,1238,1090,1240,1087,1248,1078,1249,1076,1249,1075,1250,1058,1261,1047,1272,1045,1273,1042,1273,1033,1273,1027,1271,1026,1270,1026,1268,1025,1266,1023,1265,1018,1258,1010,1251,1008,1250,1006,1249,999,1245,986,1247,974,1248,963,1248,961,1248,958,1249,957,1250,956,1251,955,1253,952,1254,947,1256,945,1261,939,1270,940,1284,941,1294,942,1306,941,1329,939,1351,939,1352,938,1354,934,1356,927,1357,915,1355,903,1354,889,1354,889,1366,888,1386,885,1407,L,883,1407,Q,870,1404,866,1411,865,1415,865,1417,866,1435,864,1447,863,1451,862,1452,860,1454,858,1456,854,1460,848,1464,847,1465,845,1465,833,1465,822,1468,820,1469,816,1471,810,1475,808,1483,808,1485,807,1487,802,1494,791,1493,784,1491,778,1491,765,1490,759,1495,758,1496,757,1499,751,1509,752,1522,753,1533,753,1545,753,1555,752,1565,752,1567,749,1568,739,1580,729,1599,725,1606,726,1619,727,1632,729,1645,L,731,1647,Q,739,1649,747,1653,755,1656,754,1670,753,1682,753,1694,753,1743,753,1791,753,1805,753,1815,743,1817,741,1822,740,1824,739,1826,737,1828,735,1829,730,1831,728,1836,727,1837,724,1841,729,1846,733,1849,734,1852,740,1856,746,1860,752,1858,752,1857,753,1857,758,1855,759,1853,760,1850,765,1849,767,1848,768,1847,771,1846,773,1843,776,1842,782,1840,781,1835,785,1834,796,1830,810,1833,821,1835,825,1830,828,1824,830,1820,832,1815,837,1813,842,1811,847,1809,848,1809,858,1805,868,1800,888,1802,908,1803,926,1804,944,1805,957,1804,968,1804,980,1803,984,1803,988,1806,992,1811,995,1817,996,1819,1007,1822,L,1021,1826,Q,1027,1826,1058,1826,1089,1826,1118,1826,1146,1827,1156,1828,1167,1829,1172,1828,1177,1827,1178,1826,1192,1824,1205,1824,1209,1824,1210,1823,1218,1817,1220,1805,1233,1805,1245,1806,1260,1806,1269,1799,1270,1798,1270,1797,1271,1792,1272,1787,1272,1786,1272,1785,1273,1782,1275,1780,1276,1778,1278,1778,1296,1777,1314,1777,1320,1776,1327,1775,1336,1774,1345,1769,1348,1766,1351,1761,1351,1760,1352,1759,1360,1755,1370,1755,1417,1756,1463,1756,1469,1756,1477,1754,1486,1752,1497,1750,1508,1748,1516,1742,1523,1736,1527,1734,1531,1731,1532,1729,1532,1727,1534,1729,1536,1730,1538,1729,1539,1727,1541,1727,1542,1725,1544,1725,1583,1725,1622,1725,1622,1707,1622,1690,1621,1666,1619,1643,1619,1640,1618,1638,1613,1629,1616,1614,1616,1611,1615,1607,1612,1599,1614,1584,1615,1576,1606,1577,1599,1578,1596,1576,1593,1575,1593,1574,1591,1568,1587,1563,1585,1562,1584,1558,1584,1533,1580,1509,1578,1495,1586,1491,1588,1490,1590,1488,1592,1484,1598,1484,1612,1484,1627,1484,1637,1484,1649,1485,1658,1486,1658,1484,1658,1480,1658,1478,1659,1476,1664,1468,1669,1459,1669,1453,1668,1446,1661,1442,1654,1439,1648,1439,1642,1438,1641,1440,1640,1441,1639,1438,1639,1436,1639,1435,1637,1424,1636,1415,1635,1402,1639,1395,1640,1392,1641,1391,1648,1386,1647,1374,1646,1361,1649,1351,1649,1348,1651,1348,1656,1344,1662,1341,1663,1340,1665,1340,1667,1339,1668,1337,1674,1334,1679,1329,1680,1327,1683,1327,1696,1327,1707,1320,1708,1319,1709,1317,1715,1310,1719,1302,1720,1299,1722,1298,1729,1296,1729,1287,1729,1281,1732,1273,1746,1275,1756,1263,1758,1260,1760,1256,1760,1254,1765,1253,1769,1251,1772,1250,1775,1250,1776,1249,1784,1244,1787,1238,1789,1232,1797,1234,1804,1234,1801,1229,1797,1224,1799,1224,1801,1223,1802,1222,1803,1220,1808,1219,1812,1218,1812,1217,1814,1205,1815,1193,1792,1194,1770,1194,L,1767,1194,Q,1765,1186,1765,1176,1765,1174,1764,1174,1754,1169,1742,1167,1737,1165,1732,1166,1730,1165,1729,1167,1728,1168,1727,1168,1724,1169,1722,1170,1715,1177,1711,1185,1709,1189,1701,1189,1678,1189,1655,1191,1646,1190,1646,1185,1644,1174,1645,1164,1645,1118,1645,1071,1644,1065,1646,1058,1647,1047,1639,1045,1630,1042,1626,1043,1622,1044,1619,1044,1617,1044,1614,1041,1606,1037,1609,1022,Q,1610,1014,1606,1010,Z]
                ], 
                label: "Sibiu", 
                shortLabel: "SB", 
                labelPosition: [127,143], 
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
                            new Error('fusioncharts.maps.js is required in order to define vizualization'));
                        return;
                    }
                    api(alias, def, api.geo);
                }, [name, definition], window]
            });
        }
    }

}]);