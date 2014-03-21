/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack core
 * @id fusionmaps.VaticanCity.20.10-30-2012 07:14:53
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-vaticancity", function () {

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
        name: "VaticanCity",
        revision: 20,
        creditLabel: credits,
        standaloneInit: true,

        baseWidth: 320,
        baseHeight: 250,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "EU.VA": { 
                outlines: [
                    [M,2063,230,L,1888,283,1869,252,1734,252,1608,281,1605,320,1445,372,1431,300,1222,311,1158,464,1194,524,941,765,Q,917,767,907,749,865,744,832,773,803,821,815,869,L,833,896,740,1222,582,1277,489,1402,535,1447,Q,401,1601,263,1717,L,215,1676,Q,113,1723,17,1789,L,176,1908,252,1867,513,2127,467,2193,496,2242,Q,552,2236,611,2229,672,2228,729,2211,L,730,2211,730,2134,Q,994,2160,1255,2205,L,1255,2267,1427,2347,1754,2366,1755,2366,1766,2329,1781,2326,2157,2446,2188,2404,2157,2376,2160,2048,2268,2049,2286,2012,2635,1989,Q,2754,2200,2995,2135,3127,2043,3144,1988,3161,1932,3169,1788,3172,1714,3124,1627,L,3122,1623,Q,3075,1540,2981,1444,L,3029,577,2512,397,2478,216,2454,49,2145,151,2063,170,Z]
                ], 
                label: "Vatican City", 
                shortLabel: "VA", 
                labelPosition: [196.3,124.7], 
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