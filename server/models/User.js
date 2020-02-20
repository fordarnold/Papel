/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import dbconn from '../helpers/dbconnect';
import query from '../helpers/dbqueries';

class User {
  createTable() {
    const tableCreated = dbconn(query.createUsersTable);
    return tableCreated;
  }

  create({
    email, firstName, lastName, password, type, isAdmin,
  }) {
    const userCreated = dbconn(query.createUserRecord, [email, firstName, lastName, password, type, isAdmin]);
    return userCreated;
  }

  checkEmailExists(email) {
    console.log(email);
    const { records } = dbconn(query.emailExist, [email]);
    return records[0];
  }

  findByEmail(email) {
    const { records } = dbconn(query.findUserByEmail, [email]);
    console.log(records);
    return records[0];
  }
}

export default new User();
