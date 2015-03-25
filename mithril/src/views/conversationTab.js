'use strict';

var m = require('mithril');
var actions = require('../actions');

class ConversationTab {
    view(ctrl) {
        // debugger;
        return m('li.conversationTab', {
            class: (ctrl.activeId() === ctrl.id) ? 'active' : '',
            onclick: this.onclick.bind(this, ctrl.id)
        }, ctrl.id);
    }

    onclick(conversationId) {
        actions.selectConversation(conversationId);
    }
}

module.exports = ConversationTab;




// <conversation-tab>
//     <li
//         class={
//             conversationTab: true,
//             active: opts.id === opts.active_id
//         }
//         onClick={this.onClick}>
//         {opts.id} | {opts.message}
//     </li>


// </conversation-tab>

