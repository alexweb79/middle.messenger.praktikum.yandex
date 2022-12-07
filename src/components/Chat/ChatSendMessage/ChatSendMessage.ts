import {Block, Props} from '../../../services/Block';
import chatSendMessageTmpl from './ChatSendMessage.tmpl';
import {ButtonClip} from "../../ButtonClip/ButtonClip";
import {SvgClip} from "../../icons/SvgClip/SvgClip";
import togglePopUp from "../../../utils/mydash/togglePopUp";
import {Input} from "../../Input/Input";
import {Label} from "../../Label/Label";
import {ButtonArrow} from "../../ButtonArrow/ButtonArrow";
import {SvgArrow} from "../../icons/SvgArrow/SvgArrow";
import {chatPage} from "../../../pages/ChatPage";

export class ChatSendMessage extends Block {
  constructor(...propsAndChild: Props[]) {
    super('div', {...propsAndChild,
      attr: {},
      'button-clip': new ButtonClip(
        'button',
        {
          attr: { class: 'send-message__add-any-in-message-button', type: 'button', 'data-pop-up': 'add-in-message' },
          'svg-clip': new SvgClip('div', {}),
          events: {
            click: (e: Event) => {
              e.preventDefault();
              e.stopPropagation();
              togglePopUp();
            },
          },
        },
      ),
      'svg-clip': new SvgClip('div', {}),
      input: new Input(
        'input',
        {
          attr: {
            class: 'send-message__input', type: 'text', name: 'message', value: '', placeholder: 'Сообщение', required: '',
          },
        },
      ),
      'send-message': new Label(
        'label',
        {
          attr: { class: 'send-message__label' },
          class: 'send-message__input',
          type: 'text',
          name: 'message',
          value: '',
          placeholder: 'Сообщение',
          required: '',
          errorText: '',
          events: {
            blur: (e: Event) => {
              e.preventDefault();
              e.stopPropagation();
            },
          },
        },
      ),
      'button-arrow': new ButtonArrow(
        'div',
        {
          left: '',
          right: 'true',
          'svg-arrow': new SvgArrow('div', {}),
          events: {
            click: (e: Event) => {
              e.preventDefault();
              e.stopPropagation();
              this.sendMessage();
            },
          },
        },
      ),
    })
  }

  sendMessage() {
    // @ts-ignore
    const value = this._element.querySelector('input[name="message"]').value
    chatPage.sendMessage(value);
    // @ts-ignore
    this._element.querySelector('input[name="message"]').value = '';
  }

  render() {
    return this.compile(chatSendMessageTmpl);
  }
}
