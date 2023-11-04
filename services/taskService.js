// const TaskModel = require('../models/taskModel');
const { Task, createTaskTable } = require('../models/taskModel');
const { Pool } = require('pg');
const config = require('../config/config'); // Assuming you've configured your database connection in this file
const pool = new Pool(config.database);

createTaskTable();

const tasks = [
  new Task(1, 'Task 1', false),
  new Task(2, 'Task 2', true),
  // ... other tasks
];

class TaskService {
  static getAllTasks() {
    return tasks;
  }

  // Implement other service methods for CRUD operations
}

async function getAllTasks() {
  try {
    const query = 'SELECT * FROM tasks';
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function createTask(name, description) {
  const query = 'INSERT INTO tasks (name, description) VALUES ($1, $2)';
  try {
    await pool.query(query, [name, description]);
  } catch (error) {
    throw error;
  }
}

async function getTaskById(id) {
  const query = 'SELECT * FROM tasks WHERE id = $1';
  try {
    const { rows } = await pool.query(query, [id]);
    if (rows.length === 1) {
      return rows[0];
    }
    throw new Error('Task not found');
  } catch (error) {
    throw error;
  }
}

async function updateTask(id, name, description) {
  const query = 'UPDATE tasks SET name = $1, description = $2 WHERE id = $3';
  await pool.query(query, [name, description, id]);
}

async function deleteTask(id) {
  const query = 'DELETE FROM tasks WHERE id = $1';
  await pool.query(query, [id]);
}
async function editTask(id, name, description) {
  const query = 'UPDATE tasks SET name = $1, description = $2 WHERE id = $3';
  try {
    await pool.query(query, [name, description, id]);
  } catch (error) {
    throw error;
  }
}
// Implement other CRUD service functions (getAllTasks, getTaskById) as needed

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  // Other CRUD service functions
  TaskService,
  getAllTasks,
  getTaskById,
  editTask,
};

// module.exports = TaskService;
