import React, { Component } from 'react';

class AgenciesList extends Component {

    constructor(props) {
        super(props);
        Meteor.call("agency.getAgencies", (err, res) => {
            this.setState({
                agencies: res
            })
        })
    }


    renderAgencies() {
        if (this.state) {
            return this.state.agencies.map((agency) => {
                return <option id={agency.tag} key={agency.tag} value={agency.tag}>{agency.title}</option>;
            });
        }
    }

    renderRoutes() {
        if (!this.state) return;
        if (!this.state.routes) return;
        try {
            return this.state.routes.map((route) => {
                return <option id={route.tag} key={route.tag} value={route.tag}>{route.title}</option>;
            });    
            
        } catch (error) {
            <option key="-" value="-">There are no available routes</option>
        }
        
    }

    onEnterAgencies(e) {
        e.preventDefault();
        this.setState({
            selectedAgency: e.target.value,
            selectedAgencyName: document.getElementById(e.target.value).textContent
        }, () => {
            Meteor.call("agency.getRoutesForAgency", this.state.selectedAgency, (err, res) => {
                this.setState({
                    routes: res.route
                });
            });
        });
    }

    onEnterRoute(e) {
        e.preventDefault();
        this.setState({
            selectedRoute: e.target.value,
            selectedRouteName: document.getElementById(e.target.value).textContent
        }, () => {
            Meteor.call("agency.getSpecificRouteForAgency", this.state.selectedAgency, this.state.selectedRoute, (err, res) => {
                this.props.updateGraph(res);
                this.props.updateAgencyRoute(this.state.selectedAgency,  this.state.selectedRoute);
            });
            Meteor.call("history.insertSearch", this.state.selectedAgency, this.state.selectedAgencyName, this.state.selectedRoute, this.state.selectedRouteName);
        });

    }

    renderRouteDataList(){
        if(!this.state) return;
        if(!this.state.selectedAgency) return;

        return (<div>
            <h3>Select a route</h3>
            <select id="routes" onChange={this.onEnterRoute.bind(this)}>
                <option key="-" value="-">-</option>
                {this.renderRoutes()}
            </select>
        </div>);
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Select an Agency</h3>
                    <select id="agencies" onChange={this.onEnterAgencies.bind(this)}>
                        <option key="-" value="-">-</option>
                        {this.renderAgencies()}
                    </select>
                </div>
                {this.renderRouteDataList()}
            </div>
        );
    }
}

export default AgenciesList;