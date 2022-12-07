import { EventBus } from './EventBus';
// @ts-ignore
import Handlebars from 'handlebars';

export interface Props {
  [key: string]: any;
  tagName?: string;
  events?: { [eventName: string]: EventListener };
}

export class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  protected _eventBus;

  protected _id;

  protected _element: HTMLElement | Element;

  protected _meta;

  protected _setUpdate = false;

  public _props: Props;

  public _children;

  public constructor(tagName: string = 'div', propsAndChild: Props = {}) {
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

  protected _createResources() {
    const { tagName } = this._meta;
    this._element = this.createDocumentElement(tagName);
  }

  init() {
    this._createResources()
    this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  createDocumentElement(tagName: string) {
    let element;
    element = document.createElement(tagName);
    if (this._props.__id) {
      element.setAttribute('data-id', this._id.toString());
    }
    return element;
  }

  protected _render() {
    const block: Node = this.render();
    this.removeEvents();
    this._element.innerHTML = '';
    this._element.appendChild(block);
    this.addEvents();
    this.addAttribute();
  }

  render() {
    const template = '';
    return this.compile(template, this._props);
  }

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
    (<any>Object).entries(attr).forEach(([key, value]: any) => {
      this._element.setAttribute(key, value);
    });
  }

  getChildren(propsAndChildren: Props) {
    const children: Props = {};
    const props: Props = {};

    Object.keys(propsAndChildren).forEach((key) => {
      if (propsAndChildren[key] instanceof Block) {
        children[key] = propsAndChildren[key];
      } else {
        props[key] = propsAndChildren[key];
      }
    });

    return { children, props };
  }

  compile(template: string, props: Props = this._props) {
    if (typeof (props) === 'undefined') {
      props = this._props;
    }

    const propsAndStubs: Props = { ...props };

    (<any>Object).entries(this._children).forEach(([key, child]: any) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    const fragment = this.createDocumentElement('template');

    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

    (<any>Object).values(this._children).forEach((child: any) => {
      // @ts-ignore
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
      if (stub) {
        const childContent = child.getContent();
        stub.replaceWith(childContent);
      }
    });

    // @ts-ignore
    return fragment.content;
  }

  protected _componentDidMount():void {
    this.componentDidMount();
    (<any>Object).values(this._children).forEach((child: any) => {
      child.dispatchComponentDidMount();
    });
  }

  componentDidMount() {}

  dispatchComponentDidMount():void {
    this._eventBus.emit(Block.EVENTS.FLOW_CDM);
    if (Object.keys(this._children).length) {
      this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected _componentDidUpdate(oldProps: object, newProps: object) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidUpdate(oldProps: Props, newProps: Props) {
    if (oldProps !== newProps) {
      return true;
    }
    return false;
  }

  setProps(nextProps: object) {
    if (!nextProps) {
      return;
    }

    this._setUpdate = false;
    const { children, props } = this.getChildren(nextProps);

    if ((<any>Object).values(children).length) {
      (<any>Object).assign(this._children, children);
    }

    if ((<any>Object).values(props).length) {
      (<any>Object).assign(this._props, props);
    }

    if (this._setUpdate) {
      this._eventBus.emit(Block.EVENTS.FLOW_CDU, { ...this._props }, props);
      this._setUpdate = false;
    }
  }

  makePropsProxy(props: Props) {
    // @ts-ignore
    const self = this;
    return new Proxy(props, {

      get(target: Props, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },

      set(target: Props, prop: string, value: any) {
        target[prop] = value;
        self._eventBus.emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },

    });
  }

  show() {
    (<HTMLElement>this.getContent()).style.display = 'block';
  }

  hide() {
    (<HTMLElement>this.getContent()).style.display = 'none';
  }

  getContent() {
    return this._element;
  }
}
