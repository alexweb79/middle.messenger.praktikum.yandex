// language=hbs
const labelTmpl = `
  {{#if name}}
    <input class="{{ class }}" type="{{ type }}" name="{{ name }}" value="{{ value }}" placeholder="{{ placeholder }}" required="{{ required }}" />
  {{/if}}
  {{#if placeholder}}
    <span class="form__input-placeholder">{{ placeholder }}</span>
  {{/if}}
  {{#if errorText}}
    <span class="form__input-error">{{ errorText }}</span>
  {{/if}}
`;
export default labelTmpl;
