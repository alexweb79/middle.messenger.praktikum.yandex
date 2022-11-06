import Block from '../../services/Block';
import inputTmpl from './Input.tmpl';

export default class Input extends Block {
  render() {
    return this.compile(inputTmpl);
  }

  addEvents() {
    this._element.querySelectorAll('input').forEach((input: HTMLElement) => {
      input.addEventListener('blur', this._props.events.blur);
      input.addEventListener('focus', this._props.events.blur);
    });
    super.addEvents();
  }
}
