(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=626)})({626:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(627);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},627:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.Vorarlberg.20.10-31-2012 09:51:19
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Vorarlberg",revision:20,standaloneInit:true,baseWidth:320,baseHeight:500,baseScaleFactor:10,entities:{"AT.VO.BG":{outlines:[[M,1866,483,Q,1857,483,1849,483,1813,483,1776,483,1774,483,1773,483,1772,481,1771,481,1767,483,1762,483,1762,468,1762,454,1762,443,1762,417,1726,418,1727,408,1727,398,1729,392,1732,386,1732,385,1732,381,1734,378,1718,378,1701,378,1667,378,1632,378,L,1630,378,Q,1628,390,1628,403,1628,437,1628,471,1628,474,1628,480,1630,485,1627,485,1613,485,1598,485,1579,485,1562,486,1559,486,1559,483,1559,468,1559,451,L,1557,449,Q,1543,449,1530,449,L,1528,449,Q,1526,434,1527,419,1527,417,1527,415,1516,413,1504,413,1494,413,1489,417,1489,401,1489,385,L,1489,383,Q,1475,381,1460,381,1426,381,1394,381,1392,381,1391,381,1389,366,1389,351,L,1389,349,Q,1357,347,1323,347,1323,329,1323,312,1323,279,1323,245,L,1323,244,Q,1338,242,1352,242,L,1353,242,Q,1355,223,1355,206,1355,174,1355,140,1355,109,1355,76,1341,76,1326,76,L,1325,76,Q,1323,67,1323,61,1323,52,1323,44,1324,40,1321,40,1296,40,1269,40,1230,40,1192,40,L,1191,40,Q,1189,55,1189,69,L,1189,79,Q,1174,72,1158,72,L,1157,72,Q,1155,81,1155,89,1155,98,1155,106,1157,110,1153,110,1138,110,1123,110,1116,115,1119,118,1122,121,1121,127,1119,132,1119,139,L,1119,140,Q,1102,142,1085,142,L,1087,144,Q,1087,145,1087,147,1087,181,1087,213,1087,246,1087,278,1072,278,1055,278,L,1053,278,Q,1051,291,1051,307,L,1051,313,Q,1038,310,1023,310,L,1021,310,Q,1019,327,1019,346,1019,379,1019,412,L,1019,413,Q,1e3,415,984,415,951,415,917,415,L,916,415,Q,914,430,914,444,L,914,446,Q,882,447,851,447,819,447,785,447,L,783,447,Q,782,463,782,480,746,480,710,480,670,480,629,480,624,480,617,480,609,478,610,486,L,612,488,Q,612,503,612,519,L,610,519,Q,593,517,575,517,527,517,480,517,444,517,408,517,L,407,517,Q,405,530,405,546,L,405,549,Q,395,551,385,551,346,551,307,551,L,305,551,Q,303,559,303,568,303,571,303,576,301,585,306,585,L,305,585,Q,272,585,239,585,L,237,585,Q,235,598,235,612,L,235,614,Q,251,615,269,615,269,633,271,651,L,273,651,Q,288,651,303,651,306,651,305,654,305,663,305,671,305,676,305,682,305,685,310,683,317,683,324,685,327,685,330,685,334,685,335,687,339,688,339,692,339,725,339,758,339,771,341,785,342,785,344,785,378,785,410,785,441,785,473,785,476,785,475,790,475,799,475,807,475,814,475,821,505,821,536,821,554,821,575,822,L,575,824,Q,575,841,575,856,581,856,587,855,590,855,593,855,602,855,610,856,L,610,858,Q,610,866,611,877,611,883,612,890,L,614,890,Q,627,890,641,889,L,641,887,Q,639,875,643,865,643,860,643,856,642,851,649,853,653,853,656,853,685,853,712,851,L,712,849,Q,712,836,712,822,712,819,717,821,722,821,727,821,735,821,744,821,744,839,744,856,744,885,744,912,746,919,756,921,758,921,760,922,766,929,780,931,787,931,792,934,793,936,797,936,804,934,807,938,809,939,814,939,831,938,841,946,851,955,861,960,863,961,865,961,882,963,899,965,907,965,916,965,924,966,929,970,934,975,946,975,958,973,970,975,972,975,973,975,982,977,990,978,997,992,1007,1004,1011,1009,1016,1012,1017,1014,1021,1014,1034,1012,1038,1024,L,1041,1024,Q,1070,1029,1085,1011,1087,1009,1089,1007,1094,1002,1106,1002,1121,1004,1136,1004,1202,1004,1269,1004,1282,1004,1296,1004,1301,1004,1301,1011,1299,1028,1299,1045,1299,1063,1296,1082,1296,1084,1292,1085,1286,1087,1279,1089,1274,1089,1270,1090,1269,1092,1269,1096,1269,1140,1269,1184,1269,1190,1264,1194,1262,1194,1262,1197,1262,1212,1264,1228,1263,1236,1275,1236,1290,1235,1297,1243,1299,1245,1299,1248,1299,1282,1301,1316,1301,1319,1303,1323,1328,1350,1343,1377,1345,1379,1347,1381,1358,1386,1362,1401,1362,1403,1364,1404,1374,1409,1387,1409,1397,1408,1396,1421,1394,1430,1394,1438,1394,1504,1396,1571,1396,1581,1384,1579,1372,1577,1360,1582,1359,1582,1357,1584,1348,1592,1340,1599,1324,1611,1316,1622,1311,1627,1303,1628,1287,1632,1284,1645,1284,1647,1284,1649,1282,1655,1281,1662,1280,1665,1281,1667,1282,1668,1284,1669,1288,1671,1291,1674,1294,1679,1296,1684,1299,1694,1299,1706,1299,1772,1301,1839,1301,1849,1289,1845,1285,1845,1284,1847,1277,1852,1272,1856,1265,1859,1269,1873,1270,1879,1275,1888,1282,1891,1289,1895,1291,1895,1292,1895,1299,1895,1303,1900,1304,1903,1306,1907,1316,1920,1330,1925,1333,1927,1337,1927,1348,1930,1360,1935,1362,1935,1364,1935,1367,1937,1369,1939,1382,1947,1401,1954,1411,1961,1409,1978,1408,1991,1406,2005,1406,2006,1404,2008,1401,2015,1394,2020,1391,2022,1387,2024,1377,2027,1372,2030,1370,2034,1367,2034,1350,2032,1340,2046,1328,2057,1320,2072,1327,2079,1328,2093,1328,2095,1328,2097,1330,2112,1331,2124,1338,2151,1337,2181,1337,2188,1337,2195,1336,2196,1336,2198,1344,2187,1360,2180,1375,2173,1387,2166,1391,2164,1392,2163,1396,2161,1398,2158,1403,2154,1408,2151,1409,2147,1411,2144,1414,2139,1425,2137,1440,2134,1452,2125,1459,2120,1464,2110,1499,2107,1533,2107,1543,2107,1544,2093,L,1547,2093,Q,1611,2093,1676,2093,1691,2093,1706,2093,1711,2093,1711,2086,1710,2078,1706,2073,1699,2066,1705,2061,1711,2056,1727,2056,1739,2057,1744,2054,1750,2051,1757,2047,1764,2046,1774,2042,1793,2037,1815,2039,1827,2039,1837,2042,1839,2042,1839,2046,1839,2066,1839,2086,1839,2093,1840,2100,1844,2115,1866,2112,1874,2110,1883,2110,1910,2110,1937,2114,L,1937,2117,Q,1937,2134,1939,2151,1949,2154,1956,2158,1957,2158,1958,2161,1956,2181,1978,2183,1980,2183,1981,2183,2015,2185,2049,2185,2080,2185,2110,2183,2112,2183,2114,2181,2122,2178,2122,2168,2120,2158,2134,2159,2139,2161,2144,2163,2152,2164,2151,2178,2149,2185,2153,2188,2154,2188,2156,2190,2158,2192,2161,2193,2163,2193,2165,2195,2178,2203,2187,2210,2190,2212,2193,2214,2195,2215,2198,2217,2205,2229,2214,2232,2215,2232,2217,2236,2217,2237,2219,2239,2227,2249,2232,2263,2234,2269,2237,2275,2239,2276,2241,2280,2259,2288,2266,2297,2270,2298,2273,2300,2278,2303,2278,2310,2278,2312,2280,2314,2285,2322,2283,2338,2281,2349,2287,2353,2290,2354,2293,2354,2337,2354,2382,2358,L,2382,2361,Q,2381,2388,2380,2416,2361,2419,2358,2433,2354,2439,2353,2441,2351,2443,2349,2446,2348,2453,2348,2460,2402,2460,2456,2460,2490,2460,2524,2456,2526,2456,2526,2453,2527,2444,2529,2436,2531,2432,2534,2431,2538,2429,2541,2429,2553,2429,2565,2429,2570,2429,2570,2422,2568,2409,2582,2407,2583,2407,2585,2405,2595,2400,2609,2400,2612,2400,2616,2400,2631,2398,2646,2395,2648,2395,2650,2392,2655,2382,2658,2371,2660,2368,2660,2365,2660,2351,2660,2338,2660,2332,2667,2332,2673,2334,2677,2332,2697,2326,2696,2344,2692,2363,2714,2360,2724,2358,2735,2360,2736,2360,2738,2360,2746,2361,2755,2363,2767,2364,2770,2354,2772,2348,2774,2346,2775,2344,2775,2341,2775,2331,2789,2332,2797,2334,2804,2338,2806,2337,2806,2341,2801,2363,2823,2360,2841,2356,2855,2363,2858,2365,2858,2368,2860,2380,2860,2392,2860,2402,2874,2400,2884,2399,2894,2399,2904,2399,2916,2399,2916,2396,2915,2394,2913,2385,2914,2384,2914,2383,2915,2382,2916,2380,2981,2382,2989,2382,2986,2375,2986,2373,2986,2371,2986,2359,2987,2346,L,2989,2346,Q,3004,2346,3018,2346,3021,2346,3020,2341,3020,2334,3020,2327,3020,2319,3016,2314,3016,2312,3013,2312,3001,2312,2991,2314,2982,2314,2974,2314,2943,2314,2914,2312,L,2914,2310,Q,2914,2303,2915,2300,2916,2297,2918,2292,2920,2286,2920,2278,L,2908,2278,Q,2877,2278,2848,2278,2848,2262,2848,2244,2848,2212,2848,2178,2831,2178,2816,2178,2816,2159,2818,2142,L,2819,2142,Q,2835,2142,2850,2141,L,2850,2137,Q,2850,2105,2850,2075,2850,2060,2852,2042,2867,2041,2884,2039,L,2884,2037,Q,2884,2022,2886,2007,2887,2007,2889,2007,2921,2006,2952,2005,L,2952,2003,Q,2952,1988,2952,1973,2983,1973,3021,1973,3019,1949,3021,1932,3021,1913,3021,1912,3009,1910,2999,1910,2992,1911,2984,1912,2984,1889,2984,1868,2984,1835,2984,1801,2984,1769,2984,1737,3002,1737,3020,1737,L,3021,1737,Q,3018,1720,3020,1701,3020,1684,3021,1667,3023,1667,3025,1667,3040,1667,3054,1666,3054,1635,3054,1605,3054,1603,3055,1601,3059,1599,3064,1599,3072,1599,3079,1599,3084,1601,3084,1596,3086,1596,3086,1594,3087,1593,3088,1591,3088,1581,3088,1571,L,3088,1569,Q,3096,1567,3104,1567,3109,1567,3113,1567,3118,1569,3120,1564,3120,1562,3120,1560,3123,1548,3121,1535,L,3121,1533,Q,3137,1532,3150,1532,L,3152,1532,Q,3154,1518,3154,1503,L,3154,1501,Q,3131,1499,3108,1499,3099,1499,3091,1499,3087,1498,3088,1501,3088,1508,3088,1513,3088,1521,3088,1530,3089,1533,3086,1533,3071,1533,3055,1533,L,3054,1533,Q,3052,1518,3052,1503,L,3052,1501,Q,3035,1499,3018,1499,3018,1483,3018,1467,L,3018,1465,Q,3006,1464,2994,1464,2962,1464,2930,1464,2930,1465,2928,1464,2925,1464,2921,1464,L,2920,1464,Q,2918,1481,2918,1499,L,2918,1501,Q,2904,1503,2889,1503,L,2887,1503,Q,2886,1514,2886,1528,L,2886,1530,Q,2899,1531,2914,1532,L,2916,1532,Q,2918,1547,2918,1564,2909,1568,2897,1567,2886,1566,2885,1568,2884,1570,2883,1574,2882,1578,2882,1581,2882,1584,2882,1586,2882,1587,2882,1591,2884,1593,2884,1594,L,2884,1599,Q,2858,1603,2835,1603,2801,1603,2767,1603,2724,1603,2684,1603,L,2682,1603,Q,2680,1571,2680,1538,L,2680,1537,Q,2667,1535,2651,1535,L,2650,1535,Q,2648,1565,2648,1596,L,2648,1606,Q,2633,1599,2618,1599,2616,1599,2614,1599,2611,1601,2612,1608,2612,1616,2612,1625,2611,1632,2614,1633,2597,1633,2582,1633,L,2580,1635,Q,2578,1652,2584,1669,2558,1669,2543,1667,2543,1645,2543,1623,2543,1594,2543,1566,2541,1569,2534,1567,2528,1567,2523,1567,L,2521,1566,Q,2512,1565,2509,1571,2509,1553,2509,1537,L,2509,1535,Q,2492,1533,2473,1533,2475,1531,2475,1528,2475,1496,2475,1462,2475,1430,2475,1396,2475,1364,2475,1331,2461,1331,2441,1331,2440,1305,2444,1296,L,2434,1296,Q,2421,1296,2405,1296,2409,1287,2407,1279,2407,1263,2407,1250,2407,1240,2407,1228,L,2405,1226,2405,1224,Q,2424,1224,2441,1223,2443,1223,2443,1221,2443,1212,2443,1204,2443,1199,2444,1194,L,2446,1194,Q,2485,1194,2523,1194,2533,1194,2545,1194,2548,1194,2546,1191,2546,1180,2546,1172,2546,1133,2546,1094,2546,1077,2545,1060,L,2543,1060,Q,2526,1060,2507,1058,L,2507,1055,Q,2509,1048,2509,1040,L,2507,1038,Q,2507,1016,2507,994,2474,994,2443,994,L,2441,994,Q,2439,977,2439,958,L,2439,956,Q,2426,955,2412,955,L,2411,955,Q,2409,949,2409,943,2410,933,2407,924,L,2407,922,Q,2392,921,2378,921,L,2377,921,Q,2375,888,2375,858,2358,858,2343,858,L,2341,858,Q,2339,834,2339,810,2339,800,2339,792,2341,788,2338,788,2331,788,2326,788,2292,788,2260,788,2251,788,2243,788,2239,787,2239,790,2239,805,2239,819,L,2239,821,Q,2237,822,2234,822,2202,822,2170,821,2170,807,2170,792,L,2170,790,Q,2136,788,2103,788,L,2102,788,Q,2100,773,2100,758,L,2100,756,Q,2086,754,2071,754,L,2069,754,Q,2068,749,2068,746,2068,714,2068,680,2068,648,2068,617,2051,617,2036,617,L,2034,617,Q,2032,603,2032,590,L,2032,588,Q,2017,586,2002,586,L,2e3,586,Q,1998,569,1998,553,1998,520,1998,486,L,1998,485,Q,1984,483,1969,483,L,1968,483,Q,1966,467,1966,452,L,1966,451,Q,1950,449,1935,449,1903,449,1869,449,L,1868,449,Q,1866,465,1866,483,Z]],label:"Bregenz",shortLabel:"BG",labelPosition:[183.4,125],labelAlignment:[CEN,MID]},"AT.VO.BZ":{outlines:[[M,2198,2217,Q,2195,2215,2193,2214,2190,2212,2187,2210,2178,2203,2165,2195,2163,2193,2161,2193,2158,2192,2156,2190,2154,2188,2153,2188,2149,2185,2151,2178,2152,2164,2144,2163,2139,2161,2134,2159,2120,2158,2122,2168,2122,2178,2114,2181,2112,2183,2110,2183,2080,2185,2049,2185,2015,2185,1981,2183,1980,2183,1978,2183,1956,2181,1958,2161,1957,2158,1956,2158,1949,2154,1939,2151,1937,2134,1937,2117,L,1937,2114,Q,1910,2110,1883,2110,1874,2110,1866,2112,1844,2115,1840,2100,1839,2093,1839,2086,1839,2066,1839,2046,1839,2042,1837,2042,1827,2039,1815,2039,1793,2037,1774,2042,1764,2046,1757,2047,1750,2051,1744,2054,1739,2057,1727,2056,1711,2056,1705,2061,1699,2066,1706,2073,1710,2078,1711,2086,1711,2093,1706,2093,1691,2093,1676,2093,1611,2093,1547,2093,L,1544,2093,Q,1543,2107,1533,2107,1499,2107,1464,2110,1459,2120,1452,2125,1440,2134,1425,2137,1414,2139,1411,2144,1409,2147,1408,2151,1403,2154,1398,2158,1396,2161,1392,2163,1391,2164,1387,2166,1375,2173,1360,2180,1344,2187,1336,2198,1334,2207,1340,2212,1341,2214,1342,2215,1345,2234,1337,2251,1333,2252,1330,2259,1324,2273,1306,2268,1304,2268,1303,2268,L,1299,2266,Q,1297,2246,1294,2232,1292,2229,1291,2229,1287,2225,1287,2219,1289,2210,1286,2200,1224,2198,1163,2198,L,1160,2198,Q,1158,2217,1150,2234,1133,2236,1116,2236,1107,2236,1099,2237,1094,2239,1096,2249,L,1096,2253,Q,1111,2256,1126,2254,1141,2254,1150,2259,1152,2261,1153,2261,1157,2263,1158,2265,1160,2266,1162,2270,1163,2275,1165,2283,1165,2286,1165,2290,1167,2300,1165,2310,1165,2314,1163,2317,1160,2324,1157,2324,1153,2324,1152,2326,1148,2331,1140,2332,1138,2332,1136,2332,1101,2334,1065,2334,1082,2342,1096,2349,1106,2353,1109,2361,1095,2371,1075,2370,1053,2368,1031,2366,1016,2365,1004,2361,992,2358,992,2368,994,2387,990,2402,989,2405,989,2409,987,2414,980,2414,972,2412,963,2414,960,2414,960,2416,956,2444,956,2473,956,2477,958,2477,961,2480,962,2487,960,2492,962,2495,967,2502,968,2514,968,2524,956,2522,948,2521,939,2519,927,2517,928,2528,927,2534,926,2541,926,2544,924,2548,922,2551,921,2555,L,919,2558,Q,880,2561,841,2561,838,2561,838,2560,834,2553,833,2545,833,2543,833,2541,832,2534,827,2533,805,2529,811,2551,812,2561,807,2565,800,2567,794,2568,785,2572,783,2582,783,2599,782,2616,781,2617,780,2619,776,2628,773,2633,770,2638,760,2638,751,2636,743,2638,720,2641,726,2619,729,2599,712,2599,678,2599,644,2597,642,2597,641,2597,631,2597,629,2592,624,2578,610,2575,603,2573,602,2565,602,2563,602,2561,602,2549,597,2545,595,2543,595,2541,592,2527,580,2522,578,2522,576,2522,569,2522,568,2517,568,2511,566,2504,564,2500,561,2499,554,2493,546,2490,544,2488,542,2489,539,2487,537,2485,536,2482,532,2475,505,2473,478,2473,473,2473,468,2475,454,2478,458,2500,457,2504,456,2507,454,2512,453,2521,452,2524,449,2526,442,2531,439,2545,439,2548,439,2551,437,2568,439,2585,440,2612,413,2612,408,2612,403,2614,388,2619,380,2633,383,2634,386,2636,388,2638,390,2638,401,2643,410,2650,422,2660,419,2684,417,2695,407,2701,405,2702,403,2704,388,2709,388,2728,388,2729,388,2731,386,2784,386,2836,386,2840,385,2843,383,2850,371,2848,371,2857,371,2864,371,2877,373,2891,L,374,2891,Q,391,2891,407,2891,407,2920,407,2952,407,2985,407,3018,407,3023,408,3023,420,3026,436,3026,L,442,3026,Q,439,3041,439,3055,L,439,3062,Q,425,3059,412,3059,410,3059,408,3059,407,3084,407,3110,407,3142,407,3176,407,3208,407,3238,407,3271,407,3303,407,3335,407,3366,395,3367,378,3367,361,3367,344,3367,340,3366,341,3369,341,3401,341,3432,L,341,3434,Q,324,3435,307,3435,L,305,3435,Q,303,3457,303,3479,303,3488,303,3496,301,3500,305,3500,323,3500,344,3500,375,3500,407,3500,407,3484,408,3468,L,410,3468,Q,425,3467,439,3466,L,439,3464,Q,439,3449,439,3434,439,3430,444,3432,452,3432,463,3432,496,3432,529,3432,563,3432,595,3432,602,3432,609,3434,L,609,3435,Q,609,3451,610,3466,L,612,3466,Q,619,3466,624,3466,L,626,3468,Q,634,3468,643,3468,646,3467,644,3471,644,3484,644,3500,644,3503,649,3501,658,3501,668,3501,690,3501,712,3503,L,712,3505,Q,712,3520,714,3534,715,3534,717,3534,732,3534,746,3535,L,746,3537,Q,746,3552,748,3569,L,749,3569,Q,782,3569,814,3569,829,3569,844,3569,848,3569,846,3574,846,3583,846,3590,846,3596,848,3602,880,3602,912,3602,944,3602,977,3602,1011,3602,1043,3602,1045,3602,1048,3602,1051,3601,1050,3605,1050,3615,1050,3624,1050,3630,1051,3637,L,1053,3637,Q,1068,3637,1084,3639,L,1084,3641,Q,1084,3654,1085,3668,L,1087,3668,Q,1090,3668,1094,3666,1102,3666,1111,3666,1116,3664,1118,3668,1118,3673,1118,3676,1118,3690,1118,3703,1118,3707,1121,3705,1129,3705,1138,3705,L,1140,3707,Q,1158,3707,1175,3707,1182,3707,1187,3708,L,1187,3710,Q,1187,3724,1187,3737,1203,3739,1219,3741,L,1219,3742,Q,1219,3756,1219,3771,1270,3771,1301,3771,1335,3771,1369,3771,1377,3771,1386,3768,1389,3766,1389,3761,1389,3749,1391,3737,1392,3737,1394,3737,1399,3736,1401,3739,1403,3739,1404,3739,1416,3739,1426,3741,L,1426,3742,Q,1426,3758,1428,3775,L,1430,3775,Q,1461,3775,1493,3775,1496,3785,1494,3797,1494,3814,1494,3831,1494,3863,1494,3897,1494,3904,1494,3910,1506,3910,1513,3910,1519,3910,1525,3910,1525,3933,1525,3944,1525,3976,1525,4010,1525,4043,1525,4075,1525,4077,1525,4078,1523,4078,1521,4078,1508,4078,1494,4078,1494,4080,1493,4080,1493,4112,1493,4146,1489,4146,1486,4145,1484,4145,1482,4145,1470,4144,1459,4146,L,1459,4148,Q,1455,4165,1457,4182,1457,4197,1457,4212,1457,4216,1462,4214,1470,4214,1477,4214,1486,4214,1493,4214,1493,4219,1493,4223,1493,4226,1493,4229,1493,4248,1493,4267,1492,4273,1491,4280,1491,4282,1488,4282,1479,4282,1472,4285,1470,4285,1469,4285,1464,4285,1459,4285,1459,4301,1459,4316,L,1459,4318,Q,1459,4321,1462,4316,1465,4312,1469,4314,1476,4314,1484,4314,1489,4314,1493,4314,1496,4314,1494,4319,1494,4328,1494,4336,1494,4341,1494,4346,1494,4348,1493,4348,1524,4348,1555,4348,1560,4348,1559,4353,1559,4358,1559,4362,1559,4372,1560,4382,L,1562,4382,Q,1594,4382,1625,4382,1630,4382,1628,4389,1628,4401,1628,4413,1628,4416,1630,4418,L,1632,4418,Q,1647,4418,1661,4419,L,1661,4421,Q,1660,4436,1664,4450,1698,4450,1730,4450,1762,4450,1796,4450,1815,4450,1832,4452,L,1832,4453,Q,1834,4458,1835,4464,L,1835,4465,Q,1835,4473,1835,4480,1834,4491,1844,4487,1847,4487,1849,4487,1883,4487,1915,4487,1923,4487,1935,4484,1932,4524,1932,4552,1937,4552,1939,4550,1940,4550,1942,4550,1950,4550,1959,4552,1973,4555,1988,4553,1993,4553,2e3,4555,L,2e3,4557,Q,2e3,4569,2e3,4586,2034,4586,2066,4586,2083,4586,2102,4587,L,2102,4589,Q,2102,4604,2102,4618,L,2103,4620,Q,2118,4620,2134,4620,L,2136,4620,Q,2137,4623,2137,4625,2137,4657,2137,4687,2137,4691,2141,4689,2149,4689,2158,4689,2163,4689,2170,4687,2176,4684,2174,4693,2171,4701,2171,4706,2171,4711,2171,4713,2171,4718,2171,4725,2175,4725,2178,4723,2186,4723,2193,4723,2198,4723,2204,4725,L,2204,4727,Q,2203,4742,2205,4757,L,2207,4757,Q,2222,4757,2237,4759,L,2237,4760,Q,2237,4792,2239,4823,2271,4823,2305,4823,2322,4823,2339,4825,L,2339,4827,Q,2339,4842,2339,4859,2349,4855,2361,4857,2366,4857,2373,4859,L,2373,4861,Q,2373,4876,2373,4889,L,2375,4891,Q,2383,4891,2392,4891,2399,4891,2405,4891,2409,4891,2407,4894,2407,4904,2407,4915,2407,4939,2407,4962,2410,4962,2414,4961,2453,4961,2490,4961,2519,4960,2546,4959,L,2546,4956,Q,2546,4940,2543,4927,L,2550,4927,Q,2563,4927,2577,4925,L,2577,4923,Q,2577,4888,2577,4850,2577,4838,2577,4825,2570,4821,2567,4823,2565,4825,2562,4825,2551,4826,2546,4823,2544,4823,2541,4823,2538,4823,2542,4821,2546,4818,2545,4809,2543,4800,2543,4791,L,2536,4791,2534,4789,Q,2526,4789,2517,4789,2512,4791,2511,4788,2511,4784,2511,4779,2510,4770,2509,4760,L,2507,4760,Q,2502,4757,2494,4759,2485,4759,2475,4759,2473,4743,2474,4726,2475,4708,2478,4687,L,2468,4687,Q,2453,4687,2439,4687,2443,4686,2441,4679,2441,4672,2440,4671,2439,4668,2439,4649,2440,4631,2440,4599,2440,4568,2443,4560,2446,4552,2433,4553,2419,4553,2409,4553,2409,4519,2409,4487,2409,4453,2409,4421,L,2409,4419,Q,2412,4418,2414,4418,2427,4418,2439,4418,2441,4418,2441,4416,2446,4414,2444,4406,2444,4402,2444,4399,L,2443,4397,Q,2443,4394,2443,4389,2441,4384,2446,4382,2455,4382,2465,4382,2470,4382,2477,4380,L,2477,4379,Q,2477,4363,2477,4348,2477,4345,2480,4346,2489,4346,2497,4346,2502,4346,2509,4345,L,2509,4343,Q,2509,4331,2511,4318,2512,4318,2514,4318,2527,4317,2541,4316,L,2541,4314,Q,2541,4300,2541,4285,2543,4280,2548,4282,2553,4282,2560,4282,2570,4282,2579,4279,2580,4245,2580,4214,2580,4180,2580,4146,2584,4145,2589,4146,2596,4146,2611,4145,L,2611,4143,Q,2611,4112,2611,4080,2611,4077,2614,4078,2623,4078,2631,4078,2638,4078,2645,4077,L,2645,4075,Q,2645,4059,2646,4044,L,2648,4044,Q,2663,4044,2680,4043,L,2680,4039,Q,2680,4009,2680,3977,2663,3977,2648,3977,2645,3965,2645,3949,2646,3943,2644,3941,2636,3944,2630,3943,2624,3943,2616,3943,2614,3942,2611,3941,L,2611,3939,Q,2611,3937,2610,3932,2609,3925,2609,3915,2609,3905,2604,3908,2599,3910,2597,3909,2589,3908,2580,3907,2582,3895,2579,3890,2579,3888,2579,3887,2577,3883,2577,3882,2575,3881,2575,3880,2573,3876,2572,3875,2568,3873,2563,3873,2555,3873,2545,3873,2546,3832,2541,3803,2563,3808,2575,3807,2577,3807,2577,3803,2577,3795,2577,3787,2577,3780,2579,3773,L,2580,3773,Q,2595,3773,2611,3773,2614,3773,2612,3770,2612,3761,2612,3751,2612,3744,2612,3737,2612,3734,2616,3736,2624,3736,2633,3736,2640,3735,2646,3734,2648,3734,2648,3731,2648,3722,2648,3714,2648,3708,2650,3703,L,2651,3703,Q,2664,3703,2677,3703,2677,3694,2677,3685,2677,3651,2677,3619,L,2677,3617,Q,2677,3610,2679,3603,2651,3603,2626,3603,2621,3603,2616,3603,2611,3605,2611,3600,2611,3591,2611,3583,2612,3583,2612,3581,2612,3569,2612,3556,2612,3524,2612,3491,2612,3461,2612,3429,2612,3397,2612,3364,2627,3364,2643,3364,L,2645,3364,Q,2641,3359,2643,3349,2643,3332,2643,3315,2643,3305,2645,3294,L,2646,3294,Q,2662,3293,2677,3296,2682,3296,2687,3296,2701,3296,2713,3294,L,2713,3293,Q,2713,3262,2714,3230,L,2716,3230,Q,2733,3230,2750,3228,L,2750,3227,Q,2748,3223,2748,3218,2745,3206,2746,3194,2751,3194,2755,3196,2760,3196,2763,3196,2772,3196,2780,3194,L,2780,3193,Q,2780,3179,2780,3164,2780,3160,2784,3162,2792,3162,2799,3162,2824,3162,2850,3160,L,2850,3159,Q,2850,3126,2852,3094,L,2853,3094,Q,2886,3094,2918,3093,L,2918,3091,Q,2918,3075,2918,3060,2918,3057,2921,3059,2931,3059,2942,3059,2947,3058,2952,3057,L,2952,3055,Q,2952,3041,2953,3026,L,2955,3026,Q,2967,3026,2986,3025,2986,2992,2984,2959,2962,2962,2957,2962,2952,2963,2952,2960,2952,2941,2952,2923,2952,2890,2952,2857,2952,2824,2952,2792,L,2952,2791,Q,2936,2789,2918,2789,2921,2782,2920,2779,2918,2777,2918,2774,2918,2741,2918,2707,2918,2695,2920,2685,L,2921,2685,Q,2935,2685,2950,2684,L,2950,2682,Q,2950,2668,2950,2653,2950,2650,2955,2651,2957,2651,2959,2651,L,2960,2653,Q,2973,2653,2984,2653,2984,2638,2984,2621,2984,2588,2984,2555,2984,2522,2984,2489,2984,2487,2982,2485,2969,2483,2955,2483,L,2953,2483,Q,2952,2470,2952,2455,L,2952,2453,Q,2936,2451,2920,2451,L,2918,2451,Q,2916,2439,2916,2427,2916,2419,2914,2415,2917,2406,2916,2399,2904,2399,2894,2399,2884,2399,2874,2400,2860,2402,2860,2392,2860,2380,2858,2368,2858,2365,2855,2363,2841,2356,2823,2360,2801,2363,2806,2341,2806,2337,2804,2338,2797,2334,2789,2332,2775,2331,2775,2341,2775,2344,2774,2346,2772,2348,2770,2354,2767,2364,2755,2363,2746,2361,2738,2360,2736,2360,2735,2360,2724,2358,2714,2360,2692,2363,2696,2344,2697,2326,2677,2332,2673,2334,2667,2332,2660,2332,2660,2338,2660,2351,2660,2365,2660,2368,2658,2371,2655,2382,2650,2392,2648,2395,2646,2395,2631,2398,2616,2400,2612,2400,2609,2400,2595,2400,2585,2405,2583,2407,2582,2407,2568,2409,2570,2422,2570,2429,2565,2429,2553,2429,2541,2429,2538,2429,2534,2431,2531,2432,2529,2436,2527,2444,2526,2453,2526,2456,2524,2456,2490,2460,2456,2460,2402,2460,2348,2460,2348,2453,2349,2446,2351,2443,2353,2441,2354,2439,2358,2433,2361,2419,2380,2416,2381,2388,2382,2361,L,2382,2358,Q,2337,2354,2293,2354,2290,2354,2287,2353,2281,2349,2283,2338,2285,2322,2280,2314,2278,2312,2278,2310,2278,2303,2273,2300,2270,2298,2266,2297,2259,2288,2241,2280,2239,2276,2237,2275,2234,2269,2232,2263,2227,2249,2219,2239,2217,2237,2217,2236,2215,2232,2214,2232,Q,2205,2229,2198,2217,Z]],label:"Bludenz",shortLabel:"BZ",labelPosition:[175.4,286],labelAlignment:[CEN,MID]},"AT.VO.FK":{outlines:[[M,576,1501,Q,544,1501,512,1501,479,1501,446,1501,444,1501,442,1501,441,1515,441,1530,L,441,1532,Q,427,1533,412,1533,L,410,1533,Q,408,1550,408,1567,L,408,1569,Q,393,1570,378,1571,376,1571,374,1571,373,1596,373,1620,373,1623,373,1628,374,1633,371,1633,361,1633,352,1633,347,1633,342,1633,337,1632,337,1635,337,1649,337,1664,337,1671,337,1676,339,1686,339,1698,L,339,1700,Q,334,1701,327,1701,317,1701,308,1701,305,1699,305,1703,305,1722,305,1740,305,1774,305,1806,298,1806,293,1806,283,1806,274,1806,269,1805,269,1808,269,1823,269,1837,L,269,1839,Q,256,1840,242,1840,240,1840,239,1840,237,1855,237,1869,L,237,1871,Q,211,1872,184,1873,179,1873,176,1873,171,1871,171,1874,171,1889,171,1903,171,1905,171,1907,169,1908,167,1908,152,1908,139,1908,L,137,1908,Q,135,1923,135,1939,135,1973,135,2005,137,2012,132,2012,116,2012,103,2012,L,101,2012,Q,100,2025,100,2041,100,2042,100,2044,98,2047,91,2046,81,2046,72,2046,69,2044,69,2047,69,2062,69,2076,L,69,2078,Q,51,2079,33,2080,33,2094,35,2108,L,37,2108,39,2110,Q,47,2110,55,2110,62,2110,67,2110,71,2110,69,2114,69,2129,71,2144,L,72,2144,Q,82,2146,93,2146,100,2144,101,2147,101,2149,101,2151,101,2163,101,2173,L,103,2175,Q,120,2175,135,2175,138,2175,137,2178,137,2197,137,2214,137,2230,139,2246,L,140,2246,Q,154,2246,167,2248,167,2249,167,2251,167,2285,167,2317,167,2331,169,2348,151,2346,137,2346,125,2391,164,2378,L,166,2378,Q,167,2382,169,2385,L,171,2387,Q,171,2398,171,2409,L,171,2410,Q,176,2412,181,2412,189,2412,198,2412,L,208,2412,Q,201,2436,201,2460,201,2468,201,2477,200,2480,203,2480,220,2480,235,2480,L,237,2480,Q,239,2499,239,2516,240,2549,237,2582,L,237,2584,Q,220,2585,203,2585,203,2617,203,2651,205,2665,201,2677,201,2682,201,2685,201,2689,201,2692,195,2689,188,2689,179,2689,171,2690,L,171,2692,Q,171,2704,173,2716,L,174,2716,Q,205,2716,235,2716,L,237,2718,Q,239,2721,239,2726,239,2728,237,2728,234,2736,235,2745,235,2746,235,2750,235,2753,239,2752,249,2752,257,2752,267,2750,273,2755,L,273,2757,Q,273,2789,274,2819,L,276,2819,Q,290,2819,303,2821,L,303,2823,Q,303,2840,305,2857,L,307,2857,Q,323,2857,339,2855,L,339,2821,Q,359,2824,369,2823,370,2843,371,2848,383,2850,385,2843,386,2840,386,2836,386,2784,388,2731,388,2729,388,2728,388,2709,403,2704,405,2702,407,2701,417,2695,419,2684,422,2660,410,2650,401,2643,390,2638,388,2638,386,2636,383,2634,380,2633,388,2619,403,2614,408,2612,413,2612,440,2612,439,2585,437,2568,439,2551,439,2548,439,2545,442,2531,449,2526,452,2524,453,2521,454,2512,456,2507,457,2504,458,2500,454,2478,468,2475,473,2473,478,2473,505,2473,532,2475,536,2482,537,2485,539,2487,542,2489,544,2488,546,2490,554,2493,561,2499,564,2500,566,2504,568,2511,568,2517,569,2522,576,2522,578,2522,580,2522,592,2527,595,2541,595,2543,597,2545,602,2549,602,2561,602,2563,602,2565,603,2573,610,2575,624,2578,629,2592,631,2597,641,2597,642,2597,644,2597,678,2599,712,2599,729,2599,726,2619,720,2641,743,2638,751,2636,760,2638,770,2638,773,2633,776,2628,780,2619,781,2617,782,2616,783,2599,783,2582,785,2572,794,2568,800,2567,807,2565,812,2561,811,2551,805,2529,827,2533,832,2534,833,2541,833,2543,833,2545,834,2553,838,2560,838,2561,841,2561,880,2561,919,2558,L,921,2555,Q,922,2551,924,2548,926,2544,926,2541,927,2534,928,2528,927,2517,939,2519,948,2521,956,2522,968,2524,968,2514,967,2502,962,2495,960,2492,962,2487,961,2480,958,2477,956,2477,956,2473,956,2444,960,2416,960,2414,963,2414,972,2412,980,2414,987,2414,989,2409,989,2405,990,2402,994,2387,992,2368,992,2358,1004,2361,1016,2365,1031,2366,1053,2368,1075,2370,1095,2371,1109,2361,1106,2353,1096,2349,1082,2342,1065,2334,1101,2334,1136,2332,1138,2332,1140,2332,1148,2331,1152,2326,1153,2324,1157,2324,1160,2324,1163,2317,1165,2314,1165,2310,1167,2300,1165,2290,1165,2286,1165,2283,1163,2275,1162,2270,1160,2266,1158,2265,1157,2263,1153,2261,1152,2261,1150,2259,1141,2254,1126,2254,1111,2256,1096,2253,L,1096,2249,Q,1094,2239,1099,2237,1107,2236,1116,2236,1133,2236,1150,2234,1158,2217,1160,2198,L,1163,2198,Q,1224,2198,1286,2200,1289,2210,1287,2219,1287,2225,1291,2229,1292,2229,1294,2232,1297,2246,1299,2266,L,1303,2268,Q,1304,2268,1306,2268,1324,2273,1330,2259,1333,2252,1337,2251,1345,2234,1342,2215,1341,2214,1340,2212,1334,2207,1336,2198,1336,2196,1337,2195,1337,2188,1337,2181,1338,2151,1331,2124,1330,2112,1328,2097,1328,2095,1328,2093,1327,2079,1320,2072,1317,2068,1313,2066,1311,2064,1311,2063,1309,2054,1308,2046,1308,2042,1308,2039,1308,2032,1303,2030,1301,2030,1299,2030,1284,2030,1272,2024,1263,2018,1252,2019,1228,2022,1214,2012,1213,2010,1213,2008,1211,2005,1209,2002,1208,1996,1201,1996,1187,1995,1174,1995,1165,1995,1162,1991,1160,1988,1158,1986,1155,1981,1152,1974,1152,1973,1152,1971,1153,1954,1143,1951,1141,1949,1140,1949,1136,1947,1136,1946,1128,1932,1130,1913,1129,1905,1126,1901,1114,1895,1099,1890,1095,1888,1092,1888,1060,1886,1028,1886,997,1886,967,1888,960,1888,960,1883,961,1864,956,1852,955,1849,951,1847,948,1842,948,1832,951,1796,939,1774,938,1772,938,1771,934,1764,926,1762,924,1762,923,1762,916,1762,912,1756,909,1754,906,1752,894,1745,895,1727,899,1704,885,1694,875,1686,861,1679,858,1677,855,1677,831,1679,816,1664,810,1660,805,1657,800,1652,800,1645,800,1640,799,1635,795,1620,780,1616,776,1616,773,1616,739,1615,705,1615,687,1613,671,1620,658,1624,644,1633,644,1636,644,1638,639,1637,632,1637,622,1635,614,1638,607,1640,607,1635,607,1630,607,1627,L,605,1625,609,1569,Q,597,1567,593,1567,585,1569,576,1569,L,575,1569,Q,573,1545,573,1520,573,1516,573,1515,Q,576,1509,576,1501,Z]],label:"Feldkirch",shortLabel:"FK",labelPosition:[51.8,202.9],labelAlignment:[CEN,MID]},"AT.VO.DO":{outlines:[[M,1301,1011,Q,1301,1004,1296,1004,1282,1004,1269,1004,1202,1004,1136,1004,1121,1004,1106,1002,1094,1002,1089,1007,1087,1009,1085,1011,1070,1029,1041,1024,L,1038,1024,Q,1034,1012,1021,1014,1017,1014,1016,1012,1011,1009,1007,1004,997,992,990,978,982,977,973,975,972,975,970,975,958,973,946,975,934,975,929,970,924,966,916,965,907,965,899,965,882,963,865,961,863,961,861,960,851,955,841,946,831,938,814,939,809,939,807,938,804,934,797,936,793,936,792,934,787,931,780,931,766,929,760,922,758,921,756,921,746,919,744,912,744,917,744,922,704,922,676,926,676,941,676,955,L,676,956,Q,663,958,649,958,L,648,958,Q,646,970,646,980,646,985,643,990,L,641,990,Q,609,990,576,990,576,1024,576,1056,576,1090,576,1123,576,1141,578,1162,L,580,1162,Q,595,1162,610,1163,L,610,1165,Q,610,1196,612,1226,L,614,1226,Q,627,1226,641,1226,644,1226,644,1230,642,1248,644,1265,669,1264,676,1265,L,676,1267,Q,676,1280,678,1294,L,680,1294,Q,684,1294,688,1296,689,1296,690,1297,694,1298,700,1299,707,1299,712,1299,712,1319,712,1340,712,1341,712,1343,712,1350,714,1359,L,714,1360,Q,700,1362,688,1362,685,1362,683,1364,680,1370,680,1379,680,1413,680,1445,L,680,1448,Q,680,1455,680,1464,660,1464,644,1464,644,1484,644,1506,644,1540,644,1572,644,1603,644,1633,658,1624,671,1620,687,1613,705,1615,739,1615,773,1616,776,1616,780,1616,795,1620,799,1635,800,1640,800,1645,800,1652,805,1657,810,1660,816,1664,831,1679,855,1677,858,1677,861,1679,875,1686,885,1694,899,1704,895,1727,894,1745,906,1752,909,1754,912,1756,916,1762,923,1762,924,1762,926,1762,934,1764,938,1771,938,1772,939,1774,951,1796,948,1832,948,1842,951,1847,955,1849,956,1852,961,1864,960,1883,960,1888,967,1888,997,1886,1028,1886,1060,1886,1092,1888,1095,1888,1099,1890,1114,1895,1126,1901,1129,1905,1130,1913,1128,1932,1136,1946,1136,1947,1140,1949,1141,1949,1143,1951,1153,1954,1152,1971,1152,1973,1152,1974,1155,1981,1158,1986,1160,1988,1162,1991,1165,1995,1174,1995,1187,1995,1201,1996,1208,1996,1209,2002,1211,2005,1213,2008,1213,2010,1214,2012,1228,2022,1252,2019,1263,2018,1272,2024,1284,2030,1299,2030,1301,2030,1303,2030,1308,2032,1308,2039,1308,2042,1308,2046,1309,2054,1311,2063,1311,2064,1313,2066,1317,2068,1320,2072,1328,2057,1340,2046,1350,2032,1367,2034,1370,2034,1372,2030,1377,2027,1387,2024,1391,2022,1394,2020,1401,2015,1404,2008,1406,2006,1406,2005,1408,1991,1409,1978,1411,1961,1401,1954,1382,1947,1369,1939,1367,1937,1364,1935,1362,1935,1360,1935,1348,1930,1337,1927,1333,1927,1330,1925,1316,1920,1306,1907,1304,1903,1303,1900,1299,1895,1292,1895,1291,1895,1289,1895,1282,1891,1275,1888,1270,1879,1269,1873,1265,1859,1272,1856,1277,1852,1284,1847,1285,1845,1289,1845,1301,1849,1301,1839,1299,1772,1299,1706,1299,1694,1296,1684,1294,1679,1291,1674,1288,1671,1284,1669,1282,1668,1281,1667,1280,1665,1281,1662,1282,1655,1284,1649,1284,1647,1284,1645,1287,1632,1303,1628,1311,1627,1316,1622,1324,1611,1340,1599,1348,1592,1357,1584,1359,1582,1360,1582,1372,1577,1384,1579,1396,1581,1396,1571,1394,1504,1394,1438,1394,1430,1396,1421,1397,1408,1387,1409,1374,1409,1364,1404,1362,1403,1362,1401,1358,1386,1347,1381,1345,1379,1343,1377,1328,1350,1303,1323,1301,1319,1301,1316,1299,1282,1299,1248,1299,1245,1297,1243,1290,1235,1275,1236,1263,1236,1264,1228,1262,1212,1262,1197,1262,1194,1264,1194,1269,1190,1269,1184,1269,1140,1269,1096,1269,1092,1270,1090,1274,1089,1279,1089,1286,1087,1292,1085,1296,1084,1296,1082,1299,1063,1299,1045,Q,1299,1028,1301,1011,Z]],label:"Dornbirn",shortLabel:"DO",labelPosition:[99.3,130.2],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"vorarlberg",type:"maps"}}})});