const cityCircle = (map, onClickLatLng, chosenRadius)=> {
    new window.google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map:map,
        center: {
            lat: onClickLatLng.lat,
            lng: onClickLatLng.lng,
          },
        radius: chosenRadius,
      });
}

export default cityCircle;