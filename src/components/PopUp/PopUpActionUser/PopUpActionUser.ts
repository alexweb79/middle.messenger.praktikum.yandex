import {Block, Props} from '../../../services/Block';
import popUpActionUserTmpl from './PopUpActionUser.tmpl';
import {ButtonPlus} from "../../ButtonPlus/ButtonPlus";
import {ButtonMinus} from "../../ButtonMinus/ButtonMinus";

export class PopUpActionUser extends Block {
  constructor(...propsAndChild: Props[]) {
    super('button', {...propsAndChild,
      attr: { id: 'action-user', class: 'pop-up pop-up-top pop-up-right' },
      'button-open-modal-add-user-to-chat': new ButtonPlus(),
      'button-open-modal-remove-user-from-chat': new ButtonMinus(),
    })
  }

  render() {
    return this.compile(popUpActionUserTmpl);
  }
}

export const popUpActionUser = new PopUpActionUser();
