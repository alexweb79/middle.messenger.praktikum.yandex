import Block from '../../services/Block';
import buttonArrowTmpl from './ButtonArrow.tmpl';

export default class ButtonArrow extends Block {
  render() {
    return this.compile(buttonArrowTmpl);
  }

  addEvents() {
    this._element.querySelectorAll('button').forEach((button: HTMLElement) => {
      button.addEventListener('click', this._props.events.click);
    });
    super.addEvents();
  }
}
