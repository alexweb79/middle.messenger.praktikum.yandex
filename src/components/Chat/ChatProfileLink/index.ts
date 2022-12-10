import {ChatProfileLink} from "./ChatProfileLink";
import {SvgArrowSeagull} from "../../icons/SvgArrowSeagull/SvgArrowSeagull";
import Router from "../../../services/Router/Router";
import {profilePage} from "../../../pages/ProfilePage";

export const chatProfileLink = new ChatProfileLink(
  'div',
  {
    attr: { class: 'chat-list__profile-link' },
    'svg-arrow-seagull': new SvgArrowSeagull('div', {}),
    events: {
      click: (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        profilePage.getUserInfo();
        Router.go('/settings');
      },
    },
  },
);
