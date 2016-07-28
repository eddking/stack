import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

const styles = require('../../styles/main.scss');

console.log("styles", styles);

interface CounterProps {
    value: number;
}

class CounterComponent extends Component<CounterProps, {}> {
    render() {
        return (
            <div className={styles.test}>
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
