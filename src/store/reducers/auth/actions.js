import { defaultActionCreator } from '../../actionCreator';

export const LOGIN = 'auth/LOGIN';
export const login = defaultActionCreator(LOGIN, 'data');

export const REGISTER = 'auth/REGISTER';
export const registerAuth = defaultActionCreator(REGISTER, 'data');

export const SET_STATE = 'auth/SET_STATE';
export const setState = defaultActionCreator(SET_STATE, 'payload');

export const GET_USER_INFO = 'GET_USER_INFO';
export const getUserInfo = defaultActionCreator(GET_USER_INFO);

export const REFRESH_USER_INFO = 'REFRESH_USER_INFO';
export const refreshUserInfo = defaultActionCreator(REFRESH_USER_INFO);
