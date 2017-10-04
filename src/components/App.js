import React, { Component } from 'react';

import logo from '../img/logo.svg';

import './reset.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentText: null
    };
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ currentText: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Text to Speech</h1>
        </header>
        <div className="App-container">
          <div className="text-to-speech">
            <h2 className="headline">Text to Speech, Just Start Typing!</h2>
            <input className="main-input"
              placeholder="Start Typing"
              onChange={ this.handleChange } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
