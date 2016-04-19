/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.BayqonyrCity.17.02-23-2016 08:17:47
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-bayqonyrcity", function () {

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
        name: "BayqonyrCity",
        revision: 17,
        creditLabel: credits,
        standaloneInit: true,

        baseWidth: 300,
        baseHeight: 290,
        baseScaleFactor: 10,

        /**
         * @type {Object.}
         */
        entities: {
            "KZ.BY.BY": { 
                outlines: [
                    [M,1539,101,L,1515,150,1405,126,Q,1368,52,1283,40,1136,16,1002,113,1039,748,965,1384,L,794,1384,794,1481,Q,746,1469,684,1481,623,1481,575,1518,550,1518,538,1542,L,49,1554,Q,98,2617,1161,2825,2052,3008,2541,2177,2687,1921,2663,1628,2614,1225,2810,858,2895,712,2956,553,L,2675,480,Q,2321,-119,1613,89,Q,1576,89,1539,101,Z]
                ], 
                label: "Bayqonyr City", 
                shortLabel: "BY", 
                labelPosition: [150.3,144.6], 
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