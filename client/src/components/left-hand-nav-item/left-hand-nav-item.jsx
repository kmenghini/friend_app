import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

import './left-hand-nav-item.css';


export class LeftHandNavItem extends Component {

    render() {

        return (
            <Nav.Item className="left-hand-nav-item">
                <Link to={this.props.link}>
                    {this.props.children}
                    <text>{this.props.name}</text>
                </Link> 
            </Nav.Item>
        )
    }
}
