import {Block} from '../../../services/Block';
import svgImageTmpl from './SvgImage.tmpl';

export class SvgImage extends Block {
  render() {
    return this.compile(svgImageTmpl);
  }
}
