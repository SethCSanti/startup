const express = require('express');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const path = require('path');
const db = require('./database.js');
const { WebSocketServer } = require('ws');

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Serve frontend files
app.use(express.static('public'));

async function getUserIdFromRequest(req) {
  const token = req.cookies.authToken;
  if (!token) return null;

  const session = await db.getSession(token);
  return session ? session.userId : null;
}


// Test endpoint
app.get('/api/test', (req, res) => {
  res.send({ msg: "Backend working" });
});

// Create account
app.post('/api/auth/create', async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({ msg: "Missing email or password" });
    }

    // Check if user exists
    if (await db.getUser(req.body.email)) {
      return res.status(409).send({ msg: "User already exists" });
    }

    const passwordHash = await bcrypt.hash(req.body.password, 10);

    const user = {
      id: uuidv4(),
      email: req.body.email,
      password: passwordHash
    };

    await db.addUser(user);

    res.send({ id: user.id });

  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Server error" });
  }
});

// Login
app.post('/api/auth/login', async (req, res) => {
  const user = await db.getUser(req.body.email);

  if (user && await bcrypt.compare(req.body.password, user.password)) {
    const token = uuidv4();
    await db.addSession(token, user.id);

    res.cookie('authToken', token, { httpOnly: true });
    res.send({ id: user.id });
  } else {
    res.status(401).send({ msg: "Unauthorized" });
  }
});

// Logout
app.post('/api/auth/logout', async (req, res) => {
  const token = req.cookies.authToken;
  if (token) {
    await db.deleteSession(token);
  }
  res.clearCookie('authToken');
  res.send({});
});

// Restricted
app.get('/api/restricted', async (req, res) => {
  const token = req.cookies.authToken;

  const session = await db.getSession(token);

  if (!session) {
    return res.status(401).send({ msg: "Unauthorized" });
  }

  res.send({ msg: "You are authorized" });
});

// Check if user session exists
app.get('/api/auth/me', async (req, res) => {
  const token = req.cookies.authToken;

  if (!token) {
    return res.send({ user: null });
  }

  const session = await db.getSession(token);
  if (!session) return res.send({ user: null });

  const userId = session.userId;
  const user = await db.getUserById(userId);

  if (!user) {
    return res.send({ user: null });
  }

  res.send({ user: user.email });
});

// Tasks
app.get('/api/tasks', async (req, res) => {
  const userId = await getUserIdFromRequest(req);

  if (!userId) {
    return res.status(401).send({ msg: "Unauthorized" });
  }

  let tasks = await db.getTasks(userId);

  if (tasks.length === 0) {
    const defaultTask = {
      id: uuidv4(),
      userId: userId,
      title: "Set up your own tasks!",
      category: "Personal",
      weight: "heavy",
      dueDate: "2026-12-31",
      clicks: 0
    };

    await db.addTask(defaultTask);
    tasks = [defaultTask];
  }

  res.send(tasks);
});

app.post('/api/tasks', async (req, res) => {
  const userId = await getUserIdFromRequest(req);

  if (!userId) {
    return res.status(401).send({ msg: "Unauthorized" });
  }

  const task = {
    id: uuidv4(),
    userId: userId,
    title: req.body.title,
    dueDate: req.body.dueDate,
    weight: req.body.weight,
    category: req.body.category,
    clicks: 0
  };

  await db.addTask(task);
  res.send(task);
});

app.delete('/api/tasks/:id', async (req, res) => {
  const userId = await getUserIdFromRequest(req);

  await db.deleteTask(req.params.id, userId);
  res.send({});
});


// Notes
app.get('/api/notes', async (req, res) => {
  const userId = await getUserIdFromRequest(req);

  if (!userId) {
    return res.status(401).send({ msg: "Unauthorized" });
  }

  let notes = await db.getNotes(userId);

  if (notes.length === 0) {
    const defaultNote = {
      id: uuidv4(),
      userId: userId,
      title: "Welcome to Notes",
      category: "Personal",
      taskId: "",
      text: `Use this notebook to track ideas, reflections, or planning.

Tips:
• Click "+ Add Note" to create a new note
• Use categories to organize your notes
• You can link notes to tasks from the Tasks page

Start by creating your first note!`
    };

    await db.addNote(defaultNote);
    notes = [defaultNote];
  }

  res.send(notes);
});

app.post('/api/notes', async (req, res) => {
  const userId = await getUserIdFromRequest(req);

  if (!userId) {
    return res.status(401).send({ msg: "Unauthorized" });
  }

  const note = {
    id: uuidv4(),
    userId: userId,
    title: req.body.title,
    text: req.body.text,
    category: req.body.category,
    taskId: req.body.taskId
  };

  await db.addNote(note);
  res.send(note);
});

app.delete('/api/notes/:id', async (req, res) => {
  const userId = await getUserIdFromRequest(req);

  await db.deleteNote(req.params.id, userId);
  res.send({});
});

// React router fallback (MUST BE LAST)
app.use((req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// WebSocket server
const wss = new WebSocketServer({ server });

// Store connected clients
const clients = new Set();

wss.on('connection', (ws) => {
  console.log('WebSocket connected');
  clients.add(ws);

  ws.on('close', () => {
    clients.delete(ws);
  });
});