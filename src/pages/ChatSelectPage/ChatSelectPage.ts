import {Block} from '../../services/Block';
import chatSelectPageTmpl from './ChatSelectPage.tmpl';

export class ChatSelectPage extends Block {
  render() {
    return this.compile(chatSelectPageTmpl);
  }
}
