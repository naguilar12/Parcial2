import { Meteor } from 'meteor/meteor';
import { Mongo } from "meteor/mongo";
import "../imports/api/schedule.js"
import "../imports/api/History.js"
import "../imports/api/Comments"

const Test = new Mongo.Collection("test");

Test.insert({
  mensage:"This",
})  

Meteor.startup(() => {
  // code to run on server at startup
});
