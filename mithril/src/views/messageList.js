'use strict';

var Message = require('./message');
var m = require('mithril');

var messageList = {};

messageList.view = function (ctrl) {
    var messages = ctrl.messages().map(message => {
        return new Message().view({ message });
    });

    return m('div.conversationMessages', messages);
};

module.exports = messageList;
