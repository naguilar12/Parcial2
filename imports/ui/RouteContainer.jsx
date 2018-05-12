import React, { Component } from 'react';
import Schedule from './Schedule';
import RouteCommentsList from "./RouteCommentsList";

class RouteContainer extends Component {
    render() {
        console.log(this.props.selectedAgency);
        return (
            <div>
                <Schedule hours={this.props.hours} className="graph" data = {this.props.data}/>
                {this.props.agency && this.props.route ? (<RouteCommentsList agency={this.props.agency} route={this.props.route}/>): null}
            </div>
        );
    }
}

export default RouteContainer;