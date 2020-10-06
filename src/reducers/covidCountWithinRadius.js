import { COVID_COUNT_WITHIN_RADIUS} from "../actions/types";


export default (state = 0, action) => {
  switch (action.type) {
    case COVID_COUNT_WITHIN_RADIUS:
        return state + action.payload;
    default:
      return state;
  }
};
