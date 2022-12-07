import {Block, Props} from '../../services/Block';
import buttonClipTmpl from './ButtonClip.tmpl';

export class ButtonClip extends Block {
  render() {
    return this.compile(buttonClipTmpl);
  }

  addEvents() {
    this._element.querySelectorAll('button').forEach((button: HTMLElement) => {
      button.addEventListener('click', (<Props>this)._props.events.click);
    });
    super.addEvents();
  }
}
