import { defaultActionCreator } from '../../actionCreator';

export const SET_STATE = 'Todo/SET_STATE';
export const setState = defaultActionCreator(SET_STATE, 'payload');

export const SET_ERROR_FORM = 'Todo/SET_ERROR_FORM';
export const setStateErrorForm = defaultActionCreator(SET_ERROR_FORM, 'error');

export const ADD_TODO = 'ADD_TODO';
export const addTodo = defaultActionCreator(ADD_TODO, 'data');

export const GET_TODOS = 'GET_TODOS';
export const getTodos = defaultActionCreator(GET_TODOS, 'param');
