import {Block} from '../../services/Block';
import loginPageTmpl from './LoginPage.tmpl';
import authController from "../../controllers/AuthController";

export class LoginPage extends Block {

  signIn() {
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
      authController.signIn(data);
    }
  }

  render() {
    return this.compile(loginPageTmpl);
  }
}
