import Block from '../../../services/Block';
import svgFileTmpl from './SvgFile.tmpl';

export default class SvgFile extends Block {
  render() {
    return this.compile(svgFileTmpl);
  }
}
