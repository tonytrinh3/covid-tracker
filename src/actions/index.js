import {
  ADD_CASES,
  SUBTRACT_CASES,
  CHANGE_USER_CENTER_T,
  CHANGE_USER_CENTER_F,
  ADD_USER_COVID_REPORT,
  SUBTRACT_USER_COVID_REPORT,
  INCREASE_ID_COVID_DATA,
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
