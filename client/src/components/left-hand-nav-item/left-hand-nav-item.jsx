import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom';

import './left-hand-nav-item.css';


export class LeftHandNavItem extends Component {

    render() {
        let {
            item: {
                link,
                name
            },
            children: icon,
            isActive,
            onClick,
        } = this.props

        const navItemClasses = `left-hand-nav-item ${isActive ? "is-active" : ""}`

        return (
            <Nav.Item className={navItemClasses} onClick={onClick}>
                <NavLink to={link} className="left-hand-nav-item-link">
                    {icon}
                    <span>{name}</span>
                </NavLink>
            </Nav.Item>
        )
    }
}
