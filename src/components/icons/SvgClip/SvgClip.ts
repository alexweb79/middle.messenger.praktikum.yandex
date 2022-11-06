import Block from '../../../services/Block';
import svgClipTmpl from './SvgClip.tmpl';

export default class SvgClip extends Block {
  render() {
    return this.compile(svgClipTmpl);
  }
}
