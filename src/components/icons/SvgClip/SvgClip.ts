import {Block} from '../../../services/Block';
import svgClipTmpl from './SvgClip.tmpl';

export class SvgClip extends Block {
  render() {
    return this.compile(svgClipTmpl);
  }
}
