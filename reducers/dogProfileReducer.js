import { SET_DOG_PROFILE, GET_DOG_PROFILE } from "../actions/types";

const initialState = {
  name: "",
  picture: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_DOG_PROFILE:
      return {
        ...state
      };
    case GET_DOG_PROFILE:
      return {
        ...state
      };
    default:
      return state;
  }
}
