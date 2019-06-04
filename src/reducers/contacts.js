import {
    GET_CONTACTS_REQUEST,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_FAILURE,
} from "../actionsConsts";

const initialContactsState = {
    data: [],
    loading: false,
    error: null
}

export const contacts = (state = initialContactsState, action) => {
    switch (action.type) {
        case GET_CONTACTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_CONTACTS_SUCCESS:
            return {
                ...state,
                data: action.contacts,
                error: null,
                loading: false,
            };
        case GET_CONTACTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.e
            };
        default:
            return state;
    }
}