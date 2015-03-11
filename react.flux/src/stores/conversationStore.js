var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

var AppDispatcher = require('../dispatcher/appDispatcher');
var Api = require('../api/api');

var conversations = Api.getConversations();
var currentConversationId = conversations[0].id;

var ConversationStore = _.assign({}, EventEmitter.prototype, {

    emitChange: function() {
        this.emit('change');
    },

    onChange: function (callback) {
        this.on('change', callback);
    },

    offChange: function (callback) {
        this.removeListener(callback);
    },

    getCurrent: function () {
        return currentConversationId;
    },

    getAll: function () {
        return conversations;
    }
});

AppDispatcher.register(function (action) {

    switch (action.type) {

        case 'conversation.select':
            currentConversationId = action.conversationId;
            break;
    }

    ConversationStore.emitChange();
});

module.exports = ConversationStore;
