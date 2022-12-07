import {Block, Props} from '../../services/Block';
import buttonMinusTmpl from './ButtonMinus.tmpl';
import {SvgAroundX} from "../icons/SvgAroundX/SvgAroundX";
import {chatPage} from "../../pages/ChatPage";

export class ButtonMinus extends Block {
  constructor(...propsAndChild: Props[]) {
    super('button', {...propsAndChild,
      attr: { class: 'pop-up__button', type: 'button' },
      'svg-around-x': new SvgAroundX(),
      text: 'Удалить пользователя',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
          chatPage.openModalDeleteUserFromChat()
        },
      },
    })
  }

  render() {
    return this.compile(buttonMinusTmpl);
  }

  addEvents() {
    this._element.querySelectorAll('button').forEach((button: HTMLElement) => {
      button.addEventListener('click', (<Props>this)._props.events.click);
    });
    super.addEvents();
  }
}
