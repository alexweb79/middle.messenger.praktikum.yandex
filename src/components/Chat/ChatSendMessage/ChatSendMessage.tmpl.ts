// language=hbs
const chatSendMessageTmpl = `
  <div class="send-message">
    <button class="send-message__add-any-in-message-button" type="button" data-pop-up="add-in-message">
      {{{ svg-clip }}}
    </button>
    <form class="send-message__form" action="">
      {{{ send-message }}}
      <div class="send-message__button">
        {{{ button-arrow }}}
      </div>
    </form>
  </div>
`;
export default chatSendMessageTmpl;
