import {getKey} from "./getKey";
import {describe} from "mocha";
import {expect} from "chai";

describe('getKey', function() {
  it('should return first argument', () => {
    // arrange
    const key = 'first'

    // act
    const res = getKey(key)

    // assert
    expect(res).to.eq(key)
  });

  it('should return second argument type second[first]', () => {
    const key = 'first'
    const parentKey = 'second' as any

    const res = getKey(key, parentKey)

    expect(res).to.eq(`${parentKey}[${key}]`)
  });

  it('should throw error if first argument not string', () => {
    const key = 111 as any

    const fn = () => getKey(key)

    expect(fn).to.throw(Error)
  });

  it('should throw error if second argument not string', () => {
    const key = 'first'
    const parentKey = 222 as any

    const fn = () => getKey(key, parentKey)

    expect(fn).to.throw(Error)
  });

  it('should return results without spaces', () => {
    const key = 'fir st'
    const parentKey = 'dd sa sa' as any

    const res = getKey(key, parentKey)

    expect(res).to.eq(`${parentKey}[${key}]`.replace(/\s/g,''))
  });
})
