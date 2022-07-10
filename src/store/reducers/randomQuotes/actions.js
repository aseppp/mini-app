import { defaultActionCreator } from '../../actionCreator';

export const SET_STATE = 'Quotes/SET_STATE';
export const setState = defaultActionCreator(SET_STATE, 'payload');

export const SET_ERROR_FORM = 'Quotes/SET_ERROR_FORM';
export const setStateErrorForm = defaultActionCreator(SET_ERROR_FORM, 'error');

export const GET_RANDOM_QUOTES = 'GET_RANDOM_QUOTES';
export const getRandomQuotes = defaultActionCreator(GET_RANDOM_QUOTES);

export const GET_QUOTES_BY_AUTHOR = 'GET_QUOTES_BY_AUTHOR';
export const getRandomQuotesByAuthor = defaultActionCreator(
  GET_QUOTES_BY_AUTHOR,
  'param'
);
