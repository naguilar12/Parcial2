import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { HTTP } from "meteor/http";

Meteor.methods({
   
    "agency.getAgencies"(){
		var agencies = HTTP.call("GET", "http://webservices.nextbus.com/service/publicJSONFeed?command=agencyList");
		var res = JSON.parse(agencies.content);
		return res.agency;
    },
    
    "agency.getRoutesForAgency"(agency){
		var routes = HTTP.call("GET", "http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a="+agency);
		var res = JSON.parse(routes.content);
		return res;
		},
		
		"agency.getSpecificRouteForAgency"(agency, route){
			var routes = HTTP.call("GET", "http://webservices.nextbus.com/service/publicJSONFeed?command=schedule&a="+agency+"&r="+route);
			var res = JSON.parse(routes.content);
			return res;
			},

    
});