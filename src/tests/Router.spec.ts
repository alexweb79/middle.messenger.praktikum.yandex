import Router from '../services/Router/Router';
import {beforeEach, after, describe} from 'mocha';
import {expect} from 'chai';
import sinon = require("sinon");
import {Block} from "../services/Block";

window.history.forward = () => {}

describe('Router', function() {
  const originForward = window.history.forward
  const originBack = window.history.back

  const getContentFake = sinon.fake.returns(document.createElement('div'));
  class classBlockMock extends Block {
    getContent = getContentFake;
  }
  const BlockMock = new classBlockMock

  beforeEach(() => {
    Router.reset()
    window.history.forward = sinon.fake();
    window.history.back = sinon.fake();
  })

  after(() => {
    window.history.forward = originForward
    window.history.back = originBack
  })

  it('method use should return Router instance', () => {
    const res = Router.use('/', BlockMock);

    expect(res).to.eq(Router);
  });

  it('should render a page on start', () => {
    Router
      .use('/', BlockMock)
      .start();

    expect(getContentFake.callCount).to.eq(1);
  });

  it('forward method is called', () => {
    Router.forward()

    expect((window.history.forward as any).callCount).to.eq(1)
  });

  it('back method is called', () => {
    Router.back()

    expect((window.history.back as any).callCount, 'error').to.eq(1);
  });
})
