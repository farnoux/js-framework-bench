
// var conversations = [
//     { id: 123, messages: [{ text: 'hop' }, { text: 'voila' }, { text: 'papayou' }, { text: 'tirladada' }] },
//     { id: 456, messages: [{ text: 'hello react' }] }
// ];

var AppDispatcher = require('../dispatcher/appDispatcher');
var Api = require('../api/api');

var conversations = Api.getConversations();
var currentConversation = conversations[0];

var ConversationStore = {

    getCurrent: function () {
        return currentConversation;
    },

    getAll: function () {
        return conversations;
    }
};

module.exports = ConversationStore;
