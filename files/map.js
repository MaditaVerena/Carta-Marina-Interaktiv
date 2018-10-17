/* map: historical map */

/* construct a bounding box for this map that the user cannot move out of */
var southWest = L.latLng(1000, 0),
    northEast = L.latLng(0, 1350),
    bounds = L.latLngBounds(southWest, northEast);


/* map units */
var bounds = [[0, 0], [1000, 1350]];


/* images used for the historical maps */
var imageCol = L.imageOverlay('img/Carta_Marina.jpeg', bounds);
var imageBw = L.imageOverlay('img/Carta_Marina_sw.jpeg', bounds);

/* creates the map, into which the maps appear */
var map = L.map('map', {
    crs: L.CRS.Simple,

    /* set that bounding box as maxBounds to restrict moving the map */
    maxBounds: bounds,
    maxBoundsViscosity: 1.0,
    maxZoom: 3,
    minZoom: -1,
    layers: [imageCol, imageBw],
});

var baseMaps = {
    "Carta Marina, Venedig 1539": imageBw,
    "Carta Marina Lafreri, Rom 1572": imageCol,

};

/*puts layers (and therewith the images) onto the map*/
L.control.layers(baseMaps).addTo(map);


/* zoom the map to that bounding box */
map.fitBounds(bounds);


/* map2: web mapping (i.e. openstreetmap) */

var mymap = L.map('map2').setView([63, 0], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);


document.getElementById("map2Container").style.display = "none";

function toggleWebmap() {
    var x = document.getElementById('map2Container');
    var y = document.getElementById('textContainer');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
    } else {
        x.style.display = 'none';
        y.style.display = 'block';
    }
}






/* polygon: mouse over */
function highlightME(polly) {
    polly.setStyle({
        fillOpacity: '0.1',
        fillColor: '#911d00'
    })
}

/* polygon: mouse out */
function highlightMENOT(polly) {
    polly.setStyle({
        fillOpacity: '0.0'
    })
}


/* function which inserts title and text into the textContainer */
function polyClick(x) {

    var elem1 = document.getElementById("title");
    elem1.innerHTML = (x.name) + " (" + (x.title) + ")"; 

    var elem2 = document.getElementById("info");
    elem2.innerHTML = x.text;

    /* and zooms into the historical and the modern web map */
    var a = Number(x.cartay);
    var b = Number(x.cartax);
    var c = Number(x.cartaz);
    var a2 = Number(x.kartey);
    var b2 = Number(x.kartex);
    var c2 = Number(x.kartez);
    map.flyTo([a, b], c);
    mymap.setView([a2, b2], c2);

    // map.flyTo([620, 270], 1); mymap.setView([61.969943, -6.844482], 7);

}

/* Link-function */

function polyClickbyID(x) {  
    var i;
    for (i = 0; i < objectsFromData.length; i++) {
        if (objectsFromData[i].id == x) {
            polyClick(objectsFromData[i]);
        }
    }
}


/**
 * loading Data from json file
 */

var objectsFromData = new Array();

 function loadData(){

   // alert(data[0].id);
    console.log("Got some data, e.g.: "+data);


    for (let i = 0; i < data.length; i++) {
        const e = data[i];
        console.log("found object: ");
        console.log(e);
        objectsFromData.push(e);
    }
    
    console.log("Array finished:");
    console.log(objectsFromData);

 }

function addPolysToMap(){

    console.log("adding polys to map");

    for (let i = 0; i < objectsFromData.length; i++) {
        const e = objectsFromData[i];
        console.log("adding to map: ");
        console.log(e);
        // objectsFromData.push(e);

        var polyTmp = L.polygon(e.coordinates, { color: 'none',  fillColor: 'black',    fillOpacity: 0.0,});
        e.poly=polyTmp;
        polyTmp.addTo(map).bringToFront();
        polyTmp.on('click', function () { polyClick(e) })
        polyTmp.on('mouseover', function () { highlightME(this) })
        polyTmp.on('mouseout', function () { highlightMENOT(this) })
    }

}

 loadData();
 addPolysToMap();


/* polyBack = click into map; */

var polyBACK = L.polygon([
    [0, 0], [0, 1500], [1000, 1500], [1000, 0]
], {
        color: 'none',
        fillColor: 'black',
        fillOpacity: 0.0,
        className: 'map-noClick' /* grab-cursor, see css */
    }
)

polyBACK.addTo(map).bringToBack()
polyBACK.on('click', function () { polyClick(myGarnichts) })



/* data for textContainer */
var myGarnichts = {
    name: "Garnichts",
    title: "",
    text: "Klick auf Fare oder Thule",
    cartay: "564",
    cartax: "702",
    cartaz: "-1",
    kartey: "63",
    kartex: "0",
    kartez: "3",
}

/******************************************/
/* Plate A */




/* sea */
var polySchwertfischBeiScott = L.polygon([

    [686.5,80],[687,75],[697.5,67],[686.5,71.5],[683.5,70],[679,66],[677,64],[677,67.5],[676.5,70.5],[676.5,77],[680.5,80]
    
    ], {
            color: 'none',
            fillColor: 'black',
            fillOpacity: 0.0,
        }
    )


var polyShipAngli = L.polygon([

    [788,342.75],[785.5,341.5],[783,340.75],[781.25,339],[782.75,333.25],[784,327.75],[784,324.5],[783.5,324.5],[782,329],[781.75,333.25],[780.5,336.75],[780,341],[777.5,341.5],[772.25,341.25],[770.75,340.75],[766,340.25],[768.25,336.75],[771,335.75],[773.5,334.25],[771.5,334],[770,333.75],[771.25,330.25],[773,328.5],[769,332.25],[768.5,333.25],[765.5,332.5],[762,331.75],[759.75,330.75],[759.25,327.5],[754.25,327.5],[754,325.5],[752,326.5],[748.25,326.75],[747.5,328],[746,328.75],[745.75,329.5],[745.25,331.5],[744.75,334.25],[743.75,336.5],[743.75,338],[742.5,341.5],[742.75,344],[742.75,347],[742.75,348.75],[742.75,348.75],[743.25,352],[744.75,355.5],[746,357.5],[748.25,359.25],[751.75,360.25],[753.25,360.25],[757.25,361],[760,361],[762.25,366],[765.75,365],[766.5,362.75],[766.25,361.25],[768,362.25],[772.5,364.75],[772.75,366.75],[775,364.75],[773.75,363],[773.75,359],[771.75,359],[768.25,358.25],[766.5,357],[763,352.25],[761.5,351.5],[760,351.25],[763,349.5],[768,347],[776.5,344.75],[777.25,345.5],[777,348],[776.5,350],[774.75,352.75],[776,354.75],[776.75,358.5],[778.5,354.25],[779.25,349],[781,345.5]
    
    ], {
            color: 'none',
            fillColor: 'black',
            fillOpacity: 0.0,
        }
    )
    
    

var polyShipHamburgen = L.polygon([

    [797,57.25],[792.75,54.5],[790.5,54.25],[790.75,48.5],[790,47.75],[788.5,50.75],[783.75,53],[782,53.5],[778.25,53.25],[776.75,53.75],[774,52.75],[776.5,48.75],[780.5,48],[779.25,46.75],[780.5,42.5],[778.75,43.75],[776.75,45.25],[775.5,46.25],[773,46.25],[771.25,46.25],[768.5,46.5],[767.25,45.25],[768.5,44],[765.5,43],[765.25,43],[763.25,42.75],[760.25,40.75],[757.25,41.25],[754.5,40.5],[752.5,42.5],[751.75,44],[751,46.25],[750.5,49.5],[748.5,54],[748.25,57.25],[749,61.5],[748.5,64.5],[750,67.75],[752,71],[754.25,72.75],[759,74],[762,73.5],[765,74.5],[766.5,76.75],[770.5,76.75],[775.75,75.5],[781.25,76.75],[782.5,76.5],[779.75,74.75],[777.75,73.75],[776.75,72.75],[775.25,71.5],[772.75,70.25],[771.5,69],[769.5,68],[771,66.25],[772.75,68],[775.75,69.5],[779.25,70.75],[783,71.5],[785.5,69.25],[787.5,66.25],[788.5,63.25],[790.25,60.25],[790.75,59.25],[793.25,60.75],[795.25,59.75]
    
    ], {
            color: 'none',
            fillColor: 'black',
            fillOpacity: 0.0,
        }
    )

    var polyShipLubicenses = L.polygon([

        [773.5,229.75],[767.75,228],[764.25,226.75],[760.75,226],[758.5,217],[756.5,213],[755.5,201],[753.75,201.5],[751.25,203],[750.5,199.25],[746.75,200.25],[742.75,201.75],[736.75,205.75],[733.75,209],[732,212.5],[728.5,213.25],[724.25,214.25],[721.25,216.75],[720.25,218.25],[717.5,221.25],[715.25,228.25],[714.5,232.25],[714.5,238.5],[718.25,242.5],[718.5,247],[716.5,242.5],[716.5,241.25],[717.75,246],[717.75,249],[718.25,251],[720.5,252.25],[723.25,253.5],[727.25,252.5],[729.5,251.75],[731.5,252.5],[733,253.75],[735.25,255],[741.25,252.25],[742.5,253.5],[746.25,251.75],[747.5,253.75],[748.5,254.75],[748,257.75],[746.5,260.25],[749.25,261],[750,257.75],[750,255.25],[750.75,252],[752,249.25],[753.75,248.5],[755.25,249.75],[756.5,252.5],[758.25,253.75],[758.5,252.5],[758.25,250],[758.5,247],[760,244.5],[761,244.5],[761,246.5],[761.75,249],[763,247.75],[764,248.75],[764,246.25],[764,243.75],[763.25,241],[762.5,237.25],[762,232.75],[766,231.25],[769.5,230]
        
        ], {
                color: 'none',
                fillColor: 'black',
                fillOpacity: 0.0,
            }
        )
        
    
    var polyShipScott = L.polygon([

        [778.25,120.75],[776.25,118.75],[773,116.25],[771,115.25],[775.25,103.5],[768.75,108.75],[764.75,111],[760.5,110.5],[760.25,108],[761.25,102.5],[756.5,103.5],[756.5,103.5],[755,103.25],[751.75,103.25],[744.75,102.5],[742.5,100.75],[734.75,102.5],[732.25,104.25],[733.5,109.75],[736.75,116],[735.75,122],[735.75,125.25],[737.5,127.75],[740.25,129.75],[746,133],[756.25,130.25],[758.5,131.75],[759.75,135.75],[764.75,136.75],[766.5,132.75],[766.5,130.25],[766.5,128.25],[766.25,125.5],[768.25,122.5],[770.25,119.25],[774,120],[775.75,121],[774.25,125.75]
        ], {
                color: 'none',
                fillColor: 'black',
                fillOpacity: 0.0,
            }
        )
            

        var polyTrollwal = L.polygon([

            [749,382],[745,383],[742,382],[740,377],[738,372],[737,368],[738,364],[735,363],[733,363],[730,365],[727,366],[725,369],[717,381],[715,383],[712,384],[711,380],[708,378],[705,380],[703,384],[706,389],[703,391],[707,400],[708,403],[710,408],[709,412],[707,419],[710,428],[712,430],[716,430],[722,427],[728,424],[733,419],[738,413],[743,406],[743,399],[744,395],[747,393],[750,391],[750,387]
            
            ], {
                    color: 'none',
                    fillColor: 'black',
                    fillOpacity: 0.0,
                }
            )


            var polyWalfische = L.polygon([

                [740.75,278.5],[738.5,273],[737.25,266.25],[734.5,263.5],[732.75,262.25],[729,265.5],[727,266.5],[725,264],[724.5,262.25],[722.5,260],[721.75,257.25],[719.25,256.5],[718.25,259.75],[717,261.25],[715.5,263.5],[714,268.75],[711,274],[711.25,277.25],[712.5,281.25],[711,280],[710.5,278.25],[709.75,276.75],[707,274.5],[705.25,272.5],[703.5,270.25],[701.25,267.5],[699.25,265],[698.5,263],[695.75,264.25],[694.5,270],[692.75,273.5],[691,278],[691.5,281.75],[692.25,285.75],[693.25,288.5],[696.25,291.25],[700.75,293],[704.5,293.75],[706.25,297],[708.5,301],[711.5,298.5],[713.25,294.5],[713.5,290.5],[714.5,290.25],[715.25,288.25],[715.75,284.75],[717.75,287],[718.75,289.5],[719.75,292.75],[721,294.25],[723.25,294.25],[727.75,293],[730.5,289.5],[732.75,286],[735,286.75],[737,285.5],[738.5,282]
                
                ], {
                        color: 'none',
                        fillColor: 'black',
                        fillOpacity: 0.0,
                    }
                )
            
           var polyFischBeiShipScot = L.polygon([

                 [698.5,119.5],[695.25,122.625],[692.375,123.25],[688.625,123.875],[686.75,126.75],[685.125,128.875],[684.375,133.5],[685.125,136.375],[686.25,139.875],[687.25,142.125],[688.625,143.75],[687.125,143.875],[685.25,144.25],[683.75,143.25],[683.875,145.5],[684.375,147.25],[682.875,148.25],[683.75,150],[683.625,151.75],[682.75,153.125],[682.75,154.875],[684.125,155.375],[684.75,156.25],[685.25,157.625],[685.75,159.75],[687.75,158.75],[689.375,158.25],[691.125,159],[690.75,155.75],[692.25,153.25],[693.875,151.875],[695.375,153.375],[695.25,155.25],[696,156.875],[697.625,157.875],[700,158.625],[700.75,157.875],[701.75,155.125],[701.75,150.125],[704.125,148.75],[706.625,148.75],[708.75,149.5],[711.125,147.75],[712.25,146.875],[710.75,145.125],[711.75,143],[709.625,141.25],[709.125,138.875],[706.75,139.375],[704.875,137.875],[703.375,138.75],[701.25,139.375],[699.125,140],[698,138.5],[696.625,137],[694,135],[690.875,133],[689.75,130.375],[691.125,127.125],[692,126.875],[692.25,128.375],[692.625,129.625],[693.375,131.75],[695,130.125],[695.75,126.125],[697.5,124.375]
                    
                ], {
                         color: 'none',
                         fillColor: 'black',
                         fillOpacity: 0.0,
                    }
                 )
                    
/* western of Falcon */
var polyIsafjord = L.polygon([
    [862.5,120.25],[863.5,135.75],[855.25,145],[849.75,140],[845.75,123.75],[848.75,115]], {
        color: 'none',
        fillColor: 'black',
        fillOpacity: 0.0,
    }
)




/* eastern of Falcon */

var polyButirum = L.polygon([

    [823.875,248.375],[822.875,245.75],[819.375,245.625],[817,248],[817.25,252.625],[819.125,255],[820.5,255.625],[820.75,257.125],[820.75,258.5],[821.625,259.75],[822.5,260.875],[823,260.875],[823,262.5],[822.75,264.875],[824,266.5],[824.875,267.875],[826.5,267.875],[827.75,267.25],[828.75,267.25],[829.375,265.375],[829.875,259.5],[828.875,257.25],[828.875,254.75],[828.125,251.75],[827.375,249.75],[826.125,248.875]
    
    ], {
            color: 'none',
            fillColor: 'black',
            fillOpacity: 0.0,
        }
    )

var polyCriptoporticus = L.polygon([

    [927.5, 306.5], [927.75, 309.75], [927.75, 315], [928, 322.25], [925.75, 324.25], [924.25, 329], [924, 333], [925.5, 335.75], [925.5, 339.25], [922, 340.5], [921.25, 342], [923.25, 345.5], [921.25, 349.5], [915.25, 352.5], [914, 350.75], [913.5, 348], [911.5, 345.5], [908.5, 346.5], [903.25, 346.5], [896.5, 346.75], [891.5, 347], [891.5, 344], [891.5, 337.5], [889.75, 331.5], [890.25, 326.25], [891.5, 322], [891.75, 317.5], [891.5, 313.75], [893.5, 310.5], [897.25, 307.5]

], {
        color: 'none',
        fillColor: 'black',
        fillOpacity: 0.0,
    }
)



var polyFischer = L.polygon([

    [886.5,322],[884.5,324.25],[886,324.5],[888,326.75],[887,327],[886,327],[884,326.75],[884.75,329.5],[886.5,332.5],[884.25,331.75],[883.25,329.75],[882.75,327.75],[882.5,326.5],[882.5,324.5],[884,322.5],[886,321],[886,318.5],[886,313],[886.25,307],[886,300.25],[886,297.5],[884.25,296],[884.5,292.5],[884.25,289],[885,287.5],[887.75,285.5],[889.25,285.75],[887,288.25],[886.25,290.25],[887.5,291.25],[889,291.75],[890.75,292.75],[891.75,293.75],[890.75,295.25],[889.75,295.25],[889.25,295.25],[888.25,296],[889.25,297.25],[888,297.25],[888,296],[888,294.5],[887.25,294],[886.75,294],[886,294.5],[886.75,296],[887.75,297.75],[889,299.75],[888.25,299.75],[887.75,299.5],[886,299]
    
    ], {
            color: 'none',
            fillColor: 'black',
            fillOpacity: 0.0,
        }
    )

var polyFischWappen = L.polygon([

    [911, 245], [913, 257], [911, 265.5], [907, 268.5], [901.25, 268.75], [891.25, 270.25], [883.5, 266.25], [880, 261.25], [880.75, 252.75], [882.75, 248.25], [887.75, 245.25], [893.5, 244.5], [899.75, 245.5], [901.75, 244.5], [904, 243.25], [908.5, 243.25]

], {
        color: 'none',
        fillColor: 'black',
        fillOpacity: 0.0,
    }
)

var polyFuechse = L.polygon([

    [937.3959789276123, 358], [935.6459789276123, 360.5], [935.6459789276123, 367], [936.8959789276123, 376], [937.6459789276123, 381], [934.6459789276123, 377.75], [934.3959789276123, 371.75], [932.8959789276123, 371.5], [930.8959789276123, 372.25], [933.3959789276123, 368.25], [931.6459789276123, 364.25], [931.6459789276123, 361.25], [931.6459789276123, 356.5], [933.8959789276123, 358], [936.3959789276123, 355.25], [937.6459789276123, 354.75], [934.6459789276123, 345], [937.3959789276123, 346.5], [938.8959789276123, 344.5], [936.3959789276123, 341.25], [938.1459789276123, 334.25], [932.6459789276123, 342]

], {
        color: 'none',
        fillColor: 'black',
        fillOpacity: 0.0,
    }
)

var polyHausAusWalfischknochen = L.polygon ([

    [857.5,311.25],[861.5,311.25],[861.5,311.5],[864.5,312.75],[868.25,314.75],[863.75,316.75],[861.5,318.5],[858.5,318.5],[855.5,318.25],[855.5,315.25],[855.75,311.25]
    ], {
            color: 'none',
            fillColor: 'black',
            fillOpacity: 0.0,
        }
    )


var polyHolensis = L.polygon([

    [857.75, 268.75], [853.25, 268.75], [849.5, 268.5], [849.5, 271.75], [849.75, 275.5], [851, 277.75], [855, 276.75], [855.25, 272.25], [856.5, 271.75], [857, 270.75]


], {
        color: 'none',
        fillColor: 'black',
        fillOpacity: 0.0,
    }
)

var polyOchsen = L.polygon([

    [844.25,276.75],[845.25,281.5],[843.5,285],[843.25,291],[841,292],[839,291.75],[837.75,288],[837.75,285.25],[837.75,282.75],[838,279.75],[841.5,279.75],[841.75,277]
    
    ], {
            color: 'none',
            fillColor: 'black',
            fillOpacity: 0.0,
        }
    )

var polyPustendesKind = L.polygon([

    [973, 260], [970, 265.5], [967, 265.5], [967.5, 271.5], [963, 268.5], [960, 265.5], [956, 262.5], [948, 272], [939, 279.5], [935, 283.5], [930.5, 283.5], [927.5, 280.5], [930.5, 274], [933, 270.5], [937.5, 266.5], [941, 262.5], [952, 260], [952.5, 257.5], [952, 255], [953.5, 251.5], [956, 249], [963.5, 247.5], [966, 247.5], [969, 250], [972.5, 255.5]

], {
        color: 'none',
        fillColor: 'black',
        fillOpacity: 0.0,
    }
)



var polyRitter = L.polygon([

    [923.3617477416992, 298.19952046871185], [917.6117477416992, 300.69952046871185], [912.3617477416992, 298.94952046871185], [911.6117477416992, 300.69952046871185], [907.1117477416992, 304.44952046871185], [903.3617477416992, 303.94952046871185], [908.6117477416992, 301.69952046871185], [908.3617477416992, 299.19952046871185], [906.3617477416992, 298.94952046871185], [907.1117477416992, 291.19952046871185], [908.1117477416992, 284.94952046871185], [905.6117477416992, 283.19952046871185], [904.8617477416992, 281.44952046871185], [906.1117477416992, 278.94952046871185], [908.3617477416992, 277.94952046871185], [911.1117477416992, 272.69952046871185], [911.1117477416992, 270.94952046871185], [907.8617477416992, 270.94952046871185], [906.3617477416992, 269.69952046871185], [909.3617477416992, 267.94952046871185], [913.6117477416992, 270.19952046871185], [914.1117477416992, 273.69952046871185], [916.8617477416992, 275.44952046871185], [919.3617477416992, 274.19952046871185], [922.8617477416992, 271.94952046871185], [921.3617477416992, 273.69952046871185], [918.1117477416992, 275.94952046871185], [918.6117477416992, 280.19952046871185], [919.3617477416992, 278.94952046871185], [920.8617477416992, 274.44952046871185], [921.6117477416992, 275.44952046871185], [920.3617477416992, 281.19952046871185], [918.6117477416992, 284.19952046871185], [921.1117477416992, 287.19952046871185], [920.3617477416992, 283.19952046871185], [922.3617477416992, 278.44952046871185], [922.8617477416992, 282.44952046871185], [923.8617477416992, 284.94952046871185], [924.1117477416992, 287.44952046871185], [925.1117477416992, 289.44952046871185], [925.1117477416992, 291.19952046871185], [927.1117477416992, 291.94952046871185], [928.1117477416992, 294.19952046871185], [927.8617477416992, 296.19952046871185], [924.6117477416992, 296.44952046871185], [921.3617477416992, 298.19952046871185]
], {
        color: 'none',
        fillColor: 'black',
        fillOpacity: 0.0,
    }
)



var polyRittergruppe = L.polygon([

    [925.772777557373, 351.94952046871185], [913.022777557373, 359.44952046871185], [915.272777557373, 362.44952046871185], [918.272777557373, 366.44952046871185], [914.522777557373, 365.44952046871185], [912.522777557373, 363.94952046871185], [912.522777557373, 366.69952046871185], [909.522777557373, 367.44952046871185], [907.522777557373, 368.19952046871185], [908.522777557373, 370.44952046871185], [910.772777557373, 371.44952046871185], [912.022777557373, 372.94952046871185], [910.272777557373, 372.44952046871185], [909.272777557373, 372.19952046871185], [910.022777557373, 373.69952046871185], [911.272777557373, 376.44952046871185], [912.772777557373, 376.94952046871185], [910.772777557373, 376.69952046871185], [910.272777557373, 375.94952046871185], [909.022777557373, 372.94952046871185], [907.772777557373, 373.44952046871185], [907.272777557373, 375.69952046871185], [908.522777557373, 376.69952046871185], [907.522777557373, 378.44952046871185], [906.022777557373, 380.44952046871185], [905.022777557373, 381.69952046871185], [904.272777557373, 381.19952046871185], [904.522777557373, 378.69952046871185], [904.772777557373, 375.19952046871185], [903.272777557373, 378.69952046871185], [901.272777557373, 380.94952046871185], [900.272777557373, 378.69952046871185], [902.522777557373, 376.94952046871185], [901.522777557373, 375.19952046871185], [900.772777557373, 371.94952046871185], [900.772777557373, 369.69952046871185], [901.522777557373, 368.19952046871185], [900.522777557373, 367.69952046871185], [900.272777557373, 369.19952046871185], [899.522777557373, 370.69952046871185], [899.522777557373, 372.44952046871185], [899.522777557373, 373.94952046871185], [899.022777557373, 375.19952046871185], [899.022777557373, 376.69952046871185], [898.022777557373, 378.19952046871185], [896.772777557373, 378.44952046871185], [895.272777557373, 377.44952046871185], [897.772777557373, 374.94952046871185], [896.522777557373, 372.44952046871185], [894.772777557373, 370.44952046871185], [893.272777557373, 368.19952046871185], [891.522777557373, 366.44952046871185], [889.522777557373, 363.94952046871185], [888.772777557373, 361.69952046871185], [887.772777557373, 360.19952046871185], [886.272777557373, 358.69952046871185], [886.772777557373, 357.44952046871185], [887.772777557373, 355.19952046871185], [887.772777557373, 352.19952046871185], [885.022777557373, 352.44952046871185], [885.022777557373, 350.94952046871185], [885.022777557373, 349.44952046871185], [887.522777557373, 349.44952046871185], [889.522777557373, 350.94952046871185], [890.522777557373, 352.44952046871185], [890.772777557373, 354.44952046871185], [892.272777557373, 354.94952046871185], [894.022777557373, 354.19952046871185], [894.772777557373, 352.44952046871185], [895.022777557373, 350.94952046871185], [899.022777557373, 351.94952046871185], [900.272777557373, 352.94952046871185], [900.272777557373, 355.19952046871185], [901.272777557373, 355.44952046871185], [903.772777557373, 353.94952046871185], [916.022777557373, 347.44952046871185], [913.772777557373, 349.44952046871185], [903.772777557373, 355.44952046871185], [905.272777557373, 356.44952046871185], [908.022777557373, 357.69952046871185], [916.272777557373, 352.44952046871185], [923.522777557373, 348.94952046871185], [917.772777557373, 352.94952046871185], [912.022777557373, 356.69952046871185], [909.522777557373, 358.19952046871185], [912.022777557373, 359.19952046871185]

], {
        color: 'none',
        fillColor: 'black',
        fillOpacity: 0.0,
    }
)



var polyViolineSpielenderMann = L.polygon([

    [947.1459789276123, 359], [950.6459789276123, 359], [950.8959789276123, 354.75], [955.6459789276123, 355.5], [956.8959789276123, 353.25], [957.1459789276123, 358.25], [959.3959789276123, 358.75], [963.1459789276123, 357.75], [963.8959789276123, 361.25], [963.1459789276123, 363.5], [960.8959789276123, 362.75], [958.3959789276123, 363], [960.8959789276123, 365.5], [960.1459789276123, 368.25], [959.6459789276123, 369.75], [960.1459789276123, 370.75], [961.3959789276123, 371.5], [960.8959789276123, 372.5], [957.8959789276123, 371], [955.6459789276123, 369.25], [953.3959789276123, 369.25], [952.1459789276123, 370.5], [948.8959789276123, 370.75], [945.8959789276123, 372.75], [943.6459789276123, 374.5], [942.3959789276123, 377.5], [941.6459789276123, 374], [945.1459789276123, 369.25], [945.6459789276123, 367.5], [942.6459789276123, 365.25], [939.6459789276123, 365.25], [941.3959789276123, 362.25], [944.1459789276123, 362.75], [946.1459789276123, 363]
], {
        color: 'none',
        fillColor: 'black',
        fillOpacity: 0.0,
    }
)

var polyZelte = L.polygon([

    [931.25, 319.25], [931, 315.25], [930.5, 312.25], [930.5, 307.25], [933.75, 309], [936, 310.25], [938.25, 311.75], [936.5, 314], [935.25, 316.25], [932.75, 317.5], [930.75, 319.5], [930.75, 321], [930.25, 323], [931.25, 323], [934, 324.5], [935, 326.25], [938.75, 328.75], [934.75, 332], [932.5, 333.75], [930.75, 335], [929.75, 330.25], [929.75, 325.25], [929.75, 330.5], [931, 335], [930.5, 337.25], [928.25, 340.25], [925.75, 346], [925, 353.75], [923, 360.25], [921, 365.25], [920.5, 370.75], [922, 371.25], [924.5, 373], [927.75, 374.75], [926.75, 376], [925, 377.5], [923.25, 379.75], [921.5, 380.5], [920.5, 378.5], [920.5, 375.25], [920.5, 372.5]
            
            ], {
        color: 'none',
        fillColor: 'black',
        fillOpacity: 0.0,
    }
            )




/* search function */

/* Unklar...

var input = document.getElementById("myInput");


input.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) { mySearch() }
}) */




function mySearch() {
    /* search input is converted into a string */
    var inputText = String(document.getElementById('myInput').value);

    //var a = countries.indexOf(inputText);					//gibt Position in Array

    var i;
    for (i = 0; i < objectsFromData.length; i++) {
        if (objectsFromData[i].name == inputText) {
            polyClick(objectsFromData[i]);
        }
        else {
            if (objectsFromData[i].title == inputText) {
                polyClick(objectsFromData[i]);
            }
        }
    }
}

/* autocomplete */

function autocomplete(inp, objects) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    var arr = new Array();
    var arr2 = new Array();
    var a;
    for (a in objects) {
        arr.push(objects[a].name);
        arr2.push(objects[a].title); /* adds array for titles [Färöer]; not affected by autocomplete! */
    }
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value: ###*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length) + " (" + arr2[i] + ")"; /* arr2 adds modern names (title: Färöer) in brackets, is not affected by autocomplete! */
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    mySearch();
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            mySearch();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);


    });
}

autocomplete(document.getElementById("myInput"), objectsFromData);