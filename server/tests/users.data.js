const sampleUser = {
  email: 'test@test.com',
  firstName: 'Test',
  lastName: 'User',
  password: 'test', // TODO: encrypt password
  type: 'client',
  isAdmin: false,
};

const newUser = {
  email: 'example@test.com',
  firstName: 'Example',
  lastName: 'User',
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
  sampleUser,
  newUser,
  sampleStaff,
  sampleAdmin,
};
