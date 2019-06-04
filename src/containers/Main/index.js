import React from 'react';
import {connect} from 'react-redux';
import {getContacts} from "../../actions";
import Main from './../../screens/Main'

const mapStateToProps = state => {
    let { contacts } = state;
    return {
        contacts: contacts,
        isLoading: contacts.loading,
        error: contacts.error
    }
}

const mapDispatchToProps = {
    getContacts: getContacts
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);