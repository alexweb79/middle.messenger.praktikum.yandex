import {Block} from '../../services/Block';
import errorPageTmpl from './ErrorPage.tmpl';

export class ErrorPage extends Block {
  render() {
    return this.compile(errorPageTmpl);
  }
}
