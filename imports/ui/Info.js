import React from 'react';
import ButtonsBar from './ButtonsBar';

export default class Info extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p id="stats">Stats Here</p>
        </div>
        <p id="members">Data</p>
      </div>
    );
  }
};
