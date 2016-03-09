var url = require('url')

module.exports = prefixResolve

function prefixResolve (prefix) {
  return function (request) {
    request.url = url.resolve(prefix, request.url)
  }
}
