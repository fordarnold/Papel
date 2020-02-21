import 'dotenv/config'; // Initialise dotenv library
import 'regenerator-runtime/runtime'; // Enable async, await functionality globally
import express from 'express'; // Express web framework
import cors from 'cors'; // Cross Origin Resource Sharing library

import router from './routes/Router';

import User from './models/User';
import Account from './models/Account';
import Transaction from './models/Transaction';

const app = express(); // Initialise the Express app server
const PORT = process.env.PORT || 3000; // Specify the server port

/**
 * API MIDDLEWARE
 * -------------------------------------------------------------------
 */

app.use(cors());

// Handle HTTP POST requests with 'req.body' in Express framework ~https://stackoverflow.com/a/43626891/2661028
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * COMMON API ROUTES & END-POINTS
 * -------------------------------------------------------------------
 */

// only requests to /api/v1/* will be sent to our "router"
app.use('/api/v1', router);

// Default (landing) route
app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Papel API Server welcomes you!',
  });
});

// Undefined routes show 404 error
app.use((req, res) => {
  res.status(404);
  res.json({
    status: 404,
    error: 'Endpoint not found',
  });
});

/**
 * START SERVER
 * -------------------------------------------------------------------
 */

/** Start the server, on specified port */
const server = app.listen(PORT, async () => {
  console.log(`Papel API server listening at: http://localhost:${PORT}!`);

  // Create required database tables.
  await User.createTable();
  await Account.createTable();
  await Transaction.createTable();
});

export default server;
