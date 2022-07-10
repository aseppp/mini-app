import { all } from 'redux-saga/effects';

import auth from '../reducers/auth/sagas';
import quote from '../reducers/randomQuotes/sagas';

export default function* rootSaga() {
  yield all([auth, quote]);
}
