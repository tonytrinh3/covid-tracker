const googleMarker = (map,lat,lng) =>{
    new window.google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: map,
      });
  
}

export default googleMarker;
