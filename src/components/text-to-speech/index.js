import React, { Component } from 'react';

import TextInput from './text-input';
import Hotkeys from './hotkeys';

import './style.css';

const synth = window.speechSynthesis;

export default class TextToSpeech extends Component {
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
    return (
      <div className="text-to-speech">
        <h2 className="headline">Text to Speech, Just Start Typing!</h2>

        <TextInput
          handleSubmit={ this.handleSubmit }
          currentText={ this.state.currentText }
          handleChange={ this.handleChange } />

        <Hotkeys history={ this.state.history } />
      </div>
    );
  }
}

