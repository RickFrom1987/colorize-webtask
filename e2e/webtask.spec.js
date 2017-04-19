const CONFIG = require('./config');
const assert = require('assert');
const request = require('supertest');

describe('Webtask', function() {
  describe('#WebtaskService get()', function() {
    it('should respond with json', function(done) {
      request(CONFIG.base_url)
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });
});