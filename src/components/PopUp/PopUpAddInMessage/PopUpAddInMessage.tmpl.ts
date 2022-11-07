// language=hbs
const popUpAddInMessageTmpl = `
  <button class="pop-up__button" type="button">
    {{{ svg-image }}}
    <span class="pop-up__button-text">Фото или Видео</span>
  </button>
  <button class="pop-up__button" type="button">
    {{{ svg-file }}}
    <span class="pop-up__button-text">Файл</span>
  </button>
  <button class="pop-up__button" type="button">
    {{{ svg-location }}}
    <span class="pop-up__button-text">Локация</span>
  </button>
`;
export default popUpAddInMessageTmpl;
