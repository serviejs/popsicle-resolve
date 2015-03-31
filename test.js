/* global describe, it */

require('es6-promise').polyfill()

var popsicle = require('popsicle')
var expect = require('chai').expect
var resolve = require('./')

describe('popsicle resolve', function () {
  it('should resolve all urls', function () {
    var req = popsicle('/users')
      .use(resolve('http://example.com'))

    expect(req.url).to.equal('http://example.com/users')
  })

  it('should accept absolute urls', function () {
    var req = popsicle('http://foo.com/users')
      .use(resolve('http://example.com'))

    expect(req.url).to.equal('http://foo.com/users')
  })
})
