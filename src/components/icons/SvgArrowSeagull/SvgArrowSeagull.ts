import Block from '../../../services/Block';
import svgArrowSeagullTmpl from './SvgArrowSeagull.tmpl';

export default class SvgArrowSeagull extends Block {
  render() {
    return this.compile(svgArrowSeagullTmpl);
  }
}
