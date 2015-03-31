module.exports = prefixResolve

function prefixResolve (prefix) {
  prefix = prefix.replace(/\/$/, '')

  return function (request) {
    if (isHost(request.url)) {
      return
    }

    request.url = prefix + '/' + request.url.replace(/^\//, '')
  }
}

function isHost (url) {
  return /(?:\w+\:)?\/\//.test(url)
}
