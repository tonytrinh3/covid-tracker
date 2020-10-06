import {
  CHANGE_USER_CENTER_T,
  CHANGE_USER_CENTER_F,
  ADD_USER_COVID_REPORT,
  SUBTRACT_USER_COVID_REPORT
} from "../actions/types";

const INITIAL_STATE = {
  changeUserCenter: false,
  userCovidReport: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_USER_CENTER_T:
      return { ...state.changeUserCenter, changeUserCenter: true };
    case CHANGE_USER_CENTER_F:
      return { ...state.changeUserCenter, changeUserCenter: false };
    case ADD_USER_COVID_REPORT:
      return [...state.userCovidReport, action.payload];
    default:
      return state;
  }
};
