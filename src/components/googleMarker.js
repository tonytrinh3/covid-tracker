const googleMarker = (map,lat,lng) =>{
    new window.google.maps.Marker({
        position: { lat: 43.642567, lng: -79.387054 },
        map: map,
      });
  
}

export default googleMarker;