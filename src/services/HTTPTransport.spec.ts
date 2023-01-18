import {HTTPTransport} from "./HTTPTransport";
import {describe} from 'mocha';
import {expect} from 'chai';

const HTTP = new HTTPTransport('https://ya-praktikum.tech/api/v2');
// const HTTP = new HTTPTransport('https://jsonplaceholder.typicode.com');

describe('HTTPTransport', function() {

  it('Test method get: add user to id', () => {
    HTTP.get('/user/1').then((response) =>
      expect(response).to.have.property('id').and.equal(1)
    );
  });

})
