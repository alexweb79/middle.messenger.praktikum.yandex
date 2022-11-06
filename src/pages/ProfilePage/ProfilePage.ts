import Block from '../../services/Block';
import profilePageTmpl from './ProfilePage.tmpl';

export default class ProfilePage extends Block {
  render() {
    return this.compile(profilePageTmpl);
  }
}
