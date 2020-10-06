import {
  CHANGE_USER_CENTER_T,
  CHANGE_USER_CENTER_F,
  ADD_USER_COVID_REPORT,
  SUBTRACT_USER_COVID_REPORT,
  ADD_COVID_MODE_T,
  ADD_COVID_MODE_F,
} from "../actions/types";

const INITIAL_STATE = {
  changeUserCenter: false,
  addCovidMode: false,
  userCovidReport: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_USER_CENTER_T:
      return { ...state, changeUserCenter: true };
    case CHANGE_USER_CENTER_F:
      return { ...state, changeUserCenter: false };
    case ADD_COVID_MODE_T:
      return { ...state, addCovidMode: true };
    case ADD_COVID_MODE_F:
      return { ...state, addCovidMode: false };
    case ADD_USER_COVID_REPORT:
      return [...state, action.payload];
    default:
      return state;
  }
};
