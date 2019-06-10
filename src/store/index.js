import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userProfile } from './../reducers/userProfile'
import { contacts } from './../reducers/contacts'
import { updateProfile } from "./../reducers/updateProfile";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers( {
  userProfile,
  updateProfile,
  contacts,
});

const configureStore = () => createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export default configureStore;