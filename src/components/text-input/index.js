import React, { Component } from 'react';

import './style.css';

export default class TextInput extends Component {
  render() {
    const {
      handleSubmit,
      currentText,
      handleChange
    } = this.props;

    return (
      <div className="text-input">
        <form className="text-form"
          onSubmit={ handleSubmit }>
          <input className="main-input"
            placeholder="Start Typing"
            value={ currentText }
            onChange={ handleChange }
            autoFocus={ true } />
        </form>
      </div>
    );
  }
}

