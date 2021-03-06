import {
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILURE,

    GET_CONTACTS_REQUEST,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_FAILURE,

    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE
} from "../actionsConsts";
import userApi from "../api/client";
import {user} from "./../consts";
import {dropdownAlert} from "../App";

export function getProfile() {

    const request = () => {
        return {type: GET_PROFILE_REQUEST};
    }

    const success = profile => {
        return {type: GET_PROFILE_SUCCESS, profile};
    }

    const failure = () => {
        return {type: GET_PROFILE_FAILURE};
    }

    return dispatch => {
        let profile = user;
        dispatch(request());
        setTimeout(() => {
            dispatch(success(profile));
            dropdownAlert.alertWithType("info", 'Good', 'Profile was profile');
        }, 2000);
    };
}

export const updateProfile = data => {

    const request = () => {
        return {type: UPDATE_PROFILE_REQUEST}
    }

    const success = updatedProfile => {
        return {type: UPDATE_PROFILE_SUCCESS, updatedProfile}
    }

    const failure = (e) => {
        return {type: UPDATE_PROFILE_FAILURE, e}
    }

    return async dispatch => {
        dispatch(request());
        try {
            let updatedProfile = await userApi.updateProfile(data);
            dispatch(success(updatedProfile));
            dropdownAlert.alertWithType("success", 'Good', 'Profile was updated!!!');
        }
        catch (e) {
            dispatch(failure(e));
            dropdownAlert.alertWithType("error", 'Error', e);
        }
    }
}

export function getContacts() {

    const request = () => {
        return {type: GET_CONTACTS_REQUEST}
    }

    const success = contacts => {
        return {type: GET_CONTACTS_SUCCESS, contacts}
    }

    const failure = e => {
        return {type: GET_CONTACTS_FAILURE, e}
    }

    return async dispatch => {
        dispatch(request());
        try {
            let contacts = await userApi.getUsers();
            dispatch(success(contacts));
            dropdownAlert.alertWithType("success", 'Good', 'Contacts was updated');
        } catch (e) {
            dispatch(failure(e));
            dropdownAlert.alertWithType("error", 'Error', e);
        }
    }
}
