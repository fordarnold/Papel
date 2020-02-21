/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import dbconn from '../helpers/dbconnect';
import query from '../helpers/dbq-users';
import Auth from '../helpers/auth';

class User {
  async createTable() {
    const tableCreated = await dbconn(query.createUsersTable);
    return tableCreated;
  }

  async getCollection() {
    const users = await dbconn(query.getUsers);
    return users;
  }

  async create({
    email, firstName, lastName, password, type, isAdmin,
  }) {
    // Encrypt user password
    const hashedPwd = await Auth.hashPassword(password);
    // Create new user in database storage
    const createdUser = await dbconn(query.createUserRecord, [email, firstName, lastName, hashedPwd, type, isAdmin]);
    // If user was created successfully
    if (createdUser) return createdUser.rows[0];
    // If user was not created
    return undefined;
  }

  async checkEmailExists(email) {
    const records = await dbconn(query.findUserByEmail, [email]);
    // if user exists
    if (records.rows[0] !== undefined) return true;
    // if user does not exist
    return false;
  }

  async findByEmail(email) {
    const records = await dbconn(query.findUserByEmail, [email]);
    return records.rows[0];
  }
}

export default new User();
