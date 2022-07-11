import { combineReducers } from 'redux';

import auth from './auth/reducer';
import quote from './randomQuotes/reducer';
import movies from './movie/reducer';

const createRootReducer = () =>
  combineReducers({
    auth,
    quote,
    movies
  });

export default createRootReducer;
