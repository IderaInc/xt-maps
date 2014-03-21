/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Nara.18.08-10-2012 09:54:57
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-nara", function () {

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
        name: "Nara",
        revision: 18,
        creditLabel: credits,
        standaloneInit: true,

        baseWidth: 320,
        baseHeight: 594,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "28": { 
                outlines: [
                    [M,2151,407,Q,2040,457,1970,390,1921,340,1845,277,1831,262,1811,254,1728,227,1658,186,1653,180,1641,175,1565,168,1482,203,1330,272,1199,362,1059,464,932,594,927,609,921,611,893,632,864,645,774,693,683,742,678,747,666,753,623,783,575,804,567,807,558,810,586,836,615,855,639,871,655,895,696,948,677,1042,678,1065,672,1087,659,1184,632,1246,610,1293,638,1326,644,1339,643,1360,649,1383,655,1399,697,1468,740,1558,752,1578,751,1598,794,1992,484,2221,460,2240,433,2255,567,2413,621,2613,662,2764,655,2930,648,3159,490,3361,484,3381,479,3401,478,3442,456,3463,449,3477,456,3497,462,3520,467,3542,483,3568,479,3588,436,3726,365,3843,297,3982,229,4115,195,4190,224,4245,283,4383,405,4472,469,4520,547,4540,691,4576,683,4750,684,4813,672,4869,665,4918,632,4960,617,4974,609,4988,540,5174,672,5277,712,5317,740,5357,754,5371,762,5379,817,5441,921,5413,941,5412,955,5391,1003,5322,1051,5255,1093,5192,1176,5198,1191,5200,1199,5209,1246,5255,1301,5294,1341,5330,1409,5379,1450,5407,1505,5476,1561,5544,1596,5634,1617,5690,1686,5697,1797,5710,1902,5703,1964,5698,1993,5714,2047,5746,2106,5771,L,2106,5765,Q,2220,5591,2333,5413,2401,5311,2435,5181,2455,5104,2497,5062,2503,5053,2509,5045,2529,5033,2543,5028,2557,5019,2565,5011,2621,4977,2713,4943,2733,4938,2747,4926,2804,4889,2860,4846,2866,4841,2871,4835,2881,4815,2877,4739,2878,4696,2871,4654,2858,4613,2837,4580,2761,4447,2713,4279,2669,4135,2633,3990,2606,3886,2656,3803,2662,3795,2667,3781,2729,3678,2673,3576,2673,3568,2667,3554,2661,3521,2633,3508,2566,3453,2554,3384,2545,3356,2537,3321,2524,3292,2531,3276,2634,3068,2758,2868,2799,2813,2820,2732,2834,2668,2758,2618,2737,2607,2724,2596,2634,2532,2565,2448,2495,2358,2509,2255,2516,2192,2594,2142,2724,2079,2826,1989,2965,1892,3007,1734,3034,1638,2985,1530,2972,1500,2945,1484,2926,1479,2900,1473,2821,1444,2735,1422,2724,1422,2713,1416,2670,1397,2599,1405,2585,1405,2571,1399,2510,1356,2554,1292,2580,1244,2571,1190,2564,1133,2571,1070,2584,975,2577,872,2571,824,2560,776,2504,636,2401,504,2387,490,2372,469,2358,453,2338,441,2285,397,2191,401,Q,2171,401,2151,407,Z]
                ], 
                label: "Nara", 
                shortLabel: "NR", 
                labelPosition: [161.4,297.2], 
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