// language=hbs
const profileChangeDataPageTmpl = `
  {{{ button-arrow }}}
  <div class="page-profile__data">
    <form class="form-profile profile" action="">
      <div class="profile__avatar">
        {{{ avatar }}}
      </div>
      <ul class="profile__list">
        {{{ email }}}
        {{{ login }}}
        {{{ first_name }}}
        {{{ second_name }}}
        {{{ display_name }}}
        {{{ phone }}}
      </ul>
      <ul class="profile__list">
        <li class="profile__label">
          {{{ button }}}
        </li>
      </ul>
    </form>
  </div>
`;
export default profileChangeDataPageTmpl;
