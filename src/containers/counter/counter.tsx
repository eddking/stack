import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

interface CounterProps {
    value: number;
}

class CounterComponent extends Component<CounterProps, {}> {
    render() {
        return (
            <div>
                { this.props.value }
            </div>
        )
    }
}

function mapStateToProps(state: state): CounterProps {
    return {
        value: state.counter
    }
}

export const Counter = connect(mapStateToProps)(CounterComponent)
