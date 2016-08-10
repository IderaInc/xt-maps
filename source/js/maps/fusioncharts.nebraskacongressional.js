/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.NebraskaCongressional.18.08-10-2012 09:54:57
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-nebraskacongressional", function () {

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
        name: "NebraskaCongressional",
        revision: 18,
        
        standaloneInit: true,

        baseWidth: 880,
        baseHeight: 430,
        baseScaleFactor: 10,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "3": { 
                outlines: [
                    [M,4945,253,Q,4855,253,4835,240,L,4709,238,Q,4624,238,4605,241,4445,246,4052,231,L,3614,232,Q,3605,233,3600,228,3595,223,3584,223,L,3538,223,Q,3466,222,3420,221,L,3389,221,Q,3388,221,3386,221,3272,217,3153,214,3079,214,3038,214,2989,216,2962,216,2911,216,2906,202,L,2799,202,Q,2765,199,2764,199,2751,203,2731,205,L,2708,205,Q,2684,204,2677,203,2671,194,2659,194,L,2601,194,Q,2492,190,2446,190,2447,182,2406,182,2352,184,2327,183,2238,180,2186,180,L,2186,170,2163,170,Q,2162,170,2161,171,2152,172,2139,174,L,1984,174,Q,1989,159,1942,159,1890,162,1883,162,L,1790,162,1789,155,Q,1713,154,1684,152,1663,152,1645,152,1606,151,1603,150,1603,145,1601,140,1482,142,1434,134,1182,119,1116,119,1050,118,1012,118,974,117,933,113,L,931,101,Q,821,101,790,106,L,787,106,786,94,642,94,642,88,Q,582,82,541,83,474,83,470,83,L,470,75,Q,330,75,286,73,L,283,73,Q,284,163,273,325,273,326,273,327,245,563,248,683,247,685,248,686,L,248,689,Q,247,690,248,691,246,736,240,796,234,850,234,885,233,889,234,892,233,921,233,965,222,966,227,1007,227,1011,228,1016,228,1047,226,1120,L,216,1120,217,1238,Q,208,1277,206,1291,204,1306,197,1472,196,1494,199,1535,199,1565,187,1578,186,1579,186,1579,L,186,1665,Q,186,1743,179,1746,171,1870,171,1908,L,164,1999,Q,163,2101,150,2211,149,2212,149,2214,137,2478,136,2480,128,2495,129,2506,132,2524,129,2575,125,2595,124,2639,122,2684,119,2705,157,2705,192,2700,207,2700,224,2703,224,2713,241,2715,250,2716,267,2715,338,2714,370,2710,396,2710,412,2716,427,2721,488,2721,573,2721,593,2723,L,593,2730,Q,726,2727,750,2733,757,2734,767,2738,780,2741,821,2741,L,923,2741,Q,948,2739,960,2745,974,2753,1002,2751,L,998,2751,Q,1006,2748,1116,2750,1129,2750,1182,2760,1192,2755,1289,2760,1302,2761,1328,2758,1347,2758,1352,2770,1402,2770,1454,2769,1490,2767,1570,2778,1689,2778,1866,2793,1875,2798,1890,2798,1922,2798,1966,2800,1967,2800,1968,2800,2032,2800,2086,2802,2083,2973,2079,3002,2044,3837,2044,3869,2044,3872,2044,3875,2043,4043,2035,4121,2060,4123,2154,4120,2238,4119,2246,4132,2506,4139,2513,4139,2605,4146,2669,4145,2724,4144,2815,4145,2831,4144,2866,4152,2894,4158,2939,4155,2944,4154,2950,4154,L,3046,4153,Q,3065,4152,3140,4159,3244,4159,3308,4164,3384,4170,3584,4171,3587,4171,3590,4171,L,4318,4181,Q,4331,4183,4339,4188,4345,4191,4360,4190,L,4440,4189,Q,4490,4188,4630,4191,L,4730,4191,Q,4740,4191,4786,4188,4826,4187,4836,4202,5287,4195,5299,4198,L,5931,4196,Q,5932,4196,5933,4196,6027,4202,6122,4202,6231,4201,6342,4200,6466,4199,6471,4191,L,7142,4191,7141,4044,Q,7143,3919,7145,3866,7139,3758,7139,3722,7142,3624,7142,3583,L,7142,3275,7123,3275,Q,7122,3275,7120,3275,7071,3274,7018,3277,L,6688,3277,Q,6687,2621,6685,2604,L,6685,2360,6696,2360,6710,2376,6716,2376,6716,2362,6731,2362,6731,2371,Q,6739,2371,6747,2378,6752,2383,6767,2379,6786,2379,6794,2378,L,6794,1939,Q,6796,1916,6798,1905,6767,1907,6761,1902,6701,1904,6700,1905,L,6289,1905,6283,1908,6227,1908,6229,1764,Q,6228,1763,6229,1762,6226,1549,6227,1445,6263,1445,6293,1445,6348,1445,6397,1442,6441,1442,6573,1448,6575,1448,6577,1448,6594,1448,6675,1447,L,6675,1124,Q,6675,1098,6678,1096,L,6719,1092,6781,1092,Q,6786,911,6782,734,6798,738,6808,731,6810,729,6823,715,6880,715,6898,720,6896,708,6896,681,6895,664,6897,661,6899,657,6918,657,6928,657,6930,660,6931,663,6932,675,6945,675,6949,676,L,6966,676,Q,6963,650,6970,641,6977,632,7002,637,7002,585,7007,560,6976,559,6931,559,6929,553,6929,552,6903,552,6889,551,6890,532,6888,523,6884,507,6862,515,6862,505,6861,501,6806,510,6816,462,6820,442,6784,443,6743,444,6739,437,6717,435,6709,435,6709,428,6708,425,L,6619,425,Q,6617,426,6615,427,6616,436,6609,443,6600,450,6595,454,L,6579,454,Q,6579,442,6557,443,L,6557,435,6519,435,Q,6514,436,6504,437,L,6504,444,6483,444,6483,456,6474,456,Q,6461,454,6443,454,6443,432,6441,425,L,6420,425,Q,6419,432,6401,449,6383,464,6384,476,L,6369,476,Q,6366,432,6325,432,6317,432,6309,448,6300,464,6297,464,6258,464,6253,453,6248,430,6247,427,6245,425,6227,425,6207,425,6202,433,6201,434,6190,439,6183,441,6181,445,6180,446,6180,447,6181,468,6159,502,6134,538,6126,540,6117,543,6106,552,6094,561,6075,561,L,6020,557,Q,6007,543,5994,534,L,5966,515,Q,5955,497,5941,488,5927,463,5911,466,5891,470,5882,463,5874,453,5867,449,5791,410,5787,409,L,5778,410,Q,5728,398,5705,378,5682,356,5674,348,5651,351,5642,349,5627,344,5609,308,5597,260,5582,253,5329,253,5261,250,5260,250,5259,250,5206,253,5057,253,Z]
                ], 
                label: "3rd district", 
                shortLabel: "3rd", 
                labelPosition: [363.2,213.7], 
                labelAlignment: [CEN,MID]
            },
            "1": { 
                outlines: [
                    [M,7326,700,Q,7319,699,7319,690,L,7227,690,7226,679,Q,7209,680,7205,655,7201,628,7187,625,7171,622,7150,605,7135,593,7104,597,7082,598,7082,603,7082,607,7084,612,L,7054,612,Q,7053,588,7051,578,7050,561,7034,561,7022,561,7007,560,7002,585,7002,637,6977,632,6969,641,6963,650,6965,676,L,6948,676,Q,6945,676,6932,675,6931,664,6929,661,6928,657,6918,657,6899,657,6897,661,6895,665,6896,681,6896,709,6897,720,6880,716,6823,716,6810,730,6808,731,6798,739,6781,735,6786,911,6780,1092,L,6719,1092,6678,1097,Q,6675,1099,6675,1125,L,6675,1447,Q,6594,1448,6577,1448,6575,1448,6573,1448,6441,1442,6397,1442,6348,1445,6293,1445,6263,1446,6227,1445,6226,1550,6228,1762,6228,1763,6228,1764,L,6227,1908,6283,1908,6288,1905,6700,1905,Q,6701,1905,6761,1902,6767,1907,6798,1905,6796,1917,6794,1939,L,6794,2378,6793,2378,Q,6786,2379,6767,2379,6752,2384,6746,2378,6739,2371,6730,2371,L,6730,2362,6716,2362,6716,2376,6710,2376,6695,2360,6685,2360,6685,2604,Q,6687,2622,6688,3277,L,7018,3277,Q,7071,3274,7120,3275,7122,3275,7123,3275,L,7142,3275,7142,3584,Q,7142,3624,7139,3722,7139,3759,7145,3866,7143,3920,7140,4044,L,7142,4192,7263,4192,Q,7267,4191,7266,4187,7359,4187,7520,4189,7526,4189,7544,4184,7545,4183,7546,4183,8153,4185,8152,4170,L,8511,4170,Q,8525,4161,8570,4160,8595,4160,8632,4162,L,8736,4162,Q,8735,4155,8726,4148,8716,4141,8715,4134,L,8715,4134,Q,8696,4128,8693,4127,8684,4133,8672,4133,8665,4133,8663,4132,8666,4123,8657,4118,8647,4112,8645,4107,8643,4098,8643,4082,8643,4078,8650,4075,8650,4050,8650,4039,8650,4019,8663,4021,L,8663,3999,Q,8660,3999,8632,3994,8625,3993,8625,3983,8625,3969,8622,3963,8614,3951,8598,3941,8576,3928,8572,3926,8572,3904,8568,3894,8572,3890,8585,3890,8584,3865,8571,3868,8574,3850,8562,3844,8552,3840,8519,3839,8496,3835,8494,3813,8492,3777,8492,3776,8464,3767,8449,3764,8448,3764,8448,3764,8414,3766,8391,3759,8410,3741,8418,3741,8426,3741,8425,3728,8424,3716,8415,3710,8407,3705,8407,3693,8407,3665,8393,3647,8390,3644,8390,3598,8390,3590,8373,3576,L,8355,3561,Q,8355,3559,8355,3557,8354,3553,8351,3550,8347,3544,8349,3539,8359,3541,8359,3530,8359,3516,8362,3513,8368,3509,8384,3496,8385,3462,8385,3459,8385,3447,8376,3445,8360,3445,8346,3442,L,8346,3462,Q,8352,3468,8352,3478,8352,3482,8351,3483,8295,3478,8286,3478,8286,3470,8278,3455,8270,3440,8270,3432,8271,3419,8280,3411,8289,3404,8289,3378,8289,3355,8280,3346,8264,3332,8256,3317,8256,3317,8256,3316,8254,3305,8233,3298,8206,3290,8200,3283,8179,3251,8158,3224,8152,3207,8152,3203,8152,3189,8179,3175,8205,3161,8205,3156,8205,3140,8197,3138,8190,3136,8190,3109,8185,3060,8185,3048,8185,3045,8189,3037,8204,3024,8205,3021,8205,3018,8214,3014,8222,3009,8222,3001,8222,2993,8207,2971,8193,2949,8193,2934,8193,2924,8201,2922,L,8201,2909,Q,8196,2886,8189,2875,8178,2877,8171,2867,8167,2862,8167,2851,8167,2809,8166,2807,8165,2802,8156,2796,8143,2788,8142,2787,L,8142,2780,Q,8133,2776,8118,2778,8102,2781,8096,2781,8096,2743,8092,2731,L,8073,2731,Q,8075,2739,8083,2743,L,8074,2743,Q,8041,2741,8028,2741,8027,2716,8027,2716,8024,2704,8009,2710,8020,2687,7976,2686,7923,2690,7910,2687,7911,2657,7909,2644,7905,2623,7873,2632,7870,2621,7870,2616,L,7744,2616,Q,7738,2619,7718,2619,7698,2619,7686,2603,7684,2601,7683,2586,7668,2583,7670,2572,7670,2570,7671,2569,L,7669,2560,Q,7667,2560,7667,2543,7677,2540,7678,2534,7679,2533,7679,2519,7679,2497,7647,2474,7616,2452,7618,2430,7618,2423,7616,2399,7616,2393,7607,2391,7596,2390,7593,2387,7565,2363,7559,2353,7558,2353,7558,2352,7559,2350,7564,2351,L,7713,2351,Q,7753,2350,7834,2350,L,7834,2342,8087,2342,8087,2340,Q,8087,2301,8088,2284,8095,2284,8098,2283,L,8098,2257,Q,8061,2254,8041,2253,L,8041,2245,Q,8026,2245,8023,2240,8022,2235,8021,2235,8010,2238,8006,2238,7999,2238,7999,2227,7999,2219,8012,2200,8034,2190,8034,2182,8034,2178,8020,2162,8005,2145,8000,2145,7997,2145,7990,2153,7984,2160,7982,2165,7985,2175,7977,2176,7967,2179,7966,2187,L,7950,2187,Q,7951,2177,7943,2175,7934,2175,7931,2173,7933,2159,7924,2152,L,7923,2150,Q,7920,2138,7920,2130,L,7927,2130,Q,7924,2120,7936,2121,L,7936,2101,Q,7935,2100,7911,2078,7897,2064,7901,2048,L,7907,2048,Q,7907,2032,7914,2030,7921,2029,7921,2018,7921,2006,7911,1997,7901,1989,7901,1965,7901,1940,7920,1941,7939,1943,7939,1928,7939,1915,7925,1907,7910,1899,7910,1889,7910,1889,7938,1832,7939,1831,7939,1830,7939,1814,7939,1807,L,7906,1779,Q,7899,1747,7893,1742,7853,1704,7853,1683,7853,1668,7855,1666,7856,1663,7870,1660,L,7870,1638,7863,1638,7861,1639,7861,1616,Q,7864,1610,7864,1609,7870,1609,7873,1606,L,7873,1578,7851,1578,Q,7834,1586,7826,1572,7820,1560,7822,1539,7811,1538,7807,1538,7798,1538,7795,1541,7793,1548,7790,1552,L,7779,1552,Q,7782,1521,7777,1509,7769,1491,7739,1491,L,7739,1467,Q,7743,1465,7746,1463,L,7746,1444,Q,7739,1443,7734,1442,7737,1402,7724,1379,7700,1382,7693,1370,7689,1354,7683,1346,7663,1336,7660,1328,7659,1323,7659,1297,L,7647,1297,7647,1279,Q,7648,1273,7653,1268,7656,1266,7659,1263,7668,1257,7678,1251,L,7678,1233,7667,1233,7667,1186,Q,7669,1184,7668,1180,7649,1167,7641,1155,7633,1143,7624,1132,7616,1121,7597,1107,7578,1092,7578,1086,7579,1082,7588,1078,7597,1073,7596,1064,7596,1040,7598,1026,7598,1012,7599,1007,7600,999,7607,994,7618,989,7618,967,7618,924,7603,914,L,7531,914,7531,921,7504,921,Q,7504,911,7486,891,7470,873,7464,872,7447,872,7442,878,7435,885,7408,891,7407,891,7407,891,7392,890,7390,873,7386,846,7385,837,7384,836,7384,835,7372,817,7354,805,7338,796,7330,786,7323,775,7317,769,L,7304,768,Q,7301,767,7297,761,L,7297,748,7302,748,7305,747,Z]
                ], 
                label: "1st district", 
                shortLabel: "1st", 
                labelPosition: [728.1,193.5], 
                labelAlignment: [CEN,MID]
            },
            "2": { 
                outlines: [
                    [M,8087,2367,L,8087,2342,7834,2342,7834,2350,Q,7753,2350,7713,2351,L,7564,2351,7559,2353,Q,7565,2363,7593,2386,7596,2389,7608,2391,7616,2393,7616,2398,7618,2422,7618,2430,7616,2451,7647,2474,7679,2497,7679,2519,7679,2532,7679,2534,7677,2539,7668,2542,7667,2559,7669,2560,L,7671,2568,Q,7670,2570,7670,2571,7668,2583,7684,2586,7684,2600,7686,2603,7698,2619,7718,2619,7738,2619,7744,2615,L,7870,2615,Q,7870,2621,7873,2631,7905,2622,7909,2644,7911,2657,7910,2687,7923,2689,7976,2685,8020,2686,8009,2710,8024,2704,8027,2716,L,8028,2741,Q,8041,2741,8074,2743,L,8083,2743,Q,8075,2738,8073,2731,L,8093,2731,Q,8096,2742,8097,2780,8102,2780,8118,2778,8133,2776,8142,2779,L,8142,2774,Q,8161,2758,8167,2753,L,8167,2690,Q,8152,2687,8149,2672,8147,2654,8143,2646,L,8176,2646,8176,2627,Q,8174,2624,8174,2615,8146,2617,8131,2617,8103,2616,8096,2604,L,8096,2588,8108,2588,8108,2564,8116,2564,8116,2547,Q,8114,2546,8108,2546,8110,2520,8108,2508,L,8098,2508,Q,8098,2509,8097,2509,8095,2479,8092,2469,L,8113,2469,Q,8113,2471,8115,2489,8115,2496,8125,2496,8145,2496,8145,2471,8145,2457,8143,2450,L,8136,2449,Q,8136,2432,8116,2433,8095,2437,8092,2436,8091,2427,8078,2427,8063,2427,8063,2408,8063,2404,8074,2397,8083,2391,8086,2391,8083,2385,8088,2382,8091,2380,8096,2378,L,8096,2367,Z]
                ], 
                label: "2nd district", 
                shortLabel: "2nd", 
                labelPosition: [786.7,245.1], 
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