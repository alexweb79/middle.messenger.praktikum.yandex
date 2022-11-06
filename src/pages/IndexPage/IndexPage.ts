import Block from '../../services/Block';
import indexPageTmpl from './IndexPage.tmpl';

export default class IndexPage extends Block {
  render() {
    return this.compile(indexPageTmpl);
  }
}
