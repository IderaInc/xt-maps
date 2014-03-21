/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Kagawa.18.08-09-2012 12:28:58
 */
FusionCharts(["private", "modules.renderer.js-kagawa", function () {

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
        name: "Kagawa",
        revision: 18,
        standaloneInit: true,

        baseWidth: 540,
        baseHeight: 340,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "17": { 
                outlines: [
                    [M,2552,124,Q,2264,200,1955,233,1943,240,1932,245,1754,223,1593,285,1584,291,1576,297,1574,303,1570,308,1539,378,1495,417,1487,423,1478,429,1407,570,1231,550,1210,549,1196,555,1084,641,972,733,890,818,794,889,778,895,754,894,733,895,719,889,685,860,616,831,587,825,558,820,384,797,265,866,244,888,300,981,350,1070,415,1153,470,1230,484,1314,496,1420,467,1526,439,1631,495,1664,518,1685,541,1705,L,558,1722,Q,622,1722,616,1785,617,1806,610,1820,569,1896,507,1952,430,2015,380,2044,296,2078,225,2118,204,2133,191,2147,131,2232,64,2291,130,2376,208,2492,250,2550,306,2607,329,2628,346,2641,365,2676,392,2704,407,2710,415,2722,470,2779,518,2842,533,2863,541,2883,548,2891,547,2900,573,2963,593,3026,621,3088,622,3164,622,3199,622,3227,629,3278,679,3314,L,679,3268,Q,685,3241,691,3222,691,3213,691,3204,735,3108,765,3003,785,2942,783,2865,783,2851,783,2837,757,2702,857,2630,870,2624,869,2618,897,2576,932,2555,1065,2465,1191,2360,1316,2261,1449,2170,1569,2099,1696,2055,1717,2050,1731,2044,1745,2044,1759,2044,1821,2037,1869,2009,1955,1967,2041,1911,2062,1903,2076,1894,2139,1881,2202,1883,2265,1883,2328,1877,2362,1877,2403,1877,2444,1876,2478,1860,2493,1854,2501,1848,2535,1834,2570,1820,2738,1777,2886,1733,2900,1728,2915,1722,2923,1723,2932,1716,2953,1707,2966,1705,2986,1699,3006,1693,3055,1685,3104,1670,3119,1670,3133,1670,3189,1664,3231,1630,3245,1624,3259,1624,3280,1616,3294,1607,3372,1579,3449,1538,3519,1503,3581,1446,3610,1425,3667,1417,3731,1411,3794,1383,3861,1348,3943,1320,3958,1320,3972,1320,4112,1292,4225,1256,4245,1250,4259,1251,4315,1252,4357,1274,4379,1272,4414,1285,4429,1285,4443,1291,4449,1300,4455,1302,4539,1328,4615,1354,4652,1369,4696,1377,4759,1397,4822,1417,4865,1432,4886,1446,4920,1474,4960,1509,5010,1567,5052,1618,5058,1624,5064,1630,5093,1687,5248,1682,5263,1673,5271,1664,5305,1651,5311,1624,5319,1580,5305,1544,5290,1503,5288,1463,5275,1338,5248,1205,5220,1105,5150,1090,5123,1082,5075,1067,5047,1060,5012,1061,4886,1041,4753,1021,4660,1001,4552,981,4497,965,4420,900,4343,839,4259,791,4119,707,4035,630,3981,581,3863,538,3842,530,3828,521,3772,487,3702,475,3630,461,3558,440,3476,426,3443,348,3421,286,3363,251,3355,242,3340,233,3242,215,3179,182,3165,173,3144,170,3027,151,2909,96,2861,74,2805,67,2789,68,2765,61,2689,61,2627,96,2619,102,2604,101,Q,2578,117,2552,124,Z]
                ], 
                label: "Kagawa", 
                shortLabel: "KA", 
                labelPosition: [226.9,116.2], 
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