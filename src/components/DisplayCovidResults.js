import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";


const DisplayCovidResults = () => {
  return <div className="ew">display results</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    covidCases: state.covidCases, //centralized data for covid cases
    covidAPICases: state.covidAPICases,
    userCenterStatus: state.userSettings.changeUserCenter
  };
};

export default connect(mapStateToProps, null)(DisplayCovidResults);
