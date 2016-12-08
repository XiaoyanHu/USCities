/*
function initMap(){
	var mapcenter = new google.maps.LatLng(42.251642, -71.826521);
	var mapOptions={
		center:mapcenter,
		zoom:12}

	map=new google.maps.Map(document.getElementById("map"),mapOptions)
}
*/




require(["esri/Map","esri/views/MapView","dojo/domReady"],
	function (Map,MapView){
		var map= new Map({
			basemap:"streets"
		});
		var view=new MapView({
			container:"map",
			map:map
		});
	});
