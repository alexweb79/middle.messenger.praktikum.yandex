import {Link} from "../components/Link/Link";
import {describe} from "mocha";

describe('component Link', function() {
  it('should be render', () => {
    new Link('a', {
      class: ' link',
      href: '/run',
      text: 'Click me',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
        },
      },
    })
  });
})
