import React, { useEffect, useState } from "react";
import "../app.css";

const NOTES_KEY = "loadmap_notes";
const TASKS_KEY = "loadmap_tasks";

export function Notes() {
  const [notes, setNotes] = useState(() => {
  const stored = localStorage.getItem(NOTES_KEY);
  if (stored) return JSON.parse(stored);

  return [
    {
      id: 1,
      title: "CS 313 Project Planning",
      category: "School",
      taskId: "",
      text: `Break project into milestones:
• UI wireframe
• Component architecture
• State management
• API integration

Focus on modular design and reusable components.
Remember to test localStorage edge cases.`,
    },
    {
      id: 2,
      title: "Exam Study Strategy",
      category: "School",
      taskId: "",
      text: `Prioritize:
1. Algorithms
2. Recursion
3. Time complexity

Create flashcards for big-O patterns.
Do 2 practice exams before Friday.`,
    },
    {
      id: 3,
      title: "Team Meeting Notes",
      category: "Work",
      taskId: "",
      text: `Agenda:
• Q2 deliverables
• Feature backlog cleanup
• Deployment timeline

Action Items:
– Refactor dashboard logic
– Improve error handling in tasks page`,
    },
    {
      id: 4,
      title: "Workout Plan",
      category: "Health",
      taskId: "",
      text: `Monday – Push
Wednesday – Pull
Friday – Legs

Add 10 min core work each session.
Increase squat weight next week.`,
    },
    {
      id: 5,
      title: "Daily Reflection",
      category: "Personal",
      taskId: "",
      text: `Wins:
• Finished calendar integration
• Improved modal consistency

Improve tomorrow:
• Add edit note feature
• Clean up CSS structure`,
    },
    {
      id: 6,
      title: "API Integration Ideas",
      category: "Work",
      taskId: "",
      text: `Google Calendar Sync Plan:
• OAuth flow
• Store refresh token
• Sync tasks as events
• Handle timezones properly

Potential stretch goal: Two-way sync.`,
    },
    {
      id: 7,
      title: "Essay Brainstorm",
      category: "School",
      taskId: "",
      text: `Thesis direction:
How digital productivity tools reshape student stress patterns.

Include:
• Data on workload visualization
• Cognitive load theory
• Calendar-based prioritization`,
    },
    {
      id: 8,
      title: "Meal Prep Plan",
      category: "Health",
      taskId: "",
      text: `Prep:
• Chicken & rice bowls
• Overnight oats
• Protein snacks

Track calories for consistency.`,
    },
  ];
});

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [activeNoteId, setActiveNoteId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Load tasks for linking
  useEffect(() => {
    const stored = localStorage.getItem(TASKS_KEY);
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  // Persist notes
  useEffect(() => {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  }, [notes]);

  const filteredNotes =
    filter === "All"
      ? notes
      : notes.filter((note) => note.category === filter);

  const activeNote =
    filteredNotes.find((note) => note.id === activeNoteId) ||
    filteredNotes[0] ||
    null;

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
                <h3>{activeNote.title}</h3>
                <span className="note-category">
                  {activeNote.category}
                </span>
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
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);

                const newNote = {
                  id: Date.now(),
                  title: formData.get("title"),
                  text: formData.get("text"),
                  category: formData.get("category"),
                  taskId: formData.get("taskId"),
                };

                setNotes([...notes, newNote]);
                setActiveNoteId(newNote.id);
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