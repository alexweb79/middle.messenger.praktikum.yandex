import Block from '../../services/Block';
import errorPageTmpl from './ErrorPage.tmpl';

export default class ErrorPage extends Block {
  render() {
    return this.compile(errorPageTmpl);
  }
}
