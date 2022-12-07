import {Block, Props} from '../../../services/Block';
import modalRemoveChatTmpl from './ModalRemoveChat.tmpl';
import {Button} from "../../Button/Button";
import {Label} from "../../Label/Label";
import Store, {StoreEvents} from "../../../services/Store/Store";
import {isEqual} from "../../../utils/isEqual";
import {ModalOverflow} from "../ModalOverflow/ModalOverflow";
import {chatPage} from "../../../pages/ChatPage";
import {label} from "../../Label";

export class ModalRemoveChat extends Block {
  constructor(...propsAndChild: Props[]) {
    super('div', {...propsAndChild,
      attr: { class: 'modal__wrap' },
      title: 'Номер (id) чата',
      isModalOpen: false,
      label: new Label(
        'label',
        {
          attr: { class: 'form__label' },
          class: 'form__input',
          type: 'number',
          name: 'id',
          value: '',
          placeholder: 'id чата',
          required: 'required',
          errorText: 'Нужно id чат',
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
        text: 'Remove',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            this.deleteChat();
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

  deleteChat() {
    // @ts-ignore
    const id = this._element.querySelector('input[name="id"]').value;
    chatPage.deleteChatById(id);
    this.closeModal();
  }

  openModal() {
    this._element.classList.add('active');
  }

  closeModal() {
    this._element.classList.remove('active');
  }

  render() {
    return this.compile(modalRemoveChatTmpl, this._props);
  }
}
