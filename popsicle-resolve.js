var url = require('url')

module.exports = resolve

function resolve (prefix) {
  return function (request) {
    request.url = url.resolve(prefix, request.url)
  }
}
