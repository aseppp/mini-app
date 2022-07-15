import { defaultActionCreator } from '../../actionCreator';

export const SET_STATE = 'Todo/SET_STATE';
export const setState = defaultActionCreator(SET_STATE, 'payload');

export const SET_ERROR_FORM = 'Todo/SET_ERROR_FORM';
export const setStateErrorForm = defaultActionCreator(SET_ERROR_FORM, 'error');

export const ADD_TODO = 'ADD_TODO';
export const addTodo = defaultActionCreator(ADD_TODO, 'data');

export const GET_TODOS = 'GET_TODOS';
export const getTodos = defaultActionCreator(GET_TODOS, 'param');

export const DELETE_TODOS = 'DELETE_TODOS';
export const deleteTodos = defaultActionCreator(DELETE_TODOS, 'id');

export const EDIT_TODO = 'EDIT_TODO';
export const editTodo = defaultActionCreator(EDIT_TODO, 'id', 'data');

export const GET_TODO_BY_ID = 'GET_TODO_BY_ID';
export const getTodoById = defaultActionCreator(GET_TODO_BY_ID, 'id');
