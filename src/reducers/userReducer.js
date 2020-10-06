import { CHANGE_USER_CENTER_T, CHANGE_USER_CENTER_F} from "../actions/types";

const INITIAL_STATE = {
    changeUserCenter: false
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case CHANGE_USER_CENTER_T:
      return {...state, changeUserCenter: true};
    case CHANGE_USER_CENTER_F :
    return {...state, changeUserCenter: false};
    default:
      return state;
  }
};
