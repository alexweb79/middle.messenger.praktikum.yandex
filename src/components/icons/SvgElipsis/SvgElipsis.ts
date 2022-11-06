import Block from '../../../services/Block';
import svgElipsisTmpl from './SvgElipsis.tmpl';

export default class SvgElipsis extends Block {
  render() {
    return this.compile(svgElipsisTmpl);
  }
}
