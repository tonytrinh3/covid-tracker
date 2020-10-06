import { combineReducers } from "redux";
import covidCasesReducer from './covidCasesReducer';



export default combineReducers({
  covidCases: covidCasesReducer,
});
