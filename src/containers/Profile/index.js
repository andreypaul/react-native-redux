import React from 'react';
import {connect} from 'react-redux';
import {getProfile} from "../../actions";
import {updateProfile} from "../../actions";
import Profile from './../../screens/Profile';

const mapStateToProps = state => {
    let {userProfile, updateProfile} = state;
    return {
        user: userProfile,
        isLoading: userProfile.loading || updateProfile.loading,
        updatedProfile: updateProfile
    }
};

const mapDispatchToProps = {
    getProfile: getProfile,
    updateProfile: data => updateProfile(data)
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);