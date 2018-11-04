import React from 'react';
import PropTypes from 'prop-types';
import {Meteor} from 'meteor/meteor';
import {Stats} from './../api/stats';
import Stat from './Stat';
import App from './App';


export default class Statistics extends React.Component {
  renderStats() {
    return this.props.stats.map((stat) => {
      return <Stat key={stat._id} stat={stat}/>
    });
  }

  render() {
    return (
      <div>
        <button>Year</button>
        <button type="button" onClick={() => {
          //let stats = Stats.find({}, {sort: {rank: 1}}).fetch();
          <div>
            {this.renderStats()}
          </div>
          console.log(Stats.find({}, {sort: {rank: 1}}).fetch());
          console.log("teamName button clicked");
        }}>Team Name</button>
        <button>Memeber</button>
        <button>Rank</button>
        <button>Win</button>
        <button>Loss</button>
        <button>Tie</button>
        <button>Points For</button>
        <button>Points Against</button>
        <button>Moves</button>
        <button>Trades</button>

        <div>
          {this.renderStats()}
          <p>year, team name, member, rank, win, loss, tie, points for,
          points against, moves, trades</p>
        </div>

      </div>

    );
  }
};
