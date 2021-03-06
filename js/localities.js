/*function initMap(){
let location = new Object();
navigator.geolocation.getCurrentPosition(function(pos){
location.lat = pos.coords.latitude;
location.long = pos.coords.longitude;
map = new google.maps.Map(document.getElementById("map-info"),{
    center: {lat:35.746512,lng:-39.462891},
    zoom: 4
});
getRestaurants(location);
    });
};

function getRestaurants (location) {
    var searchBox = new google.maps.LatLng(location.lat,location.long);
    var request = {
        location: searchBox,
        radius: '1500',
        type: ['restaurant']
    };
   var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request,callback);
};
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
