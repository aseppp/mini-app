import { all, put, takeLatest, call } from 'redux-saga/effects';
import {
  getMoviesDiscover,
  getMoviesTrending,
  getMoviesTV,
  getDetailMovies
} from '../../../services/movie';
import {
  SET_STATE,
  GET_TRENDING_MOVIES,
  GET_DISCOVER_MOVIES,
  GET_TV_MOVIES,
  GET_DETAIL_MOVIES
} from './actions';

export function* GET_DATA_DISCOVER_MOVIES(action) {
  yield put({ type: SET_STATE, payload: { loading: true } });
  try {
    const { data } = yield call(getMoviesDiscover, action.param);
    yield put({ type: SET_STATE, payload: { discoverMovies: data } });
  } catch ({ message: error }) {
    yield put({ type: SET_STATE, payload: { error } });
  } finally {
    yield put({ type: SET_STATE, payload: { loading: false } });
  }
}

export function* GET_DATA_TRENDING_MOVIES(action) {
  yield put({ type: SET_STATE, payload: { loading: true } });
  try {
    const { data } = yield call(getMoviesTrending, action.param);
    yield put({ type: SET_STATE, payload: { trendingMovies: data } });
  } catch ({ message: error }) {
    yield put({ type: SET_STATE, payload: { error } });
  } finally {
    yield put({ type: SET_STATE, payload: { loading: false } });
  }
}

export function* GET_DATA_TV_MOVIES(action) {
  yield put({ type: SET_STATE, payload: { loading: true } });
  try {
    const { data } = yield call(getMoviesTV, action.param);
    yield put({ type: SET_STATE, payload: { tvMovies: data } });
  } catch ({ message: error }) {
    yield put({ type: SET_STATE, payload: { error } });
  } finally {
    yield put({ type: SET_STATE, payload: { loading: false } });
  }
}

export function* GET_DATA_DETAIL_MOVIES(action) {
  yield put({ type: SET_STATE, payload: { loading: true } });
  try {
    const { data } = yield call(getDetailMovies, action.id);
    yield put({ type: SET_STATE, payload: { detailMovies: data } });
  } catch ({ message: error }) {
    yield put({ type: SET_STATE, payload: { error } });
  } finally {
    yield put({ type: SET_STATE, payload: { loading: false } });
  }
}

// export function* GET_DATA_QUOTES_BY_AUTHOR(action) {
//   yield put({ type: SET_STATE, payload: { loading: true } });
//   try {
//     const { data } = yield call(getQuotesByAuthor, action.param);
//     yield put({ type: SET_STATE, payload: { quotesData: data } });
//   } catch ({ message: error }) {
//     yield put({ type: SET_STATE, payload: { error } });
//   } finally {
//     yield put({ type: SET_STATE, payload: { loading: false } });
//   }
// }

export default all([
  takeLatest(GET_DISCOVER_MOVIES, GET_DATA_DISCOVER_MOVIES),
  takeLatest(GET_TRENDING_MOVIES, GET_DATA_TRENDING_MOVIES),
  takeLatest(GET_TV_MOVIES, GET_DATA_TV_MOVIES),
  takeLatest(GET_DETAIL_MOVIES, GET_DATA_DETAIL_MOVIES)
]);
