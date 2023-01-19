import Router from "./services/Router/Router";

import {loginPage} from './pages/LoginPage';
import {notFoundPage, serverErrorPage} from "./pages/ErrorPage";
import {registrationPage} from './pages/RegistrationPage';
import {profileChangeDataPage} from './pages/ProfileChangeDataPage';
import {profilePage} from './pages/ProfilePage';
import {passwordChangePage} from './pages/PasswordChangePage';
import {chatPage} from './pages/ChatPage';
import './index.scss';

// import {DefaultLayout} from './layout/DefaultLayout/DefaultLayout';
// const defaultLayout = new DefaultLayout(
//   'div',
//   {
//     title: 'defaultLayout', page: indexPage,
//   },
// );
// window.changePage = () => {
//   let newPage = new DefaultLayout(
//     'div',
//     {
//       page: indexPage
//     }
//   )
//   defaultLayout.setProps({ page: newPage });
// }

window.addEventListener('DOMContentLoaded', async () => {
  Router
    .use('/', loginPage)
    .use('/sign-up', registrationPage)
    .use('/404', notFoundPage)
    .use('/500', serverErrorPage)
    .use('/messenger', chatPage)
    .use('/settings', profilePage)
    .use('/settings-change-data', profileChangeDataPage)
    .use('/settings-change-password', passwordChangePage)
    .start();
})
