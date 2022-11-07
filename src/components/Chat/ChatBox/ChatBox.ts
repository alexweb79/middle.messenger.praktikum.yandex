import {Block} from '../../../services/Block';
import chatBoxTmpl from './ChatBox.tmpl';

export class ChatBox extends Block {
  render() {
    return this.compile(chatBoxTmpl);
  }
}
