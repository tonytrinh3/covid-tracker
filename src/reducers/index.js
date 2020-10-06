import { combineReducers } from "redux";
import covidCasesReducer from './covidCasesReducer';
import userReducer from './userReducer';
import idCovidDataReducer from './idCovidDataReducer';



export default combineReducers({
  covidCases: covidCasesReducer,
  userSettings: userReducer,
  idCovidData:idCovidDataReducer
});
