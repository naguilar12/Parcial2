import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { HTTP } from "meteor/http";

Meteor.methods({
	"routes.getSchedule"(){
		var routes = HTTP.call("GET", "http://webservices.nextbus.com/service/publicJSONFeed?command=schedule&a=sf-muni&r=N");
		var res = JSON.parse(routes.content);
		return res;
	}
});