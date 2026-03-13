import React, { useState, useEffect } from "react";
import "../app.css";

export function Tasks() {

  const limits = {
    light: 1,
    medium: 3,
    heavy: 5,
  };

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [animatingId, setAnimatingId] = useState(null);
  const [removingIds, setRemovingIds] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // LOAD TASKS FROM BACKEND
  useEffect(() => {
    async function loadTasks() {
      const response = await fetch("/api/tasks");
      const data = await response.json();
      setTasks(data);
    }

    loadTasks();
  }, []);

  // DETERMINE CURRENT SIZE BASED ON CLICKS
  const getDynamicWeight = (task) => {
    const total = limits[task.weight];
    const remaining = total - (task.clicks || 0);

    if (remaining >= 4) return "heavy";
    if (remaining >= 2) return "medium";
    if (remaining === 1) return "light";
    return null;
  };

  // DELETE TASK (calls backend)
  async function deleteTask(id) {
    await fetch(`/api/tasks/${id}`, {
      method: "DELETE"
    });

    setTasks(tasks.filter(t => t.id !== id));
  }

  // HANDLE TASK CLICK
  const handleTaskClick = (clickedId) => {

    setAnimatingId(clickedId);
    setTimeout(() => setAnimatingId(null), 150);

    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id !== clickedId) return task;

        const newClicks = (task.clicks || 0) + 1;
        const total = limits[task.weight];

        if (newClicks >= total) {

          setRemovingIds((prev) => [...prev, task.id]);

          setTimeout(() => {
            deleteTask(task.id);

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
              const remaining = total - (task.clicks || 0);

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
                onSubmit={async (e) => {
                  e.preventDefault();

                  const formData = new FormData(e.target);

                  const newTask = {
                    title: formData.get("title"),
                    category: formData.get("category"),
                    weight: formData.get("weight"),
                    dueDate: formData.get("dueDate"),
                    clicks: 0,
                  };

                  const response = await fetch("/api/tasks", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newTask)
                  });

                  const savedTask = await response.json();

                  setTasks([...tasks, savedTask]);
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
}