var url = require('url')

module.exports = resolve

function resolve (prefix) {
  return function (request, next) {
    request.url = url.resolve(prefix, request.url)

    return next()
  }
}
