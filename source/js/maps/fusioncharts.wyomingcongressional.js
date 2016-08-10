/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.WyomingCongressional.18.08-17-2012 12:31:23
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-wyomingcongressional", function () {

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
        name: "WyomingCongressional",
        revision: 18,
        
        standaloneInit: true,

        baseWidth: 600,
        baseHeight: 460,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "00": { 
                outlines: [
                    [M,5234,65,L,5178,65,Q,5175,65,5133,61,5114,59,5111,70,5093,67,5081,71,5071,75,5067,76,L,4674,76,Q,4597,81,4583,83,4581,83,4580,84,4453,86,4399,86,4331,85,4291,83,L,4261,92,Q,3815,88,3813,88,3765,93,3750,93,L,3750,99,3638,99,Q,3437,97,3312,97,L,3312,92,3213,93,Q,3150,93,3114,91,L,2868,91,Q,2802,93,2650,89,2634,89,2624,93,2398,92,2291,94,2230,91,2208,91,2158,87,2149,87,2011,79,2008,79,1989,79,1980,82,1973,84,1968,85,1967,85,1966,85,L,1965,85,Q,1796,83,1697,81,L,1697,76,1358,74,1349,65,Q,1092,70,1011,65,997,68,991,68,990,66,990,60,L,957,60,Q,940,60,939,54,L,939,66,Q,870,66,840,68,L,786,68,Q,786,60,785,56,L,758,56,758,66,644,66,644,58,619,58,Q,558,59,488,58,L,488,49,441,49,441,40,230,40,230,92,Q,222,107,223,125,225,161,222,188,L,222,291,Q,222,291,221,292,213,300,213,343,213,371,217,411,217,436,212,535,L,213,588,Q,211,589,170,1731,L,167,1731,Q,167,1755,163,1816,L,163,1858,Q,164,1867,165,1905,165,1941,156,1956,147,1971,130,2635,112,3298,60,4500,L,76,4501,Q,213,4513,309,4511,364,4510,431,4518,500,4525,522,4526,555,4525,646,4521,766,4521,1126,4530,1128,4530,1130,4530,L,1130,4532,1213,4532,Q,1290,4537,1473,4547,1656,4557,4759,4546,4763,4538,4786,4538,4836,4538,5019,4542,5020,4542,5021,4541,5041,4532,5152,4532,5174,4532,5265,4524,5473,4518,5487,4517,5521,4517,5589,4519,5648,4518,5682,4511,5768,4511,5821,4509,5874,4507,5891,4507,L,5879,4158,Q,5881,4150,5881,4143,5875,4111,5875,4087,5875,4042,5872,4024,L,5864,3741,Q,5841,3173,5840,3087,5840,3086,5840,3085,5839,3052,5839,2983,5834,2927,5835,2900,5835,2899,5835,2898,5829,2786,5829,2750,5821,2669,5823,2623,5823,2621,5823,2619,L,5794,1860,Q,5795,1853,5798,1796,5799,1772,5798,1758,5798,1753,5793,1742,5790,1732,5791,1708,L,5787,1548,Q,5787,1522,5787,1510,L,5781,1510,Q,5780,1509,5781,1508,5778,1401,5778,1366,L,5781,1329,Q,5780,1326,5776,1311,5774,1230,5774,1165,5768,1078,5768,1031,L,5764,1031,Q,5759,809,5758,743,5757,742,5758,741,5742,354,5739,205,5729,104,5730,54,5704,51,5671,51,5644,50,5633,54,L,5633,58,Q,5543,57,5501,56,5427,55,5368,60,5376,68,5319,67,Q,5251,65,5234,65,Z]
                ], 
                label: "Wyoming At Large", 
                shortLabel: "WY", 
                labelPosition: [297.5,229.6], 
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