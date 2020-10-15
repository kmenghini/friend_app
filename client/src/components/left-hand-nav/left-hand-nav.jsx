import React, { Component } from 'react';
import { LeftHandNavItem } from '../../components';

import './left-hand-nav.css';


export class LeftHandNav extends Component {

    render() {
        return (
            <nav className="left-hand-nav">
                <ul>
                    <LeftHandNavItem name="Reminders" link="/"/>
                    <LeftHandNavItem name="Friends" link="/friends"/> 
                </ul>
            </nav>
        )
    }
}
