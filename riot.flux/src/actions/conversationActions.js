var Dispatcher = require('../dispatcher/appDispatcher');

module.exports = {

    selectConversation: function (conversationId) {
        Dispatcher.trigger('conversation.select', { conversationId } );
    },

    createMessage: function (textMessage) {
        Dispatcher.trigger('messsage.create', { textMessage })
    }

};
