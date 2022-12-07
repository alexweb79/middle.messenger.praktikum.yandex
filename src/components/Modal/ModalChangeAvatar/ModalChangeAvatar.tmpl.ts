// language=hbs
const modalChangeAvatarTmpl = `
  <div class="modal">
    <form class="modal__form">
      <div class="modal__title">
        {{ title }}
      </div>
      <div class="modal__label modal__label-file">
        {{{ file }}}
      </div>
      <div class="modal__button">
        {{{ button }}}
      </div>
    </form>
  </div>
  {{{ modalOverflow }}}
`;
export default modalChangeAvatarTmpl;
