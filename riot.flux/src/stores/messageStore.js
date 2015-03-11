
var riot = require('riot');
// var _ = require('lodash');

var ConversationStore = require('./conversationStore');
var Api = require('../api/api');

var messages = Api.getMessagesForConversation(ConversationStore.getCurrent());

var MessageStore = {

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

};

riot.observable(MessageStore);

// AppDispatcher.register(function (action) {

//     switch (action.type) {

//         case 'conversation.select':
//             messages = Api.getMessagesForConversation(action.conversationId);
//             break;

//         case 'messsage.create':
//             messages.push(Api.createMessage(action.textMessage, ConversationStore.getCurrent()));
//             break;
//     }

//     MessageStore.emitChange();
// });

module.exports = MessageStore;
