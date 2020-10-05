import React, { Component } from 'react'
import GoogleMap from './components/GoogleMap';
import './sass/main.scss';

class App extends Component{

  render(){
    return(
      <div>
        <GoogleMap/>

      </div>
    )
  }
}

export default App;
