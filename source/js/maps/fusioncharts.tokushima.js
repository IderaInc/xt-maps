/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Tokushima.18.08-14-2012 03:06:40
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-tokushima", function () {

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
        name: "Tokushima",
        revision: 18,
        creditLabel: credits,
        standaloneInit: true,

        baseWidth: 540,
        baseHeight: 430,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "40": { 
                outlines: [
                    [M,3450,108,Q,3366,137,3296,174,3230,202,3165,209,3106,217,3076,239,3011,297,2939,334,2859,377,2779,405,2765,414,2743,423,2728,422,2714,429,2670,464,2613,471,2598,471,2583,471,2532,486,2482,494,2461,500,2440,506,2426,509,2405,518,2396,525,2387,524,2372,530,2357,536,2205,580,2031,625,1995,640,1959,655,1951,661,1936,667,1900,683,1858,684,1816,684,1781,684,1716,691,1650,690,1585,689,1520,702,1505,711,1484,720,1395,778,1306,821,1257,850,1193,857,1178,857,1163,857,1149,862,1128,869,996,913,872,987,735,1082,605,1183,475,1291,338,1385,301,1407,272,1451,273,1457,260,1463,156,1537,183,1676,183,1691,183,1706,185,1784,165,1849,134,1956,88,2057,88,2065,88,2074,82,2094,76,2122,L,76,2170,Q,82,2172,88,2175,111,2191,142,2199,147,2198,153,2205,183,2249,213,2265,241,2285,249,2306,254,2318,266,2324,L,272,2330,Q,271,2342,284,2354,292,2369,308,2377,329,2392,350,2407,358,2406,367,2413,491,2508,658,2573,686,2580,706,2579,842,2580,979,2603,988,2603,997,2603,1033,2609,1062,2615,L,1074,2615,Q,1125,2632,1169,2663,1190,2668,1205,2674,1358,2770,1460,2859,1476,2878,1514,2912,1520,2928,1526,2930,1547,2936,1561,2942,1611,2958,1668,2960,1755,2952,1835,2960,1937,2973,2025,3001,2090,3023,2155,3031,2177,3037,2191,3043,2270,3088,2363,3090,2493,3097,2595,3156,2646,3182,2619,3239,2526,3391,2506,3536,2483,3673,2577,3833,2583,3849,2589,3851,2610,3864,2625,3862,2661,3869,2684,3904,2714,3948,2737,3999,2780,4115,2844,4195,2874,4230,2933,4237,2961,4239,2969,4249,2984,4229,3005,4213,3075,4162,3118,4118,3170,4058,3230,3999,3344,3890,3379,3767,3409,3682,3438,3625,3474,3567,3545,3524,3704,3449,3783,3310,3827,3253,3872,3203,3989,3088,4127,2995,4208,2935,4288,2882,4402,2812,4502,2728,4634,2617,4781,2550,4952,2471,5131,2407,5256,2363,5315,2247,5373,2146,5315,2104,5307,2095,5292,2086,5192,2051,5113,1979,5083,1950,5060,1914,5001,1828,5036,1736,5088,1611,5096,1486,5112,1376,5078,1267,5063,1203,5013,1154,4996,1140,4965,1142,4892,1125,4840,1100,4799,1078,4787,1035,4742,914,4668,815,4640,769,4626,702,4619,687,4626,673,4712,610,4799,483,4638,488,4609,429,4603,423,4597,417,4553,364,4502,304,4459,268,4424,239,4402,224,4359,209,4294,188,4228,168,4183,159,4145,144,4065,117,3979,90,3973,88,3967,79,3952,72,3937,73,3900,59,3878,61,3834,38,3777,37,3763,36,3741,43,3625,79,3480,108,Q,3465,108,3450,108,Z]
                ], 
                label: "Tokushima", 
                shortLabel: "TK", 
                labelPosition: [271,214.3], 
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