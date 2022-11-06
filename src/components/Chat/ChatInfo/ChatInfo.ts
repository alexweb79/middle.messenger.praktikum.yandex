import Block from '../../../services/Block';
import chatInfoTmpl from './ChatInfo.tmpl';

export default class ChatInfo extends Block {
  render() {
    return this.compile(chatInfoTmpl);
  }
}
