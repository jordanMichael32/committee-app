import React from 'react';
import PropTypes from 'prop-types';
import {Stats} from './../api/stats';

export default class Stat extends React.Component {
  render() {
    return (
      <div key={this.props.stat._id}>
        <p>
          {this.props.stat.year}
          {this.props.stat.teamName}
          {this.props.stat.member}
          {this.props.stat.rank}
          {this.props.stat.wins}
          {this.props.stat.loss}
          {this.props.stat.tie}
          {this.props.stat.pointsFor}
          {this.props.stat.pointsAgainst}
          {this.props.stat.moves}
          {this.props.stat.trades}
        </p>
      </div>
    );
  }
};
