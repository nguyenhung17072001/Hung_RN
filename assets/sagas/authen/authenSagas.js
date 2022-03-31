import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { logInFailure, logInSuccess, registerFailure, registerSuccess } from '../../store/action';
import { logIn } from '../services/requesLogin';
import { register } from '../services/requestRegistration';




export function* logInWithCredentials({ payload: { email, password } }) {
    try {
      const userInfor = yield logIn(email, password);
      yield put(logInSuccess(userInfor));
    } catch (error) {
      yield put(logInFailure(error));
    }
  }


export function* registerWithCredentials({ payload: { email, password, phonenumber, username } }) {
    try {
      yield register(email, password);
      yield put(registerSuccess({ email, password, phonenumber, username }));
    } catch (error) {
      yield put(registerFailure(error));
    }
}
  

export function* logInAfterRegister({ payload: { email, password } }) {
    yield logInWithCredentials({ payload: { email, password } });
}
  

export function* onLogInStart() {
    yield takeLatest('LOGIN_START', logInWithCredentials);
}


export function* onRegisterStart() {
    yield takeLatest('REGISTER_START', registerWithCredentials);
}
 

export function* onRegisterSuccess() {
    yield takeLatest('REGISTER_SUCCESS', logInAfterRegister);
}

export function* authenSagas() {
    yield all([
      call(onLogInStart),
      call(onRegisterStart),
      call(onRegisterSuccess),
    ]);
}