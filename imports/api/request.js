import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { HTTP } from "meteor/http";

Meteor.methods({
	"buses.getBuses"(){
		var buses = HTTP.call("GET", "https://parcial2webdev.herokuapp.com/miserables.json");
		var res = JSON.parse(buses.content);
		return res;
	}
});