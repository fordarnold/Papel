// import 'dotenv/config'; // Initialise dotenv library
import { Pool } from 'pg';

// // TODO: Setup database connections for different environments
// const isTesting = process.env.NODE_ENV === 'testing';
// const isProduction = process.env.NODE_ENV === 'production';

const connectionString = 'postgres://lkxehoeg:u9omEm3ta6thNpeppMuzjSo7Ufbir2sa@rajje.db.elephantsql.com:5432/lkxehoeg';

const connector = new Pool({ connectionString });

connector.on('connect', () => {
  console.info('\n-------------------------');
  console.info('Connected to the database');
  console.info('-------------------------\n');
});

export default async (queryText, params) => {
  try {
    return await connector.query(queryText, params);
  } catch (error) {
    return console.error(error);
  }
};
