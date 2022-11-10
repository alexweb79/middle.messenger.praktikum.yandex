import {Block} from '../../../services/Block';
import chatListTmpl from './ChatList.tmpl';

export class ChatList extends Block {
  render() {
    return this.compile(chatListTmpl);
  }
}
