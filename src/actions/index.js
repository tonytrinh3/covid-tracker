import {
  ADD_CASES,
  SUBTRACT_CASES,
  API_COVID_CASES,
  CHANGE_USER_CENTER_T,
  CHANGE_USER_CENTER_F,
  COVID_COUNT_WITHIN_RADIUS,
  ADD_USER_COVID_REPORT,
  SUBTRACT_USER_COVID_REPORT,
  INCREASE_ID_COVID_DATA,
  ADD_COVID_MODE_T,
  ADD_COVID_MODE_F,
} from "./types";

export const changeCenterTrue = () => {
  return {
    type: CHANGE_USER_CENTER_T,
  };
};

export const changeCenterFalse = () => {
  return {
    type: CHANGE_USER_CENTER_F,
  };
};

export const addCovidModeTrue = () => {
  return {
    type: ADD_COVID_MODE_T,
  };
};

export const addCovidModeFalse = () => {
  return {
    type: ADD_COVID_MODE_F,
  };
};

export const getCovidAPICases = (covidAPIData) => {
  return {
    type: API_COVID_CASES,
    payload: covidAPIData
  };
};

export const getCovidCountWithinRadius = (covidCount) => {
  return {
    type: COVID_COUNT_WITHIN_RADIUS,
    payload: covidCount
  };
};





export const addCovidCases = (covidData) => {
  return (dispatch, getState) => {
    const { id } = getState().idCovidData;

    console.log(covidData);
    console.log(id);

    //need the dispatch to call async getState from another state within the market
    dispatch({ type: ADD_CASES, payload: { ...covidData, id } });
  };
};

export const increaseIDCovid = () => {
  return {
    type: INCREASE_ID_COVID_DATA,
    payload: 1,
  };
};
