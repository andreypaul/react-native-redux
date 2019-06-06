import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userProfile } from './../reducers/userProfile'
import { contacts } from './../reducers/contacts'
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers( {
  userProfile,
  contacts
});

const configureStore = () => createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export default configureStore;