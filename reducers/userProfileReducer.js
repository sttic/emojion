import { SET_USER_PROFILE, GET_USER_PROFILE } from "../actions/types";

const initialState = {
  username: "",
  name: "",
  picture: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state
      };
    case GET_USER_PROFILE:
      return {
        ...state
      };
    default:
      return state;
  }
}
