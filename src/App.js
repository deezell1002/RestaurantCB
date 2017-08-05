import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/lib/Button';
import Main from './main';

class App extends Component {

  //_const
  constructor() {
    super();
    this.state = {
      title: "Reataurant Bill Calculator"
    };
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>{this.state.title}</h2>
        </div>
        <p className="App-intro">
          <Main/>
        </p>
      </div>
    );
  }
}

export default App;
