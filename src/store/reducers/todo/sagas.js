import { all, put, takeLatest, call } from 'redux-saga/effects';
import {
  addtodo,
  getTodos,
  deleteTodo,
  editTodo,
  getTodoById
} from '../../../services/todo';
import {
  SET_STATE,
  ADD_TODO,
  GET_TODOS,
  SET_ERROR_FORM,
  DELETE_TODOS,
  EDIT_TODO,
  GET_TODO_BY_ID
} from './actions';

export function* ADD_DATA_TODO(action) {
  yield put({ type: SET_STATE, payload: { loading: true } });
  try {
    yield call(addtodo, action.data);
    yield put({ type: SET_STATE, payload: { isAdd: true } });
  } catch ({ response }) {
    yield put({ type: SET_ERROR_FORM, error: response?.data });
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

export function* DELETE_DATA_TODO(action) {
  yield put({ type: SET_STATE, payload: { loading: true } });
  try {
    yield call(deleteTodo, action.id);
    yield put({ type: SET_STATE, payload: { isDelete: true } });
  } catch ({ message: error }) {
    yield put({ type: SET_STATE, payload: { error } });
  } finally {
    yield put({
      type: SET_STATE,
      payload: { loading: false }
    });
  }
}

export function* EDIT_DATA_TODO(action) {
  yield put({ type: SET_STATE, payload: { loading: true } });
  try {
    yield call(editTodo, action.data, action.id);

    yield put({ type: SET_STATE, payload: { isUpdate: true } });
  } catch ({ response }) {
    yield put({ type: SET_ERROR_FORM, error: response?.data });
  } finally {
    yield put({ type: SET_STATE, payload: { loading: false } });
  }
}

export function* GET_DATA_TODO_BY_ID(action) {
  yield put({ type: SET_STATE, payload: { loading: true } });
  try {
    const { data } = yield call(getTodoById, action.id);
    yield put({ type: SET_STATE, payload: { detail: data } });
  } catch ({ message: error }) {
    yield put({ type: SET_STATE, payload: { error } });
  } finally {
    yield put({ type: SET_STATE, payload: { loading: false } });
  }
}

export default all([
  takeLatest(ADD_TODO, ADD_DATA_TODO),
  takeLatest(GET_TODOS, GET_DATA_TODOS),
  takeLatest(DELETE_TODOS, DELETE_DATA_TODO),
  takeLatest(EDIT_TODO, EDIT_DATA_TODO),
  takeLatest(GET_TODO_BY_ID, GET_DATA_TODO_BY_ID)
]);
