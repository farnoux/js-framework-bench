'use strict';

var m = require('mithril');

var actions = require('../actions');

var ENTER_KEY_CODE = 13;


class MessageComposer {

    constructor() {
        this.text = m.prop('');
    }

    view() {
        return m('div', [
            m('textarea.messageComposer', {
                value: this.text(),
                oninput: this.onTextChange.bind(this),
                onkeydown: this.onKeyDown.bind(this)
            })
        ]);
    }

    onTextChange(event) {
        this.text(event.target.value);
    }

    onKeyDown(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();
            var text = this.text().trim();

            if (text) {
                actions.createMessage(text);
            }

            this.text('');
        }
    }
}

module.exports = new MessageComposer();


// var React = require('react');
// var ReactPropTypes = React.PropTypes;





// module.exports = React.createClass({
//     propTypes: {
//         messages: ReactPropTypes.array
//     },

//     getInitialState: function () {
//         return {
//             text: ''
//         }
//     },

    // render: function() {
    //     return (
    //         <div>
    //             <textarea
    //                 className="messageComposer"
    //                 />
    //         </div>
    //     )
    // },

//     onTextChange: function (event) {
//         this.setState({ text: event.target.value });
//     },


// });
