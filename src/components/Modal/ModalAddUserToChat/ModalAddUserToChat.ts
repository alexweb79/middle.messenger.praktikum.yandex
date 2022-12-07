import {Block, Props} from '../../../services/Block';
import modalAddUserToChatTmpl from './ModalAddUserToChat.tmpl';
import {Button} from "../../Button/Button";
import {Label} from "../../Label/Label";
import {ModalOverflow} from "../ModalOverflow/ModalOverflow";
import {chatPage} from "../../../pages/ChatPage";
import Store, {StoreEvents} from "../../../services/Store/Store";
import {isEqual} from "../../../utils/isEqual";
import {label} from "../../Label";

export class ModalAddUserToChat extends Block {
  constructor(...propsAndChild: Props[]) {
    super('div', {...propsAndChild,
      attr: { class: 'modal__wrap' },
      title: 'Добавить пользователя в чат',
      isModalOpen: false,
      input: new Label(
        'label',
        {
          attr: { class: 'form__label' },
          class: 'form__input',
          type: 'text',
          name: 'userId',
          value: '',
          placeholder: 'id пользователя',
          required: 'required',
          errorText: 'нет id пользователя',
          events: {
            blur: (e: Event) => {
              let t = e.target
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
        text: 'Add',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            this.addUserToChat();
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

  async addUserToChat() {
    let users = [];
    // @ts-ignore
    users.push(Number(this._element.querySelector('input[name="userId"]').value))
    const chatId = Number( await Store.getState().currentChatId);
    console.log({users, chatId})
    chatPage.addUserToChat({users, chatId});
    this.closeModal();
  }

  openModal() {
    this._element.classList.add('active');
  }

  closeModal() {
    this._element.classList.remove('active');
  }

  render() {
    return this.compile(modalAddUserToChatTmpl, this._props);
  }
}
