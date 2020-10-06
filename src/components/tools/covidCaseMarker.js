import googleMarker from './googleMarker';

const covidCaseMarker = (map, setCoord) => {

    let newCoordObj = {};

    map.addListener("click", function (mapsMouseEvent) {
      // Close the current InfoWindow.

      const newCoord = mapsMouseEvent.latLng.toString().slice(1, -1).split(","); //in array, 2 number
      
      newCoordObj["lat"] = parseFloat(newCoord[0]);
      newCoordObj["lng"] = parseFloat(newCoord[1]);
      
      googleMarker(map,newCoordObj)
      setCoord(newCoordObj);

    });

    return newCoordObj;
  };

  export default covidCaseMarker;