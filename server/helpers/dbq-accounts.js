const getAccounts = 'SELECT * FROM accounts';

const createAccountsTable = `CREATE TABLE IF NOT EXISTS accounts(
    id SERIAL PRIMARY KEY NOT NULL,
    account_number INT NOT NULL,
    created_on TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    owner INT NOT NULL,
    type VARCHAR(10) NOT NULL,
    status VARCHAR(10) NOT NULL,
    balance FLOAT(2) NOT NULL)`;

const createAccountRecord = `INSERT INTO accounts (account_number, created_on, owner, type, status, balance) 
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;

const dropAccountsTable = 'DROP TABLE IF EXISTS accounts CASCADE';

const deleteAccount = 'DELETE FROM accounts WHERE id = $1';
const deleteAccountNo = 'DELETE FROM accounts WHERE account_number = $1';

const findAccountById = 'SELECT * FROM accounts WHERE id = $1';

const findByAccNumber = 'SELECT * FROM accounts WHERE account_number = $1';

const updateAccountStatus = 'UPDATE accounts SET status = $1 WHERE id = $2';
const updateAccountNoStatus = 'UPDATE accounts SET status = $1 WHERE account_number = $2';

export default {
  getAccounts,
  createAccountsTable,
  createAccountRecord,
  dropAccountsTable,
  deleteAccount,
  deleteAccountNo,
  findAccountById,
  findByAccNumber,
  updateAccountStatus,
  updateAccountNoStatus,
};
