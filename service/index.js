const express = require('express');
const cookieParser = require('cookie-parser');
const uuid = require('uuid');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const path = require('path');

const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Serve frontend files
app.use(express.static('public'));

let tasks = [];
let users = [];

// Test endpoint
app.get('/api/test', (req, res) => {
  res.send({ msg: "Backend working" });
});

// Create account
app.post('/api/auth/create', async (req, res) => {
  const passwordHash = await bcrypt.hash(req.body.password, 10);

  const user = {
    id: uuid.v4(),
    email: req.body.email,
    password: passwordHash
  };

  users.push(user);
  res.send({ id: user.id });
});

// Login
app.post('/api/auth/login', async (req, res) => {
  const user = users.find(u => u.email === req.body.email);

  if (user && await bcrypt.compare(req.body.password, user.password)) {
    res.send({ id: user.id });
  } else {
    res.status(401).send({ msg: "Unauthorized" });
  }
});

// Logout
app.post('/api/auth/logout', (req, res) => {
  res.send({});
});

// Restricted example
app.get('/api/restricted', (req, res) => {
  res.send({ msg: "Restricted endpoint example" });
});

// Tasks
app.get('/api/tasks', (req, res) => {
  res.send(tasks);
});

app.post('/api/tasks', (req, res) => {
  const task = {
    id: uuid.v4(),
    title: req.body.title,
    dueDate: req.body.dueDate,
    weight: req.body.weight
  };

  tasks.push(task);
  res.send(task);
});

app.delete('/api/tasks/:id', (req, res) => {
  tasks = tasks.filter(t => t.id !== req.params.id);
  res.send({});
});

// React router fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});