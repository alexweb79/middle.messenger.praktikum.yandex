import Block from '../../services/Block';
import linkTmpl from './Link.tmpl';

export default class Link extends Block {
  render() {
    return this.compile(linkTmpl);
  }
}