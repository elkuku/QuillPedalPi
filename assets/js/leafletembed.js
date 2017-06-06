var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {
    // set up the map
    map = new L.Map('map');

    // create the tile layer with correct attribution
    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});
    console.log(map);
    // start the map in Atacames
    map.setView(new L.LatLng(0.8698, -79.8471),16);
    map.addLayer(osm);
}

//16/0.8698/-79.8471