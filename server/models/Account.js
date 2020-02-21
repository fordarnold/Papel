/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import dbconn from '../helpers/dbconnect';
import query from '../helpers/dbq-accounts';

class Account {
  async createTable() {
    const createdTable = await dbconn(query.createAccountsTable);
    return createdTable;
  }

  async getCollection() {
    const accounts = await dbconn(query.getAccounts);
    return accounts;
  }

  async create({
    accountNumber, createdOn, owner, type, status, balance,
  }) {
    // Create new user in database storage
    const createdAccount = await dbconn(query.createAccountRecord, [accountNumber, createdOn, owner, type, status, balance]);
    // If user was created successfully
    if (createdAccount) return createdAccount.rows[0];
    // If user was not created
    return undefined;
  }

  async checkAccNoExists(accountNumber) {
    const records = await dbconn(query.findAccountByAccNumber, [accountNumber]);
    // if user exists
    if (records.rows[0] !== undefined) return true;
    // if user does not exist
    return false;
  }

  async findByAccNo(accountNumber) {
    const records = await dbconn(query.findByAccNumber, [accountNumber]);
    return records.rows[0];
  }

  async remove(accountNumber) {
    const result = await dbconn(query.deleteAccountNo, [accountNumber]);
    return result;
  }
}

export default new Account();
