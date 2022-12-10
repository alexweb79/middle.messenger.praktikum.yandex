import {Block, Props} from '../../../services/Block';
import modalDeleteUserFromChatTmpl from './ModalDeleteUserFromChat.tmpl';
import {Button} from "../../Button/Button";
import {Label} from "../../Label/Label";
import {ModalOverflow} from "../ModalOverflow/ModalOverflow";
import {chatPage} from "../../../pages/ChatPage";
import Store, {StoreEvents} from "../../../services/Store/Store";
import {isEqual} from "../../../utils/isEqual";
import {label} from "../../Label";

export class ModalDeleteUserFromChat extends Block {
  constructor(...propsAndChild: Props[]) {
    super('div', {...propsAndChild,
      attr: { class: 'modal__wrap' },
      title: 'Удалить пользователя из чата',
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
        text: 'Delete',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            this.deleteUserFromChat();
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

  async deleteUserFromChat() {
    let users = [];
    // @ts-ignore
    users.push(Number(this._element.querySelector('input[name="userId"]').value))
    const chatId = Number( await Store.getState().currentChatId);
    chatPage.deleteUserFromChat({users, chatId});
    this.closeModal();
  }

  openModal() {
    this._element.classList.add('active');
  }

  closeModal() {
    this._element.classList.remove('active');
  }

  render() {
    return this.compile(modalDeleteUserFromChatTmpl, this._props);
  }
}
