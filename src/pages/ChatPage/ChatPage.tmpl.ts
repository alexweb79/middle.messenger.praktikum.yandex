// language=hbs
const chatPageTmpl = `
  <div class="page-chat">
    <div class="page-chat__chat-list">
      <div class="chat-list">
        {{{ chat-profile-link }}}
        {{{ chat-search }}}
        {{{ button-open-modal-create-chat }}}
        {{{ button-open-modal-remove-chat }}}
        {{{ chat-list }}}
        {{{ modal-create-chat }}}
        {{{ modal-remove-chat }}}
      </div>
    </div>
    <div class="page-chat__chat">
        <div class="chat">
          {{#if chat-show}}
            <div class="chat__info">
              {{{ chat-info }}}
              {{{ modal-add-user-to-chat }}}
              {{{ modal-delete-user-from-chat }}}
            </div>
            <div class="chat__box">
              {{{ chat-box }}}
            </div>
            <div class="chat__send-message">
              {{{ chat-send-message }}}
            </div>
          {{/if}}
          {{#if chat-hide}}
            <div class="chat-not-selected">Выберите чат, чтобы отправить сообщение</div>
          {{/if}}
        </div>
    </div>
    <script type="module">
      import togglePopUp from '../../utils/mydash/togglePopUp.ts';
      togglePopUp();
    </script>
  </div>
`;
export default chatPageTmpl;
