// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


function init() {
	// Faneuil Hall
	var landmark = new google.maps.LatLng(42.3599611, -71.0567528);

	// Set up map
	var myOptions = {
		zoom: 1, // The larger the zoom number, the bigger the zoom
		center: landmark,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

    // Create the map in the "map_canvas" <div>
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    // Create a marker
    var marker = new google.maps.Marker({
        position: landmark,
        title: "Faneuil Hall, Boston, MA"
    });
    marker.setMap(map);

    // This is a global info window...
    var infowindow = new google.maps.InfoWindow();

    // Open info window on click of marker
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(marker.title);
        infowindow.open(map, marker);
    });
}
