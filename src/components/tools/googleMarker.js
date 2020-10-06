import picture from "../../pictures/COVID19_icon.svg";


const googleMarker = (map,markerLatLng) =>{
  // var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  var icon = {
    url: picture, // url
    scaledSize: new window.google.maps.Size(40, 40), // scaled size

};


    new window.google.maps.Marker({
        position: { lat: markerLatLng.lat, lng: markerLatLng.lng },
        map: map,
        icon: icon
      });


    //   function getCircle(magnitude) {
    //     return {
    //       path: googleMap.SymbolPath.CIRCLE,
    //       fillColor: 'red',
    //       fillOpacity: .2,
    //       scale: Math.pow(2, magnitude) / 2,
    //       strokeColor: 'white',
    //       strokeWeight: .5
    //     };
    //   }
    //   googleMap.data.setStyle(function(feature) {
    //     var magnitude = feature.getProperty('mag');
    //     return {
    //       icon: getCircle(magnitude)
    //     };
    //   });
      
  
}

export default googleMarker;
