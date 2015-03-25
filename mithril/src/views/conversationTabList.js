'use strict';

var m = require('mithril');

var ConversationTab = require('./conversationTab');

var tabList = {};

tabList.view = function (ctrl) {
    var conversations = ctrl.conversations().map(conversation => {
        return new ConversationTab().view({
            id: conversation.id,
            activeId: ctrl.currentConversationId,
            message: ''
        });
    });

    return m('ul.conversationTabList.list-inline', conversations);
};

module.exports = tabList;
