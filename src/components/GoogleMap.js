import React, { useState,useEffect, useRef } from "react";
import googleMarker from "./googleMarker";
import radiusCircle from './radiusCircle';
import calculateDistance from './calculateDistance';


const GoogleMap =()=> {

  const[ctrCoord,setCtrCoord]= useState({lat:37.795932, lng:-122.393710});

  //TODO: to need change map zoom based on radius
  const[radiusState,setradiusState]= useState(500); //radius map in meters

  const googleMapRef = useRef();

  const ozumo = {lat:37.792649, lng:-122.392221};
  const philz = {lat:37.791703,lng:-122.399151 };

  useEffect(()=>{
    //just adding the google map script to the html body
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
        console.log("loaded");
        const googleMap = createGoogleMap();
        googleMarker(googleMap,ctrCoord.lat,ctrCoord.lng);
        googleMarker(googleMap,ozumo.lat,ozumo.lng);
        googleMarker(googleMap,37.792604,-122.392988);
        radiusCircle(googleMap,ctrCoord.lat,ctrCoord.lng,radiusState);
        calculateDistance(ctrCoord.lat,ctrCoord.lng,ozumo.lat,ozumo.lng)
      });
  })



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

  
    return (
      <div
        className="google-map"
        ref={googleMapRef}
      ></div>
    );

}

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