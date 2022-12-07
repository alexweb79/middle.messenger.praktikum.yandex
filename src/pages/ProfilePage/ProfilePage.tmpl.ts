// language=hbs
const profilePageTmpl = `
  {{{ link-arrow }}}
  <div class="page-profile__data">
    <div class="form-profile profile">
      <div class="profile__avatar">
        {{{ avatar }}}
      </div>
      <h1 class="profile__title">{{ title }}</h1>
      <ul class="profile__list">
        {{#each items}}
          <li class="profile__label">
            <span class='profile__input-placeholder'>{{ placeholder }}</span>
            <span class="profile__input" data-name="{{ name }}">{{ value }}</span>
          </li>
        {{/each}}
      </ul>
      <ul class="profile__list">
        {{{link-settings-change-data}}}
        {{{link-settings-change-password}}}
        {{{link-sign-in}}}
      </ul>
    </div>
  </div>
`;
export default profilePageTmpl;
