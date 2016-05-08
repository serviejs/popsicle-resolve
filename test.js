/* global describe, it */

require('es6-promise').polyfill()

var popsicle = require('popsicle')
var nock = require('nock')
var expect = require('chai').expect
var resolve = require('./')

describe('popsicle resolve', function () {
  it('should resolve absolue paths', function () {
    nock('http://example.com').get('/users').reply(200)

    return popsicle.request('/users')
      .use(resolve('http://example.com'))
      .then(res => {
        expect(res.url).to.equal('http://example.com/users')
      })
  })

  it('should resolve relative paths', function () {
    nock('http://example.com').get('/users/123').reply(200)

    return popsicle.request('123')
      .use(resolve('http://example.com/users/456'))
      .then(res => {
        expect(res.url).to.equal('http://example.com/users/123')
      })
  })

  it('should resolve absolute paths to base', function () {
    nock('http://example.com').get('/users').reply(200)

    return popsicle.request('/users')
      .use(resolve('http://example.com/sub/path'))
      .then(res => {
        expect(res.url).to.equal('http://example.com/users')
      })
  })

  it('should resolve absolute urls', function () {
    nock('http://foo.com').get('/users').reply(200)

    return popsicle.request('http://foo.com/users')
      .use(resolve('http://example.com'))
      .then(res => {
        expect(res.url).to.equal('http://foo.com/users')
      })
  })
})
