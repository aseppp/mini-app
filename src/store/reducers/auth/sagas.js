import { all, put, takeLatest, call } from 'redux-saga/effects';
import { login, register } from '../../../services/auth';
import { LOGIN, REGISTER, SET_STATE } from './actions';
import { setToken } from '../../../Utils';

export function* AUTH_LOGIN(action) {
  yield put({ type: SET_STATE, payload: { loading: true } });

  try {
    const { data } = yield call(login, action.data);
    yield setToken(data.data.token);
    yield put({ type: SET_STATE, payload: { userInfo: data } });
    yield put({ type: SET_STATE, payload: { userInfo: data } });
  } catch ({ response }) {
    yield put({ type: SET_STATE, payload: { error: response?.data } });
  } finally {
    yield put({ type: SET_STATE, payload: { loading: false } });
  }
}
export function* AUTH_REGISTER(action) {
  yield put({ type: SET_STATE, payload: { loading: true } });

  try {
    const { data } = yield call(register, action.data);
    yield put({ type: SET_STATE, payload: { userInfo: data } });
    yield put({ type: SET_STATE, payload: { isAdd: true } });
  } catch ({ response }) {
    yield put({ type: SET_STATE, payload: { error: response?.data } });
  } finally {
    yield put({ type: SET_STATE, payload: { loading: false } });
  }
}

// export function* REFRESH_USER_INFO_F() {
//   yield put({ type: SET_STATE, payload: { loading: true } });
//   try {
//     const dataInfo = yield call(userInfoDefaultToken);
//     yield put({
//       type: SET_STATE,
//       payload: { isRefresh: true, userInfo: dataInfo.data.data }
//     });
//   } catch ({ message: error }) {
//     yield put({ type: SET_STATE, payload: { error } });
//   } finally {
//     yield put({ type: SET_STATE, payload: { loading: false } });
//   }
// }

export default all([
  // takeLatest(REFRESH_USER_INFO, REFRESH_USER_INFO_F),
  takeLatest(REGISTER, AUTH_REGISTER),
  takeLatest(LOGIN, AUTH_LOGIN)
]);
