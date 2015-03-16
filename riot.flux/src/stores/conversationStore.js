'use strict';

var riot = require('riot');

var AppDispatcher = require('../dispatcher/appDispatcher');
var Api = require('../api/api');

var conversations = Api.getConversations();
var currentConversationId = conversations[0].id;

var ConversationStore = {

    emitChange: function() {
        this.trigger('change');
    },

    onChange: function (callback) {
        this.on('change', callback);
    },

    offChange: function (callback) {
        this.off('change', callback);
    },

    getCurrent: function () {
        return currentConversationId;
    },

    getAll: function () {
        return conversations;
    }
};

riot.observable(ConversationStore);

AppDispatcher.on('conversation.select', action => {
    currentConversationId = action.conversationId;
    ConversationStore.emitChange();
});

module.exports = ConversationStore;
