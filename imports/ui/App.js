import React from 'react';
import PropTypes from 'prop-types';
//proptypes
import TitleBar from './TitleBar';
import ButtonsBar from './ButtonsBar';
import Info from './Info';
import Statistics from './Statistics';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title}/>
        <ButtonsBar/>
        <Info/>
        <Statistics stats={this.props.stats}/>
      </div>
    );
  }
};
