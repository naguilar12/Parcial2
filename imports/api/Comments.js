import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

export const Comments = new Mongo.Collection("comments");

Meteor.methods({
    "comments.insertComment"(agency, route, comment) {
        if (Meteor.userId())
            Comments.insert({
                agency: agency,
                route: route,
                comment: comment,
                user: Meteor.userId()
            });
    }
});