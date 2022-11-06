// language=hbs
const registrationPageTmpl = `
  <form class="form" action="">
    <h1 class="form__title">Регистрация</h1>
    {{{ email }}}
    {{{ login }}}
    {{{ first_name }}}
    {{{ second_name }}}
    {{{ phone }}}
    {{{ password }}}
    {{{ password_confirm }}}
    {{{ button }}}
    {{{ link }}}
  </form>
`;
export default registrationPageTmpl;
