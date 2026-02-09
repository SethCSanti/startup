import React from 'react';

export function Calendar() {
  return (
    <main>
    <p>
      This calendar highlights heavy days in red and lighter days in green so students can see stressful weeks at a glance.
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

    <section class="calendar-legend">
      <h3>Workload Legend</h3>
      <p><span class="legend-box low"></span> Low workload (green)</p>
      <p><span class="legend-box medium"></span> Medium workload (yellow)</p>
      <p><span class="legend-box high"></span> High workload (red)</p>
    </section>

    <section class="calendar-placeholder">
      <h3>Workload Calendar (placeholder)</h3>
      <p>Future version will display a full monthly calendar with colored days.</p>

      <div class="day-grid">
        <div class="day low">1</div>
        <div class="day medium">2</div>
        <div class="day high">3</div>
        <div class="day low">4</div>
        <div class="day medium">5</div>
        <div class="day high">6</div>
        <div class="day low">7</div>
      </div>
    </section>

    <section class="placeholder">
      <h3>3rd Party API [Google Calendar Integration] (placeholder)</h3>
      <p>
        Here we will embed a Google Calendar so users can sync assignments with their existing calendar.
      </p>
    </section>
  </main>
  );
}