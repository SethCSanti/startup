import React from 'react';

export function Notes() {
  return (
    <main>
    <p>
      Notes in LoadMap will work like Google Keep and can be linked to specific tasks for extra context.
    </p>

  <section id="task-filter-placeholder" class="placeholder">
  <h3>Filter (placeholder)</h3>
  <p>Future version will allow filtering tasks by category: School, Work, Personal.</p>
  
  <div class="d-flex gap-2 flex-wrap">
    <button type="button" class="btn btn-primary btn-sm">All</button>
    <button type="button" class="btn btn-outline-primary btn-sm">School</button>
    <button type="button" class="btn btn-outline-primary btn-sm">Work</button>
    <button type="button" class="btn btn-outline-primary btn-sm">Personal</button>
  </div>
</section>

    <section aria-label="Create note" class="note-form">
      <label for="note-task">Related task (placeholder)</label>
      <select id="note-task">
        <option>CS 313 Project</option>
        <option>Math Homework</option>
        <option>Send Email</option>
      </select>

      <label for="note-text">Note text</label>
      <textarea id="note-text" rows="6" cols="60" placeholder="Write your note here..."></textarea>

      <button type="button">Save Note (mock)</button>
    </section>

    <section aria-label="Existing notes">

        <div className="note-stack">
          <div className="note-card">
            <div className="tab">CS 313 Project</div>
            <p>Outline ideas and organize tasks.</p>
          </div>
          <div className="note-card">
            <div className="tab">Math Homework</div>
            <p>Complete problems 1-20.</p>
          </div>
          <div className="note-card">
            <div className="tab">Send Email</div>
            <p>Follow up with instructor.</p>
          </div>
          <div className="note-card">
            <div className="tab">Final Essay</div>
            <p>Draft and revise essay.</p>
          </div>
          <div className="note-card">
            <div className="tab">Lab Report</div>
            <p>Document experiments.</p>
          </div>
          <div className="note-card">
            <div className="tab">Check Emails</div>
            <p>Respond to pending messages.</p>
          </div>
          <div className="note-card">
            <div className="tab">Group Project</div>
            <p>Coordinate with team.</p>
          </div>
        </div>

    </section>
  </main>
  );
}