const express = require('express');
const cookieParser = require('cookie-parser');
const uuid = require('uuid');
const cors = require('cors');

const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(express.static('public'));

let tasks = [];

app.get('/api/test', (req, res) => {
  res.send({ msg: "Backend working" });
});

// Get all tasks
app.get('/api/tasks', (req, res) => {
  res.send(tasks);
});

// Create a task
app.post('/api/tasks', (req, res) => {
  const task = {
    id: uuid.v4(),
    title: req.body.title,
    dueDate: req.body.dueDate,
    weight: req.body.weight,
  };

  tasks.push(task);
  res.send(task);
});

// Delete task
app.delete('/api/tasks/:id', (req, res) => {
  tasks = tasks.filter((t) => t.id !== req.params.id);
  res.send({});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});