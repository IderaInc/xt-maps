/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @author FusionCharts Technologies LLP
 @meta package_map_pack
 @id fusionmaps.BayqonyrCity.17.02-23-2016 08:17:47
*/
FusionCharts(["private","modules.renderer.js-bayqonyrcity",function(){var f=this,b=f.hcLib,c=b.chartAPI,h=b.moduleCmdQueue,b=b.injectModuleDependency,a=!!c.geo,e,g,d;e=[{name:"BayqonyrCity",revision:17,creditLabel:!1,standaloneInit:!0,baseWidth:300,baseHeight:290,baseScaleFactor:10,entities:{"KZ.BY.BY":{outlines:[["M",1539,101,"L",1515,150,1405,126,"Q",1368,52,1283,40,1136,16,1002,113,1039,748,965,1384,"L",794,1384,794,1481,"Q",746,1469,684,1481,623,1481,575,1518,550,1518,538,1542,"L",49,1554,"Q",
98,2617,1161,2825,2052,3008,2541,2177,2687,1921,2663,1628,2614,1225,2810,858,2895,712,2956,553,"L",2675,480,"Q",2321,-119,1613,89,"Q",1576,89,1539,101,"Z"]],label:"Bayqonyr City",shortLabel:"BY",labelPosition:[150.3,144.6],labelAlignment:["center","middle"]}}}];d=e.length;if(a)for(;d--;)a=e[d],c(a.name.toLowerCase(),a,c.geo);else for(;d--;)a=e[d],g=a.name.toLowerCase(),b("maps",g,1),h.maps.unshift({cmd:"_call",obj:window,args:[function(a,b){c.geo?c(a,b,c.geo):f.raiseError(f.core,"12052314141","run",
"JavaScriptRenderer~Maps._call()",Error("FusionCharts.HC.Maps.js is required in order to define vizualization"))},[g,a],window]})}]);
