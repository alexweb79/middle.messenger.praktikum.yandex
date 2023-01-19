export function getKey(key: string, parentKey?: string) {

  if (typeof key !== 'string' || (parentKey && typeof parentKey !== 'string')) {
    throw new Error('key must be string')
  }

  if (parentKey) {
    parentKey.replace(/\s/g,'')
  }

  key.replace(/\s/g,'')

  return parentKey ? `${parentKey}[${key}]`.replace(/\s/g,'') : key.replace(/\s/g,'');
}
