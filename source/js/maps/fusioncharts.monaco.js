/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack core
 * @id fusionmaps.Monaco.20.10-30-2012 06:49:15
 */
FusionCharts(["private", "modules.renderer.js-monaco", function () {

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
        name: "Monaco",
        revision: 20,
        
        standaloneInit: true,

        baseWidth: 260,
        baseHeight: 340,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "EU.MN": { 
                outlines: [
                    [M,2273,117,Q,2274,126,2273,135,2271,158,2287,166,2296,165,2302,171,2308,172,2313,181,2319,189,2319,197,2319,203,2321,215,2322,225,2322,237,2308,240,2304,252,2302,256,2298,258,2286,264,2282,282,2281,290,2273,296,2262,303,2257,322,2256,330,2246,333,2240,341,2229,345,2227,346,2219,351,2209,357,2197,357,2148,357,2099,355,2091,358,2076,367,2071,370,2059,374,2057,377,2050,381,2044,385,2035,393,2031,400,2027,406,2016,408,2006,414,2004,416,1996,420,1987,426,1984,432,1982,437,1977,440,1971,443,1964,451,1958,452,1947,455,1944,466,1944,475,1941,476,1934,481,1927,482,1919,483,1902,485,1885,476,1879,471,1871,465,1869,464,1864,457,1861,457,1857,457,1843,455,1832,463,1828,466,1823,468,1812,474,1805,488,1800,498,1801,512,1802,535,1801,560,1801,570,1792,569,1778,568,1769,575,1765,578,1762,593,1757,595,1759,605,1759,607,1757,612,1756,622,1742,629,1739,633,1738,645,1740,655,1736,654,1741,673,1728,696,1718,720,1688,734,L,1688,736,Q,1698,801,1678,866,L,1613,1074,1551,1144,1523,1201,Q,1485,1267,1433,1281,L,1433,1286,1411,1331,1361,1389,1258,1324,Q,1216,1304,1193,1326,L,1183,1339,1081,1516,810,1774,Q,809,1775,808,1776,655,1895,538,2044,L,496,2114,Q,522,2263,496,2411,L,498,2414,Q,465,2449,386,2446,384,2448,383,2449,256,2542,206,2669,L,913,3245,1108,3034,1292,2900,Q,1296,2897,1302,2897,1307,2896,1310,2887,1310,2881,1314,2880,1318,2880,1318,2870,1321,2866,1329,2862,1317,2861,1307,2867,1306,2875,1299,2878,1293,2881,1287,2882,1277,2884,1266,2893,1259,2897,1251,2903,1248,2910,1239,2912,1240,2931,1220,2931,1215,2926,1216,2917,1216,2912,1212,2910,1209,2910,1205,2905,1201,2894,1190,2888,1186,2885,1182,2885,1176,2885,1171,2881,1167,2878,1168,2867,1158,2860,1158,2843,1155,2839,1155,2832,1155,2819,1150,2807,1149,2800,1149,2790,1122,2787,1094,2787,1046,2787,994,2787,994,2778,992,2776,992,2766,991,2753,985,2746,972,2748,955,2751,939,2745,938,2730,937,2715,937,2711,936,2707,934,2677,935,2652,940,2647,941,2640,951,2631,959,2632,955,2631,954,2625,945,2620,932,2621,910,2622,889,2622,875,2622,862,2620,860,2609,863,2606,869,2589,869,2572,875,2572,878,2570,882,2567,883,2562,885,2538,902,2536,908,2535,914,2533,923,2526,926,2531,928,2536,932,2540,943,2552,957,2554,968,2555,979,2555,987,2555,993,2557,999,2562,1002,2562,1014,2559,1013,2570,1013,2574,1019,2575,1021,2582,1029,2581,1038,2601,1039,2622,1042,2630,1043,2631,1047,2640,1048,2641,1059,2644,1057,2655,1081,2649,1104,2643,1109,2641,1115,2638,1125,2634,1128,2628,1134,2621,1137,2617,1144,2630,1153,2639,1161,2644,1164,2647,1172,2654,1181,2655,1182,2670,1185,2681,1187,2686,1192,2688,1196,2690,1199,2690,1207,2691,1212,2697,1214,2701,1218,2703,1224,2718,1228,2728,1229,2770,1232,2807,1247,2807,1253,2797,1254,2771,1253,2750,1252,2727,1252,2707,1252,2702,1254,2699,1296,2697,1332,2697,1347,2697,1356,2699,L,1486,2559,1572,2559,1596,2518,1596,2474,1628,2449,1627,2408,1656,2391,1656,2276,1593,2061,1573,2071,1608,2219,1416,2270,Q,1411,2272,1407,2275,1404,2279,1401,2281,1394,2287,1382,2289,1377,2287,1381,2272,1382,2259,1383,2245,1383,2232,1385,2220,1385,2212,1372,2214,1369,2212,1362,2211,1354,2217,1342,2215,1343,2216,1349,2220,1349,2224,1351,2232,1352,2245,1358,2255,1361,2281,1356,2306,1348,2309,1337,2308,1322,2308,1313,2292,1307,2290,1296,2291,1289,2304,1294,2317,1289,2317,1284,2317,1279,2317,1274,2316,1267,2315,1268,2298,1265,2295,1262,2292,1259,2289,1259,2284,1258,2277,1249,2279,1247,2280,1241,2276,1237,2274,1235,2269,1234,2267,1232,2260,1234,2252,1229,2250,1221,2248,1220,2240,1219,2235,1218,2230,1217,2223,1216,2212,1209,2209,1210,2202,1211,2200,1213,2194,1214,2192,1219,2187,1224,2186,1231,2182,1232,2176,1233,2170,1233,2162,1225,2157,1224,2140,1223,2122,1223,2113,1229,2113,1235,2113,1237,2105,1252,2102,1274,2103,1279,2105,1287,2111,1297,2110,1294,2122,1293,2130,1298,2139,1300,2143,1312,2140,1312,2136,1312,2132,1314,2124,1307,2122,1304,2095,1304,2065,1296,2065,1296,2054,1293,2052,1287,2049,1284,2035,1284,2020,1279,2021,1272,2023,1267,2036,1273,2051,1277,2057,1277,2067,1263,2067,1249,2066,1243,2066,1242,2070,1242,2078,1234,2079,1226,2081,1217,2085,1217,2060,1216,2035,1210,2021,1204,2015,1202,2011,1197,2009,1187,2008,1184,2005,1176,2000,1178,1985,1179,1976,1179,1967,1179,1949,1180,1930,1193,1916,1198,1904,1201,1898,1204,1890,1206,1880,1206,1870,1205,1863,1212,1864,1221,1865,1229,1864,1246,1864,1262,1862,1292,1850,1314,1846,1318,1845,1322,1845,1354,1845,1382,1838,1387,1837,1391,1836,1397,1835,1402,1833,1437,1832,1464,1831,1468,1831,1472,1829,1486,1822,1502,1821,1505,1821,1509,1820,1521,1816,1534,1820,1533,1852,1538,1879,1539,1885,1542,1889,1547,1895,1548,1902,1548,1908,1545,1909,1548,1916,1551,1925,1554,1938,1553,1954,L,1580,1953,1547,1821,Q,1543,1814,1544,1800,1555,1799,1556,1796,1566,1794,1572,1787,1578,1781,1592,1782,1614,1784,1632,1776,1659,1776,1679,1772,1683,1771,1687,1770,1690,1769,1693,1765,1706,1761,1708,1757,1711,1754,1712,1750,1714,1746,1719,1746,1725,1747,1725,1740,1727,1731,1727,1725,1727,1717,1737,1719,1745,1722,1745,1727,1742,1742,1754,1745,1770,1748,1770,1735,1774,1727,1781,1724,1788,1720,1792,1720,1799,1720,1798,1712,1800,1700,1798,1697,1793,1672,1803,1656,1807,1643,1808,1637,1813,1624,1812,1615,1812,1610,1816,1606,1819,1592,1818,1582,1817,1573,1821,1569,1829,1560,1828,1547,1827,1543,1827,1539,1827,1494,1827,1445,1827,1436,1826,1427,1825,1419,1820,1418,1819,1408,1815,1404,1817,1390,1820,1377,1822,1366,1822,1360,1823,1355,1826,1351,1826,1338,1834,1334,1842,1322,1845,1315,1848,1311,1849,1306,1848,1299,1859,1300,1858,1279,1869,1272,1873,1270,1876,1264,1879,1259,1881,1257,1886,1251,1889,1247,1900,1237,1897,1225,1895,1215,1904,1212,1907,1207,1910,1205,1917,1200,1918,1195,1919,1187,1926,1181,1931,1174,1933,1169,1933,1156,1941,1153,1944,1142,1952,1138,1958,1135,1959,1130,1968,1125,1969,1120,1972,1116,1969,1110,1965,1105,1966,1095,1967,1085,1967,1075,1968,1068,1971,1062,1970,1044,1980,1037,1982,1013,1981,995,1979,990,1979,987,1995,987,2007,980,2013,975,2024,971,2026,964,2026,962,2025,958,2022,956,2020,954,2016,954,2015,955,2014,955,2009,955,2004,955,1987,957,1987,940,1987,931,1982,922,1979,916,1980,907,1982,895,1985,885,1986,882,1988,875,1990,871,1990,858,1992,854,1994,847,1994,845,1999,841,2003,840,2010,832,2011,827,2019,824,2023,822,2026,817,2027,815,2031,809,2035,802,2051,806,2056,808,2064,807,2067,807,2072,812,2074,812,2075,813,L,2075,813,2075,812,Q,2073,810,2073,805,2074,798,2075,792,2078,778,2081,769,2084,761,2086,759,2094,754,2097,745,2099,741,2104,740,2108,739,2107,727,2112,728,2114,722,2115,717,2119,716,2124,715,2132,713,2154,711,2177,710,2191,710,2204,709,2211,708,2214,710,L,2216,711,2216,711,Q,2216,712,2219,717,2221,722,2221,739,2218,741,2216,743,2220,743,2223,743,2225,745,2227,745,L,2228,745,Q,2229,744,2229,744,2230,744,2230,743,2231,743,2231,741,2239,737,2246,729,2253,722,2255,706,2238,705,2222,705,2221,705,2221,705,2220,705,2220,705,L,2220,705,Q,2219,705,2219,705,2221,703,2223,702,2228,696,2226,685,2224,675,2235,671,2237,667,2237,662,2238,654,2239,645,2241,638,2243,632,2247,624,2254,624,2269,622,2277,630,2280,633,2290,634,2292,635,2295,642,2296,647,2298,651,2304,661,2306,675,2307,677,2311,685,2310,691,2315,694,2317,695,2320,699,2323,705,2327,709,2334,716,2339,722,2342,726,2347,731,2354,743,2359,755,2364,765,2372,775,2407,777,2442,777,2453,779,2457,772,2461,765,2472,766,2478,767,2484,768,2496,770,2496,760,2496,748,2505,739,2506,730,2518,721,2524,712,2523,697,2522,691,2521,685,2519,675,2517,660,2511,660,2511,655,2511,654,2504,650,2504,647,2501,642,2499,636,2499,630,2498,626,2497,622,2495,610,2493,594,2490,592,2487,587,2483,581,2483,572,2484,561,2483,545,2484,534,2474,522,2472,514,2472,505,2472,491,2471,477,2471,472,2471,467,2472,457,2461,456,2459,455,2455,451,2451,450,2446,448,2441,446,2438,449,2438,447,2438,445,2437,438,2435,430,2434,402,2433,372,2430,369,2431,362,2433,350,2430,340,2429,337,2425,332,2420,325,2421,315,2422,308,2421,302,2419,294,2429,293,2438,290,2443,277,2444,269,2445,260,2448,226,2446,190,2446,183,2436,181,2434,180,2431,174,2423,160,2407,160,2397,160,2393,149,2390,147,2387,142,2384,136,2379,135,2377,135,2372,129,2371,124,2367,124,2366,124,2359,119,2347,117,2330,116,2327,115,2320,111,2316,110,2307,103,2298,102,2289,101,2279,100,2276,110,Q,2273,112,2273,117,Z],
                    [M,2114,821,Q,2106,820,2099,820,2089,820,2083,816,2078,815,2075,813,L,2075,813,Q,2079,816,2078,825,2077,831,2076,837,2075,846,2084,847,2084,861,2072,862,2083,863,2091,858,2090,852,2091,848,2092,844,2095,843,2111,838,2118,833,Q,2122,821,2114,821,Z]
                ], 
                label: "Monaco", 
                shortLabel: "MN", 
                labelPosition: [136.5,167.3], 
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