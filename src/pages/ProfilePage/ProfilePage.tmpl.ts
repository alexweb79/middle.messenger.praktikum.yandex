// language=hbs
const profilePageTmpl = `
  {{{ button-arrow }}}
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
            <span class="profile__input">{{ value }}</span>
          </li>
        {{/each}}
      </ul>
      <ul class="profile__list">
        {{#each links}}
          <li class="profile__label">
              <a class="profile__link link {{ class }}" href="{{ href }}">{{ text }}</a>
          </li>
        {{/each}}
      </ul>
    </div>
  </div>
`;
export default profilePageTmpl;
