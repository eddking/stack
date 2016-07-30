import * as React from 'react';
import { Component, ComponentClass } from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { Router, RouterContext } from 'react-router';

export interface RootProps {
    store: Store<state>;
    history: HistoryModule.History;
    routes: JSX.Element;
};

export const Root = __DEVELOPMENT__ ? require('./root.dev').default : require('./root.prod').default as ComponentClass<RootProps>;
