import { Route } from 'react-router';
import * as React from 'react';
import { Component } from 'react';

class User extends Component<{}, {}> {
    render() {
        return (
            <p>User Page!</p>
        )
    }
}

class About extends Component<{}, {}> {
    render() {
        return (
            <p>About Page!</p>
        )
    }
}

class App extends Component<{}, {}> {
    render() {
        return (
            <div>
                <h1>App Component</h1>
                { this.props.children }
            </div>
        )
    }
}
class NotFound extends Component<{}, {}> {
    render() {
        return (
            <h1>Not Found</h1>
        )
    }
}

export const routes = (
    <Route path="/" component={App}>
        <Route path="about" component={About}/>
        <Route path="user" component={User}/>
        <Route path="*" component={NotFound}/>
    </Route>
)
