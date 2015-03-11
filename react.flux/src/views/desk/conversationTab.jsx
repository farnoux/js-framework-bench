'use strict';

var React = require('react');
var ReactPropTypes = React.PropTypes;
var cx = require('react/lib/cx');

var ConversationActions = require('../../actions/conversationActions');

var ConversationTab = React.createClass({

    propTypes: {
        id: ReactPropTypes.number.isRequired,
        message: ReactPropTypes.string,
        activeId: ReactPropTypes.number,
    },

    render: function() {
        return (
            <li
                className={ cx({
                    'conversationTab': true,
                    'active': this.props.id === this.props.activeId
                }) }
                onClick={this.onClick}>{this.props.id} | {this.props.message}</li>
        )
    },

    onClick: function () {
        ConversationActions.selectConversation(this.props.id);
    }
});

module.exports = ConversationTab;
