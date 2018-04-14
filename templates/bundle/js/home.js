webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
var $ = __webpack_require__(1);
var loadGoogleMapsApi = __webpack_require__(4);

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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var CALLBACK_NAME = '__googleMapsApiOnLoadCallback'

var OPTIONS_KEYS = ['channel', 'client', 'key', 'language', 'region', 'v']

module.exports = function (options) {
  options = options || {}

  return new Promise(function (resolve, reject) {
    // Reject the promise after a timeout.
    var timeoutId = setTimeout(function () {
      window[CALLBACK_NAME] = function () {} // Set the on load callback to a no-op.
      reject(new Error('Could not load the Google Maps API'))
    }, options.timeout || 10000)

    // Hook up the on load callback.
    window[CALLBACK_NAME] = function () {
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
      }
      resolve(window.google.maps)
      delete window[CALLBACK_NAME]
    }

    // Prepare the `script` tag to be inserted into the page.
    var scriptElement = document.createElement('script')
    var params = ['callback=' + CALLBACK_NAME]
    OPTIONS_KEYS.forEach(function (key) {
      if (options[key]) {
        params.push(key + '=' + options[key])
      }
    })
    if (options.libraries && options.libraries.length) {
      params.push('libraries=' + options.libraries.join(','))
    }
    scriptElement.src =
      'https://maps.googleapis.com/maps/api/js?' + params.join('&')

    // Insert the `script` tag.
    document.body.appendChild(scriptElement)
  })
}


/***/ })
],[2]);