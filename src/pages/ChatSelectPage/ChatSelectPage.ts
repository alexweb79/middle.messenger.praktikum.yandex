import Block from '../../services/Block';
import chatSelectPageTmpl from './ChatSelectPage.tmpl';

export default class ChatSelectPage extends Block {
  render() {
    return this.compile(chatSelectPageTmpl);
  }
}
