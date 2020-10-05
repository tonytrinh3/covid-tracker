const googleMarker = (map,markerLatLng) =>{
    new window.google.maps.Marker({
        position: { lat: markerLatLng.lat, lng: markerLatLng.lng },
        map: map,
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
