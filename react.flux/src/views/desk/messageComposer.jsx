'use strict';

var React = require('react');
var ReactPropTypes = React.PropTypes;

var ConversationActions = require('../../actions/conversationActions');

var ENTER_KEY_CODE = 13;

module.exports = React.createClass({
    propTypes: {
        messages: ReactPropTypes.array
    },

    getInitialState: function () {
        return {
            text: ''
        }
    },

    render: function() {
        return (
            <div>
                <textarea
                    className="messageComposer"
                    value={this.state.text}
                    onChange={this.onTextChange}
                    onKeyDown={this.onKeyDown} />
            </div>
        )
    },

    onTextChange: function (event) {
        this.setState({ text: event.target.value });
    },

    onKeyDown: function (event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();
            var text = this.state.text.trim();

            if (text) {
                ConversationActions.createMessage(text);
            }

            this.setState({ text: '' });
        }
    }

});
