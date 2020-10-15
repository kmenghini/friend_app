import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {
  LeftHandNav,
  RemindersPage,
  FriendsPage
} from '../components';

import './app.css';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };
  
  render() {
    return (
      <div className="App">
            <Router>
                  <LeftHandNav />

                  <Switch>
                      <Route path="/friends">
                          <FriendsPage />
                      </Route>
                      <Route path="/">
                          <RemindersPage />
                      </Route>
                  </Switch>

            </Router>
      </div>
    );
  }
}

export default App;