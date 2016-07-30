
import * as React from 'react';
import { Component, SFC } from 'react';
import { IndexLink } from 'react-router';

import { withRouter } from '../../fixes';

import { styles } from '../../styles';

interface NavBarProps {
    children?: any
}

interface NavListProps {
    children?: any
}

interface NavItemProps {
    path: string
    children?: any
}

interface NavSearchProps {
}

export const NavBar: SFC<NavBarProps> = ({
    children
}) => {
    return (
        <div className={styles('nav-bar')}>
            <div className={styles('container')}>
                {children}
            </div>
        </div>
)}

export const NavList: SFC<NavListProps> = ({
    children
}) => {
    return (
        <ul className={styles('nav-list')}>
            {children}
        </ul>
)}

export const NavItem: SFC<NavItemProps> = ({
    path, children
}) => {
    const active = false;
    return (
        <li className={styles('nav-item')}>
            <IndexLink to={path} activeClassName={styles('active')}>
                {children}
            </IndexLink>
        </li>
)}

export const NavSearch: SFC<NavSearchProps> = ({
}) => {
    return (
        <li className={styles('nav-search')}>
            <form>
                <input type="search"></input>
            </form>
        </li>
)}
