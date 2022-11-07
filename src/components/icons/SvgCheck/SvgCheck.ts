import {Block} from '../../../services/Block';
import svgCheckTmpl from './SvgCheck.tmpl';

export class SvgCheck extends Block {
  render() {
    return this.compile(svgCheckTmpl);
  }
}
