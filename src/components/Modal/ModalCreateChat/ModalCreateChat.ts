import {Block, Props} from '../../../services/Block';
import modalCreateChatTmpl from './ModalCreateChat.tmpl';
import {Button} from "../../Button/Button";
import {Label} from "../../Label/Label";
import {ModalOverflow} from "../ModalOverflow/ModalOverflow";
import {chatPage} from "../../../pages/ChatPage";
import Store, {StoreEvents} from "../../../services/Store/Store";
import {isEqual} from "../../../utils/isEqual";
import {label} from "../../Label";

export class ModalCreateChat extends Block {
  constructor(...propsAndChild: Props[]) {
    super('div', {...propsAndChild,
      attr: { class: 'modal__wrap' },
      title: 'Название нового чата',
      isModalOpen: false,
      input: new Label(
        'label',
        {
          attr: { class: 'form__label' },
          class: 'form__input',
          type: 'text',
          name: 'message',
          value: '',
          placeholder: 'Название чата',
          required: 'required',
          errorText: 'Нужно назвать чат',
          events: {
            blur: (e: Event) => {
              const t = e.target
              e.preventDefault();
              e.stopPropagation();
              if (t) {
                label.validate(t);
              }
            },
          },
        },
      ),
      button: new Button('button', {
        attr: { class: 'modal__button button button-primary', type: 'submit' },
        text: 'Create',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            this.createChat();
          },
        },
      }),
      modalOverflow: new ModalOverflow(),
    });

    let prevState: any = Store.getState();
    Store.on(StoreEvents.Updated, () => {
      const stateProps = Store.getState();
      if (isEqual(prevState, stateProps)) {
        return
      }
      prevState = stateProps;
      this.setProps({...stateProps});
    });
  }

  createChat() {
    // @ts-ignore
    const title = this._element.querySelector('input[name="message"]').value;
    chatPage.createChat(title);
    this.closeModal();
  }

  openModal() {
    this._element.classList.add('active');
  }

  closeModal() {
    this._element.classList.remove('active');
  }

  render() {
    return this.compile(modalCreateChatTmpl, this._props);
  }
}
