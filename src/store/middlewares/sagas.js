import { all } from 'redux-saga/effects';

import auth from '../reducers/auth/sagas';
import quote from '../reducers/randomQuotes/sagas';
import movies from '../reducers/movie/sagas';
import todo from '../reducers/todo/sagas';

export default function* rootSaga() {
  yield all([auth, quote, movies, todo]);
}
