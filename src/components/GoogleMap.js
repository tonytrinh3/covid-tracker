import React, { useState,useEffect, useRef } from "react";
import googleMarker from "./googleMarker";


const GoogleMap =()=> {

  const[latState,setlatState]= useState(37.795932);
  const[lngState,setlngtate]= useState(-122.393710);

  const googleMapRef = useRef();

  useEffect(()=>{
    //just adding the google map script to the html body
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
        console.log("loaded");
        const googleMap = createGoogleMap();
        googleMarker(googleMap,latState,lngState);
        googleMarker(googleMap,37.792649,-122.392221);
      });
  })

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



  const createGoogleMap = () =>
    //googleMapRef.current access the ref - similar to document.getElementById
    new window.google.maps.Map(googleMapRef.current, {
      zoom: 16,
      center: {
        lat: latState,
        lng: lngState,
      },
      disableDefaultUI: true,
    });

  
    return (
      <div
        className="google-map"
        ref={googleMapRef}
      ></div>
    );

}

export default GoogleMap;