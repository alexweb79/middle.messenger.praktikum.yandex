import {Block} from '../../../services/Block';
import popUpActionUserTmpl from './PopUpActionUser.tmpl';

export class PopUpActionUser extends Block {
  render() {
    return this.compile(popUpActionUserTmpl);
  }
}
