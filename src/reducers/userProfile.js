import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE
} from "../actionsConsts";

const initialUserState = {
  firsName: null,
  lastName: null,
  email: null,
};

export const userProfile = (state = initialUserState, action) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.profile,
        error: null,
        loading: false,
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Profile request is fail'
      };
    default:
      return state;
  }
};