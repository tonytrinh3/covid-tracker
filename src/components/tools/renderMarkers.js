import calculateDistance from "./calculateDistance";
import googleMarker from "./googleMarker";

const renderMarkers = (map, centerPt, markers, radiusState) => {
    return markers.map((pt) => {
      //if the distance of the markers are within the radius, then it get render
      if (
        calculateDistance(centerPt.lat, centerPt.lng, pt.lat, pt.lng) <=
        radiusState
      ) {
        return googleMarker(map, pt);
      }
      return null;
    });
  };

  export default renderMarkers;