import { defaultActionCreator } from '../../actionCreator';

export const SET_STATE = 'Movies/SET_STATE';
export const setState = defaultActionCreator(SET_STATE, 'payload');

export const SET_ERROR_FORM = 'Movies/SET_ERROR_FORM';
export const setStateErrorForm = defaultActionCreator(SET_ERROR_FORM, 'error');

export const GET_DISCOVER_MOVIES = 'GET_DISCOVER_MOVIES';
export const getDiscoverMovies = defaultActionCreator(
  GET_DISCOVER_MOVIES,
  'param'
);

export const GET_TRENDING_MOVIES = 'GET_TRENDING_MOVIES';
export const getTrendingMovies = defaultActionCreator(
  GET_TRENDING_MOVIES,
  'param'
);

export const GET_TV_MOVIES = 'GET_TV_MOVIES';
export const getTvMovies = defaultActionCreator(GET_TV_MOVIES, 'param');

export const GET_DETAIL_MOVIES = 'GET_DETAIL_MOVIES';
export const getDetailMovies = defaultActionCreator(GET_DETAIL_MOVIES, 'id');
