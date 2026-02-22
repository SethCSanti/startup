import React from "react";
import "../app.css";

export function About() {
  return (
    <main className="about-page">
      <div className="about-container">
        <h2>About LoadMap</h2>

        <p>
          LoadMap helps college students understand their real workload,
          not just a flat list of due dates. By weighting tasks and
          visualizing them across daily, weekly, and monthly views,
          students can see busy days and plan ahead.
        </p>

        <section>
          <h3>Key Ideas</h3>
          <ul>
            <li>Visual workload indicators show how heavy each day is.</li>
            <li>Daily, weekly, and monthly views make planning flexible.</li>
            <li>School, work, and personal tasks can all live in one place.</li>
          </ul>
        </section>

        <section>
          <h3>About the Developer</h3>
          <p>
            This application is built by a software engineering student
            who enjoys building tools around productivity and planning.
            LoadMap is inspired by the need to balance school, work,
            and personal time.
          </p>
        </section>
      </div>
    </main>
  );
}