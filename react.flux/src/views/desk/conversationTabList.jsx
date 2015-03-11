'use strict';

var React = require('react');
var ReactPropTypes = React.PropTypes;

var ConversationTab = require('./conversationTab.jsx');


function getConversationTab(conversation) {
    return (
        <ConversationTab
            key={conversation.id}
            id={conversation.id}
            activeId={this.props.currentConversationId}
            message={''} />
    )
}

var ConversationTabList = React.createClass({

    propTypes: {
        currentConversationId: ReactPropTypes.number,
        conversations: ReactPropTypes.arrayOf(
            ReactPropTypes.shape({
                id: ReactPropTypes.number.isRequired,
            })
        )
    },
    render: function() {
        var tabList = this.props.conversations.map(getConversationTab, this);

        return (
            <ul className="conversationTabList list-inline">
                {tabList}
            </ul>
      )
    }
});

module.exports = ConversationTabList;
