import {Block, Props} from '../../../services/Block';
import modalChangeAvatarTmpl from './ModalChangeAvatar.tmpl';
import {Button} from "../../Button/Button";
import {Label} from "../../Label/Label";
import Store, {StoreEvents} from "../../../services/Store/Store";
import {isEqual} from "../../../utils/isEqual";
import {ModalOverflow} from "../ModalOverflow/ModalOverflow";
import {profileChangeDataPage} from "../../../pages/ProfileChangeDataPage";

export class ModalChangeAvatar extends Block {
  constructor(...propsAndChild: Props[]) {
    super('div', {...propsAndChild,
      attr: { class: 'modal__wrap' },
      title: 'Загрузите файл',
      isModalOpen: false,
      file: new Label(
        'label',
        {
          attr: { class: 'modal__label' },
          class: 'form__input',
          type: 'file',
          name: 'login',
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
        text: 'Поменять',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            profileChangeDataPage.sendUserAvatar();
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

  render() {
    return this.compile(modalChangeAvatarTmpl, this._props);
  }
}
