import {Block} from '../../services/Block';
import titleTmpl from './Title.tmpl';

export class Title extends Block {
  render() {
    return this.compile(titleTmpl);
  }
}
