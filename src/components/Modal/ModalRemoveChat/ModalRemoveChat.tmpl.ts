// language=hbs
const modalRemoveChatTmpl = `
  <div class="modal">
    <form class="form-profile profile">
      <div class="modal__title">
        {{ title }}
      </div>
      <div class="modal__label modal__label-number">
        {{{ label }}}
      </div>
      <div class="modal__button">
        {{{ button }}}
      </div>
    </form>
  </div>
  {{{ modalOverflow }}}
`;
export default modalRemoveChatTmpl;
