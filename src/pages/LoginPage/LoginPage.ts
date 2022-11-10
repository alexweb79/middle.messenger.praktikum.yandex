import {Block} from '../../services/Block';
import loginPageTmpl from './LoginPage.tmpl';

export class LoginPage extends Block {
  render() {
    return this.compile(loginPageTmpl);
  }
}
