import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import App from './../imports/ui/App';
import {Stats} from './../imports/api/stats';
import Statistics from './../imports/ui/Statistics';


// Tracker.autorun(() => {
//   Stats.insert({
//     year: 2010,
//     teamName: "CampRock",
//     member: "Jordan",
//     rank: 8,
//     wins: 6,
//     loss: 8,
//     tie: 0,
//     pointsFor: 1396,
//     pointsAgainst: 1431,
//     moves: 10,
//     trades: 0
//   })
// });
setTimeout(() => {
  console.log('data', Stats.find().fetch());
}, 1000);

Meteor.startup(() => {
  Tracker.autorun(() => {
    let title = 'The Committee';
    let stats = Stats.find().fetch();
    ReactDOM.render(<App title={title} stats={stats}/>, document.getElementById('app'));
  });
});
