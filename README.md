# Popsicle Resolve

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

> Resolve Popsicle HTTP request URLs against a prefix.

## Installation

```
npm install popsicle-resolve --save
```

## Usage

```js
import { middleware, toFetch } from "popsicle";
import { Request } from "popsicle/dist/node";
import { resolve } from "popsicle-resolve";

const fetch = toFetch([resolve("http://example.com"), middleware], Request);

fetch("/users.json"); //=> Request("http://example.com/users.json")
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/popsicle-resolve.svg?style=flat
[npm-url]: https://npmjs.org/package/popsicle-resolve
[downloads-image]: https://img.shields.io/npm/dm/popsicle-resolve.svg?style=flat
[downloads-url]: https://npmjs.org/package/popsicle-resolve
[travis-image]: https://img.shields.io/travis/serviejs/popsicle-resolve.svg?style=flat
[travis-url]: https://travis-ci.org/serviejs/popsicle-resolve
[coveralls-image]: https://img.shields.io/coveralls/serviejs/popsicle-resolve.svg?style=flat
[coveralls-url]: https://coveralls.io/r/serviejs/popsicle-resolve?branch=master
