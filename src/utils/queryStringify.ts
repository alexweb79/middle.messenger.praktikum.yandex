import {isPlainObject} from "./isPlainObject";
import {getParams} from "./getParams";

type PlainObject<T = unknown> = {
  [k in string]: T;
};

export function queryStringify(data: PlainObject) {
  if (!isPlainObject(data)) {
    throw new Error('input must be an object');
  }

  return getParams(data).map(arr => arr.join('=')).join('&');
}
