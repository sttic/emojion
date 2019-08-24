import { SET_SIGNED_UP } from "../actions/types";

const initialState = {
  signedUp: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SIGNED_UP:
      return {
        ...state
      };
    default:
      return state;
  }
}
