import { createAction } from 'redux-actions';
import { User } from './types';

const SIGN_UP = 'user/SIGN_UP';
const SIGN_IN = 'user/SIGN_IN';
const GET_CURRENT_USER = 'user/GET_CURRENT_USER';
const SIGN_OUT = 'user/SIGN_OUT';

export const signUp = createAction(SIGN_UP, ({ userId, password }) => ({
  userId,
  password,
}))<User>();

export const signIn = createAction(SIGN_IN, ({ userId, password }) => ({
  userId,
  password,
}))<User>();

export const getCurrentUser = createAction(GET_CURRENT_USER)();

export const signOut = createAction(SIGN_OUT)();
