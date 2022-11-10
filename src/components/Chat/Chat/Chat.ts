import {Block} from '../../../services/Block';
import chatTmpl from './Chat.tmpl';

export class Chat extends Block {
  render() {
    return this.compile(chatTmpl);
  }
}
