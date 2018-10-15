/* map: historical map */
   
/* construct a bounding box for this map that the user cannot move out of */
var southWest = L.latLng(1000, 0),
    northEast = L.latLng(0, 1350),
    bounds = L.latLngBounds(southWest, northEast);


var map = L.map('map', {
    crs: L.CRS.Simple,

    /* set that bounding box as maxBounds to restrict moving the map */
    maxBounds: bounds,
    maxBoundsViscosity: 1.0,
    maxZoom: 3,
    minZoom: -1,


});

/* map units */
var bounds = [[0, 0], [1000, 1350]];
var image = L.imageOverlay('img/Carta_Marina.jpeg', bounds).addTo(map);

/* zoom the map to that bounding box */
map.fitBounds(bounds);


/* map2: web mapping (i.e. openstreetmap) */

var mymap = L.map('map2').setView([63, 0], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);


document.getElementById("map2Container").style.display = "none";

function toggleWebmap() {
    var x = document.getElementById('map2Container');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
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
    elem1.innerHTML = (x.name) + " (" + (x.title) + ")";  /* müsste das nicht title sein */

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


/* polygons and data sets */
//
//
//
/* polyBack = click into map; */

/* example: creates polygon */
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

/* Meer */


/* westliches Island */



/* Östliches Island */
var polyHausAusWalfischknochen = L.polygon

[857.5,311.25],[861.5,311.25],[861.5,311.5],[864.5,312.75],[868.25,314.75],[863.75,316.75],[861.5,318.5],[858.5,318.5],[855.5,318.25],[855.5,315.25],[855.75,311.25]
], {
        color: 'none',
        fillColor: 'black',
        fillOpacity: 0.0,
    }
)
var polyFischer = L.polygon[(

    [886.5,322],[884.5,324.25],[886,324.5],[888,326.75],[887,327],[886,327],[884,326.75],[884.75,329.5],[886.5,332.5],[884.25,331.75],[883.25,329.75],[882.75,327.75],[882.5,326.5],[882.5,324.5],[884,322.5],[886,321],[886,318.5],[886,313],[886.25,307],[886,300.25],[886,297.5],[884.25,296],[884.5,292.5],[884.25,289],[885,287.5],[887.75,285.5],[889.25,285.75],[887,288.25],[886.25,290.25],[887.5,291.25],[889,291.75],[890.75,292.75],[891.75,293.75],[890.75,295.25],[889.75,295.25],[889.25,295.25],[888.25,296],[889.25,297.25],[888,297.25],[888,296],[888,294.5],[887.25,294],[886.75,294],[886,294.5],[886.75,296],[887.75,297.75],[889,299.75],[888.25,299.75],[887.75,299.5],[886,299]
    
    ], {
            color: 'none',
            fillColor: 'black',
            fillOpacity: 0.0,
        }
    )
var polyButirum = L.polygon([

    [823.875,248.375],[822.875,245.75],[819.375,245.625],[817,248],[817.25,252.625],[819.125,255],[820.5,255.625],[820.75,257.125],[820.75,258.5],[821.625,259.75],[822.5,260.875],[823,260.875],[823,262.5],[822.75,264.875],[824,266.5],[824.875,267.875],[826.5,267.875],[827.75,267.25],[828.75,267.25],[829.375,265.375],[829.875,259.5],[828.875,257.25],[828.875,254.75],[828.125,251.75],[827.375,249.75],[826.125,248.875]
    
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
var polyHolensis = L.polygon([

    [857.75,268.75],[853.25,268.75],[849.5,268.5],[849.5,271.75],[849.75,275.5],[851,277.75],[855,276.75],[855.25,272.25],[856.5,271.75],[857,270.75]
    
    
    ], {
            color: 'none',
            fillColor: 'black',
            fillOpacity: 0.0,
        }
    )
var polyFischWappen = L.polygon([

    [911,245],[913,257],[911,265.5],[907,268.5],[901.25,268.75],[891.25,270.25],[883.5,266.25],[880,261.25],[880.75,252.75],[882.75,248.25],[887.75,245.25],[893.5,244.5],[899.75,245.5],[901.75,244.5],[904,243.25],[908.5,243.25]
    
    ], {
            color: 'none',
            fillColor: 'black',
            fillOpacity: 0.0,
        }
    )
var polyFalcoAlbi = L.polygon([

    [939.5788173675537,238.66284942626953],[941.5788173675537,242.16284942626953],[939.0788173675537,244.16284942626953],[940.5788173675537,247.66284942626953],[937.0788173675537,252.16284942626953],[934.0788173675537,255.66284942626953],[933.5788173675537,252.66284942626953],[933.5788173675537,248.66284942626953],[931.0788173675537,252.66284942626953],[930.0788173675537,254.66284942626953],[927.0788173675537,254.66284942626953],[928.5788173675537,251.66284942626953],[931.5788173675537,248.16284942626953],[928.5788173675537,248.16284942626953],[927.0788173675537,247.66284942626953],[926.5788173675537,245.66284942626953],[928.5788173675537,243.66284942626953],[931.5788173675537,241.66284942626953],[934.0788173675537,239.66284942626953],[936.5788173675537,238.66284942626953],[938.0788173675537,235.66284942626953],[939.5788173675537,239.16284942626953],[940.0788173675537,240.16284942626953]
    
    ], {
            color: 'none',
            fillColor: 'black',
            fillOpacity: 0.0,
        }
    )
var polyPustendesKind = L.polygon ([

    [973,260],[970,265.5],[967,265.5],[967.5,271.5],[963,268.5],[960,265.5],[956,262.5],[948,272],[939,279.5],[935,283.5],[930.5,283.5],[927.5,280.5],[930.5,274],[933,270.5],[937.5,266.5],[941,262.5],[952,260],[952.5,257.5],[952,255],[953.5,251.5],[956,249],[963.5,247.5],[966,247.5],[969,250],[972.5,255.5]
    
    ], {
            color: 'none',
            fillColor: 'black',
            fillOpacity: 0.0,
        }
    )
var polyZelte = L.polygon[(

    [931.25,319.25],[931,315.25],[930.5,312.25],[930.5,307.25],[933.75,309],[936,310.25],[938.25,311.75],[936.5,314],[935.25,316.25],[932.75,317.5],[930.75,319.5],[930.75,321],[930.25,323],[931.25,323],[934,324.5],[935,326.25],[938.75,328.75],[934.75,332],[932.5,333.75],[930.75,335],[929.75,330.25],[929.75,325.25],[929.75,330.5],[931,335],[930.5,337.25],[928.25,340.25],[925.75,346],[925,353.75],[923,360.25],[921,365.25],[920.5,370.75],[922,371.25],[924.5,373],[927.75,374.75],[926.75,376],[925,377.5],[923.25,379.75],[921.5,380.5],[920.5,378.5],[920.5,375.25],[920.5,372.5]
    
    ], {
            color: 'none',
            fillColor: 'black',
            fillOpacity: 0.0,
        }
    )

var polyRitter = L.polygon ([

    [923.3617477416992,298.19952046871185],[917.6117477416992,300.69952046871185],[912.3617477416992,298.94952046871185],[911.6117477416992,300.69952046871185],[907.1117477416992,304.44952046871185],[903.3617477416992,303.94952046871185],[908.6117477416992,301.69952046871185],[908.3617477416992,299.19952046871185],[906.3617477416992,298.94952046871185],[907.1117477416992,291.19952046871185],[908.1117477416992,284.94952046871185],[905.6117477416992,283.19952046871185],[904.8617477416992,281.44952046871185],[906.1117477416992,278.94952046871185],[908.3617477416992,277.94952046871185],[911.1117477416992,272.69952046871185],[911.1117477416992,270.94952046871185],[907.8617477416992,270.94952046871185],[906.3617477416992,269.69952046871185],[909.3617477416992,267.94952046871185],[913.6117477416992,270.19952046871185],[914.1117477416992,273.69952046871185],[916.8617477416992,275.44952046871185],[919.3617477416992,274.19952046871185],[922.8617477416992,271.94952046871185],[921.3617477416992,273.69952046871185],[918.1117477416992,275.94952046871185],[918.6117477416992,280.19952046871185],[919.3617477416992,278.94952046871185],[920.8617477416992,274.44952046871185],[921.6117477416992,275.44952046871185],[920.3617477416992,281.19952046871185],[918.6117477416992,284.19952046871185],[921.1117477416992,287.19952046871185],[920.3617477416992,283.19952046871185],[922.3617477416992,278.44952046871185],[922.8617477416992,282.44952046871185],[923.8617477416992,284.94952046871185],[924.1117477416992,287.44952046871185],[925.1117477416992,289.44952046871185],[925.1117477416992,291.19952046871185],[927.1117477416992,291.94952046871185],[928.1117477416992,294.19952046871185],[927.8617477416992,296.19952046871185],[924.6117477416992,296.44952046871185],[921.3617477416992,298.19952046871185]
    ], {
            color: 'none',
            fillColor: 'black',
            fillOpacity: 0.0,
        }
    )
var polyCriptoporticus = L.polygon([

    [927.5,306.5],[927.75,309.75],[927.75,315],[928,322.25],[925.75,324.25],[924.25,329],[924,333],[925.5,335.75],[925.5,339.25],[922,340.5],[921.25,342],[923.25,345.5],[921.25,349.5],[915.25,352.5],[914,350.75],[913.5,348],[911.5,345.5],[908.5,346.5],[903.25,346.5],[896.5,346.75],[891.5,347],[891.5,344],[891.5,337.5],[889.75,331.5],[890.25,326.25],[891.5,322],[891.75,317.5],[891.5,313.75],[893.5,310.5],[897.25,307.5]
    
    ], {
            color: 'none',
            fillColor: 'black',
            fillOpacity: 0.0,
        }
    )

var polyViolineSpielenderMann = L.polygon([

    [947.1459789276123,359],[950.6459789276123,359],[950.8959789276123,354.75],[955.6459789276123,355.5],[956.8959789276123,353.25],[957.1459789276123,358.25],[959.3959789276123,358.75],[963.1459789276123,357.75],[963.8959789276123,361.25],[963.1459789276123,363.5],[960.8959789276123,362.75],[958.3959789276123,363],[960.8959789276123,365.5],[960.1459789276123,368.25],[959.6459789276123,369.75],[960.1459789276123,370.75],[961.3959789276123,371.5],[960.8959789276123,372.5],[957.8959789276123,371],[955.6459789276123,369.25],[953.3959789276123,369.25],[952.1459789276123,370.5],[948.8959789276123,370.75],[945.8959789276123,372.75],[943.6459789276123,374.5],[942.3959789276123,377.5],[941.6459789276123,374],[945.1459789276123,369.25],[945.6459789276123,367.5],[942.6459789276123,365.25],[939.6459789276123,365.25],[941.3959789276123,362.25],[944.1459789276123,362.75],[946.1459789276123,363]
    ], {
            color: 'none',
            fillColor: 'black',
            fillOpacity: 0.0,
        }
    )
var polyFuechse = L.polygon([

    [937.3959789276123,358],[935.6459789276123,360.5],[935.6459789276123,367],[936.8959789276123,376],[937.6459789276123,381],[934.6459789276123,377.75],[934.3959789276123,371.75],[932.8959789276123,371.5],[930.8959789276123,372.25],[933.3959789276123,368.25],[931.6459789276123,364.25],[931.6459789276123,361.25],[931.6459789276123,356.5],[933.8959789276123,358],[936.3959789276123,355.25],[937.6459789276123,354.75],[934.6459789276123,345],[937.3959789276123,346.5],[938.8959789276123,344.5],[936.3959789276123,341.25],[938.1459789276123,334.25],[932.6459789276123,342]
        
    ], {
            color: 'none',
            fillColor: 'black',                
            fillOpacity: 0.0,
        }
    )
var polyRittergruppe = L.polygon([

    [925.772777557373,351.94952046871185],[913.022777557373,359.44952046871185],[915.272777557373,362.44952046871185],[918.272777557373,366.44952046871185],[914.522777557373,365.44952046871185],[912.522777557373,363.94952046871185],[912.522777557373,366.69952046871185],[909.522777557373,367.44952046871185],[907.522777557373,368.19952046871185],[908.522777557373,370.44952046871185],[910.772777557373,371.44952046871185],[912.022777557373,372.94952046871185],[910.272777557373,372.44952046871185],[909.272777557373,372.19952046871185],[910.022777557373,373.69952046871185],[911.272777557373,376.44952046871185],[912.772777557373,376.94952046871185],[910.772777557373,376.69952046871185],[910.272777557373,375.94952046871185],[909.022777557373,372.94952046871185],[907.772777557373,373.44952046871185],[907.272777557373,375.69952046871185],[908.522777557373,376.69952046871185],[907.522777557373,378.44952046871185],[906.022777557373,380.44952046871185],[905.022777557373,381.69952046871185],[904.272777557373,381.19952046871185],[904.522777557373,378.69952046871185],[904.772777557373,375.19952046871185],[903.272777557373,378.69952046871185],[901.272777557373,380.94952046871185],[900.272777557373,378.69952046871185],[902.522777557373,376.94952046871185],[901.522777557373,375.19952046871185],[900.772777557373,371.94952046871185],[900.772777557373,369.69952046871185],[901.522777557373,368.19952046871185],[900.522777557373,367.69952046871185],[900.272777557373,369.19952046871185],[899.522777557373,370.69952046871185],[899.522777557373,372.44952046871185],[899.522777557373,373.94952046871185],[899.022777557373,375.19952046871185],[899.022777557373,376.69952046871185],[898.022777557373,378.19952046871185],[896.772777557373,378.44952046871185],[895.272777557373,377.44952046871185],[897.772777557373,374.94952046871185],[896.522777557373,372.44952046871185],[894.772777557373,370.44952046871185],[893.272777557373,368.19952046871185],[891.522777557373,366.44952046871185],[889.522777557373,363.94952046871185],[888.772777557373,361.69952046871185],[887.772777557373,360.19952046871185],[886.272777557373,358.69952046871185],[886.772777557373,357.44952046871185],[887.772777557373,355.19952046871185],[887.772777557373,352.19952046871185],[885.022777557373,352.44952046871185],[885.022777557373,350.94952046871185],[885.022777557373,349.44952046871185],[887.522777557373,349.44952046871185],[889.522777557373,350.94952046871185],[890.522777557373,352.44952046871185],[890.772777557373,354.44952046871185],[892.272777557373,354.94952046871185],[894.022777557373,354.19952046871185],[894.772777557373,352.44952046871185],[895.022777557373,350.94952046871185],[899.022777557373,351.94952046871185],[900.272777557373,352.94952046871185],[900.272777557373,355.19952046871185],[901.272777557373,355.44952046871185],[903.772777557373,353.94952046871185],[916.022777557373,347.44952046871185],[913.772777557373,349.44952046871185],[903.772777557373,355.44952046871185],[905.272777557373,356.44952046871185],[908.022777557373,357.69952046871185],[916.272777557373,352.44952046871185],[923.522777557373,348.94952046871185],[917.772777557373,352.94952046871185],[912.022777557373,356.69952046871185],[909.522777557373,358.19952046871185],[912.022777557373,359.19952046871185]
        
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
    
    

var polyShipHamburgen = L.polygon([

    [797,57.25],[792.75,54.5],[790.5,54.25],[790.75,48.5],[790,47.75],[788.5,50.75],[783.75,53],[782,53.5],[778.25,53.25],[776.75,53.75],[774,52.75],[776.5,48.75],[780.5,48],[779.25,46.75],[780.5,42.5],[778.75,43.75],[776.75,45.25],[775.5,46.25],[773,46.25],[771.25,46.25],[768.5,46.5],[767.25,45.25],[768.5,44],[765.5,43],[765.25,43],[763.25,42.75],[760.25,40.75],[757.25,41.25],[754.5,40.5],[752.5,42.5],[751.75,44],[751,46.25],[750.5,49.5],[748.5,54],[748.25,57.25],[749,61.5],[748.5,64.5],[750,67.75],[752,71],[754.25,72.75],[759,74],[762,73.5],[765,74.5],[766.5,76.75],[770.5,76.75],[775.75,75.5],[781.25,76.75],[782.5,76.5],[779.75,74.75],[777.75,73.75],[776.75,72.75],[775.25,71.5],[772.75,70.25],[771.5,69],[769.5,68],[771,66.25],[772.75,68],[775.75,69.5],[779.25,70.75],[783,71.5],[785.5,69.25],[787.5,66.25],[788.5,63.25],[790.25,60.25],[790.75,59.25],[793.25,60.75],[795.25,59.75]
    
    ], {
            color: 'none',
            fillColor: 'black',
            fillOpacity: 0.0,
        }
    )        
    var polyAbbatiaHelgfiael = L.polygon(
        [819.5,265.5],[831.5,269.25],[834,259],[838,249.5],[845.5,240.25],[843,237.25],[840.75,236],[824.5,228],[813,230],[811.75,231.75],[811,235.25],[809.75,251.75],[810.5,258.25]
      ], {
              color: 'none',
              fillColor: 'black',
              fillOpacity: 0.0,
          }
      )
      var polySulfur= L.polygon([
        [788,157.5],[813.25,167],[818.25,158],[814.5,148],[800.25,136.5]
           ], {
                color: 'none',
                fillColor: 'black',
                fillOpacity: 0.0,
            }
        )
        var polyVespena = L.polygon([
            [807.25,178.25],[799,166],[789.5,160.5],[783,161.25],[773.75,182],[778.5,190.5],[793.25,189.25],[797,187.5]
        ], {
        
        color: 'none',
                fillColor: 'black',
                fillOpacity: 0.0,
            }
        )
        var polyVestrabord= L.polygon([
            [871,142.5],[878,124.5],[866.5,111.5],[837.5,105.5],[827,144.5],[861,161.5]
           
          ], {
                  color: 'none',
                  fillColor: 'black',
                  fillOpacity: 0.0,
              }
          )
          
    /******************************************/

/* other Plates (should be put in order!) */

/* Faroe Islands */

/* creates polygon */
var polyFare = L.polygon([
    [650, 248],
    [653, 258],
    [650, 264],
    [643, 265],
    [651, 272],
    [645, 283],
    [634, 289],
    [618, 291],
    [620, 303],
    [598, 316],
    [577, 307],
    [584, 269],
    [615, 253],
    [623, 242],

], {
        color: 'none',
        fillColor: 'black',
        fillOpacity: 0.0,
    }
)

/* data for textContainer */
var myFare = {
    name: "Fare", /* as in map */
    title: "Färöer", /* modern term */
    text: "Die Färöer sind eine zu <span onclick='polyClick(myDenmark)'>Dänemark</span> gehörende Gruppe. Die gut 50.000 Inselbewohner – die Färinger, auch Färöer genannt – betrachten sich nicht als Dänen, sondern als eigenständiges Volk, das von den Wikingern auf den Färöern abstammt. Sie sprechen die färöische Sprache, die aus dem Altwestnordischen entstanden ist und mit dem Isländischen und dem Norwegischen verwandt ist. <br> Nach dem Vertrag von Fámjin aus dem Jahr 2005 bilden die Färinger, wie auch die Grönländer, eine „gleichberechtigte Nation“ innerhalb des Königreichs Dänemark. Ihre Inseln genießen bereits seit 1948 eine weitgehende Autonomie und haben mit dem Løgting eines der ältesten Parlamente der Welt. Es entsendet regelmäßig zwei Abgeordnete ins dänische Folketing und ist mit zwei Delegierten im Nordischen Rat vertreten. Nach dem Vertrag von Fámjin aus dem Jahr 2005 bilden die Färinger, wie auch die Grönländer, eine „gleichberechtigte Nation“ innerhalb des Königreichs Dänemark. Ihre Inseln genießen bereits seit 1948 eine weitgehende Autonomie und haben mit dem Løgting eines der ältesten Parlamente der Welt. Es entsendet regelmäßig zwei Abgeordnete ins dänische Folketing und ist mit zwei Delegierten im Nordischen Rat vertreten.",
    cartay: "620",
    cartax: "270",
    cartaz: "1",
    kartey: "62",
    kartex: "-6.8",
    kartez: "6",
}

/* adds to map, click, mouseover, mouseout */
polyFare.addTo(map).bringToFront()
polyFare.on('click', function () { polyClick(myFare) })
polyFare.on('mouseover', function () { highlightME(this) })
polyFare.on('mouseout', function () { highlightMENOT(this) })

/* Thule */

var polyThule = L.polygon([
    [571.9999961853027, 166.6666717529297], [569.2499961853027, 170.6666717529297], [565.4999961853027, 176.4166717529297], [560.9999961853027, 178.9166717529297], [555.2499961853027, 175.9166717529297], [552.9999961853027, 180.9166717529297], [550.7499961853027, 184.6666717529297], [546.9999961853027, 186.1666717529297], [542.9999961853027, 185.6666717529297], [540.4999961853027, 188.1666717529297], [536.9999961853027, 188.6666717529297], [535.9999961853027, 185.6666717529297], [531.4999961853027, 185.6666717529297], [528.2499961853027, 187.1666717529297], [528.7499961853027, 191.4166717529297], [525.4999961853027, 191.6666717529297], [522.9999961853027, 190.6666717529297], [522.9999961853027, 188.1666717529297], [521.2499961853027, 186.1666717529297], [519.9999961853027, 182.1666717529297], [524.2499961853027, 178.4166717529297], [523.2499961853027, 175.9166717529297], [522.9999961853027, 171.4166717529297], [524.7499961853027, 167.4166717529297], [527.2499961853027, 167.6666717529297], [529.9999961853027, 171.1666717529297], [534.2499961853027, 171.6666717529297], [534.4999961853027, 166.4166717529297], [529.7499961853027, 165.1666717529297], [527.4999961853027, 163.6666717529297], [524.7499961853027, 165.1666717529297], [523.2499961853027, 162.1666717529297], [522.2499961853027, 159.6666717529297], [522.4999961853027, 156.1666717529297], [521.7499961853027, 155.1666717529297], [520.7499961853027, 153.9166717529297], [517.9999961853027, 152.1666717529297], [517.9999961853027, 147.9166717529297], [517.9999961853027, 145.1666717529297], [518.9999961853027, 144.1666717529297], [518.9999961853027, 142.6666717529297], [517.4999961853027, 141.4166717529297], [519.2499961853027, 138.4166717529297], [520.2499961853027, 136.1666717529297], [522.4999961853027, 137.1666717529297], [524.4999961853027, 135.6666717529297], [527.2499961853027, 136.1666717529297], [526.7499961853027, 133.1666717529297], [526.4999961853027, 129.1666717529297], [527.7499961853027, 123.16667175292969], [527.7499961853027, 120.16667175292969], [529.9999961853027, 119.16667175292969], [535.4999961853027, 118.66667175292969], [538.9999961853027, 117.16667175292969], [542.4999961853027, 117.41667175292969], [545.7499961853027, 119.41667175292969], [546.9999961853027, 123.16667175292969], [547.4999961853027, 124.16667175292969], [548.2499961853027, 123.41667175292969], [549.9999961853027, 122.91667175292969], [549.7499961853027, 122.16667175292969], [552.4999961853027, 123.16667175292969], [552.9999961853027, 126.16667175292969], [551.9999961853027, 127.16667175292969], [550.4999961853027, 127.16667175292969], [548.9999961853027, 125.66667175292969], [548.9999961853027, 127.91667175292969], [549.9999961853027, 130.6666717529297], [551.4999961853027, 131.6666717529297], [554.2499961853027, 132.9166717529297], [552.2499961853027, 134.9166717529297], [553.9999961853027, 137.1666717529297], [556.4999961853027, 136.1666717529297], [557.2499961853027, 135.9166717529297], [557.4999961853027, 135.1666717529297], [557.4999961853027, 132.6666717529297], [557.7499961853027, 130.6666717529297], [556.9999961853027, 129.6666717529297], [560.9999961853027, 132.9166717529297], [560.9999961853027, 135.1666717529297], [561.4999961853027, 136.9166717529297], [562.2499961853027, 137.6666717529297], [562.9999961853027, 139.6666717529297], [562.9999961853027, 141.6666717529297], [562.2499961853027, 142.6666717529297], [560.9999961853027, 145.1666717529297], [560.7499961853027, 142.6666717529297], [558.2499961853027, 140.1666717529297], [555.4999961853027, 139.9166717529297], [558.2499961853027, 142.6666717529297], [559.2499961853027, 146.6666717529297], [560.2499961853027, 148.9166717529297], [560.4999961853027, 152.9166717529297], [563.4999961853027, 155.1666717529297], [563.9999961853027, 157.4166717529297], [563.4999961853027, 157.9166717529297], [562.4999961853027, 158.9166717529297], [562.7499961853027, 160.4166717529297], [563.9999961853027, 161.4166717529297], [565.4999961853027, 161.4166717529297], [566.2499961853027, 163.1666717529297], [568.4999961853027, 165.1666717529297], [568.9999961853027, 165.1666717529297], [570, 165.25], [571.5, 164.75],
], {
        color: 'none',
        fillColor: 'black',
        fillOpacity: 0.0,
    }
)

var myThule = {
    name: "Tile",
    title: "Thule",
    text: "Test",
    cartay: "534",
    cartax: "148",
    cartaz: "1",
    kartey: "0",
    kartex: "0",
    kartez: "7",
}

polyThule.addTo(map).bringToFront()
polyThule.on('click', function () { polyClick(myThule) })
polyThule.on('mouseover', function () { highlightME(this) })
polyThule.on('mouseout', function () { highlightMENOT(this) })



/* Denmark */

var polyDenmark = L.polygon([[140,492],[228,538],[264,626],[212,646],[178,672],[130,686],[100,672],[98,602],[56,566],[80,504]], {
        color: 'none',
        fillColor: 'black',
        fillOpacity: 0.0,
    }
)

var myDenmark = {
    name: "Dänemark",
    title: "Dänemark",
    text: "Dänemark (dänisch Danmark [dɛnmɑʀg]) ist ein Land und souveräner Staat im nördlichen Europa und eine parlamentarische Monarchie. Dänemark wird zusammen mit den Färöern, die wie das Mutterland geographisch zu Nordeuropa gehören, und Grönland, das zu Nordamerika zählt, offiziell Königreich Dänemark genannt. Das Königreich Dänemark ist daher ein interkontinentaler Staat. Das Mutterland, der Teil zwischen der Skandinavischen Halbinsel und Mitteleuropa, umfasst eine Fläche von 43.094 km², wovon 23.872 km² auf die Halbinsel Jütland und der Rest auf Inseln entfallen.",
    cartay: "146",
    cartax: "584",
    cartaz: "1",
    kartey: "56",
    kartex: "10",
    kartez: "6",
}

polyDenmark.addTo(map).bringToFront()
polyDenmark.on('click', function () { polyClick(myDenmark) })
polyDenmark.on('mouseover', function () { highlightME(this) })
polyDenmark.on('mouseout', function () { highlightMENOT(this) })


/* Holsathia */

var polyHolsathia = L.polygon([[124.24999618530273,517.6666564941406],[121.99999618530273,535.1666564941406],[128.49999618530273,553.6666564941406],[134.24999618530273,574.1666564941406],[130.49999618530273,577.4166564941406],[120.49999618530273,582.1666564941406],[113.49999618530273,586.6666564941406],[110.74999618530273,584.4166564941406],[103.24999618530273,582.6666564941406],[97.49999618530273,585.4166564941406],[90.99999618530273,592.9166564941406],[84.24999618530273,593.4166564941406],[82.99999618530273,589.4166564941406],[78.74999618530273,576.6666564941406],[73.24999618530273,572.9166564941406],[64.74999618530273,570.6666564941406],[61.499996185302734,562.1666564941406],[61.999996185302734,546.4166564941406],[68.24999618530273,539.9166564941406],[71.49999618530273,531.9166564941406],[71.74999618530273,527.6666564941406],[70.24999618530273,522.9166564941406],[75.49999618530273,521.4166564941406],[77.24999618530273,514.6666564941406],[90.24999618530273,512.1666564941406],[104.24999618530273,506.6666564941406],[112.99999618530273,504.9166564941406],[120.24999618530273,510.6666564941406],[119.99999618530273,503.4166564941406],[124.49999618530273,499.9166564941406],[126.99999618530273,498.1666564941406],[122.99999618530273,520.4166564941406],[119.99999618530273,530.9166564941406],[121.49999618530273,544.6666564941406]], {
    color: 'none',
    fillColor: 'black',
    fillOpacity: 0.0,
}
)

var myHolsathia = {
name: "Holsathia",
title: "Holstein",
text: "Holstein (dän. und niederdt.: Holsten, lat.: Holsatia) ist der südliche Landesteil des deutschen Landes Schleswig-Holstein und wurde nach einem der drei hier ursprünglich ansässigen Sachsenstämme, den Holsten (eigtl. Holtsaten = „Waldbewohner“; vgl. Altsächs. holt „Gehölz, Wald“ und sāt „Sasse, Bewohner“), benannt.",
cartay: "104",
cartax: "552",
cartaz: "2",
kartey: "54",
kartex: "9",
kartez: "7",
}

polyHolsathia.addTo(map).bringToFront()
polyHolsathia.on('click', function () { polyClick(myHolsathia) })
polyHolsathia.on('mouseover', function () { highlightME(this) })
polyHolsathia.on('mouseout', function () { highlightMENOT(this) })



/* Skioll */

var polySkioll = L.polygon([
    [252.7916660308838,934.5833282470703],[255.2916660308838,938.8333282470703],[253.7916660308838,941.3333282470703],[255.1666660308838,942.3333282470703],[252.9166660308838,945.5833282470703],[253.5416660308838,949.5833282470703],[251.5416660308838,951.9583282470703],[248.6666660308838,951.3333282470703],[245.9166660308838,952.3333282470703],[243.4166660308838,952.2083282470703],[242.0416660308838,950.8333282470703],[240.2916660308838,951.8333282470703],[238.4166660308838,953.3333282470703],[235.6666660308838,954.3333282470703],[234.0416660308838,953.2083282470703],[231.0416660308838,948.0833282470703],[231.7916660308838,945.0833282470703],[233.0416660308838,943.0833282470703],[231.2916660308838,941.9583282470703],[229.6666660308838,940.3333282470703],[229.7916660308838,938.8333282470703],[230.6666660308838,936.5833282470703],[231.0416660308838,934.8333282470703],[230.9166660308838,931.4583282470703],[230.0416660308838,929.9583282470703],[230.6666660308838,927.7083282470703],[231.6666660308838,925.0833282470703],[234.0416660308838,925.5833282470703],[234.2916660308838,928.5833282470703],[235.2916660308838,931.8333282470703],[236.0416660308838,933.8333282470703],[237.4166660308838,934.3333282470703],[238.7916660308838,935.0833282470703],[239.5416660308838,935.8333282470703],[241.5416660308838,935.7083282470703],[242.4166660308838,936.0833282470703],[244.0416660308838,936.8333282470703],[245.5416660308838,937.0833282470703],[246.4166660308838,937.3333282470703],[247.2916660308838,936.5833282470703],[249.0416660308838,936.3333282470703],[249.7916660308838,936.5833282470703],[250.7916660308838,936.5833282470703]
], {
        color: 'none',
        fillColor: 'black',
        fillOpacity: 0.0,
    }
)


var mySkioll = {
    name: "Skioll",
    title: "????",
    text: "südlichr ursprünglich ansässi Holtsaten = „Waldbewohner“; vgl. Altsächs. holt „Gehölz, Wald“ und sāt „Sasse, Bewohner“), benannt.",
    cartay: "243",
    cartax: "943",
    cartaz: "3",
    kartey: "54", /* wo ist das?? */
    kartex: "9",
    kartez: "7",
    }

polySkioll.addTo(map).bringToFront()
polySkioll.on('click', function () { polyClick(mySkioll) })
polySkioll.on('mouseover', function () { highlightME(this) })
polySkioll.on('mouseout', function () { highlightMENOT(this) })





/* search function */

/* collects data sets, necessary for search input! */
var myCountries = [myThule, myFare, myDenmark, myHolsathia];




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
    for (i = 0; i < myCountries.length; i++) {
        if (myCountries[i].name == inputText) {
            polyClick(myCountries[i]);
        }
        else {
            if (myCountries[i].title == inputText) {
                polyClick(myCountries[i]);
            }
        }
    }
}

/* autocomplete */

function autocomplete(inp, countries) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    var arr = new Array();
    var arr2 = new Array();
    var a;
    for (a in countries) {
        arr.push(countries[a].name);
        arr2.push(countries[a].title); /* adds array for titles [Färöer]; not affected by autocomplete! */
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

autocomplete(document.getElementById("myInput"), myCountries);