const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const dom = new JSDOM('<!DOCTYPE html><html><body><div id="root"></div></body></html>', {url: 'http://localhost'});

global.window = dom.window;
global.document = dom.window.document;
global.DocumentFragment = dom.window.DocumentFragment;
