import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OutBreaksContainer from './components/OutBreaksContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Global OutBreaks</h1>
        </div>
        <OutBreaksContainer />
      </div>
    );
  }
}

export default App;
