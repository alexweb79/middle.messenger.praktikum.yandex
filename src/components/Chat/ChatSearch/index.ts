import {ChatSearch} from "./ChatSearch";
import {Input} from "../../Input/Input";
import {SvgLupe} from "../../icons/SvgLupe/SvgLupe";

export const chatSearch = new ChatSearch(
  'div',
  {
    attr: { class: 'chat-list__chat-search' },
    input: new Input(
      'input',
      {
        attr: {
          class: 'chat-search__input', type: 'search', name: 'search', value: '', placeholder: 'Поиск', required: '',
        },
      },
    ),
    'svg-lupe': new SvgLupe('div', {}),
  },
);
