// language=hbs
const chatSendMessageTmpl = `
  <div class="send-message">
    {{{ button-clip }}}
    <form class="send-message__form" action="">
      {{{ send-message }}}
      <div class="send-message__button">
        {{{ button-arrow }}}
      </div>
    </form>
  </div>
`;
export default chatSendMessageTmpl;
