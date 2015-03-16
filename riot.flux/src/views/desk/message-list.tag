'use strict';

require('./message.tag');

<message-list>
    <div class="conversationMessages">
        <message each={ opts.messages } message={ this }></message>
    </div>
</message-list>
