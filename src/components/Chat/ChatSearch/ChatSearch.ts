import {Block} from '../../../services/Block';
import chatSearchTmpl from './ChatSearch.tmpl';

export class ChatSearch extends Block {
  render() {
    return this.compile(chatSearchTmpl);
  }
}
