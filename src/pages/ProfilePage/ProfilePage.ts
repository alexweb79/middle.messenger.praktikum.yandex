import {Block, Props} from '../../services/Block';
import profilePageTmpl from './ProfilePage.tmpl';
import authController from "../../controllers/AuthController";
import Store, {StoreEvents} from "../../services/Store/Store";
import AuthController from "../../controllers/AuthController";
import {isEqual} from "../../utils/isEqual";
import {LinkArrow} from "../../components/LinkArrow/LinkArrow";
import {SvgArrow} from "../../components/icons/SvgArrow/SvgArrow";
import Router from "../../services/Router/Router";
import {Link} from "../../components/Link/Link";
import {profilePage} from "./index";
import {Avatar} from "../../components/Avatar/Avatar";

export class ProfilePage extends Block {
  constructor(...propsAndChild: Props[]) {
    super('div', {
      ...propsAndChild,
      attr: { class: 'page-profile' },
      title: '',
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
      items: [
        { name: 'email', placeholder: 'Почта', value: '' },
        { name: 'login', placeholder: 'Логин', value: '' },
        { name: 'first_name', placeholder: 'Имя', value: '' },
        { name: 'second_name', placeholder: 'Фамилия', value: '' },
        { name: 'display_name', placeholder: 'Имя в чате', value: '' },
        { name: 'phone', placeholder: 'Телефон', value: '' },
      ],
      'link-settings-change-data': new Link('li', {attr: {class: 'profile__label'},
        class: 'profile__link link link-primary', href: '#', text: 'Изменить данные',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            Router.go('/settings-change-data')
          },
        },
      }),
      'link-settings-change-password': new Link('li', {attr: {class: 'profile__label'},
        class: 'profile__link link link-primary', href: '#', text: 'Изменить пароль',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            Router.go('/settings-change-password')
          },
        },
      }),
      'link-sign-in': new Link('li', {attr: {class: 'profile__label'},
        class: 'profile__link link link-danger', href: '#', text: 'Выйти',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            profilePage.logout();
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

  async getUserInfo() {
    if (!Store.getState().user) {
      await authController.getUserInfo()
    }
    const userData = Store.getState().user;
    const inputs = this._props.items;
    if (userData) {
      // @ts-ignore
      this._children.avatar._props.src = 'https://ya-praktikum.tech/api/v2/resources' + userData.avatar;
      this._children.avatar._props.changeButton = false;
      // @ts-ignore
      this._props.title = userData.display_name;

      inputs.forEach((input: any) => {
        for (const [key, value] of Object.entries(userData)) {
          if (input.name === key) {
            input.value = value
          }
        }
      })
    }
  }

  logout() {
    authController.logout();
  }

  init() {
      super.init();
  }

  render() {
    return this.compile(profilePageTmpl, this._props);
  }
}
