import {Block} from '../../../services/Block';
import svgNoAvatarTmpl from './SvgNoAvatar.tmpl';

export class SvgNoAvatar extends Block {
  render() {
    return this.compile(svgNoAvatarTmpl);
  }
}
