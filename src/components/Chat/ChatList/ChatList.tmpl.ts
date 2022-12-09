// language=hbs
const chatListTmpl = `
  <div class="chat-items">
    {{#each chats}}
      <div class="chat-items__chat-item" data-id="{{ id }}" data-created-by="{{ created_by }}">
        <div class="chat-item">
          <div class="chat-item__col-left">
            <div class="chat-item__avatar">{{#if avatar}}<img src="{{ avatar }}" alt="">{{/if}}</div>
          </div>
          <div class="chat-item__col-right">
            <div class="chat-item__name">{{ title }}</div>
            <time class="chat-item__date">{{ last_message.time }}</time>
            <div class="chat-item__message">{{#if me}}<strong>Вы:</strong> {{/if}}{{ last_message.content }}</div>
            {{#if unread_count}}<div class="chat-item__message-count">{{ unread_count }}</div>{{/if}}
          </div>
        </div>
      </div>
    {{/each}}
  </div>
`;
export default chatListTmpl;
