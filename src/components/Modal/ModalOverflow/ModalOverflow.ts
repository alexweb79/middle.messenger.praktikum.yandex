import {Block, Props} from '../../../services/Block';
import modalOverflowTmpl from './ModalOverflow.tmpl';

export class ModalOverflow extends Block {
  constructor(...propsAndChild: Props[]) {
    super('button', {
      ...propsAndChild,
      attr: { class: 'modal__overflow', type: 'button' },
      events: {
        click: (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
          this.closeModal();
        },
      },
    });
  }

  closeModal() {
    const modals = document.querySelectorAll('.modal__wrap.active')
    modals.forEach(modal => {
      modal.classList.remove('active');
    })
  }

  addEvents() {
    this._element.querySelectorAll('button').forEach((button: HTMLElement) => {
      button.addEventListener('click', (<Props>this)._props.events.click);
    });
    super.addEvents();
  }

  render() {
    return this.compile(modalOverflowTmpl, this._props);
  }
}
