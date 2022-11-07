import {Block} from '../../../services/Block';
import chatSendMessageTmpl from './ChatSendMessage.tmpl';

export class ChatSendMessage extends Block {
  render() {
    return this.compile(chatSendMessageTmpl);
  }
}
