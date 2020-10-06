import React, { Component } from "react";
import GoogleMap from "./components/GoogleMap";
import UserInput from "./components/UserInput";
import SearchBar from "./components/SearchBar";
import DisplayCovidResults from './components/DisplayCovidResults';
import "./sass/main.scss";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="">COVID Tracker</h1>
        <SearchBar />
        <DisplayCovidResults/>
        <GoogleMap />
        <UserInput />
      </div>
    );
  }
}

export default App;
