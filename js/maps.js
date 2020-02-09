/* ----------This code is a combination of Google maps API example codes which i have modfied to the best of my abilit to suit my project needs*/
/*var map;
var service;
var infowindow;
function initMap() {
    var options = new google.maps.LatLng(37.688167,  23.466797)
 map = new google.maps.Map(document.getElementById("map"), {
  zoom: 4,
  center: {
   lat: 35.746512,
   lng: -39.462891
  },
  mapTypeId: 'roadmap'
  
 });
  var trafficLayer = new google.maps.TrafficLayer();
 trafficLayer.setMap(map);
  
 var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
 var locations = [
  { lat: 37.688167, lng: 23.466797 },
  { lat: 19.440694, lng: -73.212891 },
  { lat: 47.846344, lng: 7.119141 },
  { lat: 22.665977, lng: -82.245074 },
  { lat: 52.520008, lng: 13.404954 },
  { lat: 37.983810, lng: 23.727539 },
  { lat: 48.856613, lng: 2.352222 },
  { lat: 13.096851, lng: -59.614483 },
  { lat: 35.185566, lng: 33.382275 },
  { lat: 18.735693, lng: -70.162651 }
 ];
 var markers = locations.map(function(location, i) {
  return new google.maps.Marker({
   position: location,
   label: labels[i % labels.length]
  });
   
  });
  var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js' });
}
 var request = options
    radius: '1500',
    type ['restaurant']

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for(var i = 0; i < results.length; i++) {
        console.log (results)
            var place = results[i];
            let price = createPrice(place.price_level);
        let content = `<h3>${place.name}</h3>
        <h4>${place.vicinity}</h4>
        <p>Price:${price}<br/>
        Rating: ${place.rating}`;

        var marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name,
            });
        var infowindow = new google.maps.InfoWindow({
            content: content
        });
        bindInfoWindow(marker, map, infowindow, content);
        marker.setMap(map)

        };
    };
};
function bindInfoWindow(marker, map, infowindow, html) {
   marker.addListener('click', function() {
       infowindow.setContent(html);
       infowindow.open(map, this);
   }); 
};
function createPrice(level) {
    if(level != "" && level !=null) {
        let out = "";
        for (var x = 0; x < level; x++) {
            out += "$";
        };
        return out;
    } else {
        return "?";
    };
};

