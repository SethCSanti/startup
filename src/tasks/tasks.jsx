import React, { useState } from "react";
import "../app.css";

export function Tasks() {
  // CLICK LIMITS (original weight defines total effort)
  const limits = {
    light: 1,
    medium: 3,
    heavy: 5,
  };

  // STATE
  const [tasks, setTasks] = useState([
    { id: 1, title: "Homework", category: "School", weight: "heavy", clicks: 0 },
    { id: 2, title: "Workout", category: "Health", weight: "medium", clicks: 0 },
    { id: 3, title: "Read 10 pages", category: "Personal", weight: "light", clicks: 0 },
    { id: 4, title: "Finish project report", category: "Work", weight: "heavy", clicks: 0 },
    { id: 5, title: "Meditate", category: "Health", weight: "light", clicks: 0 },
    { id: 6, title: "Study for exam", category: "School", weight: "heavy", clicks: 0 },
    { id: 7, title: "Clean room", category: "Personal", weight: "medium", clicks: 0 },
    { id: 8, title: "Team meeting", category: "Work", weight: "medium", clicks: 0 },
    { id: 9, title: "Journal entry", category: "Personal", weight: "light", clicks: 0 },
    { id: 10, title: "Stretching", category: "Health", weight: "light", clicks: 0 },
  ]);

  const [filter, setFilter] = useState("All");
  const [animatingId, setAnimatingId] = useState(null);
const [removingIds, setRemovingIds] = useState([]);

  // HANDLE CLICK
  const getDynamicWeight = (task) => {
    const total = limits[task.weight];
    const remaining = total - task.clicks;

    if (remaining >= 4) return "heavy";
    if (remaining >= 2) return "medium";
    if (remaining === 1) return "light";
    return null;
  };

  const handleTaskClick = (clickedId) => {
  // click pop animation
  setAnimatingId(clickedId);
  setTimeout(() => setAnimatingId(null), 150);

  setTasks((prevTasks) => {
    return prevTasks.map((task) => {
      if (task.id !== clickedId) return task;

      const newClicks = task.clicks + 1;
      const total = limits[task.weight];

      // trigger fade-out before removal
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
    });
  });
};

  // FILTER
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

                  {/* Remaining clicks */}
                  <div style={{ fontSize: "0.75rem", opacity: 0.7 }}>
                    {remaining} left
                  </div>
                </div>

                <div className="task-tag">{task.category}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}