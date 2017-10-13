import _ from 'lodash';
import React, { Component } from 'react';

import './style.css';

export default class Hotkeys extends Component {
  render() {
    const historyItems = _.map(this.props.history, (value, i) =>
      <li key={ i }>{ `${value}` }</li>
    );
    
    return (
      <div className="hotkeys">
        <ol className="history">
          { /* historyItems */ }
        </ol>
        <ol className="presets">
          { /* presetItems */ }
        </ol>
      </div>
    );
  }
}

