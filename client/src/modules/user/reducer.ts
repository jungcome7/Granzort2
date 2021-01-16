import { UserState, UserAction } from './types';
import { createReducer } from 'typesafe-actions';
import { SIGN_UP, SIGN_IN, GET_CURRENT_USER, SIGN_OUT } from './actions';

const initialState: UserState = [];
