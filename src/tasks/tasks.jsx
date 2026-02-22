import React, { useState, useEffect } from "react";
import "../app.css";

const TASKS_KEY = "loadmap_tasks";

export function Tasks() {
  // CLICK LIMITS (defines total effort)
  const limits = {
    light: 1,
    medium: 3,
    heavy: 5,
  };

  // LOAD FROM LOCAL STORAGE
  const [tasks, setTasks] = useState(() => {
  const stored = localStorage.getItem(TASKS_KEY);

  // If stored has real data → use it
  if (stored && JSON.parse(stored).length > 0) {
    return JSON.parse(stored);
  }

  // Otherwise force mock data
  const mock = [
    { id: 1, title: "Algorithms Homework", category: "School", weight: "heavy", dueDate: "2026-02-05", clicks: 0 },
    { id: 2, title: "Project Report", category: "School", weight: "medium", dueDate: "2026-02-05", clicks: 0 },
    { id: 3, title: "Research Paper Draft", category: "School", weight: "light", dueDate: "2026-02-05", clicks: 0 },

    { id: 4, title: "Team Standup Prep", category: "Work", weight: "medium", dueDate: "2026-02-10", clicks: 0 },
    { id: 5, title: "Client Presentation", category: "Work", weight: "heavy", dueDate: "2026-02-10", clicks: 0 },

    { id: 6, title: "Workout Session", category: "Health", weight: "light", dueDate: "2026-02-15", clicks: 0 },
    { id: 7, title: "Meal Prep", category: "Health", weight: "medium", dueDate: "2026-02-15", clicks: 0 },

    { id: 8, title: "Budget Review", category: "Personal", weight: "medium", dueDate: "2026-02-20", clicks: 0 },
    { id: 9, title: "House Cleaning", category: "Personal", weight: "light", dueDate: "2026-02-20", clicks: 0 },

    { id: 10, title: "Final Exam Study", category: "School", weight: "heavy", dueDate: "2026-02-25", clicks: 0 },
  ];

  return mock;
});

  const [filter, setFilter] = useState("All");
  const [animatingId, setAnimatingId] = useState(null);
  const [removingIds, setRemovingIds] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // DETERMINE CURRENT SIZE BASED ON CLICKS
  const getDynamicWeight = (task) => {
    const total = limits[task.weight];
    const remaining = total - task.clicks;

    if (remaining >= 4) return "heavy";
    if (remaining >= 2) return "medium";
    if (remaining === 1) return "light";
    return null;
  };

  // HANDLE TASK CLICK
  const handleTaskClick = (clickedId) => {
    // click pop animation
    setAnimatingId(clickedId);
    setTimeout(() => setAnimatingId(null), 150);

    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id !== clickedId) return task;

        const newClicks = task.clicks + 1;
        const total = limits[task.weight];

        // fade-out before removal
        if (newClicks >= total) {
          setRemovingIds((prev) => [...prev, task.id]);

          setTimeout(() => {
            setTasks((current) =>
              current.filter((t) => t.id !== task.id)
            );
            setRemovingIds((prev) =>
              prev.filter((id) => id !== task.id)
            );
          }, 250);

          return task;
        }

        return { ...task, clicks: newClicks };
      })
    );
  };

  // FILTER LOGIC
  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter((task) => task.category === filter);

  return (
  <section className="tasks-page">
    <div className="tasks-container">

      {/* FILTER BUTTONS */}
      <div className="filters">
        {["All", "School", "Work", "Health", "Personal"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={filter === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ADD TASK BUTTON */}
      <div className="add-task-container">
        <button className="button" onClick={() => setShowModal(true)}>
          + Add Task
        </button>
      </div>

      {/* TASK GRID */}
      <div className="task-board-container">
        <div className="task-board">
          {filteredTasks.map((task) => {
            const dynamicWeight = getDynamicWeight(task);
            const total = limits[task.weight];
            const remaining = total - task.clicks;

            return (
              <div
                key={task.id}
                className={`task-tile ${dynamicWeight}
                  ${animatingId === task.id ? "click-pop" : ""}
                  ${removingIds.includes(task.id) ? "fade-out" : ""}
                `}
                onClick={() => handleTaskClick(task.id)}
              >
                <div className="task-content">
                  <h3>{task.title}</h3>

                  <div style={{ fontSize: "0.75rem", opacity: 0.7 }}>
                    {remaining} left
                  </div>

                  {task.dueDate && (
                    <div style={{ fontSize: "0.7rem", opacity: 0.6 }}>
                      Due: {task.dueDate}
                    </div>
                  )}
                </div>

                <div className="task-tag">{task.category}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div
          className="calendar-modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="calendar-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Add New Task</h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);

                const newTask = {
                  id: Date.now(),
                  title: formData.get("title"),
                  category: formData.get("category"),
                  weight: formData.get("weight"),
                  dueDate: formData.get("dueDate"),
                  clicks: 0,
                };

                setTasks([...tasks, newTask]);
                setShowModal(false);
              }}
            >
              <input
                name="title"
                placeholder="Task name"
                className="form-control mb-3"
                required
              />

              <select name="category" className="form-control mb-3">
                <option>School</option>
                <option>Work</option>
                <option>Health</option>
                <option>Personal</option>
              </select>

              <select name="weight" className="form-control mb-3">
                <option value="light">Light</option>
                <option value="medium">Medium</option>
                <option value="heavy">Heavy</option>
              </select>

              <input
                type="date"
                name="dueDate"
                className="form-control mb-4"
                required
              />

              <button className="btn btn-success w-100">
                Save Task
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  </section>
);

      {/* ADD TASK BUTTON */}
      <div className="add-task-container">
        <button
          className="button"
          onClick={() => setShowModal(true)}
        >
          + Add Task
        </button>
      </div>

      {/* TASK GRID */}
      <div className="task-board-container">
        <div className="task-board">
          {filteredTasks.map((task) => {
            const dynamicWeight = getDynamicWeight(task);
            const total = limits[task.weight];
            const remaining = total - task.clicks;

            return (
              <div
                key={task.id}
                className={`task-tile ${dynamicWeight}
                  ${animatingId === task.id ? "click-pop" : ""}
                  ${removingIds.includes(task.id) ? "fade-out" : ""}
                `}
                onClick={() => handleTaskClick(task.id)}
              >
                <div className="task-content">
                  <h3>{task.title}</h3>

                  <div style={{ fontSize: "0.75rem", opacity: 0.7 }}>
                    {remaining} left
                  </div>

                  {task.dueDate && (
                    <div style={{ fontSize: "0.7rem", opacity: 0.6 }}>
                      Due: {task.dueDate}
                    </div>
                  )}
                </div>

                <div className="task-tag">{task.category}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ADD TASK MODAL */}
      {showModal && (
        <div
          className="calendar-modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="calendar-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Add New Task</h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                const formData = new FormData(e.target);

                const newTask = {
                  id: Date.now(),
                  title: formData.get("title"),
                  category: formData.get("category"),
                  weight: formData.get("weight"),
                  dueDate: formData.get("dueDate"),
                  clicks: 0,
                };

                setTasks([...tasks, newTask]);
                setShowModal(false);
              }}
            >
              <input
                name="title"
                placeholder="Task name"
                className="form-control mb-3"
                required
              />

              <select name="category" className="form-control mb-3">
                <option>School</option>
                <option>Work</option>
                <option>Health</option>
                <option>Personal</option>
              </select>

              <select name="weight" className="form-control mb-3">
                <option value="light">Light</option>
                <option value="medium">Medium</option>
                <option value="heavy">Heavy</option>
              </select>

              <input
                type="date"
                name="dueDate"
                className="form-control mb-4"
                required
              />

              <button className="btn btn-success w-100">
                Save Task
              </button>
            </form>
          </div>
        </div>
      )}
}