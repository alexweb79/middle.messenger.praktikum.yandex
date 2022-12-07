import {Button} from "./Button";

export const button = new Button(
  'button',
  {
    attr: { class: '333', type: 'button' },
    text: 'Отправить',
    events: {
      click: (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
      },
    },
  },
);
