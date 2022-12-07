import {Block, Props} from '../../../services/Block';
import popUpAddInMessageTmpl from './PopUpAddInMessage.tmpl';
import {SvgImage} from "../../icons/SvgImage/SvgImage";
import {SvgFile} from "../../icons/SvgFile/SvgFile";
import {SvgLocation} from "../../icons/SvgLocation/SvgLocation";
import {PopUpActionUser} from "../PopUpActionUser/PopUpActionUser";

export class PopUpAddInMessage extends Block {
  constructor(...propsAndChild: Props[]) {
    super('button', {...propsAndChild,
      attr: { id: 'add-in-message', class: 'pop-up pop-up-bottom pop-up-left' },
      'svg-image': new SvgImage('div', {}),
      'svg-file': new SvgFile('div', {}),
      'svg-location': new SvgLocation('div', {}),
    })
  }

  render() {
    return this.compile(popUpAddInMessageTmpl);
  }
}

export const popUpAddInMessage = new PopUpActionUser();
