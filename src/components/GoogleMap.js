import React, { useEffect, useRef } from "react";
import GoogleMarker from "./googleMarker";

const GoogleMap =()=> {

  const googleMapRef = useRef();

  useEffect(()=>{
    //just adding the google map script to the html body
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
        console.log("loaded");
        const googleMap = createGoogleMap();
        GoogleMarker(googleMap);
      });

  })


  const createGoogleMap = () =>
    //googleMapRef.current access the ref - similar to document.getElementById
    new window.google.maps.Map(googleMapRef.current, {
      zoom: 16,
      center: {
        lat: 43.642567,
        lng: -79.387054,
      },
      disableDefaultUI: true,
    });

  
    return (
      <div
        className="google-map"
        ref={googleMapRef}
        style={{ width: "400px", height: "300px" }}
      ></div>
    );

}

export default GoogleMap;
