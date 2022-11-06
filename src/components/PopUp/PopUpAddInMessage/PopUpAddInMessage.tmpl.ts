// language=hbs
const popUpAddInMessageTmpl = `
  <button class="pop-up__button" type="button">
    {{{ svg-image }}}
    <span>Фото или Видео</span>
  </button>
  <button class="pop-up__button" type="button">
    {{{ svg-file }}}
    <span>Файл</span>
  </button>
  <button class="pop-up__button" type="button">
    {{{ svg-location }}}
    <span>Локация</span>
  </button>
`;
export default popUpAddInMessageTmpl;
