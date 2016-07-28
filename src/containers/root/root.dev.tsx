
import * as React from 'react';
import { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { DevTools } from '../dev-tools';
import { RootProps } from './index';

export default class Root extends Component<RootProps, {}> {
    constructor(props: RootProps) {
        super(props);
    }

    render() {
        const { store, history, routes } = this.props;
        return (
            <Provider store={store}>
                <div>
                    <Router history={history} routes={routes} />
                    { __DEVTOOLS__ ? <DevTools/> : null }
                </div>
            </Provider>
        );
    }
}
