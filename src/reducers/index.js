import { combineReducers } from "redux";
import covidCasesReducer from './covidCasesReducer';
import userReducer from './userReducer';
import idCovidDataReducer from './idCovidDataReducer';
import covidAPICases from './covidAPICasesReducer';


export default combineReducers({
  covidCases: covidCasesReducer,
  covidAPICases: covidAPICases,
  userSettings: userReducer,
  idCovidData:idCovidDataReducer
});
