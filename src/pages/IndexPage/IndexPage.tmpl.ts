// language=hbs
const indexPageTmpl = `
    {{#each items}}
        <li><a class="{{ class }}" href="{{ href }}">{{ text }}</a></li>
    {{/each}}
`;
export default indexPageTmpl;
