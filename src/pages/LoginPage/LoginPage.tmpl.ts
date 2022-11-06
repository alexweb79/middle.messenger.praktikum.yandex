// language=hbs
const loginPageTmpl = `
  <form class="form" action="">
    <h1 class="form__title">Вход</h1>
    {{{ login }}}
    {{{ password }}}
    {{{ button }}}
    {{{ link }}}
  </form>
`;
export default loginPageTmpl;
