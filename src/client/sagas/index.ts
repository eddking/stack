import { takeEvery, delay } from 'redux-saga'
import { put, call, fork, take } from 'redux-saga/effects'

import { incrementCounter } from '../actions'
import { client } from '../app'

function* sendClientActions() {
    while(true) {
        const action = yield take()
        //if this action didnt originate from the server
        if (! action.server) {
            client.send(action)
        }
    }
}

function* mySaga() {
    while(true) {
        yield call(delay, 1000)
        yield put(incrementCounter())
    }
}

export function* rootSaga() {
    yield fork(sendClientActions)
    yield fork(mySaga)
}
