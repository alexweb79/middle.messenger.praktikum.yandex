import Block from '../../services/Block';
import profileChangeDataPageTmpl from './ProfileChangeDataPage.tmpl';

export default class ProfileChangeDataPage extends Block {
  render() {
    return this.compile(profileChangeDataPageTmpl);
  }
}
