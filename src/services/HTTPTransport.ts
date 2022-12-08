import {queryStringify} from "../utils/queryStringify";

enum Method {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE'
}

interface Headers {
  [key: string]: string;
}

type Options = {
  method: Method;
  data?: any;
  headers?: Headers;
  timeout?: number;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;
type HTTPMethod = (url: string, options?: OptionsWithoutMethod) => Promise<XMLHttpRequest>

export class HTTPTransport {
  static apiUrl: string = 'https://ya-praktikum.tech/api/v2';
  protected _endPoint: string;

  constructor(endPoint: string) {
    this._endPoint = HTTPTransport.apiUrl + endPoint;
  }

  public get: HTTPMethod = (url, options = {}) => (
    this.request(url, {...options, method: Method.Get}, options.timeout)
  )

  public post: HTTPMethod = (url, options = {}) => (
    this.request(url, { ...options, method: Method.Post }, options.timeout)
  )

  public put: HTTPMethod = (url, options = {}) => (
    this.request(url, { ...options, method: Method.Put }, options.timeout)
  )

  public delete: HTTPMethod = (url, options = {}) => (
    this.request(url, { ...options, method: Method.Delete }, options.timeout)
  )

  private request(url: string, options: Options = { method: Method.Get }, timeout: number = 5000): Promise<XMLHttpRequest> {
    const { method, data, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, this._endPoint + url);

      if (!(options.data instanceof FormData)) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }

      if (headers) {
        Object.keys(headers).forEach(key => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;
      xhr.timeout = timeout;
      xhr.withCredentials = true;

      if (method === Method.Get && !data) {
        xhr.send();
      } else if ( method === Method.Get ) {
        xhr.send(queryStringify(data));
      } else {
        xhr.send(options.data instanceof FormData ? data : JSON.stringify(data));
      }
    });
  }

}
