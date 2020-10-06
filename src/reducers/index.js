import { combineReducers } from "redux";
import covidCasesReducer from './covidCasesReducer';
import userReducer from './userReducer';
import idCovidDataReducer from './idCovidDataReducer';
import covidAPICases from './covidAPICasesReducer';
import covidCountWithinRadius from './covidCountWithinRadius';

export default combineReducers({
  covidCases: covidCasesReducer,
  covidAPICases: covidAPICases,
  userSettings: userReducer,
  idCovidData:idCovidDataReducer,
  covidCountWithinRadius: covidCountWithinRadius
});
