const changeCenter = (map,coord,setCtrCoord,changeCenterFalse, userCenterStatus) => {
    let infoWindow = new window.google.maps.InfoWindow({
    //   content: "Click the map to get Lat/Lng!",
      position: coord,
    });

    infoWindow.open(map);

    map.addListener("click", function (mapsMouseEvent) {
      // Close the current InfoWindow.
      infoWindow.close();

      // Create a new InfoWindow.
      infoWindow = new window.google.maps.InfoWindow({
        position: mapsMouseEvent.latLng,
      });

      const newCoord = mapsMouseEvent.latLng.toString().slice(1, -1).split(","); //in array, 2 number
      let newCoordObj = {};

      newCoordObj["lat"] = parseFloat(newCoord[0]);
      newCoordObj["lng"] = parseFloat(newCoord[1]);
      

      setCtrCoord(newCoordObj);
      changeCenterFalse()


      infoWindow.setContent(mapsMouseEvent.latLng.toString());
      infoWindow.open(map);
    });

    return map;
  };

  export default changeCenter;