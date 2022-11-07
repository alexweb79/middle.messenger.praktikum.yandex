import {Block} from '../../../services/Block';
import svgAroundPlusTmpl from './SvgAroundPlus.tmpl';

export class SvgAroundPlus extends Block {
  render() {
    return this.compile(svgAroundPlusTmpl);
  }
}
