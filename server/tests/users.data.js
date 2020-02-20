/* eslint-disable import/no-extraneous-dependencies */
import faker from 'faker';

const existingUser = {
  email: 'test@test.com',
  firstName: 'Test',
  lastName: 'User',
  password: 'test', // TODO: encrypt password
  type: 'client',
  isAdmin: false,
};

const newUser = {
  email: faker.internet.email(),
  firstName: faker.name.firstName,
  lastName: faker.name.lastName,
  password: 'example', // TODO: encrypt password
  type: 'client',
  isAdmin: false,
};

const sampleStaff = {
  email: 'staff@staff.com',
  firstName: 'Staff',
  lastName: 'User',
  password: 'staff', // TODO: encrypt password
  type: 'staff',
  isAdmin: false,
};

const sampleAdmin = {
  email: 'admin@staff.com',
  firstName: 'Admin',
  lastName: 'User',
  password: 'admin', // TODO: encrypt password
  type: 'staff',
  isAdmin: true,
};

export default {
  existingUser,
  newUser,
  sampleStaff,
  sampleAdmin,
};
