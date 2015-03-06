'use strict';

var React = require('react');
var ReactPropTypes = React.PropTypes;

var ConversationActions = require('../../actions/conversationActions');

var ConversationTab = React.createClass({

    propTypes: {
        id: ReactPropTypes.number.isRequired,
        message: ReactPropTypes.string,
    },

    render: function() {
        return (
            <li
                className="conversationTab"
                onClick={this.onClick}>{this.props.id} | {this.props.message}</li>
        )
    },

    onClick: function () {
        ConversationActions.selectConversation(this.props.id);
    }
});

module.exports = ConversationTab;
