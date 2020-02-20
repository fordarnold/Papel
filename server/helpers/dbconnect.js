// import 'dotenv/config'; // Initialise dotenv library
import { Pool } from 'pg';

// // TODO: Setup database connections for different environments
// const isTesting = process.env.NODE_ENV === 'testing';
// const isProduction = process.env.NODE_ENV === 'production';

const connector = new Pool('postgres://lkxehoeg:u9omEm3ta6thNpeppMuzjSo7Ufbir2sa@rajje.db.elephantsql.com:5432/lkxehoeg');

connector.on('connect', () => {
  console.log('Connected to the database');
});

export default async (queryText, params) => {
  try {
    await connector.query(queryText, params);
  } catch (error) {
    console.error(error);
  }
};
