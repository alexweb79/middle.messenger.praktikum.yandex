import {Block, Props} from '../../../services/Block';
import modalUploadAvatarChatTmpl from './ModalUploadAvatarChat.tmpl';
import {Button} from "../../Button/Button";
import {Label} from "../../Label/Label";
import Store, {Indexed, StoreEvents} from "../../../services/Store/Store";
import {isEqual} from "../../../utils/isEqual";
import {ModalOverflow} from "../ModalOverflow/ModalOverflow";
import {label} from "../../Label";
import {chatPage} from "../../../pages/ChatPage";

export class ModalUploadAvatarChat extends Block {
  constructor(...propsAndChild: Props[]) {
    super('div', {...propsAndChild,
      attr: { class: 'modal__wrap' },
      title: 'Загрузите аватар',
      isModalOpen: false,
      label: new Label(
        'label',
        {
          attr: { class: 'form__label' },
          class: 'form__input',
          type: 'number',
          name: 'chatId',
          value: '',
          placeholder: 'id чата',
          required: 'required',
          errorText: 'Нужно id чат',
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
      file: new Label(
        'label',
        {
          attr: { class: 'modal__label' },
          class: 'form__input',
          type: 'file',
          name: 'avatarFile',
          value: '',
          placeholder: 'Выбрать файл на компьютере',
          required: 'required',
          errorText: 'Нужно выбрать файл',
          events: {
            blur: (e: Event) => {
              e.preventDefault();
              e.stopPropagation();
            },
          },
        },
      ),
      button: new Button('button', {
        attr: { class: 'modal__button button button-primary', type: 'submit' },
        text: 'Загрузить',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            this.uploadAvatarChat();
          },
        },
      }),
      modalOverflow: new ModalOverflow(),
    });

    let prevState: Indexed = Store.getState();
    Store.on(StoreEvents.Updated, () => {
      const stateProps = Store.getState();
      if (isEqual(prevState, stateProps)) {
        return
      }
      prevState = stateProps;
      this.setProps({...stateProps});
    });
  }

  async uploadAvatarChat() {
    const input = document.querySelector('input[name="avatarFile"]') as HTMLInputElement;
    if (input) {
      if (!input.files) {
        return;
      }
      // @ts-ignore
      const chatId = this._element.querySelector('input[name="chatId"]').value;
      const formData: FormData = new FormData();
      await formData.set('chatId', chatId);
      await formData.set('avatar', input.files[0]);

      chatPage.uploadAvatarChat(formData);
    }
    this.closeModal();
    return;
  }

  openModal() {
    this._element.classList.add('active');
  }

  closeModal() {
    this._element.classList.remove('active');
  }

  render() {
    return this.compile(modalUploadAvatarChatTmpl, this._props);
  }
}
