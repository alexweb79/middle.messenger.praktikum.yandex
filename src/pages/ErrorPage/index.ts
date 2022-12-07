import {ErrorPage} from "./ErrorPage";
import {Link} from "../../components/Link/Link";
import Router from "../../services/Router/Router";

export const notFoundPage = new ErrorPage(
  'div',
  {
    attr: { class: 'page-error' },
    title: '404',
    text: 'Не туда попали',
    link: new Link('div', { class: 'page-error__link', href: '#', text: 'Назад к чатам',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
          Router.go('/messenger')
        },
      },
    }),
  },
);

export const serverErrorPage = new ErrorPage(
  'div',
  {
    attr: { class: 'page-error' },
    title: '500',
    text: 'Мы уже фиксим',
    link: new Link('div', { class: 'page-error__link', href: '#', text: 'Назад к чатам',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
          Router.go('/messenger')
        },
      },
    }),
  },
);
