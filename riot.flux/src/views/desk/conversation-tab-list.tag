'use strict';

require('./conversation-tab.tag');

<conversation-tab-list>
    <ul class="conversationTabList list-inline">

        <conversation-tab each={ opts.conversations }
            id={ this.id }
            active_id={ parent.opts.current_conversation_id }
            message={''} />

    </ul>
</conversation-tab-list>
