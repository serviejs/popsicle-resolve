# Popsicle Resolve

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Greenkeeper badge](https://badges.greenkeeper.io/blakeembrey/popsicle-resolve.svg)](https://greenkeeper.io/)

Resolve Popsicle HTTP request URLs against a prefix.

## Installation

```
npm install popsicle-resolve --save
```

## Usage

```javascript
var popsicle = require('popsicle')
var resolve = require('popsicle-resolve')

popsicle.request('/users.json')
  .use(resolve('http://example.com'))
  //=> http://example.com/users.json
```

## TypeScript

This project includes a [TypeScript definition](popsicle-resolve.d.ts).

## License

MIT

[npm-image]: https://img.shields.io/npm/v/popsicle-resolve.svg?style=flat
[npm-url]: https://npmjs.org/package/popsicle-resolve
[downloads-image]: https://img.shields.io/npm/dm/popsicle-resolve.svg?style=flat
[downloads-url]: https://npmjs.org/package/popsicle-resolve
[travis-image]: https://img.shields.io/travis/blakeembrey/popsicle-resolve.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/popsicle-resolve
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/popsicle-resolve.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/popsicle-resolve?branch=master
