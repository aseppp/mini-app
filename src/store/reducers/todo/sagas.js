import { all, put, takeLatest, call } from 'redux-saga/effects';
import { addtodo, getTodos } from '../../../services/todo';
import { SET_STATE, ADD_TODO, GET_TODOS } from './actions';

export function* ADD_DATA_TODO(action) {
  yield put({ type: SET_STATE, payload: { loading: true } });

  try {
    yield call(addtodo, action.data);
    yield put({ type: SET_STATE, payload: { isAdd: true } });
  } catch ({ response }) {
    yield put({ type: SET_STATE, payload: { error: response?.data } });
  } finally {
    yield put({ type: SET_STATE, payload: { loading: false } });
  }
}

export function* GET_DATA_TODOS(action) {
  yield put({ type: SET_STATE, payload: { loading: true } });
  try {
    const { data } = yield call(getTodos, action.param);
    yield put({ type: SET_STATE, payload: { todos: data } });
  } catch ({ message: error }) {
    yield put({ type: SET_STATE, payload: { error } });
  } finally {
    yield put({ type: SET_STATE, payload: { loading: false } });
  }
}

export default all([
  takeLatest(ADD_TODO, ADD_DATA_TODO, takeLatest(GET_TODOS, GET_DATA_TODOS))
]);
