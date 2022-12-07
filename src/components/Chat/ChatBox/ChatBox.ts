import {Block, Props} from '../../../services/Block';
import chatBoxTmpl from './ChatBox.tmpl';
import {PopUpActionUser} from "../../PopUp/PopUpActionUser/PopUpActionUser";
import {PopUpAddInMessage} from "../../PopUp/PopUpAddInMessage/PopUpAddInMessage";

export class ChatBox extends Block {
  constructor(...propsAndChild: Props[]) {
    super('div', {...propsAndChild,
      attr: { class: 'box' },
      messages: [],
      'pop-up-action-user': new PopUpActionUser(),
      'pop-up-add-in-message': new PopUpAddInMessage(),
    })

  }

  render() {
    return this.compile(chatBoxTmpl);
  }
}
