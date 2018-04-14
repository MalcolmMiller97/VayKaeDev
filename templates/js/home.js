require('./../css/home.css');
var $ = require('jquery');
var loadGoogleMapsApi = require('load-google-maps-api');

//Documentation for (webpack) load-google-maps-api: https://www.npmjs.com/package/load-google-maps-api
function initMap() {
    //Map options
    var options = {
        center: {lat: 40.7484405, lng: -73.9944191},
        zoom: 8
    };

    loadGoogleMapsApi({
        key: 'AIzaSyBgJixuRsEqj5GLqXb1tfUEQzMk2dm_QSY'
    }).then(function (googleMaps) {
        new googleMaps.Map(document.getElementById('map'), options)
    }).catch(function (error) {
        console.error(error)
    });
}

$(document).ready(function() {
    initMap();
});