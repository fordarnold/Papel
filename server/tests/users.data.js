/* eslint-disable import/no-extraneous-dependencies */
import faker from 'faker';
import Auth from '../helpers/auth';

const randomUser = {
  email: 'wildcard@3000.test',
  firstName: 'Wildcard',
  lastName: 'Henry',
  password: Auth.hashPassword('wildcard3000'),
  type: 'client',
  isAdmin: false,
};

const existingUser = {
  email: 'test@test.com',
  firstName: 'Test',
  lastName: 'User',
  password: Auth.hashPassword('test'),
  type: 'client',
  isAdmin: false,
};

const newUser = {
  email: faker.internet.email(),
  firstName: faker.name.firstName,
  lastName: faker.name.lastName,
  password: Auth.hashPassword('example'),
  type: 'client',
  isAdmin: false,
};

const sampleStaff = {
  email: 'staff@staff.com',
  firstName: 'Staff',
  lastName: 'User',
  password: Auth.hashPassword('staff'),
  type: 'staff',
  isAdmin: false,
};

const sampleAdmin = {
  email: 'admin@staff.com',
  firstName: 'Admin',
  lastName: 'User',
  password: Auth.hashPassword('admin'),
  type: 'staff',
  isAdmin: true,
};

export default {
  randomUser,
  existingUser,
  newUser,
  sampleStaff,
  sampleAdmin,
};
