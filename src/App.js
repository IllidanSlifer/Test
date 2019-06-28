import React, { Component } from 'react';
import "./App.css";
import data  from './data.js';
import SearchInput, { createFilter } from 'react-search-input'
import { Table, Button, Input, Form, Label } from 'reactstrap';

const KEYS_TO_FILTERS = ['data.email']

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emails: [],
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  componentDidMount(){
    this.setState({
      data: data
    })
    console.log(this.state.data);
  }
  
  render() {
    const filteredEmails = data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <div>
        <nav class="navbar navbar-expand-lg" className="nav">
          <img src="" class="rounded-circle" className="img" alt=""></img>
        </nav>
        <div className="app">
          <div className="app-container" class="form-group">
            <h1>Search Any Email Address</h1>
            <Form class="form-inline md-form mr-auto mb-6">
              <div className="email" class="input-group">
                <Input className="search-input" class="" placeholder="Type an email"  onChange={this.searchUpdated}></Input>
                {filteredEmails.map((email) => (
                  <div className="email" key={email.email}></div>
                ))}
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
        
        <div className="main">
          {filteredEmails.map((email) => (
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
                  {email.phoneNumbers.map((phone) => (
                    <div>
                      <ul>
                        <li>{phone.phone}</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 mb-3 sm-4">
                  <h3>Email</h3>
                  <h6>{email.email}</h6>
                </div>

                <div class="col-md-6 mb-3 sm-4">
                  <h3>Relavites</h3>
                  {email.relatives.map((relative) => (
                    <div>
                      <ul>
                        <li><li>{relative.name}</li></li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>  
        
      </div>
    )
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
}

export default App;
