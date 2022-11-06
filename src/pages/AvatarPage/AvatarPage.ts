import Block from '../../services/Block';
import avatarPageTmpl from './AvatarPage.tmpl';

export default class AvatarPage extends Block {
  render() {
    return this.compile(avatarPageTmpl);
  }
}
