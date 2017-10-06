import React, { Component } from 'react';

import logo from '../img/logo.svg';

import './reset.css';
import './App.css';

const synth = window.speechSynthesis;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentText: ''
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    console.log(value);

    if (value.includes(' ')) {
      this.handleSubmit(event);
    } else {
      this.setState({ currentText: value });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload
    this.textToSpeech(this.state.currentText);
    this.setState({ currentText: '' });
  };

  /* https://codepen.io/SteveJRobertson/pen/emGWaR */
  textToSpeech = (value) => {
    const utterThis = new SpeechSynthesisUtterance(value);
    synth.speak(utterThis);
    console.log("talk about " + value);
  }

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
            <form className="text-form"
              onSubmit={ this.handleSubmit }>
              <input className="main-input"
                placeholder="Start Typing"
                value={ this.state.currentText }
                onChange={ this.handleChange } />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
