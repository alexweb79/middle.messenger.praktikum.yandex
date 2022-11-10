import {Block} from '../../../services/Block';
import popUpAddInMessageTmpl from './PopUpAddInMessage.tmpl';

export class PopUpAddInMessage extends Block {
  render() {
    return this.compile(popUpAddInMessageTmpl);
  }
}
