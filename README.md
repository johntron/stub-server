[![Build Status](https://travis-ci.org/johntron/stub-server.svg?branch=master)](https://travis-ci.org/johntron/stub-server)
[![Maintainability](https://api.codeclimate.com/v1/badges/a6a94889cc58ffddd9a2/maintainability)](https://codeclimate.com/github/johntron/stub-server/maintainability)
[![Greenkeeper badge](https://badges.greenkeeper.io/johntron/stub-server.svg)](https://greenkeeper.io/)

# Stub server

Use [yakbak](https://github.com/flickr/yakbak) to record and playback HTTP responses.

Example:
```javascript
const { handlerForHost, startServer } = require('stub-server');

const serverForHost = (host, port, start = startServer, handler = handlerForHost) => start(host, handler(host), port);

const stubs = [
  'www.thoughtworks.com',
  'www.google.com',
];
const servers = stubs.map((host, i) => serverForHost(host, 8090 + i));
```
