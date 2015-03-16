'use strict';

var ConversationActions = require('../../actions/conversationActions');

<conversation-tab>
    <li
        class={
            conversationTab: true,
            active: opts.id === opts.active_id
        }
        onClick={this.onClick}>
        {opts.id} | {opts.message}
    </li>

    <style>
        conversation-tab {
            display: inline-block;
        }
    </style>

    onClick() {
        ConversationActions.selectConversation(opts.id);
    }

</conversation-tab>
