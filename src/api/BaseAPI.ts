import {HTTPTransport} from "../services/HTTPTransport";

export abstract class BaseAPI {
  HTTP: HTTPTransport;

  protected constructor(endPoint: string) {
    this.HTTP = new HTTPTransport(endPoint)
  }

  create() { throw new Error('Not implemented'); }

  request() { throw new Error('Not implemented'); }

  update() { throw new Error('Not implemented'); }

  delete() { throw new Error('Not implemented'); }
}
