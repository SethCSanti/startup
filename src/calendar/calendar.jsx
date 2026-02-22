import React, { useEffect, useState } from "react";
import "../app.css";

const TASKS_KEY = "loadmap_tasks";

export function Calendar() {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(TASKS_KEY);
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const formatDate = (day) => {
    const monthString = String(month + 1).padStart(2, "0");
    const dayString = String(day).padStart(2, "0");
    return `${year}-${monthString}-${dayString}`;
  };

  const getTasksForDay = (dateString) =>
    tasks.filter((task) => task.dueDate === dateString);

  const getDayWeightClass = (dateString) => {
    const dayTasks = getTasksForDay(dateString);
    if (dayTasks.length === 0) return "";

    if (dayTasks.length >= 4) return "high";
    if (dayTasks.length >= 2) return "medium";
    return "low";
  };

  const calendarCells = [];

  // empty leading cells
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarCells.push(
      <div key={`empty-${i}`} className="day empty"></div>
    );
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateString = formatDate(day);
    const weightClass = getDayWeightClass(dateString);

    calendarCells.push(
      <div
        key={day}
        className={`day ${weightClass}`}
        onClick={() => setSelectedDate(dateString)}
      >
        <div className="day-number">{day}</div>
      </div>
    );
  }

  return (
    <main className="calendar-page">
      {/* Utility Bar */}
      <button className="btn btn-outline-dark btn-sm">
        Connect Google Calendar (API Placeholder, coming soon)
      </button>
      <div className="calendar-utility-bar">
        <h2 className="calendar-title">
          {today.toLocaleString("default", { month: "long" })} {year}
        </h2>

        <div className="legend">
          <span><span className="legend-box low"></span> Light</span>
          <span><span className="legend-box medium"></span> Medium</span>
          <span><span className="legend-box high"></span> Heavy</span>
        </div>
      </div>

      

      {/* Weekday Header */}
      <div className="calendar-wrapper">
      {/* Weekday Header */}
      <div className="weekday-row">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="weekday">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        {calendarCells}
      </div>
    </div>

      {/* Fullscreen Modal */}
      {selectedDate && (
        <div
          className="calendar-modal-overlay"
          onClick={() => setSelectedDate(null)}
        >
          <div
            className="calendar-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Tasks for {selectedDate}</h3>

            {getTasksForDay(selectedDate).length === 0 ? (
              <p>No tasks due.</p>
            ) : (
              <ul className="calendar-task-list">
                {getTasksForDay(selectedDate).map((task) => (
                  <li key={task.id}>
                    {task.title} ({task.category})
                  </li>
                ))}
              </ul>
            )}

            <button
              className="btn btn-secondary mt-3"
              onClick={() => setSelectedDate(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}