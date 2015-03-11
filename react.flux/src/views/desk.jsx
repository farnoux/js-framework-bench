'use strict';

var React = require('react');

var MessageList = require('./desk/messageList.jsx');
var MessageComposer = require('./desk/messageComposer.jsx');
var ConversationTabList = require('./desk/conversationTabList.jsx');

var ConversationStore = require('../stores/conversationStore');
var MessageStore = require('../stores/messageStore');

var Desk = React.createClass({

    getInitialState: function() {

        return {
            currentConversationId: ConversationStore.getCurrent(),
            conversations: ConversationStore.getAll(),
            messages: MessageStore.getMessages(),
        };
    },

    componentDidMount: function() {
        MessageStore.onChange(this.onMessagesChange);
        ConversationStore.onChange(this.onMessagesChange);
    },

    componentWillUnmount: function() {
        MessageStore.offChange(this.onMessagesChange);
        ConversationStore.offChange(this.onMessagesChange);
    },

    render: function() {

        return (
          <div>
            <h1 className="Desk">&#9883; React Desk</h1>
            <MessageList messages={this.state.messages} />
            <MessageComposer />
            <ConversationTabList
                conversations={this.state.conversations}
                currentConversationId={this.state.currentConversationId} />
          </div>
        )
    },

    onMessagesChange: function () {
        this.setState(this.getInitialState());
    }

});

module.exports = Desk;
