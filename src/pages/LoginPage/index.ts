import {LoginPage} from "./LoginPage";
import {Label} from "../../components/Label/Label";
import {Button} from "../../components/Button/Button";
import {Link} from "../../components/Link/Link";
import Router from "../../services/Router/Router";
import {label} from "../../components/Label";

export const loginPage = new LoginPage(
  'div',
  {
    attr: { class: 'page-login' },
    login: new Label(
      'label',
      {
        attr: { class: 'form__label' },
        class: 'form__input',
        type: 'text',
        name: 'login',
        value: 'MAlexLoginnn',
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
    password: new Label(
      'label',
      {
        attr: { class: 'form__label' },
        class: 'form__input',
        type: 'password',
        name: 'password',
        value: 'Ab1234567',
        placeholder: 'Пароль',
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
    button: new Button(
      'button',
      {
        attr: { class: 'form__button button button-primary', type: 'submit' },
        text: 'Войти',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            loginPage.signIn();
          },
        },
      },
    ),
    link: new Link('div', {
      attr: {}, class: 'form__link form__link-center', href: '#', text: 'Нет аккаунта?',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
          Router.go('/sign-up')
        },
      },
    }),
  },
);
