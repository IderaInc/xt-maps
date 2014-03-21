/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.SouthernAfrica.18.10-17-2012 10:42:20
 */

/*jslint browser: true, windows: false, continue: true, forin: true,
         plusplus: true, regexp: true*/
/*global location, FusionCharts*/
FusionCharts(["private", "modules.renderer.js-southernafrica", function () {

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
        name: "SouthernAfrica",
        revision: 18,
        creditLabel: credits,
        standaloneInit: true,

        baseWidth: 505,
        baseHeight: 466,
        baseScaleFactor: 1,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "71": { 
                outlines: [
                    [M,244.25,40.05,Q,250.05,37.1,255.55,36.35,261.05,35.65,266.25,37.05,272.8,37.85,277.25,37.85,284.45,37.65,288.65,43.65,289.65,45,292.25,45.05,293.85,45.05,295.25,44.65,296.45,44.2,298.45,43.25,300.85,41.6,303.25,39.85,304.85,35.65,307.25,34.05,312.4,29.65,315.25,27.85,318,25.25,321.25,25.65,323.6,26.05,324.45,23.85,323.8,21.85,322.25,19.25,312.25,18.8,302.25,18.45,297.25,18.25,292.25,20.45,284.45,20.85,278.25,24.85,273.65,26.25,268.25,26.25,266.05,26.25,262.65,28.45,261.25,29.85,259.05,33.05,257.7,33.3,256.05,33.45,253,33.55,249.05,33.05,244,31.8,237.25,30.45,232.45,27.85,227.05,27.85,217.45,27.85,207.05,27.25,202.65,26.85,197.05,27.65,195.6,28.45,194.05,28.45,184.05,28.8,172.25,28.45,168.85,26.6,165.05,24.05,160.05,20.65,156.85,16.85,148.65,15.85,140.05,15.85,120.45,15.85,101.05,15.85,82.05,15.85,61.05,15.45,55.45,16.2,52.85,13.05,49.65,9.2,41.85,4.65,39.05,3.85,34.25,3.45,30.65,4.25,25.85,9.05,25.25,11.6,22.05,11.85,13.65,11.85,3.35,12.05,3.4,12.45,3.45,12.85,4.45,22.05,4.45,33.05,6.05,34.05,8.45,37.45,15.45,42.45,18.25,49.85,18.65,51.05,19.45,53.65,22.25,58.65,25.05,64.05,26.25,67.6,27.05,70.85,27.65,72.4,27.65,73.85,28.05,77.45,29.65,80.05,30.65,81.45,31.45,82.45,33.05,84.65,33.85,88.85,35.05,92.25,38.25,95.65,42.05,100.05,46.25,107.85,49.05,112,50.85,115.05,53.25,118.8,55.05,120.85,57.45,123.45,59.45,131.05,59.25,136.6,61.05,141.05,61.65,142.6,61.45,144.6,62.05,146.8,63.85,148.2,66.05,149.8,66.65,154.8,67.05,165.8,66.85,176.8,66.65,186.8,68.05,195.8,68.85,200.4,71.85,203.8,73.65,205.8,74.65,208,75.85,210.2,77.65,213.8,77.65,222.2,80.05,229.8,80.65,231.4,80.65,232.8,81.05,243.8,80.65,254.8,80.45,260.8,83.25,267.6,84.25,268.4,86.25,270.4,87.85,271.6,89.25,274.4,92.25,276.8,95.05,279.8,98.85,283.6,101.65,286.2,104.05,288.2,107.05,291.8,109.65,295,112.65,298.2,114.5,300.15,116.65,302,116.85,299.2,121.05,296.6,124.05,294.2,127.05,294.2,132.45,292,135.85,292.6,139.65,294.4,140.65,295.4,142.05,297.4,143.05,297.8,145.65,299,147.45,301.6,149.05,303.8,150.45,305.8,151.65,307.6,154.05,307.4,164.05,307,174.05,307,179.85,306.8,183.25,303,190.05,298,195.25,296.2,198.8,295,198.45,291.8,198.05,289.4,198.05,286.8,198.05,267.2,198.05,247.8,198.05,228.8,198.05,209.8,198.05,204.4,197.95,199,197.85,192.95,197.65,186.8,197.65,182.4,199.25,178.4,200.05,176.4,200.05,173.8,200.05,154.2,200.05,134.85,210.6,132.85,219.05,132.45,221,130.85,221.05,129.85,221.25,122.45,221.45,114.85,222.05,111.45,221.45,110.45,221.05,89.25,220.65,69.85,220.65,59.85,222.25,50.85,223.05,43.45,229.05,44.45,231,44.85,233.05,44.85,Q,239.4,45,244.25,40.05,Z]
                ], 
                label: "Namibia", 
                shortLabel: "NA", 
                labelPosition: [134.65,155.4], 
                labelAlignment: [CEN,MID]
            },
            "42": { 
                outlines: [
                    [M,321.25,25.65,Q,318,25.25,315.25,27.85,312.4,29.65,307.25,34.05,304.85,35.65,303.25,39.85,300.85,41.6,298.45,43.25,296.45,44.2,295.25,44.65,293.85,45.05,292.25,45.05,289.65,45,288.65,43.65,284.45,37.65,277.25,37.85,272.8,37.85,266.25,37.05,261.05,35.65,255.55,36.35,250.05,37.1,244.25,40.05,239.4,45,233.05,44.85,231,44.85,229.05,44.45,223.05,43.45,222.25,50.85,220.65,59.85,220.65,69.85,221.05,89.25,221.45,110.45,222.05,111.45,221.45,114.85,221.25,122.45,221.05,129.85,221,130.85,219.05,132.45,210.6,132.85,200.05,134.85,200.05,154.2,200.05,173.8,200.05,176.4,199.25,178.4,197.65,182.4,197.65,186.8,197.85,192.95,197.95,199,206.6,200.2,212.05,206.8,215.4,209.2,215.45,211.8,217.85,218,219.85,221,221.6,223.8,221.45,227.8,221.05,232.8,221.25,237.8,221.25,243.2,223.85,245,227,246.8,228.05,246.8,233.05,247.4,238.05,247.8,242.8,248.2,245.25,246,247.05,244.2,250.05,244.4,254.65,244.8,259.05,244,264.8,238.4,269.05,234.6,271.25,232.6,274.05,230.6,278.2,226,280.65,223,281.85,221.6,284.05,219.6,286.45,216.4,288.25,216.4,294.05,216,298.25,217.2,303.25,219.6,308.25,219.2,313.45,219,318.25,219.4,323.25,219.8,328.25,220,334.6,220.2,337.45,214.8,341.4,212.2,342.85,207.6,343.8,205.4,344.05,204.8,346.4,201.2,348.45,197.8,350.45,193.2,353.05,191.4,356.05,189.2,357.45,185.8,360.85,180.8,366.25,177.6,372.2,173,374.05,168,375.85,165.4,377.45,164.2,383.85,159,391.45,154.2,396.6,153.6,397.25,151,404.4,148.2,408.25,144.8,410.85,142.4,414.05,140.45,416.2,138.45,417.25,137.65,419.05,136.4,421.65,134.25,420.8,134.2,419.05,132.05,417.05,129.45,414.05,127.05,409.25,125.25,403.25,125.65,391.85,126.4,389.45,114.85,388.2,111.2,386.85,107.85,387.2,102.05,383.65,96.85,383,94.05,381.85,92.05,380.05,89.25,379.45,86.85,379,84.65,373.65,83.45,369.6,80.6,362.25,74.85,359,71.85,354.65,70.45,352,68.65,348.05,65.05,344.6,62.05,338.45,59.65,333.85,55.45,332.05,49.85,330.45,45,329.85,38.05,327.85,34,325.25,28.85,325.8,28.25,326.15,25.75,324.85,25.05,324.45,23.85,Q,323.6,26.05,321.25,25.65,Z]
                ], 
                label: "Botswana", 
                shortLabel: "BW", 
                labelPosition: [299.9,135.85], 
                labelAlignment: [CEN,MID]
            },
            "80": { 
                outlines: [
                    [M,421.65,134.25,Q,419.05,136.4,417.25,137.65,416.2,138.45,414.05,140.45,410.85,142.4,408.25,144.8,404.4,148.2,397.25,151,396.6,153.6,391.45,154.2,383.85,159,377.45,164.2,375.85,165.4,374.05,168,372.2,173,366.25,177.6,360.85,180.8,357.45,185.8,356.05,189.2,353.05,191.4,350.45,193.2,348.45,197.8,346.4,201.2,344.05,204.8,343.8,205.4,342.85,207.6,341.4,212.2,337.45,214.8,334.6,220.2,328.25,220,323.25,219.8,318.25,219.4,313.45,219,308.25,219.2,303.25,219.6,298.25,217.2,294.05,216,288.25,216.4,286.45,216.4,284.05,219.6,281.85,221.6,280.65,223,278.2,226,274.05,230.6,271.25,232.6,269.05,234.6,264.8,238.4,259.05,244,254.65,244.8,250.05,244.4,247.05,244.2,245.25,246,242.8,248.2,238.05,247.8,233.05,247.4,228.05,246.8,227,246.8,223.85,245,221.25,243.2,221.25,237.8,221.05,232.8,221.45,227.8,221.6,223.8,219.85,221,217.85,218,215.45,211.8,215.4,209.2,212.05,206.8,206.6,200.2,197.95,199,198.05,204.4,198.05,209.8,198.05,228.8,198.05,247.8,198.05,267.2,198.05,286.8,198.05,289.4,198.45,291.8,198.8,295,195.25,296.2,190.05,298,183.25,303,179.85,306.8,174.05,307,164.05,307,154.05,307.4,151.65,307.6,150.45,305.8,149.05,303.8,147.45,301.6,145.65,299,143.05,297.8,142.05,297.4,140.65,295.4,139.65,294.4,135.85,292.6,132.45,292,127.05,294.2,124.05,294.2,121.05,296.6,116.85,299.2,116.65,302,118.25,303.45,120.05,304.8,120.65,305.4,121.85,308.2,123.05,310,123.25,313.8,123.25,318.4,123.45,322.8,123.65,324.8,124.45,328.2,126.85,330.2,127.05,332.8,127.05,333.8,128.65,337,133.25,344.6,138.85,353,141.65,359,146.85,365.8,149.85,371.4,155.65,379.8,156.05,394.4,156.05,409,156.05,412,149.85,413,149.25,416.8,150.65,418.4,154.45,422.2,156.05,428,156.65,430,158.65,434.2,160.85,439,160.05,445,164.65,445,168.85,445.8,171.65,450.6,175.45,453.4,177.65,454.4,178.25,454.6,180.25,455.4,181.25,456.8,184.45,460.6,189.25,461.4,192.25,461.8,195.25,462,202.65,462.8,208.25,459.6,210.8,458.2,210.65,453.8,210.45,451,212.45,450.2,224.2,449.8,234.25,449.4,239.6,446.2,241.85,443.2,245.85,441,249.25,442.2,256.25,442.8,262.25,442.4,268.05,442.2,272.45,444.4,279.6,446,283.65,443.2,291.65,442.8,298.25,443.2,303.05,445.2,308.25,445.4,313.85,445.8,319.05,445,322.05,441.6,325.25,441.4,327.05,439.2,330.25,439.2,331.25,435.6,334.45,434,338.8,431.8,343.45,433.4,348.45,435.2,354.25,434.8,358.05,434.4,360.45,432,362.85,429.6,366.25,428.6,368,428,368.85,427.2,374.2,421.2,377.85,419,384.8,412.8,391.45,407,398.65,400.4,407.05,395.6,410.6,393.6,413.05,389.8,414.85,387.4,415.25,386.8,419.65,382.6,423.45,379,426.6,377.6,427.45,375.8,428.85,373,430.85,371.2,432.25,369.4,432.85,368.6,435.45,365.4,437.85,362.4,440.25,358.4,441.45,356,444.65,349.8,448.05,347.4,449.2,346.8,449.85,345,451.2,341.8,451.65,341,453.8,337.8,453.85,334.8,454.05,331.2,455.85,330,455.65,325.2,458.05,324.2,462.8,319.6,464.05,315,466.05,310.6,469.25,310.4,472.2,308.8,473.25,308,475.85,306,477.45,305,484.25,300.6,488.45,293.8,489.4,288.4,489.65,283.8,491.65,280.2,492.65,277,493.65,274.4,493.85,272.8,494.25,270.4,494.25,267.8,494.25,262,497.05,258.6,498.45,256.8,500.25,254.8,501.1,254.05,501.35,252.6,498.6,253.6,494.25,254.4,489.55,255.6,488.35,250.8,486.25,254.2,484.05,256.6,483.25,257.4,481.85,259.6,481.25,260.8,481.25,262.8,481.25,263.8,482.25,266,476.25,263.8,471.25,263.4,467.85,262.8,465.25,262.4,461.05,258,458.65,251.6,458.25,244.4,459.05,239,459.25,237.4,460.05,235.8,461.45,233.2,464.85,231,468.85,223.4,476.25,224.4,479.2,224.8,482.25,224.8,483.85,227.4,486.25,228,486.1,212.15,485.65,195.8,485.45,194.4,484.85,193,484.25,190.8,483.45,188.8,481.25,183,479.65,175.8,479.2,172.8,478.85,169.8,478.25,165.4,476.85,159,475.05,155.4,473.65,148.8,473.3,146.75,472.85,144.4,472.8,144.2,472.75,144,472.35,142.2,471.85,140.25,470.85,139.4,469.45,138.45,466.05,136.45,461.25,136.85,460.2,136.8,457.05,135.45,454.85,134.85,452.25,134.65,450.85,134.45,449.25,134.25,Q,436.2,133.85,421.65,134.25,Z,M,408.45,294.6,Q,410.65,295.8,413.25,296.2,422.4,302.8,425.45,311.8,426.25,313.8,426.85,316,427.65,318.4,428.05,320.8,428.2,324,425.25,326,420.6,329.2,416.85,333.6,410.85,339.6,405.85,344.4,404.45,345.8,402.25,345.8,396.85,345.8,393.25,346.8,387.05,347.8,383.45,343.6,380.4,340.2,376.05,336,374.2,333.8,373.85,333,372.45,329.6,372.85,323.8,373.05,318.6,374.05,313.8,374.85,310,379.25,309.4,386.85,304.6,394.05,299.4,395.8,298.2,396.65,295.8,Q,401.65,290.8,408.45,294.6,Z]
                ], 
                label: "South Africa", 
                shortLabel: "ZA", 
                labelPosition: [289.5,298.1], 
                labelAlignment: [CEN,MID]
            },
            "62": { 
                outlines: [
                    [M,413.25,296.2,Q,410.65,295.8,408.45,294.6,401.65,290.8,396.65,295.8,395.8,298.2,394.05,299.4,386.85,304.6,379.25,309.4,374.85,310,374.05,313.8,373.05,318.6,372.85,323.8,372.45,329.6,373.85,333,374.2,333.8,376.05,336,380.4,340.2,383.45,343.6,387.05,347.8,393.25,346.8,396.85,345.8,402.25,345.8,404.45,345.8,405.85,344.4,410.85,339.6,416.85,333.6,420.6,329.2,425.25,326,428.2,324,428.05,320.8,427.65,318.4,426.85,316,426.25,313.8,425.45,311.8,Q,422.4,302.8,413.25,296.2,Z]
                ], 
                label: "Lesotho", 
                shortLabel: "LS", 
                labelPosition: [400.4,319.95], 
                labelAlignment: [CEN,MID]
            },
            "82": { 
                outlines: [
                    [M,482.25,224.8,Q,479.2,224.8,476.25,224.4,468.85,223.4,464.85,231,461.45,233.2,460.05,235.8,459.25,237.4,459.05,239,458.25,244.4,458.65,251.6,461.05,258,465.25,262.4,467.85,262.8,471.25,263.4,476.25,263.8,482.25,266,481.25,263.8,481.25,262.8,481.25,260.8,481.85,259.6,483.25,257.4,484.05,256.6,486.25,254.2,488.35,250.8,487.85,249.2,487.85,247,486.85,244.6,486.65,241.8,486.25,238.8,486.25,235.8,486.25,231.9,486.25,228,Q,483.85,227.4,482.25,224.8,Z]
                ], 
                label: "Swaziland", 
                shortLabel: "SZ", 
                labelPosition: [469.5,245.15], 
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