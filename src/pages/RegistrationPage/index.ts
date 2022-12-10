import {RegistrationPage} from "./RegistrationPage";
import {Label} from "../../components/Label/Label";
import {Button} from "../../components/Button/Button";
import {Link} from "../../components/Link/Link";
import Router from "../../services/Router/Router";
import {label} from "../../components/Label";

export const registrationPage = new RegistrationPage(
  'div',
  {
    attr: { class: 'page-registration' },
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
    password: new Label(
      'label',
      {
        attr: { class: 'form__label' },
        class: 'form__input',
        type: 'password',
        name: 'password',
        value: '',
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
    password_confirm: new Label(
      'label',
      {
        attr: { class: 'form__label' },
        class: 'form__input',
        type: 'password',
        name: 'password_confirm',
        value: '',
        placeholder: 'Пароль (ещё раз)',
        required: 'required',
        errorText: 'Пароли не совпадают',
        events: {
          blur: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
          },
        },
      },
    ),
    button: new Button('button', {
      attr: { class: 'form__button button button-primary', type: 'submit' },
      text: 'Зарегистрироваться',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
          registrationPage.signUp();
          Router.go('/messenger');
        },
      },
    }),
    link: new Link('div', {
      attr: {}, class: 'form__link form__link-center', href: '#', text: 'Войти',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
          Router.go('/')
        },
      },
    }),
  },
);
