/* eslint-disable import/no-extraneous-dependencies */
import faker from 'faker';
// import Auth from '../helpers/auth';

const randomUser = {
  email: 'wildcard@3000.test',
  firstName: 'Wildcard',
  lastName: 'Henry',
  password: 'wildcard3000',
  type: 'client',
  isAdmin: false,
};

const randomUserLogin = {
  email: 'wildcard@3000.test',
  password: 'wildcard3000',
};

const existingUser = {
  email: 'www@www.www',
  firstName: 'WWW',
  lastName: 'User',
  password: 'www',
  type: 'client',
  isAdmin: false,
};

const newUser = {
  email: faker.internet.email(),
  firstName: faker.name.firstName,
  lastName: faker.name.lastName,
  password: 'example',
  type: 'client',
  isAdmin: false,
};

const sampleStaff = {
  email: 'staff@staff.com',
  firstName: 'Staff',
  lastName: 'User',
  password: 'staff',
  type: 'staff',
  isAdmin: false,
};

const sampleAdmin = {
  email: 'admin@staff.com',
  firstName: 'Admin',
  lastName: 'User',
  password: 'admin',
  type: 'staff',
  isAdmin: true,
};

export default {
  randomUser,
  randomUserLogin,
  existingUser,
  newUser,
  sampleStaff,
  sampleAdmin,
};
