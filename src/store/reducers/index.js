import { combineReducers } from 'redux';

import auth from './auth/reducer';
import quote from './randomQuotes/reducer';
import movies from './movie/reducer';
import todo from './todo/reducer';

const createRootReducer = () =>
  combineReducers({
    auth,
    quote,
    movies,
    todo
  });

export default createRootReducer;
