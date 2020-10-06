import React, { useState, useEffect, useRef } from "react";
import {changeCenterTrue,changeCenterFalse} from '../actions';
import {connect} from 'react-redux';

const UserInput = (props)=>{

    const changeCenterStatus = ()=>{
        props.changeCenterTrue();
        console.log(props.changeUserCenter);
    }

    const newCovidCase = () =>{
        return <button onClick = {()=>props.changeCenterTrue()} className="">Choose New Center</button>
    }





    return (
        <div className="user-input margin-around-large">
            hi
            <button onClick = {()=>props.changeCenterTrue()} className="">Choose New Center</button>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
      covidCases: state.covidCases, //centralized data for covid cases
      changeUserCenter: state.userSettings.changeUserCenter,
    };
  };


export default connect(mapStateToProps, {changeCenterTrue,changeCenterFalse})(UserInput);