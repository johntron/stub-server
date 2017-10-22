const { createServer } = require('http');
const yakbak = require('yakbak');

const handlerForHost = (host, dirname, config = {}, provider = yakbak) => provider(`http://${host}`, {
  dirname,
  hash: req => encodeURIComponent(req.url.substr(1) || '__index'),
  ...config,
});

const startServer = (host, handler, port, create = createServer) => {
  const server = create(handler);
  server.on('request', req => console.log(`${req.method} ${req.headers.host}${req.url}`));
  server.on('close', () => console.log('Closing server'));
  server.listen(port, () => console.log(`Started forwarding ${host} on :${port}`));
  return server;
};

module.exports = {
  handlerForHost,
  startServer,
};
