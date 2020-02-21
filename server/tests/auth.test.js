/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import users from './users.data';

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
  // before((done) => {
  //   // User.createTable(); // create users table
  //   // User.create(users.sampleUser); // insert a sample user
  //   done();
  // });
  it('should create a new user account', async () => {
    /** Asyncronous response */
    const res = await chai.request(app).post('/api/v1/auth/signup').send(users.newUser);

    res.should.have.status(201);
    res.body.should.have.property('message', 'User account created successfully');
    res.body.should.be.a('object');

    // await chai.request(app)
    //   .post('/api/v1/auth/signup')
    //   .send(users.newUser) // send new user as request payload
    //   .then((res) => {
    //     res.should.have.status(201);
    //     res.body.should.have.property('message', 'User account created successfully');
    //     res.body.should.be.a('object');
    //     // res.body.should.have.property('token');
    //     // done(); // move this to `finally()` block ~https://wietse.loves.engineering/testing-promises-with-mocha-90df8b7d2e35
    //   })
    //   .catch((err) => done(err));
  });

  it('should not create a new user if email exists', async () => {
    /** Asyncronous response */
    const res = await chai.request(app).post('/api/v1/auth/signup').send(users.existingUser);

    res.should.have.status(409);
    res.body.should.have.property('error', 'The email for this user already exists');
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

describe('API Endpoint: /api/v1/auth/signin', () => {
  it('should sign in with a user account', async () => {
    /** Asyncronous response */
    const res = await chai.request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: users.existingUser.email,
        password: users.existingUser.password,
      });

    res.should.have.status(200);
    res.body.should.have.property('data');
  });

  // it('should not sign in without an existing user account', async () => {
  //   /** Asyncronous response */
  //   const res = await chai.request(app)
  //     .post('/api/v1/auth/signin')
  //     .send({
  //       email: users.randomUserLogin.email,
  //       password: users.randomUserLogin.password,
  //     });
  //   console.log(res.body);

  //   res.should.have.status(401);
  //   res.body.should.have.property('error', 'Unauthorized');
  // });
});
