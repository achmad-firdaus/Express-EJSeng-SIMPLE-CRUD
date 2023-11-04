const { Pool } = require('pg');
const config = require('./config/config'); // Assuming you've configured your database connection in this file

const pool = new Pool(config.database);

// Attempt to connect to the PostgreSQL database
pool.connect((err, client, done) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
    client.release(); // Release the client back to the pool

    // You can perform additional database operations here
    // For example, you can run a simple query to fetch some data

    pool.query('SELECT NOW()', (queryErr, result) => {
      if (queryErr) {
        console.error('Error executing query:', queryErr);
      } else {
        console.log('Query result:', result.rows[0]);
      }

      // Release the pool after completing your operations
      pool.end();
    });
  }
});
