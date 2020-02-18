import 'dotenv/config';
import express from 'express'; // Express web framework

const app = express(); // Create the Express app server
const PORT = process.env.PORT || 3000; // Specify the server port

/**
 * COMMON API ROUTES & END-POINTS
 * -------------------------------------------------------------------
 */

// Default (landing) route
app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Papel API Server welcomes you!',
  });
});

/**
 * START SERVER
 * -------------------------------------------------------------------
 */

// start the server, on specified port
const server = app.listen(PORT, () => console.log(`Papel API server listening at: http://localhost:${PORT}!`));

export default server;
