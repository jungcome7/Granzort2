import { createAction } from 'typesafe-actions';
import { User } from './types';

export const SIGN_UP = 'user/SIGN_UP';
export const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'user/SIGN_UP_FAILURE';

export const SIGN_IN = 'user/SIGN_IN';
export const SIGN_IN_SUCCESS = 'user/SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'user/SIGN_IN_FAILURE';

export const GET_CURRENT_USER = 'user/GET_CURRENT_USER';
export const SIGN_OUT = 'user/SIGN_OUT';

export const signUp = createAction(SIGN_UP, ({ userId, password }: any) => ({
  userId,
  password,
}))();

export const signUpSuccess = createAction(
  SIGN_UP_SUCCESS,
  (payload: any) => payload,
)();

export const signUpFailure = createAction(
  SIGN_UP_FAILURE,
  (payload: any) => payload,
)();

export const signIn = createAction(SIGN_IN, ({ userId, password }: any) => ({
  userId,
  password,
}))();
export const signInSuccess = createAction(SIGN_IN_SUCCESS)();
export const signInFailure = createAction(SIGN_IN_FAILURE)();

export const getCurrentUser = createAction(GET_CURRENT_USER)();

export const signOut = createAction(SIGN_OUT)();
