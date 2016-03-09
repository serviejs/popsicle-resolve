/* global describe, it */

require('es6-promise').polyfill()

var popsicle = require('popsicle')
var expect = require('chai').expect
var resolve = require('./')

describe('popsicle resolve', function () {
  it('should resolve absolue paths', function () {
    var req = popsicle.request('/users')
      .use(resolve('http://example.com'))

    expect(req.url).to.equal('http://example.com/users')
  })

  it('should resolve relative paths', function () {
    var req = popsicle.request('123')
      .use(resolve('http://example.com/users/456'))

    expect(req.url).to.equal('http://example.com/users/123')
  })

  it('should resolve absolute paths to base', function () {
    var req = popsicle.request('/users')
      .use(resolve('http://example.com/sub/path'))

    expect(req.url).to.equal('http://example.com/users')
  })

  it('should resolve absolute urls', function () {
    var req = popsicle.request('http://foo.com/users')
      .use(resolve('http://example.com'))

    expect(req.url).to.equal('http://foo.com/users')
  })
})
