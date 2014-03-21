/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Kumgangsan.18.08-09-2012 12:29:01
 */
FusionCharts(["private", "modules.renderer.js-kumgangsan", function () {

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
        name: "Kumgangsan",
        revision: 18,
        standaloneInit: true,

        baseWidth: 232,
        baseHeight: 285,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "KP.KS": { 
                outlines: [
                    [M,1365,181,Q,1362,183,1363,189,1364,196,1362,199,1360,202,1358,204,1357,205,1355,206,1351,207,1350,213,1350,215,1350,218,1349,219,1349,219,1349,231,1347,241,1347,243,1346,248,1346,253,1342,254,1337,254,1331,254,1324,254,1315,254,1306,255,1303,256,1300,257,1297,256,1294,256,1292,258,1290,260,1289,261,1288,262,1288,266,1288,281,1287,295,1287,297,1287,298,1287,301,1285,301,1278,301,1271,301,1269,301,1266,302,1266,302,1265,303,1263,303,1263,304,1261,308,1262,316,1262,324,1245,323,1228,323,1200,323,1172,323,1158,322,1145,321,1139,323,1133,324,1125,323,1116,321,1113,320,1110,320,1106,318,1102,317,1101,316,1099,315,1097,314,1095,313,1095,313,1093,306,1094,298,1094,293,1092,291,1090,291,1086,289,1081,286,1080,286,1078,285,1078,285,1078,284,1077,280,1073,276,1075,271,1077,266,1076,262,1075,258,1068,251,1061,245,1060,243,1059,241,1059,240,1058,239,1058,231,1057,223,1055,213,1055,211,1054,210,1051,205,1045,204,1042,203,1040,201,1039,198,1037,196,1035,192,1036,187,1036,180,1037,172,1037,167,1034,164,1032,161,1029,158,1028,156,1025,147,1021,137,1011,137,1001,136,997,136,994,136,993,136,976,135,959,135,930,135,900,135,899,135,897,136,896,136,895,137,889,138,885,142,882,146,880,147,878,149,876,151,873,156,872,166,870,176,857,175,844,173,833,175,L,821,176,Q,821,175,816,175,812,174,808,175,804,175,788,175,772,175,773,162,774,150,774,146,773,146,771,145,760,142,754,142,748,142,746,139,743,135,740,133,734,128,733,128,731,127,729,126,L,728,125,726,125,Q,724,125,721,122,718,120,716,118,711,115,705,108,693,96,681,88,680,88,673,87,665,87,659,87,653,86,647,87,642,87,640,87,638,86,635,87,631,88,629,84,627,79,627,78,626,76,627,75,628,74,627,73,625,71,625,69,625,66,620,63,615,59,612,59,609,59,608,59,579,58,550,58,521,58,491,58,490,58,488,57,467,57,447,57,445,57,444,57,443,57,440,57,436,56,427,56,418,56,416,53,L,414,49,Q,413,49,411,47,409,45,405,43,401,41,398,41,394,41,390,37,386,33,385,26,385,25,383,24,382,23,380,22,380,22,377,22,374,21,356,21,337,21,320,21,304,21,296,21,288,20,278,21,268,21,266,22,264,23,261,25,257,27,257,31,256,34,254,38,251,42,252,51,252,59,249,63,249,65,248,65,235,67,223,66,215,66,209,69,207,70,205,73,205,74,205,75,205,81,201,83,197,85,192,90,192,91,188,92,185,93,182,95,180,98,176,99,173,101,169,104,165,107,159,109,156,110,155,111,149,118,148,121,146,125,142,127,137,130,134,130,131,129,123,137,114,144,102,145,90,145,86,152,83,158,79,162,78,163,77,164,76,166,75,166,74,167,74,166,74,166,71,169,68,173,66,176,64,180,60,183,55,185,51,188,47,190,44,192,41,195,39,196,36,196,36,197,36,198,35,199,33,199,32,200,29,203,26,208,26,209,25,209,25,215,25,221,L,25,224,Q,25,251,25,278,25,307,25,337,25,366,25,395,25,405,25,414,26,415,26,415,28,419,31,421,35,423,40,425,47,429,51,433,52,434,52,436,54,441,54,449,53,464,53,478,53,483,54,486,55,488,55,489,57,492,58,494,61,500,64,504,65,506,67,509,69,511,73,513,78,515,81,520,84,524,85,528,85,531,84,544,82,556,83,569,83,581,83,583,83,586,84,591,84,596,84,597,84,599,85,600,85,601,88,602,92,603,95,604,96,604,97,605,101,608,105,610,106,610,106,612,107,615,108,617,111,620,114,624,115,625,116,629,116,632,118,633,119,634,119,635,120,641,127,643,129,644,130,645,132,646,134,647,139,651,145,653,147,654,147,655,148,658,150,659,152,661,152,662,154,668,156,673,157,674,158,676,158,677,161,679,164,681,167,683,170,685,172,685,173,686,175,686,176,686,180,690,181,691,182,691,184,692,187,694,188,695,189,696,193,698,199,703,200,704,201,706,202,707,202,707,204,711,208,714,209,714,211,715,212,715,213,716,218,719,223,721,227,722,227,729,226,744,226,757,225,769,229,770,233,770,238,772,242,773,251,773,259,772,262,772,266,771,267,772,268,772,273,772,278,773,281,772,290,770,294,774,295,775,295,776,296,777,296,778,297,780,297,781,298,782,298,783,299,790,307,792,308,792,311,794,314,796,327,797,340,798,355,796,371,795,377,799,383,803,386,807,389,810,390,812,391,813,392,814,392,815,393,816,395,821,397,823,398,824,398,825,401,830,408,833,411,833,412,835,413,836,414,836,418,839,418,847,418,849,419,852,420,853,420,853,421,855,421,857,421,859,424,860,430,862,434,865,436,866,438,869,439,870,439,872,439,876,440,881,439,883,440,885,439,892,440,899,441,901,441,906,441,906,441,907,441,915,440,922,440,929,443,931,444,932,448,933,451,934,456,935,461,936,461,945,461,954,467,955,472,956,478,958,485,961,484,961,483,961,484,962,484,963,485,970,485,977,487,978,489,979,491,980,492,980,496,982,499,983,501,984,503,985,504,987,506,988,507,988,508,989,509,990,509,990,510,992,511,993,514,995,517,996,517,1000,516,1004,524,1003,531,1002,536,1003,541,1003,543,1003,573,1003,602,1003,631,1003,661,1003,690,1003,719,1003,742,1003,765,1004,766,1004,768,1004,770,1005,772,1006,773,1006,773,1008,773,1017,774,1026,774,1027,775,1028,777,1031,780,1033,782,1033,783,1033,795,1034,807,1034,817,1035,827,1035,828,1036,828,1036,831,1038,833,1041,833,1042,834,1042,835,1045,838,1045,839,1046,840,1047,843,1052,850,1056,851,1057,852,1058,854,1059,855,1061,861,1066,864,1070,867,1075,872,1080,876,1084,876,1085,877,1086,878,1085,878,1084,882,1089,886,1093,892,1097,894,1098,898,1101,899,1102,900,1103,901,1104,901,1105,902,1106,904,1110,907,1114,906,1118,906,1122,906,1127,907,1132,906,1141,906,1149,907,1168,907,1183,908,1199,908,1201,908,1203,908,1205,908,1206,907,1224,907,1242,907,1271,907,1287,907,1302,906,1304,905,1306,904,1310,903,1313,902,1315,901,1316,899,1320,897,1324,897,1325,896,1325,894,1330,891,1335,889,1336,888,1337,888,1344,888,1351,880,1351,871,1351,867,1354,864,1357,862,1359,861,1360,860,1360,859,1361,857,1362,851,1365,847,1371,846,1373,846,1374,845,1389,845,1404,845,1407,845,1409,844,1410,844,1411,842,1418,835,1421,834,1422,832,1423,831,1425,830,1425,825,1426,820,1426,813,1425,807,1428,806,1429,805,1430,799,1436,800,1445,802,1454,793,1454,791,1454,790,1455,786,1457,784,1459,782,1460,782,1461,781,1473,781,1485,781,1489,781,1493,779,1503,773,1511,772,1512,771,1513,769,1513,768,1513,755,1513,756,1522,756,1532,756,1546,757,1559,741,1560,725,1561,724,1562,722,1563,721,1562,720,1561,718,1563,717,1565,714,1569,710,1572,712,1579,711,1584,714,1588,717,1591,716,1595,714,1599,712,1603,709,1607,702,1607,695,1606,687,1611,679,1615,678,1614,676,1613,675,1613,674,1613,673,1614,672,1615,670,1614,668,1612,662,1615,655,1619,650,1620,645,1621,644,1622,631,1630,632,1646,632,1661,632,1676,632,1705,632,1734,632,1764,632,1793,632,1802,636,1806,638,1809,644,1809,645,1809,646,1809,650,1810,654,1810,656,1810,657,1813,660,1823,660,1833,660,1835,660,1837,661,1842,661,1847,661,1876,661,1906,661,1933,661,1961,661,1965,667,1965,668,1965,669,1966,673,1968,675,1971,676,1972,677,1973,680,1974,681,1979,682,1985,685,1987,686,1988,686,1989,686,1996,693,1996,694,1996,694,1996,699,1999,701,2003,702,2005,705,2007,706,2008,707,2009,708,2011,709,2011,717,2014,726,2013,729,2013,729,2016,732,2017,732,2021,732,2023,733,2023,739,2023,745,2023,751,2023,756,2023,758,2023,760,2023,761,2024,761,2024,766,2025,770,2026,771,2027,772,2029,772,2031,772,2033,772,2035,777,2042,781,2048,791,2048,800,2049,814,2049,829,2049,847,2050,865,2050,873,2044,880,2038,876,2033,872,2029,877,2025,878,2024,879,2023,880,2021,881,2020,883,2018,889,2017,894,2016,895,2017,896,2017,900,2016,903,2014,905,2016,907,2017,916,2017,925,2017,931,2018,937,2018,948,2018,959,2018,955,2006,950,1994,951,1991,951,1989,954,1985,957,1980,961,1980,964,1980,969,1980,973,1980,982,1980,991,1979,993,1980,995,1981,1003,1981,1011,1981,1015,1981,L,1025,1981,Q,1035,1983,1035,1985,1036,1986,1034,1991,L,1036,1999,Q,1037,2000,1038,2001,1039,2002,1040,2004,1040,2006,1043,2008,1046,2011,1053,2015,1054,2016,1055,2016,1057,2016,1058,2019,1059,2022,1061,2022,1064,2023,1065,2025,1066,2028,1069,2030,1072,2032,1073,2033,1076,2037,1079,2041,1079,2042,1080,2043,1080,2047,1084,2049,1085,2050,1087,2051,1092,2055,1098,2060,1099,2061,1100,2061,1102,2062,1103,2062,1104,2063,1105,2065,1110,2069,1114,2072,1115,2073,1115,2073,1118,2079,1122,2083,1125,2085,1130,2085,1160,2085,1189,2085,1191,2085,1193,2085,1194,2086,1198,2087,1202,2088,1204,2089,1205,2090,1205,2089,1205,2088,1206,2090,1207,2091,1208,2091,1208,2091,1210,2095,1210,2097,1211,2098,1213,2099,1214,2106,1215,2113,1214,2127,1213,2141,1223,2141,1232,2140,1236,2141,1239,2141,1242,2140,1244,2139,1246,2140,1248,2140,1251,2140,1253,2140,1256,2139,1260,2138,1261,2137,1263,2136,1266,2137,L,1269,2137,1270,2138,Q,1272,2138,1273,2139,1276,2143,1278,2149,1279,2150,1279,2152,1280,2158,1283,2169,1287,2180,1286,2186,1286,2191,1286,2192,1286,2193,1286,2195,1286,2197,1286,2197,1286,2210,1287,2219,1288,2227,1288,2244,1288,2262,1278,2260,1267,2258,1261,2260,1255,2262,1253,2266,1251,2269,1252,2280,1254,2291,1255,2301,1255,2310,1254,2323,1252,2336,1253,2340,1253,2344,1246,2344,L,1237,2345,Q,1237,2345,1234,2345,1232,2345,1229,2347,1226,2348,1218,2350,1217,2351,1217,2352,1216,2377,1216,2402,1216,2431,1216,2461,1216,2490,1216,2519,1216,2535,1217,2548,1217,2560,1218,2565,1219,2570,1219,2579,1218,2587,1218,2596,1218,2605,1219,2624,1221,2644,1220,2672,1219,2700,1221,2729,1222,2759,1223,2774,1224,2790,1225,2792,1225,2795,1227,2798,1228,2801,1227,2802,1227,2803,1231,2805,1236,2806,1239,2806,1242,2806,1244,2807,1247,2808,1247,2808,L,1249,2807,Q,1250,2806,1253,2807,1257,2808,1261,2807,1266,2806,1268,2804,1277,2804,1286,2804,1290,2804,1295,2804,1300,2803,1306,2803,1311,2804,1312,2807,1312,2810,1313,2811,1313,2812,1314,2815,1315,2818,1315,2820,1315,2821,1317,2826,1319,2830,1319,2831,1319,2831,1323,2831,1353,2831,1382,2831,1411,2831,1441,2831,1470,2831,1499,2831,1502,2831,1504,2831,1510,2829,1515,2823,1515,2822,1516,2822,1518,2821,1518,2821,1521,2815,1526,2811,1528,2810,1530,2809,1537,2808,1545,2808,1573,2808,1602,2808,1604,2808,1609,2807,1615,2806,1617,2802,1619,2799,1620,2790,1621,2780,1637,2776,1639,2775,1640,2775,1655,2774,1669,2774,1676,2774,1688,2775,1699,2775,1699,2773,1698,2772,1700,2767,1701,2762,1704,2758,1707,2754,1716,2754,1725,2754,1732,2754,1739,2754,1747,2755,1755,2755,1757,2751,1759,2747,1758,2744,1757,2740,1757,2737,1757,2734,1757,2733,1756,2732,1762,2729,1768,2725,1776,2726,1784,2727,1794,2728,1803,2730,1809,2719,1809,2718,1809,2717,1808,2708,1813,2705,1814,2704,1815,2704,1833,2702,1852,2702,1860,2702,1858,2692,1857,2685,1860,2680,1861,2680,1862,2679,1876,2679,1890,2679,1898,2679,1905,2678,1912,2678,1912,2672,1912,2669,1913,2667,1914,2662,1918,2655,1922,2648,1934,2648,1944,2649,1943,2640,1942,2632,1942,2625,1941,2622,1944,2622,1964,2620,1977,2620,1983,2620,1986,2617,1987,2616,1988,2616,1990,2615,1991,2615,1992,2614,1993,2613,1993,2612,1994,2610,1995,2608,1998,2605,2000,2601,2002,2599,2004,2597,2006,2596,2008,2595,2011,2593,2014,2591,2014,2590,2016,2585,2019,2581,2020,2581,2021,2580,2021,2578,2022,2578,2030,2576,2039,2576,2041,2576,2042,2575,2043,2575,2046,2573,2051,2572,2051,2568,2051,2548,2051,2528,2051,2526,2052,2525,2053,2523,2054,2522,2059,2519,2061,2518,2063,2518,2064,2517,2068,2513,2073,2506,2074,2504,2074,2503,2075,2498,2080,2496,2081,2495,2081,2495,2083,2494,2085,2494,2087,2493,2088,2493,2090,2492,2091,2492,2093,2492,2094,2490,2097,2486,2102,2482,2103,2482,2103,2481,2103,2476,2105,2472,2106,2472,2106,2471,2107,2468,2109,2467,2112,2466,2114,2465,2118,2464,2122,2464,2129,2464,2137,2463,2143,2462,2147,2459,2148,2458,2148,2457,2150,2450,2154,2446,2155,2443,2160,2444,2165,2444,2169,2443,2170,2443,2170,2443,2172,2442,2172,2442,2174,2439,2177,2437,2183,2435,2182,2427,2182,2423,2182,2419,2181,2412,2187,2413,2189,2414,2190,2413,2191,2413,2192,2413,2208,2412,2224,2412,2229,2412,2231,2410,2236,2406,2235,2397,2234,2390,2236,2387,2237,2386,2237,2385,2237,2384,2238,2383,2248,2382,2259,2382,2261,2382,2262,2381,2266,2379,2269,2377,2271,2376,2272,2375,2277,2372,2283,2368,2287,2365,2287,2357,2287,2356,2291,2354,2295,2352,2294,2352,2293,2351,2294,2349,2296,2347,2295,2345,2294,2343,2294,2342,2294,2340,2292,2337,2289,2333,2282,2333,2274,2333,2271,2331,2269,2329,2265,2329,2242,2330,2219,2329,2219,2329,2218,2328,2215,2326,2214,2323,2212,2319,2211,2315,2210,2313,2211,2311,2210,2309,2208,2308,2207,2306,2206,2305,2205,2304,2204,2304,2184,2303,2164,2303,2161,2303,2159,2303,2158,2302,2157,2302,2156,2301,2155,2300,2153,2299,2150,2299,2149,2298,2148,2298,2145,2296,2142,2296,2141,2296,2140,2295,2139,2295,2137,2294,2136,2293,2134,2292,2130,2290,2127,2288,2120,2281,2112,2278,2110,2277,2109,2276,2106,2274,2103,2273,2102,2273,2101,2272,2099,2271,2095,2269,2094,2269,2093,2269,2088,2268,2085,2263,2084,2261,2083,2260,2082,2259,2081,2257,2080,2254,2079,2253,2078,2251,2076,2250,2075,2249,2074,2247,2073,2246,2071,2245,2070,2243,2068,2241,2067,2240,2066,2240,2059,2237,2053,2233,2052,2232,2051,2231,2048,2231,2045,2229,2043,2228,2040,2226,2038,2226,2037,2225,2036,2224,2035,2224,2034,2224,2031,2221,2027,2217,2028,2216,2028,2215,2028,2214,2027,2213,2024,2208,2021,2203,2020,2201,2018,2199,2013,2194,2007,2190,2004,2187,2000,2185,1994,2183,1988,2181,1977,2180,1966,2179,1962,2172,1962,2172,1961,2171,1961,2169,1960,2168,1958,2167,1957,2164,1957,2162,1957,2161,1957,2160,1956,2159,1956,2157,1955,2157,1953,2156,1951,2154,1950,2153,1949,2153,1938,2148,1934,2140,1933,2140,1933,2139,1932,2133,1932,2127,1932,2119,1932,2112,1931,2104,1931,2097,1931,2068,1931,2038,1931,2009,1931,1979,1931,1977,1930,1974,1930,1974,1929,1973,1929,1971,1928,1969,1928,1968,1927,1966,1927,1964,1927,1964,1922,1963,1921,1961,1920,1959,1918,1958,1912,1956,1910,1952,1910,1952,1909,1951,1905,1950,1904,1947,1900,1936,1889,1930,1888,1930,1887,1929,1883,1925,1879,1917,1878,1915,1877,1912,1874,1907,1870,1903,1869,1901,1868,1900,1866,1897,1862,1897,1854,1897,1847,1897,1832,1896,1822,1889,1821,1888,1820,1887,1814,1885,1810,1881,1809,1880,1809,1879,1807,1874,1806,1870,1806,1869,1806,1867,1806,1864,1805,1863,1805,1863,1803,1859,1802,1855,1798,1854,1793,1853,1791,1852,1782,1852,1778,1848,1777,1848,1776,1848,1775,1848,1772,1845,1769,1842,1767,1840,1765,1838,1764,1835,1763,1832,1759,1828,1759,1828,1758,1827,1752,1812,1741,1808,1740,1807,1739,1807,1735,1807,1733,1805,1731,1801,1730,1797,L,1730,1796,Q,1730,1796,1729,1794,1728,1791,1725,1789,1722,1786,1722,1785,1721,1783,1719,1782,1717,1781,1713,1779,1709,1778,1702,1775,1695,1771,1687,1772,1678,1772,1674,1768,1673,1767,1672,1766,1671,1764,1669,1761,1665,1755,1665,1748,1665,1741,1666,1734,1666,1730,1664,1729,1663,1728,1662,1728,1655,1727,1649,1725,1647,1725,1645,1725,1643,1724,1640,1724,1639,1723,1637,1723,1630,1720,1627,1715,1625,1710,1625,1702,1625,1701,1624,1699,1624,1690,1624,1680,1624,1675,1623,1669,1622,1659,1627,1654,1628,1652,1629,1649,1631,1644,1634,1638,1635,1637,1636,1636,1639,1632,1642,1625,1643,1623,1647,1621,1649,1620,1650,1620,1653,1617,1657,1612,1659,1609,1660,1607,1660,1605,1661,1603,1661,1603,1661,1602,1661,1598,1665,1597,1671,1595,1673,1591,1675,1587,1686,1583,1697,1579,1699,1570,1701,1560,1701,1556,1702,1552,1702,1549,1703,1545,1704,1545,1706,1544,1706,1541,1705,1537,1707,1534,1708,1530,1709,1526,1709,1523,1710,1522,1711,1520,1712,1517,1715,1511,1716,1503,1717,1500,1717,1498,1717,1469,1717,1440,1717,1411,1717,1382,1717,1353,1717,1325,1717,1301,1717,1276,1717,1237,1717,1207,1717,1201,1718,1194,1718,1188,1718,1186,1718,1183,1719,1180,1720,1177,1725,1171,1730,1165,1733,1163,1737,1160,1741,1153,1745,1145,1745,1137,1746,1128,1746,1125,1746,1123,1746,1121,1747,1120,1747,1118,1747,1116,1747,1114,1747,1111,1748,1108,1749,1104,1754,1102,1760,1100,1766,1092,1768,1090,1768,1088,1769,1061,1769,1034,1769,1005,1769,976,1769,947,1769,918,L,1769,915,Q,1769,913,1769,911,1769,902,1769,897,1769,891,1767,884,1765,877,1765,875,1765,873,1765,867,1764,860,1762,857,1759,853,1759,853,1757,852,1754,851,1754,851,1753,850,1750,848,1749,845,1749,844,1748,843,1748,835,1748,827,L,1748,820,Q,1748,794,1747,768,1747,766,1747,765,1746,763,1746,762,1745,759,1743,756,1742,754,1741,752,1739,750,1738,748,1738,746,1737,745,1736,744,1735,743,1734,743,1734,741,1732,738,1729,733,1729,731,1727,730,1724,729,1725,724,1726,721,1725,718,1725,717,1725,716,1724,695,1724,674,1724,666,1725,659,1726,650,1725,648,1723,646,1722,644,1721,642,1719,638,1717,634,1716,632,1715,630,1713,627,1711,624,1709,622,1706,616,1702,610,1702,609,1701,607,1701,578,1701,548,1701,547,1700,546,1695,540,1687,535,1686,533,1683,532,1678,531,1674,526,1673,526,1672,523,1670,520,1670,515,1669,509,1669,502,1669,495,1669,484,1669,471,1668,458,1668,457,1667,456,1662,455,1655,452,1655,452,1651,450,1647,449,1647,445,1647,441,1647,440,1648,439,1647,427,1647,415,1649,401,1650,386,1649,385,1647,384,1646,380,1644,377,1639,374,1634,372,1632,370,1630,368,1628,367,1625,365,1623,362,1620,360,1618,356,1616,353,1616,353,1615,352,1615,349,1615,346,1612,344,1612,343,1612,342,1612,334,1612,327,1613,326,1613,325,1613,319,1614,313,1614,310,1615,308,1614,307,1614,306,1613,301,1611,296,1611,296,1610,295,1609,295,1607,294,1602,292,1598,289,1596,287,1595,285,1593,283,1593,278,1594,273,1593,273,1593,272,1592,271,1591,270,1590,270,1590,270,1583,268,1577,265,1568,266,1558,267,1550,264,1547,263,1545,261,1541,258,1539,253,1539,251,1539,249,1538,243,1533,243,1520,243,1508,242,1501,242,1494,241,1493,240,1491,240,1486,239,1485,234,1485,234,1484,233,1480,229,1479,223,1479,221,1477,220,1475,217,1475,213,1475,211,1474,210,1473,209,1471,209,1463,207,1454,207,1446,208,1439,208,1432,209,1431,204,1430,202,1430,199,1429,195,1430,192,1430,188,1430,187,L,1431,185,Q,1430,184,1429,182,1428,179,1425,177,1422,175,1409,174,1397,174,1379,174,1377,174,1376,175,1373,176,1369,178,1368,178,1367,179,Q,1366,181,1365,181,Z]
                ], 
                label: "Kumgangsan", 
                shortLabel: "KS", 
                labelPosition: [128,142.6], 
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