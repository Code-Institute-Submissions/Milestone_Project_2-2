 //function initMap() {
 //     var map = new google.maps.Map(document.getElementById("map"), {
 //       zoom: 4,
 //       center: {
 //         lat: 55.3781,
 //         lng: -3.436
 //       }
 //     });
//      var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//      var locations = [
//        { lat: 34.553127, lng: 18.048012  },
//        { lat: 34.553127, lng: 18.048012},
//        { lat: 14.522, lng: -75.81766 },
//        { lat: 54.526, lng: 15.2551 }
//    ];
    
//    var markers = locations.map(function(location, i){
//      return new google.maps.Marker({
//        position: location,
//        label: labels[i % labels.length]
//      });
//    });
//    var markerCluster = new MarkerClusterer(map, markers,
//    {imagePath:'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js'});
// }

      var map;
      var service;

      function handleSearchResults(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.ok) {
          for (var i = 0; i < results.legnth; i++) {
            /*console.log(results(i));*/

            var place = results(i);
            position: results(i);
            map: (results(i));
          }
        }
      }

      function performSearch() {
        var request = {
          bounds: map.getBounds(),
          name: "Hotels"
        };
        service.nearbySearch(request, handleSearchResults);
      }

      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          zoom: 3,
          center: {
            lat: 37.983810,
            lng: 23.727539
          }

        });
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
            label: labels[i % labels.length],

          });
        });
        var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js' });

        service = new google.maps.places.PlacesService(map);

        google.maps.event.addListenerOnce(map, "bounds_changed", performSearch);

      }

      $(document).ready(function() {

        navigator.geoLocation.locations();

      });
  
