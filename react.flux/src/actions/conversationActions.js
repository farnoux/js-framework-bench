var Dispatcher = require('../dispatcher/appDispatcher');

module.exports = {

    selectConversation: function (conversationId) {
        Dispatcher.dispatch({
            type: 'conversation.select',
            conversationId
        });
    }
};
