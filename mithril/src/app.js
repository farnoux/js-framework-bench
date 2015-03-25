'use strict';

var m = require('mithril');

var messageList = require('./views/messageList');
var messageComposer = require('./views/messageComposer');
var conversationTabList = require('./views/conversationTabList');

var messageStore = require('./stores/messageStore');
var conversationStore = require('./stores/conversationStore');


//namespace
var app = {};

//controller
app.controller = function() {
    return {
        messages: messageStore.getMessages(),
        conversations: conversationStore.getAll(),
        currentConversationId: conversationStore.getCurrent()
    }
};

//view
app.view = function(ctrl) {
    return [
        m('div', [
            m('h1', 'Mithril Desk'),
            messageList.view({ messages: ctrl.messages }),
            messageComposer.view(),
            conversationTabList.view({
                conversations: ctrl.conversations,
                currentConversationId: ctrl.currentConversationId
            }),
        ])
    ];
};

//initialize
m.module(document.getElementById('content'), app);
