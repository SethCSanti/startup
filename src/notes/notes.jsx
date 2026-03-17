import React, { useEffect, useState } from "react";
import "../app.css";

export function Notes() {

  const [notes, setNotes] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [filter, setFilter] = useState("All");
  const [activeNoteId, setActiveNoteId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Load notes from backend
 useEffect(() => {
  async function loadNotes() {
    const response = await fetch("/api/notes");
    const data = await response.json();

    if (data.length === 0) {
      setNotes([
        {
          id: "welcome",
          title: "Welcome to Notes",
          category: "Personal",
          taskId: "",
          text: `Use this notebook to track ideas, reflections, or planning.

Tips:
• Click "+ Add Note" to create a new note
• Use categories to organize your notes
• You can link notes to tasks from the Tasks page

Start by creating your first note!`
        }
      ]);
    } else {
      setNotes(data);
    }
  }

  loadNotes();
}, []);

  // Load tasks from backend (for linking)
  useEffect(() => {
    async function loadTasks() {
      const response = await fetch("/api/tasks");
      const data = await response.json();
      setTasks(data);
    }

    loadTasks();
  }, []);

  const filteredNotes =
    filter === "All"
      ? notes
      : notes.filter((note) => note.category === filter);

  const activeNote =
    filteredNotes.find((note) => note.id === activeNoteId) ||
    filteredNotes[0] ||
    null;

  async function deleteNote(id) {
    await fetch(`/api/notes/${id}`, {
      method: "DELETE"
    });

    setNotes(notes.filter((note) => note.id !== id));

    if (activeNoteId === id) {
      setActiveNoteId(null);
    }
  }

  return (
    <main className="notes-page">
      <div className="notes-container">

        {/* Utility Bar */}
        <div className="notes-utility-bar">
          <div className="filters">
            {["All", "School", "Work", "Health", "Personal"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setActiveNoteId(null);
                }}
                className={filter === cat ? "active" : ""}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            className="button"
            onClick={() => setShowModal(true)}
          >
            + Add Note
          </button>
        </div>

        {/* Notebook */}
        <div className="notebook">

          {/* Tabs */}
          <div className="notebook-tabs">
            {filteredNotes.map((note) => (
              <div
                key={note.id}
                className={`notebook-tab ${
                  activeNote?.id === note.id ? "active-tab" : ""
                }`}
                onClick={() => setActiveNoteId(note.id)}
              >
                {note.title}
              </div>
            ))}
          </div>

          {/* Active Page */}
          <div className="notebook-page">
            {activeNote ? (
              <>
                <div className="note-header">
                  <div>
                    <h3>{activeNote.title}</h3>
                    <span className="note-category">
                      {activeNote.category}
                    </span>
                  </div>

                  <button
                    className="delete-note"
                    onClick={() => deleteNote(activeNote.id)}
                  >
                    Delete
                  </button>
                </div>

                {activeNote.taskId && (
                  <div className="linked-task">
                    Linked to:{" "}
                    {
                      tasks.find(
                        (task) =>
                          String(task.id) === String(activeNote.taskId)
                      )?.title
                    }
                  </div>
                )}

                <p className="note-text">{activeNote.text}</p>
              </>
            ) : (
              <p>No notes available.</p>
            )}
          </div>

        </div>

        {/* Add Note Modal */}
        {showModal && (
          <div
            className="calendar-modal-overlay"
            onClick={() => setShowModal(false)}
          >
            <div
              className="calendar-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <h3>Add New Note</h3>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  const formData = new FormData(e.target);

                  const newNote = {
                    title: formData.get("title"),
                    text: formData.get("text"),
                    category: formData.get("category"),
                    taskId: formData.get("taskId"),
                  };

                  const response = await fetch("/api/notes", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newNote)
                  });

                  const createdNote = await response.json();

                  setNotes([...notes, createdNote]);
                  setActiveNoteId(createdNote.id);
                  setShowModal(false);
                }}
              >

                <input
                  name="title"
                  placeholder="Note title"
                  className="form-control mb-3"
                  required
                />

                <select name="category" className="form-control mb-3">
                  <option>School</option>
                  <option>Work</option>
                  <option>Health</option>
                  <option>Personal</option>
                </select>

                <select name="taskId" className="form-control mb-3">
                  <option value="">No linked task</option>
                  {tasks.map((task) => (
                    <option key={task.id} value={task.id}>
                      {task.title}
                    </option>
                  ))}
                </select>

                <textarea
                  name="text"
                  rows="5"
                  className="form-control mb-4"
                  placeholder="Write your note..."
                  required
                />

                <button className="btn btn-success w-100">
                  Save Note
                </button>

              </form>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}