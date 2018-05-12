import React, { Component } from 'react';
import { withTracker } from "meteor/react-meteor-data";
import { Comments } from "../api/Comments";
import "./style/Comments.css";


class RouteCommentsList extends Component {
    sendMessage() {
        var message = document.getElementById("textField").value;
        if (!Meteor.userId())
            alert("You need to sign in!")


        Meteor.call("comments.insertComment", this.props.agency, this.props.route, message);
    }

    renderMessages() {
        var i = 1;
        return this.props.comments.map((c) => {
            return <li key={c.agency + c.route + (i) + c.comment}><span className="fa">{i++}.</span><p>{c.comment}</p> </li>
        })
    }

    handleKeyPress = (event) => {
        if(event.key == 'Enter'){
            this.sendMessage()
            document.getElementById("textField").value = "";

        }
      }

    render() {
        return (
            <div>
                <div className="fo">
                <h4>Comments related with this route</h4>
                    <ol>
                        {this.renderMessages()}
                    </ol>
                <input id="textField" type="text" name="firstname" placeholder="Message" onKeyPress={this.handleKeyPress.bind(this)} />
                <button onClick={this.sendMessage.bind(this)}>Send</button>
                </div>
            </div>
        );
    }
}

export default withTracker((props) => {
    console.log(props);
    return {
        comments: Comments.find({ agency: props.agency, route: props.route }).fetch()
    };
})(RouteCommentsList);