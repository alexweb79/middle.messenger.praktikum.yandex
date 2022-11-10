import {Block} from '../../services/Block';
import registrationPageTmpl from './RegistrationPage.tmpl';

export class RegistrationPage extends Block {
  render() {
    return this.compile(registrationPageTmpl);
  }
}
