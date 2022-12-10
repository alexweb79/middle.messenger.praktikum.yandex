// language=hbs
const passwordChangePageTmpl = `
  {{{ link-arrow }}}
  <div class="page-profile__data">
    <form class="form-profile profile" action="">
      <div class="profile__avatar">
        {{{ avatar }}}
      </div>
      <ul class="profile__list">
        {{{ oldPassword }}}
        {{{ newPassword }}}
        {{{ confirmNewPassword }}}
      </ul>
      <ul class="profile__list">
        <li class="profile__label">
          {{{ button }}}
        </li>
      </ul>
    </form>
  </div>
`;
export default passwordChangePageTmpl;
