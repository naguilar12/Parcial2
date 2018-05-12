import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

export const History = new Mongo.Collection("history");

Meteor.methods({
    "history.insertSearch"(agencyTag, agencyName, routeTag, routeName){
        History.insert({
            agencyName: agencyName,
            agencyTag: agencyTag,
            routeName: routeName,
            routeTag: routeTag
		});
    }
});