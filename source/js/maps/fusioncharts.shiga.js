/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Shiga.18.08-13-2012 12:27:31
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-shiga", function () {

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
        name: "Shiga",
        revision: 18,
        creditLabel: credits,
        standaloneInit: true,

        baseWidth: 400,
        baseHeight: 594,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "36": { 
                outlines: [
                    [M,2177,971,Q,2161,994,2139,1002,1872,1076,1735,1198,1725,1203,1716,1210,1676,1250,1590,1236,1568,1234,1546,1217,1501,1203,1495,1236,1487,1242,1464,1248,1348,1264,1287,1311,1278,1317,1268,1324,1216,1393,1180,1463,1117,1585,1048,1709,1009,1794,940,1873,909,1919,877,1936,830,1959,814,1929,806,1919,783,1917,714,1926,669,1904,654,1896,631,1904,546,1918,492,1948,453,1973,392,2005,361,2012,322,2043,275,2081,221,2081,215,2088,202,2087,127,2101,101,2144,174,2148,215,2201,337,2333,398,2503,500,2759,587,3014,587,3024,587,3033,592,3052,593,3071,576,3250,606,3405,615,3434,625,3462,631,3487,638,3513,669,3596,701,3702,714,3740,713,3771,706,3825,738,3841,716,3972,694,4080,678,4149,669,4225,653,4432,713,4617,723,4655,732,4686,739,4826,707,4951,698,4981,713,4995,869,5164,1041,5310,1056,5320,1079,5329,1209,5358,1262,5418,1270,5425,1294,5424,1471,5417,1533,5519,1546,5541,1552,5556,1568,5573,1577,5575,1615,5581,1615,5626,1623,5705,1647,5784,1666,5818,1685,5853,1878,5845,1956,5752,2000,5706,2044,5645,2200,5458,2309,5241,2332,5188,2347,5197,2578,5312,2763,5481,2784,5497,2782,5512,2830,5642,2940,5594,3156,5503,3318,5342,3424,5233,3514,5109,3615,4973,3646,4806,3694,4528,3773,4251,3777,4203,3798,4162,3807,4157,3817,4143,3902,4035,3911,3904,3919,3882,3911,3860,3910,3775,3886,3721,3869,3683,3867,3645,3865,3606,3861,3563,3852,3570,3842,3576,3832,3576,3823,3576,3843,3569,3861,3557,3858,3536,3855,3513,3856,3504,3842,3487,3757,3380,3703,3305,3654,3236,3621,3159,3568,3021,3545,2876,3547,2857,3533,2831,3493,2772,3476,2705,3476,2696,3476,2680,3500,2382,3678,2138,3724,2074,3716,1980,3708,1943,3678,1898,3585,1767,3539,1690,3532,1681,3533,1658,3555,1411,3501,1179,3470,1064,3400,958,3338,865,3299,756,3247,581,3217,390,3200,351,3161,327,3156,256,3123,201,3107,167,3072,138,3063,131,3053,125,L,3047,119,Q,2947,57,2839,56,2764,56,2719,125,2603,311,2517,504,2477,590,2429,668,2423,690,2410,706,Q,2286,865,2177,971,Z]
                ], 
                label: "Shiga", 
                shortLabel: "SH", 
                labelPosition: [200.8,295.4], 
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