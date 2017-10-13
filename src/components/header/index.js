import React, { Component } from 'react';

import logo from '../../img/logo.svg';

import './style.css';

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Text to Speech</h1>
      </header>
    );
  }
}

