var Dispatcher = require('./dispatcher');

module.exports = {

    selectConversation: function (conversationId) {
        Dispatcher.emit('conversation.select', { conversationId } );
    },

    createMessage: function (textMessage) {
        Dispatcher.emit('messsage.create', { textMessage })
    }

};
