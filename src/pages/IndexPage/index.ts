import {IndexPage} from "./IndexPage";

export const indexPage = new IndexPage(
  'ul',
  {
    items: [
      { class: '', href: '/sign-in', text: 'Login' },
      { class: '', href: '/sign-up', text: 'Registration' },
      { class: '', href: '/chats', text: 'Chats' },
      { class: '', href: '/messenger', text: 'Messenger' },
      { class: '', href: '/settings', text: 'Settings' },
      { class: '', href: '/settings-change-data', text: 'Settings change data' },
      { class: '', href: '/settings-change-password', text: 'Settings change password' },
      { class: '', href: '/404', text: '404' },
      { class: '', href: '/500', text: '500' },
    ],
    title: 'index page title',
  },
);
