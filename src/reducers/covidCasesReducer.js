import { ADD_CASES, SUBTRACT_CASES } from "../actions/types";

const INITIAL_STATE = [
  { lat: 37.792649, lng: -122.392221 },
  { lat: 37.791703, lng: -122.399151 },
  { lat: 37.792604, lng: -122.392988 },
];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CASES:
      return [...state, action.payload];
    case SUBTRACT_CASES:
      return [...state, action.payload];
    default:
      return state;
  }
};
