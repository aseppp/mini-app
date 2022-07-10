import { all, put, takeLatest, call } from 'redux-saga/effects';
import { getQuotes, getQuotesByAuthor } from '../../../services/randomQuotes';
import { SET_STATE, GET_RANDOM_QUOTES, GET_QUOTES_BY_AUTHOR } from './actions';

export function* GET_DATA_QUOTES(action) {
  yield put({ type: SET_STATE, payload: { loading: true } });
  try {
    const { data } = yield call(getQuotes);
    yield put({ type: SET_STATE, payload: { data } });
  } catch ({ message: error }) {
    yield put({ type: SET_STATE, payload: { error } });
  } finally {
    yield put({ type: SET_STATE, payload: { loading: false } });
  }
}

export function* GET_DATA_QUOTES_BY_AUTHOR(action) {
  yield put({ type: SET_STATE, payload: { loading: true } });
  try {
    const { data } = yield call(getQuotesByAuthor, action.param);
    yield put({ type: SET_STATE, payload: { quotesData: data } });
  } catch ({ message: error }) {
    yield put({ type: SET_STATE, payload: { error } });
  } finally {
    yield put({ type: SET_STATE, payload: { loading: false } });
  }
}

export default all([
  takeLatest(GET_RANDOM_QUOTES, GET_DATA_QUOTES),
  takeLatest(GET_QUOTES_BY_AUTHOR, GET_DATA_QUOTES_BY_AUTHOR)
]);
