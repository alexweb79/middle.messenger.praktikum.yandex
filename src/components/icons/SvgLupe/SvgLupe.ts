import {Block} from '../../../services/Block';
import svgLupeTmpl from './SvgLupe.tmpl';

export class SvgLupe extends Block {
  render() {
    return this.compile(svgLupeTmpl);
  }
}
