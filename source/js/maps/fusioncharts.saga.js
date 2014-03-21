/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Saga.18.08-13-2012 12:27:27
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-saga", function () {

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
        name: "Saga",
        revision: 18,
        creditLabel: credits,
        standaloneInit: true,

        baseWidth: 430,
        baseHeight: 520,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "34": { 
                outlines: [
                    [M,2194,69,Q,2188,62,2182,63,2083,148,1992,240,1944,295,1897,341,1888,351,1871,360,1842,391,1821,436,1798,484,1776,525,1780,544,1782,563,1784,634,1763,696,1757,735,1719,766,1703,788,1687,810,1632,919,1592,981,1586,998,1580,1007,1557,1055,1504,1064,1489,1071,1466,1070,1380,1071,1295,1102,1262,1109,1244,1140,1245,1146,1237,1153,1224,1162,1218,1178,1194,1225,1123,1210,1107,1209,1098,1216,1076,1246,1016,1229,1000,1231,984,1241,945,1257,883,1241,L,864,1241,Q,848,1232,832,1222,770,1154,731,1070,699,1008,667,937,627,854,572,785,567,775,547,772,531,775,515,785,499,806,452,810,437,813,414,823,405,830,388,829,319,846,281,893,265,907,249,943,243,966,236,981,237,998,230,1007,221,1046,211,1077,205,1100,198,1115,196,1138,186,1153,157,1263,166,1381,166,1419,173,1457,179,1516,186,1584,204,1778,198,1964,196,2035,147,2091,125,2121,109,2135,104,2141,90,2148,66,2182,40,2217,72,2237,103,2268,120,2274,128,2281,175,2344,198,2407,298,2655,382,2902,413,2979,452,3041,582,3257,705,3472,772,3588,832,3707,882,3810,927,3916,1007,4077,1079,4239,1147,4423,1231,4600,1294,4733,1326,4873,1348,4971,1339,5069,1347,5117,1421,5164,1445,5100,1510,5050,1556,5026,1580,4987,1687,4872,1725,4727,1758,4633,1744,4524,1742,4507,1732,4467,L,1725,4448,Q,1702,4423,1694,4391,1688,4376,1681,4353,1641,4246,1586,4131,1588,4122,1573,4106,1565,4082,1542,4042,1504,3990,1428,3960,1419,3951,1402,3941,1363,3879,1339,3802,1339,3789,1339,3776,1339,3767,1339,3751,1349,3735,1358,3719,1426,3611,1478,3472,1487,3456,1504,3440,1542,3409,1580,3339,1586,3333,1592,3320,1631,3294,1700,3238,1917,3053,2118,2845,2128,2838,2137,2838,2175,2837,2213,2851,2220,2861,2226,2864,2306,2918,2378,2971,2494,3054,2556,3168,2702,3425,2841,3681,2885,3766,2968,3821,3107,3914,3208,4030,3228,4052,3240,4074,3275,4013,3303,3960,3312,3937,3329,3922,3336,3913,3335,3897,3341,3858,3354,3827,3386,3782,3379,3713,3364,3620,3379,3535,3401,3357,3462,3193,3478,3171,3487,3149,3504,3134,3513,3111,3526,3102,3532,3085,3564,3038,3589,2990,3626,2931,3703,2864,3812,2777,3905,2636,4005,2465,4089,2287,4145,2187,4184,2072,4191,2056,4197,2033,L,4197,2021,Q,4207,1983,4216,1945,4223,1936,4222,1919,4229,1904,4229,1881,4230,1843,4216,1812,4209,1797,4210,1774,4184,1695,4159,1647,4153,1639,4146,1615,4107,1601,4083,1571,4082,1563,4058,1571,L,4039,1577,Q,4006,1587,3982,1596,3928,1618,3867,1679,3774,1756,3627,1780,3574,1786,3513,1793,3498,1802,3475,1812,3465,1812,3456,1812,3380,1811,3303,1818,3264,1827,3240,1843,3232,1850,3208,1856,3163,1863,3126,1831,3117,1824,3101,1824,2977,1795,2853,1742,2838,1733,2815,1723,2809,1724,2803,1717,2778,1678,2752,1615,2754,1600,2739,1577,2668,1423,2543,1362,2535,1355,2511,1355,2451,1347,2429,1324,2421,1317,2397,1317,2281,1318,2296,1210,2296,1201,2296,1184,2305,1153,2321,1121,2330,1105,2347,1089,2415,1036,2391,943,2391,921,2359,899,2353,897,2347,880,2321,827,2264,804,2257,806,2258,791,2258,782,2258,772,2268,721,2277,677,2283,668,2289,658,2359,598,2397,544,2421,529,2429,506,2451,455,2467,398,2406,390,2347,367,2337,358,2327,341,2321,326,2315,303,2306,272,2296,240,2288,180,2264,151,Q,2241,110,2194,69,Z]
                ], 
                label: "Saga", 
                shortLabel: "SA", 
                labelPosition: [134.8,215.5], 
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