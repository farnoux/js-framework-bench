'use strict';

var React = require('react');

var ConversationMessageList = require('./desk/conversationMessageList.jsx');
var ConversationTabList = require('./desk/conversationTabList.jsx');

var ConversationStore = require('../stores/conversationStore');
var MessageStore = require('../stores/messageStore');

var Desk = React.createClass({

    getInitialState: function() {

        return {
            currentConversation: ConversationStore.getCurrent(),
            conversations: ConversationStore.getAll(),
            messages: MessageStore.getMessages(),
        };
    },

    componentDidMount: function() {
        MessageStore.onChange(this.onChange);
    },

    componentWillUnmount: function() {
        MessageStore.offChange(this.onChange);
    },

    render: function() {

        return (
          <div>
            <h1 className="Desk">&#9883; React Desk</h1>
            <ConversationMessageList messages={this.state.messages} />
            <ConversationTabList conversations={this.state.conversations} />
          </div>
        )
    },

    onChange: function () {
        console.log('onchange');
        this.setState(this.getInitialState());
    }

});

module.exports = Desk;
