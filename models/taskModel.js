const { Pool } = require('pg');
const config = require('../config/config'); // Assuming you've configured your database connection in this file
const pool = new Pool(config.database);

class Task {
    constructor(id, title, completed) {
      this.id = id;
      this.title = title;
      this.completed = completed;
    }
}

async function createTaskTable() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS tasks (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT
    )`;

  try {
    await pool.query(createTableQuery);
    console.log('Tasks table created successfully.');
  } catch (error) {
    console.error('Error creating tasks table:', error);
  }
}

// Initialize the tasks table
createTaskTable();
  
module.exports = {
  Task,
  createTaskTable,
};
  