import { ADD_MATCHED_USER, REMOVE_MATCHED_USER } from "../actions/types";

const initialState = {
  matchedUsers: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_MATCHED_USER:
      return {
        ...state
      };
    case REMOVE_MATCHED_USER:
      return {
        ...state
      };
    default:
      return state;
  }
}
