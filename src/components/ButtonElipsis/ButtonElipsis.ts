import {Block, Props} from '../../services/Block';
import buttonElipsisTmpl from './ButtonElipsis.tmpl';

export class ButtonElipsis extends Block {
  render() {
    return this.compile(buttonElipsisTmpl);
  }

  addEvents() {
    this._element.querySelectorAll('button').forEach((button: HTMLElement) => {
      button.addEventListener('click', (<Props>this)._props.events.click);
    });
    super.addEvents();
  }
}
