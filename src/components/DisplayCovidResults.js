import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { changeCenterFalse, addCovidCases, increaseIDCovid } from "../actions";

const DisplayCovidResults = () => {
  return <div className="ew">display results</div>;
};

const mapStateToProps = (state) => {
  //   console.log(state);
  return {
    covidCases: state.covidCases, //centralized data for covid cases
    userCenterStatus: state.userSettings.changeUserCenter,
    addCovidMode: state.userSettings.addCovidMode,
  };
};

export default connect(mapStateToProps, {
  changeCenterFalse,
  addCovidCases,
  increaseIDCovid,
})(DisplayCovidResults);
