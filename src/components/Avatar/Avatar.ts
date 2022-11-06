import Block from '../../services/Block';
import avatarTmpl from './Avatar.tmpl';

export default class Avatar extends Block {
  render() {
    return this.compile(avatarTmpl);
  }
}
