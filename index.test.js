const { handlerForHost } = require('./index.js');
const { stub, assert, match } = require('sinon');
const { resolve } = require('path');

it('handlerForHost should setup yakbak for host with directory named after host', () => {
  const host = 'test';
  const dirname = resolve(__dirname, 'stubs');
  const yakbak = stub();
  handlerForHost(host, dirname, {}, yakbak);
  assert.calledWith(yakbak, match(`http://${host}`), match({
    dirname: match(dirname),
  }));
});
