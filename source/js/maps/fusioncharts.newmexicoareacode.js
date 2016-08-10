/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.NewMexicoAreaCode.18.08-10-2012 10:47:45
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-newmexicoareacode", function () {

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
        name: "NewMexicoAreaCode",
        revision: 18,
        
        standaloneInit: true,

        baseWidth: 355,
        baseHeight: 400,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "505": { 
                outlines: [
                    [M,3514,34,Q,104,39,103,39,101,39,100,38,99,38,99,38,94,37,89,37,64,37,40,37,41,3952,41,3971,446,3971,450,3971,475,3971,506,3971,506,3674,506,3652,1418,3650,1433,3650,1435,3650,1435,3650,1436,3647,1436,3645,1438,3637,1432,3635,1431,3634,1431,3634,1426,3634,1426,3631,1426,3630,1425,3630,1425,3627,1425,3625,1424,3624,1424,3624,1424,3616,1416,3618,L,1415,3618,Q,1414,3607,1414,3596,1414,3594,1414,3589,1413,3584,1413,3583,1413,3582,1414,3579,1415,3575,1418,3573,1420,3569,1419,3564,1418,3559,1420,3558,1421,3556,1423,3555,1426,3553,1424,3549,1422,3544,1421,3543,1419,3541,1419,3540,1419,3539,1414,3540,L,1412,3539,Q,1411,3533,1411,3526,1411,3524,1411,3519,1412,3513,1414,3512,1416,3511,1417,3510,1418,3509,1418,3507,1418,3505,1420,3502,1421,3500,1425,3500,1428,3500,1431,3502,3456,3500,3477,3501,3477,2962,3477,2945,3477,2921,3477,2896,3477,2872,3477,2847,3477,2823,3477,2799,3477,2775,3477,2752,3477,2727,3477,2702,3477,2678,3477,2654,3477,2630,3477,2605,3477,2581,3477,2556,3477,2555,3476,2553,3474,2550,3476,2547,3477,2544,3477,2543,3476,2542,3477,2541,3477,2529,3477,2523,3477,2515,3477,2510,3476,2503,3480,2503,3485,2503,3486,2504,3487,2504,3486,1721,3486,938,3486,932,3486,931,3486,929,3487,929,3487,928,3487,923,3493,924,3497,925,3497,922,3497,915,3497,908,3497,906,3497,904,3495,900,3489,901,3487,901,3487,901,3486,899,3485,897,3484,889,3492,889,3494,890,3495,888,3494,880,3494,872,3494,870,3494,868,3493,865,3488,866,3486,866,3485,865,3484,864,3485,862,3484,856,3484,841,3496,851,3494,698,3492,546,3491,541,3491,535,3490,534,3489,532,3489,531,3487,525,3488,519,3487,495,3488,479,3487,462,3488,458,3488,454,3488,448,3488,443,3487,424,3487,404,3488,391,3488,377,3489,373,3489,369,3495,370,3499,371,3499,366,3499,361,3510,363,3520,364,3516,225,3512,85,3513,72,Q,3514,58,3514,34,Z]
                ], 
                label: "505", 
                shortLabel: "505", 
                labelPosition: [177.8,200.2], 
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