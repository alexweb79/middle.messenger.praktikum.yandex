type Indexed<T = unknown> = {
  [key in string]: T;
};

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
  for (let p in rhs) {
    if (!rhs.hasOwnProperty(p)) {
      continue;
    }
    try {
      if (Object.keys(rhs).length === 0) {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        lhs[p] = rhs[p];
      }
    } catch(e) {
      lhs[p] = rhs[p];
    }
  }
  return lhs;
}

export function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof path !== 'string') {
    return new Error('path must be string');
  }
  if (typeof object !== 'object') {
    return object;
  }
  const newObject: Indexed | unknown = path.split('.').reduceRight((acc: object, key: string) => (
    (Object.keys(acc).length === 0) ? { [key]: value } : { [key]: acc }
  ), {});
  return merge(object as Indexed, newObject as Indexed);
}
