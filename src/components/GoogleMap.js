import React, { useState, useEffect, useRef } from "react";
import googleMarker from "./tools/googleMarker";
import renderMarkers from './tools/renderMarkers';
import radiusCircle from "./tools/radiusCircle";
import changeCenter from './tools/changeCenter';
import zoomListener from './tools/zoomListener';


const GoogleMap = () => {
  const [ctrCoord, setCtrCoord] = useState({ lat: 37.795932, lng: -122.39371 });

  //TODO: to need change map zoom based on radius
  const [radiusState, setRadiusState] = useState(500); //radius map in meters
  const [zoomState, setZoomState] = useState(16); //radius map in meters

  const googleMapRef = useRef();

  const covidMarkers = [
    { lat: 37.792649, lng: -122.392221 },
    { lat: 37.791703, lng: -122.399151 },
    { lat: 37.792604, lng: -122.392988 },
  ];

  useEffect(() => {
    //just adding the google map script to the html body
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      const googleMap = createGoogleMap();
      googleMarker(googleMap, ctrCoord);
      renderMarkers(googleMap, ctrCoord, covidMarkers,radiusState);
      radiusCircle(googleMap, ctrCoord, radiusState);
      changeCenter(googleMap,ctrCoord,setCtrCoord);
      zoomListener(googleMap,setZoomState);

    });
  });


 

  const createGoogleMap = () =>{
    //googleMapRef.current access the ref - similar to document.getElementById
    return new window.google.maps.Map(googleMapRef.current, {
        zoom: zoomState,
        center: {
          lat: ctrCoord.lat,
          lng: ctrCoord.lng,
        },
        //   disableDefaultUI: true,
      });
  }



  return <div className="google-map" ref={googleMapRef}></div>;
};

export default GoogleMap;

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
