import React, { Component } from 'react';
import { withTracker } from "meteor/react-meteor-data";
import {History} from "../api/History.js";

class SearchList extends Component {

    renderHistory(){
        var i = 0;
        return this.props.history.map((h)=>{
            return <li key={h.agencyTag+h.routeTag+(i++)}>Route {h.routeName} from agency {h.agencyName}</li>
        })
    }

    renderTitle(){
        if(!this.props.history) return;
        if(this.props.history.length>0)
            return <h3>Past Searchs</h3>
    }

    render() {
        return (
            <div>
                {this.renderTitle()}
                <ul>
                    {this.renderHistory()}
                </ul>
            </div>
        );
    }
}

export default withTracker((props) => {
	return {
		history: History.find({}).fetch()
	};
})(SearchList);