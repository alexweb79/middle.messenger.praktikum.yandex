// language=hbs
const chatPageTmpl = `
  <div class="page-chat">
    <div class="page-chat__chat-list">
      <div class="chat-list">
        {{{ chat-profile-link }}}
        {{{ chat-search }}}
        {{{ chat-list }}}
      </div>
    </div>
    <div class="page-chat__chat">
      <div class="chat">
        <div class="chat__info">
          {{{ chat-info }}}
        </div>
        <div class="chat__box">
          {{{ chat-box }}}
        </div>
        <div class="chat__send-message">
          {{{ chat-send-message }}}
        </div>
      </div>
    </div>
    <script type="module">
      import togglePopUp from '../../utils/mydash/togglePopUp.ts';
      togglePopUp();
    </script>
  </div>
`;
export default chatPageTmpl;
