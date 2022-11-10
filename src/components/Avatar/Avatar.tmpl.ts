// language=hbs
const avatarTmpl = `
    {{{ svg-no-avatar }}}
    {{#if changeButton}}
      {{{ button }}}
    {{/if}}
`;
export default avatarTmpl;
