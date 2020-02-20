const getUsers = 'SELECT * FROM users';

const createUsersTable = `CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(50) NOT NULL,
    first_name VARCHAR(50) NULL,
    last_name VARCHAR(50) NULL,
    password VARCHAR(70) NOT NULL,
    type VARCHAR(10) NOT NULL,
    is_admin BOOLEAN NOT NULL DEFAULT FALSE,
    created_on TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL)`;

const createUserRecord = `INSERT INTO users (email, first_name, last_name, password, type, is_admin) 
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;

const dropUsersTable = 'DROP TABLE IF EXISTS users CASCADE';

const findUserById = 'SELECT * FROM users WHERE id = $1';

const findUserByEmail = 'SELECT * FROM users WHERE email = $1';

const emailExist = 'SELECT exists(SELECT 1 FROM users WHERE email = $1)';

export default {
  getUsers,
  createUsersTable,
  dropUsersTable,
  createUserRecord,
  findUserById,
  findUserByEmail,
  emailExist,
};
