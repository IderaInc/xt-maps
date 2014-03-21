/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Osaka.18.08-10-2012 01:12:15
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-osaka", function () {

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
        name: "Osaka",
        revision: 18,
        creditLabel: credits,
        standaloneInit: true,

        baseWidth: 380,
        baseHeight: 530,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "33": { 
                outlines: [
                    [M,2588,623,Q,2582,640,2576,642,2433,679,2350,611,2247,528,2167,385,2108,297,2020,239,1982,215,1941,196,1851,150,1745,178,1650,206,1562,239,1505,259,1452,282,L,1465,282,Q,1459,291,1452,300,1363,478,1355,648,1345,806,1440,941,1568,1110,1703,1265,1889,1481,1935,1735,1956,1848,1947,1954,1939,2056,1916,2150,1902,2278,1880,2406,1880,2427,1874,2455,1874,2471,1868,2479,1824,2531,1758,2553,1750,2558,1745,2565,1744,2592,1733,2602,1727,2617,1721,2632,1676,2742,1697,2858,1697,2874,1697,2882,1697,2898,1697,2913,1688,2925,1678,2937,1515,3126,1361,3328,1294,3419,1257,3517,1248,3540,1239,3554,1239,3560,1233,3566,1227,3582,1214,3591,1132,3671,1049,3743,915,3862,781,3981,750,4006,726,4030,713,4046,708,4061,579,4297,390,4488,361,4528,286,4537,272,4544,250,4543,215,4559,195,4604,192,4610,182,4616,177,4638,170,4653,169,4685,146,4702,140,4714,134,4726,120,4781,128,4842,132,4857,134,4873,141,4897,146,4922,252,4997,372,4977,477,4954,567,4977,730,5020,885,5093,1033,5167,1196,5093,1205,5094,1214,5080,1227,5072,1233,5056,1301,4952,1391,4885,1472,4826,1574,4812,1835,4783,2081,4702,2195,4671,2301,4580,2456,4460,2625,4384,2758,4332,2899,4317,3013,4313,3101,4268,3130,4252,3156,4232,3489,3985,3443,3560,3444,3539,3430,3517,3385,3421,3339,3346,3333,3329,3327,3304,3327,3282,3321,3267,3292,3232,3314,3182,3343,3115,3357,3011,3364,2986,3363,2962,3384,2861,3339,2803,3323,2778,3296,2760,3266,2740,3235,2711,3125,2623,3082,2498,3044,2386,3095,2260,3149,2132,3247,2034,3320,1966,3400,1906,3512,1839,3571,1735,3639,1631,3595,1527,3544,1404,3461,1301,3379,1199,3266,1118,3250,1104,3235,1081,3227,1067,3205,1045,3162,1008,3150,941,3141,926,3131,910,3125,886,3119,862,3120,847,3113,825,3061,685,2979,611,2970,605,2960,599,2945,584,2930,569,2915,554,2899,538,2870,514,2826,483,2820,477,2814,471,2777,455,2747,483,Q,2679,565,2588,623,Z]
                ], 
                label: "Osaka", 
                shortLabel: "OS", 
                labelPosition: [239.4,264.8], 
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