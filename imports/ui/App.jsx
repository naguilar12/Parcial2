import React, { Component } from 'react';
import AgenciesList from './AgenciesList';
import AccountsUI from './AccountsUI';
import SearchList from './SearchList';
import RouteContainer from './RouteContainer';
import "./style/App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hours:26
        };
    }

    updateGraph(newInfo) {
        this.setState({
            data: newInfo
        });
        console.log(newInfo);
    }

    updateAgencyRoute(agency, route) {
        this.setState({
            selectedAgency: agency,
            selectedRoute: route
        });
    }

    setHours(){
        this.setState({
            hours: document.getElementById("hours").value
        })
    }

    handleKeyPress = (event) => {
        if(event.key == 'Enter'){
            this.setHours();
        }
      }

    render() {
        return (
            <div id="main">
                <AccountsUI />
                <h1 id="title">next Bus Route Scheduler</h1>
                <div className = "row">
                    <span className="col-md-4">
                        <AgenciesList updateGraph={this.updateGraph.bind(this)} updateAgencyRoute={this.updateAgencyRoute.bind(this)} />
                    </span>
                    <span className="col-md-4">
                        <h3>Choose how many hours you want to see</h3>
                        <input type="number" id="hours" placeholder="Hours" onKeyPress={this.handleKeyPress.bind(this)}/>
                        <button onClick={this.setHours.bind(this)}>Ok</button>
                    </span>
                    
                </div>
                <div className="graph">
                        <RouteContainer hours = {this.state.hours} data={this.state.data} agency={this.state.selectedAgency} route={this.state.selectedRoute} />
                </div>
                <SearchList updateAgencyRoute={this.updateAgencyRoute.bind(this)}/>
            </div>
        );
    }
}

export default App;