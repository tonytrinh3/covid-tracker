import { combineReducers } from "redux";
import covidCasesReducer from './covidCasesReducer';
import userReducer from './userReducer';



export default combineReducers({
  covidCases: covidCasesReducer,
  userSettings: userReducer
});
