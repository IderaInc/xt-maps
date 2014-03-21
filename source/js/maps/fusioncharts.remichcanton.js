/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.RemichCanton.18.09-04-2012 01:27:58
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.highcharts-remichcanton", function () {

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
        name: "RemichCanton",
        revision: 18,
        creditLabel: credits,
        standaloneInit: true,

        baseWidth: 295,
        baseHeight: 458,
        baseScaleFactor: 1,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "91": { 
                outlines: [
                    [M,248.9,331.65,Q,246.05,332.2,235.15,332.25,214.7,329.25,206.75,329.25,207.55,325.3,206.6,321.25,202.3,324.65,195.5,333.25,185.55,345.7,185.5,352.6,185.5,355.05,189.4,364.25,193.35,373.6,193.35,376.9,193.35,388.4,193.85,390.75,194.15,391.8,197.65,394.55,201.7,397.85,204.35,397.8,207.5,397.8,209.25,392.55,211,387.35,214,387.3,222.7,387.35,218.75,434.7,225.25,437.4,228.65,438.95,232.35,440.75,238.15,444.3,244,447.85,244.9,448.7,245.85,449.65,256.55,453.95,266.35,454.4,266.15,442.3,269.75,431.5,268.55,412.05,267.45,392.65,266.75,363.65,266.05,334.7,261.3,327.85,260.7,326.95,260.15,326.1,Q,255.05,330.65,248.9,331.65,Z]
                ], 
                label: "Schengen", 
                shortLabel: "91", 
                labelPosition: [237,387.65], 
                labelAlignment: [CEN,MID]
            },
            "16": { 
                outlines: [
                    [M,178.85,292.35,Q,178.05,297.5,160.65,309.25,142.35,321.75,140.85,325.25,140.05,327.3,138.85,335.65,135.75,344.35,135.75,346.1,135.65,353.8,131.45,359.65,127.2,365.5,121.85,365.5,127.1,372.4,132.75,381,144.05,398.1,150,401,155.95,403.9,164.9,409.15,173.9,414.4,181.25,418.55,188.65,422.75,199.6,427,210.5,431.25,217.75,434.3,218.25,434.55,218.75,434.7,222.7,387.35,214,387.3,211,387.35,209.25,392.55,207.5,397.8,204.35,397.8,201.7,397.85,197.65,394.55,194.15,391.8,193.85,390.75,193.35,388.4,193.35,376.9,193.35,373.6,189.4,364.25,185.5,355.05,185.5,352.6,185.55,345.7,195.5,333.25,202.3,324.65,206.6,321.25,204.9,314.35,197.9,307.25,Q,194.3,303.65,178.85,292.35,Z]
                ], 
                label: "Burmerange", 
                shortLabel: "16", 
                labelPosition: [161.1,363.55], 
                labelAlignment: [CEN,MID]
            },
            "72": { 
                outlines: [
                    [M,178.85,292.35,Q,178.9,292.1,178.85,291.85,178.8,286.8,177.45,275.7,L,177.45,265.7,Q,174.85,265.7,170.05,261.8,165,257.7,162.55,257.3,153.3,255.85,146.8,255.9,136.05,255.85,125.8,263.05,115.4,270.2,110.9,270.2,106.35,270.2,103.45,269.2,100.55,268.3,96.2,268.3,91.8,268.25,81.9,277.8,71.95,287.25,59.9,296.8,47.8,306.3,47.9,310.7,47.95,315.05,48.75,317.35,49.45,319.6,50.15,328.95,57.65,328.75,63.8,328.3,75.2,327.35,96.2,339.75,102.35,343.45,111.95,353.7,116.7,358.75,121.85,365.5,127.2,365.5,131.45,359.7,135.65,353.8,135.8,346.1,135.75,344.35,138.85,335.7,140.05,327.3,140.85,325.3,142.35,321.75,160.7,309.3,Q,178.05,297.5,178.85,292.35,Z]
                ], 
                label: "Mondorf-les-Bains", 
                shortLabel: "72", 
                labelPosition: [113.35,310.65], 
                labelAlignment: [CEN,MID]
            },
            "112": { 
                outlines: [
                    [M,235.6,245.9,Q,225.85,245.15,219.75,246.05,217.75,246.3,216.2,246.8,213.5,252.25,211.1,254.55,207.2,258.2,199.95,258.3,197.25,258.35,194.95,258.7,188.95,259.55,185.1,262.2,181.3,264.75,177.45,265.7,L,177.45,275.7,Q,178.8,286.8,178.85,291.85,178.9,292.1,178.85,292.35,194.3,303.65,197.95,307.3,204.9,314.35,206.6,321.3,207.55,325.3,206.75,329.25,214.7,329.25,235.2,332.25,246.05,332.2,248.95,331.7,255.05,330.65,260.15,326.1,254.85,318.2,252.9,313.85,249.7,306.45,249.85,297.55,248.6,270.95,248.6,269.1,248.6,262.8,252.5,255.7,253.2,254.4,253.9,251.65,246.6,248.55,244.1,248.55,Q,241.6,248.45,235.6,245.9,Z]
                ], 
                label: "Wellenstein", 
                shortLabel: "112", 
                labelPosition: [218.8,288.9], 
                labelAlignment: [CEN,MID]
            },
            "23": { 
                outlines: [
                    [M,75.7,175.05,Q,67.15,163.75,57.85,160.95,56.95,163.05,50.8,163.65,43.85,163.95,41.7,164.2,32.8,165.6,29.7,175.85,28.1,179.7,26.95,190.2,25.95,200.7,22.4,204.6,17.25,210.35,4.55,208.2,L,4.55,212.2,Q,11.4,216.5,13.05,218.55,16.05,221.95,16.05,228.55,16.05,231.3,13.4,242.85,13.4,250.25,16.15,255.25,16.3,255.5,16.45,255.7,17.9,257.3,21.4,259.35,28.9,263.65,27.55,281.2,26.4,296.1,28.1,308.4,30.3,323.85,36.35,329.15,43.75,329.15,50.1,328.9,49.45,319.6,48.7,317.35,47.95,315.05,47.85,310.65,47.8,306.3,59.85,296.75,71.95,287.25,81.85,277.75,91.8,268.25,96.2,268.25,100.55,268.3,103.45,269.2,106.35,270.2,110.85,270.2,115.4,270.2,125.75,263,136.05,255.85,146.75,255.85,153.3,255.85,162.5,257.25,165,257.7,170,261.75,174.85,265.7,177.4,265.7,181.3,264.75,185.1,262.2,188.95,259.55,194.9,258.7,186.35,247,177.9,240.45,174.55,237.75,170.35,237.5,163.65,237.05,163,236.95,162.7,236.85,159,233.85,155.55,230.95,152.7,230.95,151.05,230.95,148.45,232.5,146,234.05,143.5,234,138.65,234.05,137.95,230.75,132.7,229.95,130.45,229.95,124.65,229.95,122.25,232.95,119.9,235.95,106.25,235.95,95.8,235.95,94.35,235.1,91.15,233.25,90,222.55,86.55,211.95,87.05,206.6,87.35,203.45,86.1,200.8,84.7,197.7,84.6,195.2,Q,84.2,186.2,75.7,175.05,Z]
                ], 
                label: "Dalheim", 
                shortLabel: "23", 
                labelPosition: [60.55,245.1], 
                labelAlignment: [CEN,MID]
            },
            "108": { 
                outlines: [
                    [M,121.45,115.45,Q,120.35,114.95,113.35,114.95,106.6,114.95,98.25,119.05,91.2,122.45,87.35,126.7,83.35,133.6,79.05,137.7,74.65,141.95,68.7,143.05,62.85,144.15,61.6,146.3,60.35,148.4,59.55,153.8,58.7,159.2,57.85,160.95,67.15,163.75,75.7,175.05,84.2,186.2,84.6,195.2,84.7,197.7,86.1,200.8,87.35,203.45,87.05,206.6,86.55,211.95,90,222.55,91.15,233.25,94.35,235.1,95.8,235.95,106.25,235.95,119.9,235.95,122.25,232.95,124.65,229.95,130.45,229.95,132.7,229.95,137.95,230.75,137.8,230.2,137.75,229.55,137.75,226.4,140,222.3,142.65,218.4,143.25,217.1,147.05,210.15,148.2,209.1,151.45,206.05,154.9,199.8,158.6,193,158.6,189.3,158.65,186,156.5,180.55,154.25,175.1,155.65,156.8,157.15,138.5,157.1,137.45,157.05,136.45,157.15,135.9,153.65,135.5,152.5,134.55,146.15,130.05,140.45,116.9,140.45,119.6,139.75,122.95,L,130.25,122.95,Q,123.5,116.3,121.45,115.45,Z]
                ], 
                label: "Waldbredimus", 
                shortLabel: "108", 
                labelPosition: [112.45,175.45], 
                labelAlignment: [CEN,MID]
            },
            "15": { 
                outlines: [
                    [M,200.35,127.35,Q,194.5,127.3,193.2,129.75,191.65,132.4,183.05,133.15,174.7,133.9,171.8,135.25,169.7,136.15,163.05,136.15,159.85,136.15,157.6,135.9,157.4,135.9,157.2,135.9,157.05,136.45,157.1,137.5,157.15,138.5,155.7,156.8,154.25,175.1,156.55,180.55,158.65,186,158.6,189.3,158.6,193,154.95,199.8,151.45,206.05,148.2,209.15,147.05,210.15,143.3,217.15,142.65,218.4,140.05,222.3,137.75,226.4,137.8,229.55,137.8,230.2,137.95,230.8,138.65,234.05,143.55,234.05,146,234.05,148.45,232.55,151.05,230.95,152.7,230.95,155.55,230.95,159.05,233.9,162.7,236.85,163.05,236.95,163.65,237.05,170.35,237.55,174.55,237.75,177.95,240.45,186.35,247,194.95,258.7,197.25,258.35,199.95,258.3,207.2,258.2,211.1,254.55,213.5,252.25,216.2,246.8,217.75,246.3,219.75,246.05,219.2,240,218.2,236.55,218.1,236.15,218.1,231.55,217.9,227.85,218,226.7,218.3,225.25,220.7,222.15,224.6,218.25,227.7,214.9,229.65,210.45,232.95,207.05,238.85,203.15,240.1,200.8,L,234.85,197,Q,231.55,194.55,231.6,187.4,229.95,184.35,229.95,177.9,229.8,168.5,229.7,167.8,229.4,164.45,227.25,158.9,224.8,152.35,224.2,149.5,222.65,142.6,215.35,135.3,Q,207.55,127.3,200.35,127.35,Z]
                ], 
                label: "Bous", 
                shortLabel: "15", 
                labelPosition: [188.95,193], 
                labelAlignment: [CEN,MID]
            },
            "84": { 
                outlines: [
                    [M,257.3,185.8,Q,255.25,188.1,250.8,193.55,246.45,198.45,240.05,200.8,238.85,203.15,232.9,207.05,229.65,210.45,227.65,214.85,224.6,218.25,220.65,222.1,218.3,225.25,218,226.7,217.9,227.85,218.1,231.5,218.1,236.15,218.15,236.5,219.2,240,219.75,246,225.85,245.15,235.55,245.85,241.6,248.45,244.05,248.5,246.6,248.55,253.9,251.6,256.15,249.05,258.25,245.7,259.45,243.7,260.55,241.95,273.75,225.05,276.3,220.55,282.4,209.95,282.4,197.1,282.4,188.05,274.75,180.3,Q,263.85,178.45,257.3,185.8,Z]
                ], 
                label: "Remich", 
                shortLabel: "84", 
                labelPosition: [250.15,220], 
                labelAlignment: [CEN,MID]
            },
            "96": { 
                outlines: [
                    [M,261.05,104.8,Q,259.05,104.8,253.25,100.15,247.35,95.45,240.25,95.5,231.95,95.5,230.4,98.65,228.9,101.85,225.4,101.8,221.9,101.8,216.65,98.4,211.45,94.9,205.1,94.9,183.7,94.95,169.15,108.3,155.5,120.9,157.6,135.8,L,157.6,135.9,Q,159.85,136.15,163,136.15,169.7,136.15,171.75,135.2,174.7,133.9,183,133.15,191.65,132.4,193.15,129.7,194.5,127.3,200.35,127.3,207.55,127.3,215.35,135.3,222.65,142.6,224.15,149.45,224.8,152.35,227.25,158.9,229.4,164.45,229.65,167.8,229.8,168.5,229.9,177.85,229.95,184.35,231.55,187.35,231.55,194.55,234.8,196.95,L,240.05,200.8,Q,246.45,198.45,250.8,193.55,255.25,188.1,257.3,185.8,263.85,178.45,274.75,180.3,271.25,176.7,266.15,173.35,256.2,167,255,165.95,249.85,161.9,249.8,157.4,249.85,151.1,256.3,147.8,259.5,146.15,270.5,143.7,280.3,141.45,284.5,138.55,290.95,134.35,290.95,126.2,290.95,121.4,284.9,115.45,278.85,109.5,278.9,103.95,278.85,103.3,278.9,102.65,273.5,102.65,268.15,100.8,267.45,100.55,266.8,100.2,Q,266.35,104.8,261.05,104.8,Z]
                ], 
                label: "Stadtbredimus", 
                shortLabel: "96", 
                labelPosition: [232.55,126.85], 
                labelAlignment: [CEN,MID]
            },
            "59": { 
                outlines: [
                    [M,186.1,11.75,Q,181.15,8.45,174.8,10,168.4,11.65,163.05,8.7,158.7,5.45,155.95,4.1,155.85,9.85,152.8,12.35,149.6,14.9,142.3,19.95,134.95,25,131.55,27.25,128.1,29.5,125.7,38.35,123.35,47.15,114.9,54.75,106.35,62.3,103.4,65.85,100.5,69.35,98.9,73.65,98.35,74.95,99.2,76.35,101.2,79.45,110.45,82.75,121.75,86.65,127.55,86.4,132.35,86.2,135.55,88.65,139,91.2,139.05,95.85,139,101.7,142.1,105.25,145.2,108.75,145.2,113.15,145.2,115.5,144.45,116.9,L,140.45,116.9,Q,146.15,130.05,152.55,134.55,153.65,135.5,157.2,135.9,157.4,135.9,157.6,135.9,L,157.6,135.8,Q,155.5,120.9,169.2,108.35,183.7,94.95,205.1,94.9,211.45,94.9,216.7,98.4,221.9,101.8,225.45,101.85,228.9,101.85,230.45,98.65,231.95,95.5,240.25,95.5,247.35,95.45,253.25,100.15,259.05,104.8,261.1,104.85,266.35,104.8,266.85,100.25,260.8,97.65,260.85,93.4,262.85,90.6,264.9,87.4,268.9,80.95,268.9,72.1,268.95,61.8,263,51.35,260.45,46.8,257.35,43.85,251.5,38.2,243.75,38.2,238.2,38.2,229.1,45.6,219.9,52.85,215.6,52.85,208.45,52.8,207.75,49,208.05,41.85,207.75,35,207.65,30.25,202.1,25.75,195.6,21.4,193.75,19.25,Q,188.15,13.1,186.1,11.75,Z]
                ], 
                label: "Lenningen", 
                shortLabel: "59", 
                labelPosition: [183.75,70], 
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