const express = require('express');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const path = require('path');

const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

const { MongoClient } = require('mongodb');
const config = require('../dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

// Connect to the database cluster
const client = new MongoClient(url);
const db = client.db('rental');
const collection = db.collection('house');

async function main() {
  try {
    // Test that you can connect to the database
    await db.command({ ping: 1 });
    console.log(`DB connected to ${config.hostname}`);
  } catch (ex) {
    console.log(`Connection failed to ${url} because ${ex.message}`);
    process.exit(1);
  }
}

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Serve frontend files
app.use(express.static('public'));

let tasks = [
  {
    id: uuidv4(),
    title: "Set up your own tasks!",
    category: "Personal",
    weight: "heavy",
    dueDate: "2026-12-31",
    clicks: 0
  }
];
let users = [];
let sessions = {};

// Test endpoint
app.get('/api/test', (req, res) => {
  res.send({ msg: "Backend working" });
});

// Create account
app.post('/api/auth/create', async (req, res) => {
  try {
    console.log("REGISTER BODY:", req.body);

    if (!req.body || !req.body.email || !req.body.password) {
      return res.status(400).send({ msg: "Missing email or password" });
    }

    if (users.find(u => u.email === req.body.email)) {
      return res.status(409).send({ msg: "User already exists" });
    }

    const passwordHash = await bcrypt.hash(req.body.password, 10);

    const user = {
      id: uuidv4(),
      email: req.body.email,
      password: passwordHash
    };

    users.push(user);

    res.send({ id: user.id });

  } catch (error) {
    console.error("REGISTER ERROR:", error);
    res.status(500).send({ msg: "Server error" });
  }
});

// Login
app.post('/api/auth/login', async (req, res) => {
  console.log("LOGIN BODY:", req.body);
  const user = users.find(u => u.email === req.body.email);

  if (user && await bcrypt.compare(req.body.password, user.password)) {
    const token = uuidv4();
    sessions[token] = user.id;

    res.cookie('authToken', token, { httpOnly: true });
    res.send({ id: user.id });
  } else {
    res.status(401).send({ msg: "Unauthorized" });
  }
});

// Logout
app.post('/api/auth/logout', (req, res) => {
  const token = req.cookies.authToken;
  delete sessions[token];
  res.clearCookie('authToken');
  res.send({});
});

// Restricted
app.get('/api/restricted', (req, res) => {
  const token = req.cookies.authToken;

  if (!token || !sessions[token]) {
    return res.status(401).send({ msg: "Unauthorized" });
  }

  res.send({ msg: "You are authorized" });
});

// Tasks
app.get('/api/tasks', (req, res) => {
  res.send(tasks);
});

app.post('/api/tasks', (req, res) => {
  const task = {
    id: uuidv4(),
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

// React router fallback (MUST BE LAST)
app.use((req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});