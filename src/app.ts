
import * as ReactDOM from "react-dom";
import { Root } from "./containers/root";
import * as React from 'react';
import { routes } from "./routes";
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { takeEvery, delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import { browserHistory } from 'react-router'
import * as _ from 'lodash';

if (__DEVELOPMENT__) {
    // tells webpack hot middleware what the base path for hot updates is
  __webpack_public_path__ = "http://localhost:8080/assets/";
}

function reducer(state = 0, action: {type: string}) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

function* mySaga() {
  while(true) {
    yield call(delay, 1000)
    yield put({type: 'INCREMENT'})
  }
}

const sagaMiddleware = createSagaMiddleware()

const enhancers = [
    applyMiddleware(sagaMiddleware),
]

if (__DEVELOPMENT__) {
    enhancers.push(require('containers/dev-tools').DevTools.instrument())
}

const store = createStore(
  reducer,
  compose.apply(compose, enhancers)
)

// then run the saga
sagaMiddleware.run(mySaga)

console.log("Root: ", Root)

ReactDOM.render(React.createElement(Root, {
    store: store,
    history: browserHistory,
    routes: routes,
}), document.getElementById('root'))

if (module.hot) {
    module.hot.addDisposeHandler((data) => {
        console.log("dispose handler data", data)
    })
    module.hot.accept();
}
