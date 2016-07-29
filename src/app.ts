
import * as ReactDOM from "react-dom";
import { Root } from "./containers/root";
import * as React from 'react';
import { routes } from "./routes";
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { browserHistory } from 'react-router'
import { rootSaga } from './sagas'
import { rootReducer } from './reducers'
import * as _ from 'lodash';

const sagaMiddleware = createSagaMiddleware()
const enhancers = [
    applyMiddleware(sagaMiddleware),
]

if (__DEVELOPMENT__) {
    // tells webpack hot middleware what the base path for hot updates is
    __webpack_public_path__ = "http://localhost:8080/assets/";
    // enable dev tools redux enhancement
    enhancers.push(require('containers/dev-tools').DevTools.instrument())
}

const store = createStore(
    rootReducer,
    compose.apply(compose, enhancers)
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(React.createElement(Root, {
    store: store,
    history: browserHistory,
    routes: routes,
}), document.getElementById('root'))

if (module.hot) {
    module.hot.accept(); // errr wot.. pls dont shout warnings
}
