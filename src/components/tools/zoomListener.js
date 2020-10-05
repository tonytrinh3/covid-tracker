const zoomListener = (map,setZoomState) =>{
    map.addListener("zoom_changed", () => {
        setZoomState(map.getZoom());
    });
  }

  export default zoomListener;
