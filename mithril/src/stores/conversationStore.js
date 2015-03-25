'use strict';

var m = require('mithril');

var dispatcher = require('../dispatcher');
var api = require('../api');

var conversations = m.prop(api.getConversations());
var currentConversationId = m.prop(conversations()[0].id);

var ConversationStore = {

    getCurrent: function () {
        return currentConversationId;
    },

    getAll: function () {
        return conversations;
    }
};

dispatcher.on('conversation.select', action => {
    currentConversationId(action.conversationId);
});

module.exports = ConversationStore;
