/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Fukui.18.08-08-2012 02:46:05
 */
FusionCharts(["private", "modules.renderer.js-fukui", function () {

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
        name: "Fukui",
        revision: 18,
        standaloneInit: true,

        baseWidth: 540,
        baseHeight: 530,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "6": { 
                outlines: [
                    [M,2898,107,Q,2817,130,2780,187,2676,337,2624,532,2622,545,2615,551,2593,596,2572,617,2444,721,2317,750,2299,757,2293,764,2264,798,2246,844,2246,861,2241,873,2219,989,2227,1104,2232,1161,2232,1218,2243,1310,2203,1379,2150,1489,2085,1610,2072,1635,2066,1662,2059,1678,2057,1695,2056,1713,2052,1738,2047,1784,2043,1837,2042,1854,2047,1866,2064,1889,2080,1918,2110,1974,2175,2031,2185,2043,2184,2050,2202,2136,2236,2182,2247,2195,2246,2201,2316,2385,2449,2603,2462,2620,2463,2636,2469,2665,2463,2688,2433,2781,2369,2816,2299,2863,2189,2858,2132,2851,2076,2896,2069,2908,2057,2915,2028,2972,2028,3029,2028,3109,2057,3189,2075,3235,2071,3270,2057,3334,2009,3369,1936,3434,1839,3464,1717,3509,1608,3572,1499,3647,1390,3733,1331,3784,1248,3795,1152,3813,1045,3832,762,3872,473,3842,350,3831,222,3837,216,3907,251,3936,258,3946,265,3955,287,3991,274,4045,257,4125,218,4182,131,4287,142,4437,149,4465,180,4475,189,4482,199,4494,235,4535,265,4570,277,4586,289,4603,328,4667,350,4731,373,4781,378,4844,385,4908,421,4943,547,5081,719,5128,864,5173,1021,5132,1125,5116,1229,5099,1247,5096,1262,5095,1282,5063,1338,5052,1348,5053,1352,5047,1393,5047,1428,5019,1457,4996,1480,4991,1526,4966,1556,4948,1596,4926,1660,4915,1677,4909,1688,4915,1722,4931,1773,4924,1791,4926,1797,4934,1809,4956,1844,4939,1867,4926,1891,4891,1943,4833,1972,4768,2024,4676,2071,4584,2098,4532,2137,4480,2144,4475,2151,4471,2197,4435,2284,4423,2301,4418,2307,4414,2312,4389,2345,4400,2362,4412,2378,4414,2443,4424,2473,4395,2479,4389,2487,4385,2590,4294,2789,4239,2806,4233,2818,4215,2899,4136,2993,4017,3003,4005,3007,3988,3043,3930,3073,3865,3137,3721,3224,3582,3258,3530,3314,3530,3395,3530,3470,3577,L,3475,3582,Q,3501,3505,3522,3412,3552,3279,3461,3199,3419,3157,3395,3109,3355,3011,3338,2901,3320,2839,3338,2806,3344,2789,3357,2783,3360,2770,3376,2769,3492,2782,3603,2806,3620,2805,3626,2821,3666,2873,3707,2920,3719,2932,3726,2939,3754,2967,3778,2920,3783,2913,3782,2901,3821,2814,3901,2769,3941,2843,4000,2901,4040,2947,4132,2948,4173,2949,4208,2915,4254,2874,4288,2816,4305,2794,4340,2754,4352,2747,4359,2745,4475,2722,4591,2717,4608,2718,4619,2731,4625,2741,4643,2745,4654,2752,4671,2759,L,4685,2764,Q,4795,2786,4893,2769,5049,2746,5130,2636,5228,2528,5234,2362,5240,2315,5224,2263,5196,2192,5144,2116,5090,2043,5054,1941,5033,1878,5012,1809,4999,1773,4969,1719,4964,1708,4960,1691,L,4950,1676,Q,4945,1663,4945,1643,4924,1545,4879,1459,4870,1450,4860,1440,4813,1360,4742,1289,4668,1214,4605,1128,4530,1025,4468,915,4432,851,4373,816,4287,763,4184,773,4023,803,3863,816,3770,827,3683,764,3654,747,3631,712,3572,632,3508,551,3476,510,3461,480,3438,434,3409,381,3407,376,3395,372,3325,337,3267,315,3245,303,3229,291,3218,284,3201,277,3159,260,3130,225,3100,192,3083,183,3013,139,2936,102,Q,2916,103,2898,107,Z]
                ], 
                label: "Fukui", 
                shortLabel: "FU", 
                labelPosition: [268.8,262.7], 
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