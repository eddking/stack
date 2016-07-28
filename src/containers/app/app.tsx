import * as React from 'react';
import { Component } from 'react';

export class App extends Component<{}, {}> {
    render() {
        return (
            <div>
                <h1>App Component</h1>
                { this.props.children }
            </div>
        )
    }
}
