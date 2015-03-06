'use strict';

var React = require('react');
var ReactPropTypes = React.PropTypes;

var ConversationMessage = require('./conversationMessage.jsx');

function getConversationMessage(message, index) {
    return (
        <ConversationMessage key={index} message={message} />
    )
}

module.exports = React.createClass({
    propTypes: {
        messages: ReactPropTypes.array
    },

    render: function() {
        var messages = this.props.messages;
        var messageList = (messages && messages.length) ? messages.map(getConversationMessage) : null;

        return (
            <div className="conversationMessages">
                {messageList}
            </div>
        )
    }
});
