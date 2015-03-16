'use strict';

require('./desk/message-list.tag');
require('./desk/message-composer.tag');
require('./desk/conversation-tab-list.tag');

var ConversationStore = require('../stores/conversationStore');
var MessageStore      = require('../stores/messageStore');


<desk>

    <div>
        <h1 className="Desk">Riot Desk</h1>
        <message-list messages={messages} />
        <message-composer />
        <conversation-tab-list
            conversations={conversations}
            current_conversation_id={currentConversationId} />
    </div>

    this.on('update', function() {
        // console.log('desk update');
    });

    this.on('mount', function() {
        MessageStore.onChange(this.onMessagesChange);
        ConversationStore.onChange(this.onMessagesChange);
    });

    this.on('unmount', function() {
        MessageStore.offChange(this.onMessagesChange);
        ConversationStore.offChange(this.onMessagesChange);
    });

    onMessagesChange() {
        this.currentConversationId = ConversationStore.getCurrent();
        this.conversations         = ConversationStore.getAll();
        this.messages              = MessageStore.getMessages();

        this.update();
    }

    this.onMessagesChange();

</desk>

