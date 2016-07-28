import * as React from 'react';
import { Component } from 'react';
import { Counter } from '../counter/counter';

export class Home extends Component<{}, {}> {
    render() {
        return (
            <div>
                <h1>home page</h1>
                <Counter/>
            </div>
        )
    }
}
