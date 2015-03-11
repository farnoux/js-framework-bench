var riot = require('riot');

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

// AppDispatcher.register(function (action) {

//     switch (action.type) {

//         case 'conversation.select':
//             currentConversationId = action.conversationId;
//             break;
//     }

//     ConversationStore.emitChange();
// });

module.exports = ConversationStore;
