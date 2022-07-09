import { all } from 'redux-saga/effects';

import auth from '../reducers/auth/sagas';
export default function* rootSaga() {
  yield all([auth]);
}
