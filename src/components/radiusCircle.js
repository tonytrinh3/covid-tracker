const cityCircle = (googleMap, onClickLat, onClickLng, chosenRadius)=> {
    new window.google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map:googleMap,
        center: {
            lat: onClickLat,
            lng: onClickLng,
          },
        radius: chosenRadius,
      });
}

export default cityCircle;