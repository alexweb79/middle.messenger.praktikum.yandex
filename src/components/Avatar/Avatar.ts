import {Block, Props} from '../../services/Block';
import avatarTmpl from './Avatar.tmpl';
import {SvgNoAvatar} from "../icons/SvgNoAvatar/SvgNoAvatar";
import {Button} from "../Button/Button";
import {profileChangeDataPage} from "../../pages/ProfileChangeDataPage";

export class Avatar extends Block {
  constructor(...propsAndChild: Props[]) {
    super('div', {
      ...propsAndChild,
      attr: { class: 'avatar' },
      changeButton: true,
      'svg-no-avatar': new SvgNoAvatar('div', {}),
      button: new Button('button', {
        attr: { class: 'avatar__button', type: 'button' },
        text: 'Поменять аватар',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            profileChangeDataPage.openModal();
          },
        },
      })
    });
  }

  render() {
    return this.compile(avatarTmpl);
  }
}

export const avatar = new Avatar();
