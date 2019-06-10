import {
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE
} from "../actionsConsts";

const initialState = {
    data: {
        name: "",
        firsName: "",
        lastName: "",
        email: ""
    },
    error: null,
    loading: false,
};

export const updateProfile = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                ...action.updatedProfile,
                error: null,
                loading: false,
            };
        case UPDATE_PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: 'Profile request is fail'
            };
        default:
            return state;
    }
};