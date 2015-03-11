'use strict';

// var ConversationActions = require('../../actions/conversationActions');

var ENTER_KEY_CODE = 13;

<message-composer>
    <div>
        <textarea
            class="messageComposer"
            value={text}
            onChange={onTextChange}
            onKeyDown={onKeyDown} />
    </div>


    this.text = '';

    function onTextChange(event) {
        this.text = event.target.value;
    }

    onKeyDown(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();
            var text = this.text.trim();

            if (text) {
                ConversationActions.createMessage(text);
            }

            this.text = '';
        }
    }

</message-composer>
