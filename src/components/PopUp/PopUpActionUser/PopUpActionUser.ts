import Block from '../../../services/Block';
import popUpActionUserTmpl from './PopUpActionUser.tmpl';

export default class PopUpActionUser extends Block {
  render() {
    return this.compile(popUpActionUserTmpl);
  }
}
