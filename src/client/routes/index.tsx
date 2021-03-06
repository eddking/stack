import { Route, IndexRoute } from 'react-router';
import * as React from 'react';
import { Component } from 'react';
import { Home } from '../containers/home/home'
import { App } from '../containers/app/app'
import { NotFound } from '../containers/not-found/not-found'
import { About } from '../containers/about/about'

export const routes = (
    <Route path="/" component={App}>
        <IndexRoute name="home" component={Home} />
        <Route name="about" path="about" component={About}/>
        <Route path="*" component={NotFound}/>
    </Route>
)

if (module.hot) {
    module.hot.accept();
}
