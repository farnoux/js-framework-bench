'use strict';

var riot = require('riot');
// var _ = require('lodash');

var ConversationStore = require('./conversationStore');
var AppDispatcher = require('../dispatcher/appDispatcher');
var Api = require('../api/api');

var messages = Api.getMessagesForConversation(ConversationStore.getCurrent());

var MessageStore = {

    emitChange: function() {
        this.trigger('change');
    },

    onChange: function (callback) {
        this.on('change', callback);
    },

    offChange: function (callback) {
        this.off('change', callback);
    },

    getMessages: function () {
        return messages;
    }

};

riot.observable(MessageStore);

AppDispatcher.on('conversation.select', action => {
    messages = Api.getMessagesForConversation(action.conversationId);
    MessageStore.emitChange();
});

AppDispatcher.on('messsage.create', action => {
    messages.push(Api.createMessage(action.textMessage, ConversationStore.getCurrent()));
    MessageStore.emitChange();
});

module.exports = MessageStore;
