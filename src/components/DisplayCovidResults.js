import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

const DisplayCovidResults = (props) => {
  const renderCovidResults = () => {
    if (Object.keys(props.covidAPICases).length === 0) {
      return (
        <div className="covid-results">
          <h3 className="">State: </h3>
          <h3 className="">COVID Positive Cases: </h3>
        </div>
      );
    }
    return (
      <div className="covid-results">
        <h3 className="">State: {props.covidAPICases.state}</h3>
        <h3 className="">COVID Positive Cases: {props.covidAPICases.positive}</h3>
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
