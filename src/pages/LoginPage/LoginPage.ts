import Block from '../../services/Block';
import loginPageTmpl from './LoginPage.tmpl';

export default class LoginPage extends Block {
  render() {
    return this.compile(loginPageTmpl);
  }
}
