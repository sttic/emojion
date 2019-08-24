import { combineReducers } from "redux";
import matchReducer from "./matchReducer";
import signUpReducer from "./signUpReducer";
import chatReducer from "./chatReducer";
import userProfileReducer from "./userProfileReducer";
import dogProfileReducer from "./dogProfileReducer";

export default combineReducers({
  matches: matchReducer,
  signedUp: signUpReducer,
  chat: chatReducer,
  userProfile: userProfileReducer,
  dogProfile: dogProfileReducer
});
