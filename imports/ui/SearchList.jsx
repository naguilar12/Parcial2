import React, { Component } from 'react';
import { withTracker } from "meteor/react-meteor-data";
import {History} from "../api/History.js";

class SearchList extends Component {

    renderHistory(){
        var i = 0;
        return this.props.history.map((h)=>{
            return <li key={h.agency+h.route+(i++)}>Agency {h.agency} and Route {h.route} </li>
        })
    }

    render() {
        return (
            <ul>
                {this.renderHistory()}
            </ul>
        );
    }
}

export default withTracker((props) => {
	return {
		history: History.find({}).fetch()
	};
})(SearchList);