import { combineReducers } from 'redux';

import auth from './auth/reducer';
import quote from './randomQuotes/reducer';

const createRootReducer = () =>
  combineReducers({
    auth,
    quote
  });

export default createRootReducer;
