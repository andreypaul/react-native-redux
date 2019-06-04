import React from 'react';
import {connect} from 'react-redux';
import {getProfile} from "../../actions";
import Profile from './../../screens/Profile';

const mapStateToProps = state => {
    let {userProfile} = state;
    return {
        user: userProfile,
        isLoading: userProfile.loading
    }
};

const mapDispatchToProps = {
    getProfile: getProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);