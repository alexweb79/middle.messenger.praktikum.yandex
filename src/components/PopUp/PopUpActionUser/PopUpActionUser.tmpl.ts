// language=hbs
const popUpActionUserTmpl = `
  <button class="pop-up__button" type="button">
    {{{ svg-around-plus }}}
    <span class="pop-up__button-text">Добавить пользователя</span>
  </button>
  <button class="pop-up__button" type="button">
    {{{ svg-around-x }}}
    <span class="pop-up__button-text">Удалить пользователя</span>
  </button>
`;
export default popUpActionUserTmpl;
