import React, { useState } from 'react';

export function Calendar() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "School", "Work", "Personal"];

  return (
    <main className="calendar-page container-fluid">

      {/* Utility Bar */}
      <section className="calendar-utility-bar">

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

        {/* Legend */}
        <div className="calendar-legend-inline">
          <span><span className="legend-box low"></span> Low</span>
          <span><span className="legend-box medium"></span> Medium</span>
          <span><span className="legend-box high"></span> High</span>
        </div>

      </section>

      {/* Calendar Area */}
      <section className="calendar-main">

        <div className="calendar-header">
          <h3>March 2026</h3>
        </div>

        <div className="calendar-grid">
          {/* Weekday headers */}
          <div className="calendar-day-header">Sun</div>
          <div className="calendar-day-header">Mon</div>
          <div className="calendar-day-header">Tue</div>
          <div className="calendar-day-header">Wed</div>
          <div className="calendar-day-header">Thu</div>
          <div className="calendar-day-header">Fri</div>
          <div className="calendar-day-header">Sat</div>

          {/* Sample month days */}
          {[...Array(31)].map((_, i) => {
            const day = i + 1;

            let workloadClass = "";
            if (day % 3 === 0) workloadClass = "high";
            else if (day % 2 === 0) workloadClass = "medium";
            else workloadClass = "low";

            return (
              <div key={day} className={`calendar-day ${workloadClass}`}>
                {day}
              </div>
            );
          })}
        </div>

      </section>

      {/* API Placeholder */}
      <section className="calendar-api-placeholder">
        <h4>Google Calendar Integration (Coming Soon)</h4>
        <p>
          Future version will allow syncing assignments directly with your
          Google Calendar.
        </p>
      </section>

    </main>
  );
}