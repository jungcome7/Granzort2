import { call, put, takeLatest } from 'redux-saga/effects';
import { SIGN_UP, SIGN_IN } from './actions';
import API from '../../apis';

export default function createRequestSaga(type: any, request: any) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action: any) {
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
  };
}

const signUpSaga = createRequestSaga(SIGN_UP, API.User.signUp);

export function* userSaga() {
  yield takeLatest(SIGN_UP, signUpSaga);
}
