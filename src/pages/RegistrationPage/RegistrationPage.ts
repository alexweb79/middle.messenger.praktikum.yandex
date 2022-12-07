import {Block} from '../../services/Block';
import registrationPageTmpl from './RegistrationPage.tmpl';
import authController from "../../controllers/AuthController";

export class RegistrationPage extends Block {

  signUp() {
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
      authController.signUp(data);
    }
  }

  render() {
    return this.compile(registrationPageTmpl);
  }

}
