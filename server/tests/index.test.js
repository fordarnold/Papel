/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.should();
chai.use(chaiHttp);

/**
 * Test Suites and Test Cases
 *
 * ~https://www.robinwieruch.de/node-js-testing-mocha-chai
 * -----------------------------------------------------------------
 *
 * describe('test suite', () => {
 *   it('test case', () => {
 *     ...
 *   });
 * });
 *
 * -----------------------------------------------------------------
 */

describe('Undefined API Endpoint: /api/v1/xyz', () => {
  it('should return a 404 error response', (done) => {
    chai.request(app)
      .get('/api/v1/xyz')
      .then((res) => {
        res.should.have.status(404);
        res.body.should.have.property('status', 404);
        res.body.should.have.property('error', 'Endpoint not found');
        res.body.should.be.a('object');
        done();
      })
      .catch((err) => done(err));
  });
});
