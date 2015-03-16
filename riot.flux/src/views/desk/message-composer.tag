'use strict';

var ConversationActions = require('../../actions/conversationActions');

var ENTER_KEY_CODE = 13;

<message-composer>
    <div>
        <textarea
            class="messageComposer"
            name="textInput"
            onKeyDown={onKeyDown} />
    </div>

    onKeyDown(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();
            var text = this.textInput.value.trim();

            if (text) {
                ConversationActions.createMessage(text);
            }

            this.textInput.value = '';
        }

        return true;
    }

</message-composer>
