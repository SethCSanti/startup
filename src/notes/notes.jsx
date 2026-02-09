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
      <h3>Sample Notes (placeholder)</h3>

      <article class="note-card">
        <h4>CS 313 Project</h4>
        <p>Remember to break the project into smaller subtasks.</p>
      </article>

      <article class="note-card">
        <h4>Math Homework</h4>
        <p>Review lecture notes before starting problems 5–10.</p>
      </article>
    </section>
  </main>
  );
}