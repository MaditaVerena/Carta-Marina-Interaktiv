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
        fillOpacity: '0.2',
        fillColor: '#ba4242'
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


    /* At the end of text, it inserts a link to osm-map if there are coordinates in data.json*/

    if (x.kartey === "" && x.kartex === "" && x.kartez === "") {
        /* it is an object or animal or phantastic, and does not have coordinates for osm */
        /* if oms is already open, it will be closed and textContainer opened*/
        var m = document.getElementById('map2Container');
        var t = document.getElementById('textContainer');
        if (m.style.display === 'block') {
            t.style.display = 'block';
            m.style.display = 'none';
        } else {
        }
    }

    else {
        /* it is a place with coordinates (if osm is already open, it stays open) */
        /* it checks first, if link is already inserted (as a result because it was opened before!) */

        var o = x.text.includes(" <br /><br /><span onclick='toggleWebmap()'>Auf OpenStreetMap anschauen.</span>");
        console.log(o);
        if (o === true) {
        }
        else {
            x.text = x.text + " <br /><br /><span onclick='toggleWebmap()'>Auf OpenStreetMap anschauen.</span>";
        }
    }


    /* adds ( ) if there is a title given!*/

    if (x.title === "") {
    }

    else {
        var q = x.title.includes("(");
        console.log(q);
        if (q === true) {
        }
        else {
            x.title = " (" + x.title + ")";
        }
    }




    /* actual click function */

    var elem1 = document.getElementById("title");
    elem1.innerHTML = (x.name) + (x.title);

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

function loadData() {

    // alert(data[0].id);
    console.log("Got some data, e.g.: " + data);


    for (let i = 0; i < data.length; i++) {
        const e = data[i];
        console.log("found object: ");
        console.log(e);
        objectsFromData.push(e);
    }

    console.log("Array finished:");
    console.log(objectsFromData);

}

function addPolysToMap() {

    console.log("adding polys to map");

    for (let i = 0; i < objectsFromData.length; i++) {
        const e = objectsFromData[i];
        console.log("adding to map: ");
        console.log(e);
        // objectsFromData.push(e);

        var polyTmp = L.polygon(e.coordinates, { color: 'none', fillColor: 'black', fillOpacity: 0.0, });
        e.poly = polyTmp;
        polyTmp.addTo(map).bringToFront();
        polyTmp.on('click', function () { polyClick(e) })
        polyTmp.on('mouseover', function () { highlightME(this) })
        polyTmp.on('mouseout', function () { highlightMENOT(this) })
    }

}

loadData();
addPolysToMap();


/* playground: no button 




var n;
for (n = 0; n < objectsFromData.length; n++) {
    if (objectsFromData[n].kartey === "" && objectsFromData[n].kartex === "" && objectsFromData[n].kartez === "") {
        
    }
    else {
        
            alert("Funzt!");
        
    }
}





/***************** */





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
    name: "Carta Marina interaktiv",
    title: "",
    text: "",
    cartay: "564",
    cartax: "702",
    cartaz: "-1",
    kartey: "",
    kartex: "",
    kartez: "",
}


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
        if (objectsFromData[i].name.toUpperCase() == inputText.toUpperCase()) {
            polyClick(objectsFromData[i]);
        }
        else {
            if (objectsFromData[i].title.toUpperCase() == inputText.toUpperCase()) {
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

                /* adds ( ) if there is a title given! */

                if (arr2[i] === "") {
                }

                else {
                    var q = arr2[i].includes("(");
                    console.log(q);
                    if (q === true) {
                    }
                    else {
                        arr2[i] = " (" + arr2[i] + ")";
                    }
                }

                b.innerHTML += arr[i].substr(val.length) + arr2[i]; /* arr2 adds modern names (title: Färöer) in brackets, is not affected by autocomplete! */
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


            /*--- noch problembehaftete Lösung, um nach Titeln zu suchen! ---*/

            else {
                if (arr2[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                    /*create a DIV element for each matching element:*/
                    b = document.createElement("DIV");
                    /*make the matching letters bold:*/
                    b.innerHTML = "<strong>" + arr2[i].substr(0, val.length) + "</strong>";
                    b.innerHTML += arr2[i].substr(val.length);
                    /*insert a input field that will hold the current array item's value:*/
                    b.innerHTML += "<input type='hidden' value='" + arr2[i] + "'>";
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