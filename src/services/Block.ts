import Handlebars from 'handlebars';
import EventBus from './EventBus';

export default class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  _eventBus;

  _id;

  _element: HTMLElement | Element;

  _props;

  _meta;

  _children;

  _setUpdate = false;

  constructor(tagName = 'div', propsAndChild: object = {}) {
    const { children, props } = this.getChildren(propsAndChild);

    this._eventBus = new EventBus();
    this._id = Date.now() * Math.floor(Math.random() * 42) + 1;
    this._children = this.makePropsProxy(children);
    this._props = this.makePropsProxy({ ...props, __id: this._id });
    this._meta = { tagName, props };
    this.registerEvents();
    this._eventBus.emit(Block.EVENTS.INIT);
  }

  registerEvents() {
    this._eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    this._eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    this._eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    this._eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this.createDocumentElement(tagName);
  }

  init() {
    this._element = this.createDocumentElement(this._meta?.tagName);
    this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  createDocumentElement(tagName: string) {
    let element;
    element = document.createElement(tagName);
    if (this._props.__id) {
      element.setAttribute('data-id', this._id);
    }
    return element;
  }

  _render() {
    const block = this.render();
    this.removeEvents();
    this._element.innerHTML = '';
    this._element.appendChild(block);
    this.addEvents();
    this.addAttribute();
  }

  render() {}

  addEvents() {
    const { events = {} } = this._props;
    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  removeEvents() {
    const { events = {} } = this._props;
    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  addAttribute() {
    const { attr = {} } = this._props;
    Object.entries(attr).forEach(([key, value]) => {
      this._element.setAttribute(key, value);
    });
  }

  getChildren(propsAndChildren) {
    const children = {};
    const props = {};

    Object.keys(propsAndChildren).forEach((key) => {
      if (propsAndChildren[key] instanceof Block) {
        children[key] = propsAndChildren[key];
      } else {
        props[key] = propsAndChildren[key];
      }
    });

    return { children, props };
  }

  compile(template: string, props:object = this._props) {
    if (typeof (props) === 'undefined') {
      props = this._props;
    }

    const propsAndStubs = { ...props };

    Object.entries(this._children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    const fragment = this.createDocumentElement('template');
    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

    Object.values(this._children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
      if (stub) {
        const childContent = child.getContent();
        stub.replaceWith(childContent);
      }
    });

    return fragment.content;
  }

  _componentDidMount() {
    this.componentDidMount();
    Object.values(this._children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this._eventBus.emit(Block.EVENTS.FLOW_CDM);
    if (Object.keys(this._children).length) {
      this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  _componentDidUpdate(oldProps: object, newProps: object) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidUpdate(oldProps: object, newProps: object) {
    return true;
  }

  setProps(nextProps: object) {
    if (!nextProps) {
      return;
    }

    this._setUpdate = false;
    const { children, props } = this.getChildren(nextProps);

    if (Object.values(children).length) {
      Object.assign(this._children, children);
    }

    if (Object.values(props).length) {
      Object.assign(this._props, props);
    }

    if (this._setUpdate) {
      this._eventBus.emit(Block.EVENTS.FLOW_CDU, { ...this._props }, props);
      this._setUpdate = false;
    }
  }

  makePropsProxy(props) {
    return new Proxy(props, {

      get(target, prop) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },

      set(target, prop, value) {
        target[prop] = value;
        this._eventBus.emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },

    });
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }

  getContent() {
    return this._element;
  }
}
