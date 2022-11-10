import {Block} from '../../../services/Block';
import svgArrowTmpl from './SvgArrow.tmpl';

export class SvgArrow extends Block {
  render() {
    return this.compile(svgArrowTmpl);
  }
}
