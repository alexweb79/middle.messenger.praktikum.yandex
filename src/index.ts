import SvgArrow from './components/icons/SvgArrow/SvgArrow';
import SvgNoAvatar from './components/icons/SvgNoAvatar/SvgNoAvatar';
import SvgArrowSeagull from './components/icons/SvgArrowSeagull/SvgArrowSeagull';
import SvgLupe from './components/icons/SvgLupe/SvgLupe';
import SvgElipsis from './components/icons/SvgElipsis/SvgElipsis';
import SvgCheck from './components/icons/SvgCheck/SvgCheck';
import SvgAroundPlus from './components/icons/SvgAroundPlus/SvgAroundPlus';
import SvgAroundX from './components/icons/SvgAroundX/SvgAroundX';
import SvgFile from './components/icons/SvgFile/SvgFile';
import SvgImage from './components/icons/SvgImage/SvgImage';
import SvgLocation from './components/icons/SvgLocation/SvgLocation';
import SvgClip from './components/icons/SvgClip/SvgClip';
import Link from './components/Link/Link';
import Button from './components/Button/Button';
import ButtonArrow from './components/ButtonArrow/ButtonArrow';
import Input from './components/Input/Input';
import Label from './components/Label/Label';
import Avatar from './components/Avatar/Avatar';
import ChatProfileLink from './components/Chat/ChatProfileLink/ChatProfileLink';
import ChatSearch from './components/Chat/ChatSearch/ChatSearch';
import ChatList from './components/Chat/ChatList/ChatList';
import ChatInfo from './components/Chat/ChatInfo/ChatInfo';
import ChatBox from './components/Chat/ChatBox/ChatBox';
import ChatSendMessage from './components/Chat/ChatSendMessage/ChatSendMessage';
import PopUpActionUser from './components/PopUp/PopUpActionUser/PopUpActionUser';
import PopUpAddInMessage from './components/PopUp/PopUpAddInMessage/PopUpAddInMessage';
import IndexPage from './pages/IndexPage/IndexPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import AvatarPage from './pages/AvatarPage/AvatarPage';
import ChatPage from './pages/ChatPage/ChatPage';
import ChatSelectPage from './pages/ChatSelectPage/ChatSelectPage';
import DefaultLayout from './layout/DefaultLayout/DefaultLayout';
import LoginPage from './pages/LoginPage/LoginPage';
import PasswordChangePage from './pages/PasswordChangePage/PasswordChangePage';
import ProfileChangeDataPage from './pages/ProfileChangeDataPage/ProfileChangeDataPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

const domain = window.location.origin;

const button = new Button(
  'button',
  {
    attr: { class: '333', type: 'button' },
    text: 'Отправить',
    events: {
      click: (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
      },
    },
  },
);

const label = new Label('label', {});

const avatar = new Avatar(
  'div',
  {
    attr: { class: 'avatar' },
    changeButton: true,
    'svg-no-avatar': new SvgNoAvatar('div', {}),
    button: new Button('button', {
      attr: { class: 'avatar__button', type: 'button' },
      text: 'Поменять аватар',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
        },
      },
    }),
  },
);

const indexPage = new IndexPage(
  'ul',
  {
    items: [
      { class: '', href: '404/', text: '404' },
      { class: '', href: '500/', text: '500' },
      { class: '', href: 'avatar/', text: 'avatar' },
      { class: '', href: 'chat/', text: 'chat' },
      { class: '', href: 'chat-select/', text: 'chat-select' },
      { class: '', href: 'login/', text: 'login' },
      { class: '', href: 'password-change/', text: 'password-change' },
      { class: '', href: 'profile/', text: 'profile' },
      { class: '', href: 'profile-change-data/', text: 'profile-change-data' },
      { class: '', href: 'registration/', text: 'registration' },
    ],
    title: 'index page title',
  },
);

const notFoundPage = new ErrorPage(
  'div',
  {
    attr: { class: 'page-error' },
    title: '404',
    text: 'Не туда попали',
    link: new Link('div', { class: 'page-error__link', href: `${domain}chat-select/`, text: 'Назад к чатам' }),
  },
);

const serverErrorPage = new ErrorPage(
  'div',
  {
    attr: { class: 'page-error' },
    title: '500',
    text: 'Мы уже фиксим',
    link: new Link('div', { class: 'page-error__link', href: `${domain}chat-select/`, text: 'Назад к чатам' }),
  },
);

const avatarPage = new AvatarPage(
  'div',
  {
    attr: { class: 'page-profile' },
    title: 'Иван',
    'svg-arrow': new SvgArrow('button', {}),
    avatar,
    items: [
      { text: 'Почта', value: 'pochta@yandex.ru' },
      { text: 'Логин', value: 'ivanivanov' },
      { text: 'Имя', value: 'Иван' },
      { text: 'Фамилия', value: 'Иванов' },
      { text: 'Имя в чате', value: 'Иван' },
      { text: 'Телефон', value: '+7 (909) 967 30 30' },
    ],
    links: [
      { class: 'profile__link link link-primary', href: `${domain}/profile-change-data/`, text: 'Изменить данные' },
      { class: 'profile__link link link-primary', href: `${domain}/password-change/`, text: 'Изменить пароль' },
      { class: 'profile__link link link-danger', href: `${domain}/login/`, text: 'Выйти' },
    ],
  },
);

const chatProfileLink = new ChatProfileLink(
  'div',
  {
    attr: { class: 'chat-list__profile-link' },
    'svg-arrow-seagull': new SvgArrowSeagull('div', {}),
  },
);
const chatSearch = new ChatSearch(
  'div',
  {
    attr: { class: 'chat-list__chat-search' },
    input: new Input(
      'input',
      {
        attr: {
          class: 'chat-search__input', type: 'search', name: 'search', value: '', placeholder: 'Поиск', required: '',
        },
      },
    ),
    'svg-lupe': new SvgLupe('div', {}),
  },
);
const chatList = new ChatList(
  'div',
  {
    attr: { class: 'chat-list__chat-items' },
    chats: [
      {
        name: 'Андрей', date: '10:49', message: 'Изображение', me: '', count: 1,
      },
      {
        name: 'Киноклуб', date: '10:49', message: 'стикер', me: 'true', count: '',
      },
      {
        name: 'тет-а-теты', date: 'Ср', message: 'И Human Interface Guidelines и Material Design рекомендуют...', me: '', count: 3,
      },
      {
        name: '1, 2, 3', date: '1 Мая 2020', message: 'В 2008 году художник Jon Rafman начал собирать...', me: '', count: '',
      },
      {
        name: 'Стас Рогозин', date: '12 Апр 2020', message: 'Так увлёкся работой по курсу, что совсем забыл его анонсир...', me: '', count: '19',
      },
    ],
  },
);
const chatInfo = new ChatInfo(
  'div',
  {
    attr: {}, name: 'Олег', 'svg-elipsis': new SvgElipsis('div', {}),
  },
);
const chatBox = new ChatBox(
  'div',
  {
    attr: { class: 'box' },
    messages: [
      {
        'message-left': 'true',
        texts: [
          { text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.' },
          { text: 'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.' },
        ],
        'message-date': '11:56',
        'svg-check': new SvgCheck('div', {}),
      },
      {
        'message-left': 'true', 'image-src': `${domain}/camera.jpg`, 'image-alt': 'Фото камера', 'message-date': '11:56', 'svg-check': new SvgCheck('div', {}),
      },
      {
        'message-right': 'true', 'message-secondary': 'true', texts: [{ text: 'Круто!' }], 'svg-check': new SvgCheck('div', {}), 'message-date': '12:00',
      },
    ],
    'pop-up-action-user': new PopUpActionUser(
      'div',
      {
        attr: { id: 'action-user', class: 'pop-up pop-up-top pop-up-right' },
        'svg-around-plus': new SvgAroundPlus('div', {}),
        'svg-around-x': new SvgAroundX('div', {}),
      },
    ),
    'pop-up-add-in-message': new PopUpAddInMessage(
      'div',
      {
        attr: { id: 'add-in-message', class: 'pop-up pop-up-bottom pop-up-left' },
        'svg-image': new SvgImage('div', {}),
        'svg-file': new SvgFile('div', {}),
        'svg-location': new SvgLocation('div', {}),
      },
    ),
  },
);
const chatSendMessage = new ChatSendMessage(
  'div',
  {
    attr: {},
    'svg-clip': new SvgClip('div', {}),
    input: new Input(
      'input',
      {
        attr: {
          class: 'send-message__input', type: 'text', name: 'message', value: '', placeholder: 'Сообщение', required: '',
        },
      },
    ),
    'send-message': new Label(
      'label',
      {
        attr: { class: 'send-message__label' },
        class: 'send-message__input',
        type: 'text',
        name: 'message',
        value: '',
        placeholder: 'Сообщение',
        required: '',
        errorText: '',
        events: {
          blur: (e: Event) => {
            const t = e.target;
            e.preventDefault();
            e.stopPropagation();
            label.validate(t);
          },
        },
      },
    ),
    'button-arrow': new ButtonArrow(
      'div',
      {
        left: '',
        right: 'true',
        'svg-arrow': new SvgArrow('div', {}),
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            button.sendForm();
          },
        },
      },
    ),
  },
);

const chatPage = new ChatPage(
  'div',
  {
    'chat-profile-link': chatProfileLink,
    'chat-search': chatSearch,
    'chat-list': chatList,
    'chat-info': chatInfo,
    'chat-box': chatBox,
    'chat-send-message': chatSendMessage,
  },
);

const chatSelectPage = new ChatSelectPage(
  'div',
  {
    'chat-profile-link': chatProfileLink,
    'chat-search': chatSearch,
    'chat-list': chatList,
  },
);

const loginPage = new LoginPage(
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
        value: '',
        placeholder: 'Логин',
        required: 'required',
        errorText: 'Неверный логин',
        events: {
          blur: (e: Event) => {
            const t = e.target;
            e.preventDefault();
            e.stopPropagation();
            label.validate(t);
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
            label.validate(t);
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
            button.sendForm();
          },
        },
      },
    ),
    link: new Link('div', {
      attr: {}, class: 'form__link form__link-center', href: `${domain}/registration/`, text: 'Нет аккаунта?',
    }),
  },
);

const passwordChangePage = new PasswordChangePage(
  'div',
  {
    attr: { class: 'page-profile' },
    'button-arrow': new ButtonArrow(
      'div',
      {
        attr: { class: 'page-profile__button' },
        left: 'true',
        right: '',
        'svg-arrow': new SvgArrow('div', {}),
        events: {
          click: (e: Event) => {
            const t = e.target;
            e.preventDefault();
            e.stopPropagation();
            label.validate(t);
          },
        },
      },
    ),
    avatar,
    oldPassword: new Label(
      'label',
      {
        attr: { class: 'form__label' },
        class: 'form__input',
        type: 'password',
        name: 'oldPassword',
        value: '3424243',
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
        value: '23423424243',
        placeholder: 'Новый пароль',
        required: 'required',
        errorText: 'Неверный пароль',
        events: {
          blur: (e: Event) => {
            const t = e.target;
            e.preventDefault();
            e.stopPropagation();
            label.validate(t);
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
        value: '23423424243',
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
          button.sendForm();
        },
      },
    }),
  },
);

const profilePage = new ProfilePage(
  'div',
  {
    attr: { class: 'page-profile' },
    title: 'Иван',
    'button-arrow': new ButtonArrow(
      'div',
      {
        attr: { class: 'page-profile__button' },
        left: 'true',
        right: '',
        'svg-arrow': new SvgArrow('div', {}),
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
          },
        },
      },
    ),
    avatar,
    items: [
      { placeholder: 'Почта', value: 'pochta@yandex.ru' },
      { placeholder: 'Логин', value: 'ivanivanov' },
      { placeholder: 'Имя', value: 'Иван' },
      { placeholder: 'Фамилия', value: 'Иванов' },
      { placeholder: 'Имя в чате', value: 'Иван' },
      { placeholder: 'Телефон', value: '+7 (909) 967 30 30' },
    ],
    links: [
      { class: 'link-primary', href: `${domain}/profile-change-data/`, text: 'Изменить данные' },
      { class: 'link-primary', href: `${domain}/password-change/`, text: 'Изменить пароль' },
      { class: 'link-danger', href: `${domain}/login/`, text: 'Выйти' },
    ],
  },
);

const profileChangeDataPage = new ProfileChangeDataPage(
  'div',
  {
    attr: { class: 'page-profile' },
    'button-arrow': new ButtonArrow(
      'div',
      {
        attr: { class: 'page-profile__button' },
        left: 'true',
        right: '',
        'svg-arrow': new SvgArrow('div', {}),
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
          },
        },
      },
    ),
    avatar,
    email: new Label(
      'label',
      {
        attr: { class: 'form__label' },
        class: 'form__input',
        type: 'email',
        name: 'email',
        value: 'pochta@yandex.ru',
        placeholder: 'Почта',
        required: 'required',
        errorText: 'ошибка',
        events: {
          blur: (e: Event) => {
            const t = e.target;
            e.preventDefault();
            e.stopPropagation();
            label.validate(t);
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
        value: 'ivanivanov',
        placeholder: 'Логин',
        required: 'required',
        errorText: 'Неверный логин',
        events: {
          blur: (e: Event) => {
            const t = e.target;
            e.preventDefault();
            e.stopPropagation();
            label.validate(t);
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
        value: 'Иван',
        placeholder: 'Имя',
        required: '',
        errorText: 'ошибка',
        events: {
          blur: (e: Event) => {
            const t = e.target;
            e.preventDefault();
            e.stopPropagation();
            label.validate(t);
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
        value: 'Иванов',
        placeholder: 'Фамилия',
        required: '',
        errorText: 'ошибка',
        events: {
          blur: (e: Event) => {
            const t = e.target;
            e.preventDefault();
            e.stopPropagation();
            label.validate(t);
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
        name: 'second_name',
        value: 'Иван',
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
        value: '+7 (909) 967 30 30',
        placeholder: 'Телефон',
        required: '',
        errorText: 'ошибка',
        events: {
          blur: (e: Event) => {
            const t = e.target;
            e.preventDefault();
            e.stopPropagation();
            label.validate(t);
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
          button.sendForm();
        },
      },
    }),
  },
);

const registrationPage = new RegistrationPage(
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
            e.preventDefault();
            e.stopPropagation();
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
            label.validate(t);
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
            label.validate(t);
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
            label.validate(t);
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
            label.validate(t);
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
            label.validate(t);
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
          button.sendForm();
        },
      },
    }),
    link: new Link('div', {
      attr: {}, class: 'form__link form__link-center', href: `${domain}/login/`, text: 'Войти',
    }),
  },
);

const defaultLayout = new DefaultLayout(
  'div',
  {
    title: 'defaultLayout', page: indexPage,
  },
);

window.button = button;
window.indexPage = indexPage;
window.notFoundPage = notFoundPage;
window.serverErrorPage = serverErrorPage;
window.avatarPage = avatarPage;
window.chatPage = chatPage;
window.chatSelectPage = chatSelectPage;
window.loginPage = loginPage;
window.passwordChangePage = passwordChangePage;
window.profilePage = profilePage;
window.profileChangeDataPage = profileChangeDataPage;
window.registrationPage = registrationPage;
window.defaultLayout = defaultLayout;

// window.changePage = () => {
//   let newPage = new DefaultLayout(
//     'div',
//     {
//       page: indexPage
//     }
//   )
//   defaultLayout.setProps({ page: newPage });
// }

const root: HTMLElement = document.getElementById('root');

if (window.location.pathname === '/') {
  root.prepend(indexPage.getContent());
}
if (window.location.pathname === '/404/') {
  root.prepend(notFoundPage.getContent());
}
if (window.location.pathname === '/500/') {
  root.prepend(serverErrorPage.getContent());
}
if (window.location.pathname === '/avatar/') {
  root.prepend(avatarPage.getContent());
}
if (window.location.pathname === '/chat/') {
  root.prepend(chatPage.getContent());
}
if (window.location.pathname === '/chat-select/') {
  root.prepend(chatSelectPage.getContent());
}
if (window.location.pathname === '/login/') {
  root.prepend(loginPage.getContent());
}
if (window.location.pathname === '/password-change/') {
  root.prepend(passwordChangePage.getContent());
}
if (window.location.pathname === '/profile/') {
  root.prepend(profilePage.getContent());
}
if (window.location.pathname === '/profile-change-data/') {
  root.prepend(profileChangeDataPage.getContent());
}
if (window.location.pathname === '/registration/') {
  root.prepend(registrationPage.getContent());
}
