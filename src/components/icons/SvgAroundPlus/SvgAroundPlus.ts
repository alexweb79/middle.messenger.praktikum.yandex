import Block from '../../../services/Block';
import svgAroundPlusTmpl from './SvgAroundPlus.tmpl';

export default class SvgAroundPlus extends Block {
  render() {
    return this.compile(svgAroundPlusTmpl);
  }
}
