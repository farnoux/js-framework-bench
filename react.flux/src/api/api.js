var _ = require('lodash');

var conversations = [
    { id: 12 },
    { id: 68 },
    { id: 98 }
];

var messages = [
    {
        conversationId: 12,
        author: 'Bobby',
        text: 'bonsoir',
        timestamp: Date.now() - 99999
    },
    {
        conversationId: 12,
        author: 'Bobby',
        text: 'ça se passe bien ?',
        timestamp: Date.now() - 89999
    },
    {
        conversationId: 12,
        author: 'Michel',
        text: 'impec boboche',
        timestamp: Date.now() - 79999
    },
    {
        conversationId: 12,
        author: 'Bobby',
        text: 'je m\'appelle pas boboche putain',
        timestamp: Date.now() - 69999
    },
    {
        conversationId: 68,
        author: 'Bobby',
        text: 'bonsoir',
        timestamp: Date.now() - 99999
    },
    {
        conversationId: 68,
        author: 'Roberto',
        text: 'youp la boom',
        timestamp: Date.now() - 89999
    },
    {
        conversationId: 68,
        author: 'Roberto',
        text: 'roule ma poule',
        timestamp: Date.now() - 79999
    },
    {
        conversationId: 98,
        author: 'Gorgio',
        text: 'Salut Morodor',
        timestamp: Date.now() - 99999
    }
];




var Api = {
    getMessagesForConversation: function (conversationId) {
        return _.filter(messages, (message) => {
            return message.conversationId == conversationId;
        });
        // localStorage.setItem('messages');
    },

    getConversations: function () {
        return conversations;
    },

    createMessage: function (textMessage, conversationId) {
        var timestamp = Date.now();
        var message = {
            id: timestamp,
            timestamp: timestamp,
            author: 'Bobby',
            text: textMessage,
            conversationId,
        };

        messages.push(message);
        return message;
    }
};

module.exports = Api;
