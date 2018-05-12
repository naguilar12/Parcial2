import React, { Component } from 'react';
import Schedule from './Schedule';

class RouteContainer extends Component {
    render() {
        return (
            <div>
                <Schedule data = {this.props.data}/>

            </div>
        );
    }
}

export default RouteContainer;