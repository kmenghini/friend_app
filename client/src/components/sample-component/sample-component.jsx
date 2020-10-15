import React, { Component } from 'react';
import axios from 'axios';


export class SampleComponent extends Component {
  state = {
    sampleResponse: 'response from db',
  };

  componentDidMount() {
    this.callServer('friends')
  }

  callServer(table) {
    console.log(`getting data from table ${table}`)
    axios.get('/test', {
      params: {
        table: table,
      },
    })
    .then(res => this.setState({ sampleResponse: res.data }))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        This is a sample response from the friends database:
        <p>{this.state.sampleResponse[0].first_name}</p>
      </div>
    );
  }

}

