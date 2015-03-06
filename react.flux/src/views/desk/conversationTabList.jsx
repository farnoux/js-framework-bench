'use strict';

var React = require('react');
var ReactPropTypes = React.PropTypes;

var ConversationTab = require('./conversationTab.jsx');


function getConversationTab(conversation) {
    return (
        <ConversationTab
            key={conversation.id}
            id={conversation.id}
            message={''} />
    )
}

var ConversationTabList = React.createClass({

    propTypes: {
        conversations: ReactPropTypes.arrayOf(
            ReactPropTypes.shape({
                id: ReactPropTypes.number.isRequired,
            })
        )
    },
    render: function() {
        var tabList = this.props.conversations.map(getConversationTab);

        return (
            <ul className="conversationTabList list-inline">
                {tabList}
            </ul>
      )
    }
});

module.exports = ConversationTabList;
