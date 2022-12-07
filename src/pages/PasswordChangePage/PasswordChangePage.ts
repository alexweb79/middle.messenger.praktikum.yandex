import {Block, Props} from '../../services/Block';
import passwordChangePageTmpl from './PasswordChangePage.tmpl';
import {Avatar} from "../../components/Avatar/Avatar";
import {Label} from "../../components/Label/Label";
import {Button} from "../../components/Button/Button";
import {LinkArrow} from "../../components/LinkArrow/LinkArrow";
import {SvgArrow} from "../../components/icons/SvgArrow/SvgArrow";
import {isEqual} from "../../utils/isEqual";
import {label} from "../../components/Label";
import {passwordChangePage} from "./index";
import AuthController from "../../controllers/AuthController";
import UserController from "../../controllers/UserController";
import Router from "../../services/Router/Router";
import Store, {StoreEvents} from "../../services/Store/Store";
import authController from "../../controllers/AuthController";

export class PasswordChangePage extends Block {
  constructor(...propsAndChild: Props[]) {
    super('div', {
      ...propsAndChild,
      attr: { class: 'page-profile' },
      'link-arrow': new LinkArrow(
        'div',
        {
          attr: { class: 'page-profile__button' },
          'svg-arrow': new SvgArrow('div', {}),
          events: {
            click: (e: Event) => {
              e.preventDefault();
              e.stopPropagation();
              Router.go('/messenger')
            },
          },
        },
      ),
      avatar: new Avatar(),
      oldPassword: new Label(
        'label',
        {
          attr: { class: 'form__label' },
          class: 'form__input',
          type: 'password',
          name: 'oldPassword',
          value: '',
          placeholder: 'Старый пароль',
          required: 'required',
          errorText: 'Неверный пароль',
          events: {
            blur: (e: Event) => {
              e.preventDefault();
              e.stopPropagation();
            },
          },
        },
      ),
      newPassword: new Label(
        'label',
        {
          attr: { class: 'form__label' },
          class: 'form__input',
          type: 'password',
          name: 'newPassword',
          value: '',
          placeholder: 'Новый пароль',
          required: 'required',
          errorText: 'Неверный пароль',
          events: {
            blur: (e: Event) => {
              const t = e.target;
              e.preventDefault();
              e.stopPropagation();
              if (t) {
                label.validate(t);
              }
            },
          },
        },
      ),
      confirmNewPassword: new Label(
        'label',
        {
          attr: { class: 'form__label' },
          class: 'form__input',
          type: 'password',
          name: 'confirmNewPassword',
          value: '',
          placeholder: 'Повторите новый пароль',
          required: 'required',
          errorText: 'Неверный пароль',
          events: {
            blur: (e: Event) => {
              e.preventDefault();
              e.stopPropagation();
            },
          },
        },
      ),
      button: new Button('button', {
        attr: { class: 'profile__button button button-primary', type: 'submit' },
        text: 'Сохранить',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            passwordChangePage.sendUserPassword()
          },
        },
      }),
    })

    AuthController.getUserInfo();

    let prevState: any = Store.getState();
    Store.on(StoreEvents.Updated, () => {
      const stateProps = Store.getState();
      if (isEqual(prevState, stateProps)) {
        return
      }
      prevState = stateProps;
      this.setProps({...stateProps});
    });

    this.getUserInfo();

  }

  async getUserInfo() {
    if (!Store.getState().user) {
      await authController.getUserInfo()
    }
    const userData = Store.getState().user;
    if (userData) {
      // @ts-ignore
      this._children.avatar._props.src = 'https://ya-praktikum.tech/api/v2/resources' + userData.avatar;
      this._children.avatar._props.changeButton = false;
    }
    this.dispatchComponentDidMount();
  }

  async sendUserPassword() {
    const data: any = {};
    let formValidate = true;
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input: HTMLInputElement) => {
      if (input.value && !input.dataset.noValidate) {
        data[input.name] = input.value;
      } else {
        formValidate = false;
      }
    });
    if (formValidate) {
      await UserController.changeUserPassword(data);
      inputs.forEach((input: HTMLInputElement) => {
        if (input.value) {
          input.value = '';
        }
      });
    }
  }

  init() {
      super.init();
  }

  render() {
    return this.compile(passwordChangePageTmpl, this._props);
  }
}
