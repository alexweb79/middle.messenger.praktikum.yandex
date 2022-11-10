import {Block, Props} from '../../services/Block';
import buttonArrowTmpl from './ButtonArrow.tmpl';

export class ButtonArrow extends Block {
  render() {
    return this.compile(buttonArrowTmpl);
  }

  addEvents() {
    this._element.querySelectorAll('button').forEach((button: HTMLElement) => {
      button.addEventListener('click', (<Props>this)._props.events.click);
    });
    super.addEvents();
  }
}
