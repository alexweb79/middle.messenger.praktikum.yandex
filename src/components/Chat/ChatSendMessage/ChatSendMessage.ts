import Block from '../../../services/Block';
import chatSendMessageTmpl from './ChatSendMessage.tmpl';

export default class ChatSendMessage extends Block {
  render() {
    return this.compile(chatSendMessageTmpl);
  }
}
