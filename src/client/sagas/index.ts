import { takeEvery, delay } from 'redux-saga'
import { put, call, fork } from 'redux-saga/effects'

import { incrementCounter } from '../actions'

function* mySaga() {
  while(true) {
    yield call(delay, 1000)
    yield put(incrementCounter())
  }
}

export function* rootSaga() {
    yield fork(mySaga)
}
