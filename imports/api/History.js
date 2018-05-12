import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

export const History = new Mongo.Collection("history");

Meteor.methods({
    "history.insertSearch"(agency, route){
        History.insert({
            agency: agency,
            route: route
		});
    }
});