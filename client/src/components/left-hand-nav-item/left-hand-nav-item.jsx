import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './left-hand-nav-item.css';


export class LeftHandNavItem extends Component {

    render() {
        console.log(this.props.name)
        return (
            <li className="left-hand-nav-item">
                <Link to={this.props.link}>{this.props.name}</Link> 
            </li>
        )
    }
}
