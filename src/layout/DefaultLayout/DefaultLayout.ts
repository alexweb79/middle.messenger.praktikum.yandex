import Block from '../../services/Block';
import defaultLayoutTmpl from './DefaultLayout.tmpl';

export default class DefaultLayout extends Block {
  render() {
    return this.compile(defaultLayoutTmpl);
  }
}
