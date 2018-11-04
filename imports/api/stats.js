import {Mongo} from 'meteor/mongo';

export const Stats = new Mongo.Collection('statistics');

console.log("Inside Stats DB");
