import React, { useState, useEffect, useRef } from "react";
import googleMarker from "./googleMarker";
import radiusCircle from "./radiusCircle";
import calculateDistance from "./calculateDistance";

const GoogleMap = () => {
  const [ctrCoord, setCtrCoord] = useState({ lat: 37.795932, lng: -122.39371 });

  //TODO: to need change map zoom based on radius
  const [radiusState, setradiusState] = useState(500); //radius map in meters

  const googleMapRef = useRef();

  const ozumo = { lat: 37.792649, lng: -122.392221 };
  const philz = { lat: 37.791703, lng: -122.399151 };

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
      console.log("loaded");
      const googleMap = createGoogleMap();
      googleMarker(googleMap, ctrCoord.lat, ctrCoord.lng);
      renderMarkers(googleMap, ctrCoord, covidMarkers);
      radiusCircle(googleMap, ctrCoord.lat, ctrCoord.lng, radiusState);
    });
  });

  const renderMarkers = (map, centerPt, markers) => {
    return markers.map((pt) => {
      //if the distance of the markers are within the radius, then it get render
      if (
        calculateDistance(centerPt.lat, centerPt.lng, pt.lat, pt.lng) <=
        radiusState
      ) {
        return googleMarker(map, pt.lat, pt.lng);
      }
      return null;
    });
  };

  const createGoogleMap = () =>
    //googleMapRef.current access the ref - similar to document.getElementById
    new window.google.maps.Map(googleMapRef.current, {
      zoom: 16,
      center: {
        lat: ctrCoord.lat,
        lng: ctrCoord.lng,
      },
      //   disableDefaultUI: true,
    });

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
