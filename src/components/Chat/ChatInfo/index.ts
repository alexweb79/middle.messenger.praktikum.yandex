import {ChatInfo} from "./ChatInfo";
import {ButtonElipsis} from "../../ButtonElipsis/ButtonElipsis";
import {SvgElipsis} from "../../icons/SvgElipsis/SvgElipsis";
import togglePopUp from '../../../utils/mydash/togglePopUp';

export const chatInfo = new ChatInfo(
  'div',
  {
    attr: {}, name: 'Олег',
    'button-elipsis': new ButtonElipsis(
      'button',
      {
        attr: { class: 'info__button', type: 'button', 'data-pop-up': 'action-user' },
        'svg-elipsis': new SvgElipsis('div', {}),
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            togglePopUp();
          },
        },
      },
    ),
  },
);
