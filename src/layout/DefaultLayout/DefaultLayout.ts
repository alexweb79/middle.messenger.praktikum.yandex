import {Block} from '../../services/Block';
import defaultLayoutTmpl from './DefaultLayout.tmpl';

export class DefaultLayout extends Block {
  render() {
    return this.compile(defaultLayoutTmpl);
  }
}
