import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-container">
          <h2 className="headline">Text to Speech, Just Start Typing!</h2>
          <input className="main-input" />
        </div>
      </div>
    );
  }
}

export default App;
