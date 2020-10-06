import googleMarker from "./googleMarker";

const renderMarkers = (map, markers ) => {
  return markers.map((pt) => {
    return googleMarker(map, pt);
  });
};

export default renderMarkers;
