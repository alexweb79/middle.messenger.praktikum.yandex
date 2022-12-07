import {Block} from '../../services/Block';
import linkArrowTmpl from './LinkArrow.tmpl';

export class LinkArrow extends Block {
  render() {
    return this.compile(linkArrowTmpl);
  }
}
