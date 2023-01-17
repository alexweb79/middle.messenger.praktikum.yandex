import proxyquire = require('proxyquire');
import { expect } from 'chai';
import sinon = require('sinon');

const eventBusMock = {
  on: sinon.fake(),
  emit: sinon.fake(),
}

const { Block } = proxyquire('../services/Block', {
  '../services/EventBus': {
    EventBus: class {
      on = eventBusMock.on;
      emit = eventBusMock.emit;
    },
    '@noCallThru': true
  }
});

describe('Block', () => {
  class ComponentMock extends Block {}

  it('should fire init event on initialization',  () => {
    new ComponentMock();

    expect(eventBusMock.on.calledWith('init')).to.eq(true);
  });
});
