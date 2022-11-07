import {Block} from '../../../services/Block';
import footerTmpl from './ChatProfileLink.tmpl';

export class ChatProfileLink extends Block {
  render() {
    return this.compile(footerTmpl);
  }
}
