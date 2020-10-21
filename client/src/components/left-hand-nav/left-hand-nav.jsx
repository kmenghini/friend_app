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

// TODO: add icon to this mapping
let navItems = {
    'reminders': {
        name: 'Reminders',
        link: '/',
    },
    'messages': {
        name: 'Messages',
        link: '/messages',
    },
    'friends': {
        name: 'Friends',
        link: '/friends',
    },
}


export class LeftHandNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeItem: 'reminders'
        };
      }

    componentDidMount() {
        this.setState({activeItem: window.location.pathname.slice(1) || 'reminders'})
    }

    setActiveNavItem = (item) => {
        this.setState({activeItem: item})
    }

    render() {
        return (
            <Nav className="left-hand-nav">
                <Nav.Item className="people">
                    <PeopleFill size={90} color="white"/>
                </Nav.Item>
                <LeftHandNavItem
                    item={navItems.reminders}
                    isActive={this.state.activeItem === 'reminders'}
                    onClick={() => this.setActiveNavItem('reminders')}
                >
                    <BookmarkCheck />
                </LeftHandNavItem>
                <LeftHandNavItem
                    item={navItems.messages}
                    isActive={this.state.activeItem === 'messages'}
                    onClick={() => this.setActiveNavItem('messages')}
                >
                    <ChatLeftText />
                </LeftHandNavItem>
                <LeftHandNavItem
                    item={navItems.friends}
                    isActive={this.state.activeItem === 'friends'}
                    onClick={() => this.setActiveNavItem('friends')}
                >
                    <PersonLinesFill />
                </LeftHandNavItem>
            </Nav>
        )
    }
}
