import {Block, Props} from '../../services/Block';
import buttonPlusTmpl from './ButtonPlus.tmpl';
import {SvgAroundPlus} from "../icons/SvgAroundPlus/SvgAroundPlus";
import {chatPage} from "../../pages/ChatPage";

export class ButtonPlus extends Block {
  constructor(...propsAndChild: Props[]) {
    super('button', {...propsAndChild,
      attr: { class: 'pop-up__button', type: 'button' },
      'svg-around-plus': new SvgAroundPlus(),
      text: 'Добавить пользователя',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
          chatPage.openModalAddUserToChat();
        },
      },
    })
  }

  render() {
    return this.compile(buttonPlusTmpl);
  }

  addEvents() {
    this._element.querySelectorAll('button').forEach((button: HTMLElement) => {
      button.addEventListener('click', (<Props>this)._props.events.click);
    });
    super.addEvents();
  }
}
