require('dotenv').config();

module.exports = {
    database: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
    },
  };
  
// console.log('DB_HOST:', process.env.DB_HOST);
// console.log('DB_NAME:', process.env.DB_NAME);
// console.log('DB_USER:', process.env.DB_USER);
// console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
// console.log('DB_PORT:', process.env.DB_PORT);

// host: 'localhost',
// database: 'expressejspro1',
// user: 'postgres',
// password: 'achmadpostgres',
// port: '5432',