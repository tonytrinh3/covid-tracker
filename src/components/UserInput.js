import React, { useState, useEffect, useRef } from "react";
import {
  changeCenterTrue,
  changeCenterFalse,
  addCovidModeTrue,
  addCovidModeFalse,
} from "../actions";
import { connect } from "react-redux";

const UserInput = (props) => {
  const renderAddCovidBtn = () => {
    if (props.addCovidMode === false) {
      return (
        <button onClick={() => props.addCovidModeTrue()} className="">
          Report New Covid Case?
        </button>
      );
    } else {
      return (
        <button onClick={() => props.addCovidModeFalse()} className="">
          Finish Reporting Cases?
        </button>
      );
    }
  };

  const renderChangeCenterBtn = () => {
    if (props.addCovidMode === false) {
      return (
        <button onClick={() => props.changeCenterTrue()} className="">
          Choose New Center
        </button>
      );
    } else {
      return (
        <button className="">Choose New Center</button> //supposed to be greyed out
      );
    }
  };

  return (
    <div className="user-input">

      <br />
      {renderChangeCenterBtn()}
      <br />
      {renderAddCovidBtn()}
      <p className="">Covid cases around you: {props.covidCountWithinRadius}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    covidCases: state.covidCases, //centralized data for covid cases
    changeUserCenter: state.userSettings.changeUserCenter,
    addCovidMode: state.userSettings.addCovidMode,
    covidCountWithinRadius:state.covidCountWithinRadius
  };
};

export default connect(mapStateToProps, {
  changeCenterTrue,
  changeCenterFalse,
  addCovidModeTrue,
  addCovidModeFalse,
})(UserInput);
