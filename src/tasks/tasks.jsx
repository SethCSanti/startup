import React from "react";
import { useState } from "react";
import '../app.css';

export function Tasks() {
  // STATE
  const [tasks, setTasks] = useState([
  { id: 1, title: "Homework", category: "School", weight: "heavy" },
  { id: 2, title: "Workout", category: "Health", weight: "medium" },
  { id: 3, title: "Read", category: "Personal", weight: "light" },
  { id: 4, title: "Project", category: "Work", weight: "heavy" },
  { id: 5, title: "Meditate", category: "Health", weight: "light" },
]);


  const [filter, setFilter] = useState("All");
  const [activeTaskId, setActiveTaskId] = useState(null);

  // DERIVED DATA (THIS MUST BE OUTSIDE JSX)
  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter((task) => task.category === filter);

  return (
    <section className="tasks">
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

      {/* TASK GRID */}
      <div className="task-board-container">
        <div className="task-board">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`task-tile ${task.weight} ${
              activeTaskId === task.id ? "active" : ""
            }`}
            onClick={() => setActiveTaskId(task.id)}
          >
            <div className="task-content">
              <h3>{task.title}</h3>
            </div>

            {/* CATEGORY TAB (bottom-left) */}
            <div className="task-tag">{task.category}</div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
