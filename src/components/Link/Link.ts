import {Block, Props} from '../../services/Block';
import linkTmpl from './Link.tmpl';

export class Link extends Block {
  render() {
    return this.compile(linkTmpl);
  }

  addEvents() {
    this._element.querySelectorAll('a').forEach((a: HTMLElement) => {
      a.addEventListener('click', (<Props>this)._props.events.click);
    });
    super.addEvents();
  }
}
