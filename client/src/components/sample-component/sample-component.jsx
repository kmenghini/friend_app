import React, { Component } from 'react';
import axios from 'axios';


export class SampleComponent extends Component {
  state = {
    sampleResponse: 'response from db',
  };

  componentDidMount() {
    this.callServer('sample')
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
        This is a sample response from the database:
        <p>{this.state.sampleResponse[0].name}</p>
      </div>
    );
  }

}

