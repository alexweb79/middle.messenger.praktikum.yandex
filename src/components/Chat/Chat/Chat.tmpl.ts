// language=hbs
const chatTmpl = `
  <div class="chat-items__chat-item">
    <div class="chat-item">
      <div class="chat-item__col-left">
        <div class="chat-item__avatar"></div>
      </div>
      <div class="chat-item__col-right">
        <div class="chat-item__name">{{ name }}</div>
        <time class="chat-item__date">{{ date }}</time>
        <div class="chat-item__message">{{#if me}}<span class="chat-item__message-bold">Вы:</span> {{/if}}{{ message }}</div>
        {{#if count}}<div class="chat-item__message-count">{{ count }}</div>{{/if}}
      </div>
    </div>
  </div>
`;
export default chatTmpl;
