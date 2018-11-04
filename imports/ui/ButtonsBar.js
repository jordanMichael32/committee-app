import React from 'react';
//import ReactDOM from 'react-dom';
import Info from './Info';
import Statistics from './Statistics';
import App from './App';

export default class ButtonsBar extends React.Component {
  displayInfo(data) {
    document.getElementById("members").innerHTML = data;
  }

  // displayStats() {
  //   document.getElementById("stats").innerHTML = <Statistics/>;
  // }

  render() {
    return (
      <div>
        <button id="membersButton" type="button" onClick={() => {this.displayInfo("Members Go Here");}}>Members</button>

        <button onClick={() => {return (<div><Statistics stats={this.props.stats}/></div>);}}>Statistics</button>

        <button type="button" onClick={() => {this.displayInfo("Fun Facts Text Go Here");}}>Fun Facts</button>
        <button type="button" onClick={() => {this.displayInfo("Commissioner Videos Go Here");}}>CommissionerTV</button>
      </div>
    );
  }
};
