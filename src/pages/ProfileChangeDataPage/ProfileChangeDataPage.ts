import {Block, Props} from '../../services/Block';
import profileChangeDataPageTmpl from './ProfileChangeDataPage.tmpl';
import AuthController from "../../controllers/AuthController";
import Store, {StoreEvents} from "../../services/Store/Store";
import {isEqual} from "../../utils/isEqual";
import authController from "../../controllers/AuthController";
import {Label} from "../../components/Label/Label";
import {LinkArrow} from "../../components/LinkArrow/LinkArrow";
import {SvgArrow} from "../../components/icons/SvgArrow/SvgArrow";
import Router from "../../services/Router/Router";
import {Button} from "../../components/Button/Button";
import {profileChangeDataPage} from "./index";
import UserController from "../../controllers/UserController";
import {label} from "../../components/Label";
import {Avatar} from "../../components/Avatar/Avatar";
import {ModalChangeAvatar} from "../../components/Modal/ModalChangeAvatar/ModalChangeAvatar";

export class ProfileChangeDataPage extends Block {
  constructor(...propsAndChild: Props[]) {
    super('div', {...propsAndChild,
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
      modal: new ModalChangeAvatar(
        {
          attr: { class: 'modal__wrap', title: 'Загрузите файл' },
          events: {
            click: (e: Event) => {
              e.preventDefault();
              e.stopPropagation();
              profileChangeDataPage.closeModal();
            },
          },
        }
      ),
      email: new Label(
        'label',
        {
          attr: { class: 'form__label' },
          class: 'form__input',
          type: 'email',
          name: 'email',
          value: '',
          placeholder: 'Почта',
          required: 'required',
          errorText: 'ошибка',
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
      login: new Label(
        'label',
        {
          attr: { class: 'form__label' },
          class: 'form__input',
          type: 'text',
          name: 'login',
          value: '',
          placeholder: 'Логин',
          required: 'required',
          errorText: 'Неверный логин',
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
      first_name: new Label(
        'label',
        {
          attr: { class: 'form__label' },
          class: 'form__input',
          type: 'text',
          name: 'first_name',
          value: '',
          placeholder: 'Имя',
          required: '',
          errorText: 'ошибка',
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
      second_name: new Label(
        'label',
        {
          attr: { class: 'form__label' },
          class: 'form__input',
          type: 'text',
          name: 'second_name',
          value: '',
          placeholder: 'Фамилия',
          required: '',
          errorText: 'ошибка',
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
      display_name: new Label(
        'label',
        {
          attr: { class: 'form__label' },
          class: 'form__input',
          type: 'text',
          name: 'display_name',
          value: '',
          placeholder: 'Имя в чате',
          required: '',
          errorText: 'ошибка',
          events: {
            blur: (e: Event) => {
              e.preventDefault();
              e.stopPropagation();
            },
          },
        },
      ),
      phone: new Label(
        'label',
        {
          attr: { class: 'form__label' },
          class: 'form__input',
          type: 'text',
          name: 'phone',
          value: '',
          placeholder: 'Телефон',
          required: '',
          errorText: 'ошибка',
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
      button: new Button('button', {
        attr: { class: 'profile__button button button-primary', type: 'submit' },
        text: 'Сохранить',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            profileChangeDataPage.sendUserProfile();
          },
        },
      }),
    });

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

  init() {
    super.init();
  }

  async getUserInfo() {
    if (!Store.getState().user) {
      await authController.getUserInfo()
    }
    const userData = Store.getState().user;
    const inputs = this._children;

    if (userData) {
      // @ts-ignore
      this._children.avatar._props.src = 'https://ya-praktikum.tech/api/v2/resources' + userData.avatar;
    }

    if ((userData && Object.keys(userData).length !== 0) && (inputs && Object.keys(inputs).length !== 0)) {
      for (const [k] of Object.entries(inputs)) {
        for (const [key, value] of Object.entries(userData)) {
          if (k === key && inputs && inputs[k] && inputs[k]['_props']) {
            inputs[k]['_props']['value'] = value ? value : ''
          }
        }
      }
    }

    this.dispatchComponentDidMount();
  }

  async sendUserProfile() {
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
      await UserController.changeUserProfile(data);
    }
  }

  async sendUserAvatar() {
    let formData: FormData = new FormData();
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (input) {
      if (!input.files) {
        return;
      }
      await formData.append('avatar', input.files[0]);
      const res = await UserController.changeUserAvatar(formData);
      if (res) {
        await this.getUserInfo();
        this.closeModal();
      }
    }
  }

  openModal() {
    this._children.modal._element.classList.add('active');
  }

  closeModal() {
    this._children.modal._element.classList.remove('active');
  }

  render() {
    return this.compile(profileChangeDataPageTmpl, this._props);
  }

}
