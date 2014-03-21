/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Saitama.18.08-13-2012 12:27:27
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-saitama", function () {

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

        credits = false && !/fusioncharts\.com$/i.test(location.hostname),
        hasGeoBase = !!api.geo,

        geodefinitions, // store map drawing information
        definition,
        name,
        count;

    geodefinitions = [{
        name: "Saitama",
        revision: 18,
        creditLabel: credits,
        standaloneInit: true,

        baseWidth: 540,
        baseHeight: 280,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "35": { 
                outlines: [
                    [M,3825,381,Q,3700,408,3607,480,3599,485,3591,490,3571,528,3513,547,3503,546,3492,552,3477,558,3456,558,3438,565,3420,573,3402,572,3378,578,3325,577,3279,558,3262,553,3238,542,3173,516,3108,485,3095,477,3077,469,3064,464,3051,454,3040,446,3030,433,3015,427,2994,428,2962,420,2936,407,2914,396,2885,391,2832,378,2786,365,2697,327,2614,277,2514,213,2401,168,2286,122,2152,95,2115,89,2079,90,2021,84,1970,116,1958,129,1934,137,1844,181,1767,225,1691,269,1622,319,1493,413,1378,526,1359,547,1341,568,1337,581,1326,594,1280,657,1222,708,1191,739,1160,771,1152,783,1139,797,1126,808,1113,807,1013,863,926,932,893,958,853,978,828,991,817,1010,710,1104,547,1186,539,1192,531,1191,507,1198,489,1217,444,1250,385,1295,372,1302,365,1316,354,1334,318,1352,310,1358,302,1363,298,1382,287,1389,279,1402,266,1415,247,1446,204,1451,190,1458,183,1472,120,1568,89,1695,87,1708,79,1721,74,1771,63,1820,77,1857,79,1903,80,1929,69,1955,63,1959,58,1966,67,1979,79,1986,92,1993,100,2007,130,2057,193,2101,295,2158,391,2215,474,2272,578,2298,588,2304,598,2303,713,2315,827,2340,848,2345,900,2345,L,910,2345,Q,929,2353,936,2360,968,2386,1025,2412,1032,2417,1040,2423,1096,2536,1139,2657,1151,2686,1170,2714,1197,2682,1212,2651,1216,2633,1227,2615,1284,2531,1347,2454,1354,2449,1362,2444,1394,2412,1451,2386,1469,2373,1482,2360,1495,2354,1508,2360,1520,2366,1534,2366,1591,2385,1648,2418,1661,2423,1674,2428,1679,2434,1684,2433,1710,2452,1741,2459,1755,2461,1762,2470,1823,2488,1897,2475,1954,2468,2012,2449,2044,2435,2058,2397,2064,2392,2069,2386,2134,2317,2225,2298,2243,2297,2256,2303,2495,2367,2734,2412,2843,2437,2947,2475,2960,2480,2973,2480,3092,2479,3181,2454,3231,2436,3269,2418,3282,2410,3295,2402,3370,2377,3451,2366,3464,2366,3477,2360,3495,2354,3508,2355,3616,2353,3731,2345,3750,2345,3763,2340,3831,2320,3887,2288,3938,2262,3976,2231,3988,2225,4002,2220,4009,2221,4017,2215,4074,2195,4131,2189,4251,2188,4365,2194,4384,2195,4396,2189,4409,2189,4422,2184,4436,2182,4443,2173,4525,2136,4620,2137,4639,2137,4651,2137,4699,2142,4745,2158,4756,2160,4765,2163,4802,2175,4833,2163,4846,2157,4859,2158,4910,2163,4937,2137,4950,2132,4963,2127,4968,2125,4973,2111,4997,2085,5015,2059,5041,2009,5067,1992,5074,1990,5082,1971,5082,1965,5087,1960,5125,1903,5181,1846,5194,1841,5202,1836,5220,1821,5238,1799,5277,1770,5290,1753,5303,1740,5316,1721,5322,1714,5321,1706,5341,1663,5342,1612,5344,1597,5342,1581,5342,1541,5342,1508,5334,1453,5295,1436,5290,1434,5285,1420,5240,1369,5171,1337,5106,1318,5061,1275,4954,1167,4859,1041,4821,996,4765,958,4632,875,4474,812,4384,775,4282,745,4253,732,4220,708,4224,703,4230,672,4230,647,4256,641,4264,641,4272,635,4301,578,4350,547,4363,535,4370,511,4376,503,4376,490,4384,477,4386,464,4360,389,4308,370,4281,360,4261,350,4246,342,4235,334,4218,313,4194,298,4187,292,4168,293,4150,293,4131,293,4124,293,4111,293,4086,281,4074,282,4062,307,4043,313,4030,320,4017,334,3990,372,3913,365,3889,365,3872,370,Q,3851,376,3825,381,Z]
                ], 
                label: "Saitama", 
                shortLabel: "SI", 
                labelPosition: [270,140.1], 
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