'use strict';

var m = require('mithril');

class Message {
    view(ctrl) {
        return m('div.conversationMessage', ctrl.message.text);
    }
}

module.exports = Message;
