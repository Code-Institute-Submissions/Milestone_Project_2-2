/*var locationForm = document.getElementById('location-form');   
locationForm.addEventListener("submit", geocode);  
function geocode(e){
   e.preventDefault();
         var location = document.getElementById('location-input').value;
         axios.get('https://maps.googleapis.com/maps/api/geocode/json?',{
             params: {
             address: location,
             key:'AIzaSyDDHHyac2SiOYPNYxXMK7rqJjnB8nCaaxE'
             }
         })
         .then(function(response){
             console.log(response);

            var formattedAddress = response.data.results[0].formatted_address;
        var formattedAddressOutput =`
        <ul class="list-group">
        <li class="lsit-group-item">${formattedAddress}</li>
        </ul>`;

var addressComponents = response.data.results[0].address_components;
var addressComponentsOutput ='<ul class="list-group">';
for(var i=0;i < addressComponents.length; i++) {
    addressComponentsOutput +=`
    <li class="list-group-item"><strong>${addressComponents[i].types[0]}</strong>: ${addressComponents[i].long_name}</li>
    `;
     }
     addressComponentsOutput += '</ul>';

        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;
        var geometryOutput =`
        <ul class="list-group">
        <li class="lsit-group-item"><strong>Latitude</strong>: ${lat}</li>
        </ul>;
        <li class="lsit-group-item"><strong>Longitude</strong>:${lng}</li>
        </ul>`;
        document.getElementById("formatted-address").innerHTML = formattedAddressOutput;
        document.getElementById("address-components").innerHTML = addressComponentsOutput;
        document.getElementById("geometry").innerHTML = geometryOutput;
        
        })
         .catch(function(error){
             console.log(eror);
         });
        }
