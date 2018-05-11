import { Meteor } from 'meteor/meteor';
import { Mongo } from "meteor/mongo";
import "../imports/api/request.js"

const Test = new Mongo.Collection("test");

Test.insert({
  mensage:"This",
})  

Meteor.startup(() => {
  // code to run on server at startup
});
