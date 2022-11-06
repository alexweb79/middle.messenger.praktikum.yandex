import Block from '../../../services/Block';
import svgArrowTmpl from './SvgArrow.tmpl';

export default class SvgArrow extends Block {
  render() {
    return this.compile(svgArrowTmpl);
  }
}
