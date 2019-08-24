import {
  ADD_MATCHED_USER,
  REMOVE_MATCHED_USER,
  SET_SIGNED_UP,
  SEND_MESSAGE,
  GET_MESSAGES,
  SET_USER_PROFILE,
  GET_USER_PROFILE,
  SET_DOG_PROFILE,
  GET_DOG_PROFILE
} from "./types";

export const addMatchedUser = (username, name, picture) => dispatch => {
  dispatch({
    type: ADD_MATCHED_USER,
    payload: { username, name, picture }
  });
};

export const removeMatchedUser = username => dispatch => {
  dispatch({
    type: REMOVE_MATCHED_USER,
    payload: username
  });
};

export const setSignedUp = signedUp => dispatch => {
  dispatch({
    type: SET_SIGNED_UP,
    payload: signedUp
  });
};

export const sendMessage = (username, _id, createdAt, text, user) => dispatch => {
  dispatch({
    type: SEND_MESSAGE,
    payload: { username, _id, createdAt, text, user }
  });
};

export const getMessages = username => dispatch => {
  dispatch({
    type: GET_MESSAGES,
    payload: username
  });
};

export const setUserProfile = (username, name, picture) => dispatch => {
  dispatch({
    type: SET_USER_PROFILE,
    payload: {
      username,
      name,
      picture
    }
  });
};

export const getUserProfile = username => dispatch => {
  dispatch({
    type: GET_USER_PROFILE,
    payload: username
  });
};

export const setDogProfile = (name, picture) => dispatch => {
  dispatch({
    type: SET_DOG_PROFILE,
    payload: {
      name,
      picture
    }
  });
};

export const getDogProfile = () => dispatch => {
  dispatch({
    type: GET_DOG_PROFILE
  });
};
