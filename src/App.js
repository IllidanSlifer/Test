import React, { Component } from 'react';
import axios from 'axios';
//import json from './data.json';
import { Table, Button } from 'reactstrap';

class App extends Component {

  constructor() {
    super();
    this.state = {
      emails: []
    }
  }
  
  componentWillMount() {
    const ax = axios.create({
      baseURL: 
      'http://localhost:3000'
    })
    ax.get('.../data.json')
    // axios.get('../data.json')  // JSON File Path
    //   .then((response) => {
    //     console.log(response.data);
      // this.setState({
      //   emails: response.data
      // });
    //})
    .catch (function (error) {
      console.log(error);
    });
  }


  render() {
    let emails = this.state.emails.map((email) => {
      return (
        <tr key={email.email}>
          <td>{email.name}</td>
          <td>{email.address}</td>
          <td>{email.email}</td>
          <td>{email.age}</td>
          <td>{email.notes}</td>
          <td>{email.phoneNumbers}</td>
          <td>{email.relatives}</td>
          <td>
            <Button color="success" size="sm">View</Button>
          </td>
        </tr>
      )
    });
    return (
      <div className="App container">
        <h1>This is a test</h1>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Age</th>
              <th>Notes</th>
              <th>Phone Numbers</th>
              <th>Relatives</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {emails}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;