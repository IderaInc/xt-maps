/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.PuertoRicoCongressional.18.08-10-2012 03:40:08
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-puertoricocongressional", function () {

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
        name: "PuertoRicoCongressional",
        revision: 18,
        creditLabel: credits,
        standaloneInit: true,

        baseWidth: 750,
        baseHeight: 159,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "98": { 
                outlines: [
                    [M,194,1050,Q,165,1050,144,1043,122,1035,108,1035,100,1035,82,1052,64,1069,65,1075,67,1094,54,1105,40,1118,40,1123,39,1148,100,1181,157,1212,186,1212,212,1212,229,1199,256,1172,284,1147,304,1129,305,1102,304,1035,258,1035,Q,215,1050,194,1050,Z],
                    [M,1289,352,Q,1289,375,1326,391,1329,392,1332,393,1360,388,1360,360,1359,345,1344,336,1331,328,1317,328,1300,328,1297,331,Q,1289,335,1289,352,Z],
                    [M,6826,1092,Q,6810,1091,6810,1100,6809,1112,6822,1112,6825,1112,6841,1110,L,6841,1097,Q,6836,1091,6826,1092,Z],
                    [M,6874,1084,Q,6872,1084,6869,1084,6860,1084,6860,1093,6860,1103,6867,1103,Q,6874,1103,6874,1084,Z],
                    [M,7250,954,L,7250,963,Q,7235,963,7235,970,7236,976,7223,977,7218,976,7196,970,7175,972,7169,964,7164,957,7130,959,7101,960,7106,946,L,7055,946,Q,7054,941,7054,935,7000,935,6997,930,6994,924,6971,924,6955,925,6949,925,6946,925,6946,925,6898,925,6896,934,L,6853,931,Q,6843,931,6840,945,6837,961,6826,966,6782,963,6763,978,6751,987,6735,988,6712,988,6702,991,6652,1002,6645,1010,6646,1011,6651,1014,6651,1017,6649,1018,6566,1043,6529,1037,L,6529,1037,6529,1037,Q,6488,1036,6480,1032,6480,1050,6477,1094,6496,1109,6522,1129,6531,1136,6558,1136,6581,1147,6594,1147,6607,1147,6622,1139,6631,1134,6651,1123,6664,1116,6677,1109,6687,1105,6724,1102,L,6730,1102,Q,6735,1102,6740,1102,6755,1101,6772,1100,L,6772,1089,Q,6793,1087,6816,1088,L,6816,1069,Q,6828,1067,6850,1067,6848,1061,6857,1053,6865,1045,6875,1045,6881,1045,6894,1061,6896,1064,6919,1064,6920,1064,6921,1064,6925,1062,6931,1060,L,6957,1067,Q,6968,1067,6988,1056,6994,1056,7005,1061,7020,1070,7025,1073,7030,1076,7032,1046,7033,1016,7060,1016,7079,1016,7081,1017,7084,1018,7090,1065,L,7129,1062,7129,1023,Q,7135,1023,7165,1023,7177,1024,7194,1018,7198,993,7225,993,7228,993,7234,1001,7240,1008,7244,1008,7246,1008,7259,999,7277,999,7308,1008,L,7315,986,Q,7279,967,7272,963,7263,959,7259,954,Z],
                    [M,7392,505,Q,7392,515,7411,527,7423,534,7433,537,7436,531,7442,529,7447,527,7447,514,7447,480,7417,480,Q,7392,480,7392,505,Z],
                    [M,7369,466,Q,7369,455,7356,442,7343,429,7332,429,7326,429,7316,434,7303,440,7303,448,7303,456,7316,467,L,7301,479,Q,7272,475,7233,475,7192,477,7172,477,L,7101,439,Q,7108,472,7137,497,7138,497,7138,498,7132,516,7117,521,7101,524,7101,538,7146,578,7147,578,L,7152,578,Q,7151,554,7151,543,7152,523,7163,517,7187,559,7208,563,7228,568,7265,601,7252,555,7321,581,7347,565,7365,555,7382,544,7365,510,7364,507,7362,504,7360,502,7359,498,L,7341,492,7341,482,Q,7369,476,7369,466,Z],
                    [M,6395,558,Q,6394,551,6400,546,6405,541,6405,535,6405,523,6402,520,6400,517,6387,518,6369,518,6369,530,Q,6369,538,6395,558,Z],
                    [M,6465,445,Q,6465,457,6481,459,6490,460,6511,460,6521,445,6521,435,6521,419,6497,419,Q,6465,419,6465,445,Z],
                    [M,4414,94,Q,4394,85,4349,86,4304,89,4295,89,4288,89,4274,78,4263,69,4242,76,4219,76,4203,84,4181,94,4164,96,4127,101,4124,103,4111,109,4109,135,4015,142,3983,133,3950,123,3907,109,3864,94,3840,94,3709,104,3629,96,3586,92,3517,111,3449,130,3415,127,3413,127,3411,127,3348,137,3295,115,3225,85,3208,84,3139,76,3000,76,2983,76,2952,90,2925,102,2887,99,2884,108,2767,81,2712,86,2700,84,2692,83,2617,48,2551,18,2457,18,2329,18,2278,28,2160,52,2160,132,2159,156,2166,166,2175,183,2181,209,2183,210,2184,211,2193,220,2195,235,2196,244,2196,265,2196,266,2196,267,2122,331,2080,340,2037,349,2018,363,1998,377,1940,385,1882,392,1882,414,1882,440,1906,471,1909,476,1914,481,1921,492,1934,512,1957,547,1960,561,1967,586,1992,592,2008,596,2049,593,2092,590,2099,657,2100,667,2112,672,2125,677,2127,684,2128,688,2128,708,2128,724,2138,736,2134,749,2134,758,2134,759,2160,787,2186,814,2182,841,2179,867,2149,904,2108,934,2104,939,2123,955,2125,959,2127,962,2127,981,2127,999,2125,1001,2123,1003,2097,1002,L,2097,1030,Q,2103,1043,2109,1052,2112,1057,2112,1070,2112,1097,2089,1108,2072,1114,2067,1118,2059,1124,2064,1138,2070,1142,2088,1156,2107,1171,2107,1178,2107,1195,2091,1201,2065,1211,2061,1214,2063,1238,2044,1275,2046,1275,2046,1277,2065,1285,2106,1292,2140,1300,2150,1323,L,2150,1353,Q,2067,1367,2057,1371,2023,1386,2023,1436,2023,1478,2027,1486,2036,1508,2074,1499,2076,1505,2073,1528,2072,1547,2089,1542,2088,1515,2089,1499,2089,1486,2090,1479,2092,1457,2132,1457,2155,1456,2206,1488,2252,1516,2283,1510,2321,1519,2369,1499,2362,1484,2378,1472,2401,1456,2402,1454,2410,1439,2463,1439,2509,1439,2517,1441,2528,1444,2596,1469,2591,1434,2615,1434,2641,1434,2651,1466,2663,1503,2680,1512,2703,1525,2717,1525,2736,1525,2745,1527,2750,1529,2765,1543,2778,1557,2785,1558,2791,1558,2793,1555,2791,1547,2791,1541,2790,1529,2798,1525,L,2818,1525,2818,1520,2823,1520,Q,2833,1516,2834,1501,2835,1486,2834,1482,2832,1478,2821,1467,2820,1466,2802,1462,2787,1458,2786,1446,2791,1444,2806,1444,2820,1444,2832,1454,2843,1464,2869,1464,2869,1477,2871,1502,2885,1502,2917,1494,2937,1494,2965,1517,2971,1517,2977,1515,2977,1493,2978,1488,2979,1482,2995,1482,3008,1482,3023,1493,3038,1504,3048,1505,3067,1504,3073,1499,3091,1483,3100,1481,3112,1472,3131,1474,L,3131,1454,Q,3129,1452,3152,1462,L,3190,1453,3202,1412,Q,3201,1410,3201,1410,3183,1382,3200,1371,3210,1363,3225,1363,3240,1363,3253,1371,3268,1380,3268,1395,3268,1401,3263,1419,L,3264,1419,3272,1424,Q,3276,1424,3297,1410,3322,1396,3346,1396,3369,1396,3429,1429,3488,1462,3492,1462,3510,1461,3545,1441,3580,1421,3605,1421,3630,1421,3640,1448,3649,1474,3654,1474,3658,1474,3670,1461,3683,1446,3704,1441,3724,1466,3730,1472,3752,1491,3857,1447,3962,1402,4025,1399,4026,1402,4045,1401,L,4078,1399,Q,4088,1398,4095,1407,4099,1412,4104,1419,4114,1429,4149,1467,4161,1479,4209,1495,4256,1511,4278,1527,4303,1535,4364,1459,4407,1419,4461,1434,L,4472,1434,Q,4471,1457,4492,1462,L,4556,1522,Q,4565,1507,4588,1507,4603,1507,4621,1525,4638,1542,4643,1542,4672,1542,4704,1506,4735,1469,4764,1469,4778,1469,4797,1488,4813,1504,4833,1497,L,4833,1522,4780,1522,Q,4773,1520,4770,1517,L,4758,1517,4758,1522,Q,4761,1530,4772,1541,4787,1557,4800,1558,4803,1557,4841,1539,4849,1535,4858,1530,4871,1550,4899,1570,4923,1547,4947,1523,4966,1509,5010,1502,5031,1498,5065,1471,5096,1446,5121,1446,5135,1446,5163,1469,5191,1492,5199,1492,5210,1492,5245,1456,5280,1419,5324,1419,5339,1419,5356,1433,5373,1447,5395,1446,5421,1446,5453,1438,5485,1429,5507,1429,5508,1429,5532,1441,L,5537,1441,Q,5635,1373,5654,1359,5674,1345,5689,1344,5703,1342,5738,1338,5769,1335,5779,1330,L,5779,1272,Q,5766,1247,5784,1225,5797,1210,5817,1199,5825,1200,5843,1209,5870,1209,5878,1177,5890,1131,5893,1126,5919,1092,5929,1020,5934,981,5999,939,6013,930,6032,899,6050,869,6052,868,6054,866,6080,866,6104,866,6125,881,6144,896,6146,896,6152,896,6156,894,6155,870,6156,860,6158,842,6174,841,6205,838,6206,838,6223,838,6224,818,L,6252,816,6252,816,6252,816,Q,6265,829,6272,838,6279,848,6325,826,L,6325,795,Q,6310,782,6310,761,6310,740,6334,740,6341,740,6353,742,6353,742,6354,743,L,6384,821,6421,805,6409,765,6439,765,6439,750,Q,6426,747,6426,746,6418,741,6414,725,6427,724,6454,723,6474,719,6474,699,6474,680,6465,674,6456,669,6439,671,6422,673,6414,666,6406,658,6388,660,6370,660,6358,667,6346,673,6343,673,6342,672,6341,672,6330,669,6330,662,6335,644,6335,637,6335,623,6325,619,6315,614,6315,598,6315,579,6325,575,6335,571,6335,558,6327,519,6328,509,6327,501,6335,493,6343,486,6343,478,6343,475,6340,472,6307,480,6307,457,6307,447,6327,417,6345,386,6345,379,6345,366,6334,366,6329,366,6322,374,6314,381,6304,381,6282,381,6287,369,6268,374,6253,393,6242,406,6236,410,6234,411,6234,411,6120,389,6104,378,6088,367,6083,341,6078,338,6072,339,6052,338,6044,350,6036,361,6017,361,5982,335,5969,325,5943,306,5934,280,L,5926,280,Q,5908,298,5885,298,5875,298,5874,285,5876,269,5876,265,5839,283,5829,283,5812,283,5806,273,5796,256,5780,245,5772,239,5748,229,5723,219,5712,217,5681,213,5640,199,5610,189,5579,190,5563,189,5552,194,5543,196,5533,196,5530,196,5528,196,5519,195,5511,193,5473,184,5459,185,5424,184,5398,172,5371,157,5356,152,L,5338,152,Q,5347,200,5294,200,5255,192,5245,192,5231,192,5221,184,5212,175,5206,173,5205,172,5204,172,5140,172,5116,169,5106,168,5089,153,5073,139,5055,139,5053,139,4982,138,5018,163,5049,181,5081,199,5081,203,5081,216,5053,232,5024,246,5020,248,L,5020,207,Q,4994,218,4969,198,4944,178,4952,147,4928,153,4923,158,4917,164,4917,185,L,4854,185,Q,4835,169,4830,163,4822,154,4826,134,L,4811,134,Q,4788,140,4773,139,4750,139,4740,139,4740,169,4597,106,4588,106,4568,127,L,4524,127,Q,4490,126,4474,120,Q,4447,107,4414,94,Z]
                ], 
                label: "Puerto Rico nonvoting", 
                shortLabel: "PR", 
                labelPosition: [374.3,79.4], 
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