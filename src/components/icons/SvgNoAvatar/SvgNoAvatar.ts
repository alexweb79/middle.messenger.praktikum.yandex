import Block from '../../../services/Block';
import svgNoAvatarTmpl from './SvgNoAvatar.tmpl';

export default class SvgNoAvatar extends Block {
  render() {
    return this.compile(svgNoAvatarTmpl);
  }
}
