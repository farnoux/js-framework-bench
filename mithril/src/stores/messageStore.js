'use strict';

var _ = require('lodash');
var m = require('mithril');

var dispatcher = require('../dispatcher');
var api = require('../api');

var conversationStore = require('./conversationStore');

var initialMessages = api.getMessagesForConversation(conversationStore.getCurrent()());
var messages = m.prop(initialMessages);


var MessageStore = {
    getMessages: function () {
        return messages;
    }
};

dispatcher.on('conversation.select', action => {
    messages(api.getMessagesForConversation(action.conversationId));
});

dispatcher.on('messsage.create', action => {
    var currentConversation = conversationStore.getCurrent()();
    var message = api.createMessage(action.textMessage, currentConversation);
    messages().push(message);
});

module.exports = MessageStore;
