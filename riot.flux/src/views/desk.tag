'use strict';

require('./desk/message-list.tag');
require('./desk/message-composer.tag');
// require('./desk/conversation-tab-list.tag');

var ConversationStore = require('../stores/conversationStore');
var MessageStore      = require('../stores/messageStore');


<desk>

    <div>
        <h1 className="Desk">Riot Desk</h1>
        <message-list messages={messages} />
        <message-composer />
        <ConversationTabList
            conversations={conversations}
            currentConversationId={currentConversationId} />
    </div>


    this.currentConversationId = ConversationStore.getCurrent();
    this.conversations         = ConversationStore.getAll();
    this.messages              = MessageStore.getMessages();

    // componentDidMount() {
    //     MessageStore.onChange(this.onMessagesChange);
    //     ConversationStore.onChange(this.onMessagesChange);
    // }

    // componentWillUnmount() {
    //     MessageStore.offChange(this.onMessagesChange);
    //     ConversationStore.offChange(this.onMessagesChange);
    // }

    // onMessagesChange() {
    //     this.setState(this.getInitialState());
    // }

</desk>

