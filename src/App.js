import React, { Component } from 'react'
import GoogleMap from './components/GoogleMap';
import UserInput from './components/UserInput';
import './sass/main.scss';

class App extends Component{

  render(){
    return(
      <div>
        <GoogleMap/>
        <UserInput/>
      </div>
    )
  }
}

export default App;
