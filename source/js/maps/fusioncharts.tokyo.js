/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Tokyo.18.08-14-2012 03:06:41
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-tokyo", function () {

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
        name: "Tokyo",
        revision: 18,
        creditLabel: credits,
        standaloneInit: true,

        baseWidth: 540,
        baseHeight: 200,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "41": { 
                outlines: [
                    [M,3149,431,Q,3133,431,3108,438,3091,446,3074,445,2967,461,2869,493,2852,503,2835,513,2785,537,2719,561,2603,595,2446,595,2429,596,2412,589,2276,539,2132,507,1817,447,1503,363,1487,355,1462,356,1343,381,1257,472,1250,479,1244,486,1225,537,1182,554,1107,580,1032,589,935,606,854,582,845,571,827,568,785,559,752,534,745,535,738,527,721,520,704,513,629,471,554,445,536,446,519,438,502,430,485,438,469,455,444,472,369,506,328,548,318,554,308,561,225,663,151,773,136,797,130,821,111,862,76,903,99,934,130,964,137,979,144,978,185,996,219,1005,226,1013,233,1012,259,1019,294,1026,L,308,1026,Q,351,1034,369,1060,426,1171,458,1265,500,1386,608,1483,618,1501,636,1511,661,1537,690,1579,899,1500,1066,1442,1216,1395,1366,1381,1477,1372,1571,1422,1738,1521,1913,1579,2060,1637,2207,1695,2315,1735,2398,1825,2474,1900,2541,1893,2642,1887,2719,1798,2759,1755,2767,1695,2777,1661,2787,1620,2787,1603,2787,1586,2794,1568,2801,1559,2852,1527,2903,1504,2953,1479,3054,1504,3112,1511,3129,1477,3127,1469,3142,1470,3217,1479,3259,1463,3275,1455,3293,1456,3392,1455,3450,1504,3459,1521,3477,1531,3561,1564,3621,1613,3634,1621,3648,1620,3741,1621,3819,1606,3836,1595,3853,1593,4001,1536,4099,1463,4108,1455,4126,1456,4168,1453,4201,1442,4226,1445,4242,1456,4259,1455,4276,1463,4293,1462,4317,1470,L,4331,1470,Q,4340,1452,4358,1442,4426,1402,4461,1354,4501,1285,4550,1217,4657,1101,4748,978,4765,961,4782,944,4816,903,4891,896,4935,886,4987,875,5051,867,5116,834,5123,835,5130,828,5198,776,5267,725,5290,702,5328,684,L,4775,172,Q,4714,152,4652,145,4635,145,4611,145,4486,143,4379,192,4369,203,4351,206,4334,214,4317,213,4301,220,4276,220,4127,212,3969,213,3894,221,3819,247,3808,255,3798,254,3781,261,3764,268,3714,309,3648,343,3574,385,3484,411,3467,418,3443,418,Q,3292,429,3149,431,Z]
                ], 
                label: "Tokyo", 
                shortLabel: "TY", 
                labelPosition: [270.2,101.9], 
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