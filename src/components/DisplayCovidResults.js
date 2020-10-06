import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

const DisplayCovidResults = (props) => {
  const renderCovidResults = () => {
    if (Object.keys(props.covidAPICases).length === 0) {
      return (
        <div className="covid-results">
          <p className="">State: </p>
          <p className="">COVID Positive Cases: </p>
        </div>
      );
    }
    return (
      <div className="covid-results">
        <p className="">State: {props.covidAPICases.state}</p>
        <p className="">COVID Positive Cases: {props.covidAPICases.positive}</p>
      </div>
    );
  };

  return <React.Fragment>{renderCovidResults()}</React.Fragment>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    covidCases: state.covidCases, //centralized data for covid cases
    covidAPICases: state.covidAPICases,
    userCenterStatus: state.userSettings.changeUserCenter,
  };
};

export default connect(mapStateToProps, null)(DisplayCovidResults);
