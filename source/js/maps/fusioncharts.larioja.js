(function (factory) {
    if (typeof module === 'object' && typeof module.exports !== 'undefined') {
        module.exports = factory;
    } else {
        factory(FusionCharts);
    }
}(function (FusionCharts) {
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at http://www.fusioncharts.com/license
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.LaRioja.1.04-03-2017 11:58:22
 **/

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-larioja", function () {

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
        name: "LaRioja",
        revision: 1,
        standaloneInit: true,

        baseWidth: 400,
        baseHeight: 280,
        baseScaleFactor: 10,

        /**
         * @type {Object}
         */
        entities: {
            "ES.LA.LR": { 
                outlines: [
                    [M,2432,757,Q,2371,737,2301,743,2230,750,2160,750,2137,750,2113,737,2046,703,1992,670,1962,649,1939,629,1925,619,1902,626,1878,633,1855,639,1808,656,1761,663,1697,670,1674,629,1667,619,1644,616,1593,606,1580,633,1573,643,1553,649,1412,696,1365,572,1348,529,1338,482,1322,415,1271,384,1258,378,1244,374,1181,371,1161,334,1151,317,1154,294,1171,180,1107,146,1094,143,1077,136,1030,116,1016,143,1010,153,990,163,943,187,896,247,862,294,849,364,812,341,805,270,802,247,792,230,768,187,748,109,745,96,728,86,711,76,701,73,688,83,668,86,688,220,591,190,570,183,547,177,450,153,523,39,403,26,336,73,316,86,302,109,295,126,279,133,235,163,232,257,232,281,205,294,185,304,158,311,134,317,121,338,101,368,111,391,161,512,165,623,171,851,131,1082,124,1139,124,1199,124,1213,108,1216,7,1256,67,1367,77,1384,91,1391,161,1441,131,1585,124,1612,121,1635,114,1702,104,1759,101,1780,114,1800,181,1897,295,1988,305,1998,305,2021,302,2132,399,2159,419,2172,440,2185,476,2209,520,2222,580,2239,601,2299,715,2323,808,2313,835,2313,859,2263,906,2172,949,2112,966,2091,986,2078,1030,2045,1073,2018,1100,1998,1147,2008,1164,2011,1177,2018,1308,2085,1224,2192,1211,2216,1191,2222,1147,2246,1154,2309,1167,2403,1248,2423,1271,2430,1291,2420,1318,2407,1345,2390,1415,2346,1536,2366,1563,2373,1587,2373,1694,2383,1748,2330,1794,2283,1754,2239,1731,2212,1721,2152,1768,2081,1841,2051,1949,2011,2066,1977,2180,1951,2284,1954,2371,1961,2455,2024,2515,2071,2599,2091,2613,2081,2626,2081,2687,2081,2727,2115,2794,2179,2851,2256,2894,2320,2841,2383,2831,2397,2824,2410,2817,2434,2827,2450,2864,2521,2968,2507,2975,2511,2985,2514,3059,2548,3119,2595,3230,2675,3337,2759,3351,2769,3361,2759,3401,2715,3471,2672,3495,2662,3512,2641,3569,2571,3699,2504,3696,2504,3693,2504,3639,2501,3605,2457,3528,2363,3495,2252,3458,2122,3481,1974,3481,1964,3481,1954,3481,1904,3535,1904,3545,1904,3555,1900,3595,1887,3636,1873,3642,1873,3652,1877,3713,1914,3780,1941,3790,1944,3800,1944,3947,1957,3961,1837,3968,1739,3830,1669,3776,1642,3703,1649,3689,1649,3683,1632,3672,1592,3642,1552,3622,1521,3602,1488,3592,1468,3569,1451,3562,1444,3552,1438,3545,1431,3535,1424,3515,1411,3485,1394,3431,1367,3401,1317,3377,1277,3351,1253,L,3347,1233,Q,3354,1213,3351,1199,3340,1179,3330,1163,3300,1106,3260,1062,3226,1018,3180,1035,3062,1079,2955,1136,2945,1102,2945,1089,2945,1065,2945,1042,2955,971,2921,948,2837,891,2727,854,Q,2579,807,2432,757,Z]
                ], 
                label: "La Rioja", 
                shortLabel: "LR", 
                labelPosition: [200.3,140], 
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
}));