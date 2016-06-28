/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.BaikonurCity.17.04-28-2016 09:45:20
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-baikonurcity", function () {

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
        name: "BaikonurCity",
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
                    [M,1540,101,L,1515,150,1406,126,Q,1369,52,1283,40,1137,16,1003,113,1039,748,966,1384,L,795,1384,795,1481,Q,746,1469,685,1481,624,1481,575,1518,551,1518,538,1542,L,50,1554,Q,99,2617,1161,2825,2053,3008,2541,2177,2688,1921,2664,1628,2615,1225,2810,858,2896,712,2957,553,L,2676,480,Q,2322,-119,1613,89,Q,1577,89,1540,101,Z]
                ], 
                label: "Baikonur City", 
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