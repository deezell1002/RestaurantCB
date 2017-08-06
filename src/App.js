import React, { Component } from 'react';
import './App.css';
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
        <div className="container" id="App-intro">
          <Main/>
        </div>
      </div>
    );
  }
}

export default App;
