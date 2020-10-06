import calculateDistance from "./calculateDistance";

const casesRadiusCounter = (centerPt, markers, radiusState) => {
  let counter = 0;

   markers.map((pt) => {
    if (
      calculateDistance(centerPt.lat, centerPt.lng, pt.lat, pt.lng) <=
      radiusState
    ) {
      return counter++;
    }

    
  });
  return counter;

};

export default casesRadiusCounter;
