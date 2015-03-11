'use strict';

var React = require('react');
var ReactPropTypes = React.PropTypes;

module.exports = React.createClass({

    propTypes: {
        message: ReactPropTypes.object
    },

    render: function() {
        return (
            <div className="conversationMessage">
                {this.props.message.text}
            </div>
        )
    }
});
