// language=hbs
const chatInfoTmpl = `
  <div class="info">
    <div class="info__image"></div>
    <div class="info__name">{{ name }}</div>
    <button class="info__button" type="button" data-pop-up="action-user">
      {{{ svg-elipsis }}}
    </button>
  </div>
`;
export default chatInfoTmpl;
