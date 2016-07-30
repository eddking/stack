import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import { NavBar, NavList, NavItem, NavSearch } from '../../components/navbar/navbar'
import { styles } from '../../styles';
import { updateRouterState } from '../../actions'

interface AppProps extends ReactRouter.RouteComponentProps<{},{}> {
    updateRouterState(state: any): void
}

class AppClass extends Component<AppProps, {}> {
  componentWillMount() {
    this.props.updateRouterState({
      pathname: this.props.location.pathname,
      params: this.props.params
    });
  }

  componentWillReceiveProps(nextProps: AppProps) {
      /* if (nextProps.errorMessage) {*/
      // handle error here
      /* }*/
    if (this.props.location.pathname !== nextProps.location.pathname) {
        this.props.updateRouterState({
            pathname: nextProps.location.pathname,
            params: nextProps.params
      });
    }
  }
    render() {
        return (
            <div>
                <header>
                    <NavBar>
                        <NavList>
                            <NavItem path="/" >Home</NavItem>
                            <NavItem path="about">About</NavItem>
                            <NavSearch />
                        </NavList>
                    </NavBar>
                </header>
                <div className={styles('container')}>
                    <h1>App Component</h1>
                    { this.props.children }
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateRouterState: (state) => dispatch(updateRouterState(state))
    }
}

export const App = connect(null, mapDispatchToProps)(AppClass)
