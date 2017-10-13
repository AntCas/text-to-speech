import React, { Component } from 'react';

import Header from './header';
import TextToSpeech from './text-to-speech';

import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-container">
          <TextToSpeech />
        </div>
      </div>
    );
  }
}

export default App;
