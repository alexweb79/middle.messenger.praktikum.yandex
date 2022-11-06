import Block from '../../services/Block';
import registrationPageTmpl from './RegistrationPage.tmpl';

export default class RegistrationPage extends Block {
  render() {
    return this.compile(registrationPageTmpl);
  }
}
