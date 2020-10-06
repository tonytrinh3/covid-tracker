import React, { Component } from "react";
import GoogleMap from "./components/GoogleMap";
import UserInput from "./components/UserInput";
import SearchBar from "./components/SearchBar";
import DisplayCovidResults from "./components/DisplayCovidResults";
import "./sass/main.scss";

class App extends Component {
  render() {
    return (
      <div className="main-page">
        <header className="banner"></header>
        <div className="main-page__body">
          <h1 className="main-page__header">COVID Tracker</h1>
          <SearchBar />
          <DisplayCovidResults />
          <GoogleMap />
          <UserInput />
        </div>

        <footer className="footer"></footer>
      </div>
    );
  }
}

export default App;
