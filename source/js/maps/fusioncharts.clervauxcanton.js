/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.ClervauxCanton.18.09-04-2012 01:27:55
 */
FusionCharts.register("module", ["private", "modules.renderer.highcharts-clervauxcanton", function () {

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
        name: "ClervauxCanton",
        revision: 18,
        standaloneInit: true,

        baseWidth: 421,
        baseHeight: 441,
        baseScaleFactor: 1,

        /**
         * @type {Object.<string, Object>}
         */
        entities: {
            "114": { 
                outlines: [
                    [M,153.55,117.9,Q,149.5,109.85,149,109.2,L,148.95,106,Q,143,109.1,135.75,108.15,130.75,107.55,124.4,111.25,116.65,115.8,113.25,116.45,105.7,117.95,101.2,120.7,98.4,122.35,92.15,128,85.2,134.15,81.75,147.45,78.85,158.55,79.2,170.25,79.75,185.6,77.5,193.3,74.4,203.85,64.9,209,64.75,209.15,64.65,209.3,61.95,212.45,57.75,214.5,52.75,216.6,49.1,219.85,45.4,223.05,44.25,228.3,43.05,233.55,48.5,242.6,53.9,251.6,53.9,260,53.9,264.45,49.5,270.6,45.35,276.15,46.05,282.3,45,298.3,41.6,304.95,38.15,311.55,30.9,315.35,20.65,317.25,13.65,320.25,6.6,323.2,5.7,330.05,4.75,336.85,5.4,339.45,6,342.05,6.6,347.95,7.4,357.45,9.3,360.85,10.4,362.7,17.55,370.1,18.6,371.15,19.45,372.35,22.5,370.75,26.5,370.75,28.65,370.75,33.05,371,35.65,370.8,39.9,370.85,43.35,370.7,46.5,369.35,47.5,368.9,48.6,367.55,49.75,366.2,50.85,365.7,54.2,364.3,55.05,361.6,57.5,355.85,58.7,353.05,60.3,352.35,64.7,352.8,67.5,353.05,68,354.55,71.4,353.75,76.05,355.5,81.25,357.45,82.75,357.5,84.2,357.5,84.85,357.35,85.45,357.1,87.05,356.75,88.85,355.65,92.95,353.6,97,351.5,98.95,351.55,102.8,351.55,104.05,354,105.35,356.35,108.1,356.35,110.15,356.35,110.3,356.25,110.5,356,111.9,354.25,112.1,354,112.35,353.7,117.4,349.75,116.25,343.8,116.1,341.5,118,339.15,120.05,336.45,120.25,334.8,120.3,334.25,123.35,326.95,126.2,320.05,126.2,316.9,126.2,313.95,125.3,311.05,124.4,308.1,124.4,306.45,124.4,305.5,125.55,302.2,126.7,298.85,127.15,298.85,127.25,298.85,131.45,302.95,136.25,307,139.75,307.05,144.7,307,145.95,305.35,146.75,304.2,148.5,300.4,149.95,298.3,153.65,298.15,158.5,298,159.25,297.75,160.1,297.35,166.8,290.3,170.55,286.35,172.6,284.75,171.05,272.25,171.05,271.4,171.05,266.95,174.9,261.45,177,258.6,180.15,255.1,179,249,182.35,245.8,184.9,243.3,191.4,241.75,196.35,240.45,197.1,234.05,198,225.7,199.6,223.7,203.6,218.5,206,216.8,210.05,213.85,216,213.85,224.85,213.8,228.3,215.35,230.7,216.45,234.1,220.85,L,241.15,220.85,Q,241.95,218.4,242.6,213.3,243.3,206.95,243.75,205.05,244.75,199.3,246.85,198.35,250,196.8,252.1,196.3,252.25,196.25,252.4,196.2,252.8,196,252.8,193.2,252.8,190.45,250.05,188.05,246.75,185.15,246.2,183.15,242,176,242,174.35,243.4,171.2,243.7,167.3,242.3,168.1,240.45,168.15,236.6,168.1,232.6,164.3,228.25,159.5,226,157.65,224.9,156.65,224.55,153.85,224.15,150.95,223.1,149.75,215.75,143.5,215.5,143.3,214.75,142.7,206.5,139.05,197.6,136.35,196.05,133.95,192.45,128.9,190.75,125.8,189.35,122,189,121.3,188.55,120.45,185.2,120.45,170.7,125.5,163.3,125.5,Q,158.35,125.5,153.55,117.9,Z]
                ], 
                label: "Wincrange", 
                shortLabel: "114", 
                labelPosition: [128.95,239.15], 
                labelAlignment: [CEN,MID]
            },
            "101": { 
                outlines: [
                    [M,240.85,4.85,L,232.65,4.85,Q,227.8,12.65,216.3,15.45,209.6,17.05,193.8,17.6,178.45,18.1,171.75,19.1,165,20.05,163.4,29.6,161.8,39.1,165.3,47.65,165.8,48.95,169.3,51.2,171.85,52.45,172.4,55.35,172.95,58.3,171.9,59.75,170.85,61.15,166.85,64,162.8,66.85,161.65,69.75,160.5,72.65,161.45,77.85,161.75,81.9,161.5,89.05,161.2,96.15,153.55,102.85,151.35,104.75,148.95,106,L,149,109.2,Q,149.5,109.85,153.55,117.9,158.35,125.5,163.3,125.5,170.7,125.5,185.2,120.45,188.55,120.45,189,121.3,189.35,122,190.75,125.8,192.45,128.9,196.05,133.95,197.6,136.35,206.5,139.05,214.75,142.7,215.5,143.3,215.75,143.5,223.1,149.75,224.15,150.95,224.55,153.85,224.9,156.65,226,157.65,225.25,154.35,226.25,151.4,227.8,147.8,228.8,145.25,229.1,144.3,229.7,138.85,230.1,134.65,231.95,133.1,233.95,131.35,235.5,128.4,236.4,126.6,238.1,122.85,241.7,115.65,249.4,111.95,252.15,110.55,253.5,107.1,255.35,101.95,255.9,101.25,257.1,99.25,260.05,96.4,260.3,96,261.1,93.15,261.7,90.75,262.6,89.95,264.5,88.15,266.6,85.5,267.95,84,268.5,79.55,268.95,78.6,269.1,73.3,269.15,70.9,269.2,70.1,269.2,69.3,269.1,66.35,268.95,63.35,266.8,61.1,264.65,58.85,264.8,55.95,264.9,53.05,264.7,50.1,260,46.5,251.9,37.9,247.2,32.95,244.45,22,Q,241.95,9.6,240.85,4.85,Z]
                ], 
                label: "Troisvierges", 
                shortLabel: "101", 
                labelPosition: [209.05,81.25], 
                labelAlignment: [CEN,MID]
            },
            "111": { 
                outlines: [
                    [M,335.55,24.25,Q,329.3,23.95,326.35,23.1,322,21.95,320.45,20.45,318.95,18.95,311.9,19.45,304.8,19.9,302.5,23.55,300.2,27.2,300.85,37,301.4,46.15,299.3,49.95,296.05,55.75,285.35,55.75,273.8,55.75,267,51.65,265.95,51.05,264.7,50.1,264.9,53.05,264.8,55.95,264.65,58.85,266.8,61.1,268.95,63.35,269.1,66.35,269.2,69.3,269.2,70.1,269.15,70.9,269.1,73.3,268.95,78.6,268.5,79.55,267.95,84,266.6,85.5,264.5,88.15,262.6,89.95,261.7,90.75,261.1,93.15,260.3,96,260.05,96.4,257.1,99.25,255.9,101.25,255.35,101.95,253.5,107.1,252.15,110.55,249.4,111.95,241.7,115.65,238.1,122.85,236.4,126.6,235.5,128.4,233.95,131.35,231.95,133.1,230.1,134.65,229.7,138.85,229.1,144.3,228.8,145.25,227.8,147.8,226.25,151.4,225.25,154.35,226,157.65,228.25,159.5,232.6,164.3,236.6,168.1,240.45,168.15,242.3,168.1,243.7,167.3,244.85,166.55,245.65,165.25,L,249.15,165.25,Q,251.6,165.15,253.65,163.7,L,253.65,162.8,Q,257,162.1,258.55,163.65,260.15,165.25,261.5,165.25,263.65,165.25,267.75,166.4,269.45,166.35,275.2,164,280.3,161.95,281.85,161,283.35,160,286.85,156.35,289.85,153.05,292.2,152,297.9,149.4,301.05,141.85,304.9,132.75,307.2,130.55,309.75,128.05,315.9,120.65,322.05,113.2,324.85,111.05,327.7,108.85,332.75,104.4,337.8,99.95,339.55,98.4,341.3,96.85,343.45,95.7,345.6,94.5,353.4,92.5,352.15,91,352.3,84.95,352.65,78,352.6,75.55,352.5,72.55,351.35,67.55,350.2,62.7,350.2,59.55,350.2,55.1,348.9,51.2,347.35,46.55,347.05,42.9,347.55,36.8,347.55,33.75,347.45,28.25,343.3,25.95,Q,340.6,24.45,335.55,24.25,Z]
                ], 
                label: "Weiswampach", 
                shortLabel: "111", 
                labelPosition: [289.5,93.7], 
                labelAlignment: [CEN,MID]
            },
            "46": { 
                outlines: [
                    [M,353.4,92.5,L,353.35,92.5,Q,345.6,94.5,343.45,95.65,341.3,96.85,339.55,98.4,337.8,99.95,332.75,104.4,327.7,108.85,324.85,111,322.05,113.2,315.9,120.6,309.75,128.05,307.15,130.55,304.9,132.75,301.05,141.8,297.9,149.4,292.2,151.95,289.85,153.05,286.8,156.3,283.35,160,281.8,160.95,280.3,161.95,275.2,163.95,269.45,166.35,267.7,166.35,263.65,165.25,261.45,165.2,260.15,165.25,258.5,163.65,257,162.1,253.65,162.8,L,253.65,163.7,Q,251.6,165.15,249.1,165.2,L,245.65,165.2,Q,244.85,166.55,243.65,167.25,243.4,171.2,241.95,174.35,242,176,246.15,183.15,246.75,185.15,250,188,252.8,190.45,252.8,193.15,252.8,196,252.4,196.2,252.25,196.25,252.05,196.3,252.25,196.35,252.4,196.35,256.45,197.15,259.25,195.9,262.55,194.45,262.3,191.25,L,268,191.25,Q,269.4,193.2,273.15,193.35,278.5,193.5,278.65,193.45,279.7,195.8,281,198.2,281.8,199.95,281.8,202.55,281.8,204.3,276.9,212.75,276.9,213.95,278.6,215.1,280.55,216.6,281.1,217.7,281.45,218.5,282.5,225.1,L,285.6,225.1,Q,287.3,224.5,290.7,221.4,293.3,219.15,296.9,219.15,306.75,219.15,313.55,221.3,316.9,222.35,321.8,222.15,326.75,221.9,329.05,222.65,331.75,223.6,340.35,229.85,347.1,234.9,352.35,234.1,350.5,226.2,351.6,219.35,351.65,215.7,355.2,214.4,358.5,213.1,358.45,209.45,358.45,203.5,354.1,199.2,349.75,194.9,349.75,188.2,349.75,181.7,355.25,174.75,361.4,167,362.55,163.7,362,151.4,366.95,151.6,370,151.75,370.55,151.4,372.2,150.45,372.2,145.85,372.2,140.8,367.9,135.9,363.5,131.05,363.45,126.95,363.5,123.25,365.15,122.25,366.1,121.75,368.8,121.95,371.4,122.2,372.4,121.35,374.1,120.1,374.1,115.65,374.1,111.95,364.55,102.75,Q,354.5,93.75,353.4,92.5,Z]
                ], 
                label: "Heinerscheid", 
                shortLabel: "46", 
                labelPosition: [310.75,174.15], 
                labelAlignment: [CEN,MID]
            },
            "18": { 
                outlines: [
                    [M,268,191.25,L,262.3,191.25,Q,262.55,194.45,259.25,195.9,256.45,197.15,252.4,196.35,252.25,196.35,252.05,196.3,250,196.8,246.85,198.35,244.75,199.3,243.7,205,243.3,206.95,242.6,213.3,241.95,218.4,241.1,220.85,L,234.1,220.85,Q,230.7,216.45,228.3,215.35,224.85,213.8,216,213.8,210.05,213.85,205.95,216.75,203.6,218.5,199.55,223.65,198,225.7,197.05,234.05,196.35,240.45,191.4,241.7,184.9,243.3,182.3,245.8,179,249,180.1,255.1,177,258.6,174.9,261.45,171.05,266.95,171.05,271.35,171.05,272.25,172.55,284.75,174,283.6,174.6,283.6,178.7,283.6,181.4,287.9,181.5,288.05,181.55,288.15,L,181.55,290.3,Q,183.75,296.3,186.75,304,187.35,305.5,188.1,306.9,190.3,306.35,197.05,303.5,199.45,303.8,203.75,301.65,204.9,301.4,208.05,301.5,210.65,301.6,211.9,300.95,212.15,300.9,218.9,298.5,221.1,297.9,226,294.6,227.3,293.75,233.75,291.4,234.5,290.4,238.6,287.3,241.85,284.9,242.3,281.9,244.9,266.95,255.1,254.1,262.1,245.3,282.5,225.1,281.45,218.5,281.1,217.7,280.55,216.6,278.6,215.1,276.9,213.95,276.9,212.75,281.8,204.3,281.8,202.55,281.8,199.95,281,198.2,279.7,195.8,278.65,193.45,278.5,193.5,273.15,193.35,Q,269.4,193.2,268,191.25,Z]
                ], 
                label: "Clervaux", 
                shortLabel: "18", 
                labelPosition: [218.65,249.05], 
                labelAlignment: [CEN,MID]
            },
            "73": { 
                outlines: [
                    [M,282.5,225.1,Q,262.1,245.3,255.1,254.1,244.9,266.95,242.3,281.9,241.85,284.9,238.6,287.3,234.5,290.4,233.75,291.4,227.3,293.75,226,294.6,221.1,297.9,218.9,298.5,212.15,300.9,211.9,300.95,210.65,301.6,208.05,301.5,204.9,301.4,203.75,301.65,199.45,303.8,197.05,303.5,190.3,306.35,188.1,306.9,191.35,312.6,197.65,316.4,197.85,316.6,198.05,316.7,202.2,319.25,208.95,322.95,212.7,325.4,220.5,328.9,222.1,330,223.6,332,225.35,334.2,227.15,335.65,232.2,339.5,236.2,342.9,238.55,344.45,244.45,344.5,244.8,344.5,255.7,340.3,258.95,339,261.75,338.1,261.6,334.05,259.2,330.7,256.8,327.35,256.75,326.1,256.8,324.9,257.95,322.15,259.1,319.45,258.55,318.65,258.1,317.85,259.6,313.1,261.05,308.3,265.9,301.8,267.35,299.9,271,290.25,274.65,280.55,275.75,280.55,276.9,280.55,278.4,280.8,279.9,281.1,280.15,281.15,280.65,281.5,281.25,282,282.25,282.65,283.2,282.65,286.7,282.65,289.35,275.85,292.3,268.5,293.7,267.9,297.7,266.2,317.75,260.4,321.5,259.1,328.8,255.8,337.3,252,339.6,250.2,342.45,248.05,346.15,243.85,349.85,239.65,353.4,237.95,352.8,236,352.35,234.1,347.1,234.9,340.35,229.85,331.75,223.6,329.05,222.65,326.75,221.9,321.8,222.15,316.9,222.35,313.55,221.3,306.75,219.15,296.9,219.15,293.3,219.15,290.7,221.4,287.3,224.5,285.6,225.1,Z]
                ], 
                label: "Munshausen", 
                shortLabel: "73", 
                labelPosition: [270.8,262.9], 
                labelAlignment: [CEN,MID]
            },
            "50": { 
                outlines: [
                    [M,339.6,250.25,Q,337.3,252,328.85,255.85,321.5,259.1,317.8,260.45,297.7,266.2,293.75,267.9,292.3,268.5,289.4,275.85,286.7,282.65,283.2,282.65,282.25,282.65,281.3,282.05,280.65,281.5,280.2,281.2,279.9,281.1,278.45,280.85,276.9,280.55,275.8,280.55,274.65,280.55,271,290.25,267.35,299.9,265.9,301.8,261.05,308.3,259.6,313.1,258.1,317.85,258.6,318.65,259.1,319.45,258,322.15,256.8,324.9,256.8,326.15,256.8,327.35,259.2,330.75,261.6,334.05,261.75,338.1,268.3,336,272.45,336,277.8,336,278.95,336.25,281.3,336.7,282.3,338.4,283,336.75,284.85,334,286.7,331.3,287.7,331.35,288.65,331.4,292.3,335.95,295.9,340.5,299.4,340.95,304.6,341.5,314.05,341.3,316.3,341.25,318.3,340.2,318.7,340.2,323.25,346.2,328.35,352.15,331.15,352.15,L,331.15,354.25,Q,329.85,356.5,329.25,357.35,328.2,358.85,325.5,358.85,319.55,358.85,320.1,367.3,320.3,367.3,320.5,367.35,323.35,367.85,326.9,371,328.2,372.15,329,373.5,L,335.25,373.5,Q,336.15,374.25,337.3,375.25,338.55,375.9,342,375.85,344.3,375.85,351,378.85,354.95,380.65,359.15,384.5,363.35,388.25,370.4,387.95,377.35,387.6,378.35,387.45,379.3,387.2,381.95,385.4,384.65,383.6,386.4,381.75,388.1,379.9,393.8,377.05,394.45,375.15,399.75,375.2,401.75,375.15,404.75,376.2,406.4,376.75,412.4,377.95,411.4,377.6,416.7,378.35,416.35,368.75,411.3,365.05,407.35,360.6,398.05,354,392.25,350.15,391.55,349.5,387.7,346.25,387.4,342.9,387.3,341.75,388.15,333.45,388.7,327.65,386.95,324.65,383.6,318.8,380.5,317.8,379.15,317.45,379.15,311.9,379.1,308.1,380.05,304.15,380.95,300.1,380.95,297.05,380.95,288.25,373.55,276.35,366.15,264.5,362.95,259.6,359.75,254.65,354.85,242.05,354.05,240,353.45,238,349.85,239.65,346.2,243.9,Q,342.45,248.05,339.6,250.25,Z]
                ], 
                label: "Hosingen", 
                shortLabel: "50", 
                labelPosition: [336.75,312.95], 
                labelAlignment: [CEN,MID]
            },
            "21": { 
                outlines: [
                    [M,282.25,338.35,Q,282.65,338.95,282.85,339.6,283.65,345.65,281.9,349.1,279.95,354.15,277.55,356,275.2,357.85,274,359.8,272.8,361.7,272.25,362.25,271.65,362.8,269.5,365.7,266.6,369.05,263.15,369.75,253.25,371.8,250.65,378.45,249.05,382.5,249.05,396.7,249.05,400.65,253.95,406,256.7,408.85,261.35,413.55,265,418.25,265.25,425.2,L,265.9,436.5,Q,266.5,436.3,267.25,436.25,268.75,436.3,272.6,436.35,275.95,435.8,281,430.9,282.8,429.35,284.1,427.9,284.75,427.15,285.9,425.1,287.75,422.2,289.95,418.15,294.45,409.85,295.35,408.4,296.3,406.95,298.2,402.85,300.15,398.7,309.25,384,313.65,377.8,315.6,372.3,317.45,367.2,320.1,367.3,319.55,358.85,325.45,358.85,328.2,358.85,329.2,357.3,329.85,356.5,331.15,354.25,L,331.15,352.15,Q,328.35,352.15,323.2,346.2,318.7,340.2,318.25,340.2,316.3,341.25,314,341.25,304.6,341.5,299.4,340.9,295.9,340.5,292.25,335.95,288.65,331.4,287.65,331.35,286.7,331.3,284.8,334,Q,283,336.75,282.25,338.35,Z]
                ], 
                label: "Consthum", 
                shortLabel: "21", 
                labelPosition: [276.6,389.35], 
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