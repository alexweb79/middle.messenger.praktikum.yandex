import Block from '../../../services/Block';
import chatListTmpl from './ChatList.tmpl';

export default class ChatList extends Block {
  render() {
    return this.compile(chatListTmpl);
  }
}
