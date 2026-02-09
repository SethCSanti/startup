import React from "react";

export function Tasks() {
  return (
    <>
      <p>
        Tasks will appear as interactive squares. Heavier tasks will be larger
        and shrink slightly each time you click them until they are complete.
      </p>

      <section id="task-filter-placeholder" className="placeholder">
        <h3>Filter (placeholder)</h3>
        <p>
          Future version will allow filtering tasks by category: School, Work,
          Personal.
        </p>

        <div className="d-flex gap-2 flex-wrap">
          <button type="button" className="btn btn-primary btn-sm">All</button>
          <button type="button" className="btn btn-outline-primary btn-sm">School</button>
          <button type="button" className="btn btn-outline-primary btn-sm">Work</button>
          <button type="button" className="btn btn-outline-primary btn-sm">Personal</button>
        </div>
      </section>

      <section aria-label="Task board" className="task-board-container">
        <div className="task-board">
          <div className="task-tile heavy">
            <h3>CS 313 Project</h3>
            <p>Weight: 5</p>
            <button type="button">Work on task (mock)</button>
          </div>

          <div className="task-tile medium">
            <h3>Math Homework</h3>
            <p>Weight: 3</p>
            <button type="button">Work on task (mock)</button>
          </div>

          <div className="task-tile light">
            <h3>Send Email</h3>
            <p>Weight: 1</p>
            <button type="button">Work on task (mock)</button>
          </div>

          <div className="task-tile heavy">
            <h3>Final Essay</h3>
            <p>Weight: 5</p>
            <button type="button">Work on task (mock)</button>
          </div>

          <div className="task-tile medium">
            <h3>Weekly Planning</h3>
            <p>Weight: 3</p>
            <button type="button">Work on task (mock)</button>
        </div>

        <div className="task-tile light">
            <h3>Clean Desk</h3>
            <p>Weight: 1</p>
            <button type="button">Work on task (mock)</button>
        </div>

        <div className="task-tile heavy">
            <h3>Group Presentation</h3>
            <p>Weight: 5</p>
            <button type="button">Work on task (mock)</button>
        </div>

        <div className="task-tile medium">
            <h3>Study for Quiz</h3>
            <p>Weight: 3</p>
            <button type="button">Work on task (mock)</button>
        </div>

        <div className="task-tile light">
            <h3>Reply to Messages</h3>
            <p>Weight: 1</p>
            <button type="button">Work on task (mock)</button>
        </div>

        <div className="task-tile heavy">
            <h3>Midterm Review</h3>
            <p>Weight: 5</p>
            <button type="button">Work on task (mock)</button>
        </div>

        <div className="task-tile medium">
            <h3>Refactor Code</h3>
            <p>Weight: 3</p>
            <button type="button">Work on task (mock)</button>
        </div>

        <div className="task-tile light">
            <h3>Backup Files</h3>
            <p>Weight: 1</p>
            <button type="button">Work on task (mock)</button>
        </div>

        <div className="task-tile heavy">
            <h3>Final Project Proposal</h3>
            <p>Weight: 5</p>
            <button type="button">Work on task (mock)</button>
        </div>

        <div className="task-tile medium">
            <h3>Practice Interview</h3>
            <p>Weight: 3</p>
            <button type="button">Work on task (mock)</button>
        </div>

        <div className="task-tile light">
            <h3>Water Plants</h3>
            <p>Weight: 1</p>
            <button type="button">Work on task (mock)</button>
        </div>

        <div className="task-tile heavy">
            <h3>Research Sources</h3>
            <p>Weight: 5</p>
            <button type="button">Work on task (mock)</button>
        </div>

        <div className="task-tile medium">
            <h3>Debug Assignment</h3>
            <p>Weight: 3</p>
            <button type="button">Work on task (mock)</button>
        </div>

        <div className="task-tile light">
            <h3>Update Calendar</h3>
            <p>Weight: 1</p>
            <button type="button">Work on task (mock)</button>
        </div>

        <div className="task-tile heavy">
            <h3>Capstone Planning</h3>
            <p>Weight: 5</p>
            <button type="button">Work on task (mock)</button>
        </div>

        <div className="task-tile medium">
            <h3>Write Documentation</h3>
            <p>Weight: 3</p>
            <button type="button">Work on task (mock)</button>
        </div>

        <div className="task-tile light">
            <h3>Stretch Break</h3>
            <p>Weight: 1</p>
            <button type="button">Work on task (mock)</button>
        </div>

        <div className="task-tile medium">
            <h3>Review Notes</h3>
            <p>Weight: 3</p>
            <button type="button">Work on task (mock)</button>
        </div>

        <div className="task-tile heavy">
            <h3>Final Exam Prep</h3>
            <p>Weight: 5</p>
            <button type="button">Work on task (mock)</button>
        </div>

          <div className="task-tile medium">
            <h3>Lab Report</h3>
            <p>Weight: 3</p>
            <button type="button">Work on task (mock)</button>
          </div>

          <div className="task-tile light">
            <h3>Check Emails</h3>
            <p>Weight: 1</p>
            <button type="button">Work on task (mock)</button>
          </div>
        </div>
      </section>

      <p>
        In a later deliverable, JavaScript will resize these tiles after each
        click to show progress toward completion.
      </p>
    </>
  );
}
