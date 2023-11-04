const express = require('express');
const router = express.Router();
const taskService = require('../services/taskService');

// router.get('/', (req, res) => {
//   const tasks = TaskService.getAllTasks();
//   res.render('index', { tasks });
// });

// Display the list of tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.render('tasks/index', { tasks });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred.' });
  }
});

// Create a new task (GET and POST routes)
router.get('/tasks/create', (req, res) => {
  res.render('tasks/create');
});

router.post('/tasks/create', async (req, res) => {
  const { name, description } = req.body;
  try {
    await taskService.createTask(name, description);
    res.redirect('/');
  } catch (error) {
    res.status(500).json({ error: 'An error occurred.' });
  }
});

// Edit and update a task (GET and POST routes)
// Render the edit form
router.get('/tasks/edit/:id', async (req, res) => {
  const taskId = req.params.id;
  // Fetch the task details based on the taskId from the database
  try {
    const task = await taskService.getTaskById(taskId);
    res.render('tasks/edit', { task });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred.' });
  }
});

// Update a task
router.put('/tasks/edit/:id', async (req, res) => {
  const taskId = req.params.id;
  const { name, description } = req.body;
  try {
    await taskService.editTask(taskId, name, description);
    // res.redirect('//');
    res.send(`
    <script>
        // Use JavaScript to navigate to the root URL
        window.location.href = '/';
    </script>
    `);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred.' });
  }
});


// Delete a task (POST route)
router.delete('/tasks/delete/:id', async (req, res) => {
  const taskId = req.params.id;
  try {
    await taskService.deleteTask(taskId);
    // res.redirect('/');
    res.send(`
    <script>
        // Use JavaScript to navigate to the root URL
        window.location.href = '/';
    </script>
    `);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred.' });
  }
});

// Other route handlers (e.g., POST for creating tasks, PUT for updating tasks, DELETE for deleting tasks)

module.exports = router;
