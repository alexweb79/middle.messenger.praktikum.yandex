import {Block} from '../../services/Block';
import avatarTmpl from './Avatar.tmpl';

export class Avatar extends Block {
  render() {
    return this.compile(avatarTmpl);
  }
}
