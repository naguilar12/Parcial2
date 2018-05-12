import React, { Component } from 'react';
import AgenciesList from './AgenciesList';
import AccountsUI from './AccountsUI';
import SearchList from './SearchList';
import RouteContainer from './RouteContainer';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    updateGraph(newInfo){
        this.setState({
            data: newInfo
        });
        console.log(newInfo);
    }

    render() {
        return (
            <div>
                <AccountsUI/>
                <AgenciesList updateGraph={this.updateGraph.bind(this)} /> 
                <RouteContainer data={this.state.data}/> 
                <SearchList/>
            </div>
        );
    }
}

export default App;