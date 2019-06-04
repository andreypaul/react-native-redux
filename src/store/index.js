import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userProfile } from './../reducers/userProfile'
import { contacts } from './../reducers/contacts'

const rootReducer = combineReducers( {
  userProfile,
  contacts
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;