import Block from '../../services/Block';
import passwordChangePageTmpl from './PasswordChangePage.tmpl';

export default class PasswordChangePage extends Block {
  render() {
    return this.compile(passwordChangePageTmpl);
  }
}
