import {
  ADD_CASES,
  SUBTRACT_CASES,
  CHANGE_USER_CENTER_T,
  CHANGE_USER_CENTER_F,
} from "./types";

export const changeCenterTrue = () => {
    console.log('change true');
  return {
    type: CHANGE_USER_CENTER_T
  };
};

export const changeCenterFalse = () => {
    console.log('change false');
    return {
      type: CHANGE_USER_CENTER_F
    };
  };
  