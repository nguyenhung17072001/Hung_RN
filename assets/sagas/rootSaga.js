import { fork, all, takeEvery, call } from 'redux-saga/effects';

import { authenSagas } from './authen/authenSagas';
export function* rootSaga() {
  
  yield all([
    call(authenSagas)
    
  ])
};




