import Block from '../../services/Block';
import buttonTmpl from './Button.tmpl';

export default class Button extends Block {
  render() {
    return this.compile(buttonTmpl);
  }

  sendForm() {
    const sendForm = {};
    let formValidate = true;
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input: HTMLInputElement) => {
      if (input.value && !input.dataset.noValidate) {
        sendForm[input.name] = input.value;
      } else {
        formValidate = false;
      }
    });
    if (formValidate) {
      // eslint-disable-next-line no-use-before-define
      console.log('sendForm: ', sendForm);
    }
  }

  addEvents() {
    this._element.querySelectorAll('button').forEach((button: HTMLElement) => {
      button.addEventListener('click', this._props.events.click);
    });
    super.addEvents();
  }
}
