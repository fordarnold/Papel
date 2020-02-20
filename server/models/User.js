/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import dbconn from '../helpers/dbconnect';
import query, { findUserByEmail } from '../helpers/dbqueries';

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
    const userCreated = await dbconn(query.createUserRecord, [email, firstName, lastName, password, type, isAdmin]);

    if (userCreated) return userCreated.rows[0];
    return undefined;
  }

  async checkEmailExists(email) {
    const records = await dbconn(findUserByEmail, [email]);
    console.log(records.rows[0] !== undefined);
    // if user exists
    if (records.rows[0] !== undefined) return true;
    // if user does not exist
    return false;
  }

  async findByEmail(email) {
    const { records } = await dbconn(findUserByEmail, [email]);
    console.log(records);
    return records[0];
  }
}

export default new User();
