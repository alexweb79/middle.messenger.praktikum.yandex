import Block from '../../services/Block';
import chatPageTmpl from './ChatPage.tmpl';

export default class ChatPage extends Block {
  render() {
    return this.compile(chatPageTmpl);
  }
}
