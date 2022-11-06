import Block from '../../../services/Block';
import chatTmpl from './Chat.tmpl';

export default class Chat extends Block {
  render() {
    return this.compile(chatTmpl);
  }
}
