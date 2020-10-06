import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { changeCenterFalse,addCovidCases,increaseIDCovid} from "../actions";

import googleMarker from "./tools/googleMarker";
import renderMarkers from "./tools/renderMarkers";
import radiusCircle from "./tools/radiusCircle";
// import changeCenter from "./tools/changeCenter";
import changeRadiusCenter from "./tools/changeRadiusCenter";
import covidCaseMarker from "./tools/covidCaseMarker";
import zoomListener from "./tools/zoomListener";

const GoogleMap = (props) => {
  const [ctrCoord, setCtrCoord] = useState({ lat: 37.795932, lng: -122.39371 });
  const [covidCaseCoord, setCovidCaseCoord] = useState({});

  //TODO: to need change map zoom based on radius
  const [radiusState, setRadiusState] = useState(500); //radius map in meters
  const [zoomState, setZoomState] = useState(16); //radius map in meters

  const googleMapRef = useRef();

  useEffect(() => {
    //just adding the google map script to the html body
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      const googleMap = createGoogleMap();
      googleMarker(googleMap, ctrCoord);
      renderMarkers(googleMap, ctrCoord, props.covidCases, radiusState);
      radiusCircle(googleMap, ctrCoord, radiusState);
      zoomListener(googleMap, setZoomState);

      userChangeCenter(googleMap, ctrCoord, setCtrCoord, props.changeCenterFalse);



      covidCaseMarker(googleMap,setCovidCaseCoord);
    
    //   console.log(Object.keys(newCovidCase).length !== 0);
    
        if(Object.keys(covidCaseCoord).length !== 0){
            props.addCovidCases(covidCaseCoord);
            props.increaseIDCovid();
            setCovidCaseCoord({});
        }
  
    });
  });

  const userChangeCenter = (map, ctrCoord, setCtrCoord, changeCenterFalse) => {
    return props.userCenterStatus
      ? changeRadiusCenter(map, ctrCoord, setCtrCoord, changeCenterFalse)
      : null;
  };







  const createGoogleMap = () => {
    //googleMapRef.current access the ref - similar to document.getElementById
    return new window.google.maps.Map(googleMapRef.current, {
      zoom: zoomState,
      center: {
        lat: ctrCoord.lat,
        lng: ctrCoord.lng,
      },
      //   disableDefaultUI: true,
    });
  };

  return (
    <div className="google-map margin-around-large" ref={googleMapRef}></div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    covidCases: state.covidCases, //centralized data for covid cases
    userCenterStatus: state.userSettings.changeUserCenter,
  };
};

export default connect(mapStateToProps, {changeCenterFalse,addCovidCases,increaseIDCovid})(GoogleMap);

// },[latState,lngState]);
//need to fix to get map to render once and wait to get the lng and lat of location

//   const getLocation = ()=>{
//     navigator.geolocation.getCurrentPosition(function(position) {
//         setlatState(position.coords.latitude);
//         setlngtate(position.coords.longitude);
//         console.log("Latitude is :", position.coords.latitude);
//         console.log("Longitude is :", position.coords.longitude);
//         console.log("setLatitude is :", latState);
//         console.log("setLongitude is :", lngState);
//       });
//   };
