// language=hbs
const modalDeleteUserFromChatTmpl = `
  <div class="modal">
    <form class="form-profile profile">
      <div class="modal__title">
        {{ title }}
      </div>
      <div class="modal__label modal__label-text">
        {{{ input }}}
      </div>
      <div class="modal__button">
        {{{ button }}}
      </div>
    </form>
  </div>
  {{{ modalOverflow }}}
`;
export default modalDeleteUserFromChatTmpl;
