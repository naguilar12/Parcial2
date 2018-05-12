import React, { Component } from 'react';

class RouteCommentsList extends Component {
    sendMessage(){
        var message = document.getElementById("textField").value;
        Meteor.call();
    }

    render() {
        return (
            <div>
                <input id="textField" type="text" name="firstname" placeholder="Message"/>
                <button onClick={this.sendMessage}>Send</button>
            </div>
        );
    }
}

export default RouteCommentsList;