import { API_COVID_CASES} from "../actions/types";


export default (state = [], action) => {
  switch (action.type) {
    case API_COVID_CASES:
        return [...state, ...action.payload];
    default:
      return state;
  }
};
