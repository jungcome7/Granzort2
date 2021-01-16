import { UserState, UserAction } from './types';
import { createReducer } from 'typesafe-actions';
import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  GET_CURRENT_USER,
  SIGN_OUT,
} from './actions';

const initialState: UserState = {
  userId:'', 
  error: null,
};

const title = createReducer<UserState, UserAction>(initialState, {
  [SIGN_UP_SUCCESS]: (state, { payload: data }) => ({
    ...state,
    data,
    error: null,
  }),
  [SIGN_UP_FAILURE]: () => initialState,
  [SIGN_IN_SUCCESS]: () => initialState,
  [SIGN_IN_FAILURE]: () => initialState,
  [GET_CURRENT_USER]: () => initialState,
  [SIGN_OUT]: () => initialState,
});

export default title;
