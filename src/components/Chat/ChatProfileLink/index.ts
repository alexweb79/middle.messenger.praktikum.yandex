import {ChatProfileLink} from "./ChatProfileLink";
import {SvgArrowSeagull} from "../../icons/SvgArrowSeagull/SvgArrowSeagull";
import Router from "../../../services/Router/Router";

export const chatProfileLink = new ChatProfileLink(
  'div',
  {
    attr: { class: 'chat-list__profile-link' },
    'svg-arrow-seagull': new SvgArrowSeagull('div', {}),
    events: {
      click: (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        Router.go('/settings');
      },
    },
  },
);
