import Block from '../../../services/Block';
import svgLocationTmpl from './SvgLocation.tmpl';

export default class SvgLocation extends Block {
  render() {
    return this.compile(svgLocationTmpl);
  }
}
