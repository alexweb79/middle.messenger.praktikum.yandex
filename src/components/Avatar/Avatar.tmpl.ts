// language=hbs
const avatarTmpl = `
    {{{ svg-no-avatar }}}
    {{#if src}}
        <img class="avatar__image" src="{{src}}" alt="">
    {{/if}}
    {{#if changeButton}}
      {{{ button }}}
    {{/if}}
    {{{ modal }}}
`;
export default avatarTmpl;
