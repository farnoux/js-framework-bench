var Dispatcher = require('../dispatcher/appDispatcher');

module.exports = {

    selectConversation: function (conversationId) {
        Dispatcher.dispatch({
            type: 'conversation.select',
            conversationId
        });
    },

    createMessage: function (textMessage) {
        Dispatcher.dispatch({
            type: 'messsage.create',
            textMessage
        })
    }

};
