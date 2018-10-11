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
var image = L.imageOverlay('images/Carta_Marina.jpeg', bounds).addTo(map);

/* zoom the map to that bounding box */
map.fitBounds(bounds);


/* MAP 2: web mapping (i.e. google maps) */

var mymap = L.map('map2').setView([63, 0], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);


/* polygon: mouse over */
function highlightME(polly) {
    polly.setStyle({
        fillOpacity: '0.2'
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

    var elem1 = document.getElementById("Ueberschrift");
    elem1.innerHTML = x.name;

    var elem2 = document.getElementById("Infokasten");
    elem2.innerHTML = x.text;

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


/* polyBack = click into map; */
var polyBACK = L.polygon([
    [0, 0], [0, 1500], [1000, 1500], [1000, 0]
], {
        color: 'none',
        fillColor: 'blue',
        fillOpacity: 0.0,


    }
)
polyBACK.addTo(map).bringToBack()
polyBACK.on('click', function () { polyClick(meinGarnichts) })
var meinGarnichts = {
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

/* polygons and data sets */
//
//
//
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
var meinFare = {
    name: "Färöer",
    title: "Färöer",
    text: "Die Färöer sind eine zu Dänemark gehörende Gruppe aus 18 Inseln mit autonomer Selbstverwaltung. Die gut 50.000 Inselbewohner – die Färinger, auch Färöer genannt – betrachten sich nicht als Dänen, sondern als eigenständiges Volk, das von den Wikingern auf den Färöern abstammt. Sie sprechen die färöische Sprache, die aus dem Altwestnordischen entstanden ist und mit dem Isländischen und dem Norwegischen verwandt ist. <br> Nach dem Vertrag von Fámjin aus dem Jahr 2005 bilden die Färinger, wie auch die Grönländer, eine „gleichberechtigte Nation“ innerhalb des Königreichs Dänemark. Ihre Inseln genießen bereits seit 1948 eine weitgehende Autonomie und haben mit dem Løgting eines der ältesten Parlamente der Welt. Es entsendet regelmäßig zwei Abgeordnete ins dänische Folketing und ist mit zwei Delegierten im Nordischen Rat vertreten.",
    cartay: "620",
    cartax: "270",
    cartaz: "1",
    kartey: "62",
    kartex: "-6.8",
    kartez: "7",
}

/* adds to map, click, mouseover, mouseout */
polyFare.addTo(map).bringToFront()
polyFare.on('click', function () { polyClick(meinFare) })
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

var meinThule = {
    name: "Thule",
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
polyThule.on('click', function () { polyClick(meinThule) })
polyThule.on('mouseover', function () { highlightME(this) })
polyThule.on('mouseout', function () { highlightMENOT(this) })


/* search function */
//

/* collects data sets, necessary for search input! */
var meinCountries = [meinThule, meinFare];




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
    for (i = 0; i < meinCountries.length; i++) {
        if (meinCountries[i].name == inputText) {
            polyClick(meinCountries[i]);
        }
    }
}

/* autocomplete */

function autocomplete(inp, countries) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    var arr = new Array();
    var a;
    for (a in countries) {
        arr.push(countries[a].name);
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
                b.innerHTML += arr[i].substr(val.length);
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

autocomplete(document.getElementById("myInput"), meinCountries);