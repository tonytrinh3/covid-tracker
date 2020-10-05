const googleMarker = (googleMap,markerLat,markerLng) =>{
    new window.google.maps.Marker({
        position: { lat: markerLat, lng: markerLng },
        map: googleMap,
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
