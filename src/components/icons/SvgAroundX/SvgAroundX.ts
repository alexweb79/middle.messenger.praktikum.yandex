import Block from '../../../services/Block';
import svgAroundXTmpl from './SvgAroundX.tmpl';

export default class SvgAroundX extends Block {
  render() {
    return this.compile(svgAroundXTmpl);
  }
}
