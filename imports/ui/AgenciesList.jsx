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
                return <option data-value={agency.tag} key={agency.tag} value={agency.tag} />;
            });
        }
    }

    renderRoutes() {
        if (!this.state) return;
        if (!this.state.routes) return;
        return this.state.routes.map((route) => {
            return <option value={route.tag} key={route.tag} value={route.tag} />;
        });

    }

    onEnterAgencies(e) {
        this.setState({
            selectedAgency: document.getElementById("selected-agency").value
        }, () => {
            Meteor.call("agency.getRoutesForAgency", this.state.selectedAgency, (err, res) => {
                this.setState({
                    routes: res.route
                });
            });
        });
    }

    onEnterRoute(e) {
        this.setState({
            selectedRoute: document.getElementById("selected-route").value
        }, () => {
            Meteor.call("agency.getSpecificRouteForAgency", this.state.selectedAgency, this.state.selectedRoute, (err, res) => {
                this.props.updateGraph(res);
            });
        });

    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" list="agencies" className="form-control" id="selected-agency"></input>
                    <datalist id="agencies">
                        {this.renderAgencies()}
                    </datalist>
                    <button onClick={this.onEnterAgencies.bind(this)}>Boton</button>
                </div>
                <div>
                    <input type="text" list="routes" className="form-control" id="selected-route"></input>
                    <datalist id="routes">
                        {this.renderRoutes()}
                    </datalist>
                    <button onClick={this.onEnterRoute.bind(this)}>Boton</button>
                </div>
            </div>
        );
    }
}

export default AgenciesList;