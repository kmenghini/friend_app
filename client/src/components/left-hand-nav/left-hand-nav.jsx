import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import {
    BookmarkCheck,
    ChatLeftText,
    PeopleFill,
    PersonLinesFill,
 } from 'react-bootstrap-icons';
import { LeftHandNavItem } from '../../components';

import './left-hand-nav.css';


export class LeftHandNav extends Component {

    render() {
        return (
            <Nav className="left-hand-nav">
                <Nav.Item className="people">
                    <PeopleFill size={90} color="white"/>
                </Nav.Item>
                <LeftHandNavItem name="Reminders" link="/">
                    <BookmarkCheck />
                </LeftHandNavItem>
                <LeftHandNavItem name="Messages" link="/messages">
                    <ChatLeftText />
                </LeftHandNavItem>
                <LeftHandNavItem name="Friends" link="/friends">
                    <PersonLinesFill />
                </LeftHandNavItem>
            </Nav>
        )
    }
}
