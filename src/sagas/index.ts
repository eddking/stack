import { takeEvery, delay } from 'redux-saga'
import { put, call, fork } from 'redux-saga/effects'

function* mySaga() {
  while(true) {
    yield call(delay, 1000)
    yield put({type: 'INCREMENT'})
  }
}

export function* rootSaga() {
    yield fork(mySaga)
}
