// language=hbs
const chatSearchTmpl = `
  <form class="chat-search" action="">
    <label class="chat-search__label">
      {{{ input }}}
      <span class="chat-search__placeholder">
        {{{ svg-lupe }}}
        <span class="chat-search__placeholder-text">Поиск</span>
      </span>
    </label>
  </form>
`;
export default chatSearchTmpl;
