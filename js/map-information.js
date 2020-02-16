function fetchGoogleMapsIformation(event){
    var place = $("#pac-input").val;
        if(!pac-input) {
            $("map-info").html(`<h2>Returned place contains no geometry</h2>`);
            return;
        }
        $("map-info").html(
            `<div id="loader">
            <img src="images/loader.gif" alt="loading..."/>
            </div>`);

    }
