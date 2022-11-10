import {Block} from '../../../services/Block';
import svgArrowSeagullTmpl from './SvgArrowSeagull.tmpl';

export class SvgArrowSeagull extends Block {
  render() {
    return this.compile(svgArrowSeagullTmpl);
  }
}
