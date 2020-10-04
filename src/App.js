import React, { Component, createRef } from 'react'

class App extends Component{

  constructor(props){
    super(props);
    this.googleMapRef = createRef(); // may or may not need this tbh
  }


  // googleMapRef = createRef();


  componentDidMount() {
    //just adding the google map script to the html body
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP}&libraries=places`;
    window.document.body.appendChild(googleMapScript);


    googleMapScript.addEventListener('load',()=> {
      console.log("loadined");
      this.googleMap = this.createGoogleMap()
      this.marker = this.createMarker()
    });
  }

  createGoogleMap = () =>
  //this.googleMapRef.current access the ref - similar to document.getElementById
    new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 16,
      center: {
        lat: 43.642567,
        lng: -79.387054,
      },
      disableDefaultUI: true,
    });

  createMarker = () =>
    new window.google.maps.Marker({
      position: { lat: 43.642567, lng: -79.387054 },
      map: this.googleMap,
    });



  render(){
    return(
      <div
        id="google-map"
        ref={this.googleMapRef}
        style={{ width: '400px', height: '300px' }}
      >
  
        awef
      </div>
    )
  }
}

export default App;
