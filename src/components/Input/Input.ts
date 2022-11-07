import {Block, Props} from '../../services/Block';
import inputTmpl from './Input.tmpl';

export class Input extends Block {
  render() {
    return this.compile(inputTmpl);
  }

  addEvents() {
    this._element.querySelectorAll('input').forEach((input: HTMLElement) => {
      input.addEventListener('blur', (<Props>this)._props.events.blur);
      input.addEventListener('focus', (<Props>this)._props.events.blur);
    });
    super.addEvents();
  }
}
