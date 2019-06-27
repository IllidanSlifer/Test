import React, { Component } from 'react';
import "./App.css";
import { data } from './data.js';
import { imge } from './ou.png';
import { Table, Button, Input, Form } from 'reactstrap';

class App extends Component {

  constructor() {
    super();
    this.state = {
      emails: [],
      phones: [],
      names: []
    }
  }

  render() {
    return (
      data.map((email) => (
        <div>
          <nav class="navbar navbar-expand-lg" className="nav">
            <img src="imge" class="rounded-circle" className="img" alt=""></img> 
          </nav>
          <div className="app">
            <div className="app-container" class="form-group">
              <h1>Search Any Email Address</h1>
              <Form class="form-inline md-form mr-auto mb-6">
                <div className="email" class="input-group">
                  <Input
                  class="form-control mr-sm-2"
                  type="email"
                  placeholder="Email"
                  aria-label="Go"
                  //onChange={this.handleChange()}
                  ></Input>
                  <div class="input-group-append">
                    <Button class="btn btn-secondary" type="button">
                      <i class="fa fa-search">Go</i>
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
          <div className="main">
            <h1>Result</h1>
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
                  </tr>
                </thead>
                <tbody>
                  {email.name}
                </tbody>
              </Table>
          </div>
        </div>
      ))
    )
  }
}

export default App;