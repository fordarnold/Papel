/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import users from './users.data';
import User from '../models/User';

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

describe('API Endpoint: /api/v1/auth/signup', () => {
  before((done) => {
    User.createTable(); // create users table
    User.create(users.sampleUser); // insert a sample user
    done();
  });
  it('should create a new user account', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(users.newUser) // send new user as request payload
      .then((res) => {
        res.should.have.status(201);
        res.body.should.have.property('message', 'User account created successfully');
        res.body.should.be.a('object');
        res.body.should.have.property('token');
        done();
      })
      .catch((err) => done(err));
  });

  it('should not create a new user if email exists', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(users.sampleUser) // send existing user as request payload
      .then((res) => {
        res.should.have.status(409);
        res.body.should.have.property('error', 'The email for this user already exists');
        done();
      })
      .catch((err) => done(err));
  });

  // it('should not create a new user if there is a validation error', (done) => {
  //   chai.request(app)
  //     .post('/api/v1/auth/signup')
  //     .send(testUsers[2])
  //     .end((err, res) => {
  //       res.should.have.status(400);
  //       res.body.should.have.property('error', 'There was a validation error');
  //       done();
  //     });
  // });
});
