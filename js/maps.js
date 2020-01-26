/* ----------This code is a combination of Google maps API example codes which i have modfied to the best of my abilit to suit my project needs*/
var map;
var service;

function handleSearchResults(results, status) {
 if (status == google.maps.places.PlacesServiceStatus.ok) {
  for (var i = 0; i < results.legnth; i++) {
   console.log(results[i]);

   var place = results[i];
   position: results[i].geometry.location;
   map: map;
   icon: rsults[i].icon
  }
 }
}

function performSearch() {
 var request = {
  bound: map.getBounds(),
  name: "Recreation"
 };
 
 services.nearbySearch(request, handleSearchResults);
 
}

function initMap() {
 map = new google.maps.Map(document.getElementById("map"), {
  zoom: 4,
  center: {
   lat: 35.746512,
   lng: -39.462891
  }

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


 services = new google.maps.places.PlacesService(map);

 google.maps.event.addListenerOnce(map, "bounds_changed", performSearch);

 $("#refresh").click(getBounds);
 
}

$(document).ready(function() {
 navigator.geolocation.getLocations();

});

var input = document.getElementById('pac-input');
var searchBox = new google.maps.places.SearchBox(input);
map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

map.addListener('bounds_changed', function() {
 searchBox.setBounds(map.getBounds());
});

var markers = [];

searchBox.addListener('places_changed', function() {
 var places = searchBox.getPlaces();

 if (places.length == 0) {
  return;
 }

 markers.forEach(function(marker) {
  marker.setMap(null);
 });
 markers = [];


 var bounds = new google.maps.LatLngBounds();
 places.forEach(function(place) {
  if (!place.geometry) {
   console.log("Returned place contains no geometry");
   return;
  }
  var icon = {
   url: place.icon,
   size: new google.maps.Size(71, 71),
   origin: new google.maps.Point(0, 0),
   anchor: new google.maps.Point(17, 34),
   scaledSize: new google.maps.Size(25, 25)
  };

  markers.push(new google.maps.Marker({
   map: map,
   icon: icon,
   title: place.name,
   position: place.geometry.location
  }));

  if (place.geometry.viewport) {

   bounds.union(place.geometry.viewport);
  }
  
  else {
   bounds.extend(place.geometry.location);
  }
 });
 map.fitBounds(bounds);

});

