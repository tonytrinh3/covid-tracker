import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
  changeCenterFalse,
  addCovidCases,
  increaseIDCovid,
  getCovidCountWithinRadius,
} from "../actions";

import googleMarker from "./tools/googleMarker";
import renderMarkers from "./tools/renderMarkers";
import radiusCircle from "./tools/radiusCircle";
import changeRadiusCenter from "./tools/changeRadiusCenter";
import covidCaseMarker from "./tools/covidCaseMarker";
import zoomListener from "./tools/zoomListener";
import casesRadiusCounter from "./tools/casesRadiusCounter";

import statesCoord from "./stateCoord";

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
      renderMarkers(googleMap, props.covidCases);
      renderRadiusLogic(googleMap, ctrCoord, radiusState);
      zoomListener(googleMap, setZoomState);
      const countCovidRadius = casesRadiusCounter(
        ctrCoord,
        props.covidCases,
        radiusState
      );
      props.getCovidCountWithinRadius(countCovidRadius);

      userChangeCenter(
        googleMap,
        ctrCoord,
        setCtrCoord,
        props.changeCenterFalse
      );
   
      statesCoord.map((state) => {
          //console.log(state["state"])
          console.log(props.covidAPICases["state"]===state["state"])
        // if (props.covidAPICases["state"] === state["state"]) {
        //   setCtrCoord({ lat:state.lat, lng: state.lng });
        // }
      });

      if (props.addCovidMode === true) {
        covidCaseMarker(googleMap, setCovidCaseCoord);
        if (Object.keys(covidCaseCoord).length !== 0) {
          props.addCovidCases(covidCaseCoord);
          props.increaseIDCovid();
          setCovidCaseCoord({});
        }
      }
    });
  });

  const renderRadiusLogic = (googleMap, ctrCoord, radiusState) => {
    if (props.addCovidMode === false) {
      return radiusCircle(googleMap, ctrCoord, radiusState);
    }
    return null;
  };

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

  return <div className="google-map" ref={googleMapRef}></div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    covidCases: state.covidCases, //centralized data for covid cases
    covidAPICases: state.covidAPICases,
    userCenterStatus: state.userSettings.changeUserCenter,
    addCovidMode: state.userSettings.addCovidMode,
  };
};

export default connect(mapStateToProps, {
  changeCenterFalse,
  addCovidCases,
  increaseIDCovid,
  getCovidCountWithinRadius,
})(GoogleMap);

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
