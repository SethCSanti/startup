const { MongoClient } = require('mongodb');
const config = require('../dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('loadmap');

const taskCollection = db.collection('tasks');
const noteCollection = db.collection('notes');
const userCollection = db.collection('users');

// Test connection
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`DB connected`);
  } catch (ex) {
    console.log(`DB connection failed: ${ex.message}`);
    process.exit(1);
  }
})();

// Task functions
function getTasks(userId) {
  return taskCollection.find({ userId }).toArray();
}

function addTask(task) {
  return taskCollection.insertOne(task);
}

function deleteTask(id, userId) {
  return taskCollection.deleteOne({ id: id, userId: userId });
}

// Note functions
function getNotes(userId) {
  return noteCollection.find({ userId }).toArray();
}

function addNote(note) {
  return noteCollection.insertOne(note);
}

function deleteNote(id, userId) {
  return noteCollection.deleteOne({ id: id, userId: userId });
}

// User functions
function getUser(email) {
  return userCollection.findOne({ email: email });
}

function addUser(user) {
  return userCollection.insertOne(user);
}

function getUserById(id) {
  return userCollection.findOne({ id: id });
}

module.exports = {
  getTasks,
  addTask,
  deleteTask,
  getNotes,
  addNote,
  deleteNote,
  getUser,
  getUserById,
  addUser
};