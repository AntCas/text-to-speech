import _ from 'lodash';
import React, { Component } from 'react';

import TextInput from './text-input';
import ClickInput from './click-input';

import logo from '../img/logo.svg';

import './reset.css';
import './App.css';

const synth = window.speechSynthesis;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentText: '',
      history:     []
    };
  }

  handleChange = (event) => {
    const value = event.target.value;

    if (value.includes(' ')) {
      this.handleSubmit(event);
    } else {
      this.setState({ currentText: value });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload
    const currentText = this.state.currentText;
    this.textToSpeech(currentText);
    this.state.history.push(currentText);
    this.setState({ currentText: '' });
  };

  /* https://codepen.io/SteveJRobertson/pen/emGWaR */
  textToSpeech = (value) => {
    const utterThis = new SpeechSynthesisUtterance(value);
    synth.speak(utterThis);
  }

  render() {
    const historyItems = _.map(this.state.history, (value, i) =>
      <li key={ i }>{ `${value}` }</li>
    );
    
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
                onChange={ this.handleChange }
                autoFocus={ true } />
            </form>

            <div className="history">
              <ol>
                { /* historyItems */ }
              </ol>
            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default App;
