
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

var ConversationStore = require('./conversationStore');
var AppDispatcher = require('../dispatcher/appDispatcher');
var Api = require('../api/api');

var messages = Api.getMessagesForConversation(ConversationStore.getCurrent().id);

var MessageStore = _.assign({}, EventEmitter.prototype, {

    emitChange: function() {
        this.emit('change');
    },

    onChange: function (callback) {
        this.on('change', callback);
    },

    offChange: function (callback) {
        this.removeListener(callback);
    },

    getMessages: function () {
        return messages;
    }

});

AppDispatcher.register(function (action) {

    switch (action.type) {

        case 'conversation.select':
            messages = Api.getMessagesForConversation(action.conversationId);
            break;
    }

    MessageStore.emitChange();
});

module.exports = MessageStore;
