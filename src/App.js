import React, { Component } from 'react';
import "./App.css";
import { data } from './data.js';
import { imge } from './ou.png';
import SearchInput, { createFilter } from 'react-search-input'
import { Table, Button, Input, Form, Label } from 'reactstrap';

class App extends Component {

  constructor() {
    super();
    this.state = {
      emails: [],
      list: [this.phoneNumber],
      list2: [this.relatives]
    }
  }

  render() {
    return (
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
        <br></br>
        {data.map((email)  => (
          <div className="main">
            <div class="jumbotron">
              <h1 class="display-4">Result</h1>
              <hr class="my-4"></hr>
              <div class="form-row">
                <div class="col-md-5 mb-3 sm-4">
                  <h2>{email.name}, {email.age}</h2>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-7 mb-3 sm-4">
                  <h6>{email.notes}</h6>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 mb-3 sm-4">
                  <h3>Address</h3>
                  <h6>{email.address}</h6>
                </div>
                <div class="col-md-6 mb-3 sm-4">
                  <h3>Phone Numbers</h3>
                  <ul>
                    {/* <li>{email.phoneNumbers}</li> */}
                  </ul>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 mb-3 sm-4">
                  <h3>Email</h3>
                  <h6>{email.email}</h6>
                </div>
                <div class="col-md-6 mb-3 sm-4">
                  <h3>Relavites</h3>
                  <ul>{email.relatives.name}</ul>
                  {/* <h6>{email.relatives}</h6> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default App;